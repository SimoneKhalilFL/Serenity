# Brand + Property Master — Phase 3 Rollup

**Purpose:** Single-page rollup of the brand and property inventory for Phase 3 planning. This is the *distillation* — the canonical detail lives in [`../brand/BRAND_GUIDELINES.md`](../brand/BRAND_GUIDELINES.md), [`../brand/PROPERTY_PORTFOLIO.md`](../brand/PROPERTY_PORTFOLIO.md), and each property's `MASTER.md`. If the two ever conflict, MASTER.md wins.

**Scope:** two properties (TW2111, MS811). Any third property joins here first, before it gets its own listing folder.

**Status:** Living document. Updated as MS811 rebrand progresses and portfolio grows.

---

## 1. StayAtFlorida Brand Positioning

### Master brand identity

- **Name:** StayAtFlorida
- **Tagline:** *Luxury Beachfront Vacation Homes*
- **Homepage eyebrow:** *A Boutique Beachfront Stay Collection* (updated 2026-07-06)
- **Sub-hero copy:** *Owner-hosted, direct-booking condos in Panama City Beach and Destin. Panoramic Gulf views, resort amenities, and a real person answering every email.*
- **Legal footer:** *© 2026 StayAtFlorida — Luxury Beachfront Vacation Homes on Florida's Gulf Coast.*

### Positioning statement (elevator)

> StayAtFlorida is a **boutique collection of owner-hosted luxury beachfront condos on Florida's Gulf Coast** — hand-selected homes in Panama City Beach and Destin, with panoramic Gulf views, resort amenities, and honest direct-booking pricing. Every stay is answered personally by the owner within two hours during business hours. No corporate desk, no OTA service fees, no surprises.

### Voice + tone

- Premium, warm, elegant, clear, and conversion-focused.
- Owner-hosted personality — not corporate hospitality.
- Reads like a boutique-hotel brochure, not a rental agreement.
- Avoids: cheesy beach language, hype, emojis, all-caps, generic phrases like *"dream getaway"*, urgency messaging, floor-number references (TW2111 only), any implication of on-beach concierge service.

### Forbidden strings (grep-enforced)

Full list in [`../brand/BRAND_GUIDELINES.md`](../brand/BRAND_GUIDELINES.md). Highlights:

- ❌ `Serenity Rentals` (legacy brand, retired 2026-07)
- ❌ `Fun in the Sun` (legacy, retired)
- ❌ `21st floor` / `floor 21` / any floor-number reference for TW2111
- ❌ `beach service`, `beach concierge`, `beach setup included` — the only approved phrase is `Complimentary beach chairs and umbrella available in the condo.`
- ❌ Any pseudonym or invented reviewer identity (reverted 2026-07-02 in TW2111 Final Polish).

### Approved CTAs (canonical hierarchy)

Full definition in [`../listings/TW2111/MASTER.md#12`](../listings/TW2111/MASTER.md) §12. Homepage hierarchy:

1. **`Inquire`** — header, site-wide (opens contact modal)
2. **`Explore Signature Properties`** — homepage hero primary (scrolls to `#properties`)
3. **`View Property`** — homepage property card
4. **`Book Direct & Save`** — homepage `Why Book Direct?` section (not the hero)
5. **`Send an Inquiry`** — homepage contact section primary

Property-page hierarchy:

1. **`Check Availability`** — property hero primary *(frozen — never swap for `See Available Dates`)*
2. **`View Photos`** — property hero secondary
3. **`Email to Reserve These Dates`** — price calculator submit
4. **`Email to Book`** — sticky bottom bar (mobile)
5. **`Register with the Resort`** — TW2111 Before-You-Arrive fee button *(links to `tidewaterhoa.com/registration`)*

---

## 2. TW2111 — Twenty First

### Snapshot

| Attribute | Value |
|---|---|
| Property ID | 4 (`config.js` property `id`) |
| Public name | Twenty First |
| Subtitle | *A StayAtFlorida Signature Property* |
| Tagline | *Above the Gulf. Beyond Expectations.* |
| Location | Tidewater Beach Resort, Panama City Beach, Florida |
| Configuration | 3 BR / 3 BA · Sleeps up to 8 |
| Sleeping arrangement | Primary king · Guest queen · Bunk room (2 twin sleepers) · Queen sleeper sofa |
| Base nightly rate | $225 (adjusted by season, $125–$660 range) |
| Cleaning fee | $250 (held after a staged $200 revert 2026-07-06) |
| Tax rate | 12% (Florida DOR) |
| Resort Registration Fee | $54.04 · paid directly to Tidewater HOA · **not** on the price calculator |
| Refundable damage deposit | $300 |
| Direct-site status | **Phase 2 complete — considered frozen pending photo re-shoot** |

### Property description (short — homepage card, 90–110 chars)

> Panoramic Gulf views, sunset balcony, direct beach access, resort amenities, and room for up to 8 guests.

### Property description (medium — meta description, 150–160 chars)

> Book Twenty First by StayAtFlorida, a luxury beachfront condo in Panama City Beach with panoramic Gulf views, private balcony, resort amenities, and room for 8.

### Property description (long — property page body)

Canonical source: [`../listings/TW2111/MASTER.md#14`](../listings/TW2111/MASTER.md) §14 Master Long Description. Not duplicated here — pull from MASTER on every regeneration.

Key rules for the long description:

- Aspirational, sells the *experience*.
- Operational logistics (registration, wristbands, parking mechanics, cleaning turn details) live in Before You Arrive / During Your Stay, **not** in the body.
- Every paragraph reads like a boutique-hotel brochure.
- Final paragraph carries the direct-booking value line (website only — OTAs get this stripped).

### Amenities (grouped, canonical)

Grouped into four canonical categories in Phase 2 Batch 2 (2026-07-02):

**Inside the Condo** — full kitchen · smart TVs · high-speed Wi-Fi · washer & dryer · central A/C · balcony access from living room + primary bedroom · dining for 6.

**Beach Convenience** — complimentary beach chairs and umbrella (in the condo) · beach towels · direct beach access via elevator + resort deck · wristbands included with Resort Registration Fee.

**Resort Amenities** — Gulf-front lagoon pools with hot tubs · indoor heated pool · Roman spa · sauna and steam room · fitness center · restaurant · coffee shop · tiki bar.

**Location & Access** — ~1 mile to Pier Park · ~35 min to ECP Airport · elevator access to beach and parking levels · on-site parking.

Full amenity list with icons: `config.js` `amenities` array for `id: 4`. Every amenity carries an explicit `group` field.

### FAQs (canonical order, from MASTER §22)

Ten items, ordered by inquiry frequency:

1. Is parking included?
2. How do I get to the beach from the condo?
3. What's the cancellation policy?
4. Are beach chairs and an umbrella provided?
5. Are pets allowed?
6. What are the check-in and check-out times?
7. Is the Wi-Fi fast enough for streaming and remote work?
8. How far is Pier Park?
9. What's the closest airport?
10. When is the best time of year to visit?

Full answers: [`../listings/TW2111/MASTER.md#22-website-faq`](../listings/TW2111/MASTER.md).

### Guest profiles (ideal guest / primary personas)

- **Multigenerational family with 2–3 kids.** Parents + grandparents. Values: private bunk room for kids, king suite for grandparents, kitchen for family dinners. High LTV — often books yearly.
- **Two couples on a beach weekend.** Two adult couples splitting the primary and guest king/queen. Values: sunset balcony, coffee shop downstairs, walkable Pier Park.
- **Extended family Thanksgiving / spring break group.** 6–8 guests, week-long stay. Values: full kitchen, three bathrooms, resort amenities for kids/teens.
- **Snowbird transition stay** (shoulder season only). Retired couple staying 2–3 weeks Feb / March. Values: quiet, warm, sunset balcony, easy walk to grocery.

### Photo order (hero carousel — 7 slots, ~35s cycle)

Canonical order from `config.js#heroPhotoOrder` for `id: 4`:

1. `tw-hero-view.png` — Gulf-view living room, wide-angle
2. `tw-balcony-sunset.png` — balcony chairs at golden hour *(digitally styled — flagged in MASTER §21 for real-photo re-shoot)*
3. `tw-balcony-dinner.png` — **RETIRED 2026-07-02** — removed after too-saturated feedback; slot re-filled from `tw-dining-sunset.png`
4. `tw-dining-sunset.png` — dining table with Gulf sunset *(digitally styled — flagged in MASTER §21)*
5. `tw-living-01.png` — living room, mid-day
6. `tw-master-01.png` — primary bedroom
7. `tw-bunk-01.png` — bunk room

*(Note: rotation is 7 slots but slot #3 was retired; effective rotation is 6 photos. Verify against `config.js#heroPhotoOrder` at deploy time — canonical source of truth.)*

Full gallery: 47 photos across 8 categories (Views & Beach 5 · Living Room 5 · Kitchen & Dining 6 · Balcony · Bedrooms · Bathrooms · Resort · Location).

### OTA copy (per-platform — Phase 3 deliverable, not yet drafted)

Currently the OTA listings (`docs/listings/TW2111/AIRBNB.md`, `VRBO.md`, `BOOKING.md`) exist but are stubs. Phase 3 §3.2 fills them per this framework:

- **Title** (32 chars for Airbnb, 80 for VRBO, ~40 for Booking): TBD — see [`ota-update-tracker.md`](./ota-update-tracker.md) for platform character budgets.
- **Description body**: MASTER §14 minus the direct-booking value line + minus any URL to StayAtFlorida.com (OTAs strip these; save a step).
- **First photo**: `tw-hero-view.png` — highest CTR test win from Phase 2 hero carousel work.
- **Amenity checklist**: 100% fill per platform (all three OTAs penalize partial checklists).
- **House rules**: mirror MASTER §17.

### Review highlights (top 10 pull-quotes bank)

*Phase 3 deliverable — currently reviews render as `Verified Airbnb guest` per MASTER §23 reverted policy.* To be extracted from Airbnb + VRBO review dashboards and stored here for use across Website + OTAs + email signature + guides.

Draft placeholder — replace with real quotes:

- *"[TBD — extract from Airbnb dashboard]"*
- *"[TBD — extract from VRBO dashboard]"*

---

## 3. MS811 — Westlight

> **⚠ STATUS BANNER (2026-07-09):** The MS811 property was rebranded from `Majestic Sun 811` (working label) to **`Westlight`** on 2026-07-09. Some `pending` / `TBD` lines in this section were closed during that rebrand and are now sourced from [`../listings/MS811/MASTER.md`](../listings/MS811/MASTER.md) (the SSoT). This planning document is preserved as an audit trail of the pre-rebrand baseline; canonical values below are updated to post-rebrand state. See [`../brand/PROPERTY_PORTFOLIO.md`](../brand/PROPERTY_PORTFOLIO.md) for the retired-name registry.

### Snapshot

| Attribute | Value |
|---|---|
| Property ID | 5 (`config.js` property `id`) |
| Public name | **Westlight** *(rebrand shipped 2026-07-09; retired working label: `Majestic Sun 811`)* |
| Subtitle | *A StayAtFlorida Signature Property* |
| Tagline | **Where Every Evening Ends in Gold** |
| Location | Majestic Sun at Seascape Resort, Miramar Beach, Florida *(operational address only — `Majestic Sun` is the resort/building, not the guest-facing property brand)* |
| Configuration | 2 BR / 2 BA · Sleeps up to 6 |
| Sleeping arrangement | Primary king · Guest queen · Queen sleeper sofa |
| Base nightly rate | $300 (adjusted by season — Phase 3 to add per-day PriceLabs data) |
| Cleaning fee | $250 |
| Tax rate | 12% (Florida DOR) |
| Resort Registration Fee | none — Seascape Resort does not charge a guest registration fee |
| Refundable damage deposit | $300 |
| Direct-site status | **Live — full rebrand shipped 2026-07-09** (`config.js` #5, `listing-5.html`, JSON-LD, WEBSITE.md, homepage card all reflect `Westlight`) |

### Property description (short — homepage card, added 2026-07-06)

> Miramar Beach comfort with Gulf views, resort amenities, beach access, and a relaxing coastal setting.

### Property description (medium — meta description)

**Pending** — Phase 3 §3.1 deliverable. Draft target: 150–160 chars, includes `Miramar Beach`, `Destin`, `Gulf views`, `beachfront condo`, `sleeps 6`.

### Property description (long — property page body)

**Pending rebrand.** Current body is the legacy pre-rebrand text. Canonical rewrite target: [`../listings/MS811/MASTER.md#14`](../listings/MS811/MASTER.md) §14 — currently placeholder-heavy.

The rewrite must:

- Match the TW2111 body voice/tone (Phase 2 baseline).
- Sell Miramar Beach + Destin as the destination distinct from Panama City Beach.
- Mention 8th-floor Gulf views — MS811 *can* mention its floor (no elevator-friction concern here; the floor is a feature, not a liability).
- Sell Seascape Resort's differentiator: boardwalk to beach, championship golf, Seascape Town Center walkable.

### Amenities (grouped — Phase 3 target)

Current MS811 amenities in `config.js` are grouped by legacy labels (`General` / `Kitchen & dining` / `Resort & outdoors`). Phase 3 target: normalize to the four canonical groups TW2111 uses.

**Inside the Condo** — full kitchen · smart TV · high-speed Wi-Fi · washer & dryer · central A/C + heating · laptop-friendly workspace · dining for 6.

**Beach Convenience** — direct beach access via boardwalk · beach towels *(confirm)*.

**Resort Amenities** — Gulf-front outdoor pool · heated indoor pool with cathedral ceilings · multiple hot tubs · fitness center · 50+ resort grills · Seascape championship golf course · tennis + pickleball · bike + paddleboard rentals · fishing at Stewart Lake.

**Location & Access** — walkable Seascape Destin Town Center (Acme Oyster House, Mezcal Cantina, Moo La-La Ice Cream, Village Door live music, Thrills Laser Tag) · minutes to Silver Sands Premium Outlets, Grand Boulevard, Baytowne Wharf · elevator access · covered on-site parking.

### FAQs

**Pending — Phase 3 §3.1 deliverable.** Baseline TW2111 has 10 FAQs (MASTER §22). MS811 rebuild target: same 10-item slot structure, adapted to Destin-area logistics:

1. Is parking included?
2. How do I get to the beach from the condo? *(boardwalk, not elevator like TW2111)*
3. What's the cancellation policy? *(should match TW2111 — 46+/31–45/within 30 days)*
4. Are beach chairs and an umbrella provided? *(confirm — MS811 provides or not?)*
5. Are pets allowed? *(confirm)*
6. What are the check-in and check-out times?
7. Is the Wi-Fi fast enough for streaming?
8. How far is HarborWalk Village / Destin Commons?
9. What's the closest airport? (VPS ~20 min or ECP ~1hr — verify default)
10. When is the best time of year to visit?

### Guest profiles (draft — refine in Phase 3)

- **Golf couples / foursomes.** Seascape has a championship course — MS811 differentiates from TW2111 on this. Values: proximity to golf, walkable dinner.
- **Family with young kids on a walkable resort stay.** Values: boardwalk to beach (no elevator), Seascape Town Center walkable dining, indoor heated pool for shoulder-season stays.
- **Retiree couple avoiding Panama City Beach's spring-break crowd.** Miramar Beach is quieter and more upscale — position MS811 as the *"grown-up beach"*.
- **Destin extended-family week.** Sleeps 6 caps this vs. TW2111's 8 — MS811 is the smaller-group option in the portfolio.

### Photo order (hero carousel — Phase 3 target)

**Pending.** Current MS811 gallery: 57 photos across 12 categories (Living Room 12 · Master Bedroom 4 · Guest Bedroom 3 · Master Bath · Guest Bath 2 · Kitchen 8 · Dining 4 · Balcony 8 · Beach View 2 · Pool 4 · Building 3 · Amenities 3 · More 3).

Hero rotation target (7 slots, same cadence as TW2111):

1. Gulf-view living room (best-in-gallery shot)
2. Balcony with Gulf view
3. Kitchen island with dining beyond
4. Primary bedroom
5. Pool / resort deck
6. Guest bedroom
7. Beach boardwalk / Seascape grounds

Phase 3 deliverable: audit the 57 photos, pick the 7 hero shots, populate `config.js#heroPhotoOrder` for `id: 5`.

### OTA copy (per-platform)

Same framework as TW2111 §2 above — Phase 3 §3.2. Currently OTA stub files exist in `docs/listings/MS811/{AIRBNB,VRBO,BOOKING}.md`.

### Review highlights

*Phase 3 deliverable.* MS811 has ~56 reviews (per homepage "Read 56 more reviews" button). Portfolio-wide DOM shows *"5.0★ average across 69 verified guest reviews"* — MS811 accounts for the majority.

---

## 4. Portfolio-level rollup

### Combined stats (Phase 2 exit baseline)

| Metric | TW2111 | MS811 | Portfolio |
|---|---|---|---|
| Bedrooms | 3 | 2 | 5 total |
| Bathrooms | 3 | 2 | 5 total |
| Max sleeps | 8 | 6 | 14 total |
| Base rate | $225 | $300 | — |
| Seasonal range | $125–$660 | TBD | — |
| Cleaning fee | $250 | $250 | — |
| Reviews (per portfolio homepage) | ~13 (owner-visible) | ~56 (owner-visible) | 69 aggregate, 5.0★ |
| OTAs live on | Airbnb, VRBO | Airbnb, VRBO | 2 channels each |

### Photo library totals

- TW2111: 47 photos across 8 categories.
- MS811: 57 photos across 12 categories.
- Photo-authenticity note: TW2111 has 3 photos flagged as digitally styled composites (MASTER §21) pending a real-photo re-shoot. MS811 photos are all owner-supplied, verified authentic (no §21 flags).

### Cross-property differentiators (to surface in Phase 3 SEO + OTA copy)

The two properties overlap on the "Gulf-front condo" positioning but differ meaningfully. Phase 3 copy should lean into these differences so we don't cannibalize search:

| Dimension | TW2111 (Twenty First) | MS811 (Westlight) |
|---|---|---|
| **City** | Panama City Beach | Miramar Beach / Destin |
| **Best for** | Multigenerational families, larger groups | Golf couples, walkable-resort families, retirees, smaller groups |
| **Beach access** | Elevator + resort deck | Direct beach access from the resort |
| **Resort brand** | Tidewater Beach Resort | Seascape Resort |
| **Signature amenity** | Roman spa + sauna + steam room | Championship golf, tennis + pickleball |
| **Dining nearby** | Pier Park (~1 mi) | Seascape Town Center (walkable) |
| **Airport** | ECP (~35 min) | VPS (~20 min) |
| **Vibe** | Family-first beachfront resort | Grown-up walkable golf-and-beach resort |
| **Price bracket** | Value + volume | Slight premium |

---

## 5. Rules for updating this doc

1. **This is a rollup, not a source.** Never edit content here that contradicts a per-property MASTER.md. Update MASTER.md first, then reflect the change here.
2. **Anything marked *pending* is a Phase 3 §3.1 task.** Fill it as MS811 rebrand progresses.
3. **Photo counts + review counts drift.** Refresh at least once a quarter or after any major photo/review event.
4. **Don't put this file into any content pipeline.** `config.js`, `generate-listing-schema.cjs`, and the OTA-derivative docs pull from per-property MASTER files, not from here. This doc is planning-and-communication only.

---

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-07-06 | Rollup created. StayAtFlorida positioning, TW2111 full snapshot, MS811 snapshot with pending markers, portfolio differentiator table. | Cursor AI Operating System — Phase 3 planning pass |
