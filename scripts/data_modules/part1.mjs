// Part 1: Modules 1-5 (path, alphabet, tonegame, pronoun, shopping)

export const part1 = {
  path: [
    {
      concept: '信：語意正確',
      syntax: '[S] + chưa + [V] (尚未) vs [S] + không + [V] (否定)',
      usage: 'chưa 標記尚未發生，保留後續發生的期待與禮貌緩衝空間；不可與 không（決絕否定、無意願）混淆。在問候「Ăn cơm chưa?」時，回答「Dạ chưa」合乎禮節。',
      trap: '直覺將中文的「我不吃」套入「Tôi không ăn」，在長輩或初次見面社交場合顯得生硬突兀。',
      mnemonic: '「chưa 留後步，không 斷退路；初學翻譯，信字為基。」',
      infograph: {
        type: 'contrast',
        title: '語意狀態分水嶺：chưa（留有餘地） vs không（絕對否定）',
        columns: [
          { label: 'chưa (尚未)', status: '保留進行時序', example: 'Tôi chưa ăn.', note: '隱含：等等會吃，禮貌婉轉' },
          { label: 'không (不/沒有)', status: '狀態完全封閉', example: 'Tôi không ăn.', note: '隱含：斷然拒絕，語氣決絕' }
        ]
      }
    },
    {
      concept: '達：自然溝通',
      syntax: '[Câu] + lại + được không? (對話修復請求)',
      usage: '在聽力受阻時主動發出修復請求，比假裝聽懂更可靠。使用「Anh nói chậm lại được không?」能在對話中爭取理解時間。',
      trap: '聽不懂時盲目點頭說「Vâng/Dạ」，會導致後續溝通出現嚴重的資訊錯位。',
      mnemonic: '「不懂立即求修復，chậm lại 比點頭更踏實。」',
      infograph: {
        type: 'flow',
        title: '對話中斷修復漏斗（4階梯度）',
        steps: [
          { title: '訊號中斷', desc: '聽不清或語速過快' },
          { title: '禮貌提示', desc: 'Dạ? / Xin lỗi?' },
          { title: '具體請求', desc: 'Nói chậm lại được không?' },
          { title: '雙向重述', desc: 'Ý anh là… phải không?' }
        ]
      }
    },
    {
      concept: '雅：符合語境',
      syntax: 'Kính gửi + [Đối tượng] (正式公文公函首標)',
      usage: '「Kính gửi quý công ty」為極正式商業書函開頭，日常社交或即時通訊軟體（如 Zalo）則應採用「Chào anh/chị」。區分語域可展現專業度與教養。',
      trap: '在日常通訊時誤套公文開頭顯得過度疏離，在商務正式信件隨意用「Chào anh」則顯得輕佻。',
      mnemonic: '「公函 Kính gửi 顯威儀，私聊 Chào anh 最親切。」',
      infograph: {
        type: 'steps',
        title: '語域光譜：從非正式通訊到國家級公文',
        steps: [
          { level: '日常口語', tag: 'Zalo / Nhậu', ex: 'Chào anh nhé / Alo' },
          { level: '職場商務', tag: 'Email / 會議', ex: 'Chào anh Minh / Kính chào' },
          { level: '法定公文', tag: '合約 / 照會', ex: 'Kính gửi quý công ty' }
        ]
      }
    },
    {
      concept: '先備能力',
      syntax: 'Xin lỗi, [S] + chưa + [V-tri nhận] (認知狀態聲明)',
      usage: '在進行高難度語法或複雜話題前，先確認自己是否掌握基礎詞彙與即時反應能力，坦承「Xin lỗi, tôi chưa hiểu」是建立信任的起點。',
      trap: '華語學習者常因面子問題害怕承認聽不懂，越過先備能力直接硬撐。',
      mnemonic: '「先備不足莫逞強，承認未明路更長。」',
      infograph: {
        type: 'slots',
        title: '認知狀態申明語模塊槽位',
        slots: [
          { label: '致歉緩衝', val: 'Xin lỗi,' },
          { label: '主體', val: 'tôi' },
          { label: '時態未然', val: 'chưa' },
          { label: '核心感知', val: 'hiểu' }
        ]
      }
    },
    {
      concept: '可觀察的目標',
      syntax: '[S] + có thể + [V] (Can-do 能力檢驗)',
      usage: '學習目標不能停留在「學過」，必須是可客觀觀察的輸出行動，例如「Tôi có thể tự giới thiệu（我能自我介紹30秒）」。',
      trap: '把背了多少單字當作能力指標，卻無法在真實情境中開口完成一句完整對話。',
      mnemonic: '「學習目標要外顯，能說能用才算數。」',
      infograph: {
        type: 'matrix',
        title: 'CEFR 可觀察能力矩陣（A1-B2）',
        headers: ['階段', '輸入檢驗', '輸出檢驗指標'],
        rows: [
          ['A1 入門', '聽懂常用問候', '流利完成 30 秒個人基本介紹'],
          ['A2 生存', '聽懂點餐與價格', '能完成市場議價與交通指引詢問'],
          ['B1 職場', '理解工作指派', '能撰寫商務確認郵件並報告進度']
        ]
      }
    },
    {
      concept: '翻譯取捨',
      syntax: '[V] + A + [V] + B (四字成語比喻映射)',
      usage: '文化成語如「Uống nước nhớ nguồn（飲水思源）」，翻譯時須衡量是直譯意象還是套用目標語文化對等詞。',
      trap: '逐字死譯導致目標語讀者難以理解文化象徵，失去原作修辭張力。',
      mnemonic: '「字面意象先看清，文化內涵求對等。」',
      infograph: {
        type: 'contrast',
        title: '成語翻譯雙軌映射策略',
        columns: [
          { label: '直譯意象層', status: '保留原味', example: 'Uống nước nhớ nguồn', note: '喝水時要記得水源頭' },
          { label: '對等歸化層', status: '文化共鳴', example: '飲水思源', note: '華語讀者瞬間理解核心感恩道德' }
        ]
      }
    },
    {
      concept: '段落連貫',
      syntax: 'Trước hết…, sau đó…, cuối cùng… (時序連接詞骨架)',
      usage: '使用邏輯連接詞將零碎短句串聯成長篇敘事，能顯著提升口語表達與書面論述的條理性。',
      trap: '通篇只用「và（和）」或停頓句，缺乏語意進程與層次感。',
      mnemonic: '「先說 Trước hết，再接 sau đó，收尾 cuối cùng 脈絡明。」',
      infograph: {
        type: 'steps',
        title: '敘事推進三大時序節點',
        steps: [
          { level: '起步', tag: 'Trước hết', ex: '首先釐清核心事實' },
          { level: '推進', tag: 'Sau đó', ex: '接著探討具體行動' },
          { level: '收斂', tag: 'Cuối cùng', ex: '最後達成雙向共識' }
        ]
      }
    },
    {
      concept: '語域切換',
      syntax: '親密/口語: [Cụm] + nhé vs 正式/公文: Xin chân thành + [V]',
      usage: '「Cảm ơn nhé!」適用於朋友同事間的日常微小致謝；「Xin chân thành cảm ơn」則用於典禮、正式報告或重要書面函件結尾。',
      trap: '對長官或重要客戶隨口說「nhé」，顯得輕浮缺乏敬意。',
      mnemonic: '「朋友隨和說 nhé，商務莊重 chân thành。」',
      infograph: {
        type: 'contrast',
        title: '社交親疏與語域選擇矩陣',
        columns: [
          { label: '熟稔親暱', status: '縮減距離', example: 'Cảm ơn nhé!', note: '平輩、同仁日常協助' },
          { label: '莊重敬重', status: '拉高位階', example: 'Xin chân thành cảm ơn.', note: '重要客戶、演講收尾' }
        ]
      }
    },
    {
      concept: '自我評估證據',
      syntax: '[S] + đã + [V] + [Số lượng] (成果量化事實)',
      usage: '學習反思必須基於具體證據，如「Tôi đã ghi âm và sửa ba lỗi（我已錄音並修正三處錯誤）」，而非憑感覺主觀判斷。',
      trap: '「感覺自己學會了」是假性記憶陷阱，缺乏錄音音檔比對無法發現聲調缺陷。',
      mnemonic: '「錄音比對找盲點，量化改錯進步顯。」',
      infograph: {
        type: 'flow',
        title: '刻意練習與自我評估迴圈',
        steps: [
          { title: '錄音產出', desc: '盲錄 30 秒目標段落' },
          { title: '雙軌比對', desc: '核對原音聲調走向與停頓' },
          { title: '鎖定三錯', desc: '挑出最嚴重的 3 處發音或語序' },
          { title: '即時重錄', desc: '針對錯點重錄至完全吻合' }
        ]
      }
    }
  ],

  alphabet: [
    {
      concept: '字母與組合',
      syntax: 'Vowel: a, ă, â | Consonant: d, đ (符號決定音素)',
      usage: 'ă 和 â 是獨立字母，並非 a 加上聲調；d 發 /z/（北）或 /j/（南），而 đ 才是發 /d/ 喉內縮塞音。附加符號不可擅自省略。',
      trap: '常誤以為 d 發英文 /d/，看到 đi 卻念成 zi；或將 ă 當成 a 的第三聲。',
      mnemonic: '「帶槓 đ 才是 d，無槓 d 念 z 或 j；角帽是字母，不是加聲調。」',
      infograph: {
        type: 'contrast',
        title: '易混字母音素本質對照',
        columns: [
          { label: 'd (無槓)', status: '濁擦音 /z/ 或 /j/', example: 'da (皮膚)', note: '北發 z，南發 j，絕非英文 d' },
          { label: 'đ (帶橫槓)', status: '內縮塞音 /ɗ/', example: 'đi (去)', note: '舌尖緊貼齒齦，有力爆破' }
        ]
      }
    },
    {
      concept: '音節拆解',
      syntax: '[Âm đầu 聲母] + [Vần 韻母 (Âm đệm + Âm chính + Âm cuối)] + [Thanh 聲調]',
      usage: '越語拼讀核心為：聲母 + 韻母，最後加上聲調。例如 b + an = ban, ban + sắc = bán。不要用英文字母名字硬拼。',
      trap: '把 bán 念成 b-a-n-s-a-c-k，未能將韻母作為一個發音整體收尾。',
      mnemonic: '「先合韻母再加頭，聲調最後戴上頭。」',
      infograph: {
        type: 'slots',
        title: '越語音節五位階結構拆解',
        slots: [
          { label: '聲母 (C1)', val: 'b' },
          { label: '介音 (w)', val: 'ø' },
          { label: '核心母音 (V)', val: 'a' },
          { label: '韻尾 (C2)', val: 'n' },
          { label: '聲調 (T)', val: 'sắc (／)' }
        ]
      }
    },
    {
      concept: '塞音韻尾',
      syntax: 'Vần + [-c / -t / -p / -ch] ➔ 唯閉不破 (Unreleased stops)',
      usage: '-c, -t, -p 為無聲塞音韻尾，發音時舌位到達定位即收住氣流，不釋放爆破，絕不額外發出尾母音；僅能搭配銳聲（sắc）或重聲（nặng）。',
      trap: '在 học 後面多念一個 /kə/，把 một 念成 /mo-tə/，破壞音節完整性。',
      mnemonic: '「塞音韻尾及時收，只閉不破不加音。」',
      infograph: {
        type: 'steps',
        title: '入聲塞音三部位閉氣定位',
        steps: [
          { level: '雙唇閉合', tag: '-p', ex: 'đẹp (美) ➔ 雙唇緊閉不放氣' },
          { level: '舌尖抵齒', tag: '-t', ex: 'một (一) ➔ 舌尖抵上齒齦停住' },
          { level: '舌根抵顎', tag: '-c', ex: 'học (學) ➔ 舌根緊貼軟顎閉氣' }
        ]
      }
    },
    {
      concept: '母音品質',
      syntax: 'u [u] (圓唇後高) vs ư [ɨ] (不圓唇央高)',
      usage: 'u 發音時雙唇向前突出搓圓；ư 發音時嘴角向兩側拉開扁唇，舌位在中後方。兩者音質截然不同，詞義完全相異（如 tu 修行 vs tư 私人）。',
      trap: '將 ư 念成國語的「ㄩ」或「ㄨ」，忽視扁唇特徵導致口音混淆。',
      mnemonic: '「u 唇圓圓突向前，ư 嘴角拉扁平平念。」',
      infograph: {
        type: 'contrast',
        title: '高母音對立：圓唇 u vs 扁唇 ư',
        columns: [
          { label: 'u (圓唇後母音)', status: '雙唇緊縮呈圓孔', example: 'tu (修行)', note: '舌後縮，唇形圓突出' },
          { label: 'ư (扁唇央高母音)', status: '嘴角展開露齒', example: 'tư (私人/第四)', note: '舌位高，唇形絕不圓' }
        ]
      }
    },
    {
      concept: '複合聲母',
      syntax: 'nh- [ɲ] (硬顎鼻音) vs ng- [ŋ] (軟顎鼻音)',
      usage: 'nh- 發音類似台語「耳」或日語「にゃ」，舌面緊貼硬顎；ng- 則是舌根頂住軟顎發鼻音。兩者在詞首時華語母語者極易混淆。',
      trap: '將 nhà（家）念成 ngà（象牙），或將 người 念成 nhười。',
      mnemonic: '「舌面貼硬顎出 nh，舌根頂軟顎發 ng。」',
      infograph: {
        type: 'contrast',
        title: '鼻音聲母發音部位解剖',
        columns: [
          { label: 'nh- (硬顎鼻音 /ɲ/)', status: '舌面緊貼硬顎', example: 'nhà (房子)', note: '氣流從鼻腔出，音質清脆' },
          { label: 'ng- (軟顎鼻音 /ŋ/)', status: '舌根抵住軟顎', example: 'ngà (象牙)', note: '舌根深部發音，音質厚實' }
        ]
      }
    },
    {
      concept: '符號分層',
      syntax: 'Base: a ➔ Letter diacritic: â ➔ Tone diacritic: ấ',
      usage: '越語符號分為「字母識別標記」（如 â, ă, ư, ơ, đ）與「聲調標記」（如 sắc, huyền, hỏi, ngã, nặng）。兩者在書寫與認知上屬於不同層級。',
      trap: '把 â 的戴帽誤認成聲調符號，導致調符標錯位置或遺漏。',
      mnemonic: '「字母標記先成型，聲調頂上再加冠。」',
      infograph: {
        type: 'steps',
        title: '越語拼音字母三層結構',
        steps: [
          { level: '第1層：基礎拉丁字符', tag: 'Base', ex: 'a' },
          { level: '第2層：字母本體變音符', tag: 'Letter Diacritic', ex: 'a + ^ = â' },
          { level: '第3層：超音段聲調符號', tag: 'Tone Diacritic', ex: 'â + sắc = ấ' }
        ]
      }
    },
    {
      concept: '雙母音 ia／iê',
      syntax: '無韻尾時寫 ia/ya；有韻尾時寫 iê/yê',
      usage: '雙母音 /iə/ 在開音節（無韻尾）寫為 ia（如 mía 甘蔗）；當後方帶有韻尾時，必須改寫為 iê（如 miếng 一塊）。這是標準正字法規則。',
      trap: '拼寫有韻尾時仍寫成 *miang 或 *míac，違反書寫法正字規範。',
      mnemonic: '「無尾用 ia 自由飛，有尾關門換 iê。」',
      infograph: {
        type: 'contrast',
        title: '雙母音 /iə/ 正字法拼寫分配規律',
        columns: [
          { label: '開音節（無韻尾）', status: '寫成 ia / ya', example: 'mía (甘蔗), tia (射線)', note: '音節結尾無輔音韻尾' },
          { label: '閉音節（帶韻尾）', status: '寫成 iê / yê', example: 'miếng (塊), tiền (錢)', note: '後接 -ng, -n, -t, -c 等韻尾' }
        ]
      }
    },
    {
      concept: 'k／c／qu 的分工',
      syntax: 'k + [i, e, ê] | c + [a, o, ô, u, ư] | qu + [母音]',
      usage: '輔音 /k/ 在前母音 i, e, ê 前固定寫為 k；在央後母音 a, o, ô, u, ư 前固定寫為 c；與圓唇介音組合時寫為 qu。',
      trap: '寫出 *ce 或 *kem 寫成 *cem，這是越語最典型的初學者拼字違規。',
      mnemonic: '「k 遇 i e ê，c 接 a o u；圓唇有伴寫成 qu。」',
      infograph: {
        type: 'matrix',
        title: '音素 /k/ 拼寫正字法分工法則',
        headers: ['字母', '接續母音', '範例'],
        rows: [
          ['k', '前母音 (i, e, ê)', 'kem (冰淇淋), ký (公斤), kẹo (糖果)'],
          ['c', '央後母音 (a, o, ô, u, ư)', 'cá (魚), cô (姑姑), cơm (飯)'],
          ['qu', '圓唇介音 + 母音', 'quà (禮物), quê (故鄉), quá (太)']
        ]
      }
    },
    {
      concept: 'g／gh、ng／ngh',
      syntax: 'gh/ngh + [i, e, ê] | g/ng + [a, o, ô, u, ư]',
      usage: '與 k/c 類似，軟顎音 g 與 ng 在前母音 i, e, ê 前必須加上 h 寫成 gh 與 ngh；在其他母音前則維持 g 與 ng。',
      trap: '將 ghế（椅子）拼成 *gé，或 nghe（聽）拼成 *nge。',
      mnemonic: '「見到 i e ê，g 和 ng 趕緊加個 h。」',
      infograph: {
        type: 'contrast',
        title: '前母音拼寫正字法 h-規則',
        columns: [
          { label: '遇 i, e, ê (需加 h)', status: '拼寫加 h 保持軟顎', example: 'ghế (椅子), nghe (聽)', note: '避免發音混淆的正字設計' },
          { label: '遇 a, o, ô, u, ư', status: '標準無 h 形式', example: 'ga (車站), ngủ (睡覺)', note: '常規軟顎聲母書寫法' }
        ]
      }
    }
  ],

  tonegame: [
    {
      concept: '同韻對比',
      syntax: 'Ngang (33) vs Sắc (35/45) vs Huyền (21)',
      usage: '固定聲母 m 與核心韻母 a，僅切換聲調：ma（平聲，鬼）、má（銳聲，母親/腮幫）、mà（玄聲，但是）。音高與聲質直接決定詞義。',
      trap: '將平聲念成中文四聲的降調，或把玄聲當成中文二聲上揚。',
      mnemonic: '「平聲拉平 33 音，玄聲平緩沉 21，銳聲有力往上衝。」',
      infograph: {
        type: 'contour',
        title: '基礎三調五度音高走勢對比',
        contours: [
          { name: 'Ngang (平)', pts: [3, 3, 3], ex: 'ma (33)' },
          { name: 'Huyền (玄)', pts: [2.5, 2, 1.5], ex: 'mà (21)' },
          { name: 'Sắc (銳)', pts: [3, 4, 5], ex: 'má (35)' }
        ]
      }
    },
    {
      concept: '問聲與跌聲',
      syntax: 'Hỏi (312 降升) vs Ngã (35 聲門微閉破裂升)',
      usage: '問聲（hỏi）音高先微降後緩升；跌聲（ngã）音高中間帶有聲門閉鎖停頓（Glottal stop），隨後向上爆發。南部兩調合流，但北部區分鮮明。',
      trap: '在南部口音合流環境下學習者忽視正字法，導致 mả（墳墓）與 mã（代碼/馬）書寫混淆。',
      mnemonic: '「問聲低頭再探腦，跌聲喉頭卡一下。」',
      infograph: {
        type: 'contrast',
        title: '問聲 (Hỏi) 與跌聲 (Ngã) 聲學本質',
        columns: [
          { label: 'Thanh Hỏi (問聲 ?)', status: '低凹降升調 /312/', example: 'mả (墳墓)', note: '平滑曲線，無聲門停頓' },
          { label: 'Thanh Ngã (跌聲 ~)', status: '聲門中斷緊喉升調 /3ʔ5/', example: 'mã (代碼/馬)', note: '喉頭緊閉中斷後飆高' }
        ]
      }
    },
    {
      concept: '重聲',
      syntax: 'Nặng (21ʔ / 21 低降急促喉塞)',
      usage: '重聲（nặng）通常為低降短促音，音節尾端喉部急促收緊，不可拖長；若為開音節常伴隨喉塞音收尾。',
      trap: '把重聲當成國語第四聲長音用力念，導致音長過長且喉塞特徵消失。',
      mnemonic: '「重聲沈底急剎車，點地即收不拖音。」',
      infograph: {
        type: 'contour',
        title: '重聲 (Thanh Nặng) 極短急促低落軌跡',
        contours: [
          { name: 'Nặng (重)', pts: [2, 1], ex: 'mạ (秧苗, 21ʔ)' }
        ]
      }
    },
    {
      concept: '六調同韻',
      syntax: 'ma - mà - má - mả - mã - mạ (完整六調音高全貌)',
      usage: '同一音節貫穿六聲調是檢驗聲學控制的黃金標準：平（33）、玄（21）、銳（35）、問（312）、跌（3ʔ5）、重（21ʔ）。',
      trap: '連續發音時各調音域相互沾黏，導致平玄不分、問跌混同。',
      mnemonic: '「平平高揚低降凹，折斷急墜六調全。」',
      infograph: {
        type: 'matrix',
        title: '六聲調符號、名稱與五度調值矩陣',
        headers: ['聲調名稱', '調符', '五度走向', '聲質特徵', '範例'],
        rows: [
          ['Ngang (平)', '無', '33 平中', '鬆弛常態', 'ma (鬼)'],
          ['Huyền (玄)', 'ˋ', '21 低降', '氣聲舒緩', 'mà (但是)'],
          ['Sắc (銳)', 'ˊ', '35 高升', '張力漸強', 'má (母親/頰)'],
          ['Hỏi (問)', 'ˀ', '312 降升', '低凹迴旋', 'mả (墳墓)'],
          ['Ngã (跌)', '˜', '3ʔ5 緊升', '聲門突斷', 'mã (代碼)'],
          ['Nặng (重)', '˙', '21ʔ 低促', '喉頭緊扼', 'mạ (秧苗)']
        ]
      }
    },
    {
      concept: '塞尾限制',
      syntax: '[-c, -t, -p, -ch] 只能搭配 Sắc (銳) 或 Nặng (重)',
      usage: '入聲韻尾（塞音）由於聲帶無法持續震動，在語音學上天然無法承載平、玄、問、跌四種舒聲調，只能配銳聲（mát）或重聲（mạt）。',
      trap: '試圖在帶有 -t, -c, -p 韻尾的字上標注 huyền 或 hỏi，這在越語正字法中完全不存在。',
      mnemonic: '「塞音韻尾路徑窄，只配銳調與重調。」',
      infograph: {
        type: 'contrast',
        title: '入聲韻尾聲調二元鎖定律',
        columns: [
          { label: 'Sắc (高入聲調)', status: '高促收束', example: 'mát (涼爽)', note: '入聲高調，短促明亮' },
          { label: 'Nặng (低入聲調)', status: '低促喉塞', example: 'mạt (末屑)', note: '入聲低調，頓挫沈底' }
        ]
      }
    },
    {
      concept: '聲調在語流中',
      syntax: 'Tone co-articulation: 連續音節聲調微調適配',
      usage: '「Má mua cá（媽媽買魚）」全句均為高音域（銳調+平調），發音時應維持胸腔與喉部共鳴連續性，避免每字切斷重啟。',
      trap: '字與字之間過度斷開獨立發音，導致語流極度機械僵硬。',
      mnemonic: '「同高音域平滑連，字字相扣如流水。」',
      infograph: {
        type: 'slots',
        title: '同高音域連續語流波形串聯',
        slots: [
          { label: 'Má (Sắc)', val: '35 ↗' },
          { label: 'mua (Ngang)', val: '33 ➔' },
          { label: 'cá (Sắc)', val: '35 ↗' }
        ]
      }
    },
    {
      concept: '換調即換詞',
      syntax: 'bàn (桌子) vs bán (賣) vs bạn (朋友)',
      usage: '聲調在越語具備絕對辨義功能，換調即換完全不同的詞彙。bàn 是桌子，bán 是販售，bạn 是朋友。',
      trap: '把「Tôi bán bàn」念成「Tôi bàn bạn」，語意直接變成「我跟朋友商討」，造成嚴重商務誤會。',
      mnemonic: '「一調之差千里遙，桌賣朋友要分曉。」',
      infograph: {
        type: 'contrast',
        title: '最小對立對 (Minimal Triplet) 詞義突變',
        columns: [
          { label: 'bàn (玄聲)', status: '名詞：桌子 / 動詞：商量', example: 'cái bàn', note: '平緩沉調' },
          { label: 'bán (銳聲)', status: '動詞：販售', example: 'bán hàng', note: '昂首高升' },
          { label: 'bạn (重聲)', status: '名詞：朋友 / 夥伴', example: 'người bạn', note: '急促頓底' }
        ]
      }
    },
    {
      concept: '語流中的聲調',
      syntax: 'Interrogative pitch contour: Bạn bán bàn à?',
      usage: '雖然全句有不同聲調，但句末疑問詞「à」帶有整句疑問語調的疊加，聲調不能因為整句上揚而破壞各別字的固有調值。',
      trap: '模仿英語句末升調將 bàn 升成 bán，破壞了原有詞義。',
      mnemonic: '「字調管字義，句調管語氣；字調不動如山，末尾語氣疊加。」',
      infograph: {
        type: 'slots',
        title: '語流字調與句末疑問語調疊加結構',
        slots: [
          { label: '主詞', val: 'Bạn (Nặng)' },
          { label: '動詞', val: 'bán (Sắc)' },
          { label: '受詞', val: 'bàn (Huyền)' },
          { label: '語氣詞', val: 'à? (Huyền+疑問)' }
        ]
      }
    },
    {
      concept: '句末語氣詞',
      syntax: '[Câu] + nhé (提議/囑咐) vs [Câu] + à? (確認/反問)',
      usage: '句末助詞賦予整句豐富的情感色彩。「Đi nhé」表示友善相約或叮嚀（走囉/去喔）；「Đi à?」則表示意外或確認（你要走喔？）。',
      trap: '誤用「à」對長官提議，聽起來像是不敬的質問。',
      mnemonic: '「nhé 是溫馨相約，à 是探詢查實。」',
      infograph: {
        type: 'contrast',
        title: '句末語氣詞情緒與功能光譜',
        columns: [
          { label: 'nhé (輕快促成)', status: '提議、親密催促', example: 'Đi nhé.', note: '相當於「走囉！」「好嗎？」' },
          { label: 'à? (探詢查問)', status: '疑問、意外確認', example: 'Đi à?', note: '相當於「真要去嗎？」「喔？」' }
        ]
      }
    }
  ],

  pronoun: [
    {
      concept: '年長男性／女性',
      syntax: 'anh (兄輩) / chị (姊輩) ↔ em (弟妹晚輩)',
      usage: '越語代名詞具有成對鏡像特性。對方是比自己年長的男性稱 anh、自稱 em；對方是年長女性稱 chị、自稱 em。',
      trap: '把 anh 當作第三人稱專用，當面說話時仍直呼名字或用生硬的 tôi。',
      mnemonic: '「見男長者稱 anh，見女長者稱 chị，自謙稱 em 禮數全。」',
      infograph: {
        type: 'tree',
        title: '跨輩份社交成對稱謂映射樹',
        branches: [
          { root: '對象：年長男性 (Anh)', leaf: '自身回應自稱：Em' },
          { root: '對象：年長女性 (Chị)', leaf: '自身回應自稱：Em' },
          { root: '對象：年幼男女 (Em)', leaf: '自身對應自稱：Anh / Chị' }
        ]
      }
    },
    {
      concept: '中性自稱',
      syntax: 'Tôi + [V/Adj] (平等中性或正式自稱)',
      usage: 'tôi 原意為「臣僕」，現代用於公共場合、初次見面、演講報告或外國人自我介紹，維持客觀平等距離，不涉入親疏年齡。',
      trap: '在親密家庭或好友聚會通篇用 tôi，會給人冷漠刻板、拉開距離之感。',
      mnemonic: '「公開場合用 tôi 不出錯，熟絡之後隨緣換稱謂。」',
      infograph: {
        type: 'contrast',
        title: 'tôi（中性社交） vs 親屬稱謂（親暱社交）',
        columns: [
          { label: 'Tôi (中立自稱)', status: '公共/陌生/平權', example: 'Tôi là người Đài Loan.', note: '保持客觀距離，不論長幼' },
          { label: 'Em / Anh (親屬化)', status: '人情/溫暖/職場日常', example: 'Em chào anh.', note: '迅速建立親近人際紐帶' }
        ]
      }
    },
    {
      concept: '親屬分支',
      syntax: 'ông/bà + nội (父系祖父母) vs ông/bà + ngoại (母系祖父母)',
      usage: 'nội 為漢越「內」，指父系祖父（ông nội）、祖母（bà nội）；ngoại 為漢越「外」，指外祖父（ông ngoại）、外祖母（bà ngoại）。',
      trap: '華語常籠統說「爺爺奶奶」，越語若將外婆錯稱 bà nội 會被視為搞混宗族分支。',
      mnemonic: '「父系為 nội 內親祖，母系為 ngoại 外婆親。」',
      infograph: {
        type: 'contrast',
        title: '內外宗族血統二元劃分表',
        columns: [
          { label: 'Nội (內親 / 父系)', status: '父系長輩', example: 'ông bà nội', note: '祖父、祖母、叔父伯父' },
          { label: 'Ngoại (外戚 / 母系)', status: '母系長輩', example: 'ông bà ngoại', note: '外祖父、外祖母、母系親族' }
        ]
      }
    },
    {
      concept: '包不包含聽者',
      syntax: 'chúng tôi (排除聽者) vs chúng ta (包含聽者)',
      usage: 'chúng tôi 表示「我們這一方（不含對方聽者）」，常見於商務談判代表發言；chúng ta 則是「我們大家（含聽者所有人）」，用於凝聚團隊共識。',
      trap: '商務開會向客戶說「chúng ta cần thanh toán」，把客戶拉進付款主體造成混亂。',
      mnemonic: '「chúng tôi 排除聽者我方說，chúng ta 全體包含一家親。」',
      infograph: {
        type: 'contrast',
        title: '複數第一人稱包容性矩陣',
        columns: [
          { label: 'Chúng tôi (排除式)', status: '不含聽話人 (We without you)', example: 'Chúng tôi xin thông báo…', note: '代表我方公司、團體立場' },
          { label: 'Chúng ta (包含式)', status: '含聽話人 (We including you)', example: 'Chúng ta cùng cố gắng!', note: '凝聚全場所有人共同努力' }
        ]
      }
    },
    {
      concept: '禮貌回應',
      syntax: 'Dạ, [S] + [V] + ạ (首尾呼應雙重敬語)',
      usage: '「Dạ」置於句首表示恭敬聆聽接收，「ạ」置於句末表示崇敬謙遜。兩者在對長輩、師長或客戶回話時是極致禮貌典範。',
      trap: '省略 Dạ 和 ạ 直說「Hiểu rồi」，在長輩聽來宛如命令或不耐煩。',
      mnemonic: '「句首 Dạ 開頭，句末 ạ 壓軸，雙敬加持滿堂彩。」',
      infograph: {
        type: 'slots',
        title: '越語敬意前綴與句尾封閉槽位',
        slots: [
          { label: '敬意啟動前綴', val: 'Dạ,' },
          { label: '自謙主語', val: 'em' },
          { label: '動態核心', val: 'hiểu rồi' },
          { label: '敬意封閉標籤', val: 'ạ.' }
        ]
      }
    },
    {
      concept: '職稱稱呼',
      syntax: 'Chào + [Chức danh: thầy / cô / bác sĩ]',
      usage: '遇老師稱 Chào thầy（男老師）或 Chào cô（女老師）；遇醫生稱 Chào bác sĩ。將職業身分直接作對話稱謂是崇敬象徵。',
      trap: '稱呼老師時加上姓氏叫 *Chào Nguyễn，違反越語稱呼習俗。',
      mnemonic: '「尊師重道稱 thầy cô，職銜為稱最得體。」',
      infograph: {
        type: 'steps',
        title: '社會崇敬職業稱謂清單',
        steps: [
          { level: '教育領域', tag: 'thầy / cô', ex: '男教師用 thầy，女教師用 cô' },
          { level: '醫療體系', tag: 'bác sĩ', ex: '向醫師問診諮詢時專屬稱呼' },
          { level: '宗教文化', tag: 'thầy', ex: '寺廟僧侶或專業法師之尊稱' }
        ]
      }
    },
    {
      concept: '第三人稱',
      syntax: '[Danh xưng 稱謂] + ấy (彼／那位)',
      usage: '在稱謂詞後加上「ấy」即構成客氣得體的第三人稱：anh ấy（他/那位大哥）、chị ấy（她/那位大姐）、ông ấy（他/那位老先生）。',
      trap: '通通用「nó」代稱所有人，nó 只能用於小孩、動物或極度不尊重之蔑稱。',
      mnemonic: '「稱謂加 ấy 是第三者，客氣禮貌不隨便。」',
      infograph: {
        type: 'slots',
        title: '第三人稱派生積木',
        slots: [
          { label: '特定稱謂', val: 'anh / chị / ông / bà' },
          { label: '遠指標記', val: '+ ấy' },
          { label: '生成語意', val: '＝ 他 / 她 / 該位長者' }
        ]
      }
    },
    {
      concept: '職場稱呼',
      syntax: 'Chào + [稱謂] + [Tên 名] / Thưa + [Chức vụ 職務]',
      usage: '職場日常直呼「Chào anh Minh（明哥好）」，以名（Given name）相稱而非姓；極正式場合則冠以「Thưa giám đốc（報告總經理）」。',
      trap: '把台灣習慣的「陳經理」直譯成 *Trần Giám đốc，越語應為 Giám đốc Trần 或直接稱 Chào anh [名]。',
      mnemonic: '「名在前姓在後，職場親切稱名號。」',
      infograph: {
        type: 'contrast',
        title: '職場稱呼兩種情境切換',
        columns: [
          { label: '日常協作 (親切敬重)', status: '稱謂 + 名稱', example: 'Chào anh Minh.', note: '維持輩份親近與團隊合作效率' },
          { label: '正式典禮 (公務尊稱)', status: 'Thưa + 職稱', example: 'Thưa giám đốc,', note: '報告工作、全體大會發言' }
        ]
      }
    },
    {
      concept: '詢問稱呼方式',
      syntax: '[S] + gọi + [O] + là + [Danh xưng] + được không?',
      usage: '當不確定對方年齡或期待時，主動詢問「Em gọi chị là chị Lan được không?」是最高情商的破冰社交方式。',
      trap: '擅自將看起來年輕的女性主管叫 em，造成對方不悅與尷尬。',
      mnemonic: '「稱謂拿捏若未穩，主動詢問顯修養。」',
      infograph: {
        type: 'flow',
        title: '稱謂確認四部曲',
        steps: [
          { title: '初見觀察', desc: '目測年齡與職務位階' },
          { title: '主動破冰', desc: '禮貌詢問稱謂偏好' },
          { title: '對方確認', desc: '確認自稱與對稱配對' },
          { title: '恆常沿用', desc: '確立後固定使用不混亂' }
        ]
      }
    }
  ],

  shopping: [
    {
      concept: '數字變讀',
      syntax: ' hàng chục > 1 ➔ 1 念 mốt; hàng chục >= 1 ➔ 5 念 lăm',
      usage: '個位數在十位數大於1時，數字1必須音變成「mốt」（如 21 = hai mươi mốt）；個位數5在十位數大於等於1時，必須音變成「lăm」（如 15 = mười lăm, 25 = hai mươi lăm）。',
      trap: '把 21 念成 *hai mươi một，或把 25 念成 *hai mươi năm（變成20年）。',
      mnemonic: '「十後有一變 mốt，十後有五念 lăm；數字音變要記牢。」',
      infograph: {
        type: 'contrast',
        title: '個位數音變雙軌規則表',
        columns: [
          { label: '數字 1 音變 (mốt)', status: '十位數 >= 2 時', example: '21 = hai mươi mốt', note: '避免與 một (獨立的1) 混同' },
          { label: '數字 5 音變 (lăm)', status: '十位數 >= 1 時', example: '15 = mười lăm, 25 = hai mươi lăm', note: '避免與 năm (年份/獨立的5) 混同' }
        ]
      }
    },
    {
      concept: '金額位值',
      syntax: '[Số trăm] + trăm + [Số chục] + mươi + nghìn đồng (千位為進位基準)',
      usage: '越南盾面額大，千（nghìn/ngàn）為日常計價基準。250,000 讀作 hai trăm năm mươi nghìn đồng。常口語省略 đồng 或 nghìn（如 hai trăm rưỡi）。',
      trap: '把 250,000 直譯成「二十五萬」，導致在千進位計算中找錯錢。',
      mnemonic: '「越盾千位是基準，二百五十加 nghìn 讀。」',
      infograph: {
        type: 'slots',
        title: '250,000 越盾千進位結構拆解',
        slots: [
          { label: '百位', val: 'hai trăm' },
          { label: '十位', val: 'năm mươi' },
          { label: '進位量級', val: 'nghìn (×1,000)' },
          { label: '貨幣單位', val: 'đồng' }
        ]
      }
    },
    {
      concept: '詢價與找零',
      syntax: 'Cái này bao nhiêu tiền? (問價標準式)',
      usage: '問價核心句型。付大鈔後確認找零使用「Thối lại bao nhiêu tiền?」或數字覆述「Gửi lại anh 100 nghìn」確保交易無誤。',
      trap: '結帳時未覆誦金額，容易在傳統市場或計程車找零時因零的個數發生爭執。',
      mnemonic: '「Bao nhiêu tiền 問總額，找零核對看數字。」',
      infograph: {
        type: 'flow',
        title: '購物結帳與找零閉環流程',
        steps: [
          { title: '詢價', desc: 'Cái này bao nhiêu tiền?' },
          { title: '報價接收', desc: '核對千進位單位 (k/nghìn)' },
          { title: '交付付款', desc: '出示鈔票並口述面額' },
          { title: '找零覆核', desc: '當面點清找回張數與零錢' }
        ]
      }
    },
    {
      concept: '零位與地區讀法',
      syntax: '百位與個位間零：北部 linh vs 南部 lẻ',
      usage: '當百位數後接個位數（中間十位為0）時，北部慣用「linh」（如 một trăm linh năm: 105），南部慣用「lẻ」（如 một trăm lẻ năm）。兩者皆為標準語。',
      trap: '在胡志明市聽到 lẻ năm 以為是「奇數」或聽不懂，其實就是 linh năm。',
      mnemonic: '「中間逢零北說 linh，南島風情說成 lẻ。」',
      infograph: {
        type: 'contrast',
        title: '零位 (十位數為 0) 南北方言對照',
        columns: [
          { label: '北部標準讀法 (linh)', status: '官方與北方慣用語', example: '105 = một trăm linh năm', note: '多見於河內及書面規範' },
          { label: '南部標準讀法 (lẻ)', status: '南方民間主流用語', example: '105 = một trăm lẻ năm', note: '多見於胡志明市與湄公河三角洲' }
        ]
      }
    },
    {
      concept: '數量和單位',
      syntax: '[Số lượng] + [Đơn vị: ký/lít/chai] + [Danh từ]',
      usage: '量詞與計量單位直接置於名詞之前：hai ký（2公斤）、ba lít（3公升）。市場常以「mỗi ký（每公斤）」標示單價。',
      trap: '把 ký 誤當成華語的「斤」（500g），越南的 1 ký (kilô) 均為國際公斤 1,000g。',
      mnemonic: '「越南 ký 是公斤，一千公克莫算輕。」',
      infograph: {
        type: 'slots',
        title: '市井計量語法積木',
        slots: [
          { label: '數量', val: 'Hai' },
          { label: '度量單位', val: 'ký,' },
          { label: '單價修飾', val: 'mỗi ký ba mươi nghìn' }
        ]
      }
    },
    {
      concept: '大數分組',
      syntax: 'nghìn (10^3) ➔ triệu (10^6) ➔ tỷ (10^9)',
      usage: '大額商務與房產計價採用三位一撇進位：một triệu（100萬盾，約合1,300台幣）、một tỷ（10億盾，約合130萬台幣）。',
      trap: '華語習慣「萬」「億」四位進位，看越南財報或房價時極易多數或少數一個零。',
      mnemonic: '「千為 nghìn，百萬 triệu，十億為 tỷ 牢記心。」',
      infograph: {
        type: 'steps',
        title: '越盾三位一撇大數階梯',
        steps: [
          { level: '千級 (10^3)', tag: 'nghìn / ngàn', ex: '1.000 (一千)' },
          { level: '百萬級 (10^6)', tag: 'triệu', ex: '1.000.000 (一百萬)' },
          { level: '十億級 (10^9)', tag: 'tỷ', ex: '1.000.000.000 (十億)' }
        ]
      }
    },
    {
      concept: '議價',
      syntax: 'Bớt cho tôi một chút được không? (委婉議價式)',
      usage: '傳統市場議價切忌生硬命令，應使用「Bớt cho tôi một chút được không?（可以算我便宜一點嗎？）」展現友善協商態度。',
      trap: '直接說「Đắt quá!（太貴了！）」甩頭就走，顯得挑釁且破壞商販談判意願。',
      mnemonic: '「bớt 減價，chút 少許，委婉協商笑臉迎。」',
      infograph: {
        type: 'slots',
        title: '禮貌議價句型組件',
        slots: [
          { label: '核心動作', val: 'Bớt' },
          { label: '受惠對象', val: 'cho tôi' },
          { label: '讓步幅度', val: 'một chút' },
          { label: '可能請求', val: 'được không?' }
        ]
      }
    },
    {
      concept: '折扣說法',
      syntax: 'giảm giá + [Số %] (直接折扣百分比)',
      usage: '越南標示「giảm giá 20%」意即「降價 20%（相當於台灣的 8 折）」。此與華語的「打八折」思維完全相反。',
      trap: '看見 giảm giá 70% 以為是「打七折」，其實是「立減 70%（相當於三折）」，造成購物誤算。',
      mnemonic: '「giảm 是直接減掉，扣除成數才是折。」',
      infograph: {
        type: 'contrast',
        title: '越南減價 (Giảm giá) 與台灣折扣思維對照',
        columns: [
          { label: '越式思維 (Giảm %)', status: '減去之比例', example: 'Giảm giá 20%', note: '扣除 20% 售價（即付 80%）' },
          { label: '台式思維 (打折)', status: '保留之成數', example: '打 8 折', note: '支付原價 80% 之金額' }
        ]
      }
    },
    {
      concept: '電子支付',
      syntax: '[S] + chuyển khoản + được không? (轉帳/掃碼確認)',
      usage: '在當代越南，二維條碼轉帳（Chuyển khoản / Quét mã QR / VietQR）已極為普及，購物時先問「Tôi chuyển khoản được không?」免找零煩惱。',
      trap: '在小路邊攤未問清楚直接拿出外國信用卡，很多只接受 VietQR 本地轉帳或現金。',
      mnemonic: '「chuyển khoản 轉帳去，掃描 QR 付款速。」',
      infograph: {
        type: 'steps',
        title: '現代越南主流支付模式',
        steps: [
          { level: '現金主流', tag: 'Tiền mặt', ex: '傳統菜市場、路邊攤、小額找零' },
          { level: '本土掃碼', tag: 'VietQR / ZaloPay', ex: '手搖飲、便利店、計程車、餐飲' },
          { level: '國際刷卡', tag: 'Thẻ tín dụng', ex: '大型商場、星級飯店、高檔餐廳' }
        ]
      }
    }
  ]
};
