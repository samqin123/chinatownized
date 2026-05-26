import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="dateline mb-1">CHARMING DESTINATIONS &raquo; AFFILIATE DISCLOSURE</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Affiliate Disclosure
        </h1>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          Some pages on Charming Destinations may contain affiliate links. If you click a link and
          make a purchase or booking, we may earn a commission at no additional cost to you.
        </p>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          We only link to products, services, or booking tools that we believe are relevant to the
          trip-planning needs of our readers. Affiliate relationships do not control our editorial
          judgment, and we aim to keep recommendations practical and clearly labeled.
        </p>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          If a page contains sponsored or commercial content, we will make that as clear as
          possible in the page copy or context.
        </p>
      </main>
      <Footer />
    </>
  );
}
