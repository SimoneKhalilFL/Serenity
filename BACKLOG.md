# Product Backlog

Active ideas to pick from when asking "what's next". Assistant reads this file at the start of sessions and reminds about it.

## Open

_(no open items — backlog fully groomed)_

## Closed without shipping

- **A/B-test the hero** (retired 2026-04) — at owner-direct-rental traffic scale (dozens to low-hundreds of inquiries/year) an A/B test on hero media can't reach statistical significance in a reasonable timeframe, and Cloudflare free tier can't cleanly attribute conversions to a variant anyway. Rather than ship a half-measured test, keep the current autoplay MP4 until a clear product reason to change (e.g. Core Web Vitals regression, mobile data complaints, or an LCP issue flagged by GSC). If the hero needs to change later, flip it deliberately and measure before/after in CF over 2–4 weeks instead of running a split test.

## Done (recent)

- Homepage social proof: `Loved by Guests` section between "Why Book Direct" and "Where You'll Stay" with 6 curated reviews (round-robin across both listings, scored by named-author preference, comment length, and recency — fully deterministic so the set stays stable). Cards show 5-star row, quote, author, date, and a link to the listing it's for. Two CTAs at the bottom deep-link to each listing's full reviews (`#property-reviews`) via a new `scrollToSectionId` option on `navigateToProperty`. Aggregate line ("5.0★ average across 69 verified guest reviews") is computed from `REVIEWS` so it auto-updates when reviews change.
- Mobile polish: pill-chip listing sub-nav (outlined chips, filled hover/focus), brand lockup `white-space: nowrap` (keeps the brand — currently "StayAtFlorida" — single-line on narrow phones), hero H1 `text-wrap: balance` + tighter line-heights so the headline distributes cleanly on 2 lines instead of orphaning a word per line.
- **Production bug: footer text leak** — the live `CLOUDFLARE_BEACON_TOKEN` secret was set to the entire Cloudflare `<script data-cf-beacon='{"token": "…"}'></script>` snippet (not just the token). That nested a second `<script>` tag inside the beacon tag and leaked `"}'>` as visible text below the footer on every page. `scripts/inject-cf-beacon.cjs` now extracts the bare token from a full-snippet paste, validates it (alnum only, no quotes/brackets), and strips the block entirely if the value can't be recovered — so invalid input can never again ship nested-script garbage.
- Majestic Sun cover polish (explicit `coverImage` → 8th-floor Gulf balcony shot)
- Domain + auto-sitemap (`domain-sitemap`)
- Performance + privacy/terms pages (`perf-trust`)
- CSP + innerHTML audit + modal/menu a11y (`security-a11y`)
- CI lint + broken-link check + 404.html + npm scripts (`ops-dx`)
- Image pipeline for listings 4 & 5 (rename, categorize, compress)
- Categorized gallery tabs + lightbox nav + cover image override
- Cloudflare Web Analytics (pageview-level) shipped with CSP + privacy disclosure + optional secret substitution
- Branded 1200x630 Open Graph share cards for homepage + each listing (composited with sharp, wired into meta tags)
- Per-listing static share pages (`listing-<id>.html`) so FB/WhatsApp/LinkedIn/Twitter crawlers see per-listing OG cards. New canonical URLs propagated through sitemap, JSON-LD, SPA history, CF beacon, schema injection.
