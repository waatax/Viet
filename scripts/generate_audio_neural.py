import os
import sys
import json
import hashlib
import asyncio
import edge_tts

# Force utf-8 stdout
sys.stdout.reconfigure(encoding='utf-8')

VOICE = "vi-VN-HoaiMyNeural"
MAX_CONCURRENCY = 10

AUDIO_DIR = os.path.abspath("public/audio")
MANIFEST_PATH = os.path.abspath("src/data/audioManifest.json")
MISSING_LIST_PATH = os.path.abspath("scripts/missing_audio_list.json")

os.makedirs(AUDIO_DIR, exist_ok=True)

with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
    manifest = json.load(f)

with open(MISSING_LIST_PATH, "r", encoding="utf-8") as f:
    missing_list = json.load(f)

print(f"Loaded {len(missing_list)} missing items to process with voice {VOICE}.")

def get_hash(text: str) -> str:
    return hashlib.md5(text.encode("utf-8")).hexdigest()[:12]

sem = asyncio.Semaphore(MAX_CONCURRENCY)
generated_count = 0
skipped_count = 0
failed_count = 0

async def generate_single(item, idx, total):
    global generated_count, skipped_count, failed_count
    raw = item.get("raw", "").strip()
    cleaned = item.get("cleaned", "").strip()
    if not cleaned:
        return

    file_hash = get_hash(cleaned)
    filename = f"{file_hash}.mp3"
    filepath = os.path.join(AUDIO_DIR, filename)

    # Check if already exists and valid
    if os.path.exists(filepath) and os.path.getsize(filepath) > 200:
        skipped_count += 1
        # Register in manifest
        manifest[cleaned] = filename
        manifest[raw] = filename
        manifest[cleaned.lower()] = filename
        manifest[raw.lower()] = filename
        return

    async with sem:
        for attempt in range(3):
            try:
                comm = edge_tts.Communicate(cleaned, VOICE)
                await comm.save(filepath)
                if os.path.exists(filepath) and os.path.getsize(filepath) > 200:
                    generated_count += 1
                    manifest[cleaned] = filename
                    manifest[raw] = filename
                    manifest[cleaned.lower()] = filename
                    manifest[raw.lower()] = filename
                    if (generated_count + skipped_count) % 25 == 0 or idx == total:
                        print(f"[{generated_count + skipped_count}/{total}] Generated: {cleaned[:35]}")
                    return
                else:
                    await asyncio.sleep(0.5)
            except Exception as e:
                if attempt == 2:
                    print(f"\n[FAIL] idx {idx} '{cleaned[:30]}': {e}")
                    failed_count += 1
                await asyncio.sleep(1.0)

async def main():
    total = len(missing_list)
    tasks = [generate_single(item, idx + 1, total) for idx, item in enumerate(missing_list)]
    await asyncio.gather(*tasks)

    print("\n--- Audio Generation Complete ---")
    print(f"Newly Generated: {generated_count}")
    print(f"Already Existed: {skipped_count}")
    print(f"Failed:          {failed_count}")

    # Save updated manifest
    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print(f"Updated {MANIFEST_PATH} with {len(manifest)} keys.")

if __name__ == "__main__":
    asyncio.run(main())
