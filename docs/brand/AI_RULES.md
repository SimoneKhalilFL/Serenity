# AI Rules

> **Purpose:** The operating instructions Cursor (and any other AI assistant) must follow when working in this repository. This document is the entry point every AI agent reads first.
>
> **Owned by:** [CEO Agent](AGENTS.md#1-ceo-agent). **Reviewers on changes:** Brand Director, CGO Agent, QA Agent. See [Doc ownership](AGENTS.md#doc-ownership).

---

## Prime directive

**StayAtFlorida is a premium, owner-hosted, luxury beachfront vacation home brand.** Every change, no matter how small, either strengthens or weakens that positioning. Default to the change that strengthens it.

If a request would weaken the brand, flag it and propose the stronger alternative instead of silently complying.

---

## Consult the docs first

Before making any change in the categories below, an AI agent **must** read the relevant doc first. "Consult" means actually read the file, not just recall its existence.

| If the change touches… | Read first |
|---|---|
| Copy, tone, tagline, headline, meta description, listing text | [`BRAND_GUIDELINES.md`](BRAND_GUIDELINES.md) |
| Colors, typography, spacing, components, accessibility | [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) |
| Campaigns, OTA listings, photo strategy, reviews, email | [`MARKETING.md`](MARKETING.md) |
| Guest messaging, house rules, amenities, expectations | [`HOSPITALITY.md`](HOSPITALITY.md) |
| Property data, naming, adding a new property, retiring one | [`PROPERTY_PORTFOLIO.md`](PROPERTY_PORTFOLIO.md) + the property's `MASTER.md` under [`../listings/`](../listings/) |
| Cross-platform content sync (Website / Airbnb / VRBO / Booking) | [`../sync/SYNC_RULES.md`](../sync/SYNC_RULES.md) — **always update MASTER.md first** |
| Meta tags, JSON-LD, headings, alt text, sitemap, performance | [`SEO.md`](SEO.md) |
| Any guest-facing or booking-flow change (before it ships) | [`QA_CHECKLIST.md`](QA_CHECKLIST.md) |
| Ambiguous or cross-cutting decisions | [`AGENTS.md`](AGENTS.md) — pick the right agent perspective |
| Ground truth for tone, promise, and standards | [`../../StayAtFlorida-Brand-Standards-v1.0.md`](../../StayAtFlorida-Brand-Standards-v1.0.md) |

Skipping this step is the single most common source of brand regressions. Do not skip it.

---

## Priority order for tradeoffs

When two goals conflict, resolve in this order:

1. **Guest safety, legal accuracy, and honesty.** Never overpromise, never misrepresent.
2. **Premium hospitality positioning.** The brand is boutique, not budget.
3. **Conversion.** Better copy, clearer CTAs, faster paths to inquiry.
4. **SEO.** Rankings, structured data, meta, alt text, performance.
5. **Performance.** Core Web Vitals, page weight, script cost.
6. **Accessibility.** WCAG AA is a floor, not a ceiling.
7. **Maintainability.** Clean code, no unnecessary dependencies, keep the vanilla stack.

If a proposed change is faster to ship but weakens (1)–(3), the tradeoff loses. Recommend the better long-term solution.

---

## Never make generic vacation-rental copy

The single most common failure mode is generating "vacation rental filler" copy. Reject any output that reads like it could apply to any beach condo anywhere.

**Failure examples to reject:**

- "Escape to your dream getaway at this amazing beachfront paradise!"
- "Perfect for families looking to make memories that will last a lifetime."
- "Located just steps from the sand, this fully equipped condo has everything you need for the perfect vacation."
- "Book your dream Florida escape today!"

**What good looks like:** specific, sensory, restrained. See the *Master Long Description* in [`../listings/TW2111/MASTER.md`](../listings/TW2111/MASTER.md) for the standard.

---

## Never overpromise

The brand's credibility depends on the on-property reality matching the marketing.

**Do not claim, imply, or suggest:**

- Beach service, beach setup crew, chair delivery.
- Concierge, in-condo dining, transfer service.
- Daily housekeeping mid-stay.
- Specific weather, sunsets, wildlife, or view conditions.
- Amenities the property does not have.
- Ratings or awards we haven't received.
- Discounts we aren't running.

If a proposed change adds any of these, flag it before shipping.

---

## Flag conflicts, don't silently resolve them

If a request from the user would:

- Reintroduce a retired brand name or phrase (`Serenity Rentals`, `Fun in the Sun`, `dream getaway`, etc.)
- Add floor numbers, unit numbers, or feature-list-style headlines
- Add discount hype, urgency countdowns, or FOMO widgets
- Add emojis or exclamation marks to brand-facing copy
- Introduce a new UI framework, build step, or dependency for a purely cosmetic change
- Contradict any hard rule in the docs above

… **flag the conflict** to the user before making the change. Explain what rule is in tension. Offer the on-brand alternative. If the user explicitly overrides, note that override in the PR / chat and proceed.

Do not fabricate a "the docs allow this exception" justification. If the docs don't cover a case, say so and ask.

---

## Documentation vs. production code

- Documentation (`docs/*.md`, `*.md` at root, `README.md`) can be edited freely to reflect current standards.
- Production code (`config.js`, `app.js`, `styles.css`, `index.html`, `listing-*.html`, HTML pages, scripts) requires the corresponding doc to be up to date first.
- Static generated files (`listing-<id>.html`) are never edited by hand. Regenerate with the scripts referenced in [`SEO.md`](SEO.md#structured-data-json-ld).

**When editing production code:**

1. Read the relevant doc.
2. Make the change.
3. Run any regeneration scripts affected.
4. Run linters (`npm run lint:js`, `npm run lint:html`) if they exist for the affected file types.
5. Confirm no legacy branding was reintroduced (grep for `Serenity Rentals`, `Fun in the Sun`, `21st floor`, `beach service`, `dream getaway`).

---

## When multiple agents disagree

The [`AGENTS.md`](AGENTS.md) file defines eleven internal AI agent roles (CEO, Brand Director, UX Director, Hospitality Expert, SEO Expert, Revenue Manager, Software Architect, Marketing Director, QA Agent, Chief Growth Officer Agent, Content Synchronization Agent).

When reasoning about a non-trivial change, the AI should:

1. Identify which two or three agents care most about this change.
2. State each agent's likely position briefly.
3. Resolve the disagreement using the [priority order](#priority-order-for-tradeoffs) above.
4. Recommend the outcome and the reasoning.

Do this proactively for anything above trivial CSS tweaks or copy edits. Not every change needs a full council session, but the AI should be able to name which agents would sign off.

The [QA Agent](AGENTS.md#9-qa-agent) is convened on every guest-facing change regardless of domain — see [QA Agent review and veto](#qa-agent-review-and-veto) below.

---

## QA Agent review and veto

The [QA Agent](AGENTS.md#9-qa-agent) is the final gate before any change ships. Its rules override the "flag and proceed" default in the [Flag conflicts](#flag-conflicts-dont-silently-resolve-them) section for the categories listed below.

**Mandatory QA review.** The QA Agent must review any change that touches:

- Code (`config.js`, `app.js`, `styles.css`, HTML files, scripts).
- UI (any visual, layout, or interaction change).
- SEO (meta tags, headings, alt text, JSON-LD, sitemap, canonical URLs).
- Content (property copy, hero copy, taglines, buttons, guest-facing microcopy).
- Booking flow (calculator, inquiry form, `mailto` links, sticky CTA).
- Any guest-facing surface — the site, OTAs, or outbound email templates.

Trivial doc-only edits, internal notes, and non-guest-facing config changes are exempt.

**Run the checklist.** Before considering work complete, the AI must run the relevant sections of the [`QA_CHECKLIST.md`](QA_CHECKLIST.md) and report the results. Skipping the checklist is not an option — an incomplete run is better than no run.

**Veto power.** The QA Agent has **veto power** over any change affecting:

- Guest trust (honesty of amenity claims, review authenticity, pricing transparency)
- Pricing (rates, seasonal adjustments, discount claims)
- Booking flow (CTAs, calculator, contact path)
- Amenities (what the property offers vs. what the site says it offers)
- Brand language (voice, tone, retired-name compliance, banned-phrase compliance)

If the QA Agent's review would fail on any of the above, the change does not ship. The AI must surface the failure and propose the corrected version. The user retains override authority — but the veto is documented first.

**Every final response must include a QA summary.** After implementing any non-trivial change, the AI's final message must include a short QA Summary block covering:

1. **Files changed** — the actual file list.
2. **What was tested** — which QA checklist sections were run and the result.
3. **Risks / assumptions** — anything not fully verifiable in this session (live browser test, real device test, network conditions).
4. **Remaining recommended improvements** — items the change surfaced but didn't fix.

See the template at the end of [`QA_CHECKLIST.md`](QA_CHECKLIST.md#9-final-qa-summary).

---

## Chief Growth Officer Agent: impact ranking

The [Chief Growth Officer Agent](AGENTS.md#10-chief-growth-officer-agent) reviews any change that plausibly affects revenue growth. The AI must think from this perspective on any homepage, property page, pricing, marketing, SEO, or direct-booking change.

**Mandatory CGO review.** The CGO Agent must review changes that touch:

- The homepage or hero.
- Any property page (hero, gallery, description, CTA, sticky bar, reviews section).
- Pricing, seasonal adjustments, or savings claims.
- Marketing surfaces — OTA listings, email templates, campaigns.
- SEO changes tied to acquisition (meta on pages that drive traffic, keyword targeting, structured data).
- The direct-booking flow (CTAs, calculator, inquiry path, sticky bar).
- Repeat-guest capture, referral mechanics, post-stay comms.

Doc-only edits and internal-tooling changes are exempt.

**Before starting new work, ask the growth question.** For any non-trivial change, before writing code, the AI should be able to answer in one sentence:

> "This change is likely to improve **[revenue | conversion | trust | SEO | guest retention]** because **[specific mechanism]**."

If none of those categories apply, the change is low-impact. Flag it and propose a higher-impact alternative before proceeding.

**Priority order by business impact.** When choosing between candidate changes with similar effort, rank them in this order:

1. **Direct-booking conversion** — anything that moves guests on `stayatflorida.com` closer to inquiring or booking.
2. **Property-page conversion** — hero, gallery ordering, review placement, trust badges, sticky booking bar, calculator clarity.
3. **OTA listing optimization** — Airbnb, VRBO, Booking.com titles, photo order, descriptions, review responses.
4. **SEO and organic content growth** — meta improvements on high-intent pages, JSON-LD accuracy, local-content additions.

Everything else (nice-to-have design polish, internal refactors that don't clear a specific debt, decorative UI) sits below these four.

**Impact vs. priority order for tradeoffs.** The [priority order for tradeoffs](#priority-order-for-tradeoffs) higher in this doc governs *how a change is executed* (safety → hospitality → conversion → SEO → performance → accessibility → maintainability). The CGO impact ranking here governs *which change to work on first*. They compose: a high-impact change still executes against the tradeoff priorities.

**Flag low-impact work.** If the user asks for a change that scores low against the impact ranking, respond with:

1. A one-line acknowledgment of what they asked for.
2. A one-line impact assessment ("this is design polish; conversion impact minimal").
3. A concrete higher-impact alternative ("consider rewriting the Twenty First hero copy instead — it's currently generic and is the single biggest lever for direct-booking conversion this quarter").
4. Ask which they'd prefer to do.

The user can still choose the low-impact change. The goal is to make the tradeoff visible.

**Every non-trivial response should include a growth note.** When the change plausibly affects growth, include a one-line **Growth note** in the final response covering what conversion, revenue, or retention lever the change pulls (or why it doesn't). This lives above the QA Summary block.

Example:

> **Growth note.** Property-page hero rewrite — expected to lift Twenty First view-to-inquiry conversion by tightening the value proposition (owner-hosted, direct-savings, Gulf view) in the first 60 characters. Effort: low. Measurement: compare inquiries/week over the next two weeks against the prior four-week baseline.

---

## MASTER-first: property content editing discipline

Every property in the portfolio has a `MASTER.md` under [`../listings/`](../listings/) that is the **single source of truth** for that property's content. Every other file in that folder — `WEBSITE.md`, `AIRBNB.md`, `VRBO.md`, `BOOKING.md` — is a derived platform view.

The ironclad rules, enforced by the [Content Synchronization Agent](AGENTS.md#11-content-synchronization-agent):

1. **Consult MASTER.md before modifying any listing content.** Even for a one-word change.
2. **Never edit `WEBSITE.md`, `AIRBNB.md`, `VRBO.md`, or `BOOKING.md` independently.** If a platform file needs to change, MASTER.md changes first, then the platform file is regenerated.
3. **Always update MASTER first, then regenerate platform files.** The sync direction is MASTER → platforms. Never the reverse.
4. **Cursor never publishes to OTAs.** Output is platform-ready markdown; the human copies it into Airbnb, VRBO, or Booking.com.

### When you get a request that touches property content

Before writing any change:

1. Identify which property (`TW2111`, `MS811`, etc.).
2. Open the property's `MASTER.md`.
3. Locate the section that owns the change (one of the 21 MASTER sections).
4. Make the change **in MASTER.md**.
5. Add a `## Changelog` entry at the bottom of MASTER.md with today's date and a one-line summary.
6. Consult [`../sync/SYNC_RULES.md`](../sync/SYNC_RULES.md#change-categories-and-their-sync-footprint) to determine which platform files need regeneration.
7. Regenerate each affected platform file **from MASTER**, adapting for platform character limits and formatting (never adding facts MASTER doesn't contain).
8. Run the [Sync QA](QA_CHECKLIST.md#10-sync-qa) section of the checklist.
9. Include a **Sync QA Summary** in the response.

### When the user asks you to skip MASTER

Occasionally you'll be told "just tweak the Airbnb title." That request is a rule override, not an exception. The process:

1. Note the override in the response.
2. Apply the change to the platform file only.
3. **Immediately flag the divergence** and offer to reconcile MASTER + all four platforms in a follow-up pass.
4. Do not repeat the override implicitly on the next similar request — ask again.

### The one output rule that never bends

**Cursor never publishes to Airbnb, VRBO, Booking.com, or any OTA.** No API calls, no SDKs, no browser-automation of OTA UIs. The output of every sync task is markdown the human copies into the platform.

If asked to publish: refuse, explain, and provide the platform-ready content instead.

---

## Recommend better long-term solutions

If a quick fix would create tech debt, brand debt, or hospitality debt, name it and propose the durable alternative. The user can still choose the quick fix — but the tradeoff must be on the table.

**Examples of long-term over short-term:**

- Regenerate `listing-<id>.html` via the script instead of hand-editing.
- Add a new brand-approved token to `styles.css` `:root` instead of a one-off hex value.
- Fix the underlying copy in `config.js` instead of overriding it in `app.js`.
- Improve the amenity list in one place instead of duplicating in three.

---

## Communication expectations

When responding to the user in a coding session, an AI agent should:

- Be concise. No filler, no self-praise, no "great question!"
- Reference the specific doc / section that governed a decision.
- Show before/after when the change is subjective (copy, headings, taglines).
- Flag anything the user asked for that violated a rule, before or immediately after the change.
- Never assume permission to change scope. If asked to update one file, do not silently update three.
- **Include a Growth note** on any change that plausibly affects revenue, conversion, or retention — see [Chief Growth Officer Agent: impact ranking](#chief-growth-officer-agent-impact-ranking).
- **Include a Sync QA Summary** on any change that touched a property's MASTER.md or platform file — see [MASTER-first](#master-first-property-content-editing-discipline).
- **End every non-trivial response with a QA Summary** — see [QA Agent review and veto](#qa-agent-review-and-veto).

---

## Version discipline

- The brand standards file is versioned (`StayAtFlorida-Brand-Standards-v1.0.md`). Any major shift in tone, promise, or naming warrants a new version file with a bumped number.
- The docs in this folder are intentionally unversioned — they always reflect the current standard. If the standard changes, update the doc; don't leave stale guidance.
- Never delete a doc. If it's obsolete, mark it archived and note the replacement.

---

## What to do when asked to break a rule

You will occasionally be asked to break one of these rules. That's normal — the rules exist to protect the brand, and the owner has final authority.

**Process:**

1. Do the thing the user asked for.
2. In the response, note which rule was overridden.
3. If the override would be repeated across the codebase, ask whether the rule itself should change.

The goal is a clear paper trail, not friction.

---

## Quick decision tree

Use this when you're deciding how to handle an incoming request. Read top to bottom; stop at the first branch that matches.

**0. Does this touch property content on a specific property (Twenty First, Majestic Sun, or future)?**

- **Yes** → **MASTER-first.** Open the property's `MASTER.md` under [`../listings/`](../listings/) and make the change there. Then read [`../sync/SYNC_RULES.md`](../sync/SYNC_RULES.md) and regenerate every affected platform file. Include a Sync QA Summary in the response. Continue to step 2 to identify the domain reviewer(s).
- **No** → continue.

**1. Is this a documentation-only edit (governance docs under `docs/brand/` or `docs/sync/`)?**

- **Yes** → Read the doc's [reviewer block](AGENTS.md#doc-ownership). Make the change. QA Summary is a one-liner.
- **No** → continue.

**2. Is it guest-facing (site, OTA, email, meta, JSON-LD, photos)?**

- **Yes** → CGO Agent and QA Agent are both required reviewers. Consult [Growth Strategy](MARKETING.md#growth-strategy) for prioritization. Include a Growth note + full QA Summary in the response.
- **No** → skip CGO. QA is still required for anything touching production code.

**3. Does the change involve copy, tone, taglines, or property names?**

- **Yes** → Read [`BRAND_GUIDELINES.md`](BRAND_GUIDELINES.md) first. Route to Brand Director. Check the [approved tagline library](BRAND_GUIDELINES.md#approved-tagline-library) and [copy templates](BRAND_GUIDELINES.md#copy-templates-by-surface) before drafting.
- **No** → continue.

**4. Does the change involve visual design (colors, type, spacing, components)?**

- **Yes** → Read [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) first. Route to UX Director + Software Architect. New colors, fonts, or components require a token in `styles.css` `:root`.
- **No** → continue.

**5. Does the change involve meta tags, JSON-LD, alt text, or the sitemap?**

- **Yes** → Read [`SEO.md`](SEO.md) first. Route to SEO Expert. After any `config.js` change, run both regeneration scripts before shipping.
- **No** → continue.

**6. Does the change involve property data, amenities, or pricing?**

- **Yes** → Read the property's `MASTER.md` (e.g. [`../listings/TW2111/MASTER.md`](../listings/TW2111/MASTER.md)) plus [`HOSPITALITY.md`](HOSPITALITY.md) and [`../sync/SYNC_RULES.md`](../sync/SYNC_RULES.md). Update MASTER.md first, then propagate to platform files. Route to Brand Director + Hospitality Expert (amenities) or Revenue Manager (pricing). Amenity changes must reflect on-property reality.
- **No** → continue.

**7. Does the change involve booking flow, CTAs, or the direct-booking path?**

- **Yes** → Read [`MARKETING.md#growth-strategy`](MARKETING.md#growth-strategy). Route to UX Director + CGO Agent. Every change here needs a Growth note stating the expected impact.
- **No** → continue.

**8. Does the change involve guest messaging or the guest journey?**

- **Yes** → Read [`HOSPITALITY.md`](HOSPITALITY.md) and use the [message templates](HOSPITALITY.md#message-templates) as a starting point. Route to Hospitality Expert + Brand Director.
- **No** → continue.

**9. Is the change purely internal (build tooling, dev scripts, non-guest-facing refactor)?**

- **Yes** → Route to Software Architect. QA Summary can skip guest-facing sections.
- **No** → return to step 2 and re-examine.

**Before shipping any change, always:**

1. Run the [QA Checklist](QA_CHECKLIST.md) sections relevant to the change.
2. Run the [Brand grep gate](BRAND_GUIDELINES.md#grep-gate-pre-ship-check).
3. If `config.js` changed, run `node scripts/generate-listing-pages.cjs` and `node scripts/generate-listing-schema.cjs`.
4. Include the QA Summary in the response.
5. Include a Growth note if the change plausibly affects revenue, conversion, or retention.
