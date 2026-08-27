# Westlight — Airbnb + VRBO Live Audit (2026-07-14)

**Source of truth compared against:**

- [`../MASTER.md`](../MASTER.md) — canonical property record (locked 2026-07-09 Signature Property rebrand)
- [`../AIRBNB.md`](../AIRBNB.md) — Airbnb ship strings (locked 2026-07-09)
- [`../VRBO.md`](../VRBO.md) — VRBO ship strings (locked 2026-07-09)

**Live listings audited:**

- **Airbnb** — `https://www.airbnb.com/rooms/42299567`
- **VRBO** — `https://www.vrbo.com/1892927`

**Method:** Cursor browser MCP + CDP `Runtime.evaluate` against the live public listing pages on 2026-07-14. Extracted `document.title`, H1/H2, JSON-LD `VacationRental`/`Product` blocks, body text, amenity modals, and photo `alt` attributes. No login required; no scraped auth-gated content.

---

## TL;DR

**Headline drift status:**

| Platform | Live | Locked ship string (2026-07-09) | Status |
|---|---|---|---|
| Airbnb | `Luxury Gulf-Front Condo \| Westlight \| Sleeps 6` (48 chars, pipe-separated) | `Westlight · Gulf-Front 2BR` (26 chars, middot) | ✗ **Legacy — not yet pushed** |
| VRBO | `Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach` (53 chars) | Same | ✓ **Live matches locked** |

**The single biggest finding:** the 2026-07-09 Phase 3 initiative #1 rebrand pass **shipped to VRBO but not to Airbnb.** Airbnb still runs the legacy `Luxury Gulf-Front Condo | Westlight | Sleeps 6` title, the pre-rebrand `The space` copy, and a scrambled photo order. VRBO is materially closer to the locked doc across the board, but has several amenity-checkbox errors and a typo in the pet-fee rule.

**Overall live-vs-doc drift score (subjective, 0 = pristine, 10 = full rewrite needed):**

- Airbnb: **7 / 10** — title, listing body, photo order, and amenity data all diverge from the 2026-07-09 lock.
- VRBO: **3 / 10** — title/description structurally match; owner-actionable drift is two amenity overclaims (`Housekeeper included`, `Meal delivery`), two phone-number typos, and a couple of soft cleanups. Two of the most visible issues (`Evidance` typo in the pet rule; "negative review from the host" line after check-out instructions) turned out to be VRBO platform-inserted boilerplate and are NOT owner-fixable — logged in the not-actionable list.

**Two portfolio-level trust claims that MASTER §11 currently overreaches:**

1. **VRBO Premier Host badge** — no `Premier Host` string anywhere in the live MS811 VRBO listing DOM. MASTER §11 says the host-level badge "applies wherever Simone hosts." That is host-level in Airbnb's system but VRBO's Premier Host is **calculated per-listing** (booking count, response rate, review score). Either the badge is genuinely inactive on MS811 or the badge is suppressed in the current listing config — either way, do not surface `VRBO Premier Host` on the Westlight direct-site trust strip until confirmed on this listing.
2. **Airbnb Superhost badge** — no Superhost pill on the MS811 host card (only shows `Simone · 6 years hosting`). MASTER §11 asserts the badge is host-level and "applies wherever Simone hosts" — technically correct on Airbnb's side, but the badge is **not rendering** on this listing's host card. Verify Simone's current Superhost status in the Airbnb dashboard; if she's lost it (drops if response rate or 4.8+ rating slips below threshold for a quarter), MASTER §11 needs a correction.

---

## 1. Airbnb — full diff

### 1.1 Title

- **Live:** `Luxury Gulf-Front Condo | Westlight | Sleeps 6` (48 / 50 chars, pipe separator)
- **Locked (`AIRBNB.md` §Title):** `Westlight · Gulf-Front 2BR` (26 / 50 chars, middot separator)
- **Drift severity:** ✗ P0
- **Issues on the live string:**
  1. Uses forbidden soft-language adjective `Luxury` (per `AIRBNB.md` §Title "Never use").
  2. Uses pipe `|` separator; MASTER §12 mandates middot `·` (U+00B7) portfolio-wide.
  3. Does not lead with brand — `Luxury Gulf-Front Condo` occupies the first 22 characters, so on mobile-tile truncation the brand `Westlight` gets pushed toward the fold.
  4. Repeats `Sleeps 6`, which Airbnb already surfaces natively in the tile subtitle (`6 guests · 2 bedrooms · 3 beds`) — wastes character budget.
- **Fix:** Paste `Westlight · Gulf-Front 2BR` into the Airbnb dashboard `Title` field, exact glyph (`·` = U+00B7).

### 1.2 Listing summary + "The space" body

**Live `Welcome…` short summary** (extracted from JSON-LD `description` + visible page body):

> Welcome to Westlight, where every evening ends in gold. This Gulf-front 2-bedroom, 2-bath retreat overlooks the Gulf of Mexico in Miramar Beach with breathtaking views, direct beach access, and Seascape Resort amenities just steps away. Sleeps 6 with a king suite, queen bedroom, and queen sleeper sofa. Complimentary beach chairs and umbrella are available in the condo. Personally owner-hosted with responsive communication.

**Locked (`AIRBNB.md` §Listing Summary, 496 / 500 chars):**

> Welcome to Westlight, where every evening ends in gold. This Gulf-front 2-bedroom, 2-bath retreat sits directly overlooking the Gulf of Mexico — panoramic Gulf views from the balcony, direct beach access, and full Seascape resort amenities steps from the front door. Sleeps 6 across a king primary suite, a queen guest bedroom, and a queen sleeper sofa. Complimentary beach chairs and umbrella waiting in the condo. Owner-hosted — I answer every message personally.

**Drift:**

- Live opens with the locked `Welcome to Westlight, where every evening ends in gold.` hook ✓
- Live uses `breathtaking views` — locked replaced this pattern with `panoramic Gulf views` in the 2026-07-09 late-afternoon revision pass. `breathtaking` is a soft-language adjective the boutique-hospitality guardrails deprecate.
- Live says `a king suite, queen bedroom, and queen sleeper sofa` — locked is `a king primary suite, a queen guest bedroom, and a queen sleeper sofa` (fuller phrasing, better parses room hierarchy).
- Live closes on `Personally owner-hosted with responsive communication.` — locked is `Owner-hosted — I answer every message personally.` (first-person, warmer, more distinctive).

**Verdict:** live is a **pre-2026-07-09 draft** of the summary. Same shape, missing the polish pass. **P0 — paste the locked 496-char version.**

**Live `The space` (long description) body:**

> Westlight is a privately owned Gulf-front condominium in Majestic Sun at Seascape Resort in Miramar Beach, Florida. The condo features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, in-unit washer and dryer, high-speed Wi-Fi, smart TVs, and a private balcony overlooking the Gulf. Guests enjoy direct beach access, indoor and outdoor pools, hot tubs, a fitness center, tennis and pickleball courts, covered parking, and complimentary beach chairs and an umbrella available in the condo.

**Locked (`AIRBNB.md` §Your Property):** 5 paragraphs, opens with `Welcome to Westlight, where every evening ends in gold. This 2-bedroom, 2-bath Gulf-front condo sits directly overlooking the Gulf of Mexico…`, includes the `designed to be lived in barefoot` paragraph, the balcony story (`Morning coffee overlooking the Gulf. Afternoons to the sound of waves. Golden hour that gives the property its name.`), and the community-context paragraph. Full 5-paragraph body is ~2,000 chars.

**Verdict:** live is a **single paragraph ~500 chars** — missing ~1,500 chars of the locked lyrical body. Missing the tagline recall, the barefoot line, the balcony-poetic paragraph, and the community-context paragraph. **P0 — replace with the full 5-paragraph AIRBNB.md §Your Property (The Space) body.**

### 1.3 Guest access, Other things to note

**Live `Guest access`:** covers Majestic Sun / Seascape amenities, complimentary parking, beach chairs. Missing the second-paragraph beach-vendor note (locked doc pairs `complimentary chairs in the condo` with `chair rental also available from on-beach vendors` as a full-service option). Not a P0 — the current live text is safe and correct, just less complete.

**Live `Other things to note`:**

- Primary guest 25+ ✓
- Max 6 guests ✓
- No parties / no smoking / no vaping ✓
- No pets (with HOA carve-out for owners) ✓ — matches doc intent
- Parking: `One complimentary parking pass is included. Additional parking passes may be purchased through the resort for $35 each.` — **new operational detail not in AIRBNB.md doc**. Useful; recommend backporting to MASTER §17 as a canonical fact.
- Includes a Taxes & Fees paragraph clarifying Walton County + FL state lodging tax collection via Airbnb ✓ (also not in the doc but correct, and useful — recommend backport).
- **Missing vs `AIRBNB.md`:** the check-in/check-out times as a bullet (`Check-in 4:00 PM, check-out 10:00 AM`), the departure checklist bullet (`run the dishwasher, take trash to the chute, leave used towels in the tub`), the Publix / Winn-Dixie grocery pointer, the Seascape Town Center walking note, and the VPS/ECP airport lines.
  - Check-in/checkout times ARE shown in the structured House Rules card (`Check-in after 4:00 PM · Checkout before 10:00 AM`), so the bullet is redundant with structured data. Leave alone.
  - Departure checklist, grocery, town-center, airports — all **P1 add-backs**; they were owner-approved copy on 2026-07-09 and should live in the description body.

### 1.4 Structured House Rules

Live "House rules" card shows only:

- Check-in after 4:00 PM ✓
- Checkout before 10:00 AM ✓
- 6 guests maximum ✓

**Missing structured entries:**

- No pets (checkbox available on Airbnb — should be set explicitly)
- No parties (checkbox available on Airbnb — should be set)
- No smoking (checkbox available on Airbnb — should be set)
- Suitable for children (implicit — currently the description covers it)
- **Minimum age for the primary booker (25+)** — the "Other things to note" body carries it, but Airbnb has a structured "Additional rules" field where 25+ can be surfaced consistently.

**P1 fix:** run the House Rules screen and enable the structured pet / party / smoking checkboxes, and add `Primary booker must be 25 or older` to the Additional Rules field.

### 1.5 Amenities — data-quality problems

Extracted the full "Show all 70 amenities" modal. **Six items need immediate attention:**

| # | Live amenity | Problem | Recommended action |
|---|---|---|---|
| 1 | `Unknown body soap` | Airbnb's rendering when the "Body soap" chip is selected but the brand/type sub-field is empty. Reads as a data-entry bug to guests. | Either fill the brand field or uncheck the amenity. |
| 2 | `Me more stainless steel single oven` | Dictation / typo artifact. Nonsense to a guest. | Uncheck and re-select `Stainless steel single oven` cleanly. |
| 3 | `Laser tag` (Entertainment) | Almost certainly a miscategorized item — no laser-tag equipment in a 2BR beach condo per MASTER §6. | Uncheck. |
| 4 | `Lake access — Guests can get to a lake using a path or dock` (Location features) | Property is Gulf-front, not lake-front. Airbnb's map shows nearby Stewart Lake, but there is no guest path/dock to it. | Uncheck. |
| 5 | `Free street parking` (Parking) + `Paid parking on premises` both checked | Contradictory. MASTER §5 says covered on-site parking (one assigned space); resort charges $35 for additional passes. There is no free street parking at Seascape. | Uncheck `Free street parking`. Keep `Paid parking on premises`. If Airbnb has a `Covered parking` chip, enable it. |
| 6 | `Exercise equipment: elliptical, free weights, stationary bike, treadmill, workout bench` (Entertainment) | Marked as **in-condo** equipment (drives the "Listing highlights: At-home gym" card at the top of the page). MASTER §6 says the fitness center is **resort-level**, not in-condo. | Owner-verify: if the condo actually has any of these, keep only the ones physically present. If not, uncheck all five. The resort-level `Shared gym in building` is already checked separately and is correct. |

**Additional smaller issues:**

- `Pocket wifi` — uncommon; verify. Most listings do not include a portable hotspot. Uncheck if not actually offered.
- `EV charger — level 1` — verify Seascape actually has EV charging. If not, uncheck.
- `Bikes` — MASTER §6 lists `Bicycle and Paddleboard Rentals` at Seascape (paid). Airbnb chip implies complimentary in-condo bikes. Uncheck unless bikes are actually in the condo at no cost.
- `Beach essentials — Beach towels, umbrella, beach blanket, snorkeling gear` — MASTER §6 confirms chairs + umbrella; beach towels is `⚠ verify`; blanket and snorkeling gear are not claimed anywhere in MASTER. Uncheck unless verified.
- `BBQ grill` — MASTER §6 says "Multiple Resort Grills" (shared). If Airbnb's chip is `Grill` under a private-outdoor context, guests may expect a balcony grill (which most Miramar Beach condo HOAs forbid). Verify wording and consider unchecking if it reads as private.
- **Missing from Airbnb but present in MASTER §22 FAQ #4:** air fryer, slow cooker, food processor, toaster oven, two George Foreman countertop grills, popcorn maker, veggie chopper. Airbnb has some of these as amenity chips (`Toaster`, `Blender`) — add the rest for full search-ranking benefit (Airbnb weights ~60 amenities in ranking).

### 1.6 Photo order + cover

- Live cover (slot #1) is a landscape image at `.../Hosting-42299567/original/5bb347c2-8065-4dd9-873e-70207c2148c6.png` — cannot map to a canonical `MS-*.png` filename from the Airbnb-obfuscated URL, but the aspect ratio (360×480 tile crop) and the follow-up images suggest a **balcony-lifestyle frame**, not the AIRBNB.md-prescribed `ms-09-living-room.png` (slot #13 in the doc, `config.js#coverImage`).
- Slot #2 alt: `Wake up just steps from the Gulf in the comfortable king primary suite.` = doc slot **#5** (`MS-MasterBedroomFuture-2.png`) — jumped to slot #2.
- Slot #3 alt: `Bright and inviting guest bedroom with plenty of storage.` = doc slot **#29** (`MS-GuestBedroom-2.png`) — jumped to slot #3.
- Slot #4 alt: `Relax in comfort while enjoying the Gulf views.` = doc slot **#41** (`MS-LivingRoom-7.png`) — jumped to slot #4.

**Verdict:** the Airbnb photo carousel is **not in the AIRBNB.md §Photo Captions upload order.** The doc's rationale was: cover → two hero balcony frames (panoramic, dinner) → coffee frame → king bedroom → primary bath → building view. The live order goes cover → king bedroom → guest bedroom → living room, which skips the "outdoor living" narrative arc.

**P1 fix:** re-upload photos in the AIRBNB.md §Photo Captions order (40 published slots + 13 bonus), and set `ms-09-living-room.png` as the cover (per `config.js#coverImage` sync). Airbnb's rank-boost benefit compounds — the first four photos drive ~80% of tile clicks.

### 1.7 Photo captions

Currently: **captions are set on some photos** (I saw four distinct captions in slots 2–4 that match the MASTER §18 library verbatim) but **not on all**. Airbnb assigns generic `alt="Show all photos"` on any photo without a caption. The doc has a 46-slot caption library ready to paste — a batch caption pass would surface each photo's story on the listing gallery and improve accessibility.

**P1 fix:** paste captions for every photo per the AIRBNB.md §Photo Captions table.

### 1.8 Listing highlights (Airbnb-generated)

Airbnb chose these three highlights automatically:

1. `On the beach — This home is right on James Lee Beach.` — factual, good.
2. `At-home gym — The treadmill, stationary bike, and free weights are ready for workouts.` — **driven by the erroneous in-condo exercise-equipment amenity checkboxes (1.5 #6 above).** Once those are unchecked, this highlight will disappear or be replaced by a more accurate one.
3. `Self check-in — Check yourself in with the smartlock.` — factual, good.

### 1.9 Host card

- `Hosted by Simone · 6 years hosting · 33 reviews · 4.88 average · Response rate 100% · Responds within an hour`
- **No Superhost badge** on this listing card.
- **Fix:** either add MASTER §11 caveat that MS811 is not currently Superhost-badged even though Simone hosts multiple properties, or investigate why the host-level badge isn't propagating.

### 1.10 Location subtitle

Airbnb shows `Entire condo in Destin, Florida` — the property is technically in **Miramar Beach, Walton County** (breadcrumb correctly reads `United States > Florida > Walton County > Miramar Beach > Stewart Lake`). Airbnb's tile subtitle groups the property into the larger `Destin` search market — this is not owner-configurable but worth noting for any brand-consistency conversation. MASTER §5 says `Miramar Beach (Destin area)` which is precisely the correct positioning.

---

## 2. VRBO — full diff

### 2.1 Headline

- **Live:** `Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach` (53 / 80 chars, middot separator)
- **Locked (`VRBO.md` §Headline):** identical
- **Verdict:** ✓ **In sync — 2026-07-09 rebrand ship confirmed live.**

### 2.2 Description — Welcome / short body

**Live opening:**

> Welcome to Westlight, where every evening ends in gold. This Gulf-front 2-bedroom, 2-bath retreat overlooks the emerald waters of Miramar Beach, where sugar-white sand meets unforgettable sunsets. Designed for families, couples, and friends, Westlight combines the comforts of home with a true beachfront experience—private bedrooms, a fully equipped kitchen, in-unit laundry, and a private balcony overlooking the Gulf. Whether you're planning a relaxing beach vacation, a family getaway, or a romantic escape, Westlight offers everything you need to slow down, reconnect, and enjoy Florida's Emerald Coast.

**Locked (`VRBO.md` §Short Description, 498 chars):**

> Welcome to Westlight, where every evening ends in gold. This Gulf-front 2-bedroom, 2-bath retreat sits directly overlooking the Gulf of Mexico — panoramic Gulf views from the balcony, direct beach access, and full Seascape resort amenities steps from the front door. Sleeps up to 6 across a king primary suite, a queen guest bedroom, and a queen sleeper sofa. Owner-hosted with fast, personal communication. Complimentary beach chairs and umbrella in the condo.

**Drift:** live is a longer, softer, earlier draft. Missing the `panoramic Gulf views from the balcony · direct beach access · full Seascape resort amenities steps from the front door` triplet, missing the bed-inventory sentence, missing the `owner-hosted with fast, personal communication` positioning. Live uses `emerald waters` (fine) and `sugar-white sand meets unforgettable sunsets` (nice, but not the locked wording).

**Verdict: P1 — paste the locked 498-char §Short Description.** Live is not wrong, just not the 2026-07-09 polished ship string. Because VRBO's headline is correct and the long body below is largely OK, this is medium priority.

### 2.3 Description — long body (Quick Facts, The Home, View & Beach, Resort, Neighborhood, Airports, Stay, Host)

- **Quick Facts:** ✓ matches doc's 8-item checkmark list with minor phrasing tweaks (`Sleeps up to 6 guests` vs `Sleeps 6`).
- **The Home:** structure matches. `Living room: Queen sleeper sofa for 2 additional guests` — doc says `fits 1–2` (small phrasing difference; not material).
- **The View & Beach:** live has `spectacular sunsets`; doc has `unforgettable sunsets` — the 2026-07-09 polish pass swapped `spectacular` → `unforgettable`. Trivial.
- **Resort Amenities:** ✓ matches doc — same seven items (Gulf-front pool, indoor heated pool with cathedral ceilings, hot tubs, fitness center, tennis & pickleball, Seascape Golf Club, walking paths).
- **The Neighborhood:** ✓ organized live with bold section headers (Grocery / Coffee / Casual Dining / Upscale Dining / Shopping & Family Fun / Outdoor Activities). Doc uses bullet lines. Content matches — Publix Grand Boulevard, Winn-Dixie, 2 Birds Coffee, Whale's Tale, Boshamps, Diego's, Marlin Grill, Baytowne Wharf, Silver Sands, Big Kahuna's, Henderson Beach State Park, Topsail Hill Preserve, Emerald Bay Golf Club — all present. **The live version is arguably better than the doc** because of the section-header formatting; consider backporting the header structure into `VRBO.md`.
- **Nearest Airports:** ✓ `VPS approximately 40 minutes (24 miles); ECP approximately 1 hour (38 miles)` matches doc verbatim.
- **About Your Stay:** ✓ check-in 4 / check-out 10, complimentary covered parking, digital guidebook, dishwasher / trash / towels in the bathtub note. Live adds `you'll receive detailed check-in instructions along with a digital guidebook featuring Wi-Fi information, local recommendations, and everything you need for a smooth stay` — not in doc, but consistent with the brand voice.
- **About Your Host:** ✓ Simone, StayAtFlorida owner, 6+ years, replies within 2 hours, no third-party management — matches doc.
- **Closing line — `Our prices include all fees. No hidden fees.`** — not in the VRBO.md doc. Reads well and is on-brand for `transparent pricing` (MASTER §11 Trust Points), but sits close to the VRBO ban on channel-steering language. Not a violation ("no hidden fees" is a pricing claim about the OTA total; it isn't `book direct` steering). Leave in place, but consider adding it to the doc so the next paste doesn't drop it.

### 2.4 Rooms & beds — structured section

- Guest Bedroom: 1 Queen Bed ✓
- Master Bedroom: 1 King Bed ✓
- **Living Room: 1 Double Sofa Bed ⚠** — MASTER §7 and `AIRBNB.md`/`VRBO.md` both say **Queen sleeper sofa**. VRBO's structured field is set to `Double` (full-size), which is a smaller size than queen. Either the field is wrong or the doc is wrong. **Owner-verify** and align.

### 2.5 Spaces

- Deck or patio ✓
- Kitchen ✓
- Balcony ✓
- Separate dining area ✓
- **Outdoor play area ⚠** — probably referring to the resort lawn/beach area rather than a dedicated playground. MASTER §6 doesn't claim a playground. Uncheck if there's no dedicated play area at Seascape, or accept if Seascape has one (verify).

### 2.6 Amenities — full modal audit

The "See all" modal enumerates a comprehensive list. **Three high-impact overclaims and two data-hygiene issues need immediate action:**

| # | Live amenity | Problem | Recommended action |
|---|---|---|---|
| 1 | `Services → Housekeeper included` | **MAJOR MISREPRESENTATION.** MASTER §6 "Not provided" explicitly lists `Daily housekeeping mid-stay`. If this box is checked, guests may arrive expecting daily service and be legitimately unhappy when it doesn't happen. **This is a review-risk exposure.** | **Uncheck immediately.** |
| 2 | `Services → Meal delivery` | Same as above — MASTER §6 explicitly says `Not provided: Concierge / in-condo dining`. VRBO's `Meal delivery` implies an in-condo food service. | **Uncheck immediately.** |
| 3 | `Suitability → Winery tours` | Not a genuine Miramar Beach / Destin activity. Overreach. | Uncheck. |
| 4 | `Suitability → Zoo` | No zoo within reasonable driving distance. Overreach. | Uncheck. |
| 5 | `Entertainment → Video library` + `DVD player` | MASTER §6 only lists Smart TVs. Unlikely the condo has a physical DVD library. | Owner-verify; uncheck if not accurate. |

**Data hygiene:**

- Under Safety, `Hospital contact (850) 278-30000` and `Police contact (850) 267-20000` both have **8 digits** after area code instead of 7. Typos. Fix to the correct 7-digit numbers.
- Under Amenities, `Barbecue grill` is listed twice (once under Popular / general and once under Kitchen). Not a guest-facing issue; VRBO deduplicates in some views.
- `Fitness room / equipment` (Essentials group) — same ambiguity as Airbnb's "at-home gym" issue. Verify whether VRBO tags this as `shared/resort` (matches doc intent) or as `in-unit` (overclaim).
- `Toys` (also listed in Baby & toddler → `Toys`) — MASTER §6 doesn't claim in-condo toys. Uncheck unless present, since guests will look for them.
- **Missing from live but should be present:** dedicated `Beach chairs` / `Beach umbrella` chips (they're a MASTER §6 differentiator). The doc's `VRBO.md` §Amenities Section explicitly lists these; verify VRBO's picker has matching chips and enable them.

### 2.7 House Rules — structured

- Check in after 4:00 PM ✓
- Check out before 10:00 AM ✓
- Children allowed: ages 0-17 ✓
- No events allowed ✓
- **Pets: `No pets allowed — Evidance of pets results in $500 fee + cleaning`** — the `Evidance` misspelling is **VRBO platform-inserted boilerplate that appears whenever a `No pets` policy is set with a pet-violation fee. It is NOT owner-editable** (confirmed by owner 2026-07-14). Do not attempt to correct in the dashboard — it will re-render. Escalation path if we ever want this fixed: report the typo to VRBO Partner Support (`https://help.vrbo.com`) as a platform-side content bug. Backport-to-doc note: MASTER §17 doesn't currently specify the $500 pet-violation fee number even though VRBO surfaces it — recommend adding the exact fee to MASTER §17 so it's canonical and matches whatever VRBO is auto-rendering.
- Smoking not permitted ✓
- **Missing:** `Primary booker must be 25 or older`. Doc `VRBO.md` §House Rules Summary lists it explicitly. Add to VRBO's `Minimum age limit for renters` field (which the amenities modal confirms exists but wasn't clearly populated) or to the `Additional rules` block.

### 2.8 Check-out instructions

Live check-out instructions (owner-authored 7-item list):

1. Load and start the dishwasher
2. Strip any used beds and gather used towels
3. Remove personal items, remove leftover food and drinks, take out the trash
4. Turn off the lights and lock the doors
5. Return parking pass
6. Place all pool bracelets back in the drawer
7. Set AC to 73

Followed by the VRBO-appended sentence: `Failure to complete these may result in a negative review from the host.` — **this line is VRBO platform-inserted boilerplate that appears at the end of every host's check-out instruction block. It is NOT owner-editable** (confirmed by owner 2026-07-14). Off-brand relative to StayAtFlorida's boutique-hospitality voice, but nothing we can do inside the VRBO dashboard.

**Doc `VRBO.md` §About Your Stay closing line:** `On departure, please run the dishwasher, take trash to the chute, and leave used towels in the tub — that's it.`

**Drift:** live is a 7-item list; doc is 3 items. The seven items are all legitimate operational asks (pool bracelets, parking pass, AC=73 for HVAC energy-management). **Backport the seven operational items into MASTER §17 and `VRBO.md`** so the doc reflects reality. The auto-appended VRBO sentence is out of scope for owner action — do not attempt to remove it in the dashboard.

### 2.9 Photo count + cover

- Live gallery: **43 photos** (VRBO shows `43+` in the hero and `Show all 43 images` on the CTA).
- Doc `VRBO.md` §Photo Captions specifies **40 published slots + 13 bonus = 53 available frames** (46 primary published + owner-removed count-back, plus bonus). Even taking the conservative 40-primary count, live is 3 shy.
- **P1 fix:** upload the missing frames from the doc library (in particular the sunset frames, the balcony coffee frame, and any owner-final frames added on 2026-07-10 during the file-hygiene pass).
- **Cover photo alt on live:** `Front-row seat to the Gulf's most beautiful views.` — this caption is **not in the VRBO.md §Photo Captions library.** The doc-prescribed cover caption for slot #13 (`ms-09-living-room.png`) is `Comfortable seating with breathtaking Gulf views from almost every seat.` The live cover appears to be a balcony frame with a legacy caption.
- **P1 fix:** set `ms-09-living-room.png` as the VRBO featured photo (matches `config.js#coverImage`) and paste the doc caption for it, OR update MASTER §18 if `Front-row seat…` is a preferred cover caption the owner wants to keep.

### 2.10 Photo captions

Live photo alts are mostly auto-generated by VRBO ("A balcony with a sofa, chairs, and a table, overlooking a beach.") — VRBO's accessibility captions rather than the owner-set captions. **The VRBO.md §Photo Captions library has been drafted but has not been pasted into the VRBO dashboard per-photo.** Fix in the same pass as the re-upload.

### 2.11 Auto-generated location content

VRBO's automated "About the neighborhood" and "What's nearby" sections mention nearby waypoints that don't fully match the doc:

- `Miramar Beach - 3 min walk - 0.3 km` — the beach access is directly downstairs from the resort (steps, not 3-minute walk). VRBO's landmark waypoint is offset from the actual property lot. Not owner-controllable.
- `Restaurants: Whales Tail 5 min walk, Circle K 8 min walk, Whataburger 3 min drive, Circle K 3 min drive, The Surf Hut 14 min walk` — `Whales Tail` is VRBO's spelling of `Whale's Tale Beach Bar & Grill` (per MASTER §8). VRBO's default nearby-restaurants list is uncurated and mixes in Circle K (a gas station convenience store). Nothing owner-controllable here, but worth being aware of if guests reference these lists.

### 2.12 Premier Host badge

Confirmed: **no `Premier Host` text anywhere in the live listing DOM.** MASTER §11 currently states `Simone is … VRBO Premier Host`. Two paths:

1. **If Simone is currently Premier Host on this listing** — badge display may be delayed or configuration issue; investigate in the VRBO owner dashboard.
2. **If not** — MASTER §11 needs a correction: change to `Simone is a Premier Host on select VRBO listings` or similar. Also update the trust strip in `config.js#SITE_CONTACT` if MS811-specific display is possible.

---

## 3. Prioritized action list

### P0 — do this today

1. **Airbnb: paste the locked title.** `Westlight · Gulf-Front 2BR` into the Airbnb dashboard `Title` field. Middot is `·` (U+00B7). No pipes, no "Luxury".
2. **Airbnb: paste the locked 496-char summary.** Copy verbatim from [`../AIRBNB.md`](../AIRBNB.md) §Listing Summary.
3. **Airbnb: paste the locked 5-paragraph `Your Property (The Space)` body.** Copy verbatim from [`../AIRBNB.md`](../AIRBNB.md) §Your Property.
4. **VRBO: uncheck `Housekeeper included` and `Meal delivery`.** Two amenity checkboxes that misrepresent service level and are review-risk.
5. **Airbnb: uncheck the amenity data-quality errors.** `Unknown body soap`, `Me more stainless steel single oven`, `Laser tag`, `Lake access`, `Free street parking`. If the in-condo `Exercise equipment` claims are not backed by physical equipment in the condo, uncheck those too.

### P1 — do this week

6. **Airbnb: re-upload the photo carousel in AIRBNB.md order.** Cover = `ms-09-living-room.png`. Then balcony hero pair, then bedroom, primary bath, guest bedroom, kitchen, etc. per doc.
7. **Airbnb: paste photo captions per AIRBNB.md §Photo Captions table.**
8. **Airbnb: enable structured House Rules for pets / parties / smoking / 25+ minimum age.**
9. **Airbnb: backport the description body's `Other things to note` bullets** — check-in/out, departure checklist, Publix grocery, Seascape Town Center walk, VPS/ECP airport times.
10. **VRBO: paste the locked 498-char short description** and update the closing line about sunsets to `unforgettable` (or accept the live `spectacular` and update doc to match).
11. **VRBO: upload the 3 missing photos** to reach the 46-slot AIRBNB/VRBO doc library.
12. **VRBO: paste photo captions per VRBO.md §Photo Captions table.**
13. **VRBO: set `ms-09-living-room.png` as the featured photo.**
14. **VRBO: fix the two typo phone numbers** (Hospital `(850) 278-30000` → 7-digit, Police `(850) 267-20000` → 7-digit).
15. **VRBO: add `Beach chairs` / `Beach umbrella` amenity chips** if picker offers them.
16. **VRBO: uncheck `Winery tours`, `Zoo`, and `Video library`/`DVD player` (unless verified).**
17. **VRBO: verify `Double Sofa Bed` vs `Queen Sleeper Sofa` in the Rooms & beds structured section.** Align live and doc; MASTER §7 is the source of truth.

### P2 — do this month

18. **Investigate Airbnb Superhost + VRBO Premier Host badge status** for MS811. Either fix so the badges surface, or correct MASTER §11 to reflect actual per-listing badge state.
19. **Backport the following live details into MASTER + platform docs:**
    - Airbnb: parking-pass detail (1 complimentary + $35 each for additional).
    - Airbnb: taxes & fees clarifying paragraph (Walton County + FL state via Airbnb pricing breakdown).
    - VRBO: full 7-item check-out instruction list.
    - VRBO: `Our prices include all fees. No hidden fees.` closing line.
    - VRBO: pool-bracelet return, parking-pass return, AC=73 operational instructions.
    - VRBO: neighborhood section formatting (bold section headers).
    - MASTER §17: add the $500 pet-violation fee that VRBO auto-renders on the pet rule line, so the number is canonical across all four platforms.
20. **Re-run this audit in 2 weeks** after the P0/P1 pushes to confirm live-doc parity. Save the next capture as `2026-07-28-airbnb-vrbo.md` in this folder.

### Not-actionable — VRBO platform-inserted text *(logged so future audits don't re-flag)*

These strings show on the live VRBO listing but are auto-inserted by VRBO's platform, not by the host. **Do not attempt to edit in the dashboard — they will re-render.**

- **`Evidance of pets results in $500 fee + cleaning`** *(appended to the "No pets allowed" rule)* — auto-generated whenever a `No pets` policy is set with a pet-violation fee. Includes the platform-side misspelling of `Evidence`. Escalation path: VRBO Partner Support (`https://help.vrbo.com`) as a platform content bug — low priority given every VRBO host with this rule sees the same string.
- **`Failure to complete these may result in a negative review from the host.`** *(appended after the host-authored check-out instructions)* — auto-appended to every check-out instruction block. Off-brand for boutique hospitality but out of scope for owner action.

---

## 4. Tracker update

`docs/phase-3/ota-update-tracker.md` §2 MS811 matrix was last snapshotted 2026-07-06. This audit's findings supersede that snapshot. See the updated matrix in that file (same date as this audit).

---

## Appendix A — Evidence captured

### A.1 Airbnb JSON-LD `VacationRental` block (2026-07-14)

- `name`: `Luxury Gulf-Front Condo | Westlight | Sleeps 6`
- `description`: matches the visible "Welcome to Westlight…" paragraph in §1.2
- `aggregateRating`: `4.86` from `22` reviews
- `latitude`: `30.37564`, `longitude`: `-86.36852`
- `address.addressLocality`: `Destin` (not Miramar Beach — Airbnb-side regional grouping)

### A.2 VRBO breadcrumb + H1 (2026-07-14)

- Breadcrumb: `United States of America > Florida > Walton County > Miramar Beach > Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach`
- H1: `Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach`
- Property ID: `1892927`
- Reviews: `9.8 / 10 Exceptional · 68 reviews` (was 67 on 2026-07-10 capture — one new review since)

### A.3 Method notes

Captured via Cursor browser MCP CDP `Runtime.evaluate` against:

- `https://www.airbnb.com/rooms/42299567` (single Airbnb tab, unauthenticated)
- `https://www.vrbo.com/1892927` (same tab, sequential navigation)

Every quoted string in this audit was pulled directly from the live DOM. Re-run against the same URLs to reproduce; if either listing changes materially between now and the next audit, expect deltas in the JSON-LD `description`, the amenity-modal contents, and the review count.
