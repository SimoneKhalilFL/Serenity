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
| Captions | Locked templates on each asset in [`scripts/social-catalog.json`](../../scripts/social-catalog.json) — no freeform model writes live copy |
| Publish | Meta Graph API → Facebook Page `StayAtFlorida` + the linked Instagram Business account (feed, Story, Reel) |
| Schedule | **Daily** America/Chicago: 9:00 AM feed, 12:00 PM Story, 5:00 PM Reel |
| Audit | [`data/social-post-log.json`](../../data/social-post-log.json) + [`data/social-used-media.json`](../../data/social-used-media.json) — never reuse an image, video, or visual family |

TikTok is out of scope until an account exists.

**Why templates, not an LLM.** Unattended + luxury brand. A model can drift into hype, emojis, or banned words. Templates stay inside [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md).

---

## Cadence

**Three unique pieces every day**, same property, Facebook + Instagram together. **Alternate** properties day to day. Prefer unused catalog media. If a surface is empty, generate from unused lodging stills (Ken Burns for Reels). Recycle the oldest asset only when nothing unused is left.

| Slot | Time (America/Chicago) | Surface | What |
|---|---|---|---|
| AM | **9:00 AM** | **Feed** | Unique still. Open nights (3+ nights) are added to the caption when that home has them. Saturday feed uses an unused guest quote when one remains. |
| Midday | **12:00 PM** | **Story** | Unique 9:16 still. Expires in 24 hours. |
| PM | **5:00 PM** | **Reel** | Unique MP4. Ken Burns stills until phone clips exist. |

| Pattern | Property |
|---|---|
| Day A | **Twenty First** (Panama City Beach) |
| Day B | **Westlight** (Miramar Beach) |

Catalog (source of truth for unused media): [`scripts/social-catalog.json`](../../scripts/social-catalog.json).  
Still / Reel files: [`docs/social/schedule-ready/`](../social/schedule-ready/).  
Story stills: [`docs/social/media/clips/family-beach/`](../social/media/clips/family-beach/).  
Strategy source: [`docs/social/packs/2026-09-30-day-calendar.md`](../social/packs/2026-09-30-day-calendar.md).

If a surface has no unused catalog asset left for that day’s home, the run **generates** new media from unused `images/lodging/` stills (a Ken Burns MP4 for Reels) and adds it to the catalog. If lodging is exhausted too, it **recycles** the oldest asset for that home and surface — never the same file twice on the same calendar day. Preview: `npm run social-post:plan`.

Automated Graph posting uses GitHub secrets (`META_PAGE_ACCESS_TOKEN`, `META_PAGE_ID`, `META_IG_USER_ID`) via `npm run social-post` / Actions.

**Manual backlog:** Facebook-group shares (Graph does not post to groups). In Business Suite, share the day’s feed to the groups below. Stories and Reels go out from Graph.

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

## One-time Meta setup (done 2026-09-02)

Secrets exist. This section is the rebuild path if a token is revoked.

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

**API token status (2026-09-02):** Graph is live. System-user token + GitHub secrets are set. First live feed post: Westlight morning balcony.

| ID | Value |
|---|---|
| Facebook Page ID | `274457265757585` |
| Instagram business id | `17841462311985442` (`@stayatflorida`) — not the public profile id `62203541066` |
| App | StayAtFlorida Poster (`1053402664152580`) |
| System user | stayatflorida poster bot |

Local IDs live in gitignored `scripts/social-meta.config.json`. Do not use the leftover Login-only app **StayAtFlorida Social**.

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
npm run social-post:plan
npm run social-post:dry
npm run social-post -- --dry-run --surface story
npm run social-post -- --dry-run --surface reel
```

Local live post (uses `.env` or `scripts/social-meta.config.json` — both gitignored):

```bash
npm run social-post
```

---

## How a run works

1. GitHub Action fires (daily 9:00 / 12:00 / 17:00 CT, or **Run workflow**).
2. `scripts/social-post.cjs` reads the unique catalog, used-media burn list, availability JSON, and `config.js`.
3. It keeps today’s property (alternate Twenty First ↔ Westlight) and picks the next unused asset for that surface. Empty surface → generate from unused lodging → recycle oldest.
4. Feed captions add **Open nights:** when that home has 3+ night openings. Story and Reel stay lifestyle.
5. A forbidden-language scan rejects the caption if it drifts.
6. It publishes that surface to Facebook, then Instagram. Lodging photos use `stayatflorida.com`. Pack / clip files use the public GitHub raw URL.
7. If Instagram fails, Facebook can still publish and the log records the error. A Story needs at least one channel.
8. The run appends `data/social-post-log.json` and `data/social-used-media.json` (and any newly generated catalog/Reel files) and commits them. Unused media stays unused until generate/recycle needs it.

**Kill the loop:** set `SOCIAL_POST_ENABLED=false`, or disable the **Post social openings** workflow in the Actions tab.

---

## Measurement

Followers are not the score. For 30 days after go-live, watch:

- UTM clicks (`utm_source=facebook` / `instagram`, `utm_campaign=openings-YYYY-MM`)
- Inquiries that mention Facebook or Instagram
- Whether promoted date windows actually booked

If a month of posts produces no inquiries, change the openings angle — do not add a fourth daily surface.

---

## Things this agent will not do

- Post to TikTok
- Run paid ads or retargeting
- Invent discounts or savings percentages
- Publish to Airbnb, VRBO, or Booking.com
- Let a language model write the live caption
