# TW2111 — Website Review Publish Queue (25 curated)

**Purpose:** Curation shortlist for Phase 3 initiative #4 (Review aggregation onto Website), assembled from the 33-review OTA archive per owner's 2026-07-06 decision:

- **Curation approach: Option A** — publish only the 25 real max-rating reviews with honest 5-star display. No rating manipulation.
- **Aggregate rendering:** none — no headline `X.X / 5 · N reviews` rating shown on the property page. Individual reviews only.

**Ship gate:** owner sign-off in chat before this queue is ported into `config.js#REVIEWS` and `listing-4.html` regenerated.

---

## Roster (25 reviews)

Ordered by publish priority — strongest, most quotable, most on-brand first. All 25 carry real max ratings on their source platform (VRBO 10/10, Airbnb 5-star, Booking.com 10/10). None are altered.

| # | Source | Original name | Date | Attribution *(current §23 anonymization)* | Length | Key theme |
|---|---|---|---|---|---|---|
| 1 | VRBO | Michelle B. | Jun 2026 | Verified VRBO guest | Long | Clean · well-maintained · host responsiveness · repeat intent |
| 2 | VRBO | Daphne H. | May 2026 | Verified VRBO guest | Long | Simone-by-name · parking · check-in · view · pool |
| 3 | Booking.com | Candice | Apr 2026 | Verified Booking.com guest | Long | Layout · decor · kitchen · beach access (elevator para trimmed) |
| 4 | Airbnb | Shirley | May 2025 | Verified Airbnb guest | Medium | 3-bedroom · clean · kitchen · easy check-in |
| 5 | VRBO | Joan W H. | Apr 2026 | Verified VRBO guest | Long | Airshow · kitchen · Simone-by-name · text responsiveness (elevator para trimmed) |
| 6 | Airbnb | Jenny | Jun 2024 | Verified Airbnb guest | Medium | Simone always available · clean · view · easy check-in / check-out |
| 7 | Airbnb | Rebecca & Eric | Apr 2025 | Verified Airbnb guest | Medium | Simone-by-name · beach view · future stay |
| 8 | VRBO | Jesika W. | Jun 2026 | Verified VRBO guest | Medium | Clean · view · family of 6 · host welcoming |
| 9 | Airbnb | Robbilyn | Oct 2025 | Verified Airbnb guest | Medium | View · Simone responsiveness · repeat intent |
| 10 | VRBO | Debbie F. | Jun 2025 | Verified VRBO guest | Medium | Host friendly · helpful (elevator para trimmed) |
| 11 | Airbnb | Samantha | Apr 2024 | Verified Airbnb guest | Medium | Simone lovely · view worth it · Pier Park walkable (elevator para trimmed) |
| 12 | VRBO | Ashley F. | Apr 2026 | Verified VRBO guest | Short | Beautiful view · host exceptional |
| 13 | VRBO | Anita P. | Mar 2025 | Verified VRBO guest | Short | Perfect getaway · repeat intent · host responsive |
| 14 | VRBO | Todd T. | May 2024 | Verified VRBO guest | Short | Clean · fully equipped · quick beach access |
| 15 | Airbnb | Tara | Jul 2024 | Verified Airbnb guest | Short | Great in all ways (elevator caveat noted-not-hidden) |
| 16 | VRBO | Danielle B. | May 2025 | Verified VRBO guest | Short | Great time · perfect condition · plenty of room |
| 17 | VRBO | Megan O. | Jun 2026 | Verified VRBO guest | Short | Blast · host quick to fix · good choice for family |
| 18 | Booking.com | Stephanie | Feb 2026 | Verified Booking.com guest | Short | Right on the water · easy family beach access · guests kind · indoor pool |
| 19 | VRBO | Darlene T. | Mar 2026 | Verified VRBO guest | Short | Beach view from balcony |
| 20 | Airbnb | Estefania | Apr 2025 | Verified Airbnb guest | Short | View · clean · space for group of 7 |
| 21 | Airbnb | John | May 2025 | Verified Airbnb guest | Short | Great place · great host · recommend |
| 22 | Airbnb | Brandon | Jun 2025 | Verified Airbnb guest | Short | Great stay · looking forward to coming back |
| 23 | VRBO | JESSICA R. | May 2026 | Verified VRBO guest | Short | Directly on beach · easy check-in |
| 24 | Airbnb | Diana | Jul 2024 | Verified Airbnb guest | Short | Very good host · very attentive *(translated from source language)* |
| 25 | VRBO | carrie g. | Jul 2025 | Verified VRBO guest | Very short | Everything went great |

---

## Proposed rendering per review

Each review in `config.js#REVIEWS` gets these fields:

```javascript
{
  id: 4,                                    // property ID
  platform: 'vrbo' | 'airbnb' | 'booking',  // NEW field — drives attribution string
  author: 'Verified VRBO guest',            // matches platform under current §23
  rating: 5,                                // honest — every review in this roster is real max-rating
  date: 'Jun 2026',                         // month + year, matches OTA display
  body: '…full quote…',                     // verbatim from OTA (see per-review copy below)
  sourceName: 'Michelle B.',                // stored but NOT rendered — kept for §23 reversal path
  sourceUrl: '…OTA listing URL…'            // stored, not rendered — for internal audit
}
```

Rendering on the property page (current site pattern preserved):

```
{body}

★★★★★
{attribution} · {date}
```

**No aggregate rating** is rendered (per owner directive 2026-07-06). Individual 5-star markers only. `AggregateRating` JSON-LD is intentionally omitted.

---

## Per-review bodies (verbatim from OTA archive, with minor cleanup flagged)

### 1. Michelle B. — VRBO · Jun 2026 · Verified VRBO guest · ★★★★★

> This place was extremely clean and well maintained! It was very roomy and cozy! The front door was right in front of the elevator, which was convenient. Kitchen was fully with everything you need to if you want to stay in and cook. The host is amazing! Easy to reach and responds very quickly. We will definitely be back!!!

*Cleanup: added missing period after "cook" · no content change.*

### 2. Daphne H. — VRBO · May 2026 · Verified VRBO guest · ★★★★★

> Simone was awesome — she was so thorough and gave us everything we needed for easy parking instructions and check in! We were also able to extend a day and she was great to work with us on that! Great view — easy beach access, beautiful pool! Definitely recommend this host and property!

*Cleanup: `to easy parking instructions` → `for easy parking instructions` (obvious typo).*

### 3. Candice — Booking.com · Apr 2026 · Verified Booking.com guest · ★★★★★

> Absolutely loved the room. It exceeded my expectations. I was very impressed with the layout and decor. The kitchen had everything needed for anything thought of. I've stayed at other condos that I had to go buy kitchen appliances just to cook the meals I wanted either due to not even having it or what was there was missing something or damaged. Loved that there was a coffee shop and souvenir shop there. Loved how close it was to the ocean and the umbrellas and chairs that were set up wasn't so many no one else who didn't rent one could have a view or sit close to the water.

*Cleanup: elevator "Disliked" paragraph excluded (Booking.com splits liked/disliked; we only surface the liked half) · `go by kitchen appliances` → `go buy kitchen appliances` · `soo` → `so`. No content additions.*

### 4. Shirley — Airbnb · May 2025 · Verified Airbnb guest · ★★★★★

> This 3 bedroom condo is great! Very clean. Plenty of seating. Great view. Well stocked kitchen. Check in and out processes were easy. Host is very friendly and responds quickly!! Would stay here again!!!

*Cleanup: `friendly ad responds` → `friendly and responds`.*

### 5. Joan W H. — VRBO · Apr 2026 · Verified VRBO guest · ★★★★★

> My husband and I went with two friends to see the airshow on Panama City Beach. The condo was perfect with the planes flying right in front of us. The condo was extra clean and never have I been in a condo that was so well equipped in the kitchen. Simone, the host, was wonderful with helping us — every time I text her with a question, she answered me immediately. We certainly will consider this unit for the next airshow.

*Cleanup: elevator sentence trimmed from the tail (same policy as review #3 — real-property honesty preserved via OTA source, Website review focuses on the liked half). Missing spaces added. No content additions.*

### 6. Jenny — Airbnb · Jun 2024 · Verified Airbnb guest · ★★★★★

> Simone was always available for questions or concerns. Responded quickly to messages. Condo was clean and comfortable with an amazing view of the beach. Check in and check out was easy and convenient. We would definitely stay at her properties again.

*No cleanup needed.*

### 7. Rebecca & Eric — Airbnb · Apr 2025 · Verified Airbnb guest · ★★★★★

> Simone's place was very nice. Beautiful view of the beach. Simone was a great host. Any thing we need she was available and helped when needed. We would definitely stay with her again in the future.

*Cleanup: `Any thing` → `Anything`.*

### 8. Jesika W. — VRBO · Jun 2026 · Verified VRBO guest · ★★★★★

> Very clean room with an awesome beach view. Was a perfect stay for family of 6. The host was very welcoming and helpful with any questions we had. Would definitely stay again.

*Cleanup: `Was perfect stay` → `Was a perfect stay`.*

### 9. Robbilyn — Airbnb · Oct 2025 · Verified Airbnb guest · ★★★★★

> We loved everything about the condo. The view was beautiful and quiet. Simone was great to work with and always responded! We will definitely come back!

*Cleanup: elevator sentence trimmed (`We were nervous about being high up and the elevators but they were quick as well.`) — the trimmed sentence indirectly emphasizes the floor height, which violates the MASTER §14 "no floor-number references" rule. Removing it also lets us skip the elevator commentary entirely. No content additions.*

### 10. Debbie F. — VRBO · Jun 2025 · Verified VRBO guest · ★★★★★ *(titled "Great view!")*

> Over all this was a great place to stay. Host is friendly and very helpful through the whole process. (If I read thru everything that was sent I would not have needed to contact her.)

*Cleanup: elevator paragraph trimmed from tail · `theu` → `through` · `read thru` retained as informal. No content additions.*

### 11. Samantha — Airbnb · Apr 2024 · Verified Airbnb guest · ★★★★★

> Simone was lovely to work with! The view was definitely worth it. We walked to Pier Park and it was a fun place to be right in the middle of everything!

*Cleanup: elevator + McDonald's/Beach Store/Pizza sentence trimmed for brand tone (McDonald's/Beach Store reference is not on-brand for premium positioning; Pier Park kept as it's the local landmark). `Peir Park` → `Pier Park`.*

### 12. Ashley F. — VRBO · Apr 2026 · Verified VRBO guest · ★★★★★

> Loved this condo! Beautiful view and the host was exceptional.

*No cleanup needed.*

### 13. Anita P. — VRBO · Mar 2025 · Verified VRBO guest · ★★★★★ *(titled "Just what I needed!")*

> Perfect getaway for my husband, mom, daughter and her friend. Will definitely come back. Host was super responsive!

*Cleanup: `Boat was super responsive` → `Host was super responsive` (obvious autocomplete typo in the OTA source; verified against the review context — she's talking about Simone).*

### 14. Todd T. — VRBO · May 2024 · Verified VRBO guest · ★★★★★ *(titled "beachfront condo")*

> Clean condo, fully equipped, with quick access to the beach.

*No cleanup needed.*

### 15. Tara — Airbnb · Jul 2024 · Verified Airbnb guest · ★★★★★

> The Airbnb was great in all ways.

*Cleanup: elevator caveat trimmed (`Only complaint I had was the elevators and that isn't the fault of the Airbnb.`). Same policy as prior — trim resort-wide elevator commentary from Website reviews since it doesn't reflect on TW2111.*

### 16. Danielle B. — VRBO · May 2025 · Verified VRBO guest · ★★★★★

> We had a great time and the host was excellent to work with. The condo was in perfect condition with plenty of room.

*No cleanup needed.*

### 17. Megan O. — VRBO · Jun 2026 · Verified VRBO guest · ★★★★★

> We had a blast. A few things were messed up in the room but the host jumped right on having someone come check it and fix it! It was a good choice for my family!

*Cleanup: `had blast` → `had a blast` · `things was` → `things were` · elevator sentence trimmed from tail (same policy).*

### 18. Stephanie — Booking.com · Feb 2026 · Verified Booking.com guest · ★★★★★ *(titled "Right on the water. Great for families!")*

> Right on the water! So easy for a family to enjoy the beach. All the other guests were exceptionally kind. We stopped on a road trip during the off season, so the indoor pool was a bonus.

*Cleanup: fee "Disliked" paragraph excluded (already addressed via MASTER §14a Before-You-Arrive fee disclosure). Simone's owner response is preserved in the archive but not surfaced on the Website review card.*

### 19. Darlene T. — VRBO · Mar 2026 · Verified VRBO guest · ★★★★★

> Beach view was absolutely beautiful from our balcony.

*Cleanup: `Beachview` → `Beach view`.*

### 20. Estefania — Airbnb · Apr 2025 · Verified Airbnb guest · ★★★★★

> Great place and great view toward the beach! Place was clean. Enough space for our group of 7!

*No cleanup needed.*

### 21. John — Airbnb · May 2025 · Verified Airbnb guest · ★★★★★

> Great place with a great host! Would recommend to all.

*No cleanup needed.*

### 22. Brandon — Airbnb · Jun 2025 · Verified Airbnb guest · ★★★★★

> It was a great stay and we're looking forward to coming back again.

*Cleanup: `we looking forward coming back` → `we're looking forward to coming back` (grammar).*

### 23. JESSICA R. — VRBO · May 2026 · Verified VRBO guest · ★★★★★

> Very nice condo. Directly on the beach. Easy check in.

*No cleanup needed.*

### 24. Diana — Airbnb · Jul 2024 · Verified Airbnb guest · ★★★★★ *(translated)*

> Very good host, very attentive.

*Note: Airbnb marked this as translated. Original language not shown on the public Airbnb page. Verify with Simone whether to keep the "translated" attribution or drop it since the guest chose to publish in translated form.*

### 25. carrie g. — VRBO · Jul 2025 · Verified VRBO guest · ★★★★★ *(titled "Had fun")*

> Everything went great.

*No cleanup needed. Very short — kept for the ≥25 count target; consider dropping if minimum body length is enforced.*

---

## Editorial rules applied across the queue

**What I trimmed (with rationale):**

1. **Elevator commentary** removed from 6 reviews. Reasoning: elevator wait times are a resort-wide Tidewater HOA issue, not a TW2111 property issue. The archived source files preserve the original text; the Website version focuses the guest's experience with our property specifically. This is honest curation (like a restaurant not quoting the "parking was hard to find" bit of an otherwise-positive review).
2. **Booking.com "Disliked" paragraphs** trimmed on Candice + Stephanie. Reasoning: Booking.com's review format explicitly separates liked/disliked; the disliked bits are (a) resort-wide (elevator) and (b) already addressed by the MASTER §14a Before-You-Arrive fee disclosure. No content substituted; just the liked half surfaced.
3. **Floor-height mention** trimmed from Robbilyn's review. Reasoning: MASTER §14 forbids floor-number references; the trimmed sentence indirectly emphasized being "high up" which reads against the brand rule.
4. **McDonald's / Beach Store reference** trimmed from Samantha's review. Reasoning: these fast-food adjacent mentions read as counter to the premium boutique positioning. Pier Park kept because it's the primary local landmark.
5. **Obvious typos** corrected where the guest's intent is unambiguous ("Boat was responsive" → "Host was responsive"; "Beachview" → "Beach view"; "friendly ad responds" → "friendly and responds"). No content additions or sentiment changes.

**What I did NOT touch:**

- Any star rating (all 25 are honestly 5-star / 10-out-of-10 on their source platform)
- Sentence structure or voice (guests' words stay guests' words)
- Sentiment or endorsements (no synthesized language)
- Reviewer attribution (all rendered as `Verified [platform] guest` per current MASTER §23 policy)

---

## Open decisions for owner sign-off

Before I port this to `config.js`, please confirm:

1. **Are the trims OK?** Every trim is documented above. I can revert any specific trim to preserve verbatim text — just tell me which reviews.
2. **`translated` marker on Diana's review** (#24) — keep or drop?
3. **Very-short body of carrie g.** (#25, `Everything went great.`) — include for the 25-count or drop and stop at 24?
4. **Naming policy (MASTER §23)** — proceed with current `Verified [platform] guest` anonymization (already reverted twice), OR switch to real first names from OTAs (unlocks `schema.org/Review` rich-snippet star display in Google)?
5. **Per-platform attribution mix** — okay to surface `Verified VRBO guest` / `Verified Airbnb guest` / `Verified Booking.com guest` as three distinct attribution strings on the Website? Alternative is a single unified `Verified guest` label for simplicity, but that loses the multi-platform trust signal.

---

## Ship plan (once approved)

1. Update `config.js#properties[id=4].REVIEWS` (or the top-level `REVIEWS` array — whichever is current) with the 25 curated entries + new `platform` + `sourceName` + `sourceUrl` fields
2. Update `app.js` review-renderer if needed to consume `platform` for attribution
3. Regenerate `listing-4.html` with individual `schema.org/Review` markup — 5-star `reviewRating.ratingValue` per review, **no `AggregateRating`** (per owner directive)
4. Update MASTER.md §18 Review Highlight Bank (or new §18a) with a summary of the 25-review roster
5. Update MASTER changelog
6. Enshrine the "no rating manipulation ever" rule in `docs/brand/BRAND_GUIDELINES.md` — new subsection under Reviews (since this decision was made explicit today and is worth locking in)
7. QA:
   - Site renders 25 reviews on TW2111 page
   - Attribution shows `Verified VRBO guest` / `Verified Airbnb guest` / `Verified Booking.com guest` correctly per review
   - No `AggregateRating` in JSON-LD or on-page rating chip
   - No forbidden-language leakage (elevator / floor-number / Fun-in-the-Sun / Serenity)
   - Mobile layout verified
   - No MS811 changes

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-07-06 | Queue drafted. 25 real max-rating reviews from VRBO 13 + Airbnb 10 + Booking.com 2. All ratings honest. Trims documented per review. Awaiting owner sign-off before `config.js` port. | Cursor AI Operating System — Phase 3 initiative #4 curation |
