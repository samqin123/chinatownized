// ===== Chinatownized Type Definitions =====

export type CategorySlug =
  | "village-vibes"
  | "hanfu-diaries"
  | "cyberpunk-cities"
  | "china-spa"
  | "hidden-nature";

export type ToolSlug =
  | "visa-calculator"
  | "hsr-guide"
  | "alipay-setup"
  | "itinerary-builder";

export interface Category {
  slug: CategorySlug;
  title: string;
  description: string;
  emoji: string;
  color: string; // tailwind bg class
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  dateline: string; // e.g. "GUIZHOU, China"
  category: CategorySlug;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  imageAlt: string;
  readTime: number; // minutes
  featured?: boolean;
  tags: string[];
  body: string; // MDX or HTML
  faq?: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface AffiliateLink {
  label: string;
  url: string;
  partner: string;
  image?: string;
  description: string;
}

export interface ClassifiedAd {
  type: "affiliate" | "adsense";
  title?: string;
  content?: AffiliateLink;
}
