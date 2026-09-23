export const EXPANDED_GRAMMAR_RULES = [
  {
    titleZh: '1. 基本 SVO 語序 (主詞 + 動詞 + 受詞)',
    titleEn: '1. Basic SVO Word Order',
    descriptionZh: '基本語序與中文完全相同，動詞不隨人稱、性別變形，直接以原形表達。',
    descriptionEn: 'Follows Subject + Verb + Object without verbal conjugation.',
    exampleVi: 'Tôi ăn cơm.',
    exampleZh: 'Tôi (我) + ăn (吃) + cơm (飯) = 我吃飯。'
  },
  {
    titleZh: '2. 形容詞後置修飾原則 (重要！)',
    titleEn: '2. Post-nominal Adjective Rule',
    descriptionZh: '與中文完全相反！形容詞、定語必須放置在名詞的「後面」進行修飾。',
    descriptionEn: 'Adjectives strictly follow the noun they modify.',
    exampleVi: 'Cà phê sữa đá',
    exampleZh: 'Cà phê (咖啡) + sữa (奶) + đá (冰) = 冰奶咖啡。'
  },
  {
    titleZh: '3. 三大時態標記 (Đã / Đang / Sẽ)',
    titleEn: '3. Tense Markers (Đã / Đang / Sẽ)',
    descriptionZh: '動詞前放置時態助詞：Đã (已/過去)、Đang (正在/進行)、Sẽ (將要/未來)。',
    descriptionEn: 'Pre-verbal aspect particles: Đã (past), Đang (progressive), Sẽ (future).',
    exampleVi: 'Tôi đang học tiếng Việt.',
    exampleZh: 'Tôi đang học tiếng Việt. (我正在學越南語。)'
  },
  {
    titleZh: '4. 被動與受益語氣 (Bị vs Được)',
    titleEn: '4. Passive (Bị vs Được)',
    descriptionZh: '遭遇不幸、非自願負面用 Bị；獲得好處、幸運正面用 Được。',
    descriptionEn: 'Use Bị for adverse experiences, Được for fortunate ones.',
    exampleVi: 'Anh ấy được thăng chức, còn tôi bị phạt.',
    exampleZh: 'Được thăng chức (升遷) vs Bị phạt (被罰)。'
  },
  {
    titleZh: '5. 經典量詞體系 (Cái, Con, Người, Chiếc)',
    titleEn: '5. Classifier System',
    descriptionZh: '「數詞 + 量詞 + 名詞」：cái (物品), con (動物/活物), người (人), chiếc (車船/成雙之一)。',
    descriptionEn: 'Numeral + Classifier + Noun syntax.',
    exampleVi: 'Hai con cá và một cái bàn.',
    exampleZh: 'Hai con cá (兩條魚) + một cái bàn (一張桌子)。'
  },
  {
    titleZh: '6. 萬能是非疑問句 (Có ... không?)',
    titleEn: '6. Yes/No Questions (Có ... không?)',
    descriptionZh: '句型：主詞 + Có + 動詞/形容詞 + Không? (意為「有沒有...？/ 是否...？」)。',
    descriptionEn: 'Universal question structure: S + có + V/Adj + không?',
    exampleVi: 'Bạn có khỏe không?',
    exampleZh: 'Bạn có khỏe không? (你身體好嗎？)'
  },
  {
    titleZh: '7. 三大否定詞 (Không, Chưa, Đừng)',
    titleEn: '7. Negation Words (Không, Chưa, Đừng)',
    descriptionZh: 'Không (不/非事實)、Chưa (尚未/將來可能發生)、Đừng (別/請勿/祈使句否定)。',
    descriptionEn: 'Không (no/not), Chưa (not yet), Đừng (do not/imperative).',
    exampleVi: 'Tôi chưa ăn cơm, đừng lo!',
    exampleZh: 'Chưa ăn (尚未吃) · Đừng lo (別擔心)。'
  },
  {
    titleZh: '8. 方向與動態介詞 (Đi, Đến, Về, Ở)',
    titleEn: '8. Motion & Prepositions',
    descriptionZh: 'Đi (去)、Đến/Tới (到達)、Về (返回家鄉)、Ở (在某處)。回到家鄉必用 Về。',
    descriptionEn: 'Đi (go), Đến (arrive), Về (return home), Ở (at/in).',
    exampleVi: 'Tôi đi làm, tối về nhà ở Hà Nội.',
    exampleZh: 'Đi làm (去上班) · Về nhà (回家) · Ở Hà Nội (在河內)。'
  },
  {
    titleZh: '9. 關係代詞與修飾子句 (Mà & Là)',
    titleEn: '9. Relative Particle & Copula (Mà & Là)',
    descriptionZh: 'Mà 用於連接修飾子句或表達轉折「便宜而且好看 (Rẻ mà đẹp)」；Là 為繫詞「是」，後接名詞不可省略。',
    descriptionEn: 'Mà connects relative clauses or contrast; Là is the essential copula "to be".',
    exampleVi: 'Người mà tôi gặp hôm qua là giám đốc.',
    exampleZh: 'Người mà tôi gặp (我昨天遇見的人) + là giám đốc (是總經理)。'
  },
  {
    titleZh: '10. 比較級與最高級 (Hơn vs Nhất)',
    titleEn: '10. Comparison & Superlatives (Hơn vs Nhất)',
    descriptionZh: '比較級：主詞 + 形容詞 + Hơn + 對象 (比...更...)；最高級：形容詞 + Nhất (最...)。',
    descriptionEn: 'Comparative: S + Adj + Hơn + Object; Superlative: Adj + Nhất.',
    exampleVi: 'Hà Nội lạnh hơn Sài Gòn, phở bò ngon nhất!',
    exampleZh: 'Lạnh hơn Sài Gòn (比西貢冷) · Ngon nhất (最好吃)。'
  },
  {
    titleZh: '11. 句尾語氣與禮貌助詞 (ạ, nhé/nha, nhỉ, mà, đấy)',
    titleEn: '11. Sentence-Final Pragmatic Particles',
    descriptionZh: '「ạ」為對長輩與客戶的最高敬語標記；「nhé/nha」表示親切提議；「nhỉ」尋求認同或自言自語；「mà」表示提醒或堅持。',
    descriptionEn: '"ạ" marks utmost respect to seniors; "nhé/nha" softens proposals; "nhỉ" seeks agreement; "mà" emphasizes reminders.',
    exampleVi: 'Em chào anh ạ, ngày mai mình đi cà phê nhé!',
    exampleZh: 'Em chào anh ạ (哥好·敬語) + ngày mai mình đi cà phê nhé (明天我們去喝咖啡喔·親切約定)。'
  },
  {
    titleZh: '12. 遞進與同時發生句型 (Càng ... Càng / Vừa ... Vừa)',
    titleEn: '12. Progressive & Simultaneous Constructs',
    descriptionZh: '「Càng A càng B」表示「越 A 越 B」；「Vừa A vừa B」表示兩項特徵或動作「既 A 又 B / 一邊 A 一邊 B」。',
    descriptionEn: '"Càng... càng..." denotes proportional increase (the more... the more...); "Vừa... vừa..." denotes simultaneity (both... and...).',
    exampleVi: 'Tiếng Việt càng học càng thấy thú vị.',
    exampleZh: 'Tiếng Việt càng học (越語越學) + càng thấy thú vị (越覺得有趣)。'
  },
  {
    titleZh: '13. 致使與允許動詞 (Làm cho, Khiến cho, Để, Cho phép)',
    titleEn: '13. Causative & Permissive Verbs',
    descriptionZh: '「Làm cho / Khiến cho」表示「使/讓某人產生某種狀態或情緒」；「Để」引導目的「為了...」或祈使「讓...」。',
    descriptionEn: '"Làm cho / Khiến cho" indicates causation (makes someone feel/do); "Để" introduces purpose or permission (in order to / let).',
    exampleVi: 'Thời tiết mát mẻ làm cho tôi cảm thấy rất dễ chịu.',
    exampleZh: 'Thời tiết mát mẻ (涼爽天氣) + làm cho tôi (使我) + cảm thấy rất dễ chịu (覺得很舒服)。'
  },
  {
    titleZh: '14. 時間先後與同時連詞 (Trước khi, Sau khi, Trong khi)',
    titleEn: '14. Temporal Connectors & Sequence',
    descriptionZh: '「Trước khi + 動詞」表示「在...之前」；「Sau khi + 動詞」表示「在...之後」；「Trong khi」表示「在...期間/當...時」。',
    descriptionEn: '"Trước khi" (before), "Sau khi" (after), and "Trong khi" (while/during) govern subordinate time clauses.',
    exampleVi: 'Trước khi đi ngủ, tôi luôn uống một ly nước ấm.',
    exampleZh: 'Trước khi đi ngủ (在睡覺前) + tôi luôn uống (我總是喝) + một ly nước ấm (一杯溫水)。'
  },
  {
    titleZh: '15. 假設條件與讓步轉折 (Nếu ... thì / Tuy ... nhưng)',
    titleEn: '15. Conditionals & Concessives',
    descriptionZh: '「Nếu + 條件 + thì + 結果」表示「如果...那麼...」；「Tuy / Mặc dù + A + nhưng + B」表示「雖然 A 但是 B」。',
    descriptionEn: '"Nếu... thì..." expresses condition and consequence; "Tuy... nhưng..." expresses concession (although... yet...).',
    exampleVi: 'Nếu ngày mai trời mưa thì chúng ta sẽ ở nhà.',
    exampleZh: 'Nếu ngày mai trời mưa (如果明天下雨) + thì chúng ta sẽ ở nhà (那我們就留在家)。'
  },
  {
    titleZh: '16. 相互與協同副詞 (Nhau / Cùng nhau)',
    titleEn: '16. Reciprocal & Collaborative Adverbs',
    descriptionZh: '「Nhau」置於動詞之後表示「相互、彼此 (gặp nhau 遇見彼此)」；「Cùng nhau」置於動詞前表示「共同、一起」。',
    descriptionEn: '"Nhau" follows verbs to indicate mutual action (each other); "Cùng nhau" precedes verbs for doing things together.',
    exampleVi: 'Hai người bạn thân cùng nhau đi du lịch Đà Nẵng.',
    exampleZh: 'Hai người bạn thân (兩位摯友) + cùng nhau đi du lịch Đà Nẵng (一起去峴港旅遊)。'
  },
  {
    titleZh: '17. 頻率與習慣副詞 (Luôn luôn, Thường xuyên, Thỉnh thoảng)',
    titleEn: '17. Frequency & Habitual Markers',
    descriptionZh: '修飾習慣頻率：Luôn luôn (總是 100%) ➔ Thường xuyên (經常 80%) ➔ Thỉnh thoảng (偶爾 40%) ➔ Hiếm khi (罕見 10%) ➔ Không bao giờ (從不 0%)。',
    descriptionEn: 'Frequency markers placed before verbs: Luôn luôn (always) > Thường xuyên (often) > Thỉnh thoảng (sometimes) > Không bao giờ (never).',
    exampleVi: 'Tôi thường xuyên tập thể dục vào buổi sáng sớm.',
    exampleZh: 'Tôi thường xuyên (我經常) + tập thể dục (做運動) + vào buổi sáng sớm (在清晨時分)。'
  },
  {
    titleZh: '18. 全稱與個體量化 (Mỗi, Từng, Mọi, Tất cả)',
    titleEn: '18. Universal & Distributive Quantifiers',
    descriptionZh: '「Mỗi」強調「每一個 (個體分配)」；「Từng」強調「逐一、按順序」；「Mọi」代表「所有的/凡是」；「Tất cả」代表「全體/全部」。',
    descriptionEn: '"Mỗi" indicates distributive each; "Từng" indicates one-by-one; "Mọi" covers every/all; "Tất cả" denotes entirety.',
    exampleVi: 'Mỗi ngày tôi đều học mười từ vựng mới.',
    exampleZh: 'Mỗi ngày (每一天) + tôi đều học (我都學習) + mười từ vựng mới (十個新單字)。'
  },
  {
    titleZh: '19. 越南地理方向動態語義 (Ra Bắc, Vào Nam, Lên, Xuống)',
    titleEn: '19. Geographic Directional Semantics',
    descriptionZh: '越南文化獨特地理空間觀：北上稱「Ra (出)」，南下稱「Vào (入)」，去高原/山區稱「Lên (上)」，去平原三角洲海邊稱「Xuống (下)」。',
    descriptionEn: 'Vietnamese spatial orientation: Going North is "Ra" (out), South is "Vào" (in), Highlands is "Lên" (up), Delta is "Xuống" (down).',
    exampleVi: 'Tuần sau tôi sẽ đi ra Hà Nội công tác rồi đi vào Sài Gòn.',
    exampleZh: 'Đi ra Hà Nội công tác (北上河內出差) + rồi đi vào Sài Gòn (然後南下西貢)。'
  },
  {
    titleZh: '20. 委婉請求與正式商務祈使 (Làm ơn, Xin vui lòng, Nhờ anh)',
    titleEn: '20. Polite Requests & Courteous Imperatives',
    descriptionZh: '日常禮貌祈使置於句首：「Làm ơn + 動詞 (請/勞駕)」；正式商務書信與公共公告：「Xin vui lòng + 動詞 (敬請/請務必)」；託付協助：「Nhờ + 人稱 + 動詞」。',
    descriptionEn: 'Courteous request prefixes: "Làm ơn" (everyday please), "Xin vui lòng" (formal please/kindly), "Nhờ" (requesting assistance).',
    exampleVi: 'Xin vui lòng giữ im lặng trong phòng họp.',
    exampleZh: 'Xin vui lòng (請/敬請) + giữ im lặng (保持安靜) + trong phòng họp (在會議室內)。'
  },
  {
    titleZh: '21. 雙重否定與強調肯定句型 (Không thể không / Không phải là không)',
    titleEn: '21. Double Negation & Emphatic Affirmation',
    descriptionZh: '「Không thể không + 動詞」表示強烈義務「不得不 / 不能不」；「Không phải là không + 形容詞」表示委婉讓步「並不是不...」。',
    descriptionEn: '"Không thể không" denotes inescapable obligation (cannot but / must); "Không phải là không" softens affirmation (it is not that... not...).',
    exampleVi: 'Là đối tác chiến lược, chúng tôi không thể không tham dự buổi lễ.',
    exampleZh: 'Là đối tác chiến lược (作為戰略夥伴) + chúng tôi không thể không tham dự (我們不能不出席)。'
  },
  {
    titleZh: '22. 漢越詞與純越語語序對稱性差異 (漢越前置 vs 純越後置)',
    titleEn: '22. Han-Viet vs Pure Vietnamese Modifier Symmetry',
    descriptionZh: '雙軌語序核心：純越語定語一律後置 (xe đạp, nước mắm, cờ nước)；而漢越詞複合名詞遵循漢語古法，修飾成分前置 (Quốc kỳ 國旗, Chủ tịch 主席, Kinh tế 經濟)。',
    descriptionEn: 'Pure Vietnamese places modifiers after nouns (cờ nước); Han-Viet compounds follow classical Chinese pre-nominal order (Quốc kỳ).',
    exampleVi: 'Quốc kỳ Việt Nam là lá cờ đỏ sao vàng.',
    exampleZh: 'Quốc kỳ (國旗·漢越前置) vs Lá cờ của đất nước (國家之旗·純越後置)。'
  },
  {
    titleZh: '23. 重疊詞 (Từ láy) 語音修辭與情態微調',
    titleEn: '23. Reduplication (Từ láy) & Emotional Nuance',
    descriptionZh: '越南語最具特色的語音修辭！雙音節重疊減弱或增強語義：nho nhỏ (微小可愛)、đo đỏ (微紅淡紅)、sạch sẽ (乾乾淨淨)、lung linh (波光粼粼/閃爍)。',
    descriptionEn: 'Reduplication softens or enriches imagery: "nho nhỏ" (dainty small), "đo đỏ" (reddish tint), "sạch sẽ" (immaculately clean).',
    exampleVi: 'Căn phòng nhỏ được dọn dẹp sạch sẽ và ngăn nắp.',
    exampleZh: 'Căn phòng nhỏ (小房間) + được dọn dẹp sạch sẽ (被整理得乾乾淨淨)。'
  },
  {
    titleZh: '24. 存在、擁有與方位句構 (Có vs Ở vs Nằm ở)',
    titleEn: '24. Existential vs Locative Constructs (Có vs Ở vs Nằm ở)',
    descriptionZh: '「地點 + Có + 名詞」(某處有某物·存在句)；「名詞 + Ở + 地點」(某物在某處·處所句)；「Nằm ở」用於地理位置或建築座落「座落於/位於」。',
    descriptionEn: 'Locative existentials: Place + Có + Noun ("There is X at Y") vs Noun + Ở + Place ("X is located at Y"); "Nằm ở" for geographical positioning.',
    exampleVi: 'Khách sạn này nằm ở trung tâm thành phố Đà Nẵng.',
    exampleZh: 'Khách sạn này (這家飯店) + nằm ở trung tâm (座落於市中心) + thành phố Đà Nẵng (峴港市)。'
  },
  {
    titleZh: '25. 伴隨手段、工具與媒介介詞 (Bằng, Bằng cách, Với, Nhờ)',
    titleEn: '25. Instrumental & Means Prepositions (Bằng, Với, Nhờ)',
    descriptionZh: '「Bằng + 工具/交通」(用/以：đi bằng xe máy 騎機車, thanh toán bằng thẻ 刷卡)；「Bằng cách + 動詞」(透過...方式)；「Nhờ + 人/事」(多虧/藉助)。',
    descriptionEn: '"Bằng" indicates instrument or vehicle (by motorbike, by card); "Bằng cách" indicates method (by doing); "Nhờ" indicates thanks to / courtesy of.',
    exampleVi: 'Quý khách có thể thanh toán bằng thẻ tín dụng hoặc quét mã QR.',
    exampleZh: 'Quý khách có thể (貴客可以) + thanh toán bằng thẻ tín dụng (用信用卡結帳) + hoặc quét mã QR (或掃QR碼)。'
  },
  {
    titleZh: '26. 意願、企圖、承諾與義務模態助動詞 (Định, Toan, Dám, Nên, Phải)',
    titleEn: '26. Volitional & Modal Auxiliaries (Định, Dám, Nên, Phải)',
    descriptionZh: '「Định + 動詞」表示打算/計畫；「Dám」表示敢於；「Nên」表示建議應當；「Phải」表示強制必須。否定形式為「Không dám (不敢)」、「Không nên (不該)」。',
    descriptionEn: '"Định" expresses intention/plan (intend to); "Dám" denotes courage (dare to); "Nên" offers recommendation (should); "Phải" demands necessity (must).',
    exampleVi: 'Tôi định sang năm sẽ mở rộng nhà xưởng sản xuất.',
    exampleZh: 'Tôi định sang năm (我打算明年) + mở rộng nhà xưởng sản xuất (擴建生產廠房)。'
  },
  {
    titleZh: '27. 焦點分裂句與排他強調結構 (Chính... mới là / Chính là)',
    titleEn: '27. Focus Cleft & Exclusive Emphasis (Chính... mới là)',
    descriptionZh: '「Chính + 名詞 + mới là...」強調「只有...才是...」(排他焦點)；「Chính là」直接強調主體「正是/恰恰是」。',
    descriptionEn: '"Chính [X] mới là [Y]" creates a cleft sentence emphasizing that only X is truly Y; "Chính là" translates to "precisely is / exactly is".',
    exampleVi: 'Chất lượng sản phẩm chính là uy tín của công ty chúng tôi.',
    exampleZh: 'Chất lượng sản phẩm (產品品質) + chính là uy tín (正是信譽) + của công ty chúng tôi (我們公司的)。'
  },
  {
    titleZh: '28. 言說引述、轉述與認知動詞對比 (Nói rằng, Cho rằng, Tưởng rằng)',
    titleEn: '28. Speech Reporting & Cognitive Verbs (Cho rằng vs Tưởng rằng)',
    descriptionZh: '「Nói rằng」客觀引述言論；「Cho rằng」表達深思後的個人觀點 (認為)；「Tưởng rằng / Tưởng là」特指「誤以為 (事實並非如此)」。',
    descriptionEn: '"Nói rằng" reports speech objectively; "Cho rằng" states reasoned opinions (deem/consider); "Tưởng rằng" specifically marks mistaken assumptions (falsely thought).',
    exampleVi: 'Tôi tưởng rằng hôm nay được nghỉ, hóa ra vẫn phải đi làm.',
    exampleZh: 'Tôi tưởng rằng (我誤以為) + hôm nay được nghỉ (今天放假) + hóa ra vẫn phải đi làm (原來還是得上班)。'
  },
  {
    titleZh: '29. 概數、容差與近似量詞結構 (Khoảng, Chừng, Tầm, Hơn, Vài)',
    titleEn: '29. Approximative Quantifiers & Tolerance Ranges',
    descriptionZh: '置於數字前：Khoảng / Chừng (大約、左右)；南越常用 Tầm (差不多)；置於數字後：Hơn (超過、多)。Vài (幾/兩三個)，Mấy (幾個)。',
    descriptionEn: 'Approximatives before numbers: "Khoảng / Chừng" (around/approx); Southern "Tầm"; after numbers: "Hơn" (more than). "Vài" (a few), "Mấy" (several).',
    exampleVi: 'Dự án này cần khoảng ba tháng và hơn mười chuyên gia kỹ thuật.',
    exampleZh: 'Cần khoảng ba tháng (需要約三個月) + và hơn mười chuyên gia (以及十多位專家)。'
  },
  {
    titleZh: '30. 四字對仗格成語俗諺結構 (Thành ngữ 4 chữ)',
    titleEn: '30. Four-Syllable Parallel Idioms (Thành ngữ 4 chữ)',
    descriptionZh: '越南語文化最高境界！由兩個雙音節詞組成的 2+2 對仗結構：Mưa thuận gió hòa (風調雨順)、Ăn quả nhớ kẻ trồng cây (飲水思源)、Nhập gia tùy tục (入境隨俗)。',
    descriptionEn: 'High-register 2+2 Vietnamese idioms with symmetrical rhythm: "Mưa thuận gió hòa" (favorable weather), "Ăn quả nhớ kẻ trồng cây" (gratefulness to benefactors).',
    exampleVi: 'Đến Việt Nam kinh doanh thì nên hiểu câu: Nhập gia tùy tục.',
    exampleZh: 'Đến Việt Nam kinh doanh (到越南經商) + thì nên hiểu câu (就應明白這句話) + Nhập gia tùy tục (入境隨俗)。'
  }
];

export const GRAMMAR_DRILLS = [
  {
    id: 'drill_1',
    ruleIndex: 1, // Rule 2
    questionZh: '在咖啡館點「冰奶咖啡」，按照形容詞後置修飾原則，正確的越語拼法是？',
    questionEn: 'How do you say "Iced Milk Coffee" using the post-nominal adjective rule?',
    options: [
      { vi: 'Cà phê sữa đá', zh: '咖啡 + 奶 + 冰 (修飾語後置)', isCorrect: true },
      { vi: 'Đá sữa cà phê', zh: '冰 + 奶 + 咖啡 (中文直譯語序)', isCorrect: false }
    ],
    explanationZh: '越南語修飾語嚴格後置！中心名詞「cà phê」在前，修飾語「sữa」(奶) 與「đá」(冰) 在後。',
    audioText: 'Cho tôi một ly cà phê sữa đá.'
  },
  {
    id: 'drill_2',
    ruleIndex: 3, // Rule 4
    questionZh: '小明在公司獲得主管提拔升職，這屬於正面受益語氣，應使用哪一個助詞？',
    questionEn: 'Which particle denotes a fortunate event like getting a promotion?',
    options: [
      { vi: 'Anh ấy được thăng chức.', zh: '他升職了 (幸運正面: Được)', isCorrect: true },
      { vi: 'Anh ấy bị thăng chức.', zh: '他升職了 (遭遇不幸: Bị)', isCorrect: false }
    ],
    explanationZh: '正面獲得好處、晉升、得獎一律用「Được」；遭受罰款、被罵、生病、車禍非自願不幸事件才用「Bị」。',
    audioText: 'Anh ấy được thăng chức.'
  },
  {
    id: 'drill_3',
    ruleIndex: 6, // Rule 7
    questionZh: '朋友問「你吃過午飯了嗎？」如果你「還沒吃」，應該回答哪一個否定詞？',
    questionEn: 'If someone asks if you have eaten lunch yet and you haven\'t yet, which negation do you use?',
    options: [
      { vi: 'Tôi chưa ăn.', zh: '我尚未吃 (尚未發生的狀態: Chưa)', isCorrect: true },
      { vi: 'Tôi không ăn.', zh: '我不吃 (拒絕或永久否定: Không)', isCorrect: false }
    ],
    explanationZh: '「Chưa」表示「尚未/還沒 (未來可能會做)」；「Không」表示「不/非事實/拒絕」。回答是否吃飽問候時請用「Chưa」。',
    audioText: 'Tôi chưa ăn cơm.'
  },
  {
    id: 'drill_4',
    ruleIndex: 18, // Rule 19
    questionZh: '台商從胡志明市（南越）出發前往首都河內（北越）開會，依照越南傳統地理空間觀，應該說：',
    questionEn: 'Traveling North to Hanoi from the South in Vietnamese directional semantics is:',
    options: [
      { vi: 'Tôi đi ra Hà Nội công tác.', zh: '北上稱「Ra」(出)', isCorrect: true },
      { vi: 'Tôi đi vào Hà Nội công tác.', zh: '誤用「Vào」', isCorrect: false }
    ],
    explanationZh: '越南獨特地理動態：北上稱「Ra (出)」，南下稱「Vào (入)」，去高山/高原稱「Lên (上)」，去平原三角洲稱「Xuống (下)」。',
    audioText: 'Ngày mai tôi đi ra Hà Nội công tác.'
  },
  {
    id: 'drill_5',
    ruleIndex: 10, // Rule 11
    questionZh: '向越南長輩、上級主管或尊貴客戶致謝時，句尾務必加上哪一個極致敬語助詞？',
    questionEn: 'Which sentence-final particle denotes the highest degree of politeness to seniors?',
    options: [
      { vi: 'Em cảm ơn anh ạ!', zh: '句尾加上「ạ」(敬語標誌)', isCorrect: true },
      { vi: 'Em cảm ơn anh nhé!', zh: '句尾加上「nhé」(平輩親暱相約)', isCorrect: false }
    ],
    explanationZh: '「ạ」為越南語面對年長者與尊客的終極禮貌助詞；而「nhé/nha」表示親切隨和的約定，不適合正式對長輩使用。',
    audioText: 'Em cảm ơn anh ạ!'
  },
  {
    id: 'drill_6',
    ruleIndex: 9, // Rule 10
    questionZh: '想讚美某間餐廳的牛肉河粉「全城最好吃」，應該使用哪一個最高級標記？',
    questionEn: 'Which word expresses the superlative "the best / most delicious"?',
    options: [
      { vi: 'Phở bò ở đây ngon nhất.', zh: '最高級用「Nhất」(最)', isCorrect: true },
      { vi: 'Phở bò ở đây ngon hơn.', zh: '比較級用「Hơn」(更/比較)', isCorrect: false }
    ],
    explanationZh: '比較級：形容詞 + Hơn (例如 ngon hơn 比較好吃)；最高級：形容詞 + Nhất (例如 ngon nhất 最好吃)。',
    audioText: 'Phở bò ở đây ngon nhất.'
  },
  {
    id: 'drill_7',
    ruleIndex: 14, // Rule 15
    questionZh: '表達「如果明天下雨，我們就留在家中」，正確的關聯連詞組合是？',
    questionEn: 'Which conditional connector pair means "If ... then ..."?',
    options: [
      { vi: 'Nếu ngày mai trời mưa thì chúng ta ở nhà.', zh: 'Nếu ... thì (如果...那麼)', isCorrect: true },
      { vi: 'Tuy ngày mai trời mưa nhưng chúng ta ở nhà.', zh: 'Tuy ... nhưng (雖然...但是)', isCorrect: false }
    ],
    explanationZh: '「Nếu (如果) ... thì (那麼)」為經典條件假設句型；「Tuy (雖然) ... nhưng (但是)」則為讓步轉折句型。',
    audioText: 'Nếu trời mưa thì chúng ta ở nhà.'
  },
  {
    id: 'drill_8',
    ruleIndex: 19, // Rule 20
    questionZh: '在正式商業公文、展覽會或會議中，表示「敬請/請務必保持安靜」，最得體的用語是：',
    questionEn: 'Formal business or public imperative for "Please kindly keep quiet":',
    options: [
      { vi: 'Xin vui lòng giữ im lặng.', zh: 'Xin vui lòng (敬請/請務必)', isCorrect: true },
      { vi: 'Đừng nói chuyện.', zh: 'Đừng (別/祈使否定，偏口語口吻)', isCorrect: false }
    ],
    explanationZh: '「Xin vui lòng + 動詞」為最高規格商務與公共禮貌用語；「Làm ơn」用於日常隨意請求；「Đừng」帶有較強的生硬命令色彩。',
    audioText: 'Xin vui lòng giữ im lặng trong phòng họp.'
  },
  {
    id: 'drill_9',
    ruleIndex: 21, // Rule 22
    questionZh: '在稱呼「國家旗幟（國旗）」時，屬於漢越詞複合構詞，修飾成分前置，正確越語是？',
    questionEn: 'Which is the correct Han-Viet term for National Flag with prefix modifier?',
    options: [
      { vi: 'Quốc kỳ', zh: 'Quốc (國) + kỳ (旗) - 漢越前置修飾', isCorrect: true },
      { vi: 'Kỳ quốc', zh: '語序顛倒之錯誤拼法', isCorrect: false }
    ],
    explanationZh: '漢越詞遵循古代漢語語法，修飾語在中心詞之前：Quốc (國) + kỳ (旗) = 國旗；而純越語則後置：Lá cờ của nước。',
    audioText: 'Quốc kỳ Việt Nam là lá cờ đỏ sao vàng.'
  },
  {
    id: 'drill_10',
    ruleIndex: 22, // Rule 23
    questionZh: '形容房間被整理得「乾乾淨淨、纖塵不染」，應該使用哪一個重疊詞 (Từ láy)？',
    questionEn: 'Which reduplication word (Từ láy) expresses "immaculately clean"?',
    options: [
      { vi: 'Căn phòng rất sạch sẽ.', zh: 'Sạch sẽ (乾乾淨淨·重疊音律修辭)', isCorrect: true },
      { vi: 'Căn phòng rất sạch sạch.', zh: '非標準越語重疊形式', isCorrect: false }
    ],
    explanationZh: '「Sạch sẽ」為經典音韻重疊詞 (Từ láy)，比單純的「sạch」更具生動形象感與滿意情感色彩。',
    audioText: 'Căn phòng này rất sạch sẽ.'
  },
  {
    id: 'drill_11',
    ruleIndex: 24, // Rule 25
    questionZh: '結帳時客人想表達「我可以用信用卡付款嗎？」，介詞應使用哪一個？',
    questionEn: 'Which preposition denotes payment instrument (by credit card)?',
    options: [
      { vi: 'Tôi có thể thanh toán bằng thẻ tín dụng không?', zh: 'Bằng (以/用...工具媒介)', isCorrect: true },
      { vi: 'Tôi có thể thanh toán với thẻ tín dụng không?', zh: '與 (誤用伴隨介詞)', isCorrect: false }
    ],
    explanationZh: '工具、手段、支付方式一律使用介詞「Bằng」(例如：bằng thẻ 用卡, bằng tiền mặt 用現金, bằng xe máy 騎機車)。',
    audioText: 'Tôi thanh toán bằng thẻ tín dụng.'
  },
  {
    id: 'drill_12',
    ruleIndex: 26, // Rule 27
    questionZh: '在團隊討論中，強調「只有他才是真正做決定的人」，最地道的焦點強調句型是？',
    questionEn: 'Which focus cleft sentence emphasizes "He is the one who decides"?',
    options: [
      { vi: 'Chính anh ấy mới là người quyết định.', zh: 'Chính ... mới là (正是...才是...)', isCorrect: true },
      { vi: 'Anh ấy là người quyết định cũng được.', zh: '語氣平淡無排他強調', isCorrect: false }
    ],
    explanationZh: '「Chính [主語] mới là [受語]」是越語最正統的分裂焦點句，表達「只有某人才是... / 正是某人才是...」。',
    audioText: 'Chính anh ấy mới là người quyết định.'
  },
  {
    id: 'drill_13',
    ruleIndex: 27, // Rule 28
    questionZh: '當你想表達「我之前『誤以為』會議在下午（但其實是在早上）」，應選用哪個動詞？',
    questionEn: 'Which cognitive verb specifically marks a mistaken assumption?',
    options: [
      { vi: 'Tôi tưởng rằng cuộc họp vào buổi chiều.', zh: 'Tưởng rằng (特指事後證明為錯誤的以為)', isCorrect: true },
      { vi: 'Tôi biết rằng cuộc họp vào buổi chiều.', zh: 'Biết rằng (知道事實)', isCorrect: false }
    ],
    explanationZh: '「Tưởng rằng / Tưởng là」在越語中專門用於「原本誤以為 (但事實並非如此)」；而「Cho rằng」則是深思後的客觀主張。',
    audioText: 'Tôi tưởng rằng hôm nay được nghỉ.'
  },
  {
    id: 'drill_14',
    ruleIndex: 28, // Rule 29
    questionZh: '向客戶預估專案時間「大約需要三週左右」，數字前應放置哪一個概數副詞？',
    questionEn: 'Which approximative marker means "around / approximately"?',
    options: [
      { vi: 'Dự án này cần khoảng ba tuần.', zh: 'Khoảng (大約/約莫)', isCorrect: true },
      { vi: 'Dự án này cần đúng ba tuần.', zh: 'Đúng (恰好/剛好，非概數)', isCorrect: false }
    ],
    explanationZh: '「Khoảng」或「Chừng」置於數字之前表示「大約、約莫」；南越口語常說「Tầm」。',
    audioText: 'Dự án này cần khoảng ba tuần.'
  },
  {
    id: 'drill_15',
    ruleIndex: 29, // Rule 30
    questionZh: '外商到越南投資經商，前輩常勉勵應當「入境隨俗」，對應的四字對仗成語是？',
    questionEn: 'Which 4-syllable Vietnamese idiom translates to "When in Rome, do as the Romans do"?',
    options: [
      { vi: 'Nhập gia tùy tục', zh: 'Nhập gia tùy tục (入境隨俗·2+2對仗)', isCorrect: true },
      { vi: 'Ăn quả nhớ kẻ', zh: '句子殘缺不全', isCorrect: false }
    ],
    explanationZh: '「Nhập gia tùy tục」為漢越成語，結構嚴整對仗，是跨國經商與跨文化溝通的最高頻成語。',
    audioText: 'Đến nơi này thì phải nhập gia tùy tục.'
  }
];

import React, { useState, useEffect } from 'react';
import {
  Layers, Puzzle, CheckCircle, RefreshCw, Volume2, ArrowRight, Sparkles,
  CheckCircle2, XCircle, BookOpen, Award, Check, HelpCircle, Headphones
} from 'lucide-react';
import { grammarRules, interactivePuzzles } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const GrammarModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc, t } = useLanguage();
  
  // Active Tab: 'rules' | 'drills' | 'puzzle'
  const [activeTab, setActiveTab] = useState('rules');

  // Interactive Puzzle State
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [userWords, setUserWords] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [activeKey, setActiveKey] = useState(null);

  // Quick Drills State
  const [drillIndex, setDrillIndex] = useState(0);
  const [selectedDrillOption, setSelectedDrillOption] = useState(null);
  const [drillAnswered, setDrillAnswered] = useState(false);
  const [drillScore, setDrillScore] = useState(0);

  const currentPuzzle = interactivePuzzles[puzzleIndex] || interactivePuzzles[0];
  const currentDrill = GRAMMAR_DRILLS[drillIndex] || GRAMMAR_DRILLS[0];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const playSnapSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {}
  };

  const handleAddWord = (word) => {
    if (!userWords.includes(word)) {
      playSnapSound();
      const newWords = [...userWords, word];
      setUserWords(newWords);

      if (newWords.length === currentPuzzle.correctOrder.length) {
        const isAnswerCorrect = newWords.join(' ') === currentPuzzle.correctOrder.join(' ');
        setIsCorrect(isAnswerCorrect);
        setIsCompleted(true);
        if (isAnswerCorrect) {
          if (updateUserStats) updateUserStats(20);
          audioEngine.speak(newWords.join(' '), { accent: selectedAccent, key: `puzzle_${currentPuzzle.id}` });
        }
      }
    }
  };

  const handleRemoveWord = (word) => {
    setUserWords(userWords.filter(w => w !== word));
    setIsCompleted(false);
    setIsCorrect(null);
  };

  const handleResetPuzzle = () => {
    setUserWords([]);
    setIsCompleted(false);
    setIsCorrect(null);
  };

  const handleNextPuzzle = () => {
    handleResetPuzzle();
    setPuzzleIndex((prev) => (prev + 1) % interactivePuzzles.length);
  };

  const playSpeech = (text, key, rate = 1.0) => {
    audioEngine.speak(text, { accent: selectedAccent, key, rate });
  };

  const handleSelectDrill = (option) => {
    if (drillAnswered) return;
    setSelectedDrillOption(option);
    setDrillAnswered(true);

    if (option.isCorrect) {
      audioEngine.playSuccessChime();
      setDrillScore(s => s + 1);
      if (updateUserStats) updateUserStats({ type: 'ADD_XP', payload: 15 });
      setTimeout(() => {
        playSpeech(currentDrill.audioText, `drill_audio_${currentDrill.id}`);
      }, 400);
    } else {
      audioEngine.playGentleError();
    }
  };

  const handleNextDrill = () => {
    setSelectedDrillOption(null);
    setDrillAnswered(false);
    setDrillIndex(prev => (prev + 1) % GRAMMAR_DRILLS.length);
  };

  return (
    <div className="module-container">
      {/* Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <Layers color="var(--brand-primary)" />
          {learningMode === 'zh' ? '越南語語法體系 · 30大核心法則與實戰微測驗' : 'Vietnamese Grammar System: 30 Core Rules & Interactive Drills'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '由成大 iVPT 語法教授專家審定：掌握 SVO 語序、形容詞後置修飾、被動受益 (bị/được)、漢越構詞、重疊修辭與焦點強調句構。配合隨堂微測驗與拼句練習！'
            : 'Master Vietnamese syntactic architecture: SVO order, modifiers, passive registers, reduplication, and aspect particles.'}
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.8rem', flexWrap: 'wrap' }}>
        {[
          { id: 'rules', labelZh: `📚 30大語法法則全解 (${EXPANDED_GRAMMAR_RULES.length}篇)`, labelEn: `📚 30 Core Rules (${EXPANDED_GRAMMAR_RULES.length})` },
          { id: 'drills', labelZh: `🎯 隨堂實戰快檢 (${GRAMMAR_DRILLS.length}題)`, labelEn: `🎯 Quick Drills (${GRAMMAR_DRILLS.length})` },
          { id: 'puzzle', labelZh: '🧩 拼句積木挑戰', labelEn: '🧩 Sentence Builder' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { audioEngine.playHaptic('selection'); setActiveTab(tab.id); }}
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              border: activeTab === tab.id ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
              background: activeTab === tab.id ? 'var(--bg-accent)' : 'var(--bg-card)',
              color: activeTab === tab.id ? 'var(--brand-primary)' : 'var(--text-secondary)',
              fontWeight: activeTab === tab.id ? 800 : 600,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.15s ease'
            }}
          >
            {learningMode === 'zh' ? tab.labelZh : tab.labelEn}
          </button>
        ))}
      </div>

      {/* TAB 1: 20 Core Rules Grid */}
      {activeTab === 'rules' && (
        <>
          {/* Key Concept Educational Banner */}
          <div className="educational-block" style={{ background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', borderLeft: '4px solid var(--brand-primary)' }}>
            <h3 style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} color="var(--brand-primary)" />
              {learningMode === 'zh' ? '核心思維：越語與中文的兩大決定性差異' : 'Key Concepts: SVO & Post-Nominal Modification'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '0.4rem' }}>
                  1. 形容詞嚴格「後置修飾」
                </h4>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                  中文說「白襯衫、冰咖啡」，越語嚴格反過來「中心名詞在前，形容詞在後」：<code>áo trắng</code> (襯衫 白)、<code>cà phê đá</code> (咖啡 冰)。
                </p>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <h4 style={{ fontWeight: 800, color: 'var(--brand-green)', marginBottom: '0.4rem' }}>
                  2. 動詞不變形，由時態助詞標記
                </h4>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                  動詞永遠維持原型！透過動詞前的助詞表示時間：<code>đã</code> (過去已做)、<code>đang</code> (正在進行)、<code>sẽ</code> (將要發生)。
                </p>
              </div>
            </div>
          </div>

          <div className="grid-cards" style={{ marginBottom: '2.5rem' }}>
            {EXPANDED_GRAMMAR_RULES.map((rule, idx) => {
              const ruleKey = `grammar_rule_${idx}`;
              const slowKey = `grammar_rule_slow_${idx}`;
              const isPlaying = activeKey === ruleKey || activeKey === slowKey;
              return (
                <div key={idx} className={`learning-card ${isPlaying ? 'playing-card' : ''}`}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.15em', fontWeight: 800, color: 'var(--brand-accent)', margin: 0 }}>
                      {learningMode === 'zh' ? rule.titleZh : rule.titleEn}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.92em', color: 'var(--text-secondary)', marginBottom: '0.8rem', lineHeight: 1.55 }}>
                    {learningMode === 'zh' ? rule.descriptionZh : rule.descriptionEn}
                  </p>

                  <div style={{
                    background: 'var(--bg-accent)',
                    padding: '0.75rem 0.95rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    marginTop: 'auto'
                  }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '0.3rem' }}>
                      {rule.exampleVi}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                      {learningMode === 'zh' ? rule.exampleZh : rule.exampleEn}
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                      <button
                        className={`speaker-btn mini-btn ${activeKey === ruleKey ? 'playing' : ''}`}
                        onClick={() => playSpeech(rule.exampleVi, ruleKey, 1.0)}
                        title="標準發音 (1.0x)"
                      >
                        <Volume2 size={14} /> 1.0x
                      </button>
                      <button
                        className={`speaker-btn mini-btn ${activeKey === slowKey ? 'playing' : ''}`}
                        onClick={() => playSpeech(rule.exampleVi, slowKey, 0.72)}
                        title="慢速精聽 (0.75x)"
                        style={{ color: 'var(--brand-gold)' }}
                      >
                        <Headphones size={13} /> 0.75x
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* TAB 2: Quick Drills */}
      {activeTab === 'drills' && (
        <div style={{
          maxWidth: '680px',
          margin: '0 auto 2.5rem',
          background: 'var(--bg-card)',
          border: '1.5px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          boxShadow: 'var(--card-shadow)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase' }}>
              🎯 語法快檢第 {drillIndex + 1} / {GRAMMAR_DRILLS.length} 題
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--brand-gold)' }}>
              得分：{drillScore} 分
            </span>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            {learningMode === 'zh' ? currentDrill.questionZh : currentDrill.questionEn}
          </h3>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
            {currentDrill.options.map((opt, oIdx) => {
              const isSelected = selectedDrillOption === opt;
              let btnBg = 'var(--bg-main)';
              let btnBorder = 'var(--border-color)';
              let btnColor = 'var(--text-primary)';

              if (drillAnswered) {
                if (opt.isCorrect) {
                  btnBg = 'rgba(16, 185, 129, 0.15)';
                  btnBorder = 'var(--brand-green)';
                  btnColor = '#065f46';
                } else if (isSelected && !opt.isCorrect) {
                  btnBg = 'rgba(239, 68, 68, 0.15)';
                  btnBorder = '#ef4444';
                  btnColor = '#991b1b';
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectDrill(opt)}
                  disabled={drillAnswered}
                  style={{
                    padding: '1.1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: `2px solid ${btnBorder}`,
                    background: btnBg,
                    color: btnColor,
                    textAlign: 'left',
                    cursor: drillAnswered ? 'default' : 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800 }}>{opt.vi}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{opt.zh}</div>
                  </div>
                  {drillAnswered && opt.isCorrect && (
                    <CheckCircle2 size={22} color="var(--brand-green)" />
                  )}
                  {drillAnswered && isSelected && !opt.isCorrect && (
                    <XCircle size={22} color="#ef4444" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Drill Explanation Banner */}
          {drillAnswered && (
            <div style={{
              background: selectedDrillOption?.isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.08)',
              border: `1.5px solid ${selectedDrillOption?.isCorrect ? 'var(--brand-green)' : '#fca5a5'}`,
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 900, fontSize: '1.05rem', color: selectedDrillOption?.isCorrect ? 'var(--brand-green)' : '#b91c1c', marginBottom: '0.4rem' }}>
                {selectedDrillOption?.isCorrect ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                <span>{selectedDrillOption?.isCorrect ? '回答正確！(+15 XP)' : '回答有誤，解析如下：'}</span>
              </div>
              <p style={{ margin: '0 0 0.8rem', fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? currentDrill.explanationZh : currentDrill.explanationZh}
              </p>

              <button
                onClick={() => playSpeech(currentDrill.audioText, `drill_banner_${currentDrill.id}`)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: 'var(--brand-primary)'
                }}
              >
                <Volume2 size={15} /> 聆聽正確例句發音
              </button>
            </div>
          )}

          {drillAnswered && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                className="primary-action"
                onClick={handleNextDrill}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.75rem 1.6rem', fontSize: '1rem', fontWeight: 800 }}
              >
                <span>下一題</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: Sentence Builder Puzzle */}
      {activeTab === 'puzzle' && (
        <div className="simulator-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <h3 style={{ fontSize: '1.25em', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Puzzle color="var(--brand-gold)" />
              {learningMode === 'zh' ? '語法拼句挑戰 (Sentence Builder)' : 'Sentence Builder Challenge'}
            </h3>
            <span style={{ fontSize: '0.85em', fontWeight: 800, color: 'var(--brand-accent)' }}>
              {puzzleIndex + 1} / {interactivePuzzles.length}
            </span>
          </div>

          <div style={{ background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '0.85em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
              🎯 {learningMode === 'zh' ? '目標翻譯句子：' : 'Target Meaning:'}
            </div>
            <div style={{ fontSize: '1.3em', fontWeight: 900, color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? currentPuzzle.targetZh : currentPuzzle.targetEn}
            </div>
          </div>

          {/* User Constructed Sentence Drop Zone */}
          <div 
            className={isCompleted ? (isCorrect ? 'glow-success' : 'shake-error') : ''}
            style={{ minHeight: '70px', padding: '1rem', background: 'var(--bg-card)', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            {userWords.length === 0 ? (
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>
                {learningMode === 'zh' ? '👇 點擊下方單字積木，依正確越語語序排列句子...' : '👇 Click word blocks below to construct the sentence in correct order...'}
              </span>
            ) : (
              userWords.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRemoveWord(word)}
                  style={{
                    padding: '0.55rem 1rem',
                    background: 'var(--brand-primary)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  title="點擊移除此單字"
                >
                  {word} ✕
                </button>
              ))
            )}
          </div>

          {/* Word Blocks Selection Deck */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
            {currentPuzzle.scrambled.map((word, idx) => {
              const isUsed = userWords.includes(word);
              return (
                <button
                  key={idx}
                  onClick={() => handleAddWord(word)}
                  disabled={isUsed}
                  style={{
                    padding: '0.65rem 1.1rem',
                    background: isUsed ? 'var(--border-color)' : 'var(--bg-card)',
                    color: isUsed ? 'var(--text-muted)' : 'var(--text-primary)',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: isUsed ? 'not-allowed' : 'pointer',
                    opacity: isUsed ? 0.4 : 1,
                    transition: 'all 0.15s ease'
                  }}
                >
                  {word}
                </button>
              );
            })}
          </div>

          {/* Evaluation Banner */}
          {isCompleted && (
            <div style={{ background: isCorrect ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)', border: `1.5px solid ${isCorrect ? 'var(--brand-green)' : 'var(--brand-primary)'}`, padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {isCorrect ? <CheckCircle2 size={22} color="var(--brand-green)" /> : <XCircle size={22} color="var(--brand-primary)" />}
                <span style={{ fontWeight: 800, fontSize: '1em', color: isCorrect ? 'var(--brand-green)' : 'var(--brand-primary)' }}>
                  {isCorrect 
                    ? (learningMode === 'zh' ? '🎉 拼句完全正確！(+20 XP)' : '🎉 Correct Sentence! (+20 XP)') 
                    : (learningMode === 'zh' ? '語序有誤，請重試或參考文法規則。' : 'Incorrect order, please retry.')}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                {isCorrect && (
                  <button 
                    className="control-btn" 
                    onClick={() => playSpeech(currentPuzzle.correctOrder.join(' '), `puzzle_${currentPuzzle.id}`)}
                    title={learningMode === 'zh' ? '聆聽完整句子發音' : 'Listen to sentence'}
                    style={{ background: 'var(--brand-green)', color: '#fff', border: 'none' }}
                  >
                    <Volume2 size={15} />
                    <span>{learningMode === 'zh' ? '朗讀整句' : 'Listen'}</span>
                  </button>
                )}
                <button className="control-btn" onClick={handleResetPuzzle}>
                  <RefreshCw size={15} />
                  <span>{learningMode === 'zh' ? '重試' : 'Retry'}</span>
                </button>
                {isCorrect && (
                  <button className="control-btn" style={{ background: 'var(--brand-accent)', color: '#fff' }} onClick={handleNextPuzzle}>
                    <span>{learningMode === 'zh' ? '下一題' : 'Next'}</span>
                    <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
