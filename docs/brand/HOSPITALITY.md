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

- Reply within 24 hours, ideally faster.
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
- What's not: beach service, daily housekeeping mid-stay.
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

- Beach service or beach setup crew.
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

### 1. Inquiry reply (within 24 hours)

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

We don't provide beach service — the chairs and umbrella in the condo are yours to bring down each morning.

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

### 7. Review request (24–48 hours after check-out)

Trigger: 24–48 hours after check-out, if no review yet.

```
Hi [First name],

Hope your trip home was smooth. Thanks again for choosing Twenty First — it was a pleasure hosting you.

If you have a minute, a review on [platform] helps other families find the home:
[review link]

If anything about the stay wasn't right, please tell me directly first — I'd rather fix it than see it in a review.

Warmly,
Simone
```

### 8. Follow-up review request (one time, 5–7 days later)

Trigger: still no review after the first ask. Send once, never twice.

```
Hi [First name],

Just a quick nudge in case my earlier note got buried — a short review on [platform] would mean a lot, and it takes about two minutes:
[review link]

Thanks again for staying.

— Simone
```

### 9. Repeat-direct invitation (post-stay, after review)

Trigger: after the guest leaves a positive review. Sent by owner, not automated.

```
Hi [First name],

Thanks again for the kind review. If Twenty First comes up in your plans down the road, book directly at stayatflorida.com next time — you'll skip the platform service fees (usually 10–15% of the total) and I'll answer the email either way.

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
