// Part 4: Modules 16-20 (flashcards, topics, fasttrack, emergency, science)

export const part4 = {
  flashcards: [
    {
      concept: '回想再翻面',
      syntax: 'Active recall: Cue (Từ đơn) ➔ Output sentence (Đặt câu)',
      usage: '看閃卡正面時，絕不偷看背面！先在腦海中主動提取意思並在心中說出一句完整例句（如 học ➔ Tôi học tiếng Việt），再翻面核對。',
      trap: '翻面太快，誤將「被動再認（Recognition）」當成「主動提取（Recall）」，考場上毫無提取能力。',
      mnemonic: '「見卡莫急翻，默想成句再揭底。」',
      infograph: {
        type: 'flow',
        title: '主動回想與被動辨識認知分流',
        steps: [
          { title: '看到正面提示', desc: 'hoc (學)' },
          { title: '大腦主動提取', desc: '檢索記憶造句：Tôi học tiếng Việt.' },
          { title: '翻面核對結果', desc: '驗證詞義與聲調完全精確' }
        ]
      }
    },
    {
      concept: '搭配成組',
      syntax: 'Collocation chunk: đặt + [phòng (房間) / vé (票) / bàn (餐桌)]',
      usage: '單字不要孤立背誦，記憶高頻搭配詞塊（Collocations）：đặt phòng（訂房）、đặt vé（訂票）、đặt bàn（訂位），輸出速度快三倍。',
      trap: '把單字拆碎單獨背「đặt」，開口時不知道後面能接什麼名詞。',
      mnemonic: '「動詞名詞成雙對，訂房訂票整組背。」',
      infograph: {
        type: 'tree',
        title: '高頻動詞「đặt (預約)」搭配詞族樹',
        branches: [
          { root: 'đặt (預訂)', leaf: '+ phòng ➔ đặt phòng (飯店訂房)' },
          { root: 'đặt (預訂)', leaf: '+ vé ➔ đặt vé (機票/車票)' },
          { root: 'đặt (預訂)', leaf: '+ bàn ➔ đặt bàn (餐廳訂位)' }
        ]
      }
    },
    {
      concept: '易混對比',
      syntax: 'False friends & Confusables: lịch sự (禮貌) vs lịch sử (歷史)',
      usage: '將外形極為相近、聲調相異的詞彙放在同一張卡片中正反對照：lịch sự 是禮貌體面，lịch sử 才是歷史春秋。',
      trap: '分開背誦時好像都懂，一到考卷或對話中立刻張冠李戴。',
      mnemonic: '「玄重是禮貌 lịch sự，玄問是歷史 lịch sử。」',
      infograph: {
        type: 'contrast',
        title: '高危易混聲調對比矩陣',
        columns: [
          { label: 'lịch sự (重聲)', status: '形容詞：有禮貌 / 體面', example: 'Anh ấy rất lịch sự.', note: '待人接物溫文儒雅' },
          { label: 'lịch sử (問聲)', status: '名詞：歷史 / 歲月紀實', example: 'Lịch sử Việt Nam.', note: '千年歷史文明載體' }
        ]
      }
    },
    {
      concept: '一詞多搭配',
      syntax: 'Polysemous collocations: học bài (溫習功課) vs học tiếng Việt (學越語)',
      usage: '同一個核心動詞在不同語境下呈現多樣搭配：học bài 指在學學生複習功課；học tiếng Việt 指學習特定語言技能。',
      trap: '以為 học 只能接學科名詞，聽到 học bài 以為是「學一張牌」。',
      mnemonic: '「一詞牽動多搭配，溫課學語各生輝。」',
      infograph: {
        type: 'slots',
        title: '動詞 học 語境語用多維搭配',
        slots: [
          { label: '核心動作', val: 'học' },
          { label: '語境 A (學校)', val: 'bài (溫習功課)' },
          { label: '語境 B (技能)', val: 'tiếng Việt (習得語言)' }
        ]
      }
    },
    {
      concept: '正反向提取',
      syntax: 'Bidirectional recall: Vi ➔ Zh (聽讀理解) & Zh ➔ Vi (口說輸出)',
      usage: '閃卡必須雙向訓練：越翻中訓練聽覺與閱讀解碼；中翻越訓練大腦主動檢索詞彙並由發音器官說出的主動輸出能力。',
      trap: '只練看越文能猜出中文，遇到要自己開口說越語時腦中一片空白。',
      mnemonic: '「正向練聽讀，反向練開口；雙向皆通順，方能成對話。」',
      infograph: {
        type: 'contrast',
        title: '雙向閃卡神經提取通道',
        columns: [
          { label: '輸入通道 (越 ➔ 中)', status: '聽覺閱讀再認', example: 'đặt vé ➔ 訂票', note: '理解對方說話意圖' },
          { label: '輸出通道 (中 ➔ 越)', status: '主動神經檢索', example: '訂票 ➔ đặt vé', note: '自我開口主動表達' }
        ]
      }
    },
    {
      concept: '錯卡修復',
      syntax: 'Contextual sentence repair: Tôi muốn đặt vé đi Hà Nội.',
      usage: '每次答錯的閃卡，不要僅僅塞回牌組重抽，必須立刻放進完整的情境句子中朗讀三遍，重建上下文記憶連結。',
      trap: '孤立地反覆死記一個單字，缺乏語境掛鉤依然極易二次遺忘。',
      mnemonic: '「錯卡莫單背，嵌進句子記千回。」',
      infograph: {
        type: 'slots',
        title: '錯詞語境修復三維度擴展',
        slots: [
          { label: '主意願', val: 'Tôi muốn' },
          { label: '修復核心詞', val: 'đặt vé' },
          { label: '目的地指向', val: 'đi Hà Nội.' }
        ]
      }
    },
    {
      concept: '詞族擴展',
      syntax: 'Root family: làm (做) ➔ làm việc (工作) ➔ làm ơn (施恩/勞駕)',
      usage: '圍繞核心動詞 làm 擴展構詞族：làm 是做、làm việc 是工作辦公、làm ơn 是客氣請託（勞駕/拜託）。以字根帶動整串詞族。',
      trap: '把 làm ơn 誤當作「做恩人」，不懂其在句首作為禮貌請求「請幫忙/勞駕」的語用語義。',
      mnemonic: '「làm 是基礎做，làm việc 上班去，làm ơn 勞駕客氣話。」',
      infograph: {
        type: 'tree',
        title: '核心動詞「làm (做)」語意族譜',
        branches: [
          { root: 'làm (動作)', leaf: '+ việc ➔ làm việc (從事職業工作)' },
          { root: 'làm (動作)', leaf: '+ ơn ➔ làm ơn (施恩禮貌請求: 勞駕)' },
          { root: 'làm (動作)', leaf: '+ quen ➔ làm quen (結交認識朋友)' }
        ]
      }
    },
    {
      concept: '語境卡',
      syntax: 'Context-rich sentence card: Tôi đặt bàn cho bốn người.',
      usage: '將閃卡升級為「全情境卡」：除了單字，直接印上包含人數、地點、時間的完整實戰句（Tôi đặt bàn cho bốn người: 我訂四人桌）。',
      trap: '只背單字卡，進入真實餐廳情境無法組成符合語法規範的完整句子。',
      mnemonic: '「全句情境卡，走進生活能當差。」',
      infograph: {
        type: 'slots',
        title: '情境閃卡四要素完整體',
        slots: [
          { label: '主詞', val: 'Tôi' },
          { label: '核心動作短語', val: 'đặt bàn' },
          { label: '受惠人數標的', val: 'cho bốn người.' }
        ]
      }
    },
    {
      concept: '分類與合併',
      syntax: 'Semantic category clustering: xe máy · xe buýt · xe đạp',
      usage: '運用語意場（Semantic field）分類法：將交通工具歸為一類（xe máy 機車、xe buýt 公車、xe đạp 腳踏車），建立整體的心理詞彙聯想群。',
      trap: '隨機碎片式背單字（今天背一個香蕉、明天背一個輪胎），大腦聯想網零散混亂。',
      mnemonic: '「xe 字打頭車成行，機車公車踏車忙。」',
      infograph: {
        type: 'tree',
        title: '交通工具「xe (車)」語意場聚合',
        branches: [
          { root: 'xe (各型車輛)', leaf: '+ máy ➔ xe máy (機車/主力代步)' },
          { root: 'xe (各型車輛)', leaf: '+ buýt ➔ xe buýt (市區公共汽車)' },
          { root: 'xe (各型車輛)', leaf: '+ đạp ➔ xe đạp (人力自行車)' }
        ]
      }
    }
  ],

  topics: [
    {
      concept: '客製需求',
      syntax: 'Cho tôi một ly + [Đồ uống] + ít đường / không đá',
      usage: '越南咖啡店點單客製必學：Cho tôi một ly cà phê ít đường（請給我一杯少糖咖啡）；không đường（無糖）、ít đá（少冰）。',
      trap: '越南傳統煉乳咖啡（Cà phê sữa đá）極甜，若不主動說 ít đường 會被甜度衝擊。',
      mnemonic: '「少糖 ít đường 少冰 ít đá，客製點單最貼心。」',
      infograph: {
        type: 'slots',
        title: '越南飲品客製化語法積木',
        slots: [
          { label: '請求開頭', val: 'Cho tôi' },
          { label: '規格計量', val: 'một ly' },
          { label: '核心飲品', val: 'cà phê' },
          { label: '客製糖度', val: 'ít đường.' }
        ]
      }
    },
    {
      concept: '日期與停留',
      syntax: '[S] + ở đây + [Số lượng] + ngày. (宣告停留期間)',
      usage: '飯店入住或海關問話核心句：Tôi ở đây ba ngày（我在這裡停留三天）。數字直接接 ngày。',
      trap: '將 ngày 與 hôm 混用；hôm 多用於特定某天（如 hôm nay），計算天數長度固定用 ngày。',
      mnemonic: '「停留幾天用 ngày 算，在本地區 ở đây 標。」',
      infograph: {
        type: 'slots',
        title: '旅宿停留時間長度宣告結構',
        slots: [
          { label: '主體', val: 'Tôi' },
          { label: '處所鎖定', val: 'ở đây' },
          { label: '天數時間量', val: 'ba ngày.' }
        ]
      }
    },
    {
      concept: '症狀敘述',
      syntax: '[S] + bị + đau [Bộ phận] + từ [Thời điểm]',
      usage: '看診就醫黃金句型：Tôi bị đau đầu từ hôm qua（我從昨天開始頭痛）。bị 標記身體不適，đau 接身體部位，từ 接起算時間。',
      trap: '看診時只說「Tôi ốm（我生病）」，醫生無法得知具體病灶部位與發病時程。',
      mnemonic: '「bị đau 接部位，từ 接起病時。」',
      infograph: {
        type: 'slots',
        title: '醫療問診精確症狀描述積木',
        slots: [
          { label: '患者主體', val: 'Tôi' },
          { label: '消極受恙', val: 'bị' },
          { label: '病灶痛點', val: 'đau đầu' },
          { label: '起發時間標記', val: 'từ hôm qua.' }
        ]
      }
    },
    {
      concept: '日期與星期',
      syntax: 'thứ hai (星期一) vs ngày hai tháng ba (三月二號)',
      usage: '越南星期系統從 thứ hai（星期一，字面第二）起算至 thứ bảy（星期六），週日為 Chủ nhật；日曆日期則是 ngày + 號數 + tháng + 月份。',
      trap: '把 thứ hai 誤當成「星期二」；越語的「二」對應華語的「星期一」，全週平移一位！',
      mnemonic: '「thứ hai 是週一，Chủ nhật 是週天；順位差一天，約會莫搞偏。」',
      infograph: {
        type: 'contrast',
        title: '越語星期平移一席對照表',
        columns: [
          { label: '越語序數名稱', status: '字面順位', example: 'thứ hai · thứ ba · thứ tư', note: '星期一 (2) · 星期二 (3) · 星期三 (4)' },
          { label: '華語習慣名稱', status: '華語對應', example: '週一 · 週二 · 週三', note: '越語數字比華語星期數字大 1' }
        ]
      }
    },
    {
      concept: '時間範圍',
      syntax: 'từ + [Giờ bắt đầu] + đến + [Giờ kết thúc] (時空起訖區間)',
      usage: '標記營業時間或會議時長：từ tám giờ đến mười giờ（從八點到十點）。từ…đến… 同時適用於時間與地理空間。',
      trap: '把 đến 寫成 tới 在北部書面公函中不夠正式；từ…đến 為全域標準用詞。',
      mnemonic: '「từ 是起點 đến 是終，時間空間皆相通。」',
      infograph: {
        type: 'timeline',
        title: '時段起訖區間標準時間軸',
        stages: [
          { tag: '起點 (Từ)', desc: 'tám giờ (8:00)', ex: '活動起始' },
          { tag: '跨度進行', desc: '持續 2 小時', ex: '會議/營業中' },
          { tag: '終點 (Đến)', desc: 'mười giờ (10:00)', ex: '活動收尾' }
        ]
      }
    },
    {
      concept: '需求變更',
      syntax: 'Không + [Thành phần 1] , ít + [Thành phần 2] (連環客製修飾)',
      usage: '緊湊快速交代多重飲食忌口：Không đường, ít đá（不要糖、少冰）。口語中直接省略主謂，短小精悍。',
      trap: '囉嗦說一長串完整句子，在排隊繁忙的飲料攤容易讓店員漏聽關鍵客製。',
      mnemonic: '「不要說 không，少要說 ít，俐落精簡免出錯。」',
      infograph: {
        type: 'slots',
        title: '快節奏點單緊湊槽位',
        slots: [
          { label: '排除項', val: 'Không đường (無糖)' },
          { label: '微調項', val: 'ít đá (少冰)' }
        ]
      }
    },
    {
      concept: '不適程度',
      syntax: 'Tôi hơi sốt (微熱輕症) vs Tôi sốt cao (發高燒急症)',
      usage: '精準刻畫病情輕重緩急：hơi 是輕微、微弱；cao 是劇烈、高昂。向醫師描述「sốt cao」會立刻被引導至急診處置。',
      trap: '明明只是低燒 37.2 度卻喊 sốt cao，造成醫療資源誤判。',
      mnemonic: '「輕微用 hơi，劇烈用 cao，醫病情勢辨分明。」',
      infograph: {
        type: 'contrast',
        title: '發燒程度等級分流診斷',
        columns: [
          { label: 'Tôi hơi sốt (低燒輕微)', status: '低熱可服成藥觀察', example: '37.2°C - 38.0°C', note: '多喝水、休息退熱' },
          { label: 'Tôi sốt cao (高燒危急)', status: '高熱需立即就醫', example: '> 38.5°C 伴隨發抖', note: '立刻就醫抽血檢查登革熱' }
        ]
      }
    },
    {
      concept: '親屬介紹',
      syntax: 'Đây là + [Quan hệ] + của tôi. (隆重引介親友公式)',
      usage: '社交場合向他人介紹家人：Đây là em gái tôi（這是我的妹妹）。Đây là 用於指認近處人事物。',
      trap: '把 em gái nói thành *gái em，修飾語倒置造成語法錯誤。',
      mnemonic: '「Đây là 引介在眼前，中心親屬修飾後。」',
      infograph: {
        type: 'slots',
        title: '社交親屬引介標準槽位',
        slots: [
          { label: '近指引介', val: 'Đây là' },
          { label: '親屬關係', val: 'em gái' },
          { label: '所屬主體', val: 'tôi.' }
        ]
      }
    },
    {
      concept: '合作寒暄',
      syntax: 'Rất vui được hợp tác với + [Đối tượng] (商務合作結盟金句)',
      usage: '商務簽約或初次洽談圓滿時必說客套話：Rất vui được hợp tác với anh（非常榮幸能與您合作）。',
      trap: '只說隨便的「Cảm ơn」，缺乏對未來長期合作夥伴關係的崇高期許。',
      mnemonic: '「Rất vui 歡喜心，hợp tác 結同心。」',
      infograph: {
        type: 'slots',
        title: '商務結盟崇高敬語積木',
        slots: [
          { label: '愉悅心境', val: 'Rất vui' },
          { label: '榮幸被動', val: 'được' },
          { label: '核心商務協作', val: 'hợp tác với' },
          { label: '尊榮對象', val: 'anh.' }
        ]
      }
    }
  ],

  fasttrack: [
    {
      concept: '第1–2天',
      syntax: 'Xin chào (通用問候) ； Cho tôi + [Món] (生存點餐)',
      usage: '抵達越南頭48小時核心任務：學會不分長幼的通用問候「Xin chào」，以及在餐館指物點單「Cho tôi một ly trà（請給我一杯茶）」。',
      trap: '頭兩天就試圖搞懂極端複雜的親屬稱謂，導致大腦超載不敢開口。',
      mnemonic: '「見人先說 Xin chào，進店要喝 Cho tôi trà。」',
      infograph: {
        type: 'steps',
        title: '抵越 48 小時生存速通雙核',
        steps: [
          { level: '社交破冰', tag: 'Xin chào', ex: '向海關、司機、櫃檯微笑問好' },
          { level: '生存飲水', tag: 'Cho tôi một ly…', ex: '水、茶、咖啡順暢點單' }
        ]
      }
    },
    {
      concept: '第3–5天',
      syntax: 'Bao nhiêu tiền? (買單問價) ； Tôi là người Đài Loan (身分宣示)',
      usage: '中程任務：掌握問價「Bao nhiêu tiền?」並能清晰自報家門「Tôi là người Đài Loan（我是台灣人）」，建立友善民間互信。',
      trap: '講不出自己是台灣人，在當地常被誤認為其他國家旅客而產生溝通距離。',
      mnemonic: '「問價 Bao nhiêu tiền，身分認同 Đài Loan 人。」',
      infograph: {
        type: 'contrast',
        title: '旅程第 3-5 天雙支柱技能',
        columns: [
          { label: '經濟自主 (問價結帳)', status: '詢問總額防受騙', example: 'Cái này bao nhiêu tiền?', note: '掌控預算並覆核找零' },
          { label: '文化認同 (破冰親善)', status: '表明身分獲好感', example: 'Tôi là người Đài Loan.', note: '多數越南人對台灣極具好感' }
        ]
      }
    },
    {
      concept: '第6–7天',
      syntax: 'Tôi cần + [Hành động / Sự giúp đỡ] (主動求助與深度互動)',
      usage: '末程任務：能主動表達深層需求「Tôi cần giúp đỡ（我需要協助）」或尋求特定服務，具備在越南獨立行動之全方位自主性。',
      trap: '遇到突發狀況只會講英語，當地基層民眾可能無法第一時間施以援手。',
      mnemonic: '「困難開口 Tôi cần giúp，七天速成走四方。」',
      infograph: {
        type: 'flow',
        title: '七天速成終極求援發起流程',
        steps: [
          { title: '吸引注意', desc: 'Anh ơi! / Chị ơi!' },
          { title: '發出求助', desc: 'Tôi cần giúp đỡ.' },
          { title: '出示具體證物', desc: '出示地址、手機或文件' }
        ]
      }
    },
    {
      concept: '交通目的地',
      syntax: 'Cho tôi đến + [Địa chỉ / Địa danh] (叫車指路公式)',
      usage: '搭乘計程車或 Grab 機車時向司機指示：「Cho tôi đến địa chỉ này（請載我到這個地址）」，同時出示手機地圖。',
      trap: '用自學不標準的聲調念生僻路名，司機容易聽錯載到完全不同城區。',
      mnemonic: '「Cho tôi đến 指方向，地址出示免慌張。」',
      infograph: {
        type: 'slots',
        title: '搭車指令標準語法槽位',
        slots: [
          { label: '指示動詞', val: 'Cho tôi đến' },
          { label: '指示代詞', val: 'địa chỉ này.' },
          { label: '輔助動作', val: '［遞出手機螢幕］' }
        ]
      }
    },
    {
      concept: '結帳問題',
      syntax: 'Tôi có thể trả bằng + [thẻ (信用卡) / tiền mặt (現金)] + không?',
      usage: '在非路邊攤的餐廳結帳時詢問支付管道：「Tôi có thể trả bằng thẻ không?（我可以刷卡嗎？）」。',
      trap: '吃完飯直接掏卡，很多店面只收現金或本地轉帳，無法刷國際信用卡。',
      mnemonic: '「先問能不能刷卡，trả bằng thẻ 免尷尬。」',
      infograph: {
        type: 'slots',
        title: '支付方式許可徵詢積木',
        slots: [
          { label: '主體框架', val: 'Tôi có thể' },
          { label: '支付介詞短語', val: 'trả bằng thẻ' },
          { label: '閉環疑問', val: 'không?' }
        ]
      }
    },
    {
      concept: '社交延續',
      syntax: '[Đối tượng] + có dùng Zalo không? (建立長久通訊管道)',
      usage: '越南普及率第一的國民通訊軟體是 Zalo。結識新朋友後詢問「Bạn có dùng Zalo không?」，掃描 QR 碼加好友是維持人脈核心步驟。',
      trap: '問越南朋友有沒有 LINE 或 WeChat，很多人沒有安裝或極少使用。',
      mnemonic: '「越南社交看 Zalo，掃碼加友最暢通。」',
      infograph: {
        type: 'flow',
        title: '越南在地社交連結四部曲',
        steps: [
          { title: '友善提問', desc: 'Bạn có dùng Zalo không?' },
          { title: '開啟軟體', desc: '打開個人名片二維條碼' },
          { title: '掃描加友', desc: 'Quét mã kết bạn' },
          { title: '發送打招呼', desc: '發送問候確認好友成功' }
        ]
      }
    },
    {
      concept: '天氣閒聊',
      syntax: 'Hôm nay trời + [Tính từ thời tiết: nóng / mưa] + quá!',
      usage: '打破尷尬的破冰法寶永遠是天氣：「Hôm nay trời nóng quá!（今天天氣好熱啊！）」容易引起周圍人強烈共鳴。',
      trap: '在北方冬天（可能低至10度）仍機械念 nóng quá，應改為 rét quá。',
      mnemonic: '「熱了喊 nóng 冷喊 rét，天地寒暄心相連。」',
      infograph: {
        type: 'slots',
        title: '天氣感嘆句型積木',
        slots: [
          { label: '時間主語', val: 'Hôm nay' },
          { label: '天候載體', val: 'trời' },
          { label: '核心感覺', val: 'nóng' },
          { label: '極致感嘆詞', val: 'quá!' }
        ]
      }
    },
    {
      concept: '聽懂指路',
      syntax: 'Đi thẳng (直走) ➔ rẽ trái (左轉) / rẽ phải (右轉)',
      usage: '問路聽辨三字訣：đi thẳng（直走）、rẽ trái（左轉）、rẽ phải（右轉）。結合手勢聽懂關鍵導向。',
      trap: '把 trái（左）與 phải（右）搞反；phải 同時有「正確、必須、右邊」多重語意。',
      mnemonic: '「Đi thẳng 直行向前，trái 左 phải 右記心田。」',
      infograph: {
        type: 'steps',
        title: '市井指路方向核心三方位',
        steps: [
          { level: '直線推進', tag: 'Đi thẳng', ex: '維持當前路徑向前行' },
          { level: '向左轉向', tag: 'Rẽ trái', ex: '於前方路口向左切入' },
          { level: '向右轉向', tag: 'Rẽ phải', ex: '於前方路口向右切入' }
        ]
      }
    },
    {
      concept: '報案句',
      syntax: '[S] + bị + cướp + [Đồ vật] (遭搶報案定性句)',
      usage: '遭遇飛車搶奪時向警方定性陳述：「Tôi bị cướp điện thoại（我的手機被搶了）」。cướp 是搶奪，mất 是遺失，法律性質截然不同。',
      trap: '把搶劫說成 mất（弄丟），警局可能只當作一般失物登記而不立案調查。',
      mnemonic: '「被搶嚴肅說 cướp，遺失才是 nói mất。」',
      infograph: {
        type: 'contrast',
        title: '刑案遭搶 (Cướp) vs 疏忽遺失 (Mất) 法律本質對照',
        columns: [
          { label: 'Bị cướp (刑事搶奪)', status: '遭受暴力/飛車掠奪', example: 'Tôi bị cướp điện thoại.', note: '需立即調閱監視器並立刑事案' },
          { label: 'Bị mất (單純遺失)', status: '自己疏忽遺忘或掉落', example: 'Tôi bị mất hộ chiếu.', note: '多開立遺失證明以備補發' }
        ]
      }
    }
  ],

  emergency: [
    {
      concept: '先說位置',
      syntax: '[S] + đang ở + [Vị trí cụ thể] (黃金救援第一律)',
      usage: '緊急求救第一黃金法則：先報位置！「Tôi đang ở khách sạn này（我正在這間飯店）」，確保通訊中斷時救援人員能抵達現場。',
      trap: '打通電話只慌亂大哭喊救命，幾分鐘過去了對方依然不知道你在哪個行政區。',
      mnemonic: '「急難求救位居先，Tôi đang ở 報地點。」',
      infograph: {
        type: 'flow',
        title: '急難求助資訊優先級金字塔',
        steps: [
          { title: '第1優先：空間座標', desc: 'Tôi đang ở… (具體地址/地標)' },
          { title: '第2優先：人身問題', desc: 'Tôi bị… (傷病/危險類型)' },
          { title: '第3優先：具體請求', desc: 'Xin gọi… (救護車/翻譯/警察)' }
        ]
      }
    },
    {
      concept: '再說問題',
      syntax: '[S] + bị + [Vấn đề: mất hộ chiếu / tai nạn] (定性危急事態)',
      usage: '報明位置後，一句話定性事故：Tôi bị mất hộ chiếu（我遺失了護照）；Tôi bị tai nạn（我遭遇事故）。',
      trap: '講述無關緊要的來龍去脈瑣事，耽誤黃金處置窗口。',
      mnemonic: '「定性問題一針血，護照事故快通報。」',
      infograph: {
        type: 'slots',
        title: '事態本質定性積木',
        slots: [
          { label: '當事人', val: 'Tôi' },
          { label: '遭逢標記', val: 'bị' },
          { label: '核心險情', val: 'mất hộ chiếu / tai nạn.' }
        ]
      }
    },
    {
      concept: '提出需求',
      syntax: 'Xin gọi + [Đối tượng cứu hộ] + giúp tôi. (請求派遣救援)',
      usage: '明確發出救援請求動詞：「Xin gọi người phiên dịch giúp tôi（請幫我叫翻譯員）」或「Xin gọi cấp cứu（請叫救護車）」。',
      trap: '把希望對方採取的行動含在嘴裡不說，以為對方能心電感應猜中。',
      mnemonic: '「Xin gọi 行動求援令，救護警察速現身。」',
      infograph: {
        type: 'steps',
        title: '越南三大緊急報警電話矩陣',
        steps: [
          { level: '113', tag: 'Cảnh sát (警察)', ex: '遭遇搶奪、暴力或重大治安事故' },
          { level: '114', tag: 'Cứu hỏa (消防)', ex: '火災、塌陷或重大天災搜救' },
          { level: '115', tag: 'Cấp cứu (救護車)', ex: '突發昏迷、重傷或性命垂危' }
        ]
      }
    },
    {
      concept: '聯絡協助者',
      syntax: 'Xin liên hệ với + [Người này] + giúp tôi. (第三方聯絡)',
      usage: '出示緊急聯絡卡或親友名片：「Xin liên hệ với người này giúp tôi（請幫我聯絡這個人）」，建立外部救援管道。',
      trap: '平時未在皮夾或手機備註緊急聯絡人姓名電話，遇難時他人無從聯繫。',
      mnemonic: '「出示名片求聯絡，liên hệ 幫手解危難。」',
      infograph: {
        type: 'slots',
        title: '第三方緊急委託聯絡槽位',
        slots: [
          { label: '委託前綴', val: 'Xin' },
          { label: '聯絡動詞', val: 'liên hệ với' },
          { label: '特定對象', val: 'người này' },
          { label: '救援受惠詞', val: 'giúp tôi.' }
        ]
      }
    },
    {
      concept: '語言需求',
      syntax: '[S] + cần + người phiên dịch + [Ngôn ngữ] (語言屏障排查)',
      usage: '在醫院急診或派出所做筆錄時，堅決主張自身權益：「Tôi cần người phiên dịch tiếng Trung（我需要中文翻譯人員）」。',
      trap: '在語言不通且看不懂法律文件的情況下，隨意在越南文筆錄上簽名蓋指紋。',
      mnemonic: '「未見中文譯員面，官方筆錄莫亂簽。」',
      infograph: {
        type: 'slots',
        title: '法律醫療翻譯權利主張積木',
        slots: [
          { label: '權利主體', val: 'Tôi' },
          { label: '必需動詞', val: 'cần' },
          { label: '專業角色', val: 'người phiên dịch' },
          { label: '語言限定', val: 'tiếng Trung.' }
        ]
      }
    },
    {
      concept: '描述發生時間',
      syntax: 'Việc này xảy ra + [Thời gian cụ thể] (事故時序精確化)',
      usage: '向警方報案時提供精確時間錨點：Việc này xảy ra sáng nay（這件事發生在今天早上）。便於警方調閱相關時段道路監視器。',
      trap: '時間說得含糊不清（如「好像前幾天」），大幅增加警方破案追查難度。',
      mnemonic: '「時間點明 sáng nay，監視影像好追蹤。」',
      infograph: {
        type: 'slots',
        title: '事件時序錨定結構',
        slots: [
          { label: '指涉事件', val: 'Việc này' },
          { label: '發生動詞', val: 'xảy ra' },
          { label: '時點槽位', val: 'sáng nay.' }
        ]
      }
    },
    {
      concept: '過敏告知',
      syntax: '[S] + bị dị ứng với + [Tác nhân dị ứng: hải sản / thuốc]',
      usage: '用餐或醫院打針前保命金句：Tôi bị dị ứng với hải sản（我對海鮮過敏）；Tôi bị dị ứng với penicillin（我對抗生素過敏）。',
      trap: '誤以為只是輕微挑食沒說，造成過敏性休克危及生命安全。',
      mnemonic: '「dị ứng 過敏性命關，海鮮藥物說在先。」',
      infograph: {
        type: 'contrast',
        title: '常見過敏源警示列表',
        columns: [
          { label: '飲食過敏源 (Thực phẩm)', status: 'hải sản (海鮮) / đậu phộng (花生)', example: 'Dị ứng với hải sản', note: '餐廳點餐前務必反覆交代' },
          { label: '藥物過敏源 (Thuốc men)', status: 'thuốc kháng sinh (抗生素)', example: 'Dị ứng với penicillin', note: '看診與注射前務必白紙黑字寫明' }
        ]
      }
    },
    {
      concept: '疼痛位置',
      syntax: '[S] + đau + [Cơ quan] + ở bên + [trái (左) / phải (右)]',
      usage: '向急診室護士精準定位病痛位置：Tôi đau bụng ở bên phải（我右側肚子痛）。右下腹痛為急性闌尾炎重大警訊。',
      trap: '只摸著肚子喊 đau，未能指明左側還是右側，延誤急診超音波分流診斷。',
      mnemonic: '「肚子痛分左和右，bên phải 右側要分明。」',
      infograph: {
        type: 'slots',
        title: '急診痛點器官與方位定位積木',
        slots: [
          { label: '主體', val: 'Tôi' },
          { label: '病痛器官', val: 'đau bụng' },
          { label: '方位鎖定', val: 'ở bên phải.' }
        ]
      }
    },
    {
      concept: '索取書面證明',
      syntax: 'Xin viết + giấy xác nhận + cho tôi. (保險理賠法定文書)',
      usage: '離開醫院或警局前務必索取書面憑據：Xin viết giấy xác nhận cho tôi（請開立確認證明給我），回國申請健保或商業保險理賠必備。',
      trap: '口頭處理完就離開，回國後保險公司因缺乏官方證明文件全數拒賠。',
      mnemonic: '「giấy xác nhận 白紙字，理賠退款有憑據。」',
      infograph: {
        type: 'steps',
        title: '涉外事故證明文書閉環',
        steps: [
          { level: '事故處置', tag: 'Xử lý', ex: '完成診療或警局筆錄' },
          { level: '請求立狀', tag: 'Xin viết', ex: 'Xin viết giấy xác nhận cho tôi' },
          { level: '蓋印核發', tag: 'Đóng dấu', ex: '核對公章與醫師、警官簽名' }
        ]
      }
    }
  ],

  science: [
    {
      concept: '提取練習',
      syntax: 'Testing effect (測試效應): Retrieval practice without notes',
      usage: '認知心理學公認最強學習法：闔上課本盲說「Hãy nói lại mà không nhìn bài（不看課本重新說一遍）」，強迫神經突觸建立長效連結。',
      trap: '捧著課本反覆重讀劃線（Re-reading），產生「自己好像背得很熟」的假性流暢感。',
      mnemonic: '「閉卷提取勝萬卷，神經突觸深深連。」',
      infograph: {
        type: 'contrast',
        title: '反覆重讀 (低效) vs 主動提取測試 (高效)',
        columns: [
          { label: '反覆重讀 (被動閱讀)', status: '假性記憶飽和', example: '課本劃線滿篇紅', note: '工作記憶殘留，24小時後遺忘 80%' },
          { label: '閉卷提取 (刻意回想)', status: '大腦深層神經鞏固', example: '蓋住課本盲講全句', note: '強化突觸長期增強效應 (LTP)' }
        ]
      }
    },
    {
      concept: '間隔與交錯',
      syntax: 'Spaced & Interleaved practice: Hôm nay ➔ ngày mai ➔ tuần sau',
      usage: '間隔重複（Spaced repetition）：今天學、明天複習、下週重測；交錯混入不同主題，打破大腦疲乏，抗遺忘效率提高300%。',
      trap: '考前一晚通宵死記硬背（Cramming），兩天後忘得乾乾淨淨。',
      mnemonic: '「今朝種子明朝顧，下週成林風不倒。」',
      infograph: {
        type: 'timeline',
        title: '艾賓浩斯間隔遺忘曲線對抗時序',
        stages: [
          { tag: '第1天 (當期)', desc: '學習與首輪閉卷提取', ex: '留存率 100%' },
          { tag: '第2天 (24小時)', desc: '首度間隔回想鞏固', ex: '阻斷急遽衰退期' },
          { tag: '第7天 (1週後)', desc: '跨主題交錯綜合複測', ex: '轉化為永久長效記憶' }
        ]
      }
    },
    {
      concept: '回饋後重做',
      syntax: 'Immediate corrective feedback & Re-execution loop',
      usage: '看到紅字批改後不是點頭看過去，而是立刻換一個新造詞再做一次「Thử lại với một ví dụ khác（用另一個例子再試一次）」，閉環修正動作。',
      trap: '把訂正當成閱讀，沒有再次調用發音器官肌肉或筆尖重做一遍。',
      mnemonic: '「看見紅字莫發呆，換個例子重開懷。」',
      infograph: {
        type: 'flow',
        title: '回饋即時重塑閉環',
        steps: [
          { title: '發生失誤', desc: '聲調偏離或語序後置顛倒' },
          { title: '即時回饋', desc: '核對標準解析與音檔' },
          { title: '新例重作', desc: 'Thử lại với một ví dụ khác.' }
        ]
      }
    },
    {
      concept: '區分學習條件',
      syntax: 'Cognitive load control: Tôi nhớ được bảy từ (7±2 工作記憶極限)',
      usage: '人類工作記憶極限為 7±2 個意群。單次閃卡衝刺以 7 個核心單字為單位，超過此門檻大腦就會開始前攝抑制與後攝干擾。',
      trap: '貪多嚼不爛，一次想吞下 100 個生詞，結果前面背後面忘。',
      mnemonic: '「七個單字一小組，短小精悍記得牢。」',
      infograph: {
        type: 'matrix',
        title: '認知負荷單次提取飽和度表',
        headers: ['單元容量', '記憶留存率', '大腦認知疲勞度'],
        rows: [
          ['5 - 7 個單字 (黃金區)', '85% - 95%', '極佳，隨時可複測鞏固'],
          ['15 - 20 個單字', '45% - 60%', '中度疲乏，後半段出現混淆'],
          ['50 個以上', '< 20%', '嚴重超載，產生無效假象']
        ]
      }
    },
    {
      concept: '一次改一條件',
      syntax: 'Single-variable experimental method: Giảm số lượng từ / ngày',
      usage: '科學調整學習節奏：如果背得痛苦，每次只調整一個變因（如減少每日單字量：Lần này tôi luyện ít từ hơn），觀察效率是否回升。',
      trap: '同時更換教材、增加時間、換口音，導致無法歸因哪一項改動才真正有效。',
      mnemonic: '「變因控制看科學，一次微調一要素。」',
      infograph: {
        type: 'flow',
        title: '學習策略單變數調優法',
        steps: [
          { title: '基準痛點', desc: '每日 20 詞記憶崩潰' },
          { title: '微調單變因', desc: '單字量下修為 7 詞，維持時間不變' },
          { title: '成效比對', desc: '留存率顯著回升至 90%' }
        ]
      }
    },
    {
      concept: '錯因導向複習',
      syntax: 'Root-cause targeted review: Tôi thường nhầm hai từ này.',
      usage: '複習不應從第一頁盲目刷到最後一頁，專注打擊高頻混淆對立項「Tôi thường nhầm hai từ này（我常搞混這兩個詞）」，投資回報率最高。',
      trap: '重複複習自己早已爛熟的簡單字，逃避真正卡關的硬骨頭。',
      mnemonic: '「熟詞放馬歸深山，專挑易混硬骨頭。」',
      infograph: {
        type: 'contrast',
        title: '盲目全刷 vs 錯因靶向複習',
        columns: [
          { label: '盲目全刷 (低效舒適圈)', status: '從頭到尾翻書', example: '重溫已會的 Xin chào', note: '心理舒服但無實質成長' },
          { label: '錯因靶向 (高效攻堅)', status: '直擊混淆病灶', example: '專攻 lịch sự vs lịch sử', note: '瞬間掃除測驗失分死穴' }
        ]
      }
    },
    {
      concept: '交錯練習',
      syntax: 'Interleaving: mua (平) · mưa (平) · múa (銳) 隨機輪動',
      usage: '交錯練習（Interleaving）打破單一模塊阻滯：將長相相近的 mua, mưa, múa 隨機打亂穿插辨音，逼迫大腦實時提取關鍵辨義特徵。',
      trap: '先連續練100個平聲，再連續練100個銳聲，造成「定勢效應」，一混在一起立刻無法分辨。',
      mnemonic: '「打亂穿插考眼力，真金不怕交錯火。」',
      infograph: {
        type: 'matrix',
        title: '交錯練習 (Interleaving) 知覺辨析陣列',
        headers: ['音節項目', '母音特徵', '聲調走向', '詞義歸屬'],
        rows: [
          ['mua', '圓唇母音 /u/', 'Ngang (33 平中)', '購買'],
          ['mưa', '扁唇母音 /ɨ/', 'Ngang (33 平中)', '落雨'],
          ['múa', '圓唇母音 /u/', 'Sắc (35 高升)', '舞動 / 跳舞']
        ]
      }
    },
    {
      concept: '自己造句',
      syntax: 'Generative learning: Tôi tự đặt câu với từ mới.',
      usage: '生成效應（Generation effect）：大腦自己從零創造出來的句子，其記憶深刻程度是單純閱讀他人例句的五倍以上（Tôi tự đặt câu）。',
      trap: '滿足於課本例句背得很熟，自己從未動手用生活真實事物造過半句。',
      mnemonic: '「課本句子是他人，自己造句入靈魂。」',
      infograph: {
        type: 'flow',
        title: '生成效應 (Generation effect) 大腦加工梯',
        steps: [
          { title: '輸入新詞', desc: '吸收詞意與語法槽位' },
          { title: '生活檢索', desc: '聯想個人親身經歷或工作' },
          { title: '原創生成', desc: 'Tôi tự đặt câu với từ mới.' }
        ]
      }
    },
    {
      concept: '隔夜回想',
      syntax: 'Sleep-dependent memory consolidation: Tối học, sáng ôn lại.',
      usage: '睡眠是海馬迴將短期記憶轉化為大腦皮層長期存儲的關鍵生理過程：「Tối học, sáng ôn lại（晚上學、早晨醒來第一件事閉目回想）」。',
      trap: '通宵熬夜學習剝奪深層慢波睡眠（SWS），白天學的東西在夜晚無法固化而大量流失。',
      mnemonic: '「夜讀慢品入夢鄉，晨起回眸印心房。」',
      infograph: {
        type: 'timeline',
        title: '睡眠大腦皮層記憶固化雙時段模型',
        stages: [
          { tag: '夜晚時段 (睡前 30 分)', desc: '輕度輸入與提取練習', ex: 'Tối học (海馬迴編碼)' },
          { tag: '深度睡眠 (SWS/REM)', desc: '大腦突觸修剪與長效轉移', ex: '神經網絡轉入大腦皮層' },
          { tag: '晨起時段 (醒後即刻)', desc: '晨起閉目核對與提取', ex: 'Sáng ôn lại (記憶完全固化)' }
        ]
      }
    }
  ]
};
