#!/usr/bin/env node
/**
 * Cursor sessionStart hook: fetches the remote and warns if the local branch
 * has drifted from origin/main.
 *
 * Why this exists:
 *   The sync-calendars GitHub Actions workflow (.github/workflows/sync-calendars.yml)
 *   commits fresh iCal availability to origin/main every 30 minutes. Local branches
 *   silently accumulate "behind" commits between Cursor sessions. On 2026-07-02 this
 *   drift hit 17 days and caused the calendar on localhost to show July 29 as
 *   blocked when it was actually open (the stale local `data/availability-4.json`
 *   was 157 workflow commits behind origin). See commit 5fd5afe for context.
 *
 * Design:
 *   - Never fails a session. All errors are swallowed (fail-open).
 *   - Only fetches remote-tracking refs; never touches the working tree.
 *   - Emits an `additional_context` block if drift is detected, so the agent
 *     surfaces it early in the session.
 *   - Also writes a human-readable line to stderr, which shows up in Cursor's
 *     "Hooks" output channel for the developer's benefit.
 */

import { execSync } from 'node:child_process';

/** Run a git command, returning trimmed stdout. Silent on stderr. */
function git(args) {
  return execSync(`git ${args}`, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore'],
    windowsHide: true,
  }).trim();
}

/** Emit hook output (JSON on stdout) and exit cleanly. */
function emit(payload) {
  process.stdout.write(JSON.stringify(payload || {}));
  process.exit(0);
}

try {
  const remotes = git('remote').split('\n').filter(Boolean);
  if (!remotes.includes('origin')) {
    emit({});
  }

  git('fetch origin main --quiet');

  const behind = parseInt(git('rev-list --count HEAD..origin/main') || '0', 10);
  const ahead = parseInt(git('rev-list --count origin/main..HEAD') || '0', 10);

  if (behind === 0) {
    emit({});
  }

  const branch = git('rev-parse --abbrev-ref HEAD');
  const aheadFragment = ahead > 0 ? ` and ${ahead} ahead` : '';
  const hint =
    behind > 20
      ? 'This is significant drift. The `sync-calendars` GitHub Actions workflow pushes to origin every 30 minutes, so drift accumulates quickly between sessions. Run `git pull --rebase` before making changes to avoid the "everything is stale" pattern from 2026-07-02 (see commit 5fd5afe).'
      : 'Consider running `git pull --rebase` before making changes.';

  const message = [
    '## Remote drift detected on session start',
    '',
    `Local \`${branch}\` is **${behind} commits behind origin/main**${aheadFragment}.`,
    '',
    hint,
    '',
  ].join('\n');

  process.stderr.write(
    `[stayatflorida hook] Local ${branch} is ${behind} behind${aheadFragment} origin/main. Run: git pull --rebase\n`,
  );

  emit({ additional_context: message });
} catch {
  emit({});
}
