"use client";

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;
export type UserProperties = Record<string, string | undefined>;

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

function ensureGtagFallback() {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtagStub(...args: unknown[]) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(args);
    };
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  ensureGtagFallback();
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("event", eventName, params);
}

export function setUserProperties(properties: UserProperties) {
  if (typeof window === "undefined") return;
  ensureGtagFallback();
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("set", "user_properties", properties);
}

export function isExternalUrl(href: string) {
  if (typeof window === "undefined") return false;

  try {
    const url = new URL(href, window.location.href);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return false;
    }
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

export function trackPageView(pathname: string, search = "") {
  trackEvent("page_view", {
    page_path: `${pathname}${search ? `?${search}` : ""}`,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackGuideView(category: string, slug: string, pathname: string) {
  trackEvent("guide_view", {
    content_category: category,
    content_slug: slug,
    page_path: pathname,
  });
}

export function trackEngagedRead(category: string, pathname: string, dwellMs: number) {
  trackEvent("engaged_read", {
    content_category: category,
    page_path: pathname,
    dwell_ms: dwellMs,
  });
}

export function trackOutboundClick(href: string, text: string) {
  trackEvent("outbound_click", {
    link_url: href,
    link_text: text,
  });
}

export function trackExplicitLinkEvent(
  eventName: string,
  href: string,
  text: string,
  metadata: { channel?: string; partner?: string; placement?: string } = {},
) {
  trackEvent(eventName, {
    link_url: href,
    link_text: text,
    channel: metadata.channel,
    partner: metadata.partner,
    placement: metadata.placement,
  });
}
