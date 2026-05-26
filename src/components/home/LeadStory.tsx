import Link from "next/link";
import type { Guide } from "@/types";

interface LeadStoryProps { guide: Guide; }

export default function LeadStory({ guide }: LeadStoryProps) {
  return (
    <Link href={`/guides/${guide.category}/${guide.slug}`} className="group block">
      <article className="overflow-hidden card-clip">
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-newsprint-deep)]">
          <img
            src={guide.image}
            alt={guide.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
        </div>
        <div className="p-6 md:p-8">
          <p className="dateline mb-2">{guide.dateline}, China —</p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold leading-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-primary)] md:text-3xl text-balance">
            {guide.title}
          </h2>
          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed line-clamp-2">
            {guide.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-ink-faint)]">
            <span>By {guide.author.name}</span>
            <span className="text-[var(--color-divider)]">·</span>
            <span>{guide.readTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
