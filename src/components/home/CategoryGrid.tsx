import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  const orderedCategories = [
    categories.find((cat) => cat.slug === "museums"),
    categories.find((cat) => cat.slug === "ancient-towns"),
    categories.find((cat) => cat.slug === "citywalks"),
    ...categories.filter(
      (cat) => !["museums", "ancient-towns", "citywalks"].includes(cat.slug)
    ),
  ].filter((cat): cat is NonNullable<typeof cat> => Boolean(cat));

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="ornament-divider mb-8">EXPLORE BY THEME</div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        {orderedCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/guides/${cat.slug}`}
            className="card-clip group flex flex-col items-center gap-3 p-6 text-center transition-all hover:-translate-y-0.5"
          >
            <span className="text-3xl">{cat.emoji}</span>
            <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-primary)]">
              {cat.title}
            </h3>
            <p className="text-[0.6875rem] text-[var(--color-ink-muted)] leading-relaxed line-clamp-2">
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
