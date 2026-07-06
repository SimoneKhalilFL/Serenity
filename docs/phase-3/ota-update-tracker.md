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

1. **Draft Airbnb title (≤32 chars).** Working candidates: `Twenty First · PCB Gulf View 3BR` (32), `Twenty First 3BR Gulf-Front PCB` (32), `Gulf-Front 3BR · Twenty First PCB` (33 — trim). Owner picks; A/B against a second candidate if allowed.
2. **Draft VRBO title (≤80 chars).** Working candidate: `Twenty First — 3BR Gulf-Front Beachfront Condo · Panama City Beach · Sleeps 8` (77 chars).
3. **Sync descriptions** — copy MASTER §14 to `docs/listings/TW2111/AIRBNB.md` and `VRBO.md` **minus the direct-booking value line** (OTAs strip these; save the round-trip).
4. **Amenity fill audit.** Log into Airbnb + VRBO host dashboards; check every amenity checkbox that MASTER §6 groups list. Missing amenities depress search ranking on all three big OTAs.
5. **Photo captions.** MASTER §18 library exists — port to Airbnb + VRBO per-photo captions in the host UI.
6. **House rules screen audit.** Both platforms have a rules-checklist UI; verify pets/parties/quiet-hours/smoking match MASTER §17.

---

## 2. MS811 — Majestic Sun 811

### Matrix

| Element | Website (stayatflorida.com) | Airbnb | VRBO | Booking.com | Houfy |
|---|---|---|---|---|---|
| **Titles** | ⚠ Drift — homepage card updated 2026-07-06; property page hero copy still legacy | ⚠ Drift — needs Phase 3 rebrand pass | ⚠ Drift — needs Phase 3 rebrand pass | ✗ Missing — not listed | ✗ Missing |
| **Descriptions** | ⚠ Drift — body still legacy; homepage `cardShortDescription` new | ⚠ Drift — legacy | ⚠ Drift — legacy | ✗ Missing | ✗ Missing |
| **Photo order** | ⚠ Drift — 7-slot hero rotation not yet chosen from 57-photo library | ⚠ Drift — first-photo audit pending | ⚠ Drift — 4-tile grid audit pending | ✗ Missing | ✗ Missing |
| **Captions** | ✗ Missing — no MS811 §18 caption library yet | ✗ Missing | ✗ Missing | ✗ Missing | ✗ Missing |
| **Amenities** | ⚠ Drift — grouped by legacy labels (General/Kitchen & dining/Resort & outdoors); Phase 3 target is 4-canonical grouping | ⚠ Drift — 100% fill pending | ⚠ Drift — 100% fill pending | ✗ Missing | ✗ Missing |
| **FAQs** | ✗ Missing — no MS811 FAQ block on property page yet | — N/A — embed in description | — N/A | — N/A | — N/A |
| **House rules** | ⚠ Drift — legacy rules on property page; MASTER §17 not yet finalized for MS811 | ⚠ Drift — audit pending | ⚠ Drift — audit pending | ✗ Missing | ✗ Missing |
| **Trust messaging** | ✗ Missing — Why Book Direct trust panel not yet added to MS811 property page | — N/A | — N/A | — N/A | — N/A |

### Next actions (MS811)

MS811 is behind TW2111 on almost every element — the Phase 3 §3.1 rebrand pass drives most of these. Sequence:

1. **Finalize MS811 tagline + hero eyebrow.** Currently placeholder `8th-Floor Gulf Views at Majestic Sun`.
2. **Write MS811 MASTER §14 long description** to TW2111 parity (voice, tone, structure).
3. **Choose 7-slot hero rotation** from the 57-photo gallery.
4. **Build MS811 §18 Photo Caption Library** — needs the hero-selection step first.
5. **Build MS811 §22 FAQ block** — 10 items, same slot structure as TW2111 but Destin-area answers.
6. **Regroup amenities** into the four canonical categories.
7. **Add Why Book Direct trust panel** — parity with TW2111 §14d.
8. **Once website is updated**, port to Airbnb + VRBO.

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
