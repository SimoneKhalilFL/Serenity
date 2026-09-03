#!/usr/bin/env python3
"""Build 4:5 feed + 9:16 story stills from each short-movie Reel (first frame).

  python scripts/generate-movie-posts.py
"""

from __future__ import annotations

import importlib.util
import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image

_FAM = Path(__file__).with_name("generate-family-reels.py")
_spec = importlib.util.spec_from_file_location("family_reels", _FAM)
_fam = importlib.util.module_from_spec(_spec)
assert _spec.loader is not None
_spec.loader.exec_module(_fam)
FFMPEG = _fam.FFMPEG
cover_resize = _fam.cover_resize

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "scripts" / "social-catalog.json"
OUT = ROOT / "docs" / "social" / "schedule-ready" / "posts"
FEED_W, FEED_H = 1080, 1350
STORY_W, STORY_H = 1080, 1920


def ff(*args: str) -> None:
    cmd = [FFMPEG, "-y", *args]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.stderr.write(r.stderr[-2000:] if r.stderr else "ffmpeg failed\n")
        raise SystemExit(r.returncode)


def first_frame(mp4: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    ff("-i", str(mp4), "-vframes", "1", "-q:v", "2", str(dest))


def to_ratio(src: Path, dest: Path, w: int, h: int) -> None:
    img = Image.open(src).convert("RGB")
    img = cover_resize(img, w, h)
    dest.parent.mkdir(parents=True, exist_ok=True)
    img.save(dest, format="JPEG", quality=90, optimize=True)


def listing_id(reel_id: str) -> int:
    return 4 if "-tw-" in reel_id else 5


def main() -> None:
    if not Path(FFMPEG).exists() and not shutil.which("ffmpeg"):
        raise SystemExit("ffmpeg not found")

    raw = json.loads(CATALOG.read_text(encoding="utf-8"))
    assets = raw.get("assets", [])
    reels = [a for a in assets if a.get("surface") == "reel" and "-movie-" in a.get("id", "")]
    if not reels:
        raise SystemExit("No movie reels in social-catalog.json")

    OUT.mkdir(parents=True, exist_ok=True)
    new_posts: list[dict] = []
    skip_ids = {a["id"] for a in assets if a.get("id", "").startswith(("feed-tw-movie", "feed-wl-movie", "story-tw-movie", "story-wl-movie"))}

    with tempfile.TemporaryDirectory() as td:
        tmp = Path(td)
        for reel in reels:
            mp4 = ROOT / reel["path"]
            if not mp4.exists():
                print(f"SKIP missing {mp4}")
                continue
            stem = reel["id"].replace("reel-", "post-")
            frame = tmp / f"{stem}.png"
            first_frame(mp4, frame)
            feed_rel = f"docs/social/schedule-ready/posts/{stem}-4x5.jpg"
            story_rel = f"docs/social/schedule-ready/posts/{stem}-9x16.jpg"
            to_ratio(frame, ROOT / feed_rel, FEED_W, FEED_H)
            to_ratio(frame, ROOT / story_rel, STORY_W, STORY_H)
            lid = int(reel.get("listingId") or listing_id(reel["id"]))
            hook = reel.get("hook") or "StayAtFlorida"
            lines = list(reel.get("lines") or [])
            feed_id = reel["id"].replace("reel-", "feed-")
            story_id = reel["id"].replace("reel-", "story-")
            family = f"post-{reel['id'].replace('reel-', '')}"
            new_posts.append({
                "id": feed_id,
                "listingId": lid,
                "surface": "feed",
                "family": f"{family}-feed",
                "path": feed_rel,
                "hook": hook,
                "lines": lines,
                "pairReel": reel["id"],
            })
            new_posts.append({
                "id": story_id,
                "listingId": lid,
                "surface": "story",
                "family": f"{family}-story",
                "path": story_rel,
                "hook": hook,
                "lines": lines,
                "pairReel": reel["id"],
            })
            print(f"OK {stem}")

    kept = [a for a in assets if a.get("id") not in skip_ids and a.get("id") not in {p["id"] for p in new_posts}]
    feeds = [p for p in new_posts if p["surface"] == "feed"]
    stories = [p for p in new_posts if p["surface"] == "story"]
    others_feed = [a for a in kept if a.get("surface") == "feed"]
    others_story = [a for a in kept if a.get("surface") == "story"]
    others = [a for a in kept if a.get("surface") not in ("feed", "story")]
    raw["assets"] = feeds + others_feed + stories + others_story + others
    CATALOG.write_text(json.dumps(raw, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(feeds)} feed + {len(stories)} story posts; catalog updated")


if __name__ == "__main__":
    main()
