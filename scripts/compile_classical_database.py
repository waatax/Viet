# -*- coding: utf-8 -*-
"""
Aggregator script to compile all 7 volumes (49 rounds, 245 masterpieces) into src/data/classicalLiteratureData.js
"""

import json
import os

from data_vol1 import vol1_items
from data_vol2 import vol2_items
from data_vol3 import vol3_items
from data_vol4 import vol4_items
from data_vol5 import vol5_items
from data_vol6 import vol6_items
from data_vol7 import vol7_items

volumes_meta = [
    {
        "id": "v1", "rounds": [1, 2, 3, 4, 5, 6, 7],
        "titleZh": "第一卷：先秦諸子哲學與儒道源流", "titleVi": "Quyển 1: Triết Học Chư Tử Tiên Tần & Nguồn Cội Nho Đạo", "titleEn": "Volume 1: Pre-Qin Philosophers & Confucian-Taoist Origins", "icon": "📜",
        "descZh": "匯聚先秦儒、道、法、墨、兵家經典，奠定東亞文明核心義理與修齊治平之基石。"
    },
    {
        "id": "v2", "rounds": [8, 9, 10, 11, 12, 13, 14],
        "titleZh": "第二卷：兩漢魏晉史傳與風骨雄文", "titleVi": "Quyển 2: Sử Truyện Lưỡng Hán Nguỵ Tấn & Văn Phong Hùng Hồn", "titleEn": "Volume 2: Han-Wei-Jin Chronicles & Prose", "icon": "🏛️",
        "descZh": "太史公司馬遷無韻離騷、建安骨氣、東晉蘭亭隱逸辭賦與魏晉名士風采。"
    },
    {
        "id": "v3", "rounds": [15, 16, 17, 18, 19, 20, 21],
        "titleZh": "第三卷：唐宋八大家與盛世文章", "titleVi": "Quyển 3: Đường Tống Bát Đại Gia & Danh Tác Thời Hoàng Kim", "titleEn": "Volume 3: Tang-Song Eight Masters & Golden Age Essays", "icon": "🖋️",
        "descZh": "韓愈柳宗元古文運動、歐陽修平易清新、蘇軾赤壁曠達與范仲淹先天下之憂。"
    },
    {
        "id": "v4", "rounds": [22, 23, 24, 25, 26, 27, 28],
        "titleZh": "第四卷：唐詩宋詞元曲經典與聲律考釋", "titleVi": "Quyển 4: Đường Thi Tống Từ Nguyên Khúc & Âm Luật", "titleEn": "Volume 4: Tang Poetry, Song Lyrics, Yuan Opera & Poetic Meters", "icon": "🎵",
        "descZh": "李白豪放、杜甫沉鬱、王維禪意、東坡幼安壯詞、清照婉約與元曲情思之漢越聲律考校。"
    },
    {
        "id": "v5", "rounds": [29, 30, 31, 32, 33, 34, 35],
        "titleZh": "第五卷：明清散文、小品與古典小說名著精華", "titleVi": "Quyển 5: Tản Văn Tiểu Thuyết Minh Thanh", "titleEn": "Volume 5: Ming-Qing Prose, Vignettes & Classic Novels", "icon": "📖",
        "descZh": "四大名著（三國、水滸、西遊、紅樓）、聊齋儒林與晚明張岱晚遊六橋幽賞小品。"
    },
    {
        "id": "v6", "rounds": [36, 37, 38, 39, 40, 41, 42],
        "titleZh": "第六卷：中越交流歷代名篇與越南漢喃文獻瑰寶", "titleVi": "Quyển 6: Kiệt Tác Giao Lưu Hán Nôm Việt - Trung", "titleEn": "Volume 6: Sino-Vietnamese Masterpieces & Han-Nom Treasures", "icon": "🇻🇳",
        "descZh": "李常傑《南國山河》、陳興道《檄將士文》、阮廌《平吳大誥》、阮攸《金雲翹傳》與胡春香詩賦。"
    },
    {
        "id": "v7", "rounds": [43, 44, 45, 46, 47, 48, 49],
        "titleZh": "第七卷：近現代啟蒙思想、白話轉型與全站總結", "titleVi": "Quyển 7: Khai Sáng Cận Hiện Đại & Bạch Thoại", "titleEn": "Volume 7: Modern Enlightenment, Vernacular Prose & Master Integration", "icon": "🌟",
        "descZh": "梁啟超少年中國、林覺民與妻訣別、魯迅白話先驅、朱自清散文與中越格言哲思總覽。"
    }
]

all_raw_items = []
all_raw_items.extend(vol1_items)
all_raw_items.extend(vol2_items)
all_raw_items.extend(vol3_items)
all_raw_items.extend(vol4_items)
all_raw_items.extend(vol5_items)
all_raw_items.extend(vol6_items)
all_raw_items.extend(vol7_items)

print(f"Total raw items collected: {len(all_raw_items)}")

structured_works = []
for idx, item in enumerate(all_raw_items):
    if len(item) != 16:
        print(f"Mismatch at index {idx}: len={len(item)}, item id={item[2] if len(item)>2 else 'unknown'}, title={item[3] if len(item)>3 else 'unknown'}")
    r, vol, wid, t_zh, t_vi, t_en, a_zh, a_vi, d_zh, d_vi, orig, v_zh, v_en, ana, hv, q_list = item
    structured_works.append({
        "round": r,
        "volumeId": vol,
        "id": wid,
        "titleZh": t_zh,
        "titleVi": t_vi,
        "titleEn": t_en,
        "authorZh": a_zh,
        "authorVi": a_vi,
        "dynastyZh": d_zh,
        "dynastyVi": d_vi,
        "originalText": orig,
        "vernacularZh": v_zh,
        "vernacularEn": v_en,
        "analysis": ana,
        "hanVietNotes": hv,
        "famousQuotes": q_list
    })

# Check that every round 1..49 has exactly 5 works
rounds_count = {}
for w in structured_works:
    rounds_count[w["round"]] = rounds_count.get(w["round"], 0) + 1

print("\n========================================")
print("ROUND INTEGRITY AUDIT:")
for r in range(1, 50):
    cnt = rounds_count.get(r, 0)
    print(f"Round {r:02d}: {cnt} works {'[OK]' if cnt == 5 else '[FAIL!]'}")

print(f"Total Works: {len(structured_works)} / 245")
print("========================================\n")

if len(structured_works) != 245:
    print("ERROR: Total works does not equal 245!")
    exit(1)

# Write output file to src/data/classicalLiteratureData.js
out_path = os.path.abspath("src/data/classicalLiteratureData.js")
js_content = "// ==========================================================================\n"
js_content += "// 49-Round Classical & Vernacular Literature Calibration Database (245 Works)\n"
js_content += "// Generated automatically by compile_classical_database.py\n"
js_content += "// ==========================================================================\n\n"

js_content += "export const literatureVolumes = " + json.dumps(volumes_meta, ensure_ascii=False, indent=2) + ";\n\n"
js_content += "export const classicalLiteratureData = " + json.dumps(structured_works, ensure_ascii=False, indent=2) + ";\n"

with open(out_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully written {len(structured_works)} works to {out_path}")
