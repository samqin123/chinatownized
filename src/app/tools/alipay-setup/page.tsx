import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AlipaySetupPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="dateline mb-1">CHINATOWNIZED &raquo; TOOLS</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Alipay Setup
        </h1>
        <p className="mt-3 text-[var(--color-ink-muted)]">
          Placeholder setup guide for foreign travelers.
        </p>
      </main>
      <Footer />
    </>
  );
}
