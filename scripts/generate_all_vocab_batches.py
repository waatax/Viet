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
WORDS_10K_FILE = os.path.abspath("scripts/all_10000_words.json")
CURATED_FILE = os.path.abspath("scripts/curated_words.json")
MANIFEST_OUT = os.path.abspath("src/data/vocabBatchesData.js")
MANIFEST_1000_OUT = os.path.abspath("src/data/vocab1000Batches.js")

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
        "-c:a", "libmp3lame", "-b:a", "48k",
        out_path
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

sem = asyncio.Semaphore(15)

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

TIER_THEMES = {
    "top1k": [
        "核心日常與高頻人稱", "生活基礎動詞與行動", "時間方位與空間概念", "社交問候與情感溝通",
        "飲食餐飲與生活消費", "居家作息與家庭親屬", "工作職場與日常協作", "交通出行與城市方位",
        "人際互動與性格情緒", "狀態程度與修飾描述", "數量貨幣與買賣商務", "身體健康與醫療保健",
        "休閒娛樂與旅行生活", "天氣環境與自然萬物", "學習教育與科技資訊", "溝通表達與邏輯論理",
        "社會百態與生活制度", "抽象思維與概念理解", "進階行動與精準修飾", "綜合應用與全能詞彙"
    ],
    "top3k": [
        "社交交際與生活會話", "租屋居住與家居生活", "辦公室日常與行政溝通", "電子郵件與商務書信",
        "會議討論與意見表達", "行程規劃與差旅交通", "餐飲烹飪與美食文化", "購物消費與商品退換",
        "銀行金融與支付轉帳", "求職面試與履歷簡介", "健康諮詢與門診醫療", "休閒娛樂與文藝活動",
        "體育運動與戶外健身", "地理景觀與城市街區", "天氣季節與氣候變化", "公共服務與郵政快遞",
        "校園學習與培訓進修", "電腦科技與數位生活", "社交媒體與網路溝通", "人際交往與情感表達",
        "性格特質與為人處世", "外貌特徵與穿著打扮", "日常家務與生活瑣事", "修繕維護與工具操作",
        "交通法規與行車安全", "旅行觀光與景點導覽", "飯店住宿與房客服務", "緊急求助與意外應對",
        "社區鄰里與公共秩序", "傳統節慶與民俗文化", "休閒興趣與嗜好交流", "音樂電影與大眾流行",
        "閱讀寫作與資訊吸收", "思考判斷與邏輯分析", "問題解決與應變策略", "談判協商與共識凝聚",
        "進度追蹤與專案協調", "客戶服務與需求確認", "市場趨勢與商情洞察", "生活總結與流利進階"
    ],
    "curated": [
        "問候禮貌與核心人稱", "餐飲美食與市集點餐", "購物殺價與實戰商務", "飯店交通與生活實用"
    ]
}

async def build_batch(batch_num: int, tier: str, file_prefix: str, batch_words: list, sil_short: str, sil_mid: str, sil_word: str, force: bool = False):
    out_mp3_name = f"{file_prefix}{batch_num:02d}.mp3"
    out_mp3_path = os.path.join(BATCH_OUT_DIR, out_mp3_name)

    if not force and os.path.exists(out_mp3_path) and os.path.getsize(out_mp3_path) > 500000:
        dur = get_audio_duration(out_mp3_path)
        print(f"[EXISTS] {tier} Batch {batch_num:02d} -> {out_mp3_name} ({dur:.1f}s)")
        return dur

    print(f"\n>>> Processing {tier} Batch {batch_num:02d} (Words: {len(batch_words)})...")

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
        print(f"[ERROR] Some TTS clips failed for {tier} batch {batch_num}")

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

    list_path = os.path.join(CACHE_DIR, f"concat_{tier}_{batch_num:02d}.txt")
    with open(list_path, "w", encoding="utf-8") as f:
        f.writelines(concat_lines)

    # 3. Concatenate and encode to MP3 (48kbps mono for optimal compact size & pristine voice)
    cmd = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", list_path,
        "-c:a", "libmp3lame", "-b:a", "48k",
        out_mp3_path
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    dur = get_audio_duration(out_mp3_path)
    size_mb = os.path.getsize(out_mp3_path) / (1024 * 1024)
    print(f"[DONE] {tier} Batch {batch_num:02d} -> {out_mp3_name} ({size_mb:.2f} MB, {dur:.1f}s / {dur/60:.1f}min)")
    return dur

def export_unified_manifest(tiers_data: dict):
    js_content = "/**\n * 越南語全頻字卡 批次語音特訓庫 (每 50 字 · 越中循環三次)\n * Unified Neuro-TTS Vocabulary Ear-Training Manifest\n */\n\n"
    
    js_content += "export const VOCAB_TIERS_CONFIG = [\n"
    js_content += "  { id: 'top1k', labelZh: '🌟 Top 1,000 (A1-A2 基礎生存)', labelEn: '🌟 Top 1,000 (A1-A2 Foundation)', batchesCount: 20, wordsCount: 1000, filePrefix: 'vocab_1000_batch_' },\n"
    js_content += "  { id: 'top3k', labelZh: '🚀 Top 3,000 (B1 生活社交流利)', labelEn: '🚀 Top 3,000 (B1 Intermediate)', batchesCount: 40, wordsCount: 2000, filePrefix: 'vocab_3000_batch_' },\n"
    js_content += "  { id: 'curated', labelZh: '🎯 經典情境必背 (生活主題)', labelEn: '🎯 Core Scenarios Deck', batchesCount: 4, wordsCount: 170, filePrefix: 'vocab_curated_batch_' },\n"
    js_content += "  { id: 'top5k', labelZh: '💼 Top 5,000 (B2 報章商務專業)', labelEn: '💼 Top 5,000 (B2 Upper-Intermediate)', batchesCount: 40, wordsCount: 2000, filePrefix: 'vocab_5000_batch_' },\n"
    js_content += "  { id: 'top10k', labelZh: '👑 Top 10,000 (C1-C2 頂級精通母語)', labelEn: '👑 Top 10,000 (C1-C2 Advanced)', batchesCount: 100, wordsCount: 5000, filePrefix: 'vocab_10000_batch_' }\n"
    js_content += "];\n\n"

    js_content += f"export const VOCAB_BATCHES_BY_TIER = {json.dumps(tiers_data, ensure_ascii=False, indent=2)};\n\n"

    # Also backwards-compatible VOCAB_1000_BATCHES
    top1k_batches = tiers_data.get('top1k', [])
    js_content += f"export const VOCAB_1000_BATCHES = VOCAB_BATCHES_BY_TIER['top1k'] || [];\n\n"

    total_words = sum(sum(b['wordCount'] for b in blist) for blist in tiers_data.values())
    total_dur = sum(sum(b['duration'] for b in blist) for blist in tiers_data.values())

    js_content += "export const VOCAB_ALL_BATCH_STATS = {\n"
    js_content += f"  totalTiers: {len(tiers_data)},\n"
    js_content += f"  totalBatches: {sum(len(blist) for blist in tiers_data.values())},\n"
    js_content += f"  totalWords: {total_words},\n"
    js_content += f"  totalDurationMinutes: {round(total_dur / 60, 1)}\n"
    js_content += "};\n"

    with open(MANIFEST_OUT, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"\nUnified manifest exported to {MANIFEST_OUT}")

    # Also update VOCAB_1000_BATCHES file for backwards compatibility
    js_1k = f"export const VOCAB_1000_BATCHES = {json.dumps(top1k_batches, ensure_ascii=False, indent=2)};\n"
    with open(MANIFEST_1000_OUT, "w", encoding="utf-8") as f:
        f.write(js_1k)
    print(f"Updated {MANIFEST_1000_OUT}")

async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--tier", type=str, default="curated_and_top3k", help="Tiers to process: top1k, top3k, curated, curated_and_top3k, all")
    parser.add_argument("--force", action="store_true", help="Force re-generation of mp3s")
    args = parser.parse_args()

    with open(WORDS_10K_FILE, "r", encoding="utf-8") as f:
        all_words = json.load(f)

    with open(CURATED_FILE, "r", encoding="utf-8") as f:
        curated_words = json.load(f)

    sil_short = os.path.join(CACHE_DIR, "sil_0.35.mp3")
    sil_mid = os.path.join(CACHE_DIR, "sil_0.45.mp3")
    sil_word = os.path.join(CACHE_DIR, "sil_0.75.mp3")
    make_silence(0.35, sil_short)
    make_silence(0.45, sil_mid)
    make_silence(0.75, sil_word)

    tiers_config = [
        {"id": "top1k", "name": "Top 1,000", "filePrefix": "vocab_1000_batch_", "words": [w for w in all_words if w.get('tier') == 'top1k']},
        {"id": "curated", "name": "經典情境必背", "filePrefix": "vocab_curated_batch_", "words": curated_words},
        {"id": "top3k", "name": "Top 3,000", "filePrefix": "vocab_3000_batch_", "words": [w for w in all_words if w.get('tier') == 'top3k']}
    ]

    tiers_data = {}

    for t_cfg in tiers_config:
        t_id = t_cfg["id"]
        t_words = t_cfg["words"]
        t_prefix = t_cfg["filePrefix"]
        themes = TIER_THEMES.get(t_id, [])

        num_batches = (len(t_words) + 49) // 50
        print(f"\n==========================================")
        print(f"Tier: {t_id} ({t_cfg['name']}) -> {len(t_words)} words, {num_batches} batches")
        print(f"==========================================")

        should_generate = (args.tier == "all" or args.tier == t_id or 
                           (args.tier == "curated_and_top3k" and t_id in ["curated", "top3k"]) or
                           (args.tier == "top1k" and t_id == "top1k"))

        batch_list = []
        for b in range(1, num_batches + 1):
            start_idx = (b - 1) * 50
            end_idx = min(len(t_words), b * 50)
            batch_words = t_words[start_idx:end_idx]

            theme = themes[b - 1] if b - 1 < len(themes) else f"第 {b:02d} 單元核心詞彙"
            start_rank = batch_words[0].get('rank', start_idx + 1)
            end_rank = batch_words[-1].get('rank', end_idx)

            meta = {
                "batchId": b,
                "tier": t_id,
                "titleZh": f"第 {b:02d} 組 · {theme}",
                "titleEn": f"Batch {b:02d} · {t_cfg['name']}",
                "range": f"{start_rank} - {end_rank}",
                "startRank": start_rank,
                "endRank": end_rank,
                "wordCount": len(batch_words),
                "audioUrl": f"/audio/batches/{t_prefix}{b:02d}.mp3",
                "fileName": f"{t_prefix}{b:02d}.mp3",
                "words": [
                    {
                        "id": w.get("id", f"{t_id}_{w.get('rank', idx + 1)}"),
                        "rank": w.get("rank", start_idx + idx + 1),
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
                    for idx, w in enumerate(batch_words)
                ]
            }

            if should_generate:
                dur = await build_batch(b, t_id, t_prefix, batch_words, sil_short, sil_mid, sil_word, force=args.force)
                meta["duration"] = dur
            else:
                mp3_path = os.path.join(BATCH_OUT_DIR, f"{t_prefix}{b:02d}.mp3")
                meta["duration"] = get_audio_duration(mp3_path) if os.path.exists(mp3_path) else 450.0

            batch_list.append(meta)

        tiers_data[t_id] = batch_list

    export_unified_manifest(tiers_data)
    print("\nBatch generation complete!")

if __name__ == "__main__":
    asyncio.run(main())
