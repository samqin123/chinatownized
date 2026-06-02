# Handoff

Use this file as the short operational summary for the next Claude or Codex session.

## What We Decided

- Date: 2026-05-26
- The site stays as one product, not two separate sites.
- Museums is the first content channel.
- Shanghai and Beijing are the priority museum markets.
- Citywalk is the next strongest channel.
- The first museum articles are drafted and wired into the content layer.
- The Shanghai Museum Ancient Americas exhibition article is now the current featured museum news story.
- A reusable virtual author pool now exists for topic-based article drafting.
- The author pool now includes a cluster playbook so future stories can be matched by tone and editorial purpose.
- The public-facing brand is now `Charming Destinations`.
- Navigation priority is now `Museums` first, `Ancient Towns` second, and `Citywalks` third.
- A template-driven `Tongli Ancient Town` article has been added as the first dispatch in the Ancient Towns channel.
- Zhujiajiao and Qiandeng have now been added to extend the Ancient Towns channel with Shanghai-area and Suzhou-area angles.
- The China Spa page now emphasizes Northeast bathhouse culture and Shanghai's Jile Tang.
- The first Citywalks route now covers Shanghai Postal Museum, the Bund, Waibaidu Bridge, and White Magnolia Plaza.
- A photo-first Citywalks variant now exists for users who care more about visual payoff than route density.
- Shanghai museum coverage now includes a practical top-10 shortlist and a 2026 summer exhibition roadmap.
- The Shanghai hidden museums WeChat article has been converted into an English museum guide with original images reused in the draft.
- The hidden-museum rewrite has been tightened into a more magazine-like travel piece with stronger opening language and less list feel.
- Standard About, Affiliate Disclosure, Privacy, and Contact pages are now in place.
- A reusable content workflow now exists in `docs/workflow.md` for source download, rewrite, local image fixes, build, and deployment.
- The startup instructions now explicitly point to `docs/workflow.md` for content publishing tasks.
- Channel-aware partner windows now render on article sidebars and category pages, with local SVG assets for JD, Ctrip, Air China, China Eastern, Hilton, and Dianping.
- Category pages now keep the partner window in the right sidebar so the main content remains the primary reading area.

## Why

- Date: 2026-05-26
- The user has strong expertise in Shanghai and Beijing museums.
- Museums are high-intent topics for foreign readers.
- The same content can support travel guidance, lead generation, and ad inventory.
- Direct image rendering was added so the lead story and article pages are publication-ready.
- The new exhibition article uses externally hosted images to keep the story visually strong while moving fast.
- Future stories should pick a persona from `docs/author-pool.md` instead of inventing a new author each time.
- For museum exhibition stories aimed at foreign readers, lead with what they learn about civilization and what it reveals about Chinese museum storytelling.
- Keep the brand consistent across page metadata, masthead, footer, and category pages.
- Keep the channel order stable so Museums remains visually dominant.
- Keep Ancient Towns split between Shanghai-adjacent and Suzhou-adjacent stories for variety.
- Treat China Spa as a culture-and-experience channel, not just a wellness service page.
- Keep Citywalks Shanghai-first until the route library has depth.
- Keep the photo-first variant optimized for light windows and skyline contrast.
- Keep museum planning content focused on city, province, and transfer convenience.
- Keep policy pages short, plain, and compliant.
- Keep the hidden-museum rewrite focused on practical visitor value: what the museum teaches, what neighborhood it sits in, and whether it is worth the trip.
- Keep partner windows native to the editorial layout so they feel like useful travel modules rather than intrusive ads.
- Keep category-page monetization in the right sidebar so the article grid remains the dominant surface.
- The site now has a machine-readable discovery layer: `robots.txt`, `sitemap.xml`, `llms.txt`, `llm-hub`, canonical URLs, and JSON-LD for the site and content pages.
- A new Shanghai transport advice article now exists in the Citywalks channel, focused on DiDi, mini programs, street-hail avoidance, and the Shanghai Science and Technology Museum station black-car warning.
- A new Shanghai driver profile story now exists for Seven, with local images saved under `public/images/seven-taxi/` and the WeChat account `seventrip` noted in the article text.
- A new Shanghai inbound tourism story now exists about South America visa-free entry and Shanghai port traffic, using the museum/photo archive as local imagery placeholders for now.
- A new Shanghai citywalk list story now exists with 50 neighborhood check-in points for 2026, grouped into old Shanghai, French Concession, Suzhou Creek, West Bund, and Pudong.

## What To Do Next

- Date: 2026-05-26
1. Build the Museums channel structure.
2. Refine the first Shanghai and Beijing museum articles for publication quality.
3. Decide whether to keep the external image URLs or move to local static assets.
4. Define lead/ad insertion points on museum pages.
5. Continue the Ancient Towns line with more Suzhou-area follow-ups if needed.
6. Watch post-deploy indexing and consider adding more cross-links if the crawler surface still looks thin.

## Working Rule

- Read `docs/decision-log.md` and `docs/progress.md` before editing.
- Update the relevant docs after each meaningful step.
- Record important commits or pushes in `docs/git-log.md` with date and reason.
- If the strategy changes, record the change here first so the next session does not drift.
- The Shanghai 2026 Summer Museum Blockbusters guide (World Tree Summit + Qin Dynasty + Imperial Attire + 7 more exhibitions) is now live under the museums channel with local images.
