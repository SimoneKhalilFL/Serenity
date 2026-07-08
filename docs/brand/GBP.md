# Google Business Profile — StayAtFlorida

> **Purpose:** Canonical source-of-truth for the brand-level Google Business Profile (GBP) at `business.google.com`. Holds the paste-ready profile fields, setup walkthrough, post-verification checklist, and ongoing management rules. Referenced by [tracker row #52](../phase-3/revenue-impact-tracker.md) and by the direct-site review-solicitation variant in [tracker row #44](../phase-3/revenue-impact-tracker.md).
>
> **Scope:** Brand-level profile (`StayAtFlorida`), not per-property. A single Business Profile represents Simone's owner-operated vacation rental hosting business across the Emerald Coast portfolio (TW2111 + MS811 today, expandable). Per-property GBPs are explicitly rejected — Google's vacation rental listing guidelines have historically triggered mass suspensions on property-level accounts unless staffed like hotels (24/7 on-site staff, physical reception), which doesn't apply here.
>
> **Ship status:** 📋 Planned *(owner action pending — walkthrough below)*.
>
> **Ownership:** Simone owns the Google account that creates + verifies the profile. QA Agent references this doc for compliance checks; SEO Agent updates the `Organization` JSON-LD `sameAs` array once the profile is live.

---

## Decisions locked before signup

Owner-confirmed as part of the initial walkthrough. These are the answers you'll enter into Google's setup flow — decide once here, then execute through the flow without stopping to think.

### 1. Business name

**Locked value:** `StayAtFlorida`

*Rationale:* Matches the brand as it appears in the website header, email signature, SMS sign-off, and OTA host profiles. Excluded the `.com` TLD from the GBP name to stay clear of Google's keyword-stuffing enforcement (which has flagged `-BusinessName.com` and `-BusinessName - Vacation Rentals` style names in the past). The website field carries the `.com` — the profile name doesn't need to.

**Do not use:** `StayAtFlorida Vacation Rentals`, `StayAtFlorida - Panama City Beach`, `Stay At Florida Beachfront Condos`, or any variant that appends a descriptor / keyword / location to the base brand name. These are Google Business Profile name-format violations and can trigger name-edit rejections or account suspension.

### 2. Primary category

**Locked value:** `Vacation home rental agency`

*Rationale:* Most specific match for owner-operated short-term rental hosting (not a full property management company, not a hotel, not a real estate rental agency). This category also unlocks the vacation-rental-specific attributes and appears in the map pack for `vacation rental` + `Panama City Beach` queries.

**Secondary categories** *(optional — add 1-2 if the primary category dropdown surfaces them cleanly):*

- `Property management company` — accurate but broader; adds coverage for `property manager Panama City Beach` queries. Add only if it appears as a distinct selectable option; skip if choosing it requires switching primary category away from `Vacation home rental agency`.
- Do **not** add real-estate categories (`Real estate agency`, `Real estate rental agency`) — they're a different Google category tree and can dilute the profile's ranking signal for short-term rental queries.

### 3. Location model: service-area business (SAB), not storefront

**Locked value:** No physical storefront that customers visit. Business hides its address; sets a service area.

*Rationale:* Guests don't come to Simone's office — they go directly to the properties. GBP treats owner-operated vacation rentals as service-area businesses. The physical address entered during signup is used **only for postcard verification** and is hidden from the public profile.

### 4. Service area (cities served)

**Locked values (initial):**

- Panama City Beach, FL *(TW2111)*
- Miramar Beach, FL *(MS811)*

**Add later once we have properties there:**

- Destin, FL *(adjacent — same guest-search catchment)*
- Santa Rosa Beach, FL *(30A — adjacent)*

*Google allows up to 20 service-area entries. Start with the two cities where the actual properties are located; broaden later if the profile is performing and we want to widen the map-pack footprint.*

### 5. Website

**Locked value:** `https://stayatflorida.com`

*Rationale:* The canonical direct-booking site. This is what Google indexes for cross-link authority + what map-pack clicks land on.

### 6. Phone

**Locked value:** *(owner to fill — the phone number Simone uses for guest communication)*

*Rules:* Must be a real number that receives calls/SMS. Google has softened its historical no-Google-Voice rule for many categories, but for vacation rental businesses a real cell phone or dedicated business line is safer. This is the number that will appear in the map pack and profile card — it will get inbound calls.

### 7. Business hours

**Locked value (recommended):**

- Monday – Sunday: 8:00 AM – 10:00 PM (Central Time)

**Alternate options (pick if the above doesn't fit):**

- 24 hours daily — sets guest expectations that inquiries land instantly at 3 AM; only pick if truly comfortable.
- "By appointment" — under-signals availability for a hosted-by-owner business; not recommended.

*Rationale:* Signals a responsive, real business without over-committing to middle-of-the-night response. The description separately notes fast response times (typically under two hours) — hours cover normal inquiry windows; response-time claim covers responsiveness.

### 8. Mailing address for postcard verification

**Locked value:** *(owner to fill — Simone's home address, or a business address if separate)*

*Rules:* Must be a real address that receives mail. Google mails a postcard with a 5-digit verification code, typically within 5-7 business days. The address entered here is hidden from public display (because SAB, not storefront), but Google keeps it on file for verification and future re-verification requests.

---

## Paste-ready profile fields

Use these verbatim during signup + profile completion.

### Business description *(750 char max — approved copy below is 614 chars, 136 chars of headroom)*

```
StayAtFlorida is an owner-operated vacation rental hosting business on Florida's Emerald Coast. For more than six years, Simone has personally welcomed guests to Gulf-front condos in Panama City Beach and Miramar Beach — two properties, one dedicated host. Every reservation, message, and arrival detail is managed directly by the owner rather than a large property management company. Guests typically receive responses within two hours and detailed pre-arrival instructions about one week before check-in. Both homes are located within full-service beachfront resorts with pool, fitness, and direct beach access.
```

*Char count: 614 (verified locally via `node _tmp_gbp_desc_count.cjs`; 136 chars of headroom under Google's 750-char cap). Compliant with Google Business Profile description rules — no URLs, no phone numbers, no promotional pricing language, no "book direct to save" phrasing (which reads promotional). Emphasizes owner-operated positioning, tenure, portfolio location, response-time proof point.*

### Services *(populate the Services section of the profile — Google surfaces these in the profile card):*

- Vacation rental hosting
- Short-term rental
- Beachfront condo rental
- Family vacation lodging
- Gulf-front property hosting
- Emerald Coast rental hosting

*Order matters — first entry gets the most prominence. Keep the list at 6 or fewer to avoid the "over-optimized services list" heuristic.*

### Attributes (offerings) — for vacation rental agency category

Google offers different attributes depending on your category selection. For `Vacation home rental agency`, the ones worth setting (all subject to what actually appears in Simone's flow — some may not surface):

- **Identifies as** — `Woman-owned` if true and Simone is comfortable claiming it. Adds a Google badge that some guests use as a search filter.
- **Wheelchair accessible** — **leave OFF** at brand level. Individual properties' accessibility varies (Tidewater resort common areas are ADA-accessible; the units themselves may not be); setting brand-level `Yes` overstates. If a specific property is fully accessible in the future, note it in the property-specific listing instead.
- **Free Wi-Fi / Pool / Beach access** — these attributes apply to physical hotels, not SAB agencies. If they don't surface in the flow, that's expected; don't force them.

### Special hours / notes

Add a special note in the "From the business" section during profile completion:

```
Owner-managed. Guest inquiries typically answered within two hours. Detailed arrival instructions sent about one week before check-in.
```

### Photos to prepare *(before or after verification — both work)*

Google recommends at least 10 photos; more is better for map-pack ranking.

- **Logo** (1) — square StayAtFlorida logo (min 250×250 px, ideally 720×720 px, PNG with transparent background if available)
- **Cover photo** (1) — the strongest Gulf-front hero shot from either property; will land as the first image in the profile card
- **Interior gallery** (5-8 per property) — mix living room, kitchen, primary bedroom, balcony view, exterior of the resort
- **Team photo** (1, optional) — a photo of Simone (owner) humanizes the profile and reinforces the "owner-operated" claim. Optional if Simone prefers to stay behind the brand.

Photos live in the site's `images/tw2111/` and `images/lodging/` folders — pick the strongest 15-20 total.

---

## Setup walkthrough

Sequenced for a single sitting. Total active time: ~15-25 minutes. Then a 5-7 business day wait for the postcard. Then ~30-45 minutes of profile completion. Then ship.

### Phase 1 — Signup + submission for verification *(~15-25 min)*

1. **Sign into the Google account that will own this profile.** Use `simone@stayatflorida.com` if it exists (recommended — keeps ownership tied to the brand's email domain). If not, use Simone's primary Google account; you can add owners/managers later.
2. **Go to** [`https://business.google.com/create`](https://business.google.com/create).
3. **Business name field:** enter `StayAtFlorida` verbatim (see §Decisions above — no descriptors, no `.com`).
4. **Category prompt:** start typing `Vacation home rental agency`. Google's autocomplete should surface it. Select the exact match — don't accept a near-neighbor like `Vacation home rental` (no "agency") or `Rental home rental` (wrong tree).
5. **"Do you want to add a location customers can visit?"** — select **No**. (This is the branch that turns the profile into a service-area business.)
6. **Service area entry:** add `Panama City Beach, FL` and `Miramar Beach, FL`. Skip Destin / 30A for now.
7. **Contact info:** enter the phone number and website URL from §Decisions.
8. **Verification-address entry:** enter the mailing address where the postcard should land. Confirm it's hidden from the public profile (the checkbox / prompt will typically say something like "hide address from customers" — check it).
9. **Verification method:** Google offers whatever verification methods are eligible for this category + region. Most likely: **postcard by mail** (5-7 business days). Occasionally: video verification (record a short walkthrough of your workspace or something that proves the business exists) or phone verification. Pick postcard as the default — it's the most reliable path for vacation rental categories.
10. **Submit.** The profile is now created but unverified.

### Phase 2 — Verification wait *(5-7 business days, no action)*

- Watch the mailbox at the address you entered.
- Postcard arrives with a 5-digit verification code.
- Return to [`business.google.com`](https://business.google.com), select the pending profile, and enter the code.
- Verification confirmation typically posts within minutes.

**If the postcard doesn't arrive by day 10:** request a re-send from the dashboard. Common causes: wrong address entered, USPS delay, spam-filtered as junk mail.

### Phase 3 — Profile completion *(~30-45 min post-verification)*

Once verified, the profile edit surface unlocks fully. Complete in this order:

1. **Description** — paste the verified 614-char copy from §Paste-ready profile fields above.
2. **Services** — add all 6 services from the list above, in the order given.
3. **Hours** — set Mon–Sun 8:00 AM – 10:00 PM Central. Skip the "additional hours" (holidays, etc.) at first launch.
4. **Attributes** — set `Woman-owned` if Simone is comfortable claiming it. Skip the physical-property attributes that don't apply to SAB.
5. **Photos** — upload logo first, then cover photo, then gallery (minimum 10 total, ideally 15-20). Order in the gallery drag-and-drop puts the strongest shots first.
6. **"From the business" free-text note** — paste the "Owner-managed. Guest inquiries typically answered within two hours..." copy from §Paste-ready profile fields.
7. **Booking link** — Google now supports a `Website booking link` field for lodging categories. If it surfaces, add `https://stayatflorida.com` (the direct-booking site). If not, skip; the main website field carries the same URL.

### Phase 4 — Capture the review-submission link *(~5 min)*

Once verified + profile complete, generate the short review URL:

1. On the Business Profile dashboard, look for `Ask for reviews` or `Share your review form`.
2. Google surfaces a short link of the form `https://g.page/r/[REVIEW_CODE]/review`.
3. Copy this URL.
4. **Update three docs** with the captured URL:
   - This file: fill in the "Actual verified review URL" placeholder in the § below.
   - [`HOSPITALITY.md`](HOSPITALITY.md) `URL lookup — review-submission paths per property × platform` table: replace the "deferred — see tracker #52" note for `Google (direct-site)` with the actual URL.
   - [Tracker #52](../phase-3/revenue-impact-tracker.md): flip status from `📋 Planned` → `🟡 In Progress (verified live, measuring)`; add verification date + review URL.
5. **Add the URL to the email signature** at `email-signature.html` (root) with a "Leave us a Google review" line above the disclaimers.

### Phase 5 — Wire into the direct-site SMS variant of #44 *(same day as Phase 4)*

Once the Google review link is in the URL lookup table:

- The `[Platform]` variable in the §7 canonical SMS resolves to `Google` for direct-site guests.
- The SMS body doesn't need the URL (guest gets it via Google's own auto-generated review-request email once you've verified them via Google Wallet / Reserve / etc.) BUT vacation rentals don't get Google-native review-request automation, so the direct-site email fallback (§7 email fallback template) uses the short link directly.
- **Update the tracker #44 direct-site status** from "deferred" to "shipped" once GBP verification lands.

---

## Post-launch: ongoing management rules

Follow these to keep the profile healthy and compliant.

### Do

- **Respond to every review within 48 hours** — thank positive reviewers, address critical reviews factually per HOSPITALITY.md §11 (public review response protocol). Response rate is a ranking signal.
- **Post monthly Google Posts** — new photos, seasonal messages (`Sunset season at Twenty First — book fall dates now`), listing updates. Posts expire after 7 days; posting cadence signals an active business.
- **Add new photos quarterly** — Google prioritizes profiles with recent visual content.
- **Update hours before every holiday season** — Thanksgiving, Christmas, spring break. Special hours reinforce that the business is monitored.
- **Add Q&A seed content** — pre-answer common questions ("Is smoking allowed?", "How far to Pier Park?") by having Simone post the question from a personal Google account and then answer it from the business profile. Fills the Q&A section with useful content rather than leaving it empty for random guests to populate.

### Don't

- **Never edit the business name to include descriptors or keywords.** Google's algorithms flag name changes; a name-edit rejection can lock the profile pending manual review.
- **Never ask for a specific rating** in review-solicitation content. Same P0 rule as HOSPITALITY.md §7 — Google Reviews policy prohibits soliciting specific ratings; the platform honors off-platform reports.
- **Never offer incentives for reviews** (`Leave us a 5-star review and get 10% off your next stay`). Explicit Google policy violation; can trigger review removal + account penalty.
- **Never create duplicate profiles for individual properties.** If Google's suggested-listings feature surfaces `Tidewater Beach Resort - Unit 2111` or similar as a suggested new listing, decline it. One brand-level profile = clean footprint.
- **Never share ownership credentials with third-party agencies** who offer "GBP management" services. Add them as managers (limited-access role) if genuinely needed; never as owners.

### Watch-outs

- **Suspension risk:** Google occasionally sweeps vacation rental / short-term rental profiles and suspends the ones that look property-managed rather than agency-managed. Our positioning (`Vacation home rental agency`, hidden address, SAB, service area) is the compliant model. Property photos + owner-operated framing further mitigate this.
- **Name-change re-verification:** if Simone ever legally renames the business (e.g., forms an LLC with a different DBA), the profile needs a name-change request + likely re-verification.
- **Review-loss on category change:** changing the primary category post-launch can (rarely) reset the review count in map pack. Avoid category changes unless the current category is clearly wrong.

---

## Current live state

*(updated on ship — currently empty because profile is not yet verified)*

| Field | Value |
|---|---|
| Profile URL | *(fill on verification — will be `https://g.co/kgs/[SHORT_ID]` or a longer maps.google.com URL)* |
| Review submission URL | *(fill on verification — `https://g.page/r/[REVIEW_CODE]/review`)* |
| Verification date | *(fill on postcard code entry success)* |
| Business ID / Place ID | *(fill on verification — visible in the dashboard)* |
| Category (primary) | *(fill on verification — should be `Vacation home rental agency`)* |
| Owner account | *(fill — Google account that owns the profile)* |
| Reviews count on ship day | 0 *(brand-new profile)* |

---

## Success metric

Per [tracker row #52](../phase-3/revenue-impact-tracker.md#52): **GBP verified live in Google's system AND first Google review received within 60 days of verification.**

The 60-day first-review window is measured from the postcard-code-entry date. Send #1 SMS to direct-site guests only begins including the `Google` platform variable once the review URL is live and captured in HOSPITALITY.md's URL lookup table.

---

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-07-08 | **Initial creation.** Scoped GBP setup as brand-level (rejecting per-property model per Google's SAB guidelines for vacation rentals). Locked 8 pre-signup decisions (business name, category, location model, service area, website, phone, hours, verification address). Drafted 614-char paste-ready description *(verified via `node _tmp_gbp_desc_count.cjs`; Google GBP compliant — no URLs, no phone, no promotional pricing language)*. Wrote 5-phase setup walkthrough. Documented ongoing management rules + watch-outs. Cross-referenced from [tracker #52](../phase-3/revenue-impact-tracker.md) + [HOSPITALITY.md URL lookup](HOSPITALITY.md#url-lookup--review-submission-paths-per-property--platform). | Content Sync Agent + owner request (`walk me thru setting up number 4`) |
