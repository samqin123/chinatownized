import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="dateline mb-1">CHARMING DESTINATIONS &raquo; CONTACT</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          For editorial suggestions, partnership ideas, corrections, or museum and citywalk
          tips, you can reach the team at:
        </p>
        <p className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-primary)]">
          hello@charmingdestinations.com
        </p>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          If you are a museum, exhibition organizer, local tourism board, or travel brand, please
          include the destination, timeline, and what kind of collaboration you are looking for.
        </p>
      </main>
      <Footer />
    </>
  );
}
