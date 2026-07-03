# Brand Guidelines

> **Purpose:** Everything an AI agent or contributor needs to know about how StayAtFlorida sounds and looks *before* writing a headline, listing description, meta tag, email, or button label.
>
> **Ground truth:** [`StayAtFlorida-Brand-Standards-v1.0.md`](../../StayAtFlorida-Brand-Standards-v1.0.md) at the repo root. If this file ever contradicts it, the root standards win.
>
> **Owned by:** [Brand Director](AGENTS.md#2-brand-director). **Reviewers on changes:** Marketing Director, CGO Agent, QA Agent (before ship). See [Doc ownership](AGENTS.md#doc-ownership).

---

## Core identity

| Field | Value |
|---|---|
| Master brand | **StayAtFlorida** |
| Tagline | **Luxury Beachfront Vacation Homes** |
| Brand promise | Where unforgettable beach memories begin. |
| Category | Owner-hosted luxury beachfront vacation homes on Florida's Gulf Coast |
| Positioning | Premium boutique hospitality — not a generic vacation rental |
| Current portfolio | Twenty First (Panama City Beach), Majestic Sun 811 (Miramar Beach / Destin) |

**Signature property naming convention:**

> **Twenty First**
> *A StayAtFlorida Signature Property*
> Tagline: *Above the Gulf. Beyond Expectations.*

Future properties follow the same pattern: **Property Name → "A StayAtFlorida Signature Property" → one tagline line**. Names must be short, elegant, timeless, unique.

---

## Voice and tone

Write like a **boutique hotel**. Never like a real estate listing or an OTA description.

The brand voice is:

- Warm
- Relaxed
- Sophisticated
- Trustworthy
- Welcoming
- Professional

The brand voice is **never**:

- Flashy
- Loud
- Salesy
- Overly casual
- Cheesy

### Before / after examples

| Real-estate voice (reject) | Boutique voice (ship) |
|---|---|
| Fully equipped kitchen with granite countertops and stainless appliances. | Gather around after a day on the sand to prepare breakfast, share family dinners, or open a bottle of wine on the balcony as the sun sets. |
| King bedroom, 240 sq. ft. | Drift off after watching the sunset from the balcony and wake up refreshed for another day at the beach. |
| 21st-floor unit at Tidewater Beach Resort with 3BR/3BA and 4,300 sq. ft. gym. | A 3-bedroom, 3-bath luxury beachfront retreat designed for families who want to slow down, watch the water, and reconnect. |
| Dream getaway on Florida's Gulf Coast! | Luxury Beachfront Vacation Homes on Florida's Gulf Coast. |

---

## Words we use

Use these words when they fit naturally. Do not force them.

- Luxury
- Comfort
- Experiences
- Views
- Memories
- Hospitality
- Connection
- Relaxation
- Owner-hosted
- Signature
- Beachfront
- Gulf
- Family
- Book direct

## Words we avoid

These are overused, low-credibility, or off-brand:

- Paradise
- Dream getaway
- Dream vacation
- Amazing
- Best ever
- Perfect (as brand copy — fine inside a real guest review)
- Luxury! (or any use of exclamation marks on the word "luxury")
- Bliss
- Escape
- Fun in the Sun
- Serenity
- Any all-caps headlines
- Emojis in guest-facing web copy

## Words we never use

Hard blocks. Reject any change that introduces these into brand-facing copy:

| Never | Why |
|---|---|
| Serenity Rentals | Retired legacy brand. Use StayAtFlorida. |
| Serenity Rental | Same. |
| Fun in the Sun | Retired legacy phrase; also on the generic-name block list. |
| 21st floor / 21st-floor / floor 21 | Floor numbers are never disclosed. Elevator wait times are the reason. |
| Any phrase implying **we** provide beach service, chair delivery, or a beach setup crew | We do not provide beach service. On-beach vendors do — see the "Beach chairs and umbrella" section below for how to phrase it. |
| Any phrase implying staff / concierge on the beach | Same reason — we are owner-hosted, not a resort concierge. |

## Tidewater handling

Tidewater Beach Resort is the community that houses Twenty First. It is **operational context**, not the brand.

- Do **not** lead with Tidewater in titles, meta, hero copy, or property card copy.
- Mention Tidewater only where operationally required: the location paragraph (once), the registration/parking section, and the community registration link.
- Never write "Tidewater 2111" or any unit number in guest-facing copy.

## Beach chairs and umbrella

Two things exist, and they must never be mixed up in copy:

**1. What WE provide (complimentary, always available):**

> **complimentary beach chairs and umbrella available in the condo**

Guests grab these from the condo and bring them down each morning. This is the always-safe, on-brand language.

**2. What third-party VENDORS on the beach provide (paid, optional):**

> **Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.**

This is a factual, guest-friendly mention of an add-on option that guests can buy on the beach if they want a full setup. It is not our service, and we never take payment for it, quote prices, or name specific vendors (they change seasonally).

Approved compact combined form (use in FAQs, descriptions, and post-booking replies):

> Complimentary beach chairs and umbrella are available in the condo. If you'd prefer a full setup on the sand, beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.

Never say (still forbidden):

- "We provide beach service"
- "Beach service included"
- "Our beach setup crew"
- "Chairs delivered to the sand" *(the vendors bring their own — we don't do this)*
- "Luxury beach service" *(marketing overreach)*
- "Complimentary beach set-up" *(only chairs/umbrella in the condo are complimentary)*
- Any wording that lets the guest assume WE are the beach-service provider.

## Elevators, buildings, and HOA

These are on the "never lead with" list from the brand standards. Guests may encounter them; guest communication (post-booking) can explain them factually. Marketing copy on the site and OTAs must not lead with them.

---

## Formatting rules

- **No emojis** in guest-facing site copy, meta tags, listing descriptions, or OTA copy. The lifestyle-photo checklist in the brand standards is the only place emojis appear, and that is an internal-photography reference, not shipping copy.
- **No exclamation marks** in headlines, taglines, hero copy, or meta descriptions. Reviews are UGC and stay as written.
- **Sentence case** for headings by default. Title Case only for the property name and the "A StayAtFlorida Signature Property" line.
- **Straight or curly quotes** — pick one and stay consistent within a file. Existing site copy uses curly quotes (`'`, `"`, `"`, `'`) in HTML entities where possible.
- **En dashes (`–`) for ranges**, em dashes (`—`) for parenthetical breaks, **hyphens only** inside compound words.

---

## Legal / factual guardrails

- Never overpromise availability, view lines, or amenities.
- Never state a guaranteed sunset, wildlife sighting, or weather.
- Never claim a rating we don't have; the aggregate rating comes from the review data in `config.js`.
- Never promise pricing; the pricing calculator shows *estimated* rates and the site copy already reflects that.
- Never hide third-party fees. Any charge the guest experiences as part of their total spend (e.g., the Tidewater Beach Resort Registration Fee for TW2111 — labelled `Resort Registration Fee` in all guest-facing surfaces per the Final Polish rename on 2026-07-02) must appear as a distinct line item on the price calculator. See TW2111 MASTER §21 Fee Schedule for the canonical fee list.
- **Review author display (REVERTED 2026-07-02, Final Polish pass — supersedes the earlier pseudonym allowance from the same day).** Reviews with unknown author names must be published under the platform-generic label (`Verified Airbnb guest` / `Verified VRBO guest`) — **do not invent first-name + last-initial pseudonyms**, do not fabricate city labels, do not add a "Names anonymized for guest privacy" disclosure. Owner directive: publish only real, owner-supplied identifiers, or the platform-generic label. Consequences of identical author strings across many reviews (Google may suppress the aggregate-rating rich snippet) are an accepted trade-off. Retirement condition: when the owner supplies real first names (or approves an alternative identifier convention such as city labels) from platform host dashboards, swap the identifiers in place and log the change in the affected listing's Review Author Naming Policy section. See TW2111 MASTER §23 for the canonical rolled-back state.

---

## When you are unsure

Run the change through the **Internal Decision Filter** from the brand standards:

1. Does this strengthen the StayAtFlorida brand?
2. Does it help a guest picture themselves on vacation?
3. Does it justify our premium pricing?
4. Is it authentic and sustainable?
5. Would a guest remember this six months after their stay?

If the answer is "no" to most of those, don't ship it. Flag it in the PR / chat and defer to the [Brand Director](AGENTS.md#2-brand-director) agent role.

---

## Copy templates by surface

Approved patterns for every recurring copy surface. Adapt to the specific property, but don't drift from the shape.

### Hero H1 (homepage)

Approved:

- `Book Direct. Stay Better.` *(current)*
- `Luxury Beachfront Homes on Florida's Gulf Coast.`

Rejected:

- `Welcome to Paradise!`
- `Your Dream Florida Escape Starts Here`
- `Book Your Perfect Vacation`

### Hero eyebrow (kicker above the H1)

Approved:

- `Luxury Beachfront Vacation Homes` *(current)*
- `Owner-Hosted · Gulf Coast Florida`

Sentence case, uppercase tracked in CSS. Never punctuate with an exclamation.

### Property card subtitle

Always: `A StayAtFlorida Signature Property`. No variants.

### Property card short blurb (30–45 words)

Pattern: **one experiential sentence** ending in a period, no CTA.

Approved (Twenty First):

> A three-bedroom beachfront retreat above the emerald Gulf, designed for families who want to slow down, watch the water, and reconnect.

Approved (Majestic Sun 811):

> A Gulf-view retreat in Miramar Beach, steps to the sand and moments to Seascape's pools and dining.

Rejected:

> Amazing 3BR beachfront condo, sleeps 8, direct beach access, full kitchen, pool, hot tub, book now!

### Meta title

Pattern: `{Property name or page} | {short qualifier} · StayAtFlorida` — under 60 characters.

Approved:

- `Twenty First — Luxury Beachfront in Panama City Beach | StayAtFlorida`
- `StayAtFlorida | Luxury Beachfront Vacation Homes`
- `Contact | StayAtFlorida`

Rejected:

- `LUXURY BEACHFRONT CONDO PANAMA CITY BEACH FLORIDA GULF COAST DIRECT BOOK NOW`
- `Cheap Vacation Rental in PCB - Book Now!!`

### Meta description

Pattern: **one honest, human sentence** — 150–160 characters — one location term, one value term, no exclamation.

Approved (Twenty First):

> Luxury 3-bedroom, 3-bath beachfront home in Panama City Beach with Gulf views, resort amenities, and direct-booking savings — StayAtFlorida.

Rejected:

> BEACHFRONT!! Book NOW!! Amazing views, PERFECT for families, best rates, luxury paradise on the Gulf Coast!!!

### Primary CTA

Approved (choose one for its context):

- `Inquire` — **site-wide header CTA (added 2026-07-02).** Present on every page. Opens the existing inquiry modal (`showContactModal()`). Never build a duplicate form. Visual style: outlined-primary pill (`.btn-nav-inquire`) — premium, understated, always visible on mobile (not inside the hamburger).
- `Book Direct & Save` — homepage hero
- `Check Availability` — property page hero primary
- `View Photos` — property page hero secondary
- `Email to Reserve These Dates` — price calculator submit
- `Email to Book` — sticky bottom bar (mobile property page)
- `See Our Properties` — footer / cross-links
- `View Property` — homepage property card

Rejected:

- `Book Now!`
- `Reserve Instantly`
- `Get 20% Off`
- `Claim Your Stay`
- `Contact` *(retired 2026-07-02 in favor of `Inquire` — clearer for a vacation-rental site)*

### Email subject (host outbound)

Approved:

- `Your Twenty First reservation — [dates]`
- `Welcome to Twenty First — arrival details`
- `Thanks for staying at Twenty First`

Rejected:

- `🌴 Your dream vacation awaits! 🌴`
- `IMPORTANT: Please read`
- Anything with all-caps or three exclamation marks

### Review response (public reply)

Pattern: **thank the guest by first name → reference one specific detail → close warmly**. One to three sentences. No boilerplate.

Approved:

> Thank you, Dominique — so glad you enjoyed the view and the space felt right for your family. Come back any time; we'd love to host you again.

Rejected:

> Thank you for your wonderful review! We are so happy you had an amazing time at our property! We look forward to hosting you again soon!!!

### 404 / error page

Pattern: acknowledge → redirect → warmth. See [`404.html`](../../404.html).

Approved H1:

- `Page not found`

Approved body:

> Something's off with that link. Let's get you back to the beach — head to our [homepage](/) or browse our [properties](/#properties).

### Footer brand line

Approved:

- `StayAtFlorida — Luxury Beachfront Vacation Homes on Florida's Gulf Coast.`

Never abbreviate to `SAF`, never punctuate with an exclamation.

---

## Approved tagline library

For quick reuse. Every entry has been through the [Brand Director](AGENTS.md#2-brand-director).

### Master brand taglines

- `Luxury Beachfront Vacation Homes` *(primary)*
- `Where unforgettable beach memories begin.`
- `Owner-hosted luxury on Florida's Gulf Coast.`

### Property taglines

| Property | Tagline |
|---|---|
| Twenty First | `Above the Gulf. Beyond Expectations.` |
| Majestic Sun 811 | *Pending — see [MS811 MASTER](../listings/MS811/MASTER.md#brand-director-follow-ups)* |

New properties: submit three tagline candidates to the Brand Director for review, following the property naming standard in [`PROPERTY_PORTFOLIO.md`](PROPERTY_PORTFOLIO.md#property-naming-standard) and the per-property `MASTER.md` template at [`../listings/TEMPLATE/MASTER.md`](../listings/TEMPLATE/MASTER.md).

### Campaign taglines (approved for reuse)

- `Book Direct. Stay Better.` *(direct-booking value message)*
- `Every stay is a signature stay.` *(collection message)*
- `Your beach, waiting.` *(seasonal / re-engagement)*

Never introduce a new tagline into production without Brand Director sign-off recorded in the PR / chat.

---

## Grep gate (pre-ship check)

Run before shipping any content change. Any hit in guest-facing files is a Critical fail in [`QA_CHECKLIST.md`](QA_CHECKLIST.md#1-brand-qa).

```bash
grep -rniE "serenity rentals?|fun in the sun|21st(-| )floor|floor 21|8th floor|luxury beach service|beach setup crew|we provide beach service|beach service included|chair delivery|dream getaway|dream vacation" \
  --include="*.html" --include="*.js" .
```

Expected result: zero matches in guest-facing files. Matches inside `docs/*.md`, `StayAtFlorida-Brand-Standards-v1.0.md`, `BACKLOG.md`, or `REVIEWS` guest UGC are acceptable.

> **Note on `beach service`:** The literal phrase `beach service` is no longer a blanket forbidden term as of 2026-07-02. Beach chair rental IS available for purchase from third-party vendors on the beach, so we may mention it factually. What remains forbidden is any wording that implies **we** provide beach service. The grep above catches the specific overreach patterns (`luxury beach service`, `beach setup crew`, `we provide beach service`, `beach service included`, `chair delivery`) without producing false positives on approved informational copy.
