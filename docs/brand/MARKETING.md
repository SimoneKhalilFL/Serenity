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
| Facebook page | Photo-first social proof, seasonal posts. | Linked in footer + JSON-LD `sameAs`. |

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

**Cadence:**

- **Check-out day:** Automated warm thank-you email; ask for a review only after check-out is complete.
- **48 hours later:** Follow-up if no review yet — one time only.
- **Never:** Third asks, incentivized reviews, or paid reviews.

**Placement:**

- Aggregated 5-star rating on the homepage trust badge.
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
