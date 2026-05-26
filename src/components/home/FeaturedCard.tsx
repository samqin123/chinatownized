import Link from "next/link";
import type { Guide } from "@/types";

interface FeaturedCardProps { guide: Guide; }

export default function FeaturedCard({ guide }: FeaturedCardProps) {
  return (
    <Link href={`/guides/${guide.category}/${guide.slug}`} className="group block">
      <article className="card-clip h-full p-5">
        <div className="mb-4 aspect-[4/3] overflow-hidden border border-[var(--color-divider)] bg-[var(--color-newsprint-dark)]">
          <img
            src={guide.image}
            alt={guide.imageAlt}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <span className="tag-pill">{guide.category.replace("-", " ")}</span>
        <h3 className="mt-2 font-[family-name:var(--font-heading)] text-base font-bold leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-primary)] line-clamp-3">
          {guide.title}
        </h3>
        <p className="mt-1.5 text-[0.8125rem] text-[var(--color-ink-muted)] leading-relaxed line-clamp-2">
          {guide.excerpt}
        </p>
        <p className="mt-3 text-[0.6875rem] text-[var(--color-ink-faint)]">
          By {guide.author.name} · {guide.readTime} min
        </p>
      </article>
    </Link>
  );
}
