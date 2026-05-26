import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedCard from "@/components/home/FeaturedCard";
import { getCategory, categories } from "@/data/categories";
import { getGuidesByCategory } from "@/data/guides";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  return { title: cat.title, description: cat.description };
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
      <main className="mx-auto max-w-6xl px-4 py-12">
        <p className="dateline mb-1">CHARMING DESTINATIONS &raquo; {cat.title.toUpperCase()}</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          {cat.emoji} {cat.title}
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-ink-muted)]">{cat.description}</p>
        <hr className="section-divider my-8" />
        {guides.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <FeaturedCard key={g.slug} guide={g} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center italic text-[var(--color-ink-muted)]">
            No dispatches filed yet. Check back soon.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
