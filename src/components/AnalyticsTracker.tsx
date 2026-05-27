"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { isExternalUrl, setUserProperties, trackEvent } from "@/lib/analytics";

type Props = {
  measurementId?: string;
};

const ENGAGED_THRESHOLD_MS = 45_000;
const INTEREST_STORE_KEY = "charming-destinations.interest-categories";

function getInterestCategory(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] !== "guides") return undefined;
  return parts[1];
}

function getCategoryLabel(pathname: string) {
  const category = getInterestCategory(pathname);
  if (!category) return undefined;
  return category.replaceAll("-", " ");
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

export default function AnalyticsTracker({ measurementId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId) return;
    trackEvent("page_view", {
      page_path: `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`,
      page_location: window.location.href,
      page_title: document.title,
    });

    const parts = pathname.split("/").filter(Boolean);
    if (parts[0] === "guides" && parts[1] && parts[2]) {
      trackEvent("guide_view", {
        content_category: parts[1],
        content_slug: parts[2],
        page_path: pathname,
      });
    }
  }, [measurementId, pathname, searchParams]);

  useEffect(() => {
    if (!measurementId) return;

    const category = getInterestCategory(pathname);
    if (!category) return;

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

      trackEvent("engaged_read", {
        content_category: category,
        page_path: pathname,
        dwell_ms: ENGAGED_THRESHOLD_MS,
      });
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
  }, [measurementId, pathname]);

  useEffect(() => {
    if (!measurementId) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;

      const explicitEvent = anchor.getAttribute("data-analytics-event");
      if (explicitEvent) {
        trackEvent(explicitEvent, {
          link_url: href,
          link_text: (anchor.textContent || anchor.getAttribute("title") || "").trim(),
          channel: anchor.getAttribute("data-analytics-channel") || undefined,
        });
        return;
      }

      if (isExternalUrl(href)) {
        trackEvent("outbound_click", {
          link_url: href,
          link_text: (anchor.textContent || anchor.getAttribute("title") || "").trim(),
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [measurementId]);

  return null;
}
