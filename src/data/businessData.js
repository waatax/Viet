/**
 * businessData.js
 * Comprehensive Business Travel, Expatriate Management & High-Stakes Negotiation Dataset.
 * Fully grounded for real-world Business Trips to Hanoi (Hà Nội), Ho Chi Minh City (TP.HCM),
 * and major industrial satellite hubs (Bình Dương, Đồng Nai, Bắc Ninh, Hải Phòng).
 * Includes Trade Shows (SECC/ICE/WTC), Business Acquaintance, Zalo Networking, and In-depth Negotiations.
 */

export const businessCategories = [
  { id: 'all', labelZh: '全部商務模組', labelEn: 'All Business Modules', icon: '💼' },
  { id: 'expo', labelZh: '🎪 商展參展與拓銷', labelEn: '🎪 Trade Shows & Expos', icon: '🎪' },
  { id: 'dualcity', labelZh: '🏙️ 河內 vs 胡志明雙城', labelEn: '🏙️ Hanoi vs HCMC Dual-City', icon: '🏙️' },
  { id: 'networking', labelZh: '🤝 生意認識與 Zalo 社交', labelEn: '🤝 Networking & Zalo', icon: '🤝' },
  { id: 'docsim', labelZh: '📜 實戰商務合約與單據', labelEn: '📜 Contracts & Documents', icon: '📜' },
  { id: 'negotiation', labelZh: '🏢 商業談判競技場', labelEn: '🏢 Negotiation Arena', icon: '🏢' },
  { id: 'bizexam', labelZh: '🎓 越語商務能力認證測驗', labelEn: '🎓 Business Exam (iVPT)', icon: '🎓' },
  { id: 'travel', labelZh: '✈️ 出差生存與紅發票', labelEn: '✈️ Travel & VAT Invoice', icon: '✈️' },
  { id: 'factory', labelZh: '🏭 智慧廠區與產線', labelEn: '🏭 Smart Factory & Line', icon: '🏭' },
  { id: 'nhau', labelZh: '🍻 酒桌應酬與社交', labelEn: '🍻 Nhậu & Banquet Etiquette', icon: '🍻' },
  { id: 'currency', labelZh: '⚡ 百萬貨幣極速盲測', labelEn: '⚡ Currency & Slang Blitz', icon: '⚡' }
];

// ==========================================================================
// 1. TRADE SHOWS & EXHIBITIONS (SECC / ICE / WTC)
// ==========================================================================
export const tradeShowGuide = {
  titleZh: '🎪 越南大型商展參展、攤位拓銷與買家接待實戰指南',
  titleEn: '🎪 Trade Shows, Booth Management & Buyer Lead Generation in Vietnam',
  expoVenues: [
    {
      nameVi: 'Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC)',
      nameZh: '胡志明市西貢會展中心 (SECC · 7區富美興)',
      nameEn: 'Saigon Exhibition and Convention Center (SECC, District 7, HCMC)',
      descZh: '全越南最頂級、規模最大的國際展館。常年舉辦 VietnamPlas (橡塑膠展)、Food & Hotel Vietnam (食品餐旅展)、VietBuild (建材展)、SaigonTex (紡織成衣展)、VIMF (工業製造展)。',
      addressVi: '799 Nguyễn Văn Linh, P. Tân Phú, Quận 7, TP. Hồ Chí Minh'
    },
    {
      nameVi: 'Cung Văn hóa Hữu nghị Việt - Xô (ICE Hanoi)',
      nameZh: '河內國際展覽中心 (ICE Hanoi · 還劍區)',
      nameEn: 'International Center for Exhibition (ICE Hanoi, Hoàn Kiếm, Hanoi)',
      descZh: '北越核心展館，緊鄰河內市中心與政府機關。舉辦 Vietnam Expo (綜合國際貿易展)、NEPCON Vietnam (電子製造展)、Vietnam Medipharm (醫療醫藥展)。',
      addressVi: '91 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội'
    },
    {
      nameVi: 'Trung tâm Triển lãm Quốc tế WTC Expo Bình Dương',
      nameZh: '平陽世界貿易中心會展中心 (WTC Expo Bình Dương)',
      nameEn: 'WTC Expo Binh Duong (Binh Duong New City)',
      descZh: '直通平陽、同奈數千家台商外資工廠的現代化新展館，主打工業自動化、智慧物流與機床模具展。',
      addressVi: 'A19 Hùng Vương, P. Hòa Phú, TP. Thủ Dầu Một, Bình Dương'
    }
  ],
  stages: [
    {
      id: 'booth_setup',
      stageNameVi: 'Dựng gian hàng & Chuẩn bị hậu cần',
      stageNameZh: '1. 佈展進場與後勤設置 (Dựng gian hàng & Chuẩn bị)',
      stageNameEn: '1. Booth Setup & Logistics',
      icon: '🔨',
      tipsZh: '在展會前一天進場（Ngày chuẩn bị），務必確認電源插座（Ổ cắm điện）、照明燈光、海報背板（Backdrop）、樣品展架（Kệ trưng bày）以及領取參展商工作胸卡（Thẻ đeo ban tổ chức）。',
      phrases: [
        {
          viet: 'Cho tôi hỏi ban tổ chức triển lãm: Vị trí gian hàng A12 của chúng tôi ở khu vực nào?',
          zh: '請問展覽主辦方：我們 A12 號攤位在展館的哪一個區域？',
          en: 'May I ask the organizers: Where is our booth A12 located?',
          hintZh: '進場向主辦單位服務台（Ban tổ chức）詢問攤位動線。'
        },
        {
          viet: 'Gian hàng chúng tôi cần đăng ký thêm 2 ổ cắm điện 220V và 1 bàn tiếp khách.',
          zh: '我們攤位需要額外加租 2 個 220V 電源插座和 1 張洽談接待桌。',
          en: 'Our booth needs 2 extra 220V power sockets and 1 meeting table.',
          hintZh: '向展會租賃商要求追加家具與水電設備。'
        },
        {
          viet: 'Thùng hàng mẫu gửi từ Đài Loan đã được vận chuyển đến gian hàng chưa ạ?',
          zh: '從台灣寄過來的樣品展箱已經運送到攤位上了嗎？',
          en: 'Has our sample shipment from Taiwan arrived at our booth yet?',
          hintZh: '向大會指定貨代物流確認樣品清關與進館狀況。'
        },
        {
          viet: 'Cho tôi xin 4 thẻ đeo dành cho đơn vị triển lãm (Exhibitor Badge).',
          zh: '請給我 4 張參展商專用工作證（胸卡）。',
          en: 'Please give me 4 exhibitor badges.',
          hintZh: '展期進出管制通道必須配戴。'
        }
      ]
    },
    {
      id: 'greeting_leads',
      stageNameVi: 'Đón tiếp khách tham quan & Thu thập Lead',
      stageNameZh: '2. 攤位熱情迎賓與線索獲取 (Đón tiếp & Thu thập Lead)',
      stageNameEn: '2. Greeting Visitors & Lead Capture',
      icon: '🤝',
      tipsZh: '展覽會場人潮眾多，主動站立迎賓、雙手遞上型錄（Catalogue）與名片，並在 30 秒內詢問對方公司背景以篩選有效買家（Qualified Leads）。',
      phrases: [
        {
          viet: 'Dạ xin chào anh/chị! Chào mừng anh/chị ghé thăm gian hàng của công ty chúng tôi.',
          zh: '您好！歡迎光臨參觀我們公司的展位！',
          en: 'Hello! Welcome to visit our company booth.',
          hintZh: '展位迎賓第一句熱情破冰語。'
        },
        {
          viet: 'Em xin gửi anh/chị cuốn catalogue giới thiệu các dòng sản phẩm mới nhất của bên em ạ.',
          zh: '送您一本我們公司最新產品系列的型錄介紹喔。',
          en: 'Here is our latest product catalogue for you.',
          hintZh: '雙手遞送型錄宣傳冊。'
        },
        {
          viet: 'Dạ, em xin phép được trao đổi danh thiếp với anh/chị được không ạ?',
          zh: '請問可以和您交換一張名片嗎？',
          en: 'May I exchange business cards with you?',
          hintZh: '獲取買家聯絡資訊的核心句。'
        },
        {
          viet: 'Không biết công ty anh/chị đang quan tâm đến dòng sản phẩm hoặc giải pháp nào bên em?',
          zh: '不知道貴公司目前正在尋找或感興趣我們哪一項產品/解決方案呢？',
          en: 'Which product line or solution is your company currently interested in?',
          hintZh: '快速切入買家需求與採購痛點。'
        }
      ]
    },
    {
      id: 'demo_pitch',
      stageNameVi: 'Thuyết trình sản phẩm & Năng lực OEM',
      stageNameZh: '3. 產品解說、技術參數與 OEM 能力 (Thuyết trình & OEM/ODM)',
      stageNameEn: '3. Product Demo & OEM Capabilities',
      icon: '⚙️',
      tipsZh: '突出台灣技術優勢、生產交期、品質認證與客製化 OEM/ODM 能力，建立專業信任度。',
      phrases: [
        {
          viet: 'Sản phẩm này được sản xuất theo tiêu chuẩn chất lượng ISO 9001 và đạt chứng nhận CE/RoHS.',
          zh: '這項產品是按照 ISO 9001 品質標準生產，並取得 CE/RoHS 國際認證。',
          en: 'This product is manufactured under ISO 9001 and certified with CE/RoHS.',
          hintZh: '向大廠買家展示合規認證。'
        },
        {
          viet: 'Công ty chúng tôi có nhà máy riêng, có thể nhận gia công OEM và thiết kế ODM theo yêu cầu.',
          zh: '我們公司擁有自有工廠，可依照客戶要求承接 OEM 代工與 ODM 客製化設計。',
          en: 'We have our own factory and can handle OEM processing and ODM custom designs.',
          hintZh: '展現客製代工生產彈性。'
        },
        {
          viet: 'Thời gian bảo hành của thiết bị là 2 năm, bên em có đội ngũ kỹ thuật hỗ trợ trực tiếp tại Việt Nam.',
          zh: '設備保固期為 2 年，我們在越南當地設有技術團隊提供即時售後支援。',
          en: 'The warranty period is 2 years, with local technical support in Vietnam.',
          hintZh: '消除買家對售後服務的顧慮。'
        },
        {
          viet: 'Số lượng đặt hàng tối thiểu (MOQ) cho đơn hàng đầu tiên là bao nhiêu cái ạ?',
          zh: '首批試產訂單的最低起訂量 (MOQ) 是多少呢？',
          en: 'What is the Minimum Order Quantity (MOQ) for the trial order?',
          hintZh: '採購與議價的關鍵參數。'
        }
      ]
    },
    {
      id: 'follow_up',
      stageNameVi: 'Theo dõi sau triển lãm & Hẹn gặp Zalo',
      stageNameZh: '4. 會後跟進、Zalo 聯繫與預約拜訪 (Follow-up & Hẹn gặp)',
      stageNameEn: '4. Post-Show Follow-up & Office Visit',
      icon: '📲',
      tipsZh: '商展結束當天晚上 2 小時內是加 Zalo 與發送報價單的黃金時間。隔天或下週可安排實地拜訪工廠。',
      phrases: [
        {
          viet: 'Anh/chị cho em xin số Zalo để tối nay em gửi bảng báo giá chi tiết và video sản phẩm nhé!',
          zh: '請給我您的 Zalo 號碼，今晚我立刻把詳細報價單和產品操作影片傳給您！',
          en: 'Please share your Zalo number so I can send the detailed quotation and product video tonight!',
          hintZh: '在越南最有效、最不可或缺的商務聯絡管道。'
        },
        {
          viet: 'Sau khi kết thúc triển lãm vào thứ Sáu, em rất mong được mời anh ghé thăm văn phòng/nhà xưởng của bên em.',
          zh: '週五展覽結束後，非常期待能邀請您到我們辦公室/工廠參觀指導。',
          en: 'After the exhibition ends on Friday, we would love to invite you to visit our facility.',
          hintZh: '深化商務信任的工廠拜訪邀約。'
        },
        {
          viet: 'Cảm ơn anh/chị đã dành thời gian quý báu ghé thăm gian hàng. Chúc quý công ty ngày càng phát triển!',
          zh: '非常感謝您撥冗蒞臨我們攤位，祝貴公司業務蒸蒸日上！',
          en: 'Thank you for your valuable time visiting our booth. Wishing your business thriving growth!',
          hintZh: '得體優雅的送客道謝語。'
        }
      ]
    }
  ]
};

// ==========================================================================
// 2. DUAL-CITY BUSINESS TRIP: HANOI vs HO CHI MINH CITY
// ==========================================================================
export const dualCityBusinessGuide = {
  titleZh: '🏙️ 河內 (Hà Nội) vs 胡志明市 (TP.HCM) 雙城商務生存與交涉實戰對照',
  titleEn: '🏙️ Hanoi vs Ho Chi Minh City: Dual-City Business Dynamics & Culture',
  cities: [
    {
      id: 'hanoi',
      cityNameVi: 'Thủ đô Hà Nội (Miền Bắc)',
      cityNameZh: '河內市 (北越 · 政治行政與重工中樞)',
      cityNameEn: 'Hanoi (Northern Vietnam · Political & Capital Hub)',
      tagColor: '#dc2626',
      icon: '🏛️',
      summaryZh: '千年文化古都，步調穩健嚴謹。做生意講求「先做朋友、再做生意」、層級分明、重視背景與公部門規範。',
      summaryEn: 'Historic capital, formal, relationship-driven, high respect for hierarchy and government protocols.',
      airportZh: 'Sân bay Quốc tế Nội Bài (內排國際機場) · 距市區約 40-50 分鐘車程 (經 Nhật Tân 大橋)。',
      industrialCorridorsZh: '通往北寧 (Bắc Ninh 三星聚落)、海防 (Hải Phòng 深水港)、興安 (Hưng Yên)、永福 (Vĩnh Phúc 汽機車製造)。',
      businessCulture: [
        { labelZh: '茶道破冰 (Uống trà đàm đạo)', descZh: '進會議室或拜訪長官，對方一定先奉上熱綠茶（Trà đá / Trà nóng）。不可急著翻開合約，需先品茗閒聊 10-15 分鐘建立熱絡氣氛。' },
        { labelZh: '尊稱與官銜 (Xưng hô cấp bậc)', descZh: '稱呼主管長官需加上職銜，如「Anh Tổng Giám Đốc (總經理)」、「Anh Trưởng phòng (處長/經理)」，並頻繁使用禮貌尾助詞「ạ」。' },
        { labelZh: '委婉含蓄 (Nói khéo)', descZh: '北方人不習慣當面直接說「Không (不行/不要)」，常以「Để bên em xem xét lại (讓我們先研究看看)」或「Để xin ý kiến cấp trên (需向長官請示)」委婉示意。' },
        { labelZh: '正式宴請 (Tiệc ngoại giao)', descZh: '老城區（Hoàn Kiếm, Ba Đình, Tây Hồ）商務宴請重視座次，主賓坐主位，常以糯米酒、傳統特色菜接待。' }
      ],
      mustKnowPhrases: [
        { viet: 'Dạ, em chào Anh Tổng Giám Đốc ạ! Hôm nay thời tiết Hà Nội rất đẹp.', zh: '您好總經理！今天河內天氣非常好。', en: 'Good morning General Director! Hanoi weather is lovely today.' },
        { viet: 'Dạ mời anh dùng chén trà nóng của quê em ạ.', zh: '請您喝杯熱茶。', en: 'Please enjoy a cup of warm tea.' },
        { viet: 'Bên em rất mong được hợp tác lâu dài và học hỏi kinh nghiệm từ quý tập đoàn.', zh: '我們非常期待能長期合作，並向貴集團多多學習寶貴經驗。', en: 'We look forward to long-term cooperation and learning from your group.' }
      ]
    },
    {
      id: 'hcmc',
      cityNameVi: 'TP. Hồ Chí Minh / Sài Gòn (Miền Nam)',
      cityNameZh: '胡志明市 (南越 · 商業金融與創新之都)',
      cityNameEn: 'Ho Chi Minh City / Saigon (Southern Vietnam · Commercial & Financial Engine)',
      tagColor: '#2563eb',
      icon: '🌆',
      summaryZh: '經濟火車頭，商業節奏飛快、開放務實。重視商業利益、利潤分成、快速執行與雙贏（Win-Win）。',
      summaryEn: 'Dynamic financial hub, fast-paced, pragmatic, open-minded, high focus on ROI and deal speed.',
      airportZh: 'Sân bay Quốc tế Tân Sơn Nhất (新山一機場) · 緊鄰市中心 (第1郡/第3郡約 20-30 分鐘，塞車需預留 1 小時)。',
      industrialCorridorsZh: '通往平陽 (Bình Dương VSIP/Mỹ Phước 台商大本營)、同奈 (Đồng Nai Amata/Biên Hòa)、隆安 (Long An 輕工食品)。',
      businessCulture: [
        { labelZh: '咖啡廳商務 (Cà phê công việc)', descZh: '第1郡、第3郡或第2郡（Thảo Điền）隨處可見在 Highlands Coffee、Phúc Long 或精品咖啡館開會談生意，隨性且高效。' },
        { labelZh: '直接務實 (Thực tế & Nhanh gọn)', descZh: '開門見山談核心：單價、利潤趴數、交期、付款條件（T/T, L/C）。決策迅速，討厭冗長繁文縟節。' },
        { labelZh: '豪爽酒桌應酬 (Văn hóa Nhậu)', descZh: '下班後海鮮熱炒攤（Quán ốc, Quán nhậu）是拉近關係的最佳戰場，「1, 2, 3, Dô!」一喊，很多合約細節當場敲定。' },
        { labelZh: '彈性合作 (Linh hoạt)', descZh: '對客製化需求、首批試產數量調整接受度高，重視現金流（Dòng tiền）與快速周轉。' }
      ],
      mustKnowPhrases: [
        { viet: 'Chào anh! Anh em mình hẹn gặp ở quán cà phê quận 1 bàn công việc cho tiện nhé.', zh: '你好哥！我們約在第一郡的咖啡館談事情比較方便喔。', en: 'Hello! Let us meet at a cafe in District 1 to discuss business efficiently.' },
        { viet: 'Bên anh có thể chốt giá tốt nhất và tiến độ giao hàng trong bao nhiêu ngày?', zh: '貴方能敲定的最優惠價格是多少？交期大約需要幾天？', en: 'What is your best finalized price, and lead time in days?' },
        { viet: 'Tối nay xong việc em mời anh đi làm vài ly bia Sài Gòn nói chuyện nhé!', zh: '今晚忙完我請哥去喝幾杯西貢啤酒放鬆聊聊喔！', en: 'After work tonight, let me treat you to a few Saigon beers!' }
      ]
    }
  ]
};

// ==========================================================================
// 3. BUSINESS NETWORKING & ZALO SOCIAL ECOSYSTEM
// ==========================================================================
export const zaloNetworkingGuide = {
  titleZh: '🤝 生意認識、名片交換與 Zalo 社交生態實戰模板',
  titleEn: '🤝 Professional Business Acquaintance & Zalo Communication Playbook',
  introZh: '在越南商務體系中，Zalo 是 100% 普及的即時商務通訊軟體。無論是傳送型錄、詢價比價、發送合約草案或售後技術支援，Zalo 都是唯一指定工具。',
  introEn: 'Zalo is the undisputed #1 business messaging app in Vietnam for quotations, contracts, and daily client communication.',
  templates: [
    {
      id: 'add_zalo_phrase',
      titleZh: '1. 初次見面加 Zalo 話術 (現場口語)',
      titleEn: '1. Adding Zalo On-the-Spot',
      viet: 'Anh/chị cho em xin số điện thoại có Zalo hoặc quét mã QR để em gửi thông tin nhé!',
      zh: '請給我您綁定 Zalo 的手機號碼或掃描 QR Code，我馬上把資料傳給您！',
      en: 'Please share your Zalo phone number or scan my QR code so I can send the information!'
    },
    {
      id: 'same_day_followup',
      titleZh: '2. 展會/會議當晚黃金跟進訊息模板 (Zalo 傳訊)',
      titleEn: '2. Same-Day Post-Meeting Follow-up (Zalo Template)',
      viet: 'Dạ em chào anh [Tên Đối Tác] ạ! Em là [Tên Bạn] đến từ công ty [Tên Công Ty Bạn]. Hôm nay rất vui và vinh hạnh được gặp gỡ, trao đổi với anh tại [Địa Điểm/Triển Lãm]. Như đã hẹn, em xin gửi anh file catalogue và bảng báo giá sơ bộ đính kèm. Anh xem qua giúp em nhé, nếu cần hỗ trợ thêm thông tin gì anh cứ nhắn em ạ!',
      zh: '您好 [對方姓名] 哥！我是來自 [您公司名稱] 的 [您的名字]。今天非常高興且榮幸能在 [展覽/會議地點] 與您交流。按照約定，我附上型錄與初步報價單檔案給您參考。您看過後有任何需要進一步了解的地方，隨時傳訊息給我喔！',
      en: 'Dear [Name]! I am [Your Name] from [Company]. It was a great pleasure meeting you today at [Venue]. As discussed, attached please find our catalogue and preliminary quotation. Feel free to message me anytime for further details!'
    },
    {
      id: 'factory_invite_msg',
      titleZh: '3. 預約拜訪工廠/辦公室訊息模板 (Zalo / Email)',
      titleEn: '3. Factory / Office Visit Invitation Template',
      viet: 'Kính gửi anh [Tên Đối Tác], tuần tới đoàn chuyên gia kỹ thuật bên em từ Đài Loan sẽ có mặt tại nhà xưởng [Tên KCN, Tỉnh]. Trân trọng kính mời anh ghé thăm nhà xưởng vào lúc [Giờ], ngày [Ngày] để cùng thảo luận chi tiết về kế hoạch hợp tác sản xuất. Rất mong được đón tiếp anh!',
      zh: '尊敬的 [對方姓名] 哥：下週我們台灣總部的技術專家團隊將進駐 [工業區名稱, 省份] 廠區。誠摯邀請您於 [日期] [時間] 蒞臨廠房參觀，共同深入商討合作代工生產計畫。非常期待您的到訪！',
      en: 'Dear [Name], our technical team from Taiwan headquarters will be at our [Industrial Park] facility next week. We cordially invite you to visit us on [Date] at [Time] to discuss our manufacturing cooperation. Looking forward to welcoming you!'
    }
  ]
};

// ==========================================================================
// 4. EXTENDED INTERACTIVE NEGOTIATION ARENA BATTLES (7 COMPLETE BATTLES)
// ==========================================================================
export const interactiveNegotiations = [
  {
    id: 'trade_show_lead_battle',
    titleZh: '🥊 決戰 1：SECC 商展現場樣品與起訂量交涉 (Trade Show Sample & MOQ)',
    titleEn: '🥊 Battle 1: Trade Show Sample & MOQ Negotiation',
    partnerName: 'Anh Hoàng Nam',
    partnerRole: 'Giám đốc Mua hàng Doanh nghiệp (大型企業採購總監)',
    scenarioContextZh: '在胡志明市 SECC 展覽攤位上，這位採購總監對你的最新智能硬體樣品非常有興趣，想當場買走唯一的展示樣品，並要求首批試產數量由 1,000 件降到 100 件，同時保留大單折扣價。',
    scenarioContextEn: 'At SECC Expo, the Procurement Director wants to buy the display sample on the spot and reduce trial MOQ from 1,000 to 100 units at bulk discount.',
    initialTrust: 65,
    steps: [
      {
        step: 1,
        partnerSpeech: 'Sản phẩm này bên bạn thiết kế rất đẹp! Tôi muốn mua lại luôn cái mẫu trưng bày này để về test thử, và đơn hàng đầu tiên bên tôi chỉ đặt 100 cái với giá sỉ được không?',
        partnerSpeechZh: '你們這個產品設計得很漂亮！我想直接買走這個展位樣品回去測試，而且我們第一批只訂 100 個，可以用大宗批發價算給我們嗎？',
        partnerSpeechEn: 'Great design! Can I buy this display sample immediately for testing, and place our first order for only 100 units at wholesale price?',
        options: [
          {
            id: 'expo_opt1_refuse',
            viet: 'Không được đâu anh, hàng mẫu chúng tôi phải để trưng bày cho khách khác xem suốt 4 ngày triển lãm! Còn 100 cái thì giá phải tăng 30%.',
            zh: '不行喔，這樣品要放著給其他客人看 4 天！而且才 100 個的話價格必須調高 30%。',
            en: 'No way, we need this sample on display for 4 days! And for 100 units price goes up 30%.',
            trustDelta: -25,
            partnerResponse: 'Anh trả lời khách hàng cứng nhắc thế này thì tôi sang gian hàng đối thủ mua vậy!',
            feedbackZh: '❌ 態度生硬且缺乏彈性，直接將潛在優質買家推給隔壁競品攤位！',
            feedbackEn: 'Too blunt. Rejected the buyer directly and lost a high-value lead to competitors.'
          },
          {
            id: 'expo_opt1_smart',
            viet: 'Dạ cảm ơn anh Nam đã đánh giá cao! Mẫu này bên em cần trưng bày đến hết ngày mai. Em xin phép gửi tặng anh bộ kit mẫu hoàn chỉnh vào chiều bế mạc, hoặc em sẽ ship chuyển phát nhanh đến văn phòng anh vào thứ Hai. Về 100 cái đầu tiên, bên em hỗ trợ giá ưu đãi đặc biệt để hai bên cùng test thị trường!',
            zh: '非常感謝南總的肯定！這個樣品需要展示到明天閉幕。我會在最後一天下午直接將整套完整樣品組贈送給您，或週一快遞到您辦公室。至於首批 100 件，我們願意提供特別試產優惠價，協助雙方快速驗證市場！',
            en: 'Thank you for the appreciation! We need this sample until tomorrow, but I will gift you a complete sample kit at closing or courier it to your office Monday. For the 100 units, we will offer a special trial rate to test the market together!',
            trustDelta: +30,
            partnerResponse: 'Cách xử lý của em rất chuyên nghiệp và thấu đáo! Cho anh xin số Zalo để tối nay anh em mình chốt chi tiết nhé!',
            feedbackZh: '🎉 滿分公關應對！既維護了展位展示需求，又給足買家尊榮感與樣品承諾，順利互加 Zalo 鎖定大單！',
            feedbackEn: 'Masterful sales EQ! Preserved booth display while delighting the client with complimentary delivery and trial terms.'
          }
        ]
      }
    ]
  },
  {
    id: 'hanoi_corporate_meeting_battle',
    titleZh: '🥊 決戰 2：河內大型集團正式商務會談與 MOU 簽署 (Hanoi Formal Protocol)',
    titleEn: '🥊 Battle 2: Hanoi Formal Corporate Protocol & MOU',
    partnerName: 'Bác Phạm Văn Thành',
    partnerRole: 'Phó Tổng Giám Đốc Tập đoàn (集團副總經理 · 河內)',
    scenarioContextZh: '在河內還劍區集團總部會議室，與資深副總經理（Bác Thành）進行正式合作會談。北方商務注重敬語、企業誠信與循序漸進的備忘錄 (MOU) 流程。',
    scenarioContextEn: 'Formal meeting at Hanoi HQ with Senior VP. Navigate traditional Northern etiquette and MOU negotiation.',
    initialTrust: 70,
    steps: [
      {
        step: 1,
        partnerSpeech: 'Chào các bạn doanh nghiệp Đài Loan. Tập đoàn chúng tôi rất quan tâm đến năng lực công nghệ của bên bạn, nhưng ban giám đốc cần sự cam kết chắc chắn về chuyển giao kỹ thuật và tính pháp lý tại Việt Nam.',
        partnerSpeechZh: '歡迎台灣企業代表團。我們集團對貴方的技術實力很感興趣，但董事會需要貴公司在技術轉移與越南在地合法合規上的堅定承諾。',
        partnerSpeechEn: 'Welcome Taiwanese delegation. We appreciate your tech capabilities, but our board requires firm commitment on tech transfer and legal compliance in Vietnam.',
        options: [
          {
            id: 'hn_opt1_respectful',
            viet: 'Dạ, kính thưa Bác Thành và quý ban lãnh đạo tập đoàn. Công ty chúng tôi đã hoạt động hơn 20 năm tại châu Á và luôn tuân thủ nghiêm ngặt pháp luật Việt Nam. Chúng tôi sẵn sàng ký kết Thỏa thuận Hợp tác (MOU) và cử chuyên gia Đài Loan sang đào tạo chuyển giao công nghệ cho đội ngũ của bác.',
            zh: '尊敬的成副總與集團各位長官：我們公司在亞洲深耕 20 餘年，向來嚴格恪守越南法規。我們非常樂意簽署合作備忘錄 (MOU)，並派遣台灣資深專家團隊常駐越南，為長官的團隊進行全套技術移轉與培訓。',
            en: 'Dear Senior VP Thanh and leadership: With 20+ years of track record, we strictly adhere to Vietnamese law. We are ready to sign an MOU and dispatch Taiwanese experts to train your engineering team.',
            trustDelta: +30,
            partnerResponse: 'Rất tốt! Tác phong của các bạn rất chững chạc và đáng tin cậy. Chúng ta sẽ tiến hành ký kết MOU ngay trong tuần này!',
            feedbackZh: '🏆 完美展現河內商務高規格禮儀！運用「Kính thưa (尊敬的)」、「Bác (尊稱長輩長官)」與具體的技術移轉承諾，贏得國企高層信賴！',
            feedbackEn: 'Exemplary Northern etiquette! Used respectful honorifics and concrete compliance commitments to win board approval.'
          },
          {
            id: 'hn_opt1_casual',
            viet: 'Bác cứ yên tâm, ký hợp đồng thương mại luôn đi, bên cháu lo hết mấy cái giấy tờ pháp lý này nhanh lắm.',
            zh: '長官放心啦，直接簽正式商業合約吧，我們處理這些法律文件很快的。',
            en: 'Don\'t worry, let\'s sign the full commercial contract right now, paperwork is super easy for us.',
            trustDelta: -25,
            partnerResponse: 'Làm việc với tập đoàn lớn không thể vội vàng và thiếu quy trình như vậy được.',
            feedbackZh: '❌ 過於隨便輕浮，忽略了北方國企重視嚴謹審查與流程的嚴肅文化。',
            feedbackEn: 'Too casual. Disregarded formal board protocols and procedural rigor.'
          }
        ]
      }
    ]
  },
  {
    id: 'hcmc_exclusive_agent_battle',
    titleZh: '🥊 決戰 3：胡志明市獨家經銷代理權交涉 (HCMC Exclusive Distribution)',
    titleEn: '🥊 Battle 3: HCMC Exclusive Distribution & Territory Rights',
    partnerName: 'Chị Mai Lan',
    partnerRole: 'Giám đốc Công ty Phân phối Miền Nam (南越經銷商總經理)',
    scenarioContextZh: '在胡志明市第 1 郡商務中心，南越知名經銷商總經理希望取得全越南獨家總代理權（Đại lý độc quyền），但開出的首年年度銷售承諾（Target doanh số）偏低。',
    scenarioContextEn: 'In District 1, HCMC, distributor wants exclusive Vietnam territorial rights but offers low year-1 sales commitment.',
    initialTrust: 65,
    steps: [
      {
        step: 1,
        partnerSpeech: 'Bên em có hệ thống phân phối phủ khắp 63 tỉnh thành. Em muốn công ty anh giao quyền đại lý độc quyền tại Việt Nam cho bên em, với cam kết doanh số năm đầu là 500.000 USD.',
        partnerSpeechZh: '我們擁有覆蓋全越南 63 省市的經銷網絡。我希望貴公司把全越南的獨家代理權交給我們，首年年度銷售承諾為 50 萬美金。',
        partnerSpeechEn: 'We cover all 63 provinces. We want exclusive nationwide distribution with a first-year sales commitment of $500,000.',
        options: [
          {
            id: 'hcmc_opt1_counter',
            viet: 'Chúng tôi rất trân trọng năng lực phân phối của chị Lan. Tuy nhiên, với tiềm năng thị trường Việt Nam, mức 500.000 USD là hơi thấp cho độc quyền toàn quốc. Chúng tôi đề xuất: Năm đầu trao quyền độc quyền khu vực Miền Nam với mức 500.000 USD; nếu đạt KPI xuất sắc sau 12 tháng, chúng tôi sẽ mở rộng độc quyền toàn quốc lên 1.200.000 USD.',
            zh: '我們非常看重蘭總強大的通路實力。然而以越南市場的爆發力，全區獨家 50 萬美金略顯保守。我們建議：第一年先給予南越區域獨家代理（門檻 50 萬美金）；若 12 個月達標，第二年正式升級為全越南獨家總代並調升至 120 萬美金！',
            en: 'We respect your reach. However, $500k is modest for nationwide exclusivity. Proposal: Year 1 exclusive for Southern Vietnam at $500k; upgrade to nationwide exclusivity at $1.2M upon hitting KPI after 12 months.',
            trustDelta: +30,
            partnerResponse: 'Đề xuất phân kỳ này rất thực tế và tạo động lực cho đội ngũ sales của em! Em đồng ý phương án này!',
            feedbackZh: '🎉 高超商務分段博弈！以「區域試水 + 階梯式績效解鎖」既控制風險又激勵合作夥伴，完全符合胡志明市的務實商業邏輯！',
            feedbackEn: 'Brilliant milestone negotiation! Phased regional exclusivity reduced risk while aligning commercial incentives.'
          },
          {
            id: 'hcmc_opt1_too_harsh',
            viet: '500.000 USD là quá ít, không đủ chi phí bên tôi. Nếu không cam kết ít nhất 2 triệu USD thì bên tôi không giao quyền độc quyền.',
            zh: '50 萬美金太少了，根本不夠我們成本。如果不承諾至少 200 萬美金，我們不會給予任何獨家代理權。',
            en: '$500k is far too little. If you cannot commit at least $2M, we will not grant exclusive rights.',
            trustDelta: -25,
            partnerResponse: 'Anh nói chuyện thiếu thiện chí như vậy thì chúng ta khó mà hợp tác lâu dài được.',
            feedbackZh: '❌ 態度過於強硬生冷，未給予對方階梯式成長空間，容易破壞潛在經銷合作！',
            feedbackEn: 'Too aggressive. Demanded unrealistic targets without flexible phasing, hurting relationship.'
          }
        ]
      }
    ]
  },
  {
    id: 'price_discount_battle',
    titleZh: '🥊 決戰 4：大宗訂單採購議價 (Bulk Order Pricing)',
    titleEn: '🥊 Battle 4: Bulk Order Volume Discount',
    partnerName: 'Ông Nguyễn Văn Hùng',
    partnerRole: 'Giám đốc Kinh doanh (業務總監)',
    scenarioContextZh: '你代表台灣品牌向越南精密零件工廠採購 50,000 件產品。對方的初始報價為單價 $12 美金，超出了你的預算 ($10.5 美金)。',
    scenarioContextEn: 'Negotiate volume discount for 50,000 parts. Quote $12, target $10.5.',
    initialTrust: 65,
    steps: [
      {
        step: 1,
        partnerSpeech: 'Chào anh/chị. Báo giá 12 USD/sản phẩm cho đơn hàng 50.000 cái là mức giá cạnh tranh nhất của công ty chúng tôi rồi ạ.',
        partnerSpeechZh: '您好！5萬件訂單每件 12 美金已經是我們最具競爭力的底價了喔。',
        partnerSpeechEn: 'Hello! $12 per unit for 50,000 units is our most competitive price.',
        options: [
          {
            id: 'opt1_diplomatic',
            viet: 'Chúng tôi rất đánh giá cao chất lượng của quý công ty. Tuy nhiên, với số lượng lớn 50.000 cái và định hướng hợp tác lâu dài, anh Hùng có thể xem xét mức chiết khấu tốt hơn được không ạ?',
            zh: '我們非常讚賞貴公司的品質。然而看在 5 萬件的大訂單與長期合作意願上，雄總能否幫我們爭取更優惠的數量折扣呢？',
            en: 'We highly appreciate your quality. Given the large order and long-term partnership, could you consider a volume discount?',
            trustDelta: +20,
            partnerResponse: 'Cảm ơn anh đã tin tưởng. Nếu là hợp tác chiến lược lâu dài, chúng tôi có thể cùng bàn bạc thêm.',
            feedbackZh: '✅ 完美！先給予品質肯定，再以長期夥伴與大單數量爭取折讓空間。',
            feedbackEn: 'Praised quality first, then leveraged volume for concession.'
          },
          {
            id: 'opt1_aggressive',
            viet: 'Giá 12 USD là quá đắt, xưởng bên cạnh báo cho tôi chỉ có 9 USD thôi. Anh phải giảm xuống 9.5 USD thì tôi mới ký hợp đồng.',
            zh: '12 美金太貴了，隔壁廠報價只要 9 美金。你必須降到 9.5 美金我才簽合約。',
            en: '$12 is way too expensive, competitor quoted $9. You must drop to $9.5 for me to sign.',
            trustDelta: -25,
            partnerResponse: 'Chất lượng bên xưởng khác không thể so với chúng tôi được. Anh so sánh như vậy là không công bằng.',
            feedbackZh: '❌ 拿低質競品施壓砍價，容易引起越南合作夥伴反感並損害信任！',
            feedbackEn: 'Unfairly compared with cheap low-quality competitors, hurting trust.'
          }
        ]
      }
    ]
  },
  {
    id: 'factory_qc_battle',
    titleZh: '🥊 決戰 5：產線交期延遲與良率危機 (QC & Lead Time Crisis)',
    titleEn: '🥊 Battle 5: Delivery Delay & Defect Crisis',
    partnerName: 'Anh Trần Quốc Bảo',
    partnerRole: 'Giám đốc Nhà xưởng (工廠廠長)',
    scenarioContextZh: '第一批 10,000 件貨物在抽檢時發現不良率高達 4.5%（合約上限為 1%），且交期可能延誤 7 天。',
    scenarioContextEn: 'First batch defect rate is 4.5% (limit 1%) with 7-day delay risk.',
    initialTrust: 60,
    steps: [
      {
        step: 1,
        partnerSpeech: 'Chào anh. Do tuần trước bị cúp điện và công nhân mới vào nhiều nên tiến độ bị chậm vài ngày, mong anh thông cảm.',
        partnerSpeechZh: '您好！因為上週突然停電加上新進工人多，所以進度延誤了幾天，還請您多多包涵體諒。',
        partnerSpeechEn: 'Due to power outages and new workers, delivery is delayed a few days. We ask for your understanding.',
        options: [
          {
            id: 'q1_constructive',
            viet: 'Tôi hiểu những khó khăn vừa qua của xưởng. Tuy nhiên khách hàng của chúng tôi đang hối giao hàng rất gấp. Anh Bảo có thể bố trí tăng ca 2 chuyền và cử KCS kiểm tra 100% các linh kiện bị lỗi được không?',
            zh: '我理解工廠碰到的突發狀況。但我們的客戶催貨很急。保廠長能否安排 2 條產線加班，並派品管進行 100% 全檢呢？',
            en: 'I understand the challenges. Could you arrange 2 overtime lines and 100% QC sorting for defects?',
            trustDelta: +25,
            partnerResponse: 'Cảm ơn anh đã thấu hiểu. Tôi sẽ đích thân đốc thúc tổ KCS tăng ca tối nay để kịp tiến độ!',
            feedbackZh: '✅ 高度同理心結合明確執行指令，讓廠長主動全力配合趕工！',
            feedbackEn: 'High empathy with actionable plan.'
          },
          {
            id: 'q1_blame',
            viet: 'Tỷ lệ lỗi 4.5% là hoàn toàn không thể chấp nhận được! Nếu chậm giao hàng một ngày, bên anh phải bồi thường toàn bộ thiệt hại theo hợp đồng.',
            zh: '4.5% 不良率完全無法接受！只要延誤交期一天，貴方必須依約全額賠償一切損失。',
            en: '4.5% defect rate is unacceptable! For every day delayed, you must compensate full liquidated damages.',
            trustDelta: -30,
            partnerResponse: 'Anh làm việc cứng nhắc như vậy thì cứ chiếu theo điều khoản phạt hợp đồng mà xử lý, chúng tôi không tăng ca nữa.',
            feedbackZh: '❌ 危機時刻直接厲聲究責索賠，導致現場廠長消極抵抗，無法解決交期燃眉之急！',
            feedbackEn: 'Aggressive penalty threats provoked passive resistance instead of speeding up recovery.'
          }
        ]
      }
    ]
  },
  {
    id: 'hotel_corporate_battle',
    titleZh: '🥊 決戰 6：長期出差特約商務協議 (Hotel Corporate Rate)',
    titleEn: '🥊 Battle 6: Long-Stay Corporate Agreement',
    partnerName: 'Chị Lê Thị Mai',
    partnerRole: 'Trưởng phòng Kinh doanh Khách sạn (飯店業務經理)',
    scenarioContextZh: '為公司外派同仁爭取長達 6 個月的連續包房特約價（含每日免費洗衣、早餐與免費延遲退房）。',
    scenarioContextEn: 'Negotiate a 6-month long-stay corporate contract with complimentary laundry and breakfast.',
    initialTrust: 70,
    steps: [
      {
        step: 1,
        partnerSpeech: 'Dạ chào anh. Giá niêm yết phòng Deluxe là 1.800.000 VND/đêm, đối với khách lưu trú dài hạn bên em giảm còn 1.500.000 VND ạ.',
        partnerSpeechZh: '您好！豪華房牌價每晚 180 萬盾，長期住宿我們可優惠至每晚 150 萬盾。',
        partnerSpeechEn: 'Deluxe room rack rate is 1.8M VND/night. For long stays we offer 1.5M VND.',
        options: [
          {
            id: 'h1_pkg',
            viet: 'Bên công ty chúng tôi có 4 kỹ sư lưu trú liên tục trong 6 tháng. Nếu chị Mai đồng ý mức 1.200.000 VND bao gồm ăn sáng và giặt ủi 2 bộ/ngày, chúng tôi sẽ thanh toán trước 3 tháng.',
            zh: '我們公司有 4 位工程師會連續常駐 6 個月。如果梅經理能支持每晚 120 萬盾並包含早餐與每天 2 套洗衣，我們願意一次預付 3 個月房費。',
            en: 'We have 4 engineers staying for 6 months. If you agree to 1.2M VND incl. breakfast and 2 pcs/day laundry, we will prepay 3 months.',
            trustDelta: +30,
            partnerResponse: 'Tuyệt vời quá! Đề xuất thanh toán trước 3 tháng rất hấp dẫn. Em xin duyệt mức giá này cho công ty anh ngay ạ!',
            feedbackZh: '🎉 漂亮談判！利用「多人數 x 長週期 x 預付現金」換取極致性價比包套！',
            feedbackEn: 'Bundled volume and prepayment for optimal corporate terms.'
          },
          {
            id: 'h1_unreasonable',
            viet: 'Khách sạn bên cạnh giá chỉ có 800 nghìn thôi. Chị Mai giảm xuống 800 nghìn cho chúng tôi được không?',
            zh: '隔壁飯店每晚才 80 萬盾。梅經理能降到 80 萬盾給我們嗎？',
            en: 'Nearby hotel charges only 800k. Can you match 800k for us?',
            trustDelta: -20,
            partnerResponse: 'Dạ phân khúc bên em là 4 sao tiêu chuẩn quốc tế, không thể giảm xuống mức giá của nhà nghỉ bình dân được ạ.',
            feedbackZh: '❌ 忽視星級飯店硬體與服務成本，殺價幅度過大且缺乏互惠籌碼。',
            feedbackEn: 'Unrealistic lowball offer ignored standard international service costs.'
          }
        ]
      }
    ]
  },
  {
    id: 'nhau_banquet_battle',
    titleZh: '🥊 決戰 7：酒桌應酬與合作敬酒 (Nhậu Banquet Toasting)',
    titleEn: '🥊 Battle 7: Banquet Drinking & Bonding',
    partnerName: 'Tổng Giám Đốc Vũ',
    partnerRole: 'Chủ tịch Tập đoàn Đối tác (合作集團董事長)',
    scenarioContextZh: '在胡志明市著名海鮮餐廳進行商務宴請。武董熱情舉杯要求「Trăm phần trăm (100% 乾杯)」，你必須既表達敬意，又能適度掌控酒量不失態。',
    scenarioContextEn: 'Navigate a high-stakes business banquet toast with the Chairman without losing composure.',
    initialTrust: 75,
    steps: [
      {
        step: 1,
        partnerSpeech: 'Hôm nay rất vui được đón tiếp đoàn doanh nghiệp Đài Loan! Nào, anh em ta làm một ly 100% mừng hợp tác thành công nhé!',
        partnerSpeechZh: '今天非常高興接待台灣企業考察團！來，兄弟們乾一杯 100% 慶祝我們合作圓滿成功！',
        partnerSpeechEn: 'Thrilled to host our Taiwanese partners! Let us do a 100% bottoms-up toast for our successful cooperation!',
        options: [
          {
            id: 'nhau_toast_perfect',
            viet: 'Dạ, kính chúc anh Vũ và quý tập đoàn ngày càng phát triển thịnh vượng! Xin phép anh em uống 100% ly đầu tiên để thể hiện thành ý, những ly sau cho em xin phép nhấp môi để giữ sự tỉnh táo bàn việc ngày mai ạ!',
            zh: '祝武董與貴集團業務蒸蒸日上！這第一杯我乾杯 100% 表達滿滿誠意，接下來幾杯請准許我小酌淺嚐，保持清醒以利明早的會議討論！',
            en: 'Wishing Chairman Vu thriving success! I will drink 100% for the first glass, and sip moderately afterwards to stay sharp for tomorrow!',
            trustDelta: +25,
            partnerResponse: 'Haha, anh nói rất chân tình và chuyên nghiệp! Nào, một, hai, ba, dô!',
            feedbackZh: '🏆 滿分應酬情商！首杯給足面子乾杯，同時禮貌設定後續防線，既豪爽又專業！',
            feedbackEn: 'Honored host on first toast while setting professional boundaries.'
          },
          {
            id: 'nhau_toast_refuse_abruptly',
            viet: 'Tôi không biết uống bia rượu đâu, anh cứ uống đi, tôi uống nước lọc.',
            zh: '我不會喝任何酒類，你們自己喝就好，我喝白開水。',
            en: 'I do not drink at all, you go ahead and drink, I will just drink water.',
            trustDelta: -25,
            partnerResponse: 'Bữa tiệc mừng hợp tác mà anh nói vậy thì hơi cụt hứng quá rồi.',
            feedbackZh: '❌ 過於生硬直接拒絕，完全澆熄現場熱烈氣氛與東道主好意。',
            feedbackEn: 'Abruptly refused host hospitality, dampening the celebratory banquet atmosphere.'
          }
        ]
      }
    ]
  }
];

// ==========================================================================
// 5. EXECUTIVE SURVIVAL GUIDE (INVOICES, AIRPORT, GRAB, HOTEL)
// ==========================================================================
export const executiveSurvivalGuide = [
  {
    id: 'vat_red_invoice',
    category: 'invoice',
    titleZh: '加值稅紅發票 (Hóa đơn GTGT / Hóa đơn đỏ)',
    titleEn: 'VAT Red Invoice (Hóa đơn đỏ)',
    icon: '🧾',
    descZh: '在越南商務出差或採購，唯有索取正式的電子加值稅發票（Hóa đơn điện tử GTGT）才能供公司合法核銷報帳與退稅。',
    descEn: 'Official VAT Red Invoices (Hóa đơn đỏ) are mandatory for corporate tax deductions and expense reimbursement in Vietnam.',
    proTipZh: '💡 必備開票四要素：1. Tên công ty (公司名稱全稱) 2. Mã số thuế (MST 統一稅號) 3. Địa chỉ (公司登記地址) 4. Email nhận hóa đơn (接收電子發票的信箱)。',
    proTipEn: '💡 4 Essential Invoice Elements: Full Company Name, Tax Code (MST), Registered Address, and Electronic Delivery Email.',
    phrases: [
      {
        viet: 'Công ty chúng tôi cần xuất hóa đơn đỏ (hóa đơn GTGT).',
        zh: '我們公司需要開立加值稅紅發票。',
        en: 'Our company needs an official VAT red invoice.',
        hintZh: '向飯店櫃檯、餐廳或供應商索取發票的權威句型。'
      },
      {
        viet: 'Đây là thông tin xuất hóa đơn và mã số thuế (MST) của công ty tôi.',
        zh: '這是我們公司的開票資訊與統一稅號 (MST)。',
        en: 'Here is our company billing info and Tax ID (MST).',
        hintZh: '出示公司名片或開票紙條時說。'
      },
      {
        viet: 'Vui lòng gửi hóa đơn điện tử vào email này giúp tôi.',
        zh: '請幫我把電子發票發送到這個電子信箱。',
        en: 'Please send the e-invoice to this email address.',
        hintZh: '現在越南 100% 採用電子發票（Hóa đơn điện tử）。'
      },
      {
        viet: 'Giá này đã bao gồm thuế GTGT (VAT 10%) chưa ạ?',
        zh: '請問這個價格已經包含增值稅 (VAT 10%) 了嗎？',
        en: 'Is this price inclusive of 10% VAT?',
        hintZh: '結帳或報價確認時必問，避免後續爭議。'
      }
    ],
    sampleInvoiceTemplate: {
      companyNameZh: '台灣創新精密越南責任有限公司',
      companyNameVi: 'CÔNG TY TNHH PRECISION INNOVATION VIỆT NAM',
      taxCode: '3702891234',
      addressZh: '平陽省宜安市 VSIP 1 工業區第 8 號路',
      addressVi: 'Đường số 8, KCN VSIP 1, TP. Dĩ An, Tỉnh Bình Dương',
      email: 'accounting.vn@precision-tw.com'
    }
  },
  {
    id: 'airport_and_visa',
    category: 'travel',
    titleZh: '機場入境、商務簽證與接送 (Hà Nội & TP.HCM)',
    titleEn: 'Airport Entry, Business Visa & Airport Transfers',
    icon: '🛂',
    descZh: '降落河內內排 (Nội Bài) 或胡志明新山一 (Tân Sơn Nhất) 機場時的入境與通關應對。',
    descEn: 'Smooth airport navigation, customs declarations, and VIP transfers at Hanoi or HCMC airports.',
    proTipZh: '💡 遇到海關詢問來訪目的時，持商務簽證（DN1/DN2/DT）請回答「Đi công tác (出差)」或「Làm việc với đối tác (與合作夥伴工作)」。',
    proTipEn: '💡 When customs asks your visit purpose with business visa, state "Đi công tác" (business trip) politely.',
    phrases: [
      {
        viet: 'Tôi đến Việt Nam để đi công tác và tham dự triển lãm thương mại.',
        zh: '我來越南出差並參加國際商業展覽會。',
        en: 'I am in Vietnam on a business trip to attend a trade exhibition.',
        hintZh: '海關移民官詢問目的時的專業回答。'
      },
      {
        viet: 'Đây là công văn nhập cảnh và thư mời của công ty đối tác.',
        zh: '這是入境批文與合作公司的正式邀請函。',
        en: 'Here is the visa approval letter and business invitation letter.',
        hintZh: '查驗落地簽或商務簽證時出示。'
      },
      {
        viet: 'Tài xế của công ty đang đón tôi ở cột số mấy ngoài sảnh đến sân bay Nội Bài / Tân Sơn Nhất?',
        zh: '請問我們公司的司機在內排 / 新山一機場到站大廳外的第幾號柱子接我？',
        en: 'At which pillar outside the arrival hall is my driver waiting?',
        hintZh: '越南機場接機習慣以柱子編號相約（Cột số 8, Cột số 12）。'
      }
    ]
  },
  {
    id: 'grab_and_navigation',
    category: 'travel',
    titleZh: 'Grab 叫車、專車指路與過路費報帳',
    titleEn: 'Grab Ride-Hailing & Navigation',
    icon: '🚗',
    descZh: '在越南各大城市與工業區使用 GrabCar 出行，精準與司機溝通上下車點與開立電子乘車憑證。',
    descEn: 'Navigate Grab rides smoothly, direct drivers in Vietnamese, and retrieve corporate receipts.',
    proTipZh: '💡 Grab 叫車小撇步：在 Grab App 綁定公司信用卡，並勾選「Send e-receipt (Gửi hóa đơn điện tử)」，即可自動收到包含統編稅號的報帳單據。',
    proTipEn: '💡 Link corporate cards in Grab app for automatic e-receipt delivery for expense filing.',
    phrases: [
      {
        viet: 'Tôi đang đứng ở trước sảnh khách sạn, mặc áo sơ mi trắng.',
        zh: '我站在飯店大廳門口前面，穿著白色襯衫。',
        en: 'I am standing in front of the hotel lobby wearing a white shirt.',
        hintZh: '傳訊息或打電話給 Grab 司機快速相認。'
      },
      {
        viet: 'Bác tài ơi, đến ngã tư tiếp theo vui lòng rẽ phải lên đường cao tốc giúp tôi.',
        zh: '司機大哥，到下一個十字路口請幫我右轉上高速公路。',
        en: 'Driver, please turn right at the next intersection onto the highway.',
        hintZh: '指路實用語：Rẽ phải (右轉), Rẽ trái (左轉), Đi thẳng (直走)。'
      },
      {
        viet: 'Cho tôi xuống ở cổng chính của Trung tâm triển lãm SECC Quận 7 nhé.',
        zh: '請讓我在第 7 郡 SECC 展覽中心的正門口下車喔。',
        en: 'Please drop me off at the main entrance of SECC in District 7.',
        hintZh: '抵達商展會場時提醒司機。'
      }
    ]
  }
];

// ==========================================================================
// 6. SMART FACTORY WALKTHROUGH
// ==========================================================================
export const smartFactoryGuide = {
  titleZh: '🏭 智慧工廠巡檢與生產管理實務指南',
  titleEn: '🏭 Smart Factory Walkthrough & Production Directives',
  zones: [
    {
      nameVi: 'Khu công nghiệp (KCN)',
      nameZh: '越南五大核心工業區與聚落',
      nameEn: 'Top Industrial Parks & Hubs',
      parks: [
        { name: 'KCN VSIP 1 & 2 (Bình Dương)', descZh: '越新工業園區，台商與外商最大精密製造、電子聚落。' },
        { name: 'KCN Amata (Đồng Nai)', descZh: '同奈省日台汽配與精密機械重鎮。' },
        { name: 'KCN Quế Võ & Yên Phong (Bắc Ninh)', descZh: '北越半導體、手機與電子代工重鎮（三星供應鏈聚落）。' },
        { name: 'KCN Deep C & Đình Vũ (Hải Phòng)', descZh: '海防海港物流與大型重工業園區。' },
        { name: 'KCN Tân Tạo & Hi-Tech Park (TP.HCM)', descZh: '胡志明市高科技與消費電子園區。' }
      ]
    },
    {
      nameVi: 'An toàn lao động & KCS',
      nameZh: '工安規範與品質管制 (EHS & QC)',
      terms: [
        { viet: 'Mũ bảo hộ', zh: '安全帽', en: 'Safety Helmet', example: 'Tất cả mọi người phải đội mũ bảo hộ khi vào xưởng.' },
        { viet: 'Giày bảo hộ', zh: '勞保鞋 / 防護鞋', en: 'Safety Shoes', example: 'Khu vực này bắt buộc phải mang giày bảo hộ.' },
        { viet: 'Kính bảo hộ & Khẩu trang', zh: '護目鏡與口罩', en: 'Safety Goggles & Mask', example: 'Đeo kính bảo hộ để tránh bụi kim loại.' },
        { viet: 'Kiểm tra chất lượng (KCS / QC)', zh: '品質檢驗 (品管)', en: 'Quality Control (QC)', example: 'Đội KCS phải kiểm tra 100% mẫu trước khi đóng gói.' },
        { viet: 'Tỷ lệ phế phẩm (NG)', zh: '不良品率 (NG率)', en: 'Defect / Defective Rate', example: 'Tháng này tỷ lệ phế phẩm phải giảm xuống dưới 0.5%.' },
        { viet: 'Tiêu chuẩn ISO 9001', zh: 'ISO 9001 品質標準', en: 'ISO 9001 Standard', example: 'Toàn bộ quy trình phải tuân thủ nghiêm ngặt ISO 9001.' }
      ]
    },
    {
      nameVi: 'Dây chuyền sản xuất & Nhân sự',
      nameZh: '產線調度、班別與工時 (Line & Shifts)',
      terms: [
        { viet: 'Năng suất chuyền', zh: '產線產能 / 效率', en: 'Line Output / Productivity', example: 'Hôm nay năng suất chuyền 3 đạt 1,200 sản phẩm.' },
        { viet: 'Tăng ca (Làm thêm giờ)', zh: '加班 (Overtime - OT)', en: 'Overtime (OT)', example: 'Hôm nay công nhân có đồng ý tăng ca 2 tiếng không?' },
        { viet: 'Ca ngày / Ca đêm', zh: '日班 / 夜班', en: 'Day Shift / Night Shift', example: 'Nhà máy vận hành 2 ca, mỗi ca 12 tiếng.' },
        { viet: 'Đổi ca (Giao ca)', zh: '交班 / 換班', en: 'Shift Handover', example: 'Trưởng ca phải ghi sổ giao ca đầy đủ.' }
      ]
    }
  ]
};

// ==========================================================================
// 7. NHẬU BANQUET TOASTS & ETIQUETTE
// ==========================================================================
export const nhauCultureGuide = {
  titleZh: '🍻 越南「Nhậu」酒桌文化與應酬社交完全寶典',
  titleEn: '🍻 Complete Guide to Vietnamese "Nhậu" Drinking Culture',
  introZh: '在越南商務生態中，「Đi nhậu (去喝酒應酬)」不只是吃飯，更是建立「Tình cảm (信任與私交情感)」不可或缺的關鍵儀式。許多在正式會議室談不攏的細節，往往在酒桌熱絡氣氛中迎刃而解。',
  introEn: 'In Vietnam, "Đi nhậu" (social drinking) is essential for building deep trust and emotional rapport with business partners.',
  chants: [
    {
      viet: 'Một, hai, ba, dô! Hai, ba, dô! Hai, ba, uống!',
      zh: '一、二、三，乾（吼）！二、三，乾！二、三，喝！',
      en: '1, 2, 3, Cheers! 2, 3, Cheers! 2, 3, Drink!',
      descZh: '全越南酒桌最經典、最具感染力的群體乾杯口號，所有人會齊聲大喊並將酒杯碰在一起。'
    },
    {
      viet: 'Trăm phần trăm (100%)!',
      zh: '百分之百（乾杯底朝天）！',
      en: '100% (Bottoms up)!',
      descZh: '一口氣把杯中啤酒或烈酒乾掉。'
    },
    {
      viet: 'Năm mươi phần trăm (50%) / Nửa ly nhé!',
      zh: '百分之五十 / 半杯就好喔！',
      en: '50% / Half glass please!',
      descZh: '酒量有限時向對方示意喝一半的親切協商。'
    },
    {
      viet: 'Không say không về!',
      zh: '不醉不歸！',
      en: 'Not going home until drunk!',
      descZh: '氣氛熱絡時炒熱氣氛的豪邁用語。'
    }
  ],
  goldenRules: [
    { ruleZh: '雙手敬酒表敬意', ruleEn: 'Hold Glass with Both Hands', descZh: '向長輩、主管或董事長敬酒時，右手持杯、左手托住杯底，且自己杯緣略低於對方杯緣以示尊重。' },
    { ruleZh: '眼神交流與碰杯', ruleEn: 'Eye Contact during Toasting', descZh: '碰杯時看著對方的眼睛微笑道謝，並說「Chúc sức khỏe (祝您健康)」。' },
    { ruleZh: '優雅擋酒話術', ruleEn: 'Polite Alcohol Moderation', descZh: '若真的不勝酒力，可誠懇告知「Tửu lượng tôi kém (我酒量較弱)」或「Bác sĩ dặn tôi phải kiêng rượu (醫生囑咐我需戒酒)」，改以礦泉水或汽水敬酒。' }
  ]
};

// ==========================================================================
// 8. CURRENCY BLITZ & SLANG
// ==========================================================================
export const currencyBlitzQuestions = [
  {
    id: 'q_cu_1',
    type: 'slang_decode',
    questionVi: 'Báo giá này là "3 củ 5", tương đương bao nhiêu tiền VND?',
    questionZh: '對方報價說「3 củ 5」，這相當於多少越南盾？',
    questionEn: 'The slang "3 củ 5" equals how much VND?',
    options: ['350.000 VND', '3.500.000 VND (350萬盾)', '35.000.000 VND', '350.000.000 VND'],
    answerIndex: 1,
    explainZh: '「Củ」是越南口語黑話中的「百萬 (Triệu)」，3 củ 5 即 3.500.000 VND (約 4,500 台幣)。'
  },
  {
    id: 'q_xi_2',
    type: 'slang_decode',
    questionVi: 'Tiền taxi hết "5 xị", tương đương bao nhiêu VND?',
    questionZh: '計程車資是「5 xị」，相當於多少越南盾？',
    questionEn: 'Taxi fare is "5 xị", how much VND is this?',
    options: ['50.000 VND', '500.000 VND (50萬盾)', '5.000.000 VND', '50.000.000 VND'],
    answerIndex: 1,
    explainZh: '「Xị」是口語黑話中的「十萬 (Trăm nghìn)」，5 xị 即 500.000 VND (約 640 台幣)。'
  },
  {
    id: 'q_lit_3',
    type: 'slang_decode',
    questionVi: '"2 lít" trong tiếng lóng miền Bắc là bao nhiêu tiền?',
    questionZh: '北越口語常說的「2 lít」是多少錢？',
    questionEn: 'What is "2 lít" in Northern Vietnamese slang?',
    options: ['20.000 VND', '200.000 VND (20萬盾)', '2.000.000 VND', '20.000.000 VND'],
    answerIndex: 1,
    explainZh: '北越人常稱 100.000 VND 為 1 lít，故 2 lít = 200.000 VND。'
  },
  {
    id: 'q_ty_4',
    type: 'big_number',
    questionVi: 'Đơn hàng trị giá "Hai tỷ rưỡi" (2.5 tỷ) là bao nhiêu tiền?',
    questionZh: '訂單總額「Hai tỷ rưỡi」(2.5 億盾) 是多少錢？',
    questionEn: 'How much is "Hai tỷ rưỡi" (2.5 Tỷ)?',
    options: ['25.000.000 VND', '250.000.000 VND', '2.500.000.000 VND (25億盾)', '25.000.000.000 VND'],
    answerIndex: 2,
    explainZh: '「Tỷ」代表 10 億（1,000,000,000），Hai tỷ rưỡi 即 2.500.000.000 VND (約 320 萬台幣 / 10 萬美金)。'
  },
  {
    id: 'q_rate_5',
    type: 'fast_conversion',
    questionVi: 'Một bữa tiệc tiếp khách hết 7.800.000 VND, quy đổi ra tiền Đài Tệ (TWD) xấp xỉ bao nhiêu? (Tỷ giá 1 TWD ≈ 780 VND)',
    questionZh: '一場招待宴席花費 7.800.000 VND，以 1:780 匯率折算約合多少新台幣？',
    questionEn: '7,800,000 VND converted to TWD (rate 780) is approximately?',
    options: ['約 5,000 TWD', '約 10,000 TWD', '約 20,000 TWD', '約 50,000 TWD'],
    answerIndex: 1,
    explainZh: '7.800.000 / 780 = 正好約 10,000 新台幣。心算口訣：扣除 3 個零後除以 0.78。'
  }
];

// ==========================================================================
// 9. EXECUTIVE HAN-VIET ROOTS
// ==========================================================================
export const executiveHanVietRoots = [
  {
    root: 'Doanh (營)',
    hanViet: 'Doanh',
    meaningZh: '營運、經營、企業',
    meaningEn: 'Business, Enterprise, Operation',
    examples: [
      { vi: 'Doanh nghiệp', zh: '企業 (Doanh 營 + Nghiệp 業)' },
      { vi: 'Kinh doanh', zh: '經營 / 經商 (Kinh 經 + Doanh 營)' },
      { vi: 'Doanh thu', zh: '營收 / 營業額 (Doanh 營 + Thu 收)' },
      { vi: 'Doanh nhân', zh: '企業家 / 商人 (Doanh 營 + Nhân 人)' }
    ]
  },
  {
    root: 'Hợp (合)',
    hanViet: 'Hợp',
    meaningZh: '合約、合作、合理',
    meaningEn: 'Contract, Cooperate, Fit',
    examples: [
      { vi: 'Hợp đồng', zh: '合同 / 合約 (Hợp 合 + Đồng 同)' },
      { vi: 'Hợp tác', zh: '合作 (Hợp 合 + Tác 作)' },
      { vi: 'Hợp pháp', zh: '合法 (Hợp 合 + Pháp 法)' },
      { vi: 'Thích hợp', zh: '適合 / 恰當 (Thích 適 + Hợp 合)' }
    ]
  },
  {
    root: 'Tài (財)',
    hanViet: 'Tài',
    meaningZh: '財務、財產、資產',
    meaningEn: 'Finance, Property, Asset',
    examples: [
      { vi: 'Tài chính', zh: '財務 / 金融 (Tài 財 + Chính 政)' },
      { vi: 'Tài sản', zh: '財產 / 資產 (Tài 財 + Sản 產)' },
      { vi: 'Tài khoản', zh: '帳戶 / 帳號 (Tài 財 + Khoản 款)' },
      { vi: 'Tài trợ', zh: '贊助 / 資助 (Tài 財 + Trợ 助)' }
    ]
  },
  {
    root: 'Xuất (出) & Nhập (入)',
    hanViet: 'Xuất / Nhập',
    meaningZh: '進出口、出入庫',
    meaningEn: 'Export & Import, Inbound & Outbound',
    examples: [
      { vi: 'Xuất nhập khẩu', zh: '進出口貿易 (Xuất 出 + Nhập 入 + Khẩu 口)' },
      { vi: 'Xuất khẩu', zh: '出口 (Xuất 出 + Khẩu 口)' },
      { vi: 'Nhập khẩu', zh: '進口 (Nhập 入 + Khẩu 口)' },
      { vi: 'Xuất xưởng', zh: '出廠 (Xuất 出 + Xưởng 廠)' }
    ]
  },
  {
    root: 'Kế (計) & Toán (算)',
    hanViet: 'Kế / Toán',
    meaningZh: '計算、會計、計畫',
    meaningEn: 'Account, Calculate, Plan',
    examples: [
      { vi: 'Kế toán', zh: '會計 / 帳務 (Kế 計 + Toán 算)' },
      { vi: 'Kế hoạch', zh: '計畫 / 企劃 (Kế 計 + Hoạch 劃)' },
      { vi: 'Thống kê', zh: '統計 (Thống 統 + Kế 計)' },
      { vi: 'Dự toán', zh: '預算 (Dự 預 + Toán 算)' }
    ]
  },
  {
    root: 'Thuế (稅)',
    hanViet: 'Thuế',
    meaningZh: '稅務、稅率、關稅',
    meaningEn: 'Tax, Tariff, Duty',
    examples: [
      { vi: 'Mã số thuế (MST)', zh: '統一稅號 (Mã 碼 + Số 數 + Thuế 稅)' },
      { vi: 'Thuế giá trị gia tăng (GTGT/VAT)', zh: '加值型營業稅 (VAT)' },
      { vi: 'Thuế quan', zh: '關稅 (Thuế 稅 + Quan 關)' },
      { vi: 'Nộp thuế', zh: '繳稅 (Nộp 納 + Thuế 稅)' }
    ]
  }
];

// ==========================================================================
// 10. REAL-WORLD COMMERCIAL DOCUMENTS & CONTRACT SIMULATOR
// ==========================================================================
export const realWorldCommercialDocuments = [
  {
    id: 'doc_commercial_contract',
    titleZh: '📜 1. 國際商業買賣合約核心條款 (Hợp đồng Mua bán Hàng hóa)',
    titleEn: '1. Commercial Sale & Purchase Contract Template',
    docTypeVi: 'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc',
    headerVi: 'HỢP ĐỒNG MUA BÁN HÀNG HÓA THƯƠNG MẠI\nSố: 2026/PIV-TW/HĐMB',
    clauses: [
      {
        clauseNo: 'Điều 1',
        titleVi: 'Đối tượng Hợp đồng & Quy cách Hàng hóa',
        titleZh: '第一條：合約標的與貨物規格',
        contentVi: 'Bên B cam kết bán và Bên A cam kết mua 50.000 bộ linh kiện điện tử sản xuất theo tiêu chuẩn ISO 9001:2015. Dung sai kỹ thuật không vượt quá ±0.05 mm.',
        contentZh: '乙方同意出售、甲方同意購買按照 ISO 9001:2015 標準生產之 50,000 套電子零件。工程公差不得超過 ±0.05 mm。'
      },
      {
        clauseNo: 'Điều 2',
        titleVi: 'Giá cả & Phương thức Thanh toán',
        titleZh: '第二條：價格與付款方式',
        contentVi: 'Đơn giá là 8.00 USD/bộ (FOB Cảng Cát Lái, TP.HCM). Bên A đặt cọc 30% bằng chuyển khoản T/T trong vòng 05 ngày làm việc sau khi ký hợp đồng. 70% còn lại thanh toán khi nhận vận đơn B/L.',
        contentZh: '單價為每套 8.00 美元 (胡志明市蓋萊港 FOB 條件)。甲方於合約簽署後 5 個工作天內電匯 30% 訂金；70% 尾款於收到提單 (B/L) 副本時付清。'
      },
      {
        clauseNo: 'Điều 3',
        titleVi: 'Bất khả kháng & Giải quyết Tranh chấp',
        titleZh: '第三條：不可抗力與爭議解決',
        contentVi: 'Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết qua thương lượng. Nếu không thành, vụ việc sẽ được đưa ra phân xử tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) theo Quy tắc Trọng tài của VIAC.',
        contentZh: '凡因本合約引起之爭議應優先協商解決；協商不成時，提交越南國際仲裁中心 (VIAC) 依其仲裁規則在胡志明市進行仲裁裁決。'
      }
    ]
  },
  {
    id: 'doc_customs_declaration',
    titleZh: '🚢 2. 進出口海關電子申報單核心欄位 (Tờ khai Hải quan)',
    titleEn: '2. Electronic Customs Declaration Form',
    docTypeVi: 'TỔNG CỤC HẢI QUAN VIỆT NAM\nChi cục Hải quan Cửa khẩu Cảng Sài Gòn Khu vực 1',
    headerVi: 'TỜ KHAI HÀNG HÓA NHẬP KHẨU (THÔNG QUAN ĐIỆN TỬ VNACCS/VCIS)',
    clauses: [
      {
        clauseNo: 'Ô số 1',
        titleVi: 'Người nhập khẩu (Consignee / Importer)',
        titleZh: '欄位 1：進口人資訊 (公司全稱 / MST 統一稅號)',
        contentVi: 'CÔNG TY TNHH PRECISION INNOVATION VIỆT NAM - MST: 3702891234 - Địa chỉ: KCN VSIP 1, Bình Dương.',
        contentZh: '進口人：台灣創新精密越南責任有限公司，統一稅號：3702891234，登記地址：平陽省 VSIP 1 工業園區。'
      },
      {
        clauseNo: 'Ô số 2',
        titleVi: 'Mã phân loại kiểm tra (Luồng tờ khai)',
        titleZh: '欄位 2：通關通道分類 (Luồng xanh / Vàng / Đỏ)',
        contentVi: 'Mã luồng: 1 (Luồng XANH - Miễn kiểm tra hồ sơ và kiểm tra thực tế hàng hóa, thông quan tự động).',
        contentZh: '通道代碼：1（綠線通道 - 免單證審查與實物查驗，自動放行通關）。'
      },
      {
        clauseNo: 'Ô số 3',
        titleVi: 'Mã số HS & Trị giá tính thuế',
        titleZh: '欄位 3：海關 HS Code 稅號與完稅價格',
        contentVi: 'Mã HS: 8479.89.90 - Mô tả: Linh kiện máy móc tự động hóa - Trị giá tính thuế: 120.000 USD - Thuế nhập khẩu: 0% (Form E/Form VJ).',
        contentZh: 'HS 稅號：8479.89.90，品名：自動化設備零件，完稅價格：120,000 美元，適用關稅：0%。'
      }
    ]
  }
];

// ==========================================================================
// 11. BUSINESS VIETNAMESE PROFICIENCY TEST (iVPT SIMULATOR)
// ==========================================================================
export const businessProficiencyTest = [
  {
    id: 'btest_1',
    categoryZh: '商務法規與發票',
    questionVi: 'Khi đi công tác tại Việt Nam, để chi phí được khấu trừ thuế TNDN hợp pháp, doanh nghiệp bắt buộc phải lấy loại chứng từ nào?',
    questionZh: '在越南出差時，為了使各項差旅支出能合法抵扣企業所得稅，公司必須索取何種正式憑證？',
    questionEn: 'To ensure corporate tax deductibility during a business trip in Vietnam, which document is legally mandatory?',
    options: [
      'Phiếu thu viết tay của nhà hàng (手寫收款收據)',
      'Hóa đơn điện tử GTGT có mã của Cơ quan Thuế (具稅務局認證碼之電子紅發票)',
      'Chỉ cần biên lai cà thẻ tín dụng (僅信用卡簽單)',
      'Giấy viết tay xác nhận của tài xế (司機手寫便條)'
    ],
    answerIndex: 1,
    explainZh: '正確！在越南唯有具備稅務總局 (Cơ quan Thuế) 認證碼之電子加值稅發票 (Hóa đơn GTGT) 才能供公司合法申報核銷抵扣企業所得稅。'
  },
  {
    id: 'btest_2',
    categoryZh: '商務禮儀與稱謂',
    questionVi: 'Trong cuộc họp trang trọng với Tổng Giám Đốc đối tác lớn tuổi hơn mình, cách xưng hô nào thể hiện sự tôn trọng và chuyên nghiệp nhất?',
    questionZh: '在與年齡長於自己的客戶總經理開會時，哪一種稱謂組合最能展現尊重（Respect）與專業？',
    questionEn: 'In a formal meeting with an older General Director, which pronoun pair is most respectful and professional?',
    options: [
      'Tôi - Bạn (Tôi mời bạn phát biểu)',
      'Em - Anh Tổng Giám Đốc (Dạ thưa Anh Tổng Giám Đốc, em xin phép trình bày ạ)',
      'Mày - Tao',
      'Anh - Chú'
    ],
    answerIndex: 1,
    explainZh: '正確！開口用「Dạ thưa」，稱呼長官職銜「Anh Tổng Giám Đốc」，自稱「Em」並在句尾加「ạ」，是越南高階商務最具教養與尊榮的溝通典範。'
  },
  {
    id: 'btest_3',
    categoryZh: '國際外貿與物流',
    questionVi: 'Điều kiện giao hàng "FOB Cảng Cát Lái" có nghĩa là gì?',
    questionZh: '國際貿易合約中的「FOB 蓋萊港 (Cát Lái)」交貨條件代表何種含義？',
    questionEn: 'What does the Incoterm "FOB Cat Lai Port" mean?',
    options: [
      'Người bán chịu toàn bộ chi phí vận chuyển đường biển sang Đài Loan',
      'Người bán giao hàng qua lan can tàu tại cảng Cát Lái TP.HCM, sau đó người mua chịu cước biển và bảo hiểm',
      'Người mua phải tự đến nhà xưởng bốc hàng',
      'Giao hàng tại sân bay Tân Sơn Nhất'
    ],
    answerIndex: 1,
    explainZh: '正確！FOB (Free on Board) 條件下，賣方負責將貨物裝上胡志明市蓋萊港指定船舶，起航後的國際海運費與保險由買方承擔。'
  }
];
