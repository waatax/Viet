import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/top1000_words.json', 'r', encoding='utf-8') as f:
    words = json.load(f)

anomalies = []
for w in words:
    zh = w.get('zh', '')
    # Check if zh contains full sentence markers like 。 or ，
    if any(ch in zh for ch in ['。', '，', '！', '？', '；']):
        anomalies.append((w['rank'], w['viet'], zh))
    # Or contains example sentence markers
    elif re.search(r'[他她你我它]\w{3,}', zh):
        anomalies.append((w['rank'], w['viet'], zh))

print(f"Total anomalies found: {len(anomalies)}")
for a in anomalies:
    print(f"Rank {a[0]:4d}: {a[1]:15s} -> {a[2]}")
