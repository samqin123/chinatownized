import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Masthead from "@/components/home/Masthead";
import LeadStory from "@/components/home/LeadStory";
import SidebarDispatch from "@/components/home/SidebarDispatch";
import FeaturedCard from "@/components/home/FeaturedCard";
import CategoryGrid from "@/components/home/CategoryGrid";
import SeoJsonLd from "@/components/SeoJsonLd";
import { getFeaturedGuides, getRecentGuides } from "@/data/guides";
import { generateCollectionPageSchema } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedGuides();
  const recent = getRecentGuides(6);
  const lead = featured[0];
  const sb = featured.slice(1, 4);
  return (<><Navbar/><SeoJsonLd jsonLd={generateCollectionPageSchema("Charming Destinations", SITE_URL, SITE_DESCRIPTION)} /><Masthead/><main className="flex-1">
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="ornament-divider mb-6">LEAD STORY</div>
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {lead && <LeadStory guide={lead} />}
        <aside className="card-soft flex flex-col divide-y divide-[var(--color-divider)] p-4">
          <p className="mb-3 font-mono text-xs tracking-widest text-[var(--color-ink-muted)] uppercase text-center">More Dispatches</p>
          {sb.map((g) => (<SidebarDispatch key={g.slug} guide={g} />))}
        </aside>
      </div>
    </section>
    <CategoryGrid />
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="ornament-divider mb-8">LATEST DISPATCHES</div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recent.map((g) => (<FeaturedCard key={g.slug} guide={g} />))}
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="card-clip mx-auto max-w-2xl p-8 text-center">
        <p className="font-mono text-xs tracking-widest text-ink-muted uppercase">The Weekly Dispatch</p>
        <h2 className="mt-2 font-heading text-2xl font-bold">Get Charming Destinations in your inbox.</h2>
        <p className="mt-2 text-sm text-ink-muted">One email every Friday.</p>
        <div className="mx-auto mt-6 flex max-w-md gap-2">
          <input type="email" placeholder="your@email.com" className="flex-1 border border-divider bg-parchment px-4 py-3 text-sm outline-none focus:border-primary" />
          <button type="button" className="border border-primary bg-primary px-6 py-3 font-mono text-xs font-semibold tracking-wider text-white uppercase hover:bg-primary-dark">Subscribe</button>
        </div>
      </div>
    </section>
  </main><Footer /></>);
}
