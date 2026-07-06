# TW2111 — External Review Source Archive

**Purpose:** Verbatim OTA review data captured from public listing pages, kept alongside `MASTER.md` as a source-of-truth artifact for the Review Highlight Bank (see [`../MASTER.md`](../MASTER.md) §18) and for the review-aggregation initiative in `docs/phase-3/revenue-impact-tracker.md` #4.

## What's in here

| File | Source | Captured | Reviews | Aggregate |
|---|---|---|---|---|
| [`2026-07-06-vrbo.md`](./2026-07-06-vrbo.md) | VRBO listing `3853978` reviews modal | 2026-07-06 | 19 | 9.4/10 (Exceptional) |
| [`2026-07-06-airbnb.md`](./2026-07-06-airbnb.md) | Airbnb listing `1102297481087079379` reviews modal | 2026-07-06 | 11 | 4.91/5 |
| [`2026-07-06-booking-com.md`](./2026-07-06-booking-com.md) | Booking.com listing `fun-in-the-sun-panama-city-beach1` reviews modal | 2026-07-06 | 3 | 9.7/10 (Exceptional) |

**Houfy:** `fun-in-the-sun/115445` listing shows **0 visible reviews for TW2111** as of 2026-07-06 (MS811's Houfy listing has 50). This is itself a Phase 3 finding — see review-solicitation initiative #44 in the revenue-impact tracker.

**Total OTA reviews on file: 33.** This exceeds the ≥25-review Success Metric target for initiative #4.

### Portfolio finding — Booking.com listing exists

The Booking.com scrape surfaced a listing that Phase 3 initiative #11 had assumed did not exist yet. Row #11 (Booking.com Platform Optimization Assessment) has been re-scoped from *"evaluate whether to list"* → *"evaluate + rebrand the existing listing"* — see the tracker entry for details. URL slug is legacy (`fun-in-the-sun-panama-city-beach1`) but Booking.com does not allow slug edits on live listings, so this becomes the same rebrand-in-place trade-off already accepted for Houfy.

## Capture method

Public listing review modals scraped via the Cursor browser MCP + CDP `Runtime.evaluate` on 2026-07-06. Only publicly visible content (reviewer first name + last initial, month/year, star rating, review body, category breakdowns, owner responses). No PII beyond what's already public on each OTA. See the changelog entry in [`../MASTER.md`](../MASTER.md) for the same date for the audit trail.

Re-capture cadence: monthly, or on-demand before any Website review-section refresh.

## Curation status

- 🟡 **Reviews captured, awaiting owner curation.** The Website today renders 10 reviews (see `config.js` `REVIEWS` array). Growing that to 25+ requires owner review of the raw quotes, selection of which to publish, and a decision on the naming convention (real first names as they appear on OTA vs. anonymized — see [`../MASTER.md`](../MASTER.md) §23).

- **When curated for Website:** copy selected quotes into `config.js` `REVIEWS` array, update `MASTER.md` §18 Review Highlight Bank, regenerate `listing-4.html` static page, add `schema.org/Review` markup with `Person` authorship.

- **Do NOT publish quotes verbatim without owner sign-off.** Some reviews contain minor complaints (elevator wait times, one linen-supply incident) that are already resolved on-platform via owner responses and may not need surfacing.

## Owner-response inventory

Simone has one owner response captured on the VRBO 6/10 review from Shenna O. (May 2024). It's a professional, detailed reply that already addresses the concerns raised. When we build the Website review section:

- Consider showing the owner-response feature (it's a strong hospitality signal)
- Keep the response verbatim; do not edit tone

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-07-06 | Folder created. First capture of VRBO + Airbnb reviews via Cursor browser MCP. 30 total quotes on file. Houfy TW2111 has 0 visible reviews (recorded as a finding, not a bug in the scrape). | Cursor AI Operating System — Phase 3 initiative #4 first pass |
