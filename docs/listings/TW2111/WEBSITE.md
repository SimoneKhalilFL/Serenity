# Twenty First — WEBSITE

> **Derived from:** [`MASTER.md`](MASTER.md). Never edit this file first.
>
> **Owned by:** [Software Architect](../../brand/AGENTS.md#7-software-architect). **Content reviewers:** Brand Director, SEO Expert, Content Sync Agent, QA Agent.
>
> **Purpose:** Platform-ready copy for `stayatflorida.com`. When MASTER.md changes, regenerate this file per [`../../sync/SYNC_RULES.md`](../../sync/SYNC_RULES.md). Copy from here into [`../../../config.js`](../../../config.js) fields.

---

## Homepage Property Card

| Field | Value | `config.js` field |
|---|---|---|
| Card title | Twenty First | `title` |
| Card subtitle | A StayAtFlorida Signature Property | `cardSubtitle` |
| Card blurb | A three-bedroom beachfront retreat above the emerald Gulf, designed for families who want to slow down, watch the water, and reconnect. | `cardShortDescription` |
| Location line | Panama City Beach, Florida | `location` |
| Sleeps line | Sleeps up to 8 · 3 BR · 3 BA | *(derived from `maxGuests`, `bedrooms`, `bathrooms`)* |
| Primary CTA | View Property | *(button label)* |
| Card image | `tw-hero.jpg` | *(first entry in `images` array)* |

## Hero Section (property page)

| Field | Value | `config.js` field |
|---|---|---|
| H1 | Twenty First | `listingHeadline` |
| Brand subtitle | A StayAtFlorida Signature Property | `listingBrandSubtitle` |
| Tagline | Above the Gulf. Beyond Expectations. | `listingTagline` |
| Location | Panama City Beach, Florida | `location` |
| Hero copy | Wake up above the emerald Gulf and spend the day on sugar-white sand. Twenty First is a three-bedroom, three-bath beachfront retreat designed for families who want to slow down, watch the water, and reconnect. | `listingHeroCopy` |
| Primary CTA | Book Direct & Save | *(button)* |
| Secondary CTA | View Photos | *(button)* |

## Highlights

Four to five short bullets. Pulled from MASTER §9 Selling Points.

- Panoramic Gulf views from the private beachfront balcony
- Direct beach access from the resort deck
- 3 bedrooms, sleeps up to 8 — including a private bunk suite
- Complimentary beach chairs and umbrella available in the condo
- Owner-hosted — book direct and save the OTA service fees

## Property Description

The full Master Long Description from [`MASTER.md`](MASTER.md#14-master-long-description), rendered as-is on the property detail page. The direct-booking value sentence in the final paragraph is included on the website only.

## FAQ

| Question | Answer |
|---|---|
| Where is Twenty First? | Panama City Beach, Florida, inside Tidewater Beach Resort. About 35 minutes from ECP airport. |
| How many people can it sleep? | Up to 8 guests across a primary king bedroom, a guest king bedroom, a private bunk suite (two twin bunks), and a sleeper sofa in the living room. |
| Are pets allowed? | No pets. |
| Is there beach service? | We do not provide beach service. Complimentary beach chairs and umbrella are available in the condo for you to use throughout your stay. |
| What's the cancellation policy? | Full refund up to 30 days before check-in. 50% refund 15–30 days out. No refund within 14 days. |
| Do you offer discounts for direct booking? | You skip the OTA service fees (typically 10–15% of the total) when you book direct at stayatflorida.com. Same home, same host, same beach. |
| How do I contact the owner? | Simone answers every inquiry personally, typically within 24 hours. Email through the site or from the calculator. |

## SEO

### Meta Title (52 / 60 chars)

`Twenty First | Luxury Beachfront Condo in Panama City Beach`

### Meta Description (160 / 160 chars — at ceiling)

`Book Twenty First by StayAtFlorida, a luxury beachfront condo in Panama City Beach with panoramic Gulf views, private balcony, resort amenities, and room for 8.`

**Keyword coverage** *(required-keyword audit — every item must be present):*

- `Panama City Beach` — present
- `luxury beachfront condo` — present
- `panoramic Gulf views` — present
- `room for 8` — present
- Master brand `StayAtFlorida` — present (`by StayAtFlorida`)
- Property name `Twenty First` — present

**Length discipline:** The description sits at Google's soft 160-char ceiling. Any future edit that adds characters must first trim elsewhere; the file must never ship at 161+.

**Source of truth:** `config.js` `metaDescription` for property id 4. Any change must be made in `config.js` first, then propagated by running:

```
node scripts/generate-listing-pages.cjs
node scripts/generate-listing-schema.cjs
```

Regeneration updates the meta / OG / Twitter tags and the JSON-LD description in [`../../../listing-4.html`](../../../listing-4.html) and the listing JSON-LD block in [`../../../index.html`](../../../index.html).

### Canonical URL

`https://stayatflorida.com/listing-4.html`

### Alt Text (per photo)

Use MASTER §18 Photo Caption Library — long-caption column.

Alt-text pattern: `Twenty First · {Room or subject} · {View or lifestyle detail}`

## CTA Copy

| Placement | Text |
|---|---|
| Homepage card | View Property |
| Property page hero primary | Book Direct & Save |
| Property page hero secondary | View Photos |
| Sticky bottom bar | Email to Book |
| Contact form submit | Send Inquiry |

All CTA phrases from the [approved list](../../brand/BRAND_GUIDELINES.md#primary-cta). Never introduce a new CTA phrase without Brand Director sign-off.
