/**
 * Comprehensive Scenario Exegesis & Knowledge Lore Dataset (實戰情境深度研經資料庫)
 * 專為日常旅遊、生活、商務情境提供「句型公式拆解、漢越字源考、南北越方言對照、文化習俗錦囊、道地日常口語」5大維度深度研經。
 */

export const SCENARIO_EXEGESIS = {
  // 1. 機場情境
  airport: {
    scenarioId: 'airport',
    titleZh: '✈️ 國際機場登機、海關與行李託運深度研經',
    titleEn: 'International Airport Customs, Check-in & Baggage Exegesis',
    coreFormulas: [
      {
        formulaVi: 'Cho tôi gửi + [Số lượng] + kiện hành lý (ký gửi)',
        formulaZh: '請幫我託運 + [數量] + 件行李',
        explainZh: '「Cho tôi + 動詞」是向地勤或服務人員提出請求最優雅得體的句型；「hành lý ký gửi」專指託運行李，隨身手提行李則為「hành lý xách tay」。',
        exampleVi: 'Cho tôi gửi hai kiện hành lý này đến Đài Bắc ạ.',
        exampleZh: '請幫我把這兩件行李託運到台北。'
      },
      {
        formulaVi: 'Cửa ra máy bay số mấy / Ở đâu ạ?',
        formulaZh: '幾號登機門 / 請問登機門在哪裡？',
        explainZh: '登機門在越南語稱為「Cửa ra máy bay」（出飛機之門），簡稱「Cửa số...」；機場廣播中常聽見「chuyến bay... khởi hành tại cửa số...」。',
        exampleVi: 'Xin lỗi, cửa ra máy bay cho chuyến bay VN570 ở đâu ạ?',
        exampleZh: '不好意思，VN570 航班的登機門在哪裡？'
      }
    ],
    hanVietRoots: [
      { root: 'Hàng không (航空)', origin: '漢越同源，泛指民航局、航空公司（Hãng hàng không）' },
      { root: 'Hải quan (海關)', origin: '海防關卡，機場海關檢查人員為「Cán bộ hải quan」' },
      { root: 'Xuất nhập cảnh (出入境)', origin: 'Cục Quản lý Xuất nhập cảnh（出入境管理局）' },
      { root: 'Thủ tục (手續)', origin: 'Làm thủ tục（辦理登機/出入境手續）' }
    ],
    northSouthContrast: {
      featureZh: '行李託運與廣播用詞差異',
      northVi: 'Gửi hành lý (託運) · Máy bay (飛機) · Vé máy bay (機票)',
      southVi: 'Ký gửi hành lý (託運) · Tàu bay (日常老派常稱) · Vé tàu bay',
      noteZh: '南越胡志明市新山一機場 (Sân bay Tân Sơn Nhất) 廣播常使用「Tàu bay」代替「Máy bay」，發音上「v」在南越常軟化為接近「d/y」。'
    },
    culturalNotes: [
      '💡 護照簽證檢查：越南自全面實施電子簽證 (E-Visa) 以來，通關時務必將黑白或彩色 A4 簽證紙列印出至少 2 份隨身備用。',
      '🚨 護照夾小費禁忌：正規海關窗口嚴格禁止並打擊索賄行為，切勿主動在護照內夾美金或越盾，保持自然禮貌微笑即可。',
      '🚕 機場交通防坑：抵達大廳後，推薦使用 Grab App 叫車，或挑選正規計程車品牌 Vinasun (白車綠紅條) 與 Mai Linh (綠車)，切勿跟隨大廳拉客的黑車司機。'
    ],
    colloquialExtensions: [
      { vi: 'Hành lý quá cước / quá ký', zh: '行李超重', note: '地勤告知超重時會說「Hành lý của bạn bị quá 2 ký rồi」' },
      { vi: 'Chậm chuyến / Hoãn chuyến', zh: '班機延誤 (Delay)', note: '機場螢幕顯示「Delayed」' },
      { vi: 'Hủy chuyến', zh: '班機取消 (Cancelled)', note: '遭遇暴雨颱風時常見' }
    ]
  },

  // 2. 旅館情境
  hotel: {
    scenarioId: 'hotel',
    titleZh: '🏨 飯店入住、退房與客房需求深度研經',
    titleEn: 'Hotel Check-in, Amenities & Hospitality Exegesis',
    coreFormulas: [
      {
        formulaVi: 'Tôi đã đặt phòng trước dưới tên là + [Tên]',
        formulaZh: '我已經在網路上預訂了房間，名字是 + [姓名]',
        explainZh: '「Đặt phòng」即訂房。在櫃檯出示護照時加上這句話，櫃檯人員便能迅速調出 Agoda / Booking 訂單。',
        exampleVi: 'Dạ chào em, tôi đã đặt phòng trước dưới tên David Wang.',
        exampleZh: '你好，我有提前訂房，名字是 David Wang。'
      },
      {
        formulaVi: 'Cho tôi hỏi mật khẩu Wi-Fi là gì? / Phòng có bao gồm bữa sáng không?',
        formulaZh: '請問 Wi-Fi 密碼是什麼？ / 房價包含早餐嗎？',
        explainZh: '早餐為「bữa sáng」或「ăn sáng」；若是自助百匯早餐稱為「buffet sáng」。',
        exampleVi: 'Giá phòng này đã bao gồm buffet sáng chưa ạ?',
        exampleZh: '這房價已經包含自助早餐了嗎？'
      }
    ],
    hanVietRoots: [
      { root: 'Khách sạn (客棧)', origin: '現代越語專指「飯店 / 旅館」，星級為「sao」（Khách sạn 5 sao = 五星級飯店）' },
      { root: 'Tiếp tân / Lễ tân (禮賓/櫃檯)', origin: 'Quầy tiếp tân（飯店接待服務櫃檯）' },
      { root: 'Đặt cọc (訂金/押金)', origin: 'Tiền đặt cọc（入住時預刷或現金押金）' }
    ],
    northSouthContrast: {
      featureZh: '房間設施與叫喚服務生習慣',
      northVi: 'Khăn tắm (毛巾) · Nước nóng (熱水) · Em ơi (服務生/店員)',
      southVi: 'Khăn lau (毛巾) · Nước sôi/ấm (熱水) · Bạn ơi / Em ơi',
      noteZh: '南越飯店人員態度普遍極為熱情隨和，稱呼櫃檯年輕服務人員「Em ơi」最親切自然。'
    },
    culturalNotes: [
      '📋 暫住登記義務 (Đăng ký tạm trú)：越南法律嚴格規定外籍旅客入住旅館時，業者必須在24小時內向當地轄區公安民警線上申報暫住，因此櫃台會借護照拍照存檔，屬正常合法程序。',
      '🧴 飲用水注意：客房桌上未開封的玻璃瓶或貼有「Free / Complimentary」標籤的小瓶礦泉水為免費；冰箱 Minibar 內的飲料與零食則需收費，退房時櫃台會核對。',
      '⏰ 退房時間 (Check-out)：越南標準退房時間多為中午 12:00，如需延遲退房（Trả phòng muộn）應在當日上午 10 點前向櫃台協調，通常延長至下午 2 點前可能免費或收取半天房費。'
    ],
    colloquialExtensions: [
      { vi: 'Cho tôi mượn thêm một cái bàn ủi / máy sấy tóc', zh: '請再借我一個熨斗 / 吹風機', note: '向房務部索取生活電器' },
      { vi: 'Dọn phòng giúp tôi nhé', zh: '請幫我整理房間 (Make up room)', note: '等同於門把上掛的牌子' },
      { vi: 'Gửi hành lý sau khi trả phòng', zh: '退房後寄放行李', note: '退房後去觀光常用的實戰語' }
    ]
  },

  // 3. 餐廳情境
  family_restaurant: {
    scenarioId: 'family_restaurant',
    titleZh: '🍜 道地越南餐廳、熱炒與客製點餐深度研經',
    titleEn: 'Authentic Vietnamese Restaurant & Custom Dining Exegesis',
    coreFormulas: [
      {
        formulaVi: 'Cho tôi xem thực đơn / Em ơi, cho gọi món!',
        formulaZh: '請給我看菜單 / 店員，我要點餐！',
        explainZh: '「Cho tôi xem + [名詞]」是索取任何物品的萬用語；叫店員最親切道地的方式永遠是揚聲呼喚「Em ơi!」。',
        exampleVi: 'Em ơi, cho anh xem thực đơn và gọi món nhé!',
        exampleZh: '店員弟弟/妹妹，請給我看菜單，我要點菜！'
      },
      {
        formulaVi: 'Làm ơn không bỏ + [Gia vị] / Cho riêng ra đĩa',
        formulaZh: '請不要放 + [某調味料/香菜] / 請單獨裝在盤子裡',
        explainZh: '對香菜、蔥花或特定香草不適應時必備的魔法避坑句型。',
        exampleVi: 'Làm ơn không bỏ ngò gai và ớt, cho rau sống riêng ra nhé.',
        exampleZh: '請不要放刺芫荽和辣椒，生菜另外放一盤喔。'
      }
    ],
    hanVietRoots: [
      { root: 'Thực đơn (食單)', origin: '菜單，等於 Menu' },
      { root: 'Ẩm thực (飲食)', origin: 'Ẩm thực Việt Nam（越南飲食文化）' },
      { root: 'Thanh toán / Tính tiền (清算/計錢)', origin: '結帳買單之意' },
      { root: 'Hóa đơn (貨單)', origin: '發票、帳單' }
    ],
    northSouthContrast: {
      featureZh: '餐具與日常菜名南北大差異',
      northVi: 'Bát (碗) · Thìa (勺子) · Lạc (花生) · Nước mắm mặn',
      southVi: 'Chén (碗) · Muỗng (勺子) · Đậu phộng (花生) · Nước mắm ngọt',
      noteZh: '北越注重原味清燉，魚露純鹹不加糖；南越熱炒偏甜、花生入菜極多，桌上必備甜辣椒醬 (Tương ớt) 與黑海鮮醬 (Tương đen)。'
    },
    culturalNotes: [
      '🧻 濕紙巾 (Khăn lạnh)：越南餐廳桌上擺放的包裝濕紙巾多數「拆開即計費」（約 2,000~5,000 VND/包），若未使用結帳時會扣除。',
      '🍵 淡茉莉茶 (Trà đá)：越南平民食肆隨餐附上的冰茉莉綠茶通常免費或僅收 2,000~3,000 VND，店員會主動提著大茶壺為你一直續杯。',
      '🍻 乾杯祝酒口號：三五好友或應酬吃飯碰杯時，全桌必齊聲倒數大喊「Một, Hai, Ba, Dô! (1, 2, 3, 喝!)」，連喊三遍極富感染力。'
    ],
    colloquialExtensions: [
      { vi: 'Cho tôi xin thêm một cái chén và đôi đũa', zh: '請多給我一個小碗和一雙筷子', note: '分食共餐必備' },
      { vi: 'Món này có cay lắm không em?', zh: '這道菜會很辣嗎？', note: '怕辣者點餐必問' },
      { vi: 'Gói mang về giúp tôi / Mang về', zh: '幫我打包外帶 / 外帶', note: '吃不完打包之意' }
    ]
  },

  // 4. 咖啡廳情境
  cafe: {
    scenarioId: 'cafe',
    titleZh: '☕ 越南滴漏咖啡、甜度冰量與名店文化深度研經',
    titleEn: 'Vietnamese Slow-Drip Coffee & Sugar-Ice Spectrum Exegesis',
    coreFormulas: [
      {
        formulaVi: 'Cho tôi một ly + [Tên cà phê] + [Đường / Đá]',
        formulaZh: '請給我一杯 + [咖啡名稱] + [甜度/冰塊]',
        explainZh: '量詞用「ly」（杯）；熱飲用「tách / ly nóng」。',
        exampleVi: 'Cho tôi một ly cà phê sữa đá, ít đường nhiều đá nhé.',
        exampleZh: '請給我一杯冰奶咖啡，微糖（少糖）多冰。'
      },
      {
        formulaVi: 'Uống ở đây hay mang đi / mang về?',
        formulaZh: '內用還外帶？',
        explainZh: '「Uống ở đây」（在這裡喝 / 內用）；「Mang đi / Mang về」（外帶）。',
        exampleVi: 'Dạ, tôi uống ở đây ạ.',
        exampleZh: '好的，我在這裡內用。'
      }
    ],
    hanVietRoots: [
      { root: 'Cà phê (法語 Café 音譯)', origin: '法國殖民時期引進羅布斯塔 (Robusta) 豆，造就今日世界第二大咖啡出口國' },
      { root: 'Nguyên chất (原質)', origin: '指 100% 純天然咖啡豆磨製，不混添加物' },
      { root: 'Đặc sản (特產)', origin: '如大叻阿拉比卡、邦美蜀羅布斯塔' }
    ],
    northSouthContrast: {
      featureZh: '咖啡名稱與風味演進',
      northVi: 'Nâu đá (棕色冰咖啡 = 冰煉乳咖啡) · Đen đá (黑冰咖啡) · Cà phê trứng (河內蛋咖啡)',
      southVi: 'Cà phê sữa đá (經典冰奶咖) · Cà phê đen · Bạc xỉu (白咖啡：多奶微咖啡)',
      noteZh: '河內人習慣稱煉乳咖啡為「Nâu đá」（棕色）；西貢人則直接叫「Cà phê sữa đá」；而「Bạc xỉu」源自廣東話「白小（白少涼）」，奶香極濃深受女性歡迎。'
    },
    culturalNotes: [
      '☕ 滴漏壺 (Phin)：傳統越式咖啡上桌時，底部是厚厚一層煉乳，上方鋁製濾壺正一滴一滴緩緩滴出濃黑汁液，必須耐心等待 5 分鐘滴完再自行用湯匙攪勻。',
      '🧊 冰塊文化：越南熱帶氣候炎熱，喝冰咖啡時會附上一大玻璃杯純透明柱狀冰塊，將拌勻的濃熱咖啡倒入冰杯中瞬間冷卻，滋味醇厚無比。',
      '🌿 特色新潮咖啡：近年風靡全越的「Cà phê muối (順化鹽咖啡)」在奶泡中加入海鹽，鹹甜回甘；「Cà phê dừa (椰奶冰沙咖啡)」則是消暑首選。'
    ],
    colloquialExtensions: [
      { vi: 'Ít ngọt / Không đường', zh: '微甜 / 無糖（純黑）', note: '越南預設甜度極高，怕甜一定要講' },
      { vi: 'Cho xin pass Wi-Fi', zh: '請問 Wi-Fi 密碼', note: '咖啡館辦公常客口頭禪' },
      { vi: 'Đi cà phê nhé!', zh: '去喝咖啡吧！', note: '越南最經典的社交邀請語，意同「出來聊聊天」' }
    ]
  },

  // 5. 公司碰面與商務拜會
  business_meeting: {
    scenarioId: 'business_meeting',
    titleZh: '💼 職場跨國拜訪、名片交換與商務會議深度研經',
    titleEn: 'Cross-Border Business Protocol & Corporate Meeting Exegesis',
    coreFormulas: [
      {
        formulaVi: 'Dạ, em chào Giám đốc / Anh [Tên] ạ! Rất hân hạnh được gặp anh.',
        formulaZh: '您好，拜見總經理 / [某某] 哥！非常榮幸見到您。',
        explainZh: '在職場中，對長輩主管一律自稱「Em」，對方稱職稱（Giám đốc / Quản lý / Trưởng phòng）或「Anh/Chị + 名字」，句首加「Dạ」，句尾加「ạ」，禮貌度拉滿。',
        exampleVi: 'Dạ, em chào Giám đốc Nam ạ! Em là Minh từ công ty đối tác Đài Loan.',
        exampleZh: 'Nam 總經理好！我是來自台灣合作夥伴公司的阿明。'
      },
      {
        formulaVi: 'Đây là danh thiếp của em, xin gửi anh/chị ạ.',
        formulaZh: '這是我的名片，請您收下。',
        explainZh: '「Danh thiếp」（名片）遞送時務必雙手持兩角，正面文字朝向對方，微鞠躬雙眼注視對方致意。',
        exampleVi: 'Em xin gửi Giám đốc danh thiếp của em ạ.',
        exampleZh: '請總經理收下我的名片。'
      }
    ],
    hanVietRoots: [
      { root: 'Doanh nghiệp (企業)', origin: 'Doanh nghiệp FDI（外資企業）' },
      { root: 'Hợp tác (合作)', origin: 'Quan hệ hợp tác（合作夥伴關係）' },
      { root: 'Hợp đồng (合同/合約)', origin: 'Ký kết hợp đồng（簽署合約）' },
      { root: 'Dự án (專案/項目)', origin: 'Tiến độ dự án（專案推進進度）' }
    ],
    northSouthContrast: {
      featureZh: '南北商務職場社交風格',
      northVi: 'Nghi thức trang trọng (重規矩禮數) · Trà mạn (喝熱普洱濃茶) · Họp bàn tròn',
      southVi: 'Nhanh gọn thực tế (效率導向) · Cà phê giao lưu (星巴克/高地咖啡聊) · Nhậu tối',
      noteZh: '北越河內做生意重視體制、背景人脈信任度積累；南越胡志明市節奏快，商業談判更注重數字投報率 (ROI) 與交期。'
    },
    culturalNotes: [
      '📇 名片尊重禮節：接過對方名片後，切忌立刻隨手塞進褲袋或在上面亂塗寫，應雙手接過、仔細閱讀對方職稱，開會時平整擺放在自己面前的桌上以示尊重。',
      '💬 Zalo 職場即時溝通：越南全國商業溝通幾乎全依賴 Zalo App（類似微信/LINE），會談結束前互加 Zalo「Kết bạn Zalo」是建立後續商業跟進的最關鍵一步。',
      '🍻 酒桌應酬文化 (Nhậu)：重大合約談判前或達成後，越方合作夥伴常會邀請晚宴應酬，餐桌上主動雙手敬酒能迅速拉近信任距離。'
    ],
    colloquialExtensions: [
      { vi: 'Cho em xin số Zalo của anh nhé', zh: '請給我您的 Zalo 號碼好嗎？', note: '建立長期聯繫必備' },
      { vi: 'Hẹn gặp lại anh vào buổi họp sau', zh: '期待下次會議與您再相聚', note: '會議告別語' },
      { vi: 'Biên bản cuộc họp', zh: '會議記錄 (Minutes)', note: '會後整理發送用' }
    ]
  },

  // 6. 租屋看房與房屋仲介
  rent: {
    scenarioId: 'rent',
    titleZh: '🏠 越南公寓租屋看房、租約簽署與管費避坑深度研經',
    titleEn: 'Condo Rental, Lease Contract & Landlord Negotiation Exegesis',
    coreFormulas: [
      {
        formulaVi: 'Giá thuê một tháng là bao nhiêu? Đã bao gồm phí quản lý chưa?',
        formulaZh: '每個月租金是多少？已經包含大樓管理費了嗎？',
        explainZh: '在河內或胡志明市租住大樓公寓 (Chung cư)，管理費 (Phí quản lý) 通常由租客承擔或含在租金內，務必事前釐清。',
        exampleVi: 'Chị ơi, căn hộ 2 phòng ngủ này giá thuê đã bao gồm phí quản lý chưa ạ?',
        exampleZh: '姐，這間兩房一廳公寓租金已經包含管理費了嗎？'
      },
      {
        formulaVi: 'Tiền cọc mấy tháng và thanh toán thế nào?',
        formulaZh: '押金幾個月？租金如何支付？',
        explainZh: '越南租屋行情通常為「Cọc 2 đóng 1」（押二付一）或「Cọc 1 đóng 3」（押一付三）。',
        exampleVi: 'Hợp đồng này đặt cọc 2 tháng và đóng tiền theo quý (3 tháng một lần) đúng không ạ?',
        exampleZh: '這合約是押金 2 個月，按季（每3個月付一次）付款對嗎？'
      }
    ],
    hanVietRoots: [
      { root: 'Môi giới (媒介/仲介)', origin: 'Người môi giới bất động sản（房地產仲介）' },
      { root: 'Chủ nhà (主家/房東)', origin: 'Bên A / Chủ nhà（合約出租方）' },
      { root: 'Đặt cọc (定金)', origin: 'Tiền ký quỹ đặt cọc giữ chỗ' },
      { root: 'Kỳ hạn (期限)', origin: 'Thời hạn hợp đồng（合約租期通常至少1年）' }
    ],
    northSouthContrast: {
      featureZh: '房型叫法與氣候適應',
      northVi: 'Chung cư (公寓住宅) · Bình nóng lạnh (儲熱熱水器) · Nồm ẩm (春天反潮)',
      southVi: 'Căn hộ (大樓住宅) · Máy nước nóng (熱水器) · Máy lạnh (冷氣重中之重)',
      noteZh: '北越冬季寒冷春季「Nồm」（地板牆面潮濕滴水），看房需確認除濕設備；南越四季如夏，冷氣電費與變頻 (Inverter) 是最大日常開銷。'
    },
    culturalNotes: [
      '⚡ 水電費陷阱：越南國家電力公司 (EVN) 採階梯電價，簽約前務必確認電表是「獨立家庭民用電表 (Công tơ riêng)」還是房東私自加價的固定度數費（如 4,000 VND/度）。',
      '👮 派出所民警暫住登記：合約簽署後，依法房東必須拿著租賃合約與租客護照至坊公安局（Công an phường）線上登記暫住，外籍人士才能安心辦理工作證與暫住卡 (TRC)。',
      '🛋️ 傢俱盤點清單 (Biên bản bàn giao)：交屋點交當日，務必將冷氣遙控器、沙發刮痕、牆壁水漬拍照存檔，列入交接附件，避免退租時押金遭扣。'
    ],
    colloquialExtensions: [
      { vi: 'Bao trọn gói / Full nội thất', zh: '全包家具家電（拎包入住）', note: '包含床、衣櫃、電視、冰箱、洗衣機' },
      { vi: 'Chưa bao gồm điện nước internet', zh: '未包含水電與網路費', note: '租客每月末自行結算' },
      { vi: 'Sửa chữa thiết bị hỏng hóc', zh: '維修故障損壞設備', note: '釐清哪些損壞由房東負責出資維修' }
    ]
  },

  // 7. 社交閒聊與生活關懷
  smalltalk: {
    scenarioId: 'smalltalk',
    titleZh: '💬 天氣休閒、人際破冰與日常社交深度研經',
    titleEn: 'Social Icebreaking, Weather & Casual Interaction Exegesis',
    coreFormulas: [
      {
        formulaVi: 'Hôm nay thời tiết đẹp quá nhỉ? / Dạo này bạn thế nào?',
        formulaZh: '今天天氣真好呢？ / 最近過得怎麼樣？',
        explainZh: '「Dạo này + [Chủ ngữ] + thế nào?」是向朋友、同事或合作夥伴打招呼關心近況最高頻的開場白。',
        exampleVi: 'Chào Lan, dạo này công việc của em thế nào, có bận lắm không?',
        exampleZh: 'Lan 你好，最近工作怎麼樣，會很忙嗎？'
      },
      {
        formulaVi: 'Bạn ở Việt Nam đã quen chưa? / Ăn được đồ ăn Việt không?',
        formulaZh: '你在越南習慣了嗎？ / 吃得慣越南食物嗎？',
        explainZh: '越南朋友關心外國友人最常問的經典溫暖兩大話題。',
        exampleVi: 'Tôi ở đây quen rồi, tôi rất thích ăn phở và bún chả.',
        exampleZh: '我已經習慣這裡了，我非常喜歡吃河粉和烤肉米線。'
      }
    ],
    hanVietRoots: [
      { root: 'Thời tiết (氣候/天氣)', origin: 'Khí hậu thời tiết' },
      { root: 'Cuộc sống (生活)', origin: 'Cuộc sống hàng ngày（日常生活）' },
      { root: 'Sở thích (所好/嗜好)', origin: '興趣愛好' }
    ],
    northSouthContrast: {
      featureZh: '招呼語與生活節奏感',
      northVi: 'Chào bác / Chào cô · Uống nước chè · Nói chuyện nhẹ nhàng kín đáo',
      southVi: 'Chào nha / Khỏe không? · Đi uống cà phê / Đi nhậu · Thẳng thắn cởi mở',
      noteZh: '南越人性格樂天豪爽，見面常問「Khỏe không? (身體好嗎/好不好?)」，句尾愛加「nha / nghen」顯得格外親熱。'
    },
    culturalNotes: [
      '🎂 詢問年齡與婚姻家庭：在西方文化中問年齡或婚姻是隱私禁忌，但在越南文化中詢問「Bạn sinh năm bao nhiêu? (你哪一年出生的?)」純粹是為了精準使用長幼尊稱 (Anh/Chị/Em)，完全無冒犯之意。',
      '🤝 親切招呼代名詞：只要比自己略長皆可親切稱呼「Anh (哥)」或「Chị (姐)」，自稱「Em」，能瞬間拉近彼此心理距離。'
    ],
    colloquialExtensions: [
      { vi: 'Cuối tuần này bạn có kế hoạch gì chưa?', zh: '這個週末你有什麼安排規劃了嗎？', note: '邀約聚餐起手式' },
      { vi: 'Dô! / Trăm phần trăm (100%)', zh: '乾杯！ / 乾杯喝光 (100%)', note: '熱炒聚會經典詞' },
      { vi: 'Hẹn gặp lại nhé!', zh: '再見囉！', note: '依依惜別道別語' }
    ]
  }
};

/**
 * 輔助檢索：取得指定情境的研經資料，若無專屬研經則回傳共通實戰研經架構
 */
export const getScenarioExegesis = (scenarioId = '') => {
  if (SCENARIO_EXEGESIS[scenarioId]) {
    return SCENARIO_EXEGESIS[scenarioId];
  }

  // 預設共通研經結構，根據情境特徵提供實用語法與文化指南
  return {
    scenarioId,
    titleZh: '📚 實況會話結構拆解與實戰研經',
    titleEn: 'Dialogue Syntax Breakdown & Situational Lore',
    coreFormulas: [
      {
        formulaVi: 'Làm ơn cho tôi hỏi + [Nội dung]',
        formulaZh: '麻煩請問一下 + [詢問內容]',
        explainZh: '「Làm ơn + 動詞」為極度禮貌客氣的開口方式，適用於任何陌生地點問路、詢價或向服務人員請求協助。',
        exampleVi: 'Làm ơn cho tôi hỏi đường này đi ra bến xe được không ạ?',
        exampleZh: '麻煩請問一下這條路可以去客運站嗎？'
      },
      {
        formulaVi: 'Tôi muốn + [Động từ] + có được không ạ?',
        formulaZh: '我想要 + [動作] + 可以嗎？',
        explainZh: '提出需求並在句尾加上「có được không ạ?」營造謙和商量語氣，對方答應機率極高。',
        exampleVi: 'Tôi muốn đổi sang bàn gần cửa sổ có được không ạ?',
        exampleZh: '我想要換到靠窗的桌子可以嗎？'
      }
    ],
    hanVietRoots: [
      { root: 'Thuần Việt (純越語)', origin: '日常口語高頻詞多為百越原生詞彙，注重聲調抑揚頓挫' },
      { root: 'Hán Việt (漢越詞)', origin: '佔正式詞彙 60% 以上，發音與台語客家話高度對應' }
    ],
    northSouthContrast: {
      featureZh: '南北越語音與音調共通規律',
      northVi: 'Hà Nội: Đủ 6 thanh điệu (平、玄、銳、問、跌、重), phát âm d/r/gi phân minh',
      southVi: 'Sài Gòn: Nhập thanh Hỏi/Ngã thành một, âm "v" phát âm tự nhiên như "d/y"',
      noteZh: '北越音清脆端莊，南越音軟濡熱情；聽懂問聲 (Hỏi) 與跌聲 (Ngã) 在南越合併為一種「先降後升」的調型即可完全聽懂雙方。'
    },
    culturalNotes: [
      '微笑與點頭是通行全越的萬靈丹；遇到聽不懂的句子可以微笑說「Làm ơn nói chậm lại một chút」請對方說慢一點。',
      '善用雙手接物（名片、找零、菜單、證件），能立刻贏得在地人的敬重與溫暖回饋。'
    ],
    colloquialExtensions: [
      { vi: 'Dạ vâng ạ', zh: '好的/是的（極具禮貌教養的回答）', note: '南北皆大受好評' },
      { vi: 'Cảm ơn nhiều nha!', zh: '非常感謝喔！', note: '親切熱情道謝語' }
    ]
  };
};
