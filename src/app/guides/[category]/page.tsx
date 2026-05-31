import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedCard from "@/components/home/FeaturedCard";
import ClassifiedsSidebar from "@/components/ad/ClassifiedsSidebar";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getCategory, categories } from "@/data/categories";
import { getGuidesByCategory } from "@/data/guides";
import { generateCollectionPageSchema } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import type { CategorySlug } from "@/types";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
    alternates: {
      canonical: `${SITE_URL}/guides/${cat.slug}`,
    },
    openGraph: {
      title: cat.title,
      description: cat.description,
      url: `${SITE_URL}/guides/${cat.slug}`,
      type: "website",
      images: ["/og-default.jpg"],
    },
  };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();
  const guides = getGuidesByCategory(category);

  return (
    <>
      <Navbar />
      <SeoJsonLd
        jsonLd={generateCollectionPageSchema(
          cat.title,
          `${SITE_URL}/guides/${cat.slug}`,
          cat.description,
        )}
      />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <p className="dateline mb-1">CHARMING DESTINATIONS &raquo; {cat.title.toUpperCase()}</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          {cat.emoji} {cat.title}
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-ink-muted)]">{cat.description}</p>
        <hr className="section-divider my-8" />
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <section>
            {guides.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {guides.map((g) => (
                  <FeaturedCard key={g.slug} guide={g} />
                ))}
              </div>
            ) : (
              <p className="py-16 text-center italic text-[var(--color-ink-muted)]">
                No dispatches filed yet. Check back soon.
              </p>
            )}
          </section>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <ClassifiedsSidebar category={category as CategorySlug} />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
