import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="dateline mb-1">CHARMING DESTINATIONS &raquo; ABOUT</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          About Charming Destinations
        </h1>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          Charming Destinations is a travel magazine for overseas readers who want to discover
          China beyond the obvious checklist. We focus on museums, city walks, exhibitions,
          ancient towns, and practical trip-planning ideas that help visitors actually experience
          the places they read about.
        </p>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          The site is built to be useful first. That means clear routes, readable context, strong
          visuals, and enough practical detail to help a trip come together without feeling
          overwhelming.
        </p>
        <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed">
          We are especially interested in the kinds of stories that help foreign travelers
          understand China through place: what is worth seeing, how long to stay, how to connect
          the stops, and what each place reveals about local culture.
        </p>
      </main>
      <Footer />
    </>
  );
}
