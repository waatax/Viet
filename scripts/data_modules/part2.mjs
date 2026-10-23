// Part 2: Modules 6-10 (phrases, grammar, sentence, hanviet, conversation)

export const part2 = {
  phrases: [
    {
      concept: '請求物品',
      syntax: 'Cho tôi + [Số lượng] + [Lượng từ] + [Danh từ] (索取物品標準式)',
      usage: 'Cho tôi 直接接物品（如 Cho tôi một ly nước: 請給我一杯水），用於在餐廳、咖啡店或超商索取實物，不接動詞動作。',
      trap: '把所有中文的「請你…」都直接套 Cho tôi，接上動詞如 *Cho tôi giúp anh，造成語義混亂。',
      mnemonic: '「Cho tôi 接實物，一杯水一碗飯；動作請求換句型。」',
      infograph: {
        type: 'slots',
        title: '索取物品標準語法槽位',
        slots: [
          { label: '請求引語', val: 'Cho tôi' },
          { label: '數詞', val: 'một' },
          { label: '量詞', val: 'ly' },
          { label: '核心名詞', val: 'nước.' }
        ]
      }
    },
    {
      concept: '請求協助',
      syntax: '[Danh xưng 對稱] + giúp + [Danh xưng 自稱] + được không? (求援公式)',
      usage: '請求他人協助行動，動詞用「giúp（幫忙）」，結尾加上「được không（可以嗎）」構成溫和委婉的商榷語氣。',
      trap: '省去對稱與 được không，直接說生硬的「Giúp tôi!」，在母語者聽來有如緊急下令。',
      mnemonic: '「稱謂在前 giúp 在中，được không 結尾情意濃。」',
      infograph: {
        type: 'slots',
        title: '委婉請求他人協助語法積木',
        slots: [
          { label: '對稱尊稱', val: 'Anh' },
          { label: '援助動作', val: 'giúp' },
          { label: '自謙受惠', val: 'tôi' },
          { label: '協商後綴', val: 'được không?' }
        ]
      }
    },
    {
      concept: '確認理解',
      syntax: 'Ý + [Đối tượng] + là + [Nội dung] + phải không? (核對原意句型)',
      usage: '當接收到模糊資訊時，先以「Ý anh là… phải không?（你的意思是…對嗎？）」向對方覆述核心內容，是防止認知偏差的最佳機制。',
      trap: '在談判或協作中未確認就直接執行，事後往往發現時間或規格完全理解錯誤。',
      mnemonic: '「Ý anh là 先重述，phải không 收尾免猜疑。」',
      infograph: {
        type: 'flow',
        title: '關鍵資訊雙向對齊閉環',
        steps: [
          { title: '接收訊號', desc: '聆聽對方口頭指示或時間' },
          { title: '重述框架', desc: 'Ý anh là ngày mai…' },
          { title: '閉環確認', desc: '…phải không? (尋求確證)' },
          { title: '執行落實', desc: '對方回覆 Đúng/Phải 後再著手' }
        ]
      }
    },
    {
      concept: '請求許可',
      syntax: '[S] + có thể + [V] + ở đây + không? (徵詢許可模式)',
      usage: '「có thể… không」用以請求許可或詢問可能性，例如「Tôi có thể ngồi đây không?（我可以坐這裡嗎？）」，展現極高教養。',
      trap: '未開口直接拉椅子入座，或使用命令口吻，在越南注重社交分寸的場合會造成不快。',
      mnemonic: '「có thể 帶動詞，không 在句末徵許可。」',
      infograph: {
        type: 'slots',
        title: '行為許可徵詢積木',
        slots: [
          { label: '自稱', val: 'Tôi' },
          { label: '能願框架', val: 'có thể' },
          { label: '核心動作', val: 'ngồi đây' },
          { label: '閉環疑問', val: 'không?' }
        ]
      }
    },
    {
      concept: '請寫下關鍵資訊',
      syntax: '[Đối tượng] + có thể + viết ra + giúp tôi + được không?',
      usage: '當數字、地址、電話或專有名詞口音較重難以聽辨時，請求對方「Anh có thể viết ra giúp tôi không?（可以幫我寫下來嗎？）」。',
      trap: '反覆盲目聽三四次仍硬猜，不如禮貌遞上便籤或手機螢幕請對方書寫。',
      mnemonic: '「口音難辨莫著急，viết ra 寫下見真章。」',
      infograph: {
        type: 'steps',
        title: '疑難字詞書面核對流程',
        steps: [
          { level: '聽覺受阻', tag: 'Chưa rõ', ex: '無法精準辨析數字或地名' },
          { level: '出示工具', tag: 'Ghi chép', ex: '遞上手機備忘錄或便箋筆' },
          { level: '請求書寫', tag: 'Viết ra', ex: 'Viết ra giúp tôi được không?' }
        ]
      }
    },
    {
      concept: '指定不懂的部分',
      syntax: '[S] + chưa hiểu + [Cụm từ cụ thể] (精準定點求助)',
      usage: '不要說空泛的「Tôi không hiểu」，具體指出「Tôi chưa hiểu từ cuối（我還不懂最後一個詞）」能大幅降低對方的解釋成本。',
      trap: '通盤否認自己的理解，導致對方從頭又用極快語速重講一遍，問題依然未解。',
      mnemonic: '「不說全然不懂，單挑關鍵未明處。」',
      infograph: {
        type: 'contrast',
        title: '空泛求助 vs 定點求助之效能差異',
        columns: [
          { label: '空泛求助 (低效)', status: '全部未解', example: 'Tôi không hiểu gì cả.', note: '對方必須從頭重講，耗時低效' },
          { label: '定點求助 (高效)', status: '精確突破', example: 'Tôi chưa hiểu từ cuối.', note: '對方聚焦最後一個單字釋義' }
        ]
      }
    },
    {
      concept: '委婉拒絕',
      syntax: 'Cảm ơn, nhưng + [S] + không cần. (先謝後拒模式)',
      usage: '面對路上小販、推銷或不適當提議，先以「Cảm ơn（謝謝）」肯定對方善意，再接「nhưng tôi không cần（但我不需要）」堅定委婉拒絕。',
      trap: '態度過於兇狠喝斥，或支支吾吾不敢明確拒絕導致被糾纏。',
      mnemonic: '「先言感念後言辭，委婉堅定不生隙。」',
      infograph: {
        type: 'slots',
        title: '優雅拒絕雙層語法結構',
        slots: [
          { label: '禮貌緩衝層', val: 'Cảm ơn,' },
          { label: '轉折引語', val: 'nhưng' },
          { label: '主體', val: 'tôi' },
          { label: '明確態勢', val: 'không cần.' }
        ]
      }
    },
    {
      concept: '開口前致意',
      syntax: 'Xin lỗi, làm phiền + [Đối tượng] + một chút. (搭話禮貌前綴)',
      usage: '向路人問路或在辦公室打擾同事前，固定開場致歉語「Xin lỗi, làm phiền anh một chút（不好意思，打擾您一下）」。',
      trap: '未經致意直接劈頭提問，在講求尊卑長幼的越南文化中極為失禮。',
      mnemonic: '「問事之前先致意，làm phiền một chút 順人心。」',
      infograph: {
        type: 'flow',
        title: '陌生搭話黃金三秒進程',
        steps: [
          { title: '眼神接觸', desc: '微笑致意並停步' },
          { title: '禮貌前導', desc: 'Xin lỗi, làm phiền anh một chút.' },
          { title: '切入正題', desc: 'Cho tôi hỏi đường đi…' }
        ]
      }
    },
    {
      concept: '表達偏好',
      syntax: '[S] + thích + [Lựa chọn] + hơn. (比較偏好公式)',
      usage: '在挑選商品或菜單時，用「hơn」置於句尾表示「更喜歡這個（Tôi thích cái này hơn）」，明確表達個人主觀意願。',
      trap: '把 hơn 置於 thích 之前形成 *hơn thích，違反越語比較副詞後置之硬性規則。',
      mnemonic: '「喜歡在前 hơn 在後，越式偏好尾端置。」',
      infograph: {
        type: 'slots',
        title: '偏好表達後置比較槽位',
        slots: [
          { label: '主體', val: 'Tôi' },
          { label: '喜好動態', val: 'thích' },
          { label: '目標對象', val: 'cái này' },
          { label: '比較後置詞', val: 'hơn.' }
        ]
      }
    }
  ],

  grammar: [
    {
      concept: 'SVO 與修飾',
      syntax: '[S] + [V] + [O] ； [Danh từ] + [Tính từ / Định ngữ 後置修飾]',
      usage: '越語基本句型為「主-動-賓（SVO）」。核心特徵在於：名詞的所有修飾語（形容詞、所有格、指示代名詞）一律後置（如 sách mới: 書-新）。',
      trap: '受華語「新書」干擾直接說成 *mới sách，破壞越語名詞中心語在前之根本語序。',
      mnemonic: '「名詞走在前，形容跟在後；SVO 順著排，中心永居首。」',
      infograph: {
        type: 'slots',
        title: '越語名詞組後置修飾積木',
        slots: [
          { label: '主詞 (S)', val: 'Tôi' },
          { label: '動詞 (V)', val: 'mua' },
          { label: '量詞+名詞', val: 'một cuốn sách' },
          { label: '形容詞修飾', val: 'mới ⟵ (後置)' }
        ]
      }
    },
    {
      concept: '時貌與語境',
      syntax: 'đã (過去) / đang (進行) / sẽ (將來) + [V]',
      usage: '越語動詞本身不隨人稱或時態發生曲折變化，僅在必要強調時以前置副詞標記時貌：đang 表進行中、đã 表已完成、sẽ 表將來。',
      trap: '以為每句話都必須機械套入 đã、đang、sẽ；在已有時間詞（如 hôm qua, ngày mai）的語境中，動詞常直接使用無需標記。',
      mnemonic: '「動詞不變位，時貌靠副詞；語境若分明，虛詞可精簡。」',
      infograph: {
        type: 'timeline',
        title: '越語時貌三大前置標記時間軸',
        stages: [
          { tag: 'Đã (已)', desc: '過去完成動作', ex: 'Tôi đã ăn.' },
          { tag: 'Đang (在)', desc: '當前進行動作', ex: 'Tôi đang học.' },
          { tag: 'Sẽ (將)', desc: '未來預計動作', ex: 'Tôi sẽ đi.' }
        ]
      }
    },
    {
      concept: '否定與尚未',
      syntax: 'không + [V] (一般否定/意志) vs chưa + [V] (尚未/時態未然)',
      usage: 'không 否定狀態或事實、表達拒絕意志；chưa 則表示「尚未發生但未來可能發生」，兩者不可互換。',
      trap: '將「我還沒去」說成「Tôi không đi」，意思直接變成「我不去（拒絕前往）」。',
      mnemonic: '「không 是堅決不去做，chưa 是時機未成熟。」',
      infograph: {
        type: 'contrast',
        title: '否定詞 không vs 時態未然 chưa 對立矩陣',
        columns: [
          { label: 'không (絕對否定)', status: '無意願 / 客觀非真', example: 'Tôi không uống cà phê.', note: '體質不能喝或主觀絕不喝' },
          { label: 'chưa (未然時序)', status: '目前尚未 / 保留後續', example: 'Tôi chưa uống.', note: '現在還沒喝，等等可能喝' }
        ]
      }
    },
    {
      concept: '疑問框架',
      syntax: '[S] + có + [V/Adj] + … + không? (標準是非問句骨架)',
      usage: '越語構成是非疑問句的標準框架：在動詞或形容詞前置 có，句末置 không。口語中 có 有時可省略，但框架結構依然完整。',
      trap: '把華語的「嗎」直接音譯套在句尾，省略句首框架，導致語氣含糊不清。',
      mnemonic: '「có 領動詞前，không 守在句末，一收一放成問句。」',
      infograph: {
        type: 'slots',
        title: 'có…không 是非疑問句雙重框架',
        slots: [
          { label: '主體', val: 'Bạn' },
          { label: '疑問前導', val: 'có' },
          { label: '動態核心', val: 'uống trà' },
          { label: '閉環疑問', val: 'không?' }
        ]
      }
    },
    {
      concept: '剛剛與將來',
      syntax: 'vừa / mới + [V] (方才) vs sẽ / sắp + [V] (即將/將會)',
      usage: 'vừa/mới 標記方才剛結束的近過去；sắp/sẽ 標記即將到來的未來。時間副詞直接緊貼動詞前。',
      trap: '將 vừa 與 đã 混用，或忽視 sắp 與 sẽ 的緊迫度差異（sắp 比 sẽ 更迫近當前）。',
      mnemonic: '「vừa 是剛剛到，sắp 是緊接著，時序先後有分寸。」',
      infograph: {
        type: 'timeline',
        title: '迫近度時態細微刻度表',
        stages: [
          { tag: 'Vừa / Mới', desc: '近過去 (剛剛)', ex: 'Tôi vừa đến.' },
          { tag: 'Bây giờ', desc: '現在立足點', ex: 'Bây giờ đang làm.' },
          { tag: 'Sắp', desc: '近將來 (馬上)', ex: 'Sắp mưa rồi.' },
          { tag: 'Sẽ', desc: '一般將來 (預計)', ex: 'Mai sẽ đi.' }
        ]
      }
    },
    {
      concept: '比較結構',
      syntax: '[A] + [Tính từ] + hơn + [B] (差比式標準句型)',
      usage: '越語比較級核心為「A + 形容詞 + hơn + B（A比B更…）」。與中文「A比B+形容詞」語序顛倒，形容詞置於 hơn 之前。',
      trap: '受華語干擾造出 *Phòng này so sánh phòng kia rộng，完全脫離越語常態語法。',
      mnemonic: '「形容詞先跑，hơn 緊隨在後，比對對象居末席。」',
      infograph: {
        type: 'slots',
        title: '越華差比結構語序倒置對照',
        slots: [
          { label: '主體 A', val: 'Phòng này' },
          { label: '性質焦點', val: 'rộng' },
          { label: '比較標記', val: 'hơn' },
          { label: '參照對象 B', val: 'phòng kia.' }
        ]
      }
    },
    {
      concept: '被動 bị／được',
      syntax: '消極不幸: bị + [V] vs 積極有幸: được + [V]',
      usage: '越語被動語態帶有極強烈的情感極性：bị 用於遭受不幸、懲罰、災損（如 bị phạt: 被罰）；được 用於榮獲表揚、好處、晉升（如 được khen: 被稱讚）。',
      trap: '看到中性的「被選中」隨意用 bị，在越語母語者看來是遭受了天大的苦難。',
      mnemonic: '「bị 遭苦難災厄，được 沐恩澤嘉許；情感極性要分清。」',
      infograph: {
        type: 'contrast',
        title: '被動語態雙軌情感極性分水嶺',
        columns: [
          { label: 'bị (消極被動 / 不幸)', status: '遭受痛苦、責罰', example: 'Tôi bị phạt.', note: '遭遇非自願的負面損失' },
          { label: 'được (積極被動 / 幸運)', status: '獲得利益、榮譽', example: 'Tôi được khen.', note: '獲得讚賞或正面機遇' }
        ]
      }
    },
    {
      concept: '疑問詞位置',
      syntax: '問主詞置首: Ai + [V]？ vs 問處所/賓語原位後置: [S] + đi + đâu？',
      usage: '越語疑問代名詞遵循「原位疑問（Wh-in-situ）」原則：問哪裡（đâu）就放在地點槽位；問誰（ai）若為主詞則放首位，若為受詞則放句尾。',
      trap: '像英語一樣習慣將所有疑問詞往前倒裝，造出 *Đâu bạn đi？的怪異句式。',
      mnemonic: '「原位疑問不倒裝，想問何物就補位。」',
      infograph: {
        type: 'contrast',
        title: '原位疑問槽位對稱圖',
        columns: [
          { label: '問處所 (原位後置)', status: '置於動詞後方', example: 'Bạn đi đâu?', note: 'đâu 居受詞地點槽位' },
          { label: '問施事主詞 (置於首位)', status: '居主詞槽位', example: 'Ai gọi bạn?', note: 'ai 居發起動作的主格槽位' }
        ]
      }
    },
    {
      concept: '強調焦點',
      syntax: 'Chính + [Thành phần nhấn mạnh] + đã/là… (焦點前置分裂句)',
      usage: '「Chính」置於被強調對象之前，類似中文的「正是…／就是…」，用於釐清責任歸屬或突顯核心事實（如 Chính tôi đã gọi anh: 就是我打給你的）。',
      trap: '將 chính 放錯位置置於動詞後，變成副詞「主要地（chủ yếu）」。',
      mnemonic: '「Chính 鎖定焦點，指明主體正是誰。」',
      infograph: {
        type: 'slots',
        title: '焦點分裂前綴強調積木',
        slots: [
          { label: '焦點鎖定詞', val: 'Chính' },
          { label: '核心受焦主體', val: 'tôi' },
          { label: '確證動作', val: 'đã gọi anh.' }
        ]
      }
    }
  ],

  sentence: [
    {
      concept: '名詞組',
      syntax: '[Số từ] + [Lượng từ] + [Danh từ trung tâm] + [Định ngữ/Tính từ]',
      usage: '完整名詞組遵循四大槽位標準排列：hai（數詞2）+ cuốn（量詞本）+ sách（中心名詞書）+ mới（形容詞修飾新）。不可任意調換。',
      trap: '漏掉量詞 cuốn 說成 *hai sách mới，或將修飾語 mới 放回名詞前。',
      mnemonic: '「數詞量詞排在前，名詞中心居中央，修飾尾巴殿最後。」',
      infograph: {
        type: 'slots',
        title: '名詞短語四槽位解剖圖',
        slots: [
          { label: '1. 數量詞', val: 'hai' },
          { label: '2. 分類量詞', val: 'cuốn' },
          { label: '3. 中心名詞', val: 'sách' },
          { label: '4. 後置修飾語', val: 'mới' }
        ]
      }
    },
    {
      concept: '位置關係',
      syntax: '[S] + [V] + [O] + ở + [Địa điểm] (處所介詞短語後置)',
      usage: '越語動作發生的地點短語「ở + 地點」習慣置於動詞或整句之後（Tôi học tiếng Việt ở nhà: 我在學越南語[在家]）。亦可因主題焦點前置。',
      trap: '受華語「我在家學越南語」影響，將 ở nhà 生硬放在動詞前面變成 *Tôi ở nhà học tiếng Việt。',
      mnemonic: '「動作做完再說在哪，ở 加地點後方隨。」',
      infograph: {
        type: 'contrast',
        title: '處所狀語越華語序對照',
        columns: [
          { label: '越式慣用語序 (後置)', status: '動詞在前，地點在後', example: 'Tôi học tiếng Việt ở nhà.', note: '先陳述學習動作與客體，再補述空間' },
          { label: '華式思維 (前置干擾)', status: '空間在前，動詞在後', example: '我在家學越語', note: '華語習慣介詞短語居動詞前' }
        ]
      }
    },
    {
      concept: '原因與結果',
      syntax: 'Vì + [Nguyên nhân] nên + [Kết quả] (因果複句標準雙柱)',
      usage: 'Vì（因為）引導原因子句，nên（所以）引導結果子句。書面與口語中兩者常成對呼應，逻辑鮮明。',
      trap: '把 nên 寫成 *cho nên 或誤用為語氣詞，忽視前後子句的主謂完整性。',
      mnemonic: '「Vì 引原因起波瀾，nên 承結果定乾坤。」',
      infograph: {
        type: 'flow',
        title: '因果複句邏輯導向架構',
        steps: [
          { title: '原因前件 (Vì)', desc: 'Vì trời mưa (因為下雨)' },
          { title: '邏輯推演 (nên)', desc: '因此引發後續狀態' },
          { title: '結果後件 (Kết quả)', desc: 'tôi ở nhà (我待在家中)' }
        ]
      }
    },
    {
      concept: '讓步關係',
      syntax: 'Tuy + [Mệnh đề đối lập] nhưng + [Mệnh đề chính] (讓步轉折)',
      usage: 'Tuy（雖然）承接阻礙事實，nhưng（但是）承接克服阻礙的實際行動。在商務談判與論述文寫作中極為核心。',
      trap: '遺漏 nhưng 導致轉折力道不足，或將 tuy 誤套為 nếu（如果）。',
      mnemonic: '「Tuy 承逆境阻礙，nhưng 顯毅力前行。」',
      infograph: {
        type: 'contrast',
        title: '讓步轉折邏輯力量天平',
        columns: [
          { label: 'Tuy (客觀逆境阻力)', status: '條件不利', example: 'Tuy trời mưa', note: '天公不作美' },
          { label: 'Nhưng (主觀意志克服)', status: '堅持落實', example: 'nhưng tôi vẫn đi.', note: '依然依約前行' }
        ]
      }
    },
    {
      concept: '條件關係',
      syntax: 'Nếu + [Điều kiện] thì/sẽ + [Kết quả] (假說與結果)',
      usage: 'Nếu 引導前置假說條件，後句以 thì（則）或 sẽ（將）銜接相應產生的結果，構成標準條件複句。',
      trap: '後句漏掉 thì 或將 nếu 誤用為 vì，混淆了「假說」與「已發生的事實」。',
      mnemonic: '「Nếu 設條件門檻，thì 引出結果來。」',
      infograph: {
        type: 'flow',
        title: '條件假說推導流程',
        steps: [
          { title: '設定前提', desc: 'Nếu có thời gian (若有充裕時間)' },
          { title: '觸發閘門', desc: '條件成立觸發行動' },
          { title: '承諾行動', desc: 'tôi sẽ gọi (我必定致電通知)' }
        ]
      }
    },
    {
      concept: '名詞組位置',
      syntax: '[Danh từ] + [Màu sắc] + của + [Sở hữu] (複合屬性遞歸後置)',
      usage: '當名詞同時包含顏色修飾與所有格時，依序由近及遠後置：chiếc xe（量名）+ màu đỏ（顏色）+ của tôi（我的）。',
      trap: '把「我的紅色車」直譯為 *của tôi màu đỏ chiếc xe，嚴重錯亂名詞中心語法秩序。',
      mnemonic: '「車在最前色居中，所屬 của tôi 壓在後。」',
      infograph: {
        type: 'slots',
        title: '多層名詞修飾語遞歸層次',
        slots: [
          { label: '名詞中心體', val: 'chiếc xe' },
          { label: '第一層性質', val: 'màu đỏ (紅色)' },
          { label: '第二層所有格', val: 'của tôi (我的)' }
        ]
      }
    },
    {
      concept: '關係子句 mà',
      syntax: '[Danh từ] + mà + [Mệnh đề quan hệ giải thích] (定語子句引導詞)',
      usage: '「mà」作為關係代名詞，引導修飾限定先行名詞的子句（如 Cuốn sách mà tôi mua rất hay: 我買的那本書非常精彩）。',
      trap: '誤用 mà 取代 nhưng，或在不需要關係代名詞的簡單句中濫加 mà。',
      mnemonic: '「mà 接後句定名詞，限定說解最分明。」',
      infograph: {
        type: 'slots',
        title: '關係子句 mà 引導限定修飾框',
        slots: [
          { label: '被限定主體', val: 'Cuốn sách' },
          { label: '關係連接詞', val: 'mà' },
          { label: '修飾子句', val: 'tôi mua' },
          { label: '述語評價', val: 'rất hay.' }
        ]
      }
    },
    {
      concept: '目的 để',
      syntax: '[Mệnh đề hành động] + để + [Mục đích] (目的引導詞)',
      usage: '「để」置於主行動之後，引導行動的終極目的或意圖（Tôi học tiếng Việt để làm việc: 我學越南語是為了工作）。',
      trap: '把 để 放在句首時缺乏主句支撐，或將目的動詞放錯在 hành động 之前。',
      mnemonic: '「做何事說在先，để 接目標在後方。」',
      infograph: {
        type: 'slots',
        title: '行動與目的因果承接積木',
        slots: [
          { label: '實施行動', val: 'Tôi học tiếng Việt' },
          { label: '目的介詞', val: 'để' },
          { label: '預期目標', val: 'làm việc.' }
        ]
      }
    },
    {
      concept: '時間子句 khi',
      syntax: 'Khi + [Thời điểm/Hành động] , [Mệnh đề chính] (時點觸發子句)',
      usage: '「Khi」相當於中文的「當…之時」，可置於句首作為整句時間前提背景（Khi đến Hà Nội, tôi sẽ gọi bạn: 到了河內時我會打給你）。',
      trap: '把 lúc 與 khi 混淆；lúc 偏向口語當下瞬間，khi 適用於更廣泛的條件與書面時間段。',
      mnemonic: '「Khi 立時間背景，逗點之後主句隨。」',
      infograph: {
        type: 'flow',
        title: '時間背景觸發行動時序',
        steps: [
          { title: '時空條件錨定', desc: 'Khi đến Hà Nội (抵達河內時)' },
          { title: '條件觸發', desc: '事件點達成' },
          { title: '承諾行動啟動', desc: 'tôi sẽ gọi bạn (致電對方)' }
        ]
      }
    }
  ],

  hanviet: [
    {
      concept: '字根擴展',
      syntax: 'Gốc Hán: quốc (國) ➔ quốc gia (國家) / quốc tế (國際)',
      usage: '掌握一個漢越音字根（如 quốc ＝ 國），能以指數級關聯推導數十個高階詞彙：quốc gia, quốc tế, tổ quốc, quốc hội。',
      trap: '把所有中文漢字拼讀音生硬套入，忽視越語同形同源詞的語義轉移或搭配習慣。',
      mnemonic: '「一字字根通萬里，quốc gia quốc tế 脈絡通。」',
      infograph: {
        type: 'tree',
        title: '漢越字根「Quốc (國)」衍生詞拓撲樹',
        branches: [
          { root: 'quốc (國)', leaf: '+ gia ➔ quốc gia (國家體系)' },
          { root: 'quốc (國)', leaf: '+ tế ➔ quốc tế (跨國全球)' },
          { root: 'quốc (國)', leaf: '+ tịch ➔ quốc tịch (法定國籍)' },
          { root: 'tổ (祖)', leaf: '+ quốc ➔ tổ quốc (祖國故土)' }
        ]
      }
    },
    {
      concept: '假朋友',
      syntax: 'bác sĩ (醫師 ≠ 博士) ； lịch sự (禮貌 ≠ 歷史)',
      usage: '漢越「假朋友（False friends）」字面與中文同源，現代詞義卻南轅北轍：bác sĩ 指「醫師（博士為 tiến sĩ）」；lịch sự 指「有禮貌（歷史為 lịch sử）」。',
      trap: '在醫院要找醫生大喊找 tiến sĩ，對方只會滿頭霧水以為你要找大學教授。',
      mnemonic: '「看字莫望文生義，bác sĩ 是醫師，tiến sĩ 才是真博士。」',
      infograph: {
        type: 'contrast',
        title: '高頻漢越假朋友致命誤解清單',
        columns: [
          { label: '越語原詞 (真實含義)', status: '現代真正意思', example: 'bác sĩ ＝ 醫師', note: 'lịch sự ＝ 有禮貌 / 體面' },
          { label: '中文漢字 (表面字義)', status: '字面直譯陷阱', example: '博士 ＝ tiến sĩ', note: '歷史 ＝ lịch sử' }
        ]
      }
    },
    {
      concept: '六八體入門',
      syntax: 'Dòng 6 âm tiết (Lục) ➔ Dòng 8 âm tiết (Bát) ； 音節交替押韻',
      usage: '越南民族詩歌六八體（Lục bát）：第一行6音節，第二行8音節；第6音節與第8音節平聲押韻，是《金雲翹傳》與民歌的靈魂載體。',
      trap: '忽視音節的平仄韻律（Bằng/Trắc），把六八體朗讀成毫無起伏的生硬散文。',
      mnemonic: '「上句六字下句八，六六八八相押韻；金雲翹傳傳千古。」',
      infograph: {
        type: 'matrix',
        title: '六八體押韻與平仄對照規格',
        headers: ['詩句行', '音節長度', '押韻對應點', '範例韻腳'],
        rows: [
          ['上行 (Lục)', '6 音節', '第 6 音節押平聲韻', 'Trăm năm trong cõi người ta (ta)'],
          ['下行 (Bát)', '8 音節', '第 6 音節承韻，第 8 音節啟後', 'Chữ tài chữ mệnh khéo là (là) ghét nhau (nhau)']
        ]
      }
    },
    {
      concept: '字根不能單獨硬套',
      syntax: 'kinh tế (經濟) vs kinh nghiệm (經驗) (雙音節不可拆分獨立)',
      usage: 'kinh 是「經」，但在現代越語中不可單獨抽出來作為單詞使用，必須依託雙音節詞成型，且與現代詞義精確對應。',
      trap: '將單一漢字生硬拆解並自造詞，造出母語者完全聽不懂的怪詞。',
      mnemonic: '「漢越字根成組用，不可孤立造新詞。」',
      infograph: {
        type: 'contrast',
        title: '黏著字根雙音節成組依存法則',
        columns: [
          { label: '完整成詞 (合法)', status: '雙音節語素共構', example: 'kinh tế / kinh nghiệm', note: '語意完整穩定，符合現代詞典規範' },
          { label: '單字孤立 (非法)', status: '非自由語素單用', example: '*Một cái kinh', note: '無法獨立承載概念，不符語法' }
        ]
      }
    },
    {
      concept: '俗諺的文化意義',
      syntax: 'Ăn quả nhớ kẻ trồng cây (文化隱喻映射)',
      usage: '「吃果子拜樹頭（吃果實時要感恩栽種之人）」，展現越南深厚的孝道宗族與報恩倫理，常在祝賀長輩或感謝合作夥伴時引用。',
      trap: '僅理解字面的農業摘果，未能感悟其深層的感恩忠義文化隱喻。',
      mnemonic: '「吃果不忘栽樹人，越南文化重感恩。」',
      infograph: {
        type: 'contrast',
        title: '經典俗諺跨文化價值觀映射',
        columns: [
          { label: '字面物象 (Image)', status: '採摘果實與栽樹農夫', example: 'Ăn quả nhớ kẻ trồng cây.', note: '純粹農業勞作意象' },
          { label: '文化寄寓 (Value)', status: '飲水思源、知恩圖報', example: '尊師重道、不忘師長提攜', note: '越南核心儒道文化倫理' }
        ]
      }
    },
    {
      concept: '六八體的押韻位置',
      syntax: 'Vần lưng (腰韻) ↔ Vần chân (腳韻) 交織網',
      usage: '第一行末字（第6音節）與第二行第6音節押韻；第二行末字（第8音節）再與第三行末字（第6音節）押韻，形成流暢宛如流水之韻網。',
      trap: '背誦詩句時斷句錯誤，把韻腳拆散，失去音樂感。',
      mnemonic: '「腳韻承接腰韻起，環環相扣六八詩。」',
      infograph: {
        type: 'steps',
        title: '六八體腰腳韻流動環扣',
        steps: [
          { level: '上行句末 (腳韻)', tag: '第6音節', ex: 'Trải qua một cuộc bể dâu (dâu)' },
          { level: '下行中腰 (腰韻)', tag: '第6音節', ex: 'Những điều trông thấy mà đau (đau) đớn lòng' },
          { level: '連綿諧音', tag: '韻母對應', ex: 'dâu ↔ đau 抑揚頓挫相呼應' }
        ]
      }
    },
    {
      concept: '漢越詞與固有詞',
      syntax: 'phụ nữ (漢越尊崇/書面) vs đàn bà (固有詞/口語平實)',
      usage: '漢越詞通常承載正式、崇高、書面、法定的語域（如 phụ nữ: 婦女）；純越固有詞則生動、親切、世俗口語（如 đàn bà: 女人/妻子）。',
      trap: '在國家紀念日或正式致辭中將 phụ nữ 說成 đàn bà，會被視為嚴重失態。',
      mnemonic: '「公堂致辭用 phụ nữ，世俗口語說 đàn bà。」',
      infograph: {
        type: 'contrast',
        title: '漢越語層與純越語層之語域兩極化',
        columns: [
          { label: '漢越層 (Trang trọng 正式)', status: '公文、社論、儀典', example: 'phụ nữ (婦女)', note: '帶有崇高、法律與學術色彩' },
          { label: '純越層 (Thường nhật 日常)', status: '生活、市井口語', example: 'đàn bà (女人)', note: '具象親近，但在正式公文顯失禮' }
        ]
      }
    },
    {
      concept: '公告語域',
      syntax: 'Chúng tôi xin thông báo… (官方公文公佈程式語)',
      usage: '企業或官方機構向大眾發佈公告時，固定以「Chúng tôi xin thông báo…（本公司謹此通告…）」作為莊嚴開頭。',
      trap: '把通告開頭寫成口語化的「Tôi muốn nói cho mọi người」，缺乏組織官方權威度。',
      mnemonic: '「官方發文 xin thông báo，字正腔圓顯威儀。」',
      infograph: {
        type: 'slots',
        title: '官方通告標準程式語槽位',
        slots: [
          { label: '主體機關', val: 'Chúng tôi' },
          { label: '敬辭前導', val: 'xin' },
          { label: '核心法定行為', val: 'thông báo' },
          { label: '後續公告條文', val: 'về việc…' }
        ]
      }
    },
    {
      concept: '四字成語',
      syntax: 'Đồng tâm hiệp lực (四字四音同源漢越成語)',
      usage: '越南大量保留並高頻使用漢越四字成語，如「Đồng tâm hiệp lực（同心協力）」，在會議動員、演說或慶典中具備高度修辭說服力。',
      trap: '把四字成語各字隨意倒裝，破壞了千百年沉澱的固定音韻節奏。',
      mnemonic: '「四字鏗鏘字根純，同心協力眾志成。」',
      infograph: {
        type: 'slots',
        title: '漢越四字成語節奏平衡對仗',
        slots: [
          { label: '前支前件', val: 'Đồng (同)' },
          { label: '前支後件', val: 'tâm (心)' },
          { label: '後支前件', val: 'hiệp (協)' },
          { label: '後支後件', val: 'lực (力)' }
        ]
      }
    }
  ],

  conversation: [
    {
      concept: '開啟需求',
      syntax: '[S] + muốn + [Hành động / Dịch vụ] (提出初衷需求)',
      usage: '對話開場直奔主題，明確宣告核心意圖：「Tôi muốn đặt một phòng（我想預訂一間房間）」，讓服務人員立即進入專用業務流程。',
      trap: '開場迂迴過長或只說「Xin chào」後沉默，增加前台接待的猜測成本。',
      mnemonic: '「開門見山 Tôi muốn 啟，明確需求事半倍。」',
      infograph: {
        type: 'slots',
        title: '商務服務預約初衷表達槽位',
        slots: [
          { label: '主體', val: 'Tôi' },
          { label: '意願模態', val: 'muốn' },
          { label: '預定動詞', val: 'đặt' },
          { label: '標的規格', val: 'một phòng.' }
        ]
      }
    },
    {
      concept: '澄清訊息',
      syntax: '[Đối tượng] + có thể + nhắc lại + được không? (請求澄清覆述)',
      usage: '在電話或吵雜環境中聽不清關鍵資訊時，禮貌請求：「Anh có thể nhắc lại được không?（可以請您再重複一次嗎？）」，避免因誤聽造成損失。',
      trap: '沒聽清卻假裝聽懂直接點頭答應，後續造成嚴重的預約日期或房型錯誤。',
      mnemonic: '「聽不清請 nhắc lại，重述核對最安心。」',
      infograph: {
        type: 'slots',
        title: '資訊澄清與請求覆述槽位',
        slots: [
          { label: '對象尊稱', val: 'Anh' },
          { label: '能願框架', val: 'có thể' },
          { label: '覆述動作', val: 'nhắc lại' },
          { label: '協商後綴', val: 'được không?' }
        ]
      }
    },
    {
      concept: '確認與收尾',
      syntax: 'Vậy là + [Thông tin cốt lõi] , đúng không? (關鍵細節鎖定)',
      usage: '對話收束前將關鍵數字與條件做最後盤點：「Vậy là hai đêm, đúng không?（所以是兩個晚上，對嗎？）」，雙方簽認共同認知。',
      trap: '沒有最後確認就掛電話或離開櫃檯，發生爭執時缺乏口頭覆核基礎。',
      mnemonic: '「Vậy là 總結關鍵數，đúng không 確證定乾坤。」',
      infograph: {
        type: 'slots',
        title: '預訂細節閉環覆核積木',
        slots: [
          { label: '總結前導', val: 'Vậy là' },
          { label: '核心條件', val: 'hai đêm,' },
          { label: '確證問標', val: 'đúng không?' }
        ]
      }
    },
    {
      concept: '接續追問',
      syntax: 'Còn + [Chủ đề bổ sung] + thì sao? (連貫深入探詢)',
      usage: '談妥主要項目後，用「Còn…thì sao?（那…又如何呢？）」追問附隨條款（如 Còn bữa sáng thì sao?: 那早餐的部分呢？），自然推展話題。',
      trap: '每次追問都重起一個完整主謂長句，顯得機械生硬且缺乏對話彈性。',
      mnemonic: '「Còn 引補充項，thì sao 探究竟。」',
      infograph: {
        type: 'slots',
        title: '附加項目追問省略結構',
        slots: [
          { label: '補充轉折', val: 'Còn' },
          { label: '追問焦點', val: 'bữa sáng' },
          { label: '態勢評估', val: 'thì sao?' }
        ]
      }
    },
    {
      concept: '即時改口',
      syntax: 'Xin lỗi, ý tôi là + [Nội dung đính chính] (主動即時修正)',
      usage: '發現自己口誤說錯日期或規格時，立刻啟動修復機制：「Xin lỗi, ý tôi là thứ sáu（抱歉，我的意思是星期五）」，展現溝通專業度。',
      trap: '說錯後任由錯誤延續，或支支吾吾不給出明確的更正標的。',
      mnemonic: '「說錯立刻 ý tôi là，及時更正省周折。」',
      infograph: {
        type: 'flow',
        title: '口誤即時修復與澄清流程',
        steps: [
          { title: '察覺口誤', desc: '發現剛才報錯星期或數字' },
          { title: '禮貌煞車', desc: 'Xin lỗi (抱歉)' },
          { title: '定向更正', desc: 'ý tôi là thứ sáu (我的意思是週五)' }
        ]
      }
    },
    {
      concept: '確認共同結論',
      syntax: 'Vậy chúng ta + [Hành động chung] + nhé. (共識約定確立)',
      usage: '商務或社交告別前，總結雙方共同約定：「Vậy chúng ta gặp lúc chín giờ nhé（那我們九點碰面喔）」，確認行程步調完全一致。',
      trap: '沒有敲定碰面時間就說再見，雙方認知不同步導致赴約撲空。',
      mnemonic: '「Vậy chúng ta 聚共識，nhé 字輕快定約程。」',
      infograph: {
        type: 'slots',
        title: '行動共識收斂標準槽位',
        slots: [
          { label: '總結前導', val: 'Vậy' },
          { label: '共同主體', val: 'chúng ta' },
          { label: '共識行動', val: 'gặp lúc chín giờ' },
          { label: '約定助詞', val: 'nhé.' }
        ]
      }
    },
    {
      concept: '話題轉換',
      syntax: 'À, nhân tiện… + [Chủ đề phát sinh] (自然插入關聯話題)',
      usage: '談妥核心公務後，以「À, nhân tiện…（啊，順便一提…）」優雅過渡到周邊生活或餐廳詢問，是建立人脈關係的最佳潤滑劑。',
      trap: '突兀轉換無關主題，讓對方覺得思維跳躍缺乏邏輯。',
      mnemonic: '「À nhân tiện 順水推，話題轉換顯情商。」',
      infograph: {
        type: 'flow',
        title: '話題分支平滑衍生路徑',
        steps: [
          { title: '主話題閉環', desc: '公務訂單確認完畢' },
          { title: '過渡引導詞', desc: 'À, nhân tiện… (啊，順便一提)' },
          { title: '周邊生活話題', desc: '附近有什麼道地美食？' }
        ]
      }
    },
    {
      concept: '表達不同意見',
      syntax: 'Tôi hiểu, nhưng tôi nghĩ + [Góc nhìn khác] (先同理後持平反饋)',
      usage: '職場表達異見的最高情商典範：「Tôi hiểu, nhưng tôi nghĩ khác một chút（我理解，不過我的想法有些微不同）」，先肯定對方，再陳述己見。',
      trap: '直接說「Sai rồi!（錯了！）」甚至當眾反駁，在注重體面的越南職場會引發強烈防禦心態。',
      mnemonic: '「先說 Tôi hiểu 表同理，後言 nghĩ khác 和氣生。」',
      infograph: {
        type: 'contrast',
        title: '生硬否定 vs 同理委婉異見對抗矩陣',
        columns: [
          { label: '生硬否定 (高衝突)', status: '直接否定對方', example: 'Sai rồi! / Không đúng!', note: '破壞團隊信任與溝通氛圍' },
          { label: '同理反饋 (建設性)', status: '同理先行，溫和提案', example: 'Tôi hiểu, nhưng tôi nghĩ khác…', note: '既維持和氣又精準傳遞立場' }
        ]
      }
    },
    {
      concept: '結束對話',
      syntax: 'Thôi, [S] + phải đi rồi. Hẹn gặp lại! (標準告退收尾式)',
      usage: '結束長談的乾脆體面句型：「Thôi, tôi phải đi rồi. Hẹn gặp lại!（好了，我得走了，下次見！）」兼顧抽身合理性與未來期許。',
      trap: '沒有預告突然中斷話題離場，顯得心不在焉或缺乏禮貌。',
      mnemonic: '「Thôi 字起句要告退，hẹn gặp lại 再相約。」',
      infograph: {
        type: 'slots',
        title: '體面告退雙段閉環',
        slots: [
          { label: '抽身引導', val: 'Thôi, tôi phải đi rồi.' },
          { label: '再會期許', val: 'Hẹn gặp lại!' }
        ]
      }
    }
  ]
};
