# Progress

This file tracks the current state of the project so future Claude and Codex runs can continue without re-deriving context.

## Current State

- Date: 2026-05-26
- Museums-first content strategy confirmed.
- Shanghai and Beijing are the first cities to build out.
- Citywalk is the second-tier channel.
- CLAUDE.md now includes the content strategy and sync rules.
- Decision, progress, handoff, and git log files are now in place for future session synchronization.
- The first museum articles are now drafted in `src/data/guides.ts`.
- Home lead story and article pages now render guide images directly.
- The Shanghai Museum Ancient Americas exhibition article has been added as the current featured museum story.
- The reusable virtual author pool has been documented in `docs/author-pool.md`.
- The exhibition article framing has been revised to emphasize what overseas readers take away from the show and how it helps them read Chinese history comparatively.
- The Shanghai hidden museums article has been rewritten in English as a practical foreign-reader guide, with original WeChat images reused in the draft.
- The Shanghai hidden museums article has now been further tightened into a more travel-magazine style piece for foreign visitors.
- The public-facing brand has been switched to `Charming Destinations`.
- A reusable content workflow document has been added to `docs/workflow.md` for source download, rewrite, image handling, build, and publish.
- The startup instructions in `AGENTS.md` and `CLAUDE.md` now point to `docs/workflow.md` for content conversion and publishing tasks.
- The homepage lower-card images have been replaced with public online sources for Cun Chao, Luoyang Hanfu, and Chongqing night scenes.
- Fanjingshan image has been switched to a stable Wikimedia Commons source.
- The visible navigation order now keeps `Museums` first, `Ancient Towns` second, and `Citywalks` third.
- A new `Tongli Ancient Town` article has been added under the `Ancient Towns` channel using the `destination_intro_temp.md` structure as the model.
- The category taxonomy now includes a visible `Citywalks` channel so the navigation order can match the editorial strategy.
- Added `Zhujiajiao Ancient Town` as the Shanghai-area undervalued water-town story.
- Added `Qiandeng Ancient Town` as the quieter Suzhou-area cultural stop.
- Reworked the `China Spa` article to cover Northeast bathhouse culture and Shanghai's Jile Tang as the main modern reference points.
- Added a first `Citywalks` article covering Shanghai Postal Museum, the Bund, Waibaidu Bridge, and White Magnolia Plaza.
- Added a photo-first `Citywalks` variant with a stronger Bund skyline and river-light emphasis.
- Added a Shanghai Top 10 museums shortlist and a 2026 summer exhibition roadmap covering Beijing, Shanghai, and Guangzhou.
- Added standard About, Affiliate Disclosure, Privacy, and Contact pages.

## In Progress

- Date: 2026-05-26
- Define the first batch of museum article topics.
- Plan image sourcing for the theme channels.
- Decide the page structure for museum lead capture and ad placement.
- Validate the content and image rendering path for the museum launch pages.
- Confirm whether the external image hosts remain stable enough for publication.
- Match future articles to personas from the author pool.
- Use the cluster playbook to choose between museum feature, exhibition news, civilizational comparison, and city route tones.
- Keep the new brand consistent across metadata, masthead, footer, and navigation.
- Keep the homepage image sources stable and visually consistent across the latest dispatch cards.
- Replace any remaining local placeholder image paths with public sources as needed.
- Add more Suzhou-area ancient town articles if the template flow is approved.
- Confirm whether the China Spa hero image should be replaced with a more China-specific public source later.
- Keep building the Citywalks channel with Shanghai-first routes before widening to other cities.
- Keep the photo-first variant focused on lighting and skyline contrast rather than route density.
- Keep the new museum roadmap focused on travel utility: city, province, and transfer sequence.
- Keep the policy pages concise and reader-friendly while staying compliant.
- Channel-aware partner windows now exist for article sidebars and category pages, using local SVG assets for JD, Ctrip, Air China, China Eastern, Hilton, and Dianping.
- Category pages now keep the main content as the dominant column and move partner windows into a right-hand sidebar, matching the article-page layout.
- The workflow now includes a taste-check step for page structure changes before implementation.
- GA4 and Microsoft Clarity are now wired through the root layout with env-gated injection, and client-side route tracking handles page_view, guide_view, engaged_read, outbound_click, and explicit analytics links.
- The privacy page now states that the site uses GA4 and Clarity for traffic and usability analysis.
- GitHub Actions now passes GA/Clarity env vars into pull, build, and deploy steps so Vercel build-time rendering can read them.

## Next

- Date: 2026-05-26
- Create the Museums channel taxonomy.
- Draft the first Shanghai and Beijing museum articles.
- Identify reusable image slots for category cards and article hero sections.
- Decide whether to keep external image URLs or replace them with local assets before publishing.
- Refine the museum news article for freshness and reader conversion.
- Draft the next article with a topic-appropriate virtual author.

## Blockers

- None at the moment.

## Notes

- Keep the strategy focused on foreign-reader intent: what to see, how long to stay, whether to book, and how to combine stops into a route.
- Preserve the one-site strategy unless a later decision explicitly splits a separate museum product.
- Use `docs/git-log.md` to record meaningful commits and pushes with date and reason.
- The Shanghai 2026 Summer Museum Blockbusters guide has been downloaded from WeChat, rewritten in English, and added as a featured museums dispatch with local images.
- Keep layout changes behind a quick taste check, but do not force that step onto pure content rewrites.
