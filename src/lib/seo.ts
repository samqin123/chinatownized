import type { Guide } from "@/types";

export function generateArticleSchema(guide: Guide, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    image: guide.image,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt || guide.publishedAt,
    author: { "@type": "Person", name: guide.author.name },
    publisher: { "@type": "Organization", name: "Charming Destinations", url: "https://chinatownized.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
