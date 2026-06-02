# Git Log

This file records important commits and pushes with the reason behind each change, so future Claude and Codex sessions can understand what changed and why.

## Format

Use one entry per meaningful commit or push:

- Date: `YYYY-MM-DD`
- Change: short summary of the code or doc change
- Reason: why the change was made
- Impact: what the change affects
- Commit: commit hash or `pending` if not yet pushed
- Push: `yes` or `no`

## 2026-05-26

- Date: 2026-05-26
- Change: Added project sync docs and reinforced the museums-first content strategy in `CLAUDE.md`.
- Reason: The user wants a persistent way to keep Claude and Codex aligned on decisions, progress, and handoff state.
- Impact: Future sessions can read the current strategy and implementation context without re-deriving it from chat history.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Added the Museums channel, drafted first Shanghai and Beijing museum articles, and wired guide images into the home lead story and article pages.
- Reason: The user wanted today’s content to be publishable with images and a clear museum-first editorial direction.
- Impact: The homepage now surfaces a museum lead story, category navigation includes Museums, and article pages display hero images and body content.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Added a Shanghai Museum Ancient Americas exhibition article with a pre-sale-focused English draft and image-rich structure.
- Reason: The user wanted a fresh, newsy article based on WeChat references, with strong image usage and a conversion-friendly angle.
- Impact: The Museums channel now has a timely exhibition piece that can anchor the homepage and support publication immediately.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Added a reusable virtual author pool and wired the project rules to read it before writing new articles.
- Reason: The user wants authors to stay believable and topic-matched across future content.
- Impact: Future article drafts can reuse consistent personas instead of creating one-off bylines.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Reframed the Shanghai Museum Americas article to emphasize civilizational takeaway and Chinese-history comparison for foreign readers.
- Reason: The user wanted the article to focus less on being a travel stop and more on what readers learn from the exhibition.
- Impact: The article now speaks to cultural understanding and comparison, which is a stronger fit for the museum channel audience.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Rebranded the site to Charming Destinations and updated the public-facing copy to match the new China-travel positioning.
- Reason: The old brand name could be misread as Chinatown-specific; the new name better reflects the editorial scope.
- Impact: Metadata, masthead, footer, navigation, and category labels now align with the new brand.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Replaced the homepage lower-card images with stable public sources for Cun Chao, Luoyang Hanfu, and Chongqing night scenes.
- Reason: The bottom article cards needed proper visual coverage instead of local placeholders.
- Impact: The latest dispatch section now renders with real images across the lower cards.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Replaced the Fanjingshan placeholder image with a stable Wikimedia Commons source.
- Reason: The Fanjingshan card was still pointing at a local path that would not render in the browser.
- Impact: The Fanjingshan article should now display its image consistently.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Reordered the visible navigation so Museums stays first, Ancient Towns second, and Citywalks third; added a template-driven Tongli Ancient Town article.
- Reason: The user wanted the museum-first strategy to remain visually dominant while adding a Suzhou-area ancient-town dispatch from the new template.
- Impact: The navbar, theme grid, footer, category taxonomy, and guide data now reflect the updated content hierarchy.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Added Zhujiajiao Ancient Town and Qiandeng Ancient Town to the Ancient Towns channel.
- Reason: The user wanted one underestimated Shanghai-area water town and one quieter Suzhou-area cultural stop.
- Impact: The Ancient Towns channel now has broader Shanghai/Suzhou coverage and more template-ready dispatches for the homepage and category page.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Reworked the China Spa article to cover Northeast bathhouse culture and Shanghai's Jile Tang, and replaced the missing hero image with a public source.
- Reason: The user wanted the page to be more informative and to fix the broken image display on the local site.
- Impact: The China Spa page now has a fuller cultural angle and a loadable image path.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Added the first Citywalks article covering Shanghai Postal Museum, the Bund, Waibaidu Bridge, and White Magnolia Plaza.
- Reason: The user requested a Shanghai citywalk that emphasizes old Shanghai, new Shanghai, and strong photo windows.
- Impact: The Citywalks channel now has a Shanghai-first flagship route that can anchor future neighborhood stories.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Added a photo-first variant of the Shanghai Postal Museum to Bund citywalk.
- Reason: The user chose the photography-focused version and wanted stronger emphasis on visual payoff.
- Impact: The Citywalks channel now has both a practical route version and a photo-optimized variant.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Added a Shanghai Top 10 museums shortlist article and a 2026 summer exhibition roadmap for Beijing, Shanghai, and Guangzhou.
- Reason: The user wanted museum planning content with city/province labels and transfer guidance after arrival.
- Impact: The Museums channel now has a practical overview piece and a trip-planning exhibition guide for summer 2026.
- Commit: pending
- Push: no

- Date: 2026-05-26
- Change: Added standard About, Affiliate Disclosure, Privacy, and Contact pages.
- Reason: The footer needed compliant site pages before pushing more content live.
- Impact: The site now has standard informational and policy pages linked from the footer.
- Commit: pending
- Push: no

## 2026-05-27

- Date: 2026-05-27
- Change: Rewrote the Shanghai hidden museums WeChat article into a publication-ready English guide and added a new Shanghai Wukang Road to Anfu Road citywalk article.
- Reason: The user wanted a publishable foreign-reader story built from the source article, plus a Shanghai route with Duozhuayu, coffee, and a street-side beer stop.
- Impact: The Museums and Citywalks channels now have more magazine-like Shanghai content that can be published and reused for lead generation.
- Commit: pending
- Push: no

- Date: 2026-05-27
- Change: Added `.firecrawl/`, `rawdocs/`, and local raw document artifacts to `.gitignore`.
- Reason: The user wanted temporary scraping outputs and raw working documents kept out of version control.
- Impact: Future content-research runs will no longer leave those local artifacts in `git status`.
- Commit: pending
- Push: no

- Date: 2026-05-27
- Change: Replaced the Shanghai hidden museums hero image with a local static asset under `public/images/`.
- Reason: The WeChat hotlinked cover image was not displaying reliably on the live site.
- Impact: The hidden museums article now uses a stable local hero image instead of the blocked external connection.
- Commit: pending
- Push: no

- Date: 2026-05-27
- Change: Replaced the Shanghai hidden museums in-article WeChat images with local static assets under `public/images/`.
- Reason: The article body had the same external image-host reliability problem as the hero image.
- Impact: The hidden museums page now renders all article images from local assets, avoiding hotlink failures.
- Commit: pending
- Push: no

- Date: 2026-05-27
- Change: Added `docs/workflow.md` to document the end-to-end content rewriting and publishing process.
- Reason: The user wanted a reusable explanation of how to transform source material into a publishable article and keep the process consistent.
- Impact: Future content work can follow a single documented flow for source handling, image fixes, build checks, and deployment.
- Commit: pending
- Push: no

- Date: 2026-05-27
- Change: Added `docs/workflow.md` to the startup instructions in `AGENTS.md` and `CLAUDE.md`.
- Reason: The user asked whether future sessions would automatically load the workflow document and wanted it explicitly referenced in agent startup rules.
- Impact: New sessions are more likely to load the workflow document early when doing content conversion or publishing tasks.
- Commit: pending
- Push: no

- Date: 2026-05-27
- Change: Added channel-aware partner windows for JD, Trip.com/Ctrip, China Eastern, Air China, Hilton, and Dianping with local SVG assets.
- Reason: The user wanted ad-like windows that feel native to the editorial layout and can support affiliate-style monetization.
- Impact: Article sidebars and category pages now have reusable travel partner modules with click tracking.
- Commit: pending
- Push: no

- Date: 2026-05-27
- Change: Moved category-page partner windows to the right sidebar so the main category content keeps visual priority.
- Reason: The user clarified that the category page should mirror the article-page layout and preserve most of the width for editorial content.
- Impact: Category pages now keep monetization secondary and the article grid primary.
- Commit: pending
- Push: no

## Usage Rule

- Add a new entry after each meaningful commit or push that changes product behavior, architecture, or documented decisions.
- Keep the note concise but specific enough that another agent can understand the intent without reading the whole diff.
- If a later change revises an earlier decision, add a new entry rather than rewriting history.

- Date: 2026-05-27
- Change: Added "Shanghai's 2026 Summer Museum Blockbusters" guide — downloaded WeChat article from mp.weixin.qq.com/s/JF_arOh_0XchLt8qA37bPw via remote MCP, rewritten in English with local images under public/images/museum-summer-2026/.
- Reason: The user wanted the 公众号 article converted to an English museum channel dispatch with preserved images.
- Impact: New featured museums guide covers World Tree Summit, Qin Dynasty, Imperial Attire, and 7 more summer exhibitions. Ava Turner as author. TypeScript checks clean.
- Commit: pending
- Push: no

- Date: 2026-05-31
- Change: Added SEO and AI-discovery infrastructure with `robots.txt`, `sitemap.xml`, `llms.txt`, `llm-hub`, canonical metadata, and JSON-LD schemas for the site, collections, and article pages.
- Reason: The site needed a stronger machine-readable surface so search engines and AI systems can discover the content graph with less ambiguity.
- Impact: Crawlers now have explicit index and sitemap entry points, plus an LLM-oriented hub page and schema-backed page semantics.
- Commit: pending
- Push: no

- Date: 2026-06-02
- Change: Added a new Shanghai transport guide covering DiDi, mini programs, street-hail avoidance, and the Shanghai Science and Technology Museum station black-car warning.
- Reason: The user wanted a practical first-time Shanghai taxi guide with a specific safety reminder for visitors.
- Impact: The Citywalks channel now includes a transport-focused utility post that can be shared alongside route and neighborhood content.
- Commit: pending
- Push: no

- Date: 2026-06-02
- Change: Added a Seven taxi-driver profile story with four local images saved under `public/images/seven-taxi/`.
- Reason: The user wanted a niche Shanghai story about a well-known English-speaking taxi driver and his WeChat booking account.
- Impact: The Citywalks channel now includes a human-interest transport story that complements the practical DiDi guide.
- Commit: pending
- Push: no

- Date: 2026-06-02
- Change: Added a Shanghai inbound tourism story about South America visa-free entry and one-year port traffic growth.
- Reason: The user wanted a publishable rewrite of the South America visa-free anniversary story with Shanghai as the geographic anchor.
- Impact: The Citywalks channel now includes a policy-and-tourism trend piece aimed at inbound-travel readers.
- Commit: pending
- Push: no

- Date: 2026-06-02
- Change: Added a 50-stop Shanghai citywalk list for 2026 with district-based route clusters.
- Reason: The user wanted a 50-point Shanghai citywalk article built from a source article and adapted for publication.
- Impact: The Citywalks channel now includes a large-scale neighborhood checklist for route planning and editorial reuse.
- Commit: pending
- Push: no

- Date: 2026-06-02
- Change: Added a Shanghai century-old buildings guide that reorganizes a 100-point architecture list into district-based walking routes.
- Reason: The user provided a detailed district list of 100 heritage buildings and asked for a publishable rewrite.
- Impact: The Citywalks channel now includes a structured Shanghai architecture walk with local images and district grouping.
- Commit: pending
- Push: no
