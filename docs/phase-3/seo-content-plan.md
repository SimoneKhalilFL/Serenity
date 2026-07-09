# SEO Content Plan — Phase 3

**Purpose:** Plan the guide-content series that will build SEO surface area around the two properties. Each guide is a standalone landing page that ranks for a specific search intent and funnels qualified traffic into the property pages.

**Strategy:** we don't try to rank for `Panama City Beach vacation rentals` — that space is dominated by OTAs and category-killer aggregators. We rank for **long-tail informational queries** with clear intent (`what to do in Panama City Beach with kids on a rainy day`, `Tidewater Beach Resort guest guide`) and use each guide as a **funnel** into TW2111 or MS811.

**Baseline enforcement:** every guide must pass:

- [`../brand/BRAND_GUIDELINES.md`](../brand/BRAND_GUIDELINES.md) forbidden-language grep.
- [`../brand/SEO.md`](../brand/SEO.md) meta description length (150–160 chars) + title (≤60 chars) + one H1 rules.
- [`../brand/QA_CHECKLIST.md`](../brand/QA_CHECKLIST.md) content-quality checks.

**Cadence:** two guides per month per Phase 3 §3.3 sequencing. Full series (seven guides) shipped by Week 20.

---

## 1. Publishing model

- **URL pattern:** `stayatflorida.com/guide/{slug}` — new page type, sits alongside `/listing-{n}.html`.
- **Rendering:** static generated (same pipeline as listing pages), added to `sitemap.xml`.
- **JSON-LD:** `Article` schema with `about` pointing to the relevant property/resort, `publisher` = StayAtFlorida.
- **CTA pattern:** at least one *"View {Property Name}"* button embedded near the top and one at the bottom of every guide.
- **Internal linking rule:** every guide links to (a) at least one property, (b) at least two other guides.
- **Word count target:** 1,200–2,000 words each.
- **Refresh cadence:** every 6 months (event lists, restaurant hours, ticket prices drift).

---

## 2. Guide series

Seven planned guides, grouped by intent. Priority reflects Phase 3 §3.3 sequencing.

### Series overview

| # | Guide | Slug | Property funnel | Primary keyword | Priority |
|---|---|---|---|---|---|
| 1 | Tidewater Beach Resort Guide | `/guide/tidewater-beach-resort-guide` | TW2111 | `Tidewater Beach Resort guide` | P0 |
| 2 | Majestic Sun Resort Guide | `/guide/majestic-sun-seascape-resort-guide` | MS811 | `Majestic Sun Seascape guest guide` | P0 |
| 3 | Panama City Beach Family Guide | `/guide/panama-city-beach-family-vacation-guide` | TW2111 | `Panama City Beach family vacation` | P1 |
| 4 | Miramar Beach Family Guide | `/guide/miramar-beach-family-vacation-guide` | MS811 | `Miramar Beach family vacation` | P1 |
| 5 | Restaurant Guides (2) | `/guide/best-restaurants-panama-city-beach`<br>`/guide/best-restaurants-miramar-beach-destin` | Both | `best restaurants Panama City Beach` / `best restaurants Miramar Beach Destin` | P2 |
| 6 | Things to Do Guides (2) | `/guide/things-to-do-panama-city-beach`<br>`/guide/things-to-do-miramar-beach-destin` | Both | `things to do Panama City Beach` / `things to do Miramar Beach` | P2 |
| 7 | Rainy Day Guides (2) | `/guide/rainy-day-panama-city-beach`<br>`/guide/rainy-day-miramar-beach-destin` | Both | `rainy day activities Panama City Beach` / `rainy day activities Destin` | P3 |

Total published pages: **10** (seven "guide types," but two are portfolio-doubled — one PCB, one Miramar/Destin — so 3 single + 2×3 double = 9. Plus the two property guides = 10-ish; final SEO plan aligns on 9 URLs).

---

## 3. Per-guide brief

### 3.1 Tidewater Beach Resort Guide (P0)

- **URL:** `/guide/tidewater-beach-resort-guide`
- **Property funnel:** TW2111
- **Primary keyword:** `Tidewater Beach Resort guide` (informational — someone booked or considering booking at Tidewater is looking for guest information)
- **Secondary keywords:** `Tidewater Beach Resort amenities`, `Tidewater Beach Resort parking`, `Tidewater Beach Resort registration`, `Tidewater Beach Resort pools`, `Tidewater Beach Resort restaurant`
- **Meta title (≤60):** `Tidewater Beach Resort Guide · Amenities, Parking, Beach Access`
- **Meta description (150–160):** `Everything you need to know about Tidewater Beach Resort in Panama City Beach — pools, parking, wristbands, beach access, and dining, from a hosted guest perspective.`
- **Outline:**
  1. Welcome intro (~150 words) — set the scene, walk in from the porte-cochere
  2. Resort registration + wristbands + parking passes (the FAQ 90% of guests ask, sourced from TW2111 MASTER §14a)
  3. The pools — Gulf-front lagoon pool, indoor heated pool, Roman spa
  4. Beach access — elevator down, cross the deck, chairs and umbrella rentals on the sand
  5. On-site dining — restaurant, coffee shop, tiki bar
  6. Nearby dining — Pier Park short drive
  7. What's NOT included at the resort (so guests don't ask us) — no on-site kids' club, no all-inclusive dining, etc.
  8. CTA — *View Twenty First*
- **Cross-links:** Panama City Beach Family Guide (§3.3), Restaurants (§3.5)
- **Author asset requirements:** need 3-5 resort-property photos we have permission to use (pool deck, lobby, beach). If we don't have them, use aerial/exterior only.

### 3.2 Majestic Sun / Seascape Resort Guide (P0)

- **URL:** `/guide/majestic-sun-seascape-resort-guide`
- **Property funnel:** MS811
- **Primary keyword:** `Majestic Sun Seascape guest guide`
- **Secondary keywords:** `Seascape Resort Miramar Beach amenities`, `Seascape Resort golf`, `Majestic Sun boardwalk to beach`
- **Meta title (≤60):** `Majestic Sun at Seascape Resort · Guest Guide, Amenities, Beach`
- **Meta description (150–160):** `Guest guide to Majestic Sun at Seascape Resort in Miramar Beach — boardwalk to beach, championship golf, pools, walkable dining at Seascape Town Center.`
- **Outline:**
  1. Intro — the boardwalk-to-beach identity
  2. Seascape's differentiators — championship golf, tennis + pickleball, Stewart Lake fishing, bike/paddleboard rentals
  3. Walkable Seascape Destin Town Center — dining + entertainment + shopping
  4. The pools — Gulf-front outdoor + heated indoor with cathedral ceilings + hot tubs
  5. Beach access via boardwalk
  6. What Seascape isn't — clarify (no all-inclusive, no kids' club, etc.)
  7. CTA — *View Westlight*
- **Cross-links:** Miramar Beach Family Guide (§3.4), Restaurants (§3.5)
- **Author asset requirements:** Seascape aerials, Town Center photos, golf-course shot if available.

### 3.3 Panama City Beach Family Vacation Guide (P1)

- **URL:** `/guide/panama-city-beach-family-vacation-guide`
- **Property funnel:** TW2111 (primary), MS811 (mentioned as alt for Destin-preference families)
- **Primary keyword:** `Panama City Beach family vacation`
- **Secondary keywords:** `Panama City Beach with kids`, `family activities Panama City Beach`, `best beach for families Panama City Beach`
- **Meta title (≤60):** `Panama City Beach Family Vacation Guide · Kids, Beach, Pier Park`
- **Meta description (150–160):** `A parent's guide to Panama City Beach — best beaches for kids, Pier Park, Shipwreck Island Waterpark, dolphin cruises, ice cream, and where to stay.`
- **Outline:**
  1. Why PCB works for families
  2. Best beach access points (west end, east end, resort deck)
  3. Pier Park — shops, restaurants, entertainment
  4. Shipwreck Island Waterpark
  5. Dolphin cruises + Captain Anderson's Marina
  6. Ripley's Believe It or Not / Wonderworks
  7. Ice cream + rainy-day options (short — long version is §3.7)
  8. Where to stay — TW2111 (primary CTA), MS811 as Destin-preference alt
- **Cross-links:** Tidewater Guide (§3.1), Restaurants PCB (§3.5), Rainy Day PCB (§3.7)

### 3.4 Miramar Beach Family Vacation Guide (P1)

- **URL:** `/guide/miramar-beach-family-vacation-guide`
- **Property funnel:** MS811 (primary), TW2111 (mentioned as alt for PCB-preference families)
- **Primary keyword:** `Miramar Beach family vacation`
- **Secondary keywords:** `Miramar Beach with kids`, `family activities Destin`, `Destin family vacation`
- **Meta title (≤60):** `Miramar Beach Family Vacation Guide · Kids, Beach, Baytowne`
- **Meta description (150–160):** `A family guide to Miramar Beach and Destin — quieter beaches than Panama City, Baytowne Wharf, HarborWalk Village, dolphin tours, and where to stay.`
- **Outline:**
  1. Miramar Beach vs. Panama City Beach — the "grown-up beach" positioning
  2. Best beaches for kids (Miramar Beach public access, Henderson Beach State Park)
  3. Village of Baytowne Wharf — nightly events + kids' entertainment
  4. HarborWalk Village + dolphin cruises
  5. Big Kahuna's Water Park
  6. Silver Sands Premium Outlets (rainy day)
  7. Grand Boulevard + Destin Commons dining
  8. Where to stay — MS811 (primary CTA), TW2111 as PCB-preference alt
- **Cross-links:** Majestic Sun Guide (§3.2), Restaurants Miramar (§3.5), Rainy Day Miramar (§3.7)

### 3.5 Best Restaurants — Panama City Beach + Miramar Beach (P2)

Two separate pages, one per market.

**Page A: `/guide/best-restaurants-panama-city-beach`** (TW2111 funnel)

- **Primary keyword:** `best restaurants Panama City Beach`
- **Secondary:** `Pier Park restaurants`, `waterfront dining Panama City Beach`, `best seafood Panama City Beach`
- **Meta title (≤60):** `Best Restaurants in Panama City Beach · Local Owner Picks`
- **Meta description (150–160):** `A local owner's picks for the best restaurants in Panama City Beach — Pier Park favorites, waterfront seafood, quick beach lunches, and date-night dining.`
- **Outline:** 15–20 restaurants, categorized (waterfront / Pier Park / breakfast / casual dinner / date night / kid-friendly / late-night). Each entry: 2-3 sentence recommendation, cuisine tag, price tier, distance from TW2111.

**Page B: `/guide/best-restaurants-miramar-beach-destin`** (MS811 funnel)

- **Primary keyword:** `best restaurants Miramar Beach Destin`
- **Secondary:** `Seascape Town Center restaurants`, `Destin waterfront dining`, `best seafood Destin`
- **Meta title (≤60):** `Best Restaurants Near Miramar Beach & Destin · Owner Guide`
- **Meta description (150–160):** `A local owner's picks for restaurants in Miramar Beach and Destin — walkable Seascape Town Center, HarborWalk Village, and Destin's must-visit tables.`
- **Outline:** Same shape as Page A but ~15–20 Destin-area restaurants. Feature the walkable Seascape Town Center list heavily (Acme Oyster House, Village Door, Mezcal Cantina, Moo La-La) since it's a differentiator for MS811.

### 3.6 Things to Do — Panama City Beach + Miramar Beach (P2)

Two separate pages, one per market. Overlaps somewhat with §3.3 / §3.4 (family guides) but scoped to *all* travelers, not just families.

**Page A: `/guide/things-to-do-panama-city-beach`** (TW2111 funnel)

- **Primary keyword:** `things to do Panama City Beach`
- **Secondary:** `Panama City Beach activities`, `Pier Park attractions`, `Panama City Beach adventure`
- **Meta title (≤60):** `Things to Do in Panama City Beach · A Local Owner's Guide`
- **Meta description (150–160):** `From dolphin tours and jet-skis to waterparks and Pier Park shopping — a local owner's guide to the best activities in Panama City Beach.`
- **Outline:** Beach activities · Water sports · Pier Park · Family attractions · Adult nightlife · Nature (St. Andrews State Park) · Sunset viewing spots.

**Page B: `/guide/things-to-do-miramar-beach-destin`** (MS811 funnel)

- **Primary keyword:** `things to do Miramar Beach`
- **Secondary:** `things to do Destin`, `Baytowne Wharf events`, `HarborWalk Village`
- **Meta title (≤60):** `Things to Do in Miramar Beach and Destin · Local Guide`
- **Meta description (150–160):** `Miramar Beach and Destin activities — beach days, Baytowne Wharf, HarborWalk Village, dolphin cruises, and Seascape golf, from a local owner.`
- **Outline:** Beach + water · Golf + tennis + pickleball · Baytowne + HarborWalk · Nature (Henderson Beach State Park) · Family attractions · Shopping (Silver Sands, Grand Boulevard).

### 3.7 Rainy Day Guides — Panama City Beach + Miramar Beach (P3)

Two separate pages, one per market. Highest-intent long-tail: someone on vacation searching *"rainy day Panama City Beach"* from their phone is 100% qualified traffic.

**Page A: `/guide/rainy-day-panama-city-beach`** (TW2111 funnel)

- **Primary keyword:** `rainy day activities Panama City Beach`
- **Secondary:** `Panama City Beach in the rain`, `indoor activities Panama City Beach`
- **Meta title (≤60):** `Rainy Day in Panama City Beach · Indoor Activities & Ideas`
- **Meta description (150–160):** `What to do in Panama City Beach when it rains — WonderWorks, Ripley's, Pier Park indoor shops, movie theatre, arcades, and stay-in ideas at your condo.`
- **Outline:** Indoor attractions (WonderWorks, Ripley's, arcades) · Movie theatre · Indoor mini-golf · Pier Park indoor shops + restaurants · Museums · Stay-in ideas (board games, cooking together, indoor pool at Tidewater, spa day at Tidewater's Roman spa).

**Page B: `/guide/rainy-day-miramar-beach-destin`** (MS811 funnel)

- **Primary keyword:** `rainy day activities Destin`
- **Secondary:** `Destin in the rain`, `indoor activities Miramar Beach`
- **Meta title (≤60):** `Rainy Day in Destin & Miramar Beach · Indoor Ideas`
- **Meta description (150–160):** `What to do in Destin and Miramar Beach when it rains — Silver Sands Outlets, Big Kahuna's indoor rides, movie theatre, spa days, and stay-in ideas.`
- **Outline:** Same shape as Page A — Silver Sands Premium Outlets, Big Kahuna's covered rides, movie theatres, Baytowne Wharf indoor shopping, spas, indoor pool at Majestic Sun.

---

## 4. Content quality checklist (per guide, pre-publish)

- [ ] Word count 1,200–2,000
- [ ] Meta title ≤60 chars
- [ ] Meta description 150–160 chars
- [ ] Exactly one H1
- [ ] At least one image with descriptive alt text
- [ ] JSON-LD `Article` schema
- [ ] Primary keyword in H1, title, first paragraph, and meta description
- [ ] Property CTA button appears twice (near top + at bottom)
- [ ] Internal link to ≥1 property page + ≥2 other guides
- [ ] Forbidden-language grep clean
- [ ] Reading grade level 8–10 (Hemingway app)
- [ ] Reviewed by Brand Director agent (voice/tone) + SEO Expert agent (technical SEO)

---

## 5. Measurement (Phase 3 §3.6 dependency)

For each guide, tracked in Google Search Console + our analytics tool of choice:

- **Impressions per week** — target ≥50 impressions/week within 60 days of publish.
- **Clicks per week** — target ≥5 clicks/week within 90 days.
- **Average position** — target top-20 within 90 days for the primary keyword.
- **Property-page click-through rate from the guide** — track `?ref=guide-{slug}` UTM parameter on inline CTAs.

If a guide is at zero traffic 90 days after publish, do a rewrite pass — usually the title or meta description needs a keyword-alignment tune, not a full rewrite.

---

## 6. Future series (not in Phase 3 scope, but capture the idea)

- **Wedding + event planning guides.** *"Best beach wedding venues in Miramar Beach"* — captures a highly-motivated audience.
- **Golf trip guides** (MS811 differentiator).
- **Snowbird + long-stay guides.** *"Long-stay rentals in Panama City Beach for snowbirds"* — feb-only shoulder-season audience.
- **Comparison guides.** *"Panama City Beach vs. Destin — which is right for your family?"* — controversial, high-CTR headline, both properties benefit.

None of these ship in Phase 3. Documented so they're not lost.

---

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-07-06 | SEO content plan created. Seven guide types (nine URLs) planned with slugs, keywords, meta strings, outlines, cross-links, and quality checklist. | Cursor AI Operating System — Phase 3 planning pass |
