# Twenty First — HOUFY

> **Derived from:** [`MASTER.md`](MASTER.md). Never edit this file first.
>
> **Owned by:** [Marketing Director](../../brand/AGENTS.md#8-marketing-director). **Reviewers:** Brand Director, CGO Agent, Content Sync Agent, QA Agent.
>
> **Purpose:** Platform-ready copy for the Twenty First Houfy listing. The owner copies each block into the matching Houfy editor field. **Cursor never publishes to Houfy.**
>
> **Platform tone:** Boutique-warm, closer to the direct site than to Booking.com's hotel-style. Houfy is an owner-direct platform (no OTA commission), so the audience expects an owner voice — not a corporate one.
>
> **Live listing URL:** [`https://houfy.com/h/twentyfirst`](https://houfy.com/h/twentyfirst) *(slug retargeted from `/lodging/fun-in-the-sun/` → `/h/twentyfirst` — legacy slug retired 2026-07-07 evening, verified by live-page fetch)*.
>
> **Status: rebrand-in-place (SHIPPED except for 3 QA follow-up items).** Title + description + slug all live 2026-07-07 evening. Post-ship QA identified one HIGH-priority operational issue + one MEDIUM-priority H1 gap + one LOW-priority soft-language pass — see `Post-ship QA findings` section below. See [`../../phase-3/revenue-impact-tracker.md`](../../phase-3/revenue-impact-tracker.md) row #12 for full ship rationale.

---

## Current live state *(post-rebrand, verified 2026-07-07 evening via live-page fetch)*

Verified against a live-page fetch of [`https://houfy.com/h/twentyfirst`](https://houfy.com/h/twentyfirst) after the rebrand paste completed.

| Field | Live value | Notes |
|---|---|---|
| **Page H1** | `Twenty First - Panama City Beach` *(34 chars, hyphen)* | Houfy's short display name — separate field from the title/H3 below. **This is the H1 Google indexes and Houfy search tiles surface.** Missing the `Gulf-Front 3BR` differentiator. See `Post-ship QA findings` § MEDIUM. |
| **Description title (H3)** | `Twenty First · Gulf-Front 3BR/3BA · Sleeps 8 · Panama City Beach` *(64 chars, middots)* | The Booking.com-variant with `/3BA` bath count. First 29 characters match Airbnb + VRBO + Booking.com character-for-character (brand-prefix identity holds). ✓ |
| **URL slug** | `/h/twentyfirst` | **Legacy `/lodging/fun-in-the-sun/` slug retired.** Big win — the "single most damaging brand asset on the internet" per the Phase 3 audit is gone. |
| **Description body** | Live, ~4,300 chars, verbatim per owner paste 2026-07-07 evening | See `Overview — actually shipped (verbatim)` section below. Verbatim archived so we have a version-controlled record of what's live. |
| **Registration URL** | **`[Removed]` on the live page** — Houfy silently strips external URLs from listing descriptions | See `Post-ship QA findings` § HIGH. |
| **Native review count** | 0 Houfy-native reviews. **4 imported reviews** on display via Houfy's platform-level review-import feature (Megan O. · Michelle B. · Jesika W. · JESSICA R. — all sourced from the Airbnb + VRBO archives at [`reviews/2026-07-06-airbnb.md`](reviews/2026-07-06-airbnb.md) and [`reviews/2026-07-06-vrbo.md`](reviews/2026-07-06-vrbo.md)) | Success Metric on #12 remains scoped to **Houfy-native** reviews only (guests who book through Houfy and review on Houfy) — imported OTA reviews mirror trust from other platforms but don't count as Houfy-native trust signals. Recovery lever: Phase 3 initiative #44 (post-checkout review-solicitation email) — customize the Houfy-arrival-flow variant to explicitly ask for a Houfy-native review since guests may otherwise assume their prior Airbnb/VRBO review already counts. |
| **Host tenure line on Houfy** | `6 years hosting on Houfy` *(rendered by Houfy in the host card)* + `For more than six years, I've been welcoming guests to Florida's Emerald Coast` *(in the description body)* | Consistent tenure signal — trust anchor is intact. |
| **Sister listing (MS811)** | `Serenity at Majestic Sun` still live under legacy name *(P1 forbidden-string violation)* | Deferred to initiative #1 (MS811 full rebrand pass) per owner directive 2026-07-06 evening. Confirmed on the Houfy `Other Listings by Simone` sidebar of the TW2111 page. |

## Historical baseline *(pre-rebrand, retained for audit trail)*

| Field | Legacy value *(pre-2026-07-07)* |
|---|---|
| **Title** | `Fun in the Sun` *(P1 forbidden-string violation)* |
| **URL slug** | `/lodging/fun-in-the-sun/` |
| **Description opener** | *"dream beach getaway at Tidewater unit 2111"* *(three P1 violations in one clause: `dream getaway` soft language, `Tidewater` as lead noun, `unit 2111` unit number)* |

**What triggered the rebrand:**

1. **`Fun in the Sun` legacy brand.** The single most damaging brand asset on the internet — surfaces on every Google search where the listing is indexed. Priority 1 forbidden-string violation.
2. **`dream beach getaway at Tidewater unit 2111` description opener.** Three violations in one clause: `dream getaway` soft adjective language, `Tidewater` as the lead noun (resort belongs in the body, not the opener), `unit 2111` explicit unit-number reference (forbidden in every guest-facing marketing copy field).
3. **Zero reviews on Houfy** despite an active listing — the property has 30+ reviews across other OTAs. Content-parity gap is real but out of scope for a title/copy rebrand; #44 is the volume lever.
4. **No brand-prefix identity.** Guests cross-shopping the brand across Airbnb, VRBO, Booking.com, and Houfy currently see `Twenty First · Gulf-Front 3BR` on three platforms and `Fun in the Sun` on Houfy. Reads as a different property. Kills conversion.

---

## Title — locked ship string *(Phase 3 initiative #12, 2026-07-07)*

**`Twenty First · Gulf-Front 3BR/3BA · Sleeps 8 · Panama City Beach`** *(64 chars — Booking.com variant, `/3BA` bath count included)*

**Shipped 2026-07-07 evening — verified live via page fetch of [`https://houfy.com/h/twentyfirst`](https://houfy.com/h/twentyfirst) where it renders as the description H3.** Middots are `·` (U+00B7), not periods.

**Ship rationale:**

- **Owner selected the Booking.com variant** (with `/3BA` bath count) over the VRBO-identical alternate (`Twenty First · Gulf-Front 3BR · Sleeps 8 · Panama City Beach`, 60 chars). Same-choice-different-platform: the `/3BA` extension picks up on the fact that Houfy's search interface actually surfaces bathroom count as a filter more prominently than VRBO's does. Two of four TW2111 platforms now share the `/3BA` extension (Booking.com + Houfy); the other two (Airbnb + VRBO) keep the simpler bedroom-only tail.
- **First 29 characters (`Twenty First · Gulf-Front 3BR`) match Airbnb + VRBO + Booking.com** character-for-character (brand-prefix identity per [`../../brand/BRAND_GUIDELINES.md`](../../brand/BRAND_GUIDELINES.md) § "OTA platform titles → Brand prefix identity"). A guest cross-shopping the brand across all four platforms reads the same brand+differentiator every time.
- **`Sleeps 8` retained** — Houfy's search interface leads with guest count as a filter, same as VRBO's.
- **`Panama City Beach` included** — Houfy does not surface the city on search cards the way Airbnb does; include the city in the title itself to keep search density strong.
- **No `Fun in the Sun`, no `dream getaway`, no `Tidewater` as lead, no `unit 2111`, no `luxury` adjective, no all-caps.** Full compliance with the BRAND_GUIDELINES `OTA platform titles → Never in an OTA title` list.

**Owner sign-off:** 2026-07-07 evening — pasted directly into the Houfy dashboard.

## Title — alternates on file *(not shipping)*

| Candidate | Chars | Note |
|---|---|---|
| `Twenty First · Gulf-Front 3BR · Sleeps 8 · Panama City Beach` | 60 | VRBO-identical variant (no bath count). Originally the doc-recommended default; owner chose the `/3BA` variant above for Houfy-specific bath-count filter benefit. |
| `Twenty First · Gulf-Front 3BR · Panama City Beach` | 50 | Drops `Sleeps 8`. Ruled out — Houfy leads with guest count in its search UI, `Sleeps N` is a valuable filter signal. |
| `Twenty First — Gulf-Front 3BR on the Emerald Coast` | 51 | Em-dash instead of middot, swaps city for regional signal. Ruled out — regional signal loses direct-search precision for `Panama City Beach`. Breaks the middot-separator convention locked across platforms. |
| `Fun in the Sun` | 14 | **Legacy live title. Deprecated 2026-07-07.** P1 forbidden-string violation. Retained only as the pre-rebrand baseline audit trail. |

---

## Overview — actually shipped (verbatim)

The following is the exact copy the owner pasted into Houfy 2026-07-07 evening, verified against a live-page fetch of [`https://houfy.com/h/twentyfirst`](https://houfy.com/h/twentyfirst). Version-controlled here so any future rewrite has a clean starting point.

```
Twenty First – Gulf-Front 3BR Retreat in Panama City Beach

Wake up to panoramic Gulf views, spend your days on Panama City Beach's sugar-white sand, and end each evening watching the sunset from your private beachfront balcony.

Twenty First is a thoughtfully designed 3-bedroom, 3-bath Gulf-front condo at Tidewater Beach Resort, created for families and friends seeking comfort, space, and unforgettable beach memories on Florida's Emerald Coast.

⭐ Guests consistently praise Twenty First for its cleanliness, responsive owner, fully equipped kitchen, and breathtaking Gulf-front views.

The Home

Three separate sleeping areas give everyone room to spread out comfortably.

Sleeping Arrangements

Primary Suite

King bed
Private en-suite bathroom
Direct balcony access with Gulf views

Guest Bedroom

Queen bed
Adjacent full bathroom

Bunk Room

Twin bunk beds
Private bathroom

Living Room

Queen sleeper sofa for 1–2 additional guests

Sleeps up to 8 guests comfortably.

Inside you'll enjoy:

Fully equipped kitchen
Dishwasher
Full-size refrigerator
Coffee maker
Dining table for family meals
In-unit washer & dryer
Smart TVs with streaming in every bedroom and the living room
High-speed Wi-Fi throughout

Whether you're preparing breakfast before heading to the beach or enjoying a quiet evening indoors, everything has been designed to make your stay comfortable.

The View & Beach

The private Gulf-front balcony is where many guests spend their favorite moments.

Start the morning watching dolphins with a cup of coffee.

Spend the afternoon relaxing while listening to the waves.

End the evening with one of Panama City Beach's spectacular sunsets.

Direct beach access is just downstairs from the resort deck.

Complimentary beach chairs and a beach umbrella are provided inside the condo for guests to enjoy during their stay. Guests who prefer a full-service setup can also rent chairs and umbrellas directly on the beach.

Tidewater Beach Resort Amenities

Beyond your front door you'll enjoy one of Panama City Beach's most complete beachfront resorts.

Resort amenities include:

Two Gulf-front outdoor pools
Indoor heated pool
Multiple hot tubs
Sauna
Steam room
Large fitness center
Splash pad for younger guests
Arcade
Grill areas
Direct beach access
On-site restaurant & tiki bar
Convenient elevator access to the beach deck

Tidewater offers the amenities of a full-service beachfront resort while maintaining a quieter, more relaxed atmosphere than many of the busier boardwalk properties.

The Neighborhood

Located on the desirable west end of Panama City Beach, you're close to everything while still enjoying a quieter stretch of beach.

Nearby attractions include:

Pier Park
Russell-Fields Pier
Panama City Beach Conservation Park
Shipwreck Island Waterpark
Gulf World Marine Park
St. Andrews State Park & Shell Island shuttle
Frank Brown Park

Dining favorites include:

Dusty's Oyster Bar
Runaway Island
Diego's Burrito Factory
Back Beach Barbecue
Sharky's Beachfront Restaurant

Shopping is easy with Publix less than a mile away, along with Target, Walmart, and numerous local shops.

Northwest Florida Beaches International Airport (ECP) is approximately 35 minutes away.

About Your Host

Twenty First is personally owned and hosted by Simone.

For more than six years, I've been welcoming guests to Florida's Emerald Coast. Every reservation, every message, and every arrival detail is personally managed by me—not a large management company.

I typically respond within two hours and provide detailed arrival instructions about one week before check-in.

You'll have direct access to me before, during, and after your stay if you need anything, while still enjoying complete privacy throughout your vacation.

Good to Know

Check-in: 4:00 PM

Check-out: 10:00 AM

Tidewater Beach Resort requires a registration fee that includes parking passes and wristbands.

Save approximately $10 by completing Tidewater registration online at least 24 hours before arrival.

Registration can be completed at:

[URL stripped by Houfy — see Post-ship QA findings § HIGH. Original paste: https://tidewaterhoa.com]

Primary renter must be at least 25 years old.

Maximum occupancy: 8 guests

No smoking, vaping, pets, parties, or events.

Quiet hours are observed in accordance with HOA guidelines.

Please note that elevator wait times may be longer during Saturday check-in and check-out periods during peak season.

Why Guests Love Twenty First

✔ Direct Gulf-front balcony

✔ Sleeps up to 8 guests

✔ Three bedrooms and three bathrooms

✔ Fully equipped kitchen

✔ Complimentary beach chairs & umbrella

✔ Owner-managed with fast communication

✔ Family-friendly layout

✔ Full resort amenities

✔ Minutes from Pier Park

✔ Beautiful sunsets every evening

Whether you're planning a family beach vacation, a relaxing couples' getaway, or a trip with friends, we'd love to welcome you to Twenty First and help make your Panama City Beach stay one to remember.
```

**How the shipped Overview differs from the initial paste-ready draft (recorded in git history as commit `a930ca7`, 1944 chars):**

- **Length:** shipped ~4,300 chars vs. draft 1944 chars. Owner chose to run the longer, more scannable format Houfy's rich-text editor renders well.
- **Structure:** shipped uses more inline bullet lists and sub-headers (`Sleeping Arrangements`, `Sleeping Arrangements → Primary Suite`, `Why Guests Love Twenty First`) — reads more like a resort brochure than a boutique-hotel description. Appropriate for Houfy's marketplace tone.
- **New content:** shipped adds an explicit `Sleeping Arrangements` breakdown, an expanded amenities list (Two Gulf-front outdoor pools · Indoor heated pool · Sauna · Steam room · Arcade · On-site restaurant & tiki bar), an expanded dining list (Dusty's Oyster Bar, Runaway Island, etc.), and a `Why Guests Love Twenty First` scannable checkmark list.
- **Preserved:** brand voice (Gulf-front leads), 6+ years hosting tenure, owner-hosted messaging, no legacy strings, no floor number, no unit number, Tidewater kept in context.
- **Trade-offs flagged in `Post-ship QA findings` below.**

## Overview — original paste-ready draft *(1944 chars)*

Retained for reference only. Do NOT re-paste — the shipped version above is what's live. This 1944-char version is documented so we have a "tighter alternative" on file if we ever want to A/B-test a shorter description or split copy across multiple placements.

```
Wake up above the emerald Gulf and spend the day on sugar-white sand. Twenty First is a 3-bedroom, 3-bath Gulf-front retreat in Panama City Beach, Florida — designed for families who want to slow down, watch the water, and reconnect.

The Home
Three separate sleeping areas mean everyone has their own space: a primary bedroom with a king bed, en-suite bath, and balcony access; a guest bedroom with a queen bed and adjacent bath; and a bunk room with one set of twin bunks and its own bathroom. A queen sleeper sofa in the living room fits one to two more. Sleeps up to 8 comfortably. Full kitchen with dishwasher, washer/dryer in unit, smart TVs with streaming in every bedroom, and Wi-Fi throughout.

The View & Beach
The private beachfront balcony overlooks the Gulf, with direct beach access from the resort deck below. Coffee in the morning, a book in the afternoon, dinner as the sun goes down. Complimentary beach chairs and umbrella are available in the condo — bring them down with you each morning.

Resort Amenities
Beyond the front door, Tidewater Beach Resort offers multiple pools and hot tubs, a full fitness center, a splash pad for younger guests, grill areas, and elevator access to the beach deck.

The Neighborhood
Panama City Beach on Florida's Emerald Coast. Publix within a mile, Amavida Coffee Roasters a short drive. Pier Park, Shipwreck Island Waterpark, and the Shell Island shuttle at St. Andrews State Park are all family favorites. ECP (Northwest Florida Beaches Airport) is about 35 minutes away.

About Your Host
Twenty First is owner-hosted by Simone. I've been hosting Gulf-front stays on Florida's Emerald Coast for over six years — every booking, every message, every arrival detail is personally mine. I typically reply within 2 hours. You'll get arrival details a week before your stay. I don't hover — but I'm here.

Check-in 4:00 PM, check-out 10:00 AM. Wristbands and parking pass provided at check-in.
```

---

## Post-ship QA findings *(2026-07-07 evening — 3 items)*

Identified via live-page verification of [`https://houfy.com/h/twentyfirst`](https://houfy.com/h/twentyfirst) after the paste completed. None block the fact of the ship (rebrand happened, legacy strings retired); all three are follow-up work.

### 🚨 HIGH — Houfy silently strips external URLs from listing descriptions

**Finding:** The owner pasted `Registration can be completed at: https://tidewaterhoa.com` into the Overview. On the live page, the URL renders as `[Removed]`. Houfy's platform automatically strips external URLs from listing descriptions — probably to prevent channel steering, though the rule catches operational URLs like HOA-registration links as collateral damage.

**Impact:** Guests reading the live Houfy description literally cannot see the Tidewater HOA registration URL and therefore cannot complete pre-arrival registration from the Houfy page.

**Recommended fix:**

- **Option A (recommended):** Delete the two lines `Registration can be completed at:` and `[Removed]` from the Houfy Overview entirely. The owner already commits to sending detailed arrival instructions one week before check-in in the `About Your Host` section; the URL belongs in that arrival-instructions message (it's already there via the direct-site "Before You Arrive" content). Nothing in the Overview implies the URL should be visible in the listing itself.
- **Option B:** Replace the URL with a text description: *"Registration can be completed on the Tidewater HOA website — a direct link is included in your arrival email."*

**Portfolio-level rule (to be codified in BRAND_GUIDELINES):** never paste external URLs into Houfy listing bodies. URLs get stripped and the resulting `[Removed]` string looks like a broken link.

### 🟡 MEDIUM — Page H1 does not include the Gulf-Front differentiator

**Finding:** The live Houfy page has two distinct title-like elements:

- **Page H1 (top-of-page, what Google indexes and Houfy search tiles surface):** `Twenty First - Panama City Beach` *(34 chars, hyphen)*
- **Description title (H3, "About this place"):** `Twenty First · Gulf-Front 3BR/3BA · Sleeps 8 · Panama City Beach` *(64 chars, middots)*

Houfy has a "short listing name" / "display name" field separate from the description title. The current H1 is missing the `Gulf-Front 3BR` differentiator that does the search-CTR work on all our other platforms.

**Impact:** Houfy's own search tiles and Google's search result snippets both use the H1. Losing the differentiator here loses cross-platform brand-prefix identity on the two surfaces most likely to be seen by a first-time visitor.

**Recommended fix:** Look for a "Listing Name" / "Property Name" / "Display Name" field in the Houfy dashboard *(separate from the description title field the owner already updated)*. If it exists and is editable, update to something like `Twenty First · Gulf-Front 3BR · Panama City Beach` (50 chars) or `Twenty First · Gulf-Front 3BR` (29 chars). If no such field exists — i.e., Houfy auto-derives the H1 from the slug or from a non-editable source — accept the trade-off (same posture as Booking.com's stuck slug) and move on.

### 🟢 LOW — Soft-language pass on the description body (optional)

**Finding:** Four phrases in the shipped Overview lean toward BRAND_GUIDELINES "soft language without proof" territory. None are P1 forbidden strings; all are candidates for a tightening pass if the owner wants tighter brand voice on the Houfy body.

| # | Current wording | Suggested alternative | Reason |
|---|---|---|---|
| 1 | `thoughtfully designed 3-bedroom, 3-bath Gulf-front condo` | `3-bedroom, 3-bath Gulf-front condo` | `thoughtfully designed` is soft-positioning language without a specific proof point (which room? which piece of furniture? what design decision?). Drops cleanly. |
| 2 | `breathtaking Gulf-front views` | `panoramic Gulf-front views` | `Breathtaking` is on the BRAND_GUIDELINES soft-adjective list; `panoramic` is the direct-site's canonical descriptor and does the same work with more specificity. |
| 3 | `Beautiful sunsets every evening` | `Sunsets over the Gulf` | `Beautiful` is on the BRAND_GUIDELINES `Never in an OTA title` list; extends to descriptions too. Also `every evening` is a factual overreach — sunsets are visible daily but weather-dependent. |
| 4 | `Guests consistently praise Twenty First for its cleanliness, responsive owner, fully equipped kitchen, and breathtaking Gulf-front views.` | `Twenty First is known for its cleanliness, responsive owner, and fully equipped kitchen — with panoramic Gulf-front views from every main room.` | **Priority downgraded post-import-finding.** Original concern was that "consistently praise" implied Houfy-native review volume where there is none. That concern softens now that Houfy displays 4 reviews imported from Airbnb + VRBO right below the description — the "praise" claim IS visually corroborated on the same page. Suggested rewrite still tightens the sentence (removes soft `breathtaking`, breaks the parallelism between three cleanliness/service/kitchen claims and one views claim), but no longer time-sensitive. |
| 5 | `one of Panama City Beach's most complete beachfront resorts` | `one of Panama City Beach's most well-equipped beachfront resorts` | `most complete` is a superlative that could be challenged (what is "complete"?); `most well-equipped` is more defensible without losing the point. |

**Owner discretion:** the Overview is on-brand and shipping. These are polish items, not blockers. Owner can batch-fix in a single Houfy-dashboard edit pass or leave for a future refresh.

---

## Accommodation Description

Facts. Verify against the Houfy `Property Details` picker field-by-field before saving.

| Field | Value |
|---|---|
| Property type | Beachfront condominium |
| Bedrooms | 3 |
| Bathrooms | 3 |
| Sleeps | Up to 8 |
| Bed configuration | 1 king + 1 queen + 2 twin bunks (one set) + 1 queen sleeper sofa |
| Floor level | Upper floors *(never a specific floor number in copy)* |
| Balcony / terrace | Yes — private, Gulf-facing |
| View | Panoramic Gulf |
| Air conditioning | Yes |
| Heating | Yes |
| Square footage | *(verify in Houfy dashboard — MASTER §7 says ~1,650 sq ft; confirm before publishing)* |

## Amenities Section

Check the boxes matching MASTER §6. Verify against Houfy's current amenity picker before saving.

- Beachfront
- Air conditioning
- Wi-Fi
- Full kitchen
- Coffee maker
- Dishwasher
- Washer / dryer (in unit)
- Smart TVs with streaming
- Pool (shared / resort)
- Hot tub (shared / resort)
- Fitness center
- Elevator access
- Splash pad (shared / resort)
- Grill area (shared / resort)
- Parking (self-park, one assigned space)
- Sleeps 8

**Never check:**

- Beach service / beach setup *(we do not provide this — on-beach vendors do; mentioned as an optional paid add-on in the Overview text only, never checked as an amenity)*
- Chef's kitchen
- Concierge
- Private beach
- Free breakfast

## House Rules

```
- Check-in 4:00 PM / check-out 10:00 AM
- No smoking, no vaping, no pets, no parties
- Primary booker must be 25 or older
- Max 8 guests
- Quiet hours 10 PM – 8 AM per HOA
- Wristbands and parking pass required — provided at check-in
```

## Photo Captions

Houfy captions run ~150 chars each in practice. Draft pulled from MASTER §18 short-caption column — same set the VRBO listing uses (identical guest audience, identical framing). Updated 2026-07-02 to reflect the new photo set. **Verify the exact photo set + order in the Houfy dashboard before publishing** — the photos in Houfy may differ from the current MASTER §18 canonical set if they were uploaded pre-rebrand.

| Slot | File | Caption |
|---|---|---|
| 1 | `tw-hero-view.png` | Panoramic Gulf view from balcony |
| 2 | `tw-balcony-sunset.png` | Sunset on the balcony above the Gulf |
| 3 | `tw-dining-sunset.png` | Dining table set for dinner with sunset view |
| 4 | `tw-balcony-coffee.png` | Coffee on the balcony |
| 5 | `tw-living-01.png` | Living room with Gulf view |
| 6 | `tw-master-01.png` | Primary bedroom, king bed |
| 7 | `tw-guest-queen.png` | Guest bedroom, queen bed |
| 8 | `tw-bunk-01.png` | Bunk room with private bath |
| 9 | `tw-01-kitchen.jpg` | Full kitchen with island seating |
| 10 | `tw-dining-01.png` | Dining table with Gulf view |
| 11 | `tw-master-02.png` | Primary bedroom, en-suite view |
| 12 | `tw-01-pool.jpg` | Resort pool |
| 13 | `tw-bath-01.png` | Guest bath with walk-in shower |

Houfy photo order: view → lifestyle → bedrooms → living → kitchen → dining → balcony → resort amenities → bathrooms. Same priority as VRBO.

---

## Houfy-specific rules

- **Boutique-warm tone.** Houfy's platform pitch is "no commission, owner-direct" — the audience expects an owner voice, not corporate copy. Lean warmer than Booking.com's hotel-style, closer to Airbnb / VRBO / the direct site.
- **Brand-prefix identity applies to the title.** First 29 characters must be identical to Airbnb + VRBO + Booking.com. Currently locked (2026-07-07): `Twenty First · Gulf-Front 3BR`. See [`../../brand/BRAND_GUIDELINES.md`](../../brand/BRAND_GUIDELINES.md) § "OTA platform titles → Brand prefix identity".
- **Middot separator convention** (`·` U+00B7) — same as Airbnb + VRBO + Booking.com. Do not substitute `•`, `.`, `-`, or `|`.
- **No cross-OTA references by name** in the Overview body. Houfy is technically an OTA competitor (positioning itself as the "no-commission alternative to Airbnb"); referencing `Airbnb`, `VRBO`, `Booking.com`, `Superhost`, or `Premier Host` by name in the description body reads as either promotion of a competitor or protest-too-much cross-shopping-defense. Trust signals should stand on specifics: 2-hour reply speed, 6+ years hosting tenure, owner-hosted messaging.
- **No `book direct` / `save fees` / `no service fees` language in the Overview body.** Houfy's own value proposition IS "no commission" — re-litigating it in the description body is redundant and reads promotional. Houfy's platform UI already surfaces the fee comparison for the guest.
- **URL slug editing IS allowed on Houfy.** Confirmed 2026-07-07 evening — legacy slug `/lodging/fun-in-the-sun/` was successfully retired and replaced with `/h/twentyfirst`. This is different from Booking.com (where the URL slug is a permanent asset assigned at listing creation and cannot be edited). Any future Houfy rebrand can and should include a slug update in the same paste pass.
- **Houfy strips external URLs from listing description bodies.** Any `http://` or `https://` link pasted into the Overview / description is silently replaced with `[Removed]` on the live page. Portfolio-level rule: never paste external URLs into Houfy listing bodies — communicate URLs (registration links, direct-site links, etc.) via arrival-instructions email instead. Discovered post-ship 2026-07-07 evening (see `Post-ship QA findings` § HIGH).
- **Houfy imports reviews from Airbnb + VRBO via platform-level feature.** The Houfy `Guest Reviews` section on the listing page displays reviews aggregated from the listing's Airbnb + VRBO archives — these are **not** Houfy-native reviews (guests who booked through Houfy and reviewed on Houfy). Per owner 2026-07-07 evening. Portfolio implication: (1) success metrics that count Houfy reviews must scope to Houfy-**native** reviews only — imported OTA reviews mirror trust from other platforms but don't reflect Houfy-native booking volume; (2) description body copy that references reviews (e.g., "Guests consistently praise…") is defensible on aggregate cross-platform grounds, not just Houfy-native grounds; (3) source-of-truth for the actual review content stays in the Airbnb + VRBO archives ([`reviews/2026-07-06-airbnb.md`](reviews/2026-07-06-airbnb.md), [`reviews/2026-07-06-vrbo.md`](reviews/2026-07-06-vrbo.md)) — do not create a duplicate Houfy review archive since it would drift from source.
- **Photo audit.** MASTER §18 photo set is canonical for the brand; the photos actually in the Houfy dashboard may differ if they were uploaded pre-rebrand. Verify the photo set + order + captions before publishing rather than assuming inheritance from MASTER.
- **Two title-like fields need separate verification.** Houfy has (a) a short listing name / "display name" field that renders as the Page H1 and appears on Houfy search tiles + Google snippets, and (b) a description title (renders as the H3 above the description body). Both need brand-prefix identity; verifying the description title is insufficient. Discovered post-ship 2026-07-07 evening — the description title was updated correctly but the H1 still reads `Twenty First - Panama City Beach` (see `Post-ship QA findings` § MEDIUM).
- **Review-volume gap (Houfy-native).** Houfy TW2111 has **0 Houfy-native reviews** on file *(4 imported reviews from Airbnb + VRBO are visible on the listing page but don't count as Houfy-native — see above rule)*. Recovery lever is Phase 3 initiative #44 (post-checkout review-solicitation email), and the Houfy-arrival-flow variant of #44 must explicitly ask for a **Houfy-native** review since guests who already reviewed on Airbnb/VRBO may assume their prior review already counts. Success Metric on #12 depends on #44 shipping — a rebrand-in-place pass alone will not move Houfy's search rank without content-quality signals to back it up.
