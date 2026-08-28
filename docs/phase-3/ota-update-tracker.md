# OTA Update Tracker — Phase 3

**Purpose:** Track per-platform × per-element sync status across every place a property listing surfaces. Every cell has a status and, when relevant, a next action.

**Status legend:**

- `✓ Done` — shipped, in sync with MASTER
- `⚠ Drift` — content exists but does not match MASTER; needs sync
- `✗ Missing` — content not yet drafted / not yet uploaded
- `— N/A` — element not applicable on this platform
- `⏳ In progress` — actively being drafted this week

**MASTER-first rule:** every cell in this tracker derives from [`../listings/{PROPERTY}/MASTER.md`](../listings/) and the portfolio rollup in [`./brand-property-master.md`](./brand-property-master.md). No cell moves to `✓ Done` unless it matches MASTER byte-for-byte in intent (character budgets and platform-specific formatting are allowed to diverge — meaning cannot).

**Update cadence:** bi-weekly. See [`./phase-3-roadmap.md#5-cadence`](./phase-3-roadmap.md).

---

## 1. TW2111 — Twenty First

### Matrix

| Element | Website (stayatflorida.com) | Airbnb | VRBO | Booking.com | Houfy |
|---|---|---|---|---|---|
| **Titles** | ✓ Done — `Twenty First` + subtitle `A StayAtFlorida Signature Property` | ⚠ Drift — 32-char rewrite pending | ⚠ Drift — 80-char rewrite pending | ✗ Missing — not listed on Booking.com yet | ✗ Missing — Houfy not evaluated yet |
| **Descriptions** | ✓ Done — MASTER §14 rendered on property page | ⚠ Drift — needs sync to Phase 2 body | ⚠ Drift — needs sync to Phase 2 body | ✗ Missing | ✗ Missing |
| **Photo order** | ✓ Done — 7-slot hero rotation from `heroPhotoOrder` | ⚠ Drift — first-photo A/B pending | ⚠ Drift — 4-tile grid audit pending | ✗ Missing | ✗ Missing |
| **Captions** | ✓ Done — MASTER §18 Photo Caption Library, wired to JSON-LD alt text | ✗ Missing — Airbnb photo captions are per-photo, currently unset | ✗ Missing — VRBO photo captions per-photo | ✗ Missing | ✗ Missing |
| **Amenities** | ✓ Done — 4-group canonical (Inside/Beach/Resort/Location & Access) | ⚠ Drift — 100% fill pending; each Airbnb amenity has ranking weight | ⚠ Drift — same, VRBO amenity checklist | ✗ Missing | ✗ Missing |
| **FAQs** | ✓ Done — 10-item MASTER §22 order | — N/A — Airbnb has no dedicated FAQ; embed into description | — N/A — same | — N/A — same | — N/A — same |
| **House rules** | ✓ Done — MASTER §17 | ⚠ Drift — Airbnb rules screen needs audit | ⚠ Drift — VRBO rules screen needs audit | ✗ Missing | ✗ Missing |
| **Trust messaging** | ✓ Done — Why Book Direct trust panel + `No OTA service fees when booking direct.` | — N/A — trust messaging on Airbnb comes from host badge + Superhost | — N/A — same, from Premier Host badge | — N/A — same, from Genius / Preferred Partner | — N/A |

### Next actions (TW2111)

0. **Booking.com — rate plans locked 2026-08-26 evening.** Non-Refundable Deal (`54607442`) = PriceLabs parent. Standard -30 days (`54499322`) = 10% more than Non-Refundable Deal. Weekly 8% off Standard. Monthly (`68676878`) = 20% cheaper than Non-Refundable Deal. Occupancy 8. PriceLabs child min/base/max $125 / $300 / $750. See MASTER §17 + BOOKING.md. Do not flatten.
1. **Draft Airbnb title (≤32 chars).** Working candidates: `Twenty First · PCB Gulf View 3BR` (32), `Twenty First 3BR Gulf-Front PCB` (32), `Gulf-Front 3BR · Twenty First PCB` (33 — trim). Owner picks; A/B against a second candidate if allowed.
2. **Draft VRBO title (≤80 chars).** Working candidate: `Twenty First — 3BR Gulf-Front Beachfront Condo · Panama City Beach · Sleeps 8` (77 chars).
3. **Sync descriptions** — copy MASTER §14 to `docs/listings/TW2111/AIRBNB.md` and `VRBO.md` **minus the direct-booking value line** (OTAs strip these; save the round-trip).
4. **Amenity fill audit.** Log into Airbnb + VRBO host dashboards; check every amenity checkbox that MASTER §6 groups list. Missing amenities depress search ranking on all three big OTAs.
5. **Photo captions.** MASTER §18 library exists — port to Airbnb + VRBO per-photo captions in the host UI.
6. **House rules screen audit.** Both platforms have a rules-checklist UI; verify pets/parties/quiet-hours/smoking match MASTER §17.

---

## 2. MS811 — Westlight

### Matrix *(refreshed 2026-07-14 via full 5-platform live audit — see [`../listings/MS811/audits/2026-07-14-portfolio-alignment.md`](../listings/MS811/audits/2026-07-14-portfolio-alignment.md))*

| Element | Website (stayatflorida.com) | Airbnb | VRBO | Booking.com | Houfy |
|---|---|---|---|---|---|
| **Titles** | ✓ Done — Signature Property rebrand rendered on property page + homepage card. Meta title falls back to site-wide string (P0 bug — property `metaTitle` not wired to `document.title` on nav) | ✗ **Legacy live** — 2026-07-09 locked `Westlight · Gulf-Front 2BR` **not pushed**; still `Luxury Gulf-Front Condo \| Westlight \| Sleeps 6` | ✓ Done — 2026-07-09 locked `Westlight · Gulf-Front 2BR · Sleeps 6 · Miramar Beach` confirmed live | ✗ **Fully legacy** — `Deluxe 2 bedroom Beach Front at Majestic Sun Resort` (rebrand deferred at 2026-07-09; still not shipped) | ⚠ Partial — H3 description title matches VRBO ship string ✓; H1 Listing Name is `Westlight by StayAtFlorida at Majestic Sun - Miramar Beach` (58 chars, en-dash, uses forbidden `Majestic Sun` in brand chain) |
| **Descriptions** | ✓ Done — MASTER §14 rendered on property page verbatim | ⚠ Drift — pre-2026-07-09 draft live; needs locked 496-char summary + 5-para "The space" body | ⚠ Drift — long body largely matches doc; short "Welcome" opener is earlier draft | ⛔ **Zero rebrand text** — full legacy body opens with `Deluxe 2 bedroom Beach Front at Majestic Sun Resort in Destin…`. **Track B (Booking content-team review, ~5–10 business days) required for description edits** | ⚠ Drift — same VRBO body pasted in (structural parity ✓); same drift as VRBO |
| **Photo order** | ✓ Done — hero rotation locked in `config.js#properties[id=5]`; cover = `ms-09-living-room.png` | ⚠ Drift — carousel not in AIRBNB.md §Photo Captions order; cover ≠ `ms-09-living-room.png` | ⚠ Drift — 43 uploaded vs 46 in doc library; cover ≠ `ms-09-living-room.png` | ⚠ Drift — 42 uploaded vs 46 in doc library | ✓ Full photo set present |
| **Captions** | ✓ Done — MASTER §18 Photo Caption Library wired to JSON-LD alt text | ⚠ Drift — some captions from library, most missing | ⚠ Drift — auto-generated VRBO alts instead of MASTER §18 captions | ⚠ Drift — auto-generated Booking alts include legacy property name in every alt | ⚠ Drift — auto-generated Houfy alts, not the MASTER §18 set |
| **Amenities** | ⚠ 4-group canonical rendered but chip grid missing ~6 items (`Bed & Bath Linens`, `Tennis/Pickleball`, `Golf`, `Bikes/Paddleboard`, `Walk to Town Center`, `VPS/ECP`); stale `DVD & Entertainment` chip in `Inside the Condo` | ⛔ **6 data-quality errors** — `Unknown body soap`, `Me more stainless steel single oven`, `Laser tag`, `Lake access`, `Free street parking`; in-condo exercise-equipment overclaim | ⛔ **2 review-risk overclaims** — `Housekeeper included` and `Meal delivery` (MASTER §6 says NOT provided); `Winery tours`, `Zoo`, `Video library`, `DVD player` overreach | ⛔ `Private beach area` amenity check (Miramar Beach is public); missing 10+ standard chips (AC, hot tub, kitchen, balcony, washing machine, elevator, tennis/pickleball, fitness, etc.) | ✓ 50 amenities properly grouped, shared/private distinction clean · ⚠ `Charcoal Grill` + `Hot Tub` may be misclassified as in-condo · ⛔ `Bay view` + `Lake view` + `Lakefront` overclaims (property is Gulf-front only) |
| **FAQs** | ✓ Done — 10-item MASTER §22 FAQ block on property page | — N/A — embed in description | — N/A | — N/A — Booking auto-generates FAQs; every question repeats the legacy property name until rebrand ships | — N/A |
| **House rules** | ✓ Done — MASTER §17 rendered. ⚠ Cancellation dates in `Your Stay` block are `46+ / 31–45 / inside 30` — MASTER §17 says `60 / 30 / inside 30`. Reconcile | ⚠ Drift — structured rules card missing pets / parties / smoking / 25+ min-age; body text has them | ⚠ Drift — 25+ min-age not surfaced. *Not owner-actionable:* `Evidance` typo in the pet rule + `Failure to complete these may result in a negative review from the host.` after check-out list are both VRBO platform-inserted boilerplate | ✓ All rules present and match MASTER §16 (check-in 4pm–11pm, check-out 6am–10am, 25+ min-age, no smoking/parties/pets). Cancellation `varies according to accommodation type` — verify rate-plan setup matches §17. **Unit `A811` publicly exposed in address block — P0 fix** | ⛔ **`No Parking` in Property Suitability chips** — false. Parking IS included per MASTER §5. Data-entry error. Also `Wheelchair Accessible` claim needs owner verify. `$250` refundable damage deposit ≠ MASTER §21's `$300` |
| **Trust messaging** | ✓ Done — Why Book Direct trust panel + `Airbnb Superhost 6+ years hosting` + `VRBO Premier Host` chips on Verified host card. **P0 investigation:** both badges are ABSENT from live MS811 Airbnb + VRBO listings — direct-site claim is a stretch until reconciled | — N/A — Superhost badge **not rendering** on this listing's host card (MASTER §11 assumes host-level; investigate) | — N/A — `Premier Host` string **absent** from live listing DOM (MASTER §11 overclaim risk; investigate) | — N/A — no `Managed by StayAtFlorida` host section rendered on live listing (MS811 hasn't shipped the Track A ship that TW2111 did 2026-07-08); add during Track A ship | ✓ `Book Direct and Save · Save on service fees by booking direct on Houfy.` — Houfy's built-in trust chip · `Identity verified · 100% response rate · Member Since February 2020` all populated |

### Next actions (MS811) *(updated 2026-07-14 evening — full 5-platform audit)*

**P0 — do today (revenue-risk / trust-risk / correctness bugs):**

1. **Airbnb — paste locked title** (`Westlight · Gulf-Front 2BR`, middot U+00B7).
2. **Airbnb — paste locked 496-char summary + 5-para "The space" body** from `AIRBNB.md`.
3. **Airbnb — uncheck 5 data-quality errors** (`Unknown body soap`, `Me more stainless steel single oven`, `Laser tag`, `Lake access`, `Free street parking`) + owner-verify in-condo `Exercise equipment`.
4. **VRBO — uncheck `Housekeeper included` and `Meal delivery` amenities.**
5. **Booking.com — paste property name** `Westlight · Gulf-Front 2BR/2BA · Sleeps 6 · Miramar Beach` (Booking normalizes middots per portfolio finding 2026-07-08).
6. **Booking.com — uncheck `Private beach area`** amenity.
7. **Booking.com — populate `Managed by StayAtFlorida` host section** (Track A precedent from TW2111 2026-07-08).
8. **Booking.com — verify unit `A811` can be suppressed** from public address display (or escalate to Booking Partner Support).
9. **Houfy — uncheck `No Parking` Suitability chip** (parking IS included per MASTER §5).
10. **Houfy — uncheck `Bay view` + `Lake view` Scenic views** (property is Gulf-front only).
11. **Houfy — uncheck `Lakefront` Location tag.**
12. **Direct site — wire `metaTitle` + `metaDescription` into `document.title` on nav** so property page indexes as `Westlight | Gulf-Front 2BR in Miramar Beach | StayAtFlorida`.
13. **Direct site — investigate Superhost + Premier Host badge status** for MS811 and decide: fix rendering on the OTA listings, scope the claim, or drop from Westlight until re-earned.

**P1 — do this week (structural + polish):**

14. **Airbnb — re-upload photos in AIRBNB.md §Photo Captions order**; set `ms-09-living-room.png` as cover.
15. **Airbnb — paste per-photo captions** per AIRBNB.md library.
16. **Airbnb — enable structured House Rules** for pets / parties / smoking / 25+ min-age.
17. **VRBO — paste locked 498-char §Short Description** from `VRBO.md`.
18. **VRBO — upload 3 missing photos** to reach the 46-slot library; set `ms-09-living-room.png` as featured.
19. **VRBO — paste per-photo captions** per VRBO.md library.
20. **VRBO — fix two 8-digit phone-number typos** in Safety contacts.
21. **VRBO — verify `Double Sofa Bed` vs `Queen Sleeper Sofa`** in Rooms & beds structured section.
22. **Booking.com — upload 4 missing photos** to reach 46-slot library + paste MASTER §18 captions.
23. **Booking.com — fill missing amenity checkboxes** (AC, hot tub, kitchen, balcony, washing machine, bathtub, beach chairs/umbrella, elevator, tennis+pickleball, fitness).
24. **Booking.com — rate plans locked 2026-08-26 evening.** Non-refundable (`62977437`) = PriceLabs parent. Standard -30D (`54557813`) = 10% more than Non-refundable. Weekly 8% off Standard. Monthly (`54563856`) = 20% cheaper than Non-refundable (can go under the $250 PriceLabs floor). See MASTER §17 + BOOKING.md.
24a. **PriceLabs — setup lock 2026-08-27 evening** on Airbnb `42299567` (copied to Booking.com child). Min/base/max **$250 / $300 / $750** (listing min cannot persist below $250). Last-minute off. Min stay 2 / 2 (1-night only as orphan gaps). **No Far Out Premium. No Safety Minimum.** Non-holiday **Nov 1–Mar 6** **$180–$210** via winter seasonal min −28% / base −35% / max −72%. SpringBreak starts **Mar 7** (base −10%). Moon Crush (Sep 29–Oct 5) and Jeepalooza (Oct 21–25) **$500–$562 / night**. Holidays (Thanksgiving, Christmas, NYE, NewYear Jan 1–4) stay premium. See MASTER §21.
25. **Booking.com — submit description via Track B review workflow** (~5–10 business days for Booking content team to publish).
26. **Houfy — update Listing Name** → `Westlight · Gulf-Front 2BR · Miramar Beach` (46 chars, middot).
27. **Houfy — reconcile refundable damage deposit** ($250 live vs $300 in MASTER §21).
28. **Houfy — owner-verify `Charcoal Grill` + `Hot Tub` chips** — move to Shared if resort-level.
29. **Houfy — uncheck `Wheelchair Accessible`** unless verified.
30. **Direct site — reconcile cancellation policy** (live `46/31–45/30` vs MASTER `60/30/30`).
31. **Direct site — add missing amenity chips** (`Bed & Bath Linens`, `Tennis/Pickleball`, `Golf`, `Bikes/Paddleboard`, `Walk to Town Center`, `Walk to Whale's Tale`, `VPS/ECP airports`).
32. **Direct site — remove stale `DVD & Entertainment` chip**.
33. **All OTAs — cascade repaste** when Airbnb + VRBO get their locked-summary refresh (Houfy inherits from VRBO in same pass).

**P2 — do this month (backport + integrity):**

34. **Backport live-only operational details** into MASTER + platform docs (Airbnb parking-pass detail, VRBO 7-item check-out, `Our prices include all fees` line, $500 pet-violation fee canonicalization, etc.).
35. **MASTER §5** — add pet-violation fee, parking-pass pricing detail, verify assigned-space count.
36. **Re-audit in 2 weeks** — save capture as `2026-07-28-portfolio-alignment.md`.

**Not owner-actionable (logged so future audits do not re-flag):**

- **VRBO auto-inserts `Evidance of pets results in $500 fee + cleaning`** after the "No pets allowed" rule — appears on every VRBO listing with a no-pets + pet-fee policy. Includes the platform-side misspelling. Cannot be edited in the owner dashboard.
- **VRBO auto-appends `Failure to complete these may result in a negative review from the host.`** after the owner-authored check-out instructions. Cannot be edited in the owner dashboard.
- **Booking.com auto-generates FAQ questions** with whatever the current property name is — will self-repair when the property name is corrected via action #5 above.
- **Booking.com nearby-restaurant list** includes gas stations (`Circle K`, `Whale's Tail at S` misspelling) — Booking-side data source, not owner-editable.

Full evidence + line-by-line diff: [`../listings/MS811/audits/2026-07-14-portfolio-alignment.md`](../listings/MS811/audits/2026-07-14-portfolio-alignment.md) (companion: [`../listings/MS811/audits/2026-07-14-airbnb-vrbo.md`](../listings/MS811/audits/2026-07-14-airbnb-vrbo.md) for the deep Airbnb + VRBO diff).

---

## 3. Portfolio-level tasks (both properties, both platforms)

These aren't per-cell — they cut across the whole tracker:

- [ ] **Consistent cancellation policy.** Currently TW2111 policy: full refund 46+ days · 50% refund 31-45 days · non-refundable within 30 days. Confirm MS811 uses the same. Update wherever it drifts.
- [ ] **Consistent check-in / check-out times.** TW2111: 4:00 PM in / 10:00 AM out. Confirm MS811 same.
- [ ] **Consistent minimum-length-of-stay (MinLOS) rules.** Set per season; document in each MASTER's §21 Fee Schedule; sync to every OTA.
- [ ] **Instant-book decision.** Currently off (per OTA default). Chief Growth Officer to evaluate whether instant-book on Airbnb VRBO would meaningfully lift bookings without harming quality of guest. Phase 3 §3.4 decision.
- [ ] **Review-response cadence.** Set to 48h. Draft a response template bank in [`../brand/HOSPITALITY.md`](../brand/HOSPITALITY.md) for common review themes.
- [ ] **UTM parameters** on every OTA outbound link. See Phase 3 §3.6.

---

## 4. Platform-specific notes

### 4.1 Website (stayatflorida.com)

- **Rendered by:** SPA (`app.js`) + static stub pages (`listing-4.html`, `listing-5.html`).
- **JSON-LD:** VacationRental + BreadcrumbList + FAQPage + Organization + LocalBusiness. Auto-generated by `scripts/generate-listing-schema.cjs`.
- **Regeneration:** `npm run generate-listing-schema && npm run generate-listing-pages && npm run generate-sitemap` after any MASTER change.
- **Deployment:** GitHub Actions → GitHub Pages on push to `main`.

### 4.2 Airbnb

- **Title budget:** 32 characters (hard).
- **Description body:** ~500 words works well; first 250 chars visible above the fold on mobile.
- **Photo order:** first photo drives ~80% of tile-click decisions in search. Test candidate: `tw-hero-view.png` (living room with Gulf view) vs. `tw-balcony-sunset.png` (balcony at golden hour).
- **Amenity ranking:** Airbnb weights ~60 amenities in search ranking. Full fill is a free lift.
- **Instant book:** off currently. If turned on, Airbnb search-boost.
- **Reviews:** currently render as `Verified Airbnb guest` on our site per MASTER §23 reverted policy.

### 4.3 VRBO

- **Title budget:** 80 characters (soft — first ~40 visible on tile).
- **Photo order:** 4-tile grid on search results — pick 4 photos that read well side-by-side, not just 1 hero.
- **Amenity ranking:** similar weight to Airbnb; VRBO also weights "family-friendly" tag heavily for our TW2111 use case.
- **Reviews:** typically show as `Verified VRBO guest` on our site.

### 4.4 Booking.com

- **Status: not listed yet on either property.** Decision to list is a Phase 3 §3.2 gate — Booking.com has higher commission (~15%) but reaches the international / European traveler segment that Airbnb + VRBO underindex on.
- **Title budget:** ~40 characters visible.
- **Property type gates:** Booking.com requires business-registered listings for some markets; verify Florida short-term-rental compliance before listing.
- **Photo order:** static hero — no rotation; pick one shot.

### 4.5 Houfy

- **Status: not evaluated yet.** Houfy is a fee-free direct-booking marketplace popular with owner-operated properties. Phase 3 §3.2 evaluation: does the reach justify a fifth channel? Consideration: Houfy skews toward smaller / more independent operators; not a natural fit for the boutique-collection positioning unless traffic proves out.

---

## 5. Sync workflow

When any MASTER §N changes and needs to propagate:

```
docs/listings/{PROPERTY}/MASTER.md
        │
        ├─► docs/listings/{PROPERTY}/WEBSITE.md   → auto-derived, drives config.js + app.js
        ├─► docs/listings/{PROPERTY}/AIRBNB.md    → manual copy to Airbnb host dashboard
        ├─► docs/listings/{PROPERTY}/VRBO.md      → manual copy to VRBO host dashboard
        ├─► docs/listings/{PROPERTY}/BOOKING.md   → manual copy to Booking.com host dashboard
        └─► docs/phase-3/brand-property-master.md → periodic distillation refresh
```

The website side of the pipeline is automated (via the `generate-*` scripts). The three OTA sides are manual — every OTA update means logging into the host dashboard and pasting from the derived doc. See [`../sync/SYNC_RULES.md`](../sync/SYNC_RULES.md) for the canonical workflow.

Nothing in this tracker is an *authoring* surface. Author in MASTER; sync to the platform; check the box here.

---

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-07-06 | Tracker created. TW2111 + MS811 baselines captured across 5 platforms × 8 elements. Portfolio-level tasks + platform-specific notes documented. | Cursor AI Operating System — Phase 3 planning pass |
| 2026-07-14 | MS811 matrix + next-actions **refreshed against live audit** of Airbnb `42299567` and VRBO `1892927`. Confirmed VRBO headline matches 2026-07-09 lock; confirmed Airbnb title is still legacy (`Luxury Gulf-Front Condo \| Westlight \| Sleeps 6`). Surfaced 6 amenity data-quality errors on Airbnb and 2 service-level overclaims on VRBO. Full report: [`../listings/MS811/audits/2026-07-14-airbnb-vrbo.md`](../listings/MS811/audits/2026-07-14-airbnb-vrbo.md). | Cursor AI Operating System — 2026-07-14 OTA live audit pass |
| 2026-07-14 | MS811 audit **correction pass** — reclassified two VRBO strings as platform-inserted boilerplate (owner-confirmed): the `Evidance of pets results in $500 fee + cleaning` line auto-appended to the "No pets allowed" rule, and the `Failure to complete these may result in a negative review from the host.` line auto-appended after check-out instructions. Both removed from the P0/P1 action list and logged under "Not owner-actionable" so future audit passes do not re-flag them. Original P0 count dropped from 6 to 5; original P1 count dropped from 14 to 13. | Cursor AI Operating System — 2026-07-14 audit correction pass |
| 2026-07-14 | MS811 audit **scope expansion** — extended live audit from Airbnb + VRBO to full 5-platform portfolio (Airbnb + VRBO + Booking.com + Houfy + StayAtFlorida direct site) against 9 verification elements (property name, description, amenities, house rules, photos, captions, branding, check-in instructions, welcome messaging). Alignment scores: StayAtFlorida 9/10, Houfy 7/10, VRBO 7/10, Airbnb 3/10, Booking.com 1/10. **New critical findings:** (a) Booking.com listing is fully pre-rebrand (`Deluxe 2 bedroom Beach Front at Majestic Sun Resort` everywhere, zero `Westlight` mentions, unit `A811` publicly exposed in address block, 5.5/10 aggregate on 2 reviews); (b) Houfy `No Parking` chip in Property Suitability is a **false data-entry error** — parking IS included per MASTER §5 (single most damaging item on the live Houfy listing); (c) Houfy overclaims `Bay view`, `Lake view`, `Lakefront` (property is Gulf-front only); (d) Houfy $250 refundable damage deposit ≠ MASTER §21's $300; (e) direct site meta title falls back to site-wide string instead of per-property `metaTitle` from config — SEO indexing bug; (f) direct site cancellation policy `46+ / 31–45 / inside 30` diverges from MASTER §17's `60 / 30 / inside 30`; (g) direct site claims Superhost + Premier Host badges that don't render on the live Airbnb + VRBO MS811 listings — trust-integrity gap. Action list expanded from 15 items (Airbnb + VRBO) to 36 items across all 5 platforms, organized P0/P1/P2. **Booking.com description edits gated behind Track B** (Booking content-team review, ~5–10 business days per TW2111 precedent). Full evidence + 5-platform × 9-element alignment matrix + priority action list: [`../listings/MS811/audits/2026-07-14-portfolio-alignment.md`](../listings/MS811/audits/2026-07-14-portfolio-alignment.md). | Cursor AI Operating System — 2026-07-14 5-platform portfolio audit pass |
| 2026-08-26 | MS811 Booking.com rate plans locked: Non-refundable = PriceLabs parent; Standard -30D = 10% more than Non-refundable; Weekly 8% off Standard; Monthly 1% off Standard. Item 24 updated. **Superseded same evening** — Monthly now 20% cheaper than Non-refundable. | Cursor — Westlight PriceLabs session |
| 2026-08-26 | MS811 Booking.com Monthly lock: 20% cheaper than Non-refundable. Standard +10% vs NR and Weekly −8% vs Standard unchanged. Item 24 updated. | Cursor — Westlight PriceLabs session |
| 2026-08-26 | TW2111 Booking.com rate plans locked to the same structure as MS811: Non-Refundable Deal = PriceLabs parent; Standard -30 days = 10% more than NR; Weekly 8% off Standard; Monthly 20% cheaper than NR. Occupancy 8. Tidewater PriceLabs floors stay $125/$300/$750. Galveston not touched. | Cursor — Tidewater PriceLabs session |
| 2026-08-27 | MS811 PriceLabs setup lock: $250/$300/$750, last-minute off, min stay 2/2, Moon Crush + Jeepalooza ≥ $500. Item 24a added. TW2111 / Galveston not touched. | Cursor — Westlight PriceLabs session |
| 2026-08-27 | MS811 winter/spring cut: Far Out off, Safety Min off, SpringBreak −10%, SpringShoulder −20/−45. Nov–May weekdays now $250. Item 24a updated. TW2111 / Galveston not touched. | Cursor — Westlight PriceLabs session |
| 2026-08-27 | MS811 Moon Crush/Jeepalooza capped at $562 (was $750 on Oct weekends / ~$938 on Booking.com). Winter weekdays stay $250. Item 24a updated. | Cursor — Westlight PriceLabs session |
| 2026-08-27 | MS811 winter non-holiday Nov 1–Mar 6 set to **$180–$210** (seasonal min −28%; listing min stays $250). Holidays kept. SpringBreak starts Mar 7. Moon Crush/Jeepalooza still $500–$562. Item 24a updated. | Cursor — Westlight PriceLabs session |
