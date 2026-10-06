import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/top1000_words.json', 'r', encoding='utf-8') as f:
    top1k = json.load(f)

top1k_map = {w['id']: w for w in top1k}

file_path = 'src/data/frequencyVocabularyData.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We only need to replace "zh" fields for freq_1 to freq_1000 where needed
pattern = re.compile(r'\{\s*"id":\s*"(freq_\d+)",(.*?)\}', re.DOTALL)

def replace_block(match):
    freq_id = match.group(1)
    if freq_id in top1k_map:
        word = top1k_map[freq_id]
        block = match.group(0)
        # Replace the "zh": "..." line
        new_zh = word['zh']
        block_new = re.sub(r'"zh":\s*".*?",', f'"zh": "{new_zh}",', block)
        return block_new
    return match.group(0)

new_content = pattern.sub(replace_block, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {file_path} successfully.")
