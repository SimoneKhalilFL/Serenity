# Property Portfolio

> **Purpose:** The canonical roster of every property in the StayAtFlorida portfolio. High-level index only — full property content lives in each property's [`MASTER.md`](../listings/) file.
>
> **Owned by:** [Brand Director](AGENTS.md#2-brand-director). **Reviewers on changes:** CEO Agent, CGO Agent (on new properties), QA Agent (before ship). See [Doc ownership](AGENTS.md#doc-ownership).
>
> **Source of truth per property:** the property's `MASTER.md` under [`../listings/`](../listings/). Anything on this page that conflicts with a `MASTER.md` is out of date.

---

## Master brand

| Field | Value |
|---|---|
| Company | **StayAtFlorida** |
| Tagline | **Luxury Beachfront Vacation Homes** |
| Brand promise | Where unforgettable beach memories begin. |
| Category | Owner-hosted luxury beachfront vacation homes on Florida's Gulf Coast |
| Positioning | Premium boutique hospitality — not a generic vacation rental |

---

## Active roster

### TW2111 — Twenty First

| Field | Value |
|---|---|
| Folder | [`../listings/TW2111/`](../listings/TW2111/) |
| Display name | **Twenty First** |
| Brand subtitle | A StayAtFlorida Signature Property |
| Property tagline | Above the Gulf. Beyond Expectations. |
| Market | Panama City Beach, Florida |
| Community | Tidewater Beach Resort *(operational context only — not the brand)* |
| Layout | 3 bedrooms, 3 bathrooms |
| Sleeps | Up to 8 guests |
| Status | **Active** |
| Brand | StayAtFlorida Signature Property |
| Platforms | Website · Airbnb · VRBO · Booking.com |
| Master document | [`../listings/TW2111/MASTER.md`](../listings/TW2111/MASTER.md) |

### MS811 — Majestic Sun

| Field | Value |
|---|---|
| Folder | [`../listings/MS811/`](../listings/MS811/) |
| Current display name | **Majestic Sun** *(temporary — needs future branding)* |
| Brand subtitle | *Pending — Future StayAtFlorida Signature Property* |
| Property tagline | *Pending Brand Director sign-off* |
| Market | Miramar Beach, Florida (Destin area) |
| Community | Majestic Sun at Seascape Resort |
| Layout | 2 bedrooms, 2 bathrooms |
| Sleeps | Up to 6 guests |
| Status | **Active** |
| Brand | **Pending** — do NOT rename yet |
| Platforms | Website · Airbnb · VRBO · Booking.com |
| Master document | [`../listings/MS811/MASTER.md`](../listings/MS811/MASTER.md) |

---

## The Signature Collection

Every property in the StayAtFlorida portfolio must meet four bars before it joins the Signature Collection:

1. **Beachfront.** Direct access, unobstructed Gulf view, or true walk-to-beach proximity.
2. **Luxury standard.** Interiors, linens, and kitchens at boutique-hotel level.
3. **Owner-hosted.** A named host who answers the email personally.
4. **Sustainable pricing.** Nightly rates that reward direct booking without racing to the bottom.

MS811 currently ships with the "Signature Property" subtitle **pending** while the Brand Director works through positioning. Until sign-off, it's an active property but not yet a Signature Property in marketing copy.

---

## Property naming standard

Every Signature Property follows this three-line pattern:

```
[Display Name]
A StayAtFlorida Signature Property
[One-line tagline · sentence case · no exclamation]
```

Example:

```
Twenty First
A StayAtFlorida Signature Property
Above the Gulf. Beyond Expectations.
```

Naming rules:

- **Folder codes** (`TW2111`, `MS811`, `TEMPLATE`) are internal only — they never appear guest-facing.
- **Display names** are short, elegant, timeless. Never include floor number, unit number, community name, or `Rental` / `Rentals`.
- Taglines are under 8 words when possible, never over 12. Sentence case, no exclamations, no hype words (`paradise`, `dream`, `perfect`).
- Submit three tagline candidates to the [Brand Director](AGENTS.md#2-brand-director) for review before shipping.

Full rules: [`BRAND_GUIDELINES.md`](BRAND_GUIDELINES.md#core-identity) and [`../listings/TEMPLATE/MASTER.md`](../listings/TEMPLATE/MASTER.md).

---

## Adding a new property

When a new property is ready to join the collection:

1. Confirm the property meets all four Signature Collection bars.
2. Assign a folder code (2-letter community + unit number, e.g. `TW2111`, `MS811`).
3. Copy [`../listings/TEMPLATE/`](../listings/TEMPLATE/) into `../listings/{CODE}/` and populate each file starting with `MASTER.md`.
4. Get [Brand Director](AGENTS.md#2-brand-director) sign-off on the three-line naming block.
5. Add the property to this portfolio roster with `Status: Active` (or `Status: Onboarding` if not yet live).
6. Add the property to the `PROPERTIES` array in [`../../config.js`](../../config.js) at parity with existing properties.
7. Run `node scripts/generate-listing-pages.cjs` and `node scripts/generate-listing-schema.cjs`.
8. Add a new `<url>` entry to [`../../sitemap.xml`](../../sitemap.xml).
9. Run the full [`QA_CHECKLIST.md`](QA_CHECKLIST.md) before shipping.

Content Synchronization Agent handles regeneration of the four platform files (`WEBSITE.md`, `AIRBNB.md`, `VRBO.md`, `BOOKING.md`) from `MASTER.md` after each edit.

---

## Retiring a property

- Do not delete the property's folder for at least 12 months after retirement — historical reviews and analytics reference it.
- Set `Status: Archived` in this file.
- Redirect the property's `listing-<id>.html` to the homepage rather than 404.
- Preserve its reviews in `REVIEWS` in `config.js`.
- Move the folder to `docs/listings/_archive/{CODE}/` and add a note at the top of its `MASTER.md`.
