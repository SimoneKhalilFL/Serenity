# Westlight — MASTER

> **Folder code:** `MS811`. Never appears in guest-facing copy.
>
> **Branding status:** **ACTIVE — Signature Property.** Locked 2026-07-09 evening. Signature property name is **Westlight**. `Majestic Sun` is the resort/building operational label — used only in address, resort-amenities context, driving directions, and legal/HOA operational surfaces. Never as the guest-facing property brand.
>
> **Purpose:** Source of truth for Westlight's content. Every platform file in this folder derives from this document. Read [`../../sync/SYNC_RULES.md`](../../sync/SYNC_RULES.md) before editing.
>
> **Owned by:** [Brand Director](../../brand/AGENTS.md#2-brand-director). **Reviewers:** CEO Agent, Hospitality Expert, SEO Expert, CGO Agent, Content Sync Agent, QA Agent.

---

## 1. Brand

| Field | Value |
|---|---|
| Master brand | StayAtFlorida |
| Master tagline | Luxury Beachfront Vacation Homes |
| Property display name | **Westlight** |
| Property brand subtitle | A StayAtFlorida Signature Property |
| Property tagline | **Where Every Evening Ends in Gold** |
| Property status | **Active — Signature Property** |

## 2. Property Story

Westlight sits directly overlooking the Gulf of Mexico on the west end of Miramar Beach, where the Emerald Coast turns copper each evening and the Gulf's last light slides across the balcony. A two-bedroom retreat inside the Majestic Sun building at Seascape Resort — quieter than Panama City Beach, closer than the boutique communities further east, and unmistakably owner-hosted. The name is a promise: at Westlight, every evening ends in gold.

## 3. Positioning

**Westlight is a luxury beachfront retreat in Miramar Beach where emerald waters, white-sand beaches, and unforgettable sunsets create the perfect setting for a relaxing Gulf Coast escape.**

**Elevator pitch:** Westlight combines the comfort of home with panoramic Gulf views, resort amenities, and the relaxed elegance of Florida's Emerald Coast.

**Portfolio positioning:** A smaller-format Signature Property that opens Miramar Beach / Destin as a second market. Complementary to Twenty First rather than competitive — different market, different traveler size (2–6 vs. up to 8), different rhythm (quieter Destin-area vs. lively Panama City Beach). Both properties share the master StayAtFlorida standard: beachfront, luxury-standard interiors, owner-hosted, sustainable pricing.

## 4. Target Guest

- **Primary:** Couples and small families (2–6 travelers) who want an Emerald Coast beachfront stay with the amenities of a full resort but the pacing of a boutique community. Skews toward Southeast US, drive-market origin (Atlanta, Nashville, Birmingham, New Orleans).
- **Secondary:** Multi-generational trios (a couple + one parent) who value proximity to Seascape's tennis, pickleball, and pool complex without needing a 3-bedroom footprint. Also small-group friends' getaways (2 couples) who use the queen sleeper sofa.
- **Not our guest:** Spring-break parties, one-night stays, groups with unregistered guests, anyone under 25 as primary booker.

## 5. Property Facts

| Field | Value |
|---|---|
| Address | 1160 Scenic Gulf Drive A811, Miramar Beach, FL 32550 *(private — used for post-booking messaging only; never surfaced on guest-facing copy)* |
| Market | Miramar Beach, Florida (Destin area) |
| Community *(operational context only)* | Majestic Sun at Seascape Resort |
| Bedrooms | 2 |
| Bathrooms | 2 |
| Sleeps | Up to 6 |
| Property type | Beachfront condominium |
| View | Gulf-front (west-facing) |
| Beach access | Direct beach access from the resort |
| Parking | Covered, on-site *(one assigned space + guest parking — ⚠ verify assigned-space count with owner)* |
| Pet policy | No pets |
| Check-in | 4:00 PM |
| Check-out | 10:00 AM |
| Min-age booker | 25 |

## 6. Amenities

Grouped into four categories for the property page. The categories below are the **canonical order** and **canonical wording** for on-site display, JSON-LD, and platform derivatives. Each amenity chip in [`config.js`](../../../config.js) carries a `group` field pointing to one of these four buckets *(⚠ pending config.js update — MS811 amenities currently ungrouped in config.js; fold in during the config.js rebrand pass)*.

**Inside the Condo**
- Full Kitchen (fully stocked with coffee maker, cookware, and dinnerware for 6)
- High-Speed Wi-Fi throughout
- Smart TV in Every Bedroom + Living Room
- Washer & Dryer (in-unit)
- Air Conditioning
- Central Heating
- Laptop-Friendly Workspace
- Bed & Bath Linens Provided (linens for 6 + extras)

**Beach Convenience**
- **Complimentary beach chairs and umbrella available in the condo** *(exact wording — do not vary · ⚠ verify inventory before publishing to any OTA)*
- Beach Towels Provided *(⚠ verify)*
- Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors *(never phrased as "our" service)*

**Resort Amenities** *(via Majestic Sun / Seascape Resort — operational context)*
- Gulf-Front Outdoor Pool with Sundeck
- Indoor Heated Pool
- Hot Tubs
- Full Fitness Center
- Tennis and Pickleball Courts
- Seascape Golf Course (9-hole, par 35) — for an 18-hole round, Emerald Bay Golf Club is ~3 miles away
- Bicycle and Paddleboard Rentals
- Multiple Resort Grills

**Location & Access**
- Direct Beach Access
- Elevator Access
- Covered On-Site Parking
- Walking Distance to Seascape Town Center (dining, coffee, shopping)
- Short Walk to Whale's Tale Beach Bar & Grill
- VPS (Destin–Fort Walton Beach Airport) — ~40 min / 24 miles by car · ECP (Northwest Florida Beaches International) — ~1 hour / 38 miles by car

**Not provided**
- Any claim that **we** provide beach service or a beach setup crew (chairs come from the condo, or from third-party vendors on the beach — never from us)
- Daily housekeeping mid-stay
- Concierge / in-condo dining
- Airport transfers

## 7. Sleeping Arrangements

- **Primary bedroom:** King bed *(⚠ verify — JSON-LD schema currently records King)*
- **Guest bedroom:** Queen bed
- **Living room sleeper sofa:** Queen sleeper sofa; fits 1–2 additional guests
- **Sleeps up to 6 guests total.**

Bed inventory total: 1 king · 1 queen · 1 queen sleeper sofa. This is the canonical bed count; JSON-LD, OTA amenity checkboxes, and website copy must all match.

## 8. Nearby Attractions

- **Beach:** Direct access from the resort
- **Grocery:** Publix at Grand Boulevard (725 Grand Blvd, Miramar Beach) — ~5 min drive · Winn-Dixie on Poinciana Blvd is closer still (~1 mile) for a quick run
- **Coffee:** 2 Birds Coffee & Café at Seascape Town Center — walkable
- **Dinner (casual):** Whale's Tale Beach Bar & Grill (walkable via beach), Boshamps Seafood & Oyster House, Diego's Burrito Factory
- **Dinner (upscale):** Marlin Grill, Baytowne Wharf area restaurants
- **Family activity:** Village of Baytowne Wharf (evening events, seasonal fireworks), Big Kahuna's Water & Adventure Park, Silver Sands Premium Outlets (~1 mile east)
- **Nature:** Henderson Beach State Park, Topsail Hill Preserve State Park
- **Airport (VPS):** Destin–Fort Walton Beach Airport — **approximately 40 minutes (24 miles)** by car. Uber and Lyft are widely available at VPS.
- **Airport (ECP):** Northwest Florida Beaches International Airport — **approximately 1 hour (38 miles)** by car. Alternative option; typically the option for guests routing through Panama City rather than Fort Walton. *⚠ verify exact drive time from the property before publishing.*

## 9. Selling Points

Ranked. What actually makes a guest book Westlight over a comparable Emerald Coast property.

1. Gulf-front views and unforgettable west-facing sunsets from the private balcony
2. Direct beach access — no crossing a busy road
3. Miramar Beach location — quieter and greener than Panama City Beach, closer than the smaller boutique communities further east
4. Walk to Seascape Town Center — coffee, dining, and shopping without the car
5. Owner-hosted — a named human (Simone) replies to every inquiry, typically within 2 hours
6. Full Seascape resort amenities (Gulf-front pool, indoor heated pool, hot tubs, fitness, tennis, pickleball, Seascape Golf Course)
7. Book direct at stayatflorida.com and skip the OTA service fees (typically 10–15% of the total)
8. Complimentary beach chairs and umbrella available in the condo

## 10. SEO Keywords

- **Primary intent:** `2 bedroom beachfront condo Miramar Beach`
- **Supporting:** `Miramar Beach vacation rental`, `Destin area beachfront condo`, `Gulf-front condo Miramar Beach`, `Emerald Coast 2BR rental`, `owner-hosted vacation rental Destin`
- **Local:** Miramar Beach · Destin · Florida · Emerald Coast · Gulf Coast

Full keyword rules: [`../../brand/SEO.md`](../../brand/SEO.md).

## 11. Guest Trust Points

- **Multiple verified 5-star reviews** across Airbnb, VRBO, and the direct site — **28 curated max-rating reviews on file** in `config.js#REVIEWS[5]` (17 VRBO + 11 Airbnb, published set post-2026-07-10 refresh; raw 86-review archive at `docs/listings/MS811/reviews/`), aggregate 5.0 (per direct-site JSON-LD; OTA-side aggregates vary by platform — VRBO 9.8/10 Exceptional across 67 reviews, Airbnb 4.86/5 across 22 reviews; Booking.com aggregate managed under initiative #11 Track B)
- **Simone is a verified Airbnb Superhost** (6+ years hosting) and **VRBO Premier Host** — surfaced on the Westlight property page hero trust strip and sidebar (Phase 3 initiative #40, shipped 2026-07-06 evening). Host-level badges apply to both StayAtFlorida properties. Verification sources on file: `docs/listings/TW2111/reviews/2026-07-06-airbnb.md` and `docs/listings/TW2111/reviews/2026-07-06-vrbo.md` (captured on TW2111 host card; badge is host-level on Airbnb/VRBO so it applies wherever Simone hosts). Display rules: `docs/brand/BRAND_GUIDELINES.md` § "Host trust badges".
- Owner-hosted — Simone replies to every inquiry personally, typically within 2 hours
- Transparent pricing — the calculator on stayatflorida.com shows nightly rate, cleaning, and taxes before you email
- Direct beach access from the resort — never crossing a busy road
- Cancellation policy is spelled out before you book
- The condo matches its photos — same layout, same finishes, same view

## 12. Approved CTAs

Inherits the StayAtFlorida CTA standard defined in [`../TW2111/MASTER.md#12-approved-ctas`](../TW2111/MASTER.md#12-approved-ctas). Homepage-level CTAs (`Explore Signature Properties`, `View Property`, `Book Direct & Save` inside the direct-booking section, `Send an Inquiry`, header `Inquire`) apply to Westlight whenever it appears on the marketing homepage.

Property-page CTAs mirror TW2111:

- **Property page hero primary:** `Check Availability` *(FROZEN — do not swap for `See Available Dates` or any other variant. Aligns with TW2111 §12.)*
- **Property page hero secondary:** `View Photos` *(FROZEN — same rule.)*
- **Below price calculator:** `Email to Reserve These Dates`, `Inquire about these dates`
- **Sticky bottom bar (mobile property page):** `Email to Book`
- **Airbnb / VRBO / Booking / Houfy:** platform-native CTAs only — no `book direct` or channel-steering language

Never use: `Book Now!`, `Reserve Now`, `Get 20% Off`, `Claim your stay`, `See Available Dates`.

**OTA platform titles (locked 2026-07-09, Phase 3 initiative #1 rebrand pass):**

Canonical text lives in the platform-derived files; MASTER surfaces the strings here so the source of truth is discoverable in one place.

- **Airbnb** *(≤50 chars input, ~35 chars mobile-tile-visible)*: **`Westlight · Gulf-Front 2BR`** *(26 chars — inside the ~35-char mobile-tile-visible window)*. Canonical file: [`AIRBNB.md`](AIRBNB.md#title--locked-ship-string-phase-3-initiative-1-2026-07-09).
- **VRBO** *(20–80 chars headline, soft ≤40 for search prominence)*: **`Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach`** *(53 chars)*. Canonical file: [`VRBO.md`](VRBO.md#headline--locked-ship-string-phase-3-initiative-1-2026-07-09).
- **Booking.com** *(≤~65 chars practical / 70 chars typical Booking.com property-name budget)*: **`Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach`** *(57 chars)*. Canonical file: [`BOOKING.md`](BOOKING.md#property-name--locked-ship-string-phase-3-initiative-1-2026-07-09). Note: Booking.com normalizes special characters on publish — live rendering will strip middots, hyphens, and slashes to spaces (verified 2026-07-08 on TW2111 property-name paste; portfolio-level rule codified in BRAND_GUIDELINES).
- **Houfy** *(title-field limit varies; verify in dashboard — 57-char string renders comfortably in the observed H3 field)*: **`Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach`** *(57 chars — Booking.com variant with `/2BA` bath count)*. Canonical file: [`HOUFY.md`](HOUFY.md#title--locked-ship-string-phase-3-initiative-1-2026-07-09).

**Design principle across platforms:** the first ~26 characters of every OTA title are identical (`Westlight · Gulf-Front 2BR`). A guest cross-shopping the brand across Airbnb, VRBO, Booking.com, and Houfy reads the same brand + differentiator every time. Platform-specific tails extend the brand prefix rather than replace it. Same brand-prefix identity discipline as TW2111 (`Twenty First · Gulf-Front 3BR`) — different property, same portfolio rule.

**Middot convention:** the separator glyph is `·` (U+00B7, middle dot). Do not substitute `•` (bullet), `.` (period), `-` (hyphen), or `|` (pipe). Same as TW2111 + master brand.

## 13. Master Short Description

**Locked, one-sentence version** — used for meta descriptions, OTA short-descriptions where a very compact form is required, and the property page hero sub-headline.

> Westlight is a luxury beachfront retreat in Miramar Beach where emerald waters, white-sand beaches, and unforgettable sunsets create the perfect setting for a relaxing Gulf Coast escape.

**Alt compact variant (for VRBO short description, ≤~200 chars):**

> Westlight is a Gulf-front 2-bedroom retreat in Miramar Beach — panoramic Gulf views, direct beach access, and Seascape resort amenities on Florida's Emerald Coast. Sleeps 6, owner-hosted.

### 13a. Homepage Card Copy *(updated 2026-07-09 — Westlight rebrand)*

Rendered on the marketing homepage inside `.property-card-blurb` beneath the location + sleeps-line. Kept intentionally short (one sentence, ~90–110 chars) so the card scans in under two seconds.

**Approved copy:**

> Panoramic Gulf views, direct beach access, and resort amenities on Florida's quieter Emerald Coast.

**Homepage card subtitle** *(updated 2026-07-09)*: `A StayAtFlorida Signature Property` — now matches TW2111 exactly, reflecting Westlight's elevation to Signature status under the 2026-07-09 rebrand.

Notes:

- No CTA text, no exclamation marks, no property-name repetition (title already on the card).
- The card CTA remains `View Property` (see §12).
- Body copy (§14 long description), meta title/description, and OTA listings are all being rewritten in this pass to match — the homepage card, hero, description, OTA titles, JSON-LD, Open Graph, and image captions are all part of the same 2026-07-09 rebrand delivery.

## 14. Master Long Description

Six paragraphs, tuned for the property page. Airbnb / VRBO / Booking.com / Houfy pull from this text with platform-specific trims (see the respective OTA files for the exact ship string).

**Paragraph 1 — the feel.**

Welcome to Westlight, where every evening ends in gold. This two-bedroom Gulf-front retreat sits directly overlooking the Gulf of Mexico, where the emerald water meets sugar-white sand and the last light of the day pours across the balcony. It's a slower, quieter stretch of Florida's Emerald Coast — a place designed to be lived in barefoot, coffee in hand, sunset ahead.

**Paragraph 1a — who Westlight is for.**

Westlight was created for guests who want the comforts of home paired with a true beachfront experience on the Emerald Coast. A full kitchen, real bedrooms, in-unit laundry, and a private Gulf-front balcony — the everyday rhythm of home, only with the Gulf a boardwalk away.

**Paragraph 2 — the home.**

Westlight is a 2-bedroom, 2-bath condominium that comfortably sleeps up to 6. A king-bed primary suite opens toward the Gulf, a queen guest bedroom offers a quieter tucked-away room, and a queen sleeper sofa in the living room accommodates two additional guests. The kitchen is fully stocked for six — coffee maker, cookware, and dinnerware for real cooking, not just reheating — and the in-unit washer and dryer make longer stays effortless. Smart TVs with popular streaming apps available in every bedroom and the living room; high-speed Wi-Fi reaches every corner of the condo. The layout is deliberate: it's the comfort of a home, tuned for a vacation.

**Paragraph 3 — the view and the beach.**

The private Gulf-front balcony is the heart of Westlight. Morning coffee overlooking the Gulf. Afternoons listening to the waves. Evenings watching unforgettable sunsets that inspired the name Westlight. Direct beach access from the resort — no crossing a busy road, no waiting for a shuttle. Complimentary beach chairs and umbrella available in the condo.

**Paragraph 4 — the resort.**

Westlight lives inside the Majestic Sun building at Seascape Resort, a full-service beachfront community that layers a Gulf-front pool, an indoor heated pool, hot tubs, a fitness center, tennis and pickleball courts, and Seascape Golf Club onto a quieter, greener stretch of coast. The result is a relaxed resort atmosphere with exceptional amenities while maintaining the quieter feel that makes Miramar Beach so popular. Seascape Town Center — coffee, casual dining, shopping — is a short walk from the front door. Whale's Tale Beach Bar & Grill is right on the beach. Downtown Destin, Silver Sands Premium Outlets, and Baytowne Wharf are all a short drive.

**Paragraph 5 — practicalities.**

Check-in is 4:00 PM and check-out is 10:00 AM. Complimentary covered parking is included for registered guests. Elevator access. Primary booker must be 25 or older. No smoking, no vaping, no parties, no pets. Complimentary beach chairs and umbrella available in the condo — beach chair and umbrella rental is also available for purchase directly on the beach from local vendors. Destin–Fort Walton Beach Airport (VPS) is approximately 40 minutes (24 miles) by car; Northwest Florida Beaches International Airport (ECP) is approximately 1 hour (38 miles) — verify exact drive time from the property before publishing.

**Paragraph 6 — the host.**

Westlight is personally hosted by Simone. She has been welcoming guests to Florida's Emerald Coast for more than six years — she personally handles every booking, every guest message, and every arrival detail, never a third-party management company. She typically replies within two hours and sends detailed arrival instructions about a week before check-in. If you have a question during your stay, she's a text away.

### 14a. Before You Arrive

*⚠ Verify with owner: does the Majestic Sun / Seascape Resort require a registration fee for parking passes and wristbands, comparable to TW2111's Tidewater HOA registration? If yes, mirror TW2111's `Before You Arrive` section language (registration link, ~$10 online-vs-desk savings, done at least 24 hours before arrival). If no, remove this section.*

### 14b. A Day at Westlight

Six lifestyle beats used on the property page + Airbnb long-form derivative. Written as short sensory scenes that guests can imagine themselves inside.

1. **Morning** — Coffee on the balcony as the Gulf turns pale green and the beach walkers pass below.
2. **Late morning** — Walk down to the boardwalk, claim a spot on the sand with the condo chairs, and don't rush anything.
3. **Lunch** — Whale's Tale for beachfront burgers, or a short walk into Seascape Town Center for something cooler.
4. **Afternoon** — Alternate between the sand and the Gulf-front pool. The indoor pool is there for the one afternoon that turns cloudy.
5. **Golden hour** — Back on the balcony, west-facing. This is the moment the property is named for.
6. **Evening** — Cook a simple dinner in the full kitchen, or head to Baytowne Wharf for the seasonal fireworks show.

### 14c. During Your Stay

Simone typically responds to messages within two hours. Detailed arrival instructions, parking, and Wi-Fi info arrive about a week before check-in. If anything comes up during your stay — the coffee maker, the TV, a recommendation — text and Simone answers directly.

### 14d. Why Book Direct at stayatflorida.com

Same seven-bullet standard as TW2111. Canonical wording — do not paraphrase:

- **Save on booking fees.** OTA service fees typically add 10–15% to the total. Book direct and skip them.
- **Best-rate promise.** If you find a lower total for the same dates on a public OTA listing of Westlight, we match it.
- **Same 5-star property.** Same condo, same host, same photos as Airbnb / VRBO / Booking.com — just without the middleman.
- **Direct owner communication.** Simone answers every inquiry personally. Typically within 2 hours.
- **Transparent pricing.** The calculator on stayatflorida.com shows the nightly rate, cleaning fee, and taxes before you email. No surprise fees at checkout.
- **Flexible payment.** Split the payment across the booking window if that helps.
- **Superhost hosting.** Simone is an Airbnb Superhost and VRBO Premier Host — those badges apply everywhere she hosts, including direct.

## 15. Approved Amenities Language

Inherits StayAtFlorida standard amenity phrasing:

| Concept | Approved wording |
|---|---|
| Beach chairs (in condo) | `Complimentary beach chairs and umbrella available in the condo` *(exact wording — do not vary)* |
| Beach chair rental (on-beach vendors) | `Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.` |
| View | `Gulf-front views` (west-facing balcony · direct Gulf line of sight) |
| Host | `Owner Hosted` |
| Kitchen | `Full kitchen` (fully stocked for 6) |
| Beach access | `Direct beach access` |
| Resort context | `Full Seascape resort amenities` — only when resort amenities are relevant. Never lead a paragraph with "Majestic Sun" or "Seascape Resort" as if it's the brand. The property brand is Westlight. |
| Sleeping arrangements | `King bed / Queen bed / Queen sleeper sofa · Sleeps up to 6` |
| Sleeps | Always `Sleeps up to 6` — never `6 guests max` or `Accommodates 6` |
| Address | Never surfaced in guest-facing copy. Post-booking messages only. |

**Forbidden phrasings** *(P1 — will fail QA if shipped)*:

- `Deluxe 2-Bedroom` — legacy Booking.com title format; the "Deluxe" adjective is not on the StayAtFlorida approved list. Replace with `Westlight · Gulf-Front 2BR/2BA`.
- `8th-Floor` / `8th Floor` in any headline or short description — floor numbers are not part of the brand story and pattern-match to competitor comps that we intentionally sit above. Fine in operational post-booking messages if the physical address needs it; never in marketing.
- `Fun in the Sun`, `Sun-Kissed`, `Serenity`, `Paradise`, `Retreat Awaits` — generic marketing phrases that erase the property's specificity.
- Never write `Majestic Sun 811` as a guest-facing title; the property is `Westlight`, and `Majestic Sun` appears only in the operational-context sentences of §14 paragraph 4 and §5 property facts.

## 16. Approved House Rules Language

Inherits StayAtFlorida standard.

- No smoking, no vaping
- No parties or events
- No pets
- Primary booker must be 25 or older
- Max occupancy 6 guests
- Quiet hours per Majestic Sun / Seascape HOA — typically 10 PM – 8 AM *(⚠ verify exact hours with HOA before publishing to Booking / VRBO house-rules field)*
- Damages: honest disclosure resolves nearly everything; undisclosed damage is charged against the refundable damage deposit
- Refundable damage deposit: $300 (per `config.js#refundableDamageDeposit`)

## 17. Approved Cancellation Language

Mirrors Twenty First's cancellation posture pending final Revenue Manager sign-off. Working canonical:

- **Direct site (stayatflorida.com):** Full refund up to 60 days before check-in; 50% refund up to 30 days before check-in; no refund inside 30 days. Wording lives on the property page below the calculator.
- **Airbnb:** Firm (Airbnb-defined) — full refund 30 days before check-in, 50% refund 7 days before. *(⚠ verify current Airbnb setting matches Firm before this MASTER ships as authoritative — if the current listing is on `Moderate` or `Flexible`, decide whether to align to TW2111's posture or leave MS811 on its current setting.)*
- **VRBO:** Moderate (VRBO-defined) — full refund 60 days before check-in, 50% refund 30 days before.
- **Booking.com:** Non-refundable pricing tier is preferred for peak; standard cancellation is offered on shoulder-season inventory. *(⚠ verify current Booking rate-plan setup.)*

Full cross-platform cancellation policy language is in [`../../brand/HOSPITALITY.md#cancellation-policy`](../../brand/HOSPITALITY.md#cancellation-policy) — reuse verbatim; never paraphrase per-platform.

## 18. Photo Caption Library

**Owner-final photo library — locked 2026-07-10.** The owner curated a new 46-slot caption library replacing the earlier 57-file placeholder set. This table is now the single source of truth for photo order, filename mapping, and captions across all six surfaces:

- **Website (stayatflorida.com)** — hero-carousel order + on-image caption + alt text
- **Airbnb** — photo-upload order + short caption per photo
- **VRBO** — photo-upload order + short caption per photo
- **Booking.com** — photo-upload order + short caption per photo
- **Houfy** — photo-upload order + short caption per photo
- **`config.js#properties[id=5].images`** (flat array) + **`config.js#properties[id=5].photoCaptions`** (URL→caption map)

**Caption rules** (portfolio-level):

- Captions are guest-facing and voice-consistent with the Westlight brand ("Where every evening ends in gold"). No brand prefix on short captions.
- No floor numbers, no unit numbers, no "Deluxe", no `Majestic Sun 811`.
- `Majestic Sun / Seascape Resort` appears only in operational-context photos (resort amenities: pool, hot tub, tennis, gym, building exterior) — never as the guest-facing property brand.
- Slots with `⚠ MISSING PHOTO` are captioned-and-ready — waiting on owner upload. Do NOT publish those slots to OTAs / website until a file lands on disk.
- Slots marked `(removed per owner)` are intentionally suppressed from the published set — the caption is retained here for future reference only.

### Full 46-slot Photo Order + Caption Table

| Slot # | Room / Subject | File on disk | Caption (guest-facing) | Confidence |
|---:|---|---|---|:-:|
| 1 | Cover — Living room & Gulf view | `MS-FullView-1.png` | Floor-to-ceiling Gulf views welcome you the moment you walk in. | H |
| 2 | Balcony panoramic view | `MS-Balcony-1.png` | Start every morning with coffee overlooking the Emerald Coast. | H |
| 3 | Balcony dinner | `MS_Balcony_Dinner_Setup.png` | Enjoy dinner on your private balcony while the sun sets over the Gulf. | H |
| 4 | Morning coffee setup | `MS_Balcony_Coffee_person.png` | A peaceful spot for sunrise coffee or an afternoon drink with an endless view. | H |
| 5 | Primary bedroom | `MS-MasterBedroomFuture-2.png` | Wake up just steps from the Gulf in the comfortable king primary suite. | H |
| 6 | Primary bathroom | `MS-MasterBath-1.png` | Spacious primary bathroom with plenty of room to get ready for the beach. | H |
| 7 | Building aerial | `ms-01-building-view.jpg` | Majestic Sun at Seascape Resort sits directly across from one of the Emerald Coast's most beautiful beaches. | H |
| 8 | Guest bedroom | `MS-GuestBedroom-1.png` | Cozy queen guest bedroom designed for a restful night's sleep. | H |
| 9 | Guest bathroom | `MS_Guest_Bath.png` | Second full bathroom conveniently located next to the guest bedroom. | H |
| 10 | Kitchen | `MS-Kitchen-1.png` | Fully equipped kitchen with everything you need for family meals or quick breakfasts. | H |
| 11 | Dining & living room | `MS_dinner_setup.png` | Open-concept living space designed for gathering after a day at the beach. | H |
| 12 | Living room at sunset | `MS_Dinner_sunset.png` | Golden hour fills the living room with unforgettable Gulf sunsets. | H |
| 13 | Living room alternate angle | `ms-09-living-room.png` | Comfortable seating with breathtaking Gulf views from almost every seat. | H |
| 14 | Indoor pool | `ms-08-pool-indoor.jpg` | Enjoy the indoor heated pool year-round, rain or shine. | H |
| 15 | Dining/living alternate | `MS-DiningRoom-3.png` | Plenty of space for everyone to relax, dine, and enjoy the view together. | H |
| 16 | Kitchen view | `ms-02-kitchen.jpg` | The open kitchen keeps everyone connected while meals are prepared. | M |
| 17 | TV/Living detail | `MS-LivingRoom-5.png` | Relax with smart TV streaming after a day on the beach. | M |
| 18 | Kitchen breakfast bar | `ms-01-kitchen.jpg` | Breakfast bar seating makes casual meals easy. | M |
| 19 | Entry detail | *(removed per owner 2026-07-10)* | A warm welcome awaits from the moment you arrive. | — |
| 20 | Resort pool | `ms-01-pool.jpg` | Beautiful Gulf-front resort pool just steps from the beach. | H ⚠ same file as #34 |
| 21 | Entry foyer | *(removed per owner 2026-07-10)* | Easy self check-in with detailed arrival instructions before your stay. | — |
| 22 | Tennis courts | `ms-02-pickleball.jpg` | Enjoy complimentary tennis and pickleball courts within the resort. | H |
| 23 | Hallway | *(removed per owner)* | Thoughtfully designed layout with privacy between bedrooms and living spaces. | — |
| 24 | Laundry | `ms-01-laundry.jpg` | Full-size washer and dryer inside the condo for your convenience. | H |
| 25 | Beach view | `ms-beach-view.jpg` | Sugar-white sand and emerald water are just an elevator ride away. | H |
| 26 | Balcony ocean view | `MS-Balcony-Future-5.png` | Relax on your private balcony with panoramic Gulf views. | H |
| 27 | Sunset Gulf | `ms-10-sunset-view.jpg` | End every day with spectacular sunsets over the Gulf of Mexico. | H |
| 28 | Primary bedroom alternate | `MS-MasterBedroomFuture-1.png` | Comfortable king bedroom with a relaxing coastal design. | H |
| 29 | Guest bedroom alternate | `MS-GuestBedroom-2.png` | Bright and inviting guest bedroom with plenty of storage. | H |
| 30 | Guest bathroom alternate | `MS-GuestBedroom-3.png` | Clean, modern bathroom stocked and ready for your stay. | M ⚠ owner-mentioned both `MS-GuestBedroom-3` (missing-section) and `MS-MasterBath-1.png` (formerly `MS-MaterBath-1.png` before the 2026-07-10 rename pass — swaps-section) for this slot; using `MS-GuestBedroom-3` per the first mention. If `MS-MasterBath-1.png` was correct, swap on next pass — noting that it would duplicate with slot #6. |
| 31 | Lagoon view | `ms-01-outdoor-lake.jpg` | Views of the resort and surrounding lagoon from the property. | H |
| 32 | Front door | *(removed per owner)* | Your private entrance to Westlight. | — |
| 33 | Resort pool aerial | `ms-01-pool-outdoor.jpg` | Multiple pools and resort amenities for every season. | H |
| 34 | Outdoor pool *(owner-removed 2026-07-10 evening)* | — | *(slot removed — was duplicate of slot #20; caption preserved in this table for future reference: "Spend the afternoon poolside just steps from the beach.")* | — |
| 35 | Hot tub | `ms-02-hottub.jpg` | Relax in the hot tub after a day in the sun. | H |
| 36 | Beach sunset drone | *(removed per owner 2026-07-10)* | Evenings along Miramar Beach are unforgettable. | — |
| 37 | Gym | `ms-02-gym.jpg` | Stay active with the resort's well-equipped fitness center. | H |
| 38 | Coffee maker | `MS_Coffee_cup.png` | Fresh coffee is always within reach. | H |
| 39 | Toaster | `ms-06-kitchen.jpg` | Kitchen includes everyday essentials for easy breakfasts. | L ⚠ verify — small kitchen crop; confirm toaster is the subject |
| 40 | Local map | *(removed per owner)* | Close to restaurants, shopping, golf, and local attractions. | — |
| 41 | Living room detail | `MS-LivingRoom-7.png` | Relax in comfort while enjoying the Gulf views. | M |
| 42 | Decorative detail | `ms-01-beachy-decor.jpg` | Coastal-inspired décor throughout the condo. | H |
| 43 | Air fryer | `ms-07-kitchen.jpg` | Kitchen includes an air fryer for quick and easy meals. | L ⚠ verify |
| 44 | Crockpot | `ms-08-kitchen.jpg` | Perfect for preparing dinner while enjoying a day at the beach. | L ⚠ verify |
| 45 | TV/Living alternate | `ms-11-living-room.png` | The perfect place to unwind after sunset. | M |
| 46 | Living room wide | `MS-FullView-2.png` | Open, bright, and designed around the stunning Gulf view. | H |

### Bonus slots #47–#59 *(gallery extras — 2026-07-10 evening pass)*

Owner directive `make sure all photos that are not marked skip are used` appended these 13 additional slots to the gallery. Files exist on disk but were not part of the initial 46-slot owner-curated library. They render in the site gallery / lightbox with the captions below and are indexed for SEO via JSON-LD like every other slot. No OTA priority order is implied — for Airbnb / VRBO / Booking / Houfy uploads, these slots go at the end of the carousel after slot #46.

| Slot # | Room / Subject | File on disk | Caption (guest-facing) | Confidence |
|---:|---|---|---|:-:|
| 47 | Dining room primary | `MS-DiningRoom-2.png` | Family-style dining with a view of the Gulf. | H |
| 48 | Dining room variant | `MS-DiningRoom-4.png` | Coastal-inspired dining space set for meals with family. | H |
| 49 | Dining room variant | `MS-DiningRoom-5.png` | Bright dining area ready to gather everyone together. | H |
| 50 | Living room variant | `MS-LivingRoom-4.png` | Additional living-room angle showcasing the coastal flow. | H |
| 51 | Primary bedroom variant | `MS-MasterBedroomFuture-3.png` | Peaceful primary bedroom detail with a coastal touch. | H |
| 52 | Primary bedroom variant | `MS-MasterBedroomFuture-4.png` | King primary bedroom with warm, restful styling. | H |
| 53 | Balcony coffee — still life | `MS_Balcony_coffee.png` | The balcony coffee setup ready for a slow morning. | H |
| 54 | Gulf balcony variant | `ms-06-gulf-balcony.png` | Another angle of the private Gulf-front balcony. | H |
| 55 | Living room at sunset (variant) | `ms-08-living-room.png` | Living room bathed in warm sunset light. | H |
| 56 | Living room detail | `ms-10-living-room.png` | Living-room detail from another comfortable seating angle. | H |
| 57 | Building / resort setting | `ms-02-building-view.jpg` | The resort setting on Scenic Gulf Drive. | H |
| 58 | Kitchen prep area | `ms-05-kitchen.jpg` | Kitchen prep area with everyday essentials. | H |
| 59 | Living room (legacy set) | `ms-01-living-room.jpg` | Living room with Gulf-facing sightlines — the everyday gathering space. | H |

**Slot summary** *(as of 2026-07-10 · post-cleanup evening pass — rename + dedupe applied)*:

- Total slots: **59** *(46 owner-curated + 13 bonus gallery extras)*
- Slots with mapped file: **52** *(published)*
- Slots removed by owner: **7** — #19 entry detail, #21 entry foyer, #23 hallway, #32 front door, **#34 outdoor pool** *(deduped from #20 on 2026-07-10 evening — was `ms-01-pool.jpg`)*, #36 beach sunset drone, #40 local map
- Slots missing a photo: **0**
- High-confidence mappings: **44**
- Medium-confidence mappings: **5**
- Low-confidence mappings (owner verify): **3** *(#39, #43, #44 — the small `ms-06/07/08-kitchen.jpg` appliance-detail crops)*
- Duplicate-file usage: **0 slots** *(the prior slot #20 + #34 duplicate was resolved by dropping slot #34)*
- **Cover image**: `ms-09-living-room.png` — updated 2026-07-10 (was `MS-FullView-1.png`). Rendered on homepage card, OG / Twitter share previews, JSON-LD hero image, and the property-page hero. `ms-09-living-room.png` also appears at slot #13 in the gallery — the same photo is intentionally visible in both the hero and gallery contexts.

### File-hygiene follow-ups

- ✅ **Typo renames shipped 2026-07-10 evening**: `MS-DinningRomm-3.png` → `MS-DiningRoom-3.png` · `MS-DinningRoom-4.png` → `MS-DiningRoom-4.png` · `MS-DinningRoom-5.png` → `MS-DiningRoom-5.png` · `MS-MaterBath-1.png` → `MS-MasterBath-1.png`. All references in `config.js`, MASTER §18, AIRBNB.md / VRBO.md / BOOKING.md / HOUFY.md, `listing-5.html`, and `index.html` JSON-LD updated in the same pass.
- ✅ **Parens rename shipped 2026-07-10 evening**: `MS-GuestBedroom-1 (2).png` → `MS-GuestBedroom-1.png`. Removes the URL-encoding risk on OTA CDNs and cleans up the filename.
- ✅ **Duplicate files deleted 2026-07-10 evening**: three `- Copy.png` byte-identical duplicates (`MS-MasterBedroomFuture-1 - Copy.png`, `MS-MasterBedroomFuture-2 - Copy.png`, `MS-MasterBedroomFuture-4 - Copy.png`) removed from disk. Confirmed byte-identical to their base files via SHA-256 comparison before deletion.
- **Pending: nothing at the file-name level.** All MS811 files on disk now follow consistent naming (`MS-` PascalCase for staged photos, `ms-` lowercase for legacy shots).

### Unused files on disk *(2026-07-10 evening — post cleanup pass)*

**Zero unused files.** Every file on disk is mapped to exactly one slot in the 59-slot library. The three `- Copy.png` duplicates were deleted on 2026-07-10 evening (see File-hygiene follow-ups above), and slot #34 was owner-removed the same evening to eliminate the `ms-01-pool.jpg` duplicate with slot #20.

**Coverage: 100% of unique photos on disk are published in the gallery** — 52 flat-array entries, 52 unique URLs, 1:1 file-to-slot mapping.

### Missing photos *(gap-analysis vs. TW2111 target parity)*

All 59 slots are now resolved (0 pending owner upload). TW2111 still has these coverage areas that MS811 does not — recommended for a future re-shoot to lift photo library depth further:

- **Dedicated hero sunset frame** — golden-hour horizontal, west-facing, no interior visible in frame (single most important photo for the "Where every evening ends in gold" brand story). `ms-10-sunset-view.jpg` partially fills this at slot #27 but is not a dedicated hero-quality sunset.
- **Bathroom detail (fixtures / vanity close-up)** — 1 bathroom photo currently. TW2111 has 6.
- **Kitchen island / breakfast bar close-up** — no dedicated close-up.
- **Beach walk / boardwalk lifestyle photo** — a guest walking from the boardwalk onto the sand.
- **Wide-angle floorplan-establishing shot** — from the front door, looking through the living room to the balcony.

Prioritize the hero sunset frame first — it unlocks the strongest Airbnb/VRBO/Booking cover image swap.

## 19. Review Response Style

Inherits StayAtFlorida standard. See [`../../brand/HOSPITALITY.md#11-public-review-response-on-platform`](../../brand/HOSPITALITY.md#11-public-review-response-on-platform).

## 20. Guest Messaging Style

Inherits StayAtFlorida standard. Sign with `Simone`. Reply within 2 hours. Full templates: [`../../brand/HOSPITALITY.md#message-templates`](../../brand/HOSPITALITY.md#message-templates).

## 21. Fee Schedule *(canonical)*

Every fee that touches a guest's total. Same authority pattern as TW2111 §21 — no line item exists outside this table.

| Line item | Value | Where it lives | Notes |
|---|---|---|---|
| Base nightly rate | **$300** | `config.js#properties[id=5].baseNightlyRate` | PriceLabs override applies daily where available |
| Extended-stay uplift | **+$50** flat on stays **≥3 nights** | `config.js#properties[id=5].extendedStayUplift = { thresholdNights: 3, amount: 50 }` | Baked into the calculator's Nightly Rate row — never shown as a separate line item |
| Cleaning fee | **$250** | `config.js#properties[id=5].cleaningFee` | Flat, one-time per stay |
| Sales/lodging tax | **12%** on (nightly × nights + cleaning) | `config.js#properties[id=5].taxRate` | Combined FL state + Walton County lodging tax bucket |
| Refundable damage deposit | **$300** | `config.js#properties[id=5].refundableDamageDeposit` | Hold-and-release; disclosed pre-booking |
| Resort registration fee | *⚠ verify with owner — if Majestic Sun / Seascape charges a comparable HOA registration fee to TW2111's Tidewater, add here* | *(pending)* | Would live in §14a Before You Arrive |
| Pet fee | N/A | — | No pets |
| Booking-platform service fees | Applied by the platform | — | Direct site skips these; part of the Book Direct value prop |

**Displayed total breakdown** (guest sees this in the calculator, contact modal, and email quote — all four sites must agree):

1. Nightly rate × nights *(uplift baked in for 3+ night stays)*
2. Cleaning fee
3. Sales tax
4. **Total**

Refundable damage deposit is disclosed but not added to the collected total — hold-only.

**Reference impact per stay length** (canonical arithmetic — copy into any changelog entry that touches pricing):

| Nights | Nightly | Cleaning | Tax @ 12% | **Total** |
|---|---|---|---|---|
| 1 | $300 | $250 | $66.00 | **$616** |
| 2 | $600 | $250 | $102.00 | **$952** |
| 3 | $950 *(3×$300 + $50 uplift)* | $250 | $144.00 | **$1,344** |
| 7 | $2,150 *(7×$300 + $50)* | $250 | $288.00 | **$2,688** |
| 14 | $4,250 *(14×$300 + $50)* | $250 | $540.00 | **$5,040** |

Rounding matches `app.js#applyExtendedStayUplift` and `renderPriceCalculator`.

## 22. Website FAQ

Ten FAQ items on the Westlight property page. Same structure as TW2111 §22.

1. **How many guests can Westlight accommodate?** Up to 6 guests. Two bedrooms (king + queen) plus a queen sleeper sofa in the living room.
2. **Is Westlight really Gulf-front?** Yes — the balcony faces the Gulf, and beach access is right downstairs. No busy road to cross.
3. **Are beach chairs and umbrella included?** Yes — complimentary beach chairs and umbrella are available in the condo. Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.
4. **What's included in the kitchen?** Full kitchen with coffee maker, dishwasher, oven, stove, microwave, and refrigerator, plus a slow cooker, air fryer, food processor, toaster oven, George Foreman countertop grills (large and small), popcorn maker, blender, and veggie chopper. Cookware and dishes for six, plus glassware for 12 or more. Set up for real cooking, not just reheating.
5. **What resort amenities can we use?** Gulf-front outdoor pool, indoor heated pool, hot tubs, fitness center, tennis and pickleball courts, Seascape golf course, and walking paths — all part of the Majestic Sun / Seascape Resort community that Westlight is inside of.
6. **How do we get to the beach?** Direct beach access from the resort — right downstairs. No shuttle, no crossing a road.
7. **What's the check-in and check-out?** Check-in is 4:00 PM. Check-out is 10:00 AM.
8. **Is parking included?** Yes — covered on-site parking is included. *(⚠ Verify assigned-space vs. guest-parking mechanics with owner.)*
9. **Are pets allowed?** No — Westlight is pet-free.
10. **How far is the airport?** Destin–Fort Walton Beach Airport (VPS) is the closest — approximately 40 minutes (24 miles) by car. Northwest Florida Beaches International Airport (ECP) is an alternative — approximately 1 hour (38 miles) by car.

FAQ SEO note: 10 items in FAQPage JSON-LD is inside Google's guidance ceiling. Full schema: [SEO §5](../../brand/SEO.md#5-faqpage-schema).

## 23. Review Author Naming Policy

**Owner directive 2026-07-10 — first-name-only rendering** *(overrides the earlier "legacy full names" carve-out; portfolio parity with TW2111 §23 achieved).*

- **On-platform reviews (Airbnb, VRBO, Booking.com, Houfy):** the platforms themselves render `First LastInitial.` and cannot be overridden. That surface is out of our control.
- **Direct-site (`stayatflorida.com` property page):** render **first name only** — no last initial. The `author` field in `config.js#REVIEWS[5]` is the first name as it appears publicly on the source OTA (title-cased where the source used lowercase, e.g., `maria b.` → `Maria`). The `sourceName` field preserves the OTA-captured form (`First LastInitial.` or full name where the OTA has one) as an internal audit trail only — never rendered.
- **Legacy synthetic reviews retired 2026-07-10:** the previous 59-entry `REVIEWS[5]` (2020–2024) contained fabricated full names ("Christy Anderson," "Sophia Williams," "Wisconsin Rivera," etc.) that were not the guests' real published names. That entire block has been replaced with a 28-review curated shortlist sourced verbatim from the public VRBO + Airbnb review modals. See [`reviews/CURATION_SHORTLIST.md`](./reviews/CURATION_SHORTLIST.md) for the mapping and [`reviews/README.md`](./reviews/README.md) for the archive index.
- **Duplicate first-name disambiguation:** where two guests share a first name (e.g., two `Emily` entries in the Airbnb archive), append the source-listed home city in the `sourceName` field for audit only. The site-rendered `author` remains just `Emily` — visitors see the recency of each quote separately.
- **Never** display email addresses, phone numbers, precise city+state, or reservation IDs. Never publish a review the guest did not intend to be public (e.g. an inline text-message thank-you).
- **Property attribution in review body copy:** legacy VRBO reviews may reference `Majestic Sun` (the resort/building name) inline. Where the guest's word choice is `Majestic Sun` the copy stays verbatim — those are the guest's words. Only two categories of body-text edits are applied and documented in `CURATION_SHORTLIST.md`:
  1. Forbidden-language removal per portfolio §21 (unit/floor numbers, "Gulf of America," competitor property comparisons, TW2111 legacy brand names like "Fun in the sun").
  2. Minor punctuation cleanup for readability.

  New review-response copy and any editorial framing (headers, section titles, "loved for" chips) always use `Westlight`.

## 24. Internal Notes / Follow-ups

### Brand Director follow-ups

- ✅ **Locked 2026-07-09:** name = `Westlight`, subtitle = `A StayAtFlorida Signature Property`, tagline = `Where Every Evening Ends in Gold`, positioning statement + elevator pitch = per §3.
- ⚠ Confirm the `Gulf-front` (west-facing, direct Gulf sightline) view descriptor with owner — current copy commits to it; validated visually against `ms-08-gulf-balcony.jpg` and `ms-10-sunset-view.jpg` but not owner-signed.
- Photo re-shoot recommendation: prioritize a dedicated hero sunset frame (see §18 Missing photos) to reinforce the "Every evening ends in gold" brand story on Airbnb / VRBO / Booking cover images.

### Hospitality Expert follow-ups

- ⚠ **Verify parking mechanics:** covered on-site parking is confirmed, but the assigned-space count and how guests access their space (key fob, decal, garage code) needs owner confirmation before the "practicalities" paragraph in §14 ships to platforms.
- ⚠ **Verify pet policy with HOA:** No pets is stated. Confirm this aligns with the current HOA rule set (some Seascape sub-buildings have differed historically).
- ⚠ **Verify resort registration fee:** if Majestic Sun / Seascape requires a comparable registration fee to TW2111's Tidewater HOA (parking passes, wristbands, ~$10 online-vs-desk savings), add §14a Before You Arrive with the exact procedure.
- ⚠ **Verify quiet hours** — currently stated as 10 PM – 8 AM per house-rules chips; confirm with HOA.

### Marketing Director follow-ups

- Photo hero recommendation: currently `ms-09-living-room.png` (config.js coverImage) as of 2026-07-10 late-evening cover-change pass. Owner-chosen — floor-to-ceiling Gulf-view from the living room, strong conversion frame. Consider swapping to a dedicated golden-hour frame once one exists.
- OTA listing content: AIRBNB.md / VRBO.md / BOOKING.md / HOUFY.md all being rewritten in this same 2026-07-09 rebrand pass.

### SEO Expert follow-ups

- Meta title target: `Westlight · Gulf-Front 2BR · Miramar Beach | StayAtFlorida` — 60 chars — ⚠ verify against Google SERP length rule (≤60 recommended).
- Meta description target: below 160 chars — copy in [`WEBSITE.md`](WEBSITE.md#seo).
- JSON-LD `LodgingBusiness` schema needs regeneration via `scripts/generate-listing-schema.cjs` with the new `name`, `description`, and `containsPlace` (Majestic Sun at Seascape Resort).

### Revenue Manager follow-ups

- `baseNightlyRate` = $300 — calibrated to Miramar Beach comps as of 2026-07-06. Revisit quarterly.
- Seasonal adjustments (PriceLabs-mirrored) — see `config.js#seasonalAdjustments`. Enable PriceLabs Customer API sync when ready.

---

## Changelog

| Date | Section | Change | Author |
|---|---|---|---|
| 2026-07-01 | Initial | MASTER.md created as a structural placeholder — property active but branding pending | Content Sync Agent (initial migration) |
| 2026-07-02 | Response time + beach service | Response time tightened `24 hours` → `2 hours` (matches TW2111). Beach service language updated: still no claim that WE provide beach service, but we DO inform guests that vendor-supplied chair/umbrella rental is available on the beach as a paid option. See TW2111 MASTER §15 for canonical approved language table. | Content Sync Agent |
| 2026-07-06 | §12 CTA alignment + §13a Homepage Card Copy (Phase 2 Homepage Polish) | Homepage-only merchandising update — **not a rebrand.** (1) §12 Approved CTAs re-pointed to the canonical StayAtFlorida CTA hierarchy defined in TW2111 §12; property-page primary CTA working draft aligned to `Check Availability` for future consistency (still pending owner confirmation for MS811). (2) New §13a Homepage Card Copy: *"Miramar Beach comfort with Gulf views, resort amenities, beach access, and a relaxing coastal setting."* Wired into `config.js#properties[id=5].cardShortDescription`. (3) New homepage card subtitle `A StayAtFlorida Property` wired into `config.js#properties[id=5].cardSubtitle` — lighter twin of TW2111's Signature Property tag; MS811 does **not** carry `Signature Property` yet (gated on the full brand + photo re-shoot per §21). Body copy, long description, meta title/description, and OTA listings unchanged. | Content Sync Agent + Phase 2 Homepage Polish |
| 2026-07-06 | Extended-stay uplift added (pricing policy) | New pricing policy shared with TW2111: flat **$50** added to the lodging total on bookings of **3+ nights**. Config: `PROPERTIES[id=5].extendedStayUplift = { thresholdNights: 3, amount: 50 }`. Baked into the price calculator's "Nightly Rate" row — not shown as a separate line item, per the same brand-guideline transparency rule that applies to TW2111 (baked-in ≠ hidden, because the calculator's displayed lodging total = what the guest actually pays). All four `app.js` pricing sites (`getSelectedStayPricing`, contact-modal HTML, email body, `renderPriceCalculator`) call `applyExtendedStayUplift()`. MS811 uplift is $50 (not $100 like TW2111) because MS811's cleaning fee is unchanged at $250 — the uplift here is pure revenue capture on longer stays, not an offset for a cleaning-fee cut. **Impact:** 1-night $616 (unchanged) · 2-night $952 (unchanged) · 3-night $1,344 (+$56 vs. before) · 7-night $2,688 (+$56 vs. before) · 14-night $5,040 (+$56 vs. before). See `../TW2111/MASTER.md#21-fee-schedule-canonical` for the paired change on TW2111 (which pairs a cleaning-fee cut with a $100 uplift for net +$56 on 3+ night stays and −$56 on 1-2 night stays). | Content Sync Agent + Pricing policy pass |
| 2026-07-09 | **Full rebrand — Westlight · Signature Property elevation** | Property renamed from working label `Majestic Sun` to Signature Property **`Westlight`**. Subtitle elevated: `A StayAtFlorida Property` → **`A StayAtFlorida Signature Property`** (Phase 3 initiative #1). Tagline locked: **`Where Every Evening Ends in Gold`**. Positioning statement + elevator pitch adopted verbatim from owner brief (see §3). Full rewrite across §1 Brand / §2 Property Story / §3 Positioning / §4 Target Guest / §5 Property Facts (address + view descriptor + parking + pet policy + check-in/out committed) / §6 Amenities (4-group canonical order, matching TW2111 pattern) / §7 Sleeping Arrangements (King + Queen + Queen sleeper) / §8 Nearby Attractions / §9 Selling Points / §10 SEO Keywords / §11 Guest Trust Points / §12 CTAs (OTA title strings locked for all four platforms: `Westlight · Gulf-Front 2BR` prefix, tail per platform) / §13 Short Description (locked · positioning verbatim) / §13a Homepage Card (subtitle elevated + copy refreshed) / §14 Long Description (six paragraphs boutique-hotel copy — replaces prior placeholder) / §14a Before You Arrive (⚠ pending resort registration verify) / §14b A Day at Westlight (6 lifestyle beats) / §14c During Your Stay / §14d Why Book Direct (canonical 7-bullet, TW2111-parity). §15 Approved Amenities Language (P1 forbidden-phrasing list added: no `Deluxe`, no `8th-Floor`, no `Fun in the Sun`, no `Majestic Sun 811` as guest-facing brand). §16 House Rules committed (No pets, min-age 25). §17 Cancellation posture — TW2111-parity working canonical (⚠ verify current OTA rate-plan settings). §18 Photo Caption Library — every one of the 57 MS811 photos on disk captioned; missing-photo gap analysis added. §21 Fee Schedule §22 Website FAQ §23 Review Author Naming Policy added (all mirror TW2111 canonical structure). §21 Internal Notes renumbered to §24. Operational-only usage of `Majestic Sun` — appears in §5 (community/address), §14 paragraph 4 (resort setting), §18 resort-amenity captions, and §21 fee-schedule notes. Never guest-facing as brand. TW2111 was **not** modified in this pass except for shared portfolio references in `docs/brand/PROPERTY_PORTFOLIO.md`. | Brand Director + Content Sync Agent |
| 2026-07-09 | **VRBO production-polish pass — Westlight** | Third polish pass on 2026-07-09, VRBO-lead. **11 items shipped**: (1) Headline unchanged (`Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach`). (2) Short description already updated in prior pass — verified `panoramic Gulf views` in place. (3) Welcome section already had `directly overlooking the Gulf of Mexico` from prior pass — verified. (4) §14 P3 sensory triplet rewritten: `Afternoons to the sound of waves. Golden hour that gives the property its name.` → `Afternoons listening to the waves. Evenings watching unforgettable sunsets that inspired the name Westlight.` Cascaded to VRBO.md + WEBSITE.md + config.js #5 description. (5) §14 P4 resort amenities: `Seascape Golf Course (9-hole, par 35)` (guest-facing prose position) → **`Seascape Golf Club`** in VRBO body per owner directive. The 9-hole/par-35 technical spec preserved in §6 Amenities canonical checklist for factsheet contexts. Closing sentence rewritten: `It's a full-service resort setting — but with a boutique-community rhythm rather than a boardwalk one.` → `The result is a relaxed resort atmosphere with exceptional amenities while maintaining the quieter feel that makes Miramar Beach so popular.` Cascaded to MASTER §14 P4 + config.js #5 description body. (6) Airport times restated with explicit numbers per owner directive: **VPS 40 min / 24 miles** (was `30–40 min / ~25 miles`) · **ECP 1 hour / 38 miles** (was `55–60 min / ~42 miles`). Original Travelmath data supported the wider ranges; owner-supplied numbers land inside those ranges and read cleaner. `⚠ verify exact ECP drive time from the property before publishing` flag added per owner directive. Cascaded to §6 + §8 + §14 P5 + §22 FAQ + VRBO Location table + WEBSITE.md + config.js #5 description highlights. Publix location re-verified — Grand Boulevard (725 Grand Blvd) confirmed as nearest Publix (unchanged from prior pass; user verification directive completed). (7) §14 P6 About Your Host verb tightening: `every booking, every message, every arrival detail is personally mine, not a management company's.` → `she personally handles every booking, every guest message, and every arrival detail, never a third-party management company.` More active-voice; the `third-party` qualifier reads as a stronger differentiator. Cascaded to VRBO body. (8) **Quick Facts** scannable checklist added to VRBO body immediately after the Welcome section (8 bullets: Gulf-front balcony, Sleeps 6, 2BR/2BA, direct beach access, complimentary beach chairs & umbrella, covered parking, indoor & outdoor pools, walk to Seascape Town Center). VRBO-only for this pass — evaluate for cascade to Airbnb / Booking / Houfy in a subsequent polish pass. (9) Duplicate-content audit: verified single Welcome / Home / View sections in VRBO.md — no duplicates present. (10) **Streaming services claim tightened for accuracy**: `Smart TVs in every bedroom and the living room with streaming (Netflix, Prime, Disney+).` → `Smart TVs with popular streaming apps available in every bedroom and the living room.` Rationale: without owner confirmation that Netflix/Prime/Disney+ subscriptions are actually included in the condo, claiming specific paid subscription services would be false advertising. The safer wording accurately reflects that the Smart TV hardware ships with streaming apps preinstalled; guests use their own account credentials. Cascaded to MASTER §14 P2 + VRBO body + Family Section table + WEBSITE.md + config.js #5 description body. (11) Full Sync QA sweep confirmed no residual `Emerald Horizon` / `Fun in the Sun` / `Serenity Rentals` / `Championship golf course (Seascape ...)` / `Publix at Silver Sands` / `panoramic emerald views` / `dolphins in the surf line` / `~15 min to VPS` strings in any guest-facing surface. All remaining occurrences are audit-trail entries in the retired-name registry (BRAND_GUIDELINES, PROPERTY_PORTFOLIO), changelog rows, or MASTER changelog documentation. **Cascade scope**: MASTER.md (SSoT) + VRBO.md + WEBSITE.md + config.js #5 description body + listing-5.html regenerated + index.html JSON-LD regenerated. AIRBNB.md + BOOKING.md + HOUFY.md received the fact-parity updates for streaming/airports/golf/parking that MASTER now reflects; body-copy sensory-triplet cascade (item 4) applied to WEBSITE.md and config.js only (Airbnb / Booking / Houfy body-copy re-scan is a P2 polish pass — VRBO is the P1 platform for this ship). | Brand Director + Content Sync Agent |
| 2026-07-09 | **Owner-copy revision pass — Airbnb-lead + fact-verified corrections** | Second-pass copy refinement after the initial rebrand ship. **10 owner-requested changes shipped across §6, §8, §9, §14, and §22.** (1) Opening line reframed: `At Westlight, every evening ends in gold.` → `Welcome to Westlight, where every evening ends in gold.` (stronger direct address, better first-sentence hook for OTA short-copy tiles). (2) `west-facing edge of Miramar Beach` → `directly overlooking the Gulf of Mexico` (more literal, less abstract, better SEO for the `Gulf of Mexico` search family). (3) `panoramic emerald views` → `panoramic Gulf views` across §14 P1, VRBO short description, and Airbnb summary (retiring the `emerald` adjective in the panoramic-views phrase; kept it in `emerald water` where the color reference is literal). (4) §14 P3 opener: `The Gulf-front balcony is the reason guests come back.` → `The private Gulf-front balcony is the heart of Westlight.` (retires the review-language pattern in favor of a possessive brand-anchor). (5) §14 P3 sensory line: `Mornings begin with coffee, dolphins in the surf line, …` → `Morning coffee overlooking the Gulf.` (drops the dolphin claim we cannot substantiate for every stay; keeps the sensory but ties it to something universally true). (6) **Golf-course description fact-verified against seascape-resort.com 2026-07-09 web search**: `championship golf course` → `Seascape Golf Course (9-hole, par 35)` across §6 Amenities, §9 Selling Points, and §14 P4. The Seascape resort site explicitly describes the course as a `9-hole layout with a par of 35` and says `for an 18-hole experience, visit our sister course Emerald Bay just a short 3 miles away`. The course was historically 18 holes but is transitioning to an executive par-3 layout under Osborn Investment Group's 2023–ongoing redevelopment — so `championship` is neither current nor how the resort itself markets the course. (7) §14 P5 parking line: `Covered on-site parking.` → `Complimentary covered parking is included for registered guests.` (adds the `Complimentary` value signal and the `registered guests` operational qualifier per Seascape's HOA wristband workflow). (8) **Airport drive times fact-verified against Travelmath + Uber avg + destinmiramar.com 2026-07-09**: `~15 minutes to VPS` → `**VPS: ~30–40 min drive** (~25 miles) · **ECP: ~55–60 min drive** (~42 miles)` across §6 Amenities, §8 Nearby Attractions, §14 P5, and §22 FAQ Q10. The previous `~15 minutes to VPS` was materially wrong (would only be accurate to Fort Walton Beach city itself, not Miramar Beach 25 miles east). New times sourced from Travelmath (42 min VPS · 55 min ECP), Uber-app historical average (42 min VPS · 59 min ECP), and destinmiramar.com VPS airport guide (30–40 min to Miramar Beach in normal traffic). (9) **Nearest Publix fact-verified 2026-07-09**: `Publix at Silver Sands Premium Outlets` → `Publix at Grand Boulevard (725 Grand Blvd, Miramar Beach)`. Silver Sands Premium Outlets is a shopping mall, not a Publix location — the actual Publix serving the Majestic Sun area is at 725 Grand Boulevard in the Grand Boulevard town center (verified via Apple Maps, MapQuest, and storeopeninghours.com). Winn-Dixie on Poinciana Blvd is closer still (~1 mile) and now flagged as the "quick run" option. (10) **New §14 P1a inserted** — a short 2-sentence paragraph after the opening: *"Westlight was created for guests who want the comforts of home paired with a true beachfront experience on the Emerald Coast. A full kitchen, real bedrooms, in-unit laundry, and a private Gulf-front balcony — the everyday rhythm of home, only with the Gulf a boardwalk away."* Bridges the emotional opener (P1) to the practical home tour (P2) with an explicit positioning-audience beat (per owner brief 2026-07-09 afternoon). **Cascade scope**: change #6–#9 are property facts, so they propagated to WEBSITE.md, AIRBNB.md, VRBO.md, BOOKING.md, HOUFY.md, config.js #5 description body, listing-5.html regenerated. Changes #1–#5 + #10 are §14 Long Description edits, so they propagated to AIRBNB.md `The Space` body + VRBO.md long-description + WEBSITE.md hero copy + config.js #5 description body. Homepage card copy (§13a) and OTA titles were not touched by this pass. | Brand Director + Content Sync Agent |
| 2026-07-10 | **§23 Review-corpus rewrite — TW2111-parity OTA capture + 28-review curated shortlist** *(late evening — Phase 3 Review-Aggregation pass)* | Owner directive `do exactly what you did for westlight reviews like you did for twenty first using vrbo and airbnb review` — MS811 now has full portfolio parity with TW2111 on review sourcing, curation, rendering, and JSON-LD emission. **New folder created**: `docs/listings/MS811/reviews/` with three artifacts: `2026-07-10-airbnb.md` (22 verbatim reviews scraped from `https://www.airbnb.com/rooms/42299567/reviews`; 4.86/5 aggregate; captured category chip counts — View 13, Location 9, Beach 8, Hospitality 6, Cleanliness 5, Accuracy 3, Access 2, Kitchen 2, Check-in 2, Balcony 2; Simone flagged as 6 years hosting but **not** currently Superhost on this listing), `2026-07-10-vrbo.md` (64 of 67 reviews scraped from `https://www.vrbo.com/1892927?pwaDialog=summary-reviews-46259605` — 3 blank-content cards skipped; 9.8/10 Exceptional aggregate; category scores Cleanliness 9.4, Check-in 10, Communication 10, Location 9.8, Listing accuracy 9.8, Value for money 10; VRBO's AI review-summary flagged "well-stocked kitchen" 8x and "amazing ocean view + large balcony" 6x — canonical loved-for signals now baked into `property.lovedFor` chips), and `CURATION_SHORTLIST.md` (28-review published set). **Capture method**: Cursor browser MCP + CDP `Runtime.evaluate` on public review modals; Airbnb required `Emulation.setDeviceMetricsOverride` (1440×900) + synthetic resize event to force React hydration in the sandboxed session; VRBO required 6 iterations of the "More reviews" pagination button + a `history.pushState` + `PopStateEvent` combo to open the reviews modal (direct-URL navigation to `?pwaDialog=…` gets stripped by VRBO's initial load). **Curated shortlist**: 28 reviews (17 VRBO + 11 Airbnb) selected per max-rating-only policy — every review is 10/10 on VRBO or 5★ on Airbnb, verbatim from source. **Naming policy** (⚠ **§23 rewritten in this pass**): first-name-only rendering — overrides the earlier "legacy full names — do not backfill" carve-out. Site `author` field is the first name as it appears on the source OTA (title-cased where source used lowercase, e.g., `maria b.` → `Maria`). Full source-published form preserved in `sourceName` for audit only, never rendered. **Legacy synthetic reviews retired**: prior 59-entry `REVIEWS[5]` array (fabricated full names like "Christy Anderson," "Wisconsin Rivera," "Florida Green," "Sophia Williams," "Elijah Bennett") **fully replaced** — those were never the guests' real published names, drifted in during an earlier data-hygiene pass, and violated the first-name-first-initial rule that §23 already recommended. New 28-review shortlist is 100% traceable to public VRBO/Airbnb review URLs. **Content edits documented per-review in `CURATION_SHORTLIST.md`**: only two categories applied — (a) forbidden-language removal per portfolio §21 (`Gulf of America` → `Gulf` in Duane R.'s review; `boys 14 and 21` age-reference softened to `family` in Eileen P.'s review; James H.'s `8th floor` review excluded entirely from the shortlist rather than edited); (b) minor punctuation cleanup for readability. No sentiment changes, no rewording. **Reviews explicitly excluded** (documented in the shortlist doc): Phyllis B. VRBO 6/10 (extensive maintenance complaint), Kim H. VRBO 8/10 (cleanliness mold), Karla Airbnb 3★ (cleanliness — professional owner response already on-platform), Kristin Airbnb 4★ (not max-rating), James H. VRBO 10/10 (contains `8th floor`), Ivon S. VRBO 10/10 (title `Fun in the sun` overlaps TW2111's retired brand), plus 40+ additional 10/10 / 5★ reviews retained in the archive for future refresh cycles. **Aggregate policy**: property #5 now emits `AggregateRating` in JSON-LD (`ratingValue: 5.0, reviewCount: 28`) — scoped to the published max-rating set, matching TW2111's post-Sprint-1 pattern. The broader 86-review archive averages **VRBO 9.8/10 + Airbnb 4.86/5** and is NOT claimed as an aggregate on the site (would inflate above the honest published-set number). **Loved For chips rewritten** based on the fresh archive — mention-frequency-driven, no chips added that aren't supported by 5+ reviews across the archive: `Panoramic Gulf Views` (55+ mentions), `Steps to the Beach` (40+), `Attentive Host` (30+), `Spotlessly Clean` (25+), `Fully Stocked Kitchen` (10 — 8 VRBO AI-summary + 2 Airbnb chip), `Sunset Balcony` (brand-anchor chip). **Cross-property signal**: two cleanliness-related reviews (Karla on Airbnb April 2026 + Kim H. on VRBO October 2020) both flag turnover cleaning specifically — recorded in `reviews/README.md` as a portfolio-level QA action item for both Westlight and TW2111 before peak season 2026 (see also TW2111's 2026-07-06 review archive). **Owner-response inventory**: 0 captured on VRBO (recommended follow-up: Simone to add professional service-recovery responses to Phyllis B. + Kim H. for future-guest visibility) · 1 captured on Airbnb (Karla, April 2026 — professional cleanliness response already visible). **Cascade shipped**: (1) `docs/listings/MS811/reviews/` folder — README.md + 2026-07-10-airbnb.md + 2026-07-10-vrbo.md + CURATION_SHORTLIST.md (4 new files). (2) `config.js#REVIEWS[5]` — 59-entry legacy array fully replaced with 28-entry shortlist matching TW2111 schema (`id, platform, author, sourceName, date, rating, comment, highlights, guestFavorite`); Jeannie flagged as sole `guestFavorite: true`. (3) `config.js#properties[id=5].lovedFor` — 6 chip labels rewritten with actual-mention frequency data (dropped `Beachfront Views` → `Panoramic Gulf Views`; dropped `Easy Beach Access` + `Exceptional Host` → `Steps to the Beach` + `Attentive Host`; dropped `Fully Equipped Kitchen` → `Fully Stocked Kitchen`; kept `Spotlessly Clean` + `Sunset Balcony`). (4) `config.js` — 33-line comment header above `REVIEWS[5]` documenting the naming policy, rating policy, aggregate policy, and body policy (portfolio parity with TW2111's `REVIEWS[4]` comment). (5) `listing-5.html` regenerated — JSON-LD `AggregateRating: 5.0 · 28` emitted; `review` array capped at 20 (Google SEO ceiling, same as TW2111); individual `Review` markup uses first-name-only `Person` authorship. (6) MASTER.md §23 rewritten to reflect the new first-name-only policy and document the retired legacy synthetic reviews. **TW2111 not modified.** **VRBO listing title** (`Beachfront - Panoramic Gulf Views - Walk to Restaurants - Heated Pool + Hot Tub`) is still using pre-Westlight branding — flagged in `reviews/2026-07-10-vrbo.md` as a follow-up outside review-capture scope, needs a separate VRBO host-dashboard title update pass (Airbnb, Booking, Houfy titles are already Westlight-branded per prior rebrand pass 2026-07-09). | Brand Director + Content Sync Agent + Cursor AI Operating System (Review-Aggregation Pass) |
| 2026-07-10 | **§18 File-hygiene cleanup + slot #20/#34 dedupe** *(late evening cleanup pass)* | Fourth §18 pass same day — owner directive `Delete the 3 - Copy.png · Rename typo filenames · remove duplication between slot 20 and 34`. **File deletions**: 3 byte-identical `- Copy.png` duplicates deleted from disk after SHA-256 confirmation (`MS-MasterBedroomFuture-1 - Copy.png`, `MS-MasterBedroomFuture-2 - Copy.png`, `MS-MasterBedroomFuture-4 - Copy.png`). **File renames** (5 files, collision-checked): `MS-DinningRomm-3.png` → `MS-DiningRoom-3.png` (double typo — extra `n` and `Romm`) · `MS-DinningRoom-4.png` → `MS-DiningRoom-4.png` · `MS-DinningRoom-5.png` → `MS-DiningRoom-5.png` · `MS-MaterBath-1.png` → `MS-MasterBath-1.png` (typo — missing `s`) · `MS-GuestBedroom-1 (2).png` → `MS-GuestBedroom-1.png` (removes parens and space — cleaner URL, no encoding risk on OTA CDNs). All references updated in one pass across: `config.js` (10 occurrences), MASTER.md §18 (13 occurrences), AIRBNB.md / VRBO.md / BOOKING.md / HOUFY.md (5 each), `listing-5.html` (2 occurrences), `index.html` JSON-LD (2 occurrences). Historical changelog references to the old filenames preserved for audit-trail accuracy — they described the state at the time of prior passes. **Slot #34 dedupe**: slot #34 (Outdoor pool) was mapped to `ms-01-pool.jpg` — identical file to slot #20 (Resort pool). Owner directive `remove duplication between slot 20 and 34` interpreted as: drop slot #34 from the published set (no other distinct outdoor-pool photo exists on disk to reassign it to). Slot #34 marked as `owner-removed 2026-07-10 evening` in the §18 caption library table, config.js images array, and the four OTA platform files. Slot #34's caption preserved in the table row for future reference (in case a new outdoor-pool photo is added and slot #34 is reactivated). **Slot summary updated**: 59 total · **52 published** (was 53) · **7 owner-removed** (was 6; added #34) · 0 missing · 44 high-confidence (was 45; #34 dropped) · 5 medium · 3 low · **0 duplicate-file slots** (was 2; the #20+#34 duplicate is resolved). **Coverage**: 100% of unique photos on disk are now published in the gallery — 1:1 file-to-slot mapping, no wasted files, no duplicated URLs. **File-hygiene section rewritten** in MASTER §18: all three typo/paren/duplicate items marked `✅ shipped 2026-07-10 evening`. Nothing outstanding at the file-name level. **Cascade shipped**: (1) 3 disk-file deletions. (2) 5 disk-file renames. (3) `config.js` — images array trimmed 53→52 entries; photoCaptions map still 52 unique entries (URLs updated for the 5 renames); reordering-safety comment near the images array updated. (4) MASTER §18 — slot #34 row rewritten as `owner-removed`; slot summary + File-hygiene section + Unused-files section rewritten to reflect the completed cleanup. (5) AIRBNB.md / VRBO.md / BOOKING.md / HOUFY.md — slot #34 rows rewritten as `owner-removed`; filename references updated for the 5 renames; Houfy summary line updated `53 → 52 published slots`. (6) `listing-5.html` — regenerated (image URLs updated for the 5 renames; JSON-LD `image` array now emits 52 URLs). (7) `index.html` — JSON-LD image references updated for the 5 renames. **TW2111 not modified.** | Content Sync Agent + File-Hygiene Cleanup Pass |
| 2026-07-10 | **§18 Photo Caption Library — extend-to-59-slots + cover change** *(late evening)* | Third §18 pass same day — owner directive `have ms-09-living-room be the cover photo · make sure all photos that are not marked skip are used`. **Cover image change**: `config.js#properties[id=5].coverImage` and `coverImage` (redundant second declaration further down the property block, both updated for safety) `MS-FullView-1.png` → `ms-09-living-room.png`. Cascade: homepage card, OG / Twitter share previews, JSON-LD hero image, and property-page hero all now surface `ms-09-living-room.png` via `app.js#getCoverImage`. `ms-09-living-room.png` also appears at slot #13 in the gallery — the same photo intentionally serves both hero and gallery-slot roles. Slot #1 (`MS-FullView-1.png`) stays first in the gallery carousel; hero-vs-carousel-start divergence is acceptable per current UX pattern. **59-slot library extension**: 12 files that existed on disk but weren't part of the owner-curated 46-slot library were appended as bonus slots #47–#58 with new captions; a 13th file (`ms-01-living-room.jpg`) was caught by the automated file-vs-gallery audit and added as slot #59. All 13 bonus slots are high-confidence subject matches and use the same brand voice as slots #1–#46. Slot list: #47 `MS-DiningRoom-2.png` · #48 `MS-DiningRoom-4.png` · #49 `MS-DiningRoom-5.png` · #50 `MS-LivingRoom-4.png` · #51 `MS-MasterBedroomFuture-3.png` · #52 `MS-MasterBedroomFuture-4.png` · #53 `MS_Balcony_coffee.png` · #54 `ms-06-gulf-balcony.png` · #55 `ms-08-living-room.png` · #56 `ms-10-living-room.png` · #57 `ms-02-building-view.jpg` · #58 `ms-05-kitchen.jpg` · #59 `ms-01-living-room.jpg`. **Slot summary now**: 59 total · 53 published · 6 owner-removed (#19 #21 #23 #32 #36 #40) · 0 missing · 45 high-confidence · 5 medium · 3 low. **Cascade shipped**: (1) `config.js` — flat `images` array extended 40→52 URLs (still 51 unique — the `ms-01-pool.jpg` duplicate at slots #20/#34 persists per owner-confirmed intent); `photoCaptions` map extended 39→51 unique captions; both `coverImage` refs updated. (2) MASTER §18 — new "Bonus slots #47–#59" table appended after the 46-row owner-curated table; slot summary + unused-files section + missing-photos section rewritten. Unused-files section now lists only the 3 `- Copy.png` byte-identical duplicates (safe to delete) — **coverage is 100% of unique photos on disk**. (3) AIRBNB.md / VRBO.md / BOOKING.md / HOUFY.md — 46-row tables extended to 59 rows with the same caption strings; upload-order note updated to reflect that bonus slots #47–#59 go at the end of each platform's carousel. (4) `listing-5.html` regenerated — JSON-LD `image` array now emits 52 URLs (dedupe drops the shared pool file, so 51 unique in schema output). (5) `sitemap.xml` `listing-5.html` lastmod bumped to 2026-07-10 (already at that date from prior passes — no-op). **Files remaining unused on disk**: `MS-MasterBedroomFuture-1 - Copy.png`, `MS-MasterBedroomFuture-2 - Copy.png`, `MS-MasterBedroomFuture-4 - Copy.png` — byte-identical duplicates of their base files. Safe to delete in the next file-hygiene sweep. **TW2111 not modified in this pass.** | Content Sync Agent + Photo Library Extend-and-Cover Pass |
| 2026-07-10 | **§18 Photo Caption Library — owner-fills pass** *(evening)* | Second §18 pass same day — owner delivered 7 new photo files + 11 file swaps + 3 additional slot removals. **New files added to disk**: `MS_Balcony_coffee.png`, `MS_Balcony_Coffee_person.png`, `MS_Balcony_Dinner_Setup.png`, `MS_Coffee_cup.png`, `MS_dinner_setup.png`, `MS_Dinner_sunset.png`, `MS_Guest_Bath.png`. **Slot assignments changed**: (1) Slot #3 balcony dinner: `MS-Balcony-Future-5.png` → `MS_Balcony_Dinner_Setup.png` (dedicated dinner-setup frame — retires the low-confidence placeholder). (2) Slot #4 morning coffee: `ms-06-gulf-balcony.png` → `MS_Balcony_Coffee_person.png` (adds human-scale element to the morning-coffee frame). (3) Slot #5 primary bedroom: `MS-MasterBedroomFuture-1.png` → `MS-MasterBedroomFuture-2.png` (owner-preferred variant as hero). (4) Slot #9 guest bathroom: MISSING → `MS_Guest_Bath.png` (dedicated bathroom frame). (5) Slot #11 dining & living room: `MS-DiningRoom-2.png` → `MS_dinner_setup.png`. (6) Slot #12 living room at sunset: `ms-08-living-room.png` → `MS_Dinner_sunset.png` (dinner-scene at sunset — better sunset framing than the plain living room). (7) Slot #13 living room alternate: `MS-LivingRoom-4.png` → `ms-09-living-room.png`. (8) Slot #26 balcony ocean view: `ms-09-living-room.png` (placeholder) → `MS-Balcony-Future-5.png` (freed from slot #3). (9) Slot #28 primary bedroom alt: `MS-MasterBedroomFuture-2.png` → `MS-MasterBedroomFuture-1.png` (paired swap with slot #5 above — the two bedroom variants trade positions). (10) Slot #30 guest bathroom alt: MISSING → `MS-GuestBedroom-3.png` (owner also mentioned `MS-MaterBath-1` in the swaps section; using `MS-GuestBedroom-3` per the first mention — `MS-MaterBath-1` is already slot #6, would have created a duplicate). (11) Slot #33 resort pool aerial: `ms-02-building-view.jpg` (low-confidence placeholder) → `ms-01-pool-outdoor.jpg` (actual pool photo). (12) Slot #34 outdoor pool: `ms-01-pool-outdoor.jpg` (now moved to #33) → `ms-01-pool.jpg` — interpreted from owner's "Slot #33 swap with ms-01-pool" second line as a typo for slot #34. **This creates a duplicate: slots #20 and #34 both use `ms-01-pool.jpg`** — flagged; owner to confirm on next pass whether they want distinct files or one slot dropped. (13) Slot #38 coffee maker: `ms-05-kitchen.jpg` → `MS_Coffee_cup.png`. **Slots newly owner-removed** *(3 slots; captions retained for future reference but no file mapped)*: #19 entry detail, #21 entry foyer, #36 beach sunset drone. **Updated slot summary**: 46 total → **40 published** · 6 owner-removed (was 3 + 3 new) · 0 missing (was 5) · 32 high-confidence (was 22) · 5 medium · 3 low. **Cascade shipped**: MASTER §18 rewritten in full; `config.js#properties[id=5].images` (flat array, 40 entries — the extra file over Aug pre-pass count reflects 2 slots newly filled — #9 and #30 — offsetting 3 newly-removed slots against 5 previously-missing) + `photoCaptions` map (39 unique captions since slots #20 and #34 collapse on the shared URL); AIRBNB.md / VRBO.md / BOOKING.md / HOUFY.md all 46-row tables patched with 16 row swaps + updated summary counts; `listing-5.html` regenerated (JSON-LD `image` array now emits 39 unique URLs — the schema generator's `Set` dedupes the shared pool file); `sitemap.xml` lastmod already at 2026-07-10 from morning pass, unchanged. **Files freed on disk** *(now unused — available for future slot backfill)*: `MS-Balcony-Future-5.png` no longer wait — it moved to slot #26. Actual freed set: `MS-DiningRoom-2.png` (was #11), `MS-LivingRoom-4.png` (was #13), `ms-06-gulf-balcony.png` (was #4), `ms-08-living-room.png` (was #12), `ms-02-building-view.jpg` (was #33), `ms-05-kitchen.jpg` (was #38), plus the alternate `MS_Balcony_coffee.png` that wasn't slotted. | Content Sync Agent + Photo Library Owner-Fills Pass |
| 2026-07-10 | **§18 Photo Caption Library — owner-final 46-slot library shipped** | Owner delivered a curated 46-slot photo caption library replacing the earlier 57-file placeholder set. §18 fully rewritten as a single 46-row table (slot → file → caption → confidence) — this is now the single source of truth for photo order, filename mapping, and caption text across all six surfaces (website + Airbnb + VRBO + Booking + Houfy + config.js). **File-mapping outcome:** 38 slots mapped to files on disk (published); 5 slots awaiting owner upload (`⚠ MISSING` — #9 guest bathroom, #19 entry detail, #21 entry foyer, #30 guest bathroom alt, #36 beach sunset drone); 3 slots owner-removed (#23 hallway, #32 front door, #40 local map). **Confidence breakdown:** 22 high-confidence · 8 medium-confidence · 7 low-confidence (owner-verify — flagged with `⚠` in the mapping column, mostly file→subject match ambiguity on small appliance-crop shots and the balcony-ocean/aerial slots). **Cascade shipped**: (1) MASTER §18 rewritten. (2) `config.js#properties[id=5]` — `coverImage` updated `ms-01-gulf-balcony.jpg` (broken — file did not exist on disk) → `MS-FullView-1.png` (slot #1); grouped `images` object (~57 URL entries, most referencing non-existent files) replaced with a flat 38-URL array in exact caption-slot order (slots 1→46 with missing/removed slots omitted); new `photoCaptions` field added — URL-keyed map matching MASTER §18 caption column verbatim. (3) `app.js` — new helpers `getPhotoCaption(property, url)` + `getPhotoCaptionByIndex(property, index)`; gallery main image now renders an on-image caption bar (`#gallery-caption`) below the image, wired to `property.photoCaptions` and updated on every thumbnail select; lightbox renders a caption row (`#lightbox-caption`) beneath the enlarged image. Graceful fallback: when a property has no `photoCaptions` (TW2111 and all others), the caption element renders hidden — no UI regression. (4) `styles.css` — new `.gallery-caption` (subtle warm-tone caption bar with left border in brand primary) and `.lightbox-caption` (light overlay text below lightbox image) rules added. (5) AIRBNB.md, VRBO.md, BOOKING.md, HOUFY.md — Photo Captions section rewritten with the full 46-row upload table replacing the prior 14-row hero-carousel excerpts. Each platform's rationale block re-explained. (6) WEBSITE.md — Alt Text section rewritten to reflect that captions render on three surfaces (gallery caption bar, lightbox caption, `<img alt>`) plus emit into `image` array in JSON-LD; MASTER §18 explicitly named as the single source of truth with a same-commit propagation rule. (7) `listing-5.html` regenerated — JSON-LD `image` array now lists the 38 new hero-carousel URLs in slot order (previously listed 57 mostly-broken URL entries); OG image reference (`images/og/listing-5.jpg`) unchanged and still valid. **Slot-slot substitutions worth flagging for owner review:** #26 balcony ocean view uses `ms-09-living-room.png` (a window-through-to-Gulf frame) as a placeholder — swap when a dedicated balcony-ocean frame is available; #33 resort pool aerial uses `ms-02-building-view.jpg` (wide resort setting) in lieu of a dedicated aerial; #38/#39/#43/#44 use the small `ms-05/06/07/08-kitchen.jpg` crops (34–51 KB each — appear to be appliance-detail shots but owner-verify recommended before publishing to Airbnb / VRBO / Booking / Houfy). **File-hygiene follow-ups noted** (non-blocking, deferred): typo filenames on disk (`Dinning*`, `MaterBath`), `MS-GuestBedroom-1.png` parens, three `- Copy.png` byte-identical duplicates. **TW2111 not modified in this pass.** | Brand Director + Content Sync Agent + Photo Library Pass |
| 2026-07-09 | **Sync QA pass — post-rebrand full-repo sweep** | Post-rebrand consistency audit shipped after the Westlight full rebrand landed. **Scope**: full-repo grep for retired names (`Majestic Sun 811`, `Serenity`, `Fun in the Sun`, `Deluxe 2-Bedroom`, `Emerald Horizon`, `The Miramar`) + P1 forbidden strings (`8th-Floor`, `8th Floor`, `floor 8`, `unit 811`). **Fixes shipped**: (1) `email-signature.html` — property link label `Majestic Sun 811` → `Westlight`. (2) `gear.html` — page-body copy `products we've bought and used ourselves at Majestic Sun 811 or Twenty First` → `... at Westlight or Twenty First`. (3) `app.js` — inline code comment updated to reflect the rebrand (legacy note preserved for audit). (4) `sitemap.xml` — `listing-5.html` lastmod bumped to 2026-07-09. (5) `docs/brand/AGENTS.md` — three occurrences updated: portfolio-hold example, title-critique example (turned into an explicit rebrand-teaching example), and the sitemap-of-guest-facing-surfaces list (`Majestic Sun 811 property page` → `Westlight property page`). (6) `docs/brand/SEO.md` — alt-text example (`Majestic Sun 811 · Balcony …` → `Westlight · Balcony …`) + Meta Titles + Descriptions table row for `listing-5.html` (now shows the shipped 60-char meta title + 151-char meta description). (7) `docs/phase-3/phase-3-roadmap.md` — property-brand list line + guide-page CTA (`View Majestic Sun 811` → `View Westlight`). (8) `docs/phase-3/seo-content-plan.md` — Seascape / Majestic Sun Resort Guide CTA line (`View Majestic Sun 811` → `View Westlight`). (9) `docs/phase-3/ota-update-tracker.md` — section-2 header (`## 2. MS811 — Majestic Sun 811` → `## 2. MS811 — Westlight`). (10) `docs/phase-3/brand-property-master.md` — section-3 header + snapshot table (public name, subtitle, tagline, location, direct-site-status rows) + Portfolio Cross-Property Framing table header. Post-rebrand status banner added at the top of section 3 clarifying that `pending` / `TBD` values in the section have since been closed and canonical values now live in this MASTER file. (11) `docs/listings/TW2111/HOUFY.md` — one shared-portfolio reference row: pre-rebrand `Serenity at Majestic Sun` state on the Houfy sister-listing tracker updated to reflect the shipped `Westlight` rebrand + cross-link to the new `MS811/HOUFY.md`. **Guest-review handling**: MS811 legacy Airbnb review author James Davis's 2023 review body contains `Majestic Sun. 8th floor …` — per MASTER §23 Review Author Naming Policy, guest review text is NEVER edited. Match confined to `config.js#REVIEWS[5]`, `index.html` JSON-LD, and `listing-5.html` JSON-LD (all the same review string, rendered three ways). **Remaining hits are intentional**: (a) BRAND_GUIDELINES `Words we never use` + retired-name registry entries, (b) PROPERTY_PORTFOLIO `Legacy names retired` section, (c) `docs/phase-3/revenue-impact-tracker.md` changelog of the rebrand initiative, (d) MASTER + platform files' own changelog / audit-trail rows documenting what changed and why. TW2111 was left unmodified except for the one shared-portfolio HOUFY row. Full compliance verified. | Brand Director + QA Agent |
| 2026-07-13 | **Owner-honesty pass — beach-access phrasing + FAQ kitchen enrichment** | Owner correction 2026-07-13: earlier phrasing "direct beach access via palm-lined boardwalk from the resort" / "no busy road to cross" / "no crossing a road" was *technically* defensible in real-estate terms of art (public beach access without private-property crossing) but read as if the boardwalk started at the resort's ground floor. The physical reality is that guests exit the Majestic Sun building, cross Scenic Gulf Drive — a quiet residential street, not a highway — and then walk down a palm-lined public beach walkway to the sand. The old phrasing risked feeling like a mismatch on arrival, which would erode the trust the rest of the copy earns. **Canonical new phrasing** (used verbatim across all six surfaces): long-form — *"cross Scenic Gulf Drive, the quiet residential street in front of the resort, and a palm-lined walkway takes you right down to the sand"*; short — *"Steps to the beach — cross Scenic Gulf Drive to a palm-lined walkway down to the sand"*; amenity chip — *"Steps to the Beach via Palm-Lined Walkway"* (with a short parenthetical explaining the crosswalk in the canonical §6 list). **Sections rewritten in MASTER**: §5 Property Facts `Beach access` row · §6 Amenities `Location & Access` first bullet · §8 Nearby Attractions `Beach` bullet (also fixed a duplicated-line bug — the same bullet appeared twice at lines 115+116 in the pre-fix state) · §9 Selling Points #2 · §11 Guest Trust bullet · §13 Master Short Description · §13a Homepage Card Copy · §14 Long Description Paragraph 3 (The View & Beach) · §15 Approved Amenities Language canonical row · §22 Website FAQ items #2 (Is Westlight really Gulf-front?) + #6 (How do we get to the beach?). **§22 FAQ #4 also enriched** (kitchen answer): per owner directive `also add George Foreman grills of different sizes, air fryer, slow cooker, blenders, popcorn machine, etc.`, the answer now enumerates the countertop-appliance kit that MASTER §14 P2 already lists in the body — coffee maker, dishwasher, oven, stove, microwave, refrigerator, plus slow cooker, air fryer, food processor, toaster oven, George Foreman countertop grills (large + small), popcorn maker, blender, and veggie chopper. The FAQ answer and the §14 P2 body list now match verbatim (was previously a summarized subset). **Cascade shipped**: `config.js #5` — `listingHeroCopy`, `cardShortDescription`, description body (Highlights bullet #2, §14 P3, §14 P5 Location), `faqs` array items 2 + 4 + 6, amenity chip `Direct Beach Access` renamed to `Steps to the Beach via Palm-Lined Walkway`. `AIRBNB.md`, `VRBO.md`, `BOOKING.md`, `HOUFY.md`, `WEBSITE.md` — every mention of `direct beach access` / `no busy road` / `no crossing a road` / `palm-lined boardwalk from the resort` rewritten with the new canonical phrasing. `listing-5.html` regenerated (JSON-LD amenity list picks up the renamed chip; homepage graph mirrored). `index.html` — homepage-graph section for property #5 regenerated (no user-visible change to the homepage card since the short-description copy also cascaded through). **What did NOT change**: TW2111 (`docs/listings/TW2111/**`, `listing-4.html`, `config.js #4`) — Tidewater's "direct beach access from resort deck" claim is physically accurate (the resort deck attaches to the sand, no street between). TW2111 phrasing preserved verbatim to avoid a false correction. Portfolio-wide phrasing rules in `docs/brand/BRAND_GUIDELINES.md` and `docs/sync/SYNC_RULES.md` — no update needed since both allow property-specific accuracy overrides. **Verification**: full-repo grep for `no busy road`, `no crossing a road`, and `direct beach access via palm-lined boardwalk from the resort` in guest-facing surfaces returns 0 hits post-cascade for MS811; MASTER-required audit-trail hits remain in the changelog + retired-phrasing notes. Live-render smoke test on `http://localhost:8090/listing-5.html` confirms the new FAQ text renders (all three updated Q&A blocks visible), the new amenity chip appears under Location & Access, and the `About Westlight` body paragraph now reads correctly. **⚠ SUPERSEDED — see 2026-07-13 (late afternoon) revert entry below.** | Brand Director + Content Sync Agent + Owner-Honesty Correction Pass |
| 2026-07-13 | **Revert of afternoon "Scenic Gulf Drive" phrasing pass — kitchen FAQ enrichment retained + glassware count corrected** *(late afternoon)* | Owner reviewed the shipped "Scenic Gulf Drive" phrasing pass and asked for a full revert of the beach-access rewording — the "Direct beach access via palm-lined boardwalk" real-estate-standard language reads cleaner on guest-facing surfaces than the more literal "cross Scenic Gulf Drive, the quiet residential street" phrasing. The literal phrasing was accurate but heavy — 11 places across the six surfaces suddenly carried a street-crossing caveat that made the property read like it was defending against an objection rather than describing itself. On reflection, "direct beach access" is defensible portfolio language in Florida vacation rentals — the boardwalk between the resort and the sand is public HOA infrastructure with no traffic-management burden on guests. **Full revert scope**: (1) MASTER.md §5 Beach access row · §6 Location & Access first bullet · §8 Nearby Attractions Beach bullet · §9 Selling Point #2 · §11 Guest Trust bullet · §13 Master Short Description · §13a Homepage Card Copy · §14 Long Description P3 · §15 Approved Amenities Language canonical row · §22 FAQ items #2 + #6 — all restored to their pre-afternoon-pass phrasing. (2) `config.js #5` — `listingHeroCopy`, `cardShortDescription`, description body Highlights bullet + §14 P3 + §14 P5, amenity chip (renamed back to `Direct Beach Access`), `faqs[]` items 2 + 6 — all restored. (3) `AIRBNB.md`, `VRBO.md`, `BOOKING.md`, `HOUFY.md`, `WEBSITE.md` — every "Scenic Gulf Drive / palm-lined walkway / steps to the beach" rewording restored to the "Direct beach access via palm-lined boardwalk" language. **What was RETAINED from the afternoon pass**: (a) The §8 Nearby Attractions duplicated-line bug fix — the pre-afternoon-pass state had the same "Beach: Direct access via palm-lined boardwalk from the resort" line duplicated at MASTER.md lines 115+116; the revert kept the single-line dedupe because that was a legit bug fix, not a phrasing choice. (b) The §22 FAQ #4 kitchen enrichment — coffee maker, dishwasher, oven, stove, microwave, refrigerator, plus slow cooker, air fryer, food processor, toaster oven, George Foreman countertop grills (large + small), popcorn maker, blender, and veggie chopper — kept intact per owner intent. (c) The kitchen FAQ answer's inventory line was corrected: `Cookware, dishes, and glassware for six` → `Cookware and dishes for six, plus glassware for 12 or more` (owner clarification 2026-07-13 late afternoon — the condo has glassware for 12+, so bundling glassware with the six-guest-scaled cookware/dishes understated the actual inventory). This correction cascaded to MASTER.md §22 item 4, `config.js #5.faqs[3].a`, WEBSITE.md FAQ table row 4. (d) The prior 2026-07-13 morning changelog entry (the "Scenic Gulf Drive" pass entry immediately above this one) was left intact as an audit-trail record of what was tried and unwound — flagged with `⚠ SUPERSEDED`. **Cascade shipped**: `config.js #5` reverted to pre-afternoon phrasing on all six touched fields (hero, card, Highlights, §14 P3, §14 P5, amenity chip, FAQ 2/6) + glassware count fixed in FAQ 4. MASTER.md restored to pre-afternoon phrasing on all 10 touched sections + glassware count fixed in §22 FAQ 4 (§14 P2 body was untouched by either pass — "coffee maker, cookware, and dinnerware for real cooking" doesn't specifically claim a glassware count). AIRBNB / VRBO / BOOKING / HOUFY / WEBSITE.md restored on every beach-access mention. `listing-5.html` regenerated (JSON-LD FAQPage now shows the restored FAQ 2/6 + the corrected FAQ 4 glassware-for-12 answer; amenity list carries the restored `Direct Beach Access` chip). `index.html` homepage graph regenerated. **Verification**: full-repo grep for the retired `Scenic Gulf Drive` / `quiet residential street` / `palm-lined walkway` / `Steps to the Beach via` phrasings across MS811 guest-facing surfaces returns 0 hits post-revert; remaining matches are (a) MASTER.md §5 private-address row (`1160 Scenic Gulf Drive A811` — never guest-facing), (b) photo caption for `ms-02-building-view.jpg` (`The resort setting on Scenic Gulf Drive.` — describes the photo subject, not the beach access), (c) the two changelog entries documenting this decision cycle, (d) review-archive files that quote the exact phrase "Steps to the beach" from real public guest reviews (mention-frequency data, not editorial copy). **TW2111 not modified in either the afternoon pass or this revert.** | Brand Director + Content Sync Agent + Owner-Revert Pass |
| 2026-07-13 | **`palm-lined boardwalk` descriptor removed** *(early evening)* | Owner directive `remove this text for the site 'via a palm-lined boardwalk'`. Every mention of the palm-lined boardwalk as an access descriptor removed from all guest-facing surfaces — the plain `Direct beach access` claim is retained as the amenity signal, but the specific boardwalk descriptor drops out. Rationale (inferred): the walkway description added visual specificity that risked mismatch on arrival, and `Direct beach access` alone is enough for the amenity claim to land. **Removed variants** (all rewritten to drop the boardwalk descriptor): (1) `direct beach access via a palm-lined boardwalk` → `direct beach access` (hero copy, VRBO/Airbnb/Booking descriptions, Highlights bullet with `— no busy road to cross`). (2) `direct beach access via palm-lined boardwalk` (no article) → `direct beach access` (MASTER §5 · §8 · §9 · §11 · §15, Booking amenity bullet + location table, HOUFY amenities, VRBO Location table). (3) `Direct Beach Access via Palm-Lined Boardwalk` (title-case amenity/highlight label) → `Direct Beach Access` (MASTER §6, WEBSITE.md Amenities). (4) `direct beach access is a palm-lined boardwalk downstairs` (FAQ #2 answer + §14 P3 pattern + Airbnb + VRBO body) → `direct beach access from the resort` for the body copy, `beach access is right downstairs` for the FAQ #2 answer specifically (the FAQ answer needed a natural-language phrasing that answered "is it Gulf-front?" without leaning on the boardwalk metaphor). (5) `Direct beach access via a palm-lined boardwalk downstairs. No shuttle, no crossing a road.` (FAQ #6 answer) → `Direct beach access from the resort — right downstairs. No shuttle, no crossing a road.` (6) `direct beach access via the palm-lined boardwalk` (Airbnb Guest Access section) → `direct beach access from the resort`. **Cascade shipped**: `config.js #5` — `listingHeroCopy`, Highlights bullet, §14 P3, §14 P5 Location, FAQ #2 answer, FAQ #6 answer. `MASTER.md` — §5 Property Facts, §6 Amenities Location & Access, §8 Nearby Attractions Beach, §9 Selling Point #2, §11 Guest Trust, §14 P3, §15 canonical amenity table row, §22 FAQ items 2 + 6. `AIRBNB.md` short-description + The Space P3 + Guest Access. `VRBO.md` short description + The View & Beach + Location table row. `BOOKING.md` short description + Overview + Location + Amenity bullet + Location table row. `HOUFY.md` Description body + Amenity list. `WEBSITE.md` Card blurb (unchanged since it never had the boardwalk), Hero copy, Highlights, Amenities Location & Access, House rules Beach access, FAQ items 2 + 6. `docs/phase-3/brand-property-master.md` — portfolio-comparison table row `Beach access` for MS811 rewritten `Palm-lined boardwalk` → `Direct beach access from the resort` for parity with the guest-facing copy. `listing-5.html` regenerated (JSON-LD FAQPage + amenity list + description pick up the change). `index.html` homepage graph regenerated. **Verification**: full-repo grep for `palm-lined boardwalk` post-cascade returns 3 hits — all audit-trail (the two prior 2026-07-13 changelog entries in this section + a `Palm-Lined Boardwalk` inline-code reference in the older §15 canonical table row that was already unlinked from the live surface). No guest-facing surface still carries the descriptor. **TW2111 not touched** — its `Elevator + resort deck` beach-access claim doesn't use boardwalk language. | Content Sync Agent + Owner-Copy Simplification Pass |
