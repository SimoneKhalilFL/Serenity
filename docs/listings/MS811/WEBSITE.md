# Westlight — WEBSITE

> **Derived from:** [`MASTER.md`](MASTER.md). Never edit this file first.
>
> **Owned by:** [Software Architect](../../brand/AGENTS.md#7-software-architect). **Content reviewers:** Brand Director, SEO Expert, Content Sync Agent, QA Agent.
>
> **Purpose:** Platform-ready copy for `stayatflorida.com`. When MASTER.md changes, regenerate this file per [`../../sync/SYNC_RULES.md`](../../sync/SYNC_RULES.md). Copy from here into [`../../../config.js`](../../../config.js) fields for property id 5.

---

## Homepage Property Card

| Field | Value | `config.js` field |
|---|---|---|
| Card title | Westlight | `title` |
| Card subtitle | A StayAtFlorida Signature Property | `cardSubtitle` |
| Card blurb | Panoramic Gulf views, direct beach access, and resort amenities on Florida's quieter Emerald Coast. | `cardShortDescription` |
| Location line | Miramar Beach, Florida | `location` |
| Sleeps line | Sleeps up to 6 · 2 BR · 2 BA | *(derived from `maxGuests`, `bedrooms`, `bathrooms`)* |
| Primary CTA | View Property | *(button label — `app.js#createPropertyCard`)* |
| Card image | `images/lodging/ms-09-living-room.png` | `coverImage` |

## Header (site-wide)

Rendered by `index.html` shared nav. Present on every page: homepage, property detail SPA route, `gear.html`, `privacy.html`, `terms.html`, and the static `listing-*.html` redirect stubs. Same as TW2111 — no per-property differences at the header level.

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
| H1 | Westlight | `listingHeadline` *(must not contain floor numbers, unit numbers, or `Majestic Sun` — the legacy `8th-Floor Gulf Views at Majestic Sun` is a P1 violation being replaced in this pass)* |
| Brand subtitle | A StayAtFlorida Signature Property | `listingBrandSubtitle` |
| Tagline | Where Every Evening Ends in Gold | `listingTagline` |
| Location | Miramar Beach, Florida | `location` |
| Hero copy | Welcome to Westlight, where every evening ends in gold. This Gulf-front 2-bedroom, 2-bath retreat sits directly overlooking the Gulf of Mexico — panoramic Gulf views from the balcony, direct beach access via a palm-lined boardwalk, and full Seascape resort amenities steps from the front door. | `listingHeroCopy` |
| **Primary CTA (FROZEN)** | **Check Availability** | *(button — `app.js#renderPropertyDetail` primary CTA)* |
| **Secondary CTA (FROZEN)** | **View Photos** | *(button)* |
| Trust chip strip *(beneath CTAs)* | 5.0★ · Sleeps up to 6 · Simone replies within 2 hours · Full refund 60+ days out | *(rendered by `app.js#renderListingHeroTrustStrip` — ⚠ verify aggregate rating from JSON-LD before publish)* |

**CTA freeze (MASTER §12):** `Check Availability` and `View Photos` are frozen and match TW2111 exactly. Do not swap `Check Availability` for `See Available Dates` or any other variant. Do not swap `View Photos` for `See Photos` / `Gallery`.

## Highlights

Five short bullets. Pulled from MASTER §9 Selling Points. Rendered as a compact strip above the amenities block on the property detail page.

- Panoramic Gulf views and west-facing sunsets from the private balcony
- Direct beach access via a palm-lined boardwalk — no busy road to cross
- 2 bedrooms + queen sleeper sofa · sleeps up to 6
- Complimentary beach chairs and umbrella available in the condo
- Owner-hosted — book direct and save the OTA service fees

## Amenities (grouped)

Rendered by `app.js#renderGroupedAmenities`. Four canonical categories in order per MASTER §6. ⚠ config.js `amenities` array currently ungrouped for id=5 — folding in the `group` field is part of this rebrand pass's config.js update.

**Inside the Condo** — Full Kitchen (fully stocked for 6) · High-Speed Wi-Fi · Smart TV (every bedroom + living room) · Washer & Dryer (in-unit) · Air Conditioning · Central Heating · Laptop-Friendly Workspace · Bed & Bath Linens Provided

**Beach Convenience** — Complimentary beach chairs and umbrella (in condo) · Beach Towels Provided *(⚠ verify)* · On-Beach Vendor Rentals Available for Purchase

**Resort Amenities** — Gulf-Front Outdoor Pool with Sundeck · Indoor Heated Pool · Hot Tubs · Full Fitness Center · Tennis and Pickleball Courts · Seascape Golf Club (9-hole, par 35) · Bicycle and Paddleboard Rentals · Resort Grills

**Location & Access** — Direct Beach Access via Palm-Lined Boardwalk · Elevator Access · Complimentary Covered Parking for Registered Guests · Walking Distance to Seascape Town Center · Short Walk to Whale's Tale Beach Bar & Grill · ~40 min / 24 miles to VPS Airport · ~1 hour / 38 miles to ECP Airport

## A Day at Westlight (lifestyle module)

Rendered by `app.js#renderDayInTheLife`. Placement: below the hero trust chip strip, above `Stay Details`. Source: MASTER §14b.

Six beats. Elegant one-sentence-per-beat sequence. No exclamation marks, no CTA, no hype.

1. **Morning.** Coffee on the balcony as the Gulf turns pale green and the beach walkers pass below.
2. **Late morning.** Walk down to the boardwalk, claim a spot on the sand with the condo chairs, and don't rush anything.
3. **Lunch.** Whale's Tale for beachfront burgers, or a short walk into Seascape Town Center for something cooler.
4. **Afternoon.** Alternate between the sand and the Gulf-front pool. The indoor pool is there for the one afternoon that turns cloudy.
5. **Golden hour.** Back on the balcony, west-facing. This is the moment the property is named for.
6. **Evening.** Cook a simple dinner in the full kitchen, or head to Baytowne Wharf for the seasonal fireworks show.

## Direct-booking trust module (between description and reviews)

Three cards. Placement: below `Stay Details` / description, above `Reviews`. Same three-card standard as TW2111 — property-specific wording only where the cancellation window differs.

**Card 1 — You're emailing an owner, not a call center.**
> Every inquiry through this site goes to Simone directly. She typically replies within 2 hours with dates, pricing, and any specific questions about the home.

**Card 2 — The condo matches its photos.**
> Same layout, same finishes, same view. If something changes between booking and check-in, you'll hear it from the owner first — not from the front desk on arrival.

**Card 3 — Cancellation terms are on this page.**
> Full refund if you cancel 60 or more days out. 50% refund 31–60 days before check-in. Non-refundable within 30 days. You see the policy before you email — no surprises at the checkout page. *(⚠ Verify current MS811 cancellation policy matches; MASTER §17 has cancellation working canonical pending Revenue Manager sign-off. If different, update this card + FAQ #3 together.)*

## Property Description

The `§14 Master Long Description` from [`MASTER.md`](MASTER.md#14-master-long-description), rendered as-is on the property detail page. The direct-booking value sentence in the final paragraph is included on the website only.

**Rule:** Registration mechanics and other operational details do **not** appear in the description body. They belong in the `Before You Arrive` / `During Your Stay` two-card module.

## Before You Arrive + During Your Stay (two-card logistics module)

Rendered by `app.js#renderStayLogisticsCards`. Placement: below the description, above the FAQ. Two paired cards, side-by-side on desktop, stacked on mobile. Source: MASTER §14a + §14c.

### Card 1 — Before You Arrive

Source: MASTER §14a. ⚠ **This card is contingent on verifying whether Majestic Sun / Seascape Resort requires a comparable HOA registration fee to TW2111's Tidewater.** If yes, mirror TW2111's four-item layout (Parking, Wristbands, Resort Registration Fee, Check-in). If no, collapse to a single-item variant (Check-in) or skip the two-card module entirely for MS811 and inline the check-in note into `Property Description`.

**Draft assuming registration is required (pending verify):**

- **Parking** — Complimentary covered parking is included for registered guests. ⚠ verify: one assigned space vs. multiple guest-parking passes.
- **Wristbands** — ⚠ verify: does Majestic Sun / Seascape require occupant wristbands like Tidewater does?
- **Resort Registration Fee** — ⚠ verify: comparable one-time HOA fee before arrival? If so: register at least 24 hours before arrival to save ~$10.
  - Rendered CTA if applicable: **`Register with the Resort`** button → ⚠ verify canonical URL.
- **Check-in** — From 4:00 PM. Precise arrival instructions and the lockbox code are emailed the morning of check-in.

### Card 2 — During Your Stay

Source: MASTER §14c. Four items in order.

- **Complimentary beach chairs and umbrella (in the condo)** — Complimentary beach chairs and umbrella available in the condo — bring them down each morning. If you'd prefer a full setup on the sand, beach chair and umbrella rental is available for purchase directly on the beach from local vendors.
- **Beach access** — Direct beach access via a palm-lined boardwalk from the resort — elevator down, cross the resort deck, and you're on the sand. No busy road to cross.
- **Resort amenities** — Gulf-front outdoor pool, indoor heated pool, hot tubs, full fitness center, tennis and pickleball courts, and the Seascape golf course. Follow the resort's posted rules at each amenity.
- **Check-out reminders** — Check-out by 10:00 AM. Run the dishwasher, take trash to the chute, leave used towels in the tub. The cleaning fee covers the standard turn — no other pre-departure work.

## Price Calculator — same structure as TW2111

Rendered by `app.js#renderPriceCalculator`. Structure:

**Panel heading:** `Your Stay`

**Line items in order:**

| Line label | Amount | Notes |
|---|---|---|
| Nightly Rate | (Sum of nightly rates × seasonalAdjustments) **+ $50 uplift on stays of 3+ nights** | Sub-label: `N nights` (renders below the label). The extended-stay uplift is **baked into this line's value** — no separate row. Per MASTER §21. MS811 uplift is $50 (not $100 like TW2111) because MS811's cleaning fee is unchanged at $250. |
| Cleaning Fee | **$250** | Fixed. Unchanged in the 2026-07-06 pricing pass. |
| Taxes | (Nightly + Cleaning) × 12% | Percentage moved off the label to keep the line clean. Nightly line includes the uplift on 3+ night stays, so tax base grows accordingly. |
| *— separator —* | | A hairline rule between the last cost line and the total row |
| **Estimated Total** | Sum | `Total` heading upgraded to `Estimated Total` for accuracy |

**Trust note below the total:** `No OTA service fees when booking direct.`

**Resort Registration Fee** — ⚠ if Majestic Sun / Seascape has one, add it to the `Before You Arrive` card, not the calculator (same placement rule as TW2111).

**Calculation rules (matches TW2111 with MS811-specific values):**
- Nightly total: sum of `getAdjustedRate(date, property)` across the stay.
- Extended-stay uplift: if `nights >= 3`, add `property.extendedStayUplift.amount` ($50 for MS811) to the nightly total. Applied inside `app.js#applyExtendedStayUplift`.
- Cleaning fee: fixed from `property.cleaningFee` ($250 for MS811).
- Tax: `(nightlyTotalWithUplift + cleaningFee) × property.taxRate`.
- Total: `nightlyTotalWithUplift + cleaningFee + tax`.

## Why Book Direct with StayAtFlorida — property-page trust panel

Rendered by `app.js#renderWhyBookDirect`. Placement: below Availability & Pricing, above Stay Details. Source: MASTER §14d. Same seven-bullet canonical standard as TW2111.

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

## FAQ (canonical order and content)

Rendered as an accordion on the property page and emitted as `FAQPage` JSON-LD by `scripts/lib/listing-schema.cjs` for Google Rich Results. Source: MASTER §22. Ten questions.

| # | Question | Answer |
|---|---|---|
| 1 | How many guests can Westlight accommodate? | Up to 6 guests. Two bedrooms (king + queen) plus a queen sleeper sofa in the living room. |
| 2 | Is Westlight really Gulf-front? | Yes — the balcony faces the Gulf, and direct beach access is a palm-lined boardwalk downstairs. No busy road to cross. |
| 3 | Are beach chairs and an umbrella provided? | Yes — complimentary beach chairs and umbrella are available in the condo. Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors. |
| 4 | What's included in the kitchen? | Full kitchen with coffee maker, dishwasher, oven, stove, microwave, refrigerator, cookware, dishes, and glassware for six. Set up for real cooking, not just reheating. |
| 5 | What resort amenities can we use? | Gulf-front outdoor pool, indoor heated pool, hot tubs, fitness center, tennis and pickleball courts, Seascape golf course, and walking paths — all part of the Majestic Sun / Seascape Resort community that Westlight is inside of. |
| 6 | How do we get to the beach? | Direct beach access via a palm-lined boardwalk downstairs. No shuttle, no crossing a road. |
| 7 | What's the check-in and check-out? | Check-in is 4:00 PM. Check-out is 10:00 AM. |
| 8 | Is parking included? | Yes — covered on-site parking is included. *(⚠ Verify assigned-space vs. guest-parking mechanics with owner.)* |
| 9 | Are pets allowed? | No — Westlight is pet-free. |
| 10 | How far is the airport? | VPS (Destin–Fort Walton Beach Regional) is roughly 15 minutes by car. |

## Reviews section

Rendered by `app.js#renderReviews`. Source of review bodies: `config.js#REVIEWS[5]` (59 items, 2020–2025).

**Author display policy:** Legacy MS811 reviews captured pre-2026-07-06 SOP change often show full last names. Per MASTER §23 Review Author Naming Policy, do **not** backfill or edit these — they were consented at the time of collection. New reviews collected from 2026-07-06 onward follow the first-name + last-initial rule.

**Property attribution in review copy:** legacy reviews may reference `Majestic Sun` inline (e.g. review #8 James D.: `Majestic Sun. 8th floor, great views`). Do not edit these — they are the guest's words. New review-response copy and editorial framing (section titles, "loved for" chips) must use `Westlight`.

## SEO

### Meta Title (60 / 60 chars)

`Westlight | Gulf-Front Condo in Miramar Beach, FL | StayAtFlorida` *(64 chars — over budget by 4, trim needed)*

**Trimmed to 60 chars:** `Westlight | Gulf-Front 2BR in Miramar Beach | StayAtFlorida` *(60 chars — exactly at ceiling)*

### Meta Description (159 / 160 chars — at ceiling)

`Book Westlight by StayAtFlorida, a Gulf-front 2BR condo in Miramar Beach with panoramic Gulf views, resort amenities, and room for 6. Owner-hosted.` *(148 chars — inside the ceiling)*

**Keyword coverage** *(required-keyword audit — every item must be present):*

- `Miramar Beach` — present
- `Gulf-front` (via `Gulf-front 2BR condo`) — present
- `panoramic Gulf views` — present
- `room for 6` — present
- Master brand `StayAtFlorida` — present (`by StayAtFlorida`)
- Property name `Westlight` — present

**Length discipline:** The description sits below Google's 160-char ceiling. Any future edit that adds characters must first trim elsewhere; the file must never ship at 161+.

**Source of truth:** `config.js#properties[id=5].metaDescription` *(⚠ add this field if it doesn't exist yet — currently the generator may derive from `description` truncation; adding an explicit field prevents unwanted truncation)*.

### Open Graph

- `og:title` = `Westlight · Gulf-Front 2BR · Miramar Beach`
- `og:description` = same as Meta Description above
- `og:image` = absolute URL to `/images/lodging/ms-01-gulf-balcony.jpg`
- `og:url` = `https://stayatflorida.com/listing-5.html`
- `og:type` = `website`

### Canonical URL

`https://stayatflorida.com/listing-5.html`

### JSON-LD `LodgingBusiness` schema

Regenerated by `scripts/generate-listing-schema.cjs`. Key fields:

- `name` = `Westlight` (not `Majestic Sun 811` — this is the biggest single fix in the rebrand)
- `description` = MASTER §13 Short Description text
- `image` = array of published photo URLs from `config.js#properties[id=5].images` (38 URLs — sourced from the owner-final 46-slot library in MASTER §18, minus 3 owner-removed slots and 5 slots awaiting owner upload)
- `address.addressLocality` = `Miramar Beach`
- `address.addressRegion` = `FL`
- `geo.latitude` / `geo.longitude` = per `config.js#coordinates`
- `containsPlace` = `Majestic Sun at Seascape Resort` *(operational context — this is where the resort name lives structurally)*
- `numberOfRooms` = 2
- `occupancy.value` = 6
- `amenityFeature` = array from MASTER §6
- `aggregateRating.ratingValue` = 5.0
- `aggregateRating.reviewCount` = 59 *(matches `config.js#REVIEWS[5]` length)*
- `priceRange` = `$300-$681` *(base $300 to peak Easter-week $681 from seasonalAdjustments — ⚠ verify against final PriceLabs daily data)*

### JSON-LD `FAQPage` schema

Regenerated from the FAQ table above. All ten Q&A pairs emitted.

### Alt Text (per photo)

Use MASTER §18 Photo Caption Library — the guest-facing caption column doubles as the alt text on the site. The 38 published photo URLs (in `config.js#images`) each have an alt text sourced from `config.js#photoCaptions[url]` via the `getPhotoCaption(property, url)` helper in `app.js`. This same string:

- Renders as the on-image caption bar under the gallery main image (`#gallery-caption`)
- Renders as the caption under the lightbox image (`#lightbox-caption`)
- Is emitted as the `<img alt="...">` attribute on the gallery thumbnails
- Is emitted as the `image` array entry in the property's JSON-LD schema

**Caption update cadence:** `MASTER.md §18` is the single source of truth. Any edit to a caption there must be mirrored into `config.js#properties[id=5].photoCaptions` (URL-keyed map) in the same commit — `AIRBNB.md`, `VRBO.md`, `BOOKING.md`, and `HOUFY.md` inherit from MASTER §18 automatically. Never edit a caption in one platform file without updating MASTER §18 first.

## CTA Copy

Same table as TW2111 — no per-property differences.

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

## Internal Links (portfolio cross-linking)

- Homepage card links to `/listing-5.html` → SPA route `/?listing=5`
- Property page `Other Properties` section (if enabled) links to `/listing-4.html` (TW2111)
- Footer property list surfaces both `Twenty First` and `Westlight` under the `Signature Properties` heading (updated in `index.html` footer HTML — verify during regen pass)

## Inquiry Copy (contact modal + email body)

Rendered by `app.js#showContactModal` and the email-body generator. Same modal structure as TW2111; property-specific copy is limited to the property-name string.

- **Modal title:** `Inquire about Westlight`
- **Modal subtitle:** `Simone replies within 2 hours.`
- **Email subject line prefix:** `Westlight — Inquiry` *(matches TW2111's `Twenty First — Inquiry` pattern)*
- **Email body opener:** `Hi Simone,\n\nI'd like to book Westlight for the following dates:` *(auto-populated with the calculator's selected date range)*
- **Email body closer:** signed with the guest's name from the modal form

Contact modal never mentions floor numbers, unit numbers, or `Majestic Sun 811` — always `Westlight`.
