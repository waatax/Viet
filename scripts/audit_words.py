import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/top1000_words.json', 'r', encoding='utf-8') as f:
    words = json.load(f)

print(f"Total words: {len(words)}")
count = 0
for w in words:
    zh = w.get('zh', '')
    # Check if any slash section has >= 5 chars
    if any(len(p.strip()) >= 5 for p in zh.split('/')):
        count += 1
        print(f"Rank {w['rank']:4d}: {w['viet']:15s} [{w.get('pos','')}] zh: {zh} | en: {w.get('en','')}")

print(f"Total found: {count}")
