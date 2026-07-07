# Brand Guidelines

> **Purpose:** Everything an AI agent or contributor needs to know about how StayAtFlorida sounds and looks *before* writing a headline, listing description, meta tag, email, or button label.
>
> **Ground truth:** [`StayAtFlorida-Brand-Standards-v1.0.md`](../../StayAtFlorida-Brand-Standards-v1.0.md) at the repo root. If this file ever contradicts it, the root standards win.
>
> **Owned by:** [Brand Director](AGENTS.md#2-brand-director). **Reviewers on changes:** Marketing Director, CGO Agent, QA Agent (before ship). See [Doc ownership](AGENTS.md#doc-ownership).

---

## Core identity

| Field | Value |
|---|---|
| Master brand | **StayAtFlorida** |
| Tagline | **Luxury Beachfront Vacation Homes** |
| Brand promise | Where unforgettable beach memories begin. |
| Category | Owner-hosted luxury beachfront vacation homes on Florida's Gulf Coast |
| Positioning | Premium boutique hospitality — not a generic vacation rental |
| Current portfolio | Twenty First (Panama City Beach), Majestic Sun 811 (Miramar Beach / Destin) |

**Signature property naming convention:**

> **Twenty First**
> *A StayAtFlorida Signature Property*
> Tagline: *Above the Gulf. Beyond Expectations.*

Future properties follow the same pattern: **Property Name → "A StayAtFlorida Signature Property" → one tagline line**. Names must be short, elegant, timeless, unique.

---

## Voice and tone

Write like a **boutique hotel**. Never like a real estate listing or an OTA description.

The brand voice is:

- Warm
- Relaxed
- Sophisticated
- Trustworthy
- Welcoming
- Professional

The brand voice is **never**:

- Flashy
- Loud
- Salesy
- Overly casual
- Cheesy

### Before / after examples

| Real-estate voice (reject) | Boutique voice (ship) |
|---|---|
| Fully equipped kitchen with granite countertops and stainless appliances. | Gather around after a day on the sand to prepare breakfast, share family dinners, or open a bottle of wine on the balcony as the sun sets. |
| King bedroom, 240 sq. ft. | Drift off after watching the sunset from the balcony and wake up refreshed for another day at the beach. |
| 21st-floor unit at Tidewater Beach Resort with 3BR/3BA and 4,300 sq. ft. gym. | A 3-bedroom, 3-bath luxury beachfront retreat designed for families who want to slow down, watch the water, and reconnect. |
| Dream getaway on Florida's Gulf Coast! | Luxury Beachfront Vacation Homes on Florida's Gulf Coast. |

---

## Words we use

Use these words when they fit naturally. Do not force them.

- Luxury
- Comfort
- Experiences
- Views
- Memories
- Hospitality
- Connection
- Relaxation
- Owner-hosted
- Signature
- Beachfront
- Gulf
- Family
- Book direct

## Words we avoid

These are overused, low-credibility, or off-brand:

- Paradise
- Dream getaway
- Dream vacation
- Amazing
- Best ever
- Perfect (as brand copy — fine inside a real guest review)
- Luxury! (or any use of exclamation marks on the word "luxury")
- Bliss
- Escape
- Fun in the Sun
- Serenity
- Any all-caps headlines
- Emojis in guest-facing web copy

## Words we never use

Hard blocks. Reject any change that introduces these into brand-facing copy:

| Never | Why |
|---|---|
| Serenity Rentals | Retired legacy brand. Use StayAtFlorida. |
| Serenity Rental | Same. |
| Fun in the Sun | Retired legacy phrase; also on the generic-name block list. |
| 21st floor / 21st-floor / floor 21 | Floor numbers are never disclosed. Elevator wait times are the reason. |
| Any phrase implying **we** provide beach service, chair delivery, or a beach setup crew | We do not provide beach service. On-beach vendors do — see the "Beach chairs and umbrella" section below for how to phrase it. |
| Any phrase implying staff / concierge on the beach | Same reason — we are owner-hosted, not a resort concierge. |

## Tidewater handling

Tidewater Beach Resort is the community that houses Twenty First. It is **operational context**, not the brand.

- Do **not** lead with Tidewater in titles, meta, hero copy, or property card copy.
- Mention Tidewater only where operationally required: the location paragraph (once), the registration/parking section, and the community registration link.
- Never write "Tidewater 2111" or any unit number in guest-facing copy.

## Beach chairs and umbrella

Two things exist, and they must never be mixed up in copy:

**1. What WE provide (complimentary, always available):**

> **complimentary beach chairs and umbrella available in the condo**

Guests grab these from the condo and bring them down each morning. This is the always-safe, on-brand language.

**2. What third-party VENDORS on the beach provide (paid, optional):**

> **Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.**

This is a factual, guest-friendly mention of an add-on option that guests can buy on the beach if they want a full setup. It is not our service, and we never take payment for it, quote prices, or name specific vendors (they change seasonally).

Approved compact combined form (use in FAQs, descriptions, and post-booking replies):

> Complimentary beach chairs and umbrella are available in the condo. If you'd prefer a full setup on the sand, beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.

Never say (still forbidden):

- "We provide beach service"
- "Beach service included"
- "Our beach setup crew"
- "Chairs delivered to the sand" *(the vendors bring their own — we don't do this)*
- "Luxury beach service" *(marketing overreach)*
- "Complimentary beach set-up" *(only chairs/umbrella in the condo are complimentary)*
- Any wording that lets the guest assume WE are the beach-service provider.

## Elevators, buildings, and HOA

These are on the "never lead with" list from the brand standards. Guests may encounter them; guest communication (post-booking) can explain them factually. Marketing copy on the site and OTAs must not lead with them.

---

## Formatting rules

- **No emojis** in guest-facing site copy, meta tags, listing descriptions, or OTA copy. The lifestyle-photo checklist in the brand standards is the only place emojis appear, and that is an internal-photography reference, not shipping copy.
- **No exclamation marks** in headlines, taglines, hero copy, or meta descriptions. Reviews are UGC and stay as written.
- **Sentence case** for headings by default. Title Case only for the property name and the "A StayAtFlorida Signature Property" line.
- **Straight or curly quotes** — pick one and stay consistent within a file. Existing site copy uses curly quotes (`'`, `"`, `"`, `'`) in HTML entities where possible.
- **En dashes (`–`) for ranges**, em dashes (`—`) for parenthetical breaks, **hyphens only** inside compound words.

---

## Legal / factual guardrails

- Never overpromise availability, view lines, or amenities.
- Never state a guaranteed sunset, wildlife sighting, or weather.
- Never claim a rating we don't have; the aggregate rating comes from the review data in `config.js`.
- Never promise pricing; the pricing calculator shows *estimated* rates and the site copy already reflects that.
- Never hide third-party fees, but be honest about **who** is collecting them. Any charge the guest experiences as part of their total spend must be disclosed on the property page. **Where** it's disclosed depends on who's charging it:
    - **Fees collected by StayAtFlorida** (nightly rate, cleaning, taxes) — shown as line items on the price calculator and included in the `Estimated Total`.
    - **Fees collected by a third party** (e.g., the Tidewater Beach Resort Registration Fee for TW2111 — labelled `Resort Registration Fee` per the Final Polish rename on 2026-07-02) — shown in the `Before You Arrive` card with a distinct action button (e.g., `Register with the Resort`) rather than on the calculator. Rationale: including a third-party fee inside the "Estimated Total" misrepresents what StayAtFlorida is charging; putting it on its own action card is more honest, not less transparent. **Updated 2026-07-06 for TW2111** — see TW2111 MASTER §21 Placement rule for the canonical policy and CTA rule.
    - **Never add a duplicate "fee disclosure note" beneath the calculator.** If the fee is a third-party pass-through, `Before You Arrive` is the single surface for it.
- **Baked-in pricing adjustments** (e.g., an extended-stay uplift, seasonal pricing multiplier, or last-minute discount) may be absorbed into the `Nightly Rate` row of the price calculator without a separate line item — **but only** when three conditions all hold: (a) the row's displayed value equals the amount the guest will actually pay for lodging over the stay, (b) the `Estimated Total` shown on the calculator equals the final total the guest will pay at booking, and (c) the pricing policy is documented in the property's `MASTER.md` §21 Fee Schedule and reproduced in `WEBSITE.md`. **Baked-in is not the same as hidden.** A hidden fee shows one number in the calculator and a different number at checkout — that's forbidden. A baked-in adjustment shows the same real total in both places; the only difference is whether we itemize *why* the nightly-rate row is at its value. TW2111's 2026-07-06 extended-stay uplift ($100 flat on 3+ night stays, absorbed into the `Nightly Rate` row) is the canonical example — see TW2111 MASTER §21 Extended-stay uplift disclosure rule.
- **Review author display (REVERTED 2026-07-02, Final Polish pass — supersedes the earlier pseudonym allowance from the same day).** Reviews with unknown author names must be published under the platform-generic label (`Verified Airbnb guest` / `Verified VRBO guest`) — **do not invent first-name + last-initial pseudonyms**, do not fabricate city labels, do not add a "Names anonymized for guest privacy" disclosure. Owner directive: publish only real, owner-supplied identifiers, or the platform-generic label. Consequences of identical author strings across many reviews (Google may suppress the aggregate-rating rich snippet) are an accepted trade-off. Retirement condition: when the owner supplies real first names (or approves an alternative identifier convention such as city labels) from platform host dashboards, swap the identifiers in place and log the change in the affected listing's Review Author Naming Policy section. See TW2111 MASTER §23 for the canonical rolled-back state.

---

## When you are unsure

Run the change through the **Internal Decision Filter** from the brand standards:

1. Does this strengthen the StayAtFlorida brand?
2. Does it help a guest picture themselves on vacation?
3. Does it justify our premium pricing?
4. Is it authentic and sustainable?
5. Would a guest remember this six months after their stay?

If the answer is "no" to most of those, don't ship it. Flag it in the PR / chat and defer to the [Brand Director](AGENTS.md#2-brand-director) agent role.

---

## Copy templates by surface

Approved patterns for every recurring copy surface. Adapt to the specific property, but don't drift from the shape.

### Hero H1 (homepage)

Approved:

- `Book Direct. Stay Better.` *(current)*
- `Luxury Beachfront Homes on Florida's Gulf Coast.`

Rejected:

- `Welcome to Paradise!`
- `Your Dream Florida Escape Starts Here`
- `Book Your Perfect Vacation`

### Hero eyebrow (kicker above the H1)

Approved:

- `Luxury Beachfront Vacation Homes` *(current)*
- `Owner-Hosted · Gulf Coast Florida`

Sentence case, uppercase tracked in CSS. Never punctuate with an exclamation.

### Property card subtitle

Always: `A StayAtFlorida Signature Property`. No variants.

### Property card short blurb (30–45 words)

Pattern: **one experiential sentence** ending in a period, no CTA.

Approved (Twenty First):

> A three-bedroom beachfront retreat above the emerald Gulf, designed for families who want to slow down, watch the water, and reconnect.

Approved (Majestic Sun 811):

> A Gulf-view retreat in Miramar Beach, steps to the sand and moments to Seascape's pools and dining.

Rejected:

> Amazing 3BR beachfront condo, sleeps 8, direct beach access, full kitchen, pool, hot tub, book now!

### Meta title

Pattern: `{Property name or page} | {short qualifier} · StayAtFlorida` — under 60 characters.

Approved:

- `Twenty First — Luxury Beachfront in Panama City Beach | StayAtFlorida`
- `StayAtFlorida | Luxury Beachfront Vacation Homes`
- `Contact | StayAtFlorida`

Rejected:

- `LUXURY BEACHFRONT CONDO PANAMA CITY BEACH FLORIDA GULF COAST DIRECT BOOK NOW`
- `Cheap Vacation Rental in PCB - Book Now!!`

### Meta description

Pattern: **one honest, human sentence** — 150–160 characters — one location term, one value term, no exclamation.

Approved (Twenty First):

> Luxury 3-bedroom, 3-bath beachfront home in Panama City Beach with Gulf views, resort amenities, and direct-booking savings — StayAtFlorida.

Rejected:

> BEACHFRONT!! Book NOW!! Amazing views, PERFECT for families, best rates, luxury paradise on the Gulf Coast!!!

### OTA platform titles

Introduced 2026-07-06 evening (Phase 3 initiatives #5 + #6 + #11); extended 2026-07-07 with Houfy (initiative #12). Non-negotiable rules for every OTA listing headline / title field. Enforced by Marketing Director + Brand Director on any OTA copy change. See `docs/listings/*/AIRBNB.md#title--locked-ship-string-phase-3-initiative-5-2026-07-06`, `docs/listings/*/VRBO.md#headline--locked-ship-string-phase-3-initiative-6-2026-07-06`, `docs/listings/*/BOOKING.md#property-name--locked-ship-string-phase-3-initiative-11-2026-07-06`, `docs/listings/*/HOUFY.md#title--locked-ship-string-phase-3-initiative-12-2026-07-07`, and MASTER §12 for the currently-shipping strings.

#### Brand prefix identity

- **The first ~29 characters of every OTA title must be identical across every platform.** Currently: `Twenty First · Gulf-Front 3BR`. This is a deliberate cross-platform recognition mechanism — a guest who cross-shops the same brand on Airbnb → VRBO → Booking.com → Houfy (a large share of high-consideration vacation-rental bookers do exactly this) reads the same brand+differentiator every time. Consistent prefix, platform-specific tails.
- Never introduce a platform-specific title that breaks the prefix identity. If a future title change is needed on one platform, the change either applies to all platforms or the change is rejected.

#### Middot separator

- The separator glyph is `·` (U+00B7, middle dot). Do not substitute `•` (bullet), `.` (period), `-` (hyphen), or `|` (pipe). The same glyph is used on the direct site (hero trust strip, reviews aggregate summary) — one visual rhythm across every brand touchpoint.

#### Platform limits and prime real estate

- **Airbnb:** input field limit 50 chars; mobile search tiles truncate at ~35 chars. First 35 characters carry ~80% of the click decision on mobile. Keep the brand + differentiator inside that window. Do not include the city in the title — Airbnb already surfaces the city as a tile subtitle; duplicating it wastes prime real estate. (Verified 2026-07-06 via [Airbnb Resource Center](https://www.airbnb.com/resources/hosting-homes/a/guidelines-for-writing-your-listing-title-533).)
- **VRBO:** input field range 20–80 chars for the headline; ≤40 chars is the soft-recommended threshold for search prominence. VRBO surfaces the city less prominently on tiles than Airbnb — include the city in the headline itself. Include `Sleeps N` because VRBO's core audience filters on guest count first. (Verified 2026-07-06 via [VRBO Help — About listing guidelines](https://help.vrbo.com/articles/What-are-the-listing-guidelines).)
- **Booking.com:** `Property Name` field is the title equivalent; practical budget ~65 chars for a comfortable read on the search-result card, ~70 chars typical extranet input maximum (verify per-market before locking). Booking.com surfaces the city on the search-result card via breadcrumbs but less prominently than Airbnb's tile subtitle — include the city in the property name. Include the bath count (`3BR/3BA` format) — Booking.com is hotel-style; bath count is a stronger filter signal here than on Airbnb / VRBO. Never reference competing OTAs by name in the title (`Airbnb`, `VRBO`, `Vrbo`, `Airbnb Superhost`, `Premier Host`, `Airbnb Plus`) — Booking.com's content-moderation flags cross-OTA references as potential channel steering. **URL slug trade-off:** Booking.com does not allow slug edits on live listings; accept the legacy slug on any rebrand-in-place pass and rebrand every other user-visible field. (Verified 2026-07-06 via Booking.com extranet policy documentation.)
- **Houfy:** description-title field renders 60–64 chars comfortably in the "About this place" H3 (verify per-market before locking any longer variant). Houfy's audience most closely resembles VRBO's — high-consideration, family-and-group bookers who filter by guest count and city. Houfy is technically an OTA competitor positioning itself as "no-commission, owner-direct," so cross-OTA references by name in the title or Overview body read as either promotion of a competitor (`Airbnb`, `VRBO`, `Booking.com`) or protest-too-much cross-shopping defense (`Superhost`, `Premier Host`). Never reference competing OTAs by name in Houfy copy — trust signals stand on specifics (tenure, reply speed, owner-hosted). Never include `book direct` / `save fees` / `no service fees` in the Overview body — Houfy's own platform UI already surfaces the fee comparison. **URL slug trade-off:** Houfy DOES allow slug edits on live listings (verified 2026-07-07 on TW2111 — legacy `/lodging/fun-in-the-sun/` successfully retargeted to `/h/twentyfirst`) — retarget legacy P1-violating slugs to brand-aligned slugs on any Houfy rebrand pass. **External URLs get silently stripped from the description body** (verified 2026-07-07 — a paste of `https://tidewaterhoa.com` was replaced with `[Removed]` on publish). Never paste external URLs into a Houfy Overview; either omit them or move them to the arrival-instructions message the host sends before check-in. **Two title-like fields:** Houfy renders both a page H1 (short listing name — separate editor field) AND a description H3 (from the "About this place" title). Verify BOTH carry the `Gulf-Front 3BR` differentiator, not just the description H3 — the H1 is what Google indexes and Houfy search tiles surface.
- Re-verify all limits once per quarter — platforms adjust silently, and a headline that read at 50 chars but exceeds an updated 45-char cap gets auto-truncated at the tail (killing whatever hook was engineered there).

#### Never in an OTA title

- Floor number (`21st`, `21st floor`, `Floor 21`, `8th floor`).
- Unit number (`unit 2111`, `TW2111`, `condo 2111`).
- Retired brand names (`Fun in the Sun`, `Serenity`, `Serenity Rentals`).
- Resort name as a lead (`Tidewater Beach Resort · Twenty First …`) — the property brand leads, the resort is context (mentioned in the body copy where operationally required, never in the title).
- Adjectives without proof (`Amazing`, `Stunning`, `Perfect`, `Beautiful`, `Dream`, `Paradise`).
- Soft-positioning language in the title itself (`Luxury`, `Boutique`, `Signature`) — reserve for the description body where it can be substantiated; in the title it reads as filler that costs chars in a fixed budget. Exception: `Luxury` may appear on a case-by-case basis if it displaces a weaker word AND the chars fit AND the Brand Director signs off; default posture is to keep it out.
- Marketing punctuation: `!`, `!!!`, all-caps, price claims (`Best rate`, `Book Direct & Save`), urgency language (`Book Now`, `Special offer`, `Ends today`).
- Emoji.

### Primary CTA

Approved (choose one for its context):

- `Inquire` — **site-wide header CTA (added 2026-07-02).** Present on every page. Opens the existing inquiry modal (`showContactModal()`). Never build a duplicate form. Visual style: outlined-primary pill (`.btn-nav-inquire`) — premium, understated, always visible on mobile (not inside the hamburger).
- `Explore Signature Properties` — homepage hero primary *(added 2026-07-06 in the Homepage Conversion Polish pass, replacing `Book Direct & Save`. Scrolls to `#properties`. "Rental" and hard-sell CTAs sold the transaction before we sold the collection.)*
- `Book Direct & Save` — **direct-booking / `Why Book Direct?` section only.** No longer used as the homepage hero primary. Reserved for the OTA-fee value story.
- `Send an Inquiry` — homepage inquiry / contact section primary *(added 2026-07-06). Opens the same `showContactModal()` as the header `Inquire` button. Email address stays visible below as a secondary affordance.*
- `Check Availability` — property page hero primary
- `View Photos` — property page hero secondary
- `Email to Reserve These Dates` — price calculator submit
- `Email to Book` — sticky bottom bar (mobile property page)
- `See Our Properties` — footer / cross-links
- `View Property` — homepage property card

Rejected:

- `Book Now!`
- `Reserve Instantly`
- `Get 20% Off`
- `Claim Your Stay`
- `Contact` *(retired 2026-07-02 in favor of `Inquire` — clearer for a vacation-rental site)*
- Any new CTA wording not on the approved list above without a Brand Director review pass.

### Homepage hero eyebrow

Approved (as of 2026-07-06): **`A Boutique Beachfront Stay Collection`**

Retired: `A Boutique Beach Rental Brand` *("Rental" reads transactional; "Stay Collection" supports the boutique-hospitality positioning without overpromising.)*

Never use: `Vacation rentals`, `Home rentals`, `Cheap beach stays`, `Ultimate paradise` in this slot.

### Email subject (host outbound)

Approved:

- `Your Twenty First reservation — [dates]`
- `Welcome to Twenty First — arrival details`
- `Thanks for staying at Twenty First`

Rejected:

- `🌴 Your dream vacation awaits! 🌴`
- `IMPORTANT: Please read`
- Anything with all-caps or three exclamation marks

### Review response (public reply)

Pattern: **thank the guest by first name → reference one specific detail → close warmly**. One to three sentences. No boilerplate.

Approved:

> Thank you, Dominique — so glad you enjoyed the view and the space felt right for your family. Come back any time; we'd love to host you again.

Rejected:

> Thank you for your wonderful review! We are so happy you had an amazing time at our property! We look forward to hosting you again soon!!!

### Reviews on the direct site

Non-negotiable rules for anything that renders inside the property-page reviews section, enforced by every reviewer role (Chief Growth Officer, Brand Director, SEO Expert, QA Agent) and by the operating-system's honesty guarantee:

#### No rating manipulation

- **Every review rating rendered on the Website is the exact rating the guest gave on the source OTA.** No upward adjustment, no downward adjustment, no averaging, no rounding to make the aggregate look cleaner.
- If a captured review has a sub-max rating (e.g., 8/10 on VRBO, 4 stars on Airbnb, 9/10 on Booking.com), the response is **exclude the review from publication**, not adjust the number.
- This applies to individual `Review.reviewRating.ratingValue` in schema.org markup **and** to any `AggregateRating.ratingValue` rendered on the page or in JSON-LD.
- Rationale: FTC 16 CFR Part 465 (Deceptive Reviews and Testimonials) explicitly prohibits misrepresenting the substance or rating of a consumer review. Cross-platform verification exposes any discrepancy in one screenshot. Google's rich-results validators flag rating mismatches between site markup and third-party sources and can strip star display from search results. And we do not need to fabricate — a curated selection of real max-rating reviews delivers the same aesthetic outcome with none of the exposure.

#### No fabricated reviewer identities

- Reviewer `author` strings on the Website are sourced from the guest's public OTA display name. Approved formats:
  - **Hybrid (current TW2111 policy):** first name only, no last initial. Matches what Airbnb + Booking.com already show publicly. See `docs/listings/TW2111/MASTER.md#23-review-author-naming-policy`.
  - **Full first + last initial:** as it appears on VRBO. Available as a reversal path.
  - **Platform-generic placeholder:** `Verified guest` (used as an attribution complement, or standalone if names are ever pulled).
- Never invented pseudonyms. Never composited "first name from city, last initial from month" style constructions. If the real name is not available, use the platform-generic placeholder.
- Review *bodies* are the guest's own words with only two trim categories allowed: resort-wide operational commentary that doesn't reflect the property (elevator wait times at Tidewater), and content that violates other brand rules (e.g., floor-height references). Every trim must be documented in the property's curation shortlist.

#### Aggregate rating display

- **Default: aggregate is shown**, rendered in the "featured reviews" format: `★★★★★ 5.0 · Average Rating · N Featured Reviews · Verified Guests`. This is the standing TW2111 pattern as of 2026-07-06 evening (see MASTER §23 for policy-decision history).
- The aggregate `ratingValue` and `reviewCount` must derive **directly and only** from the published `REVIEWS` array on the property. No rounding, no hand-tuning, no averaging in numbers that aren't in the published set. See `app.js#getReviewAggregate` for the canonical computation.
- **Scope discipline (linked to `No rating manipulation`).** Do NOT claim an aggregate scoped to reviews that are NOT in the published set. Example: TW2111 has 25 published reviews (all real 5-star) drawn from a 33-review OTA archive (which averages 4.74). The site may claim `5.0 from 25 featured reviews`. The site may NOT claim `5.0 from 33 verified reviews` (over-scopes the aggregate onto the 8 excluded sub-perfect reviews). If a future pass wants to surface the broader archive on the site (e.g., "curated from 33 verified reviews across VRBO, Airbnb, Booking.com"), use the honest **4.7 aggregate** for any statement scoped to those 33, and keep the 5.0 aggregate scoped to the published set. Two separate facts, honestly attributed. Never merge.
- A property record MAY set `hideReviewAggregate: true` to suppress the aggregate chip while still rendering individual `Review` markup — kept as an escape hatch, but not the default. As of 2026-07-06 evening, no property currently sets it.
- `AggregateRating` in JSON-LD follows the same discipline: `ratingValue` and `reviewCount` mirror what's rendered on the page; `AggregateRating` is omitted if `hideReviewAggregate` is set.

#### Highlighted phrases in reviews

- Reviews may render 1–3 short **key-phrase highlights** per review body — bold-wrapped substrings that improve scanability without changing the meaning of the review. Config: `highlights: ["..."]` on each entry in `config.js#REVIEWS[<propertyId>]`.
- Each highlight must be an **exact substring of the review body** (case-insensitive match at render time). If the phrase isn't literally in the body, it can't be highlighted — no rewording the review to make a marketing phrase highlightable.
- Highlights are for **honest scannable trust signals** — "extremely clean", "great host", "easy beach access", "definitely recommend", "kitchen had everything". Not for hyperbole, not for creating claims the guest didn't make.
- Cap: max 3 highlights per review. Above that the section starts to feel busy and the trust signal weakens. Prefer 1–2 for shorter reviews.
- Rendered as `<strong class="review-highlight">` via a non-overlapping match-range emitter in `app.js#renderReviewComment`. Overlapping phrases resolve longest-wins (so `great host` beats `host`).

#### Featured "Guest Favorite" review card

- At most **one** review per property may carry `guestFavorite: true` — that review is pinned above the review list as a "Guest Favorite" featured card.
- Must be a **real review** from the published `REVIEWS` array. No fabrication, no rewriting, no compositing across multiple reviews. Same body verbatim as anywhere else on the site.
- Rotate the pin manually only, with owner sign-off. Do not automate rotation — the editorial curation signal is part of the trust delivered.
- The "Guest Favorite" badge and card style live in `styles.css` (`.review-featured*`); do not apply the badge to any element that isn't gated by `guestFavorite: true` on a real config-driven review record.

#### Section heading and CTA

- Canonical section heading: **`What Our Guests Are Saying`** (with `Loved by Our Guests` retained as an approved alternative for future style rotations only — do not use both simultaneously). Applies to both TW2111 and MS811. Previous heading `Guest Reviews` is retired.
- Post-reviews conversion CTA is a soft prompt (`Ready to experience it yourself?` / `Check Availability`) linking to `#property-availability` and reusing the same `scrollToPropertyCalendar()` handler as the hero-level CTA. Do not replace the CTA copy with urgency language (`Book now before dates disappear`) — see `Urgency / scarcity messaging` guardrail below.

#### Long-review preview and expand

- Reviews whose raw comment length exceeds the threshold in `app.js#REVIEW_PREVIEW_CHAR_LIMIT` (currently 250 chars) render with a JavaScript-produced preview (`truncateReviewText` helper, word-boundary trim, target ~220 chars) and a `Read more` / `Show less` toggle. The toggle swaps the `hidden` attribute between preview and full-content `<span>` elements, so screen readers always announce the current visible copy. `aria-expanded` mirrors state transitions.
- Do NOT truncate the review body in `config.js` — always store the full text. Truncation is presentational, applied at render.
- The threshold may be tuned in one place (`app.js#REVIEW_PREVIEW_CHAR_LIMIT`), but any change must be tested on mobile widths (320px minimum) to ensure the preview still shows ~4–5 lines. Previous CSS-based `-webkit-line-clamp` approach retired 2026-07-06 evening after debugging revealed the clamp was not activating on flex children.

### Host trust badges

Verified badges awarded to Simone by OTA platforms — surfaced on the direct site to close the "who's hosting this?" trust gap that OTAs solve for free but direct sites often ignore. Introduced 2026-07-06 evening (Phase 3 initiative #40). Rules are as strict as the `Reviews on the direct site` rules above — a Superhost badge is the same class of external verification as a five-star review, and demands the same honesty discipline.

#### Publish only badges we can prove

- Every entry in `config.js#SITE_CONTACT.hostTrustBadges` must be tied to a **captured, dated, on-file screenshot or Markdown-archived source**. Current on-file sources:
  - **Airbnb Superhost:** `docs/listings/TW2111/reviews/2026-07-06-airbnb.md` line 12 — the Airbnb host card literally reads "Superhost, 6 years hosting".
  - **VRBO Premier Host:** `docs/listings/TW2111/reviews/2026-07-06-vrbo.md` line 195 — Simone's owner-response byline reads "VrboOwner, Premier Host" across multiple 2024–2025 responses.
- If a claim cannot be paired with a source in the repo, it does not go on the site. Full stop.
- Never invent a badge (`Booking.com Genius Host`, `Trusted Host`, etc.) that the platform does not actually award.

#### Attribution is mandatory

- Every badge rendered on the site names the **platform that awards it** (`Airbnb Superhost`, `VRBO Premier Host`). Do not shorten to `Superhost` alone — without the platform prefix the claim reads as our own invented rank.
- Icons/marks on the chips are decorative; they never substitute for the platform name.
- Never mimic the platform's own badge coloring (Airbnb's Rausch red, VRBO's blue) so precisely that a user could mistake the direct site for the platform. The current chip styling (site-primary tint at low opacity) is deliberately restrained.

#### Re-verification cadence

- Airbnb reviews Superhost status quarterly. VRBO reviews Premier Host annually. If either badge lapses, flip `active: false` on that entry in `config.js` — do **not** delete the entry. The audit trail (with the `verifiedOn` date and the archive path) is what protects us against a future "why did we ever claim this?" question, whether from the FTC, Google's rich-results team, or an OTA compliance email.
- QA checklist item: at every quarterly Phase 3 review pass, spot-check that each active badge in `hostTrustBadges` still appears on the corresponding OTA host profile. Update the `verifiedOn` date on any badge re-verified in-cadence.

#### Placement rules

- **Hero trust strip** (`renderListingHeroTrustStrip` in `app.js`): the first active `airbnb-superhost` badge renders as a compact chip immediately after the aggregate-rating chip. Ordering rationale: rating and Superhost are the two strongest single trust signals — they belong side-by-side. Additional active badges are NOT surfaced in the hero strip (mobile-width budget); they live in the sidebar detail.
- **Sidebar trust card** (`renderListingTrustSidebar` in `app.js`): a `Verified host` block beneath the reply-time promise renders all active badges as a small bulleted list, with each badge's `secondary` line ("6+ years hosting") in muted text.
- Do NOT re-surface Superhost claims in the `Why Book Direct` bullets, the `Before You Arrive` card, the FAQ, or the homepage hero. Two placements is the ceiling; more starts to feel like protesting too much and undermines the exact trust the badge is supposed to signal.

### 404 / error page

Pattern: acknowledge → redirect → warmth. See [`404.html`](../../404.html).

Approved H1:

- `Page not found`

Approved body:

> Something's off with that link. Let's get you back to the beach — head to our [homepage](/) or browse our [properties](/#properties).

### Footer brand line

Approved:

- `StayAtFlorida — Luxury Beachfront Vacation Homes on Florida's Gulf Coast.`

Never abbreviate to `SAF`, never punctuate with an exclamation.

---

## Approved tagline library

For quick reuse. Every entry has been through the [Brand Director](AGENTS.md#2-brand-director).

### Master brand taglines

- `Luxury Beachfront Vacation Homes` *(primary)*
- `Where unforgettable beach memories begin.`
- `Owner-hosted luxury on Florida's Gulf Coast.`

### Property taglines

| Property | Tagline |
|---|---|
| Twenty First | `Above the Gulf. Beyond Expectations.` |
| Majestic Sun 811 | *Pending — see [MS811 MASTER](../listings/MS811/MASTER.md#brand-director-follow-ups)* |

New properties: submit three tagline candidates to the Brand Director for review, following the property naming standard in [`PROPERTY_PORTFOLIO.md`](PROPERTY_PORTFOLIO.md#property-naming-standard) and the per-property `MASTER.md` template at [`../listings/TEMPLATE/MASTER.md`](../listings/TEMPLATE/MASTER.md).

### Campaign taglines (approved for reuse)

- `Book Direct. Stay Better.` *(direct-booking value message)*
- `Every stay is a signature stay.` *(collection message)*
- `Your beach, waiting.` *(seasonal / re-engagement)*

Never introduce a new tagline into production without Brand Director sign-off recorded in the PR / chat.

---

## Grep gate (pre-ship check)

Run before shipping any content change. Any hit in guest-facing files is a Critical fail in [`QA_CHECKLIST.md`](QA_CHECKLIST.md#1-brand-qa).

```bash
grep -rniE "serenity rentals?|fun in the sun|21st(-| )floor|floor 21|8th floor|luxury beach service|beach setup crew|we provide beach service|beach service included|chair delivery|dream getaway|dream vacation" \
  --include="*.html" --include="*.js" .
```

Expected result: zero matches in guest-facing files. Matches inside `docs/*.md`, `StayAtFlorida-Brand-Standards-v1.0.md`, `BACKLOG.md`, or `REVIEWS` guest UGC are acceptable.

> **Note on `beach service`:** The literal phrase `beach service` is no longer a blanket forbidden term as of 2026-07-02. Beach chair rental IS available for purchase from third-party vendors on the beach, so we may mention it factually. What remains forbidden is any wording that implies **we** provide beach service. The grep above catches the specific overreach patterns (`luxury beach service`, `beach setup crew`, `we provide beach service`, `beach service included`, `chair delivery`) without producing false positives on approved informational copy.
