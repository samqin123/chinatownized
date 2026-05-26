"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { isExternalUrl, trackEvent } from "@/lib/analytics";

type Props = {
  measurementId?: string;
};

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
