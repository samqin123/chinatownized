import type { CategorySlug } from "@/types";
import { getPartnerWindows } from "@/data/partner-windows";

type Props = {
  category: CategorySlug;
  variant?: "sidebar" | "grid";
};

function PartnerCard({
  title,
  partner,
  description,
  url,
  image,
  badge,
  compact = false,
}: {
  title: string;
  partner: string;
  description: string;
  url: string;
  image: string;
  badge: string;
  compact?: boolean;
}) {
  return (
    <a
    href={url}
    target="_blank"
    rel="nofollow sponsored noopener noreferrer"
    data-analytics-event="affiliate_click"
    data-analytics-partner={partner}
    data-analytics-placement={compact ? "sidebar" : "grid"}
    className={`group block overflow-hidden border border-[var(--color-divider)] bg-[var(--color-parchment)] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-primary-light)] ${
      compact ? "card-soft" : "card-clip"
    }`}
    >
      <div className={`flex ${compact ? "gap-3 p-3" : "gap-4 p-4"}`}>
        <div className={`shrink-0 overflow-hidden border border-[var(--color-divider)] bg-white ${compact ? "h-16 w-16" : "h-20 w-20"}`}>
          <img src={image} alt={`${partner} logo`} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-faint)]">
              {badge}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
              Sponsored
            </span>
          </div>
          <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold leading-snug text-[var(--color-ink)]">
            {title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-[var(--color-ink-muted)]">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function ClassifiedsSidebar({ category, variant = "sidebar" }: Props) {
  const windows = getPartnerWindows(category);

  if (variant === "grid") {
    return (
      <section className="card-clip border border-[var(--color-divider)] bg-[var(--color-newsprint)] p-5">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-faint)]">
              Partner Windows
            </p>
            <h2 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-ink)]">
              Plan, book, and move on
            </h2>
          </div>
          <p className="max-w-sm text-right text-xs leading-relaxed text-[var(--color-ink-muted)]">
            Travel partners for flights, hotels, tickets, and food checks.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {windows.map((window) => (
            <PartnerCard key={window.id} {...window} compact={false} />
          ))}
        </div>
        <p className="mt-3 text-[10px] leading-relaxed text-[var(--color-ink-faint)]">
          Affiliate links may earn us a commission at no extra cost to you.
        </p>
      </section>
    );
  }

  return (
    <div className="space-y-5">
      <div className="classifieds-box">
        <p className="classifieds-title">TRAVEL PARTNERS</p>
        <div className="space-y-3 p-3">
          {windows.slice(0, 3).map((window) => (
            <PartnerCard key={window.id} {...window} compact />
          ))}
        </div>
      </div>

      <div className="classifieds-box">
        <p className="classifieds-title">BOOKING WINDOWS</p>
        <div className="space-y-3 p-3">
          {windows.slice(3, 6).map((window) => (
            <PartnerCard key={window.id} {...window} compact />
          ))}
        </div>
      </div>

      <div className="classifieds-box">
        <p className="classifieds-title">ADVERTISEMENT</p>
        <div className="flex h-[250px] items-center justify-center bg-newsprint-deep p-4">
          <p className="font-mono text-[10px] tracking-widest text-ink-faint uppercase">
            Ad Unit &middot; 300x250
          </p>
        </div>
      </div>
    </div>
  );
}
