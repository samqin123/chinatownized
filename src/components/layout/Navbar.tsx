import Link from "next/link";
import { categories } from "@/data/categories";

export default function Navbar() {
  const navCategories = [
    categories.find((cat) => cat.slug === "museums"),
    categories.find((cat) => cat.slug === "ancient-towns"),
    categories.find((cat) => cat.slug === "citywalks"),
    ...categories.filter(
      (cat) => !["museums", "ancient-towns", "citywalks"].includes(cat.slug)
    ),
  ].filter((cat): cat is NonNullable<typeof cat> => Boolean(cat));

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-divider)] bg-[var(--color-newsprint)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
        >
          CHARMING DESTINATIONS
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/guides/${cat.slug}`}
              className="px-2.5 py-1.5 text-[0.6875rem] font-medium tracking-wide text-[var(--color-ink-muted)] uppercase transition-colors hover:text-[var(--color-ink)]"
            >
              {cat.emoji} {cat.title}
            </Link>
          ))}
          <span className="mx-1 text-[var(--color-divider)]">|</span>
          <Link
            href="/tools"
            className="px-2.5 py-1.5 text-[0.6875rem] font-medium tracking-wide text-[var(--color-ink-muted)] uppercase transition-colors hover:text-[var(--color-ink)]"
          >
            🛠️ Tools
          </Link>
        </nav>

        {/* Mobile menu placeholder */}
        <button className="font-[family-name:var(--font-mono)] text-[0.625rem] tracking-widest text-[var(--color-ink-muted)] uppercase md:hidden">
          Sections ▾
        </button>
      </div>
    </header>
  );
}
