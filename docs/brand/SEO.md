# SEO

> **Purpose:** How StayAtFlorida ranks and gets clicked. Consult before editing meta tags, headings, structured data, image alt text, sitemaps, or anything a crawler will see.
>
> **Ground truth:** `SEO_CONFIG` in [`scripts/lib/listing-schema.cjs`](../../scripts/lib/listing-schema.cjs) is the canonical schema source. `SEO_CONFIG` in [`app.js`](../../app.js) is the runtime mirror. If they disagree, `listing-schema.cjs` wins and `app.js` must be brought back to parity.
>
> **Owned by:** [SEO Expert](AGENTS.md#5-seo-expert). **Reviewers on changes:** Software Architect (for schema/tech), Brand Director (for meta copy), CGO Agent (for acquisition impact), QA Agent (before ship). See [Doc ownership](AGENTS.md#doc-ownership).

---

## Site-wide SEO configuration

Current canonical values (from `scripts/lib/listing-schema.cjs`):

| Field | Value |
|---|---|
| Site name | `StayAtFlorida` |
| Site tagline | `Luxury Beachfront Vacation Homes` |
| Default title | `StayAtFlorida | Luxury Beachfront Vacation Homes` |
| Default description | Book luxury owner-hosted beachfront vacation homes on Florida's Gulf Coast with StayAtFlorida. Enjoy direct beach access, Gulf views, resort amenities, and direct-booking savings. |
| Canonical origin | `https://stayatflorida.com` |

Never introduce a new site name, tagline, or default meta description without updating both files and this doc.

---

## Meta title patterns

| Surface | Pattern | Example |
|---|---|---|
| Homepage | `{siteName} | {siteTagline}` | `StayAtFlorida | Luxury Beachfront Vacation Homes` |
| Property page | `{property.metaTitle}` if set, else `{property.title} | {city} · {siteName}` | `Twenty First — Luxury Beachfront in Panama City Beach | StayAtFlorida` |
| Contact / policy | `{Page name} | {siteName}` | `Contact | StayAtFlorida` |

**Rules:**

- Under 60 characters where possible; break points 55–65.
- Title case for the property name; sentence case for the rest.
- Never use ALL CAPS or exclamation marks.
- Include the location (city or "Florida") on property titles for local intent.
- The site name goes **last** on property titles, so the emotive property name gets the first-25-character weight.

---

## Meta description patterns

| Surface | Pattern | Length |
|---|---|---|
| Homepage | `{siteName} default description` | 150–160 chars |
| Property page | `{property.metaDescription}` if set, else generated from `bedrooms`, `maxGuests`, top amenities, city | 150–160 chars |

**Rules:**

- Under 160 characters.
- One primary keyword phrase early (e.g., "luxury beachfront," "Panama City Beach," "Destin").
- One value phrase (owner-hosted, direct booking, Gulf views).
- Do not stuff keywords. If it doesn't read like a sentence a person would speak, rewrite.
- No emojis, no exclamation marks.

**Twenty First example (current):**

> Luxury 3BR, 3BA beachfront condo at Tidewater in Panama City Beach. Direct beach access, resort amenities, and Gulf views — book direct with StayAtFlorida.

---

## Heading structure

Every page must have exactly one `<h1>`.

| Page | `<h1>` | `<h2>` uses |
|---|---|---|
| Homepage | Hero H1: `Luxury Beachfront Homes on Florida's Gulf Coast.` | Section titles: `Signature Properties`, `Loved by Guests`, `Why Book Direct`, etc. |
| Property page | Property name: `Twenty First` | Detail section titles: `About the Home`, `Amenities`, `Guest Reviews`, `Location` |
| Policy page | Page title (`Privacy Policy`, `Terms of Service`, `Gear We Love`) | Section headings within |
| 404 | `Page not found` | none required |

**Rules:**

- Never skip heading levels (no h1 → h3).
- Never use headings for visual styling — use CSS.
- The H1 on property pages is the property's brand name, not a marketing headline. Marketing lives in the `listingTagline` and `listingHeroCopy` below the H1.

---

## Structured data (JSON-LD)

Rendered by [`scripts/lib/listing-schema.cjs`](../../scripts/lib/listing-schema.cjs) and embedded in every page as a `@graph`. Static pages get pre-rendered JSON-LD in `listing-<id>.html`; the runtime version in `app.js` matches for JS-enabled crawlers.

**Required entities per page:**

| Page | Required schema entities |
|---|---|
| Homepage (`index.html`) | `Organization`, `WebSite`, `ItemList` of properties |
| Property page (`listing-<id>.html`) | `VacationRental` (or `LodgingBusiness` fallback), `Organization`, `BreadcrumbList`, embedded `Review[]`, `AggregateRating`, **`FAQPage`** *(when the property record has a `faqs` array — TW2111 has one as of 2026-07-02)* |
| Policy pages | `Organization` only |

**Rules:**

- Never publish JSON-LD that references a property, review, rating, or amenity that isn't actually rendered in the visible HTML. Google penalizes ghost schema.
- Never inflate `aggregateRating` — the number and average come from the `REVIEWS` array in `config.js`.
- Always update the schema when a review is added, a property changes bedrooms/bathrooms/capacity, or an amenity is added or removed. Regenerate via `node scripts/generate-listing-schema.cjs`.
- **`priceRange` accuracy (added 2026-07-02):** For each `VacationRental`, `priceRange` must reflect the **actual** low-to-high seasonal range, not a heuristic derived from a single base rate. If the auto-derived range in `scripts/lib/listing-schema.cjs` understates the real seasonal ceiling by more than ~15%, set an explicit `priceRangeOverride` on the property record. TW2111's canonical range is `$125-$610` per [`docs/listings/TW2111/MASTER.md §21`](../listings/TW2111/MASTER.md#21-fee-schedule-canonical).
- **Review author distinctness — accepted trade-off (REVERTED 2026-07-02, Final Polish pass).** Google's reviews rich-results policy discourages duplicate `review[].author.name` values on the same page and may suppress the aggregate-rating rich snippet when many reviews share an author string. **Owner elected to accept this SEO cost rather than invent identifiers.** Until real first names or an owner-approved identifier convention (e.g., city labels) are available, reviews on TW2111 (and any other listing in the same state) publish under the platform-generic label `Verified Airbnb guest` / `Verified VRBO guest`. Do not reintroduce pseudonyms. See [`BRAND_GUIDELINES.md#legal--factual-guardrails`](BRAND_GUIDELINES.md#legal--factual-guardrails) and TW2111 MASTER §23 for the canonical policy and rolled-back mapping.

**Regeneration workflow:**

```bash
node scripts/generate-listing-pages.cjs
node scripts/generate-listing-schema.cjs
```

After any change to `config.js` (property data or reviews), both scripts must run. Never edit the generated `listing-<id>.html` files by hand — the change will be overwritten on the next run.

---

## URL structure

| Type | URL | Notes |
|---|---|---|
| Homepage | `/` | Canonical. |
| Property (SPA-driven) | `/#property/{id}` | For JS-enabled users clicking in-app. Not canonical. |
| Property (static) | `/listing-{id}.html` | Canonical URL for the property. All SEO points here. |
| Policy | `/privacy.html`, `/terms.html` | Absolute URLs on `stayatflorida.com`. |
| Contact / gear | `/#contact`, `/gear.html` | Hash for in-app section, gear as its own page. |

**Rules:**

- The canonical URL for a property is its static `listing-{id}.html`. This is what appears in the sitemap, in JSON-LD, and in the `<link rel="canonical">` tag.
- Never introduce a third URL variant for the same property. Two (SPA hash + static file) is already a tradeoff we accept for SEO reasons.
- Never use query strings as canonical URLs.

---

## Image alt text patterns

Every `<img>` needs meaningful, unique `alt` text. No decorative image is used on property pages.

**Pattern for property photos:**

`{Property name} · {Room or subject} · {View or lifestyle detail if relevant}`

Examples:

- `Twenty First · Living room with Gulf view · Sunset light on the balcony`
- `Twenty First · Primary bedroom · King bed facing the water`
- `Westlight · Balcony · Emerald Gulf and sugar-white sand`

**Pattern for hero / OG images:**

`{Property name} — {Emotive detail} | StayAtFlorida`

Example:

- `Twenty First — Beachfront family retreat on Florida's Gulf Coast | StayAtFlorida`

**Rules:**

- Never keyword-stuff alt text (`beach rental panama city beach vacation home condo Gulf`) — it will read as spam.
- Never repeat the same alt text across multiple images of the same property.
- Never leave `alt=""` on a content image. Use empty alt only for a truly decorative element with an adjacent labeled sibling.

---

## Keywords we care about

Not for stuffing — for orientation. These are the search intents the brand is optimized for.

**Head terms:**

- Luxury beachfront vacation rental Florida
- Panama City Beach luxury rental
- Destin luxury rental
- Miramar Beach vacation rental
- Owner-hosted vacation rental Florida
- Direct booking vacation rental Gulf Coast

**Property-specific:**

- Tidewater Beach Resort rental (Twenty First operates in this community)
- Majestic Sun Miramar Beach rental
- Seascape Resort condo rental

**Long-tail intent phrases:**

- "3 bedroom beachfront condo Panama City Beach"
- "family beach rental Destin owner"
- "book direct beach condo Florida"

Never target adult, party, or spring-break intent.

---

## Local SEO

- **Google Business Profile: brand-level, not per-property.** A single GBP for `StayAtFlorida` (service-area business, hidden address, `Vacation home rental agency` primary category, service area = Panama City Beach + Miramar Beach) is the compliant model. Per-property GBPs are explicitly rejected — Google's vacation rental / SAB guidelines have historically flagged property-level accounts for mass suspension unless they're staffed like hotels (24/7 on-site staff, physical reception). See [`GBP.md`](GBP.md) for the full paste-ready profile + setup walkthrough + ongoing management rules. Status tracked at [phase-3 initiative #52](../phase-3/revenue-impact-tracker.md#52).
- Structured data includes `PostalAddress` and `GeoCoordinates` per property — those must stay accurate.
- Property pages mention the city name naturally at least once in the body.
- Never spoof a location (never suggest a property is "in Destin" if it's in Panama City Beach and vice versa).
- Once GBP is verified live, add the profile URL to the `Organization` JSON-LD `sameAs` array (currently deferred per [`../listings/TW2111/MASTER.md`](../listings/TW2111/MASTER.md) line 536).

---

## Sitemap

[`sitemap.xml`](../../sitemap.xml) lists:

- `/` (homepage)
- `/listing-4.html`
- `/listing-5.html`
- Policy pages if we want them indexed (`privacy.html`, `terms.html`)
- `/gear.html`

**Rule:** Every publicly indexable page must be in the sitemap. Every URL in the sitemap must exist and return 200.

---

## robots.txt

Located at [`robots.txt`](../../robots.txt). Only excludes what we do not want indexed (build artifacts, temp files). Never disallow `/`. Never disallow property pages.

---

## Reviews as a ranking signal

Every review has weight in three places:

1. **On the page** — visible to guests, driving conversion and dwell time.
2. **In JSON-LD** — `Review[]` embedded on the listing page for rich results.
3. **In `aggregateRating`** — driving the star display in search results.

**Rules:**

- Reviews must be real. Every review in `config.js` is either scraped from a real OTA listing or supplied by the owner.
- Never invent reviews.
- Never modify a review's wording. Only add.
- Never bulk-delete negative reviews. If a review is factually inaccurate, ask the platform to remove it and update the source — do not hide.

---

## Meta by page (current state)

Reflects what's actually on the site as of this doc's revision. When a value changes, update both the site and this table. Anything marked **needs refresh** is a Brand Director / SEO Expert follow-up.

| Page | `<title>` | `<meta description>` |
|---|---|---|
| `index.html` | `StayAtFlorida | Luxury Beachfront Vacation Homes` | `Owner-hosted luxury beachfront homes in Panama City Beach & Destin, Florida. Book direct with StayAtFlorida — Gulf views, resort amenities, no OTA fees.` *(152 / 160 chars — trimmed 2026-07-02 from 197)* |
| `listing-4.html` (Twenty First) | `Twenty First | StayAtFlorida` | `Book Twenty First by StayAtFlorida, a luxury beachfront condo in Panama City Beach with panoramic Gulf views, private balcony, resort amenities, and room for 8.` *(160 / 160 chars — at ceiling)* |
| `listing-5.html` (Westlight) | `Westlight \| StayAtFlorida — Gulf-Front 2BR in Miramar Beach` *(post-rebrand 2026-07-09; trimmed to 60 chars)* | `Book Westlight by StayAtFlorida, a Gulf-front 2BR condo in Miramar Beach with panoramic emerald views, resort amenities, and room for 6. Owner-hosted.` *(151 / 160 chars — hand-written via `config.js` #5 `metaDescription`)* |
| `privacy.html` | `Privacy Policy | StayAtFlorida` | `How StayAtFlorida handles your information when you browse stayatflorida.com or submit the contact form.` |
| `terms.html` | `Terms of Use | StayAtFlorida` | `Terms for using stayatflorida.com. Bookings are direct with the property owner and subject to the owner's rental agreement.` |
| `gear.html` | `Gear We Use at Our Destin & PCB Condos | StayAtFlorida` | `The smart lock, blackout curtains, waterproof mattress protector, coffee gear and beach essentials we actually use at our Florida Gulf Coast luxury beachfront vacation homes.` |
| `404.html` | `Page not found | StayAtFlorida` | `That page couldn't be found. Browse our Gulf Coast vacation rentals or get in touch.` |
| `email-signature.html` | `StayAtFlorida — Email Signature` | *(no meta description — internal utility page, not indexed)* |

**Rules for updates:**

- Title stays under 60 characters. Description stays 150–160 characters.
- Property title format: `{Property name} — {short qualifier} | StayAtFlorida` (see [`BRAND_GUIDELINES.md#meta-title`](BRAND_GUIDELINES.md#meta-title)).
- Property description comes from `property.metaDescription` in `config.js`, not from the auto-generator in `listing-schema.cjs`. The auto-generator is a fallback for properties that don't have a hand-written description yet — it should never be the shipped state on a Signature Property.

---

## Keyword-to-page map

The primary intent each page targets. One page owns one primary intent; overlap is fine but the primary is what the meta and H1 reflect.

| Page | Primary intent | Supporting terms |
|---|---|---|
| `index.html` | `luxury beachfront vacation home Florida` | `owner-hosted vacation rental Gulf Coast`, `book direct beach condo Florida`, `StayAtFlorida` |
| `listing-4.html` | `3 bedroom beachfront condo Panama City Beach` | `Tidewater Beach Resort rental`, `Panama City Beach luxury rental`, `family beachfront condo PCB` |
| `listing-5.html` | `Gulf-view condo Miramar Beach Destin` | `Majestic Sun rental`, `Seascape Resort condo`, `Miramar Beach 2 bedroom` |
| `gear.html` | Long-tail informational — supports brand E-E-A-T | `Florida vacation rental gear`, `beach condo essentials` |
| `privacy.html` / `terms.html` | Trust / legal — not acquisition | — |
| `404.html` | Recovery — internal | — |

**Rules:**

- Never target the same primary intent from two pages. If a new page overlaps, redirect or rewrite so intent is clear.
- Property pages own their location term (`Panama City Beach`, `Destin`, `Miramar Beach`). The homepage owns the state and Gulf-Coast-level terms.
- Never chase short-tail terms we cannot rank for (`Florida vacation rental` alone, `beach house`). Focus on the specific-intent long tails above.

---

## Performance and Core Web Vitals

Ranking is influenced by page experience. Standards:

| Metric | Target |
|---|---|
| Largest Contentful Paint (LCP) | < 2.5s on 4G |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Interaction to Next Paint (INP) | < 200ms |
| Total page weight (property page) | < 2MB compressed |

**How we hit these:**

- Hero video is compressed (< 10MB), muted, with a poster image.
- Property gallery images lazy-load below the fold.
- Fonts are loaded from Google Fonts with `display=swap`.
- No render-blocking third-party scripts above the fold.

If a proposed change measurably regresses any of the above, it does not ship.
