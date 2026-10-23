// Part 3: Modules 11-15 (accent, shadowing, business, macropol, quiz)

export const part3 = {
  accent: [
    {
      concept: '拼字不變',
      syntax: 'Hỏi (?) vs Ngã (~) (南部發音合流，正字法各守其位)',
      usage: '越南南部與湄公河三角洲口音中，問聲（hỏi）與跌聲（ngã）發音完全合流，均讀為低凹升調 /312/；但書寫正字法規範中依然必須嚴格分立，不可擅改調符。',
      trap: '在南部生活久了後，寫信或公文將所有跌聲都寫成問聲，被視為正字法書寫嚴重失誤。',
      mnemonic: '「南越發音合為一，正字法度兩分明。」',
      infograph: {
        type: 'contrast',
        title: '問跌兩聲南音合流與正字分立',
        columns: [
          { label: '北部發音 (兩調分立)', status: '聲質音高嚴格區分', example: 'mả (墳) ≠ mã (代碼)', note: '跌聲帶喉部緊縮中斷' },
          { label: '南部發音 (合流問調)', status: '讀音統一為 /312/', example: 'mả ＝ mã 讀音相同', note: '文字書寫必須維持正確調符' }
        ]
      }
    },
    {
      concept: '詞彙對照',
      syntax: 'Bắc: bố, ngô vs Nam: ba, bắp (雙城核心生活詞彙映射)',
      usage: '父親在河內稱「bố」，在胡志明市稱「ba」；玉米在北部稱「ngô」，在南部稱「bắp」。熟記雙城生活詞彙對照，點菜與日常問候暢通無阻。',
      trap: '在胡志明市菜市場向攤販要 ngô，攤販可能一時愣住不知道你要買玉米。',
      mnemonic: '「北 bố 南 ba 叫父親，北 ngô 南 bắp 嚼玉米。」',
      infograph: {
        type: 'matrix',
        title: '河內 vs 胡志明市高頻核心生活詞彙對照',
        headers: ['日常事物', '北部習慣用詞 (河內)', '南部習慣用詞 (胡志明市)'],
        rows: [
          ['父親', 'bố', 'ba / tía'],
          ['玉米', 'ngô', 'bắp'],
          ['花生', 'lạc', 'đậu phộng'],
          ['機車', 'xe máy', 'xe honda / xe máy']
        ]
      }
    },
    {
      concept: '聽辨策略',
      syntax: '[S] + không hiểu + từ này. (遇到方言陌生詞主動求教)',
      usage: '在異地遇到不熟悉的方言詞彙時，坦率發問：「Tôi không hiểu từ này（我不懂這個詞）」，請對方提供標準通用語對應。',
      trap: '遇到方言生詞硬猜，導致對話徹底偏離原意。',
      mnemonic: '「方言生詞莫瞎猜，Tôi không hiểu 敞心懷。」',
      infograph: {
        type: 'flow',
        title: '方言差異定點排查三步法',
        steps: [
          { title: '捕捉疑詞', desc: '發現該詞完全對不上所學' },
          { title: '坦誠發問', desc: 'Tôi không hiểu từ này.' },
          { title: '換取通用詞', desc: '請對方以標準越語解釋' }
        ]
      }
    },
    {
      concept: '地區代詞',
      syntax: 'Bắc: đâu vs Nam: ở đâu (處所疑問詞口語省略習慣)',
      usage: '詢問地點處所時，北部口語偏好精簡的「đâu（如 Đi đâu thế?）」，南部則習慣完整說「ở đâu（如 Đi đâu vậy? / Ở đâu nè?）」。',
      trap: '在北方誤將單純的 đâu 當成其他疑問句，忽視其處所核心功能。',
      mnemonic: '「北愛單字 đâu 俐落，南隨 ở đâu 韻味悠。」',
      infograph: {
        type: 'contrast',
        title: '處所代詞南北口語使用頻率對照',
        columns: [
          { label: '北部習慣 (đâu 居多)', status: '短促精練', example: 'Đi đâu thế?', note: '節奏緊湊明快' },
          { label: '南部習慣 (ở đâu / đâu nè)', status: '舒展親切', example: 'Ở đâu vậy nè?', note: '語調溫和拉長' }
        ]
      }
    },
    {
      concept: '用詞對照',
      syntax: 'Bắc: thìa vs Nam: muỗng (餐飲器皿南北稱謂)',
      usage: '在餐館索取湯匙：北部稱「cái thìa」，南部稱「cái muỗng」。掌握餐具南北差異是生活自理的必修課。',
      trap: '在河內餐館向店家大喊「Cho tôi cái muỗng」，服務生可能要頓一下才意會過來。',
      mnemonic: '「南方舀湯稱 cái muỗng，北方進餐叫 cái thìa。」',
      infograph: {
        type: 'contrast',
        title: '餐桌核心器皿南北用詞對立',
        columns: [
          { label: '北部餐桌 (thìa)', status: '河內及北方各省', example: 'Cho tôi xin cái thìa.', note: '北方傳統正字習慣' },
          { label: '南部餐桌 (muỗng)', status: '胡志明市及南方各省', example: 'Cho tôi xin cái muỗng.', note: '南方民間主流用語' }
        ]
      }
    },
    {
      concept: '請對方換說法',
      syntax: 'Từ này có nghĩa là gì? (請求換位釋義核心句)',
      usage: '當對方口音過重或使用地方俗語時，請對方給出定義：「Từ này có nghĩa là gì?（這個詞是什麼意思？）」，化解口音與地域壁壘。',
      trap: '只會重複問「Hả?」，讓對方以為是聽覺問題而非詞意障礙。',
      mnemonic: '「俗語難明莫犯愁，có nghĩa là gì 探源流。」',
      infograph: {
        type: 'slots',
        title: '語義求問標準結構積木',
        slots: [
          { label: '指涉目標', val: 'Từ này' },
          { label: '語義框架', val: 'có nghĩa là' },
          { label: '疑問核心', val: 'gì?' }
        ]
      }
    },
    {
      concept: '南北語氣詞',
      syntax: 'Bắc: thế (Đi đâu thế?) vs Nam: vậy (Đi đâu vậy?)',
      usage: '北方偏好以「thế」收尾疑問句（Đi đâu thế?），語調俐落；南方偏好以「vậy」收尾（Đi đâu vậy?），語氣溫婉親切。',
      trap: '在北方刻意學南方的「vậy nè」，在當地人聽來顯得稍微做作不自然。',
      mnemonic: '「北方問句尾帶 thế，南方閒聊伴 vậy 隨。」',
      infograph: {
        type: 'contrast',
        title: '南北問句終結助詞情感對照',
        columns: [
          { label: '北部助詞 (thế)', status: '探詢明快俐落', example: 'Đi đâu thế?', note: '符合北方嚴謹簡練之語言審美' },
          { label: '南部助詞 (vậy)', status: '親切溫婉柔和', example: 'Đi đâu vậy?', note: '符合南方隨和熱情之社交風格' }
        ]
      }
    },
    {
      concept: '南部自稱習慣',
      syntax: 'Dạ, con cảm ơn cô (南部自謙晚輩稱 con 展至親之德)',
      usage: '在南部社會，年幼晚輩或面對長輩甚至長輩顧客時，自稱「con（兒輩）」極為普遍（Dạ, con cảm ơn cô），能瞬間拉近如家人般的深厚情感。',
      trap: '外國人聽到店員自稱 con 以為對方真是自己小孩，其實是南方傳統長幼禮貌體系。',
      mnemonic: '「南越自稱 con 顯謙遜，如侍長親溫情溢。」',
      infograph: {
        type: 'contrast',
        title: '南方獨特晚輩自謙「con」之社交維度',
        columns: [
          { label: '北部常規自稱 (em / cháu)', status: '維持表親或晚輩距', example: 'Em cảm ơn chị / cô.', note: '長幼分明，維持標準距離' },
          { label: '南部溫情自稱 (con)', status: '視同至親晚輩自稱', example: 'Dạ, con cảm ơn cô.', note: '極高親和力與孝悌社會倫理' }
        ]
      }
    },
    {
      concept: '聽辨三步驟',
      syntax: 'Anh nói giọng miền nào? ➔ 聽音辨區 ➔ 轉化對齊',
      usage: '克服口音三步驟：先確認對方是哪裡人「Anh nói giọng miền nào?（您是哪個地區的口音？）」，大腦立刻切換對應的南北音變規則進行解碼。',
      trap: '將南越口音當成「發音錯誤」，忽視越南南北方言皆為法定通行標準。',
      mnemonic: '「先問 giọng miền nào，大腦切換南北道。」',
      infograph: {
        type: 'flow',
        title: '跨地區口音解碼三部曲',
        steps: [
          { title: '第1步：詢問地區', desc: 'Anh nói giọng miền nào?' },
          { title: '第2步：載入音變規律', desc: '切換 d/gi ➔ /j/，合流 hỏi/ngã' },
          { title: '第3步：語意自然暢通', desc: '消除聽力障礙，雙向順暢交流' }
        ]
      }
    }
  ],

  shadowing: [
    {
      concept: '先理解',
      syntax: 'Comprehension first: Tôi hiểu câu này rồi (語意通透方開口)',
      usage: '跟讀的第一鐵律：在開口跟讀前，先確認已徹底理解句子的語法構造與精準語義（Tôi hiểu câu này rồi），拒絕無意義的機械學舌。',
      trap: '連意思都沒搞懂就開口跟讀，嘴皮在動大腦卻無法建立任何認知迴路。',
      mnemonic: '「先求理解後開腔，語意通透聲自昂。」',
      infograph: {
        type: 'flow',
        title: '跟讀法神經認知三階鏈條',
        steps: [
          { title: '解碼聽懂', desc: '理解語意結構與詞彙邊界' },
          { title: '大腦調頻', desc: '捕捉重音、音高走勢與停頓' },
          { title: '發音外化', desc: '聲帶肌肉跟隨母語原音共振' }
        ]
      }
    },
    {
      concept: '再跟讀',
      syntax: 'Synchronous shadow: Xin chào, tôi là học viên mới (肌肉記憶形成)',
      usage: '理解後開啟音訊，母語者發聲0.5秒後，緊隨其後進行同步跟讀，刻意模仿六聲調起伏與尾音閉塞，建立口腔肌肉記憶。',
      trap: '母語者念完停了才跟著念，這叫「複讀（Repetition）」，無法訓練大腦高強度即時處理語流的反應力。',
      mnemonic: '「緊貼原音半步差，如影隨形共天涯。」',
      infograph: {
        type: 'slots',
        title: '跟讀同步聲學共振結構',
        slots: [
          { label: '母語引導波', val: 'Xin chào, tôi là học viên mới.' },
          { label: '學員跟讀波', val: '…Xin chào, tôi là học viên mới. (延遲0.5秒)' }
        ]
      }
    },
    {
      concept: '最後重述',
      syntax: 'Independent re-production: Tôi muốn đặt một phòng (脫稿獨立輸出)',
      usage: '跟讀三至五遍後關閉音訊，在不看文字、不聽聲音的狀態下，完全憑大腦提取並流利重述出該句子，完成從輸入到自主輸出的終極閉環。',
      trap: '只要有原音帶著念就很順，一旦音訊關閉就一句也說不出來。',
      mnemonic: '「脫稿獨立能重述，方知真本領已成。」',
      infograph: {
        type: 'flow',
        title: '語言內化閉環三位階',
        steps: [
          { title: '第1階：先理解', desc: 'Tôi hiểu câu này rồi.' },
          { title: '第2階：再跟讀', desc: '跟隨母語原音同步調頻' },
          { title: '第3階：最後重述', desc: '脫稿獨立流利說出' }
        ]
      }
    },
    {
      concept: '由短到長',
      syntax: 'Chunk expansion: Tôi muốn đặt phòng ➔ cho hai người ➔ vào tối mai',
      usage: '跟讀短句熟練後，以核心句幹逐步向外擴展修飾短語，訓練工作記憶（Working Memory）容量。',
      trap: '一開始挑戰三行長句，跟到後半截就大腦超載卡死崩潰。',
      mnemonic: '「短句扎根枝葉展，漸次拉長力不衰。」',
      infograph: {
        type: 'steps',
        title: '語塊漸進式擴展生長梯',
        steps: [
          { level: '第1階 (核心句幹)', tag: 'S + V + O', ex: 'Tôi muốn đặt phòng.' },
          { level: '第2階 (對象補充)', tag: '+ Người thụ hưởng', ex: 'Tôi muốn đặt phòng cho hai người.' },
          { level: '第3階 (時間條件)', tag: '+ Thời gian', ex: 'Tôi muốn đặt phòng cho hai người tối mai.' }
        ]
      }
    },
    {
      concept: '延遲重現',
      syntax: 'Delay 1-2 syllables shadowing (影子延遲輸出)',
      usage: '跟讀的原意即為「影子」：母語者念出1-2個音節後，學習者如同影子般在後方0.5秒即時跟出，強迫大腦並行「聽」與「說」。',
      trap: '等母語者念完全句停頓後才念，這叫「複讀（Repetition）」而非「跟讀（Shadowing）」。',
      mnemonic: '「延遲兩字隨後跟，如影隨形同共振。」',
      infograph: {
        type: 'timeline',
        title: '真跟讀影子延遲時序圖 (0.5秒差)',
        stages: [
          { tag: '原音先行', desc: 'Tôi muốn…', ex: '母語者先發聲' },
          { tag: '延遲切入', desc: '…Tôi muốn…', ex: '學習者落後 1~2 音節跟隨' },
          { tag: '同步並行', desc: 'đặt phòng cho hai người.', ex: '雙軌音頻重疊行進' }
        ]
      }
    },
    {
      concept: '替換與重述',
      syntax: 'Slot substitution: Chúng tôi muốn đặt [hai phòng / bàn ăn]',
      usage: '在跟讀完固定句型後，立刻將主詞或名詞進行同義替換並重新說出，驗證是否真正將句型轉化為活的語言能力。',
      trap: '只會死背特定例句，換一個主詞或數字就啞口無言。',
      mnemonic: '「原句跟熟動手換，抽換主賓展神通。」',
      infograph: {
        type: 'slots',
        title: '核心句型槽位自由替換積木',
        slots: [
          { label: '主詞抽換', val: 'Chúng tôi (原 Tôi)' },
          { label: '動詞固定', val: 'muốn đặt' },
          { label: '賓語抽換', val: 'hai phòng (原 một phòng)' }
        ]
      }
    },
    {
      concept: '句調與情緒',
      syntax: 'Affective prosody: Thật à? (疑問意外) vs Thật! (堅定確證)',
      usage: '語言不僅是文字，更是情緒的載體。練習以「Thật à?」表達難以置信的驚奇，以「Thật!」表達斬釘截鐵的確證。',
      trap: '聲音扁平如機器人念經，無法傳遞真實人際互動的情感張力。',
      mnemonic: '「聲調帶情感，喜怒哀樂全在調。」',
      infograph: {
        type: 'contrast',
        title: '同一字詞不同情緒語調對照',
        columns: [
          { label: 'Thật à? (意外驚奇)', status: '音高上揚帶探詢', example: 'Thật à? Đừng đùa nhé!', note: '展現不可思議之驚奇情感' },
          { label: 'Thật! (無庸置疑)', status: '音高急促頓挫', example: 'Thật mà! Tin tôi đi!', note: '展現確鑿不移之堅定決心' }
        ]
      }
    },
    {
      concept: '停頓位置',
      syntax: 'Pause at syntactic boundary: [Tôi muốn đi] / nhưng [trời mưa].',
      usage: '長句朗讀不可在詞語中間換氣，必須在意群邊界（如連接詞 nhưng, vì, khi 前）自然微停，維持語意結構清晰。',
      trap: '在 danh từ 與 tính từ 之間（如 một cuốn / sách mới）突兀換氣斷句，破壞語義單位。',
      mnemonic: '「換氣停頓看意群，莫將詞素腰斬分。」',
      infograph: {
        type: 'slots',
        title: '語意邊界正確換氣停頓槽位',
        slots: [
          { label: '意群 A (主行動)', val: 'Tôi muốn đi' },
          { label: '換氣停頓口 (／)', val: '［氣息微頓］' },
          { label: '意群 B (轉折背景)', val: 'nhưng trời mưa.' }
        ]
      }
    },
    {
      concept: '錄音自評',
      syntax: 'Self-recording & waveform/pitch visual audit',
      usage: '將自己的跟讀錄音放出來，與原音音檔做 A/B 比對，找出音高飄掉、尾音漏塞或搶拍的客觀差距（Lần này tôi đọc rõ hơn）。',
      trap: '光靠說話當下的骨傳導自以為完美，聽錄音才發現滿篇嚴重跑調。',
      mnemonic: '「耳聽原音心有秤，雙軌比對見真章。」',
      infograph: {
        type: 'flow',
        title: '雙軌錄音客觀自評循環',
        steps: [
          { title: '輸出錄音', desc: '同步錄製自己的跟讀語音' },
          { title: '交疊放音', desc: '左耳原音、右耳自錄切換' },
          { title: '定點圈錯', desc: '標示出走音、搶拍之音節' },
          { title: '疊代重製', desc: '重錄直到語調完全合拍' }
        ]
      }
    }
  ],

  business: [
    {
      concept: '條件協商',
      syntax: 'Nếu đặt + [Số lượng] + sản phẩm thì + [Đề xuất về giá]?',
      usage: '採購階梯報價談判金句。以量換價：Nếu đặt 500 sản phẩm thì giá thế nào?（如果訂購500件那價格如何？），展現專業商業談判架勢。',
      trap: '直接要求降價而不願給予訂單量承諾，違反商業對等原則。',
      mnemonic: '「量大價優 Nếu 開頭，商務協商看籌碼。」',
      infograph: {
        type: 'slots',
        title: '階梯採購以量換價談判積木',
        slots: [
          { label: '條件假設', val: 'Nếu đặt' },
          { label: '採購規模', val: '500 sản phẩm' },
          { label: '推論後續', val: 'thì giá thế nào?' }
        ]
      }
    },
    {
      concept: '交期與品質',
      syntax: 'Xin xác nhận + [Ngày giao hàng] + và + [Tiêu chuẩn chất lượng].',
      usage: '訂單成立前必備雙重確認：「交貨期（ngày giao hàng / Lead time）」與「品質標準（tiêu chuẩn chất lượng / Quality standard）」，杜絕後續驗收糾紛。',
      trap: '只談妥價格卻未白紙黑字約定 AQL 抽檢品質標準，造成進料不良時無法索賠。',
      mnemonic: '「交期品質雙把關，合約落實免生患。」',
      infograph: {
        type: 'contrast',
        title: '外貿出貨兩大核心生命線',
        columns: [
          { label: '交期管理 (Delivery Lead Time)', status: '確認出貨排程', example: 'Ngày giao hàng: 15/11', note: '逾期違約金與空運賠償責任' },
          { label: '品質標準 (Quality Criteria)', status: '確認驗收公約', example: 'Tiêu chuẩn chất lượng: AQL 1.0', note: '抽檢允收標準與退貨處置機制' }
        ]
      }
    },
    {
      concept: '正式書信',
      syntax: '開頭: Kính gửi quý công ty, ； 結尾: Trân trọng,',
      usage: '商務正式信件公函標準框架：首行尊稱「Kính gửi quý công ty,（致貴公司）」，收尾敬稱「Trân trọng,（順頌商祺）」，署名全名與職稱。',
      trap: '信末隨便寫口語的「Tạm biệt」或「Bye」，破壞企業專業形象。',
      mnemonic: '「Kính gửi 啟端莊，Trân trọng 結篇章。」',
      infograph: {
        type: 'slots',
        title: '越南標準商務書函頭尾結構',
        slots: [
          { label: '頂頭敬啟', val: 'Kính gửi quý công ty,' },
          { label: '主體內容', val: '［商務洽談正文］' },
          { label: '結尾敬稱', val: 'Trân trọng,' }
        ]
      }
    },
    {
      concept: '會議待辦',
      syntax: 'Ai phụ trách việc này? (落實 Action Item 責任歸屬)',
      usage: '會議結束前明確執行責任人（PIC / Người phụ trách）：Ai phụ trách việc này?（這件事由誰負責？），確保每項決策都有專人跟進。',
      trap: '會議大談宏圖卻無人指名負責，下週複盤依然原地踏步。',
      mnemonic: '「責任到人問一句，Ai phụ trách 定江山。」',
      infograph: {
        type: 'flow',
        title: '商業會議決策閉環落實鏈',
        steps: [
          { title: '決策達成', desc: '確認行動方案' },
          { title: '責任指派', desc: 'Ai phụ trách việc này?' },
          { title: '明確時限', desc: 'Hoàn thành trước thứ sáu' }
        ]
      }
    },
    {
      concept: '保留與建議',
      syntax: 'Chúng tôi đề nghị + [Nội dung điều chỉnh / gia hạn] (委婉調整)',
      usage: '面對無法達成的期限，以商務口氣提出調整建議：Chúng tôi đề nghị điều chỉnh thời hạn（我方建議調整期限），比直接回絕更有建設性。',
      trap: '未經溝通單方面逾期擺爛，造成信譽歸零。',
      mnemonic: '「直接回絕傷和氣，đề nghị 建議拓新機。」',
      infograph: {
        type: 'slots',
        title: '專業協商修正提案積木',
        slots: [
          { label: '法人主體', val: 'Chúng tôi' },
          { label: '提請動詞', val: 'đề nghị' },
          { label: '調整內容', val: 'điều chỉnh thời hạn.' }
        ]
      }
    },
    {
      concept: '條款語彙',
      syntax: 'điều khoản bất khả kháng (不可抗力免責法言法語)',
      usage: '涉外商業合約必備法律條款：天災、戰爭或罷工觸發之「不可抗力條款（điều khoản bất khả kháng）」，限定免責範疇。',
      trap: '將一般供應鏈延遲硬說成不可抗力，面臨鉅額法律求償。',
      mnemonic: '「法律條款字如金，bất khả kháng 認天災。」',
      infograph: {
        type: 'matrix',
        title: '越南商業合約五大必備法定條款',
        headers: ['條款名稱', '越文法定用語', '核心法律意涵'],
        rows: [
          ['不可抗力條款', 'Điều khoản bất khả kháng', '天災戰亂不可歸責免罰'],
          ['違約賠償', 'Bồi thường thiệt hại', '界定違約金額與上限'],
          ['爭議管轄', 'Giải quyết tranh chấp', '約定仲裁 (VIAC) 或法院']
        ]
      }
    },
    {
      concept: '委婉催促',
      syntax: 'Kính mong anh sớm phản hồi. (催件黃金禮貌句)',
      usage: '跟進報價或合約審批時，催促對方回信：「Kính mong anh sớm phản hồi（敬請您儘早回覆）」，既傳達緊迫性又保有高度客氣。',
      trap: '通訊軟體連發問號催促，顯得極度缺乏職場素養。',
      mnemonic: '「急事催辦不失態，Kính mong phản hồi 展儒風。」',
      infograph: {
        type: 'slots',
        title: '商務禮貌催辦三要素',
        slots: [
          { label: '敬意祈使', val: 'Kính mong' },
          { label: '對象稱謂', val: 'anh' },
          { label: '時效修飾', val: 'sớm' },
          { label: '期待動作', val: 'phản hồi.' }
        ]
      }
    },
    {
      concept: '附條件讓步',
      syntax: '[S] + có thể giảm + [X%] + nếu + [Điều kiện thanh toán]',
      usage: '談判中的交換籌碼原則：絕不無條件降價，必須換取對我方有利的條件（如 Chúng tôi có thể giảm 3% nếu thanh toán trước: 若預先全額付款我方可折讓3%）。',
      trap: '客戶一砍價立刻退讓，對方只會覺得利潤水分很深而繼續深砍。',
      mnemonic: '「讓步必帶附加條，預付折扣相平衡。」',
      infograph: {
        type: 'flow',
        title: '商業談判籌碼對等交換矩陣',
        steps: [
          { title: '客戶砍價', desc: '要求額外價格折讓' },
          { title: '防禦性讓步', desc: 'Chúng tôi có thể giảm 3%' },
          { title: '索取對等籌碼', desc: 'nếu thanh toán trước 100%' }
        ]
      }
    },
    {
      concept: '會議結論',
      syntax: 'Hai bên đã thống nhất các nội dung sau: (會議紀要核心字眼)',
      usage: '會議收斂與簽署備忘錄（MOU）時，官方固定開篇句：Hai bên đã thống nhất các nội dung sau（雙方已就以下內容達成共識：）。',
      trap: '會後無人產出紀要，口頭說過的話各執一詞死無對證。',
      mnemonic: '「雙方共識 thống nhất 定，白紙黑字立紀要。」',
      infograph: {
        type: 'slots',
        title: '會議結論法定確認前綴',
        slots: [
          { label: '談判雙方', val: 'Hai bên' },
          { label: '已然時態', val: 'đã' },
          { label: '達成共識', val: 'thống nhất' },
          { label: '下接條列', val: 'các nội dung sau:' }
        ]
      }
    }
  ],

  macropol: [
    {
      concept: '指標口徑',
      syntax: 'tăng trưởng (增長) · lạm phát (通膨) · tỷ giá (匯率)',
      usage: '閱讀政經財經新聞的核心三大骨架宏觀指標：GDP 增長率（tăng trưởng）、消費者物價指數 CPI 通膨（lạm phát）、越盾兌美元匯率（tỷ giá）。',
      trap: '把 lạm phát 誤看成「通貨緊縮」，混淆經濟景氣過熱與衰退方向。',
      mnemonic: '「增長通膨與匯率，三大指標看越南。」',
      infograph: {
        type: 'matrix',
        title: '越南宏觀經濟三大核心儀表板',
        headers: ['宏觀指標', '越文專用名詞', '關注政策門檻'],
        rows: [
          ['經濟增長率', 'Tăng trưởng GDP', '目標區間 6.5% - 7.0%'],
          ['通貨膨脹率', 'Lạm phát (CPI)', '官方控制紅線 4.0% - 4.5%'],
          ['外匯匯率', 'Tỷ giá USD/VND', '央行中心匯率與波動區間']
        ]
      }
    },
    {
      concept: '因果與保留',
      syntax: '[Nguyên nhân] + có thể ảnh hưởng đến + [Chi phí/Lợi nhuận]',
      usage: '政經分析必須嚴謹具備保留語氣：以「có thể ảnh hưởng đến…（可能對…產生影響）」表達潛在因果，避免把預測寫成絕對必然。',
      trap: '把單一政策變動斷言為百分之百必定造成獲利崩跌，缺乏專業客觀度。',
      mnemonic: '「分析客觀留退路，có thể ảnh hưởng 顯持平。」',
      infograph: {
        type: 'slots',
        title: '宏觀經濟保留因果鏈積木',
        slots: [
          { label: '政策驅動因', val: 'Điều này' },
          { label: '可能性模態', val: 'có thể' },
          { label: '影響動詞', val: 'ảnh hưởng đến' },
          { label: '受波及標的', val: 'chi phí.' }
        ]
      }
    },
    {
      concept: '論證結構',
      syntax: 'Tuy nhiên, cần xem xét thêm + [Dữ liệu đối chiếu]',
      usage: '深度評論文章常用的批判性反思句：Tuy nhiên, cần xem xét thêm dữ liệu（然而，仍需進一步審視相關數據），帶出對立面觀點。',
      trap: '通篇文章一面倒歌功頌德或全盤唱衰，缺乏多維度數據交錯驗證。',
      mnemonic: '「Tuy nhiên 轉折辨真偽，xem xét dữ liệu 辨乾坤。」',
      infograph: {
        type: 'flow',
        title: '專業論述立體思維結構',
        steps: [
          { title: '表面現象', desc: '陳述當前主流指標數據' },
          { title: '批判轉折', desc: 'Tuy nhiên, cần xem xét thêm…' },
          { title: '深層實質', desc: '隱蔽成本、債務或外部衝擊' }
        ]
      }
    },
    {
      concept: '百分比與百分點',
      syntax: 'Percentage (%) vs Percentage point (điểm phần trăm)',
      usage: '利率從 4% 調升到 5%，是上升了 1 個「百分點（điểm phần trăm）」，而非上升了 1%（實質相對增幅為 25%）。',
      trap: '將百分點誤翻為百分比，在金融財報或借貸利息分析中會產生巨大的數字謬誤。',
      mnemonic: '「四趴到五趴，是差一個百分點，莫算成一趴。」',
      infograph: {
        type: 'contrast',
        title: '百分比 (%) 與百分點 (Điểm phần trăm) 概念辨析',
        columns: [
          { label: '百分點 (Điểm phần trăm)', status: '絕對利差增量', example: 'từ 4% lên 5% ＝ 1 điểm %', note: '兩利率數值直接相減' },
          { label: '百分比 (%)', status: '相對成長幅度', example: '(5-4)/4 ＝ 25% 增幅', note: '以基期為分母計算之相對變化' }
        ]
      }
    },
    {
      concept: '名目與實質',
      syntax: 'giá trị danh nghĩa (名目價值) vs giá trị thực (實質價值)',
      usage: '扣除通膨率後的經濟產出才是真正增長：giá trị danh nghĩa 是未經物價調整的帳面數字，giá trị thực 才是購買力真相。',
      trap: '看見營收名目增長 10% 狂喜，卻忽視通膨高達 12%，實質利潤其實在衰退。',
      mnemonic: '「名目名義表面看，實質扣除通膨真。」',
      infograph: {
        type: 'contrast',
        title: '名目經濟指標 vs 實質購買力指標',
        columns: [
          { label: 'Danh nghĩa (名目)', status: '當期貨幣面值', example: 'giá trị danh nghĩa', note: '受通貨膨脹膨脹之帳面金額' },
          { label: 'Thực (實質)', status: '基期平減購買力', example: 'giá trị thực', note: '剔除物價波動後之真實產能' }
        ]
      }
    },
    {
      concept: '引述與作者立場',
      syntax: 'Theo báo cáo… (客觀引述) vs Theo tôi… (主觀評斷)',
      usage: '閱讀政經報刊時必須嚴格區分「客觀引用機構報告（Theo báo cáo của Ngân hàng Thế giới）」與「專欄作者個人觀點（Theo tôi）」。',
      trap: '把專欄作家的主觀推測誤當成世界銀行或政府發佈的官方權威政策。',
      mnemonic: '「Theo báo cáo 據報告，Theo tôi 個人淺見明。」',
      infograph: {
        type: 'contrast',
        title: '客觀機構引述 vs 主觀評論立場',
        columns: [
          { label: 'Theo báo cáo (官方/智庫)', status: '第三方機構數據', example: 'Theo báo cáo của IMF…', note: '具備統計公信力與方法論' },
          { label: 'Theo tôi (評論員個人)', status: '作者主觀論述', example: 'Theo tôi, thị trường sẽ…', note: '僅代表個人立場，需批判閱讀' }
        ]
      }
    },
    {
      concept: '趨勢動詞',
      syntax: 'tăng mạnh (暴增) / giảm nhẹ (微跌) / đi ngang (盤整)',
      usage: '精準刻畫財經走勢曲線：tăng mạnh（大幅飆升）、giảm nhẹ（小幅微調下跌）、đi ngang（橫盤整理/平穩）。',
      trap: '只會用 tăng 與 giảm，無法精準傳達數據變動的幅度與震盪烈度。',
      mnemonic: '「tăng mạnh 沖雲霄，giảm nhẹ 微回落，đi ngang 水波平。」',
      infograph: {
        type: 'steps',
        title: '財經趨勢動態三大走向向量',
        steps: [
          { level: '強烈上升', tag: 'tăng mạnh', ex: '出口額突破歷史高位' },
          { level: '橫向盤整', tag: 'đi ngang', ex: '匯率維持在穩定波動區間' },
          { level: '溫和回調', tag: 'giảm nhẹ', ex: '物價指數呈現小幅微跌' }
        ]
      }
    },
    {
      concept: '預測語氣',
      syntax: 'Dự kiến sẽ + [V] + khoảng + [Con số] (官方預估口吻)',
      usage: '政府預算案或企業財測必備用語：Dự kiến sẽ tăng khoảng 6%（預計將成長約 6%），展現嚴謹之預期性。',
      trap: '把 dự kiến（預期）當成確定已發生的事實進行投資決策。',
      mnemonic: '「dự kiến 是預期，khoảng 是大約值，未成定局防風險。」',
      infograph: {
        type: 'slots',
        title: '宏觀預測標準公文框架',
        slots: [
          { label: '預期標籤', val: 'Dự kiến' },
          { label: '將來時態', val: 'sẽ tăng' },
          { label: '概數修飾', val: 'khoảng' },
          { label: '目標數值', val: '6%.' }
        ]
      }
    },
    {
      concept: '法規文件層級',
      syntax: 'Luật (法律) ➔ Nghị quyết (決議) ➔ Nghị định (法令) ➔ Thông tư (通函)',
      usage: '越南法規體系的四級金字塔：國會通過 Luật（法）；國會或政府頒布 Nghị quyết（決議）；總理簽發 Nghị định（法令規章）；部委頒布 Thông tư（實施通函導則）。',
      trap: '拿部委的 Thông tư 去對抗國會的 Luật，搞不清下位法不得牴觸上位法的法律效力階層。',
      mnemonic: '「國會立憲法與決議，政府發法令，部委下通函。」',
      infograph: {
        type: 'steps',
        title: '越南法律法規效力四階金字塔',
        steps: [
          { level: '第1階 (最高權限)', tag: 'Luật (國會)', ex: '國會制定之國家基本法' },
          { level: '第2階 (決策綱領)', tag: 'Nghị quyết (決議)', ex: '國會或中央政府之戰略政策' },
          { level: '第3階 (實施法令)', tag: 'Nghị định (政府)', ex: '總理頒布之行政實施條例' },
          { level: '第4階 (執行導則)', tag: 'Thông tư (部會)', ex: '財政部、工貿部之技術細則' }
        ]
      }
    }
  ],

  quiz: [
    {
      concept: '聲音或字義',
      syntax: 'Phonetic confusion: mua (買) vs mưa (雨)',
      usage: '測驗做錯時先診斷：究竟是「語音解碼辨析失真（聽成母音 u/ư）」，還是「詞彙語義記憶缺失」。診斷錯因才能對症下藥。',
      trap: '一做錯題就怪自己不夠努力，盲目把整課抄十遍，忽視根本是母音發音部位沒分清。',
      mnemonic: '「錯題先分音或義，u 圓 ư 扁辨分明。」',
      infograph: {
        type: 'contrast',
        title: '聽覺音素混淆 (Phonetic error) 根因診斷',
        columns: [
          { label: 'mua (買)', status: '圓唇後高母音 /u/', example: 'Tôi mua áo.', note: '雙唇向前攏圓' },
          { label: 'mưa (雨)', status: '扁唇央高母音 /ɨ/', example: 'Trời mưa to.', note: '嘴角往兩側拉開' }
        ]
      }
    },
    {
      concept: '語法或語境',
      syntax: 'Syntax vs Pragmatic error: không (否定) vs chưa (未然)',
      usage: '區分是純粹句子成分排錯（語法），還是社交語境禮節誤用（語用）。答「Tôi không ăn」在文法上完全正確，但在語用社交上是零分。',
      trap: '以為文法沒錯就是對的，忽略跨文化社交語用規範。',
      mnemonic: '「文法無過語用錯，社交得體才是真。」',
      infograph: {
        type: 'contrast',
        title: '語法結構 vs 社交語用診斷二象限',
        columns: [
          { label: '語法維度 (Grammar)', status: 'SVO 詞序、搭配正確', example: 'Tôi không uống.', note: '句子合乎語法規則' },
          { label: '語用維度 (Pragmatics)', status: '場合、輩份、禮節適切', example: 'Dạ, em chưa uống ạ.', note: '完美契合尊卑與社交溫情' }
        ]
      }
    },
    {
      concept: '隔日重測',
      syntax: 'Delay 24-48 hours re-test (破除短期記憶假象)',
      usage: '做完測驗當下答對往往只是工作記憶殘留，隔24小時在全新情境中重測「Hôm qua tôi đã học bài này」，才是檢驗長期記憶（LTP）的真金白銀。',
      trap: '剛看完答案立刻按重測拿100分，產生「我已經完全學會」的虛假自滿。',
      mnemonic: '「當場做對算暫存，隔宿重測見真章。」',
      infograph: {
        type: 'flow',
        title: '間隔重複記憶鞏固週期',
        steps: [
          { title: '首輪測驗', desc: '標記出混淆與猜測之錯題' },
          { title: '間歇沉澱', desc: '冷卻 24 小時讓海馬迴固化' },
          { title: '隔日重測', desc: '盲測相同概念之變形新題' }
        ]
      }
    },
    {
      concept: '信心與正確分開',
      syntax: 'Confidence vs Accuracy quadrant (後設認知診斷)',
      usage: '做題時標記信心度：「瞎猜但猜對（Lucky guess）」比「答錯」更危險，因為會掩蓋認知漏洞。坦承「Tôi đoán câu trả lời này」是真正進步的起點。',
      trap: '靠四選一猜中答案就滑過去，考試時換個題目立刻陣亡。',
      mnemonic: '「矇對比錯更堪憂，誠實標記幸運猜。」',
      infograph: {
        type: 'matrix',
        title: '信心與正確度四象限後設認知診斷',
        headers: ['象限', '作答狀態', '後續行動策略'],
        rows: [
          ['第 I 象限', '高信心且答對', '已完全掌握，進入間隔維護'],
          ['第 II 象限 (高危)', '高信心但答錯', '重大觀念誤區，立即回查根本法則'],
          ['第 III 象限 (隱患)', '低信心但猜對', '假性學會，必須重新學習並重測'],
          ['第 IV 象限', '低信心且答錯', '盲點明確，回歸基礎概念重新拆解']
        ]
      }
    },
    {
      concept: '最小差異診斷',
      syntax: 'Minimal pair diagnostics: Tôi mua áo vs Trời mưa',
      usage: '設計只有一個母音或一個聲調相差的最小對立題目，精準快篩出學習者的知覺缺陷盲點。',
      trap: '在複雜大長句中找錯誤，線索太多反而掩蓋了最核心的發音盲點。',
      mnemonic: '「極簡對比篩盲點，牽一髮而動全身。」',
      infograph: {
        type: 'contrast',
        title: '最小對立組聽力診斷表',
        columns: [
          { label: '對比項目 A', status: '動詞：購買', example: 'Tôi mua áo.', note: '核心母音為圓唇 /u/' },
          { label: '對比項目 B', status: '名詞：下雨', example: 'Trời mưa.', note: '核心母音為扁唇 /ɨ/' }
        ]
      }
    },
    {
      concept: '遷移的證據',
      syntax: 'Novel context transfer: Ngày mai tôi sẽ đi làm.',
      usage: '檢驗是否掌握時態或句型，看學習者能否將課本句「Mai tôi sẽ đi」自主遷移應用到新情境「Ngày mai tôi sẽ đi làm（明天我將去上班）」。',
      trap: '原句倒背如流，換個動詞就完全無法開口。',
      mnemonic: '「課本句子是示範，換入生活才成真。」',
      infograph: {
        type: 'flow',
        title: '知識向生活情境遷移階梯',
        steps: [
          { title: '課本原型', desc: 'Mai tôi sẽ đi.' },
          { title: '情境置換', desc: '抽換動詞為 đi làm (上班)' },
          { title: '生活輸出', desc: 'Ngày mai tôi sẽ đi làm.' }
        ]
      }
    },
    {
      concept: '干擾選項分析',
      syntax: 'Distractor analysis: đã (過去) vs đang (進行) vs sẽ (將來)',
      usage: '優秀的測驗選項並非隨機亂編，每個干擾項都對應特定的認知偏誤（如混淆已然與未然）。分析為何選錯干擾項能直擊要害。',
      trap: '只看正確選項是哪一個，不檢討自己為什麼會被特定的干擾項誘騙。',
      mnemonic: '「誘餌選項有玄機，抽絲剝繭抓心魔。」',
      infograph: {
        type: 'slots',
        title: '時態選擇題干擾選項陷阱分析',
        slots: [
          { label: '干擾項 A (過去已然)', val: 'đã' },
          { label: '干擾項 B (當前進行)', val: 'đang' },
          { label: '目標正確項 (將來承諾)', val: 'sẽ' }
        ]
      }
    },
    {
      concept: '限時與不限時',
      syntax: 'Fluency speed challenge: Tôi trả lời trong mười giây.',
      usage: '思考五分鐘才答對叫「靜態分析能力」；十秒內毫不猶豫答對叫「自動化流利度（Automaticity）」。限時測驗能逼迫直覺反應。',
      trap: '習慣慢條斯理查字典做題，進入真實對話環境完全跟不上語速。',
      mnemonic: '「慢想答對算分析，十秒開口是真功。」',
      infograph: {
        type: 'contrast',
        title: '靜態語法分析 vs 自動化流利提取',
        columns: [
          { label: '不限時 (深層分析)', status: '大腦顯性語法推導', example: '耗時 60 秒查表造句', note: '適合初期理解語法架構' },
          { label: '限時 10 秒 (直覺提取)', status: '自動化神經迴路直出', example: '10 秒內不經翻譯脫口而出', note: '真實對話現場必備能力' }
        ]
      }
    },
    {
      concept: '錯題再生產',
      syntax: 'Error-driven re-production: Tôi chưa đi Đà Nẵng.',
      usage: '訂正錯題的最高境界：不是在試卷上寫下正確答案，而是用該知識點自主造一個完全屬於自己的全新例句（如 Tôi chưa đi Đà Nẵng）。',
      trap: '看完詳解點頭讚嘆，但自己一個字也造不出來。',
      mnemonic: '「錯題再生產，造句定江山。」',
      infograph: {
        type: 'flow',
        title: '錯題再生產轉化閉環',
        steps: [
          { title: '錯題警醒', desc: '辨識錯用 không 代替 chưa' },
          { title: '核心吸納', desc: '掌握 chưa 留有餘地之語法特徵' },
          { title: '自主輸出', desc: 'Tôi chưa đi Đà Nẵng.' }
        ]
      }
    }
  ]
};
