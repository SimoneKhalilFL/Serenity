# Westlight — BOOKING.COM

> **Derived from:** [`MASTER.md`](MASTER.md). Never edit this file first.
>
> **Owned by:** [Marketing Director](../../brand/AGENTS.md#8-marketing-director). **Reviewers:** Brand Director, CGO Agent, Content Sync Agent, QA Agent.
>
> **Purpose:** Platform-ready copy for the Westlight Booking.com listing. The owner copies each block into the matching Booking.com extranet editor field. **Cursor never publishes to Booking.com.**
>
> **Platform tone:** Factual, hotel-style. Less experiential than Airbnb / VRBO — front-load facts.
>
> **Live listing URL:** [`https://www.booking.com/hotel/us/deluxe-2-bedroom-beach-front-at-majestic-sun-resort.html`](https://www.booking.com/hotel/us/deluxe-2-bedroom-beach-front-at-majestic-sun-resort.html)
>
> **Status: rebrand-in-place.** The listing is live under a legacy title and URL. This file is not a "plan for a new listing" — it's the paste-ready copy for a rebrand-in-place of the existing live listing, part of Phase 3 initiative #1 (MS811 Westlight rebrand) shipped 2026-07-09. Same rebrand-in-place discipline TW2111 used for initiative #11. See [`../../phase-3/revenue-impact-tracker.md`](../../phase-3/revenue-impact-tracker.md) row #11-MS811.

---

## Current live state *(rebrand-in-place baseline captured 2026-07-09)*

Recorded before any rebrand paste so we have a clean "from → to" comparison. Do NOT edit this section retroactively after paste — it's the audit trail.

| Field | Current live value | Rebrand target |
|---|---|---|
| **Property Title / Name** | `Deluxe 2-Bedroom Beach Front at Majestic Sun Resort` *(legacy — P1 violation on `Deluxe` and `Majestic Sun Resort` as brand lead)* | **`Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach`** *(57 chars — submitted; Booking will normalize middots/hyphens/slashes to spaces on publish per portfolio-level rule)* |
| **URL slug** | `deluxe-2-bedroom-beach-front-at-majestic-sun-resort` | **Stuck** — Booking.com does not allow slug edits on live listings; accepted trade-off (same as TW2111 initiative #11), we rebrand every user-visible copy field instead |
| **Aggregate guest score** | ⚠ verify from extranet after Track A ships — MS811 has some Booking review history (see `config.js#REVIEWS[5]` items #18 Stephanie) but the total count needs live verification | Preserve; grow review count via initiative #44 (post-checkout review-solicitation email) |
| **Review count** | ⚠ verify live count from extranet | Grow to 6+ within 90 days of #44 shipping; parallels TW2111 gap |
| **Category scores** | ⚠ verify live from extranet | Preserve |
| **Owner-response inventory** | ⚠ verify live count | Continue same professional pattern; response cadence covered by initiative #10 |

**What triggered the rebrand:**

1. **`Deluxe` adjective in the title.** BRAND_GUIDELINES rule: *"Adjectives without proof are forbidden — every substantive word in the title is a fact a guest can verify from the description + photos."* `Deluxe` is soft language, no verifiable meaning, pattern-matches to competitor comps we intentionally sit above.
2. **`Majestic Sun Resort` as the noun the title hangs on.** The resort is a location fact, not the brand. The property brand is `Westlight`.
3. **No property-brand differentiator in the title.** The brand is invisible on the Booking.com search tile — a guest cross-shopping from Airbnb (`Westlight · Gulf-Front 2BR`, per initiative #1) or VRBO doesn't see the same brand-prefix identity on Booking.com. Breaks cross-platform recognition.
4. **`Beach Front` (two words)** vs. `Gulf-Front` (hyphenated compound). Booking normalizes the hyphen to a space on publish anyway, but the submitted form should be `Gulf-Front` for consistency with the other three OTAs and for the "front of Gulf, not front of ocean generally" precision.

---

## Property Name — locked ship string *(Phase 3 initiative #1, 2026-07-09)*

**Submitted:** `Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach` *(57 chars, middots + hyphen + slash)*

**Live rendering after Booking normalization (expected):** `Westlight Gulf Front 2BR 2BA Sleeps 6 Miramar Beach` *(51 chars, spaces only)*

**Portfolio-level rule (established 2026-07-08 on TW2111 · applies to Westlight):** Booking.com **normalizes special characters in property names**. Middots (`·` U+00B7), hyphens in compound words (`Gulf-Front` → `Gulf Front`), and forward slashes (`2BR/2BA` → `2BR 2BA`) all get stripped/converted to spaces on publish. This is Booking-specific — Airbnb, VRBO, and Houfy all preserve middots + hyphens verbatim. The **word content** (brand-prefix identity) is intact and identical across all four OTAs; only the **visual rhythm** differs on Booking. Codified in [`../../brand/BRAND_GUIDELINES.md`](../../brand/BRAND_GUIDELINES.md#platform-limits-and-prime-real-estate) → "Booking.com" bullet. **Copy the middot version into the extranet anyway** — if Booking ever loosens the normalization, our ship string is already in the "correct" form.

**Ship rationale:**

- **Brand prefix identity across platforms.** The first 26 characters (`Westlight · Gulf-Front 2BR`) are identical to the Airbnb title (`Westlight · Gulf-Front 2BR`, initiative #1) and the VRBO headline (`Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach`). A guest cross-shopping the brand across Airbnb → VRBO → Booking.com reads the same brand+differentiator every time. Same discipline TW2111 uses on initiative #11.
- **`/2BA` bath count included** — Booking.com is hotel-style; bath count is a stronger filter signal here than on Airbnb / VRBO. Same reasoning TW2111 used to include `/3BA` on its Booking.com property name.
- **`Sleeps 6` retained** — Booking.com's core audience overlaps VRBO's (families, groups booking a whole home), and `Sleeps N` speaks to that "who fits here?" question directly.
- **`Miramar Beach` included in the title itself** — Booking.com surfaces the city on the search-result card but less prominently than Airbnb's tile subtitle. Including the city in the property name reinforces the search-density signal.
- **No `Majestic Sun` in the title.** The resort belongs in the location paragraph of the description, not the property name. The BRAND_GUIDELINES rule holds across every platform.
- **No `Deluxe`, `Luxury`, `Oceanfront`, `Beautiful`** or any other adjective without proof. Every substantive word in the title is a fact a guest can verify from the description + photos.

**Owner sign-off:** 2026-07-09 evening.

**Never use** in the Booking.com property name: floor number (`8th`, `Floor 8`), unit number (`unit 811`, `MS811`, `811`), retired brand names (`Majestic Sun 811`, `Fun in the Sun`, `Serenity`), resort name as lead (`Majestic Sun Resort · Westlight …`), adjectives without proof (`Deluxe`, `Luxury`, `Beautiful`, `Amazing`), all-caps, exclamation marks, price claims (`Best rate`), or channel-steering language (`book direct`).

## Property Name — alternates on file *(not shipping)*

| Candidate | Chars | Note |
|---|---|---|
| `Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach` | 53 | Identical to the VRBO headline. Simpler ship, one string across two platforms. Ship string keeps the `/2BA` variant for Booking.com's hotel-oriented bath-count filter benefit. |
| `Westlight · Gulf-Front 2BR · Panoramic Views · Miramar Beach` | 60 | Differentiator over specs. Swaps `Sleeps 6` for `Panoramic Views`. Ruled out — sleeps count is a filter, panoramic-views is a body-description claim. |
| `Westlight · Gulf-Front 2BR · Miramar Beach FL` | 46 | Adds state suffix, drops sleeps. Tightest. Ruled out — Booking.com already routes searches by state via breadcrumbs; `FL` in the title is redundant. |
| `Deluxe 2-Bedroom Beach Front at Majestic Sun Resort` | 51 | **Deprecated 2026-07-09.** Legacy live title. Used `Deluxe` (soft language, no proof) and `Majestic Sun Resort` as the noun the title hangs on. Retained for reference only. |

---

## ⚠ Editable vs. Booking-controlled fields *(portfolio-level rule established 2026-07-08 on TW2111)*

**Not every field in this document is directly pasteable into the extranet.** Booking.com is the outlier among our OTAs — the platform's content team owns the prose description surface. Hosts submit change requests but do not publish description text directly.

### What you CAN directly edit *(Track A — paste-and-save workflow, like every other OTA)*

- **Property Name** *(fully editable — the single biggest lever)* → §Property Name above
- **Facilities & services amenity checkboxes** → cross-reference with §Amenities below
- **Photos + individual photo captions** → §Photo Captions below
- **House rules** *(check-in / check-out / smoking / pets / parties / quiet hours / min age)* → §Important Information below
- **Beds & rooms configuration** *(bed types + counts, room labels)* → §Accommodation Description below
- **Location fields** *(nearby attractions, distances)* → §Nearby Attractions below
- **Host profile bio + response-time claim** → §Host Profile below

### What requires Booking's content-review workflow *(Track B — submit + wait ~5-10 business days)*

- **The main property description prose** *(the "About this property" section on the guest-facing page)* — Booking's content team owns this. Two submission paths:
  - **Path A:** Extranet → Property → Property page → look for `Request a change to the description` / `Suggest a change` / `Edit description` (name varies by account age + property type)
  - **Path B:** Extranet → Inbox → Compose → subject `Property description update request — [Property ID]` → paste the target text from §Long Description below
- **Short summary paragraph** *(directly beneath property name on search-result cards)* — usually auto-generated from structured data + description; sometimes editable via the same request workflow, sometimes not
- **Star rating** — Booking assigns from verified guest reviews; hosts do not control it
- **Aggregate guest score / review category scores** — auto-computed from guest reviews

### What Booking auto-generates from your structured data

Booking's system pulls from amenity checkboxes, room configs, location fields, and property type to auto-generate chunks of the description. **Perfecting all structured fields is often the highest-ROI path to a better description** — Booking's system re-runs description generation periodically (1-2 weeks typical) and picks up structured-data changes without any prose-review submission needed.

**Practical implication:** the §Short Description and §Long Description sections in this file are **target reference copy for the Track B submission workflow**, NOT paste-ready fields for direct extranet entry. Owner submits them via the review workflow; Booking's content team edits and publishes. Expect ~60-70% of the submitted phrasing to survive Booking's house-style edits — the strategic value is in getting the KEY facts (Gulf-front, 2BR/2BA, Sleeps 6, panoramic views, owner-hosted, tenure) onto the page, not in getting the exact prose verbatim.

---

## Short Description (~350 chars) — REFERENCE / submit-for-review

Booking.com displays this as the summary paragraph beneath the property name on the search-result card and at the top of the property page. **NOT directly editable in most extranet flows** — submit via the description-review workflow above. Front-load the differentiator, keep it factual.

```
Westlight is a 2-bedroom, 2-bath Gulf-front condo in Miramar Beach with panoramic emerald-water views from a private beachfront balcony. Direct beach access via a palm-lined boardwalk, full Seascape resort amenities including a Gulf-front pool and indoor heated pool, and complimentary beach chairs and umbrella in the condo. Sleeps up to 6. Owner-hosted.
```

*(Character count: 351 / ~500 typical Booking.com short-description budget.)*

## Long Description (~380 words) — REFERENCE / submit-for-review

### Overview

Westlight is a Gulf-front 2-bedroom, 2-bath condo in Miramar Beach, Florida, located within the Majestic Sun building at Seascape Resort. The condo sleeps up to 6 guests and features panoramic Gulf views from a private beachfront balcony, direct beach access via a palm-lined boardwalk from the resort deck, and full Seascape resort amenities.

### Accommodation

The condo offers two separate sleeping areas: a primary bedroom with a king bed and Gulf-facing windows, and a guest bedroom with a queen bed. A queen sleeper sofa in the living room accommodates one to two additional guests. In-unit amenities include a full kitchen with dishwasher, in-unit washer and dryer, smart TVs with streaming in the living room and every bedroom, high-speed Wi-Fi throughout, and a laptop-friendly workspace.

### Location

Miramar Beach on Florida's Emerald Coast, in the Destin area. Direct beach access via a palm-lined boardwalk from the resort. Seascape Town Center (coffee, casual dining, shopping) is a short walk from the front door. Whale's Tale Beach Bar & Grill is walkable along the beach. Silver Sands Premium Outlets, the Village of Baytowne Wharf, and Henderson Beach State Park are all a short drive. Destin–Fort Walton Beach Regional Airport (VPS) is approximately 15 minutes by car.

### Amenities

- Panoramic Gulf views
- Private beachfront balcony (west-facing)
- Direct beach access via palm-lined boardwalk
- Complimentary beach chairs and umbrella in the condo
- Full kitchen with dishwasher
- Washer and dryer in unit
- Wi-Fi throughout
- Smart TVs with streaming
- Gulf-front outdoor pool
- Indoor heated pool with cathedral ceilings
- Hot tubs
- Full fitness center
- Tennis and pickleball courts (shared / resort)
- Championship golf course (Seascape Golf Club, shared / resort)
- Elevator access
- Covered on-site parking

## Accommodation Description

| Field | Value |
|---|---|
| Property type | Beachfront condominium |
| Bedrooms | 2 |
| Bathrooms | 2 |
| Sleeps | Up to 6 |
| Bed configuration | 1 king + 1 queen + 1 queen sleeper sofa |
| Floor level | Upper floors |
| Balcony / terrace | Yes — private, Gulf-facing (west) |
| View | Panoramic Gulf |
| Air conditioning | Yes |
| Heating | Yes |

## Host Profile

Booking.com displays this in the `About the host` section of the property page. Keep it concise, factual, and free of channel-steering language. Do not reference OTA host badges (Airbnb Superhost, VRBO Premier Host) by name here — Booking.com's content-moderation flags cross-platform references as potential channel steering.

```
Westlight is part of StayAtFlorida, an owner-hosted collection of Gulf-front vacation homes on Florida's Emerald Coast. Simone, the owner, personally manages every booking and typically replies to guest messages within 2 hours. 6+ years of hosting on Florida's Gulf Coast.
```

*(Rationale for the `6+ years hosting` line: it's the same verified tenure surfaced on the direct site via the Airbnb Superhost badge, but stated as a general hospitality fact rather than a cross-OTA badge reference. Booking.com allows tenure claims; it does not allow direct references to competing OTAs' badge systems.)*

## Nearby Attractions

| Attraction | Distance |
|---|---|
| Beach | Direct access via palm-lined boardwalk from the resort |
| Seascape Town Center (coffee, dining, shopping) | Short walk |
| Whale's Tale Beach Bar & Grill | Short walk via beach |
| Publix (Silver Sands Premium Outlets) | ~5 minutes by car |
| Silver Sands Premium Outlets | ~5 minutes by car |
| Village of Baytowne Wharf | ~15 minutes by car |
| Henderson Beach State Park | ~15 minutes by car |
| Destin Harbor / HarborWalk Village | ~15 minutes by car |
| Big Kahuna's Water & Adventure Park | ~10 minutes by car |
| VPS (Destin–Fort Walton Beach Regional Airport) | ~15 minutes by car |

## Important Information

```
Check-in: 4:00 PM. Check-out: 10:00 AM.
Primary booker must be 25 or older. Maximum 6 guests.
No smoking, no vaping, no pets, no parties.
Quiet hours per HOA.

Cancellation policy: See Booking.com's rate policy for exact terms. Refund windows are set at the rate-tier level.

Complimentary beach chairs and umbrella are available in the condo for use during your stay. Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors, if you prefer a full setup.

Covered on-site parking is included.
```

## Photo Captions

Booking captions ~150 chars each. Factual, no lifestyle framing. Updated 2026-07-09 for the Westlight rebrand — full 57-photo library captioned in MASTER §18.

**Recommended Booking.com photo order** (first 14 slots — the "above the fold" carousel):

| Slot | File | Caption |
|---|---|---|
| 1 | `ms-01-gulf-balcony.jpg` | Private Gulf-front balcony |
| 2 | `ms-01-living-room.jpg` | Living room with Gulf view |
| 3 | `ms-02-master-bedroom.jpg` | Primary bedroom with king bed |
| 4 | `ms-01-guest-bedroom.jpg` | Guest bedroom with queen bed |
| 5 | `ms-01-kitchen.jpg` | Full kitchen |
| 6 | `ms-02-dining-room.jpg` | Dining area with Gulf view |
| 7 | `ms-01-master-bath.jpg` | Primary bathroom |
| 8 | `ms-01-guest-bath.jpg` | Guest bathroom |
| 9 | `ms-10-sunset-view.jpg` | Sunset from the balcony |
| 10 | `ms-beach-view.jpg` | Beach access and Gulf view |
| 11 | `ms-01-pool.jpg` | Gulf-front outdoor pool |
| 12 | `ms-08-pool-indoor.jpg` | Indoor heated pool |
| 13 | `ms-02-hottub.jpg` | Resort hot tub |
| 14 | `ms-02-gym.jpg` | Fitness center |

Slots 15–57: remaining photos in the order they appear in `config.js#properties[id=5].images`, using MASTER §18 short captions.

**Booking photo order:** exterior/view → living room → bedrooms → kitchen → dining → bathrooms → sunset/lifestyle → beach → resort amenities.

---

## Booking.com-specific rules

- **Description body is not directly editable by the host.** Booking.com's content team owns the prose description surface. Hosts submit change requests via the extranet's description-edit workflow (Path A) or Booking Inbox (Path B) — see § "Editable vs. Booking-controlled fields" above. Expect ~5-10 business day turnaround, and expect Booking to edit ~30-40% of the submitted phrasing to fit their house style. **Do not treat the §Long Description block in this file as a directly-pasteable field like Airbnb/VRBO/Houfy** — it's target reference copy for the submission workflow. Same portfolio-level rule as TW2111.
- **Structured-data completeness is the highest-ROI description lever.** Booking auto-generates description chunks from amenity checkboxes, bed configurations, room types, property type, and location fields. Perfecting all structured inputs improves the auto-description without any prose-review submission needed — the auto-description re-runs every 1-2 weeks and picks up structured changes automatically.
- **Tone is factual and hotel-style.** Less "boutique-hotel warmth," more "concise-informative." Booking.com's guest base skews toward business travelers, families booking cross-market comparisons, and international travelers — copy that reads too experiential loses conviction against the "clean, comfortable, close to the beach" hotel-style copy the platform's algorithm favors.
- **Brand-prefix identity applies to the property name.** The first 26 characters of the Booking.com Property Name must be identical to the Airbnb title + VRBO headline. See [`../../brand/BRAND_GUIDELINES.md`](../../brand/BRAND_GUIDELINES.md) § "OTA platform titles → Brand prefix identity". Current locked prefix (2026-07-09): `Westlight · Gulf-Front 2BR`.
- **Middot separator convention** (`·` U+00B7) — same as Airbnb + VRBO + Houfy. Do not substitute `•`, `.`, `-`, or `|`. **Note:** Booking's live-rendering normalization strips middots (`·` → space), hyphens in compound words (`Gulf-Front` → `Gulf Front`), and forward slashes (`2BR/2BA` → `2BR 2BA`) — established 2026-07-08 on TW2111. Word content is preserved; visual rhythm reverts to plain spaces. Continue to submit the middot version anyway — future property-name policy loosening may make the special chars stick.
- **Never mention the direct-site URL (`stayatflorida.com`), `book direct`, or fee-comparison messaging.** Booking.com's marketplace policy flags channel-steering language, and violations can result in listing suspension. `StayAtFlorida` as a brand name (as in the Host Profile) is fine; the URL is not.
- **Never reference competing OTA badges by name** (`Airbnb Superhost`, `VRBO Premier Host`, `Airbnb`, `VRBO`, `Airbnb Plus`, etc.). Cross-OTA references trip Booking.com's content-moderation flags. Host tenure and response speed are safe alternatives — surface those as general hospitality facts.
- **Never promise "free cancellation"** unless the actual rate policy allows it. Refund windows are set at the rate-tier level in the extranet; the description must not contradict them.
- **Never invent a star rating.** Booking.com assigns its own display rating from verified guest reviews — do not claim a rating we didn't earn on the platform.
- **Keep amenity claims strictly aligned with Booking's amenity checkbox.** Discrepancies between the description body and the checkbox amenity list trigger review flags.
- **URL slug trade-off.** Booking.com does not allow slug edits on live listings. The URL will retain the legacy `deluxe-2-bedroom-beach-front-at-majestic-sun-resort` string even after the rebrand ships. Accepted trade-off per owner directive 2026-07-09 — we rebrand every user-visible copy field (title, description, photo captions, host profile) but accept that the URL string cannot be changed without retiring the listing and republishing (which would forfeit the existing review history + aggregate score). Same rebrand-in-place discipline TW2111 used.
- **Legacy title `Deluxe 2-Bedroom Beach Front at Majestic Sun Resort` retired 2026-07-09.** Existing reviews stay attached to the same listing.
