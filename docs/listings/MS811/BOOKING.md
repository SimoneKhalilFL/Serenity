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
Welcome to Westlight, a 2-bedroom, 2-bath Gulf-front condo in Miramar Beach directly overlooking the Gulf of Mexico. Panoramic Gulf views from a private beachfront balcony, direct beach access, full Seascape resort amenities including a Gulf-front pool and indoor heated pool, and complimentary beach chairs and umbrella in the condo. Sleeps up to 6. Owner-hosted.
```

*(Character count: 386 / ~500 typical Booking.com short-description budget.)*

## Long Description (~380 words) — REFERENCE / submit-for-review

### Overview

Welcome to Westlight, a Gulf-front 2-bedroom, 2-bath condo in Miramar Beach, Florida, located within the Majestic Sun building at Seascape Resort. Westlight sits directly overlooking the Gulf of Mexico and sleeps up to 6 guests, with panoramic Gulf views from a private beachfront balcony, direct beach access from the resort, and full Seascape resort amenities. Westlight was created for guests who want the comforts of home paired with a true beachfront experience on the Emerald Coast.

### Accommodation

The condo offers two separate sleeping areas: a primary bedroom with a king bed and Gulf-facing windows, and a guest bedroom with a queen bed. A queen sleeper sofa in the living room accommodates one to two additional guests. In-unit amenities include a full kitchen with dishwasher, in-unit washer and dryer, Smart TVs with popular streaming apps available in the living room and every bedroom, high-speed Wi-Fi throughout, and a laptop-friendly workspace.

### Location

Miramar Beach on Florida's Emerald Coast, in the Destin area. Direct beach access from the resort. Seascape Town Center (coffee, casual dining, shopping) is a short walk from the front door. Whale's Tale Beach Bar & Grill is walkable along the beach. Silver Sands Premium Outlets (~1 mile east), the Village of Baytowne Wharf, and Henderson Beach State Park are all a short drive. Publix at Grand Boulevard is the nearest grocery (~5 min drive); Winn-Dixie on Poinciana Blvd is closer (~1 mile). Destin–Fort Walton Beach Airport (VPS) is approximately 40 minutes (24 miles) by car; Northwest Florida Beaches International Airport (ECP) is approximately 1 hour (38 miles).

### Amenities

- Panoramic Gulf views
- Private beachfront balcony (west-facing)
- Direct beach access
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
- Seascape Golf Club (9-hole, par 35 — shared / resort)
- Elevator access
- Complimentary covered parking for registered guests

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
| Beach | Direct access from the resort |
| Seascape Town Center (coffee, dining, shopping) | Short walk |
| Whale's Tale Beach Bar & Grill | Short walk via beach |
| Publix at Grand Boulevard (725 Grand Blvd) | ~5 minutes by car |
| Winn-Dixie (Poinciana Blvd) | ~1 mile |
| Silver Sands Premium Outlets | ~1 mile east |
| Village of Baytowne Wharf | ~15 minutes by car |
| Henderson Beach State Park | ~15 minutes by car |
| Destin Harbor / HarborWalk Village | ~15 minutes by car |
| Big Kahuna's Water & Adventure Park | ~10 minutes by car |
| VPS (Destin–Fort Walton Beach Airport) | ~40 minutes by car (24 miles) |
| ECP (Northwest Florida Beaches International Airport) | ~1 hour by car (38 miles) |

## Important Information

```
Check-in: 4:00 PM. Check-out: 10:00 AM.
Primary booker must be 25 or older. Maximum 6 guests.
No smoking, no vaping, no pets, no parties.
Quiet hours per HOA.

Cancellation policy: See Booking.com's rate policy for exact terms. Refund windows are set at the rate-tier level.

Complimentary beach chairs and umbrella are available in the condo for use during your stay. Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors, if you prefer a full setup.

Complimentary covered parking is included for registered guests.
```

## Photo Captions

**Max ~250 chars per photo.** Booking.com captions match the guest-facing caption column in `MASTER.md §18` verbatim. Booking.com photo captions are a **directly editable extranet field** (Track A — one of the few surfaces on Booking that hosts control fully). Updated 2026-07-10 with the owner-final 46-slot Westlight photo library.

**Recommended cover image:** `ms-09-living-room.png` (slot #13) — matches `config.js#coverImage` as of 2026-07-10. On Booking's Extranet, set this file as the "main photo" even though it appears at slot #13 in the upload order. Slot #1 (`MS-FullView-1.png`) still leads the on-page carousel.

**Full Booking.com photo upload order** (40 published slots; 6 slots owner-removed):

| Slot | File | Caption |
|---:|---|---|
| 1 | `MS-FullView-1.png` | Floor-to-ceiling Gulf views welcome you the moment you walk in. |
| 2 | `MS-Balcony-1.png` | Start every morning with coffee overlooking the Emerald Coast. |
| 3 | `MS_Balcony_Dinner_Setup.png` | Enjoy dinner on your private balcony while the sun sets over the Gulf. |
| 4 | `MS_Balcony_Coffee_person.png` | A peaceful spot for sunrise coffee or an afternoon drink with an endless view. |
| 5 | `MS-MasterBedroomFuture-2.png` | Wake up just steps from the Gulf in the comfortable king primary suite. |
| 6 | `MS-MasterBath-1.png` | Spacious primary bathroom with plenty of room to get ready for the beach. |
| 7 | `ms-01-building-view.jpg` | Majestic Sun at Seascape Resort sits directly across from one of the Emerald Coast's most beautiful beaches. |
| 8 | `MS-GuestBedroom-1.png` | Cozy queen guest bedroom designed for a restful night's sleep. |
| 9 | `MS_Guest_Bath.png` | Second full bathroom conveniently located next to the guest bedroom. |
| 10 | `MS-Kitchen-1.png` | Fully equipped kitchen with everything you need for family meals or quick breakfasts. |
| 11 | `MS_dinner_setup.png` | Open-concept living space designed for gathering after a day at the beach. |
| 12 | `MS_Dinner_sunset.png` | Golden hour fills the living room with unforgettable Gulf sunsets. |
| 13 | `ms-09-living-room.png` | Comfortable seating with breathtaking Gulf views from almost every seat. |
| 14 | `ms-08-pool-indoor.jpg` | Enjoy the indoor heated pool year-round, rain or shine. |
| 15 | `MS-DiningRoom-3.png` | Plenty of space for everyone to relax, dine, and enjoy the view together. |
| 16 | `ms-02-kitchen.jpg` | The open kitchen keeps everyone connected while meals are prepared. |
| 17 | `MS-LivingRoom-5.png` | Relax with smart TV streaming after a day on the beach. |
| 18 | `ms-01-kitchen.jpg` | Breakfast bar seating makes casual meals easy. |
| 19 | *(entry detail — owner-removed 2026-07-10)* | — |
| 20 | `ms-01-pool.jpg` | Beautiful Gulf-front resort pool just steps from the beach. |
| 21 | *(entry foyer — owner-removed 2026-07-10)* | — |
| 22 | `ms-02-pickleball.jpg` | Enjoy complimentary tennis and pickleball courts within the resort. |
| 23 | *(hallway — owner-removed)* | — |
| 24 | `ms-01-laundry.jpg` | Full-size washer and dryer inside the condo for your convenience. |
| 25 | `ms-beach-view.jpg` | Sugar-white sand and emerald water are just an elevator ride away. |
| 26 | `MS-Balcony-Future-5.png` | Relax on your private balcony with panoramic Gulf views. |
| 27 | `ms-10-sunset-view.jpg` | End every day with spectacular sunsets over the Gulf of Mexico. |
| 28 | `MS-MasterBedroomFuture-1.png` | Comfortable king bedroom with a relaxing coastal design. |
| 29 | `MS-GuestBedroom-2.png` | Bright and inviting guest bedroom with plenty of storage. |
| 30 | `MS-GuestBedroom-3.png` | Clean, modern bathroom stocked and ready for your stay. |
| 31 | `ms-01-outdoor-lake.jpg` | Views of the resort and surrounding lagoon from the property. |
| 32 | *(front door — owner-removed)* | — |
| 33 | `ms-01-pool-outdoor.jpg` | Multiple pools and resort amenities for every season. |
| 34 | *(owner-removed 2026-07-10 — duplicate of slot #20)* | — |
| 35 | `ms-02-hottub.jpg` | Relax in the hot tub after a day in the sun. |
| 36 | *(beach sunset drone — owner-removed 2026-07-10)* | — |
| 37 | `ms-02-gym.jpg` | Stay active with the resort's well-equipped fitness center. |
| 38 | `MS_Coffee_cup.png` | Fresh coffee is always within reach. |
| 39 | `ms-06-kitchen.jpg` | Kitchen includes everyday essentials for easy breakfasts. |
| 40 | *(local map — owner-removed)* | — |
| 41 | `MS-LivingRoom-7.png` | Relax in comfort while enjoying the Gulf views. |
| 42 | `ms-01-beachy-decor.jpg` | Coastal-inspired décor throughout the condo. |
| 43 | `ms-07-kitchen.jpg` | Kitchen includes an air fryer for quick and easy meals. |
| 44 | `ms-08-kitchen.jpg` | Perfect for preparing dinner while enjoying a day at the beach. |
| 45 | `ms-11-living-room.png` | The perfect place to unwind after sunset. |
| 46 | `MS-FullView-2.png` | Open, bright, and designed around the stunning Gulf view. |
| 47 | `MS-DiningRoom-2.png` | Family-style dining with a view of the Gulf. |
| 48 | `MS-DiningRoom-4.png` | Coastal-inspired dining space set for meals with family. |
| 49 | `MS-DiningRoom-5.png` | Bright dining area ready to gather everyone together. |
| 50 | `MS-LivingRoom-4.png` | Additional living-room angle showcasing the coastal flow. |
| 51 | `MS-MasterBedroomFuture-3.png` | Peaceful primary bedroom detail with a coastal touch. |
| 52 | `MS-MasterBedroomFuture-4.png` | King primary bedroom with warm, restful styling. |
| 53 | `MS_Balcony_coffee.png` | The balcony coffee setup ready for a slow morning. |
| 54 | `ms-06-gulf-balcony.png` | Another angle of the private Gulf-front balcony. |
| 55 | `ms-08-living-room.png` | Living room bathed in warm sunset light. |
| 56 | `ms-10-living-room.png` | Living-room detail from another comfortable seating angle. |
| 57 | `ms-02-building-view.jpg` | The resort setting on Scenic Gulf Drive. |
| 58 | `ms-05-kitchen.jpg` | Kitchen prep area with everyday essentials. |
| 59 | `ms-01-living-room.jpg` | Living room with Gulf-facing sightlines — the everyday gathering space. |

**Booking photo order:** view/lifestyle → balcony → primary bedroom & bath → building setting → guest bedroom → kitchen → dining → living → pool → resort amenities → beach & sunset → detail shots. Booking's algorithm rewards a strong first 4 photos on search-result cards; slot #1 (living-room-with-Gulf) is deliberately conversion-optimized. Bonus slots #47–#59 are additional room-variant frames — upload these after the primary 46 in the same slot order to preserve the conversion-optimized top-of-carousel.

---

## Booking.com-specific rules

- **Description body is not directly editable by the host.** Booking.com's content team owns the prose description surface. Hosts submit change requests via the extranet's description-edit workflow (Path A) or Booking Inbox (Path B) — see § "Editable vs. Booking-controlled fields" above. Expect ~5-10 business day turnaround, and expect Booking to edit ~30-40% of the submitted phrasing to fit their house style. **Do not treat the §Long Description block in this file as a directly-pasteable field like Airbnb/VRBO/Houfy** — it's target reference copy for the submission workflow. Same portfolio-level rule as TW2111.
- **Structured-data completeness is the highest-ROI description lever.** Booking auto-generates description chunks from amenity checkboxes, bed configurations, room types, property type, and location fields. Perfecting all structured inputs improves the auto-description without any prose-review submission needed — the auto-description re-runs every 1-2 weeks and picks up structured changes automatically.
- **Tone is factual and hotel-style.** Less "boutique-hotel warmth," more "concise-informative." Booking.com's guest base skews toward business travelers, families booking cross-market comparisons, and international travelers — copy that reads too experiential loses conviction against the "clean, comfortable, close to the beach" hotel-style copy the platform's algorithm favors.
- **Brand-prefix identity applies to the property name.** The first 26 characters of the Booking.com Property Name must be identical to the Airbnb title + VRBO headline. See [`../../brand/BRAND_GUIDELINES.md`](../../brand/BRAND_GUIDELINES.md) § "OTA platform titles → Brand prefix identity". Current locked prefix (2026-07-09): `Westlight · Gulf-Front 2BR`.
- **Middot separator convention** (`·` U+00B7) — same as Airbnb + VRBO + Houfy. Do not substitute `•`, `.`, `-`, or `|`. **Note:** Booking's live-rendering normalization strips middots (`·` → space), hyphens in compound words (`Gulf-Front` → `Gulf Front`), and forward slashes (`2BR/2BA` → `2BR 2BA`) — established 2026-07-08 on TW2111. Word content is preserved; visual rhythm reverts to plain spaces. Continue to submit the middot version anyway — future property-name policy loosening may make the special chars stick.
- **Never mention the direct-site URL (`stayatflorida.com`), `book direct`, or fee-comparison messaging.** Booking.com's marketplace policy flags channel-steering language, and violations can result in listing suspension. `StayAtFlorida` as a brand name (as in the Host Profile) is fine; the URL is not.
- **Never reference competing OTA badges by name** (`Airbnb Superhost`, `VRBO Premier Host`, `Airbnb`, `VRBO`, `Airbnb Plus`, etc.). Cross-OTA references trip Booking.com's content-moderation flags. Host tenure and response speed are safe alternatives — surface those as general hospitality facts.
- **Rate plans (locked 2026-08-26 evening, hotel `14120155`).** PriceLabs writes only **Non-refundable** (`62977437`). **Standard -30D** (`54557813`) stays **10% more expensive than Non-refundable**. Weekly (`54557815`) is 8% cheaper than Standard. Monthly (`54563856`) is **20% cheaper than Non-refundable**. Monthly is derived on Booking.com, so it can price under the PriceLabs $250 min (e.g. $300 NR → $240 Monthly). Do not set Standard to “Mapped from PriceLabs” or zero out the 10% — Booking.com must keep Standard derived from Non-refundable.
- **PriceLabs child (locked 2026-08-27 evening, `14120155___1412015501`).** Inherited from Airbnb parent: min/base/max **$250 / $300 / $750**, last-minute off, min stay 2 / 2, **no Far Out Premium**, **no Safety Minimum**. Moon Crush / Jeepalooza nights **$500–$562** (not listing max; Booking.com Standard can still add ~10%). Non-holiday **Nov 1–Mar 6** nights **$180–$210** (winter seasonal min −28% under the $250 listing floor). Thanksgiving / Christmas / NYE / NewYear Jan 1–4 stay premium. SpringBreak starts **Mar 7**.
- **Never promise "free cancellation"** unless the actual rate policy allows it. Refund windows are set at the rate-tier level in the extranet; the description must not contradict them.
- **Never invent a star rating.** Booking.com assigns its own display rating from verified guest reviews — do not claim a rating we didn't earn on the platform.
- **Keep amenity claims strictly aligned with Booking's amenity checkbox.** Discrepancies between the description body and the checkbox amenity list trigger review flags.
- **URL slug trade-off.** Booking.com does not allow slug edits on live listings. The URL will retain the legacy `deluxe-2-bedroom-beach-front-at-majestic-sun-resort` string even after the rebrand ships. Accepted trade-off per owner directive 2026-07-09 — we rebrand every user-visible copy field (title, description, photo captions, host profile) but accept that the URL string cannot be changed without retiring the listing and republishing (which would forfeit the existing review history + aggregate score). Same rebrand-in-place discipline TW2111 used.
- **Legacy title `Deluxe 2-Bedroom Beach Front at Majestic Sun Resort` retired 2026-07-09.** Existing reviews stay attached to the same listing.
