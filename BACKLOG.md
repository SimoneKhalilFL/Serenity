# Product Backlog

Active ideas to pick from when asking "what's next". Assistant reads this file at the start of sessions and reminds about it.

## Open

1. **Conversion analytics (event tracking)** — Cloudflare Web Analytics is shipped for free pageview-level data (traffic volume, sources, countries, devices, Core Web Vitals). CF free tier **does not** support custom events or SPA route-change pageviews, so we still can't see: contact-modal opens, form submits, "Check Availability" clicks, phone/email taps, or per-listing engagement (`?listing=4` vs `?listing=5`). **Next step:** add Plausible (~$9/mo) layered on top of CF, or build a small Cloudflare Worker that collects custom events from a `track()` helper.
2. **Per-listing share previews for crawlers** — current OG cards work for homepage shares, but links like `?listing=4` show the default card because FB/WhatsApp/Messenger/LinkedIn/Twitter crawlers don't execute JS. Fix by generating `listing-4.html` / `listing-5.html` as thin static entry points with their own `<meta og:image>` that JS-redirect humans into the SPA. Also update sitemap + canonical URLs to use the new paths.
3. **A/B-test the hero** — swap video vs. still image, log engagement, see which drives more "Contact Owner" clicks.
4. **More reviews surfaced** — pull the review carousel onto the home page (currently only on listing detail).
5. **Majestic Sun cover polish** — pick a standout shot as its explicit `coverImage` (it currently falls through to the first Living Room photo).
6. **Mobile-only tweaks** — any visual / UX issues that feel off on phone.

## Done (recent)

- Domain + auto-sitemap (`domain-sitemap`)
- Performance + privacy/terms pages (`perf-trust`)
- CSP + innerHTML audit + modal/menu a11y (`security-a11y`)
- CI lint + broken-link check + 404.html + npm scripts (`ops-dx`)
- Image pipeline for listings 4 & 5 (rename, categorize, compress)
- Categorized gallery tabs + lightbox nav + cover image override
- Cloudflare Web Analytics (pageview-level) shipped with CSP + privacy disclosure + optional secret substitution
- Branded 1200x630 Open Graph share cards for homepage + each listing (composited with sharp, wired into meta tags)
