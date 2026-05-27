import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/article/FaqSection";
import ClassifiedsSidebar from "@/components/ad/ClassifiedsSidebar";
import { guides, getGuide } from "@/data/guides";
import { getCategory } from "@/data/categories";

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: { images: [guide.image] },
  };
}

export async function generateStaticParams() {
  return guides.map((guide) => ({ category: guide.category, slug: guide.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const categoryData = getCategory(category);
  const publishedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${guide.publishedAt}T00:00:00Z`));

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <p className="dateline mb-4 text-xs">
          <a href="/" className="hover:text-[var(--color-ink)]">
            Charming Destinations
          </a>{" "}
          &raquo;{" "}
          <a href={`/guides/${category}`} className="hover:text-[var(--color-ink)]">
            {categoryData?.title || category}
          </a>
        </p>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article>
            <div className="relative mb-8 aspect-video overflow-hidden border border-[var(--color-divider)] bg-[var(--color-newsprint-deep)]">
              <img
                src={guide.image}
                alt={guide.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <p className="dateline mb-2">{guide.dateline}, China</p>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-black leading-tight text-[var(--color-ink)] md:text-4xl text-balance">
              {guide.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 border-b border-[var(--color-divider)] pb-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--color-divider)] bg-[var(--color-newsprint-dark)] font-[family-name:var(--font-heading)] text-xs font-bold text-[var(--color-primary)]">
                  {guide.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ink)]">{guide.author.name}</p>
                  <p className="text-xs text-[var(--color-ink-faint)]">
                    {publishedDate}
                    {guide.readTime ? <> &middot; {guide.readTime} min read</> : null}
                  </p>
                </div>
              </div>
            </div>

            <div className="article-body pt-6">
              <div className="mb-8 border border-[var(--color-divider)] bg-[var(--color-newsprint-deep)] p-6">
                <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
                  Editor&apos;s Note
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  This dispatch was filed from the road. Always double-check official sources before traveling.
                </p>
              </div>

              {guide.tags && guide.tags.length > 0 ? (
                <div className="mb-6 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              {guide.body ? (
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: guide.body }}
                />
              ) : (
                <p className="mb-4 italic text-[var(--color-ink-muted)]">
                  Full article content coming soon. This is a placeholder for the complete guide.
                </p>
              )}

              {guide.faq && guide.faq.length > 0 ? <FaqSection faqs={guide.faq} /> : null}

              <hr className="section-divider my-8" />

              <div className="flex items-start gap-4 border border-[var(--color-divider)] bg-[var(--color-parchment)] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--color-divider)] bg-[var(--color-newsprint-dark)] font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-primary)]">
                  {guide.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-ink-faint)]">
                    About the Author
                  </p>
                  <p className="mt-1 text-sm font-bold text-[var(--color-ink)]">{guide.author.name}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">{guide.author.bio}</p>
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <ClassifiedsSidebar category={categoryData?.slug || "museums"} />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
