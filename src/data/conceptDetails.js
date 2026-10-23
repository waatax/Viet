/**
 * Explicit Knowledge Point Details & Micro-Infographics Database (全量 180 知識點架構庫)
 * 每個知識點均配備：
 *  - concept: 知識點名稱 (與課綱嚴格對齊)
 *  - syntax: 核心語法槽位 / 語用公式
 *  - usage: 深度實戰規則剖析
 *  - trap: 華語學習者高頻避坑警示 (繁體台灣用語標準，杜絕簡體與大陸術語)
 *  - mnemonic: 記憶心法與口訣
 *  - infograph: 專屬微型向量資訊圖表結構 (type, title, metadata)
 */

export const conceptDetails = {
  "path": [
    {
      "concept": "信：語意正確",
      "syntax": "[S] + chưa + [V] (尚未) vs [S] + không + [V] (否定)",
      "usage": "chưa 標記尚未發生，保留後續發生的期待與禮貌緩衝空間；不可與 không（決絕否定、無意願）混淆。在問候「Ăn cơm chưa?」時，回答「Dạ chưa」合乎禮節。",
      "trap": "直覺將中文的「我不吃」套入「Tôi không ăn」，在長輩或初次見面社交場合顯得生硬突兀。",
      "mnemonic": "「chưa 留後步，không 斷退路；初學翻譯，信字為基。」",
      "infograph": {
        "type": "contrast",
        "title": "語意狀態分水嶺：chưa（留有餘地） vs không（絕對否定）",
        "columns": [
          {
            "label": "chưa (尚未)",
            "status": "保留進行時序",
            "example": "Tôi chưa ăn.",
            "note": "隱含：等等會吃，禮貌婉轉"
          },
          {
            "label": "không (不/沒有)",
            "status": "狀態完全封閉",
            "example": "Tôi không ăn.",
            "note": "隱含：斷然拒絕，語氣決絕"
          }
        ]
      }
    },
    {
      "concept": "達：自然溝通",
      "syntax": "[Câu] + lại + được không? (對話修復請求)",
      "usage": "在聽力受阻時主動發出修復請求，比假裝聽懂更可靠。使用「Anh nói chậm lại được không?」能在對話中爭取理解時間。",
      "trap": "聽不懂時盲目點頭說「Vâng/Dạ」，會導致後續溝通出現嚴重的資訊錯位。",
      "mnemonic": "「不懂立即求修復，chậm lại 比點頭更踏實。」",
      "infograph": {
        "type": "flow",
        "title": "對話中斷修復漏斗（4階梯度）",
        "steps": [
          {
            "title": "訊號中斷",
            "desc": "聽不清或語速過快"
          },
          {
            "title": "禮貌提示",
            "desc": "Dạ? / Xin lỗi?"
          },
          {
            "title": "具體請求",
            "desc": "Nói chậm lại được không?"
          },
          {
            "title": "雙向重述",
            "desc": "Ý anh là… phải không?"
          }
        ]
      }
    },
    {
      "concept": "雅：符合語境",
      "syntax": "Kính gửi + [Đối tượng] (正式公文公函首標)",
      "usage": "「Kính gửi quý công ty」為極正式商業書函開頭，日常社交或即時通訊軟體（如 Zalo）則應採用「Chào anh/chị」。區分語域可展現專業度與教養。",
      "trap": "在日常通訊時誤套公文開頭顯得過度疏離，在商務正式信件隨意用「Chào anh」則顯得輕佻。",
      "mnemonic": "「公函 Kính gửi 顯威儀，私聊 Chào anh 最親切。」",
      "infograph": {
        "type": "steps",
        "title": "語域光譜：從非正式通訊到國家級公文",
        "steps": [
          {
            "level": "日常口語",
            "tag": "Zalo / Nhậu",
            "ex": "Chào anh nhé / Alo"
          },
          {
            "level": "職場商務",
            "tag": "Email / 會議",
            "ex": "Chào anh Minh / Kính chào"
          },
          {
            "level": "法定公文",
            "tag": "合約 / 照會",
            "ex": "Kính gửi quý công ty"
          }
        ]
      }
    },
    {
      "concept": "先備能力",
      "syntax": "Xin lỗi, [S] + chưa + [V-tri nhận] (認知狀態聲明)",
      "usage": "在進行高難度語法或複雜話題前，先確認自己是否掌握基礎詞彙與即時反應能力，坦承「Xin lỗi, tôi chưa hiểu」是建立信任的起點。",
      "trap": "華語學習者常因面子問題害怕承認聽不懂，越過先備能力直接硬撐。",
      "mnemonic": "「先備不足莫逞強，承認未明路更長。」",
      "infograph": {
        "type": "slots",
        "title": "認知狀態申明語模塊槽位",
        "slots": [
          {
            "label": "致歉緩衝",
            "val": "Xin lỗi,"
          },
          {
            "label": "主體",
            "val": "tôi"
          },
          {
            "label": "時態未然",
            "val": "chưa"
          },
          {
            "label": "核心感知",
            "val": "hiểu"
          }
        ]
      }
    },
    {
      "concept": "可觀察的目標",
      "syntax": "[S] + có thể + [V] (Can-do 能力檢驗)",
      "usage": "學習目標不能停留在「學過」，必須是可客觀觀察的輸出行動，例如「Tôi có thể tự giới thiệu（我能自我介紹30秒）」。",
      "trap": "把背了多少單字當作能力指標，卻無法在真實情境中開口完成一句完整對話。",
      "mnemonic": "「學習目標要外顯，能說能用才算數。」",
      "infograph": {
        "type": "matrix",
        "title": "CEFR 可觀察能力矩陣（A1-B2）",
        "headers": [
          "階段",
          "輸入檢驗",
          "輸出檢驗指標"
        ],
        "rows": [
          [
            "A1 入門",
            "聽懂常用問候",
            "流利完成 30 秒個人基本介紹"
          ],
          [
            "A2 生存",
            "聽懂點餐與價格",
            "能完成市場議價與交通指引詢問"
          ],
          [
            "B1 職場",
            "理解工作指派",
            "能撰寫商務確認郵件並報告進度"
          ]
        ]
      }
    },
    {
      "concept": "翻譯取捨",
      "syntax": "[V] + A + [V] + B (四字成語比喻映射)",
      "usage": "文化成語如「Uống nước nhớ nguồn（飲水思源）」，翻譯時須衡量是直譯意象還是套用目標語文化對等詞。",
      "trap": "逐字死譯導致目標語讀者難以理解文化象徵，失去原作修辭張力。",
      "mnemonic": "「字面意象先看清，文化內涵求對等。」",
      "infograph": {
        "type": "contrast",
        "title": "成語翻譯雙軌映射策略",
        "columns": [
          {
            "label": "直譯意象層",
            "status": "保留原味",
            "example": "Uống nước nhớ nguồn",
            "note": "喝水時要記得水源頭"
          },
          {
            "label": "對等歸化層",
            "status": "文化共鳴",
            "example": "飲水思源",
            "note": "華語讀者瞬間理解核心感恩道德"
          }
        ]
      }
    },
    {
      "concept": "段落連貫",
      "syntax": "Trước hết…, sau đó…, cuối cùng… (時序連接詞骨架)",
      "usage": "使用邏輯連接詞將零碎短句串聯成長篇敘事，能顯著提升口語表達與書面論述的條理性。",
      "trap": "通篇只用「và（和）」或停頓句，缺乏語意進程與層次感。",
      "mnemonic": "「先說 Trước hết，再接 sau đó，收尾 cuối cùng 脈絡明。」",
      "infograph": {
        "type": "steps",
        "title": "敘事推進三大時序節點",
        "steps": [
          {
            "level": "起步",
            "tag": "Trước hết",
            "ex": "首先釐清核心事實"
          },
          {
            "level": "推進",
            "tag": "Sau đó",
            "ex": "接著探討具體行動"
          },
          {
            "level": "收斂",
            "tag": "Cuối cùng",
            "ex": "最後達成雙向共識"
          }
        ]
      }
    },
    {
      "concept": "語域切換",
      "syntax": "親密/口語: [Cụm] + nhé vs 正式/公文: Xin chân thành + [V]",
      "usage": "「Cảm ơn nhé!」適用於朋友同事間的日常微小致謝；「Xin chân thành cảm ơn」則用於典禮、正式報告或重要書面函件結尾。",
      "trap": "對長官或重要客戶隨口說「nhé」，顯得輕浮缺乏敬意。",
      "mnemonic": "「朋友隨和說 nhé，商務莊重 chân thành。」",
      "infograph": {
        "type": "contrast",
        "title": "社交親疏與語域選擇矩陣",
        "columns": [
          {
            "label": "熟稔親暱",
            "status": "縮減距離",
            "example": "Cảm ơn nhé!",
            "note": "平輩、同仁日常協助"
          },
          {
            "label": "莊重敬重",
            "status": "拉高位階",
            "example": "Xin chân thành cảm ơn.",
            "note": "重要客戶、演講收尾"
          }
        ]
      }
    },
    {
      "concept": "自我評估證據",
      "syntax": "[S] + đã + [V] + [Số lượng] (成果量化事實)",
      "usage": "學習反思必須基於具體證據，如「Tôi đã ghi âm và sửa ba lỗi（我已錄音並修正三處錯誤）」，而非憑感覺主觀判斷。",
      "trap": "「感覺自己學會了」是假性記憶陷阱，缺乏錄音音檔比對無法發現聲調缺陷。",
      "mnemonic": "「錄音比對找盲點，量化改錯進步顯。」",
      "infograph": {
        "type": "flow",
        "title": "刻意練習與自我評估迴圈",
        "steps": [
          {
            "title": "錄音產出",
            "desc": "盲錄 30 秒目標段落"
          },
          {
            "title": "雙軌比對",
            "desc": "核對原音聲調走向與停頓"
          },
          {
            "title": "鎖定三錯",
            "desc": "挑出最嚴重的 3 處發音或語序"
          },
          {
            "title": "即時重錄",
            "desc": "針對錯點重錄至完全吻合"
          }
        ]
      }
    }
  ],
  "alphabet": [
    {
      "concept": "字母與組合",
      "syntax": "Vowel: a, ă, â | Consonant: d, đ (符號決定音素)",
      "usage": "ă 和 â 是獨立字母，並非 a 加上聲調；d 發 /z/（北）或 /j/（南），而 đ 才是發 /d/ 喉內縮塞音。附加符號不可擅自省略。",
      "trap": "常誤以為 d 發英文 /d/，看到 đi 卻念成 zi；或將 ă 當成 a 的第三聲。",
      "mnemonic": "「帶槓 đ 才是 d，無槓 d 念 z 或 j；角帽是字母，不是加聲調。」",
      "infograph": {
        "type": "contrast",
        "title": "易混字母音素本質對照",
        "columns": [
          {
            "label": "d (無槓)",
            "status": "濁擦音 /z/ 或 /j/",
            "example": "da (皮膚)",
            "note": "北發 z，南發 j，絕非英文 d"
          },
          {
            "label": "đ (帶橫槓)",
            "status": "內縮塞音 /ɗ/",
            "example": "đi (去)",
            "note": "舌尖緊貼齒齦，有力爆破"
          }
        ]
      }
    },
    {
      "concept": "音節拆解",
      "syntax": "[Âm đầu 聲母] + [Vần 韻母 (Âm đệm + Âm chính + Âm cuối)] + [Thanh 聲調]",
      "usage": "越語拼讀核心為：聲母 + 韻母，最後加上聲調。例如 b + an = ban, ban + sắc = bán。不要用英文字母名字硬拼。",
      "trap": "把 bán 念成 b-a-n-s-a-c-k，未能將韻母作為一個發音整體收尾。",
      "mnemonic": "「先合韻母再加頭，聲調最後戴上頭。」",
      "infograph": {
        "type": "slots",
        "title": "越語音節五位階結構拆解",
        "slots": [
          {
            "label": "聲母 (C1)",
            "val": "b"
          },
          {
            "label": "介音 (w)",
            "val": "ø"
          },
          {
            "label": "核心母音 (V)",
            "val": "a"
          },
          {
            "label": "韻尾 (C2)",
            "val": "n"
          },
          {
            "label": "聲調 (T)",
            "val": "sắc (／)"
          }
        ]
      }
    },
    {
      "concept": "塞音韻尾",
      "syntax": "Vần + [-c / -t / -p / -ch] ➔ 唯閉不破 (Unreleased stops)",
      "usage": "-c, -t, -p 為無聲塞音韻尾，發音時舌位到達定位即收住氣流，不釋放爆破，絕不額外發出尾母音；僅能搭配銳聲（sắc）或重聲（nặng）。",
      "trap": "在 học 後面多念一個 /kə/，把 một 念成 /mo-tə/，破壞音節完整性。",
      "mnemonic": "「塞音韻尾及時收，只閉不破不加音。」",
      "infograph": {
        "type": "steps",
        "title": "入聲塞音三部位閉氣定位",
        "steps": [
          {
            "level": "雙唇閉合",
            "tag": "-p",
            "ex": "đẹp (美) ➔ 雙唇緊閉不放氣"
          },
          {
            "level": "舌尖抵齒",
            "tag": "-t",
            "ex": "một (一) ➔ 舌尖抵上齒齦停住"
          },
          {
            "level": "舌根抵顎",
            "tag": "-c",
            "ex": "học (學) ➔ 舌根緊貼軟顎閉氣"
          }
        ]
      }
    },
    {
      "concept": "母音品質",
      "syntax": "u [u] (圓唇後高) vs ư [ɨ] (不圓唇央高)",
      "usage": "u 發音時雙唇向前突出搓圓；ư 發音時嘴角向兩側拉開扁唇，舌位在中後方。兩者音質截然不同，詞義完全相異（如 tu 修行 vs tư 私人）。",
      "trap": "將 ư 念成國語的「ㄩ」或「ㄨ」，忽視扁唇特徵導致口音混淆。",
      "mnemonic": "「u 唇圓圓突向前，ư 嘴角拉扁平平念。」",
      "infograph": {
        "type": "contrast",
        "title": "高母音對立：圓唇 u vs 扁唇 ư",
        "columns": [
          {
            "label": "u (圓唇後母音)",
            "status": "雙唇緊縮呈圓孔",
            "example": "tu (修行)",
            "note": "舌後縮，唇形圓突出"
          },
          {
            "label": "ư (扁唇央高母音)",
            "status": "嘴角展開露齒",
            "example": "tư (私人/第四)",
            "note": "舌位高，唇形絕不圓"
          }
        ]
      }
    },
    {
      "concept": "複合聲母",
      "syntax": "nh- [ɲ] (硬顎鼻音) vs ng- [ŋ] (軟顎鼻音)",
      "usage": "nh- 發音類似台語「耳」或日語「にゃ」，舌面緊貼硬顎；ng- 則是舌根頂住軟顎發鼻音。兩者在詞首時華語母語者極易混淆。",
      "trap": "將 nhà（家）念成 ngà（象牙），或將 người 念成 nhười。",
      "mnemonic": "「舌面貼硬顎出 nh，舌根頂軟顎發 ng。」",
      "infograph": {
        "type": "contrast",
        "title": "鼻音聲母發音部位解剖",
        "columns": [
          {
            "label": "nh- (硬顎鼻音 /ɲ/)",
            "status": "舌面緊貼硬顎",
            "example": "nhà (房子)",
            "note": "氣流從鼻腔出，音質清脆"
          },
          {
            "label": "ng- (軟顎鼻音 /ŋ/)",
            "status": "舌根抵住軟顎",
            "example": "ngà (象牙)",
            "note": "舌根深部發音，音質厚實"
          }
        ]
      }
    },
    {
      "concept": "符號分層",
      "syntax": "Base: a ➔ Letter diacritic: â ➔ Tone diacritic: ấ",
      "usage": "越語符號分為「字母識別標記」（如 â, ă, ư, ơ, đ）與「聲調標記」（如 sắc, huyền, hỏi, ngã, nặng）。兩者在書寫與認知上屬於不同層級。",
      "trap": "把 â 的戴帽誤認成聲調符號，導致調符標錯位置或遺漏。",
      "mnemonic": "「字母標記先成型，聲調頂上再加冠。」",
      "infograph": {
        "type": "steps",
        "title": "越語拼音字母三層結構",
        "steps": [
          {
            "level": "第1層：基礎拉丁字符",
            "tag": "Base",
            "ex": "a"
          },
          {
            "level": "第2層：字母本體變音符",
            "tag": "Letter Diacritic",
            "ex": "a + ^ = â"
          },
          {
            "level": "第3層：超音段聲調符號",
            "tag": "Tone Diacritic",
            "ex": "â + sắc = ấ"
          }
        ]
      }
    },
    {
      "concept": "雙母音 ia／iê",
      "syntax": "無韻尾時寫 ia/ya；有韻尾時寫 iê/yê",
      "usage": "雙母音 /iə/ 在開音節（無韻尾）寫為 ia（如 mía 甘蔗）；當後方帶有韻尾時，必須改寫為 iê（如 miếng 一塊）。這是標準正字法規則。",
      "trap": "拼寫有韻尾時仍寫成 *miang 或 *míac，違反書寫法正字規範。",
      "mnemonic": "「無尾用 ia 自由飛，有尾關門換 iê。」",
      "infograph": {
        "type": "contrast",
        "title": "雙母音 /iə/ 正字法拼寫分配規律",
        "columns": [
          {
            "label": "開音節（無韻尾）",
            "status": "寫成 ia / ya",
            "example": "mía (甘蔗), tia (射線)",
            "note": "音節結尾無輔音韻尾"
          },
          {
            "label": "閉音節（帶韻尾）",
            "status": "寫成 iê / yê",
            "example": "miếng (塊), tiền (錢)",
            "note": "後接 -ng, -n, -t, -c 等韻尾"
          }
        ]
      }
    },
    {
      "concept": "k／c／qu 的分工",
      "syntax": "k + [i, e, ê] | c + [a, o, ô, u, ư] | qu + [母音]",
      "usage": "輔音 /k/ 在前母音 i, e, ê 前固定寫為 k；在央後母音 a, o, ô, u, ư 前固定寫為 c；與圓唇介音組合時寫為 qu。",
      "trap": "寫出 *ce 或 *kem 寫成 *cem，這是越語最典型的初學者拼字違規。",
      "mnemonic": "「k 遇 i e ê，c 接 a o u；圓唇有伴寫成 qu。」",
      "infograph": {
        "type": "matrix",
        "title": "音素 /k/ 拼寫正字法分工法則",
        "headers": [
          "字母",
          "接續母音",
          "範例"
        ],
        "rows": [
          [
            "k",
            "前母音 (i, e, ê)",
            "kem (冰淇淋), ký (公斤), kẹo (糖果)"
          ],
          [
            "c",
            "央後母音 (a, o, ô, u, ư)",
            "cá (魚), cô (姑姑), cơm (飯)"
          ],
          [
            "qu",
            "圓唇介音 + 母音",
            "quà (禮物), quê (故鄉), quá (太)"
          ]
        ]
      }
    },
    {
      "concept": "g／gh、ng／ngh",
      "syntax": "gh/ngh + [i, e, ê] | g/ng + [a, o, ô, u, ư]",
      "usage": "與 k/c 類似，軟顎音 g 與 ng 在前母音 i, e, ê 前必須加上 h 寫成 gh 與 ngh；在其他母音前則維持 g 與 ng。",
      "trap": "將 ghế（椅子）拼成 *gé，或 nghe（聽）拼成 *nge。",
      "mnemonic": "「見到 i e ê，g 和 ng 趕緊加個 h。」",
      "infograph": {
        "type": "contrast",
        "title": "前母音拼寫正字法 h-規則",
        "columns": [
          {
            "label": "遇 i, e, ê (需加 h)",
            "status": "拼寫加 h 保持軟顎",
            "example": "ghế (椅子), nghe (聽)",
            "note": "避免發音混淆的正字設計"
          },
          {
            "label": "遇 a, o, ô, u, ư",
            "status": "標準無 h 形式",
            "example": "ga (車站), ngủ (睡覺)",
            "note": "常規軟顎聲母書寫法"
          }
        ]
      }
    }
  ],
  "tonegame": [
    {
      "concept": "同韻對比",
      "syntax": "Ngang (33) vs Sắc (35/45) vs Huyền (21)",
      "usage": "固定聲母 m 與核心韻母 a，僅切換聲調：ma（平聲，鬼）、má（銳聲，母親/腮幫）、mà（玄聲，但是）。音高與聲質直接決定詞義。",
      "trap": "將平聲念成中文四聲的降調，或把玄聲當成中文二聲上揚。",
      "mnemonic": "「平聲拉平 33 音，玄聲平緩沉 21，銳聲有力往上衝。」",
      "infograph": {
        "type": "contour",
        "title": "基礎三調五度音高走勢對比",
        "contours": [
          {
            "name": "Ngang (平)",
            "pts": [
              3,
              3,
              3
            ],
            "ex": "ma (33)"
          },
          {
            "name": "Huyền (玄)",
            "pts": [
              2.5,
              2,
              1.5
            ],
            "ex": "mà (21)"
          },
          {
            "name": "Sắc (銳)",
            "pts": [
              3,
              4,
              5
            ],
            "ex": "má (35)"
          }
        ]
      }
    },
    {
      "concept": "問聲與跌聲",
      "syntax": "Hỏi (312 降升) vs Ngã (35 聲門微閉破裂升)",
      "usage": "問聲（hỏi）音高先微降後緩升；跌聲（ngã）音高中間帶有聲門閉鎖停頓（Glottal stop），隨後向上爆發。南部兩調合流，但北部區分鮮明。",
      "trap": "在南部口音合流環境下學習者忽視正字法，導致 mả（墳墓）與 mã（代碼/馬）書寫混淆。",
      "mnemonic": "「問聲低頭再探腦，跌聲喉頭卡一下。」",
      "infograph": {
        "type": "contrast",
        "title": "問聲 (Hỏi) 與跌聲 (Ngã) 聲學本質",
        "columns": [
          {
            "label": "Thanh Hỏi (問聲 ?)",
            "status": "低凹降升調 /312/",
            "example": "mả (墳墓)",
            "note": "平滑曲線，無聲門停頓"
          },
          {
            "label": "Thanh Ngã (跌聲 ~)",
            "status": "聲門中斷緊喉升調 /3ʔ5/",
            "example": "mã (代碼/馬)",
            "note": "喉頭緊閉中斷後飆高"
          }
        ]
      }
    },
    {
      "concept": "重聲",
      "syntax": "Nặng (21ʔ / 21 低降急促喉塞)",
      "usage": "重聲（nặng）通常為低降短促音，音節尾端喉部急促收緊，不可拖長；若為開音節常伴隨喉塞音收尾。",
      "trap": "把重聲當成國語第四聲長音用力念，導致音長過長且喉塞特徵消失。",
      "mnemonic": "「重聲沈底急剎車，點地即收不拖音。」",
      "infograph": {
        "type": "contour",
        "title": "重聲 (Thanh Nặng) 極短急促低落軌跡",
        "contours": [
          {
            "name": "Nặng (重)",
            "pts": [
              2,
              1
            ],
            "ex": "mạ (秧苗, 21ʔ)"
          }
        ]
      }
    },
    {
      "concept": "六調同韻",
      "syntax": "ma - mà - má - mả - mã - mạ (完整六調音高全貌)",
      "usage": "同一音節貫穿六聲調是檢驗聲學控制的黃金標準：平（33）、玄（21）、銳（35）、問（312）、跌（3ʔ5）、重（21ʔ）。",
      "trap": "連續發音時各調音域相互沾黏，導致平玄不分、問跌混同。",
      "mnemonic": "「平平高揚低降凹，折斷急墜六調全。」",
      "infograph": {
        "type": "matrix",
        "title": "六聲調符號、名稱與五度調值矩陣",
        "headers": [
          "聲調名稱",
          "調符",
          "五度走向",
          "聲質特徵",
          "範例"
        ],
        "rows": [
          [
            "Ngang (平)",
            "無",
            "33 平中",
            "鬆弛常態",
            "ma (鬼)"
          ],
          [
            "Huyền (玄)",
            "ˋ",
            "21 低降",
            "氣聲舒緩",
            "mà (但是)"
          ],
          [
            "Sắc (銳)",
            "ˊ",
            "35 高升",
            "張力漸強",
            "má (母親/頰)"
          ],
          [
            "Hỏi (問)",
            "ˀ",
            "312 降升",
            "低凹迴旋",
            "mả (墳墓)"
          ],
          [
            "Ngã (跌)",
            "˜",
            "3ʔ5 緊升",
            "聲門突斷",
            "mã (代碼)"
          ],
          [
            "Nặng (重)",
            "˙",
            "21ʔ 低促",
            "喉頭緊扼",
            "mạ (秧苗)"
          ]
        ]
      }
    },
    {
      "concept": "塞尾限制",
      "syntax": "[-c, -t, -p, -ch] 只能搭配 Sắc (銳) 或 Nặng (重)",
      "usage": "入聲韻尾（塞音）由於聲帶無法持續震動，在語音學上天然無法承載平、玄、問、跌四種舒聲調，只能配銳聲（mát）或重聲（mạt）。",
      "trap": "試圖在帶有 -t, -c, -p 韻尾的字上標注 huyền 或 hỏi，這在越語正字法中完全不存在。",
      "mnemonic": "「塞音韻尾路徑窄，只配銳調與重調。」",
      "infograph": {
        "type": "contrast",
        "title": "入聲韻尾聲調二元鎖定律",
        "columns": [
          {
            "label": "Sắc (高入聲調)",
            "status": "高促收束",
            "example": "mát (涼爽)",
            "note": "入聲高調，短促明亮"
          },
          {
            "label": "Nặng (低入聲調)",
            "status": "低促喉塞",
            "example": "mạt (末屑)",
            "note": "入聲低調，頓挫沈底"
          }
        ]
      }
    },
    {
      "concept": "聲調在語流中",
      "syntax": "Tone co-articulation: 連續音節聲調微調適配",
      "usage": "「Má mua cá（媽媽買魚）」全句均為高音域（銳調+平調），發音時應維持胸腔與喉部共鳴連續性，避免每字切斷重啟。",
      "trap": "字與字之間過度斷開獨立發音，導致語流極度機械僵硬。",
      "mnemonic": "「同高音域平滑連，字字相扣如流水。」",
      "infograph": {
        "type": "slots",
        "title": "同高音域連續語流波形串聯",
        "slots": [
          {
            "label": "Má (Sắc)",
            "val": "35 ↗"
          },
          {
            "label": "mua (Ngang)",
            "val": "33 ➔"
          },
          {
            "label": "cá (Sắc)",
            "val": "35 ↗"
          }
        ]
      }
    },
    {
      "concept": "換調即換詞",
      "syntax": "bàn (桌子) vs bán (賣) vs bạn (朋友)",
      "usage": "聲調在越語具備絕對辨義功能，換調即換完全不同的詞彙。bàn 是桌子，bán 是販售，bạn 是朋友。",
      "trap": "把「Tôi bán bàn」念成「Tôi bàn bạn」，語意直接變成「我跟朋友商討」，造成嚴重商務誤會。",
      "mnemonic": "「一調之差千里遙，桌賣朋友要分曉。」",
      "infograph": {
        "type": "contrast",
        "title": "最小對立對 (Minimal Triplet) 詞義突變",
        "columns": [
          {
            "label": "bàn (玄聲)",
            "status": "名詞：桌子 / 動詞：商量",
            "example": "cái bàn",
            "note": "平緩沉調"
          },
          {
            "label": "bán (銳聲)",
            "status": "動詞：販售",
            "example": "bán hàng",
            "note": "昂首高升"
          },
          {
            "label": "bạn (重聲)",
            "status": "名詞：朋友 / 夥伴",
            "example": "người bạn",
            "note": "急促頓底"
          }
        ]
      }
    },
    {
      "concept": "語流中的聲調",
      "syntax": "Interrogative pitch contour: Bạn bán bàn à?",
      "usage": "雖然全句有不同聲調，但句末疑問詞「à」帶有整句疑問語調的疊加，聲調不能因為整句上揚而破壞各別字的固有調值。",
      "trap": "模仿英語句末升調將 bàn 升成 bán，破壞了原有詞義。",
      "mnemonic": "「字調管字義，句調管語氣；字調不動如山，末尾語氣疊加。」",
      "infograph": {
        "type": "slots",
        "title": "語流字調與句末疑問語調疊加結構",
        "slots": [
          {
            "label": "主詞",
            "val": "Bạn (Nặng)"
          },
          {
            "label": "動詞",
            "val": "bán (Sắc)"
          },
          {
            "label": "受詞",
            "val": "bàn (Huyền)"
          },
          {
            "label": "語氣詞",
            "val": "à? (Huyền+疑問)"
          }
        ]
      }
    },
    {
      "concept": "句末語氣詞",
      "syntax": "[Câu] + nhé (提議/囑咐) vs [Câu] + à? (確認/反問)",
      "usage": "句末助詞賦予整句豐富的情感色彩。「Đi nhé」表示友善相約或叮嚀（走囉/去喔）；「Đi à?」則表示意外或確認（你要走喔？）。",
      "trap": "誤用「à」對長官提議，聽起來像是不敬的質問。",
      "mnemonic": "「nhé 是溫馨相約，à 是探詢查實。」",
      "infograph": {
        "type": "contrast",
        "title": "句末語氣詞情緒與功能光譜",
        "columns": [
          {
            "label": "nhé (輕快促成)",
            "status": "提議、親密催促",
            "example": "Đi nhé.",
            "note": "相當於「走囉！」「好嗎？」"
          },
          {
            "label": "à? (探詢查問)",
            "status": "疑問、意外確認",
            "example": "Đi à?",
            "note": "相當於「真要去嗎？」「喔？」"
          }
        ]
      }
    }
  ],
  "pronoun": [
    {
      "concept": "年長男性／女性",
      "syntax": "anh (兄輩) / chị (姊輩) ↔ em (弟妹晚輩)",
      "usage": "越語代名詞具有成對鏡像特性。對方是比自己年長的男性稱 anh、自稱 em；對方是年長女性稱 chị、自稱 em。",
      "trap": "把 anh 當作第三人稱專用，當面說話時仍直呼名字或用生硬的 tôi。",
      "mnemonic": "「見男長者稱 anh，見女長者稱 chị，自謙稱 em 禮數全。」",
      "infograph": {
        "type": "tree",
        "title": "跨輩份社交成對稱謂映射樹",
        "branches": [
          {
            "root": "對象：年長男性 (Anh)",
            "leaf": "自身回應自稱：Em"
          },
          {
            "root": "對象：年長女性 (Chị)",
            "leaf": "自身回應自稱：Em"
          },
          {
            "root": "對象：年幼男女 (Em)",
            "leaf": "自身對應自稱：Anh / Chị"
          }
        ]
      }
    },
    {
      "concept": "中性自稱",
      "syntax": "Tôi + [V/Adj] (平等中性或正式自稱)",
      "usage": "tôi 原意為「臣僕」，現代用於公共場合、初次見面、演講報告或外國人自我介紹，維持客觀平等距離，不涉入親疏年齡。",
      "trap": "在親密家庭或好友聚會通篇用 tôi，會給人冷漠刻板、拉開距離之感。",
      "mnemonic": "「公開場合用 tôi 不出錯，熟絡之後隨緣換稱謂。」",
      "infograph": {
        "type": "contrast",
        "title": "tôi（中性社交） vs 親屬稱謂（親暱社交）",
        "columns": [
          {
            "label": "Tôi (中立自稱)",
            "status": "公共/陌生/平權",
            "example": "Tôi là người Đài Loan.",
            "note": "保持客觀距離，不論長幼"
          },
          {
            "label": "Em / Anh (親屬化)",
            "status": "人情/溫暖/職場日常",
            "example": "Em chào anh.",
            "note": "迅速建立親近人際紐帶"
          }
        ]
      }
    },
    {
      "concept": "親屬分支",
      "syntax": "ông/bà + nội (父系祖父母) vs ông/bà + ngoại (母系祖父母)",
      "usage": "nội 為漢越「內」，指父系祖父（ông nội）、祖母（bà nội）；ngoại 為漢越「外」，指外祖父（ông ngoại）、外祖母（bà ngoại）。",
      "trap": "華語常籠統說「爺爺奶奶」，越語若將外婆錯稱 bà nội 會被視為搞混宗族分支。",
      "mnemonic": "「父系為 nội 內親祖，母系為 ngoại 外婆親。」",
      "infograph": {
        "type": "contrast",
        "title": "內外宗族血統二元劃分表",
        "columns": [
          {
            "label": "Nội (內親 / 父系)",
            "status": "父系長輩",
            "example": "ông bà nội",
            "note": "祖父、祖母、叔父伯父"
          },
          {
            "label": "Ngoại (外戚 / 母系)",
            "status": "母系長輩",
            "example": "ông bà ngoại",
            "note": "外祖父、外祖母、母系親族"
          }
        ]
      }
    },
    {
      "concept": "包不包含聽者",
      "syntax": "chúng tôi (排除聽者) vs chúng ta (包含聽者)",
      "usage": "chúng tôi 表示「我們這一方（不含對方聽者）」，常見於商務談判代表發言；chúng ta 則是「我們大家（含聽者所有人）」，用於凝聚團隊共識。",
      "trap": "商務開會向客戶說「chúng ta cần thanh toán」，把客戶拉進付款主體造成混亂。",
      "mnemonic": "「chúng tôi 排除聽者我方說，chúng ta 全體包含一家親。」",
      "infograph": {
        "type": "contrast",
        "title": "複數第一人稱包容性矩陣",
        "columns": [
          {
            "label": "Chúng tôi (排除式)",
            "status": "不含聽話人 (We without you)",
            "example": "Chúng tôi xin thông báo…",
            "note": "代表我方公司、團體立場"
          },
          {
            "label": "Chúng ta (包含式)",
            "status": "含聽話人 (We including you)",
            "example": "Chúng ta cùng cố gắng!",
            "note": "凝聚全場所有人共同努力"
          }
        ]
      }
    },
    {
      "concept": "禮貌回應",
      "syntax": "Dạ, [S] + [V] + ạ (首尾呼應雙重敬語)",
      "usage": "「Dạ」置於句首表示恭敬聆聽接收，「ạ」置於句末表示崇敬謙遜。兩者在對長輩、師長或客戶回話時是極致禮貌典範。",
      "trap": "省略 Dạ 和 ạ 直說「Hiểu rồi」，在長輩聽來宛如命令或不耐煩。",
      "mnemonic": "「句首 Dạ 開頭，句末 ạ 壓軸，雙敬加持滿堂彩。」",
      "infograph": {
        "type": "slots",
        "title": "越語敬意前綴與句尾封閉槽位",
        "slots": [
          {
            "label": "敬意啟動前綴",
            "val": "Dạ,"
          },
          {
            "label": "自謙主語",
            "val": "em"
          },
          {
            "label": "動態核心",
            "val": "hiểu rồi"
          },
          {
            "label": "敬意封閉標籤",
            "val": "ạ."
          }
        ]
      }
    },
    {
      "concept": "職稱稱呼",
      "syntax": "Chào + [Chức danh: thầy / cô / bác sĩ]",
      "usage": "遇老師稱 Chào thầy（男老師）或 Chào cô（女老師）；遇醫生稱 Chào bác sĩ。將職業身分直接作對話稱謂是崇敬象徵。",
      "trap": "稱呼老師時加上姓氏叫 *Chào Nguyễn，違反越語稱呼習俗。",
      "mnemonic": "「尊師重道稱 thầy cô，職銜為稱最得體。」",
      "infograph": {
        "type": "steps",
        "title": "社會崇敬職業稱謂清單",
        "steps": [
          {
            "level": "教育領域",
            "tag": "thầy / cô",
            "ex": "男教師用 thầy，女教師用 cô"
          },
          {
            "level": "醫療體系",
            "tag": "bác sĩ",
            "ex": "向醫師問診諮詢時專屬稱呼"
          },
          {
            "level": "宗教文化",
            "tag": "thầy",
            "ex": "寺廟僧侶或專業法師之尊稱"
          }
        ]
      }
    },
    {
      "concept": "第三人稱",
      "syntax": "[Danh xưng 稱謂] + ấy (彼／那位)",
      "usage": "在稱謂詞後加上「ấy」即構成客氣得體的第三人稱：anh ấy（他/那位大哥）、chị ấy（她/那位大姐）、ông ấy（他/那位老先生）。",
      "trap": "通通用「nó」代稱所有人，nó 只能用於小孩、動物或極度不尊重之蔑稱。",
      "mnemonic": "「稱謂加 ấy 是第三者，客氣禮貌不隨便。」",
      "infograph": {
        "type": "slots",
        "title": "第三人稱派生積木",
        "slots": [
          {
            "label": "特定稱謂",
            "val": "anh / chị / ông / bà"
          },
          {
            "label": "遠指標記",
            "val": "+ ấy"
          },
          {
            "label": "生成語意",
            "val": "＝ 他 / 她 / 該位長者"
          }
        ]
      }
    },
    {
      "concept": "職場稱呼",
      "syntax": "Chào + [稱謂] + [Tên 名] / Thưa + [Chức vụ 職務]",
      "usage": "職場日常直呼「Chào anh Minh（明哥好）」，以名（Given name）相稱而非姓；極正式場合則冠以「Thưa giám đốc（報告總經理）」。",
      "trap": "把台灣習慣的「陳經理」直譯成 *Trần Giám đốc，越語應為 Giám đốc Trần 或直接稱 Chào anh [名]。",
      "mnemonic": "「名在前姓在後，職場親切稱名號。」",
      "infograph": {
        "type": "contrast",
        "title": "職場稱呼兩種情境切換",
        "columns": [
          {
            "label": "日常協作 (親切敬重)",
            "status": "稱謂 + 名稱",
            "example": "Chào anh Minh.",
            "note": "維持輩份親近與團隊合作效率"
          },
          {
            "label": "正式典禮 (公務尊稱)",
            "status": "Thưa + 職稱",
            "example": "Thưa giám đốc,",
            "note": "報告工作、全體大會發言"
          }
        ]
      }
    },
    {
      "concept": "詢問稱呼方式",
      "syntax": "[S] + gọi + [O] + là + [Danh xưng] + được không?",
      "usage": "當不確定對方年齡或期待時，主動詢問「Em gọi chị là chị Lan được không?」是最高情商的破冰社交方式。",
      "trap": "擅自將看起來年輕的女性主管叫 em，造成對方不悅與尷尬。",
      "mnemonic": "「稱謂拿捏若未穩，主動詢問顯修養。」",
      "infograph": {
        "type": "flow",
        "title": "稱謂確認四部曲",
        "steps": [
          {
            "title": "初見觀察",
            "desc": "目測年齡與職務位階"
          },
          {
            "title": "主動破冰",
            "desc": "禮貌詢問稱謂偏好"
          },
          {
            "title": "對方確認",
            "desc": "確認自稱與對稱配對"
          },
          {
            "title": "恆常沿用",
            "desc": "確立後固定使用不混亂"
          }
        ]
      }
    }
  ],
  "shopping": [
    {
      "concept": "數字變讀",
      "syntax": " hàng chục > 1 ➔ 1 念 mốt; hàng chục >= 1 ➔ 5 念 lăm",
      "usage": "個位數在十位數大於1時，數字1必須音變成「mốt」（如 21 = hai mươi mốt）；個位數5在十位數大於等於1時，必須音變成「lăm」（如 15 = mười lăm, 25 = hai mươi lăm）。",
      "trap": "把 21 念成 *hai mươi một，或把 25 念成 *hai mươi năm（變成20年）。",
      "mnemonic": "「十後有一變 mốt，十後有五念 lăm；數字音變要記牢。」",
      "infograph": {
        "type": "contrast",
        "title": "個位數音變雙軌規則表",
        "columns": [
          {
            "label": "數字 1 音變 (mốt)",
            "status": "十位數 >= 2 時",
            "example": "21 = hai mươi mốt",
            "note": "避免與 một (獨立的1) 混同"
          },
          {
            "label": "數字 5 音變 (lăm)",
            "status": "十位數 >= 1 時",
            "example": "15 = mười lăm, 25 = hai mươi lăm",
            "note": "避免與 năm (年份/獨立的5) 混同"
          }
        ]
      }
    },
    {
      "concept": "金額位值",
      "syntax": "[Số trăm] + trăm + [Số chục] + mươi + nghìn đồng (千位為進位基準)",
      "usage": "越南盾面額大，千（nghìn/ngàn）為日常計價基準。250,000 讀作 hai trăm năm mươi nghìn đồng。常口語省略 đồng 或 nghìn（如 hai trăm rưỡi）。",
      "trap": "把 250,000 直譯成「二十五萬」，導致在千進位計算中找錯錢。",
      "mnemonic": "「越盾千位是基準，二百五十加 nghìn 讀。」",
      "infograph": {
        "type": "slots",
        "title": "250,000 越盾千進位結構拆解",
        "slots": [
          {
            "label": "百位",
            "val": "hai trăm"
          },
          {
            "label": "十位",
            "val": "năm mươi"
          },
          {
            "label": "進位量級",
            "val": "nghìn (×1,000)"
          },
          {
            "label": "貨幣單位",
            "val": "đồng"
          }
        ]
      }
    },
    {
      "concept": "詢價與找零",
      "syntax": "Cái này bao nhiêu tiền? (問價標準式)",
      "usage": "問價核心句型。付大鈔後確認找零使用「Thối lại bao nhiêu tiền?」或數字覆述「Gửi lại anh 100 nghìn」確保交易無誤。",
      "trap": "結帳時未覆誦金額，容易在傳統市場或計程車找零時因零的個數發生爭執。",
      "mnemonic": "「Bao nhiêu tiền 問總額，找零核對看數字。」",
      "infograph": {
        "type": "flow",
        "title": "購物結帳與找零閉環流程",
        "steps": [
          {
            "title": "詢價",
            "desc": "Cái này bao nhiêu tiền?"
          },
          {
            "title": "報價接收",
            "desc": "核對千進位單位 (k/nghìn)"
          },
          {
            "title": "交付付款",
            "desc": "出示鈔票並口述面額"
          },
          {
            "title": "找零覆核",
            "desc": "當面點清找回張數與零錢"
          }
        ]
      }
    },
    {
      "concept": "零位與地區讀法",
      "syntax": "百位與個位間零：北部 linh vs 南部 lẻ",
      "usage": "當百位數後接個位數（中間十位為0）時，北部慣用「linh」（如 một trăm linh năm: 105），南部慣用「lẻ」（如 một trăm lẻ năm）。兩者皆為標準語。",
      "trap": "在胡志明市聽到 lẻ năm 以為是「奇數」或聽不懂，其實就是 linh năm。",
      "mnemonic": "「中間逢零北說 linh，南島風情說成 lẻ。」",
      "infograph": {
        "type": "contrast",
        "title": "零位 (十位數為 0) 南北方言對照",
        "columns": [
          {
            "label": "北部標準讀法 (linh)",
            "status": "官方與北方慣用語",
            "example": "105 = một trăm linh năm",
            "note": "多見於河內及書面規範"
          },
          {
            "label": "南部標準讀法 (lẻ)",
            "status": "南方民間主流用語",
            "example": "105 = một trăm lẻ năm",
            "note": "多見於胡志明市與湄公河三角洲"
          }
        ]
      }
    },
    {
      "concept": "數量和單位",
      "syntax": "[Số lượng] + [Đơn vị: ký/lít/chai] + [Danh từ]",
      "usage": "量詞與計量單位直接置於名詞之前：hai ký（2公斤）、ba lít（3公升）。市場常以「mỗi ký（每公斤）」標示單價。",
      "trap": "把 ký 誤當成華語的「斤」（500g），越南的 1 ký (kilô) 均為國際公斤 1,000g。",
      "mnemonic": "「越南 ký 是公斤，一千公克莫算輕。」",
      "infograph": {
        "type": "slots",
        "title": "市井計量語法積木",
        "slots": [
          {
            "label": "數量",
            "val": "Hai"
          },
          {
            "label": "度量單位",
            "val": "ký,"
          },
          {
            "label": "單價修飾",
            "val": "mỗi ký ba mươi nghìn"
          }
        ]
      }
    },
    {
      "concept": "大數分組",
      "syntax": "nghìn (10^3) ➔ triệu (10^6) ➔ tỷ (10^9)",
      "usage": "大額商務與房產計價採用三位一撇進位：một triệu（100萬盾，約合1,300台幣）、một tỷ（10億盾，約合130萬台幣）。",
      "trap": "華語習慣「萬」「億」四位進位，看越南財報或房價時極易多數或少數一個零。",
      "mnemonic": "「千為 nghìn，百萬 triệu，十億為 tỷ 牢記心。」",
      "infograph": {
        "type": "steps",
        "title": "越盾三位一撇大數階梯",
        "steps": [
          {
            "level": "千級 (10^3)",
            "tag": "nghìn / ngàn",
            "ex": "1.000 (一千)"
          },
          {
            "level": "百萬級 (10^6)",
            "tag": "triệu",
            "ex": "1.000.000 (一百萬)"
          },
          {
            "level": "十億級 (10^9)",
            "tag": "tỷ",
            "ex": "1.000.000.000 (十億)"
          }
        ]
      }
    },
    {
      "concept": "議價",
      "syntax": "Bớt cho tôi một chút được không? (委婉議價式)",
      "usage": "傳統市場議價切忌生硬命令，應使用「Bớt cho tôi một chút được không?（可以算我便宜一點嗎？）」展現友善協商態度。",
      "trap": "直接說「Đắt quá!（太貴了！）」甩頭就走，顯得挑釁且破壞商販談判意願。",
      "mnemonic": "「bớt 減價，chút 少許，委婉協商笑臉迎。」",
      "infograph": {
        "type": "slots",
        "title": "禮貌議價句型組件",
        "slots": [
          {
            "label": "核心動作",
            "val": "Bớt"
          },
          {
            "label": "受惠對象",
            "val": "cho tôi"
          },
          {
            "label": "讓步幅度",
            "val": "một chút"
          },
          {
            "label": "可能請求",
            "val": "được không?"
          }
        ]
      }
    },
    {
      "concept": "折扣說法",
      "syntax": "giảm giá + [Số %] (直接折扣百分比)",
      "usage": "越南標示「giảm giá 20%」意即「降價 20%（相當於台灣的 8 折）」。此與華語的「打八折」思維完全相反。",
      "trap": "看見 giảm giá 70% 以為是「打七折」，其實是「立減 70%（相當於三折）」，造成購物誤算。",
      "mnemonic": "「giảm 是直接減掉，扣除成數才是折。」",
      "infograph": {
        "type": "contrast",
        "title": "越南減價 (Giảm giá) 與台灣折扣思維對照",
        "columns": [
          {
            "label": "越式思維 (Giảm %)",
            "status": "減去之比例",
            "example": "Giảm giá 20%",
            "note": "扣除 20% 售價（即付 80%）"
          },
          {
            "label": "台式思維 (打折)",
            "status": "保留之成數",
            "example": "打 8 折",
            "note": "支付原價 80% 之金額"
          }
        ]
      }
    },
    {
      "concept": "電子支付",
      "syntax": "[S] + chuyển khoản + được không? (轉帳/掃碼確認)",
      "usage": "在當代越南，二維條碼轉帳（Chuyển khoản / Quét mã QR / VietQR）已極為普及，購物時先問「Tôi chuyển khoản được không?」免找零煩惱。",
      "trap": "在小路邊攤未問清楚直接拿出外國信用卡，很多只接受 VietQR 本地轉帳或現金。",
      "mnemonic": "「chuyển khoản 轉帳去，掃描 QR 付款速。」",
      "infograph": {
        "type": "steps",
        "title": "現代越南主流支付模式",
        "steps": [
          {
            "level": "現金主流",
            "tag": "Tiền mặt",
            "ex": "傳統菜市場、路邊攤、小額找零"
          },
          {
            "level": "本土掃碼",
            "tag": "VietQR / ZaloPay",
            "ex": "手搖飲、便利店、計程車、餐飲"
          },
          {
            "level": "國際刷卡",
            "tag": "Thẻ tín dụng",
            "ex": "大型商場、星級飯店、高檔餐廳"
          }
        ]
      }
    }
  ],
  "phrases": [
    {
      "concept": "請求物品",
      "syntax": "Cho tôi + [Số lượng] + [Lượng từ] + [Danh từ] (索取物品標準式)",
      "usage": "Cho tôi 直接接物品（如 Cho tôi một ly nước: 請給我一杯水），用於在餐廳、咖啡店或超商索取實物，不接動詞動作。",
      "trap": "把所有中文的「請你…」都直接套 Cho tôi，接上動詞如 *Cho tôi giúp anh，造成語義混亂。",
      "mnemonic": "「Cho tôi 接實物，一杯水一碗飯；動作請求換句型。」",
      "infograph": {
        "type": "slots",
        "title": "索取物品標準語法槽位",
        "slots": [
          {
            "label": "請求引語",
            "val": "Cho tôi"
          },
          {
            "label": "數詞",
            "val": "một"
          },
          {
            "label": "量詞",
            "val": "ly"
          },
          {
            "label": "核心名詞",
            "val": "nước."
          }
        ]
      }
    },
    {
      "concept": "請求協助",
      "syntax": "[Danh xưng 對稱] + giúp + [Danh xưng 自稱] + được không? (求援公式)",
      "usage": "請求他人協助行動，動詞用「giúp（幫忙）」，結尾加上「được không（可以嗎）」構成溫和委婉的商榷語氣。",
      "trap": "省去對稱與 được không，直接說生硬的「Giúp tôi!」，在母語者聽來有如緊急下令。",
      "mnemonic": "「稱謂在前 giúp 在中，được không 結尾情意濃。」",
      "infograph": {
        "type": "slots",
        "title": "委婉請求他人協助語法積木",
        "slots": [
          {
            "label": "對稱尊稱",
            "val": "Anh"
          },
          {
            "label": "援助動作",
            "val": "giúp"
          },
          {
            "label": "自謙受惠",
            "val": "tôi"
          },
          {
            "label": "協商後綴",
            "val": "được không?"
          }
        ]
      }
    },
    {
      "concept": "確認理解",
      "syntax": "Ý + [Đối tượng] + là + [Nội dung] + phải không? (核對原意句型)",
      "usage": "當接收到模糊資訊時，先以「Ý anh là… phải không?（你的意思是…對嗎？）」向對方覆述核心內容，是防止認知偏差的最佳機制。",
      "trap": "在談判或協作中未確認就直接執行，事後往往發現時間或規格完全理解錯誤。",
      "mnemonic": "「Ý anh là 先重述，phải không 收尾免猜疑。」",
      "infograph": {
        "type": "flow",
        "title": "關鍵資訊雙向對齊閉環",
        "steps": [
          {
            "title": "接收訊號",
            "desc": "聆聽對方口頭指示或時間"
          },
          {
            "title": "重述框架",
            "desc": "Ý anh là ngày mai…"
          },
          {
            "title": "閉環確認",
            "desc": "…phải không? (尋求確證)"
          },
          {
            "title": "執行落實",
            "desc": "對方回覆 Đúng/Phải 後再著手"
          }
        ]
      }
    },
    {
      "concept": "請求許可",
      "syntax": "[S] + có thể + [V] + ở đây + không? (徵詢許可模式)",
      "usage": "「có thể… không」用以請求許可或詢問可能性，例如「Tôi có thể ngồi đây không?（我可以坐這裡嗎？）」，展現極高教養。",
      "trap": "未開口直接拉椅子入座，或使用命令口吻，在越南注重社交分寸的場合會造成不快。",
      "mnemonic": "「có thể 帶動詞，không 在句末徵許可。」",
      "infograph": {
        "type": "slots",
        "title": "行為許可徵詢積木",
        "slots": [
          {
            "label": "自稱",
            "val": "Tôi"
          },
          {
            "label": "能願框架",
            "val": "có thể"
          },
          {
            "label": "核心動作",
            "val": "ngồi đây"
          },
          {
            "label": "閉環疑問",
            "val": "không?"
          }
        ]
      }
    },
    {
      "concept": "請寫下關鍵資訊",
      "syntax": "[Đối tượng] + có thể + viết ra + giúp tôi + được không?",
      "usage": "當數字、地址、電話或專有名詞口音較重難以聽辨時，請求對方「Anh có thể viết ra giúp tôi không?（可以幫我寫下來嗎？）」。",
      "trap": "反覆盲目聽三四次仍硬猜，不如禮貌遞上便籤或手機螢幕請對方書寫。",
      "mnemonic": "「口音難辨莫著急，viết ra 寫下見真章。」",
      "infograph": {
        "type": "steps",
        "title": "疑難字詞書面核對流程",
        "steps": [
          {
            "level": "聽覺受阻",
            "tag": "Chưa rõ",
            "ex": "無法精準辨析數字或地名"
          },
          {
            "level": "出示工具",
            "tag": "Ghi chép",
            "ex": "遞上手機備忘錄或便箋筆"
          },
          {
            "level": "請求書寫",
            "tag": "Viết ra",
            "ex": "Viết ra giúp tôi được không?"
          }
        ]
      }
    },
    {
      "concept": "指定不懂的部分",
      "syntax": "[S] + chưa hiểu + [Cụm từ cụ thể] (精準定點求助)",
      "usage": "不要說空泛的「Tôi không hiểu」，具體指出「Tôi chưa hiểu từ cuối（我還不懂最後一個詞）」能大幅降低對方的解釋成本。",
      "trap": "通盤否認自己的理解，導致對方從頭又用極快語速重講一遍，問題依然未解。",
      "mnemonic": "「不說全然不懂，單挑關鍵未明處。」",
      "infograph": {
        "type": "contrast",
        "title": "空泛求助 vs 定點求助之效能差異",
        "columns": [
          {
            "label": "空泛求助 (低效)",
            "status": "全部未解",
            "example": "Tôi không hiểu gì cả.",
            "note": "對方必須從頭重講，耗時低效"
          },
          {
            "label": "定點求助 (高效)",
            "status": "精確突破",
            "example": "Tôi chưa hiểu từ cuối.",
            "note": "對方聚焦最後一個單字釋義"
          }
        ]
      }
    },
    {
      "concept": "委婉拒絕",
      "syntax": "Cảm ơn, nhưng + [S] + không cần. (先謝後拒模式)",
      "usage": "面對路上小販、推銷或不適當提議，先以「Cảm ơn（謝謝）」肯定對方善意，再接「nhưng tôi không cần（但我不需要）」堅定委婉拒絕。",
      "trap": "態度過於兇狠喝斥，或支支吾吾不敢明確拒絕導致被糾纏。",
      "mnemonic": "「先言感念後言辭，委婉堅定不生隙。」",
      "infograph": {
        "type": "slots",
        "title": "優雅拒絕雙層語法結構",
        "slots": [
          {
            "label": "禮貌緩衝層",
            "val": "Cảm ơn,"
          },
          {
            "label": "轉折引語",
            "val": "nhưng"
          },
          {
            "label": "主體",
            "val": "tôi"
          },
          {
            "label": "明確態勢",
            "val": "không cần."
          }
        ]
      }
    },
    {
      "concept": "開口前致意",
      "syntax": "Xin lỗi, làm phiền + [Đối tượng] + một chút. (搭話禮貌前綴)",
      "usage": "向路人問路或在辦公室打擾同事前，固定開場致歉語「Xin lỗi, làm phiền anh một chút（不好意思，打擾您一下）」。",
      "trap": "未經致意直接劈頭提問，在講求尊卑長幼的越南文化中極為失禮。",
      "mnemonic": "「問事之前先致意，làm phiền một chút 順人心。」",
      "infograph": {
        "type": "flow",
        "title": "陌生搭話黃金三秒進程",
        "steps": [
          {
            "title": "眼神接觸",
            "desc": "微笑致意並停步"
          },
          {
            "title": "禮貌前導",
            "desc": "Xin lỗi, làm phiền anh một chút."
          },
          {
            "title": "切入正題",
            "desc": "Cho tôi hỏi đường đi…"
          }
        ]
      }
    },
    {
      "concept": "表達偏好",
      "syntax": "[S] + thích + [Lựa chọn] + hơn. (比較偏好公式)",
      "usage": "在挑選商品或菜單時，用「hơn」置於句尾表示「更喜歡這個（Tôi thích cái này hơn）」，明確表達個人主觀意願。",
      "trap": "把 hơn 置於 thích 之前形成 *hơn thích，違反越語比較副詞後置之硬性規則。",
      "mnemonic": "「喜歡在前 hơn 在後，越式偏好尾端置。」",
      "infograph": {
        "type": "slots",
        "title": "偏好表達後置比較槽位",
        "slots": [
          {
            "label": "主體",
            "val": "Tôi"
          },
          {
            "label": "喜好動態",
            "val": "thích"
          },
          {
            "label": "目標對象",
            "val": "cái này"
          },
          {
            "label": "比較後置詞",
            "val": "hơn."
          }
        ]
      }
    }
  ],
  "grammar": [
    {
      "concept": "SVO 與修飾",
      "syntax": "[S] + [V] + [O] ； [Danh từ] + [Tính từ / Định ngữ 後置修飾]",
      "usage": "越語基本句型為「主-動-賓（SVO）」。核心特徵在於：名詞的所有修飾語（形容詞、所有格、指示代名詞）一律後置（如 sách mới: 書-新）。",
      "trap": "受華語「新書」干擾直接說成 *mới sách，破壞越語名詞中心語在前之根本語序。",
      "mnemonic": "「名詞走在前，形容跟在後；SVO 順著排，中心永居首。」",
      "infograph": {
        "type": "slots",
        "title": "越語名詞組後置修飾積木",
        "slots": [
          {
            "label": "主詞 (S)",
            "val": "Tôi"
          },
          {
            "label": "動詞 (V)",
            "val": "mua"
          },
          {
            "label": "量詞+名詞",
            "val": "một cuốn sách"
          },
          {
            "label": "形容詞修飾",
            "val": "mới ⟵ (後置)"
          }
        ]
      }
    },
    {
      "concept": "時貌與語境",
      "syntax": "đã (過去) / đang (進行) / sẽ (將來) + [V]",
      "usage": "越語動詞本身不隨人稱或時態發生曲折變化，僅在必要強調時以前置副詞標記時貌：đang 表進行中、đã 表已完成、sẽ 表將來。",
      "trap": "以為每句話都必須機械套入 đã、đang、sẽ；在已有時間詞（如 hôm qua, ngày mai）的語境中，動詞常直接使用無需標記。",
      "mnemonic": "「動詞不變位，時貌靠副詞；語境若分明，虛詞可精簡。」",
      "infograph": {
        "type": "timeline",
        "title": "越語時貌三大前置標記時間軸",
        "stages": [
          {
            "tag": "Đã (已)",
            "desc": "過去完成動作",
            "ex": "Tôi đã ăn."
          },
          {
            "tag": "Đang (在)",
            "desc": "當前進行動作",
            "ex": "Tôi đang học."
          },
          {
            "tag": "Sẽ (將)",
            "desc": "未來預計動作",
            "ex": "Tôi sẽ đi."
          }
        ]
      }
    },
    {
      "concept": "否定與尚未",
      "syntax": "không + [V] (一般否定/意志) vs chưa + [V] (尚未/時態未然)",
      "usage": "không 否定狀態或事實、表達拒絕意志；chưa 則表示「尚未發生但未來可能發生」，兩者不可互換。",
      "trap": "將「我還沒去」說成「Tôi không đi」，意思直接變成「我不去（拒絕前往）」。",
      "mnemonic": "「không 是堅決不去做，chưa 是時機未成熟。」",
      "infograph": {
        "type": "contrast",
        "title": "否定詞 không vs 時態未然 chưa 對立矩陣",
        "columns": [
          {
            "label": "không (絕對否定)",
            "status": "無意願 / 客觀非真",
            "example": "Tôi không uống cà phê.",
            "note": "體質不能喝或主觀絕不喝"
          },
          {
            "label": "chưa (未然時序)",
            "status": "目前尚未 / 保留後續",
            "example": "Tôi chưa uống.",
            "note": "現在還沒喝，等等可能喝"
          }
        ]
      }
    },
    {
      "concept": "疑問框架",
      "syntax": "[S] + có + [V/Adj] + … + không? (標準是非問句骨架)",
      "usage": "越語構成是非疑問句的標準框架：在動詞或形容詞前置 có，句末置 không。口語中 có 有時可省略，但框架結構依然完整。",
      "trap": "把華語的「嗎」直接音譯套在句尾，省略句首框架，導致語氣含糊不清。",
      "mnemonic": "「có 領動詞前，không 守在句末，一收一放成問句。」",
      "infograph": {
        "type": "slots",
        "title": "có…không 是非疑問句雙重框架",
        "slots": [
          {
            "label": "主體",
            "val": "Bạn"
          },
          {
            "label": "疑問前導",
            "val": "có"
          },
          {
            "label": "動態核心",
            "val": "uống trà"
          },
          {
            "label": "閉環疑問",
            "val": "không?"
          }
        ]
      }
    },
    {
      "concept": "剛剛與將來",
      "syntax": "vừa / mới + [V] (方才) vs sẽ / sắp + [V] (即將/將會)",
      "usage": "vừa/mới 標記方才剛結束的近過去；sắp/sẽ 標記即將到來的未來。時間副詞直接緊貼動詞前。",
      "trap": "將 vừa 與 đã 混用，或忽視 sắp 與 sẽ 的緊迫度差異（sắp 比 sẽ 更迫近當前）。",
      "mnemonic": "「vừa 是剛剛到，sắp 是緊接著，時序先後有分寸。」",
      "infograph": {
        "type": "timeline",
        "title": "迫近度時態細微刻度表",
        "stages": [
          {
            "tag": "Vừa / Mới",
            "desc": "近過去 (剛剛)",
            "ex": "Tôi vừa đến."
          },
          {
            "tag": "Bây giờ",
            "desc": "現在立足點",
            "ex": "Bây giờ đang làm."
          },
          {
            "tag": "Sắp",
            "desc": "近將來 (馬上)",
            "ex": "Sắp mưa rồi."
          },
          {
            "tag": "Sẽ",
            "desc": "一般將來 (預計)",
            "ex": "Mai sẽ đi."
          }
        ]
      }
    },
    {
      "concept": "比較結構",
      "syntax": "[A] + [Tính từ] + hơn + [B] (差比式標準句型)",
      "usage": "越語比較級核心為「A + 形容詞 + hơn + B（A比B更…）」。與中文「A比B+形容詞」語序顛倒，形容詞置於 hơn 之前。",
      "trap": "受華語干擾造出 *Phòng này so sánh phòng kia rộng，完全脫離越語常態語法。",
      "mnemonic": "「形容詞先跑，hơn 緊隨在後，比對對象居末席。」",
      "infograph": {
        "type": "slots",
        "title": "越華差比結構語序倒置對照",
        "slots": [
          {
            "label": "主體 A",
            "val": "Phòng này"
          },
          {
            "label": "性質焦點",
            "val": "rộng"
          },
          {
            "label": "比較標記",
            "val": "hơn"
          },
          {
            "label": "參照對象 B",
            "val": "phòng kia."
          }
        ]
      }
    },
    {
      "concept": "被動 bị／được",
      "syntax": "消極不幸: bị + [V] vs 積極有幸: được + [V]",
      "usage": "越語被動語態帶有極強烈的情感極性：bị 用於遭受不幸、懲罰、災損（如 bị phạt: 被罰）；được 用於榮獲表揚、好處、晉升（如 được khen: 被稱讚）。",
      "trap": "看到中性的「被選中」隨意用 bị，在越語母語者看來是遭受了天大的苦難。",
      "mnemonic": "「bị 遭苦難災厄，được 沐恩澤嘉許；情感極性要分清。」",
      "infograph": {
        "type": "contrast",
        "title": "被動語態雙軌情感極性分水嶺",
        "columns": [
          {
            "label": "bị (消極被動 / 不幸)",
            "status": "遭受痛苦、責罰",
            "example": "Tôi bị phạt.",
            "note": "遭遇非自願的負面損失"
          },
          {
            "label": "được (積極被動 / 幸運)",
            "status": "獲得利益、榮譽",
            "example": "Tôi được khen.",
            "note": "獲得讚賞或正面機遇"
          }
        ]
      }
    },
    {
      "concept": "疑問詞位置",
      "syntax": "問主詞置首: Ai + [V]？ vs 問處所/賓語原位後置: [S] + đi + đâu？",
      "usage": "越語疑問代名詞遵循「原位疑問（Wh-in-situ）」原則：問哪裡（đâu）就放在地點槽位；問誰（ai）若為主詞則放首位，若為受詞則放句尾。",
      "trap": "像英語一樣習慣將所有疑問詞往前倒裝，造出 *Đâu bạn đi？的怪異句式。",
      "mnemonic": "「原位疑問不倒裝，想問何物就補位。」",
      "infograph": {
        "type": "contrast",
        "title": "原位疑問槽位對稱圖",
        "columns": [
          {
            "label": "問處所 (原位後置)",
            "status": "置於動詞後方",
            "example": "Bạn đi đâu?",
            "note": "đâu 居受詞地點槽位"
          },
          {
            "label": "問施事主詞 (置於首位)",
            "status": "居主詞槽位",
            "example": "Ai gọi bạn?",
            "note": "ai 居發起動作的主格槽位"
          }
        ]
      }
    },
    {
      "concept": "強調焦點",
      "syntax": "Chính + [Thành phần nhấn mạnh] + đã/là… (焦點前置分裂句)",
      "usage": "「Chính」置於被強調對象之前，類似中文的「正是…／就是…」，用於釐清責任歸屬或突顯核心事實（如 Chính tôi đã gọi anh: 就是我打給你的）。",
      "trap": "將 chính 放錯位置置於動詞後，變成副詞「主要地（chủ yếu）」。",
      "mnemonic": "「Chính 鎖定焦點，指明主體正是誰。」",
      "infograph": {
        "type": "slots",
        "title": "焦點分裂前綴強調積木",
        "slots": [
          {
            "label": "焦點鎖定詞",
            "val": "Chính"
          },
          {
            "label": "核心受焦主體",
            "val": "tôi"
          },
          {
            "label": "確證動作",
            "val": "đã gọi anh."
          }
        ]
      }
    }
  ],
  "sentence": [
    {
      "concept": "名詞組",
      "syntax": "[Số từ] + [Lượng từ] + [Danh từ trung tâm] + [Định ngữ/Tính từ]",
      "usage": "完整名詞組遵循四大槽位標準排列：hai（數詞2）+ cuốn（量詞本）+ sách（中心名詞書）+ mới（形容詞修飾新）。不可任意調換。",
      "trap": "漏掉量詞 cuốn 說成 *hai sách mới，或將修飾語 mới 放回名詞前。",
      "mnemonic": "「數詞量詞排在前，名詞中心居中央，修飾尾巴殿最後。」",
      "infograph": {
        "type": "slots",
        "title": "名詞短語四槽位解剖圖",
        "slots": [
          {
            "label": "1. 數量詞",
            "val": "hai"
          },
          {
            "label": "2. 分類量詞",
            "val": "cuốn"
          },
          {
            "label": "3. 中心名詞",
            "val": "sách"
          },
          {
            "label": "4. 後置修飾語",
            "val": "mới"
          }
        ]
      }
    },
    {
      "concept": "位置關係",
      "syntax": "[S] + [V] + [O] + ở + [Địa điểm] (處所介詞短語後置)",
      "usage": "越語動作發生的地點短語「ở + 地點」習慣置於動詞或整句之後（Tôi học tiếng Việt ở nhà: 我在學越南語[在家]）。亦可因主題焦點前置。",
      "trap": "受華語「我在家學越南語」影響，將 ở nhà 生硬放在動詞前面變成 *Tôi ở nhà học tiếng Việt。",
      "mnemonic": "「動作做完再說在哪，ở 加地點後方隨。」",
      "infograph": {
        "type": "contrast",
        "title": "處所狀語越華語序對照",
        "columns": [
          {
            "label": "越式慣用語序 (後置)",
            "status": "動詞在前，地點在後",
            "example": "Tôi học tiếng Việt ở nhà.",
            "note": "先陳述學習動作與客體，再補述空間"
          },
          {
            "label": "華式思維 (前置干擾)",
            "status": "空間在前，動詞在後",
            "example": "我在家學越語",
            "note": "華語習慣介詞短語居動詞前"
          }
        ]
      }
    },
    {
      "concept": "原因與結果",
      "syntax": "Vì + [Nguyên nhân] nên + [Kết quả] (因果複句標準雙柱)",
      "usage": "Vì（因為）引導原因子句，nên（所以）引導結果子句。書面與口語中兩者常成對呼應，逻辑鮮明。",
      "trap": "把 nên 寫成 *cho nên 或誤用為語氣詞，忽視前後子句的主謂完整性。",
      "mnemonic": "「Vì 引原因起波瀾，nên 承結果定乾坤。」",
      "infograph": {
        "type": "flow",
        "title": "因果複句邏輯導向架構",
        "steps": [
          {
            "title": "原因前件 (Vì)",
            "desc": "Vì trời mưa (因為下雨)"
          },
          {
            "title": "邏輯推演 (nên)",
            "desc": "因此引發後續狀態"
          },
          {
            "title": "結果後件 (Kết quả)",
            "desc": "tôi ở nhà (我待在家中)"
          }
        ]
      }
    },
    {
      "concept": "讓步關係",
      "syntax": "Tuy + [Mệnh đề đối lập] nhưng + [Mệnh đề chính] (讓步轉折)",
      "usage": "Tuy（雖然）承接阻礙事實，nhưng（但是）承接克服阻礙的實際行動。在商務談判與論述文寫作中極為核心。",
      "trap": "遺漏 nhưng 導致轉折力道不足，或將 tuy 誤套為 nếu（如果）。",
      "mnemonic": "「Tuy 承逆境阻礙，nhưng 顯毅力前行。」",
      "infograph": {
        "type": "contrast",
        "title": "讓步轉折邏輯力量天平",
        "columns": [
          {
            "label": "Tuy (客觀逆境阻力)",
            "status": "條件不利",
            "example": "Tuy trời mưa",
            "note": "天公不作美"
          },
          {
            "label": "Nhưng (主觀意志克服)",
            "status": "堅持落實",
            "example": "nhưng tôi vẫn đi.",
            "note": "依然依約前行"
          }
        ]
      }
    },
    {
      "concept": "條件關係",
      "syntax": "Nếu + [Điều kiện] thì/sẽ + [Kết quả] (假說與結果)",
      "usage": "Nếu 引導前置假說條件，後句以 thì（則）或 sẽ（將）銜接相應產生的結果，構成標準條件複句。",
      "trap": "後句漏掉 thì 或將 nếu 誤用為 vì，混淆了「假說」與「已發生的事實」。",
      "mnemonic": "「Nếu 設條件門檻，thì 引出結果來。」",
      "infograph": {
        "type": "flow",
        "title": "條件假說推導流程",
        "steps": [
          {
            "title": "設定前提",
            "desc": "Nếu có thời gian (若有充裕時間)"
          },
          {
            "title": "觸發閘門",
            "desc": "條件成立觸發行動"
          },
          {
            "title": "承諾行動",
            "desc": "tôi sẽ gọi (我必定致電通知)"
          }
        ]
      }
    },
    {
      "concept": "名詞組位置",
      "syntax": "[Danh từ] + [Màu sắc] + của + [Sở hữu] (複合屬性遞歸後置)",
      "usage": "當名詞同時包含顏色修飾與所有格時，依序由近及遠後置：chiếc xe（量名）+ màu đỏ（顏色）+ của tôi（我的）。",
      "trap": "把「我的紅色車」直譯為 *của tôi màu đỏ chiếc xe，嚴重錯亂名詞中心語法秩序。",
      "mnemonic": "「車在最前色居中，所屬 của tôi 壓在後。」",
      "infograph": {
        "type": "slots",
        "title": "多層名詞修飾語遞歸層次",
        "slots": [
          {
            "label": "名詞中心體",
            "val": "chiếc xe"
          },
          {
            "label": "第一層性質",
            "val": "màu đỏ (紅色)"
          },
          {
            "label": "第二層所有格",
            "val": "của tôi (我的)"
          }
        ]
      }
    },
    {
      "concept": "關係子句 mà",
      "syntax": "[Danh từ] + mà + [Mệnh đề quan hệ giải thích] (定語子句引導詞)",
      "usage": "「mà」作為關係代名詞，引導修飾限定先行名詞的子句（如 Cuốn sách mà tôi mua rất hay: 我買的那本書非常精彩）。",
      "trap": "誤用 mà 取代 nhưng，或在不需要關係代名詞的簡單句中濫加 mà。",
      "mnemonic": "「mà 接後句定名詞，限定說解最分明。」",
      "infograph": {
        "type": "slots",
        "title": "關係子句 mà 引導限定修飾框",
        "slots": [
          {
            "label": "被限定主體",
            "val": "Cuốn sách"
          },
          {
            "label": "關係連接詞",
            "val": "mà"
          },
          {
            "label": "修飾子句",
            "val": "tôi mua"
          },
          {
            "label": "述語評價",
            "val": "rất hay."
          }
        ]
      }
    },
    {
      "concept": "目的 để",
      "syntax": "[Mệnh đề hành động] + để + [Mục đích] (目的引導詞)",
      "usage": "「để」置於主行動之後，引導行動的終極目的或意圖（Tôi học tiếng Việt để làm việc: 我學越南語是為了工作）。",
      "trap": "把 để 放在句首時缺乏主句支撐，或將目的動詞放錯在 hành động 之前。",
      "mnemonic": "「做何事說在先，để 接目標在後方。」",
      "infograph": {
        "type": "slots",
        "title": "行動與目的因果承接積木",
        "slots": [
          {
            "label": "實施行動",
            "val": "Tôi học tiếng Việt"
          },
          {
            "label": "目的介詞",
            "val": "để"
          },
          {
            "label": "預期目標",
            "val": "làm việc."
          }
        ]
      }
    },
    {
      "concept": "時間子句 khi",
      "syntax": "Khi + [Thời điểm/Hành động] , [Mệnh đề chính] (時點觸發子句)",
      "usage": "「Khi」相當於中文的「當…之時」，可置於句首作為整句時間前提背景（Khi đến Hà Nội, tôi sẽ gọi bạn: 到了河內時我會打給你）。",
      "trap": "把 lúc 與 khi 混淆；lúc 偏向口語當下瞬間，khi 適用於更廣泛的條件與書面時間段。",
      "mnemonic": "「Khi 立時間背景，逗點之後主句隨。」",
      "infograph": {
        "type": "flow",
        "title": "時間背景觸發行動時序",
        "steps": [
          {
            "title": "時空條件錨定",
            "desc": "Khi đến Hà Nội (抵達河內時)"
          },
          {
            "title": "條件觸發",
            "desc": "事件點達成"
          },
          {
            "title": "承諾行動啟動",
            "desc": "tôi sẽ gọi bạn (致電對方)"
          }
        ]
      }
    }
  ],
  "hanviet": [
    {
      "concept": "字根擴展",
      "syntax": "Gốc Hán: quốc (國) ➔ quốc gia (國家) / quốc tế (國際)",
      "usage": "掌握一個漢越音字根（如 quốc ＝ 國），能以指數級關聯推導數十個高階詞彙：quốc gia, quốc tế, tổ quốc, quốc hội。",
      "trap": "把所有中文漢字拼讀音生硬套入，忽視越語同形同源詞的語義轉移或搭配習慣。",
      "mnemonic": "「一字字根通萬里，quốc gia quốc tế 脈絡通。」",
      "infograph": {
        "type": "tree",
        "title": "漢越字根「Quốc (國)」衍生詞拓撲樹",
        "branches": [
          {
            "root": "quốc (國)",
            "leaf": "+ gia ➔ quốc gia (國家體系)"
          },
          {
            "root": "quốc (國)",
            "leaf": "+ tế ➔ quốc tế (跨國全球)"
          },
          {
            "root": "quốc (國)",
            "leaf": "+ tịch ➔ quốc tịch (法定國籍)"
          },
          {
            "root": "tổ (祖)",
            "leaf": "+ quốc ➔ tổ quốc (祖國故土)"
          }
        ]
      }
    },
    {
      "concept": "假朋友",
      "syntax": "bác sĩ (醫師 ≠ 博士) ； lịch sự (禮貌 ≠ 歷史)",
      "usage": "漢越「假朋友（False friends）」字面與中文同源，現代詞義卻南轅北轍：bác sĩ 指「醫師（博士為 tiến sĩ）」；lịch sự 指「有禮貌（歷史為 lịch sử）」。",
      "trap": "在醫院要找醫生大喊找 tiến sĩ，對方只會滿頭霧水以為你要找大學教授。",
      "mnemonic": "「看字莫望文生義，bác sĩ 是醫師，tiến sĩ 才是真博士。」",
      "infograph": {
        "type": "contrast",
        "title": "高頻漢越假朋友致命誤解清單",
        "columns": [
          {
            "label": "越語原詞 (真實含義)",
            "status": "現代真正意思",
            "example": "bác sĩ ＝ 醫師",
            "note": "lịch sự ＝ 有禮貌 / 體面"
          },
          {
            "label": "中文漢字 (表面字義)",
            "status": "字面直譯陷阱",
            "example": "博士 ＝ tiến sĩ",
            "note": "歷史 ＝ lịch sử"
          }
        ]
      }
    },
    {
      "concept": "六八體入門",
      "syntax": "Dòng 6 âm tiết (Lục) ➔ Dòng 8 âm tiết (Bát) ； 音節交替押韻",
      "usage": "越南民族詩歌六八體（Lục bát）：第一行6音節，第二行8音節；第6音節與第8音節平聲押韻，是《金雲翹傳》與民歌的靈魂載體。",
      "trap": "忽視音節的平仄韻律（Bằng/Trắc），把六八體朗讀成毫無起伏的生硬散文。",
      "mnemonic": "「上句六字下句八，六六八八相押韻；金雲翹傳傳千古。」",
      "infograph": {
        "type": "matrix",
        "title": "六八體押韻與平仄對照規格",
        "headers": [
          "詩句行",
          "音節長度",
          "押韻對應點",
          "範例韻腳"
        ],
        "rows": [
          [
            "上行 (Lục)",
            "6 音節",
            "第 6 音節押平聲韻",
            "Trăm năm trong cõi người ta (ta)"
          ],
          [
            "下行 (Bát)",
            "8 音節",
            "第 6 音節承韻，第 8 音節啟後",
            "Chữ tài chữ mệnh khéo là (là) ghét nhau (nhau)"
          ]
        ]
      }
    },
    {
      "concept": "字根不能單獨硬套",
      "syntax": "kinh tế (經濟) vs kinh nghiệm (經驗) (雙音節不可拆分獨立)",
      "usage": "kinh 是「經」，但在現代越語中不可單獨抽出來作為單詞使用，必須依託雙音節詞成型，且與現代詞義精確對應。",
      "trap": "將單一漢字生硬拆解並自造詞，造出母語者完全聽不懂的怪詞。",
      "mnemonic": "「漢越字根成組用，不可孤立造新詞。」",
      "infograph": {
        "type": "contrast",
        "title": "黏著字根雙音節成組依存法則",
        "columns": [
          {
            "label": "完整成詞 (合法)",
            "status": "雙音節語素共構",
            "example": "kinh tế / kinh nghiệm",
            "note": "語意完整穩定，符合現代詞典規範"
          },
          {
            "label": "單字孤立 (非法)",
            "status": "非自由語素單用",
            "example": "*Một cái kinh",
            "note": "無法獨立承載概念，不符語法"
          }
        ]
      }
    },
    {
      "concept": "俗諺的文化意義",
      "syntax": "Ăn quả nhớ kẻ trồng cây (文化隱喻映射)",
      "usage": "「吃果子拜樹頭（吃果實時要感恩栽種之人）」，展現越南深厚的孝道宗族與報恩倫理，常在祝賀長輩或感謝合作夥伴時引用。",
      "trap": "僅理解字面的農業摘果，未能感悟其深層的感恩忠義文化隱喻。",
      "mnemonic": "「吃果不忘栽樹人，越南文化重感恩。」",
      "infograph": {
        "type": "contrast",
        "title": "經典俗諺跨文化價值觀映射",
        "columns": [
          {
            "label": "字面物象 (Image)",
            "status": "採摘果實與栽樹農夫",
            "example": "Ăn quả nhớ kẻ trồng cây.",
            "note": "純粹農業勞作意象"
          },
          {
            "label": "文化寄寓 (Value)",
            "status": "飲水思源、知恩圖報",
            "example": "尊師重道、不忘師長提攜",
            "note": "越南核心儒道文化倫理"
          }
        ]
      }
    },
    {
      "concept": "六八體的押韻位置",
      "syntax": "Vần lưng (腰韻) ↔ Vần chân (腳韻) 交織網",
      "usage": "第一行末字（第6音節）與第二行第6音節押韻；第二行末字（第8音節）再與第三行末字（第6音節）押韻，形成流暢宛如流水之韻網。",
      "trap": "背誦詩句時斷句錯誤，把韻腳拆散，失去音樂感。",
      "mnemonic": "「腳韻承接腰韻起，環環相扣六八詩。」",
      "infograph": {
        "type": "steps",
        "title": "六八體腰腳韻流動環扣",
        "steps": [
          {
            "level": "上行句末 (腳韻)",
            "tag": "第6音節",
            "ex": "Trải qua một cuộc bể dâu (dâu)"
          },
          {
            "level": "下行中腰 (腰韻)",
            "tag": "第6音節",
            "ex": "Những điều trông thấy mà đau (đau) đớn lòng"
          },
          {
            "level": "連綿諧音",
            "tag": "韻母對應",
            "ex": "dâu ↔ đau 抑揚頓挫相呼應"
          }
        ]
      }
    },
    {
      "concept": "漢越詞與固有詞",
      "syntax": "phụ nữ (漢越尊崇/書面) vs đàn bà (固有詞/口語平實)",
      "usage": "漢越詞通常承載正式、崇高、書面、法定的語域（如 phụ nữ: 婦女）；純越固有詞則生動、親切、世俗口語（如 đàn bà: 女人/妻子）。",
      "trap": "在國家紀念日或正式致辭中將 phụ nữ 說成 đàn bà，會被視為嚴重失態。",
      "mnemonic": "「公堂致辭用 phụ nữ，世俗口語說 đàn bà。」",
      "infograph": {
        "type": "contrast",
        "title": "漢越語層與純越語層之語域兩極化",
        "columns": [
          {
            "label": "漢越層 (Trang trọng 正式)",
            "status": "公文、社論、儀典",
            "example": "phụ nữ (婦女)",
            "note": "帶有崇高、法律與學術色彩"
          },
          {
            "label": "純越層 (Thường nhật 日常)",
            "status": "生活、市井口語",
            "example": "đàn bà (女人)",
            "note": "具象親近，但在正式公文顯失禮"
          }
        ]
      }
    },
    {
      "concept": "公告語域",
      "syntax": "Chúng tôi xin thông báo… (官方公文公佈程式語)",
      "usage": "企業或官方機構向大眾發佈公告時，固定以「Chúng tôi xin thông báo…（本公司謹此通告…）」作為莊嚴開頭。",
      "trap": "把通告開頭寫成口語化的「Tôi muốn nói cho mọi người」，缺乏組織官方權威度。",
      "mnemonic": "「官方發文 xin thông báo，字正腔圓顯威儀。」",
      "infograph": {
        "type": "slots",
        "title": "官方通告標準程式語槽位",
        "slots": [
          {
            "label": "主體機關",
            "val": "Chúng tôi"
          },
          {
            "label": "敬辭前導",
            "val": "xin"
          },
          {
            "label": "核心法定行為",
            "val": "thông báo"
          },
          {
            "label": "後續公告條文",
            "val": "về việc…"
          }
        ]
      }
    },
    {
      "concept": "四字成語",
      "syntax": "Đồng tâm hiệp lực (四字四音同源漢越成語)",
      "usage": "越南大量保留並高頻使用漢越四字成語，如「Đồng tâm hiệp lực（同心協力）」，在會議動員、演說或慶典中具備高度修辭說服力。",
      "trap": "把四字成語各字隨意倒裝，破壞了千百年沉澱的固定音韻節奏。",
      "mnemonic": "「四字鏗鏘字根純，同心協力眾志成。」",
      "infograph": {
        "type": "slots",
        "title": "漢越四字成語節奏平衡對仗",
        "slots": [
          {
            "label": "前支前件",
            "val": "Đồng (同)"
          },
          {
            "label": "前支後件",
            "val": "tâm (心)"
          },
          {
            "label": "後支前件",
            "val": "hiệp (協)"
          },
          {
            "label": "後支後件",
            "val": "lực (力)"
          }
        ]
      }
    }
  ],
  "conversation": [
    {
      "concept": "開啟需求",
      "syntax": "[S] + muốn + [Hành động / Dịch vụ] (提出初衷需求)",
      "usage": "對話開場直奔主題，明確宣告核心意圖：「Tôi muốn đặt một phòng（我想預訂一間房間）」，讓服務人員立即進入專用業務流程。",
      "trap": "開場迂迴過長或只說「Xin chào」後沉默，增加前台接待的猜測成本。",
      "mnemonic": "「開門見山 Tôi muốn 啟，明確需求事半倍。」",
      "infograph": {
        "type": "slots",
        "title": "商務服務預約初衷表達槽位",
        "slots": [
          {
            "label": "主體",
            "val": "Tôi"
          },
          {
            "label": "意願模態",
            "val": "muốn"
          },
          {
            "label": "預定動詞",
            "val": "đặt"
          },
          {
            "label": "標的規格",
            "val": "một phòng."
          }
        ]
      }
    },
    {
      "concept": "澄清訊息",
      "syntax": "[Đối tượng] + có thể + nhắc lại + được không? (請求澄清覆述)",
      "usage": "在電話或吵雜環境中聽不清關鍵資訊時，禮貌請求：「Anh có thể nhắc lại được không?（可以請您再重複一次嗎？）」，避免因誤聽造成損失。",
      "trap": "沒聽清卻假裝聽懂直接點頭答應，後續造成嚴重的預約日期或房型錯誤。",
      "mnemonic": "「聽不清請 nhắc lại，重述核對最安心。」",
      "infograph": {
        "type": "slots",
        "title": "資訊澄清與請求覆述槽位",
        "slots": [
          {
            "label": "對象尊稱",
            "val": "Anh"
          },
          {
            "label": "能願框架",
            "val": "có thể"
          },
          {
            "label": "覆述動作",
            "val": "nhắc lại"
          },
          {
            "label": "協商後綴",
            "val": "được không?"
          }
        ]
      }
    },
    {
      "concept": "確認與收尾",
      "syntax": "Vậy là + [Thông tin cốt lõi] , đúng không? (關鍵細節鎖定)",
      "usage": "對話收束前將關鍵數字與條件做最後盤點：「Vậy là hai đêm, đúng không?（所以是兩個晚上，對嗎？）」，雙方簽認共同認知。",
      "trap": "沒有最後確認就掛電話或離開櫃檯，發生爭執時缺乏口頭覆核基礎。",
      "mnemonic": "「Vậy là 總結關鍵數，đúng không 確證定乾坤。」",
      "infograph": {
        "type": "slots",
        "title": "預訂細節閉環覆核積木",
        "slots": [
          {
            "label": "總結前導",
            "val": "Vậy là"
          },
          {
            "label": "核心條件",
            "val": "hai đêm,"
          },
          {
            "label": "確證問標",
            "val": "đúng không?"
          }
        ]
      }
    },
    {
      "concept": "接續追問",
      "syntax": "Còn + [Chủ đề bổ sung] + thì sao? (連貫深入探詢)",
      "usage": "談妥主要項目後，用「Còn…thì sao?（那…又如何呢？）」追問附隨條款（如 Còn bữa sáng thì sao?: 那早餐的部分呢？），自然推展話題。",
      "trap": "每次追問都重起一個完整主謂長句，顯得機械生硬且缺乏對話彈性。",
      "mnemonic": "「Còn 引補充項，thì sao 探究竟。」",
      "infograph": {
        "type": "slots",
        "title": "附加項目追問省略結構",
        "slots": [
          {
            "label": "補充轉折",
            "val": "Còn"
          },
          {
            "label": "追問焦點",
            "val": "bữa sáng"
          },
          {
            "label": "態勢評估",
            "val": "thì sao?"
          }
        ]
      }
    },
    {
      "concept": "即時改口",
      "syntax": "Xin lỗi, ý tôi là + [Nội dung đính chính] (主動即時修正)",
      "usage": "發現自己口誤說錯日期或規格時，立刻啟動修復機制：「Xin lỗi, ý tôi là thứ sáu（抱歉，我的意思是星期五）」，展現溝通專業度。",
      "trap": "說錯後任由錯誤延續，或支支吾吾不給出明確的更正標的。",
      "mnemonic": "「說錯立刻 ý tôi là，及時更正省周折。」",
      "infograph": {
        "type": "flow",
        "title": "口誤即時修復與澄清流程",
        "steps": [
          {
            "title": "察覺口誤",
            "desc": "發現剛才報錯星期或數字"
          },
          {
            "title": "禮貌煞車",
            "desc": "Xin lỗi (抱歉)"
          },
          {
            "title": "定向更正",
            "desc": "ý tôi là thứ sáu (我的意思是週五)"
          }
        ]
      }
    },
    {
      "concept": "確認共同結論",
      "syntax": "Vậy chúng ta + [Hành động chung] + nhé. (共識約定確立)",
      "usage": "商務或社交告別前，總結雙方共同約定：「Vậy chúng ta gặp lúc chín giờ nhé（那我們九點碰面喔）」，確認行程步調完全一致。",
      "trap": "沒有敲定碰面時間就說再見，雙方認知不同步導致赴約撲空。",
      "mnemonic": "「Vậy chúng ta 聚共識，nhé 字輕快定約程。」",
      "infograph": {
        "type": "slots",
        "title": "行動共識收斂標準槽位",
        "slots": [
          {
            "label": "總結前導",
            "val": "Vậy"
          },
          {
            "label": "共同主體",
            "val": "chúng ta"
          },
          {
            "label": "共識行動",
            "val": "gặp lúc chín giờ"
          },
          {
            "label": "約定助詞",
            "val": "nhé."
          }
        ]
      }
    },
    {
      "concept": "話題轉換",
      "syntax": "À, nhân tiện… + [Chủ đề phát sinh] (自然插入關聯話題)",
      "usage": "談妥核心公務後，以「À, nhân tiện…（啊，順便一提…）」優雅過渡到周邊生活或餐廳詢問，是建立人脈關係的最佳潤滑劑。",
      "trap": "突兀轉換無關主題，讓對方覺得思維跳躍缺乏邏輯。",
      "mnemonic": "「À nhân tiện 順水推，話題轉換顯情商。」",
      "infograph": {
        "type": "flow",
        "title": "話題分支平滑衍生路徑",
        "steps": [
          {
            "title": "主話題閉環",
            "desc": "公務訂單確認完畢"
          },
          {
            "title": "過渡引導詞",
            "desc": "À, nhân tiện… (啊，順便一提)"
          },
          {
            "title": "周邊生活話題",
            "desc": "附近有什麼道地美食？"
          }
        ]
      }
    },
    {
      "concept": "表達不同意見",
      "syntax": "Tôi hiểu, nhưng tôi nghĩ + [Góc nhìn khác] (先同理後持平反饋)",
      "usage": "職場表達異見的最高情商典範：「Tôi hiểu, nhưng tôi nghĩ khác một chút（我理解，不過我的想法有些微不同）」，先肯定對方，再陳述己見。",
      "trap": "直接說「Sai rồi!（錯了！）」甚至當眾反駁，在注重體面的越南職場會引發強烈防禦心態。",
      "mnemonic": "「先說 Tôi hiểu 表同理，後言 nghĩ khác 和氣生。」",
      "infograph": {
        "type": "contrast",
        "title": "生硬否定 vs 同理委婉異見對抗矩陣",
        "columns": [
          {
            "label": "生硬否定 (高衝突)",
            "status": "直接否定對方",
            "example": "Sai rồi! / Không đúng!",
            "note": "破壞團隊信任與溝通氛圍"
          },
          {
            "label": "同理反饋 (建設性)",
            "status": "同理先行，溫和提案",
            "example": "Tôi hiểu, nhưng tôi nghĩ khác…",
            "note": "既維持和氣又精準傳遞立場"
          }
        ]
      }
    },
    {
      "concept": "結束對話",
      "syntax": "Thôi, [S] + phải đi rồi. Hẹn gặp lại! (標準告退收尾式)",
      "usage": "結束長談的乾脆體面句型：「Thôi, tôi phải đi rồi. Hẹn gặp lại!（好了，我得走了，下次見！）」兼顧抽身合理性與未來期許。",
      "trap": "沒有預告突然中斷話題離場，顯得心不在焉或缺乏禮貌。",
      "mnemonic": "「Thôi 字起句要告退，hẹn gặp lại 再相約。」",
      "infograph": {
        "type": "slots",
        "title": "體面告退雙段閉環",
        "slots": [
          {
            "label": "抽身引導",
            "val": "Thôi, tôi phải đi rồi."
          },
          {
            "label": "再會期許",
            "val": "Hẹn gặp lại!"
          }
        ]
      }
    }
  ],
  "accent": [
    {
      "concept": "拼字不變",
      "syntax": "Hỏi (?) vs Ngã (~) (南部發音合流，正字法各守其位)",
      "usage": "越南南部與湄公河三角洲口音中，問聲（hỏi）與跌聲（ngã）發音完全合流，均讀為低凹升調 /312/；但書寫正字法規範中依然必須嚴格分立，不可擅改調符。",
      "trap": "在南部生活久了後，寫信或公文將所有跌聲都寫成問聲，被視為正字法書寫嚴重失誤。",
      "mnemonic": "「南越發音合為一，正字法度兩分明。」",
      "infograph": {
        "type": "contrast",
        "title": "問跌兩聲南音合流與正字分立",
        "columns": [
          {
            "label": "北部發音 (兩調分立)",
            "status": "聲質音高嚴格區分",
            "example": "mả (墳) ≠ mã (代碼)",
            "note": "跌聲帶喉部緊縮中斷"
          },
          {
            "label": "南部發音 (合流問調)",
            "status": "讀音統一為 /312/",
            "example": "mả ＝ mã 讀音相同",
            "note": "文字書寫必須維持正確調符"
          }
        ]
      }
    },
    {
      "concept": "詞彙對照",
      "syntax": "Bắc: bố, ngô vs Nam: ba, bắp (雙城核心生活詞彙映射)",
      "usage": "父親在河內稱「bố」，在胡志明市稱「ba」；玉米在北部稱「ngô」，在南部稱「bắp」。熟記雙城生活詞彙對照，點菜與日常問候暢通無阻。",
      "trap": "在胡志明市菜市場向攤販要 ngô，攤販可能一時愣住不知道你要買玉米。",
      "mnemonic": "「北 bố 南 ba 叫父親，北 ngô 南 bắp 嚼玉米。」",
      "infograph": {
        "type": "matrix",
        "title": "河內 vs 胡志明市高頻核心生活詞彙對照",
        "headers": [
          "日常事物",
          "北部習慣用詞 (河內)",
          "南部習慣用詞 (胡志明市)"
        ],
        "rows": [
          [
            "父親",
            "bố",
            "ba / tía"
          ],
          [
            "玉米",
            "ngô",
            "bắp"
          ],
          [
            "花生",
            "lạc",
            "đậu phộng"
          ],
          [
            "機車",
            "xe máy",
            "xe honda / xe máy"
          ]
        ]
      }
    },
    {
      "concept": "聽辨策略",
      "syntax": "[S] + không hiểu + từ này. (遇到方言陌生詞主動求教)",
      "usage": "在異地遇到不熟悉的方言詞彙時，坦率發問：「Tôi không hiểu từ này（我不懂這個詞）」，請對方提供標準通用語對應。",
      "trap": "遇到方言生詞硬猜，導致對話徹底偏離原意。",
      "mnemonic": "「方言生詞莫瞎猜，Tôi không hiểu 敞心懷。」",
      "infograph": {
        "type": "flow",
        "title": "方言差異定點排查三步法",
        "steps": [
          {
            "title": "捕捉疑詞",
            "desc": "發現該詞完全對不上所學"
          },
          {
            "title": "坦誠發問",
            "desc": "Tôi không hiểu từ này."
          },
          {
            "title": "換取通用詞",
            "desc": "請對方以標準越語解釋"
          }
        ]
      }
    },
    {
      "concept": "地區代詞",
      "syntax": "Bắc: đâu vs Nam: ở đâu (處所疑問詞口語省略習慣)",
      "usage": "詢問地點處所時，北部口語偏好精簡的「đâu（如 Đi đâu thế?）」，南部則習慣完整說「ở đâu（如 Đi đâu vậy? / Ở đâu nè?）」。",
      "trap": "在北方誤將單純的 đâu 當成其他疑問句，忽視其處所核心功能。",
      "mnemonic": "「北愛單字 đâu 俐落，南隨 ở đâu 韻味悠。」",
      "infograph": {
        "type": "contrast",
        "title": "處所代詞南北口語使用頻率對照",
        "columns": [
          {
            "label": "北部習慣 (đâu 居多)",
            "status": "短促精練",
            "example": "Đi đâu thế?",
            "note": "節奏緊湊明快"
          },
          {
            "label": "南部習慣 (ở đâu / đâu nè)",
            "status": "舒展親切",
            "example": "Ở đâu vậy nè?",
            "note": "語調溫和拉長"
          }
        ]
      }
    },
    {
      "concept": "用詞對照",
      "syntax": "Bắc: thìa vs Nam: muỗng (餐飲器皿南北稱謂)",
      "usage": "在餐館索取湯匙：北部稱「cái thìa」，南部稱「cái muỗng」。掌握餐具南北差異是生活自理的必修課。",
      "trap": "在河內餐館向店家大喊「Cho tôi cái muỗng」，服務生可能要頓一下才意會過來。",
      "mnemonic": "「南方舀湯稱 cái muỗng，北方進餐叫 cái thìa。」",
      "infograph": {
        "type": "contrast",
        "title": "餐桌核心器皿南北用詞對立",
        "columns": [
          {
            "label": "北部餐桌 (thìa)",
            "status": "河內及北方各省",
            "example": "Cho tôi xin cái thìa.",
            "note": "北方傳統正字習慣"
          },
          {
            "label": "南部餐桌 (muỗng)",
            "status": "胡志明市及南方各省",
            "example": "Cho tôi xin cái muỗng.",
            "note": "南方民間主流用語"
          }
        ]
      }
    },
    {
      "concept": "請對方換說法",
      "syntax": "Từ này có nghĩa là gì? (請求換位釋義核心句)",
      "usage": "當對方口音過重或使用地方俗語時，請對方給出定義：「Từ này có nghĩa là gì?（這個詞是什麼意思？）」，化解口音與地域壁壘。",
      "trap": "只會重複問「Hả?」，讓對方以為是聽覺問題而非詞意障礙。",
      "mnemonic": "「俗語難明莫犯愁，có nghĩa là gì 探源流。」",
      "infograph": {
        "type": "slots",
        "title": "語義求問標準結構積木",
        "slots": [
          {
            "label": "指涉目標",
            "val": "Từ này"
          },
          {
            "label": "語義框架",
            "val": "có nghĩa là"
          },
          {
            "label": "疑問核心",
            "val": "gì?"
          }
        ]
      }
    },
    {
      "concept": "南北語氣詞",
      "syntax": "Bắc: thế (Đi đâu thế?) vs Nam: vậy (Đi đâu vậy?)",
      "usage": "北方偏好以「thế」收尾疑問句（Đi đâu thế?），語調俐落；南方偏好以「vậy」收尾（Đi đâu vậy?），語氣溫婉親切。",
      "trap": "在北方刻意學南方的「vậy nè」，在當地人聽來顯得稍微做作不自然。",
      "mnemonic": "「北方問句尾帶 thế，南方閒聊伴 vậy 隨。」",
      "infograph": {
        "type": "contrast",
        "title": "南北問句終結助詞情感對照",
        "columns": [
          {
            "label": "北部助詞 (thế)",
            "status": "探詢明快俐落",
            "example": "Đi đâu thế?",
            "note": "符合北方嚴謹簡練之語言審美"
          },
          {
            "label": "南部助詞 (vậy)",
            "status": "親切溫婉柔和",
            "example": "Đi đâu vậy?",
            "note": "符合南方隨和熱情之社交風格"
          }
        ]
      }
    },
    {
      "concept": "南部自稱習慣",
      "syntax": "Dạ, con cảm ơn cô (南部自謙晚輩稱 con 展至親之德)",
      "usage": "在南部社會，年幼晚輩或面對長輩甚至長輩顧客時，自稱「con（兒輩）」極為普遍（Dạ, con cảm ơn cô），能瞬間拉近如家人般的深厚情感。",
      "trap": "外國人聽到店員自稱 con 以為對方真是自己小孩，其實是南方傳統長幼禮貌體系。",
      "mnemonic": "「南越自稱 con 顯謙遜，如侍長親溫情溢。」",
      "infograph": {
        "type": "contrast",
        "title": "南方獨特晚輩自謙「con」之社交維度",
        "columns": [
          {
            "label": "北部常規自稱 (em / cháu)",
            "status": "維持表親或晚輩距",
            "example": "Em cảm ơn chị / cô.",
            "note": "長幼分明，維持標準距離"
          },
          {
            "label": "南部溫情自稱 (con)",
            "status": "視同至親晚輩自稱",
            "example": "Dạ, con cảm ơn cô.",
            "note": "極高親和力與孝悌社會倫理"
          }
        ]
      }
    },
    {
      "concept": "聽辨三步驟",
      "syntax": "Anh nói giọng miền nào? ➔ 聽音辨區 ➔ 轉化對齊",
      "usage": "克服口音三步驟：先確認對方是哪裡人「Anh nói giọng miền nào?（您是哪個地區的口音？）」，大腦立刻切換對應的南北音變規則進行解碼。",
      "trap": "將南越口音當成「發音錯誤」，忽視越南南北方言皆為法定通行標準。",
      "mnemonic": "「先問 giọng miền nào，大腦切換南北道。」",
      "infograph": {
        "type": "flow",
        "title": "跨地區口音解碼三部曲",
        "steps": [
          {
            "title": "第1步：詢問地區",
            "desc": "Anh nói giọng miền nào?"
          },
          {
            "title": "第2步：載入音變規律",
            "desc": "切換 d/gi ➔ /j/，合流 hỏi/ngã"
          },
          {
            "title": "第3步：語意自然暢通",
            "desc": "消除聽力障礙，雙向順暢交流"
          }
        ]
      }
    }
  ],
  "shadowing": [
    {
      "concept": "先理解",
      "syntax": "Comprehension first: Tôi hiểu câu này rồi (語意通透方開口)",
      "usage": "跟讀的第一鐵律：在開口跟讀前，先確認已徹底理解句子的語法構造與精準語義（Tôi hiểu câu này rồi），拒絕無意義的機械學舌。",
      "trap": "連意思都沒搞懂就開口跟讀，嘴皮在動大腦卻無法建立任何認知迴路。",
      "mnemonic": "「先求理解後開腔，語意通透聲自昂。」",
      "infograph": {
        "type": "flow",
        "title": "跟讀法神經認知三階鏈條",
        "steps": [
          {
            "title": "解碼聽懂",
            "desc": "理解語意結構與詞彙邊界"
          },
          {
            "title": "大腦調頻",
            "desc": "捕捉重音、音高走勢與停頓"
          },
          {
            "title": "發音外化",
            "desc": "聲帶肌肉跟隨母語原音共振"
          }
        ]
      }
    },
    {
      "concept": "再跟讀",
      "syntax": "Synchronous shadow: Xin chào, tôi là học viên mới (肌肉記憶形成)",
      "usage": "理解後開啟音訊，母語者發聲0.5秒後，緊隨其後進行同步跟讀，刻意模仿六聲調起伏與尾音閉塞，建立口腔肌肉記憶。",
      "trap": "母語者念完停了才跟著念，這叫「複讀（Repetition）」，無法訓練大腦高強度即時處理語流的反應力。",
      "mnemonic": "「緊貼原音半步差，如影隨形共天涯。」",
      "infograph": {
        "type": "slots",
        "title": "跟讀同步聲學共振結構",
        "slots": [
          {
            "label": "母語引導波",
            "val": "Xin chào, tôi là học viên mới."
          },
          {
            "label": "學員跟讀波",
            "val": "…Xin chào, tôi là học viên mới. (延遲0.5秒)"
          }
        ]
      }
    },
    {
      "concept": "最後重述",
      "syntax": "Independent re-production: Tôi muốn đặt một phòng (脫稿獨立輸出)",
      "usage": "跟讀三至五遍後關閉音訊，在不看文字、不聽聲音的狀態下，完全憑大腦提取並流利重述出該句子，完成從輸入到自主輸出的終極閉環。",
      "trap": "只要有原音帶著念就很順，一旦音訊關閉就一句也說不出來。",
      "mnemonic": "「脫稿獨立能重述，方知真本領已成。」",
      "infograph": {
        "type": "flow",
        "title": "語言內化閉環三位階",
        "steps": [
          {
            "title": "第1階：先理解",
            "desc": "Tôi hiểu câu này rồi."
          },
          {
            "title": "第2階：再跟讀",
            "desc": "跟隨母語原音同步調頻"
          },
          {
            "title": "第3階：最後重述",
            "desc": "脫稿獨立流利說出"
          }
        ]
      }
    },
    {
      "concept": "由短到長",
      "syntax": "Chunk expansion: Tôi muốn đặt phòng ➔ cho hai người ➔ vào tối mai",
      "usage": "跟讀短句熟練後，以核心句幹逐步向外擴展修飾短語，訓練工作記憶（Working Memory）容量。",
      "trap": "一開始挑戰三行長句，跟到後半截就大腦超載卡死崩潰。",
      "mnemonic": "「短句扎根枝葉展，漸次拉長力不衰。」",
      "infograph": {
        "type": "steps",
        "title": "語塊漸進式擴展生長梯",
        "steps": [
          {
            "level": "第1階 (核心句幹)",
            "tag": "S + V + O",
            "ex": "Tôi muốn đặt phòng."
          },
          {
            "level": "第2階 (對象補充)",
            "tag": "+ Người thụ hưởng",
            "ex": "Tôi muốn đặt phòng cho hai người."
          },
          {
            "level": "第3階 (時間條件)",
            "tag": "+ Thời gian",
            "ex": "Tôi muốn đặt phòng cho hai người tối mai."
          }
        ]
      }
    },
    {
      "concept": "延遲重現",
      "syntax": "Delay 1-2 syllables shadowing (影子延遲輸出)",
      "usage": "跟讀的原意即為「影子」：母語者念出1-2個音節後，學習者如同影子般在後方0.5秒即時跟出，強迫大腦並行「聽」與「說」。",
      "trap": "等母語者念完全句停頓後才念，這叫「複讀（Repetition）」而非「跟讀（Shadowing）」。",
      "mnemonic": "「延遲兩字隨後跟，如影隨形同共振。」",
      "infograph": {
        "type": "timeline",
        "title": "真跟讀影子延遲時序圖 (0.5秒差)",
        "stages": [
          {
            "tag": "原音先行",
            "desc": "Tôi muốn…",
            "ex": "母語者先發聲"
          },
          {
            "tag": "延遲切入",
            "desc": "…Tôi muốn…",
            "ex": "學習者落後 1~2 音節跟隨"
          },
          {
            "tag": "同步並行",
            "desc": "đặt phòng cho hai người.",
            "ex": "雙軌音頻重疊行進"
          }
        ]
      }
    },
    {
      "concept": "替換與重述",
      "syntax": "Slot substitution: Chúng tôi muốn đặt [hai phòng / bàn ăn]",
      "usage": "在跟讀完固定句型後，立刻將主詞或名詞進行同義替換並重新說出，驗證是否真正將句型轉化為活的語言能力。",
      "trap": "只會死背特定例句，換一個主詞或數字就啞口無言。",
      "mnemonic": "「原句跟熟動手換，抽換主賓展神通。」",
      "infograph": {
        "type": "slots",
        "title": "核心句型槽位自由替換積木",
        "slots": [
          {
            "label": "主詞抽換",
            "val": "Chúng tôi (原 Tôi)"
          },
          {
            "label": "動詞固定",
            "val": "muốn đặt"
          },
          {
            "label": "賓語抽換",
            "val": "hai phòng (原 một phòng)"
          }
        ]
      }
    },
    {
      "concept": "句調與情緒",
      "syntax": "Affective prosody: Thật à? (疑問意外) vs Thật! (堅定確證)",
      "usage": "語言不僅是文字，更是情緒的載體。練習以「Thật à?」表達難以置信的驚奇，以「Thật!」表達斬釘截鐵的確證。",
      "trap": "聲音扁平如機器人念經，無法傳遞真實人際互動的情感張力。",
      "mnemonic": "「聲調帶情感，喜怒哀樂全在調。」",
      "infograph": {
        "type": "contrast",
        "title": "同一字詞不同情緒語調對照",
        "columns": [
          {
            "label": "Thật à? (意外驚奇)",
            "status": "音高上揚帶探詢",
            "example": "Thật à? Đừng đùa nhé!",
            "note": "展現不可思議之驚奇情感"
          },
          {
            "label": "Thật! (無庸置疑)",
            "status": "音高急促頓挫",
            "example": "Thật mà! Tin tôi đi!",
            "note": "展現確鑿不移之堅定決心"
          }
        ]
      }
    },
    {
      "concept": "停頓位置",
      "syntax": "Pause at syntactic boundary: [Tôi muốn đi] / nhưng [trời mưa].",
      "usage": "長句朗讀不可在詞語中間換氣，必須在意群邊界（如連接詞 nhưng, vì, khi 前）自然微停，維持語意結構清晰。",
      "trap": "在 danh từ 與 tính từ 之間（如 một cuốn / sách mới）突兀換氣斷句，破壞語義單位。",
      "mnemonic": "「換氣停頓看意群，莫將詞素腰斬分。」",
      "infograph": {
        "type": "slots",
        "title": "語意邊界正確換氣停頓槽位",
        "slots": [
          {
            "label": "意群 A (主行動)",
            "val": "Tôi muốn đi"
          },
          {
            "label": "換氣停頓口 (／)",
            "val": "［氣息微頓］"
          },
          {
            "label": "意群 B (轉折背景)",
            "val": "nhưng trời mưa."
          }
        ]
      }
    },
    {
      "concept": "錄音自評",
      "syntax": "Self-recording & waveform/pitch visual audit",
      "usage": "將自己的跟讀錄音放出來，與原音音檔做 A/B 比對，找出音高飄掉、尾音漏塞或搶拍的客觀差距（Lần này tôi đọc rõ hơn）。",
      "trap": "光靠說話當下的骨傳導自以為完美，聽錄音才發現滿篇嚴重跑調。",
      "mnemonic": "「耳聽原音心有秤，雙軌比對見真章。」",
      "infograph": {
        "type": "flow",
        "title": "雙軌錄音客觀自評循環",
        "steps": [
          {
            "title": "輸出錄音",
            "desc": "同步錄製自己的跟讀語音"
          },
          {
            "title": "交疊放音",
            "desc": "左耳原音、右耳自錄切換"
          },
          {
            "title": "定點圈錯",
            "desc": "標示出走音、搶拍之音節"
          },
          {
            "title": "疊代重製",
            "desc": "重錄直到語調完全合拍"
          }
        ]
      }
    }
  ],
  "business": [
    {
      "concept": "條件協商",
      "syntax": "Nếu đặt + [Số lượng] + sản phẩm thì + [Đề xuất về giá]?",
      "usage": "採購階梯報價談判金句。以量換價：Nếu đặt 500 sản phẩm thì giá thế nào?（如果訂購500件那價格如何？），展現專業商業談判架勢。",
      "trap": "直接要求降價而不願給予訂單量承諾，違反商業對等原則。",
      "mnemonic": "「量大價優 Nếu 開頭，商務協商看籌碼。」",
      "infograph": {
        "type": "slots",
        "title": "階梯採購以量換價談判積木",
        "slots": [
          {
            "label": "條件假設",
            "val": "Nếu đặt"
          },
          {
            "label": "採購規模",
            "val": "500 sản phẩm"
          },
          {
            "label": "推論後續",
            "val": "thì giá thế nào?"
          }
        ]
      }
    },
    {
      "concept": "交期與品質",
      "syntax": "Xin xác nhận + [Ngày giao hàng] + và + [Tiêu chuẩn chất lượng].",
      "usage": "訂單成立前必備雙重確認：「交貨期（ngày giao hàng / Lead time）」與「品質標準（tiêu chuẩn chất lượng / Quality standard）」，杜絕後續驗收糾紛。",
      "trap": "只談妥價格卻未白紙黑字約定 AQL 抽檢品質標準，造成進料不良時無法索賠。",
      "mnemonic": "「交期品質雙把關，合約落實免生患。」",
      "infograph": {
        "type": "contrast",
        "title": "外貿出貨兩大核心生命線",
        "columns": [
          {
            "label": "交期管理 (Delivery Lead Time)",
            "status": "確認出貨排程",
            "example": "Ngày giao hàng: 15/11",
            "note": "逾期違約金與空運賠償責任"
          },
          {
            "label": "品質標準 (Quality Criteria)",
            "status": "確認驗收公約",
            "example": "Tiêu chuẩn chất lượng: AQL 1.0",
            "note": "抽檢允收標準與退貨處置機制"
          }
        ]
      }
    },
    {
      "concept": "正式書信",
      "syntax": "開頭: Kính gửi quý công ty, ； 結尾: Trân trọng,",
      "usage": "商務正式信件公函標準框架：首行尊稱「Kính gửi quý công ty,（致貴公司）」，收尾敬稱「Trân trọng,（順頌商祺）」，署名全名與職稱。",
      "trap": "信末隨便寫口語的「Tạm biệt」或「Bye」，破壞企業專業形象。",
      "mnemonic": "「Kính gửi 啟端莊，Trân trọng 結篇章。」",
      "infograph": {
        "type": "slots",
        "title": "越南標準商務書函頭尾結構",
        "slots": [
          {
            "label": "頂頭敬啟",
            "val": "Kính gửi quý công ty,"
          },
          {
            "label": "主體內容",
            "val": "［商務洽談正文］"
          },
          {
            "label": "結尾敬稱",
            "val": "Trân trọng,"
          }
        ]
      }
    },
    {
      "concept": "會議待辦",
      "syntax": "Ai phụ trách việc này? (落實 Action Item 責任歸屬)",
      "usage": "會議結束前明確執行責任人（PIC / Người phụ trách）：Ai phụ trách việc này?（這件事由誰負責？），確保每項決策都有專人跟進。",
      "trap": "會議大談宏圖卻無人指名負責，下週複盤依然原地踏步。",
      "mnemonic": "「責任到人問一句，Ai phụ trách 定江山。」",
      "infograph": {
        "type": "flow",
        "title": "商業會議決策閉環落實鏈",
        "steps": [
          {
            "title": "決策達成",
            "desc": "確認行動方案"
          },
          {
            "title": "責任指派",
            "desc": "Ai phụ trách việc này?"
          },
          {
            "title": "明確時限",
            "desc": "Hoàn thành trước thứ sáu"
          }
        ]
      }
    },
    {
      "concept": "保留與建議",
      "syntax": "Chúng tôi đề nghị + [Nội dung điều chỉnh / gia hạn] (委婉調整)",
      "usage": "面對無法達成的期限，以商務口氣提出調整建議：Chúng tôi đề nghị điều chỉnh thời hạn（我方建議調整期限），比直接回絕更有建設性。",
      "trap": "未經溝通單方面逾期擺爛，造成信譽歸零。",
      "mnemonic": "「直接回絕傷和氣，đề nghị 建議拓新機。」",
      "infograph": {
        "type": "slots",
        "title": "專業協商修正提案積木",
        "slots": [
          {
            "label": "法人主體",
            "val": "Chúng tôi"
          },
          {
            "label": "提請動詞",
            "val": "đề nghị"
          },
          {
            "label": "調整內容",
            "val": "điều chỉnh thời hạn."
          }
        ]
      }
    },
    {
      "concept": "條款語彙",
      "syntax": "điều khoản bất khả kháng (不可抗力免責法言法語)",
      "usage": "涉外商業合約必備法律條款：天災、戰爭或罷工觸發之「不可抗力條款（điều khoản bất khả kháng）」，限定免責範疇。",
      "trap": "將一般供應鏈延遲硬說成不可抗力，面臨鉅額法律求償。",
      "mnemonic": "「法律條款字如金，bất khả kháng 認天災。」",
      "infograph": {
        "type": "matrix",
        "title": "越南商業合約五大必備法定條款",
        "headers": [
          "條款名稱",
          "越文法定用語",
          "核心法律意涵"
        ],
        "rows": [
          [
            "不可抗力條款",
            "Điều khoản bất khả kháng",
            "天災戰亂不可歸責免罰"
          ],
          [
            "違約賠償",
            "Bồi thường thiệt hại",
            "界定違約金額與上限"
          ],
          [
            "爭議管轄",
            "Giải quyết tranh chấp",
            "約定仲裁 (VIAC) 或法院"
          ]
        ]
      }
    },
    {
      "concept": "委婉催促",
      "syntax": "Kính mong anh sớm phản hồi. (催件黃金禮貌句)",
      "usage": "跟進報價或合約審批時，催促對方回信：「Kính mong anh sớm phản hồi（敬請您儘早回覆）」，既傳達緊迫性又保有高度客氣。",
      "trap": "通訊軟體連發問號催促，顯得極度缺乏職場素養。",
      "mnemonic": "「急事催辦不失態，Kính mong phản hồi 展儒風。」",
      "infograph": {
        "type": "slots",
        "title": "商務禮貌催辦三要素",
        "slots": [
          {
            "label": "敬意祈使",
            "val": "Kính mong"
          },
          {
            "label": "對象稱謂",
            "val": "anh"
          },
          {
            "label": "時效修飾",
            "val": "sớm"
          },
          {
            "label": "期待動作",
            "val": "phản hồi."
          }
        ]
      }
    },
    {
      "concept": "附條件讓步",
      "syntax": "[S] + có thể giảm + [X%] + nếu + [Điều kiện thanh toán]",
      "usage": "談判中的交換籌碼原則：絕不無條件降價，必須換取對我方有利的條件（如 Chúng tôi có thể giảm 3% nếu thanh toán trước: 若預先全額付款我方可折讓3%）。",
      "trap": "客戶一砍價立刻退讓，對方只會覺得利潤水分很深而繼續深砍。",
      "mnemonic": "「讓步必帶附加條，預付折扣相平衡。」",
      "infograph": {
        "type": "flow",
        "title": "商業談判籌碼對等交換矩陣",
        "steps": [
          {
            "title": "客戶砍價",
            "desc": "要求額外價格折讓"
          },
          {
            "title": "防禦性讓步",
            "desc": "Chúng tôi có thể giảm 3%"
          },
          {
            "title": "索取對等籌碼",
            "desc": "nếu thanh toán trước 100%"
          }
        ]
      }
    },
    {
      "concept": "會議結論",
      "syntax": "Hai bên đã thống nhất các nội dung sau: (會議紀要核心字眼)",
      "usage": "會議收斂與簽署備忘錄（MOU）時，官方固定開篇句：Hai bên đã thống nhất các nội dung sau（雙方已就以下內容達成共識：）。",
      "trap": "會後無人產出紀要，口頭說過的話各執一詞死無對證。",
      "mnemonic": "「雙方共識 thống nhất 定，白紙黑字立紀要。」",
      "infograph": {
        "type": "slots",
        "title": "會議結論法定確認前綴",
        "slots": [
          {
            "label": "談判雙方",
            "val": "Hai bên"
          },
          {
            "label": "已然時態",
            "val": "đã"
          },
          {
            "label": "達成共識",
            "val": "thống nhất"
          },
          {
            "label": "下接條列",
            "val": "các nội dung sau:"
          }
        ]
      }
    }
  ],
  "macropol": [
    {
      "concept": "指標口徑",
      "syntax": "tăng trưởng (增長) · lạm phát (通膨) · tỷ giá (匯率)",
      "usage": "閱讀政經財經新聞的核心三大骨架宏觀指標：GDP 增長率（tăng trưởng）、消費者物價指數 CPI 通膨（lạm phát）、越盾兌美元匯率（tỷ giá）。",
      "trap": "把 lạm phát 誤看成「通貨緊縮」，混淆經濟景氣過熱與衰退方向。",
      "mnemonic": "「增長通膨與匯率，三大指標看越南。」",
      "infograph": {
        "type": "matrix",
        "title": "越南宏觀經濟三大核心儀表板",
        "headers": [
          "宏觀指標",
          "越文專用名詞",
          "關注政策門檻"
        ],
        "rows": [
          [
            "經濟增長率",
            "Tăng trưởng GDP",
            "目標區間 6.5% - 7.0%"
          ],
          [
            "通貨膨脹率",
            "Lạm phát (CPI)",
            "官方控制紅線 4.0% - 4.5%"
          ],
          [
            "外匯匯率",
            "Tỷ giá USD/VND",
            "央行中心匯率與波動區間"
          ]
        ]
      }
    },
    {
      "concept": "因果與保留",
      "syntax": "[Nguyên nhân] + có thể ảnh hưởng đến + [Chi phí/Lợi nhuận]",
      "usage": "政經分析必須嚴謹具備保留語氣：以「có thể ảnh hưởng đến…（可能對…產生影響）」表達潛在因果，避免把預測寫成絕對必然。",
      "trap": "把單一政策變動斷言為百分之百必定造成獲利崩跌，缺乏專業客觀度。",
      "mnemonic": "「分析客觀留退路，có thể ảnh hưởng 顯持平。」",
      "infograph": {
        "type": "slots",
        "title": "宏觀經濟保留因果鏈積木",
        "slots": [
          {
            "label": "政策驅動因",
            "val": "Điều này"
          },
          {
            "label": "可能性模態",
            "val": "có thể"
          },
          {
            "label": "影響動詞",
            "val": "ảnh hưởng đến"
          },
          {
            "label": "受波及標的",
            "val": "chi phí."
          }
        ]
      }
    },
    {
      "concept": "論證結構",
      "syntax": "Tuy nhiên, cần xem xét thêm + [Dữ liệu đối chiếu]",
      "usage": "深度評論文章常用的批判性反思句：Tuy nhiên, cần xem xét thêm dữ liệu（然而，仍需進一步審視相關數據），帶出對立面觀點。",
      "trap": "通篇文章一面倒歌功頌德或全盤唱衰，缺乏多維度數據交錯驗證。",
      "mnemonic": "「Tuy nhiên 轉折辨真偽，xem xét dữ liệu 辨乾坤。」",
      "infograph": {
        "type": "flow",
        "title": "專業論述立體思維結構",
        "steps": [
          {
            "title": "表面現象",
            "desc": "陳述當前主流指標數據"
          },
          {
            "title": "批判轉折",
            "desc": "Tuy nhiên, cần xem xét thêm…"
          },
          {
            "title": "深層實質",
            "desc": "隱蔽成本、債務或外部衝擊"
          }
        ]
      }
    },
    {
      "concept": "百分比與百分點",
      "syntax": "Percentage (%) vs Percentage point (điểm phần trăm)",
      "usage": "利率從 4% 調升到 5%，是上升了 1 個「百分點（điểm phần trăm）」，而非上升了 1%（實質相對增幅為 25%）。",
      "trap": "將百分點誤翻為百分比，在金融財報或借貸利息分析中會產生巨大的數字謬誤。",
      "mnemonic": "「四趴到五趴，是差一個百分點，莫算成一趴。」",
      "infograph": {
        "type": "contrast",
        "title": "百分比 (%) 與百分點 (Điểm phần trăm) 概念辨析",
        "columns": [
          {
            "label": "百分點 (Điểm phần trăm)",
            "status": "絕對利差增量",
            "example": "từ 4% lên 5% ＝ 1 điểm %",
            "note": "兩利率數值直接相減"
          },
          {
            "label": "百分比 (%)",
            "status": "相對成長幅度",
            "example": "(5-4)/4 ＝ 25% 增幅",
            "note": "以基期為分母計算之相對變化"
          }
        ]
      }
    },
    {
      "concept": "名目與實質",
      "syntax": "giá trị danh nghĩa (名目價值) vs giá trị thực (實質價值)",
      "usage": "扣除通膨率後的經濟產出才是真正增長：giá trị danh nghĩa 是未經物價調整的帳面數字，giá trị thực 才是購買力真相。",
      "trap": "看見營收名目增長 10% 狂喜，卻忽視通膨高達 12%，實質利潤其實在衰退。",
      "mnemonic": "「名目名義表面看，實質扣除通膨真。」",
      "infograph": {
        "type": "contrast",
        "title": "名目經濟指標 vs 實質購買力指標",
        "columns": [
          {
            "label": "Danh nghĩa (名目)",
            "status": "當期貨幣面值",
            "example": "giá trị danh nghĩa",
            "note": "受通貨膨脹膨脹之帳面金額"
          },
          {
            "label": "Thực (實質)",
            "status": "基期平減購買力",
            "example": "giá trị thực",
            "note": "剔除物價波動後之真實產能"
          }
        ]
      }
    },
    {
      "concept": "引述與作者立場",
      "syntax": "Theo báo cáo… (客觀引述) vs Theo tôi… (主觀評斷)",
      "usage": "閱讀政經報刊時必須嚴格區分「客觀引用機構報告（Theo báo cáo của Ngân hàng Thế giới）」與「專欄作者個人觀點（Theo tôi）」。",
      "trap": "把專欄作家的主觀推測誤當成世界銀行或政府發佈的官方權威政策。",
      "mnemonic": "「Theo báo cáo 據報告，Theo tôi 個人淺見明。」",
      "infograph": {
        "type": "contrast",
        "title": "客觀機構引述 vs 主觀評論立場",
        "columns": [
          {
            "label": "Theo báo cáo (官方/智庫)",
            "status": "第三方機構數據",
            "example": "Theo báo cáo của IMF…",
            "note": "具備統計公信力與方法論"
          },
          {
            "label": "Theo tôi (評論員個人)",
            "status": "作者主觀論述",
            "example": "Theo tôi, thị trường sẽ…",
            "note": "僅代表個人立場，需批判閱讀"
          }
        ]
      }
    },
    {
      "concept": "趨勢動詞",
      "syntax": "tăng mạnh (暴增) / giảm nhẹ (微跌) / đi ngang (盤整)",
      "usage": "精準刻畫財經走勢曲線：tăng mạnh（大幅飆升）、giảm nhẹ（小幅微調下跌）、đi ngang（橫盤整理/平穩）。",
      "trap": "只會用 tăng 與 giảm，無法精準傳達數據變動的幅度與震盪烈度。",
      "mnemonic": "「tăng mạnh 沖雲霄，giảm nhẹ 微回落，đi ngang 水波平。」",
      "infograph": {
        "type": "steps",
        "title": "財經趨勢動態三大走向向量",
        "steps": [
          {
            "level": "強烈上升",
            "tag": "tăng mạnh",
            "ex": "出口額突破歷史高位"
          },
          {
            "level": "橫向盤整",
            "tag": "đi ngang",
            "ex": "匯率維持在穩定波動區間"
          },
          {
            "level": "溫和回調",
            "tag": "giảm nhẹ",
            "ex": "物價指數呈現小幅微跌"
          }
        ]
      }
    },
    {
      "concept": "預測語氣",
      "syntax": "Dự kiến sẽ + [V] + khoảng + [Con số] (官方預估口吻)",
      "usage": "政府預算案或企業財測必備用語：Dự kiến sẽ tăng khoảng 6%（預計將成長約 6%），展現嚴謹之預期性。",
      "trap": "把 dự kiến（預期）當成確定已發生的事實進行投資決策。",
      "mnemonic": "「dự kiến 是預期，khoảng 是大約值，未成定局防風險。」",
      "infograph": {
        "type": "slots",
        "title": "宏觀預測標準公文框架",
        "slots": [
          {
            "label": "預期標籤",
            "val": "Dự kiến"
          },
          {
            "label": "將來時態",
            "val": "sẽ tăng"
          },
          {
            "label": "概數修飾",
            "val": "khoảng"
          },
          {
            "label": "目標數值",
            "val": "6%."
          }
        ]
      }
    },
    {
      "concept": "法規文件層級",
      "syntax": "Luật (法律) ➔ Nghị quyết (決議) ➔ Nghị định (法令) ➔ Thông tư (通函)",
      "usage": "越南法規體系的四級金字塔：國會通過 Luật（法）；國會或政府頒布 Nghị quyết（決議）；總理簽發 Nghị định（法令規章）；部委頒布 Thông tư（實施通函導則）。",
      "trap": "拿部委的 Thông tư 去對抗國會的 Luật，搞不清下位法不得牴觸上位法的法律效力階層。",
      "mnemonic": "「國會立憲法與決議，政府發法令，部委下通函。」",
      "infograph": {
        "type": "steps",
        "title": "越南法律法規效力四階金字塔",
        "steps": [
          {
            "level": "第1階 (最高權限)",
            "tag": "Luật (國會)",
            "ex": "國會制定之國家基本法"
          },
          {
            "level": "第2階 (決策綱領)",
            "tag": "Nghị quyết (決議)",
            "ex": "國會或中央政府之戰略政策"
          },
          {
            "level": "第3階 (實施法令)",
            "tag": "Nghị định (政府)",
            "ex": "總理頒布之行政實施條例"
          },
          {
            "level": "第4階 (執行導則)",
            "tag": "Thông tư (部會)",
            "ex": "財政部、工貿部之技術細則"
          }
        ]
      }
    }
  ],
  "quiz": [
    {
      "concept": "聲音或字義",
      "syntax": "Phonetic confusion: mua (買) vs mưa (雨)",
      "usage": "測驗做錯時先診斷：究竟是「語音解碼辨析失真（聽成母音 u/ư）」，還是「詞彙語義記憶缺失」。診斷錯因才能對症下藥。",
      "trap": "一做錯題就怪自己不夠努力，盲目把整課抄十遍，忽視根本是母音發音部位沒分清。",
      "mnemonic": "「錯題先分音或義，u 圓 ư 扁辨分明。」",
      "infograph": {
        "type": "contrast",
        "title": "聽覺音素混淆 (Phonetic error) 根因診斷",
        "columns": [
          {
            "label": "mua (買)",
            "status": "圓唇後高母音 /u/",
            "example": "Tôi mua áo.",
            "note": "雙唇向前攏圓"
          },
          {
            "label": "mưa (雨)",
            "status": "扁唇央高母音 /ɨ/",
            "example": "Trời mưa to.",
            "note": "嘴角往兩側拉開"
          }
        ]
      }
    },
    {
      "concept": "語法或語境",
      "syntax": "Syntax vs Pragmatic error: không (否定) vs chưa (未然)",
      "usage": "區分是純粹句子成分排錯（語法），還是社交語境禮節誤用（語用）。答「Tôi không ăn」在文法上完全正確，但在語用社交上是零分。",
      "trap": "以為文法沒錯就是對的，忽略跨文化社交語用規範。",
      "mnemonic": "「文法無過語用錯，社交得體才是真。」",
      "infograph": {
        "type": "contrast",
        "title": "語法結構 vs 社交語用診斷二象限",
        "columns": [
          {
            "label": "語法維度 (Grammar)",
            "status": "SVO 詞序、搭配正確",
            "example": "Tôi không uống.",
            "note": "句子合乎語法規則"
          },
          {
            "label": "語用維度 (Pragmatics)",
            "status": "場合、輩份、禮節適切",
            "example": "Dạ, em chưa uống ạ.",
            "note": "完美契合尊卑與社交溫情"
          }
        ]
      }
    },
    {
      "concept": "隔日重測",
      "syntax": "Delay 24-48 hours re-test (破除短期記憶假象)",
      "usage": "做完測驗當下答對往往只是工作記憶殘留，隔24小時在全新情境中重測「Hôm qua tôi đã học bài này」，才是檢驗長期記憶（LTP）的真金白銀。",
      "trap": "剛看完答案立刻按重測拿100分，產生「我已經完全學會」的虛假自滿。",
      "mnemonic": "「當場做對算暫存，隔宿重測見真章。」",
      "infograph": {
        "type": "flow",
        "title": "間隔重複記憶鞏固週期",
        "steps": [
          {
            "title": "首輪測驗",
            "desc": "標記出混淆與猜測之錯題"
          },
          {
            "title": "間歇沉澱",
            "desc": "冷卻 24 小時讓海馬迴固化"
          },
          {
            "title": "隔日重測",
            "desc": "盲測相同概念之變形新題"
          }
        ]
      }
    },
    {
      "concept": "信心與正確分開",
      "syntax": "Confidence vs Accuracy quadrant (後設認知診斷)",
      "usage": "做題時標記信心度：「瞎猜但猜對（Lucky guess）」比「答錯」更危險，因為會掩蓋認知漏洞。坦承「Tôi đoán câu trả lời này」是真正進步的起點。",
      "trap": "靠四選一猜中答案就滑過去，考試時換個題目立刻陣亡。",
      "mnemonic": "「矇對比錯更堪憂，誠實標記幸運猜。」",
      "infograph": {
        "type": "matrix",
        "title": "信心與正確度四象限後設認知診斷",
        "headers": [
          "象限",
          "作答狀態",
          "後續行動策略"
        ],
        "rows": [
          [
            "第 I 象限",
            "高信心且答對",
            "已完全掌握，進入間隔維護"
          ],
          [
            "第 II 象限 (高危)",
            "高信心但答錯",
            "重大觀念誤區，立即回查根本法則"
          ],
          [
            "第 III 象限 (隱患)",
            "低信心但猜對",
            "假性學會，必須重新學習並重測"
          ],
          [
            "第 IV 象限",
            "低信心且答錯",
            "盲點明確，回歸基礎概念重新拆解"
          ]
        ]
      }
    },
    {
      "concept": "最小差異診斷",
      "syntax": "Minimal pair diagnostics: Tôi mua áo vs Trời mưa",
      "usage": "設計只有一個母音或一個聲調相差的最小對立題目，精準快篩出學習者的知覺缺陷盲點。",
      "trap": "在複雜大長句中找錯誤，線索太多反而掩蓋了最核心的發音盲點。",
      "mnemonic": "「極簡對比篩盲點，牽一髮而動全身。」",
      "infograph": {
        "type": "contrast",
        "title": "最小對立組聽力診斷表",
        "columns": [
          {
            "label": "對比項目 A",
            "status": "動詞：購買",
            "example": "Tôi mua áo.",
            "note": "核心母音為圓唇 /u/"
          },
          {
            "label": "對比項目 B",
            "status": "名詞：下雨",
            "example": "Trời mưa.",
            "note": "核心母音為扁唇 /ɨ/"
          }
        ]
      }
    },
    {
      "concept": "遷移的證據",
      "syntax": "Novel context transfer: Ngày mai tôi sẽ đi làm.",
      "usage": "檢驗是否掌握時態或句型，看學習者能否將課本句「Mai tôi sẽ đi」自主遷移應用到新情境「Ngày mai tôi sẽ đi làm（明天我將去上班）」。",
      "trap": "原句倒背如流，換個動詞就完全無法開口。",
      "mnemonic": "「課本句子是示範，換入生活才成真。」",
      "infograph": {
        "type": "flow",
        "title": "知識向生活情境遷移階梯",
        "steps": [
          {
            "title": "課本原型",
            "desc": "Mai tôi sẽ đi."
          },
          {
            "title": "情境置換",
            "desc": "抽換動詞為 đi làm (上班)"
          },
          {
            "title": "生活輸出",
            "desc": "Ngày mai tôi sẽ đi làm."
          }
        ]
      }
    },
    {
      "concept": "干擾選項分析",
      "syntax": "Distractor analysis: đã (過去) vs đang (進行) vs sẽ (將來)",
      "usage": "優秀的測驗選項並非隨機亂編，每個干擾項都對應特定的認知偏誤（如混淆已然與未然）。分析為何選錯干擾項能直擊要害。",
      "trap": "只看正確選項是哪一個，不檢討自己為什麼會被特定的干擾項誘騙。",
      "mnemonic": "「誘餌選項有玄機，抽絲剝繭抓心魔。」",
      "infograph": {
        "type": "slots",
        "title": "時態選擇題干擾選項陷阱分析",
        "slots": [
          {
            "label": "干擾項 A (過去已然)",
            "val": "đã"
          },
          {
            "label": "干擾項 B (當前進行)",
            "val": "đang"
          },
          {
            "label": "目標正確項 (將來承諾)",
            "val": "sẽ"
          }
        ]
      }
    },
    {
      "concept": "限時與不限時",
      "syntax": "Fluency speed challenge: Tôi trả lời trong mười giây.",
      "usage": "思考五分鐘才答對叫「靜態分析能力」；十秒內毫不猶豫答對叫「自動化流利度（Automaticity）」。限時測驗能逼迫直覺反應。",
      "trap": "習慣慢條斯理查字典做題，進入真實對話環境完全跟不上語速。",
      "mnemonic": "「慢想答對算分析，十秒開口是真功。」",
      "infograph": {
        "type": "contrast",
        "title": "靜態語法分析 vs 自動化流利提取",
        "columns": [
          {
            "label": "不限時 (深層分析)",
            "status": "大腦顯性語法推導",
            "example": "耗時 60 秒查表造句",
            "note": "適合初期理解語法架構"
          },
          {
            "label": "限時 10 秒 (直覺提取)",
            "status": "自動化神經迴路直出",
            "example": "10 秒內不經翻譯脫口而出",
            "note": "真實對話現場必備能力"
          }
        ]
      }
    },
    {
      "concept": "錯題再生產",
      "syntax": "Error-driven re-production: Tôi chưa đi Đà Nẵng.",
      "usage": "訂正錯題的最高境界：不是在試卷上寫下正確答案，而是用該知識點自主造一個完全屬於自己的全新例句（如 Tôi chưa đi Đà Nẵng）。",
      "trap": "看完詳解點頭讚嘆，但自己一個字也造不出來。",
      "mnemonic": "「錯題再生產，造句定江山。」",
      "infograph": {
        "type": "flow",
        "title": "錯題再生產轉化閉環",
        "steps": [
          {
            "title": "錯題警醒",
            "desc": "辨識錯用 không 代替 chưa"
          },
          {
            "title": "核心吸納",
            "desc": "掌握 chưa 留有餘地之語法特徵"
          },
          {
            "title": "自主輸出",
            "desc": "Tôi chưa đi Đà Nẵng."
          }
        ]
      }
    }
  ],
  "flashcards": [
    {
      "concept": "回想再翻面",
      "syntax": "Active recall: Cue (Từ đơn) ➔ Output sentence (Đặt câu)",
      "usage": "看閃卡正面時，絕不偷看背面！先在腦海中主動提取意思並在心中說出一句完整例句（如 học ➔ Tôi học tiếng Việt），再翻面核對。",
      "trap": "翻面太快，誤將「被動再認（Recognition）」當成「主動提取（Recall）」，考場上毫無提取能力。",
      "mnemonic": "「見卡莫急翻，默想成句再揭底。」",
      "infograph": {
        "type": "flow",
        "title": "主動回想與被動辨識認知分流",
        "steps": [
          {
            "title": "看到正面提示",
            "desc": "hoc (學)"
          },
          {
            "title": "大腦主動提取",
            "desc": "檢索記憶造句：Tôi học tiếng Việt."
          },
          {
            "title": "翻面核對結果",
            "desc": "驗證詞義與聲調完全精確"
          }
        ]
      }
    },
    {
      "concept": "搭配成組",
      "syntax": "Collocation chunk: đặt + [phòng (房間) / vé (票) / bàn (餐桌)]",
      "usage": "單字不要孤立背誦，記憶高頻搭配詞塊（Collocations）：đặt phòng（訂房）、đặt vé（訂票）、đặt bàn（訂位），輸出速度快三倍。",
      "trap": "把單字拆碎單獨背「đặt」，開口時不知道後面能接什麼名詞。",
      "mnemonic": "「動詞名詞成雙對，訂房訂票整組背。」",
      "infograph": {
        "type": "tree",
        "title": "高頻動詞「đặt (預約)」搭配詞族樹",
        "branches": [
          {
            "root": "đặt (預訂)",
            "leaf": "+ phòng ➔ đặt phòng (飯店訂房)"
          },
          {
            "root": "đặt (預訂)",
            "leaf": "+ vé ➔ đặt vé (機票/車票)"
          },
          {
            "root": "đặt (預訂)",
            "leaf": "+ bàn ➔ đặt bàn (餐廳訂位)"
          }
        ]
      }
    },
    {
      "concept": "易混對比",
      "syntax": "False friends & Confusables: lịch sự (禮貌) vs lịch sử (歷史)",
      "usage": "將外形極為相近、聲調相異的詞彙放在同一張卡片中正反對照：lịch sự 是禮貌體面，lịch sử 才是歷史春秋。",
      "trap": "分開背誦時好像都懂，一到考卷或對話中立刻張冠李戴。",
      "mnemonic": "「玄重是禮貌 lịch sự，玄問是歷史 lịch sử。」",
      "infograph": {
        "type": "contrast",
        "title": "高危易混聲調對比矩陣",
        "columns": [
          {
            "label": "lịch sự (重聲)",
            "status": "形容詞：有禮貌 / 體面",
            "example": "Anh ấy rất lịch sự.",
            "note": "待人接物溫文儒雅"
          },
          {
            "label": "lịch sử (問聲)",
            "status": "名詞：歷史 / 歲月紀實",
            "example": "Lịch sử Việt Nam.",
            "note": "千年歷史文明載體"
          }
        ]
      }
    },
    {
      "concept": "一詞多搭配",
      "syntax": "Polysemous collocations: học bài (溫習功課) vs học tiếng Việt (學越語)",
      "usage": "同一個核心動詞在不同語境下呈現多樣搭配：học bài 指在學學生複習功課；học tiếng Việt 指學習特定語言技能。",
      "trap": "以為 học 只能接學科名詞，聽到 học bài 以為是「學一張牌」。",
      "mnemonic": "「一詞牽動多搭配，溫課學語各生輝。」",
      "infograph": {
        "type": "slots",
        "title": "動詞 học 語境語用多維搭配",
        "slots": [
          {
            "label": "核心動作",
            "val": "học"
          },
          {
            "label": "語境 A (學校)",
            "val": "bài (溫習功課)"
          },
          {
            "label": "語境 B (技能)",
            "val": "tiếng Việt (習得語言)"
          }
        ]
      }
    },
    {
      "concept": "正反向提取",
      "syntax": "Bidirectional recall: Vi ➔ Zh (聽讀理解) & Zh ➔ Vi (口說輸出)",
      "usage": "閃卡必須雙向訓練：越翻中訓練聽覺與閱讀解碼；中翻越訓練大腦主動檢索詞彙並由發音器官說出的主動輸出能力。",
      "trap": "只練看越文能猜出中文，遇到要自己開口說越語時腦中一片空白。",
      "mnemonic": "「正向練聽讀，反向練開口；雙向皆通順，方能成對話。」",
      "infograph": {
        "type": "contrast",
        "title": "雙向閃卡神經提取通道",
        "columns": [
          {
            "label": "輸入通道 (越 ➔ 中)",
            "status": "聽覺閱讀再認",
            "example": "đặt vé ➔ 訂票",
            "note": "理解對方說話意圖"
          },
          {
            "label": "輸出通道 (中 ➔ 越)",
            "status": "主動神經檢索",
            "example": "訂票 ➔ đặt vé",
            "note": "自我開口主動表達"
          }
        ]
      }
    },
    {
      "concept": "錯卡修復",
      "syntax": "Contextual sentence repair: Tôi muốn đặt vé đi Hà Nội.",
      "usage": "每次答錯的閃卡，不要僅僅塞回牌組重抽，必須立刻放進完整的情境句子中朗讀三遍，重建上下文記憶連結。",
      "trap": "孤立地反覆死記一個單字，缺乏語境掛鉤依然極易二次遺忘。",
      "mnemonic": "「錯卡莫單背，嵌進句子記千回。」",
      "infograph": {
        "type": "slots",
        "title": "錯詞語境修復三維度擴展",
        "slots": [
          {
            "label": "主意願",
            "val": "Tôi muốn"
          },
          {
            "label": "修復核心詞",
            "val": "đặt vé"
          },
          {
            "label": "目的地指向",
            "val": "đi Hà Nội."
          }
        ]
      }
    },
    {
      "concept": "詞族擴展",
      "syntax": "Root family: làm (做) ➔ làm việc (工作) ➔ làm ơn (施恩/勞駕)",
      "usage": "圍繞核心動詞 làm 擴展構詞族：làm 是做、làm việc 是工作辦公、làm ơn 是客氣請託（勞駕/拜託）。以字根帶動整串詞族。",
      "trap": "把 làm ơn 誤當作「做恩人」，不懂其在句首作為禮貌請求「請幫忙/勞駕」的語用語義。",
      "mnemonic": "「làm 是基礎做，làm việc 上班去，làm ơn 勞駕客氣話。」",
      "infograph": {
        "type": "tree",
        "title": "核心動詞「làm (做)」語意族譜",
        "branches": [
          {
            "root": "làm (動作)",
            "leaf": "+ việc ➔ làm việc (從事職業工作)"
          },
          {
            "root": "làm (動作)",
            "leaf": "+ ơn ➔ làm ơn (施恩禮貌請求: 勞駕)"
          },
          {
            "root": "làm (動作)",
            "leaf": "+ quen ➔ làm quen (結交認識朋友)"
          }
        ]
      }
    },
    {
      "concept": "語境卡",
      "syntax": "Context-rich sentence card: Tôi đặt bàn cho bốn người.",
      "usage": "將閃卡升級為「全情境卡」：除了單字，直接印上包含人數、地點、時間的完整實戰句（Tôi đặt bàn cho bốn người: 我訂四人桌）。",
      "trap": "只背單字卡，進入真實餐廳情境無法組成符合語法規範的完整句子。",
      "mnemonic": "「全句情境卡，走進生活能當差。」",
      "infograph": {
        "type": "slots",
        "title": "情境閃卡四要素完整體",
        "slots": [
          {
            "label": "主詞",
            "val": "Tôi"
          },
          {
            "label": "核心動作短語",
            "val": "đặt bàn"
          },
          {
            "label": "受惠人數標的",
            "val": "cho bốn người."
          }
        ]
      }
    },
    {
      "concept": "分類與合併",
      "syntax": "Semantic category clustering: xe máy · xe buýt · xe đạp",
      "usage": "運用語意場（Semantic field）分類法：將交通工具歸為一類（xe máy 機車、xe buýt 公車、xe đạp 腳踏車），建立整體的心理詞彙聯想群。",
      "trap": "隨機碎片式背單字（今天背一個香蕉、明天背一個輪胎），大腦聯想網零散混亂。",
      "mnemonic": "「xe 字打頭車成行，機車公車踏車忙。」",
      "infograph": {
        "type": "tree",
        "title": "交通工具「xe (車)」語意場聚合",
        "branches": [
          {
            "root": "xe (各型車輛)",
            "leaf": "+ máy ➔ xe máy (機車/主力代步)"
          },
          {
            "root": "xe (各型車輛)",
            "leaf": "+ buýt ➔ xe buýt (市區公共汽車)"
          },
          {
            "root": "xe (各型車輛)",
            "leaf": "+ đạp ➔ xe đạp (人力自行車)"
          }
        ]
      }
    }
  ],
  "topics": [
    {
      "concept": "客製需求",
      "syntax": "Cho tôi một ly + [Đồ uống] + ít đường / không đá",
      "usage": "越南咖啡店點單客製必學：Cho tôi một ly cà phê ít đường（請給我一杯少糖咖啡）；không đường（無糖）、ít đá（少冰）。",
      "trap": "越南傳統煉乳咖啡（Cà phê sữa đá）極甜，若不主動說 ít đường 會被甜度衝擊。",
      "mnemonic": "「少糖 ít đường 少冰 ít đá，客製點單最貼心。」",
      "infograph": {
        "type": "slots",
        "title": "越南飲品客製化語法積木",
        "slots": [
          {
            "label": "請求開頭",
            "val": "Cho tôi"
          },
          {
            "label": "規格計量",
            "val": "một ly"
          },
          {
            "label": "核心飲品",
            "val": "cà phê"
          },
          {
            "label": "客製糖度",
            "val": "ít đường."
          }
        ]
      }
    },
    {
      "concept": "日期與停留",
      "syntax": "[S] + ở đây + [Số lượng] + ngày. (宣告停留期間)",
      "usage": "飯店入住或海關問話核心句：Tôi ở đây ba ngày（我在這裡停留三天）。數字直接接 ngày。",
      "trap": "將 ngày 與 hôm 混用；hôm 多用於特定某天（如 hôm nay），計算天數長度固定用 ngày。",
      "mnemonic": "「停留幾天用 ngày 算，在本地區 ở đây 標。」",
      "infograph": {
        "type": "slots",
        "title": "旅宿停留時間長度宣告結構",
        "slots": [
          {
            "label": "主體",
            "val": "Tôi"
          },
          {
            "label": "處所鎖定",
            "val": "ở đây"
          },
          {
            "label": "天數時間量",
            "val": "ba ngày."
          }
        ]
      }
    },
    {
      "concept": "症狀敘述",
      "syntax": "[S] + bị + đau [Bộ phận] + từ [Thời điểm]",
      "usage": "看診就醫黃金句型：Tôi bị đau đầu từ hôm qua（我從昨天開始頭痛）。bị 標記身體不適，đau 接身體部位，từ 接起算時間。",
      "trap": "看診時只說「Tôi ốm（我生病）」，醫生無法得知具體病灶部位與發病時程。",
      "mnemonic": "「bị đau 接部位，từ 接起病時。」",
      "infograph": {
        "type": "slots",
        "title": "醫療問診精確症狀描述積木",
        "slots": [
          {
            "label": "患者主體",
            "val": "Tôi"
          },
          {
            "label": "消極受恙",
            "val": "bị"
          },
          {
            "label": "病灶痛點",
            "val": "đau đầu"
          },
          {
            "label": "起發時間標記",
            "val": "từ hôm qua."
          }
        ]
      }
    },
    {
      "concept": "日期與星期",
      "syntax": "thứ hai (星期一) vs ngày hai tháng ba (三月二號)",
      "usage": "越南星期系統從 thứ hai（星期一，字面第二）起算至 thứ bảy（星期六），週日為 Chủ nhật；日曆日期則是 ngày + 號數 + tháng + 月份。",
      "trap": "把 thứ hai 誤當成「星期二」；越語的「二」對應華語的「星期一」，全週平移一位！",
      "mnemonic": "「thứ hai 是週一，Chủ nhật 是週天；順位差一天，約會莫搞偏。」",
      "infograph": {
        "type": "contrast",
        "title": "越語星期平移一席對照表",
        "columns": [
          {
            "label": "越語序數名稱",
            "status": "字面順位",
            "example": "thứ hai · thứ ba · thứ tư",
            "note": "星期一 (2) · 星期二 (3) · 星期三 (4)"
          },
          {
            "label": "華語習慣名稱",
            "status": "華語對應",
            "example": "週一 · 週二 · 週三",
            "note": "越語數字比華語星期數字大 1"
          }
        ]
      }
    },
    {
      "concept": "時間範圍",
      "syntax": "từ + [Giờ bắt đầu] + đến + [Giờ kết thúc] (時空起訖區間)",
      "usage": "標記營業時間或會議時長：từ tám giờ đến mười giờ（從八點到十點）。từ…đến… 同時適用於時間與地理空間。",
      "trap": "把 đến 寫成 tới 在北部書面公函中不夠正式；từ…đến 為全域標準用詞。",
      "mnemonic": "「từ 是起點 đến 是終，時間空間皆相通。」",
      "infograph": {
        "type": "timeline",
        "title": "時段起訖區間標準時間軸",
        "stages": [
          {
            "tag": "起點 (Từ)",
            "desc": "tám giờ (8:00)",
            "ex": "活動起始"
          },
          {
            "tag": "跨度進行",
            "desc": "持續 2 小時",
            "ex": "會議/營業中"
          },
          {
            "tag": "終點 (Đến)",
            "desc": "mười giờ (10:00)",
            "ex": "活動收尾"
          }
        ]
      }
    },
    {
      "concept": "需求變更",
      "syntax": "Không + [Thành phần 1] , ít + [Thành phần 2] (連環客製修飾)",
      "usage": "緊湊快速交代多重飲食忌口：Không đường, ít đá（不要糖、少冰）。口語中直接省略主謂，短小精悍。",
      "trap": "囉嗦說一長串完整句子，在排隊繁忙的飲料攤容易讓店員漏聽關鍵客製。",
      "mnemonic": "「不要說 không，少要說 ít，俐落精簡免出錯。」",
      "infograph": {
        "type": "slots",
        "title": "快節奏點單緊湊槽位",
        "slots": [
          {
            "label": "排除項",
            "val": "Không đường (無糖)"
          },
          {
            "label": "微調項",
            "val": "ít đá (少冰)"
          }
        ]
      }
    },
    {
      "concept": "不適程度",
      "syntax": "Tôi hơi sốt (微熱輕症) vs Tôi sốt cao (發高燒急症)",
      "usage": "精準刻畫病情輕重緩急：hơi 是輕微、微弱；cao 是劇烈、高昂。向醫師描述「sốt cao」會立刻被引導至急診處置。",
      "trap": "明明只是低燒 37.2 度卻喊 sốt cao，造成醫療資源誤判。",
      "mnemonic": "「輕微用 hơi，劇烈用 cao，醫病情勢辨分明。」",
      "infograph": {
        "type": "contrast",
        "title": "發燒程度等級分流診斷",
        "columns": [
          {
            "label": "Tôi hơi sốt (低燒輕微)",
            "status": "低熱可服成藥觀察",
            "example": "37.2°C - 38.0°C",
            "note": "多喝水、休息退熱"
          },
          {
            "label": "Tôi sốt cao (高燒危急)",
            "status": "高熱需立即就醫",
            "example": "> 38.5°C 伴隨發抖",
            "note": "立刻就醫抽血檢查登革熱"
          }
        ]
      }
    },
    {
      "concept": "親屬介紹",
      "syntax": "Đây là + [Quan hệ] + của tôi. (隆重引介親友公式)",
      "usage": "社交場合向他人介紹家人：Đây là em gái tôi（這是我的妹妹）。Đây là 用於指認近處人事物。",
      "trap": "把 em gái nói thành *gái em，修飾語倒置造成語法錯誤。",
      "mnemonic": "「Đây là 引介在眼前，中心親屬修飾後。」",
      "infograph": {
        "type": "slots",
        "title": "社交親屬引介標準槽位",
        "slots": [
          {
            "label": "近指引介",
            "val": "Đây là"
          },
          {
            "label": "親屬關係",
            "val": "em gái"
          },
          {
            "label": "所屬主體",
            "val": "tôi."
          }
        ]
      }
    },
    {
      "concept": "合作寒暄",
      "syntax": "Rất vui được hợp tác với + [Đối tượng] (商務合作結盟金句)",
      "usage": "商務簽約或初次洽談圓滿時必說客套話：Rất vui được hợp tác với anh（非常榮幸能與您合作）。",
      "trap": "只說隨便的「Cảm ơn」，缺乏對未來長期合作夥伴關係的崇高期許。",
      "mnemonic": "「Rất vui 歡喜心，hợp tác 結同心。」",
      "infograph": {
        "type": "slots",
        "title": "商務結盟崇高敬語積木",
        "slots": [
          {
            "label": "愉悅心境",
            "val": "Rất vui"
          },
          {
            "label": "榮幸被動",
            "val": "được"
          },
          {
            "label": "核心商務協作",
            "val": "hợp tác với"
          },
          {
            "label": "尊榮對象",
            "val": "anh."
          }
        ]
      }
    }
  ],
  "fasttrack": [
    {
      "concept": "第1–2天",
      "syntax": "Xin chào (通用問候) ； Cho tôi + [Món] (生存點餐)",
      "usage": "抵達越南頭48小時核心任務：學會不分長幼的通用問候「Xin chào」，以及在餐館指物點單「Cho tôi một ly trà（請給我一杯茶）」。",
      "trap": "頭兩天就試圖搞懂極端複雜的親屬稱謂，導致大腦超載不敢開口。",
      "mnemonic": "「見人先說 Xin chào，進店要喝 Cho tôi trà。」",
      "infograph": {
        "type": "steps",
        "title": "抵越 48 小時生存速通雙核",
        "steps": [
          {
            "level": "社交破冰",
            "tag": "Xin chào",
            "ex": "向海關、司機、櫃檯微笑問好"
          },
          {
            "level": "生存飲水",
            "tag": "Cho tôi một ly…",
            "ex": "水、茶、咖啡順暢點單"
          }
        ]
      }
    },
    {
      "concept": "第3–5天",
      "syntax": "Bao nhiêu tiền? (買單問價) ； Tôi là người Đài Loan (身分宣示)",
      "usage": "中程任務：掌握問價「Bao nhiêu tiền?」並能清晰自報家門「Tôi là người Đài Loan（我是台灣人）」，建立友善民間互信。",
      "trap": "講不出自己是台灣人，在當地常被誤認為其他國家旅客而產生溝通距離。",
      "mnemonic": "「問價 Bao nhiêu tiền，身分認同 Đài Loan 人。」",
      "infograph": {
        "type": "contrast",
        "title": "旅程第 3-5 天雙支柱技能",
        "columns": [
          {
            "label": "經濟自主 (問價結帳)",
            "status": "詢問總額防受騙",
            "example": "Cái này bao nhiêu tiền?",
            "note": "掌控預算並覆核找零"
          },
          {
            "label": "文化認同 (破冰親善)",
            "status": "表明身分獲好感",
            "example": "Tôi là người Đài Loan.",
            "note": "多數越南人對台灣極具好感"
          }
        ]
      }
    },
    {
      "concept": "第6–7天",
      "syntax": "Tôi cần + [Hành động / Sự giúp đỡ] (主動求助與深度互動)",
      "usage": "末程任務：能主動表達深層需求「Tôi cần giúp đỡ（我需要協助）」或尋求特定服務，具備在越南獨立行動之全方位自主性。",
      "trap": "遇到突發狀況只會講英語，當地基層民眾可能無法第一時間施以援手。",
      "mnemonic": "「困難開口 Tôi cần giúp，七天速成走四方。」",
      "infograph": {
        "type": "flow",
        "title": "七天速成終極求援發起流程",
        "steps": [
          {
            "title": "吸引注意",
            "desc": "Anh ơi! / Chị ơi!"
          },
          {
            "title": "發出求助",
            "desc": "Tôi cần giúp đỡ."
          },
          {
            "title": "出示具體證物",
            "desc": "出示地址、手機或文件"
          }
        ]
      }
    },
    {
      "concept": "交通目的地",
      "syntax": "Cho tôi đến + [Địa chỉ / Địa danh] (叫車指路公式)",
      "usage": "搭乘計程車或 Grab 機車時向司機指示：「Cho tôi đến địa chỉ này（請載我到這個地址）」，同時出示手機地圖。",
      "trap": "用自學不標準的聲調念生僻路名，司機容易聽錯載到完全不同城區。",
      "mnemonic": "「Cho tôi đến 指方向，地址出示免慌張。」",
      "infograph": {
        "type": "slots",
        "title": "搭車指令標準語法槽位",
        "slots": [
          {
            "label": "指示動詞",
            "val": "Cho tôi đến"
          },
          {
            "label": "指示代詞",
            "val": "địa chỉ này."
          },
          {
            "label": "輔助動作",
            "val": "［遞出手機螢幕］"
          }
        ]
      }
    },
    {
      "concept": "結帳問題",
      "syntax": "Tôi có thể trả bằng + [thẻ (信用卡) / tiền mặt (現金)] + không?",
      "usage": "在非路邊攤的餐廳結帳時詢問支付管道：「Tôi có thể trả bằng thẻ không?（我可以刷卡嗎？）」。",
      "trap": "吃完飯直接掏卡，很多店面只收現金或本地轉帳，無法刷國際信用卡。",
      "mnemonic": "「先問能不能刷卡，trả bằng thẻ 免尷尬。」",
      "infograph": {
        "type": "slots",
        "title": "支付方式許可徵詢積木",
        "slots": [
          {
            "label": "主體框架",
            "val": "Tôi có thể"
          },
          {
            "label": "支付介詞短語",
            "val": "trả bằng thẻ"
          },
          {
            "label": "閉環疑問",
            "val": "không?"
          }
        ]
      }
    },
    {
      "concept": "社交延續",
      "syntax": "[Đối tượng] + có dùng Zalo không? (建立長久通訊管道)",
      "usage": "越南普及率第一的國民通訊軟體是 Zalo。結識新朋友後詢問「Bạn có dùng Zalo không?」，掃描 QR 碼加好友是維持人脈核心步驟。",
      "trap": "問越南朋友有沒有 LINE 或 WeChat，很多人沒有安裝或極少使用。",
      "mnemonic": "「越南社交看 Zalo，掃碼加友最暢通。」",
      "infograph": {
        "type": "flow",
        "title": "越南在地社交連結四部曲",
        "steps": [
          {
            "title": "友善提問",
            "desc": "Bạn có dùng Zalo không?"
          },
          {
            "title": "開啟軟體",
            "desc": "打開個人名片二維條碼"
          },
          {
            "title": "掃描加友",
            "desc": "Quét mã kết bạn"
          },
          {
            "title": "發送打招呼",
            "desc": "發送問候確認好友成功"
          }
        ]
      }
    },
    {
      "concept": "天氣閒聊",
      "syntax": "Hôm nay trời + [Tính từ thời tiết: nóng / mưa] + quá!",
      "usage": "打破尷尬的破冰法寶永遠是天氣：「Hôm nay trời nóng quá!（今天天氣好熱啊！）」容易引起周圍人強烈共鳴。",
      "trap": "在北方冬天（可能低至10度）仍機械念 nóng quá，應改為 rét quá。",
      "mnemonic": "「熱了喊 nóng 冷喊 rét，天地寒暄心相連。」",
      "infograph": {
        "type": "slots",
        "title": "天氣感嘆句型積木",
        "slots": [
          {
            "label": "時間主語",
            "val": "Hôm nay"
          },
          {
            "label": "天候載體",
            "val": "trời"
          },
          {
            "label": "核心感覺",
            "val": "nóng"
          },
          {
            "label": "極致感嘆詞",
            "val": "quá!"
          }
        ]
      }
    },
    {
      "concept": "聽懂指路",
      "syntax": "Đi thẳng (直走) ➔ rẽ trái (左轉) / rẽ phải (右轉)",
      "usage": "問路聽辨三字訣：đi thẳng（直走）、rẽ trái（左轉）、rẽ phải（右轉）。結合手勢聽懂關鍵導向。",
      "trap": "把 trái（左）與 phải（右）搞反；phải 同時有「正確、必須、右邊」多重語意。",
      "mnemonic": "「Đi thẳng 直行向前，trái 左 phải 右記心田。」",
      "infograph": {
        "type": "steps",
        "title": "市井指路方向核心三方位",
        "steps": [
          {
            "level": "直線推進",
            "tag": "Đi thẳng",
            "ex": "維持當前路徑向前行"
          },
          {
            "level": "向左轉向",
            "tag": "Rẽ trái",
            "ex": "於前方路口向左切入"
          },
          {
            "level": "向右轉向",
            "tag": "Rẽ phải",
            "ex": "於前方路口向右切入"
          }
        ]
      }
    },
    {
      "concept": "報案句",
      "syntax": "[S] + bị + cướp + [Đồ vật] (遭搶報案定性句)",
      "usage": "遭遇飛車搶奪時向警方定性陳述：「Tôi bị cướp điện thoại（我的手機被搶了）」。cướp 是搶奪，mất 是遺失，法律性質截然不同。",
      "trap": "把搶劫說成 mất（弄丟），警局可能只當作一般失物登記而不立案調查。",
      "mnemonic": "「被搶嚴肅說 cướp，遺失才是 nói mất。」",
      "infograph": {
        "type": "contrast",
        "title": "刑案遭搶 (Cướp) vs 疏忽遺失 (Mất) 法律本質對照",
        "columns": [
          {
            "label": "Bị cướp (刑事搶奪)",
            "status": "遭受暴力/飛車掠奪",
            "example": "Tôi bị cướp điện thoại.",
            "note": "需立即調閱監視器並立刑事案"
          },
          {
            "label": "Bị mất (單純遺失)",
            "status": "自己疏忽遺忘或掉落",
            "example": "Tôi bị mất hộ chiếu.",
            "note": "多開立遺失證明以備補發"
          }
        ]
      }
    }
  ],
  "emergency": [
    {
      "concept": "先說位置",
      "syntax": "[S] + đang ở + [Vị trí cụ thể] (黃金救援第一律)",
      "usage": "緊急求救第一黃金法則：先報位置！「Tôi đang ở khách sạn này（我正在這間飯店）」，確保通訊中斷時救援人員能抵達現場。",
      "trap": "打通電話只慌亂大哭喊救命，幾分鐘過去了對方依然不知道你在哪個行政區。",
      "mnemonic": "「急難求救位居先，Tôi đang ở 報地點。」",
      "infograph": {
        "type": "flow",
        "title": "急難求助資訊優先級金字塔",
        "steps": [
          {
            "title": "第1優先：空間座標",
            "desc": "Tôi đang ở… (具體地址/地標)"
          },
          {
            "title": "第2優先：人身問題",
            "desc": "Tôi bị… (傷病/危險類型)"
          },
          {
            "title": "第3優先：具體請求",
            "desc": "Xin gọi… (救護車/翻譯/警察)"
          }
        ]
      }
    },
    {
      "concept": "再說問題",
      "syntax": "[S] + bị + [Vấn đề: mất hộ chiếu / tai nạn] (定性危急事態)",
      "usage": "報明位置後，一句話定性事故：Tôi bị mất hộ chiếu（我遺失了護照）；Tôi bị tai nạn（我遭遇事故）。",
      "trap": "講述無關緊要的來龍去脈瑣事，耽誤黃金處置窗口。",
      "mnemonic": "「定性問題一針血，護照事故快通報。」",
      "infograph": {
        "type": "slots",
        "title": "事態本質定性積木",
        "slots": [
          {
            "label": "當事人",
            "val": "Tôi"
          },
          {
            "label": "遭逢標記",
            "val": "bị"
          },
          {
            "label": "核心險情",
            "val": "mất hộ chiếu / tai nạn."
          }
        ]
      }
    },
    {
      "concept": "提出需求",
      "syntax": "Xin gọi + [Đối tượng cứu hộ] + giúp tôi. (請求派遣救援)",
      "usage": "明確發出救援請求動詞：「Xin gọi người phiên dịch giúp tôi（請幫我叫翻譯員）」或「Xin gọi cấp cứu（請叫救護車）」。",
      "trap": "把希望對方採取的行動含在嘴裡不說，以為對方能心電感應猜中。",
      "mnemonic": "「Xin gọi 行動求援令，救護警察速現身。」",
      "infograph": {
        "type": "steps",
        "title": "越南三大緊急報警電話矩陣",
        "steps": [
          {
            "level": "113",
            "tag": "Cảnh sát (警察)",
            "ex": "遭遇搶奪、暴力或重大治安事故"
          },
          {
            "level": "114",
            "tag": "Cứu hỏa (消防)",
            "ex": "火災、塌陷或重大天災搜救"
          },
          {
            "level": "115",
            "tag": "Cấp cứu (救護車)",
            "ex": "突發昏迷、重傷或性命垂危"
          }
        ]
      }
    },
    {
      "concept": "聯絡協助者",
      "syntax": "Xin liên hệ với + [Người này] + giúp tôi. (第三方聯絡)",
      "usage": "出示緊急聯絡卡或親友名片：「Xin liên hệ với người này giúp tôi（請幫我聯絡這個人）」，建立外部救援管道。",
      "trap": "平時未在皮夾或手機備註緊急聯絡人姓名電話，遇難時他人無從聯繫。",
      "mnemonic": "「出示名片求聯絡，liên hệ 幫手解危難。」",
      "infograph": {
        "type": "slots",
        "title": "第三方緊急委託聯絡槽位",
        "slots": [
          {
            "label": "委託前綴",
            "val": "Xin"
          },
          {
            "label": "聯絡動詞",
            "val": "liên hệ với"
          },
          {
            "label": "特定對象",
            "val": "người này"
          },
          {
            "label": "救援受惠詞",
            "val": "giúp tôi."
          }
        ]
      }
    },
    {
      "concept": "語言需求",
      "syntax": "[S] + cần + người phiên dịch + [Ngôn ngữ] (語言屏障排查)",
      "usage": "在醫院急診或派出所做筆錄時，堅決主張自身權益：「Tôi cần người phiên dịch tiếng Trung（我需要中文翻譯人員）」。",
      "trap": "在語言不通且看不懂法律文件的情況下，隨意在越南文筆錄上簽名蓋指紋。",
      "mnemonic": "「未見中文譯員面，官方筆錄莫亂簽。」",
      "infograph": {
        "type": "slots",
        "title": "法律醫療翻譯權利主張積木",
        "slots": [
          {
            "label": "權利主體",
            "val": "Tôi"
          },
          {
            "label": "必需動詞",
            "val": "cần"
          },
          {
            "label": "專業角色",
            "val": "người phiên dịch"
          },
          {
            "label": "語言限定",
            "val": "tiếng Trung."
          }
        ]
      }
    },
    {
      "concept": "描述發生時間",
      "syntax": "Việc này xảy ra + [Thời gian cụ thể] (事故時序精確化)",
      "usage": "向警方報案時提供精確時間錨點：Việc này xảy ra sáng nay（這件事發生在今天早上）。便於警方調閱相關時段道路監視器。",
      "trap": "時間說得含糊不清（如「好像前幾天」），大幅增加警方破案追查難度。",
      "mnemonic": "「時間點明 sáng nay，監視影像好追蹤。」",
      "infograph": {
        "type": "slots",
        "title": "事件時序錨定結構",
        "slots": [
          {
            "label": "指涉事件",
            "val": "Việc này"
          },
          {
            "label": "發生動詞",
            "val": "xảy ra"
          },
          {
            "label": "時點槽位",
            "val": "sáng nay."
          }
        ]
      }
    },
    {
      "concept": "過敏告知",
      "syntax": "[S] + bị dị ứng với + [Tác nhân dị ứng: hải sản / thuốc]",
      "usage": "用餐或醫院打針前保命金句：Tôi bị dị ứng với hải sản（我對海鮮過敏）；Tôi bị dị ứng với penicillin（我對抗生素過敏）。",
      "trap": "誤以為只是輕微挑食沒說，造成過敏性休克危及生命安全。",
      "mnemonic": "「dị ứng 過敏性命關，海鮮藥物說在先。」",
      "infograph": {
        "type": "contrast",
        "title": "常見過敏源警示列表",
        "columns": [
          {
            "label": "飲食過敏源 (Thực phẩm)",
            "status": "hải sản (海鮮) / đậu phộng (花生)",
            "example": "Dị ứng với hải sản",
            "note": "餐廳點餐前務必反覆交代"
          },
          {
            "label": "藥物過敏源 (Thuốc men)",
            "status": "thuốc kháng sinh (抗生素)",
            "example": "Dị ứng với penicillin",
            "note": "看診與注射前務必白紙黑字寫明"
          }
        ]
      }
    },
    {
      "concept": "疼痛位置",
      "syntax": "[S] + đau + [Cơ quan] + ở bên + [trái (左) / phải (右)]",
      "usage": "向急診室護士精準定位病痛位置：Tôi đau bụng ở bên phải（我右側肚子痛）。右下腹痛為急性闌尾炎重大警訊。",
      "trap": "只摸著肚子喊 đau，未能指明左側還是右側，延誤急診超音波分流診斷。",
      "mnemonic": "「肚子痛分左和右，bên phải 右側要分明。」",
      "infograph": {
        "type": "slots",
        "title": "急診痛點器官與方位定位積木",
        "slots": [
          {
            "label": "主體",
            "val": "Tôi"
          },
          {
            "label": "病痛器官",
            "val": "đau bụng"
          },
          {
            "label": "方位鎖定",
            "val": "ở bên phải."
          }
        ]
      }
    },
    {
      "concept": "索取書面證明",
      "syntax": "Xin viết + giấy xác nhận + cho tôi. (保險理賠法定文書)",
      "usage": "離開醫院或警局前務必索取書面憑據：Xin viết giấy xác nhận cho tôi（請開立確認證明給我），回國申請健保或商業保險理賠必備。",
      "trap": "口頭處理完就離開，回國後保險公司因缺乏官方證明文件全數拒賠。",
      "mnemonic": "「giấy xác nhận 白紙字，理賠退款有憑據。」",
      "infograph": {
        "type": "steps",
        "title": "涉外事故證明文書閉環",
        "steps": [
          {
            "level": "事故處置",
            "tag": "Xử lý",
            "ex": "完成診療或警局筆錄"
          },
          {
            "level": "請求立狀",
            "tag": "Xin viết",
            "ex": "Xin viết giấy xác nhận cho tôi"
          },
          {
            "level": "蓋印核發",
            "tag": "Đóng dấu",
            "ex": "核對公章與醫師、警官簽名"
          }
        ]
      }
    }
  ],
  "science": [
    {
      "concept": "提取練習",
      "syntax": "Testing effect (測試效應): Retrieval practice without notes",
      "usage": "認知心理學公認最強學習法：闔上課本盲說「Hãy nói lại mà không nhìn bài（不看課本重新說一遍）」，強迫神經突觸建立長效連結。",
      "trap": "捧著課本反覆重讀劃線（Re-reading），產生「自己好像背得很熟」的假性流暢感。",
      "mnemonic": "「閉卷提取勝萬卷，神經突觸深深連。」",
      "infograph": {
        "type": "contrast",
        "title": "反覆重讀 (低效) vs 主動提取測試 (高效)",
        "columns": [
          {
            "label": "反覆重讀 (被動閱讀)",
            "status": "假性記憶飽和",
            "example": "課本劃線滿篇紅",
            "note": "工作記憶殘留，24小時後遺忘 80%"
          },
          {
            "label": "閉卷提取 (刻意回想)",
            "status": "大腦深層神經鞏固",
            "example": "蓋住課本盲講全句",
            "note": "強化突觸長期增強效應 (LTP)"
          }
        ]
      }
    },
    {
      "concept": "間隔與交錯",
      "syntax": "Spaced & Interleaved practice: Hôm nay ➔ ngày mai ➔ tuần sau",
      "usage": "間隔重複（Spaced repetition）：今天學、明天複習、下週重測；交錯混入不同主題，打破大腦疲乏，抗遺忘效率提高300%。",
      "trap": "考前一晚通宵死記硬背（Cramming），兩天後忘得乾乾淨淨。",
      "mnemonic": "「今朝種子明朝顧，下週成林風不倒。」",
      "infograph": {
        "type": "timeline",
        "title": "艾賓浩斯間隔遺忘曲線對抗時序",
        "stages": [
          {
            "tag": "第1天 (當期)",
            "desc": "學習與首輪閉卷提取",
            "ex": "留存率 100%"
          },
          {
            "tag": "第2天 (24小時)",
            "desc": "首度間隔回想鞏固",
            "ex": "阻斷急遽衰退期"
          },
          {
            "tag": "第7天 (1週後)",
            "desc": "跨主題交錯綜合複測",
            "ex": "轉化為永久長效記憶"
          }
        ]
      }
    },
    {
      "concept": "回饋後重做",
      "syntax": "Immediate corrective feedback & Re-execution loop",
      "usage": "看到紅字批改後不是點頭看過去，而是立刻換一個新造詞再做一次「Thử lại với một ví dụ khác（用另一個例子再試一次）」，閉環修正動作。",
      "trap": "把訂正當成閱讀，沒有再次調用發音器官肌肉或筆尖重做一遍。",
      "mnemonic": "「看見紅字莫發呆，換個例子重開懷。」",
      "infograph": {
        "type": "flow",
        "title": "回饋即時重塑閉環",
        "steps": [
          {
            "title": "發生失誤",
            "desc": "聲調偏離或語序後置顛倒"
          },
          {
            "title": "即時回饋",
            "desc": "核對標準解析與音檔"
          },
          {
            "title": "新例重作",
            "desc": "Thử lại với một ví dụ khác."
          }
        ]
      }
    },
    {
      "concept": "區分學習條件",
      "syntax": "Cognitive load control: Tôi nhớ được bảy từ (7±2 工作記憶極限)",
      "usage": "人類工作記憶極限為 7±2 個意群。單次閃卡衝刺以 7 個核心單字為單位，超過此門檻大腦就會開始前攝抑制與後攝干擾。",
      "trap": "貪多嚼不爛，一次想吞下 100 個生詞，結果前面背後面忘。",
      "mnemonic": "「七個單字一小組，短小精悍記得牢。」",
      "infograph": {
        "type": "matrix",
        "title": "認知負荷單次提取飽和度表",
        "headers": [
          "單元容量",
          "記憶留存率",
          "大腦認知疲勞度"
        ],
        "rows": [
          [
            "5 - 7 個單字 (黃金區)",
            "85% - 95%",
            "極佳，隨時可複測鞏固"
          ],
          [
            "15 - 20 個單字",
            "45% - 60%",
            "中度疲乏，後半段出現混淆"
          ],
          [
            "50 個以上",
            "< 20%",
            "嚴重超載，產生無效假象"
          ]
        ]
      }
    },
    {
      "concept": "一次改一條件",
      "syntax": "Single-variable experimental method: Giảm số lượng từ / ngày",
      "usage": "科學調整學習節奏：如果背得痛苦，每次只調整一個變因（如減少每日單字量：Lần này tôi luyện ít từ hơn），觀察效率是否回升。",
      "trap": "同時更換教材、增加時間、換口音，導致無法歸因哪一項改動才真正有效。",
      "mnemonic": "「變因控制看科學，一次微調一要素。」",
      "infograph": {
        "type": "flow",
        "title": "學習策略單變數調優法",
        "steps": [
          {
            "title": "基準痛點",
            "desc": "每日 20 詞記憶崩潰"
          },
          {
            "title": "微調單變因",
            "desc": "單字量下修為 7 詞，維持時間不變"
          },
          {
            "title": "成效比對",
            "desc": "留存率顯著回升至 90%"
          }
        ]
      }
    },
    {
      "concept": "錯因導向複習",
      "syntax": "Root-cause targeted review: Tôi thường nhầm hai từ này.",
      "usage": "複習不應從第一頁盲目刷到最後一頁，專注打擊高頻混淆對立項「Tôi thường nhầm hai từ này（我常搞混這兩個詞）」，投資回報率最高。",
      "trap": "重複複習自己早已爛熟的簡單字，逃避真正卡關的硬骨頭。",
      "mnemonic": "「熟詞放馬歸深山，專挑易混硬骨頭。」",
      "infograph": {
        "type": "contrast",
        "title": "盲目全刷 vs 錯因靶向複習",
        "columns": [
          {
            "label": "盲目全刷 (低效舒適圈)",
            "status": "從頭到尾翻書",
            "example": "重溫已會的 Xin chào",
            "note": "心理舒服但無實質成長"
          },
          {
            "label": "錯因靶向 (高效攻堅)",
            "status": "直擊混淆病灶",
            "example": "專攻 lịch sự vs lịch sử",
            "note": "瞬間掃除測驗失分死穴"
          }
        ]
      }
    },
    {
      "concept": "交錯練習",
      "syntax": "Interleaving: mua (平) · mưa (平) · múa (銳) 隨機輪動",
      "usage": "交錯練習（Interleaving）打破單一模塊阻滯：將長相相近的 mua, mưa, múa 隨機打亂穿插辨音，逼迫大腦實時提取關鍵辨義特徵。",
      "trap": "先連續練100個平聲，再連續練100個銳聲，造成「定勢效應」，一混在一起立刻無法分辨。",
      "mnemonic": "「打亂穿插考眼力，真金不怕交錯火。」",
      "infograph": {
        "type": "matrix",
        "title": "交錯練習 (Interleaving) 知覺辨析陣列",
        "headers": [
          "音節項目",
          "母音特徵",
          "聲調走向",
          "詞義歸屬"
        ],
        "rows": [
          [
            "mua",
            "圓唇母音 /u/",
            "Ngang (33 平中)",
            "購買"
          ],
          [
            "mưa",
            "扁唇母音 /ɨ/",
            "Ngang (33 平中)",
            "落雨"
          ],
          [
            "múa",
            "圓唇母音 /u/",
            "Sắc (35 高升)",
            "舞動 / 跳舞"
          ]
        ]
      }
    },
    {
      "concept": "自己造句",
      "syntax": "Generative learning: Tôi tự đặt câu với từ mới.",
      "usage": "生成效應（Generation effect）：大腦自己從零創造出來的句子，其記憶深刻程度是單純閱讀他人例句的五倍以上（Tôi tự đặt câu）。",
      "trap": "滿足於課本例句背得很熟，自己從未動手用生活真實事物造過半句。",
      "mnemonic": "「課本句子是他人，自己造句入靈魂。」",
      "infograph": {
        "type": "flow",
        "title": "生成效應 (Generation effect) 大腦加工梯",
        "steps": [
          {
            "title": "輸入新詞",
            "desc": "吸收詞意與語法槽位"
          },
          {
            "title": "生活檢索",
            "desc": "聯想個人親身經歷或工作"
          },
          {
            "title": "原創生成",
            "desc": "Tôi tự đặt câu với từ mới."
          }
        ]
      }
    },
    {
      "concept": "隔夜回想",
      "syntax": "Sleep-dependent memory consolidation: Tối học, sáng ôn lại.",
      "usage": "睡眠是海馬迴將短期記憶轉化為大腦皮層長期存儲的關鍵生理過程：「Tối học, sáng ôn lại（晚上學、早晨醒來第一件事閉目回想）」。",
      "trap": "通宵熬夜學習剝奪深層慢波睡眠（SWS），白天學的東西在夜晚無法固化而大量流失。",
      "mnemonic": "「夜讀慢品入夢鄉，晨起回眸印心房。」",
      "infograph": {
        "type": "timeline",
        "title": "睡眠大腦皮層記憶固化雙時段模型",
        "stages": [
          {
            "tag": "夜晚時段 (睡前 30 分)",
            "desc": "輕度輸入與提取練習",
            "ex": "Tối học (海馬迴編碼)"
          },
          {
            "tag": "深度睡眠 (SWS/REM)",
            "desc": "大腦突觸修剪與長效轉移",
            "ex": "神經網絡轉入大腦皮層"
          },
          {
            "tag": "晨起時段 (醒後即刻)",
            "desc": "晨起閉目核對與提取",
            "ex": "Sáng ôn lại (記憶完全固化)"
          }
        ]
      }
    }
  ]
};
