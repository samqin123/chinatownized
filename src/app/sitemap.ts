import type { MetadataRoute } from "next";

import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { getSiteRoutes, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = getSiteRoutes().filter(
    (route) => !route.startsWith("/guides/"),
  );

  const staticEntries = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${SITE_URL}/guides/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guideEntries = guides.map((guide) => ({
    url: `${SITE_URL}/guides/${guide.category}/${guide.slug}`,
    lastModified: new Date(`${(guide.updatedAt || guide.publishedAt)}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: guide.featured ? 0.9 : 0.7,
  }));

  return [...staticEntries, ...categoryEntries, ...guideEntries];
}
