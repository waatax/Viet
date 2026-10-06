import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/top1000_words.json', 'r', encoding='utf-8') as f:
    words = json.load(f)

def clean_zh_spoken(zh):
    if not zh:
        return ""
    # Remove anything inside parenthesis (both ascii and unicode)
    zh_clean = re.sub(r'\(.*?\)|（.*?）', '', zh)
    # Remove ellipsis or dots
    zh_clean = re.sub(r'\.{2,}|…', '', zh_clean)
    zh_clean = zh_clean.strip()
    
    # Split by / or , or 、 or ;
    parts = [p.strip() for p in re.split(r'[/,、;]', zh_clean) if p.strip()]
    if not parts:
        return zh.strip()
    # Filter out empty or pure punctuation
    parts = [re.sub(r'^[^\w\u4e00-\u9fa5]+|[^\w\u4e00-\u9fa5]+$', '', p).strip() for p in parts]
    parts = [p for p in parts if p]
    
    if not parts:
        return zh.strip()
        
    # Take at most 2 parts
    spoken = '，'.join(parts[:2])
    return spoken

problematic = []
long_items = []
for idx, w in enumerate(words):
    spk = clean_zh_spoken(w.get('zh', ''))
    if not spk:
        problematic.append((idx + 1, w['viet'], w.get('zh', '')))
    if len(spk) > 12:
        long_items.append((w['rank'], w['viet'], w.get('zh', ''), spk))

print(f"Total checked: {len(words)}")
print(f"Problematic empty spoken count: {len(problematic)}")
if problematic:
    print("Problematic items:", problematic)

print(f"Long items count (> 12 chars): {len(long_items)}")
for item in long_items[:10]:
    print(f"Rank {item[0]}: {item[1]} | raw: {item[2]} | spoken: {item[3]}")
