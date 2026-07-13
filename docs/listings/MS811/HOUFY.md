# Westlight — HOUFY

> **Derived from:** [`MASTER.md`](MASTER.md). Never edit this file first.
>
> **Owned by:** [Marketing Director](../../brand/AGENTS.md#8-marketing-director). **Reviewers:** Brand Director, CGO Agent, Content Sync Agent, QA Agent.
>
> **Purpose:** Platform-ready copy for the Westlight Houfy listing. The owner copies each block into the matching Houfy editor field. **Cursor never publishes to Houfy.**
>
> **Platform tone:** Boutique-warm, closer to the direct site than to Booking.com's hotel-style. Houfy is an owner-direct platform (no OTA commission), so the audience expects an owner voice — not a corporate one.
>
> **Live listing URL:** ⚠ verify — the pre-rebrand MS811 listing on Houfy is under a legacy slug (`Serenity at Majestic Sun` was flagged as still-live P1 violation in the TW2111 rebrand audit, 2026-07-07). Retarget the slug to `/h/westlight` as part of Track A of this rebrand (Houfy allows slug edits, unlike Booking.com — see the TW2111 rebrand precedent where `/lodging/fun-in-the-sun/` was retargeted to `/h/twentyfirst`).
>
> **Status: rebrand-in-place (new file · 2026-07-09).** MS811 HOUFY.md did not previously exist — Houfy is the fourth OTA in scope for the MS811 rebrand pass. This is a fresh authoring of paste-ready copy for a rebrand-in-place of the existing live listing (which currently displays under the legacy `Serenity at Majestic Sun` label per the TW2111 2026-07-07 audit trail).

---

## Current live state *(pre-rebrand baseline — ⚠ verify live before Track A ships)*

| Field | Legacy value *(pre-rebrand — flagged 2026-07-07 during TW2111 audit)* | Rebrand target |
|---|---|---|
| **Title / Listing Name field** | `Serenity at Majestic Sun` *(P1 forbidden-string violation — `Serenity` is on the forbidden-adjective list per BRAND_GUIDELINES; property is not `Serenity`, it is `Westlight`)* | **`Westlight · Gulf-Front 2BR · Miramar Beach`** *(46 chars — brand-prefix identity restored, matches Airbnb + VRBO + Booking prefix)* |
| **Description title (H3)** | ⚠ verify live — likely also uses `Serenity` legacy branding | **`Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach`** *(57 chars — Booking.com/Houfy variant with `/2BA` bath count)* |
| **URL slug** | ⚠ verify live — legacy Houfy MS811 slug unknown; likely `/lodging/serenity-at-majestic-sun/` or similar | **Retarget to `/h/westlight`** (Houfy allows slug edits — see TW2111 precedent 2026-07-07 evening) |
| **Description body** | ⚠ verify live copy; likely legacy `Serenity` / `Majestic Sun`-lead prose | Full replace with the paste-ready copy in §Overview below |
| **Native review count** | ⚠ verify live count — likely 0 Houfy-native (MS811 reviews on file in `config.js#REVIEWS[5]` are 59 total across Airbnb + VRBO + Booking, no Houfy source attribution) | Houfy imports Airbnb + VRBO reviews platform-side (see TW2111 evidence 2026-07-07); expect ~4 imported reviews to surface after slug retarget |
| **Host tenure line** | `6 years hosting on Houfy` *(host card, auto-rendered by Houfy)* | Preserve — the host-card tenure line is unchanged |

**What triggered the rebrand:**

1. **`Serenity at Majestic Sun` legacy brand.** Priority 1 forbidden-string violation — `Serenity` is on the BRAND_GUIDELINES forbidden-adjective list (generic marketing prose that erases property specificity); the property is not `Serenity`, it is `Westlight`. Same violation class as TW2111's pre-rebrand `Fun in the Sun` Houfy title.
2. **`Majestic Sun` as guest-facing brand.** Per the 2026-07-09 rebrand directive: `Majestic Sun` is the resort/building operational label, used only in address, resort-amenities context, driving directions, and legal/HOA operational surfaces. Never as the guest-facing property brand.
3. **No brand-prefix identity.** Guests cross-shopping the brand across Airbnb, VRBO, Booking.com, and Houfy will see `Westlight · Gulf-Front 2BR` on three platforms and `Serenity at Majestic Sun` on Houfy. Reads as a different property. Kills conversion.
4. **Zero Houfy-native reviews** despite an active listing. Content-parity gap identical to the TW2111 Houfy pattern — expected to resolve slowly via Houfy's OTA-review-import feature after the slug retarget lands.

---

## Title — locked ship string *(Phase 3 initiative #1, 2026-07-09)*

**Houfy has two distinct title-editing surfaces** (verified from TW2111's 2026-07-08 Houfy Listing Name field discovery):

**Listing Name field (H1 — what Google indexes and Houfy search tiles surface):**

**`Westlight · Gulf-Front 2BR · Miramar Beach`** *(46 chars — matches Airbnb-title tail-agnostic form + city suffix)*

**Description title / H3 (paste at the top of the Overview description body):**

**`Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach`** *(57 chars — Booking.com/Houfy variant with `/2BA` bath count)*

**Copy each into its matching Houfy dashboard field.** Middots are `·` (U+00B7), not periods.

**Ship rationale:**

- **Two-title strategy inherited from TW2111.** Houfy has both a Listing Name (H1) field and a description-body H3 title. Both need Westlight branding; they can carry slightly different tail extensions because they render in different contexts (search tiles vs. property page hero).
- **Listing Name H1 (46 chars, no bath count, no sleeps tail).** Optimized for search-tile rendering — matches the Airbnb title style but with a `Miramar Beach` city suffix because Houfy does not surface city as prominently as Airbnb does.
- **Description H3 (57 chars, `/2BA` bath count + `Sleeps 6`).** Optimized for the property-page hero, matches the Booking.com property-name variant character-for-character. Two of four MS811 platforms now share the `/2BA` extension (Booking.com + Houfy); the other two (Airbnb + VRBO) keep the simpler bedroom-only or bedroom+sleeps tail.
- **First 26 characters (`Westlight · Gulf-Front 2BR`) match Airbnb + VRBO + Booking.com** character-for-character (brand-prefix identity per [`../../brand/BRAND_GUIDELINES.md`](../../brand/BRAND_GUIDELINES.md) § "OTA platform titles → Brand prefix identity"). A guest cross-shopping the brand across all four platforms reads the same brand+differentiator every time.
- **No `Serenity`, no `Majestic Sun` as lead, no `unit 811`, no `luxury` adjective, no `Deluxe`, no all-caps.** Full compliance with the BRAND_GUIDELINES `OTA platform titles → Never in an OTA title` list.

**Owner sign-off:** 2026-07-09 evening.

## Title — alternates on file *(not shipping)*

| Candidate | Chars | Note |
|---|---|---|
| `Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach` | 53 | VRBO-identical variant (no bath count). Reasonable alternate for the description H3 if the `/2BA` version doesn't render well. |
| `Westlight · Gulf-Front 2BR/2BA · Miramar Beach` | 47 | Bath count + city, drops `Sleeps 6`. Ruled out — Houfy leads with guest count in its search UI, `Sleeps N` is a valuable filter signal for the description H3. |
| `Westlight — Gulf-Front 2BR on the Emerald Coast` | 47 | Em-dash instead of middot, swaps city for regional signal. Ruled out — regional signal loses direct-search precision for `Miramar Beach`. Breaks the middot-separator convention locked across platforms. |
| `Serenity at Majestic Sun` | 24 | **Legacy live title. Deprecated 2026-07-09.** P1 forbidden-string violation. Retained only as the pre-rebrand baseline audit trail. |

---

## Overview — paste-ready description body

The following is the paste-ready description body for the Houfy dashboard's Overview field. Version-controlled here so any future rewrite has a clean starting point. Uses `–` (en-dash) in the H3 title only for Houfy's parser consistency with the TW2111 precedent (Houfy renders both en-dash and middot variants; the en-dash produced cleaner rendering on the TW2111 live page).

**Overall character count:** ~4,150 chars *(inside the 2,000-char Overview field only if Houfy has increased that limit since TW2111's paste — ⚠ verify current field limit before paste. If still 2,000, split into Overview + Additional Details sections as TW2111 did.)*

```
Westlight – Gulf-Front 2BR Retreat in Miramar Beach

Welcome to Westlight, where every evening ends in gold. Wake up to panoramic Gulf views, spend your days on Miramar Beach's sugar-white sand, and end each evening watching the sunset from your private beachfront balcony.

Westlight is a thoughtfully designed 2-bedroom, 2-bath Gulf-front condo directly overlooking the Gulf of Mexico. Westlight was created for guests seeking the comforts of home paired with a true beachfront experience on Florida's Emerald Coast — a full kitchen, real bedrooms, in-unit laundry, and a private Gulf-front balcony, only with the Gulf a boardwalk away.

⭐ Guests consistently praise Westlight for its cleanliness, responsive owner, fully equipped kitchen, and breathtaking Gulf-front views.

The Home

Two separate sleeping areas plus a queen sleeper sofa give guests room to spread out comfortably.

Sleeping Arrangements

Primary Suite

King bed
Gulf-facing windows
Adjacent full bathroom

Guest Bedroom

Queen bed
Adjacent full bathroom

Living Room

Queen sleeper sofa for 1–2 additional guests

Sleeps up to 6 guests comfortably.

Inside you'll enjoy:

Fully equipped kitchen
Dishwasher
Full-size refrigerator
Coffee maker
Dining table for family meals
In-unit washer & dryer
Smart TVs with popular streaming apps available in every bedroom and the living room
High-speed Wi-Fi throughout
Laptop-friendly workspace

Whether you're preparing breakfast before heading to the beach or enjoying a quiet evening indoors, everything has been designed to make your stay comfortable.

The View & Beach

The private Gulf-front balcony is the heart of Westlight.

Start the morning with coffee overlooking the Gulf.

Spend the afternoon relaxing while listening to the waves.

End the evening with one of Miramar Beach's spectacular west-facing sunsets — the moment the property is named for.

Beach access is a short walk downstairs — cross Scenic Gulf Drive, the quiet residential street in front of the resort, and a palm-lined walkway takes you right down to the sand. No shuttle, no long walk, no highway to cross.

Complimentary beach chairs and a beach umbrella are provided inside the condo for guests to enjoy during their stay. Guests who prefer a full-service setup can also rent chairs and umbrellas directly on the beach.

Resort Amenities

Beyond your front door you'll enjoy the amenities of the Majestic Sun / Seascape Resort community.

Resort amenities include:

Gulf-front outdoor pool with sundeck
Indoor heated pool
Hot tubs
Full fitness center
Tennis and pickleball courts
Seascape Golf Club (9-hole, par 35 — Emerald Bay Golf Club ~3 miles away for an 18-hole round)
Bicycle and paddleboard rentals
Multiple resort grills
Steps to the beach — crosswalk over Scenic Gulf Drive to a palm-lined walkway down to the sand
Elevator access
Complimentary covered parking for registered guests

Seascape offers the amenities of a full-service beachfront resort while maintaining a quieter, more relaxed atmosphere than many of the busier Panama City Beach or Destin harbor properties.

The Neighborhood

Located in Miramar Beach, on the desirable west end of the Destin area, you're close to everything while still enjoying a quieter, greener stretch of coast.

Nearby attractions include:

Seascape Town Center (coffee, dining, shopping — walkable)
Whale's Tale Beach Bar & Grill (walkable via beach)
Village of Baytowne Wharf
Silver Sands Premium Outlets
Henderson Beach State Park
Topsail Hill Preserve State Park
Big Kahuna's Water & Adventure Park
Destin Harbor / HarborWalk Village

Dining favorites include:

Whale's Tale Beach Bar & Grill (walkable)
2 Birds Coffee & Café (walkable at Seascape Town Center)
Marlin Grill
Boshamps Seafood & Oyster House
Diego's Burrito Factory
Back Beach Barbecue

Grocery is convenient: Publix at Grand Boulevard (725 Grand Blvd) is ~5 minutes by car; Winn-Dixie on Poinciana Blvd is closer (~1 mile) for a quick run. Shopping is easy — Silver Sands Premium Outlets is ~1 mile east.

Destin–Fort Walton Beach Airport (VPS) is approximately 40 minutes (24 miles) by car. Northwest Florida Beaches International Airport (ECP) is approximately 1 hour (38 miles) by car — an alternative for guests routing through Panama City.

About Your Host

Westlight is personally owned and hosted by Simone.

For more than six years, I've been welcoming guests to Florida's Emerald Coast. Every reservation, every message, and every arrival detail is personally managed by me — not a large management company.

I typically respond within two hours and provide detailed arrival instructions about one week before check-in.

You'll have direct access to me before, during, and after your stay if you need anything, while still enjoying complete privacy throughout your vacation.

Good to Know

Check-in: 4:00 PM

Check-out: 10:00 AM

Primary renter must be at least 25 years old.

Maximum occupancy: 6 guests

No smoking, vaping, pets, parties, or events.

Quiet hours are observed in accordance with HOA guidelines.

Why Guests Love Westlight

✔ Direct Gulf-front balcony with west-facing sunsets
✔ Sleeps up to 6 guests
✔ Two bedrooms and two bathrooms
✔ Fully equipped kitchen
✔ Complimentary beach chairs & umbrella
✔ Owner-managed with fast communication
✔ Walk to Seascape Town Center
✔ Full resort amenities
✔ Minutes from Silver Sands Premium Outlets
✔ Beautiful west-facing sunsets every evening

Whether you're planning a family beach vacation, a relaxing couples' getaway, or a trip with friends, we'd love to welcome you to Westlight and help make your Emerald Coast stay one to remember.
```

## Amenities Checklist

Check the boxes matching MASTER §6. Verify against Houfy's current amenity picker before saving.

- Beachfront / Direct beach access
- Air conditioning
- Central heating
- Wi-Fi (high-speed)
- Full kitchen
- Coffee maker
- Dishwasher
- Washer / dryer (in unit)
- Smart TVs with popular streaming apps
- Laptop-friendly workspace
- Pool (Gulf-front outdoor)
- Pool (indoor heated)
- Hot tub (shared / resort)
- Fitness center
- Tennis courts (shared / resort)
- Pickleball courts (shared / resort)
- Golf course (shared / resort)
- Elevator access
- Grill area (shared / resort)
- Parking (covered, on-site)
- Sleeps 6

**Never check:**

- Beach service / beach setup *(we do not provide this — on-beach vendors do, mentioned as an optional paid add-on in the description text only, never checked as an amenity)*
- Chef's kitchen
- Concierge
- Private beach
- Splash pad *(⚠ verify Majestic Sun has one — if not, do not check)*

## House Rules Summary

- Check-in 4:00 PM / check-out 10:00 AM
- No smoking, no vaping, no pets, no parties
- Primary booker must be 25 or older
- Max 6 guests
- Quiet hours per HOA *(⚠ verify exact hours — currently stated as 10 PM – 8 AM)*
- Complimentary covered parking is included for registered guests

## Photo Captions

**Max ~250 chars per photo.** Houfy captions match the guest-facing caption column in `MASTER.md §18` verbatim. Boutique-warm tone, closer to Airbnb / VRBO than Booking.com's factual style. Updated 2026-07-10 with the owner-final 46-slot Westlight photo library.

**Recommended cover image:** `ms-09-living-room.png` (slot #13) — matches `config.js#coverImage` as of 2026-07-10. On the Houfy dashboard, set this file as the "featured" photo even though it appears at slot #13 in the upload order. The gallery carousel still opens with slot #1 (`MS-FullView-1.png`) — Houfy separates the cover-tile image from the carousel-first image, so this is fine.

**Full Houfy photo upload order** (52 published slots — 46 owner-curated + 13 bonus room-variant slots − 7 owner-removed slots not uploaded (#19, #21, #23, #32, #34, #36, #40)):

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

**Houfy photo order priority:** mirrors Airbnb (view → lifestyle → primary bedroom → building context → guest bedroom → kitchen → dining → living → resort amenities → beach → utility → detail shots). Houfy's carousel is very similar to Airbnb's in guest scanning behavior, so the same first-4-photo conversion story applies. Bonus slots #47–#59 are additional room-variant frames — upload these after the primary 46 in the same slot order.

---

## Houfy-specific rules

- **Houfy allows slug edits.** Unlike Booking.com (slug is permanent), Houfy lets hosts retarget the URL slug. TW2111 successfully retargeted from `/lodging/fun-in-the-sun/` → `/h/twentyfirst` in 2026-07-07 evening. **Retarget the MS811 Houfy slug to `/h/westlight` as part of Track A.**
- **Houfy is owner-direct** (no OTA commission). The audience expects an owner voice, not a corporate one. The description body should read like a personal invitation — closer to the direct-site copy than to Booking.com's hotel-style prose.
- **Brand-prefix identity applies to the Listing Name field.** The first 26 characters of the Houfy Listing Name (H1) must be identical to the Airbnb title + VRBO headline + Booking.com property name. Locked prefix (2026-07-09): `Westlight · Gulf-Front 2BR`.
- **Middot separator convention** (`·` U+00B7) — same as Airbnb + VRBO + Booking. Do not substitute `•`, `.`, `-`, or `|`. En-dash (`–`) is used only in the description body H3 title's `Westlight – Gulf-Front 2BR Retreat…` opening, following the TW2111 precedent where en-dash rendered cleaner in Houfy's description-body parser.
- **Direct-site URL is allowed in the Houfy description body.** Unlike Airbnb / VRBO / Booking.com (all forbid channel steering), Houfy is neutral on cross-platform URL references. That said, we still don't include `stayatflorida.com` in the Houfy body for consistency across the portfolio and because guests who find us on Houfy are already on the owner-direct platform.
- **Cross-OTA review references are allowed.** Houfy's platform-level review-import feature explicitly aggregates OTA reviews (Megan O., Michelle B., Jesika W., and JESSICA R. surfaced on TW2111 from Airbnb + VRBO imports after the 2026-07-07 slug retarget). Do not remove or hide those imported reviews. Success Metric on the Houfy rebrand is scoped to **Houfy-native** review count (guests who book AND review on Houfy), not the imported OTA count.
- **Houfy's "Other Listings by Simone" sidebar.** After this rebrand ships, the TW2111 page's `Other Listings by Simone` sidebar should update to display `Westlight` (Miramar Beach 2BR) instead of the legacy `Serenity at Majestic Sun`. Verify via live-page fetch of `/h/twentyfirst` after MS811 rebrand publish.

## Recovery lever: Houfy-native review volume

- **Current state:** 0 Houfy-native reviews on MS811 (⚠ verify from live Houfy dashboard). MS811 has 59 total reviews across Airbnb + VRBO + Booking on file in `config.js#REVIEWS[5]`, but none are attributed to Houfy source.
- **Houfy's OTA-import feature** will pull in a subset of Airbnb + VRBO reviews after the slug retarget lands (evidence: TW2111 had 4 imported reviews visible on `/h/twentyfirst` post-rebrand).
- **Growth lever:** Phase 3 initiative #44 (post-checkout review-solicitation email). Customize the Houfy-arrival-flow variant to explicitly ask for a Houfy-native review, since guests may otherwise assume their prior Airbnb/VRBO review already counts on Houfy.
- **Success metric on this initiative:** 3+ Houfy-native reviews within 120 days of the #44 email variant shipping.
