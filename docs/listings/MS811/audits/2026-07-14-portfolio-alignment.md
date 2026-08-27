# Westlight — 5-Platform Portfolio Alignment Audit (2026-07-14)

**Scope:** All five surfaces where Westlight lives publicly.

**Extends:** [`2026-07-14-airbnb-vrbo.md`](./2026-07-14-airbnb-vrbo.md) — that earlier report contains the full line-by-line diff for Airbnb + VRBO. This document adds Booking.com, Houfy, and StayAtFlorida (direct site), then rolls the whole portfolio into a single alignment matrix.

**Source of truth:** [`../MASTER.md`](../MASTER.md) (2026-07-09 Signature Property rebrand + subsequent polish passes).

**Live URLs audited:**

| Platform | URL | Access |
|---|---|---|
| Airbnb | `https://www.airbnb.com/rooms/42299567` | public |
| VRBO | `https://www.vrbo.com/1892927` | public |
| Booking.com | `https://www.booking.com/hotel/us/deluxe-2-bedroom-beach-front-at-majestic-sun-resort.html` | public |
| Houfy | `https://www.houfy.com/h/westlight` | public |
| StayAtFlorida | `https://stayatflorida.com/listing-5.html` | public |

**Method:** Cursor browser MCP + CDP `Runtime.evaluate` against each live URL on 2026-07-14. Extracted `document.title`, H1/H2/H3, JSON-LD, body text, amenity modals, and policy blocks.

---

## TL;DR — where each platform stands vs MASTER

| Platform | Rebrand shipped? | Alignment score | Blocker to full alignment |
|---|---|---|---|
| **StayAtFlorida** | ✓ Yes (source of truth) | **9 / 10** | Meta title on property page not rendering per-property; amenity chip grid missing 3 resort chips; cancellation dates diverge from `MASTER.md` §17 |
| **Houfy** | ⚠ Partial | **7 / 10** | H1 uses hyphen+`at Majestic Sun` format instead of locked middot title; `No Parking` chip is wrong (parking IS included); $250 damage deposit ≠ $300 in doc; `Lakefront` / `Bay view` overclaims |
| **VRBO** | ✓ Mostly | **7 / 10** | Locked headline live ✓ · short summary is pre-locked draft · `Housekeeper included` + `Meal delivery` amenity overclaims · phone-number typos · sofa-bed size mismatch |
| **Airbnb** | ✗ Not shipped | **3 / 10** | Legacy title (`Luxury Gulf-Front Condo \| Westlight \| Sleeps 6`) · legacy short body · 6 amenity data-quality errors · photo order scrambled |
| **Booking.com** | ✗ Not shipped | **1 / 10** | Fully legacy — title, description, host section all pre-rebrand. `Deluxe 2 bedroom Beach Front at Majestic Sun Resort` everywhere · unit `A811` publicly exposed in address · 5.5/10 aggregate on 2 reviews · `Private beach area` amenity overclaim · description edit requires Booking Track B (~5–10 business days via Booking content team) |

**Portfolio-wide integrity claims that need attention (all five platforms):**

- **Airbnb Superhost badge** — direct site claims it; Airbnb listing does NOT display it on the MS811 host card. Either revalidate host-level status or drop the claim from the trust strip.
- **VRBO Premier Host badge** — direct site claims it; VRBO listing has zero `Premier Host` string in the live DOM. Same call.
- **`Housekeeper included` / `Meal delivery` on VRBO** — hard-contradicts MASTER §6 `Not provided` list. Review-risk.
- **Cancellation policy** — MASTER §17 says direct site is "60/30/inside 30"; live direct site is "46/31–45/inside 30". Two different policies. Pick one.
- **Sofa bed size** — MASTER says Queen. VRBO structured field says Double. Direct site says Queen. One of these needs to change.

---

## 1. Portfolio alignment matrix (5 platforms × 9 elements)

Cells use these codes:

- ✓ — matches MASTER (or close-enough per platform constraints)
- ⚠ — content exists but drifts from MASTER; needs sync
- ✗ — content missing, wrong, or fully legacy pre-rebrand
- ⛔ — active misrepresentation (guest-facing false claim → review-risk)
- — — element does not exist on that platform

| Element | StayAtFlorida | Airbnb | VRBO | Booking.com | Houfy |
|---|---|---|---|---|---|
| **1. Property name** | ✓ `Westlight` H1 + `A StayAtFlorida Signature Property` subtitle + `Where Every Evening Ends in Gold` tagline | ✗ `Luxury Gulf-Front Condo \| Westlight \| Sleeps 6` (legacy pipes, forbidden `Luxury`, doesn't lead with brand) | ✓ `Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach` (locked ship string) | ✗ `Deluxe 2 bedroom Beach Front at Majestic Sun Resort` (fully legacy — forbidden `Deluxe`, `Majestic Sun` as brand lead, zero `Westlight`) | ⚠ H1: `Westlight by StayAtFlorida at Majestic Sun - Miramar Beach` (brand present but format wrong; `Majestic Sun` in brand chain) · Description H3: `Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach` ✓ |
| **2. Description body** | ✓ Renders MASTER §14 (all 6 paragraphs) verbatim | ✗ Legacy short single-paragraph body — missing 4 of 5 locked paragraphs | ⚠ Long body largely matches VRBO.md; short `Welcome` opener is pre-locked draft (`breathtaking` / `spectacular sunsets` instead of locked `panoramic Gulf views` / `unforgettable sunsets`) | ⛔ Full legacy — opener `Deluxe 2 bedroom Beach Front at Majestic Sun Resort in Destin offers accommodations with access to a hot tub and indoor…`. Zero rebrand text. Description edit gated behind Booking Track B (host cannot edit prose directly) | ⚠ Same VRBO body pasted in (structural match ✓); same drift as VRBO on the opener |
| **3. Amenities** | ⚠ 4-canonical grouping present; missing 3 Resort Amenities chips (Tennis/Pickleball, Golf, Bikes/Paddleboard, Multiple Resort Grills — they appear in the prose §14 but not the chip grid); `DVD & Entertainment` chip is stale | ⛔ 6 data-quality errors: `Unknown body soap` · `Me more stainless steel single oven` · `Laser tag` · `Lake access` · `Free street parking` · in-condo `Exercise equipment` overclaim | ⛔ 2 review-risk overclaims: `Housekeeper included` + `Meal delivery` (MASTER §6 explicitly says NOT provided). Also `Winery tours`, `Zoo`, `Video library`, `DVD player` overreaches. Missing `Beach chairs`/`Beach umbrella` chips | ⛔ `Private beach area` amenity check (Miramar Beach is public — same rule VRBO.md carries as "Never check"). Otherwise sparse but accurate: 2 pools, beachfront, free parking, free WiFi, non-smoking | ✓ 50 amenities properly grouped, shared/private distinction correct (`Shared Pool`, `Shared Fitness Room/Gym`, `Shared Hottub`, `Shared Tennis Court`). ⚠ `Charcoal Grill` unusual — verify not misclassified as in-condo · ⚠ `Bay view` + `Lakefront` overclaims (property is Gulf-front only) |
| **4. House rules** | ✓ MASTER §17 rendered in prose · but cancellation dates in the `Your Stay` block say `46+ days / 31–45 days / inside 30` — MASTER §17 says `60 / 30 / inside 30`. Numbers diverge | ⚠ Structured House Rules card missing pets / parties / smoking / 25+ min-age checkboxes; body text has them | ⚠ 25+ min-age not surfaced in structured rules. *(`Evidance` typo in pet rule + `negative review from the host` sentence are VRBO auto-inserts — not owner-editable, see [`SYNC_RULES.md`](../../../sync/SYNC_RULES.md#platform-inserted-text-not-owner-editable--skip-on-audits))* | ✓ All rules present: check-in 4pm–11pm · check-out 6am–10am · 25+ min-age · no smoking / parties / pets · photo-ID + credit card at check-in. Cancellation `varies according to accommodation type` — verify rate-plan setup matches MASTER §17 | ⛔ **`No Parking` in Property Suitability chips** — false. Parking IS included per MASTER §5. Data-entry error. Also: `Wheelchair Accessible` claimed — MASTER doesn't claim this |
| **5. Photos** | ✓ 46-slot library carousel; cover = `ms-09-living-room.png` (matches `config.js#coverImage`) | ⚠ Carousel out of AIRBNB.md order (bedroom at slot #2 instead of balcony hero pair); cover ≠ `ms-09-living-room.png` | ⚠ 43 uploaded vs 46 in doc library; cover ≠ `ms-09-living-room.png` (live cover is a balcony frame with legacy caption) | ⚠ 42 photos; cover shows living-room hero (well-chosen). Photo count 4 shy of doc library | ✓ Full photo set present (count not directly visible in text extract but gallery shows same shots as VRBO/direct-site) |
| **6. Captions** | ✓ Rendered from MASTER §18 (`config.js#photoCaptions` map) | ⚠ Some captions from library, most missing; slots that have them (#5, #29, #41) match verbatim | ⚠ Auto-generated VRBO accessibility alts instead of MASTER §18 captions; live cover caption `Front-row seat to the Gulf's most beautiful views.` is not in the doc library | ⚠ Auto-generated Booking accessibility alts, all include legacy `Deluxe 2 bedroom Beach Front at Majestic Sun Resort in Destin` — no MASTER §18 captions | ⚠ Auto-generated Houfy captions (not clearly the MASTER §18 set) |
| **7. Branding** | ✓ Signature Property system rendered (Signature card, hero eyebrow, `Verified host` panel with both badges). Meta title falls back to site-wide `StayAtFlorida \| Luxury Beachfront Vacation Homes` — should read `Westlight \| Gulf-Front 2BR in Miramar Beach \| StayAtFlorida` per `config.js#metaTitle` | ✗ No brand tagline, no Signature label, no subtitle; forbidden `Luxury` in title | ⚠ Brand + differentiator in headline ✓; no `A StayAtFlorida Signature Property` subtitle surface on VRBO | ✗ Fully legacy branding, no `Westlight`, no tagline, no StayAtFlorida | ⚠ `Westlight by StayAtFlorida` in H1 ✓; but `at Majestic Sun` violates MASTER §12 rule that `Majestic Sun` is operational-only, never guest-facing brand chain |
| **8. Check-in instructions** | ✓ Prose promises detailed arrival info a week before check-in; check-in 4:00 PM / check-out 10:00 AM stated in FAQ + Highlights | ⚠ Self check-in / smart-lock listed in Listing Highlights; check-in/out times in structured House Rules ✓ | ⚠ Prose in `About Your Stay`: "you'll receive detailed check-in instructions…" · 7-item check-out task list is comprehensive | ✓ Structured: check-in from 4 PM to 11 PM · check-out 6 AM to 10 AM · photo ID + credit card required · min-age 25 | ✓ Structured `Policies & Rules` card: Check-In 4PM Flexible timing · Check-Out 10AM Standard · Max Guests 6 · Min Age 25 |
| **9. Welcome messaging** | ✓ Hero: `Welcome to Westlight, where every evening ends in gold.` · description body opens with locked MASTER §14 P1 verbatim | ⚠ Pre-locked draft: `Welcome to Westlight, where every evening ends in gold.` opener is present ✓ · but continues with `breathtaking views` (soft language) and `Personally owner-hosted with responsive communication.` closer (not the locked warmer close `Owner-hosted — I answer every message personally.`) | ⚠ Same pattern as Airbnb: locked opener line ✓ but body diverges | ✗ **Zero welcome messaging**. Description is Booking's auto-styled `Beachfront Location: … offers direct beachfront access…` — no `Welcome to Westlight`, no tagline, no owner-hosted voice | ✓ Same VRBO body: locked opener line ✓, minor drift on adjectives (same as VRBO) |

---

## 2. Booking.com — full diff *(new — not covered in Airbnb+VRBO audit)*

### 2.1 Property name

- **Live:** `Deluxe 2 bedroom Beach Front at Majestic Sun Resort`
- **Locked (`BOOKING.md`):** `Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach` (57 chars; Booking.com normalizes middots to spaces on publish per portfolio finding 2026-07-08, so plan for `Westlight Gulf-Front 2BR/2BA Sleeps 6 Miramar Beach` on the live render)
- **Drift severity:** ✗ P0
- **Violations:** forbidden `Deluxe` adjective (MASTER §15) · `Majestic Sun Resort` as guest-facing brand lead (MASTER §12) · no `Westlight` anywhere · no bedroom-count differentiator format · misspelled resort chain (Booking's variant, not the doc's)
- **This is a pre-Signature-Property listing.** The 2026-07-09 rebrand never touched Booking.com — MS811 was explicitly deferred at that time (per `docs/phase-3/revenue-impact-tracker.md` #11).
- **Fix:** paste `Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach` into the extranet Property Name field. Track A (property name + amenities + photos + captions + house rules + host section) is directly host-editable; description body is Track B and requires Booking content-team review.

### 2.2 Address exposure — data bug

Booking's live listing exposes the private unit designator in the visible address block:

> `1160 Scenic Gulf Drive A811, Destin, FL 32550, United States`

And in JSON-LD:

```
"addressLocality": "1160 Scenic Gulf Drive A811"
```

That `addressLocality` is malformed — it should be `Destin` or `Miramar Beach`, not the street address. Two separate issues:

1. **Unit `A811` publicly displayed** — MASTER §5 explicitly says: `Address … private — used for post-booking messaging only; never surfaced on guest-facing copy`. Booking is doing the opposite. **Owner action:** in the extranet's Property → Location / Address panel, verify the unit designator field is set correctly and (if Booking permits) removed from the public-facing display. If Booking's UX shows unit numbers by default, escalate to Booking Partner Support to suppress.
2. **`addressLocality` schema bug** — cosmetic; degrades structured-data quality for Google surfaces that read Booking's schema. Not the highest priority.

### 2.3 Description body

**Live (JSON-LD `description`):**

> A few steps from Miramar Beach in Destin, Deluxe 2 bedroom Beach Front at Majestic Sun Resort offers accommodations with access to a hot tub and indoor…

**About-this-property visible body:**

> Beachfront Location: Deluxe 2 bedroom Beach Front at Majestic Sun Resort in Destin offers direct beachfront access and stunning sea views. Guests can relax by the swimming pool with a view or enjoy the indoor pool. Free WiFi is available throughout the property.
>
> Spacious Accommodations: The apartment features two bedrooms and two bathrooms, a living room, and a balcony. Amenities include air-conditioning, a hot tub, and a fully equipped kitchen with modern appliances. Free on-site private parking is provided.
>
> Nearby Attractions: Miramar Beach is just a few steps away, while Destin Harbor Boardwalk lies 9.3 mi from the property. Other attractions include Big Kahunas (6.8 mi) and Emerald Coast Convention Center (14 mi). Destin-Fort Walton Beach Airport is 20 mi distant.

**Locked (`BOOKING.md`):** short + long descriptions built from MASTER §14, opening with `Welcome to Westlight, where every evening ends in gold.` and covering the six-paragraph structure adapted to Booking's factual-hotel-style tone.

**Drift:** total. Zero `Welcome to Westlight`. Zero tagline. Zero owner voice. Zero `Simone`. The `Miramar Beach is just a few steps away` framing implies Miramar Beach is a nearby attraction rather than the property's own location (Booking geolocates it under `Destin`).

**Fact errors in the live copy:**

- `Destin-Fort Walton Beach Airport is 20 mi distant` — MASTER §5 says **24 miles**. Booking's estimate is 4 miles short.
- `Big Kahunas (6.8 mi)` — implausible for a Miramar Beach property; Big Kahuna's is on Highway 98 in Destin, ~3–4 miles from the property. Booking's data source is stale.
- `Destin Harbor Boardwalk 9.3 mi` — roughly correct; not a MASTER-canonical distance.

**Fix path:** description edits go through **Booking Track B** (host cannot directly edit descriptions — verified during TW2111 rebrand 2026-07-08). Draft the replacement paragraph in `BOOKING.md` §Long Description, submit through the extranet's content-review workflow, and expect ~5–10 business days for Booking's team to publish. In the interim, everything Track A (property name, amenities, photos, captions, house rules) can be updated directly.

### 2.4 Amenities

Booking's "Most popular amenities" strip:

| Chip | Status |
|---|---|
| 2 swimming pools | ✓ (Gulf-front outdoor + indoor heated) |
| Beachfront | ✓ |
| Free parking | ✓ |
| Free Wifi | ✓ |
| Non-smoking rooms | ✓ |
| Family rooms | ✓ (children welcome, matches MASTER §16) |
| **Private beach area** | ⛔ **Uncheck** — Miramar Beach is public, resort has beach access but does not own private beach. `VRBO.md` §Amenities has this on the "Never check" list; same rule applies here |

**Missing chips vs MASTER §6 canonical list** (should be enabled): Air-conditioning · Hot tub · Kitchen · Balcony · Washing machine · Bathtub · Beach chairs/umbrella provided · Elevator · Tennis + pickleball · Fitness center. Booking has a big amenity library; the "Facilities & services" checkbox screen in the extranet should be fully filled.

### 2.5 Photos + captions

- **Count:** `+42 photos` — 4 short of MASTER §18's 46-slot library.
- **Cover:** appears to be a living-room-with-Gulf-view frame (image `889800671.jpg` per JSON-LD). Visually reasonable but does not verifiably match `ms-09-living-room.png`.
- **Alt text:** Booking auto-generates descriptive alt text — every alt includes the legacy `Deluxe 2 bedroom Beach Front at Majestic Sun Resort in Destin` string. Once the property name is corrected, Booking regenerates alt text with the new name.
- **Owner captions:** none of the MASTER §18 captions are pasted. Booking supports per-photo captions in the Photo Manager screen — Track A editable.
- **Fix:** paste MASTER §18 captions per photo; upload the 4 missing photos from the doc library.

### 2.6 House rules

Structured house-rules block on the live listing:

- Check-in `From 4:00 PM to 11:00 PM` ✓
- Check-out `From 6:00 AM to 10:00 AM` ✓
- Photo ID + credit card required at check-in ✓ (Booking standard)
- Minimum age 25 ✓
- No smoking ✓
- No parties/events ✓
- No pets ✓
- Children of all ages welcome ✓
- Cancellation `varies according to accommodation type` ⚠ verify rate-plan setup matches MASTER §17

House rules is **the strongest surface on the live Booking listing** — matches MASTER §16 cleanly. The only follow-up is the rate-plan cancellation setup.

### 2.7 Reviews / branding

- Aggregate `5.5 / 10 - Rated fair · 2 reviews` — low volume + low score. Per revenue-impact-tracker #11: title rewrite alone won't fix this. Recovery vector is Phase 3 initiative #44 (post-checkout review-solicitation email) with a Booking.com-specific arrival-flow variant.
- No `Managed by StayAtFlorida` host section rendered in the live extract — either not populated or below the fold. TW2111 Booking.com has this section per the 2026-07-08 Track A ship; MS811 does not. **Add during Track A ship.**

### 2.8 Booking.com — priority action list

**Track A (host directly editable, ~30 min in the extranet):**

1. **P0 — Property name:** paste `Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach` (Booking will normalize middots to spaces per portfolio-level finding 2026-07-08).
2. **P0 — Amenity data:** uncheck `Private beach area`. Enable the missing 10+ chips listed in §2.4.
3. **P0 — Host section:** populate `Managed by StayAtFlorida` per TW2111 Track A precedent.
4. **P1 — Photos:** upload the 4 missing frames from MASTER §18 library.
5. **P1 — Captions:** paste MASTER §18 captions per photo.
6. **P1 — Address panel:** verify `A811` unit designator can be suppressed from public display (or escalate to Booking Partner Support).
7. **P1 — Rate plan cancellation:** verify current cancellation rules match MASTER §17 intent (non-refundable preferred for peak; standard for shoulder).

**Track B (Booking content-team review, ~5–10 business days):**

8. **P0 — Description body:** submit the `BOOKING.md`-authored short + long description through the extranet's description-review workflow.

---

## 3. Houfy — full diff *(new — not covered in Airbnb+VRBO audit)*

### 3.1 Titles (H1 + H3)

Houfy has two title-editing surfaces:

- **Listing Name (H1 on live page + search-tile display):**
  - Live: `Westlight by StayAtFlorida at Majestic Sun - Miramar Beach` (58 chars, en-dash separator)
  - Locked (`HOUFY.md`): `Westlight · Gulf-Front 2BR · Miramar Beach` (46 chars, middot)
  - **Drift severity:** ⚠ P1
  - **Issues:** uses ` at Majestic Sun ` mid-title — MASTER §12 says `Majestic Sun` is operational-only, never in guest-facing brand chain · uses hyphen separator instead of middot · no `Gulf-Front 2BR` differentiator · runs 58 chars vs locked 46
  - **Fix:** paste `Westlight · Gulf-Front 2BR · Miramar Beach` into the Houfy dashboard's "Listing Name" field.

- **Description title (H3 above the About-this-place body):**
  - Live: `Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach` (VRBO-identical variant, 53 chars)
  - Locked-alt (`HOUFY.md`): `Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach` (Booking/Houfy variant with `/2BA`, 57 chars)
  - Both variants are on-file as acceptable in `HOUFY.md`. Live is the shorter VRBO-identical form.
  - **Verdict:** ✓ acceptable. Brand-prefix identity holds (first 26 chars match Airbnb/VRBO/Booking-target). Optional upgrade to the `/2BA` form for platform parity with the Booking.com locked variant, but not a P0.

### 3.2 Description body

**Live:** same VRBO body pasted into Houfy. Section-for-section identical: `Welcome` opener → `Quick Facts` → `The Home` → `The View & Beach` → `Resort Amenities` → `The Neighborhood` → `Nearest Airports` → `About Your Stay` → `About Your Host` → `Closing`.

**Drift:** identical to the VRBO description drift (same source, same drift). Locked `panoramic Gulf views` line missing, `unforgettable sunsets` replaced with `spectacular sunsets`, `Owner-hosted with fast, personal communication` line missing.

**Fix:** whenever the VRBO body is re-pasted with the locked ship string, also re-paste to Houfy. `HOUFY.md` §Overview should be updated alongside `VRBO.md` §Short Description.

### 3.3 Amenities + shared spaces

Houfy's amenities are cleanly split into "What this place offers" (in-condo) and "Shared spaces" (resort). Better shared/private separation than Airbnb or VRBO.

**In-condo (`What this place offers` — 50 amenities):** Washing Machine · Iron & Board · Hair Dryer · Linens Provided · Full Kitchen · Oven · Hot Tub · Charcoal Grill · High Speed Internet · Laptop-friendly workspace · Desk · Smart TV · +38 more.

- ⚠ **`Charcoal Grill`** listed under in-condo. MASTER §6 says "Multiple Resort Grills" (shared). If Houfy has this checked as private/in-condo, it may imply a private balcony grill (usually HOA-forbidden in FL condos). **Owner verify — if grill is resort-shared, uncheck the private chip and move to "Shared spaces".**
- ⚠ **`Hot Tub`** in the in-condo list. MASTER §6 lists Hot Tubs under Resort Amenities (shared). Same issue.

**Shared spaces:** Shared Pool ✓ · Shared Fitness Room/Gym ✓ · Shared Hottub ✓ · Shared Tennis Court ✓ — all correctly tagged shared. This is the cleanest amenity data of the four OTAs on the shared/private distinction.

**Scenic views:** Beach view ✓ · Ocean view ✓ · **Bay view** ⛔ · **Lake view** ⛔
- MASTER §5 View = `Gulf-front (west-facing)`. Property is west-facing over the Gulf. Does not have `Bay view` (Choctawhatchee Bay is east/inland, not visible from an 8th-floor west-facing unit) or `Lake view` (Stewart Lake is behind the resort, but Unit A811 faces the Gulf).
- **Uncheck both.**

**Location tags:** Beachfront ✓ · Waterfront ✓ · Oceanfront ⚠ · **Lakefront** ⛔
- `Oceanfront` — the Gulf is technically a gulf not an ocean, but this is a common filter and vacation-rental convention accepts either. Low priority.
- `Lakefront` — false. Property is Gulf-front. **Uncheck.**

### 3.4 Property Suitability

Live chips: Child friendly · No events allowed · No smoking allowed · **No Parking** · Wheelchair Accessible

- ⛔ **`No Parking`** — WRONG. MASTER §5 says covered on-site parking IS included. Either the chip is mislabeled ("No parking = free parking not required from guest"?) or the owner mis-clicked during setup. Either way, guests scanning this chip see "No Parking" and may bounce. **Owner verify + correct immediately.**
- ⚠ **`Wheelchair Accessible`** — MASTER §5 doesn't claim wheelchair accessibility. Elevator access is present (MASTER §6) but full ADA-compliant wheelchair accessibility (door widths, bathroom grab bars, roll-in shower, etc.) needs owner confirmation. If not verified, uncheck.

### 3.5 Policies & Rules (structured)

- Check-In 4PM Flexible timing ✓
- Check-Out 10AM Standard ✓
- Max Guests 6 People ✓
- Min Age 25 Primary renter ✓
- Not Allowed: Pets ✓ · Smoking ✓ · Parties ✓
- **Security Deposit: $250 Refundable** ⚠ — MASTER §21 Fee Schedule says `Refundable damage deposit: $300`. Houfy live is $250. **One of the two is stale.** Owner: reconcile — either update Houfy to $300 or update MASTER §21 to reflect actual $250.

### 3.6 Photos + captions

- Full photo set present in the gallery. Cover appears to be a hero balcony/living-room frame.
- Captions: Houfy auto-generates from Houfy's own alt-text engine; does not use MASTER §18 captions per-photo.
- **Fix:** in the Houfy Photo Manager, paste MASTER §18 captions per photo (Houfy supports per-photo captions).

### 3.7 Reviews / branding

- Aggregate `4.84 · 50 reviews (all imported from VRBO)`. Houfy imports OTA reviews platform-side (verified during TW2111 audit 2026-07-07). No native Houfy reviews yet on MS811.
- Host card: `Hosted by Simone · 6 years hosting on Houfy · Identity verified · 100% response rate · Member Since February 2020` ✓ — clean, well-populated.
- `Book Direct and Save · Save on service fees by booking direct on Houfy.` — Houfy's platform-native trust chip ✓ — matches StayAtFlorida's positioning nicely.

### 3.8 Houfy — priority action list

1. **P0 — Property Suitability:** uncheck `No Parking` (or find the correct chip that indicates "parking IS included"). This is the single most damaging item on the live Houfy listing.
2. **P0 — Amenity views:** uncheck `Bay view` and `Lake view` under Scenic views.
3. **P0 — Location tags:** uncheck `Lakefront`.
4. **P1 — H1 rewrite:** update the Listing Name field to `Westlight · Gulf-Front 2BR · Miramar Beach` (46 chars, middot).
5. **P1 — Reconcile damage deposit:** $250 (Houfy live) vs $300 (MASTER §21). Pick one and align.
6. **P1 — In-condo amenity audit:** verify `Charcoal Grill` and `Hot Tub` are not falsely labeled as in-condo when they're resort-shared.
7. **P1 — Suitability audit:** verify `Wheelchair Accessible` or uncheck.
8. **P2 — Captions:** paste MASTER §18 captions per photo.
9. **P2 — Description polish:** when VRBO body is re-pasted with the locked ship string, also re-paste to Houfy.

---

## 4. StayAtFlorida direct site — full diff *(new — not covered in Airbnb+VRBO audit)*

The direct site is authored FROM MASTER via `config.js` + `app.js`, so alignment is expected to be near-perfect. Findings are gaps in the rendering pipeline, not authoring drift.

### 4.1 Property page hero + welcome messaging

- H1: `Westlight` ✓
- Subtitle: `A StayAtFlorida Signature Property` ✓
- Tagline: `Where Every Evening Ends in Gold` ✓
- Hero copy: `Welcome to Westlight, where every evening ends in gold. This Gulf-front 2-bedroom, 2-bath retreat sits directly overlooking the Gulf of Mexico — panoramic Gulf views from the balcony, direct beach acc…` ✓ (matches MASTER §14 P1 verbatim)
- Sleeps line: `6 guests · 2 bedrooms · 2 baths` ✓

**Verdict:** ✓ property page hero + welcome messaging fully aligned.

### 4.2 Meta title — SEO bug

- Live `<title>` on the property page: `StayAtFlorida | Luxury Beachfront Vacation Homes` (site-wide fallback)
- `config.js#properties[id=5].metaTitle`: `Westlight | Gulf-Front 2BR in Miramar Beach | StayAtFlorida`

**The property-specific meta title is defined in config but not applied to `document.title` on route/nav.** Impact:

- Google Search will index the property page under the site-wide title, not the property title. Every Westlight-specific keyword loses its title match.
- Social shares that read `document.title` will show the site-wide title.
- `<meta property="og:title">` — worth checking whether that's set correctly too (JSON-LD emits well, but OG tags may share the same bug).

**Fix path:** `app.js` should set `document.title = property.metaTitle` when navigating to a listing route. Same treatment for the meta description. Verify with the `generate-listing-pages` script whether the static stub `listing-5.html` includes the per-property meta tags in the HTML head (in which case a full page reload should show the right title, but SPA nav wouldn't).

### 4.3 Amenity chip grid — 4-group render

Live grid:

| Group | Chips |
|---|---|
| Inside the Condo | Full Kitchen · High-Speed WiFi · Smart TV · Washer & Dryer · Air Conditioning · Central Heating · Laptop-Friendly Workspace · **DVD & Entertainment** ⚠ |
| Beach Convenience | Complimentary Beach Chairs & Umbrella (in condo) · On-Beach Vendor Rentals Available for Purchase |
| Resort Amenities | Gulf-Front & Outdoor Pools · Indoor Heated Pool · Hot Tubs · Fitness Center · Outdoor Grilling (Resort) |
| Location & Access | Direct Beach Access · Elevator Access · Covered Parking (On-Site) |

**Drift vs MASTER §6:**

- **Inside the Condo missing:** `Bed & Bath Linens Provided (linens for 6 + extras)`
- **Inside the Condo stale:** `DVD & Entertainment` — MASTER §6 has no DVD reference (only Smart TVs). This is a legacy amenity chip carried over from a pre-2026-07-09 version of the config. Remove or replace with `Smart TVs in Every Bedroom + Living Room` (already covered by `Smart TV` chip — probably deletable).
- **Beach Convenience missing:** `Beach Towels Provided` (MASTER §6 has this as `⚠ verify` — resolve verify then either add or leave off)
- **Resort Amenities missing 3 chips** (they appear in the prose §14 further down but not in the chip grid): `Tennis and Pickleball Courts` · `Seascape Golf Course (9-hole, par 35)` · `Bicycle and Paddleboard Rentals`. The `Multiple Resort Grills` chip is covered by `Outdoor Grilling (Resort)` ✓.
- **Location & Access missing 3 chips:** `Walking Distance to Seascape Town Center` · `Short Walk to Whale's Tale Beach Bar & Grill` · `VPS (~40 min) · ECP (~1 hour)` airport chips.

**Fix path:** update `config.js#properties[id=5].amenities` (or wherever the 4-group data comes from) to include the missing chips per MASTER §6. Consider whether to render the airport line as a chip or leave in the Highlights bullet list (currently in both).

### 4.4 Cancellation policy — number drift

- Live (property page → `Your Stay` block): `Full refund if you cancel 46 or more days before check-in. 50% refund 31-45 days out. Non-refundable within 30 days of check-in.`
- MASTER §17 (direct site row): `Full refund up to 60 days before check-in; 50% refund up to 30 days before check-in; no refund inside 30 days.`

**Two different policies.** The 46/31–45/30 pattern is unusual; may be inherited from a TW2111-legacy setup. Owner needs to declare which is canonical:

- If live is correct: update MASTER §17 to `60 → 46+, 30 → 31–45` and align the wording.
- If MASTER is correct: update `config.js` or wherever the cancellation prose is authored to `60/30/inside 30`.

Cancellation prose lives in `config.js` per typical rendering pattern — spot-check the exact source file when reconciling.

### 4.5 Trust badges — cross-platform claim mismatch

Live "Verified host" panel displays:

- `Airbnb Superhost 6+ years hosting`
- `VRBO Premier Host`

**Both badges are absent from the actual Airbnb and VRBO listings for MS811** (verified in [`2026-07-14-airbnb-vrbo.md`](./2026-07-14-airbnb-vrbo.md) §1.9 and §2.12). MASTER §11 asserts the badges are "host-level and apply wherever Simone hosts" — technically correct for Airbnb (Superhost is host-level and calculated quarterly), but the badge doesn't render on the MS811 listing's host card. VRBO's Premier Host is per-listing and is not active on MS811.

**Options:**

1. **Investigate + fix:** confirm Simone's current Airbnb Superhost status; if lost this quarter, the direct-site claim is stale and needs removal until re-earned. VRBO Premier Host status must be checked in the owner dashboard.
2. **Scope the claim:** rephrase the trust chips to `Airbnb Superhost (portfolio-wide, verified on Twenty First)` and `VRBO Premier Host (verified on Twenty First)` — accurate and legally defensible, but weaker.
3. **Drop from Westlight** and keep only on TW2111 property page until Westlight earns them independently.

**Recommend:** option 1 (investigate first). If Simone is currently Superhost portfolio-wide but the badge just isn't rendering on MS811's Airbnb host card, escalate to Airbnb Support. If she's lost the badge, remove the direct-site claim.

### 4.6 Photos + captions

- Carousel renders 46-slot library from `config.js#images` ✓
- Cover is `ms-09-living-room.png` per `config.js#coverImage` ✓
- Captions render from `config.js#photoCaptions` (URL→caption map derived from MASTER §18) ✓

**Verdict:** ✓ fully aligned. The direct site is the authoritative photo-caption reference.

### 4.7 FAQ block

10-item FAQ present, all match MASTER §22 verbatim ✓.

### 4.8 Direct site — priority action list

1. **P0 — Meta title bug:** wire `config.js#properties[id=5].metaTitle` into `document.title` on route/nav so the property page indexes as `Westlight | Gulf-Front 2BR in Miramar Beach | StayAtFlorida`. Same for `metaDescription`.
2. **P0 — Trust badges investigation:** confirm Superhost + Premier Host status on MS811; either fix rendering on the OTA listings or scope/remove the direct-site claim.
3. **P1 — Cancellation policy reconciliation:** live `46/31–45/30` vs MASTER `60/30/30`. Owner picks one.
4. **P1 — Amenity chip grid completion:** add the 6+ missing chips (`Bed & Bath Linens`, `Tennis and Pickleball`, `Seascape Golf`, `Bicycle/Paddleboard`, `Walk to Town Center`, `Walk to Whale's Tale`, `VPS/ECP airports`).
5. **P1 — Remove `DVD & Entertainment` amenity chip** (stale, not in MASTER §6).

---

## 5. Consolidated action list — one place, ranked by impact

### P0 — do today (revenue-risk / trust-risk / correctness bugs)

| # | Platform | Action | MASTER refs |
|---|---|---|---|
| 1 | Airbnb | Paste locked title `Westlight · Gulf-Front 2BR` (middot) | AIRBNB.md §Title |
| 2 | Airbnb | Paste locked 496-char §Listing Summary + 5-para §Your Property body | AIRBNB.md §Listing Summary + §Your Property |
| 3 | Airbnb | Uncheck 5 amenity data-quality errors: `Unknown body soap` · `Me more stainless steel single oven` · `Laser tag` · `Lake access` · `Free street parking` | AIRBNB.md §1.5 in [2026-07-14-airbnb-vrbo.md](./2026-07-14-airbnb-vrbo.md) |
| 4 | Airbnb | Owner-verify in-condo `Exercise equipment` (elliptical, treadmill, etc.) — uncheck if not physically present | AIRBNB.md §1.5 |
| 5 | VRBO | Uncheck `Housekeeper included` and `Meal delivery` amenities | MASTER §6 "Not provided" |
| 6 | Booking.com | Property name → `Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach` | BOOKING.md §Property Name |
| 7 | Booking.com | Uncheck `Private beach area` amenity | MASTER §6 · VRBO.md §Amenities "Never check" |
| 8 | Booking.com | Add `Managed by StayAtFlorida` host section | BOOKING.md · TW2111 Track A precedent |
| 9 | Houfy | Uncheck `No Parking` Suitability chip (parking IS included) | MASTER §5 |
| 10 | Houfy | Uncheck `Bay view` + `Lake view` Scenic views | MASTER §5 |
| 11 | Houfy | Uncheck `Lakefront` Location tag | MASTER §5 |
| 12 | Direct site | Wire property-specific `metaTitle` + `metaDescription` into `document.title` on nav | config.js#properties[id=5] |
| 13 | Direct site | Investigate Superhost + Premier Host badge status for MS811 and decide: fix, scope, or drop | MASTER §11 |
| 14 | Booking.com | Verify unit `A811` can be suppressed from public address display (or escalate) | MASTER §5 |

### P1 — do this week (structural + polish)

| # | Platform | Action |
|---|---|---|
| 15 | Airbnb | Re-upload photos in AIRBNB.md order; set `ms-09-living-room.png` as cover |
| 16 | Airbnb | Paste per-photo captions from AIRBNB.md §Photo Captions |
| 17 | Airbnb | Enable structured House Rules: pets / parties / smoking / 25+ min-age |
| 18 | Airbnb | Backport `Other things to note` bullets: departure checklist, grocery, town center, airports |
| 19 | VRBO | Paste locked 498-char §Short Description |
| 20 | VRBO | Upload 3 missing photos to reach 46-slot library; set `ms-09-living-room.png` as featured |
| 21 | VRBO | Paste per-photo captions from VRBO.md §Photo Captions |
| 22 | VRBO | Fix 8-digit phone-number typos in Safety contacts |
| 23 | VRBO | Verify `Double Sofa Bed` vs `Queen Sleeper Sofa` in Rooms & beds structured section |
| 24 | Booking.com | Upload 4 missing photos to reach 46-slot library |
| 25 | Booking.com | Paste MASTER §18 captions per photo |
| 26 | Booking.com | Fill all missing amenity checkboxes (AC, hot tub, kitchen, balcony, washing machine, bathtub, beach chairs/umbrella, elevator, tennis+pickleball, fitness) |
| 27 | Booking.com | Verify rate-plan cancellation setup matches MASTER §17 |
| 28 | Booking.com | Submit `BOOKING.md` short + long description via Track B review workflow (~5–10 business days) |
| 29 | Houfy | Update Listing Name → `Westlight · Gulf-Front 2BR · Miramar Beach` (46 chars, middot) |
| 30 | Houfy | Reconcile $250 (Houfy) vs $300 (MASTER §21) refundable damage deposit |
| 31 | Houfy | Owner-verify `Charcoal Grill` and `Hot Tub` chips — move to Shared if resort-level |
| 32 | Houfy | Uncheck `Wheelchair Accessible` unless verified |
| 33 | Direct site | Reconcile cancellation policy: live `46/31–45/30` vs MASTER `60/30/30` — pick canonical |
| 34 | Direct site | Add missing amenity chips to 4-group grid (see §4.3) |
| 35 | Direct site | Remove stale `DVD & Entertainment` chip |
| 36 | All OTAs | Repaste welcome opener when Airbnb + VRBO get their locked-summary refresh — cascade to Houfy in same pass |

### P2 — do this month (backport + integrity)

| # | Platform | Action |
|---|---|---|
| 37 | MASTER §17 | Consolidate the pet-violation fee amount ($500 per VRBO auto-render — see [SYNC_RULES §Platform-inserted text](../../../sync/SYNC_RULES.md#platform-inserted-text-not-owner-editable--skip-on-audits)) |
| 38 | MASTER §17 | Backport the full 7-item VRBO check-out task list into canonical form |
| 39 | MASTER §5 | Add pet-violation fee, parking-pass pricing detail ($35/additional pass from Airbnb) |
| 40 | MASTER §5 | Verify assigned-space count with owner (currently `⚠ verify` in doc) |
| 41 | Cross-platform | Re-audit in 2 weeks (2026-07-28) — validate that P0/P1 pushes landed and no new drift introduced |

### Not owner-actionable (logged so future audits do not re-flag)

- Airbnb tile subtitle `Entire condo in Destin, Florida` — Airbnb regional grouping, cannot override.
- VRBO `Evidance of pets results in $500 fee + cleaning` — VRBO platform-inserted boilerplate.
- VRBO `Failure to complete these may result in a negative review from the host.` — VRBO platform-inserted boilerplate.
- Booking.com auto-generates FAQ questions with whatever the current property name is — will self-repair when the property name is corrected.
- Booking.com nearby-restaurant list includes gas stations (`Circle K`) — Booking-side data source, not owner-editable.

---

## 6. What "aligned" looks like when the P0 list is done

After the P0 list ships, the 5-platform × 9-element matrix should look like this (targets):

| Element | StayAtFlorida | Airbnb | VRBO | Booking.com | Houfy |
|---|---|---|---|---|---|
| Property name | ✓ | ✓ | ✓ | ✓ | ✓ |
| Description body | ✓ | ✓ | ⚠→✓ (after P1 #19) | ⚠→✓ (after Track B ships, 5–10 biz days) | ⚠→✓ (after P1 #36 cascade) |
| Amenities | ⚠→✓ (after P1 #34) | ✓ | ✓ | ⚠→✓ (after P1 #26) | ✓ |
| House rules | ✓ | ⚠→✓ (after P1 #17) | ✓ | ✓ | ✓ |
| Photos | ✓ | ⚠→✓ (after P1 #15) | ⚠→✓ (after P1 #20) | ⚠→✓ (after P1 #24) | ✓ |
| Captions | ✓ | ⚠→✓ (after P1 #16) | ⚠→✓ (after P1 #21) | ⚠→✓ (after P1 #25) | ⚠→✓ (after P2 #36-adjacent) |
| Branding | ⚠→✓ (after P0 #12–#13) | ✓ | ✓ | ✓ | ⚠→✓ (after P1 #29) |
| Check-in | ✓ | ✓ | ✓ | ✓ | ✓ |
| Welcome | ✓ | ⚠→✓ (after P0 #2) | ⚠→✓ (after P1 #19) | ⚠→✓ (after Track B) | ⚠→✓ (after P1 #36 cascade) |

**Time-to-alignment estimate:**

- P0 list: ~2 hours of concentrated owner work across all five dashboards.
- P1 list: ~4–6 hours spread over the week, plus 5–10 business days waiting for Booking.com content-team review.
- Full portfolio alignment (all cells ✓): **within 2 weeks** if P0/P1 executed on the recommended schedule.

---

## Appendix A — evidence snapshots (2026-07-14)

- Airbnb JSON-LD, house-rules card, amenity modal, host card, first 4 photo alts — captured in [`2026-07-14-airbnb-vrbo.md`](./2026-07-14-airbnb-vrbo.md) §Appendix.
- VRBO breadcrumb, headline, description body, structured beds, amenity modal, house rules, check-out task list — same reference.
- Booking.com JSON-LD `@type: Hotel` block (name, description, address, aggregate), amenity strip, house rules block, nearby-landmark list — captured in this document §2.
- Houfy H1, H3, description body (VRBO parity), 50 amenities preview, shared spaces, scenic views, location tags, property suitability, policies & rules — captured in this document §3.
- StayAtFlorida property page hero, 4-group amenity chips, Verified host trust panel, cancellation prose, FAQ (10 items) — captured in this document §4.

## Appendix B — related files

- Companion audit: [`2026-07-14-airbnb-vrbo.md`](./2026-07-14-airbnb-vrbo.md) — deep-dive on Airbnb + VRBO with amenity-modal detail and per-element line diff.
- Platform tracker: [`../../../phase-3/ota-update-tracker.md`](../../../phase-3/ota-update-tracker.md) — cross-property, cross-platform status matrix.
- Sync rules: [`../../../sync/SYNC_RULES.md`](../../../sync/SYNC_RULES.md) — including the new "Platform-inserted text (not owner-editable — skip on audits)" section.
- Platform-derived files: [`../AIRBNB.md`](../AIRBNB.md) · [`../VRBO.md`](../VRBO.md) · [`../BOOKING.md`](../BOOKING.md) · [`../HOUFY.md`](../HOUFY.md) · [`../WEBSITE.md`](../WEBSITE.md).
