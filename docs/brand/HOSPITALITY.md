# Hospitality

> **Purpose:** The guest experience standard for StayAtFlorida. Consult before adding amenity descriptions, changing house rules, editing check-in messaging, or drafting anything a guest reads before, during, or after their stay.
>
> **Owned by:** [Hospitality Expert](AGENTS.md#4-hospitality-expert). **Reviewers on changes:** Brand Director (for voice), QA Agent (before ship). See [Doc ownership](AGENTS.md#doc-ownership).

---

## Hospitality philosophy

StayAtFlorida promises a stay that feels like a friend with an incredible beach home invited the guest to enjoy it — with the standards of a boutique hotel.

**Three pillars:**

1. **Anticipation.** The guest knows what to expect before they arrive.
2. **Comfort.** Everything they need is already there, and everything works.
3. **Warmth.** Communication is human, prompt, and unhurried.

If a proposed guest touchpoint doesn't advance one of those three, it's clutter.

---

## The guest journey

### 1. Discovery (pre-booking)

**What the guest sees:** the site, the OTA listing, photos, reviews.

**Standard:**

- Every claim on the listing must match the on-site reality. If the photos show two swim towels folded on the balcony chairs, the balcony chairs and towels are there on arrival.
- Every amenity mentioned in [`config.js`](../../config.js) `AMENITIES` and property `features` is actually present and functional.
- Rates shown by the calculator reflect what the guest will actually be quoted.

### 2. Inquiry / booking

**What the guest sees:** the email response from the owner.

**Standard:**

- Reply within 2 hours, ideally faster. (Owner-confirmed 2026-07-02 — this is now the public commitment on the site and in trust badges. Keep an inbox routine that honors it.)
- Named human sign-off (never "The Team" for a two-property brand).
- Confirm: dates, guests, total price broken out (nightly × nights + cleaning + taxes if applicable), next step.
- Never send a boilerplate wall of text on the first reply. Two or three tight paragraphs.

### 3. Pre-arrival (7 days out)

**What the guest sees:** a welcome email.

**Include:**

- Address and unit access notes (parking, elevator context if relevant, wristband/registration link).
- Check-in time and check-out time.
- Wi-Fi will be provided on arrival (or in this email).
- What's in the condo they might not expect: **complimentary beach chairs and umbrella available in the condo**, kitchen basics, board games, streaming platforms.
- What's not: daily housekeeping mid-stay, and no beach service is provided **by us** (on-beach vendors sell chair/umbrella rental — guests can buy it directly on the beach if they prefer).
- Nearby staples they may want to know about: closest grocery, easiest coffee, one restaurant recommendation. Never overload — this is not a concierge service.

### 4. Check-in day

**What the guest sees:** a short "safe travels" message and the door code.

**Standard:**

- Door code delivered by the platform's standard method (Airbnb / VRBO messaging, or direct email for direct bookings), never over public SMS.
- Message is one paragraph, warm, includes the check-in time and one sentence: "Message me any time — I'm around."

### 5. Mid-stay (optional touch)

**What the guest sees:** at most one check-in message on day two.

**Standard:**

- Only send if the stay is 4+ nights.
- Two sentences maximum. Purpose: confirm everything is working, offer to help.
- Do not upsell, do not ask for reviews mid-stay, do not push future bookings.

### 6. Check-out day

**What the guest sees:** a warm thank-you and instructions.

**Standard:**

- Thanks first, instructions second.
- Instructions: check-out time, where to leave keys/parking pass/wristbands, where to leave used towels, dishwasher on / trash out.
- One sentence acknowledging their travel: "Safe travels home."

### 7. Post-stay (within 48 hours)

**What the guest sees:** a review request.

**Standard:**

- Sent 24–48 hours after check-out.
- Warm, personal, references something specific if possible.
- One follow-up allowed 5–7 days later. Never a third ask.
- Never offer incentives for reviews.

---

## Amenity and accuracy standards

Everything listed on the site or an OTA must be present, clean, and working.

**Minimum amenity contract for every property:**

- Fully stocked kitchen: coffee maker, toaster, blender, cookware, bakeware, knives, utensils, dishwasher-safe cups and plates enough for full sleeping capacity + 2.
- Bath linens for full sleeping capacity + 2, bed linens for every bed, throw blankets in living room.
- Washer and dryer with starter detergent.
- Wi-Fi that reaches every room; router documented.
- Cable or streaming, spelled out per property.
- Basics: paper towels, dish soap, dishwasher pods, laundry starter, trash bags, toilet paper (minimum 2 rolls per bath), shampoo/conditioner/body wash, hand soap.
- **Complimentary beach chairs and umbrella available in the condo** (see [`BRAND_GUIDELINES.md`](BRAND_GUIDELINES.md#beach-chairs-and-umbrella) for wording).

**What we never claim:**

- Any implication that **we** provide beach service or a beach setup crew. *(Chair/umbrella rental from on-beach vendors is fine to mention as an optional paid add-on — never as our service.)*
- Daily housekeeping mid-stay.
- Airport transfers.
- Grocery pre-stocking (unless explicitly arranged and priced).
- Anything the property doesn't have.

---

## Guest expectations we set clearly, up front

Some realities are better disclosed pre-arrival than encountered as a surprise:

- Elevator wait times can be longer at check-in / check-out on Saturdays at Tidewater. This goes in the pre-arrival email, not the marketing copy.
- Beach conditions change with weather; the Gulf can be flat, choppy, or seaweedy. We never guarantee conditions.
- Cleaning fee covers a standard turn — not the guest's clean-as-you-go effort. Guests are asked to run dishwasher, take trash to chute, leave used towels in tub. That's it.
- Wi-Fi is designed for streaming and remote work but not for enterprise VPN.

Disclosure timing: pre-arrival email, not the site hero.

---

## House rules

Governed by [`gear.html`](../../gear.html) house-rules block and each OTA's listing. Keep the tone firm but human:

- No smoking, no vaping, no pets (unless a specific property is pet-friendly — currently none).
- No parties, events, or unregistered guests. Max occupancy is the platform-listed sleeping capacity.
- Ages: primary booking guest must be 25 or older.
- Damages: honest disclosure resolves nearly everything. Undisclosed damage is charged.
- Quiet hours: 10 p.m. – 8 a.m. per HOA.

---

## Voice in guest communication

Same brand voice as the site — warm, relaxed, sophisticated, trustworthy.

**Do:**

- Sign with the owner's first name.
- Reference specifics ("your Tuesday check-in").
- Answer the question asked before adding anything else.
- End with an open door: "Message me anytime."

**Don't:**

- Use canned "Thank you for choosing us!" openers.
- Send messages with more than three exclamation marks combined.
- Use emojis in initial or booking-related communication. A single 🌊 in a post-stay note is fine, sparingly.
- Copy-paste identical messages to different guests without personalizing the first line.

---

## Handling issues

If something goes wrong (broken appliance, cleaning miss, noise complaint from a neighbor), the response is:

1. **Acknowledge fast.** Within an hour if the guest is on property, ideally sooner.
2. **Own it.** No blaming the cleaner, the HOA, or a previous guest.
3. **Fix it or offer a remedy.** If it can be fixed same-day, that. If it can't, offer a proportionate remedy — a partial cleaning refund, an extra towel service, a comped late check-out.
4. **Follow up.** After the remedy is in place, confirm the guest is comfortable.

Never argue with a review after the fact. Reply publicly, warmly, briefly, and only when the response would help a future guest reading it.

---

## Five-star standard

A five-star stay at StayAtFlorida means:

- The condo looked exactly like the photos on arrival.
- The check-in worked without a call.
- The Wi-Fi, HVAC, TV, and kitchen worked without a call.
- The guest felt they could reach the owner easily but was never bothered.
- The view sold itself.
- The guest wanted to come back.

Every design, copy, or process decision should push toward that outcome.

---

## Message templates

The following are approved starting points for owner-outbound messages. Personalize the first line every time — never send a template verbatim. Voice is warm, unhurried, human. Sign with the owner's first name. Never use emoji or exclamation marks in booking-related messages.

Replace `[bracketed]` fields before sending.

### 1. Inquiry reply (within 2 hours)

Trigger: guest emails via `stayatflorida.com` or an OTA inquiry.

```
Hi [First name],

Thanks for reaching out about Twenty First for [check-in] – [check-out].

For [X] guests, that's [$X per night × N nights] plus a [$X] cleaning fee, coming to [$X total]. That includes direct beach access, full resort amenities, and complimentary beach chairs and umbrella available in the condo.

Happy to answer any questions before you decide. If you'd like to hold the dates, just let me know and I'll send the booking link.

Best,
Simone
```

### 2. Booking confirmation (direct)

Trigger: guest confirms and pays (or the booking is locked).

```
Hi [First name],

You're all set for Twenty First, [check-in] to [check-out]. Total: [$X].

I'll send arrival details, door code, and Wi-Fi info a week before your stay. In the meantime, if anything comes up, just reply to this email — I'm around.

Warmly,
Simone
```

### 3. Pre-arrival (7 days out)

Trigger: automated or manual, 7 days before check-in.

```
Hi [First name],

Your stay at Twenty First starts [check-in day, date]. A few details to help you land smoothly:

- Address: [address]. Parking pass and building access instructions are attached.
- Check-in: [time]. Door code will arrive by [platform] the morning of your arrival.
- Wi-Fi: network and password are on the fridge and in the welcome book.
- In the condo: complimentary beach chairs and umbrella, kitchen basics, streaming on the smart TVs, a few board games in the media cabinet.
- Good to know: the nearest grocery is [store, distance]. For a solid coffee spot, try [name].

The chairs and umbrella in the condo are yours to bring down each morning. If you'd prefer a full setup on the sand, beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.

Safe travels — message anytime.

Warmly,
Simone
```

### 4. Check-in day (arrival morning)

Trigger: morning of check-in.

```
Hi [First name],

Your door code is [XXXX]. Check-in from [time].

The condo is all yours — Wi-Fi is on the fridge, and there's a welcome book by the TV with anything else you might need.

Message anytime.

— Simone
```

### 5. Mid-stay check-in (only for stays 4+ nights)

Trigger: day 2 of a 4+ night stay. One message, then leave them alone.

```
Hi [First name],

Just wanted to check that everything's working well so far. Anything you need, I'm a message away.

— Simone
```

### 6. Check-out morning

Trigger: check-out day, sent before check-out time.

```
Hi [First name],

Thanks for staying at Twenty First. When you head out today:

- Check-out by [time].
- Please run the dishwasher, take trash to the chute down the hall, and leave used towels in the tub.
- Leave keys and the parking pass on the kitchen counter.

Safe travels home. If you're up for it, a quick review on [platform] means the world.

Warmly,
Simone
```

### 7. Review request (day +2, single-message canonical — SMS-primary)

**Channel:** SMS is the canonical channel for the review-request touch — owner's baseline as of 2026-07-07 evening. Email is an approved fallback for guests where SMS delivery fails (unlisted number, iMessage bounce) or where the guest has explicitly requested email-only. Never use both channels for the same ask; that reads as spam.

**Trigger:** Day +2 (48 hours after checkout). Reason: the OTA-native review-request email typically lands in the guest's inbox ~24h after checkout — our SMS lands ~24h after theirs, acting as a warm nudge on top of a link the guest already has. It also gives the guest one day of "back home / settling" before we ask for anything.

**Shape (owner-confirmed 2026-07-07 evening):** ONE message per stay is the standard. The direct-book pitch stays inline in the same SMS — matches owner's proven baseline and delivers the pitch to every guest, not just positive-reviewers. Templates §8 (day +7 follow-up) and §9 (post-positive-review repeat-direct) exist as **optional levers** for when a specific stay warrants a second touch, not as standard cadence.

**Rules — non-negotiable regardless of message-count shape:**

- **Never ask for a specific rating** (`5-star review`, `great review`, `top rating`). Both Airbnb and VRBO review policies explicitly prohibit soliciting specific ratings — the platforms honor off-platform reports, so this rule applies to SMS too. Ask for `an honest review` or just `a review`. **P0 platform-policy rule.**
- **Fix-first invitation is mandatory.** Every review-ask must include the "if anything wasn't right, tell me directly first — I'd rather fix it than see it in a review" line. This is our operating principle from §Post-stay and it materially cuts negative-review rates — guests who feel heard privately are far less likely to complain publicly. **P1 tone rule.**
- **No assumption the stay was perfect.** Never open with `so glad everything was perfect` — reads tone-deaf if the guest had a bad experience. **P1 tone rule.**
- **Personalize the first line.** Reference the property by name (`Twenty First` / `Serenity`). If you can naturally reference something specific from the stay (a repeat guest returning, a birthday celebration mentioned in inquiry, a note left in the guest book), it belongs in the first line.

**Canonical SMS template — preserves owner's baseline voice with the two must-fix changes woven in:**

```
Hi [First name],

Thank you so much for choosing [Property] — hope your travel home was smooth. If anything about your stay wasn't right, please tell me directly first — I'd rather fix it than see it in a review.

If you enjoyed your experience, an honest review on [Platform] would mean a lot; your feedback is invaluable to us.

If you're ever planning another trip to the Emerald Coast, booking directly at StayAtFlorida.com next time helps you save on platform fees, and I'm always happy to assist with any special requests. Please don't hesitate to reach out anytime — we'd love to host you again.

Warm regards,
Simone
StayAtFlorida.com
```

- `[Property]` — `Twenty First` for TW2111 · `Serenity` for MS811 *(will update to the locked new brand name after initiative #1 rebrand pass)*
- `[Platform]` — see per-platform fill-in table in the [Post-stay review-solicitation playbook](#post-stay-review-solicitation-playbook) section below

**Voice diff from the pre-2026-07-07 baseline** *(archived so any future rewrite can trace the changes):*

- **Kept verbatim** from owner's original: `Thank you so much for choosing`, `Your feedback is invaluable to us`, `booking directly with us next time can help you save`, `we're always happy to assist you with any special requests`, `Please don't hesitate to reach out anytime`, `Warm regards`, `Simone`, `StayAtFlorida.com` sign-off.
- **Fixed:** `5-star review` → `an honest review` *(P0 — Airbnb + VRBO reviews policies prohibit soliciting a specific rating)*.
- **Fixed:** `I am so glad you had a wonderful time and that everything was perfect for your trip` → `If anything about your stay wasn't right, please tell me directly first — I'd rather fix it than see it in a review` *(P1 — removes tone-deaf assumption + adds fix-first invitation).*
- **Added:** `[Property]` reference in the opener *(replaces generic `us`/`our home` — more personal, reinforces brand recall)*.
- **Softened:** `we're always happy to assist you with any special requests to make your stay even better` → `I'm always happy to assist with any special requests` *(shifts from `we` corporate voice to `I` owner voice — matches the hosted-by-owner positioning; drops `to make your stay even better` as filler).*

**Email fallback** *(for guests where SMS is unavailable — same rules apply):*

```
Hi [First name],

Hope your trip home was smooth. Thanks again for choosing [Property] — it was a pleasure hosting you.

If anything about the stay wasn't right, please tell me directly first — I'd rather fix it than see it in a review. If your stay went well, an honest review on [Platform] helps other families find the home:
[review link — see playbook § URL lookup]

If you're ever planning another trip to the Emerald Coast, booking directly at StayAtFlorida.com next time helps you save on platform fees. Please don't hesitate to reach out anytime — we'd love to host you again.

Warm regards,
Simone
```

### 8. Follow-up review request (day +7, OPTIONAL — not standard cadence)

> **Status: optional lever, not standard practice.** Owner-confirmed 2026-07-07 evening: the single-message §7 SMS is the canonical cadence. This §8 follow-up exists on the shelf for when you specifically want to push velocity on a guest who hasn't reviewed by day +7 — use it sparingly. If you send §8 as a default, you double your outbound message count per guest and risk reading pushy. Reserve for stays where a review would materially help (new listing catching up on volume, a landmark high-value stay, etc.).

**Trigger (when used):** Day +7 (one week after checkout) if no review has landed yet. **Send once, never twice.** No third ask under any circumstance.

**Canonical SMS template:**

```
Hi [First name],

Just a quick nudge in case my earlier note got buried — a short review on [Platform] would mean a lot; two minutes.

Thanks again for staying at [Property].

— Simone
```

**Email fallback** *(if the day +2 review request went via email, follow up via email too):*

```
Hi [First name],

Just a quick nudge in case my earlier note got buried — a short review on [Platform] would mean a lot, and it takes about two minutes:
[review link — see playbook § URL lookup]

Thanks again for staying at [Property].

— Simone
```

### 9. Repeat-direct invitation (post-positive-review, OPTIONAL — alternative pattern)

> **Status: alternative pattern, not standard practice.** The canonical §7 SMS already includes the direct-book pitch inline — every guest hears it once, regardless of whether they review. Owner-confirmed 2026-07-07 evening. This §9 template exists on the shelf for the alternative sequencing pattern where §7 excludes the direct-book pitch and §9 fires after a positive review lands. Use §9 only if you specifically want to sequence the two asks separately for a particular guest (e.g., a very high-value guest where you'd rather send a separate warm thank-you after their positive review). Default: keep the direct-book line in §7 and skip §9.

**Trigger (when used):** After the guest leaves a positive review (owner-observed on the platform). Sent whenever a positive review is confirmed live — not automated. The point is to catch the guest at their warmest moment toward you AND after their review is banked, so the direct-book pitch can't influence their review content.

**Canonical SMS template:**

```
Hi [First name],

Thanks again for the kind review — really appreciate it. Whenever you're planning your next trip to the Emerald Coast, book directly at StayAtFlorida.com — you'll skip the platform fees (typically 10–15% of the total), and you'll get the same personal reply from me either way.

Whenever you're ready.

— Simone
```

**Email fallback** *(preserves the pre-2026-07-07 tone if the review-thread already lives in email):*

```
Hi [First name],

Thanks again for the kind review. If Twenty First comes up in your plans down the road, book directly at StayAtFlorida.com next time — you'll skip the platform service fees (usually 10–15% of the total) and I'll answer the email either way.

Whenever you're ready.

— Simone
```

### 10. Issue apology and resolution

Trigger: something went wrong on-property (broken appliance, cleaning miss, noise complaint).

```
Hi [First name],

I'm sorry — [briefly acknowledge the specific issue]. That's not the standard, and I appreciate you flagging it.

Here's what I'm doing: [concrete action — technician on the way, extra towels being dropped, cleaning crew coming back, partial refund of $X being processed]. You should see [what and by when].

If it's not right after that, please tell me and we'll keep working on it.

Warmly,
Simone
```

### 11. Public review response (on-platform)

Trigger: any review, positive or otherwise. Public reply.

**Positive review:**

```
Thank you, [First name] — so glad [one specific detail from their review, e.g., "the balcony sunsets landed for you"]. Come back any time; we'd love to host you again.
```

**Constructive review:**

```
Thank you for the honest feedback, [First name]. [Acknowledge the specific issue briefly.] [State the fix that's in place — factual, no defensiveness.] I appreciate you flagging it — future guests will benefit.
```

Never argue in a public reply. Never blame the cleaner, the platform, or the HOA. Never post more than three sentences.

---

## Template rules

- **Personalize the first line every time.** Guests can smell a boilerplate.
- **Address by first name only** — never `Mr./Ms.` or last name.
- **Owner-signed.** All owner-outbound messages sign with `Simone`, never `The Team` or `StayAtFlorida Support`.
- **No emojis in booking / issue messages.** A single 🌊 in a genuinely warm post-review thank-you is acceptable, once, sparingly.
- **No exclamation marks in inquiry, confirmation, pre-arrival, or issue messages.** Reserve for genuine informal moments.
- **The complimentary beach chairs / umbrella sentence appears in every pre-arrival message**, verbatim from [`BRAND_GUIDELINES.md`](BRAND_GUIDELINES.md#beach-chairs-and-umbrella).
- **Never coach a review.** Ask honestly, don't script.
- **Never incentivize a review.** No discounts, no gift cards, no swaps.
- **Never ask for a specific rating.** `5-star review`, `great review`, `top rating` — all forbidden. Airbnb + VRBO review policies explicitly prohibit soliciting specific ratings, and both platforms honor off-platform reports. Use `an honest review` or just `a review`.

---

## Post-stay review-solicitation playbook

> **Codified as Phase 3 initiative #44 ship 2026-07-07 evening.** Consolidates the review-request touch (§7), follow-up (§8), and repeat-direct pitch (§9) into a single operational playbook — per-platform variants, cadence, trigger discipline, and a tracking log for measuring baseline vs. lift.

### Cadence — canonical (owner-confirmed 2026-07-07 evening)

Prior state had three sources documenting three different cadences (`MARKETING.md` said checkout-day, `HOSPITALITY.md §7` said 24–48h, `phase-3/revenue-impact-tracker.md #44` said day +3). Reconciled to a single canonical schedule; then re-refined 2026-07-07 evening per owner feedback ("do I need that many messages?") to make Send #1 the standard-and-only default, with Send #2 and Send #3 marked as optional levers.

| Touch | When | Status | Trigger | Notes |
|---|---|---|---|---|
| **Send #1 — Review request SMS** *(with direct-book pitch inline)* | **Day +2** (48h after checkout) | **✓ STANDARD — send this to every guest** | Automatic per-guest, unless a review has already landed by day +2 | The OTA-native review-request email typically lands in the guest's inbox ~24h after checkout — our SMS lands ~24h after theirs. Warm nudge on top of a link the guest already has. Direct-book pitch stays inline (owner-baseline pattern preserved). |
| **Send #2 — Follow-up SMS** | **Day +7** (one week after checkout) | 🟡 OPTIONAL — use sparingly | Only if no review yet AND you specifically want to push velocity on this guest | One time only. Never a third ask. Not standard cadence — reserve for stays where a review would materially help. If you send Send #2 as a default, you double your outbound message count per guest and risk reading pushy. |
| **Send #3 — Repeat-direct SMS** | Whenever a positive review lands on any platform | 🟡 OPTIONAL — alternative pattern | Only if you also removed the direct-book pitch from Send #1 (which is NOT the default) | The canonical §7 SMS already includes the direct-book pitch inline — every guest hears it once regardless of whether they review. §9 is the alternative pattern for when you want to sequence the two asks separately; use only for specific high-value cases. |

**Anti-duplication rules:**

- Don't send Send #1 if the guest already left a review before day +2 (owner spot-checks the platform review page in the morning before sending).
- Don't send Send #2 if a review landed between day +2 and day +7.
- Don't send Send #3 unless (a) you chose the alternative sequencing pattern that stripped the direct-book line from Send #1, AND (b) the review is clearly positive (≥4/5 or a written review that reads warmly). If the review is neutral or critical, skip Send #3 entirely and either respond publicly per §11 (public review response) or reach out privately to address the issue.
- Repeat guests get a fresh Send #1 per stay — each stay is a separate review opportunity.

**Escalation ladder for owner discretion:**

- **Minimum (default, matches owner's pre-2026-07-07 baseline):** Send #1 only. Fix wording (P0 + P1), keep direct-book line inline. Zero increase in ops overhead. Modest velocity lift from the wording fixes alone (~5–10% typical based on hospitality-industry data).
- **Minimum + follow-up (situational):** Send #1 default + Send #2 for specific stays where a review would materially help (new listing, landmark stay). Higher velocity lift (~20–30% recovery of "forgot to review" segment).
- **Full sequencing (alternative pattern, not default):** Send #1 without direct-book line + Send #2 as default + Send #3 after positive reviews. Highest velocity potential, most outbound-message overhead. Reserve for a future scale point (>10 stays/month/property, or a dedicated review-recovery push).

### Per-platform `[Platform]` fill-in

The OTAs' own systems handle actual review submission — their platforms send the guest an email with the submission link within 24–48h of checkout. Our SMS is a **warm nudge on top**, not a competing submission path. So for OTA guests we just name the platform in the SMS; the guest clicks the link already in their platform inbox.

| Guest booked on | `[Platform]` fills in as | Actual review-submission path (informational — do not include in the SMS body) |
|---|---|---|
| **Airbnb** | `Airbnb` | Airbnb-sent email or **Trips → Past stays** in the app. Review window closes at 14 days post-checkout — Send #2 must land before that window closes. |
| **VRBO** | `VRBO` | VRBO-sent email *(sender: `no-reply@vrbo.com`)* or **My Trips** in the app. Review window is much longer (~1 year), so Send #2 has more runway. |
| **Booking.com** | `Booking.com` | Booking.com-sent email *(sender: `noreply@booking.com`)* or the confirmation email's `Rate your stay` link. Review window closes ~90 days post-checkout. |
| **Houfy** | `Houfy` | **⚠ Verification pending — owner action.** Check the Houfy dashboard: does Houfy send booked guests a native review-request email/notification after checkout? If yes, mirror the OTA pattern (SMS names the platform, guest uses Houfy's own link). If no, the SMS needs to include a direct URL to the Houfy review-submission surface — capture the URL from the dashboard and add it to the URL lookup table below. Note: this is only relevant for **Houfy-booked guests** (guests who booked THROUGH Houfy). Airbnb/VRBO reviews get imported to Houfy automatically per the review-import feature — don't ask Airbnb/VRBO guests to also review on Houfy. |
| **Direct-site (StayAtFlorida.com)** | `Google` **(deferred — see tracker #52)** | Once Google Business Profile is created + verified (initiative #52), the SMS gets a direct `g.page/r/[ID]/review` short link — one tap for the guest. Until then, direct-site guests default to whatever OTA the property has strongest visibility on *(TW2111: Airbnb — highest velocity + Superhost badge)*, framed as "Twenty First is also listed on Airbnb, and a quick review there would help other families find the home." |

### URL lookup — review-submission paths per property × platform

Fill in the actual links Simone can paste into the email fallback templates. **Owner action pending** — capture the URLs from each host dashboard and paste them here. The SMS body doesn't include URLs (guest uses the platform's own email link); the email fallback template needs the URL because email guests didn't get the SMS nudge.

| Property × Platform | Review-submission URL |
|---|---|
| **TW2111 (Twenty First) — Airbnb** | *(hosts don't have a direct "leave review" URL — guests use the platform's Trips flow. Email fallback should reference the Airbnb review request email guest received.)* |
| **TW2111 — VRBO** | *(same as Airbnb — VRBO's Trips flow. Reference the VRBO review email.)* |
| **TW2111 — Booking.com** | *(same — Booking sends the review email; reference that.)* |
| **TW2111 — Houfy** | **⚠ Owner action:** capture the Houfy review-submission URL from `https://houfy.com/h/twentyfirst` dashboard if it exists as a direct URL |
| **TW2111 — Google** | **⚠ Deferred to initiative #52** — GBP not yet created. URL will be `https://g.page/r/[ID]/review` once verified. |
| **MS811 (Serenity) — Airbnb / VRBO / Booking.com / Houfy** | Same pattern as TW2111. Populate after MS811 rebrand (#1). |

### Tracking log

Success Metric on #44 is **≥+50% review velocity portfolio-wide 90 days post-template-ship**. To measure lift we need baseline + post-ship data. Log lives at [`docs/hospitality/review-solicitation-log.md`](../hospitality/review-solicitation-log.md) — owner appends one row per Send #1. Schema:

| Column | Value |
|---|---|
| `Checkout date` | YYYY-MM-DD |
| `Property` | TW2111 · MS811 |
| `Guest first name` | *(first name only — never last name in this log)* |
| `Platform` | Airbnb · VRBO · Booking.com · Houfy · Direct |
| `Send #1 date` | YYYY-MM-DD *(day +2 default)* |
| `Follow-up (Send #2) date` | YYYY-MM-DD or `—` if not sent |
| `Review received` | `—` or YYYY-MM-DD + rating (`2026-07-10 · 5`) |
| `Repeat-direct sent` | YYYY-MM-DD or `—` |

**Baseline window (pre-ship):** review velocity was untracked prior to 2026-07-07. Owner sent a single follow-up text consistently but without a log — we count that as "baseline behavior" for the purpose of the Success Metric comparison. Post-ship velocity will be measured by counting Send #1 rows against `Review received` completions over the 90-day window.

**Simplicity discipline:** if the log takes more than 30 seconds per Send #1 to update, the log is broken. Shorten it before the owner stops using it. Do NOT extend to more columns without a specific reason.
