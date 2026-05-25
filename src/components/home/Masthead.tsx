export default function Masthead() {
  return (
    <div className="mx-auto max-w-4xl py-16 text-center">
      <div className="ornament-divider mb-6">ESTABLISHED 2026</div>
      <h1 className="font-[family-name:var(--font-heading)] text-5xl font-black tracking-tight text-[var(--color-primary)] md:text-7xl">
        CHINATOWNIZED
      </h1>
      <p className="mt-4 font-[family-name:var(--font-mono)] text-[0.6875rem] tracking-[0.25em] text-[var(--color-ink-muted)] uppercase">
        The Travel Gazette for the Curious Foreigner
      </p>
      <hr className="section-divider-double my-6" />
      <p className="mx-auto max-w-lg font-[family-name:var(--font-heading)] text-lg italic leading-relaxed text-[var(--color-ink-muted)]">
        &ldquo;Don&rsquo;t visit China. Get Chinatownized.&rdquo;
      </p>
      <p className="mt-2 text-sm text-[var(--color-ink-faint)]">
        Vol. I &middot; Dispatches from the road, somewhere in China
      </p>
    </div>
  );
}
