import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-divider)] bg-[var(--color-newsprint-deep)]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 text-center">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary)]">
            CHARMING DESTINATIONS
          </h3>
          <p className="mt-1 font-[family-name:var(--font-mono)] text-[0.625rem] tracking-[0.2em] text-[var(--color-ink-muted)] uppercase">
            China travel magazine
          </p>
        </div>
        <hr className="section-divider mb-8" />
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-3 font-[family-name:var(--font-mono)] text-[0.625rem] tracking-widest text-[var(--color-ink-muted)] uppercase">Dispatches</h4>
            <ul className="space-y-2 text-sm text-[var(--color-ink-muted)]">
              <li><Link href="/guides/museums" className="hover:text-[var(--color-ink)]">Museums</Link></li>
              <li><Link href="/guides/ancient-towns" className="hover:text-[var(--color-ink)]">Ancient Towns</Link></li>
              <li><Link href="/guides/citywalks" className="hover:text-[var(--color-ink)]">Citywalks</Link></li>
              <li><Link href="/guides/village-vibes" className="hover:text-[var(--color-ink)]">Village Vibes</Link></li>
              <li><Link href="/guides/hanfu-diaries" className="hover:text-[var(--color-ink)]">Hanfu Diaries</Link></li>
              <li><Link href="/guides/cyberpunk-cities" className="hover:text-[var(--color-ink)]">Cyberpunk Cities</Link></li>
              <li><Link href="/guides/china-spa" className="hover:text-[var(--color-ink)]">China Spa</Link></li>
              <li><Link href="/guides/hidden-nature" className="hover:text-[var(--color-ink)]">Hidden Nature</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-[family-name:var(--font-mono)] text-[0.625rem] tracking-widest text-[var(--color-ink-muted)] uppercase">Tools</h4>
            <ul className="space-y-2 text-sm text-[var(--color-ink-muted)]">
              <li><Link href="/tools/visa-calculator" className="hover:text-[var(--color-ink)]">Visa Calculator</Link></li>
              <li><Link href="/tools/hsr-guide" className="hover:text-[var(--color-ink)]">HSR Guide</Link></li>
              <li><Link href="/tools/alipay-setup" className="hover:text-[var(--color-ink)]">Alipay Setup</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-[family-name:var(--font-mono)] text-[0.625rem] tracking-widest text-[var(--color-ink-muted)] uppercase">The Gazette</h4>
            <ul className="space-y-2 text-sm text-[var(--color-ink-muted)]">
              <li><Link href="/about" className="hover:text-[var(--color-ink)]">About</Link></li>
              <li><Link href="/llm-hub" className="hover:text-[var(--color-ink)]">LLM Hub</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-[var(--color-ink)]">Affiliate Disclosure</Link></li>
              <li><Link href="/privacy" className="hover:text-[var(--color-ink)]">Privacy</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-ink)]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-[family-name:var(--font-mono)] text-[0.625rem] tracking-widest text-[var(--color-ink-muted)] uppercase">Subscribe</h4>
            <p className="mb-3 text-sm text-[var(--color-ink-muted)]">
              A weekly dispatch from the road. No spam, just stories.
            </p>
            <div className="flex gap-1">
              <input type="email" placeholder="your@email.com"
                className="flex-1 border border-[var(--color-divider)] bg-[var(--color-parchment)] px-3 py-2 text-xs text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none focus:border-[var(--color-primary)]" />
              <button type="button"
                className="border border-[var(--color-primary)] bg-[var(--color-primary)] px-4 py-2 font-[family-name:var(--font-mono)] text-[0.625rem] font-medium tracking-widest text-white uppercase transition-colors hover:bg-[var(--color-primary-dark)]">
                Send
              </button>
            </div>
          </div>
        </div>
        <hr className="section-divider mt-8 mb-6" />
        <p className="text-center font-[family-name:var(--font-mono)] text-[0.625rem] tracking-wider text-[var(--color-ink-faint)]">
          &copy; 2026 Charming Destinations &mdash; All dispatches filed from the road. Somewhere in China.
        </p>
        <p className="mt-1 text-center text-[0.5625rem] text-[var(--color-ink-faint)]">
          This site contains affiliate links. We may earn a commission at no extra cost to you.
        </p>
      </div>
    </footer>
  );
}
