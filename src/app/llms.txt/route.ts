import { categories } from "@/data/categories";
import { getFeaturedGuides } from "@/data/guides";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export function GET() {
  const featured = getFeaturedGuides();
  const categoryLines = categories
    .map((category) => `- ${category.title}: ${SITE_URL}/guides/${category.slug}`)
    .join("\n");
  const featuredLines = featured
    .map((guide) => `- ${guide.title}: ${SITE_URL}/guides/${guide.category}/${guide.slug}`)
    .join("\n");

  const body = [
    SITE_NAME,
    SITE_URL,
    "",
    SITE_DESCRIPTION,
    "",
    "Primary topics:",
    categoryLines,
    "",
    "Featured dispatches:",
    featuredLines,
    "",
    "Important pages:",
    `- Home: ${SITE_URL}/`,
    `- LLM Hub: ${SITE_URL}/llm-hub`,
    `- About: ${SITE_URL}/about`,
    `- Privacy: ${SITE_URL}/privacy`,
    `- Sitemap: ${SITE_URL}/sitemap.xml`,
    `- Robots: ${SITE_URL}/robots.txt`,
    "",
    "Editorial note:",
    "This site publishes practical China travel dispatches with route logic, museum planning, and neighborhood-level guidance for foreign visitors.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}

