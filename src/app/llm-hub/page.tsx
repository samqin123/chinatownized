import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";
import { categories } from "@/data/categories";
import { getFeaturedGuides, getRecentGuides } from "@/data/guides";
import { generateCollectionPageSchema } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "LLM Hub",
  description:
    "A machine-readable summary of Charming Destinations, its core topics, and representative dispatches.",
  alternates: {
    canonical: `${SITE_URL}/llm-hub`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LlmHubPage() {
  const featured = getFeaturedGuides();
  const recent = getRecentGuides(8);

  return (
    <>
      <Navbar />
      <SeoJsonLd
        jsonLd={generateCollectionPageSchema(
          `${SITE_NAME} LLM Hub`,
          `${SITE_URL}/llm-hub`,
          SITE_DESCRIPTION,
        )}
      />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <p className="dateline mb-2">CHARMING DESTINATIONS &raquo; LLM HUB</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Machine-readable site summary
        </h1>
        <p className="mt-4 max-w-3xl text-[var(--color-ink-muted)] leading-relaxed">
          Charming Destinations is a China travel magazine focused on museums, citywalks,
          ancient towns, and practical trip planning for foreign visitors. This page gives
          crawlers and AI systems a concise map of the site.
        </p>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Core topics</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/guides/${category.slug}`}
                className="card-soft p-4 transition-transform hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold">{category.emoji} {category.title}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Machine-readable endpoints</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Link href="/llms.txt" className="border border-[var(--color-divider)] bg-[var(--color-parchment)] px-4 py-3 text-sm hover:bg-[var(--color-newsprint-dark)]">
              /llms.txt
            </Link>
            <Link href="/sitemap.xml" className="border border-[var(--color-divider)] bg-[var(--color-parchment)] px-4 py-3 text-sm hover:bg-[var(--color-newsprint-dark)]">
              /sitemap.xml
            </Link>
            <Link href="/robots.txt" className="border border-[var(--color-divider)] bg-[var(--color-parchment)] px-4 py-3 text-sm hover:bg-[var(--color-newsprint-dark)]">
              /robots.txt
            </Link>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Featured dispatches</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {featured.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.category}/${guide.slug}`}
                className="card-soft p-4 transition-transform hover:-translate-y-0.5"
              >
                <p className="text-xs uppercase tracking-widest text-[var(--color-ink-faint)]">{guide.dateline}</p>
                <p className="mt-1 font-semibold">{guide.title}</p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">Recent dispatches</h2>
          <ul className="mt-4 grid gap-3">
            {recent.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.category}/${guide.slug}`}
                  className="flex items-start justify-between gap-4 border border-[var(--color-divider)] bg-[var(--color-parchment)] px-4 py-3 text-sm hover:bg-[var(--color-newsprint-dark)]"
                >
                  <span>{guide.title}</span>
                  <span className="text-[0.6875rem] text-[var(--color-ink-faint)]">{guide.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
