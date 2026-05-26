import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const tools = [
  {
    href: "/tools/visa-calculator",
    title: "Visa Calculator",
    description:
      "Live policy-backed calculator for unilateral visa-free and 240-hour transit rules.",
  },
  {
    href: "/tools/hsr-guide",
    title: "HSR Guide",
    description:
      "High-speed rail basics, how to buy tickets, and what foreign travelers need to know.",
  },
  {
    href: "/tools/alipay-setup",
    title: "Alipay Setup",
    description:
      "A step-by-step setup flow for foreign travelers who want to pay like locals.",
  },
  {
    href: "/tools/itinerary-builder",
    title: "Itinerary Builder",
    description:
      "Pick a theme, generate a trip plan, and capture emails for follow-up offers.",
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <p className="dateline mb-1">CHARMING DESTINATIONS &raquo; TOOLS</p>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
          Traveler&apos;s Companion
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-ink-muted)]">
          Small utility pages that keep the site useful, not just readable.
        </p>

        <hr className="section-divider my-8" />

        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="card-clip p-6">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-ink)]">
                {tool.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {tool.description}
              </p>
              <p className="mt-4 font-[family-name:var(--font-mono)] text-[0.625rem] tracking-widest text-[var(--color-primary)] uppercase">
                Open tool &rarr;
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
