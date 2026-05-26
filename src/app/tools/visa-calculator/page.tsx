import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VisaCalculatorClient from "@/components/tools/VisaCalculatorClient";

export default function VisaCalculatorPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="dateline mb-1">CHARMING DESTINATIONS &raquo; TOOLS</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Visa Calculator
        </h1>
        <p className="mt-3 text-[var(--color-ink-muted)]">
          Live policy-backed calculator using official National Immigration Administration
          and MFA guidance.
        </p>
        <div className="mt-8">
          <VisaCalculatorClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
