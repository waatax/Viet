import os
import sys
import json
import re
import hashlib
import asyncio
import subprocess
import argparse
import edge_tts

sys.stdout.reconfigure(encoding='utf-8')

VOICE_VI = "vi-VN-HoaiMyNeural"
VOICE_ZH = "zh-TW-HsiaoChenNeural"

CACHE_DIR = os.path.abspath("scripts/audio_cache")
BATCH_OUT_DIR = os.path.abspath("public/audio/batches")
WORDS_FILE = os.path.abspath("scripts/top1000_words.json")
MANIFEST_OUT = os.path.abspath("src/data/vocab1000Batches.js")

os.makedirs(CACHE_DIR, exist_ok=True)
os.makedirs(BATCH_OUT_DIR, exist_ok=True)

def get_hash(text: str) -> str:
    return hashlib.md5(text.strip().encode("utf-8")).hexdigest()[:12]

def clean_zh_spoken(zh: str, viet: str) -> str:
    if not zh:
        return ""
    # Special overrides for letters/abbreviations
    if viet == "i":
        return "字母哀"
    if viet == "v":
        return "字母微"
    if viet == "b":
        return "字母逼"
    if viet == "m":
        return "公尺，米"

    # Remove parenthesis content
    zh_clean = re.sub(r'\(.*?\)|（.*?）', '', zh)
    # Remove ellipsis or dots
    zh_clean = re.sub(r'\.{2,}|…', '', zh_clean)
    zh_clean = zh_clean.strip()

    # Split by delimiters
    parts = [p.strip() for p in re.split(r'[/,、;]', zh_clean) if p.strip()]
    if not parts:
        return zh.strip()

    # Clean punctuation
    cleaned_parts = []
    for p in parts:
        p_clean = re.sub(r'^[^\w\u4e00-\u9fa5]+|[^\w\u4e00-\u9fa5]+$', '', p).strip()
        if p_clean:
            cleaned_parts.append(p_clean)

    if not cleaned_parts:
        return zh.strip()

    # Take at most 2 concise parts
    spoken = "，".join(cleaned_parts[:2])
    return spoken

def make_silence(duration: float, out_path: str):
    if os.path.exists(out_path) and os.path.getsize(out_path) > 100:
        return
    cmd = [
        "ffmpeg", "-y", "-f", "lavfi",
        "-i", "anullsrc=r=24000:cl=mono",
        "-t", str(duration),
        "-c:a", "libmp3lame", "-b:a", "64k",
        out_path
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

sem = asyncio.Semaphore(12)

async def fetch_single_tts(text: str, voice: str, out_path: str):
    if os.path.exists(out_path) and os.path.getsize(out_path) > 300:
        return True
    async with sem:
        for attempt in range(4):
            try:
                comm = edge_tts.Communicate(text, voice)
                await comm.save(out_path)
                if os.path.exists(out_path) and os.path.getsize(out_path) > 300:
                    return True
                await asyncio.sleep(0.5)
            except Exception as e:
                if attempt == 3:
                    print(f"[FAIL TTS] voice={voice} text='{text}': {e}")
                    return False
                await asyncio.sleep(1.0 * (attempt + 1))
    return False

def get_audio_duration(file_path: str) -> float:
    try:
        cmd = [
            "ffprobe", "-v", "error", "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1", file_path
        ]
        out = subprocess.check_output(cmd, text=True).strip()
        return round(float(out), 1)
    except Exception:
        return 0.0

BATCH_THEMES = [
    "核心日常與高頻人稱",
    "生活基礎動詞與行動",
    "時間方位與空間概念",
    "社交問候與情感溝通",
    "飲食餐飲與生活消費",
    "居家作息與家庭親屬",
    "工作職場與日常協作",
    "交通出行與城市方位",
    "人際互動與性格情緒",
    "狀態程度與修飾描述",
    "數量貨幣與買賣商務",
    "身體健康與醫療保健",
    "休閒娛樂與旅行生活",
    "天氣環境與自然萬物",
    "學習教育與科技資訊",
    "溝通表達與邏輯論理",
    "社會百態與生活制度",
    "抽象思維與概念理解",
    "進階行動與精準修飾",
    "綜合應用與全能詞彙"
]

async def build_batch(batch_num: int, batch_words: list, sil_short: str, sil_mid: str, sil_word: str):
    print(f"\n>>> Processing Batch {batch_num:02d} (Rank {batch_words[0]['rank']} - {batch_words[-1]['rank']})...")

    # 1. Ensure all TTS clips are generated
    tts_tasks = []
    for w in batch_words:
        v_text = w['viet'].strip()
        v_hash = get_hash(v_text)
        w['vi_clip'] = os.path.join(CACHE_DIR, f"vi_{v_hash}.mp3")
        tts_tasks.append(fetch_single_tts(v_text, VOICE_VI, w['vi_clip']))

        z_text = clean_zh_spoken(w.get('zh', ''), v_text)
        w['zh_spoken'] = z_text
        z_hash = get_hash(z_text)
        w['zh_clip'] = os.path.join(CACHE_DIR, f"zh_{z_hash}.mp3")
        tts_tasks.append(fetch_single_tts(z_text, VOICE_ZH, w['zh_clip']))

    results = await asyncio.gather(*tts_tasks)
    if not all(results):
        print(f"[ERROR] Some TTS clips failed for batch {batch_num}")

    # 2. Build concat list
    concat_lines = []
    for w in batch_words:
        vi_p = w['vi_clip'].replace("\\", "/")
        zh_p = w['zh_clip'].replace("\\", "/")
        s_short = sil_short.replace("\\", "/")
        s_mid = sil_mid.replace("\\", "/")
        s_word = sil_word.replace("\\", "/")

        # Repetition 1
        concat_lines.append(f"file '{vi_p}'\n")
        concat_lines.append(f"file '{s_short}'\n")
        concat_lines.append(f"file '{zh_p}'\n")
        concat_lines.append(f"file '{s_mid}'\n")

        # Repetition 2
        concat_lines.append(f"file '{vi_p}'\n")
        concat_lines.append(f"file '{s_short}'\n")
        concat_lines.append(f"file '{zh_p}'\n")
        concat_lines.append(f"file '{s_mid}'\n")

        # Repetition 3
        concat_lines.append(f"file '{vi_p}'\n")
        concat_lines.append(f"file '{s_short}'\n")
        concat_lines.append(f"file '{zh_p}'\n")
        concat_lines.append(f"file '{s_word}'\n")

    list_path = os.path.join(CACHE_DIR, f"concat_batch_{batch_num:02d}.txt")
    with open(list_path, "w", encoding="utf-8") as f:
        f.writelines(concat_lines)

    # 3. Concatenate and encode to MP3
    out_mp3_name = f"vocab_1000_batch_{batch_num:02d}.mp3"
    out_mp3_path = os.path.join(BATCH_OUT_DIR, out_mp3_name)

    cmd = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", list_path,
        "-c:a", "libmp3lame", "-b:a", "64k",
        out_mp3_path
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    dur = get_audio_duration(out_mp3_path)
    size_mb = os.path.getsize(out_mp3_path) / (1024 * 1024)
    print(f"[DONE] Batch {batch_num:02d} -> {out_mp3_name} ({size_mb:.2f} MB, {dur:.1f}s / {dur/60:.1f}min)")
    return dur

def export_manifest(batches_meta: list):
    js_content = "/**\n * 基礎核心 1000 單字 20 大批次語音特訓庫 (每 50 字 · 越中循環三次)\n * Generated authentic neuro-TTS vocabulary ear-training database\n */\n\n"
    js_content += f"export const VOCAB_1000_BATCHES = {json.dumps(batches_meta, ensure_ascii=False, indent=2)};\n\n"
    js_content += "export const VOCAB_BATCH_STATS = {\n"
    js_content += f"  totalBatches: {len(batches_meta)},\n"
    js_content += f"  wordsPerBatch: 50,\n"
    js_content += f"  totalWords: {sum(b['wordCount'] for b in batches_meta)},\n"
    js_content += f"  totalDurationMinutes: {round(sum(b['duration'] for b in batches_meta) / 60, 1)}\n"
    js_content += "};\n"

    with open(MANIFEST_OUT, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"\nManifest exported to {MANIFEST_OUT}")

async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch", type=int, default=0, help="Specify single batch (1-20) to generate")
    args = parser.parse_args()

    with open(WORDS_FILE, "r", encoding="utf-8") as f:
        words = json.load(f)

    # 1. Silences
    sil_short = os.path.join(CACHE_DIR, "sil_0.35.mp3")
    sil_mid = os.path.join(CACHE_DIR, "sil_0.45.mp3")
    sil_word = os.path.join(CACHE_DIR, "sil_0.75.mp3")
    make_silence(0.35, sil_short)
    make_silence(0.45, sil_mid)
    make_silence(0.75, sil_word)

    batches_meta = []
    num_batches = 20

    for b in range(1, num_batches + 1):
        start_idx = (b - 1) * 50
        end_idx = b * 50
        batch_words = words[start_idx:end_idx]

        theme = BATCH_THEMES[b - 1] if b - 1 < len(BATCH_THEMES) else "核心詞彙"
        meta = {
            "batchId": b,
            "titleZh": f"第 {b:02d} 組 · {theme}",
            "titleEn": f"Batch {b:02d} · Foundation Vocabulary",
            "range": f"{start_idx + 1} - {end_idx}",
            "startRank": start_idx + 1,
            "endRank": end_idx,
            "wordCount": len(batch_words),
            "audioUrl": f"/audio/batches/vocab_1000_batch_{b:02d}.mp3",
            "fileName": f"vocab_1000_batch_{b:02d}.mp3",
            "words": [
                {
                    "id": w.get("id", f"freq_{w['rank']}"),
                    "rank": w["rank"],
                    "viet": w["viet"],
                    "zh": w["zh"],
                    "zhSpoken": clean_zh_spoken(w["zh"], w["viet"]),
                    "en": w.get("en", ""),
                    "pos": w.get("pos", ""),
                    "hanViet": w.get("hanViet", ""),
                    "category": w.get("category", ""),
                    "example": w.get("example", ""),
                    "exampleZh": w.get("exampleZh", "")
                }
                for w in batch_words
            ]
        }

        if args.batch == 0 or args.batch == b:
            dur = await build_batch(b, batch_words, sil_short, sil_mid, sil_word)
            meta["duration"] = dur
        else:
            # Check existing file duration
            mp3_path = os.path.join(BATCH_OUT_DIR, f"vocab_1000_batch_{b:02d}.mp3")
            meta["duration"] = get_audio_duration(mp3_path) if os.path.exists(mp3_path) else 450.0

        batches_meta.append(meta)

    export_manifest(batches_meta)
    print("\nAll operations finished successfully!")

if __name__ == "__main__":
    asyncio.run(main())
