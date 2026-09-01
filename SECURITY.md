# Security practices for this repository

## Two-factor authentication (2FA)

**You must enable this on your GitHub account** — it cannot be turned on from the repo.

1. Sign in to GitHub → **Settings** (profile) → **Password and authentication**.
2. Under **Two-factor authentication**, choose **Authenticator app** or **SMS** and complete setup.
3. Save **recovery codes** somewhere safe.

Docs: [Securing your account with 2FA](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)

## Branch protection on `main`

GitHub does not read this file to enforce rules — **you** turn on protection in the repo settings (or run the helper script in `scripts/` with the GitHub CLI).

**Recommended settings** (when you add collaborators):

- **Require a pull request before merging**
- **Require approvals**: 1 (optional until you have a second reviewer; see note below)
- **Dismiss stale pull request approvals when new commits are pushed**
- **Do not allow bypassing the above settings** — only if you are comfortable (admins can be locked out of emergency hotfixes)
- **Block force pushes**
- **Do not allow deletions**

**Solo maintainer note:** If you are the only person merging and you set **Required approvals: 1**, you may not be able to merge your own PRs without a second account or an admin bypass. Options: use **0** required approvals but still **require PR** (no direct pushes to `main`), or allow **administrators to bypass** until a collaborator joins.

**Where:** Repository **Settings** → **Branches** → **Add branch protection rule** → Branch name pattern: `main`

Optional: run `bash scripts/apply-branch-protection.sh` after `gh auth login` (requires [GitHub CLI](https://cli.github.com/)).

## Secrets (never commit)

| Secret | Required? | Purpose |
|--------|-----------|---------|
| `WEB3FORMS_ACCESS_KEY` | Optional (rotation) | Web3Forms access key. A working key is committed to `config.js` so local `npx serve` and PR previews work out of the box (Web3Forms keys are per-domain frontend tokens — safe to commit when the allowed origins are locked in the Web3Forms dashboard). Set this secret only when you want to **rotate** the key without a code commit — the deploy workflow will overwrite the committed literal with the secret value. Missing secret = deploy still ships the committed key. |
| `CALENDAR_FEEDS_JSON` | Required | iCal URLs for **Sync iCal availability** workflow |
| `PRICELABS_API_KEY` | Required for pricing sync | PriceLabs Customer API key from **Account Settings → API Details**. Used by **Sync PriceLabs pricing** (`scripts/sync-pricelabs.cjs`). Never commit this key. |
| `PRICELABS_FEEDS_JSON` | Required for pricing sync | JSON mapping stayatflorida.com listing IDs → PriceLabs `{ pricelabsListingId, pms }`. Shape: `scripts/pricelabs-feeds.config.example.json`. |
| `CLOUDFLARE_BEACON_TOKEN` | Optional | Cloudflare Web Analytics beacon token. When present, `scripts/inject-cf-beacon.cjs` injects the tracking snippet into all HTML pages during deploy. When absent, the snippet is **stripped** and no analytics ship. |
| `CLARITY_PROJECT_ID` | Optional | Microsoft Clarity project ID for session recordings + heatmaps. When present, `scripts/inject-clarity.cjs` injects the Clarity tag into all HTML pages during deploy. When absent, the block is **stripped** and Clarity does not load. Runs cookieless by default. |
| `META_PAGE_ACCESS_TOKEN` | Required for social posting | Long-lived Facebook Page token used by **Post social openings** (`scripts/social-post.cjs`). Never commit this token. Setup: [`docs/brand/SOCIAL.md`](docs/brand/SOCIAL.md). |
| `META_PAGE_ID` | Required for social posting | Numeric Facebook Page id for `StayAtFlorida` (was FloridaRental2020). |
| `META_IG_USER_ID` | Optional (Instagram) | Instagram Business account id linked to the Page. Missing = Facebook-only posts. |
| `SOCIAL_POST_ENABLED` | Optional | Set to `false` to pause publishing without deleting tokens. |

Add them under **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.

Do not paste these into committed files, with the intentional exception of the Web3Forms key documented in the row above (per-domain frontend token, safe to commit when the Web3Forms dashboard restricts allowed origins). Rotate keys in the Web3Forms / Cloudflare / OTA dashboards if they were ever exposed in git history.

### Finding the Cloudflare beacon token

1. Cloudflare dashboard → **Analytics & Logs** → **Web Analytics**.
2. Open your site (or **Add a site** and enter `stayatflorida.com` — since the domain isn't on Cloudflare DNS, it will show a "JS Snippet" option).
3. In the snippet Cloudflare shows you (`<script ... data-cf-beacon='{"token": "abc123..."}'></script>`), copy **only** the token string — the value between the quotes after `"token":`.
4. Paste that value into the `CLOUDFLARE_BEACON_TOKEN` secret in GitHub Actions.

### Finding the Microsoft Clarity project ID

1. Sign up at [clarity.microsoft.com](https://clarity.microsoft.com/) (free forever — no credit card, no traffic cap).
2. Create a new project with your site name and URL `https://stayatflorida.com/`.
3. In the install instructions, Microsoft shows a `<script>(function(c,l,a,r,i,t,y){…})(window,document,"clarity","script","r7a8b9c0de");</script>` snippet. Copy **only** the last string — the project ID (e.g. `r7a8b9c0de`) — not the whole snippet. The injector can recover the bare ID from a full-snippet paste but the bare value is safer.
4. Paste that value into the `CLARITY_PROJECT_ID` secret in GitHub Actions.
5. In the Clarity dashboard → **Settings** → **Setup**, toggle **Cookies** to **OFF**. This belt-and-suspenders the cookieless mode already enforced in the injected snippet (via `clarity("consent", false)`), so no session cookies are ever set on your visitors.

## Reporting issues

Use **Issues** on this repository or contact the maintainer privately if you discover a security problem.
