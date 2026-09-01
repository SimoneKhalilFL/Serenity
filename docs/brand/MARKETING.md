# Marketing

> **Purpose:** How StayAtFlorida positions itself, who we talk to, where we show up, and what a good campaign looks like. Consult before writing OTA copy, running promotions, changing hero copy, or building landing pages.
>
> **Owned by:** [Marketing Director](AGENTS.md#8-marketing-director). The [Growth Strategy](#growth-strategy) section is owned by the [Chief Growth Officer Agent](AGENTS.md#10-chief-growth-officer-agent). **Reviewers on changes:** Brand Director, CGO Agent, QA Agent (before ship). See [Doc ownership](AGENTS.md#doc-ownership).

---

## Positioning

**StayAtFlorida is a boutique, owner-hosted, luxury beachfront vacation home brand on Florida's Gulf Coast.**

We are not:

- An OTA (Airbnb, VRBO, Booking.com — those are distribution channels we use, not our identity)
- A property management company
- A discount rental site
- A generic "Florida vacation rentals" listing service

We are:

- The owner's own hospitality brand
- A signature collection of premium beachfront homes
- The direct-booking home for guests who want a real relationship with the host

---

## Value propositions

The three claims we lead with, in priority order:

1. **Luxury, owner-hosted beachfront homes.** Every property is a Signature Property, chosen and hosted by the owner. Not part of a large managed pool.
2. **Book direct and save.** Guests skip the OTA service fees (roughly 10–20%). On a $1,400 week that's $140–$280 kept out of Airbnb/VRBO's pocket and in the guest's — with the same home, same host, same beach.
3. **Real hospitality, real communication.** A named owner answers the email. Replies typically within 2 hours. No support ticket queue.

Supporting proof points we can use:

- 5.0 average across dozens of verified guest reviews (from `config.js` `REVIEWS`).
- Owner-hosted since 2020.
- Transparent pricing — the calculator shows the estimated nightly rate, cleaning, and tax before you email.
- Direct-beach access at both properties.

---

## Target audience

**Primary:** Multi-generational families and small groups (4–8 travelers) who value comfort and view over price, and who are comfortable emailing a host to book a stay of a week or more.

**Secondary:** Couples and small groups planning shoulder-season trips (spring, fall) who want a premium beachfront stay at a shoulder-season rate.

**We are not chasing:**

- Spring-break party groups
- One-night bookings
- Bachelor/bachelorette groups
- Any guest expecting concierge / white-glove beach service *provided by us* (we do not provide that — beach chair rental IS available for purchase from on-beach vendors, but that's a third-party paid option, never framed as our amenity. See [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md#beach-chairs-and-umbrella))

Guest profile detail lives in [`HOSPITALITY.md`](HOSPITALITY.md).

---

## Channels

| Channel | Role | Notes |
|---|---|---|
| `stayatflorida.com` | **Primary conversion surface.** Direct-booking flow. | This repo. Static site on GitHub Pages. |
| Airbnb | Discovery + reviews. Send to direct site on repeat bookings. | Uses a different pricing model — see [Revenue Manager](AGENTS.md#6-revenue-manager). |
| VRBO | Discovery + reviews. Send to direct site on repeat bookings. | Same as Airbnb. |
| Booking.com | Discovery only. Rate parity where required. | Lower priority. |
| Email signature | Every host email links to `stayatflorida.com`. | See [`email-signature.html`](../../email-signature.html). |
| Facebook page | Photo-first social proof, seasonal posts. | Linked in footer + JSON-LD `sameAs`. Unattended posts: [`SOCIAL.md`](SOCIAL.md). |
| Instagram | Same posts as Facebook (photo + caption), via Meta Graph API. | Business/Creator account linked to the Facebook Page. |

**Rule:** OTA channels exist to feed the direct site. All OTA copy links (where allowed) to `stayatflorida.com` and encourages repeat bookings direct.

---

## Copy standards by surface

### Direct site (this repo)

Full brand voice. Boutique-hotel tone throughout. Meta tags, hero copy, property descriptions, section headers, footer — all governed by [`BRAND_GUIDELINES.md`](BRAND_GUIDELINES.md).

### Airbnb / VRBO / Booking listings

The same tone, adapted to platform limits:

- Titles: max 50 chars on some platforms. Lead with the property name and the single most emotive detail.
- No mention of "book direct" (OTAs forbid channel steering in the listing body).
- Never mention floor number, unit number, or Tidewater as the lead.
- Every listing must include the [complimentary beach chairs and umbrella](BRAND_GUIDELINES.md#beach-chairs-and-umbrella) sentence, verbatim.
- Every listing must clarify what WE provide (complimentary beach chairs and umbrella in the condo) vs. what's available for purchase from on-beach vendors (full-service chair/umbrella rental). Never let a guest assume WE are the beach-service provider.
- Reviews from OTAs feed back into `config.js` as reference; direct-site copy still owns the aggregate rating.

**Approved OTA headlines by property** — see the `AIRBNB.md`, `VRBO.md`, and `BOOKING.md` files under the property's [`../listings/`](../listings/) folder (e.g. [`../listings/TW2111/AIRBNB.md`](../listings/TW2111/AIRBNB.md)). Never publish an OTA listing with a headline that isn't in that library, or that hasn't been signed off by the Brand Director.

### OTA description template

Use this structure for every OTA property description. Adapt the specific detail, don't change the shape.

```
[Opening — one experiential sentence, one image the guest can picture, ~150 chars]

[The Home — 3–5 sentences on layout, sleeping capacity, and the feel of the space]

[The View & Beach — 2–3 sentences on the balcony, view, direct beach access, and — verbatim — "complimentary beach chairs and umbrella available in the condo"]

[The Resort — 2–3 sentences on pools, fitness, grounds, and location context]

[Good to Know — bullet list: check-in time, parking, Wi-Fi, no smoking/pets/parties, minimum age 25]

[About Your Host — one paragraph, first-person, owner-hosted, response time within 2 hours]
```

Length targets by platform:

| Platform | Total length | Notes |
|---|---|---|
| Airbnb | 500–700 words | First 400 chars are the "highlighted" excerpt — front-load. |
| VRBO | 800–1,200 words | Longer format; use every section above. |
| Booking.com | 300–500 words | Trim to Opening, Home, View & Beach, Resort. |

**Twenty First — sample opening paragraph (Airbnb / VRBO):**

> Wake up above the emerald Gulf and spend the day on sugar-white sand — Twenty First is a three-bedroom, three-bath beachfront retreat designed for families who want to slow down, watch the water, and reconnect.

**Twenty First — sample View & Beach paragraph:**

> The private balcony overlooks the Gulf, with direct beach access from the resort deck below. Complimentary beach chairs and umbrella are available in the condo — bring them down with you each morning. Prefer the full setup? Beach chair and umbrella rental is also available for purchase directly on the beach from local vendors.

### Email

- Subject lines: sentence case, no exclamations.
- Signature: use `email-signature.html` (already rebranded).
- Reply time expectation: "typically within 2 hours."
- Sign-off: warm but professional. `Best,` or `Warmly,`. Never `Cheers!` or emoji.

---

## Photo strategy

Photos convert more than copy on this brand. Follow the priority list from the brand standards:

1. View
2. Lifestyle
3. Bedrooms
4. Living room
5. Kitchen
6. Dining
7. Balcony
8. Beach
9. Amenities
10. Bathrooms

**Every property page must include at least three lifestyle shots.** These sell the emotion the copy promises. See the *Photo Caption Library* section of each property's `MASTER.md` (e.g. [`../listings/TW2111/MASTER.md`](../listings/TW2111/MASTER.md)) for the specific shots required.

**Style guardrails:**

- Natural light. Shoot early morning or late afternoon; avoid harsh midday.
- Warm color grade. No cold/blue casts. Never HDR.
- Never composite a bluer Gulf than exists.
- Clutter minimum: no remotes on the couch, no bottles on counters, no cords in frame.
- Never use stock photography of a beach that isn't ours.

---

## Review strategy

Reviews are the single largest conversion lever on this brand. Every stay ends with a review request.

**Channel (canonical, locked 2026-07-07):** SMS is the primary channel for the review-request touch. Email is the approved fallback for guests where SMS delivery fails. Full templates + rules live in [`HOSPITALITY.md`](HOSPITALITY.md#7-review-request-day-2-sms-primary) §7 + §8 + §9; per-platform variants + tracking log format live in [`HOSPITALITY.md`](HOSPITALITY.md#post-stay-review-solicitation-playbook) § Post-stay review-solicitation playbook.

**Cadence (canonical, owner-confirmed 2026-07-07 evening — supersedes prior "check-out day" and "day +3" versions):**

- **Send #1 — Day +2** (48h after checkout) — **STANDARD, send to every guest**: single SMS review-request with the direct-book pitch inline. Lands ~24h after the OTA-native review-request email in the guest's inbox — warm nudge on top of a link the guest already has. Matches owner's proven pre-2026-07-07 baseline (single consistent follow-up text).
- **Send #2 — Day +7** (one week after checkout) — **OPTIONAL, use sparingly**: SMS follow-up if no review yet. One time only. Reserve for stays where a review would materially help; not standard cadence.
- **Send #3 — Post-positive-review** — **OPTIONAL, alternative pattern**: only for the alternative sequencing where the direct-book pitch is stripped from Send #1. The canonical Send #1 already includes the pitch inline; Send #3 is a shelf template for specific high-value cases.
- **Never:** Third review asks, incentivized reviews, coached ratings, or paid reviews.

**Per-platform ask discipline:**

- **OTA-booked guests** get asked to review on the platform they booked on. Never ask an Airbnb guest to review on VRBO or Google — cross-platform review-cannibalization dilutes the property's review count on the platform of record.
- **Houfy note:** guests who booked THROUGH Houfy get a Houfy-native ask *(the review-import feature already surfaces Airbnb + VRBO reviews on the Houfy listing page, so don't double-ask Airbnb/VRBO guests to review on Houfy)*. See [`../listings/TW2111/HOUFY.md#current-live-state-post-rebrand-verified-2026-07-07-evening-via-live-page-fetch`](../listings/TW2111/HOUFY.md) `Houfy-specific rules` for detail.
- **Direct-site guests** get asked to review on Google *(pending Google Business Profile setup — tracker initiative #52; deferred until GBP is created + verified)*. Google reviews build map-pack SEO for `Panama City Beach vacation rental` searches without competing with any OTA review count.

**Never ask for a specific rating** (`5-star`, `great review`, `top rating`). Airbnb + VRBO review policies explicitly prohibit soliciting specific ratings; both platforms honor off-platform reports. Use `an honest review` or just `a review`. Full rules in [`HOSPITALITY.md`](HOSPITALITY.md#template-rules) `Template rules`.

**Placement on the Website:**

- Aggregated rating on the homepage trust badge *(hidden for TW2111 per `MASTER.md §23 hybrid-review-display policy` — hero shows verified guest count only, not aggregate, until Phase 3 #4 measurement window resolves)*.
- Per-property review section on the listing page (up to 20 shown, all shown in JSON-LD).
- The "Loved by Guests" homepage section rotates real named reviews.

**What we ask for:** authentic feedback. Never coach the wording. If a guest voluntarily uses a phrase we'd normally avoid ("perfect," "amazing"), it stays as they wrote it — UGC is authentic, brand copy is curated.

---

## Campaign patterns

### Shoulder-season pricing campaign

- Trigger: 60 days of inventory in a shoulder-season window with occupancy below target.
- Action: Adjust `seasonalAdjustments` in `config.js` for the window. Do **not** run banner "SALE" copy — the price on the calculator is the campaign.
- Never headline "20% off." That's OTA-speak.

### Repeat-guest direct-booking campaign

- Trigger: Guest arriving via an OTA.
- Action: Post-stay email invites them to book direct next time. Reference the fee savings quietly, once, in one sentence.

### New Signature Property launch

- Trigger: A new property joins the collection.
- Action: New property card on the homepage, new listing page, new OG image, new sitemap entry, new social post. Meta descriptions and hero copy follow the [property naming pattern](BRAND_GUIDELINES.md#core-identity).

### Current-month openings (social)

- Trigger: Scheduled Tuesday / Thursday / Saturday run in [SOCIAL.md](SOCIAL.md).
- Action: Unattended Facebook + Instagram photo post. Tuesday promotes 3+ night openings in the current sell window; Thursday is lifestyle; Saturday is a real guest quote. No approval step. No discount or urgency copy.
- Pause: set GitHub secret `SOCIAL_POST_ENABLED` to `false`.

### Meta morning-balcony creative (organic now; paid later)

- Locked emotion creative for Westlight morning balcony: [`docs/social/ads/ms-morning-balcony/`](../social/ads/ms-morning-balcony/).
- **Organic:** daily `lifestyle` posts for Westlight use the clean crops via [`scripts/social-post.cjs`](../../scripts/social-post.cjs) (no burned-in text).
- Clean photo only — no burned-in headlines, amenity icons, pricing, or “BOOK NOW” graphics.
- First **paid** test when approved: **emotion vs. offer** (different image for offer), not micro copy variants.
- Status as of 2026-09-01: organic on; **not running paid ads**.

---

## Seasonal calendar

Emerald Coast (Panama City Beach, Destin, Miramar Beach) demand windows. Use these to set expectations for pricing, minimum stays, and campaign timing. Exact multipliers live in `seasonalAdjustments` in [`config.js`](../../config.js).

| Season | Window | Demand | Positioning |
|---|---|---|---|
| Spring Break | March–early April | Very high | Full rate, 5+ night minimum, families over college groups. |
| Shoulder Spring | Late April–May | Medium | Best perceived value; couples-and-small-families targeting. |
| Peak Summer | June–early August | Very high | Full rate, 7-night minimum common, book far in advance. |
| Late Summer | Mid-August | Medium-high | Ramps down as school starts; family-friendly tail. |
| Shoulder Fall | September–October | Medium | Best weather, lowest crowds — market to couples and empty-nesters. |
| Off-season | November–February | Low | Snowbirds, monthly stays, remote-work families; longer-stay pricing. |
| Holiday spikes | Thanksgiving, Christmas week, New Year's | High for select days | Full rate on the anchor day, minimum-stay policy. |

**Marketing implications per season:**

- **Peak (Spring Break, Summer, Holidays):** No campaigns needed. Hold rate. Focus on operations, photos, and reviews so demand becomes repeat bookings.
- **Shoulder (Spring, Fall):** Best time for value-forward messaging on the direct site. Adjust the calculator rate — never run a banner.
- **Off-season:** Long-stay pricing (weekly/monthly rate blocks in `config.js`). Target remote workers and snowbirds. Consider a small direct-only rate advantage.

The [Revenue Manager](AGENTS.md#6-revenue-manager) owns rates within each window; the [CGO Agent](AGENTS.md#10-chief-growth-officer-agent) owns campaign timing and channel mix.

---

## Growth Strategy

Owned by the [Chief Growth Officer Agent](AGENTS.md#10-chief-growth-officer-agent). This section defines *how* StayAtFlorida grows, and *how* growth decisions are ranked. If a growth idea can't be defended against the ranking below, it doesn't get built.

### How StayAtFlorida grows

Seven levers, in the order the CGO prioritizes them:

1. **Higher direct-booking conversion.** Every additional percentage point on `stayatflorida.com` view-to-inquiry is worth more than the same lift on any OTA — no service fees, better guest data, repeat-guest capture. This is the primary lever.
2. **Stronger property page merchandising.** The property page is the closing floor. Hero photo, first three gallery images, review placement, sticky booking bar, trust badges, and calculator clarity are the levers that compound.
3. **Better repeat-guest capture.** A guest who returns direct is our lowest-cost acquisition. Post-stay email, direct-booking incentive framing (skip fees), and personal owner outreach for high-signal past guests.
4. **OTA listing optimization.** Airbnb, VRBO, Booking.com titles, photo ordering, description opening lines, and review-response tone. OTAs feed the top of the funnel; direct closes it.
5. **SEO and local content.** Meta on high-intent pages, JSON-LD accuracy, local-content additions ("things to do in Miramar Beach," "guide to Panama City Beach shoulder season") — long-lead but compounding.
6. **Email and referral strategy.** A small list of past guests is worth more than a large cold list. Referral asks live inside the post-stay flow, framed as "share with someone you'd trust in the home."
7. **Premium positioning instead of discounting.** We win by being more desirable, not cheaper. Discounts only run as adjusted calculator rates in shoulder windows, never as banner campaigns.

### How growth decisions are ranked

Every proposed growth initiative should be scored on five dimensions before it's prioritized:

| Dimension | What it measures |
|---|---|
| **Expected revenue impact** | Realistic bookings or ADR lift the change would produce, over a defined window (e.g., next 90 days). |
| **Implementation effort** | Hours, dependencies, and blast radius. A one-hour copy edit and a two-week feature build sit on very different lines. |
| **Brand alignment** | Whether the change strengthens the boutique, owner-hosted, premium positioning — or dilutes it. |
| **Guest trust impact** | Whether the change makes the site more honest, clearer, and easier to believe — or the opposite. |
| **Measurability** | Whether we can actually tell if it worked (analytics, inquiry counts, review sentiment, calendar fill). |

Score each dimension high / medium / low. Ship the changes that stack the most "high" scores against the lowest effort first. Anything low on revenue impact *and* low on measurability should be justified by another lever (brand, trust) before it takes engineering time.

### The growth question

Before starting any non-trivial change, the AI should answer this in one sentence, per [`AI_RULES.md`](AI_RULES.md#chief-growth-officer-agent-impact-ranking):

> "This change is likely to improve **[revenue | conversion | trust | SEO | guest retention]** because **[specific mechanism]**."

If the answer is "none of the above," the change is low-impact. Flag it and propose a higher-impact alternative — don't just build it because it was requested. The user retains override authority.

### Example impact rankings

Real examples of how the CGO would rank candidate work:

| Candidate change | Revenue | Effort | Brand | Trust | Measurable | CGO call |
|---|---|---|---|---|---|---|
| Rewrite Twenty First hero copy for direct-booking conversion | High | Low | High | High | Medium | **Ship first** |
| Reorder Twenty First photo gallery (view/lifestyle in slots 1–3) | High | Low | High | High | Medium | **Ship first** |
| Add reviews above the fold on the property page | High | Medium | High | High | High | **Ship second** |
| Add a blog with "10 things to do in Panama City Beach" | Low–Medium | High | Medium | Medium | Low | Defer |
| Redesign the footer to be a two-column layout | Low | Medium | Low | Low | Low | Reject — no clear conversion, brand, or trust lift |
| Add a floating "10% off first booking!" discount widget | Negative | Medium | Negative | Negative | High | Reject — dilutes brand, trains for discount waiting |
| Post-stay email inviting repeat-direct booking | Medium (long-term) | Low | High | High | Medium | **Ship** |

### Anti-patterns the CGO rejects

- **Growth theater.** Vanity metrics that don't move revenue (page views without inquiry lift, social followers without repeat guests, "engagement time" without conversion).
- **Discount reflexes.** Reaching for a promo before improving perceived value. If the calculator's price is right, the perceived value is what needs work — hero, photos, reviews, trust.
- **OTA over-indexing.** Letting any single OTA cross ~50% of bookings without a plan to rebalance toward direct.
- **Feature creep.** Building a "trip planner" or "wishlist" or "map view" because it exists on Airbnb. If it doesn't measurably lift inquiries on our two properties, it's decoration.
- **Untestable changes.** Shipping something without a way to tell if it worked. If we can't measure, we can't compound.

---

## Things we do not do

- Discount hype ("50% off!" / "Limited time deal!")
- Countdown timers or FOMO widgets
- Pop-ups on page load
- Email opt-in modals blocking content
- Fake urgency ("Only 1 left at this price")
- Retargeting ads that follow guests around the internet
- Paid reviews or incentivized ratings
- Instagram-influencer swaps in exchange for free stays
- Selling gift cards, third-party affiliate products beyond the honest [`gear.html`](../../gear.html) page
- Any campaign that puts "Best" or "Amazing" in a headline

If a proposed campaign would embarrass the brand at a boutique hotel bar, don't ship it.
