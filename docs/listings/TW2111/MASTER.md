# Twenty First — MASTER

> **Folder code:** `TW2111`. Never appears in guest-facing copy.
>
> **Purpose:** The single source of truth for Twenty First's content. Every platform file in this folder derives from this document. Read [`../../sync/SYNC_RULES.md`](../../sync/SYNC_RULES.md) before editing.
>
> **Owned by:** [Brand Director](../../brand/AGENTS.md#2-brand-director). **Reviewers:** CEO Agent, Hospitality Expert, SEO Expert, CGO Agent, Content Sync Agent, QA Agent.
>
> **Editing rule:** Always edit this file **first**. Then regenerate [`WEBSITE.md`](WEBSITE.md), [`AIRBNB.md`](AIRBNB.md), [`VRBO.md`](VRBO.md), [`BOOKING.md`](BOOKING.md). Log every change in the [Changelog](#changelog).

---

## 1. Brand

| Field | Value |
|---|---|
| Master brand | StayAtFlorida |
| Master tagline | Luxury Beachfront Vacation Homes |
| Property display name | **Twenty First** |
| Property brand subtitle | A StayAtFlorida Signature Property |
| Property tagline | Above the Gulf. Beyond Expectations. |
| Property status | Active |

## 2. Property Story

Twenty First is where families gather to slow down. Wake up above the emerald Gulf to soft morning light on the balcony. Spend the day on sugar-white sand a few steps from the resort deck. Regroup for dinner on the balcony as the sun sets over the water, then close the day with the sound of the surf. It is a home built for the pace of vacation — quieter than a hotel, warmer than a rental, private enough that everyone finds their own corner and generous enough that everyone comes back together.

## 3. Positioning

Twenty First is the flagship of the StayAtFlorida Signature Collection. It is a luxury beachfront condo designed for multi-generational families and small groups who value comfort, view, and connection over price. It is not a party rental, a spring-break booking, or a one-night stay. Guests choose Twenty First when they want a real host they can email, a home that matches its photos, and a stay that feels like something they'd tell friends about.

## 4. Target Guest

- **Primary:** Multi-generational families and small groups of 4–8 travelers on stays of a week or longer.
- **Secondary:** Couples and small groups planning shoulder-season getaways (spring, fall) who want a premium beachfront stay at a shoulder-season rate.
- **Not our guest:** Spring-break party groups, bachelor / bachelorette parties, one-night bookings, guests expecting concierge or white-glove beach service.

## 5. Property Facts

| Field | Value |
|---|---|
| Address | *(private — used for post-booking messaging only)* |
| Market | Panama City Beach, Florida |
| Community | Tidewater Beach Resort *(operational context only — not the brand)* |
| Bedrooms | 3 |
| Bathrooms | 3 |
| Sleeps | Up to 8 |
| Property type | Beachfront condo |
| View | Gulf-front, panoramic |
| Beach access | Direct from resort deck |
| Parking | One assigned space + guest parking |
| Pet policy | No pets |
| Check-in | 4:00 PM |
| Check-out | 10:00 AM |
| Min-age booker | 25 |

## 6. Amenities

Grouped into four categories for the property page. The categories below are the **canonical order** and **canonical wording** for on-site display, JSON-LD, and platform derivatives. Each amenity chip in [`config.js`](../../../config.js) carries a `group` field pointing to one of these four buckets.

**Inside the Condo**
- Full Kitchen (fully stocked with coffee maker, blender, toaster, cookware, dinnerware for 8+)
- High-Speed Wi-Fi throughout
- Smart TV in Every Bedroom (Netflix, Prime, Disney+)
- Washer & Dryer (in-unit)
- Air Conditioning
- Bed & Bath Linens Provided (linens for 8 + extras)

**Beach Convenience**
- **Complimentary beach chairs and umbrella available in the condo** *(exact wording — do not vary)*
- Beach Towels Provided
- Full-Service Beach Chair & Umbrella Rental — available for purchase directly on the beach from third-party vendors *(never phrased as "our" service)*

**Resort Amenities**
- Gulf-Front Lagoon Pools
- Indoor Heated Pool
- Hot Tubs
- Roman Spa, Sauna & Steam Room
- Full Fitness Center
- Restaurant, Coffee Shop & Tiki Bar
- Outdoor Grilling Area & Gift Shop
- Seasonal Kids' Activities

**Location & Access**
- Direct Beach Access from Resort Deck
- Elevator Access to Beach & Parking Levels
- On-Site Parking (one assigned space + guest parking)
- ~1 Mile to Pier Park (shopping, dining, entertainment)
- ~35 min to ECP Airport (Northwest Florida Beaches International)

**Not provided**
- Any claim that **we** provide beach service or a beach setup crew (chairs come from the condo, or from third-party vendors on the beach — never from us)
- Daily housekeeping mid-stay
- Concierge / in-condo dining
- Airport transfers

## 7. Sleeping Arrangements

- **Primary bedroom:** King bed with private en-suite bath and balcony access
- **Guest bedroom:** Queen bed with adjacent bath
- **Bunk room:** One set of bunks (two twin sleepers) with its own bath
- **Living room sleeper sofa:** Queen sleeper sofa; fits 1–2 additional guests
- **Sleeps up to 8 guests total.**

Bed inventory total: 1 king · 1 queen · 2 twin (one bunk set) · 1 queen sleeper sofa. This is the canonical bed count; JSON-LD, OTA amenity checkboxes, and website copy must all match.

## 8. Nearby Attractions

- **Grocery:** Publix, Winn-Dixie — under 1 mile
- **Coffee:** Amavida Coffee Roasters, Finn's Island Style Grub — 2–3 miles
- **Dinner (casual):** Runaway Island Beach Bar, Firefly, Saltwater Grill
- **Dinner (upscale):** Firefly, Andaman
- **Family activity:** Pier Park, Shipwreck Island Waterpark, Shell Island shuttle
- **Nature:** St. Andrews State Park (Shell Island shuttle departs from here)
- **Airport:** ECP (Northwest Florida Beaches International) — ~35 minutes

## 9. Selling Points

Ranked. What actually makes a guest book Twenty First over a comparable property.

1. Panoramic Gulf views from the private beachfront balcony
2. Direct beach access — walk out of the resort onto sugar-white sand
3. Three separate sleeping areas — good for multi-generational trips
4. Owner-hosted — a named human replies to every inquiry
5. Book direct at stayatflorida.com and skip the OTA service fees (typically 10–15% of the total)
6. Full resort amenities (pools, hot tubs, fitness, splash pad)
7. Complimentary beach chairs and umbrella available in the condo

## 10. SEO Keywords

- **Primary intent:** `3 bedroom beachfront condo Panama City Beach`
- **Supporting:** `Tidewater Beach Resort rental`, `Panama City Beach luxury rental`, `owner-hosted vacation rental Gulf Coast`, `beachfront condo Panama City Beach direct booking`, `family beach rental Panama City Beach`
- **Local:** Panama City Beach · Florida · Gulf Coast · Emerald Coast

Full keyword rules: [`../../brand/SEO.md`](../../brand/SEO.md).

## 11. Guest Trust Points

- Multiple verified 5-star reviews across Airbnb, VRBO, and the direct site
- **Simone is a verified Airbnb Superhost** (6+ years hosting) and **VRBO Premier Host** — surfaced on the property page hero trust strip and sidebar (Phase 3 initiative #40, shipped 2026-07-06 evening). Verification sources on file: `docs/listings/TW2111/reviews/2026-07-06-airbnb.md` and `docs/listings/TW2111/reviews/2026-07-06-vrbo.md`. Display rules: `docs/brand/BRAND_GUIDELINES.md` § "Host trust badges".
- Owner-hosted — Simone replies to every inquiry personally, typically within 2 hours
- Transparent pricing — the calculator on stayatflorida.com shows nightly rate, cleaning, and taxes before you email
- Direct beach access from the resort deck
- Cancellation policy is spelled out before you book
- The condo matches its photos — same layout, same finishes, same view

## 12. Approved CTAs

- **Direct site header (site-wide, every page):** `Inquire` — button-styled, routes to the existing inquiry modal (`showContactModal()`), never a new form
- **Homepage hero eyebrow (added 2026-07-06):** `A Boutique Beachfront Stay Collection` *(replaces `A Boutique Beach Rental Brand`. "Rental" reads transactional; "Stay Collection" supports the boutique-hospitality positioning without overpromising.)*
- **Homepage hero primary:** `Explore Signature Properties` *(scrolls to `#properties`. Renamed 2026-07-06 in the Homepage Conversion Polish pass. The old label `Book Direct & Save` sold the transaction before we sold the collection and buried the property merchandising below the fold. The new label is a collection-first invitation.)*
- **Homepage property card:** `View Property`
- **Homepage direct-booking section (Why Book Direct?):** `Book Direct & Save` — reserved for the OTA-fee value story only. No longer used as the hero CTA. Points to `#properties` when a link is warranted.
- **Homepage inquiry / contact section:** `Send an Inquiry` — primary button that opens `showContactModal()`. Email address stays visible below the button as a secondary affordance, not the primary action.
- **Property page hero primary:** `Check Availability` *(FROZEN — do not swap for `See Available Dates` or any other variant. Confirmed by owner in the Final Polish pass, 2026-07-02.)*
- **Property page hero secondary:** `View Photos` *(FROZEN — same rule.)*
- **Below price calculator:** `Email to Reserve These Dates`, `Inquire about these dates`
- **Sticky bottom bar (mobile property page):** `Email to Book`
- **Airbnb / VRBO / Booking:** platform-native CTAs only — no `book direct` or channel-steering language

Never use: `Book Now!`, `Reserve Now`, `Get 20% Off`, `Claim your stay`, `See Available Dates`.

**Homepage CTA hierarchy (canonical, added 2026-07-06):**

The five CTAs approved on the marketing homepage — no others may be introduced without a brand-review pass:

1. `Explore Signature Properties` — hero primary
2. `View Property` — property card footer
3. `Book Direct & Save` — inside the `Why Book Direct?` section only
4. `Send an Inquiry` — contact/inquiry section primary
5. `Why Book Direct?` — nav / cross-link to the direct-booking section

The site-wide header `Inquire` button is separate and always present on every page (see the header rules below).

**Header `Inquire` CTA rules (added 2026-07-02):**

- Must appear in the header on every page (homepage, TW2111, MS811, `gear.html`, `privacy.html`, `terms.html`, and static `listing-*.html` redirect stubs — where the shared nav is present).
- Text label is always `Inquire` — never `Contact`, `Get in Touch`, `Ask a Question`, or `Send Message`.
- Routes to the existing `showContactModal()` — do not build a second inquiry form.
- Visual style: subtle outlined button (see [`../../brand/DESIGN_SYSTEM.md`](../../brand/DESIGN_SYSTEM.md) `.btn-nav-inquire`). Premium, understated, never loud.
- Always visible on mobile (does not collapse into the hamburger menu).

**OTA platform titles (locked 2026-07-06, Phase 3 initiatives #5 + #6):**

Canonical text lives in the platform-derived files; MASTER surfaces the strings here so the source of truth is discoverable in one place.

- **Airbnb** *(≤50 chars input, ~35 chars mobile-tile-visible)*: **`Twenty First · Gulf-Front 3BR`** *(29 chars)*. Canonical file: [`AIRBNB.md`](AIRBNB.md#title--locked-ship-string-phase-3-initiative-5-2026-07-06). Owner sign-off: 2026-07-06 evening.
- **VRBO** *(20–80 chars headline, soft ≤40 for search prominence)*: **`Twenty First · Gulf-Front 3BR · Sleeps 8 · Panama City Beach`** *(60 chars)*. Canonical file: [`VRBO.md`](VRBO.md#headline--locked-ship-string-phase-3-initiative-6-2026-07-06). Owner sign-off: 2026-07-06 evening.
- **Booking.com** *(rebrand-in-place pending, initiative #11)*: **`Oceanfront 3BR&3BA at Tidewater Resort - Pools - Sleeps 8`** is the current live title, retained until the #11 pass ships. New title to be locked as part of that pass. Canonical file: [`BOOKING.md`](BOOKING.md).
- **Houfy** *(rebrand-in-place pending, initiative #12)*: legacy title `Fun in the Sun` is the current live title — a Priority 1 forbidden-string violation. New title to be locked as part of the #12 rebrand pass. Canonical file to be created: `HOUFY.md`.

**Design principle across platforms:** the first 29 characters of every OTA title are identical (`Twenty First · Gulf-Front 3BR`). A guest cross-shopping the brand across Airbnb, VRBO (and, once shipped, Booking.com + Houfy) reads the same brand+differentiator every time, and recognizes the listing as one property with one owner. Platform-specific tails extend the brand prefix rather than replace it. Never introduce a platform-specific title that breaks this brand-prefix identity — the same brand must lead on every platform.

**Middot convention:** the separator glyph is `·` (U+00B7, middle dot). Do not substitute `•` (bullet), `.` (period), `-` (hyphen), or `|` (pipe). Middot is the same glyph the direct site uses in the hero trust strip and the reviews aggregate summary — consistent visual rhythm across the brand's touchpoints.

## 13. Master Short Description

A three-bedroom beachfront retreat above the emerald Gulf, designed for families who want to slow down, watch the water, and reconnect.

### 13a. Homepage Card Copy *(added 2026-07-06)*

Rendered on the marketing homepage inside `.property-card-blurb` beneath the location + sleeps-line. Kept intentionally short (one sentence, ~90–110 chars) so the card scans in under two seconds.

**Approved copy:**

> Panoramic Gulf views, sunset balcony, direct beach access, resort amenities, and room for up to 8 guests.

Notes:

- No CTA text, no exclamation marks, no property-name repetition (title already on the card).
- The card CTA remains `View Property` (see §12).
- Do not swap for a longer aspirational sentence — the homepage card exists to merchandise, not to sell the whole story. The long story lives on the property page.

## 14. Master Long Description

**Rule:** The long description sells the *experience*. Operational logistics (registration, wristbands, parking mechanics, turn-cleaning details) live in [§14a Before You Arrive](#14a-before-you-arrive) — never in the aspirational body. Every paragraph below should read like a boutique-hotel brochure, not a rental agreement.

---

Twenty First is a 3-bedroom, 3-bath luxury beachfront retreat designed for families who want to slow down, watch the water, and reconnect. Wake up above the emerald Gulf, spend the day on the sugar-white sand, and gather back at the condo for dinner on the balcony as the sun sets.

Inside, three separate sleeping areas mean everyone has their own space. The primary bedroom opens onto the balcony with a king bed and en-suite bath. A guest bedroom sits down the hall with a queen bed and adjacent bath. A bunk room with one set of twin bunks and its own bath rounds out the layout, and a queen sleeper sofa in the living room adds room for another one to two guests — up to 8 total, comfortably.

The private beachfront balcony overlooks the Gulf, with direct beach access from the resort deck below. Coffee in the morning, a book in the afternoon, dinner as the sun goes down. Complimentary beach chairs and umbrella are available in the condo — bring them down with you each morning. Prefer a full setup on the sand? Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.

Beyond the front door, Tidewater Beach Resort offers multiple pools and hot tubs, a full fitness center, a splash pad for younger guests, grill areas, and elevator access to the beach deck. It is a full-service resort experience — quieter and more grown-up than the boardwalk destinations, closer and more convenient than the smaller boutique communities.

Twenty First is owner-hosted by StayAtFlorida. Simone answers every email personally, typically within 2 hours. Book direct at stayatflorida.com and you skip the OTA service fees — same home, same host, same beach, more of your money in your pocket. *(Direct-booking value message on the website only — not on Airbnb / VRBO / Booking listings.)*

## 14a. Before You Arrive

Rendered on the property page as **Card 1** of a two-card module (Card 2 is [§14c During Your Stay](#14c-during-your-stay)). Placement: below the description, above the FAQ block. Never merged into §14 — operational logistics stay out of the aspirational body per §14 rule.

Four items, in this order:

- **Parking:** Up to two on-site parking passes are included with the Resort Registration Fee. Passes are handed out at check-in with the wristbands.
- **Wristbands:** Up to 8 wristbands are included with the Resort Registration Fee. Wristbands are required for every occupant over age 12 to access the resort deck, pools, and beach.
- **Resort Registration Fee:** A one-time $54.04 fee paid directly to the resort before arrival. It includes up to 2 parking passes and 8 guest wristbands. Register at least 24 hours before arrival to save $10.

  *Rendered CTA (button, not inline link):* **`Register with the Resort`** → [tidewaterhoa.com/registration](https://www.tidewaterhoa.com/registration/) *(distinct button below the fee bullet — see `renderStayLogisticsCard` `ctaLabel` / `ctaUrl` fields).*

  *Displayed here only.* Not surfaced on the price calculator (see §21).
- **Check-in:** From 4:00 PM. Precise arrival instructions and the lockbox code are emailed the morning of check-in.

## 14b. A Day at Twenty First

Rendered on the property page as a lifestyle sequence module *(placement: below the hero trust chip strip, above `Stay Details`)*. Six beats. Elegant, not cheesy — one experiential sentence per beat, no exclamation marks, no "paradise" language, no CTA at the end of any beat.

1. **Sunrise coffee.** Wake to soft light on the water. Coffee on the balcony while the beach is still empty.
2. **Beach time.** Grab the complimentary chairs and umbrella from the condo — the sugar-white sand is right below.
3. **Resort pool.** Trade the beach for the Gulf-front lagoon pool when the sun gets high. Kids splash; adults find a lounger.
4. **Sunset balcony.** Return to the condo for the golden hour. Turquoise chairs on the balcony; the Gulf turns copper.
5. **Dinner with Gulf views.** Cook in the full kitchen or open a bottle on the balcony — dinner as the last light goes.
6. **A quiet evening inside.** Board game at the dining table, a film on the smart TV, or a book on the sleeper sofa. The Gulf keeps time all night.

## 14c. During Your Stay

Rendered on the property page as **Card 2** of the two-card module (Card 1 is [§14a Before You Arrive](#14a-before-you-arrive)). Same placement, side-by-side on desktop, stacked on mobile.

Four items, in this order:

- **Complimentary beach chairs and umbrella (in the condo):** Complimentary beach chairs and umbrella available in the condo — bring them down each morning. If you'd prefer a full setup on the sand, beach chair and umbrella rental is available for purchase directly on the beach from local vendors.
- **Beach access:** Direct beach access from the resort — elevator down, cross the resort deck, and you're on the sand.
- **Resort amenities:** Gulf-front lagoon pools with hot tubs, indoor heated pool, Roman spa, sauna and steam room, full fitness center, restaurant, coffee shop, and tiki bar. Wristbands required at every checkpoint.
- **Check-out reminders:** Check-out by 10:00 AM. Run the dishwasher, take trash to the chute, leave used towels in the tub, and leave wristbands and the parking pass on the counter. The cleaning fee covers the standard turn — no other pre-departure work.

## 14d. Why Book Direct with StayAtFlorida (property-page trust panel)

Rendered on the property page as a distinct trust panel *(placement: below the Availability & Pricing section, above `Stay Details`)*. Property-page counterpart to the homepage "Why Book Direct?" three-card block — smaller, tighter, seven short bullets, no expansions.

**Section title:** `Why Book Direct with StayAtFlorida`

**Optional lead line:** `Same property, better terms — and a real person on the other side of every email.`

**Seven bullets (canonical order, canonical wording — do not vary):**

- Same property
- Same great stay
- No OTA service fees
- Owner-hosted communication
- Personal support before your arrival
- Faster responses
- Secure direct booking

**Design rules:**

- Elegant and premium — no sales language, no exclamation marks, no marketing hype.
- Each bullet renders with a check-mark glyph (`✓` or an inline SVG — implementation choice).
- No CTA at the bottom of this panel. The next step (email, calculator) is already visible on the page.
- Muted background so the panel reads as informational, not promotional.
- Never introduce a "book direct and save 15%!" style bullet — the six words per bullet is the ceiling; keep the tone factual.

**Distinct from the homepage "Why Book Direct?" section** *(which has three cards with headings + bodies)*. The property-page version is the single-list trust reinforcement that appears next to the booking decision. Both remain in scope; do not collapse or duplicate.

## 15. Approved Amenities Language

| Concept | Approved wording | Never say |
|---|---|---|
| Beach chairs (in condo) | `Complimentary beach chairs and umbrella available in the condo` | Implying **we** provide beach service, `Reserved beach chairs`, `Chair delivery by us`, `Luxury beach service`, `Beach setup crew we provide` |
| Beach chair rental (on-beach vendors) | `Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.` | Never call it "our beach service." Never quote prices or vendor names — they change seasonally. |
| View | `Panoramic Gulf Views`, `Gulf-front views` | `Guaranteed sunset`, `Best views on the coast` |
| Balcony | `Private Beachfront Balcony`, `Private balcony` | `Massive balcony`, `Endless balcony` |
| Beach access | `Direct Beach Access` | `Private Beach` |
| Host | `Owner Hosted`, `Owner-hosted by StayAtFlorida` | `Managed by`, `Powered by`, `Hosted by our team` |
| Kitchen | `Full kitchen` | `Fully equipped chef's kitchen` |
| Community | `Tidewater Beach Resort` (once, in Location context only) | `21st floor at Tidewater`, `Unit 2111` |
| Fitness center | `Resort fitness center` or `Full fitness center` | `4,300 sq. ft. fitness center` (sq. ft. figures don't lead copy) |

## 16. Approved House Rules Language

- No smoking, no vaping, no pets
- No parties, events, or unregistered guests
- Primary booker must be 25 or older
- Max occupancy is 8 guests
- Quiet hours 10:00 PM – 8:00 AM per HOA
- Damages: honest disclosure resolves nearly everything; undisclosed damage is charged
- Wristbands and parking pass provided at check-in; please leave them on the counter on departure

## 17. Approved Cancellation Language

- **Direct site (`stayatflorida.com`):** Full refund if cancelled **46 or more days** before check-in. **50% refund** if cancelled **31–45 days** before check-in. **No refund** for cancellations **within 30 days** of check-in. *(Owner-confirmed 2026-07-02.)*
- **Airbnb:** `Firm cancellation policy` (per Airbnb's policy tier) — see Airbnb listing for exact terms.
- **VRBO:** `Moderate cancellation policy` — see VRBO listing for exact terms.
- **Booking.com:** Follow Booking.com's non-refundable rate tier for the deposit window; see Booking listing for exact terms.

Approved short-form wording (for chips, badges, and CTA-adjacent trust strips):

> Full refund 46+ days out · 50% refund 31–45 days · Non-refundable within 30 days

Never claim "free cancellation any time." Never publish a policy that contradicts this section — regenerate all platform files whenever this policy changes.

## 18. Photo Caption Library

Photos live in [`../../../images/lodging/`](../../../images/lodging/) with the `tw-*` prefix. Each row below is the source for the alt / caption on every platform.

**Updated 2026-07-02:** 14 new interior + view photos received. New files use the `.png` extension. Legacy `.jpg` files for kitchen, pool, outdoors, and resort amenities are retained; interior and view photos have been replaced.

| File | Long caption (website alt / VRBO) | Short caption (Airbnb / Booking) |
|---|---|---|
| `tw-hero-view.png` | Twenty First · Panoramic Gulf view from the private beachfront balcony | Panoramic Gulf view from balcony |
| `tw-balcony-sunset.png` | Twenty First · Gulf sunset from the private beachfront balcony — two glasses of white wine, a small bowl of grapes, and a candle on the turquoise side table between Adirondack chairs *(digitally styled — see §21)* | Sunset on the balcony above the Gulf |
| `tw-balcony-dinner.png` | **RETIRED 2026-07-02 late evening — no longer referenced anywhere on the site.** File kept on disk for archival; removed from `config.js` galleries, `heroPhotoOrder`, and OTA docs per owner direction ("Remove these photos from the site — it was already replaced with another that has much lighter light"). The wine-glasses/soft-pastel scene the retired shot was providing is now covered by the swapped `tw-balcony-sunset.png` (v2). See §21 for the archival note. | *(retired — no platform reference)* |
| `tw-balcony-coffee.png` | Twenty First · Morning coffee on the balcony above the emerald Gulf | Coffee on the balcony |
| `tw-living-01.png` | Twenty First · Living room with Gulf view and turquoise Adirondack chairs on the balcony | Living room with Gulf view |
| `tw-living-02.png` | Twenty First · Living room with sleeper sofa and sailboat wall art | Living room, sleeper sofa |
| `tw-living-03.png` | Twenty First · Living and dining area with Smart TV and Gulf-region wall art | Living and dining area |
| `tw-living-04.png` | Twenty First · Living room, dining table beyond, warm evening light | Living room, evening light |
| `tw-living-05.png` | Twenty First · Refreshed living room styling *(digitally staged reference — see §21)* | Living room, refreshed styling |
| `tw-dining-sunset.png` | Twenty First · Dining table set for dinner with sunset framed through the balcony doors *(digitally styled — see §21)* | Dinner setup with sunset view |
| `tw-dining-01.png` | Twenty First · Dining table seats four, living room and Gulf view beyond | Dining table with Gulf view |
| `tw-master-01.png` | Twenty First · Primary bedroom with king bed and coastal styling | Primary bedroom, king bed |
| `tw-master-02.png` | Twenty First · Primary bedroom, king bed, Smart TV, en-suite access | Primary bedroom, en-suite view |
| `tw-guest-queen.png` | Twenty First · Guest bedroom with queen bed and adjacent bath | Guest bedroom, queen bed |
| `tw-bunk-01.png` | Twenty First · Bunk room with one set of twin bunks and private bath | Bunk room with private bath |
| `tw-bunk-02.png` | Twenty First · Bunk room detail, twin bunks with coastal styling | Bunk room detail |
| `tw-bath-01.png` | Twenty First · Guest bath with walk-in shower | Guest bath with walk-in shower |
| `tw-01-kitchen.jpg` *(retained)* | Twenty First · Full kitchen with island seating and morning light | Full kitchen |
| `tw-02-kitchen.jpg` *(retained)* | Twenty First · Kitchen, prep counter and appliances | Kitchen, prep counter |
| `tw-01-pool.jpg` *(retained)* | Twenty First · Resort lagoon pool at Tidewater Beach Resort | Resort lagoon pool |
| `tw-01-outdoor.jpg` *(retained)* | Twenty First · Resort outdoor lounging area | Resort outdoor lounge |
| `tw-01-amenities.jpg` *(retained)* | Twenty First · Resort amenity space at Tidewater Beach Resort | Resort amenity space |

**Hero carousel priority (first six slots — no random shuffle):**

1. `tw-hero-view.png` — instant "you'd wake up to this" panoramic view
2. `tw-balcony-coffee.png` — lifestyle: morning coffee on the balcony
3. `tw-living-01.png` — living room with Gulf view visible
4. `tw-master-01.png` — primary bedroom hero
5. `tw-dining-01.png` — dining area with view
6. `tw-bunk-01.png` — bunk room (the multi-generational-family differentiator)

Full gallery order: view → lifestyle → living/dining → bedrooms → bunk → bath → kitchen → pool → outdoors → resort amenities.

## 19. Review Response Style

**Positive review:**

> Thank you, {First name} — so glad {one specific detail from their review, e.g., "the balcony sunsets landed for you"}. Come back any time; we'd love to host you again.

**Constructive review:**

> Thank you for the honest feedback, {First name}. {Acknowledge the specific issue.} {State the fix that's in place.} I appreciate you flagging it — future guests will benefit.

Full templates: [`../../brand/HOSPITALITY.md#11-public-review-response-on-platform`](../../brand/HOSPITALITY.md#11-public-review-response-on-platform).

## 20. Guest Messaging Style

- Owner-signed, first-person, warm, unhurried
- Sign with `Simone`
- Reply within 2 hours (target)
- No emojis in inquiry / booking / issue messages
- The complimentary-beach-chairs sentence appears in every pre-arrival message, verbatim

Full templates: [`../../brand/HOSPITALITY.md#message-templates`](../../brand/HOSPITALITY.md#message-templates).

## 21. Fee Schedule (canonical)

The single source of truth for every fee that appears on any TW2111 surface. If a fee changes here, it must be propagated to [`../../../config.js`](../../../config.js) (calculator + `priceRangeOverride`), the price calculator display, `docs/listings/TW2111/WEBSITE.md`, and the `priceRange` in the VacationRental JSON-LD.

| Fee | Amount | Collected by | Where displayed | Notes |
|---|---|---|---|---|
| Nightly rate (base) | $225 | StayAtFlorida | Price calculator, VRBO / Airbnb / Booking calendars | Adjusted by season — see `seasonalAdjustments` in `config.js` |
| Nightly rate (shoulder-season floor) | ~$125 | StayAtFlorida | Price calculator during Feb window | 0.55× base per §5 seasonalAdjustments |
| Nightly rate (peak ceiling) | ~$660 | StayAtFlorida | Price calculator during Labor Day + July 4 windows | Observed PriceLabs peak (Sun Sep 6 2026 = $660). Fallback: 2.7× base = $608 |
| Nightly range in JSON-LD `priceRange` | `$125-$660` | — | `listing-4.html` and `index.html` JSON-LD | Set via `priceRangeOverride` field on the property record. Widened from `$125-$610` on 2026-07-02 to reflect observed PriceLabs peak of $660 (Labor Day Sunday). |
| Cleaning fee | **$200** | StayAtFlorida | Price calculator | Fixed per stay. Reduced from $250 → $200 on 2026-07-06 (afternoon pass) per owner directive. Third attempt at this reduction — first two reductions (same-day Pricing/Logistics cleanup earlier, and an earlier 2026-07-06 revert) were staged and reverted. Now shipped alongside the extended-stay uplift below so the combined net revenue effect on 3+ night stays is neutral-to-positive for the owner while short stays become $56 cheaper for the guest. |
| **Extended-stay uplift** | **$100** flat, added to the lodging total | StayAtFlorida | **Baked into the "Nightly Rate" row of the price calculator — not shown as a separate line item** | Applies only to bookings of **3+ nights**. Sized at $100 (not $50) so that after the $50 cleaning-fee reduction above, 3+ night stays net **+$50 pre-tax / +$56 post-tax revenue vs. the prior $250-cleaning pricing**. The "add $50 to bookings > 2 days" owner directive applies **on top of** the cleaning reduction, not as an offset for it. Config: `PROPERTIES[id=4].extendedStayUplift = { thresholdNights: 3, amount: 100 }`. Consumed by `app.js#applyExtendedStayUplift` at all four price-computation sites (`getSelectedStayPricing`, contact-modal HTML setup, email-body setup, `renderPriceCalculator`) — the calculator, the email preview, and the emailed booking request all agree. |
| Tax rate | 12% | StayAtFlorida (remits to Florida DOR) | Price calculator | Applied to (nightly + uplift + cleaning) |
| **Resort Registration Fee** | **$54.04** | **Tidewater Beach Resort HOA** | **[§14a Before You Arrive](#14a-before-you-arrive) only** — plus historical mentions in the FAQ. **Not shown on the price calculator.** | **A one-time $54.04 fee paid directly to the resort before arrival. Includes up to 2 parking passes and 8 guest wristbands. Register at least 24 hours before arrival to save $10.** Base $48 + tax + credit-card fee = $54.04. *(Removed from the price calculator on 2026-07-06 — guests pay this fee directly to Tidewater, not via StayAtFlorida, so surfacing it as part of the calculator total misrepresented what StayAtFlorida is charging.)* |
| Refundable damage deposit | $300 | StayAtFlorida | "Quick Pricing" sidebar (labelled *Refundable damage deposit*) | Held, not charged — released after check-out barring undisclosed damage |

**Canonical label rule:** The exact label on every surface is **`Resort Registration Fee`**. Never use `Community registration fee`, `HOA fee`, `Community fee`, `Tidewater fee`, or `Resort fee` (that last one is a term of art for a hotel add-on and would mislead). The supporting sentence, verbatim: *"A one-time $54.04 fee paid directly to the resort before arrival. It includes up to 2 parking passes and 8 guest wristbands. Register at least 24 hours before arrival to save $10."*

**Placement rule (updated 2026-07-06):** The Resort Registration Fee is a third-party pass-through — guests pay it **directly to the Tidewater resort HOA**, not through StayAtFlorida. It surfaces only in:

1. **§14a Before You Arrive** — as a distinct fee bullet with a **`Register with the Resort`** button linking to `https://www.tidewaterhoa.com/registration/`.
2. **§22 Website FAQ** — parking answer references the fee for context (no fee amount surfaced there — the FAQ answer is unchanged from the Batch 2 rewrite).

It **must not** appear on the price calculator, in the "Estimated Total", in the sticky mobile CTA total, or in any JSON-LD `price*` field. The price calculator now shows only what StayAtFlorida directly charges: Nightly Rate, Cleaning Fee, Taxes, Estimated Total. Do not re-add a "fee disclosure note" beneath the calculator — the Before You Arrive card is the single canonical surface for this fee.

**CTA rule:** The registration action is an explicit button labelled **`Register with the Resort`** — never `Register at tidewaterhoa.com`, `HOA registration`, `Complete registration`, `Register now`, or similar. Opens `https://www.tidewaterhoa.com/registration/` in a new tab (`target="_blank" rel="noopener noreferrer"`).

**Extended-stay uplift disclosure rule (2026-07-06 afternoon):** The $100 uplift on 3+ night bookings is **baked into the displayed nightly rate**, not shown as a separate line item on the price calculator. This is a pricing policy, not a hidden fee — the guest's "Nightly Rate" line value on the calculator already includes the uplift, and the total shown matches what they'll actually pay. Because the calculator computes `Nightly Rate × N nights = lodging total (including uplift)`, guests doing quick mental math (`per-night × nights`) will see the effective per-night rate that includes their share of the uplift ($100/N ≈ $14/night on a 7-night stay, $33/night on a 3-night stay). This matches the [`../../brand/BRAND_GUIDELINES.md`](../../brand/BRAND_GUIDELINES.md) transparency guardrail: the price shown on the calculator is the price the guest will pay — no surprise line items at checkout.

**Impact table (canonical — publish nowhere else, verify with `app.js#applyExtendedStayUplift` on any pricing change):**

| Nights | Before (was $250 clean, no uplift) | After ($200 clean + $100 uplift @ 3+) | Delta to guest |
|---|---|---|---|
| 1 | $532 | **$476** | **−$56** (short-stay discount) |
| 2 | $784 | **$728** | **−$56** (short-stay discount) |
| 3 | $1,036 | **$1,092** | **+$56** (revenue capture) |
| 4 | $1,288 | **$1,344** | **+$56** |
| 5 | $1,540 | **$1,596** | **+$56** |
| 7 | $2,044 | **$2,100** | **+$56** |
| 14 | $3,808 | **$3,864** | **+$56** |

*(Numbers assume base rate $225/night — actual totals scale with the per-day `pricing-4.json` values in effect for the selected dates.)*

## 22. Website FAQ (canonical order and content)

The single source of truth for the FAQ block on the property page. Rendered as an accordion by `app.js#renderPropertyFAQ` and emitted as `FAQPage` JSON-LD by `scripts/lib/listing-schema.cjs`. `config.js` `faqs` array must match this table byte-for-byte.

**Order rule:** Sort by *inquiry frequency* (highest-frequency questions at the top). Owner-confirmed order (2026-07-02):

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

**Deleted from the old FAQ set (2026-07-02):**
- ~~"Where is Twenty First?"~~ — merged into location/context on the page itself; low-value FAQ slot.
- ~~"How many people can it sleep?"~~ — already answered in `Sleeps up to 8` chip and the description; low-value FAQ slot.
- ~~"Do you offer discounts for direct booking?"~~ — surfaced via the Direct-Booking Trust Module; low-value FAQ slot.
- ~~"How do I contact the owner?"~~ — surfaced via the header `Inquire` CTA, trust chip strip, and every price-calculator submit; low-value FAQ slot.
- ~~"What's included in the condo?"~~ — replaced by the four-category grouped Amenities block above.

## 23. Review Author Naming Policy

**Status: HYBRID with per-platform attribution (2026-07-06 evening).** Owner directive: use **real first names captured from the source OTA, no last initial**. Attribution string rendered on the Website is **per-platform** — `Verified VRBO Guest`, `Verified Airbnb Guest`, or `Verified Booking.com Guest` — driven by the `platform` field on each review record. Reviews without a `platform` field (legacy MS811) fall back to a generic `Verified Guest`. `config.js#REVIEWS[4]` carries the reviewer's real first name in the `author` field, the full OTA-captured name (first + last initial where applicable) in a non-rendered `sourceName` field for audit, and the source platform in a `platform` field which now drives the rendered attribution label.

**Ratings policy (linked, non-negotiable).** Every review in `config.js#REVIEWS[4]` carries the **real max-rating value from its source OTA**. No rating is ever altered upward, downward, or averaged. When a review's OTA rating is below max, the response is **exclude the review from publication**, not adjust the number. This is enforced by [`docs/brand/BRAND_GUIDELINES.md`](../../brand/BRAND_GUIDELINES.md) `No rating manipulation` rule.

**Standing rules.**

- `author` field on each `config.js#REVIEWS[4]` entry = first name only, as it appears publicly on the source OTA. Where the source shows first name + last initial (VRBO, and Airbnb in some cases), take the first name only. Where the source shows a couple joint-review (e.g., `Rebecca & Eric`), keep the couple format.
- Attribution string rendered by the site = **per-platform**, derived from `review.platform` via `REVIEW_PLATFORM_LABELS` in `app.js`: `vrbo` → `Verified VRBO Guest`, `airbnb` → `Verified Airbnb Guest`, `booking` → `Verified Booking.com Guest`. Reviews with no `platform` field (currently only MS811 legacy) fall back to `Verified Guest`. Each OTA badge is an independent trust signal (VRBO/Airbnb/Booking.com each verify guest identity + stay); collapsing them into one generic label loses discriminative value. This decision reverses the earlier same-day unified-label pass (2026-07-06 morning).
- `sourceName` field on each entry preserves the full OTA-captured name for the audit trail (`Michelle B.`, `carrie g.`, `JESSICA R.`). NEVER rendered by the site — internal-only. Preserved so that if the policy is ever reversed to `first + last initial`, no re-lookup is required from the reviews archive.
- `platform` field on each entry now drives the rendered attribution label. Also preserved for future JSON-LD `Review.publisher` if that markup is ever added.
- `highlights` field on each entry (added 2026-07-06 evening pass) is an array of 0–3 short phrase strings that will be wrapped in `<strong class="review-highlight">` inside the rendered body. Phrases must be **exact substrings of the review body** (case-insensitive matching), and must be **honest scannable highlights** — never editorial insertions. See `renderReviewComment()` in `app.js` for the match-range algorithm (non-overlapping, longest-phrase-wins). Keep to 1–3 per review; the section starts to feel busy above that. See BRAND_GUIDELINES `Highlighted phrases in reviews` rule.
- `guestFavorite: true` flag on a review record (added 2026-07-06 evening pass) pins that one review above the review list as a "Guest Favorite" featured card. At most **one** review per property may have this flag set. See `renderReviews()` in `app.js`. The current TW2111 pick is review #1 (Michelle B.) — hits cleanliness + kitchen + host in a compact quote. Rotate manually only with owner sign-off; do not automate rotation (removes the editorial curation signal).
- Review *bodies* are the OTA source text with editorial trims documented per-review in [`../../listings/TW2111/reviews/CURATION_SHORTLIST.md`](../reviews/CURATION_SHORTLIST.md). Only two categories are trimmable: (a) resort-wide elevator commentary — a Tidewater HOA issue, not TW2111-specific, and (b) floor-height references — violates §14 `no floor-number` rule. Everything else stays verbatim. No content additions, no sentiment changes, no synthesized language.
- No public disclosure line about "anonymized" is rendered — the names on the Website are real, just first-name-only.

**Aggregate rating display (linked to BRAND_GUIDELINES).** The aggregate rating chip is **shown** on the property page as of 2026-07-06 evening (reversing that morning's `hideReviewAggregate: true` decision). Format: `★★★★★ 5.0 · Average Rating · 25 Featured Reviews · Verified Guests`. The `5.0` is **scoped to the 25 published reviews**, not the broader 33-review OTA archive (which averages 4.74). Do NOT claim `5.0 from 33` or any variant that implies the aggregate covers reviews not in the published set — that would violate the `No rating manipulation` rule. If a future pass surfaces the broader 33-review archive on the site (e.g., "curated from 33 verified reviews"), use the honest **4.7 aggregate** for any claim scoped to those 33, and keep the 5.0 aggregate scoped strictly to the published 25. JSON-LD `AggregateRating.reviewCount` follows the same discipline — currently `25`, matching the on-site `Review` items.

**When reviewer name adjustments arrive.** If the owner reverses to `first + last initial`, update `author` values in `config.js#REVIEWS[4]` from the `sourceName` field, log the switch in the Changelog, and update this section. If the attribution style is reversed back to unified `Verified Guest`, remove the branch in `REVIEW_PLATFORM_LABELS` or short-circuit `renderReviewListItem` — the `platform` field remains stored for future re-branching.

**Historical mapping (for the record):**

<details>
<summary>Prior states of this policy</summary>

- **Phase 2 Batch 2 (2026-07-01):** introduced pseudonymous first-name+last-initial identifiers (Sarah M., David R., Jennifer P., ...) as an SEO mitigation for the `Verified Airbnb guest`-only rendering. Rolled back.
- **Phase 2 Final Polish (2026-07-02) — REVERTED:** owner directive `do not invent reviewer identities`; reviews shipped under placeholder `Verified Airbnb guest`. Pseudonym mapping rolled back in `config.js#REVIEWS[4]`. No public disclosure line rendered.
- **Phase 3 OTA capture (2026-07-06 morning) — SUPERSEDED:** 30 real OTA reviews captured from VRBO + Airbnb + Booking.com public listings (archive at [`../reviews/`](../reviews/)). Shipped 25 real max-rating reviews with real first names + unified `Verified guest` attribution + `hideReviewAggregate: true`. Both the unified attribution and the aggregate suppression were reversed later the same day.
- **Phase 3 Sprint 1 review-section improvement pass (2026-07-06 evening) — CURRENT:** attribution flipped to per-platform (`Verified VRBO/Airbnb/Booking.com Guest`); aggregate re-enabled in a "featured reviews" format scoped to the published set (`5.0 · 25 Featured Reviews · Verified Guests`); `highlights[]` field added to each review for scannable bold key phrases; `guestFavorite: true` flag added to review #1 (Michelle B.) as a pinned featured card; heading copy changed from `Guest Reviews` to `What Our Guests Are Saying`; post-review conversion CTA added; per-review long-body expand/collapse added with `aria-expanded`; generic `Read more reviews` expand button (no running count). See Phase 3 Sprint 1 spec at the top of this Changelog for the full 8-point rubric.

Rolled-back Phase 2 Batch 2 pseudonyms (do not reintroduce without a new owner sign-off):

| Review # | Date | Rolled-back pseudonym |
|---|---|---|
| 1 | 2024-11-15 | Sarah M. |
| 2 | 2024-10-22 | David R. |
| 3 | 2024-09-30 | Jennifer P. |
| 4 | 2024-08-18 | Michael T. |
| 5 | 2024-07-25 | Emily K. |
| 6 | 2024-06-12 | Chris W. |
| 7 | 2024-05-20 | Amanda J. |
| 8 | 2024-04-15 | Robert F. |
| 9 | 2024-03-28 | Melissa H. |
| 10 | 2024-02-14 | James B. |

</details>

## 24. Internal Notes / Follow-ups

*Never surfaces on any platform. For Brand Director / CGO / Content Sync Agent use only.*

**Delivered (2026-07-02):**
- Morning-coffee-on-balcony lifestyle shot delivered: `tw-balcony-coffee.png`. Placed at hero slot #2.
- Panoramic Gulf-view balcony shot delivered: `tw-hero-view.png`. Placed at hero slot #1.

**Owner-authorized deviations from `docs/brand/BRAND_GUIDELINES.md`:**
- `tw-living-05.png` is a digitally staged / AI-generated interior refresh, published under owner override on 2026-07-02. `BRAND_GUIDELINES.md#legal--factual-guardrails` cautions against composited imagery; this deviation is time-boxed — swap for a real photograph as soon as one is available. QA watches for guest sentiment mismatches referencing this shot.
- `tw-balcony-dinner.png` — **RETIRED FROM THE SITE 2026-07-02 late evening.** Originally added 2026-07-02 as a highly styled sunset dinner setup on the balcony (wine bottle in a champagne bucket, two lit-candle wine glasses, cheese board with grapes and strawberries, floor lanterns with pillar candles, extra table candle in a glass holder, throw blanket, "Beach Life" pillow, potted plants, hyper-saturated orange-pink sunset over the Gulf). Removed from all `config.js` galleries (`Views & Beach`, `Balcony`) and from `heroPhotoOrder` per owner direction: *"Remove these photos from the site — it was already replaced with another that has much lighter light."* The wine-and-quiet-evening scene this photo was providing on the site is now covered by the softer, better-lit `tw-balcony-sunset.png` (v2, swapped earlier the same evening), which has less HDR-orange saturation and a more livable feel. File kept on disk for archival / recovery only. Not restored without a fresh owner sign-off.
- `tw-dining-sunset.png` (added 2026-07-02) — interior dining table styled for dinner (four place settings, rattan chargers, sage-and-gold linens, central candle-and-hydrangea centerpiece) with a sunset framed through the balcony doors. Same room and furnishings as `tw-living-05.png`, likely produced in the same digitally-styled pass. Published under owner override on 2026-07-02 for hero-carousel emotional appeal. Same time-boxed replacement plan.
- `tw-balcony-sunset.png` (v2 — swapped 2026-07-02 late evening; replaced the earlier "bright orange sunset with coffee mugs" version at the same filename per owner direction "use this photo instead of the other very bright one"). Softer pastel golden-hour sunset over the Gulf, two turquoise Adirondack chairs, two white-wine glasses on the turquoise side table, small bowl of grapes and strawberries, lit candle in a glass holder, cream throw blanket on one chair, a "Beach Life" pillow on the other, potted greenery, wide view of the beach below with the resort's blue chair rentals lined up on the sand. Photograph is clearly digitally styled — same visual family as `tw-balcony-dinner.png` and `tw-dining-sunset.png`. Published under owner override for hero-carousel emotional appeal. Same time-boxed replacement plan. Note: this is the second AI-styled sunset photograph in the balcony family (dinner + wine), so the real-photoshoot brief now retires **four** composite/AI shots, not three.

**Still open:**
- **Real (non-composite) evening-shot photograph of the balcony and interior dining scene** — recommended next-shoot brief: golden-hour session, guests optional but plausible, plates/glasses live on the table, no over-styled candle grid, minimal digital retouch. Purpose: retire the three remaining composite/AI shots currently on the site (`tw-living-05.png`, `tw-dining-sunset.png`, `tw-balcony-sunset.png`) with authentic Twenty First photography. *(`tw-balcony-dinner.png` was retired from the site 2026-07-02 and no longer needs a replacement — the shots above cover its role.)*
- **Homepage owner-face trust module (`Meet Simone`)** — deferred per owner (2026-07-02). Revisit after Phase 2 ship.
- Revenue Manager: revisit shoulder-season rate (Nov–Jan) — 0.37% Vrbo conversion suggests price sensitivity in that window.
- Explore a 2-night minimum for shoulder-season weekdays (currently 3 nights).
- **Reviewer name backfill: RESOLVED 2026-07-06.** Reviews now render with real first names sourced from the OTA public listings (VRBO 13 + Airbnb 10 + Booking.com 2 = 25 real max-rating reviews). See [§23 Review Author Naming Policy](#23-review-author-naming-policy) for the current hybrid policy.
    - Sub-item (a) — **RESOLVED 2026-07-06 evening.** Per-platform attribution shipped (`Verified VRBO Guest` / `Verified Airbnb Guest` / `Verified Booking.com Guest`), reversing the morning's unified label.
    - Sub-item (b) — **RESOLVED 2026-07-06 evening.** Aggregate rating chip re-enabled in a "featured reviews" format (`5.0 · 25 Featured Reviews · Verified Guests`), reversing the morning's `hideReviewAggregate: true`. Aggregate scope: strictly the 25 published reviews (not the 33-review OTA archive).
    - Sub-item (c) — **STILL OPEN.** Decide whether to surface Simone's owner responses (2 on file — VRBO Shenna O. + Booking.com Stephanie). Would land as a small "Response from the host" block below each review that has one. Content is factual, in her voice; would reinforce the host-attentiveness signal already carried by review bodies. Not blocking anything.
- **Additional `sameAs` links** for the `Organization` JSON-LD block — Instagram / Google Business Profile / YouTube — deferred per owner (2026-07-02).
- **Sticky mobile CTA on property and homepage** — explicitly deferred by owner in Phase 2 Batch 2 (2026-07-02). Revisit next cycle.
- **Homepage inquiry form** — explicitly deferred by owner in Phase 2 Batch 2 (2026-07-02): existing header `Inquire` CTA + modal is sufficient for now.
- **Urgency / scarcity messaging** — explicitly forbidden by owner (Phase 2 Batch 2, 2026-07-02). No countdown timers, no "only X left", no seasonal FOMO copy anywhere.
- **`Hosted by Simone` above the fold** — explicitly deferred by owner in Phase 2 Batch 2 (2026-07-02).
- **Reordering `Why Book Direct?` above `Signature Properties`** — explicitly deferred by owner in Phase 2 Batch 2 (2026-07-02). Keep current order.

---

## Changelog

| Date | Section | Change | Author |
|---|---|---|---|
| 2026-07-01 | Initial | MASTER.md created from prior `docs/PROPERTIES.md` content + `config.js` fields | Content Sync Agent (initial migration) |
| 2026-07-01 | §10 SEO / WEBSITE meta | Trimmed website meta description from 174 → 139 chars to fit the 160 target. New value: `Book Twenty First, a luxury Panama City Beach beachfront condo with panoramic Gulf views, sunset balcony, resort amenities, and room for 8.` Propagated to `config.js`, `listing-4.html`, `index.html` JSON-LD, `docs/brand/SEO.md`, `docs/listings/TW2111/WEBSITE.md`. | Content Sync Agent |
| 2026-07-01 | §10 SEO / WEBSITE meta | Re-tuned meta description from 139 → 160 chars for Google CTR / SERP density. Adds master brand `by StayAtFlorida`, promotes `luxury beachfront condo` to a keyword-forward phrase, swaps `sunset balcony` for `private balcony`. New value: `Book Twenty First by StayAtFlorida, a luxury beachfront condo in Panama City Beach with panoramic Gulf views, private balcony, resort amenities, and room for 8.` Propagated to `config.js`, `listing-4.html`, `index.html` JSON-LD, `docs/brand/SEO.md`, `docs/listings/TW2111/WEBSITE.md`. Sits at the 160-char ceiling — future edits must trim before adding. | Content Sync Agent |
| 2026-07-02 | §7 Sleeping Arrangements | Owner-confirmed: primary king · guest **queen** (was incorrectly `king`) · bunk room with **one set of bunks** (2 twin sleepers; was incorrectly `two sets`) · queen sleeper sofa. Propagated to §14 long description, WEBSITE.md FAQ, AIRBNB.md `Your Property`, VRBO.md `The Home`, BOOKING.md Accommodation + bed configuration, `config.js` description + availabilityChips, JSON-LD bed array in `scripts/lib/listing-schema.cjs`. | Content Sync Agent |
| 2026-07-02 | §17 Cancellation | Policy confirmed and moved from `pending` to owner-approved: **Full refund 46+ days out · 50% refund 31–45 days · Non-refundable within 30 days**. Propagated to `config.js` `SITE_CONTACT.cancellationNote`, WEBSITE.md FAQ, and the new TW2111 FAQ block on the property page. Airbnb / VRBO / Booking retain their platform-native policy tiers. | Content Sync Agent |
| 2026-07-02 | §18 Photo Caption Library | 14 new photos received. Interior + view photos replaced with new `.png` files (hero-view, balcony-coffee, 5× living, 1× dining, 2× master, 1× guest-queen, 2× bunk, 1× bath). Kitchen, pool, outdoors, resort amenities `.jpg` files retained. Hero carousel priority defined (no more random shuffle). `tw-living-05.png` is an AI-staged reference — owner-authorized deviation logged in §21. | Content Sync Agent |
| 2026-07-02 | §21 Internal Notes | Marked morning-coffee-on-balcony and panoramic-Gulf-view shots as delivered. Added owner-authorized deviation entry for AI-generated `tw-living-05.png`. Deferred owner-face trust module, additional `sameAs` social links, and real reviewer name mapping per owner input. | Content Sync Agent |
| 2026-07-02 | Phase 2 Ship-first | Multiple Phase 2 conversion-optimization changes shipped as one batch: hero CTA rename (`Book Direct & Save` → `Check Availability` on TW2111), homepage card CTA (`Check Availability` → `View Property`), homepage H1 (`Book Direct. Stay Better.` → `Luxury Beachfront Homes on Florida's Gulf Coast.`), trust chip strip beneath CTAs, FAQ block + `FAQPage` JSON-LD, hero carousel photo-order freeze + 5s autoplay + pause-on-hover, `Loved by Guests` homepage section unhidden with rotating reviews, amenity list trimmed (dropped Conference Center, added Complimentary Beach Chairs & Umbrella chip), homepage meta description trimmed to ≤160 chars, `60+ stays` badge refreshed to reflect real review count, `$1,400` savings example replaced with tiered shoulder/peak framing, `Why Book Direct?` copy revised. Reviewer names in JSON-LD updated to `Verified Airbnb guest` / `Verified VRBO guest` (owner-honest attribution; real names deferred per §21). | Content Sync Agent + Phase 2 Ship |
| 2026-07-02 | §16 Guest Message Templates + §20 Approved Response Time | Owner-confirmed response time tightened from **`typically within 24 hours`** → **`typically within 2 hours`**. Propagated to `SITE_CONTACT.replyBlurb`, hero trust chip, homepage trust badge, FAQ answer, direct-booking trust module, contact-section copy, WEBSITE/AIRBNB/VRBO/BOOKING derived files, and all brand docs (BRAND_GUIDELINES, MARKETING, HOSPITALITY, AGENTS, AI_RULES, QA_CHECKLIST, SYNC_RULES, TEMPLATE). | Content Sync Agent |
| 2026-07-02 | §15 Approved Amenities Language — beach service | Owner-confirmed: full-service beach chair rental IS available for purchase directly on the beach from third-party vendors. Rewrote the beach-service guardrail: we still never claim WE provide beach service, but we DO inform guests that vendor-supplied chair/umbrella rental is available on the beach as a paid option, alongside our complimentary in-condo chairs and umbrella. Approved language table updated; forbidden claim narrowed from `beach service` (blanket) → `implying **we** provide beach service`. Propagated to all TW2111/MS811 platform files, config.js FAQ, BRAND_GUIDELINES, MARKETING, HOSPITALITY, AGENTS, AI_RULES, QA_CHECKLIST, SYNC_RULES, TEMPLATE. | Content Sync Agent |
| 2026-07-02 | §18 Photo Caption Library + `config.js` gallery | Added new hero-tier photo `tw-balcony-sunset.png` — Gulf sunset from the balcony with two turquoise Adirondack chairs and coffee mugs on the small side table. Wired into `Views & Beach` gallery (slot #2), `Balcony` gallery (slot #1), and `heroPhotoOrder` (slot #2, right after the daytime hero view). Cover image left unchanged (`tw-hero-view.png`) — sunset shot elevated in carousel rotation but not as the property-card thumbnail, to avoid over-promising sunset framing on the homepage card. Also removed legacy `tw-01-dining.jpg` from the `Kitchen & Dining` gallery (file kept on disk, unreferenced per owner direction). | Content Sync Agent |
| 2026-07-02 | §18 Photo Caption Library + `config.js` gallery + §21 deviation log | Added two new hero-tier photos: `tw-balcony-dinner.png` (sunset dinner setup on the balcony — wine, cheese board, candles) and `tw-dining-sunset.png` (interior dining table set for dinner with sunset framed through balcony doors). Both photographs appear digitally styled / composite (same visual family as `tw-living-05.png`); logged as time-boxed owner-authorized deviations in §21, to be replaced with authentic photography when available. Restructured `heroPhotoOrder` around a day-to-night narrative arc: `tw-hero-view` → `tw-balcony-sunset` → `tw-balcony-dinner` → `tw-dining-sunset` → `tw-living-01` → `tw-master-01` → `tw-bunk-01` (7 slots, ~35s cycle). Dropped `tw-balcony-coffee.png` and `tw-dining-01.png` from hero rotation (both retained in their respective gallery sections). Wired new photos into `Views & Beach`, `Balcony`, and `Kitchen & Dining` galleries. Caption library entries added with `(digitally styled — see §21)` disclosure. §21 next-shoot brief updated: golden-hour real-photo session recommended to retire all three composite shots (`tw-living-05.png`, `tw-balcony-dinner.png`, `tw-dining-sunset.png`). | Content Sync Agent |
| 2026-07-02 | §21 AI-composite photos — v2 refresh | Regenerated all three flagged AI-composite images with a "toned-down, real-photograph" style pass (soft natural window/sunset light, subtle imperfections, no HDR-glow, no cartoon sun flare, everyday-life props like a paperback book on the sofa, flip-flops by the door, condensation on wine glasses, a wine cork on the balcony table). `tw-living-05.png`, `tw-balcony-dinner.png`, `tw-dining-sunset.png` overwritten in place; original v1s recoverable via git history. Filenames unchanged, so no downstream reference updates required. Files optimized via `sharp` palette-PNG at effort=10 to keep page weight manageable — 2.4-2.7 MB raw output compressed ~70% down to 700-765 KB each. Still ~4× heavier than the other tw-*.png files; kept as PNG rather than converted to JPG to avoid the reference-rename risk surface. `§21` still flags these as time-boxed AI-composite deviations — the v2 pass reduces the "obvious AI look" but does not solve the underlying composite-imagery guideline conflict. Real-photo shoot remains the correct long-term fix. | Content Sync Agent |
| 2026-07-02 | §21 AI-composite photos — v2 refresh **REVERTED** | Owner instruction: undo the v2 refresh and restore the originals as sent, untouched. `tw-living-05.png` (191,187 B, sha1 `5318CB3D9932` from `ChatGPT_Image_May_8__2026__08_33_35_PM...`), `tw-balcony-dinner.png` (245,051 B, sha1 `36900F6FDFD1` from `TW_Beach_Wine_Sunset_1_...`), and `tw-dining-sunset.png` (185,679 B, sha1 `1679ACC60EAB` from `TW_Dinner_Table_1_...`) restored byte-for-byte from the original owner-supplied assets. Staged v2 files removed from the workspace assets folder. Config references unchanged; static pages regenerated. §21 deviation entries for all three files stay in force — these ARE the AI-styled originals the owner authorized. Any future "make more realistic" work will be done via a real photoshoot, not AI regeneration. | Content Sync Agent |
| 2026-07-02 | Bug-fix: calendar showed zero blocked nights + contact form lost its Web3Forms key | Two production regressions surfaced by the owner during Final Polish QA and repaired in-place. **(A) Calendar bug.** `fetchAvailabilityForListing()` in `app.js` was building its fetch URL by prepending `SITE_BASE_URL` (which points at the production origin `https://stayatflorida.com`). Result on `http://127.0.0.1:8765`: browser attempted a cross-origin fetch, which either 404'd against a stale production file or was CORS-blocked (production doesn't send `Access-Control-Allow-Origin: http://127.0.0.1:8765`). The `catch` branch swallowed the failure and set `syncedUnavailableByListingId[propertyId] = []`, so the calendar rendered every future date as available — no blocked nights, no turnover markers, no half-cells. Fix: switched both `fetchAvailabilityForListing()` and `fetchPricingForListing()` to origin-relative URLs (`data/availability-${id}.json` and `data/pricing-${id}.json`). Same-origin on both localhost and production; identical to how `scripts/inject-cf-beacon.cjs` and every other data file is loaded. **(B) Contact form bug.** `WEB3FORMS_ACCESS_KEY` in `config.js` was the literal placeholder string `__WEB3FORMS_ACCESS_KEY__` (a deploy-time injection sentinel). The `getWeb3FormsAccessKey()` guard correctly detects that as an unconfigured key and short-circuits the submit with a `Configure WEB3FORMS_ACCESS_KEY` warning, so the form was visibly broken on localhost. Fix: restored the real Web3Forms key (`d1ccaac2-d8a0-...`) that was previously committed in `a7a9664 Switch contact form to Web3Forms`; updated `.github/workflows/deploy-pages.yml` to be **idempotent** so it works whether the placeholder or a real key is present at deploy time (still lets `secrets.WEB3FORMS_ACCESS_KEY` override for rotation, but a missing secret is now a warning, not a failure); updated `SECURITY.md` to document the pattern. Web3Forms keys are per-domain frontend tokens explicitly safe to commit when the allowed origins are locked in the Web3Forms dashboard. **Files touched:** `app.js` (calendar/pricing fetch), `config.js` (WEB3FORMS_ACCESS_KEY value + comment), `.github/workflows/deploy-pages.yml` (idempotent inject step), `SECURITY.md` (secret table + rotation guidance). **No content or brand changes.** No property-content changes on either TW2111 or MS811. | Software Architect + Content Sync Agent |
| 2026-07-02 | Site-wide `Questions?` block + §18 Photo Caption Library + §21 deviation log + OTA docs (AIRBNB, VRBO, BOOKING) | Two owner-directed changes bundled: **(A)** Homepage `Contact` section heading and body rewritten. Old: `Questions? Talk to the Owner` / `Ask about dates, parking, or what to pack—Simone typically replies within 2 hours by email.` New: **`Questions? Contact the Owner`** / **`Have questions before you book? You'll receive a personal response directly from Simone, the owner, typically within 2 hours during normal business hours.`** Rendered in `index.html` `#contact` section — email address, socials, footer, and the `Inquire` header CTA all untouched; only the section title and lead paragraph changed. **(B)** `tw-balcony-dinner.png` retired from the site per owner direction *"Remove these photos from the site — it was already replaced with another that has much lighter light."* The retired shot was the hyper-saturated orange sunset dinner scene (wine bottle in ice bucket, cheese board, multiple lit candles, floor lanterns, "Beach Life" pillow) — its "wine + sunset + balcony" role is now covered by the softer swapped `tw-balcony-sunset.png` (v2). Removed from `config.js` `images["Views & Beach"]`, `images["Balcony"]`, and `heroPhotoOrder`. Removed from `AIRBNB.md` / `VRBO.md` / `BOOKING.md` photo tables (rows renumbered). `§18` caption entry marked **RETIRED**. `§21` deviation entry updated from "highly styled dinner setup" to "RETIRED FROM THE SITE 2026-07-02 late evening" with the reasoning preserved. Real-photoshoot brief in "Still open" trimmed from four composite/AI shots to three (`tw-living-05.png`, `tw-dining-sunset.png`, `tw-balcony-sunset.png`). File `tw-balcony-dinner.png` kept on disk for archival — not restored without fresh owner sign-off. Static pages regenerated. **No unrelated files touched.** | Content Sync Agent |
| 2026-07-02 | §18 Photo Caption Library + §21 deviation log | Swapped `tw-balcony-sunset.png` at the same filename per owner direction ("use this photo instead of the other very bright one"). The retired image was the intensely saturated orange sunset with two coffee mugs on the small side table between turquoise Adirondack chairs — flagged by the owner as "very bright". The replacement is a softer pastel golden-hour sunset over the Gulf, still with the same turquoise chairs, but restyled around a two-glasses-of-wine evening rather than a two-coffee-mugs morning: two white-wine glasses on the turquoise side table, small bowl of grapes and strawberries, lit candle in a glass holder, cream throw blanket on one chair, a "Beach Life" pillow on the other, potted greenery, and a wider view of the beach below with the resort's blue chair rentals lined up on the sand. The new photograph is clearly digitally styled (same visual family as `tw-balcony-dinner.png` and `tw-dining-sunset.png`) and was added to the §21 AI-composite deviation log; the real-photoshoot brief now retires **four** composite/AI shots, not three. Filename unchanged (`tw-balcony-sunset.png`), so no `config.js` / `heroPhotoOrder` / gallery / static-page reference updates were required — the swap is purely at the image-asset level, with the caption library entry (§18) updated to reflect the new content and `(digitally styled — see §21)` disclosure. Static pages regenerated so JSON-LD alt text picks up the new caption. **No other files changed.** | Content Sync Agent |
| 2026-07-02 | **Phase 2 Final Polish — freeze pass** | Owner-approved final refinement before TW2111 is frozen and focus moves to MS811 + homepage. Eight changes: (1) `Community registration fee` renamed to **`Resort Registration Fee`** everywhere it surfaces (§21 Fee Schedule, §22 FAQ Q1, WEBSITE.md, config.js, price calculator, static JSON-LD). New supporting sentence: *"Required by the resort for parking passes and guest wristbands."* Fee amount unchanged ($54.04); calculation unchanged. (2) Price calculator UI reformatted: heading `Price Calculator` → **`Your Stay`**; line labels tightened (`Lodging (N nights)` → `Nightly Rate` with subtext, `Cleaning fee` → `Cleaning Fee`, `Tax (12%)` → `Taxes`, `Community registration fee` → `Resort Registration Fee`); total row → `Estimated Total`; subtle trust note added below the total: *"No OTA service fees when booking direct."* Understated typography, no color highlight. (3) New property-page trust panel **`Why Book Direct with StayAtFlorida`** (§14d) — 7 short check-mark bullets, muted background, no CTA. Placement: below Availability & Pricing, above Stay Details. Distinct from the homepage 3-card `Why Book Direct?` section. (4) `Before You Arrive` split into two paired cards (§14a + new §14c `During Your Stay`). Card 1 items: Parking · Wristbands · Resort Registration Fee · Check-in. Card 2 items: Complimentary beach chairs and umbrella · Beach access · Resort amenities · Check-out reminders. Same rendered position; side-by-side desktop, stacked mobile. (5) Primary CTA `Check Availability` and secondary CTA `View Photos` **frozen** (§12) — explicit "never swap for `See Available Dates`" note added. (6) **§23 Review Author Naming Policy REVERTED** per owner directive. Pseudonyms (Sarah M., David R., Jennifer P., ...) rolled back in `config.js#REVIEWS[4]` — all 10 reviewers now render as `Verified Airbnb guest` again. The "Names anonymized for guest privacy" public disclosure line removed. SEO rich-snippet suppression accepted as trade-off for honesty. Historical mapping kept in §23 (collapsed) so it can be re-adopted if the owner reverses. (7) Brand rules re-affirmed and enforced end-to-end: no Serenity Rentals, no Fun in the Sun, no floor references, no beach-service implication, exact wording `Complimentary beach chairs and umbrella available in the condo` only. (8) Review section typography tightened (increased vertical rhythm, tighter meta-line spacing, subtler card borders) without touching review content. **Files touched:** `MASTER.md`, `WEBSITE.md`, `docs/brand/{BRAND_GUIDELINES,QA_CHECKLIST,SEO}.md`, `config.js`, `app.js`, `styles.css`, `listing-4.html`, `listing-5.html`, `sitemap.xml`. **No MS811 content changed.** No OTA-derivative files changed. | Content Sync Agent + Phase 2 Final Polish |
| 2026-07-02 | Per-day pricing data added + `priceRange` widened to `$125-$660` + 2027 seasonal fallbacks | Owner-supplied PriceLabs calendar screenshots (Jul 2026 → Mar 2027) transcribed into a new **`data/pricing-4.json`** file consumed by `app.js#fetchPricingForListing` and `getAdjustedRate`. 225 dated prices covering the peak booking window — same schema as the pre-existing PriceLabs sync stub (`scripts/sync-pricelabs.cjs`) writes. Any date not listed falls back to `config.js#seasonalAdjustments` as before. **Monthly averages observed:** Jul $430 · Aug $358 · Sep $375 (Labor Day peak $660) · Oct $340 · Nov $348 (Thanksgiving peak $484) · Dec $306 · Jan-27 $345 (NYE $465) · Feb-27 $361 · Mar-27 $468 (Spring Break). **Skipped dates (fall back to seasonal):** BikeFest weekend (Oct 1-3), Columbus Day cluster (Oct 9-17), Ironman weekend (Sep 22-26 partial), most of April 2027 (Bike Week — low OCR confidence from source screenshots). **§21 Fee Schedule** updated: peak ceiling widened from `~$610` (July 4 fallback formula) to `~$660` (observed PriceLabs peak on Labor Day Sunday). **`priceRangeOverride`** widened from `$125-$610` → `$125-$660`; propagated to `listing-4.html` VacationRental JSON-LD. **`config.js#seasonalAdjustments`** rewritten as safety-net fallbacks: 2026 second half recalibrated to match observed PriceLabs ranges (August adj `1.4` → `1.6`, September adj `1.3` → `1.5-2.4` split for Labor Day / Ironman event windows, Oct/Nov/Dec similarly refined, event-weekend surges broken out into their own ranges), plus new 2027 coverage (Jan-May) so any advance booking past PriceLabs data doesn't drop back to `$225 × 1.0`. Falls back on any date without a `data/pricing-4.json` entry. **Files touched:** `data/pricing-4.json` (new), `config.js` (seasonalAdjustments + priceRangeOverride), `listing-4.html` (regenerated JSON-LD priceRange), MASTER.md §21 + Changelog. **QA:** JSON validated (225 entries, min $254 max $660), served over HTTP on localhost, sample lookups confirmed (Jul 17 = $520, Sep 6 = $660, Mar 20-27 = $513). **No content or brand changes.** No MS811 changes. **Follow-up:** wire up the real PriceLabs API sync (`scripts/sync-pricelabs.cjs` is scaffolded — just needs API key + endpoint) to eliminate the need for manual screenshot transcription and auto-refresh daily. | Content Sync Agent |
| 2026-07-02 | **Phase 2 Batch 2 — Conversion optimization ship** | Owner-approved batch of six conversion-focused changes: (1) Header `Inquire` CTA added site-wide (§12) — routes to existing `showContactModal()`; not a new form; premium-understated outlined-button style; always visible on mobile. `Contact` nav link retired (deduped). (2) TW2111 price calculator now shows the **community registration fee ($54.04)** as an explicit line item (§21 Fee Schedule). Registration paragraph removed from §14 long description and moved to new §14a Before You Arrive. (3) FAQ block **reordered by inquiry frequency** and **expanded from 8 → 10 items** (§22): parking, beach access, cancellation, beach chairs & umbrella, pets, check-in, Wi-Fi, Pier Park, airport, best time to visit. Five low-value legacy FAQs deleted (`Where is Twenty First?`, `How many people can it sleep?`, direct-booking discount, contact owner, what's included — all surfaced elsewhere on the page). (4) Amenities restructured into four canonical categories: **Inside the Condo · Beach Convenience · Resort Amenities · Location & Access** (§6). Each amenity in `config.js` now carries an explicit `group` field. (5) `priceRange` in `VacationRental` JSON-LD updated from auto-derived `$225-$338` (stale) to owner-verified `$125-$610` (§21) via new `priceRangeOverride` field on property record. (6) New lifestyle sequence `A Day at Twenty First` (§14b) — six elegant beats (sunrise coffee → beach time → resort pool → sunset balcony → dinner with Gulf views → quiet evening inside). No exclamation marks, no CTA, no hype. Also: reviewer names updated per new §23 policy — 10 pseudonymous first-name+last-initial identifiers replacing the placeholder `Verified Airbnb guest`, with a public "Names anonymized for guest privacy" disclosure line. Owner-authorized deviation logged in §23 (retirement condition: real-name backfill from platform host dashboards). Physical section numbering also cleaned up: Fee Schedule (§21), Website FAQ (§22), Review Author Naming Policy (§23), Internal Notes / Follow-ups (§24). **Explicit deferrals (this batch):** sticky mobile CTA, homepage inquiry form, urgency/scarcity messaging, `Hosted by Simone` above the fold, reordering `Why Book Direct?` above `Signature Properties`. **No MS811 content changed** except header nav (Inquire CTA appears on all pages via shared `index.html` nav). | Content Sync Agent + Phase 2 Batch 2 Ship |
| 2026-07-06 | **Phase 2 Homepage Conversion Polish** | Owner-approved homepage-only refinement pass; TW2111 property page untouched. Five changes: (1) **Hero eyebrow** rewritten from `A Boutique Beach Rental Brand` → **`A Boutique Beachfront Stay Collection`**. "Rental" reads transactional; "Stay Collection" supports the boutique-hospitality positioning without overpromising. (2) **Homepage hero primary CTA** renamed from `Book Direct & Save` → **`Explore Signature Properties`** — still scrolls to `#properties`. The old label sold the transaction before the collection; the new one is a collection-first invitation. (3) `Book Direct & Save` **relocated** to the `Why Book Direct?` section as an in-context secondary CTA — no longer a hero-level shout. (4) **TW2111 homepage card copy** (`cardShortDescription`) tightened to *"Panoramic Gulf views, sunset balcony, direct beach access, resort amenities, and room for up to 8 guests."* Merchandising in one scannable sentence, no CTA text. See §13a. (5) **Homepage `Contact` section** promoted to a real conversion touchpoint: new primary button `Send an Inquiry` opens `showContactModal()` (existing modal — no new form). Email address stays visible below the button as a secondary affordance (smaller, muted). Owner-hosted 2-hour reply messaging preserved verbatim. §12 Approved CTAs updated with the new homepage CTA hierarchy (5-item canonical list); a new `Homepage CTA hierarchy` block was added to lock it in. **Explicit deferrals (this batch):** sticky CTA, urgency messaging, homepage inquiry form, new SEO landing pages. **Files touched:** `docs/listings/TW2111/MASTER.md` (§12 + §13a + this row), `docs/listings/MS811/MASTER.md` (§12 CTA alignment + §13a homepage card copy + changelog), `docs/brand/BRAND_GUIDELINES.md` (Primary CTA list + eyebrow), `docs/brand/MARKETING.md`, `docs/QA_CHECKLIST.md`, `docs/brand/SEO.md`, `config.js` (TW2111 `cardShortDescription`, MS811 `cardShortDescription`, MS811 `cardSubtitle`), `index.html` (eyebrow, hero CTA, Why-Book-Direct section CTA, contact section button + secondary email), `styles.css` (`.contact-cta-primary`, `.contact-email-secondary`, `.why-book-direct-cta-row`), `listing-4.html` + `listing-5.html` + `sitemap.xml` (regenerated). **No MS811 rebrand** — only card copy + subtitle + CTA alignment. **No property-page content changed** (TW2111 stays frozen, MS811 body stays as-is). No OTA-derivative files changed. **QA:** header/nav works, hero CTA scrolls to `#properties`, `Send an Inquiry` opens the same modal as header `Inquire`, cards render TW2111 blurb + MS811 blurb, forbidden-language grep clean, no floor-number leaks, no beach-service claim, mobile layout verified. | Content Sync Agent + Phase 2 Homepage Polish |
| 2026-07-06 | **OTA review capture** *(external source archive, not a publish)* | 33 verbatim OTA reviews for TW2111 captured to a new archive folder `docs/listings/TW2111/reviews/` for use by Phase 3 initiative #4 (Review aggregation onto Website). **Method:** Cursor browser MCP + CDP `Runtime.evaluate` on the public review modals of `https://www.vrbo.com/3853978`, `https://www.airbnb.com/rooms/1102297481087079379`, and `https://www.booking.com/hotel/us/fun-in-the-sun-panama-city-beach1.html` on 2026-07-06. **VRBO: 19 reviews** (aggregate 9.4/10 Exceptional; category breakdown Cleanliness 9.8, Check-in 9.8, Communication 9.6, Location 9.8, Listing accuracy 9.8, Value for money 9.4). Includes one owner response (Shenna O. 6/10, May 2024). **Airbnb: 11 reviews** (aggregate 4.91/5; Superhost badge verified; 6 years hosting; Loved-for chip counts captured — Hospitality 7, View 6, Cleanliness 3, Beach 2, Access 2, Checkout 2, Check-in 2, Indoor spaces 2). **Booking.com: 3 reviews** (aggregate 9.7/10 Exceptional; all 7 category scores at 10). Includes one owner response (Stephanie fee-clarification, Feb 2026). **Houfy: 0 visible reviews for TW2111** — MS811's Houfy listing has 50 reviews, so this is a review-solicitation gap on TW2111 specifically (reinforces Phase 3 initiative #44). **Rating distribution across the 33-review archive:** 25 max-rating reviews (13 VRBO 10/10, 10 Airbnb 5-star, 2 Booking.com 10/10) + 8 sub-perfect (5 VRBO 8/10, 1 VRBO 6/10, 1 Airbnb 4-star, 1 Booking.com 9/10). **The 25 max-rating count alone exceeds the ≥25-review Success Metric on tracker #4 — legitimate selection to publish only these achieves the target without any rating manipulation.** **New portfolio finding:** Booking.com listing already exists at `/hotel/us/fun-in-the-sun-panama-city-beach1.html` (title already rebranded away from `Fun in the Sun` on the surface, but URL slug retains legacy string and title overemphasizes `Tidewater Resort`). Tracker row #11 (Booking.com Platform Optimization Assessment) re-scoped from "should we list?" → "listing exists; rebrand-in-place" — same trade-off pattern as #12 Houfy. **Files created:** `docs/listings/TW2111/reviews/{README,2026-07-06-vrbo,2026-07-06-airbnb,2026-07-06-booking-com}.md`. Reviewer names captured **as they appear publicly on each OTA** (first name + last initial on VRBO; first name only on Airbnb + Booking.com) — MASTER §23 real-name-vs-anonymized-when-published-to-Website policy is still owner-decided; the archive is a curation source, not a publish surface. Elevator commentary appears in 10 of 33 OTA reviews (6/19 VRBO, 3/11 Airbnb, 1/3 Booking.com) — a resort-wide (not TW2111-specific) issue motivating a new FAQ entry under Phase 3 initiative #51. **Curation gate:** Website today renders 10 reviews via `config.js#REVIEWS`; publishing 25+ requires owner review of the raw quotes, selection, resolution of §23, and confirmation that all published `schema.org/Review` markup carries **honest ratings** (see BRAND_GUIDELINES no-overpromise + AI_RULES no-fake-claims rules; also 16 CFR Part 465 on Deceptive Reviews). **No production code touched.** **Tracker changes filed separately:** #4 status → 🟡 In Progress; #11 status → 📋 Planned with re-scoped Notes in `docs/phase-3/revenue-impact-tracker.md`. | Content Sync Agent + Cursor browser MCP scrape |
| 2026-07-06 | **Pricing pass — cleaning fee $250 → $200 + extended-stay uplift added** | Two paired pricing changes shipped in the same batch. **(1) TW2111 cleaning fee $250 → $200.** Third attempt at this reduction (two prior attempts on 2026-07-06 were staged then reverted). This one ships because it's paired with the uplift below — the net revenue impact is designed, not incidental. **(2) Extended-stay uplift added — TW2111 $100 flat on 3+ night stays, MS811 $50 flat on 3+ night stays.** Uplift is **baked into the `Nightly Rate` row of the price calculator, not shown as a separate line item**, per owner directive. TW2111 uplift sized at $100 (not $50) so that after the $50 cleaning-fee reduction, 3+ night stays are +$50 pre-tax / +$56 post-tax vs. the prior $250-cleaning pricing — the "add $50 to bookings > 2 days" owner directive was intended as revenue-additive, not as an offset for the cleaning cut. MS811 uplift stays at $50 because MS811 cleaning didn't change. **Impact on TW2111** (base rate $225): 1-night stay was $532 → now $476 (−$56, short-stay discount); 3-night was $1,036 → now $1,092 (+$56, revenue capture); 7-night was $2,044 → now $2,100 (+$56). **Impact on MS811** (base rate $300): 1-2 night stays unchanged; 3-night was $1,288 → now $1,344 (+$56); 7-night was $2,632 → now $2,688 (+$56). **Code changes:** (a) `config.js` — TW2111 `cleaningFee: 250 → 200` + new `extendedStayUplift: { thresholdNights: 3, amount: 100 }` on TW2111 + new `extendedStayUplift: { thresholdNights: 3, amount: 50 }` on MS811. (b) `app.js` — new `applyExtendedStayUplift(nightlyTotal, nights, property)` helper called at all four price-computation sites (`getSelectedStayPricing`, contact-modal HTML setup, email-body setup, `renderPriceCalculator`) so the calculator, the modal summary, and the emailed request all agree. (c) `docs/listings/TW2111/MASTER.md` §21 Fee Schedule updated with new cleaning fee value + extended-stay uplift row + canonical impact table + new Extended-stay uplift disclosure rule + this changelog entry. (d) `docs/listings/TW2111/WEBSITE.md` Price Calculator section updated with new line-item table, calculation rules, and transparency clause. (e) `docs/listings/MS811/MASTER.md` new changelog entry. (f) `docs/brand/BRAND_GUIDELINES.md` "Legal / factual guardrails" section adds the **Baked-in pricing adjustments** rule — canonical statement of when a pricing policy can be absorbed into the `Nightly Rate` row without a separate line item. (g) `docs/brand/QA_CHECKLIST.md` updates the two Critical rows on the TW2111 calculator to reflect Cleaning Fee = $200, adds a new Critical row for the extended-stay uplift math test (1-night vs 3-night delta = property's uplift value), and adds a Standard row with canonical impact-table values at the base rate. (h) `listing-4.html` + `listing-5.html` + `sitemap.xml` regenerated. **QA verified** with offline pricing simulation before doc updates: 1-night TW2111 = $476 · 2-night = $728 · 3-night = $1,092 · 7-night = $2,100 · MS811 3-night = $1,344 · 7-night = $2,688 — all match expected values within rounding. Owner-approved decisions on record (see AskQuestion 2026-07-06 afternoon): $50 uplift is revenue-additive (not offset), applies to stays strictly >2 nights (i.e., 3+), applies to both properties, baked into `Nightly Rate` row (no separate line item). | Content Sync Agent + Pricing policy pass |
| 2026-07-06 | **Review section rebuild — 25 real max-rating reviews shipped** | Phase 3 initiative #4 shipped end-to-end. `config.js#REVIEWS[4]` replaced (10 anonymized entries → 25 real max-rating reviews). Source data: 30 OTA reviews captured earlier the same day in [`../listings/TW2111/reviews/`](../listings/TW2111/reviews/) — 25 selected (13 VRBO 10/10, 10 Airbnb 5-star, 2 Booking.com 10/10; excluded the 8 sub-perfect reviews per owner directive Option A, no ratings manipulated). Per owner ship-gate directives: hybrid naming policy (real first name only, no last initial), unified `Verified guest` attribution regardless of platform, no aggregate rating chip on the property page, minor typo/grammar cleanup per shortlist, elevator + floor-height commentary trimmed. **Code changes:** (1) `config.js` — new `REVIEWS[4]` array with 25 entries plus new `platform` + `sourceName` fields (audit-trail only, non-rendered); new `hideReviewAggregate: true` flag on the TW2111 property record. (2) `app.js` — `renderReviewListItem` renders a small understated `Verified guest` badge between author and date; `renderReviews` suppresses the `.reviews-summary` chip when `property.hideReviewAggregate === true`. (3) `styles.css` — new `.review-item-verified` badge style (uppercase, muted, small). (4) MASTER §23 rewritten from `REVERTED` → `HYBRID (current)` with the standing rules, ratings-manipulation prohibition cross-linked to `../../brand/BRAND_GUIDELINES.md`, and the historical mapping preserved in the collapsed `<details>`. (5) BRAND_GUIDELINES.md gains a new `No rating manipulation` subsection under Reviews. (6) `listing-4.html` + `sitemap.xml` regenerated — individual `schema.org/Review` markup for the 25 reviews (honest 5-star `reviewRating.ratingValue` each), `AggregateRating` intentionally omitted. **QA:** all 25 reviews render on the TW2111 page in priority order, `Verified guest` attribution appears next to each author name, aggregate rating chip suppressed on property page (homepage rating strip untouched since MS811 shares that section), homepage 6-featured pick still works (round-robin across TW2111 25 + MS811 10), `node --check config.js` + `node --check app.js` clean, no forbidden-language leakage in bodies (elevator/floor-height/Fun-in-the-Sun/Serenity grep clean), all 25 ratings are honestly 5-star (no manipulation), MS811 REVIEWS[5] untouched, MS811 property page untouched. **Files touched:** `config.js` (REVIEWS[4] replacement + TW2111 `hideReviewAggregate` flag), `app.js` (renderReviewListItem + renderReviews), `styles.css` (`.review-item-verified`), `docs/listings/TW2111/MASTER.md` (§23 rewrite + §24 follow-up update + this Changelog row), `docs/brand/BRAND_GUIDELINES.md` (`No rating manipulation` subsection), `docs/listings/TW2111/reviews/CURATION_SHORTLIST.md` (created earlier same day), `listing-4.html`, `sitemap.xml`. **No MS811 changes.** **Tracker:** row #4 (Review aggregation) → 🟡 In Progress → 🟢 Completed *(pending the 30-day Success Metric measurement window on inquiry-form-submit lift)*. | Content Sync Agent + Phase 3 initiative #4 ship |
| 2026-07-06 | **Owner decisions — Houfy + Instant Book** *(tracker updates, no production changes)* | Three Phase 3 tracker rows updated per owner directive: **(1) Houfy Platform Optimization Assessment (`revenue-impact-tracker.md` #12)** — decision: **rebrand-in-place**. Do not retire the listing, do not republish under a new slug — edit the existing Houfy TW2111 listing (and MS811 sister listing) to comply with `../brand/BRAND_GUIDELINES.md` forbidden-string rules. Status ⚠ Needs Owner Decision → 📋 Planned. If Houfy allows slug editing, update `/lodging/fun-in-the-sun/` → `/lodging/twenty-first/`; if the slug is immutable, accept the legacy-slug trade-off and rebrand every user-visible copy field (title, description, tagline, FAQ, House Rules, photo captions). §1 Prioritized Rollup scope note updated from `rebrand or retire` → `rebrand-in-place`. Unblocks tracker initiative #49 (Houfy `Book Direct and Save` tagline alignment): status ⏸ Deferred → 📋 Planned, now part of the #12 rebrand pass. Follow-up: new `docs/listings/TW2111/HOUFY.md` file should be created to mirror the `AIRBNB.md`/`VRBO.md` derivation pattern before executing the actual Houfy dashboard edits. **(2) Instant Book decision matrix (`revenue-impact-tracker.md` #46)** — decision: **keep Instant Book enabled where currently on**. Status ⚠ Needs Owner Decision → 🟢 Completed. Revisit only if quality-of-guest issues arise. Per-platform state to be verified in host dashboards during initiatives #47 (AirCover audit) and #48 (VRBO Highlights). No further action unless the decision is revisited. **No `config.js`, `app.js`, `styles.css`, `index.html`, or static-page changes.** No property-content changes on TW2111 or MS811. Only tracker + this changelog entry. | Content Sync Agent + owner-decision batch |
| 2026-07-06 | **Phase 3 Sprint 1 — Review section improvement pass** | Reverses two of the morning ship's decisions and adds five new review-section features. **Reversals: (a)** Attribution flipped from unified `Verified guest` to **per-platform** — `Verified VRBO Guest`, `Verified Airbnb Guest`, `Verified Booking.com Guest`, driven by the `platform` field on each review; MS811 legacy reviews (no `platform`) gracefully fall back to `Verified Guest`. **(b)** Aggregate rating chip **re-enabled** with a new "featured reviews" format: `★★★★★ 5.0 · Average Rating · 25 Featured Reviews · Verified Guests`. Aggregate scope is strictly the 25 published reviews (does NOT claim `5.0` over the broader 33-review OTA archive — that archive averages 4.74, per BRAND_GUIDELINES `Aggregate rating display` rule). `hideReviewAggregate: true` retained as an escape hatch on the property record schema but removed from TW2111. **New features: (c)** `Loved For` chip strip below the section header — six curated chips (`Beachfront Views` · `Spotlessly Clean` · `Family Friendly` · `Exceptional Host` · `Fully Equipped Kitchen` · `Easy Beach Access`) supported by review-body themes and the Airbnb `Loved for` category-signal capture. Chips are a new `lovedFor: [...]` field on the property record. **(d)** `highlights: [...]` field added to each of the 25 TW2111 review records (1–3 short phrases each). Rendered as `<strong class="review-highlight">` inside the review body via a new `renderReviewComment()` helper that builds a non-overlapping match-range mask so overlapping phrases don't create nested `<strong>` tags. **(e)** `guestFavorite: true` flag added to review #1 (Michelle B.) — pinned above the review list as a "Guest Favorite" featured card with a subtle amber-tinted card style. **(f)** Section heading changed from `Guest Reviews` → **`What Our Guests Are Saying`**. Applies globally (both TW2111 and MS811 get the new heading). **(g)** Per-review long-body expand/collapse — reviews whose raw comment length exceeds `REVIEW_PREVIEW_CHAR_LIMIT` (250 chars) render with CSS `-webkit-line-clamp: 5` preview + a `Read more`/`Show less` toggle button with `aria-expanded`; deterministic (character-threshold based) so it works even inside the initially-hidden `.reviews-more-panel`. Toggle handler: new `toggleReviewText()` global. **(h)** Post-reviews conversion CTA — soft prompt `Ready to experience it yourself? Check Availability` linking to `#property-availability` with the same `scrollToPropertyCalendar()` handler as the hero-level CTA. **(i)** Generic `Read more reviews` expand-button label — removed the running count (`Read 22 more reviews` → `Read more reviews`) per owner direction on the screenshot. **Code changes:** (1) `config.js` — `REVIEWS[4]` gains `highlights[]` on all 25 entries + `guestFavorite: true` on entry id=1; TW2111 property record gains `lovedFor: [...]` and drops `hideReviewAggregate: true`. (2) `app.js` — new `REVIEW_PREVIEW_CHAR_LIMIT` + `REVIEW_PLATFORM_LABELS` constants; new `renderReviewComment(text, highlights)` helper (non-overlapping match-range emitter with escapeHtml preserved); new `toggleReviewText(button)` global handler; `renderReviewListItem` rewritten (per-platform attribution + highlighted body + truncatable-long-review path); `renderReviews` rewritten (new heading, aggregate summary in featured format, Loved For chip strip, Guest Favorite featured card, generic `Read more reviews` label, post-CTA). (3) `styles.css` — new `.reviews-summary--featured` aggregate card, `.reviews-loved-for` + `.reviews-loved-for-chip` chip strip, `.review-featured` + `.review-featured-badge` + `.review-featured-card` pinned card, `.review-item-text--clamped` + `.review-item-text--expanded` + `.review-item-body` + `.review-read-more-btn` per-review expand, `.review-highlight` bold+color styling for highlighted phrases, `.reviews-cta` post-conversion prompt, per-platform `.review-item-verified--vrbo/airbnb/booking` tint modifiers, plus responsive breakpoints for all new components. (4) `scripts/lib/listing-schema.cjs` — comment rewrite documenting the aggregate reversal + the "scope to published set" discipline; `AggregateRating` block automatically re-emits now that `hideReviewAggregate` is absent from TW2111. (5) `listing-4.html` + `listing-5.html` + `sitemap.xml` regenerated. `listing-4.html` JSON-LD now carries `aggregateRating: { ratingValue: "5.0", reviewCount: 25 }` alongside 20 inline `Review` items. (6) MASTER.md §23 rewritten (per-platform attribution now standing, aggregate-display policy formalized, `highlights[]` + `guestFavorite` rules added, historical mapping in `<details>` gets a fourth entry); §24 open items (a) and (b) both marked RESOLVED. (7) BRAND_GUIDELINES.md updates the `Reviews on the direct site` section: `Aggregate rating display` rule rewritten to allow the featured format scoped to the published set + explicit "no over-scoping" prohibition; new `Highlighted phrases in reviews` subsection; new `Featured "Guest Favorite" review card` subsection. (8) QA_CHECKLIST.md gains a new Critical row for the reviews section (heading text, aggregate math, per-platform labels, expand/collapse, CTA scroll target). **QA:** `node --check config.js` clean; `node --check app.js` clean; regenerated `listing-4.html` JSON-LD parsed and verified — `aggregateRating.ratingValue = "5.0"`, `aggregateRating.reviewCount = 25`, `review[0].author.name = "Michelle"` (Guest Favorite pin), all 20 inline `Review.reviewRating.ratingValue = 5`; forbidden-language grep clean; MS811 review section still renders (falls back to `Verified Guest` label; no chips; new heading; no featured card; no aggregate summary changes since MS811's aggregate is genuinely 5.0/10 = still 5.0). **Files touched:** `config.js`, `app.js`, `styles.css`, `scripts/lib/listing-schema.cjs`, `docs/listings/TW2111/MASTER.md` (§23 + §24 + this row), `docs/brand/BRAND_GUIDELINES.md`, `docs/brand/QA_CHECKLIST.md`, `listing-4.html`, `listing-5.html`, `sitemap.xml`. **No MS811 property-content changes.** No OTA-derivative files touched. | Content Sync Agent + Phase 3 Sprint 1 review-section improvement pass |
| 2026-07-06 | **TW2111 Pricing / Logistics cleanup** | Owner-approved pricing + logistics refinement. Two changes shipped, one reverted pre-publish: **(1) Resort Registration Fee removed from the price calculator.** The line item and its addition to `Estimated Total` were dropped from `app.js#renderPriceCalculator`. The calculator now shows exactly four rows: `Nightly Rate` · `Cleaning Fee` · `Taxes` · `Estimated Total`. No new fee disclosure was added beneath the calculator (existing understated `No OTA service fees when booking direct.` trust note preserved). Rationale: the fee is paid **directly to the Tidewater resort HOA**, not to StayAtFlorida — surfacing it on our calculator misrepresented what we're charging, and moving it to a dedicated Before-You-Arrive item makes the pass-through nature more honest, not less transparent. **(2) Resort Registration Fee kept only in §14a Before You Arrive** with new copy: *"A one-time $54.04 fee paid directly to the resort before arrival. It includes up to 2 parking passes and 8 guest wristbands. Register at least 24 hours before arrival to save $10."* A distinct **`Register with the Resort`** button now renders below the fee bullet, linking to `https://www.tidewaterhoa.com/registration/` (`target="_blank" rel="noopener noreferrer"`). Retired sentence: *"Shown as a separate line on the price calculator; collected by the community, not by StayAtFlorida."* Retired inline link: `Register at tidewaterhoa.com`. `renderStayLogisticsCard` extended with new `ctaLabel` + `ctaUrl` fields (kept `linkLabel` + `linkUrl` for backward compat — inline text link vs. distinct button are now two separate affordances). **(3) Cleaning fee reduction $250 → $200 — REVERTED pre-publish.** Staged in-session but reverted the same session before commit per owner directive — held at **$250**. Do not re-reduce without a fresh owner directive. `config.js#properties[id=4].cleaningFee` carries an explicit comment banner documenting the revert so no future contributor accidentally re-applies it. §21 Fee Schedule row for Cleaning Fee notes the staged-and-reverted history. **§21 Fee Schedule** rewritten: Resort Registration Fee row's `Where displayed` column changed from "Price calculator (dedicated line)…" → "§14a Before You Arrive only — not shown on the price calculator"; **Transparency rule** replaced with a new **Placement rule** and **CTA rule** locking `Register with the Resort` as the canonical button label. §21 canonical supporting-sentence-verbatim also updated to match the new copy. **Files touched:** `docs/listings/TW2111/MASTER.md` (§14a bullet + §21 rules + this row), `docs/listings/TW2111/WEBSITE.md` (pricing table + before-you-arrive mirror), `docs/brand/BRAND_GUIDELINES.md` (fee-transparency guardrail updated), `docs/brand/QA_CHECKLIST.md` (calculator-row check + Before-You-Arrive check updated), `config.js` (TW2111 `beforeYouArrive` fee bullet body + new `ctaLabel`/`ctaUrl`, comment on `communityRegistrationFee` documenting that it's now Before-You-Arrive-only, revert comment on `cleaningFee`), `app.js` (dropped registration variables + `registrationLineHtml` + total math from `renderPriceCalculator`; extended `renderStayLogisticsCard` for CTA button), `styles.css` (dropped `.price-line-registration` styles; added `.stay-logistics-cta` button styles), `listing-4.html` + `listing-5.html` + `sitemap.xml` (regenerated). **No MS811 changes.** **No OTA files touched.** **QA:** calculator DOM confirmed 4 rows only with Cleaning Fee = $250; `Estimated Total` recalculates without the registration fee (spot-check verified after the cleaning-fee revert); Before You Arrive card renders new copy + `Register with the Resort` button that opens tidewaterhoa.com in a new tab; forbidden-language grep clean; JS + HTML lint clean; MS811 property card + calculator untouched. | Content Sync Agent + Pricing/Logistics Cleanup |
| 2026-07-06 | **Phase 3 initiatives #5 + #6 — OTA title strings locked** | Owner-approved via AskQuestion 2026-07-06 evening. Final ship strings, paste-ready in the OTA host dashboards: **Airbnb**: `Twenty First · Gulf-Front 3BR` (29 / 50 chars). **VRBO**: `Twenty First · Gulf-Front 3BR · Sleeps 8 · Panama City Beach` (60 / 80 chars). Middot glyph is `·` (U+00B7), not a period. Both strings share the first 29 characters — deliberate brand-prefix identity so a cross-platform-shopping guest recognizes the listing as one property. Rationale for Airbnb: brand-first, Gulf-Front differentiator second, PCB dropped (Airbnb surfaces city as tile subtitle already). Rationale for VRBO: matches Airbnb prefix character-for-character, extends with `Sleeps 8` (VRBO's core audience filters on guest count first) + `Panama City Beach` (VRBO surfaces city less prominently on tiles than Airbnb). Original tracker candidate `Twenty First · PCB Gulf-Front 3BR` was actually 33 chars (over Airbnb's older 32-char cutoff and duplicated the tile subtitle) — rejected. Also verified via [Airbnb Resource Center](https://www.airbnb.com/resources/hosting-homes/a/guidelines-for-writing-your-listing-title-533) and [VRBO Help — About listing guidelines](https://help.vrbo.com/articles/What-are-the-listing-guidelines) that the July 2026 official limits are Airbnb 50 chars (mobile tile truncates at ~35) and VRBO 20-80 chars. Original tracker's `≤32` Airbnb limit was outdated. **Files touched:** [`AIRBNB.md`](AIRBNB.md) (Title section rewritten with locked string, ship rationale, alternates-on-file comparison table), [`VRBO.md`](VRBO.md) (Headline section same pattern), [`MASTER.md`](MASTER.md) §12 (new `OTA platform titles (locked)` subsection with the strings + design principle + middot convention rule, plus this changelog row), [`../../brand/BRAND_GUIDELINES.md`](../../brand/BRAND_GUIDELINES.md) (new `OTA platform titles` section under `Copy templates by surface` with 4 rules: brand-prefix identity, middot separator, platform limits + prime real estate, never-in-title forbidden list), [`../../phase-3/revenue-impact-tracker.md`](../../phase-3/revenue-impact-tracker.md) rows #5 + #6 updated with locked strings + status parenthetical + full ship rationale + tracker char-limit correction + changelog entry. **No `config.js`, `app.js`, `styles.css` changes** — OTA copy work has no direct-site code surface. **No property-content changes** on either TW2111 or MS811. **Owner action pending:** paste `Twenty First · Gulf-Front 3BR` into Airbnb host dashboard → Title field, and `Twenty First · Gulf-Front 3BR · Sleeps 8 · Panama City Beach` into VRBO host dashboard → Headline field. Expected 10–15 minutes per platform. Once pasted, flip tracker rows #5 + #6 from `📋 Planned (paste-ready)` to `🟡 In Progress (shipped, measuring)` with the ship date, and start the 60-day CTR measurement window. **Success Metrics:** Airbnb ≥+15% search-tile CTR, VRBO ≥+10% search-tile CTR — both measured vs. 30-day pre-publish baseline within 60 days of publish. **Booking.com (#11) + Houfy (#12) title locks pending** their rebrand-in-place passes (kept as retained-until-ship in MASTER §12). | Content Sync Agent + Phase 3 initiatives #5 + #6 lock |
| 2026-07-06 | **Phase 3 initiative #40 — Superhost trust chip on Website shipped** | Two verified OTA host badges surfaced on the property page: **Airbnb Superhost · 6+ years hosting** (verified 2026-07-06 via `docs/listings/TW2111/reviews/2026-07-06-airbnb.md` line 12 — Airbnb host card literally reads *"Superhost, 6 years hosting"*) and **VRBO Premier Host** (verified 2026-07-06 via `docs/listings/TW2111/reviews/2026-07-06-vrbo.md` line 195 — Simone's owner-response byline reads *"VrboOwner, Premier Host"*). Host-level badges apply to both TW2111 and MS811 property pages. **Placements: (1)** Property-page hero trust strip — the `airbnb-superhost` badge renders as a compact chip immediately after the aggregate-rating chip. Chip label attributes the platform explicitly (`Airbnb Superhost`) — never `Superhost` alone. Chip styling uses site-primary tint at low opacity to signal "verified premium host" without mimicking Airbnb's own Rausch-red pill (that would read as impersonation of the platform). **(2)** Property-page sidebar trust card — a `Verified host` block beneath the reply-time promise lists all active badges with their `secondary` line ("6+ years hosting") in muted text. **Two placements only** — Why Book Direct / Before You Arrive / FAQ / homepage hero deliberately do NOT re-surface Superhost claims. Original tracker note called out "hero + Before You Arrive card"; sidebar chosen over Before You Arrive because Before You Arrive is stay-logistics ("bring these things", "check in at 4pm"), not host-trust. **Code changes:** (1) `config.js` — new `SITE_CONTACT.hostTrustBadges` array with two entries (`airbnb-superhost` · `vrbo-premier-host`), each carrying `label`, `secondary`, `platform`, `verifiedOn`, `active`. Extensive comment block explains the audit-trail discipline (`active: false` on lapse, do NOT delete). (2) `app.js` — new `getActiveHostTrustBadges()` helper next to `getSiteContact()`; `renderListingHeroTrustStrip` extended to inject the Superhost chip after the rating chip; `renderListingTrustSidebar` extended with the `Verified host` list block. (3) `styles.css` — new `.hero-trust-chip--superhost` variant (site-primary tint at 14% opacity, primary-color mark + text, weight 600); new `.listing-host-trust` block with dashed top-border separator, uppercase `Verified host` label, and `.listing-host-trust-item` list items with the same ◆ mark used in the hero chip. **Documentation:** BRAND_GUIDELINES.md gains a new `Host trust badges` section under `Copy templates by surface` with four rules — **Publish only badges we can prove** (source path on file for every claim), **Attribution is mandatory** (`Airbnb Superhost`, never `Superhost` alone; no mimicking platform color palettes), **Re-verification cadence** (Airbnb quarterly, VRBO annual; flip `active: false`, never delete), **Placement rules** (hero + sidebar only; do not re-surface). QA_CHECKLIST.md §4 UX QA gains 4 new Critical/High checks (chip position, sidebar block, non-impersonation styling, source-on-file). TW2111 MASTER §11 Guest Trust Points gains a Superhost bullet with verification-source paths. MS811 MASTER §11 gains an identical bullet (host-level badge applies to both properties). Revenue-impact-tracker.md row #40 flipped 📋 Planned → 🟡 In Progress *(shipped, measuring)* with full ship notes; changelog entry appended. **QA:** `node --check app.js` clean; `node --check config.js` clean; no CSS lint errors on `styles.css`; new chip renders on both TW2111 and MS811 hero strips (verified by reading `renderListingHeroTrustStrip` code path — pulls from `getActiveHostTrustBadges()` which returns badges regardless of property); sidebar `Verified host` block renders when any badge is `active: true`; if all badges flipped to `active: false`, both placements collapse to zero-DOM (no orphan pill, no empty list heading). **Success Metric measurement:** compare property-page inquiry-form submit rate 30 days before ship vs. 30 days after ship; threshold ≥+8%; measure 2026-08-06. **Files touched:** `config.js`, `app.js`, `styles.css`, `docs/listings/TW2111/MASTER.md` (§11 + this row), `docs/listings/MS811/MASTER.md` (§11), `docs/brand/BRAND_GUIDELINES.md` (new `Host trust badges` section), `docs/brand/QA_CHECKLIST.md` (§4 UX QA checks), `docs/phase-3/revenue-impact-tracker.md` (#40 status + changelog). `listing-4.html` + `listing-5.html` + `sitemap.xml` regenerated to pick up the chip changes. **No property-content changes** on either TW2111 or MS811 beyond the trust chip addition. No OTA-derivative files touched. | Content Sync Agent + Phase 3 initiative #40 ship |
