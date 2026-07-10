# MS811 (Westlight) — External Review Source Archive

**Purpose:** Verbatim OTA review data captured from public listing pages for Westlight (MS811), kept alongside `../MASTER.md` as a source-of-truth artifact for the Review Highlight Bank and for the Website review section (parity with TW2111's Phase 3 initiative #4).

## What's in here

| File | Source | Captured | Reviews | Aggregate |
|---|---|---|---|---|
| [`2026-07-10-vrbo.md`](./2026-07-10-vrbo.md) | VRBO listing `1892927` reviews modal (`pwaDialog=summary-reviews-46259605`) | 2026-07-10 | 64 of 67 (3 blank-content cards skipped) | 9.8/10 (Exceptional) |
| [`2026-07-10-airbnb.md`](./2026-07-10-airbnb.md) | Airbnb listing `42299567` reviews modal | 2026-07-10 | 22 | 4.86/5 |

**Not on file yet:**

- **Booking.com** — MS811's Booking.com listing (URL: `https://www.booking.com/hotel/us/deluxe-2-bedroom-beach-front-at-majestic-sun-resort.html`) had reviews captured during the earlier rebrand pass (per MASTER §14 platform matrix), but has not yet been paginated-scraped into this archive. Deferred pending the same TW2111-style pass.
- **Houfy** — MS811's Houfy listing has 50 visible reviews per portfolio findings; not yet in-scope for this archive.

**Total OTA reviews on file for MS811:** 86 (64 VRBO + 22 Airbnb). This is **2.6× the volume** available for TW2111 (33) — MS811 has the strongest OTA review depth in the portfolio.

## Capture method

Public listing review modals scraped via the Cursor browser MCP + CDP `Runtime.evaluate` on 2026-07-10. Only publicly visible content (reviewer first name + last initial, month/year, star rating, review body, category breakdowns, owner responses). No PII beyond what's already public on each OTA.

VRBO required six iterations of the "More reviews" pagination button to load all 67 cards. Airbnb required an emulated 1440×900 viewport (`Emulation.setDeviceMetricsOverride`) + a synthetic resize event to trigger React hydration inside the sandboxed browser session.

Re-capture cadence: monthly, or on-demand before any Website review-section refresh.

## Curation status

- **Reviews captured, awaiting owner curation.** The current Website review section renders TW2111 reviews only (`config.js` `REVIEWS` array). Adding MS811 requires:
  1. Owner review of the raw quotes below
  2. Selection of which to publish (target: 10–15 curated for launch, mirroring TW2111 pattern)
  3. **Confirmed portfolio-parity decision:** use **first-name-only** for author display across MS811 reviews (overrides MASTER §23's legacy full-name policy specifically for MS811; matches TW2111's rendering)

- **When curated for Website:** copy selected quotes into `config.js` `REVIEWS` array with `propertyId: 5`, update `MASTER.md` §18 Review Highlight Bank for Westlight, regenerate `listing-5.html` static page, ensure `schema.org/Review` markup is emitted with `Person` authorship.

- **Do NOT publish quotes verbatim without owner sign-off.** Several reviews contain minor complaints (cleanliness on a June 2022 stay, elevator on a June 2023 stay) that would benefit from owner responses on-platform before Website surfacing.

## Content-edit flags (must be resolved before publishing)

| Review | Issue | Recommended edit |
|---|---|---|
| VRBO #15 (James H., May 2023) | Contains "8th floor" reference — violates portfolio §21 forbidden-language rules | Remove or paraphrase to "great views" |
| VRBO #16 (duane r., Feb 2026) | Says "Gulf of America view" — politically charged, off-brand for StayAtFlorida | Paraphrase to "Gulf view" |
| VRBO #31 (Phyllis B., May 2022) | Extensive maintenance complaint (6/10 rating) | Not recommended for Website; retain as internal turnover-QA signal |
| VRBO #58 (Kim H., Oct 2020) | Cleanliness complaint | Trim second half if publishing |
| Airbnb #6 (Karla, Apr 2026) | Cleanliness complaint (3★, professional owner response on-platform) | Not recommended for Website; keep the owner response visible on Airbnb |

## Loved-for chip candidates (Westlight review-driven themes)

Based on frequency-of-mention across 86 captured reviews:

| Chip label | Mention count | Sources |
|---|---|---|
| Amazing Gulf view | 55+ | VRBO 40+ · Airbnb 13 |
| Steps to the beach | 40+ | VRBO 30+ · Airbnb 8 |
| Attentive host | 30+ | VRBO 25+ · Airbnb 6 (Hospitality chip) |
| Spotless | 25+ | VRBO 20+ · Airbnb 5 |
| Fully stocked kitchen | 10 | VRBO 8 + Airbnb 2 |
| Guests come back | 20+ | VRBO 15+ · Airbnb 5+ |

These are the raw signals for the Loved For chip strip that will appear above the Website review section (initiative #42 parity from TW2111 sprint 1).

## Owner-response inventory

- **VRBO:** 0 owner responses captured. Recommended follow-up: Simone add a professional service-recovery response to Phyllis B. (June 2022) and Kim H. (October 2020) for future-guest visibility.
- **Airbnb:** 1 owner response captured (Karla, April 2026 — cleanliness/kitchen items). It's a professional service-recovery reply that already addresses the concerns. When we build the Website review section, consider surfacing owner-response as a feature (parallel to TW2111's Shenna O. VRBO reply pattern).

## Cross-portfolio pattern: cleanliness turnover QA

Two cleanliness-related reviews (Karla on Airbnb April 2026 3★ + Kim H. on VRBO October 2020 8★) both flag turnover cleaning specifically. This is a portfolio-level signal, not just an MS811 issue — worth revisiting the cleaner briefing + a spot-check protocol before peak-season 2026 pushes review volume higher.

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-07-10 | Folder created. First capture of VRBO (64 of 67 published reviews) + Airbnb (22 of 22) for Westlight via Cursor browser MCP. 86 total quotes on file — 2.6× TW2111's volume. First-name-only rendering rule confirmed via owner input (overrides MASTER §23 for MS811). Booking.com and Houfy captures deferred. | Cursor AI Operating System — parity with TW2111 review-archive initiative |
