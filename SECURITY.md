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

| Secret | Purpose |
|--------|---------|
| `WEB3FORMS_ACCESS_KEY` | Web3Forms access key — injected into `config.js` during **Deploy to GitHub Pages** only |
| `CALENDAR_FEEDS_JSON` | iCal URLs for **Sync iCal availability** workflow |

Add both under **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.

Do not paste these into committed files. Rotate keys in the Web3Forms / OTA dashboards if they were ever exposed in git history.

## Reporting issues

Use **Issues** on this repository or contact the maintainer privately if you discover a security problem.
