"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  isExternalUrl,
  setUserProperties,
  trackEngagedRead,
  trackExplicitLinkEvent,
  trackGuideView,
  trackOutboundClick,
  trackPageView,
} from "@/lib/analytics";

type Props = {
  enabled?: boolean;
};

const ENGAGED_THRESHOLD_MS = 45_000;
const INTEREST_STORE_KEY = "charming-destinations.interest-categories";

function getGuideRouteParts(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] !== "guides" || !parts[1] || !parts[2]) {
    return undefined;
  }
  return {
    category: parts[1],
    slug: parts[2],
  };
}

function getInterestCategory(pathname: string) {
  return getGuideRouteParts(pathname)?.category;
}

function getCategoryLabel(pathname: string) {
  const category = getInterestCategory(pathname);
  return category ? category.replaceAll("-", " ") : undefined;
}

function readInterestCategories() {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(INTEREST_STORE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeInterestCategories(categories: string[]) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(INTEREST_STORE_KEY, JSON.stringify(categories));
  } catch {
    // Ignore storage failures.
  }
}

function collectLinkMetadata(anchor: HTMLAnchorElement) {
  return {
    href: anchor.href,
    text: (anchor.textContent || anchor.getAttribute("title") || "").trim(),
    channel: anchor.getAttribute("data-analytics-channel") || undefined,
    partner: anchor.getAttribute("data-analytics-partner") || undefined,
    placement: anchor.getAttribute("data-analytics-placement") || undefined,
  };
}

export default function AnalyticsTracker({ enabled = true }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPathRef = useRef<string>("");

  useEffect(() => {
    if (!enabled) return;

    const search = searchParams.toString();
    const fullPath = `${pathname}${search ? `?${search}` : ""}`;
    if (currentPathRef.current === fullPath) return;
    currentPathRef.current = fullPath;

    trackPageView(pathname, search);

    const guideRoute = getGuideRouteParts(pathname);
    if (guideRoute) {
      trackGuideView(guideRoute.category, guideRoute.slug, pathname);
    }
  }, [enabled, pathname, searchParams]);

  useEffect(() => {
    if (!enabled) return;

    const category = getInterestCategory(pathname);
    const guideRoute = getGuideRouteParts(pathname);
    if (!category || !guideRoute) return;

    let activeMs = 0;
    let startedAt = document.visibilityState === "visible" ? performance.now() : 0;
    let done = false;
    let timer: number | undefined;

    const applyProfile = () => {
      if (done) return;
      done = true;

      const current = new Set(readInterestCategories());
      current.add(category);
      const merged = Array.from(current).sort();
      writeInterestCategories(merged);

      setUserProperties({
        visitor_type: "engaged_reader",
        interest_categories: merged.join(","),
        latest_interest_category: getCategoryLabel(pathname),
        dwell_bucket: "45s_plus",
      });

      trackEngagedRead(category, pathname, ENGAGED_THRESHOLD_MS);
    };

    const schedule = () => {
      if (done) return;
      const remaining = Math.max(ENGAGED_THRESHOLD_MS - activeMs, 0);
      if (remaining === 0) {
        applyProfile();
        return;
      }
      window.clearTimeout(timer);
      timer = window.setTimeout(applyProfile, remaining);
    };

    const onVisibilityChange = () => {
      if (done) return;
      if (document.visibilityState === "visible") {
        startedAt = performance.now();
        schedule();
      } else if (startedAt > 0) {
        activeMs += performance.now() - startedAt;
        startedAt = 0;
        window.clearTimeout(timer);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    schedule();

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.clearTimeout(timer);
      if (!done && startedAt > 0) {
        activeMs += performance.now() - startedAt;
      }
    };
  }, [enabled, pathname]);

  useEffect(() => {
    if (!enabled) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;

      const metadata = collectLinkMetadata(anchor);
      const explicitEvent = anchor.getAttribute("data-analytics-event");
      if (explicitEvent) {
        trackExplicitLinkEvent(explicitEvent, metadata.href, metadata.text, metadata);
        return;
      }

      if (isExternalUrl(href)) {
        trackOutboundClick(metadata.href, metadata.text);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [enabled]);

  return null;
}
