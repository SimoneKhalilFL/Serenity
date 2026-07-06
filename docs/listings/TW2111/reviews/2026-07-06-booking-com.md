# TW2111 — Booking.com Review Capture (2026-07-06)

**Source:** `https://www.booking.com/hotel/us/fun-in-the-sun-panama-city-beach1.html#tab-reviews`
**Captured:** 2026-07-06 via Cursor browser MCP → CDP `Runtime.evaluate` on the `Read all reviews` modal
**Reviews on file:** 3 (all Booking.com reviews visible on the public listing)

## Platform-level findings (added to Phase 3 tracker)

- **The listing already exists on Booking.com.** Row #11 (Booking.com Platform Optimization Assessment) was scoped as *"should we list?"* — reality is the listing has been live for at least 6 months (oldest review Dec 2025 / reviewed Jan 2026). Re-scope needed: **evaluate + rebrand the existing listing**, not evaluate whether to list.
- **Current Booking.com title:** `Oceanfront 3BR&3BA at Tidewater Resort - Pools - Sleeps 8` — already rebranded away from legacy `Fun in the Sun` (title-side hygiene is OK), but:
  - URL slug is stuck as `fun-in-the-sun-panama-city-beach1` (Booking.com does not allow slug edits on live listings)
  - Title overemphasizes `Tidewater Resort` (against BRAND_GUIDELINES rule) and uses awkward compound `3BR&3BA` — should be rewritten
- **Only 3 reviews on Booking.com vs. 19 VRBO + 11 Airbnb.** Reinforces initiative #44 (post-checkout review-solicitation email) — Booking.com in particular is under-reviewed
- **Simone has one owner response captured** (to Stephanie's fee complaint) — same professional pattern as her VRBO response to Shenna O. Good hospitality signal, worth preserving on any Website review-section design

## Aggregate scores

| Metric | Score |
|---|---|
| **Overall guest review score** | **9.7 / 10 — Rated Exceptional** |
| Host | 10 |
| Facilities | 10 |
| Cleanliness | 10 |
| Comfort | 10 |
| Value for money | 10 |
| Location | 10 |
| Free Wifi | 10 |

All 3 reviews score in the `Wonderful: 9+` band. All 3 are English-language. Trip mix: 2 Family · 1 Solo · (1 also flagged as Business — reviewer overlap).

## Reviews

### 1. Candice — 10/10 — April 2026

- **Location:** United States
- **Room type:** Three-Bedroom Apartment
- **Stay:** 1 night in April 2026
- **Trip type:** Family
- **Reviewed:** April 22, 2026
- **Title:** *"Would come back but would hopefully be when it is not so busy."*

**Liked:**

> Absolutely loved the room. It exceeded my expectations. I was very impressed with the layout and decor. The kitchen had everything needed for anything thought of. I've stayed at other condos that I had to go buy kitchen appliances just to cook the meals I wanted either due to not even having it or what was there was missing something or damaged. Loved that there was a coffee shop and souvenir shop there. Loved how close it was to the ocean and the umbrellas and chairs that were set up wasn't so many no one else who didn't rent one could have a view or sit close to the water.

**Disliked:**

> The elevators. Not enough and when it was full it would still stop at every floor on its way. When we first got on one there was a worker operating the elevator that would have it bypass any more floors once it was full. It was wonderful. Line was not long and kept people moving. Once he wasn't there the line was very long and frustrating people to where they would cut in line and that only starts arguments most of the time. Got separated from my husband because a lady did just that. He ended up taking the stairs because of the wait.

---

### 2. Stephanie — 10/10 — February 2026

- **Location:** United States
- **Room type:** Three-Bedroom Apartment
- **Stay:** 1 night in February 2026
- **Trip type:** Solo traveler
- **Reviewed:** February 23, 2026
- **Title:** *"Right on the water. Great for families!"*

**Liked:**

> Right on the water! So easy for a family to enjoy the beach. All the other guests were exceptionally kind. We stopped on a road trip during the off season, so the indoor pool was a bonus.

**Disliked:**

> We booked last minute and there was a steep $80 fee in addition to the room charge for parking and amenities. There are different rates for units with 1-2 rooms and a smaller fee if you book in advance (by 24-72 hours — can't remember how much).

**Owner response (Simone):**

> Thank you Stephanie for your review. I'm glad you have enjoyed your stay. The resort fees should be about $54 for 2 bedroom, which what this condo classifies as, although it's a 3 bedroom. I wonder if you have paid for a 3 bedroom size condo.

---

### 3. Robert — 9.0/10 — December 2025

- **Location:** United States
- **Room type:** Three-Bedroom Apartment
- **Stay:** 6 nights in December 2025
- **Trip type:** Family
- **Reviewed:** January 1, 2026
- **Title:** *"Wonderful"*

*(No review body — Booking.com displays "There are no comments available for this review" when the guest submits a score without written feedback.)*

---

## Curation notes

**Strong candidates for Website surface:**

- #1 Candice — long-form endorsement of the room, layout, decor, kitchen (very quotable): *"Absolutely loved the room. It exceeded my expectations. I was very impressed with the layout and decor. The kitchen had everything needed for anything thought of."*
- #2 Stephanie — short, quotable: *"Right on the water! So easy for a family to enjoy the beach."*

**Not recommended for surface:**

- #3 Robert — no body text; even the 9.0 rating alone isn't useful without content

**Owner-response inventory (across all platforms):**

| Platform | Reviewer | Rating | Response type |
|---|---|---|---|
| VRBO | Shenna O. | 6/10 | Detailed rebuttal (linen + elevator situation, May 2024) |
| Booking.com | Stephanie | 10/10 | Clarification (resort fee amount, Feb 2026) |
| Airbnb | *(none captured)* | — | — |
| Houfy | *(0 reviews)* | — | — |

Consider surfacing owner responses on the Website review section — 2 verified owner responses on file across platforms is a strong hospitality signal, and matches the "owner-hosted" positioning.

**Elevator commentary** appears in 1 of 3 Booking.com reviews (Candice) — same resort-wide issue seen in 6/19 VRBO reviews and 3/11 Airbnb reviews. Total: **10 of 33 OTA reviews mention elevators**. Strong signal for the FAQ addition in initiative #51.

**Fee transparency** — Stephanie's complaint about the $80 fee (and Simone's clarification that it should be $54 for a 2-bedroom classification) reinforces the correctness of moving the Resort Registration Fee to `Before You Arrive` on the Website (see MASTER.md 2026-07-06 Pricing/Logistics cleanup changelog entry). This is exactly the kind of surprise-fee friction we've engineered against.
