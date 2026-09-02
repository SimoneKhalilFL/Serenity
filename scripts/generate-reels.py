#!/usr/bin/env python3
"""Build short 9:16 StayAtFlorida Reels from still photos (Ken Burns zoom)."""

from __future__ import annotations

import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "social" / "schedule-ready" / "reels"
FFMPEG = shutil.which("ffmpeg") or str(
    Path.home()
    / "AppData/Local/Microsoft/WinGet/Packages"
    / "Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe"
    / "ffmpeg-9.0.1-full_build/bin/ffmpeg.exe"
)

# Each clip ~2.0s at 30fps → d=60 frames. Mild zoom.
CLIP_SEC = 2.0
FPS = 30
W, H = 1080, 1920


def ff(*args: str) -> None:
    cmd = [FFMPEG, "-y", *args]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.stderr.write(r.stderr[-2000:] if r.stderr else "ffmpeg failed\n")
        raise SystemExit(r.returncode)


def still_to_clip(src: Path, dest: Path, zoom_end: float = 1.12) -> None:
    frames = int(CLIP_SEC * FPS)
    # scale/crop to 9:16 then slow zoom
    vf = (
        f"scale={W}:{H}:force_original_aspect_ratio=increase,"
        f"crop={W}:{H},"
        f"zoompan=z='min(1.0+((on/{frames})*{zoom_end - 1.0}),{zoom_end})'"
        f":d={frames}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'"
        f":s={W}x{H}:fps={FPS}"
    )
    ff(
        "-loop",
        "1",
        "-i",
        str(src),
        "-vf",
        vf,
        "-t",
        str(CLIP_SEC),
        "-c:v",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        "-an",
        str(dest),
    )


def concat_clips(clips: list[Path], out: Path) -> None:
    with tempfile.TemporaryDirectory() as td:
        list_file = Path(td) / "list.txt"
        list_file.write_text(
            "\n".join(f"file '{c.resolve().as_posix()}'" for c in clips) + "\n",
            encoding="utf-8",
        )
        ff(
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(list_file),
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            "-movflags",
            "+faststart",
            "-an",
            str(out),
        )


def build_reel(name: str, sources: list[Path]) -> Path:
    missing = [p for p in sources if not p.exists()]
    if missing:
        raise FileNotFoundError(f"{name}: missing {missing}")
    OUT.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as td:
        clips: list[Path] = []
        for i, src in enumerate(sources):
            clip = Path(td) / f"c{i:02d}.mp4"
            still_to_clip(src, clip, zoom_end=1.10 + (i % 3) * 0.02)
            clips.append(clip)
        out = OUT / f"{name}.mp4"
        concat_clips(clips, out)
        print(f"OK {out} ({out.stat().st_size // 1024} KB)")
        return out


def main() -> None:
    if not Path(FFMPEG).exists() and not shutil.which("ffmpeg"):
        raise SystemExit("ffmpeg not found")

    sr = ROOT / "docs" / "social" / "schedule-ready"
    ads_tw = ROOT / "docs" / "social" / "ads" / "tw-pcb-hooks"
    ads_ms = ROOT / "docs" / "social" / "ads" / "ms-miramar-hooks"
    lodging = ROOT / "images" / "lodging"

    reels = {
        # Twenty First — open with Gulf (never logo)
        "reel-tw-wait-for-the-view": [
            sr / "02-am-tw-gulf.jpg",
            ads_tw / "tw-wait-for-the-view.png",
            ads_tw / "tw-your-living-room-for-the-week.png",
            ads_tw / "tw-balcony-sunset-clean.png",
        ],
        "reel-tw-morning": [
            ads_tw / "tw-this-could-be-your-morning.png",
            sr / "02-am-tw-gulf.jpg",
            ads_tw / "tw-balcony-sunset-clean.png",
        ],
        "reel-tw-evening": [
            ads_tw / "tw-balcony-sunset-clean.png",
            ads_tw / "tw-this-could-be-your-evening.png",
            sr / "02-am-tw-gulf.jpg",
        ],
        "reel-tw-pov": [
            ads_tw / "tw-pov-finally-booked.png",
            sr / "02-am-tw-gulf.jpg",
            ads_tw / "tw-wait-for-the-view.png",
        ],
        # Westlight — open with balcony/Gulf
        "reel-ms-morning": [
            lodging / "ms-morning-balcony-9x16.jpg",
            lodging / "ms-morning-balcony-4x5.jpg",
            ads_ms / "ms-your-living-room-for-the-week.png",
        ],
        "reel-ms-wait-for-the-view": [
            ads_ms / "ms-wait-for-the-view.png",
            lodging / "ms-morning-balcony-9x16.jpg",
            ads_ms / "ms-your-living-room-for-the-week.png",
        ],
        "reel-ms-pov": [
            lodging / "ms-morning-balcony-9x16.jpg",
            ads_ms / "ms-pov-finally-booked-9x16.png",
            ads_ms / "ms-this-could-be-your-morning.png",
        ],
        "reel-ms-living": [
            ads_ms / "ms-your-living-room-for-the-week.png",
            lodging / "ms-morning-balcony-4x5.jpg",
            ads_ms / "ms-fullview-westlight.png",
        ],
    }

    for name, srcs in reels.items():
        # Drop missing optional lodging crops gracefully
        present = [p for p in srcs if p.exists()]
        if len(present) < 2:
            print(f"SKIP {name}: need ≥2 stills, have {len(present)}")
            continue
        build_reel(name, present[:4])


if __name__ == "__main__":
    main()
