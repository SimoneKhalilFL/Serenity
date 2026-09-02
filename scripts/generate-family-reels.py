#!/usr/bin/env python3
"""Build 9:16 StayAtFlorida family-beach short-movie Reels from stills."""

from __future__ import annotations

import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FRAMES = ROOT / "docs" / "social" / "media" / "clips" / "family-beach"
OUT = ROOT / "docs" / "social" / "schedule-ready" / "reels"
FFMPEG = shutil.which("ffmpeg") or str(
    Path.home()
    / "AppData/Local/Microsoft/WinGet/Packages"
    / "Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe"
    / "ffmpeg-9.0.1-full_build/bin/ffmpeg.exe"
)
FONT_PATH = Path(r"C:\Windows\Fonts\segoeui.ttf")
if not FONT_PATH.exists():
    FONT_PATH = Path(r"C:\Windows\Fonts\arial.ttf")

CLIP_SEC = 2.4
CLOSE_SEC = 3.0
FPS = 30
W, H = 1080, 1920


def ff(*args: str) -> None:
    cmd = [FFMPEG, "-y", *args]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        sys.stderr.write(r.stderr[-2500:] if r.stderr else "ffmpeg failed\n")
        raise SystemExit(r.returncode)


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    try:
        return ImageFont.truetype(str(FONT_PATH), size=size)
    except OSError:
        return ImageFont.load_default()


def cover_resize(img: Image.Image, tw: int, th: int) -> Image.Image:
    scale = max(tw / img.width, th / img.height)
    nw, nh = int(img.width * scale), int(img.height * scale)
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return img.crop((left, top, left + tw, top + th))


def burn_text(src: Path, dest: Path, lines: list[str] | None) -> None:
    img = Image.open(src).convert("RGB")
    img = cover_resize(img, W, H)
    if lines:
        draw = ImageDraw.Draw(img)
        font = load_font(52)
        # Measure block height for lower-third placement.
        line_heights = []
        widths = []
        for line in lines:
            bbox = draw.textbbox((0, 0), line, font=font)
            widths.append(bbox[2] - bbox[0])
            line_heights.append(bbox[3] - bbox[1])
        gap = 14
        block_h = sum(line_heights) + gap * (len(lines) - 1)
        y = int(H * 0.74) - block_h // 2
        for line, lw, lh in zip(lines, widths, line_heights):
            x = (W - lw) // 2
            # Soft dark outline for beach-bright backgrounds.
            for dx, dy in (
                (-2, 0),
                (2, 0),
                (0, -2),
                (0, 2),
                (-2, -2),
                (2, 2),
                (-2, 2),
                (2, -2),
            ):
                draw.text((x + dx, y + dy), line, font=font, fill=(0, 0, 0))
            draw.text((x, y), line, font=font, fill=(255, 255, 255))
            y += lh + gap
    img.save(dest, format="PNG")


def still_to_clip(src: Path, dest: Path, *, seconds: float, zoom_end: float) -> None:
    frames = int(seconds * FPS)
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
        str(seconds),
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


def build_reel(name: str, shots: list[tuple[Path, list[str] | None, float]]) -> Path:
    missing = [p for p, _, _ in shots if not p.exists()]
    if missing:
        raise FileNotFoundError(f"{name}: missing {missing}")
    OUT.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as td:
        clips: list[Path] = []
        for i, (src, lines, seconds) in enumerate(shots):
            framed = Path(td) / f"f{i:02d}.png"
            clip = Path(td) / f"c{i:02d}.mp4"
            burn_text(src, framed, lines)
            still_to_clip(framed, clip, seconds=seconds, zoom_end=1.08 + (i % 3) * 0.02)
            clips.append(clip)
        out = OUT / f"{name}.mp4"
        concat_clips(clips, out)
        print(f"OK {out} ({out.stat().st_size // 1024} KB)")
        return out


def main() -> None:
    if not Path(FFMPEG).exists() and not shutil.which("ffmpeg"):
        raise SystemExit("ffmpeg not found")

    wl = [
        (FRAMES / "wl-family-walk-morning.png", ["This could be your morning"], CLIP_SEC),
        (FRAMES / "wl-family-wide-shore.png", ["Miramar Beach, Florida"], CLIP_SEC),
        (FRAMES / "wl-family-water-play.png", None, CLIP_SEC),
        (FRAMES / "wl-family-sand-sit.png", None, CLIP_SEC),
        (
            FRAMES / "wl-family-sunset.png",
            ["Westlight", "Miramar Beach", "StayAtFlorida.com"],
            CLOSE_SEC,
        ),
    ]
    tw = [
        (
            FRAMES / "tw-family-surf-walk.png",
            ["POV: You finally booked", "the beach trip"],
            CLIP_SEC,
        ),
        (FRAMES / "tw-family-wave-play.png", None, CLIP_SEC),
        (FRAMES / "tw-family-chairs.png", None, CLIP_SEC),
        (FRAMES / "tw-family-run-shore.png", None, CLIP_SEC),
        (
            FRAMES / "tw-family-sunset.png",
            ["Twenty First", "Panama City Beach", "StayAtFlorida.com"],
            CLOSE_SEC,
        ),
    ]

    # Kids play / waves / family fun (more energetic cuts)
    wl_play = [
        (FRAMES / "wl-kids-sandcastle.png", ["This could be your morning"], CLIP_SEC),
        (FRAMES / "wl-waves-close.png", ["Miramar Beach, Florida"], CLIP_SEC),
        (FRAMES / "wl-kids-wave-splash.png", None, CLIP_SEC),
        (FRAMES / "wl-family-wave-chase.png", None, CLIP_SEC),
        (
            FRAMES / "wl-family-fun-sunset.png",
            ["Westlight", "Miramar Beach", "StayAtFlorida.com"],
            CLOSE_SEC,
        ),
    ]
    tw_play = [
        (
            FRAMES / "tw-kids-wave-hit.png",
            ["The moment vacation starts"],
            CLIP_SEC,
        ),
        (FRAMES / "tw-waves-shore.png", ["Panama City Beach"], CLIP_SEC),
        (FRAMES / "tw-kids-sand-dig.png", None, CLIP_SEC),
        (FRAMES / "tw-family-beach-fun.png", None, CLIP_SEC),
        (
            FRAMES / "tw-family-sunset-play.png",
            ["Twenty First", "Panama City Beach", "StayAtFlorida.com"],
            CLOSE_SEC,
        ),
    ]

    build_reel("reel-wl-family-beach", wl)
    build_reel("reel-tw-family-beach", tw)
    build_reel("reel-wl-kids-play", wl_play)
    build_reel("reel-tw-kids-play", tw_play)


if __name__ == "__main__":
    main()
