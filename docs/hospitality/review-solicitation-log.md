# Review-solicitation log

> **Purpose:** Track post-checkout review-solicitation SMS sends (initiative #44). Enables measurement of the Success Metric `≥+50% review velocity portfolio-wide 90 days post-template-ship`.
>
> **Owned by:** [Hospitality Expert](../brand/AGENTS.md#4-hospitality-expert) *(Simone updates directly after each send)*. **Reviewers:** QA Agent (weekly velocity check).
>
> **Ship date (v1):** 2026-07-07 evening — see [`../phase-3/revenue-impact-tracker.md`](../phase-3/revenue-impact-tracker.md) row #44.
>
> **Log discipline:** Append one row per Send #1 (the day +2 review-request SMS). Update the same row when Send #2 (day +7 follow-up), the review itself, or the repeat-direct SMS lands. Do NOT create separate rows for Send #2 / Send #3 — they update the original Send #1 row.
>
> **Simplicity discipline:** if updating this log takes more than 30 seconds per send, the log is broken. Trim columns before dropping the habit.

---

## How to use this log

1. **After Send #1 (day +2 review-request SMS):** append a new row. Fill `Checkout`, `Property`, `Guest`, `Platform`, `Send #1` columns. Leave the rest blank / `—`.
2. **On day +7:** for any row where `Review` is still `—` and Send #2 hasn't been sent, send the follow-up SMS and fill `Send #2` with today's date. If a review has already landed, fill `Review` and skip Send #2.
3. **When a review lands (owner spots it on the platform dashboard):** update `Review` with the date + rating in the format `2026-07-10 · 5` *(rating on a 5-scale: Airbnb uses 5-star, VRBO uses 10-scale so divide by 2 for consistency here, Booking.com uses 10-scale same)*. If review is positive (≥4/5), also send the repeat-direct SMS and fill `Repeat-direct`.
4. **Never delete rows** — historical data is what enables the Success Metric measurement. If a guest asks not to be contacted, note it in the row and don't update further, but leave the row.

## Baseline note

Pre-2026-07-07: owner sent a single follow-up text consistently but without a log. Baseline review velocity is therefore **untracked but non-zero**. Post-ship velocity will be measured from the first log row forward (2026-07-08 onward). Success Metric read date: **2026-10-07** *(90 days post-ship)*.

---

## Log

Legend for the `Platform` column: `A` = Airbnb · `V` = VRBO · `B` = Booking.com · `H` = Houfy · `D` = Direct (StayAtFlorida.com)

| Checkout | Property | Guest | Platform | Send #1 | Send #2 | Review | Repeat-direct | Notes |
|---|---|---|---|---|---|---|---|---|
| *(first send will land here — awaiting Simone's first post-2026-07-07 checkout)* | | | | | | | | |

---

## Velocity summary *(update monthly, owner + QA Agent)*

| Month | Sends #1 | Sends #2 | Reviews landed | Reviews / Sends #1 (%) | Repeat-direct sent | Notes |
|---|---|---|---|---|---|---|
| 2026-07 (partial, from 2026-07-08) | 0 | 0 | 0 | — | 0 | Ship month; count from 2026-07-08 checkout onwards |
| 2026-08 | | | | | | |
| 2026-09 | | | | | | |
| 2026-10 | | | | | | Success Metric read window closes 2026-10-07 |

**Success Metric measurement (2026-10-07):**

- **Baseline** *(pre-2026-07-07)*: untracked but non-zero — owner was sending one follow-up text consistently. Use the OTA-dashboard review counts as of 2026-07-07 evening as the pre-ship baseline:
  - TW2111 Airbnb: 11 reviews *(per `../listings/TW2111/reviews/2026-07-06-airbnb.md`)*
  - TW2111 VRBO: 19 reviews *(per `../listings/TW2111/reviews/2026-07-06-vrbo.md`)*
  - TW2111 Booking.com: 3 reviews *(per `../listings/TW2111/reviews/2026-07-06-booking-com.md`)*
  - TW2111 Houfy (native): 0
  - MS811 Airbnb / VRBO / Booking.com / Houfy: capture counts on the next MS811 sweep pass
- **Post-ship** *(2026-10-07)*: capture the same counts. Compute delta. Success = ≥+50% velocity portfolio-wide (weight by pre-ship count so a 0-review platform going to 3 is a bigger relative lift than an 11-review platform going to 14).
