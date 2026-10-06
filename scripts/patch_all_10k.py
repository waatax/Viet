import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Comprehensive cleanup map for contaminated dictionary entries
CORRECTIONS = {
    1035: "支持 / 贊同 / 擁護",
    1050: "捎信 / 留言 / 叮囑",
    1087: "渴望 / 希望 / 期盼",
    1298: "收入 / 所得",
    1432: "載運 / 運送 / 運載",
    1473: "觀賞 / 注視 / 端詳",
    1576: "集體 / 團隊 / 全體",
    1737: "剛剛 / 剛好 / 方才",
    1775: "痛苦 / 劇痛 / 悲痛",
    1861: "考驗 / 挑戰",
    1949: "天啊 / 哎呀",
    2035: "拉 / 拖 / 拽",
    2088: "以前 / 之前 / 過往",
    2157: "資格 / 身分 / 操守",
    2279: "信任 / 可信 / 值得信賴",
    2447: "嚇唬 / 恐嚇 / 威脅",
    2488: "疤痕 / 傷疤",
    3390: "順便 / 借機",
    3395: "規律 / 法則",
    3522: "摸 / 觸碰 / 撫摸",
    3652: "痛快 / 喜歡 / 愉快",
    3684: "本領 / 本事 / 能力",
    3884: "低沉 / 沉重 / 沉著",
    3954: "應對 / 預付 / 應用",
    4475: "相比 / 匹敵 / 媲美",
    4522: "看 / 瞧 / 望",
    4536: "耳語 / 私語 / 低聲說",
    4663: "手段 / 技倆",
    4694: "點頭 / 允諾",
    4704: "履歷 / 經歷 / 背景",
    4727: "短暫 / 短促",
    5243: "捉弄 / 開玩笑 / 調侃",
    5402: "艱苦 / 辛勞 / 困苦",
    5803: "重提 / 重複 / 提醒",
    6289: "嚎叫 / 呼喊 / 大喊",
    6476: "總編輯 / 總編",
    6513: "籠統 / 大致 / 概括",
    6697: "親切 / 溫馨 / 敬愛",
    6900: "客套 / 客氣 / 虛禮",
    7031: "丟臉 / 難堪 / 出醜",
    7034: "熱忱 / 熱烈 / 投入",
    7265: "連累 / 牽連",
    7413: "佩服 / 嘆服 / 欽佩",
    7801: "典範 / 楷模 / 榜樣",
    8635: "彈跳 / 彈出 / 彈擊",
    8645: "辛苦 / 吃力 / 辛勞",
    8896: "退伍 / 退役",
    9270: "起初 / 開始 / 原先",
    9339: "全然 / 絕不 / 根本",
    9359: "散落 / 遍佈 / 到處都是",
    9584: "徘徊 / 環繞 / 打轉",
    9919: "沉默 / 安靜 / 靜默",
    9920: "疑惑 / 懷疑 / 猜疑"
}

with open('scripts/all_10000_words.json', 'r', encoding='utf-8') as f:
    words = json.load(f)

patched = 0
for w in words:
    r = w.get('rank')
    if r in CORRECTIONS:
        w['zh'] = CORRECTIONS[r]
        patched += 1

print(f"Patched {patched} words in all_10000_words.json.")

with open('scripts/all_10000_words.json', 'w', encoding='utf-8') as f:
    json.dump(words, f, ensure_ascii=False, indent=2)

# Also patch src/data/frequencyVocabularyData.js
file_path = 'src/data/frequencyVocabularyData.js'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

words_map = {w['id']: w for w in words if w.get('rank') in CORRECTIONS}

pattern = re.compile(r'\{\s*"id":\s*"(freq_\d+)",(.*?)\}', re.DOTALL)

def replace_block(match):
    freq_id = match.group(1)
    if freq_id in words_map:
        word = words_map[freq_id]
        block = match.group(0)
        new_zh = word['zh']
        block_new = re.sub(r'"zh":\s*".*?",', f'"zh": "{new_zh}",', block)
        return block_new
    return match.group(0)

new_content = pattern.sub(replace_block, content)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {file_path} successfully.")
