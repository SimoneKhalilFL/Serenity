# Phase 3 Roadmap — StayAtFlorida

**Owner:** Simone Khalil (property owner) · Cursor AI Operating System (execution).
**Status:** Planning (opened 2026-07-06). No production changes shipped from this doc yet.
**Preceded by:** Phase 2 (rebrand, AI Operating System, TW2111 conversion optimization + Homepage Polish + Pricing/Logistics cleanup). See [`../listings/TW2111/MASTER.md#changelog`](../listings/TW2111/MASTER.md#changelog) for the last shipped batch.

---

## 1. Objective

Build the foundation for revenue growth, direct bookings, and OTA consistency across the StayAtFlorida portfolio.

Five measurable outcomes are the target:

| # | Outcome | Baseline (Phase 2 exit) | Phase 3 target |
|---|---|---|---|
| 1 | **Direct bookings** as a share of total bookings | ~unknown — no tracking wired | ≥25% by end of Phase 3 |
| 2 | **OTA dependence** (share of nights sold via Airbnb + VRBO + Booking) | ~100% today | ≤75% by end of Phase 3 |
| 3 | **Occupancy** (portfolio-wide, rolling 12 months) | TBD — establish baseline in Q1 Phase 3 | +5 pts absolute vs. baseline |
| 4 | **ADR** (average daily rate, portfolio-wide) | Base $225 (TW2111) / Base $300 (MS811); PriceLabs-adjusted | +5% blended vs. Phase 2 exit |
| 5 | **Repeat guest rate** | ~unknown — no tracking wired | ≥15% of bookings are repeat guests |

**Guardrail:** every Phase 3 shipping decision must first pass the [`../brand/BRAND_GUIDELINES.md`](../brand/BRAND_GUIDELINES.md) + [`../brand/QA_CHECKLIST.md`](../brand/QA_CHECKLIST.md) checks. Growth never overrides brand hygiene.

---

## 2. Non-Goals (Phase 3)

Explicit exclusions so the workstreams stay focused:

- **No full site redesign.** The current design system stays. Layout tweaks are allowed only inside a workstream deliverable (see §3.4).
- **No large visual changes to the homepage.** Homepage was polished in Phase 2 (July 2026). Only surgical changes tied to a measured conversion problem.
- **No new brand identities.** StayAtFlorida is the master brand. Property brands remain `Twenty First` and (once launched) `Majestic Sun 811`.
- **No urgency / scarcity language.** *"3 people are looking at this stay"*, *"Only 2 left!"*, countdown timers — banned as long as the brand rules stand. See [`../brand/BRAND_GUIDELINES.md`](../brand/BRAND_GUIDELINES.md).
- **No new OTA channels** until the four existing platforms are optimized. Do not add Houfy, Whimstay, Google Vacation Rentals, or any other channel before Phase 3 §3.2 exits.

---

## 3. Workstreams

Six workstreams run in parallel with staggered start dates. Each has an owner (from [`../brand/AGENTS.md`](../brand/AGENTS.md)), a definition of done, and a set of dependencies.

Numbering follows the user's Phase 3 request verbatim.

### 3.1 Brand / Property Master

**Owner:** Brand Director + Content Sync Agent.
**Rationale:** Before we can update five surfaces (Website + Airbnb + VRBO + Booking.com + a fifth channel) with any consistency, we need a single source of truth per property that every surface derives from. Phase 2 already established this pattern for TW2111 via `docs/listings/TW2111/MASTER.md`. Phase 3 extends it to MS811 and to shared portfolio-level rollups.

**Deliverables:**

- [ ] [`brand-property-master.md`](./brand-property-master.md) — this folder's canonical rollup: brand positioning + per-property descriptions, amenities, FAQs, guest profiles, photo order, OTA copy, review highlights. Sourced *from* the per-listing MASTER docs, not a replacement for them.
- [ ] MS811 MASTER.md filled to the same completeness bar as TW2111 (description, FAQ, amenity grouping, photo captions, JSON-LD-ready). Currently much of MS811 is inherited from the legacy pre-rebrand state.
- [ ] MS811 rebrand tagline + hero eyebrow finalized (currently placeholder `8th-Floor Gulf Views at Majestic Sun`).
- [ ] Portfolio-level `PROPERTY_PORTFOLIO.md` (already exists — audit and refresh).
- [ ] Review highlight bank (short pull-quotes usable across Website + OTAs + email) — 10 quotes per property.

**Dependencies:** none. This is the foundation for all other workstreams. Blocks §3.2 (OTA) and §3.4 (conversion).

**Definition of done:** every OTA sync task in [`ota-update-tracker.md`](./ota-update-tracker.md) can be executed by pulling from MASTER + brand-property-master without any new interpretive decisions.

**Sequencing:** Start Week 1. Target completion Week 4.

---

### 3.2 OTA Optimization

**Owner:** Content Sync Agent + Marketing / Growth Officer.
**Rationale:** OTAs are still the dominant revenue channel. Direct bookings will grow, but we don't cut off the OTA supply chain — we optimize it. Every OTA has its own title character budget, search-ranking heuristics, photo-order weight, and review-response game. Phase 3 gets each listing on each platform to a *deliberately chosen* configuration, not the accidental one we're on today.

**Deliverables:**

- [ ] Titles rewritten within each platform's character budget (Airbnb 32 chars, VRBO 80 chars, Booking.com ~40 chars) — see [`ota-update-tracker.md`](./ota-update-tracker.md).
- [ ] Descriptions updated to match §3.1 MASTER — no drift.
- [ ] Photo order per platform tuned to platform-specific "first tile" behavior (Airbnb first photo drives ~80% of tile-click decisions; VRBO shows 4 tiles side-by-side; Booking.com shows a static hero).
- [ ] Amenity checklists filled to 100% on all platforms (missing amenities hurt search ranking on all three big OTAs).
- [ ] House rules aligned to MASTER §17 across all platforms.
- [ ] Review-response cadence set (respond to every review within 48h with a personalized reply — improves host score on Airbnb + VRBO both).
- [ ] Cancellation policy verified consistent (currently `Full refund 46+ days, 50% 31-45 days, non-refundable within 30 days` per TW2111 MASTER — same on MS811? confirm).
- [ ] Instant-book decision: on or off, per platform, with a documented reason.

**Dependencies:** §3.1 must be at least 60% complete before OTA work starts (need MASTER stable).

**Definition of done:** every row × column cell in [`ota-update-tracker.md`](./ota-update-tracker.md) is either `✓ Done` or `— N/A` — no `Pending` cells.

**Sequencing:** Start Week 3. Target completion Week 8.

---

### 3.3 SEO Expansion

**Owner:** SEO Expert + Content Sync Agent.
**Rationale:** The site has good technical SEO (JSON-LD, sitemap, structured metadata) but almost no content depth. Google can't rank us for `Tidewater Beach Resort rental`, `Miramar Beach 2BR condo`, `Panama City Beach family vacation` because we don't publish anything on those topics. Phase 3 fills that gap.

**Deliverables:**

- [ ] Seven guide pages published (see [`seo-content-plan.md`](./seo-content-plan.md) for the full plan): Tidewater Beach Resort Guide, Majestic Sun Resort Guide, Panama City Beach family guide, Miramar Beach family guide, restaurant guides (2 — one per city), things-to-do guides (2), rainy-day guides (2).
- [ ] Each guide ≥1,200 words, with property CTAs inline (`View Twenty First` / `View Majestic Sun 811`).
- [ ] Internal linking pass — every guide links to at least one property + at least two other guides.
- [ ] `sitemap.xml` regenerated + submitted to Search Console.
- [ ] `robots.txt` audited (currently allow-all; verify no accidental disallows).
- [ ] Google Search Console + Bing Webmaster verified (probably already done — confirm).
- [ ] Query-performance baseline captured in Search Console for the current property pages before publishing the guides — so we can measure lift.

**Dependencies:** §3.1 (MASTER) at least 40% done — guides quote canonical descriptions and photos.

**Definition of done:** all seven guides published; Search Console shows ≥50 impressions/week for the target keyword of each guide; at least three guides rank in the top 20 for their primary keyword.

**Sequencing:** Start Week 4 (after §3.1 stabilizes). Target: two guides/month, all seven by Week 20.

---

### 3.4 Conversion Optimization

**Owner:** UX Director + Chief Growth Officer.
**Rationale:** Phase 2 got the TW2111 property page to a strong first-conversion state. Phase 3 does the same for MS811 and homepage, plus tackles the deferrals from Phase 2 explicitly listed in the [TW2111 MASTER §14b changelog](../listings/TW2111/MASTER.md#changelog).

**Deliverables (candidates — final list gated on a real audit):**

- [ ] MS811 property page brought to TW2111 parity (Before You Arrive card, Why Book Direct trust panel, Day in the Life narrative, FAQ reorder, amenity grouping — all deferred in Phase 2).
- [ ] Homepage inquiry form (deferred in Phase 2 — evaluate whether to add given that `Send an Inquiry` button now routes to modal).
- [ ] Sticky mobile CTA on property pages (deferred in Phase 2 — measure friction first).
- [ ] "Hosted by Simone" above-the-fold trust chip on both property pages (deferred in Phase 2, owner still opted out; revisit).
- [ ] A/B test infrastructure (see §3.6) live before any conversion change ships.
- [ ] Booking-confirmation email templates (currently ad-hoc via Simone's inbox — package into a repeatable template).

**Dependencies:** §3.6 (analytics) must be live before we ship any conversion change we want to attribute. Otherwise we're guessing.

**Definition of done:** each shipped change has a documented lift measurement (either A/B test or pre/post 30-day comparison) in [`revenue-impact-tracker.md`](./revenue-impact-tracker.md).

**Sequencing:** Start Week 6. Target: one change/2 weeks, ongoing.

---

### 3.5 Revenue Optimization

**Owner:** Chief Growth Officer + Content Sync Agent (for pricing-data sync).
**Rationale:** We have per-day pricing data now (`data/pricing-4.json` for TW2111), but it's manually transcribed from PriceLabs screenshots. That's a Phase 2 deliverable that shipped as a stopgap. Phase 3 turns it into an actual pipeline and starts using it for revenue-driving decisions (yield management, MinLOS, gap-night discounts, etc.).

**Deliverables:**

- [ ] PriceLabs API wired (scaffolded in `scripts/sync-pricelabs.cjs`; needs API key + endpoint). Daily auto-sync into `data/pricing-{id}.json`.
- [ ] MS811 pricing data ingested (currently only TW2111 has per-day data).
- [ ] MinLOS (minimum length of stay) rules documented and consistent across OTAs.
- [ ] Gap-night discount rule (if a 2-day gap opens up between two bookings, offer 15% off) — evaluated, decided, either shipped or explicitly deferred.
- [ ] Direct-booking discount vs. OTA pricing — currently we match Airbnb pricing on the direct site. Consider a `-10%` direct-only line to widen the "book direct saves you $X" gap.
- [ ] Refundable damage deposit → damage-waiver product evaluation (Waivo / SafelyStay).
- [ ] Seasonal calibration refresh at least twice per year (May + October).

**Dependencies:** §3.6 (analytics) — need to see the revenue impact per lever, not just guess.

**Definition of done:** each pricing lever has a documented rationale + a measured outcome. See [`revenue-impact-tracker.md`](./revenue-impact-tracker.md).

**Sequencing:** Start Week 8. Ongoing.

---

### 3.6 Analytics / A-B Testing

**Owner:** Chief Growth Officer + Software Architect.
**Rationale:** Everything above measures a lift we can't currently see. Phase 3 first has to build the ruler, then use it.

**Deliverables:**

- [ ] Web analytics live and validated: sessions, top pages, referrers, conversions (calculator submits, `Send an Inquiry` clicks, `Email to Book` clicks). Google Analytics 4 or a lightweight privacy-friendly alternative (Plausible / Fathom / Umami — evaluate).
- [ ] Server-side conversion event: track when a booking closes (currently we only track the *intent* — the modal-submit — not the *outcome*).
- [ ] Attribution model: first-touch vs. last-touch decision, documented.
- [ ] UTM parameter schema: standardize `utm_source` / `utm_medium` / `utm_campaign` for OTA outbound links, email signatures, guides.
- [ ] A/B test framework: pick a tool (LaunchDarkly / GrowthBook / Statsig / rolling-your-own). Ship one test end-to-end before shipping a real one.
- [ ] Dashboard: one page (Notion / Google Sheet / Retool) showing the five Phase 3 outcome metrics from §1, refreshed at least weekly.

**Dependencies:** none. This is the *first* workstream to complete because every other workstream depends on it.

**Definition of done:** the five outcomes in §1 have live baselines and are being tracked at least weekly.

**Sequencing:** Start Week 1. Target completion Week 3. This is the critical path.

---

## 4. Sequencing Overview

```
Week   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
       │───────── §3.6 Analytics ─────│
       │─────────────────── §3.1 Brand/Property Master ──────────────────│
                   │──────────────────── §3.2 OTA Optimization ──────────────────────│
                           │──────────────────────── §3.3 SEO Expansion ─────────────────────────│
                                       │───────────── §3.4 Conversion (ongoing) ─────────────────│
                                                       │─── §3.5 Revenue (ongoing) ──────────────│
```

Critical path: §3.6 (analytics) → §3.1 (MASTER) → everything else in parallel.

---

## 5. Cadence

- **Weekly:** update [`revenue-impact-tracker.md`](./revenue-impact-tracker.md) — status column, notes, any shipped/blocked initiatives.
- **Bi-weekly:** update [`ota-update-tracker.md`](./ota-update-tracker.md) — cell-by-cell status refresh.
- **Monthly:** review this roadmap's §1 outcomes vs. targets. If we're >20% off the target trajectory, adjust the sequencing.
- **End of Phase 3:** freeze pass — every workstream's "definition of done" must pass, or the deferrals go into a Phase 4 backlog document.

---

## 6. Rules for Phase 3 Changes

Any Phase 3 change to production code follows the existing workflow:

1. **MASTER first.** Update the source of truth in `docs/listings/{PROPERTY}/MASTER.md` before touching `config.js` / `app.js` / HTML.
2. **Docs-first commit is fine.** Not every doc update needs an immediate production ship. Docs can lead production by weeks.
3. **QA gate.** Every production commit must pass the existing [`../brand/QA_CHECKLIST.md`](../brand/QA_CHECKLIST.md) checks — including the forbidden-language grep.
4. **No brand-rule exceptions.** If a Phase 3 idea requires overriding a brand rule (Serenity Rentals reference, floor-number leak, urgency language, review pseudonyms), the answer is no. Rewrite the idea.
5. **Track every initiative.** Every change ships with an entry in [`revenue-impact-tracker.md`](./revenue-impact-tracker.md), even if the KPI outcome is TBD. No orphan changes.

---

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-07-06 | Roadmap created. Six workstreams, sequencing, cadence, and non-goals defined. No production changes yet. | Cursor AI Operating System — Phase 3 planning pass |
