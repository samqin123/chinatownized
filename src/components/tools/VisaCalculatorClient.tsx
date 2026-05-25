"use client";

import { useMemo, useState } from "react";
import {
  getVisaAdvice,
  transitEligibleCountries,
  unilateralVisaFreeCountries,
  type VisaPurpose,
} from "@/data/visa-policy";

const purposes: { value: VisaPurpose; label: string }[] = [
  { value: "tourism", label: "Tourism" },
  { value: "business", label: "Business" },
  { value: "family", label: "Family / Friends" },
  { value: "exchange", label: "Exchange Visit" },
  { value: "transit", label: "Transit" },
  { value: "work", label: "Work" },
  { value: "study", label: "Study" },
  { value: "news", label: "News Reporting" },
];

type ResultState = "eligible" | "limited" | "warn" | "visa" | "missing";

export default function VisaCalculatorClient() {
  const [nationality, setNationality] = useState("United States");
  const [purpose, setPurpose] = useState<VisaPurpose>("tourism");
  const [stayDays, setStayDays] = useState(10);
  const [transitMode, setTransitMode] = useState(false);

  const result = useMemo(
    () => getVisaAdvice({ nationality, purpose, stayDays, transitMode }),
    [nationality, purpose, stayDays, transitMode],
  );

  const statusClasses: Record<ResultState, string> = {
    eligible: "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
    limited: "border-[var(--color-secondary)] bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
    warn: "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    visa: "border-[var(--color-primary-dark)] bg-[var(--color-primary-dark)]/10 text-[var(--color-primary-dark)]",
    missing: "border-[var(--color-divider)] bg-[var(--color-newsprint-deep)] text-[var(--color-ink-muted)]",
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="card-clip p-6">
        <p className="font-[family-name:var(--font-mono)] text-[0.625rem] tracking-[0.2em] text-[var(--color-ink-faint)] uppercase">
          Policy input
        </p>

        <div className="mt-4 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-[var(--color-ink)]">Nationality</span>
            <input
              list="nationalities"
              value={nationality}
              onChange={(event) => setNationality(event.target.value)}
              className="border border-[var(--color-divider)] bg-[var(--color-parchment)] px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              placeholder="Type or choose a country"
            />
            <datalist id="nationalities">
              {[...new Set([...unilateralVisaFreeCountries, ...transitEligibleCountries])].sort().map((country) => (
                <option key={country} value={country} />
              ))}
            </datalist>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-[var(--color-ink)]">Purpose</span>
            <select
              value={purpose}
              onChange={(event) => setPurpose(event.target.value as VisaPurpose)}
              className="border border-[var(--color-divider)] bg-[var(--color-parchment)] px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
            >
              {purposes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-[var(--color-ink)]">Planned stay days</span>
            <input
              type="number"
              min={1}
              max={60}
              value={stayDays}
              onChange={(event) => setStayDays(Number(event.target.value || 0))}
              className="border border-[var(--color-divider)] bg-[var(--color-parchment)] px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
            />
          </label>

          <label className="flex items-center gap-3 rounded-none border border-[var(--color-divider)] bg-[var(--color-parchment)] px-4 py-3">
            <input
              type="checkbox"
              checked={transitMode}
              onChange={(event) => setTransitMode(event.target.checked)}
              className="h-4 w-4 accent-[var(--color-primary)]"
            />
            <span className="text-sm text-[var(--color-ink)]">Transit trip via China</span>
          </label>
        </div>
      </section>

      <aside className="card-clip p-6">
        <p className="font-[family-name:var(--font-mono)] text-[0.625rem] tracking-[0.2em] text-[var(--color-ink-faint)] uppercase">
          Result
        </p>

        <div className={`mt-4 border p-4 ${statusClasses[result.status as ResultState]}`}>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
            {result.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed">{result.description}</p>
        </div>

        <div className="mt-6">
          <p className="font-[family-name:var(--font-mono)] text-[0.625rem] tracking-[0.2em] text-[var(--color-ink-faint)] uppercase">
            What this means
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            {result.bullets.map((bullet) => (
              <li key={bullet} className="border-b border-[var(--color-divider)] pb-2 last:border-b-0 last:pb-0">
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="font-[family-name:var(--font-mono)] text-[0.625rem] tracking-[0.2em] text-[var(--color-ink-faint)] uppercase">
            Official sources
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {result.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-primary)] underline decoration-[var(--color-divider)] underline-offset-4 hover:text-[var(--color-primary-dark)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
