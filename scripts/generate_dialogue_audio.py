"""
Generates the offline neural audio used by the dialogue playback engine.

1. Chinese (zh-TW) narration for every dialogue/vocab line   -> public/audio/zh/<hash>.mp3
   registered in src/data/audioManifestZh.json  (cleaned zh text -> "zh/<hash>.mp3")
2. Any Vietnamese dialogue line still missing from the main bank -> public/audio/<hash>.mp3
   registered in src/data/audioManifest.json (same md5[:12] scheme as generate_audio_neural.py)

Input: scripts/dialogue_texts.json (run `node scripts/extract_dialogue_texts.mjs` first)
Usage: python scripts/generate_dialogue_audio.py
"""
import os
import sys
import json
import hashlib
import asyncio
import edge_tts

sys.stdout.reconfigure(encoding="utf-8")

ZH_VOICE = "zh-TW-HsiaoChenNeural"
ZH_RATE = "+6%"  # translation is a gloss: keep it brisk so the Vietnamese stays the focus
VI_VOICE = "vi-VN-HoaiMyNeural"
MAX_CONCURRENCY = 8

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
AUDIO_DIR = os.path.join(ROOT, "public", "audio")
ZH_DIR = os.path.join(AUDIO_DIR, "zh")
VI_MANIFEST_PATH = os.path.join(ROOT, "src", "data", "audioManifest.json")
ZH_MANIFEST_PATH = os.path.join(ROOT, "src", "data", "audioManifestZh.json")
TEXTS_PATH = os.path.join(ROOT, "scripts", "dialogue_texts.json")

os.makedirs(ZH_DIR, exist_ok=True)

with open(TEXTS_PATH, "r", encoding="utf-8") as f:
    texts = json.load(f)
with open(VI_MANIFEST_PATH, "r", encoding="utf-8") as f:
    vi_manifest = json.load(f)
zh_manifest = {}
if os.path.exists(ZH_MANIFEST_PATH):
    with open(ZH_MANIFEST_PATH, "r", encoding="utf-8") as f:
        zh_manifest = json.load(f)

sem = asyncio.Semaphore(MAX_CONCURRENCY)
stats = {"generated": 0, "skipped": 0, "failed": 0}


def get_hash(text: str) -> str:
    return hashlib.md5(text.encode("utf-8")).hexdigest()[:12]


async def synth(text: str, voice: str, filepath: str, rate: str = "+0%") -> bool:
    if os.path.exists(filepath) and os.path.getsize(filepath) > 200:
        stats["skipped"] += 1
        return True
    async with sem:
        for attempt in range(3):
            try:
                await edge_tts.Communicate(text, voice, rate=rate).save(filepath)
                if os.path.exists(filepath) and os.path.getsize(filepath) > 200:
                    stats["generated"] += 1
                    done = stats["generated"] + stats["skipped"]
                    if done % 50 == 0:
                        print(f"  [{done}] {text[:30]}")
                    return True
            except Exception as e:  # network hiccups: retry with backoff
                if attempt == 2:
                    print(f"[FAIL] {text[:40]}: {e}")
            await asyncio.sleep(1.0 + attempt)
    stats["failed"] += 1
    return False


async def gen_zh(item):
    cleaned = item["cleaned"].strip()
    if not cleaned:
        return
    filename = f"{get_hash(cleaned)}.mp3"
    if await synth(cleaned, ZH_VOICE, os.path.join(ZH_DIR, filename), ZH_RATE):
        zh_manifest[cleaned] = f"zh/{filename}"


async def gen_vi(item):
    raw, cleaned = item["raw"].strip(), item["cleaned"].strip()
    if not cleaned:
        return
    speech = (item.get("speech") or cleaned).strip()
    filename = f"{get_hash(cleaned)}.mp3"
    if await synth(speech, VI_VOICE, os.path.join(AUDIO_DIR, filename)):
        for key in {raw, cleaned, raw.lower(), cleaned.lower()}:
            vi_manifest[key] = filename


async def main():
    zh_items, vi_items = texts.get("zh", []), texts.get("viMissing", [])
    print(f"Chinese narration: {len(zh_items)} | Vietnamese missing: {len(vi_items)}")
    await asyncio.gather(*(gen_zh(i) for i in zh_items), *(gen_vi(i) for i in vi_items))

    with open(ZH_MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(dict(sorted(zh_manifest.items())), f, ensure_ascii=False, indent=2)
    with open(VI_MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(vi_manifest, f, ensure_ascii=False, indent=2)
    print(f"Done: {stats} | zh manifest entries: {len(zh_manifest)}")


if __name__ == "__main__":
    asyncio.run(main())
