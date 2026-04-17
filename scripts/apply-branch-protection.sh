#!/usr/bin/env bash
# Apply branch protection to main (requires: gh auth login, repo admin).
# Usage: ./scripts/apply-branch-protection.sh [owner/repo] [branch]
set -euo pipefail
REPO="${1:-SimoneKhalilFL/Serenity}"
BRANCH="${2:-main}"

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: https://cli.github.com/  Then: gh auth login"
  exit 1
fi

echo "Applying branch protection to ${REPO}@${BRANCH}..."

gh api --method PUT -H "Accept: application/vnd.github+json" \
  "repos/${REPO}/branches/${BRANCH}/protection" \
  --input - <<EOF
{
  "required_status_checks": null,
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 1
  },
  "restrictions": null,
  "required_linear_history": false,
  "allow_force_pushes": false,
  "allow_deletions": false
}
EOF

echo "Done. If you are the only maintainer, you may need to allow admin bypass in the UI to merge your own PRs, or set required_approving_review_count to 0."
