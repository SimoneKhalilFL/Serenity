# QA Checklist

> **Purpose:** The pre-release checklist the [QA Agent](AGENTS.md#9-qa-agent) runs — or the AI runs on its behalf — before any guest-facing change ships. This is a hard gate, not a suggestion.
>
> **How to use:** Run every section relevant to the change. Skipped items are called out in the [Final QA Summary](#10-final-qa-summary). If any critical item fails, the change does not ship until it's fixed or the user explicitly overrides. **Sync QA** (section 9) applies to every change that touches a property's MASTER.md or platform files — see [`../sync/SYNC_RULES.md`](../sync/SYNC_RULES.md).
>
> **Governance:** See [`AI_RULES.md`](AI_RULES.md#qa-agent-review-and-veto) for QA Agent veto scope. The rules below are enforcement of the standards defined in [`BRAND_GUIDELINES.md`](BRAND_GUIDELINES.md), [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md), [`SEO.md`](SEO.md), and [`HOSPITALITY.md`](HOSPITALITY.md).
>
> **Owned by:** [QA Agent](AGENTS.md#9-qa-agent). **Reviewers on changes:** UX Director, SEO Expert, Brand Director. See [Doc ownership](AGENTS.md#doc-ownership).

---

## Legend

- `[ ]` — item to check
- **Critical** — failure blocks release
- **High** — failure blocks release unless owner overrides
- **Standard** — failure requires a follow-up ticket but not a block

---

## 1. Brand QA

Run on every content-touching change.

- `[ ]` **Critical.** No occurrence of `Serenity Rentals` (or `Serenity Rental`) in guest-facing copy.
- `[ ]` **Critical.** No occurrence of `Fun in the Sun` in guest-facing copy.
- `[ ]` **Critical.** `StayAtFlorida` is used as the master brand — always one word, always this capitalization.
- `[ ]` **Critical.** `Twenty First` is used as the property brand name (never `Tidewater 2111`, never `21st floor unit`).
- `[ ]` **High.** `A StayAtFlorida Signature Property` appears as the subtitle on the property card, listing hero, and OTA blurbs where the field is defined.
- `[ ]` **Critical.** No explicit floor number anywhere in guest-facing marketing copy (`21st`, `21st floor`, `floor 21`, `8th floor`, etc.).
- `[ ]` **High.** Tidewater Beach Resort is not overemphasized — mentioned only where operationally required (location paragraph, registration/parking, community link).
- `[ ]` **Critical.** Beach chair language reads exactly `complimentary beach chairs and umbrella available in the condo` — no variants.
- `[ ]` **Standard.** No banned words in headlines, taglines, or meta (`paradise`, `dream getaway`, `bliss`, `escape`, `perfect` in brand-authored copy, `amazing`, `best ever`).
- `[ ]` **Standard.** No emojis, no all-caps, no exclamation marks in brand-authored copy.

Verification commands (from repo root, on Windows PowerShell substitute `Select-String` for `grep`):

```bash
# Should return zero brand-facing hits
grep -rniE "serenity rentals?|fun in the sun|21st(-| )floor|floor 21|8th floor" \
  --include="*.html" --include="*.js" --include="*.css" .
```

---

## 2. Content QA

Run on every copy edit.

- `[ ]` **Critical.** Copy sounds premium, warm, clear, and honest — see [`BRAND_GUIDELINES.md`](BRAND_GUIDELINES.md#voice-and-tone).
- `[ ]` **High.** No cheesy beach language (`paradise`, `slice of heaven`, `beach bum`, `dream getaway`, `escape to`).
- `[ ]` **Critical.** No overpromising — no implication that **we** provide beach service, no chair delivery **by us**, no daily housekeeping, no guaranteed sunset, no in-condo dining, no concierge. *(Third-party on-beach chair rental MAY be mentioned as an optional paid add-on — approved wording in [`BRAND_GUIDELINES.md#beach-chairs-and-umbrella`](BRAND_GUIDELINES.md#beach-chairs-and-umbrella).)*
- `[ ]` **High.** CTAs are clear and approved: `Inquire` *(header, site-wide)*, `Explore Signature Properties` *(homepage hero primary)*, `Book Direct & Save` *(inside `Why Book Direct?` section only — no longer the hero CTA)*, `Send an Inquiry` *(homepage contact section primary)*, `Check Availability`, `Email to Book`, `Email to Reserve These Dates`, `View Photos`, `View Property`, `See Our Properties`, `Inquire about these dates`.
- `[ ]` **Critical.** `Inquire` header CTA is present on every page (homepage, TW2111, MS811, `gear.html`, `privacy.html`, `terms.html`, static `listing-*.html`). Clicking it opens the existing inquiry modal (`showContactModal()`) — never a duplicate form. Always visible on mobile (not inside the hamburger menu).
- `[ ]` **Critical.** Homepage hero eyebrow reads exactly `A Boutique Beachfront Stay Collection`. The legacy `A Boutique Beach Rental Brand` line has been retired. *(Locked 2026-07-06, Homepage Conversion Polish.)*
- `[ ]` **Critical.** Homepage hero primary CTA reads exactly `Explore Signature Properties` and scrolls to `#properties`. `Book Direct & Save` never appears in the hero — only inside the `Why Book Direct?` section. *(Locked 2026-07-06.)*
- `[ ]` **Critical.** Homepage `Contact` section shows a primary button `Send an Inquiry` that opens the same modal as the header `Inquire` (`showContactModal()`). The email address renders below the button as a secondary/muted affordance, not the primary CTA.
- `[ ]` **Critical.** Amenities on the listing match [`config.js`](../../config.js) and the on-property reality.
- `[ ]` **Standard.** Property names are consistent across the site, sitemap, JSON-LD, and OTA callouts.
- `[ ]` **Standard.** Existing guest-review UGC is untouched — reviews are authentic even when they use words the brand voice avoids.

---

## 3. SEO QA

Run on every SEO-touching change (meta, headings, alt text, schema, sitemap).

- `[ ]` **Critical.** Every page has exactly one `<h1>`.
- `[ ]` **High.** H2 / H3 hierarchy is logical (no skipped levels, no headings used for styling).
- `[ ]` **Critical.** `<title>` present on every page, under 60 characters, follows the pattern in [`SEO.md`](SEO.md#meta-title-patterns).
- `[ ]` **Critical.** `<meta name="description">` present on every page, 150–160 characters, no keyword stuffing, no exclamation marks.
- `[ ]` **High.** Every `<img>` has descriptive, unique `alt` text — see [`SEO.md`](SEO.md#image-alt-text-patterns).
- `[ ]` **High.** Local keywords (`Panama City Beach`, `Destin`, `Miramar Beach`, `Florida`, `Gulf Coast`) used naturally, not stuffed.
- `[ ]` **High.** `<link rel="canonical">` correct on every page — points to the static `listing-<id>.html` for property pages.
- `[ ]` **Critical.** JSON-LD validates and matches the visible HTML — no ghost reviews, ghost ratings, or ghost amenities.
- `[ ]` **Critical.** After any `config.js` change: `node scripts/generate-listing-pages.cjs` and `node scripts/generate-listing-schema.cjs` have been run.
- `[ ]` **High.** `FAQPage` JSON-LD is present on any property page that renders a visible FAQ block. Every question / answer in the schema must match the visible HTML verbatim — no ghost FAQs.
- `[ ]` **High.** `Person.name` in `Review` schema must reflect actual authorship. `Guest` or `Verified Airbnb guest` / `Verified VRBO guest` are acceptable when we don't hold real names; **inventing plausible names is prohibited** and treated as a Critical fail.
- `[ ]` **Standard.** `sitemap.xml` still lists every indexable URL; no 404s on listed URLs.

Verify JSON-LD in a browser: DevTools → Elements → search `application/ld+json`. Or paste into [Rich Results Test](https://search.google.com/test/rich-results).

---

## 4. UX QA

Run on every UI change.

- `[ ]` **Critical.** Primary booking CTA visible above the fold on desktop (1440×900) and mobile (375×812).
- `[ ]` **Critical.** Top navigation works: Home, Properties, Gear, Contact.
- `[ ]` **High.** Photo gallery opens, advances, closes, and traps focus in the lightbox.
- `[ ]` **High.** Property page hero carousel loads images in the deterministic MASTER §18-defined order — no random shuffle. First slot is the property's hero-view photo; second is the lifestyle shot.
- `[ ]` **Standard.** Hero carousel autoplay is ≥ 5 seconds per slide and pauses on hover / focus.
- `[ ]` **Critical.** Contact / inquiry form submits and the `mailto:` (or form endpoint) delivers.
- `[ ]` **High.** Footer links resolve (Privacy, Terms, Gear, social, sitemap).
- `[ ]` **High.** Page scannable in 5 seconds — hero → value prop → primary CTA visible without scrolling on desktop.
- `[ ]` **Standard.** No competing CTAs above the fold; secondary CTA is visually subordinate.
- `[ ]` **Standard.** Sticky booking bar appears on the property page after scrolling past the hero and does not obscure content on mobile.

---

## 5. Mobile QA

Run on every UI change. Test at 375px, 414px, and 768px widths in DevTools plus a real device where possible.

- `[ ]` **Critical.** Layout renders correctly at 375px — no clipped text, no cut-off images, no overlapping elements.
- `[ ]` **Critical.** No horizontal scrolling anywhere on the page.
- `[ ]` **High.** All buttons and CTAs meet the 44×44px tap target minimum.
- `[ ]` **Critical.** Body text is at least 16px on mobile (per `styles.css` base); no text below 14px except legal footnotes.
- `[ ]` **High.** Photo gallery is swipeable and readable on mobile.
- `[ ]` **Critical.** Primary booking CTA reachable without excessive scrolling — sticky bar or above-the-fold placement.
- `[ ]` **High.** Mobile navigation (hamburger) opens, closes, and traps focus.
- `[ ]` **Standard.** Video hero respects `prefers-reduced-motion` and has a poster image so mobile data plans don't autoload.

---

## 6. Accessibility QA

Run on every UI or content change. Minimum standard is WCAG AA.

- `[ ]` **Critical.** Semantic HTML: `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` used correctly.
- `[ ]` **Critical.** Headings form a valid outline (h1 → h2 → h3, no skips).
- `[ ]` **Critical.** Every meaningful `<img>` has descriptive `alt`; decorative images have `alt=""` with a labeled adjacent sibling.
- `[ ]` **Critical.** Every interactive element (buttons, links, form inputs, icons-as-buttons) is reachable via `Tab` and operable via `Enter` / `Space`.
- `[ ]` **Critical.** Focus states are visible — never `outline: none` without a replacement.
- `[ ]` **Critical.** Body-text contrast ≥ 4.5:1; large-text contrast ≥ 3:1. Verify with browser devtools or axe.
- `[ ]` **High.** All form inputs have programmatic `<label>` associations; error messages announced.
- `[ ]` **High.** Links have descriptive text — no bare "click here" or "read more" without context.
- `[ ]` **Standard.** `lang="en"` set on `<html>`.
- `[ ]` **Standard.** Icon-only buttons have `aria-label`; decorative icons have `aria-hidden="true"`.

---

## 7. Performance QA

Run on every UI change that touches images, scripts, or fonts.

- `[ ]` **High.** New / changed images compressed (JPEG or WebP, ~75–85% quality) and no larger than 1200px wide unless there's a specific reason.
- `[ ]` **High.** Below-the-fold images use `loading="lazy"`.
- `[ ]` **Standard.** Responsive images (`srcset` / `sizes`) used where the same image renders at multiple sizes.
- `[ ]` **Critical.** No new dependencies added to the vanilla HTML/CSS/JS stack unless approved by the [Software Architect](AGENTS.md#7-software-architect).
- `[ ]` **Critical.** No layout shift after page load (visual check + DevTools "Layout Shift" tool). CLS target < 0.1.
- `[ ]` **High.** LCP < 2.5s on 4G throttled — measure in DevTools Performance panel.
- `[ ]` **Critical.** Zero console errors on page load; zero unhandled promise rejections.
- `[ ]` **Standard.** No new render-blocking third-party scripts above the fold.
- `[ ]` **Standard.** Total property-page weight < 2MB compressed.

---

## 8. Booking Flow QA

Run on every booking-related change (calculator, CTA, contact form, `mailto`, rates).

- `[ ]` **Critical.** Primary CTA on every property surface works and matches its expected next action: header (site-wide) → `Inquire` opens the inquiry modal, property card → `View Property`, property hero primary → `Check Availability`, property hero secondary → `View Photos` (scrolls to photos), price calculator submit → `Email to Reserve These Dates`, sticky bottom → `Email to Book`, homepage hero primary → `Explore Signature Properties` (scrolls to `#properties`), homepage `Why Book Direct?` section CTA → `Book Direct & Save` (scrolls to `#properties`), homepage contact section → `Send an Inquiry` (opens inquiry modal).
- `[ ]` **Critical.** For TW2111 only: price calculator shows exactly **four** rows in order — `Nightly Rate`, `Cleaning Fee` (**$200**), `Taxes`, `Estimated Total`. No `Resort Registration Fee` line. No additional fee disclosure note beneath the calculator. *(Registration fee removed from the calculator 2026-07-06 Pricing/Logistics cleanup — MASTER §21 Placement rule. Cleaning fee reduced to $200 on 2026-07-06 afternoon pass — paired with the extended-stay uplift below to net +$56 on 3+ nights, −$56 on 1–2 nights.)*
- `[ ]` **Critical.** For TW2111 only: price calculator panel heading reads **`Your Stay`** (not `Price Calculator`); line labels read `Nightly Rate`, `Cleaning Fee`, `Taxes`; total row reads `Estimated Total`; and the trust note `No OTA service fees when booking direct.` renders directly below the total in muted (not highlighted) text. Cleaning Fee = **$200**.
- `[ ]` **Critical.** **Extended-stay uplift math** (both TW2111 and MS811): for a 3+ night stay, the `Nightly Rate` row value on the price calculator equals *(sum of per-day rates from `getAdjustedRate` across the stay) + `property.extendedStayUplift.amount`* — $100 for TW2111, $50 for MS811. For 1–2 night stays, no uplift is applied. **The extended-stay uplift is never a separate line item on the calculator.** Verify by selecting a 2-night stay (uplift = 0) then a 3-night stay (uplift applied) and confirming the delta matches the property's uplift value. Also verify the contact-modal booking summary AND the emailed booking request show the same `Estimated Total` as the calculator — all three surfaces call `app.js#applyExtendedStayUplift`. *(Pricing policy added 2026-07-06 afternoon — TW2111 MASTER §21 Extended-stay uplift disclosure rule; MS811 MASTER 2026-07-06 changelog.)*
- `[ ]` **Standard.** Canonical TW2111 impact table sanity check (base rate $225): 1-night $476 · 2-night $728 · 3-night $1,092 · 7-night $2,100. MS811 (base $300): 1-night $616 (unchanged) · 3-night $1,344 · 7-night $2,688. Actual totals scale with per-day PriceLabs rates in `data/pricing-{id}.json`; use these as reference at the base rate only.
- `[ ]` **Critical.** For TW2111 only: the `Resort Registration Fee` ($54.04) is shown **only in `Before You Arrive`** — with the canonical copy *"A one-time $54.04 fee paid directly to the resort before arrival. It includes up to 2 parking passes and 8 guest wristbands. Register at least 24 hours before arrival to save $10."* — followed by a distinct **`Register with the Resort`** button that opens `https://www.tidewaterhoa.com/registration/` in a new tab. Never on the price calculator, never in the sticky bottom bar total, never in JSON-LD `price*` fields.
- `[ ]` **Critical.** For TW2111 only: the property page hero primary CTA still reads exactly `Check Availability` and the secondary CTA still reads exactly `View Photos`. Neither string has been swapped for `See Available Dates`, `Book Now`, `Gallery`, or any other variant. *(CTAs frozen 2026-07-02, Final Polish pass — MASTER §12.)*
- `[ ]` **Critical.** For TW2111 only: the `Why Book Direct with StayAtFlorida` trust panel renders below Availability & Pricing and above Stay Details, with exactly the seven canonical bullets in order (Same property · Same great stay · No OTA service fees · Owner-hosted communication · Personal support before your arrival · Faster responses · Secure direct booking). No CTA at the bottom of the panel. Distinct from the homepage `Why Book Direct?` 3-card block.
- `[ ]` **Critical.** For TW2111 only: the logistics block below the description renders as **two paired cards** — `Before You Arrive` (Parking · Wristbands · Resort Registration Fee · Check-in) and `During Your Stay` (Complimentary beach chairs and umbrella · Beach access · Resort amenities · Check-out reminders). Side-by-side on desktop, stacked on mobile.
- `[ ]` **Critical.** **Reviews section heading.** Both property pages render the H2 as exactly `What Our Guests Are Saying` (not `Guest Reviews`, not `Loved by Our Guests`, not `Reviews`). *(Heading standardized 2026-07-06 evening — BRAND_GUIDELINES `Section heading and CTA`.)*
- `[ ]` **Critical.** **Reviews section — per-platform attribution.** Each TW2111 review card shows exactly one of `Verified VRBO Guest`, `Verified Airbnb Guest`, `Verified Booking.com Guest` between the author name and the date, matching the review's `platform` field in `config.js`. Legacy MS811 reviews (no `platform` field) show a generic `Verified Guest`. **No pseudonyms** (Sarah M., David R., etc.), **no "Names anonymized for guest privacy" disclosure line**, **no unified `Verified guest` label** (that was the morning 2026-07-06 decision, reversed the same evening). *(Attribution policy — MASTER §23 HYBRID with per-platform.)*
- `[ ]` **Critical.** **Reviews section — aggregate summary.** TW2111 property page renders the featured aggregate summary block above the review list showing: `★★★★★` (5 solid stars) · `5.0` · `Average Rating` · `25 Featured Reviews` · `Verified Guests`. Rating value is `avgRating.toFixed(1)` scoped to the 25 published reviews (currently `5.0`). Review count matches `REVIEWS[4].length` exactly. **Do NOT overclaim** — no aggregate scoped to the broader 33-review OTA archive (which averages 4.74). MS811 shows the same block with its own scoped values. *(BRAND_GUIDELINES `Aggregate rating display` scope discipline.)*
- `[ ]` **Critical.** **Reviews section — Loved For chips.** TW2111 renders a chip strip below the aggregate with exactly six chips in order: `Beachfront Views`, `Spotlessly Clean`, `Family Friendly`, `Exceptional Host`, `Fully Equipped Kitchen`, `Easy Beach Access`. Prefixed with a `Loved for` label. Chips are static (non-interactive). MS811 does not render this block (no `lovedFor` field set). *(Chip curation sourced from the Airbnb `Loved for` category-signal capture + review-body themes, see MASTER §23.)*
- `[ ]` **Critical.** **Reviews section — Guest Favorite featured card.** TW2111 renders one pinned "Guest Favorite" featured card above the review list, containing review id=1 (Michelle B.) — the badge reads `Guest Favorite` in an amber pill; the card body reuses the standard `.review-list-item` markup with an amber left-border. Michelle's review MUST NOT also appear in the preview or "Read more reviews" panel (hoisted out to prevent double rendering). MS811 has no featured card. *(BRAND_GUIDELINES `Featured "Guest Favorite" review card`.)*
- `[ ]` **Critical.** **Reviews section — long-review expand/collapse.** The four longest TW2111 reviews (>250 chars — Michelle, Daphne, Candice, Joan) render with a CSS 5-line preview and a `Read more` button. Clicking the button (a) expands the full body, (b) flips the label to `Show less`, (c) sets `aria-expanded="true"` on the button. Keyboard `Enter`/`Space` works. Short reviews (≤250 chars) render fully with no button. No visible layout jump beyond the natural height change on expand.
- `[ ]` **Critical.** **Reviews section — bold highlights.** Every TW2111 review body has 1–3 short phrases wrapped in `<strong class="review-highlight">` inside the rendered HTML, matching the `highlights[]` array on that review record in `config.js`. Match is case-insensitive but exact-substring; if the phrase isn't literally in the body it MUST NOT appear as a highlight. No nested `<strong>` tags. *(BRAND_GUIDELINES `Highlighted phrases in reviews`.)*
- `[ ]` **Critical.** **Reviews section — post-conversion CTA.** Below the review list (and below the `Read more reviews` expand button when present), a soft CTA block renders with the heading `Ready to experience it yourself?` and a primary button labeled exactly `Check Availability`. Button href is `#property-availability` and its `onclick` calls `scrollToPropertyCalendar(event)`. Clicking scrolls smoothly to the availability/calendar section and focuses it. No urgency copy anywhere in this block.
- `[ ]` **Standard.** **Reviews section — expand button copy.** When more than `REVIEWS_PREVIEW_COUNT` (3) reviews exist, the bottom expand button reads exactly `Read more reviews` (no count, no dynamic number). Clicking flips it to `Show fewer reviews`. *(Copy generic-ized 2026-07-06 evening per owner directive — count removed from the button label.)*
- `[ ]` **Critical.** Property availability calendar renders, blocks out unavailable dates from `config.js`, and does not allow selection of blocked days.
- `[ ]` **Critical.** Pricing calculator returns the expected total (base × nights + cleaning + tax) with correct seasonal adjustments from `config.js`.
- `[ ]` **Critical.** Inquiry path (`mailto:` link or contact form) prefills the correct property, dates, and guest count.
- `[ ]` **High.** Contact / booking path is clear — a guest can go from homepage to inquiry in under three clicks.
- `[ ]` **High.** No dead ends — every "learn more" or "check availability" click leads somewhere.
- `[ ]` **Critical.** No exposure of internal fields (owner email plaintext where it shouldn't be, admin data, seasonal-adjustment multipliers).
- `[ ]` **Standard.** The direct-booking value message ("no OTA service fees") is present at least once on the property page.

---

## 9. Sync QA

Run on every change that touches a property's `MASTER.md` or any platform file (`WEBSITE.md`, `AIRBNB.md`, `VRBO.md`, `BOOKING.md`).

- `[ ]` **Critical.** The edit was made in MASTER.md first — never a platform file first. If a platform file was edited independently, flag the divergence and reconcile.
- `[ ]` **Critical.** Facts identical across MASTER and every regenerated platform file: bedrooms, bathrooms, sleeps, address, host name, cancellation policy, amenities list.
- `[ ]` **Critical.** No [forbidden language](../sync/SYNC_RULES.md#forbidden-language-sync-gate) present in any platform file — grep passes.
- `[ ]` **Critical.** [Required language](../sync/SYNC_RULES.md#required-language-sync-gate) present where the section applies (beach chairs / umbrella phrasing verbatim, Owner Hosted, StayAtFlorida master brand).
- `[ ]` **High.** Character limits respected on every platform: Airbnb title ≤50, VRBO title ≤65, Booking title ≤70, meta title ≤60, meta description ≤160.
- `[ ]` **High.** Photo caption library from MASTER reflected consistently across every platform.
- `[ ]` **High.** MASTER.md has a fresh `## Changelog` entry with today's date and a one-line summary of the change.
- `[ ]` **High.** No new fact was introduced on a platform file without appearing in MASTER.
- `[ ]` **Standard.** Approved CTA vocabulary used on every platform where CTAs apply. Booking gets the factual variant; Airbnb / VRBO get the value-forward variant; direct site homepage hero uses `Explore Signature Properties` and reserves `Book Direct & Save` for the `Why Book Direct?` section only.
- `[ ]` **Critical (workflow).** No API call, SDK, or browser-automation was used to push content to Airbnb, VRBO, or Booking. Output is markdown only; publishing is the human's job.

Verification grep (from repo root):

```bash
grep -rniE "serenity rentals?|fun in the sun|luxury beach service|reserved beach chairs|private beach|guaranteed sunset|dream vacation|paradise awaits|best condo ever|21st(-| )floor|floor 21|8th floor" docs/listings/
```

Expected result: zero matches.

---

## 10. Final QA Summary

The AI's final response after any non-trivial change **must** include a QA Summary. Use this template verbatim:

```
### QA Summary

**Files changed**
- <path/to/file-1>
- <path/to/file-2>

**What was tested**
- [Section name from QA_CHECKLIST.md] — pass / fail / skipped, with one-line note
- e.g. Brand QA — pass (grep clean, no legacy names reintroduced)
- e.g. SEO QA — pass (JSON-LD regenerated, canonical URLs verified)
- e.g. Performance QA — skipped (no image or script changes)

**Risks / assumptions**
- Anything not verifiable in this session (live browser test, real-device test, network throttling, actual OTA rendering).
- Any override the user granted.

**Remaining recommended improvements**
- Follow-up items surfaced during QA but out of scope for this change.
```

**Rules for the summary:**

- Every section run **must** be listed with a pass / fail / skipped status.
- Never claim "all sections passed" without listing them.
- Never omit failures. Failures either block the release or are explicitly overridden by the user, in writing, in this session.
- Keep it under 15 lines. If the change was truly trivial (doc-only, non-guest-facing), a one-line "QA: doc-only change, no guest-facing surface affected" is acceptable in place of the full block.

### Sync QA Summary (property-content changes)

For any change that touched a property's `MASTER.md` or a platform file, the response must **also** include this block (in addition to, or in place of, the general QA Summary):

```
### Sync QA Summary
- **Files Updated:** listings/{CODE}/MASTER.md, WEBSITE.md, AIRBNB.md, VRBO.md, BOOKING.md
- **Character Limits Passed:** Airbnb title (48/50), VRBO title (57/65), Booking title (61/70), meta description (156/160), Airbnb summary (487/500)
- **Brand Review Passed:** Forbidden-language grep clean; required-language present on every platform; MASTER changelog entry added
- **Remaining Manual Actions:** Owner to copy AIRBNB.md into Airbnb's listing editor, VRBO.md into VRBO's editor, BOOKING.md into Booking.com's editor; verify each platform's preview matches the file before publishing
```

Sync QA Summary is required because Cursor never publishes to OTAs — the "remaining manual actions" section is where the human hand-off is documented.

---

## When to run which sections

Not every change needs every section. Quick lookup:

| Change type | Sections to run |
|---|---|
| Copy edit on the site | 1 Brand, 2 Content, 3 SEO, 10 Summary |
| New meta tag / JSON-LD update | 3 SEO, 10 Summary |
| CSS / layout change | 4 UX, 5 Mobile, 6 Accessibility, 7 Performance, 10 Summary |
| New image added | 3 SEO (alt text), 6 Accessibility, 7 Performance, 10 Summary |
| Booking flow tweak | 4 UX, 5 Mobile, 8 Booking Flow, 10 Summary |
| **MASTER.md edit + platform regeneration** | **1 Brand, 2 Content, 3 SEO, 9 Sync, 10 Summary (with Sync QA Summary block)** |
| **Platform file edit only (override)** | **1 Brand, 2 Content, 9 Sync, 10 Summary (flag MASTER divergence)** |
| New property added | 1 Brand, 2 Content, 3 SEO, 4 UX, 5 Mobile, 6 Accessibility, 7 Performance, 8 Booking Flow, 9 Sync, 10 Summary (full run) |
| Rebrand / brand-standards refresh | All sections, full run |
| Pure documentation edit (governance docs) | 10 Summary only (one-line acceptable) |

If you're unsure whether a section applies, run it. Over-checking is cheap; a shipped regression is not.

---

## Recommended tools

The QA Agent doesn't need paid tools. Everything below is free and available in-browser.

| Section | Tool | What it verifies |
|---|---|---|
| 1 Brand | `grep` / `rg` / PowerShell `Select-String` | Retired-name and banned-phrase scan (see [BRAND_GUIDELINES.md#grep-gate](BRAND_GUIDELINES.md#grep-gate-pre-ship-check)) |
| 2 Content | Manual read + [Hemingway Editor](https://hemingwayapp.com) | Sentence readability, hype-word detection |
| 3 SEO | [Google Rich Results Test](https://search.google.com/test/rich-results) | JSON-LD validation, rich-result eligibility |
| 3 SEO | [Schema.org validator](https://validator.schema.org) | Raw schema validation |
| 3 SEO | Browser view-source | Meta title, description, canonical, headings audit |
| 3 SEO | [Google Search Console](https://search.google.com/search-console) | Post-ship coverage, canonical acceptance, indexing status |
| 4 UX | Chrome / Firefox DevTools | Sticky elements, z-index, hit-area verification |
| 5 Mobile | Chrome DevTools → Device Toolbar (iPhone 13, Pixel 5, iPad) | Layout at 375, 393, 768 widths |
| 5 Mobile | Real device where possible | Touch behavior the emulator can't simulate |
| 6 Accessibility | [axe DevTools extension](https://www.deque.com/axe/devtools/) | Automated a11y scan (60–70% of common issues) |
| 6 Accessibility | Keyboard-only navigation (Tab / Shift+Tab / Enter / Space) | Focus order, focus visibility, keyboard traps |
| 6 Accessibility | Chrome DevTools → Rendering → Emulate vision deficiencies | Color-contrast blindness scenarios |
| 6 Accessibility | Screen reader (NVDA on Windows, VoiceOver on Mac) | Alt text quality, label associations, landmark navigation |
| 7 Performance | [PageSpeed Insights](https://pagespeed.web.dev) | Real-user Core Web Vitals + lab metrics |
| 7 Performance | Chrome DevTools → Lighthouse | LCP, CLS, INP, TBT, opportunities |
| 7 Performance | Chrome DevTools → Network (throttled to "Fast 3G") | Realistic load on non-fiber connections |
| 7 Performance | Chrome DevTools → Performance → Layout Shift regions | Visualize CLS sources |
| 8 Booking Flow | Manual click-through in an incognito window | End-to-end guest experience without cached state |
| 8 Booking Flow | `mailto:` link tester — click the CTA, confirm mail client opens with correct pre-fill | Recipient, subject, body |
| 9 Sync | `grep -rniE` (see [`../sync/SYNC_RULES.md#forbidden-language-sync-gate`](../sync/SYNC_RULES.md#forbidden-language-sync-gate)) | Forbidden-language scan across all platform files |
| 9 Sync | Character counter (e.g. `echo -n "title" \| wc -c` or any online char counter) | Airbnb / VRBO / Booking title + summary length compliance |
| 9 Sync | Manual diff MASTER vs. each platform file | Facts identical, only presentation differs |

**Rules:**

- Never claim a section passed without running at least one tool from its row.
- Never claim performance passes without a Lighthouse or PageSpeed run in the current session.
- Never claim accessibility passes on manual review alone — axe finds things the eye misses.
