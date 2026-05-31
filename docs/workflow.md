# Content Workflow

This document explains how to turn a source article or research note into a publishable site article, and how to save, verify, and deploy the result.

## 1. Start With the Source

Use one of these inputs:

- A WeChat article URL
- A local research note
- A PDF, HTML export, or saved markdown draft

If the source is a WeChat article, download it first with the WeChat article downloader so you keep:

- title
- publish time
- author
- original images
- structure and section order

## 2. Decide the Output Angle

Before rewriting, decide the target form:

- Museum feature
- Exhibition news
- Citywalk route
- Ancient town guide
- Practical travel shortlist

Pick the author persona from [`docs/author-pool.md`](./author-pool.md) that best matches the topic.

## 3. Do a Taste Check When Layout Changes

If the task changes the page structure instead of only the text, do a quick taste check before editing.

This applies to:

- homepage sections
- category pages
- article hero sections
- right-side ad / partner windows
- navigation, cards, and visual hierarchy

For these tasks:

- define the visual goal first
- compare the current layout against that goal
- keep editorial content dominant on content pages
- keep ads and partner modules secondary and native-looking
- record the decision in `docs/decision-log.md` before editing

Use the existing design taste skills as references when needed:

- `minimalist-ui` for content-heavy editorial pages
- `high-end-visual-design` for hero sections and first impression
- `design-taste-frontend` for the overall quality bar

Skip this step for pure content rewrites that do not change layout.

## 4. Rewrite for Foreign Readers

Do not translate line by line.

Instead, rewrite around the questions a foreign visitor actually cares about:

- Why does this matter?
- What will I learn?
- Is it worth the time?
- How do I combine it with the rest of the day?
- What is nearby?

Keep the language in English if the site article is meant for publication.

## 5. Save the Article in the Codebase

For site content, write the finished article into:

- [`src/data/guides.ts`](../src/data/guides.ts)

Use the site’s existing content shape:

- slug
- title
- excerpt
- dateline
- category
- author
- publishedAt / updatedAt
- image / imageAlt
- readTime
- tags
- body

If you need images, prefer stable local assets:

- download external images into [`public/images/`](../public/images/)
- reference them with `/images/...`

Avoid depending on unstable hotlinks when the article needs to stay publishable.

## 6. Verify Locally

Run:

```bash
npm run build
```

Check that:

- the page compiles
- the article route renders
- images load
- no TypeScript errors were introduced

## 7. Record the Work

After a meaningful change, update the project sync docs:

- [`docs/progress.md`](./progress.md)
- [`docs/handoff.md`](./handoff.md)
- [`docs/git-log.md`](./git-log.md)

Write down:

- what changed
- why it changed
- what it affects
- whether it has been committed or pushed

## 8. Commit and Push

When the draft is ready:

1. commit the change with a clear message
2. push to `main`
3. let GitHub Actions / Vercel deploy it

If the deployment relies on environment variables, make sure the GitHub Actions secrets and build-time env injection are still in place.

## 9. Fix Image Failures

If an article image does not render on the live site:

1. check whether the image is hotlinked from a blocked host
2. download it into `public/images/`
3. update the article to point to the local file
4. rebuild and redeploy

## 10. What Not to Do

- Do not leave raw source documents in version control.
- Do not use unstable external image hosts when a local copy is easy.
- Do not skip the build check before publishing.
- Do not overwrite the sync docs only in chat.

## 11. Default Publishing Loop

The default loop for this site is:

1. source material
2. download or extract
3. rewrite for foreign readers
4. save in `src/data/guides.ts`
5. local image fix if needed
6. build
7. update docs
8. commit
9. push
10. deploy
