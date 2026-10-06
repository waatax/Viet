import re
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/all_10000_words.json', 'r', encoding='utf-8') as f:
    words = json.load(f)

print(f"Loaded {len(words)} words.")

anomalies = []
for w in words:
    zh = w.get('zh', '')
    if any(ch in zh for ch in ['。', '！', '？', '；']):
        anomalies.append((w['rank'], w['viet'], zh))
    elif re.search(r'[他她你我它]\w{3,}', zh):
        anomalies.append((w['rank'], w['viet'], zh))

print(f"Total anomalies across all 10,000 words: {len(anomalies)}")
for a in anomalies[:40]:
    print(f"Rank {a[0]:5d}: {a[1]:15s} -> {a[2]}")
