import { categories } from "@/data/categories";
import { guides } from "@/data/guides";

export const SITE_NAME = "Charming Destinations";
export const SITE_URL = "https://chinatownized.com";
export const SITE_DESCRIPTION =
  "A China-focused travel magazine with museums, citywalks, ancient towns, and practical guides for curious visitors.";

export function getSiteRoutes() {
  const staticRoutes = [
    "/",
    "/about",
    "/affiliate-disclosure",
    "/contact",
    "/llm-hub",
    "/llms.txt",
    "/privacy",
    "/tools",
    "/tools/alipay-setup",
    "/tools/hsr-guide",
    "/tools/itinerary-builder",
    "/tools/visa-calculator",
  ];

  const categoryRoutes = categories.map((category) => `/guides/${category.slug}`);
  const guideRoutes = guides.map((guide) => `/guides/${guide.category}/${guide.slug}`);

  return [...staticRoutes, ...categoryRoutes, ...guideRoutes];
}
