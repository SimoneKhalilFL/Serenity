# Social

> **Purpose:** How StayAtFlorida posts to Facebook and Instagram without a human approval step. The agent reads live calendars, writes a locked-template caption, and publishes. Consult before changing cadence, captions, photos, or Meta credentials.
>
> **Owned by:** [Marketing Director](AGENTS.md#8-marketing-director). **Reviewers on changes:** Brand Director, CGO Agent, QA Agent (before ship). See [Doc ownership](AGENTS.md#doc-ownership).

---

## What this is

An unattended poster. It does **not** wait for Simone to approve a pack.

| Piece | Where |
|---|---|
| Openings | [`data/availability-4.json`](../../data/availability-4.json) (Twenty First) and [`data/availability-5.json`](../../data/availability-5.json) (Westlight), refreshed by the iCal sync |
| Captions | Locked templates in [`scripts/social-post.cjs`](../../scripts/social-post.cjs) — no freeform model writes live copy |
| Publish | Meta Graph API → Facebook Page `StayAtFlorida` + the linked Instagram Business account |
| Schedule | Target: **daily** at 9:00 AM Central once Graph API secrets work. Interim: Meta Business Suite (manual / scheduled). Workflow still lists Tue/Thu/Sat until secrets exist. |
| Audit | [`data/social-post-log.json`](../../data/social-post-log.json) — what went live, so we do not repeat the same post |

TikTok is out of scope until an account exists.

**Why templates, not an LLM.** Unattended + luxury brand. A model can drift into hype, emojis, or banned words. Templates stay inside [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md).

---

## Cadence

**Two posts per day**, same property, Facebook + Instagram together. **Alternate** properties day to day:

| Slot | Time (America/Chicago) | Format |
|---|---|---|
| AM | **9:00 AM** | Still photo (existing calendar) |
| PM | **5:00 PM** | **Reel** (Ken Burns stills for now) |

| Pattern | Property |
|---|---|
| Day A | **Twenty First** (Panama City Beach) |
| Day B | **Westlight** (Miramar Beach) |

Still pack: [`docs/social/packs/2026-09-02-dual-daily.md`](../social/packs/2026-09-02-dual-daily.md).  
Reels pack + MP4s: [`docs/social/packs/2026-09-reels.md`](../social/packs/2026-09-reels.md) · [`docs/social/schedule-ready/reels/`](../social/schedule-ready/reels/).  
Strategy source: [`docs/social/packs/2026-09-30-day-calendar.md`](../social/packs/2026-09-30-day-calendar.md).  
Creative shelves: [`docs/social/ads/tw-pcb-hooks/`](../social/ads/tw-pcb-hooks/), [`docs/social/ads/ms-miramar-hooks/`](../social/ads/ms-miramar-hooks/), [`docs/social/ads/ms-morning-balcony/`](../social/ads/ms-morning-balcony/). Photos: [`docs/social/schedule-ready/`](../social/schedule-ready/).

Openings / guest-proof rotate into the daily slots (not a third post). Automated Graph posting uses GitHub secrets (`META_PAGE_ACCESS_TOKEN`, `META_PAGE_ID`, `META_IG_USER_ID`) via `npm run social-post` / Actions.

**Manual backlog:** schedule dual-daily stills/reels from Meta Business Suite when you want Story or Facebook-group shares Graph does not cover yet.

**Business Suite defaults (every post):**

- Destinations: Facebook Page **StayAtFlorida** + Instagram **stayatflorida**
- **Share to Facebook Story** — always on (use Meta’s **Always share stories** so it sticks)
- Also **post to Facebook groups** listed below
- Asset: Serenity at Majestic Sun portfolio — never Custom Wreath

**Facebook groups (every post, with Page + Instagram):**

1. Panama City Beach, Florida Locals and Visitors
2. Florida Vacation Rentals (AirBnb/VRBO/Direct)
3. Tidewater Beach Resort Condo Rentals by Owners

**Openings window:** today (America/Chicago) through the later of month-end or today + 30 days.

**Do not promote:** 1- or 2-night leftovers. Peak Spring Break (March 1–April 10) and peak summer (June 1–August 10) skip the openings slot when that window is already ≥80% booked — lifestyle posts instead.

---

## Voice on social

Same boutique, owner-hosted voice as the site. Social is not a clearance calendar.

**Do**

- Lead with **Twenty First** or **Westlight**
- Name the market (Panama City Beach / Miramar Beach)
- Point to `stayatflorida.com` with a UTM link
- Use an en dash for date ranges (`September 5–12`)

**Do not**

- Discount hype, countdowns, “only N nights left,” “limited time”
- Spring-break or party targeting
- Floor numbers, unit numbers, `Majestic Sun 811`, Tidewater as the headline
- Emojis, exclamation marks in the first line, all-caps
- Words from [Words we avoid](BRAND_GUIDELINES.md#words-we-avoid) / [Words we never use](BRAND_GUIDELINES.md#words-we-never-use)
- Mention beach chairs unless using the approved condo wording

Hashtags stay short, after a blank line:

`#StayAtFlorida #PanamaCityBeach #MiramarBeach #GulfCoast`

---

## One-time Meta setup (required before anything posts)

The workflow is a no-op until these GitHub Actions secrets exist. Create them once.

### 1. Link Instagram to the Facebook Page

**Confirmed linked (2026-08-31):**

| Surface | Value |
|---|---|
| Facebook Page | **Stayatflorida** — [facebook.com/StayAtFlorida](https://www.facebook.com/StayAtFlorida) (vanity URL; Meta displays casing as Stayatflorida) |
| Page ID | `274457265757585` |
| Instagram | **[@stayatflorida](https://www.instagram.com/stayatflorida/)** (Professional) — was `@majestic_sun_florida` |
| Meta Business portfolio | Serenity at Majestic Sun (`business_id` `614903440830944`) |
| Accounts Center | Facebook Simone Khalil + IG `stayatflorida` (+ personal IG `simone_khalil_sk`) |

In Meta Business Suite, switch the left asset picker to **Stayatflorida, stayatflorida** (not Custom Wreath). Profile overview should show both the Facebook and Instagram badges with **Edit Facebook Page** / **Edit Instagram Profile**.

**Brand profile status (2026-09-01):**

| Field | Instagram `@stayatflorida` | Facebook Page |
|---|---|---|
| Display name | **StayAtFlorida** | **Stayatflorida** (Meta locked casing for 60 days after rename; brand target remains StayAtFlorida) |
| Username / URL | **instagram.com/stayatflorida** (was `@majestic_sun_florida`) | **facebook.com/StayAtFlorida** (was FloridaRental2020) |
| Bio | StayAtFlorida — luxury beachfront homes on Florida's Gulf Coast. / Twenty First · Westlight | StayAtFlorida — luxury beachfront homes on Florida's Gulf Coast. |
| Website | **https://stayatflorida.com/** (VRBO stack removed) | **https://stayatflorida.com/** only |
| Profile photo | StayAtFlorida icon live | StayAtFlorida icon live |
| Cover | n/a | Lifestyle boardwalk/sunset kept |

Old `facebook.com/FloridaRental2020` and `instagram.com/majestic_sun_florida` do **not** reliably redirect — site footer, JSON-LD `sameAs`, and email signature use the new Facebook URL; Instagram handle is `@stayatflorida`.

**Visibility / monetization setup (2026-09-01):**

| Item | Status |
|---|---|
| Domain `stayatflorida.com` in Business Manager | **Verified** 2026-09-01 (meta-tag in `index.html`). |
| Content monetization | On Meta waitlist (beta). |
| Stars | Notify me on. Needs **500 followers** (now ~59) held for **30 consecutive days**. |
| Subscriptions | Notify me on. Same audience growth path; eligibility incomplete. |
| Contact email on Page | `floridarental2020@gmail.com` (owner-confirmed valid). |
| Category | Vacation Home Rental |

Creator payouts are locked until audience grows. Near-term revenue path remains direct bookings via consistent posts, Story sharing, and group distribution (see cadence above).

**API token status (2026-09-01):** Facebook + Instagram are linked and usable in Meta Business Suite. Local IDs are saved in gitignored `scripts/social-meta.config.json`:

| ID | Value |
|---|---|
| Facebook Page ID | `274457265757585` |
| Instagram user id (from public profile) | `62203541066` — confirm in Graph Explorer after SMS (`/{page-id}?fields=instagram_business_account`) |

**Blocked only on Meta for Developers SMS** to `(281) 706-1652`. Until that clears, publish daily from Business Suite (packs under [`docs/social/packs/`](../social/packs/)).

**After SMS succeeds (do in order):**

1. Finish Developers registration (Contact info → About you).
2. [developers.facebook.com/apps](https://developers.facebook.com/apps) → **Create app** → **Business** → name `StayAtFlorida Social`.
3. Add **Facebook Login for Business** + **Instagram**.
4. Graph API Explorer → user token with `pages_show_list`, `pages_read_engagement`, `pages_manage_posts`, `instagram_basic`, `instagram_content_publish`, `business_management`.
5. `GET /me/accounts` → copy StayAtFlorida **Page access token**.
6. Prefer never-expiring token: Business Settings → **System users** → generate token for this Page with the same permissions.
7. GitHub → **Settings → Secrets and variables → Actions** → set:
   - `META_PAGE_ACCESS_TOKEN` = Page token
   - `META_PAGE_ID` = `274457265757585`
   - `META_IG_USER_ID` = confirmed Instagram business id
8. Run workflow **Post social openings** once with `dry_run=true`, then a live `lifestyle` or `openings` dispatch.

### 2. Create a Meta app and a long-lived Page token

1. Open [developers.facebook.com/apps](https://developers.facebook.com/apps) → **Create app** → type **Business**.
2. Add products **Facebook Login for Business** and **Instagram**.
3. In **Graph API Explorer**:
   - Generate a user token with: `pages_show_list`, `pages_read_engagement`, `pages_manage_posts`, `instagram_basic`, `instagram_content_publish`, `business_management`.
   - `GET /me/accounts` — copy the **Page ID** and that Page’s **access token**.
   - `GET /{page-id}?fields=instagram_business_account` — copy the Instagram user id (`instagram_business_account.id`).
4. Prefer a **never-expiring Page token** from Meta Business Settings → **Users** → **System users** → generate token → assign this Page with the permissions above. Otherwise exchange the short-lived token for a long-lived one (`grant_type=fb_exchange_token`). User tokens expire in ~60 days and the poster will stop.

### 3. Add GitHub secrets

Repo **Settings → Secrets and variables → Actions**:

| Secret | Value |
|---|---|
| `META_PAGE_ACCESS_TOKEN` | Long-lived Page token (never commit this) |
| `META_PAGE_ID` | Numeric Facebook Page id |
| `META_IG_USER_ID` | Instagram Business account id from step 2 |

Optional: set `SOCIAL_POST_ENABLED` to `false` to pause publishing without deleting tokens.

Local dry run (no publish):

```bash
npm run social-openings
npm run social-post:dry
```

Local live post (uses `.env` or `scripts/social-meta.config.json` — both gitignored):

```bash
npm run social-post
```

---

## How a run works

1. GitHub Action fires (schedule or **Run workflow**).
2. `scripts/social-post.cjs` reads availability JSON + `config.js`.
3. It picks the slot (weekday, or the `slot` input on a manual run).
4. It composes caption + public photo URL on `stayatflorida.com`.
5. A forbidden-language scan rejects the caption if it drifts.
6. It publishes the photo to Facebook, then Instagram (Instagram needs a public HTTPS image URL — we use the live site).
7. If Instagram fails (aspect ratio, token scope), Facebook still publishes and the log records the Instagram error.
8. The run appends `data/social-post-log.json` and commits it so the next run can de-dupe.

**Kill the loop:** set `SOCIAL_POST_ENABLED=false`, or disable the **Post social openings** workflow in the Actions tab.

---

## Measurement

Followers are not the score. For 30 days after go-live, watch:

- UTM clicks (`utm_source=facebook` / `instagram`, `utm_campaign=openings-YYYY-MM`)
- Inquiries that mention Facebook or Instagram
- Whether promoted date windows actually booked

If a month of posts produces no inquiries, change the openings angle or drop the Tuesday slot — do not post more often.

---

## Things this agent will not do

- Post to TikTok
- Run paid ads or retargeting
- Invent discounts or savings percentages
- Publish to Airbnb, VRBO, or Booking.com
- Let a language model write the live caption
