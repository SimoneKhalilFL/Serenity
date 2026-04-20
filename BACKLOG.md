# Product Backlog

Active ideas to pick from when asking "what's next". Assistant reads this file at the start of sessions and reminds about it.

## Open

1. **Conversion analytics (event tracking)** — Cloudflare Web Analytics is shipped for free pageview-level data (traffic volume, sources, countries, devices, Core Web Vitals). With the new `listing-<id>.html` canonicals, per-listing traffic IS now visible in the CF dashboard. CF free tier still **does not** support custom events, so we can't see: contact-modal opens, form submits, "Check Availability" clicks, phone/email taps. **Next step:** add Plausible (~$9/mo) layered on top of CF, or build a small Cloudflare Worker that collects custom events from a `track()` helper.
2. **A/B-test the hero** — swap video vs. still image, log engagement, see which drives more "Contact Owner" clicks.
3. **More reviews surfaced** — pull the review carousel onto the home page (currently only on listing detail).
4. **Mobile-only polish (cosmetic leftovers)** — a few small-screen layout nits noticed during the mobile audit that weren't blocking:
    - Hero H1 "Beach Stays, Booked With the Owner" wraps one word per line on very narrow phones; could tighten `font-size` + `line-height` at the `<=480px` breakpoint.
    - Brand lockup "Serenity Rentals" wraps to two lines under the 3-link nav on narrow phones; consider shortening the text or scaling the logo.
    - Listing sub-nav ("Photos · Stay Details · Availability · Reviews · Location") currently renders as underlined blue text links — intentional, but could be upgraded to pill-style chips for stronger affordance.

## Done (recent)

- **Production bug: mobile (and desktop) footer text leak** — the live `CLOUDFLARE_BEACON_TOKEN` secret was set to the entire Cloudflare `<script data-cf-beacon='{"token": "…"}'></script>` snippet (not just the token). That nested a second `<script>` tag inside the beacon tag and leaked `"}'>` as visible text below the footer on every page. `scripts/inject-cf-beacon.cjs` now extracts the bare token from a full-snippet paste, validates it (alnum only, no quotes/brackets), and strips the block entirely if the value can't be recovered — so invalid input can never again ship nested-script garbage.
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
