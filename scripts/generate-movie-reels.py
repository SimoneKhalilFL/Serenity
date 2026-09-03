#!/usr/bin/env python3
"""Build unique 9:16 StayAtFlorida short-movie Reels from unused lodging stills.

  python scripts/generate-movie-reels.py           # all batches
  python scripts/generate-movie-reels.py batch2    # 15 extra movies only
  python scripts/generate-movie-reels.py batch3    # 20 hook + beach movies
  python scripts/generate-movie-reels.py batch4    # leftover unused stills
"""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

_FAM = Path(__file__).with_name("generate-family-reels.py")
_spec = importlib.util.spec_from_file_location("family_reels", _FAM)
_fam = importlib.util.module_from_spec(_spec)
assert _spec.loader is not None
_spec.loader.exec_module(_fam)
CLIP_SEC = _fam.CLIP_SEC
CLOSE_SEC = _fam.CLOSE_SEC
FFMPEG = _fam.FFMPEG
build_reel = _fam.build_reel

ROOT = Path(__file__).resolve().parents[1]
LODGE = ROOT / "images" / "lodging"
HOOK_TW = ROOT / "docs" / "social" / "ads" / "tw-pcb-hooks"
HOOK_MS = ROOT / "docs" / "social" / "ads" / "ms-miramar-hooks"
BEACH = ROOT / "docs" / "social" / "media" / "clips" / "family-beach"
SR = ROOT / "docs" / "social" / "schedule-ready"
B3_CLIP = 3.6
B3_CLOSE = 4.0


def shot(name: str, lines: list[str] | None = None, seconds: float = CLIP_SEC):
    return (LODGE / name, lines, seconds)


def shot_at(folder: Path, name: str, lines: list[str] | None = None, seconds: float = CLIP_SEC):
    return (folder / name, lines, seconds)


def main() -> None:
    if not Path(FFMPEG).exists():
        raise SystemExit("ffmpeg not found")

    movies = {
        "reel-tw-movie-morning": [
            shot("tw-03-outdoor.jpg", ["This could be your morning"]),
            shot("tw-02-building.jpg", ["Panama City Beach"]),
            shot("tw-01-living.jpg"),
            shot("tw-living-04.png"),
            shot("tw-03-pool.jpg", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-view": [
            shot("tw-05-outdoor.jpg", ["This is why we came to Florida"]),
            shot("tw-04-outdoor.jpg", ["Panama City Beach"]),
            shot("tw-02-living.jpg"),
            shot("tw-living-05.png"),
            shot("tw-02-building.jpg", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-evening": [
            shot("tw-01-dining.jpg", ["The 7 PM plans"]),
            shot("tw-03-kitchen.jpg"),
            shot("tw-master-02.png"),
            shot("tw-guest-queen.png"),
            shot("tw-04-amenities.jpg", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-stay": [
            shot("tw-03-amenities.jpg", ["Come inside"]),
            shot("tw-01-bedroom-master.jpg"),
            shot("tw-bunk-01.png"),
            shot("tw-02-bedroom-two.jpg"),
            shot("tw-bunk-02.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-day": [
            shot("tw-04-pool.jpg", ["Beach. Pool. Balcony. Repeat."]),
            shot("tw-05-pool.jpg"),
            shot("tw-01-gym.jpg"),
            shot("tw-02-amenities.jpg"),
            shot("tw-02-gym.jpg", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-morning": [
            shot("ms-beach-view.jpg", ["This could be your morning"]),
            shot("MS-Balcony-Future-5.png", ["Miramar Beach, Florida"]),
            shot("MS-LivingRoom-4.png"),
            shot("MS_Coffee_cup.png"),
            shot("ms-09-living-room.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-view": [
            shot("ms-10-living-room.png", ["Keep the Gulf in the frame"]),
            shot("ms-11-living-room.png", ["Miramar Beach"]),
            shot("MS-DiningRoom-3.png"),
            shot("ms-01-beachy-decor.jpg"),
            shot("ms-beach-view.jpg", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-evening": [
            shot("MS_dinner_setup.png", ["Reserved for you"]),
            shot("MS-DiningRoom-4.png"),
            shot("MS-DiningRoom-5.png"),
            shot("ms-02-hottub.jpg"),
            shot("ms-10-living-room.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-stay": [
            shot("MS-MasterBedroomFuture-2.png", ["Sleep here. Wake up by the Gulf."]),
            shot("MS-MasterBedroomFuture-3.png"),
            shot("MS-MasterBedroomFuture-4.png"),
            shot("MS-GuestBedroom-3.png"),
            shot("MS-LivingRoom-4.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-day": [
            shot("ms-01-kitchen.jpg", ["What a beach condo should actually feel like"]),
            shot("MS-Kitchen-1.png"),
            shot("ms-05-kitchen.jpg"),
            shot("ms-02-gym.jpg"),
            shot("ms-01-beachy-decor.jpg", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
    }

    # Unique stills per movie — do not share a source file across the 10.
    movies["reel-tw-movie-view"][-1] = shot(
        "tw-01-kitchen.jpg", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC
    )
    movies["reel-wl-movie-view"][-1] = shot(
        "ms-06-kitchen.jpg", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC
    )
    movies["reel-wl-movie-evening"][-1] = shot(
        "ms-07-kitchen.jpg", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC
    )
    movies["reel-wl-movie-stay"][-1] = shot(
        "ms-08-kitchen.jpg", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC
    )
    movies["reel-wl-movie-day"][-1] = shot(
        "ms-02-kitchen.jpg", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC
    )

    batch2 = {
        "reel-tw-movie-balcony": [
            shot("tw-01-balcony.jpg", ["This could be your morning"]),
            shot("tw-02-balcony.jpg", ["Panama City Beach"]),
            shot("tw-balcony-coffee.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-gulf": [
            shot("tw-hero-view.png", ["This is why we came to Florida"]),
            shot("tw-01-beach-view.jpg"),
            shot("tw-02-beach-view.jpg", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-rooms": [
            shot("tw-living-01.png", ["Your living room for the week"]),
            shot("tw-living-02.png"),
            shot("tw-living-03.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-dinner": [
            shot("tw-dining-sunset.png", ["The 7 PM plans"]),
            shot("tw-balcony-dinner.png"),
            shot("tw-dining-01.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-pool": [
            shot("tw-01-outdoor.jpg", ["Beach. Pool. Repeat."]),
            shot("tw-01-pool.jpg"),
            shot("tw-02-pool.jpg", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-sleep": [
            shot("tw-01-bedroom-two.jpg", ["Sleep here. Wake up by the Gulf."]),
            shot("tw-01-bedroom-three.jpg"),
            shot("tw-02-bedroom-master.jpg", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-arrive": [
            shot("tw-01-building.jpg", ["How far is the beach?"]),
            shot("tw-02-outdoor.jpg"),
            shot("tw-01-amenities.jpg", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-kitchen": [
            shot("tw-02-kitchen.jpg", ["Vacation breakfast, Gulf on the side"]),
            shot("tw-02-dining.jpg"),
            shot("tw-master-01.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-gulf": [
            shot("MS-FullView-1.png", ["Keep the Gulf in the frame"]),
            shot("MS-FullView-2.png", ["Miramar Beach"]),
            shot("ms-06-gulf-balcony.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-sunset": [
            shot("ms-10-sunset-view.jpg", ["Tonight's entertainment"]),
            shot("MS_Dinner_sunset.png"),
            shot("MS-Balcony-1.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-coffee": [
            shot("MS_Balcony_Coffee_person.png", ["A much better morning routine"]),
            shot("MS_Balcony_coffee.png"),
            shot("MS-LivingRoom-7.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-living": [
            shot("ms-01-living-room.jpg", ["Your living room for the week"]),
            shot("ms-08-living-room.png"),
            shot("MS-LivingRoom-5.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-pool": [
            shot("ms-01-pool-outdoor.jpg", ["Beach. Pool. Balcony. Repeat."]),
            shot("ms-01-pool.jpg"),
            shot("ms-08-pool-indoor.jpg", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-sleep2": [
            shot("MS-MasterBedroomFuture-1.png", ["Sleep here. Wake up by the Gulf."]),
            shot("MS-GuestBedroom-1.png"),
            shot("MS-GuestBedroom-2.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-resort": [
            shot("ms-01-building-view.jpg", ["How far is the beach?"]),
            shot("ms-02-building-view.jpg"),
            shot("ms-01-outdoor-lake.jpg", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
    }

    batch3 = {
        "reel-tw-movie-hook-morning": [
            shot_at(HOOK_TW, "tw-this-could-be-your-morning.png", ["This could be your morning"], B3_CLIP),
            shot_at(BEACH, "tw-family-surf-walk.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-tw-movie-hook-wait": [
            shot_at(HOOK_TW, "tw-wait-for-the-view.png", ["Wait for the view…"], B3_CLIP),
            shot_at(BEACH, "tw-waves-shore.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-tw-movie-hook-pov": [
            shot_at(HOOK_TW, "tw-pov-finally-booked.png", ["POV: you finally booked"], B3_CLIP),
            shot_at(BEACH, "tw-family-run-shore.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-tw-movie-hook-evening": [
            shot_at(HOOK_TW, "tw-this-could-be-your-evening.png", ["This could be your evening"], B3_CLIP),
            shot_at(BEACH, "tw-family-sunset.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-tw-movie-hook-living": [
            shot_at(HOOK_TW, "tw-your-living-room-for-the-week.png", ["Your living room for the week"], B3_CLIP),
            shot_at(BEACH, "tw-family-chairs.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-tw-movie-hook-reasons": [
            shot_at(HOOK_TW, "tw-5-reasons-youll-want-to-stay.png", ["5 reasons you will want to stay"], B3_CLIP),
            shot_at(BEACH, "tw-family-beach-fun.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-tw-movie-hook-direct": [
            shot_at(HOOK_TW, "tw-book-direct-stay-better.png", ["Book direct. Stay better."], B3_CLIP),
            shot_at(BEACH, "tw-family-wave-play.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-tw-movie-hook-moment": [
            shot_at(HOOK_TW, "tw-the-moment-vacation-starts.png", ["The moment vacation starts"], B3_CLIP),
            shot_at(BEACH, "tw-kids-sand-dig.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-tw-movie-hook-proof": [
            shot_at(HOOK_TW, "tw-beach-view-proof-clean.jpg", ["This is why we came to Florida"], B3_CLIP),
            shot_at(BEACH, "tw-kids-wave-hit.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-tw-movie-hook-living-alt": [
            shot_at(HOOK_TW, "tw-your-living-room-for-the-week-alt.png", ["Come inside"], B3_CLIP),
            shot_at(BEACH, "tw-family-sunset-play.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-morning": [
            shot_at(HOOK_MS, "ms-this-could-be-your-morning.png", ["This could be your morning"], B3_CLIP),
            shot_at(BEACH, "wl-family-walk-morning.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-wait": [
            shot_at(HOOK_MS, "ms-wait-for-the-view.png", ["Wait for the view…"], B3_CLIP),
            shot_at(BEACH, "wl-waves-close.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-pov": [
            shot_at(HOOK_MS, "ms-pov-finally-booked-9x16.png", ["POV: you finally booked"], B3_CLIP),
            shot_at(BEACH, "wl-family-wave-chase.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-living": [
            shot_at(HOOK_MS, "ms-your-living-room-for-the-week.png", ["Your living room for the week"], B3_CLIP),
            shot_at(BEACH, "wl-family-sand-sit.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-reasons": [
            shot_at(HOOK_MS, "ms-5-reasons-youll-want-to-stay.png", ["5 reasons you will want to stay"], B3_CLIP),
            shot_at(BEACH, "wl-family-fun-sunset.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-direct": [
            shot_at(HOOK_MS, "ms-book-direct-both-beaches.png", ["Book direct. Stay better."], B3_CLIP),
            shot_at(BEACH, "wl-family-wide-shore.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-moment": [
            shot_at(HOOK_MS, "ms-the-moment-vacation-starts-9x16.png", ["The moment vacation starts"], B3_CLIP),
            shot_at(BEACH, "wl-kids-sandcastle.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-beachfront": [
            shot_at(HOOK_MS, "ms-beachfront-mornings-begin-here.png", ["Beachfront mornings begin here"], B3_CLIP),
            shot_at(BEACH, "wl-kids-wave-splash.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-fullview": [
            shot_at(HOOK_MS, "ms-fullview-westlight.png", ["Keep the Gulf in the frame"], B3_CLIP),
            shot_at(BEACH, "wl-family-water-play.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-hook-dinner": [
            shot("MS-DiningRoom-2.png", ["Reserved for you"], B3_CLIP),
            shot_at(BEACH, "wl-family-sunset.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
    }

    batch4 = {
        "reel-tw-movie-bath": [
            shot("tw-01-bath-master.jpg", ["A real home after the beach"]),
            shot("tw-01-bath-two.jpg"),
            shot("tw-bath-01.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-tw-movie-bath2": [
            shot("tw-01-bath-three.jpg", ["Come inside"]),
            shot("tw-02-bath-three.jpg"),
            shot_at(SR, "06-am-tw-sunset.png", ["Twenty First", "Panama City Beach", "StayAtFlorida.com"], CLOSE_SEC),
        ],
        "reel-wl-movie-bath": [
            shot("MS-MasterBath-1.png", ["A real home after the beach"], B3_CLIP),
            shot("MS_Guest_Bath.png", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
        "reel-wl-movie-extras": [
            shot("ms-01-laundry.jpg", ["Built for a real week"], B3_CLIP),
            shot("ms-02-pickleball.jpg", ["Westlight", "Miramar Beach", "StayAtFlorida.com"], B3_CLOSE),
        ],
    }

    only = set(sys.argv[1:])
    batches = [("batch1", movies), ("batch2", batch2), ("batch3", batch3), ("batch4", batch4)]
    if "batch4" in only:
        batches = [("batch4", batch4)]
    elif "batch3" in only:
        batches = [("batch3", batch3)]
    elif "batch2" in only:
        batches = [("batch2", batch2)]
    elif "batch1" in only:
        batches = [("batch1", movies)]

    seen: set[str] = set()
    priors = []
    if only & {"batch2", "batch3", "batch4"}:
        priors.append(movies)
    if only & {"batch3", "batch4"}:
        priors.append(batch2)
    if "batch4" in only:
        priors.append(batch3)
    for group in priors:
        for shots in group.values():
            for src, _, _ in shots:
                seen.add(src.name.lower())

    for _, group in batches:
        for name, shots in group.items():
            for src, _, _ in shots:
                key = src.name.lower()
                if key in seen:
                    raise SystemExit(f"{name} reuses still {src.name}")
                if not src.exists():
                    raise SystemExit(f"{name}: missing {src}")
                seen.add(key)
            build_reel(name, shots)


if __name__ == "__main__":
    main()
