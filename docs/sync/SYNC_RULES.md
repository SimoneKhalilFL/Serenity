# Synchronization Rules

> **Purpose:** The rules that keep every platform's property content in sync with a single source of truth. Read before editing any file under [`../listings/`](../listings/).
>
> **Owned by:** [Content Synchronization Agent](../brand/AGENTS.md#11-content-synchronization-agent). **Reviewers on changes:** Software Architect, Brand Director, QA Agent (before ship).
>
> **Non-negotiable:** Cursor and every AI agent working in this repo **never publish content to Airbnb, VRBO, Booking.com, or any OTA**. The output of this system is platform-ready markdown that the human copies and pastes into each platform.

---

## The single source of truth

For every property in the StayAtFlorida portfolio:

> **`listings/{PROPERTY}/MASTER.md` is the authoritative content record.**

Every other file — `WEBSITE.md`, `AIRBNB.md`, `VRBO.md`, `BOOKING.md` — is a **derived platform view** of MASTER.md. It exists so a human can copy platform-ready content directly into that platform's listing editor.

**Direction of truth:**

```
MASTER.md   ─┬──▶  WEBSITE.md
             ├──▶  AIRBNB.md
             ├──▶  VRBO.md
             └──▶  BOOKING.md
```

Never in reverse. Never sideways. Platform files never influence MASTER.md.

---

## The three ironclad rules

1. **MASTER.md is authoritative.** If MASTER.md says the property sleeps 8, every platform file says 8. If MASTER.md says the tagline is "Above the Gulf. Beyond Expectations.", every platform file uses that tagline (adapted to length limits, never contradicted).

2. **Facts must remain identical across platforms.** Bedrooms, bathrooms, sleeping capacity, amenities, house rules, cancellation policy, address, host name, and any factual claim must match MASTER.md exactly on every platform. Platforms may differ only in *how* facts are presented — never in *what* they are.

3. **Cursor never publishes externally.** Cursor produces the markdown. A human copies it into Airbnb, VRBO, and Booking's editors. No API calls, no automation, no scraping, no auto-updating.

---

## Why platform files may differ from MASTER

Platform files may **only** differ from MASTER.md for one of these five reasons. Any other divergence is a bug.

| Reason | Example |
|---|---|
| **Character / word limits** | Airbnb title max 50 chars vs. VRBO title max 65 chars. Both derive from the same MASTER headline, trimmed to fit. |
| **Platform formatting** | Airbnb uses distinct "The Space / Guest Access / Other Things to Note" blocks; VRBO uses long-form paragraphs; Booking uses factual bullet-list summaries. |
| **SEO differences** | Meta title and description follow the site's SEO pattern on `WEBSITE.md`; OTA titles favor emotive keyword-forward phrasing within their character budget. |
| **Platform tone** | Airbnb tolerates warmer, host-forward voice; Booking expects a factual hotel-style tone; VRBO sits in between. |
| **Platform policy** | OTAs forbid channel steering — no `book direct` language in Airbnb/VRBO/Booking listings; that value message lives only on `WEBSITE.md`. |

---

## Platform-inserted text *(not owner-editable — skip on audits)*

Every OTA auto-appends or auto-inserts certain strings around the host-authored content. These strings show up on live listings but are **not present in the host dashboard** and **cannot be removed by the owner**. When running a live-vs-doc audit, log these to a "not-actionable" list and never flag them as drift.

Known platform-inserted strings *(as of 2026-07-14 — verify on future audits):*

| Platform | Trigger | Auto-inserted string | Notes |
|---|---|---|---|
| VRBO | Pet policy set to `No pets` with a pet-violation fee | `Evidance of pets results in $500 fee + cleaning` *(exact fee amount varies by host setting; misspelling is platform-side)* | Appears appended to the "No pets allowed" line under House Rules. Confirmed 2026-07-14 owner cannot edit. Escalation: VRBO Partner Support as a platform content bug. |
| VRBO | Any check-out instructions are set | `Failure to complete these may result in a negative review from the host.` | Auto-appended after the owner-authored check-out task list. Confirmed 2026-07-14 owner cannot edit. Off-brand for boutique voice, but out of scope for owner action. |

When Cursor discovers a new platform-inserted string during an audit, add a row here so the next audit pass does not re-flag it. The owner is the authoritative source for confirming "this is not editable in the dashboard."

Related audit reports: [`../listings/MS811/audits/`](../listings/MS811/audits/).

---

## Standard platform character / length limits

Confirm on the platform before publishing — these are current-generation guidelines and can drift.

| Field | Airbnb | VRBO | Booking.com | Website |
|---|---|---|---|---|
| Title / headline | ~50 chars | ~65 chars | ~70 chars | ~60 chars (meta title) |
| Short summary / highlighted excerpt | first ~400 chars of description | 200–400 chars | 200–400 chars | ~160 chars (meta description) |
| Full description | 500–1,000 words | 800–1,500 words | 300–500 words | Free-form; hero copy is 40–80 words |
| Photo caption | ~250 chars per photo | ~150 chars per photo | ~150 chars per photo | 100–150 chars alt text |
| House-rules block | Structured tick-box + free text | Free-form | Structured only | Free-form |

If a platform limit changes, update this table first, then regenerate every affected platform file.

---

## The sync workflow

When any content change is requested — a new amenity, a copy tweak, a rate adjustment message, a new photo — follow this order every time:

### 1. Read MASTER.md

Open the property's `MASTER.md`. Understand what's changing and which of the 21 MASTER sections is affected.

### 2. Update MASTER.md

Make the change **in MASTER.md first**. This is the only file that receives a first-draft edit. All other files are regenerated from it.

Every MASTER edit must include a one-line changelog entry at the bottom of MASTER.md under `## Changelog`, dated, with a brief note of what changed and why.

### 3. Identify affected platform files

For each of the four platform files (`WEBSITE.md`, `AIRBNB.md`, `VRBO.md`, `BOOKING.md`), decide whether it needs to be regenerated.

**Always affected by:**

- Any change to Master Short Description, Master Long Description, or Property Facts.
- Any change to Amenities, House Rules, Sleeping Arrangements, or Cancellation Language.
- Any change to Property Tagline, Property Story, or Positioning.
- Any change to Photo Caption Library.

**Rarely affects platforms:**

- Internal notes, Brand Director follow-ups, Review Response Style, Guest Messaging Style (these are operational — the platforms don't need them directly).

If unsure, regenerate all four.

### 4. Regenerate each platform file

Rewrite each affected platform file from MASTER.md, adapting to the platform's constraints per the [Why platforms may differ](#why-platform-files-may-differ-from-master) table.

**Regeneration is deterministic:** given the same MASTER.md, the same platform file should be produced. Never introduce facts the MASTER doesn't contain. Never invent an amenity, a distance, or a review claim during regeneration.

### 5. Run the QA sweep

Before considering the change complete, run the [Sync QA](../brand/QA_CHECKLIST.md#10-sync-qa) section of the QA Checklist:

- Facts identical to MASTER across all four platform files.
- Character limits respected for every field on every platform.
- No forbidden language reintroduced.
- No approved language dropped.
- Photo caption library reflected consistently.

### 6. Produce the sync QA summary

The response back to the user must include a **Sync QA Summary** block:

```
### Sync QA Summary
- **Files Updated:** MASTER.md, WEBSITE.md, AIRBNB.md, VRBO.md, BOOKING.md
- **Character Limits Passed:** Airbnb title (48/50), VRBO title (57/65), Booking title (61/70), meta description (156/160)
- **Brand Review Passed:** Forbidden-language grep clean; approved-language present on every platform
- **Remaining Manual Actions:** Owner to copy platform files into each OTA editor; verify final rendering on Airbnb / VRBO / Booking preview
```

Follow the QA Summary template in [`../brand/QA_CHECKLIST.md#9-final-qa-summary`](../brand/QA_CHECKLIST.md#9-final-qa-summary) for the full-QA case.

---

## Forbidden language (sync gate)

The following phrases must **never** appear in any platform file, regardless of what MASTER.md says. If MASTER.md contains one of these, the MASTER itself is out of policy and must be corrected before regeneration.

- `Fun in the Sun`
- `Serenity Rentals`
- `Luxury Beach Service`
- `Reserved Beach Chairs`
- `Private Beach`
- `Guaranteed Sunset`
- `Dream Vacation`
- `Paradise Awaits`
- `Best Condo Ever`
- Any explicit floor number (`21st floor`, `8th floor`, etc.)
- Over-emphasis on Tidewater as the brand
- Excessive hype, cheesy beach language, or excessive emojis

Full rules: [`../brand/BRAND_GUIDELINES.md`](../brand/BRAND_GUIDELINES.md).

Pre-ship grep:

```bash
grep -rniE "serenity rentals?|fun in the sun|luxury beach service|reserved beach chairs|private beach|guaranteed sunset|dream vacation|paradise awaits|best condo ever|21st(-| )floor|floor 21|8th floor" docs/listings/
```

Expected result: **zero matches**.

---

## Required language (sync gate)

Every platform file must, where the section applies, contain the approved phrasing:

- **Beach chairs** — exactly `Complimentary beach chairs and umbrella available in the condo.`
- **Host relationship** — `Owner Hosted`
- **Master brand** — `StayAtFlorida`
- **Category term** — `Luxury Beachfront Vacation Home`
- **View descriptor** — `Panoramic Gulf Views`
- **Balcony descriptor** — `Private Beachfront Balcony`
- **Access descriptor** — `Direct Beach Access`
- **Positioning** — `Premium Family Vacation`

If a platform field is too short to fit the exact phrase (e.g. a 50-character title), a shorter approved variant may be used *if* the variant is documented in the property's MASTER.md `Approved Amenities Language` section. Otherwise, defer to the [Brand Director](../brand/AGENTS.md#2-brand-director).

---

## What Cursor may and may not do

**Cursor may:**

- Read every file under `docs/listings/` and `docs/brand/`.
- Update `MASTER.md` when a content change is requested.
- Regenerate platform files from `MASTER.md`.
- Warn the user when a proposed change would violate a sync rule.
- Produce a Sync QA Summary describing every file it touched.

**Cursor may not:**

- Publish, upload, POST, or transmit any content to Airbnb, VRBO, Booking.com, or any OTA.
- Call OTA APIs, run their SDKs, or automate their web UIs.
- Bypass MASTER.md and edit a platform file directly. If asked, flag the violation and offer to edit MASTER instead.
- Introduce a fact into a platform file that is not present in MASTER.md.
- Reduce a factual claim (bedrooms, sleeps, amenities) on one platform without reducing it on MASTER and every other platform.

If the user explicitly overrides one of these — for example, "just tweak the AIRBNB title, don't touch MASTER" — Cursor must:

1. Note the override in the response.
2. Apply the change to the platform file only.
3. **Immediately** flag the divergence and offer to reconcile MASTER + all platforms in a follow-up pass.

---

## Change categories and their sync footprint

| Change type | MASTER edit | WEBSITE.md | AIRBNB.md | VRBO.md | BOOKING.md |
|---|---|---|---|---|---|
| Property fact change (bedrooms, sleeps, address) | Required | Regenerate | Regenerate | Regenerate | Regenerate |
| New amenity added / removed | Required | Regenerate | Regenerate | Regenerate | Regenerate |
| Tagline / positioning refresh | Required | Regenerate | Regenerate | Regenerate | Regenerate |
| New photo added to the library | Required | Regenerate captions | Regenerate captions | Regenerate captions | Regenerate captions |
| House rule change | Required | Regenerate | Regenerate | Regenerate | Regenerate |
| Cancellation policy change | Required | Regenerate | Regenerate | Regenerate | Regenerate |
| Master Long Description rewrite | Required | Regenerate | Regenerate | Regenerate | Regenerate |
| Review response style change | Required | No | Optional | Optional | Optional |
| Guest messaging style change | Required | No | No | No | No |
| Approved CTA change | Required | Regenerate | Regenerate | Regenerate (where allowed) | No |
| SEO keyword refresh | Required | Regenerate | No | No | No |

If in doubt, regenerate.

---

## Onboarding a new property

See [`../brand/PROPERTY_PORTFOLIO.md#adding-a-new-property`](../brand/PROPERTY_PORTFOLIO.md#adding-a-new-property) for the full checklist. In sync terms:

1. Copy [`../listings/TEMPLATE/`](../listings/TEMPLATE/) → `../listings/{CODE}/`.
2. Fill in `MASTER.md` first. Get [Brand Director](../brand/AGENTS.md#2-brand-director) sign-off.
3. Regenerate all four platform files from the completed MASTER.
4. Run the full sync QA sweep.
5. Only then hand off to the human for copying into each OTA.

Never publish a new property to OTAs until its MASTER.md + four platform files exist and pass QA.
