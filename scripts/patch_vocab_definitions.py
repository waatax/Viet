import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

REPLACEMENTS = {
    "của": "的 / 屬於 / 財產",
    "anh": "哥哥 / 你 (對年輕男性)",
    "được": "得到 / 可以 / 能",
    "đã": "已經 / 曾",
    "các": "各位 / 諸位 / 這些",
    "trong": "在裡面 / 內部 / 當中",
    "những": "這些 / 一些",
    "rồi": "了 / 已經 / 接著",
    "lại": "又 / 再 / 回來",
    "nói": "說 / 講 / 說話",
    "còn": "還有 / 仍然 / 還在",
    "ngày": "天 / 日 / 日子",
    "giúp": "幫助 / 幫忙 / 協助",
    "bằng": "用 / 藉由 / 平等",
    "gọi": "叫 / 稱呼 / 打電話",
    "do": "由於 / 因為 / 由",
    "tay": "手 / 手臂",
    "mấy": "幾 / 幾個 / 多少",
    "giống": "像 / 類似 / 品種",
    "làm việc": "工作 / 辦公",
    "dưới": "在下面 / 以下 / 低於",
    "điểm": "點 / 分數 / 地點",
    "khá": "相當 / 頗為 / 較好",
    "thế nào": "怎麼樣 / 如何",
    "chờ": "等待 / 等候",
    "đội": "隊伍 / 戴(帽子)",
    "nghiên cứu": "研究 / 研討",
    "gửi": "寄送 / 寄 / 寄存",
    "khó khăn": "困難 / 艱難",
    "tuyệt": "絕妙 / 極佳 / 太棒了",
    "chất lượng": "品質 / 質量",
    "thành công": "成功 / 勝利",
    "gã": "傢伙 / 那傢伙",
    "đem": "帶來 / 拿來",
    "dòng": "河流 / 水流 / 行列",
    "quân": "軍隊 / 軍人",
    "giải quyết": "解決 / 處理解決",
    "m": "公尺 / 米",
    "chất": "物質 / 質量 / 堆積",
    "cảm giác": "感覺 / 感受",
    "cá nhân": "個人 / 私人",
    "nhu cầu": "需求 / 需要",
    "chết tiệt": "該死的 / 倒楣",
    "quà": "禮物 / 禮品",
    "suy nghĩ": "思考 / 想法 / 沉思",
    "đồng thời": "同時 / 與此同時",
    "tiếc": "遺憾 / 惋惜 / 捨不得",
    "i": "字母 I",
    "v": "字母 V",
    "sức": "力量 / 體力 / 精力",
    "phương pháp": "方法 / 方式",
    "môn": "學科 / 門 / 科目",
    "thông minh": "聰明 / 伶俐",
    "bao gồm": "包含 / 包括",
    "chi tiết": "細節 / 詳細",
    "hút": "吸 / 抽菸 / 吸引",
    "b": "字母 B",
    "tắm": "洗澡 / 沐浴"
}

with open('scripts/top1000_words.json', 'r', encoding='utf-8') as f:
    words = json.load(f)

updated_count = 0
for w in words:
    v = w.get('viet', '').strip()
    if v in REPLACEMENTS:
        w['zh'] = REPLACEMENTS[v]
        updated_count += 1

with open('scripts/top1000_words.json', 'w', encoding='utf-8') as f:
    json.dump(words, f, ensure_ascii=False, indent=2)

print(f"Updated {updated_count} words in scripts/top1000_words.json")
