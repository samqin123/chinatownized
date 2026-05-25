import Link from "next/link";
import type { Guide } from "@/types";

interface SidebarDispatchProps { guide: Guide; }

export default function SidebarDispatch({ guide }: SidebarDispatchProps) {
  return (
    <Link
      href={`/guides/${guide.category}/${guide.slug}`}
      className="group block border-b border-[var(--color-divider)] py-4 first:pt-0 last:border-b-0 last:pb-0"
    >
      <p className="dateline text-[0.625rem]">{guide.dateline}</p>
      <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-primary)]">
        {guide.title}
      </h3>
      <p className="mt-1 text-[0.6875rem] text-[var(--color-ink-faint)]">
        {guide.readTime} min read
      </p>
    </Link>
  );
}
