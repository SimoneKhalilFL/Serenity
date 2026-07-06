# Twenty First — WEBSITE

> **Derived from:** [`MASTER.md`](MASTER.md). Never edit this file first.
>
> **Owned by:** [Software Architect](../../brand/AGENTS.md#7-software-architect). **Content reviewers:** Brand Director, SEO Expert, Content Sync Agent, QA Agent.
>
> **Purpose:** Platform-ready copy for `stayatflorida.com`. When MASTER.md changes, regenerate this file per [`../../sync/SYNC_RULES.md`](../../sync/SYNC_RULES.md). Copy from here into [`../../../config.js`](../../../config.js) fields.

---

## Homepage Property Card

| Field | Value | `config.js` field |
|---|---|---|
| Card title | Twenty First | `title` |
| Card subtitle | A StayAtFlorida Signature Property | `cardSubtitle` |
| Card blurb | A three-bedroom beachfront retreat above the emerald Gulf, designed for families who want to slow down, watch the water, and reconnect. | `cardShortDescription` |
| Location line | Panama City Beach, Florida | `location` |
| Sleeps line | Sleeps up to 8 · 3 BR · 3 BA | *(derived from `maxGuests`, `bedrooms`, `bathrooms`)* |
| Primary CTA | View Property | *(button label — `app.js#createPropertyCard`)* |
| Card image | `tw-hero-view.png` | `coverImage` |

## Header (site-wide)

Rendered by `index.html` shared nav. Present on every page: homepage, property detail SPA route, `gear.html`, `privacy.html`, `terms.html`, and the static `listing-*.html` redirect stubs.

| Nav item | Text | Destination |
|---|---|---|
| Logo | StayAtFlorida | `navigateHome()` |
| Nav link | Home | `navigateHome()` |
| Nav link | Properties | `scrollToSection('properties')` |
| Nav link | Gear | `gear.html` |
| Nav CTA | **Inquire** | `showContactModal()` — routes to the existing inquiry modal. Never a new form. |

## Hero Section (property page)

| Field | Value | `config.js` field |
|---|---|---|
| H1 | Twenty First | `listingHeadline` |
| Brand subtitle | A StayAtFlorida Signature Property | `listingBrandSubtitle` |
| Tagline | Above the Gulf. Beyond Expectations. | `listingTagline` |
| Location | Panama City Beach, Florida | `location` |
| Hero copy | Wake up above the emerald Gulf and spend the day on sugar-white sand. Twenty First is a three-bedroom, three-bath beachfront retreat designed for families who want to slow down, watch the water, and reconnect. | `listingHeroCopy` |
| **Primary CTA (FROZEN)** | **Check Availability** | *(button — `app.js#renderPropertyDetail` primary CTA)* |
| **Secondary CTA (FROZEN)** | **View Photos** | *(button)* |
| Trust chip strip *(beneath CTAs)* | 5.0★ · Sleeps up to 8 · Simone replies within 2 hours · Full refund 46+ days out | *(rendered by `app.js#renderListingHeroTrustStrip`)* |

**CTA freeze (MASTER §12, Final Polish 2026-07-02):** `Check Availability` and `View Photos` are frozen. Do not swap `Check Availability` for `See Available Dates` or any other variant. Do not swap `View Photos` for `See Photos` / `Gallery`.

## Highlights

Five short bullets. Pulled from MASTER §9 Selling Points. Rendered as a compact strip above the amenities block on the property detail page.

- Panoramic Gulf views from the private beachfront balcony
- Direct beach access from the resort deck
- 3 bedrooms, sleeps up to 8 — including a bunk room for the kids
- Complimentary beach chairs and umbrella available in the condo
- Owner-hosted — book direct and save the OTA service fees

## Amenities (grouped)

Rendered by `app.js#renderGroupedAmenities`. Four canonical categories in order per MASTER §6.

**Inside the Condo** — Full Kitchen (fully stocked) · High-Speed Wi-Fi · Smart TV (every bedroom) · Washer & Dryer (in-unit) · Air Conditioning · Bed & Bath Linens Provided

**Beach Convenience** — Complimentary beach chairs and umbrella (in condo) · Beach Towels Provided · On-Beach Vendor Rentals Available for Purchase

**Resort Amenities** — Gulf-Front Lagoon Pools · Indoor Heated Pool · Hot Tubs · Roman Spa, Sauna & Steam Room · Full Fitness Center · Restaurant, Coffee Shop & Tiki Bar · Outdoor Grilling Area & Gift Shop

**Location & Access** — Direct Beach Access from Resort Deck · Elevator Access to Beach & Parking Levels · On-Site Parking · ~1 Mile to Pier Park · ~35 min to ECP Airport

## A Day at Twenty First (lifestyle module)

Rendered by `app.js#renderDayInTheLife`. Placement: below the hero trust chip strip, above `Stay Details`. Source: MASTER §14b.

Six beats. Elegant one-sentence-per-beat sequence. No exclamation marks, no CTA, no hype.

1. **Sunrise coffee.** Wake to soft light on the water. Coffee on the balcony while the beach is still empty.
2. **Beach time.** Grab the complimentary chairs and umbrella from the condo — the sugar-white sand is right below.
3. **Resort pool.** Trade the beach for the Gulf-front lagoon pool when the sun gets high. Kids splash; adults find a lounger.
4. **Sunset balcony.** Return to the condo for the golden hour. Turquoise chairs on the balcony; the Gulf turns copper.
5. **Dinner with Gulf views.** Cook in the full kitchen or open a bottle on the balcony — dinner as the last light goes.
6. **A quiet evening inside.** Board game at the dining table, a film on the smart TV, or a book on the sleeper sofa. The Gulf keeps time all night.

## Direct-booking trust module (between description and reviews)

Three cards. Placement: below `Stay Details` / description, above `Reviews`.

**Card 1 — You're emailing an owner, not a call center.**
> Every inquiry through this site goes to Simone directly. She typically replies within 2 hours with dates, pricing, and any specific questions about the home.

**Card 2 — The condo matches its photos.**
> Same layout, same finishes, same view. If something changes between booking and check-in, you'll hear it from the owner first — not from the front desk on arrival.

**Card 3 — Cancellation terms are on this page.**
> Full refund if you cancel 46 or more days out. 50% refund 31–45 days before check-in. Non-refundable within 30 days. You see the policy before you email — no surprises at the checkout page.

## Property Description

The `§14 Master Long Description` from [`MASTER.md`](MASTER.md#14-master-long-description), rendered as-is on the property detail page. The direct-booking value sentence in the final paragraph is included on the website only.

**Rule:** Registration mechanics and other operational details do **not** appear in the description body. They belong in the `Before You Arrive` / `During Your Stay` two-card module.

## Before You Arrive + During Your Stay (two-card logistics module — Final Polish 2026-07-02)

Rendered by `app.js#renderStayLogisticsCards`. Placement: below the description, above the FAQ. Two paired cards, side-by-side on desktop, stacked on mobile. Source: MASTER §14a + §14c.

### Card 1 — Before You Arrive

Source: MASTER §14a. Four items in order.

- **Parking** — Up to two on-site parking passes are included with the Resort Registration Fee. Passes are handed out at check-in with the wristbands.
- **Wristbands** — Up to 8 wristbands are included with the Resort Registration Fee. Wristbands are required for every occupant over age 12 to access the resort deck, pools, and beach.
- **Resort Registration Fee** — A one-time $54.04 fee paid directly to the resort before arrival. It includes up to 2 parking passes and 8 guest wristbands. Register at least 24 hours before arrival to save $10.
  - Rendered CTA: **`Register with the Resort`** button → [`https://www.tidewaterhoa.com/registration/`](https://www.tidewaterhoa.com/registration/) (`target="_blank" rel="noopener noreferrer"`).
  - **Not shown on the price calculator** — see §21 Placement rule.
- **Check-in** — From 4:00 PM. Precise arrival instructions and the lockbox code are emailed the morning of check-in.

### Card 2 — During Your Stay

Source: MASTER §14c. Four items in order.

- **Complimentary beach chairs and umbrella (in the condo)** — Complimentary beach chairs and umbrella available in the condo — bring them down each morning. If you'd prefer a full setup on the sand, beach chair and umbrella rental is available for purchase directly on the beach from local vendors.
- **Beach access** — Direct beach access from the resort — elevator down, cross the resort deck, and you're on the sand.
- **Resort amenities** — Gulf-front lagoon pools with hot tubs, indoor heated pool, Roman spa, sauna and steam room, full fitness center, restaurant, coffee shop, and tiki bar. Wristbands required at every checkpoint.
- **Check-out reminders** — Check-out by 10:00 AM. Run the dishwasher, take trash to the chute, leave used towels in the tub, and leave wristbands and the parking pass on the counter. The cleaning fee covers the standard turn — no other pre-departure work.

## Price Calculator — reformatted (Final Polish 2026-07-02)

Rendered by `app.js#renderPriceCalculator`. Structure:

**Panel heading:** `Your Stay` *(was `Price Calculator`)*

**Line items in order (updated 2026-07-06 — Pricing/Logistics cleanup):**

| Line label | Amount | Notes |
|---|---|---|
| Nightly Rate | Sum of nightly rates × seasonalAdjustments | Sub-label: `N nights` (renders below the label) |
| Cleaning Fee | $250 | Fixed. *(A $250 → $200 reduction was staged on 2026-07-06 during the Pricing/Logistics cleanup pass, then reverted the same session before publishing. Held at $250.)* |
| Taxes | (Nightly + Cleaning) × 12% | Percentage moved off the label to keep the line clean |
| *— separator —* | | A hairline rule between the last cost line and the total row |
| **Estimated Total** | Sum | `Total` heading upgraded to `Estimated Total` for accuracy |

**Trust note below the total:** `No OTA service fees when booking direct.`

**Resort Registration Fee is not shown on the price calculator (updated 2026-07-06).** It moved to `Before You Arrive` (Card 1) as a distinct fee bullet with a `Register with the Resort` button. See MASTER §21 Placement rule. Do not re-add a "fee disclosure note" beneath the calculator — the Before You Arrive card is the single canonical surface for that fee.

Rendering rules for the trust note:
- Muted grey text (`--text-secondary`), 0.825rem, single line.
- No color highlight, no icon, no exclamation, no CTA phrasing.
- Sits directly below the `Estimated Total` row and above the `Email to Reserve These Dates` button.
- Never re-word to `Save 15% booking direct!` or similar — the note is factual, not promotional.

**Calculation rules (unchanged):**
- Nightly total: sum of `getAdjustedRate(date, property)` across the stay.
- Cleaning fee: fixed from `property.cleaningFee`.
- Tax: `(nightlyTotal + cleaningFee) × property.taxRate`. Registration fee is **not** re-taxed by our calculator (it's already tax-inclusive from the community).
- Total: `nightly + cleaning + tax + registrationFee`.

**Trust rule (from MASTER §21):** The Resort Registration Fee must always be visible. Never move it to a footnote, never hide it behind a "See fees" toggle.

## Why Book Direct with StayAtFlorida — property-page trust panel (new — Final Polish 2026-07-02)

Rendered by `app.js#renderWhyBookDirect`. Placement: below Availability & Pricing, above Stay Details. Source: MASTER §14d.

**Section title:** `Why Book Direct with StayAtFlorida`

**Lead:** `Same property, better terms — and a real person on the other side of every email.`

**Seven bullets (canonical order — do not vary):**

- ✓ Same property
- ✓ Same great stay
- ✓ No OTA service fees
- ✓ Owner-hosted communication
- ✓ Personal support before your arrival
- ✓ Faster responses
- ✓ Secure direct booking

**Design rules:** Muted background, single-column stacked-list on desktop and mobile (or two-column on desktop if space permits), no CTA, no exclamation marks, no sales language. Distinct from the homepage `Why Book Direct?` 3-card block — do not collapse or duplicate.

## FAQ (canonical order and content)

Rendered as an accordion on the property page and emitted as `FAQPage` JSON-LD by `scripts/lib/listing-schema.cjs` for Google Rich Results. Source: MASTER §22. Ten questions in inquiry-frequency order:

| # | Question | Answer |
|---|---|---|
| 1 | Is parking included? | Yes — up to two on-site parking passes are included with the Resort Registration Fee, plus wristbands for all occupants over age 12. Registration details are in the pre-arrival email. |
| 2 | How do I get to the beach from the condo? | Direct beach access from the resort — elevator down, cross the resort deck, and you're on the sand. |
| 3 | What's the cancellation policy? | Full refund if you cancel 46 or more days before check-in. 50% refund for cancellations 31–45 days out. Non-refundable within 30 days of check-in. |
| 4 | Are beach chairs and an umbrella provided? | Complimentary beach chairs and umbrella are available in the condo for you to use throughout your stay. If you'd prefer a full setup on the sand, beach chair and umbrella rental is also available for purchase directly on the beach from local vendors. |
| 5 | Are pets allowed? | No pets. |
| 6 | What are the check-in and check-out times? | Check-in from 4:00 PM. Check-out by 10:00 AM. Precise arrival instructions and the lockbox code are emailed the morning of check-in. |
| 7 | Is the Wi-Fi fast enough for streaming and remote work? | High-speed Wi-Fi throughout the condo, suitable for streaming and video calls on multiple devices at once. |
| 8 | How far is Pier Park? | About 1 mile — an easy short drive, and a walkable option in cooler months. Pier Park has shops, restaurants, and family entertainment. |
| 9 | What's the closest airport? | ECP (Northwest Florida Beaches International) — about 35 minutes by car. Uber and Lyft are widely available at the airport. |
| 10 | When is the best time of year to visit? | Weather is warmest May through October. Shoulder seasons (late April, September, and early October) have the best value with the least crowded beach. Ask Simone directly for date-specific advice. |

## Reviews section (REVERTED — Final Polish 2026-07-02)

Rendered by `app.js#renderReviews`. Source of review bodies: `config.js#REVIEWS[4]`. **Author display:** all 10 authors ship as the platform-generic label `Verified Airbnb guest` per REVERTED MASTER §23 policy. **No public "Names anonymized for guest privacy" disclosure line** — that line only rendered when pseudonyms were in use and has been removed.

Typography improvements this pass (no content changes):

- Increased vertical rhythm between review cards.
- Tighter meta-line spacing (author + date sit closer to the star row).
- Subtler card borders / hairline dividers so the section reads as a curated wall of quotes, not a list of forms.

## SEO

### Meta Title (60 / 60 chars)

`Twenty First | Luxury Beachfront Condo in Panama City Beach`

### Meta Description (159 / 160 chars — at ceiling)

`Book Twenty First by StayAtFlorida, a luxury beachfront condo in Panama City Beach with panoramic Gulf views, private balcony, resort amenities, and room for 8.`

**Keyword coverage** *(required-keyword audit — every item must be present):*

- `Panama City Beach` — present
- `luxury beachfront condo` — present
- `panoramic Gulf views` — present
- `room for 8` — present
- Master brand `StayAtFlorida` — present (`by StayAtFlorida`)
- Property name `Twenty First` — present

**Length discipline:** The description sits at Google's soft 160-char ceiling. Any future edit that adds characters must first trim elsewhere; the file must never ship at 161+.

**Source of truth:** `config.js` `metaDescription` for property id 4.

### Canonical URL

`https://stayatflorida.com/listing-4.html`

### JSON-LD `priceRange`

`$125-$660` — owner-verified seasonal range. Widened from `$125-$610` on 2026-07-02 to reflect the observed PriceLabs peak of $660 on Labor Day Sunday (Sep 6 2026). See MASTER §21 Fee Schedule. Daily overrides in `data/pricing-4.json` (Jul 2026 → Mar 2027, 225 dated prices).

### Alt Text (per photo)

Use MASTER §18 Photo Caption Library — long-caption column.

## CTA Copy

| Placement | Text | Freeze status |
|---|---|---|
| Header (site-wide) | Inquire | Active |
| Homepage hero primary | Book Direct & Save | Active |
| Homepage card | View Property | Active |
| **Property page hero primary** | **Check Availability** | **FROZEN — do not swap** |
| **Property page hero secondary** | **View Photos** | **FROZEN — do not swap** |
| Price calculator submit | Email to Reserve These Dates | Active |
| Sticky bottom bar | Email to Book | Active |
| Contact modal submit | Send Inquiry | Active |
