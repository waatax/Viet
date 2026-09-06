/**
 * 越南政經 (Vietnam Politics & Economy) 數據核心庫
 * 涵蓋：5 年每週 USD/VND 與 TWD/VND 歷史匯率、越南國家銀行 (SBV) 政策利率、
 * 各大公私立銀行存貸利率矩陣、海關總局外貿與關稅數據、
 * 一流新聞網／智庫級深度政經專案報告、權威官方參考資料庫與雙語國際化字典。
 */

// ── 1. 即時市場行情跑馬燈數據 (Live Ticker Items - Bilingual) ──
export const liveMarketTicker = [
  {
    id: 'usdvnd',
    name: 'USD/VND 現匯',
    nameVi: 'Tỷ giá USD/VND',
    val: '25,485',
    delta: '+0.12%',
    type: 'up',
    note: '牌價高檔盤整',
    noteVi: 'Tỷ giá niêm yết neo vùng đỉnh'
  },
  {
    id: 'twdvnd',
    name: 'TWD/VND (1台幣)',
    nameVi: 'TWD/VND (1 Đài tệ)',
    val: '791.5 ₫',
    delta: '+0.08%',
    type: 'up',
    note: '1萬越盾折合 126.3 NT$',
    noteVi: '10.000 VND quy đổi 12,63 NT$'
  },
  {
    id: 'sbv_refinance',
    name: 'SBV 再融資利率',
    nameVi: 'Lãi suất tái cấp vốn SBV',
    val: '4.50%',
    delta: '持平',
    type: 'neutral',
    note: '維持寬鬆以挺GDP',
    noteVi: 'Duy trì nới lỏng hỗ trợ GDP'
  },
  {
    id: 'vcb_12m',
    name: 'Big4 12M 定存基準',
    nameVi: 'Lãi suất tiết kiệm 12T Big 4',
    val: '4.80%',
    delta: '+0.10%',
    type: 'up',
    note: '公股行庫微調',
    noteVi: 'Khối quốc doanh nhích nhẹ'
  },
  {
    id: 'preferential_loan',
    name: '優先產業放款利率',
    nameVi: 'Lãi suất vay lĩnh vực ưu tiên',
    val: '4.00%',
    delta: '法定上限',
    type: 'neutral',
    note: '支持高科技與中小企',
    noteVi: 'Hỗ trợ công nghệ cao & SME'
  },
  {
    id: 'trade_surplus',
    name: '累計外貿順差',
    nameVi: 'Xuất siêu lũy kế',
    val: '$26.85 B',
    delta: '+14.2% YoY',
    type: 'up',
    note: '創同期歷來次高',
    noteVi: 'Mức cao thứ 2 trong lịch sử'
  },
  {
    id: 'fdi_disbursed',
    name: '實際到位 FDI',
    nameVi: 'Vốn FDI thực hiện',
    val: '$23.80 B',
    delta: '+8.6% YoY',
    type: 'up',
    note: '電子封測與光伏主導',
    noteVi: 'Bán dẫn & năng lượng dẫn dắt'
  },
  {
    id: 'vnindex',
    name: 'VN-Index (胡志明)',
    nameVi: 'Chỉ số VN-Index (HOSE)',
    val: '1,288.4',
    delta: '+0.45%',
    type: 'up',
    note: '邁向升級富時新興市場',
    noteVi: 'Tiến trình nâng hạng thị trường FTSE'
  },
  {
    id: 'gold_sjc',
    name: 'SJC 金條買賣',
    nameVi: 'Vàng miếng SJC',
    val: '80.5M - 82.5M',
    delta: '溢價收斂',
    type: 'neutral',
    note: '央行直售平抑黑市',
    noteVi: 'SBV bán can thiệp ổn định thị trường'
  },
  {
    id: 'gdp_target',
    name: '2026 全年 GDP 目標',
    nameVi: 'Mục tiêu tăng trưởng GDP 2026',
    val: '6.8% ~ 7.0%',
    delta: '穩居東協之冠',
    type: 'up',
    note: '出口與公眾投資雙輪驅動',
    noteVi: 'Động lực từ xuất khẩu & đầu tư công'
  }
];

// ── 2. 八大核心總經 KPI 卡片數據 (Metric Grid - Bilingual) ──
export const macroKpiMetrics = [
  {
    id: 'fx_spot',
    title: 'USD/VND 現匯賣出價 (VCB)',
    titleVi: 'Tỷ giá USD/VND bán ra (Vietcombank)',
    value: '25,485',
    unit: 'VND',
    unitVi: 'VND',
    badge: '央行區間上緣',
    badgeVi: 'Cận trên biên độ SBV',
    badgeColor: 'gold',
    desc: '央行中心匯率 24,265 VND (±5% 波動區間上限 25,478)',
    descVi: 'Tỷ giá trung tâm 24.265 VND (biên độ ±5%, trần 25.478 VND)',
    trend: '高位承壓',
    trendVi: 'Neo cao chịu áp lực'
  },
  {
    id: 'sbv_rate',
    title: '越南國家銀行 (SBV) 基準再融資率',
    titleVi: 'Lãi suất tái cấp vốn điều hành (SBV)',
    value: '4.50%',
    unit: '年息',
    unitVi: '/năm',
    badge: '貨幣政策寬鬆',
    badgeVi: 'Chính sách tiền tệ nới lỏng',
    badgeColor: 'blue',
    desc: '再貼現率 3.00% · 隔夜同業拆款 4.25% · 短期存款上限 4.75%',
    descVi: 'Tái chiết khấu 3,00% · Qua đêm 4,25% · Trần tiền gửi <6T 4,75%',
    trend: '維持現狀',
    trendVi: 'Duy trì ổn định'
  },
  {
    id: 'deposit_12m',
    title: '四大國有公股行庫 12M 定存利率',
    titleVi: 'Lãi suất tiết kiệm 12 tháng nhóm Big 4',
    value: '4.70% ~ 4.90%',
    unit: '年息',
    unitVi: '/năm',
    badge: '利差穩定',
    badgeVi: 'Biên lãi ổn định',
    badgeColor: 'green',
    desc: 'Vietcombank 4.7% · BIDV/VietinBank/Agribank 4.8%~4.9%',
    descVi: 'Vietcombank 4,7% · BIDV / VietinBank / Agribank 4,8%~4,9%',
    trend: '小幅上揚',
    trendVi: 'Nhích tăng nhẹ'
  },
  {
    id: 'lending_rate',
    title: '短期一般商業貸款／優先放款',
    titleVi: 'Lãi suất cho vay ngắn hạn & ưu tiên',
    value: '4.0% / 6.5%~7.8%',
    unit: '年息',
    unitVi: '/năm',
    badge: '信貸空間充裕',
    badgeVi: 'Dư địa tín dụng dồi dào',
    badgeColor: 'blue',
    desc: '法定優先領域 4.0% 上限 · 中長企貸 8.5%~10.2%',
    descVi: 'Trần ưu tiên 4,0% · Vay kinh doanh thông thường 6,5%~7,8%',
    trend: '實體利息溫和',
    trendVi: 'Chi phí vốn hợp lý'
  },
  {
    id: 'trade_turnover',
    title: '年度貨物進出口總額 (GSO/海關)',
    titleVi: 'Tổng kim ngạch xuất nhập khẩu (Tổng cục Hải quan)',
    value: '$785.4',
    unit: '十億美元 (B)',
    unitVi: 'Tỷ USD',
    badge: '全球外貿前二十',
    badgeVi: 'Top 20 thương mại toàn cầu',
    badgeColor: 'green',
    desc: '出口 $406.1B (YoY +14.5%) · 進口 $379.3B (YoY +13.8%)',
    descVi: 'Xuất khẩu $406,1B (+14,5%) · Nhập khẩu $379,3B (+13,8%)',
    trend: '強勁擴張',
    trendVi: 'Tăng trưởng mạnh mẽ'
  },
  {
    id: 'trade_surplus',
    title: '貨物貿易順差 (Xuất siêu)',
    titleVi: 'Cán cân thương mại hàng hóa (Xuất siêu)',
    value: '+$26.85',
    unit: '十億美元 (B)',
    unitVi: 'Tỷ USD',
    badge: '外匯重要防線',
    badgeVi: 'Lá chắn dự trữ ngoại hối',
    badgeColor: 'green',
    desc: '對美順差突破千億美元 · 對中逆差因零組件進口擴大',
    descVi: 'Xuất siêu sang Mỹ vượt 100 tỷ USD · Nhập siêu linh kiện từ TQ',
    trend: '高順差支撐',
    trendVi: 'Thặng dư vững chắc'
  },
  {
    id: 'fdi_inflow',
    title: '外人直接投資 (FDI) 實際到位資金',
    titleVi: 'Vốn đầu tư trực tiếp nước ngoài (FDI) giải ngân',
    value: '$23.8',
    unit: '十億美元 (B)',
    unitVi: 'Tỷ USD',
    badge: '外資重倉製造業',
    badgeVi: 'Dòng vốn tập trung chế tạo',
    badgeColor: 'purple',
    desc: '新註冊外資 $38.2B · 高科技半導體與消費電子佔 72%',
    descVi: 'Vốn đăng ký mới $38,2B · Bán dẫn & điện tử chiếm 72%',
    trend: '穩步吸資',
    trendVi: 'Thu hút vốn ổn định'
  },
  {
    id: 'gdp_macro',
    title: '越南實質 GDP 成長率',
    titleVi: 'Tăng trưởng GDP thực tế của Việt Nam',
    value: '6.85%',
    unit: 'YoY',
    unitVi: 'YoY',
    badge: '東協成長領頭羊',
    badgeVi: 'Dẫn đầu tăng trưởng ASEAN',
    badgeColor: 'green',
    desc: '製造業與加工出口復甦 · 670億美元南北高鐵公建發力',
    descVi: 'Chế biến chế tạo phục hồi · Đại dự án đường sắt 67 tỷ USD',
    trend: '樂觀擴張',
    trendVi: 'Mở rộng tích cực'
  }
];

// ── 3. 過去 5 年 USD/VND 每週匯率歷史數據集 (2021-2026) ──
export const fiveYearWeeklyUsdVndData = [
  // 2021 年：疫情重擊但出口激增，匯率極度平穩（22,800 ~ 23,100）
  { date: '2021-01-08', close: 23110, central: 23130, blackMarket: 23350, change: 0.05, note: '越共十三大召開，經濟方針確立', noteVi: 'Đại hội Đảng XIII khai mạc, định hình đường lối kinh tế' },
  { date: '2021-03-12', close: 23070, central: 23190, blackMarket: 23420, change: -0.17, note: '美聯儲維持零利率，外資熱錢流入', noteVi: 'Fed duy trì lãi suất 0%, dòng vốn ngoại chảy mạnh vào' },
  { date: '2021-05-14', close: 23050, central: 23160, blackMarket: 23380, change: -0.09, note: '越南北部工業區（北江、北寧）爆發疫情隔離', noteVi: 'Bắc Ninh, Bắc Giang giãn cách phòng dịch tại các KCN' },
  { date: '2021-07-16', close: 23010, central: 23190, blackMarket: 23290, change: -0.17, note: '胡志明市封城三個月，生產鏈三就地原則', noteVi: 'TP.HCM thực hiện giãn cách xã hội và nguyên tắc 3 tại chỗ' },
  { date: '2021-09-17', close: 22860, central: 23140, blackMarket: 23180, change: -0.65, note: '越南央行調降外幣存準率，越盾逆勢升值', noteVi: 'SBV hạ dự trữ bắt buộc ngoại tệ, VND lên giá ngược chiều' },
  { date: '2021-11-19', close: 22760, central: 23120, blackMarket: 23450, change: -0.44, note: '創五年最強匯價 22,760，外匯存底達1,100億美元巔峰', noteVi: 'Đạt đỉnh giá cao nhất 5 năm 22.760, dự trữ ngoại hối đạt 110 tỷ USD' },
  { date: '2021-12-31', close: 22840, central: 23145, blackMarket: 23550, change: 0.35, note: '年終結匯需求，整年越盾維持強勢韌性', noteVi: 'Nhu cầu chuyển đổi ngoại tệ cuối năm, VND duy trì sức mạnh' },

  // 2022 年：Fed 暴力升息，俄烏衝突爆發，萬盛發事件衝擊，越盾開啟大貶週期
  { date: '2022-02-25', close: 22890, central: 23140, blackMarket: 23520, change: 0.22, note: '俄烏衝突爆發，全球能源原物料價格暴漲', noteVi: 'Xung đột Nga - Ukraine bùng nổ, giá năng lượng toàn cầu tăng vọt' },
  { date: '2022-04-15', close: 22980, central: 23110, blackMarket: 23480, change: 0.39, note: 'Fed 啟動升息循環，強勢美元指數 (DXY) 突破 100', noteVi: 'Fed khởi động chu kỳ tăng lãi suất, chỉ số DXY vượt mốc 100' },
  { date: '2022-06-17', close: 23220, central: 23090, blackMarket: 23900, change: 1.04, note: 'Fed 單次升息 75bps，新興市場資金外流', noteVi: 'Fed tăng mạnh lãi suất 75 điểm cơ bản, vốn rút khỏi thị trường mới nổi' },
  { date: '2022-08-19', close: 23410, central: 23205, blackMarket: 24100, change: 0.82, note: '美越利差倒掛擴大，進口商搶購美元鎖匯', noteVi: 'Chênh lệch lãi suất USD-VND đảo chiều, doanh nghiệp gom USD' },
  { date: '2022-09-23', close: 23720, central: 23324, blackMarket: 24280, change: 1.32, note: 'SBV 升息 100bps 捍衛匯率（再融資利率升至 5.0%）', noteVi: 'SBV tăng lãi suất điều hành 100 bps để bảo vệ tỷ giá' },
  { date: '2022-10-14', close: 24150, central: 23541, blackMarket: 25100, change: 1.81, note: '萬盛發集團 (Van Thinh Phat) 案爆發，SCB 擠兌，匯率承壓', noteVi: 'Vụ án Vạn Thịnh Phát xảy ra, SCB tái cơ cấu, tỷ giá chịu sức ép' },
  { date: '2022-10-21', close: 24870, central: 23688, blackMarket: 25350, change: 2.98, note: '【歷史里程碑】越南央行宣布匯率波動區間由 ±3% 擴大至 ±5%', noteVi: '【Cột mốc lịch sử】SBV nới rộng biên độ tỷ giá từ ±3% lên ±5%' },
  { date: '2022-11-18', close: 24860, central: 23677, blackMarket: 25050, change: -0.04, note: 'SBV 二度升息 100bps（再融資至 6.0%），拋售 250 億美元外匯儲備', noteVi: 'SBV tăng thêm 100 bps (tái cấp vốn lên 6%), can thiệp bán 25 tỷ USD' },
  { date: '2022-12-30', close: 23730, central: 23612, blackMarket: 23800, change: -4.55, note: '全球通膨預期降溫，年底越盾大幅反彈收復失土', noteVi: 'Lạm phát toàn cầu hạ nhiệt, VND phục hồi mạnh mẽ cuối năm' },

  // 2023 年：經濟成長放緩，SBV 逆勢領先全球降息 4 次救房地產與出口
  { date: '2023-02-17', close: 23960, central: 23639, blackMarket: 23750, change: 0.97, note: '出口訂單萎縮，政府強力要求銀行降息注水', noteVi: 'Đơn hàng xuất khẩu sụt giảm, Chính phủ yêu cầu giảm lãi suất cho vay' },
  { date: '2023-03-31', close: 23630, central: 23600, blackMarket: 23580, change: -1.38, note: 'SBV 逆勢降息 50bps，釋放房地產與企業流動性', noteVi: 'SBV đi ngược thế giới hạ lãi suất 50 bps, khơi thông thanh khoản BĐS' },
  { date: '2023-05-26', close: 23660, central: 23681, blackMarket: 23550, change: 0.13, note: 'SBV 再度調降政策利率，連續三度降息', noteVi: 'SBV tiếp tục giảm lãi suất điều hành lần thứ 3 liên tiếp' },
  { date: '2023-06-23', close: 23700, central: 23732, blackMarket: 23650, change: 0.17, note: 'SBV 降息至 4.50%，累計降息 150~200bps，越盾開始弱化', noteVi: 'Tái cấp vốn về 4,5%, giảm tổng cộng 150-200 bps, VND bắt đầu suy yếu' },
  { date: '2023-08-18', close: 23990, central: 23951, blackMarket: 24150, change: 1.22, note: '美越利差高達 500bps，匯率再度逼近 24,000 大關', noteVi: 'Chênh lệch lãi suất USD-VND lên tới 500 bps, tỷ giá chạm 24.000' },
  { date: '2023-09-22', close: 24380, central: 24060, blackMarket: 24450, change: 1.63, note: '拜登訪越升格為「全面戰略夥伴」，SBV 發行央行票據 (T-Bills) 抽資', noteVi: 'Nâng cấp quan hệ Việt - Mỹ lên Đối tác Chiến lược Toàn diện; phát hành T-Bills' },
  { date: '2023-11-17', close: 24340, central: 23972, blackMarket: 24650, change: -0.16, note: '央行累計回籠近 360 兆越盾，匯率暫獲支撐', noteVi: 'SBV hút về gần 360 nghìn tỷ VND qua T-Bills, tỷ giá tạm ổn' },
  { date: '2023-12-29', close: 24420, central: 23866, blackMarket: 24780, change: 0.33, note: '2023 貿易順差達 280 億美元，奠定外儲回補基礎', noteVi: 'Xuất siêu cả năm 2023 đạt 28 tỷ USD, tạo nền tảng phục hồi dự trữ ngoại hối' },

  // 2024 年：進口備料暴增、國內 SJC 黃金狂飆溢價、美元突破 25,000 歷史高位
  { date: '2024-02-23', close: 24650, central: 23996, blackMarket: 25250, change: 0.94, note: '國內金價較國際溢價 2,000 萬越盾，黑市狂吸美金走私黃金', noteVi: 'Chênh lệch giá vàng SJC lên 20 triệu/lượng, chợ đen gom USD nhập lậu' },
  { date: '2024-04-19', close: 25440, central: 24260, blackMarket: 25750, change: 3.20, note: '【歷史新高點】USD/VND 突破 25,400 觸及當日交易區間上限', noteVi: '【Đỉnh lịch sử】USD/VND vượt 25.400 chạm kịch trần biên độ can thiệp' },
  { date: '2024-05-24', close: 25460, central: 24264, blackMarket: 25880, change: 0.08, note: 'SBV 連續啟動黃金拍賣並動用外匯拋售介入匯市', noteVi: 'SBV đấu thầu vàng miếng và bán ngoại tệ can thiệp tỷ giá' },
  { date: '2024-06-28', close: 25470, central: 24260, blackMarket: 26020, change: 0.04, note: '黑市匯率突破 26,000，央行實施強制金條公股銀行直售', noteVi: 'Chợ đen vượt 26.000, SBV giao 4 ngân hàng Big 4 trực tiếp bán vàng bình ổn' },
  { date: '2024-08-23', close: 25050, central: 24250, blackMarket: 25280, change: -1.65, note: 'Fed 釋放 9 月降息訊號，越盾迎來報復性回升 400 越盾', noteVi: 'Fed phát tín hiệu hạ lãi suất tháng 9, VND tăng mạnh lại hơn 400 đồng' },
  { date: '2024-10-18', close: 25210, central: 24199, blackMarket: 25400, change: 0.64, note: '越共高層交接完成，政局明朗化', noteVi: 'Kiện toàn bộ máy lãnh đạo cấp cao, chính trị ổn định vững chắc' },
  { date: '2024-12-27', close: 25420, central: 24255, blackMarket: 25580, change: 0.83, note: '進口生產鏈全面回溫，外貿總額突破 7,800 億美元', noteVi: 'Chuỗi nhập khẩu nguyên phụ liệu phục hồi mạnh, tổng kim ngạch vượt 780 tỷ USD' },

  // 2025 年：全球半導體景氣復甦，高鐵計畫啟動，匯率高位穩定（25,200 ~ 25,600）
  { date: '2025-02-21', close: 25360, central: 24230, blackMarket: 25520, change: -0.24, note: '川普第二任貿易關稅陰影初現，各國供應鏈加速向越轉移', noteVi: 'Tác động từ chính sách thuế quan mới, dòng dịch chuyển chuỗi cung ứng sang VN' },
  { date: '2025-05-16', close: 25430, central: 24260, blackMarket: 25610, change: 0.28, note: '國會正式核准 670 億美元南北高鐵建設期程方案', noteVi: 'Quốc hội chính thức thông qua chủ trương đầu tư Đường sắt cao tốc Bắc - Nam 67 tỷ USD' },
  { date: '2025-08-22', close: 25390, central: 24245, blackMarket: 25550, change: -0.16, note: '出口動能持續擴張，經常帳順差穩健支撐', noteVi: 'Động lực xuất khẩu mở rộng, thặng dư tài khoản vãng lai hỗ trợ tỷ giá' },
  { date: '2025-11-21', close: 25460, central: 24270, blackMarket: 25640, change: 0.28, note: 'FDI 實際到位金額刷新歷史紀錄，外資擴廠不歇', noteVi: 'Vốn FDI giải ngân lập kỷ lục mới, các tập đoàn đa quốc gia mở rộng sản xuất' },

  // 2026 年（當前週期）：十四大前哨籌備，經濟高質量成長，USD/VND 維持在 25,400~25,500
  { date: '2026-02-20', close: 25410, central: 24250, blackMarket: 25590, change: -0.20, note: '2026 第一季外貿順差破 60 億美元，海關查核產地新規', noteVi: 'Xuất siêu quý I/2026 vượt 6 tỷ USD, Hải quan siết chặt kiểm tra C/O' },
  { date: '2026-05-15', close: 25450, central: 24262, blackMarket: 25630, change: 0.16, note: '越共十四大籌備文件草案發布，強調體制鬆綁與綠色轉型', noteVi: 'Công bố dự thảo văn kiện Đại hội XIV, trọng tâm gỡ nút thắt thể chế & chuyển đổi xanh' },
  { date: '2026-07-24', close: 25470, central: 24265, blackMarket: 25660, change: 0.08, note: '四大公股行庫小幅調升中長天期定存利率吸納資金', noteVi: 'Big 4 điều chỉnh nhẹ lãi suất huy động trung dài hạn hút tiền gửi' },
  { date: '2026-08-21', close: 25480, central: 24265, blackMarket: 25670, change: 0.04, note: '海關加強打擊非法轉口，防止美方對越啟動防規避調查', noteVi: 'Hải quan tăng cường chống chuyển tải bất hợp pháp sang thị trường Mỹ' },
  { date: '2026-09-04', close: 25485, central: 24265, blackMarket: 25680, change: 0.02, note: '【最新報價】現匯報價 25,485，央行波幅區間守住，外匯儲備充實', noteVi: '【Báo giá mới nhất】USD/VND ở mức 25.485, trong biên độ cho phép của SBV' }
];

// ── 3B. 過去 5 年 TWD/VND (新台幣兌越盾) 每週匯率歷史數據集 (2021-2026) ──
export const fiveYearWeeklyTwdVndData = [
  // 2021 年：台灣外銷接單大旺，台幣強勢升至 27.6~28.0，1台幣可換 820~830 越盾高檔
  { date: '2021-01-08', close: 822.4, inverse: 12.16, botRate: 814.0, change: 0.12, note: '台灣出口大旺台幣走強，越共十三大前夕台商投資穩定', noteVi: 'Đài tệ mạnh nhờ xuất khẩu bán dẫn, dòng vốn Đài Loan sang VN ổn định' },
  { date: '2021-03-12', close: 818.1, inverse: 12.22, botRate: 810.5, change: -0.52, note: '美聯儲維持零利率，外資狂湧台股，雙邊匯率相對均衡', noteVi: 'Fed giữ lãi suất 0%, tỷ giá chéo TWD/VND duy trì cân bằng' },
  { date: '2021-05-14', close: 824.7, inverse: 12.13, botRate: 816.2, change: 0.81, note: '台灣本土疫情升溫但晶圓代工滿載，台幣維持超強韌性', noteVi: 'Công nghiệp đúc chip hoạt động tối đa công suất, TWD giữ giá tốt' },
  { date: '2021-07-16', close: 821.8, inverse: 12.17, botRate: 813.4, change: -0.35, note: '胡志明市封城實施「三就地」，部分台商南越製鞋廠短暫降載', noteVi: 'Thực hiện 3 tại chỗ ở miền Nam, một số nhà máy giày da Đài Loan giảm tải' },
  { date: '2021-09-17', close: 825.3, inverse: 12.12, botRate: 817.0, change: 0.43, note: '台美半導體出口創歷史新高，越盾亦小幅升值，比價僵持', noteVi: 'Xuất khẩu chip Đài Loan lập đỉnh, VND cũng lên giá, tỷ giá ổn định' },
  { date: '2021-11-19', close: 824.6, inverse: 12.13, botRate: 816.5, change: -0.08, note: '【歷史高位區】USD/TWD 升至 27.6，台商赴越匯出設廠成本最划算', noteVi: '【Vùng đỉnh lịch sử】USD/TWD về 27,6; chi phí chuyển vốn đầu tư sang VN tối ưu' },
  { date: '2021-12-31', close: 825.1, inverse: 12.12, botRate: 817.2, change: 0.06, note: '2021 年終台幣兌越盾收在 825.1 歷史高峰，整年購買力極強', noteVi: 'Cuối năm 2021 chốt ở mức 825,1 VND/TWD, sức mua Đài tệ rất cao' },

  // 2022 年：Fed 暴力升息，外資大賣台股，台幣重挫至 32.3，TWD/VND 暴跌至 752 最低點
  { date: '2022-02-25', close: 817.5, inverse: 12.23, botRate: 809.8, change: -0.92, note: '俄烏衝突爆發，全球能源暴漲，外資自亞洲新興市場撤離', noteVi: 'Xung đột bùng nổ, khối ngoại rút vốn khỏi thị trường tài chính châu Á' },
  { date: '2022-04-15', close: 789.7, inverse: 12.66, botRate: 782.0, change: -3.40, note: '美聯儲啟動升息循環，台幣急貶至 29.1，兌越盾重挫破 800', noteVi: 'Fed thắt chặt tiền tệ, Đài tệ rớt mốc 800 VND đổi 1 TWD' },
  { date: '2022-06-17', close: 781.8, inverse: 12.79, botRate: 774.2, change: -1.00, note: 'Fed 單次升息 75bps，台幣持續弱勢，進口料件匯兌成本大增', noteVi: 'Fed nâng lãi suất 75 điểm cơ bản, áp lực tỷ giá đè nặng các đồng tiền châu Á' },
  { date: '2022-08-19', close: 780.3, inverse: 12.82, botRate: 772.5, change: -0.19, note: '台海地緣緊張局勢升溫，強勢美元壓制亞洲非美貨幣', noteVi: 'Căng thẳng địa chính trị eo biển Đài Loan khiến đồng tiền chịu sức ép' },
  { date: '2022-09-23', close: 752.4, inverse: 13.29, botRate: 745.0, change: -3.58, note: '【五年最低點】台幣貶至 31.5 歷史低點，1台幣僅兌 752 越盾', noteVi: '【Đáy 5 năm】TWD rớt sâu, 1 TWD chỉ đổi được 752 VND' },
  { date: '2022-10-14', close: 757.0, inverse: 13.21, botRate: 749.6, change: 0.61, note: '越南萬盛發 SCB 案爆發，越盾亦開啟急貶，雙幣競相走弱', noteVi: 'SCB tái cơ cấu, VND cũng giảm giá mạnh kéo tỷ giá chéo hồi phục nhẹ' },
  { date: '2022-10-21', close: 772.4, inverse: 12.95, botRate: 765.0, change: 2.03, note: '越南央行將匯率波幅擴大至 ±5%，越盾重貶反彈推升比價', noteVi: 'SBV nới biên độ lên ±5%, biến động đẩy tỷ giá TWD/VND tăng' },
  { date: '2022-11-18', close: 799.4, inverse: 12.51, botRate: 791.8, change: 3.50, note: '美通膨數據降溫，台幣自 32.3 強彈，越盾仍受央行打壓居低位', noteVi: 'Lạm phát Mỹ hạ, TWD bật tăng mạnh từ đáy 32,3 USD/TWD' },
  { date: '2022-12-30', close: 772.9, inverse: 12.94, botRate: 765.5, change: -3.31, note: '年底結匯，台美利差維持 400bps 高位，台越匯率回歸中樞', noteVi: 'Quyết toán cuối năm, tỷ giá Đài tệ - Việt Nam đồng về vùng cân bằng' },

  // 2023 年：越南央行四度降息救市，台美利差拉鋸，台幣在 755~795 區間震盪
  { date: '2023-02-17', close: 789.5, inverse: 12.67, botRate: 782.0, change: 2.15, note: '農曆年後台股大漲外資回補台幣，越盾維持弱勢', noteVi: 'Sau Tết chứng khoán Đài Loan tăng mạnh, TWD tăng so với VND' },
  { date: '2023-03-31', close: 776.0, inverse: 12.89, botRate: 768.4, change: -1.71, note: '越南央行首度逆勢降息，房地產債務重整，越盾資金寬鬆', noteVi: 'SBV hạ lãi suất lần 1, nới lỏng tiền tệ hỗ trợ xử lý nợ BĐS' },
  { date: '2023-05-26', close: 769.4, inverse: 13.00, botRate: 762.0, change: -0.85, note: '生成式 AI 狂潮引爆，台股電子權值股大漲但外資鎖匯匯出', noteVi: 'Làn sóng AI bùng nổ, khối công nghệ tăng điểm nhưng chốt lời ngoại hối' },
  { date: '2023-06-23', close: 765.8, inverse: 13.06, botRate: 758.5, change: -0.47, note: 'SBV 累計降息至 4.50%，美越利差衝上 500bps 歷史天花板', noteVi: 'SBV giảm lãi suất về 4,50%, chênh lệch lãi suất kỷ lục' },
  { date: '2023-08-18', close: 753.2, inverse: 13.28, botRate: 746.0, change: -1.65, note: '台幣再度回測 31.9 大關，台商赴越採購原物料成本上升', noteVi: 'TWD giảm giá, chi phí nhập khẩu nguyên phụ liệu từ Đài Loan tăng' },
  { date: '2023-09-22', close: 760.7, inverse: 13.15, botRate: 753.2, change: 1.00, note: '拜登訪越提升為全面戰略夥伴，台系伺服器五哥大舉匯出擴建', noteVi: 'Các tập đoàn EMS máy chủ Đài Loan (Foxconn, Quanta...) tăng vốn vào VN' },
  { date: '2023-11-17', close: 767.8, inverse: 13.02, botRate: 760.4, change: 0.93, note: '外資大幅買超台股千億，台幣升值推高 TWD/VND', noteVi: 'Dòng vốn mua ròng chứng khoán Đài Loan kéo giá TWD phục hồi' },
  { date: '2023-12-29', close: 794.7, inverse: 12.58, botRate: 787.0, change: 3.50, note: '年終台幣暴力升值至 30.7，1台幣可兌 794.7 越盾', noteVi: 'Cuối năm Đài tệ tăng vọt lên 30,7 USD/TWD; 1 TWD = 794,7 VND' },

  // 2024 年：越盾 USD/VND 破歷史低 25,480，台幣亦在 32.5 承壓，比價錨定在 780~790
  { date: '2024-02-23', close: 782.5, inverse: 12.78, botRate: 775.0, change: -1.54, note: '越南國內黃金大溢價引發黑市走私，越盾承壓', noteVi: 'Giá vàng trong nước chênh cao kích hoạt gom USD chợ đen' },
  { date: '2024-04-19', close: 782.8, inverse: 12.77, botRate: 775.2, change: 0.04, note: '【雙邊創低】越盾跌破 25,440，台幣亦貶至 32.55，兩相抵銷走平', noteVi: '【Cả hai đồng tiền mất giá】VND và TWD cùng chịu áp lực giảm với USD' },
  { date: '2024-05-24', close: 790.7, inverse: 12.65, botRate: 783.0, change: 1.01, note: '台股突破 21,500 點歷史新高，台廠資本實力增強', noteVi: 'Thị trường chứng khoán Đài Loan lập đỉnh, tiềm lực dòng vốn mở rộng' },
  { date: '2024-06-28', close: 784.9, inverse: 12.74, botRate: 777.2, change: -0.73, note: '越南央行終結黃金拍賣改四大行直售，黑市炒匯降溫', noteVi: 'SBV bán vàng qua Big 4, hạ nhiệt sốt vàng và chợ đen ngoại tệ' },
  { date: '2024-08-23', close: 785.3, inverse: 12.73, botRate: 777.6, change: 0.05, note: '美聯儲鮑爾全球央行年會確立 9 月降息，非美貨幣普漲', noteVi: 'Chủ tịch Fed xác nhận cắt giảm lãi suất, các đồng tiền châu Á cùng phục hồi' },
  { date: '2024-10-18', close: 785.4, inverse: 12.73, botRate: 777.8, change: 0.01, note: '越共政局平穩過渡，外資與台商中長期投資佈局延續', noteVi: 'Kiện toàn nhân sự cấp cao tại VN, dòng vốn FDI trung dài hạn tiếp diễn' },
  { date: '2024-12-27', close: 789.4, inverse: 12.67, botRate: 781.8, change: 0.51, note: '年底出口旺季結匯，台越雙向貿易額突破歷史高峰', noteVi: 'Thương mại hai chiều Đài Loan - Việt Nam lập mốc kỷ lục mới' },

  // 2025 年：全球半導體景氣復甦，高鐵計畫通過，TWD/VND 窄幅穩定於 787~791
  { date: '2025-02-21', close: 787.6, inverse: 12.70, botRate: 780.0, change: -0.23, note: '川普關稅預期引發轉單效應，台商加速自中移往越南產能', noteVi: 'Doanh nghiệp Đài Loan tăng tốc dịch chuyển chuỗi cung ứng sang VN' },
  { date: '2025-05-16', close: 791.0, inverse: 12.64, botRate: 783.5, change: 0.43, note: '越南國會通過 670 億美元高鐵案，台廠軌道與鋼鐵設備受惠', noteVi: 'Quốc hội VN duyệt dự án đường sắt 67 tỷ USD, cơ hội cho chuỗi cung ứng' },
  { date: '2025-08-22', close: 788.5, inverse: 12.68, botRate: 781.0, change: -0.32, note: '電子零組件出貨旺季，台商各廠資金調度頻繁', noteVi: 'Mùa cao điểm linh kiện điện tử, nhu cầu vốn của các nhà máy tăng mạnh' },
  { date: '2025-11-21', close: 790.7, inverse: 12.65, botRate: 783.2, change: 0.28, note: '外人直接投資 FDI 續刷新高，台商資本實質到位', noteVi: 'Vốn giải ngân FDI đạt kỷ lục, doanh nghiệp Đài Loan rót vốn thực chất' },

  // 2026 年（當前週期）：越共十四大前夕，台幣兌越盾維持 791 穩定平台
  { date: '2026-02-20', close: 789.1, inverse: 12.67, botRate: 781.5, change: -0.20, note: '2026 年首季外貿順差強勁，海關加強查核產地證', noteVi: 'Xuất siêu mạnh, Hải quan tăng cường hậu kiểm chứng nhận xuất xứ C/O' },
  { date: '2026-05-15', close: 790.4, inverse: 12.65, botRate: 782.8, change: 0.16, note: '十四大籌備文件頒布，行政審批鬆綁預期提升外資意願', noteVi: 'Cải cách thủ tục hành chính trước thềm Đại hội XIV củng cố niềm tin' },
  { date: '2026-07-24', close: 791.0, inverse: 12.64, botRate: 783.4, change: 0.08, note: '越南商業銀行定存利息小幅回升，台商閒置越盾定存收益增', noteVi: 'Lãi suất tiết kiệm nhích lên, lợi suất tiền gửi VND của doanh nghiệp tăng' },
  { date: '2026-08-21', close: 791.3, inverse: 12.64, botRate: 783.8, change: 0.04, note: '海關嚴防轉口洗產地，台商落實實質轉型 35% 門檻', noteVi: 'Tuân thủ tiêu chí chuyển đổi cơ bản RVC 35% để tránh rủi ro gian lận xuất xứ' },
  { date: '2026-09-04', close: 791.5, inverse: 12.63, botRate: 784.0, change: 0.03, note: '【最新報價】1 台幣兌 791.5 越盾，1 萬越盾折合 12.63 新台幣', noteVi: '【Báo giá mới nhất】1 TWD đổi 791,5 VND; 10.000 VND tương đương 12,63 NT$' }
];

// ── 4. 越南國家銀行 (SBV) 核心政策利率全景 (Central Bank Rates - Bilingual) ──
export const sbvPolicyRates = [
  {
    code: 'REFINANCE',
    name: '基準再融資利率',
    nameVn: 'Lãi suất tái cấp vốn',
    rate: '4.50%',
    historyHigh: '6.00% (2022/11)',
    historyHighVi: '6,00% (tháng 11/2022)',
    historyLow: '4.00% (2020)',
    historyLowVi: '4,00% (năm 2020)',
    role: '央行向商業銀行提供短中期週轉資金之核心指引基準，決定全體金融流動性成本。',
    roleVi: 'Mức lãi suất kim chỉ nam SBV cho các NHTM vay, quyết định chi phí vốn toàn hệ thống.'
  },
  {
    code: 'REDISCOUNT',
    name: '基準再貼現利率',
    nameVn: 'Lãi suất tái chiết khấu',
    rate: '3.00%',
    historyHigh: '4.50% (2022/11)',
    historyHighVi: '4,50% (tháng 11/2022)',
    historyLow: '2.50% (2020)',
    historyLowVi: '2,50% (năm 2020)',
    role: '金融機構以商業匯票、國庫券向央行辦理票據貼現折現率。',
    roleVi: 'Lãi suất áp dụng khi tổ chức tín dụng chiết khấu thương phiếu, giấy tờ có giá tại SBV.'
  },
  {
    code: 'OVERNIGHT',
    name: '銀行間隔夜拆借拆款利率',
    nameVn: 'Lãi suất cho vay qua đêm liên ngân hàng',
    rate: '4.25%',
    historyHigh: '7.00% (2022/10)',
    historyHighVi: '7,00% (tháng 10/2022)',
    historyLow: '1.20% (2023)',
    historyLowVi: '1,20% (năm 2023)',
    role: '商業銀行結清隔夜支付短缺之法定基準，反映同業即刻資金緊俏程度。',
    roleVi: 'Lãi suất bù đắp thiếu hụt vốn thanh toán qua đêm giữa các ngân hàng thành viên.'
  },
  {
    code: 'CEILING_DEPOSIT_6M',
    name: '6個月以下定存利率法定上限',
    nameVn: 'Trần lãi suất tiền gửi dưới 6 tháng',
    rate: '4.75%',
    historyHigh: '6.00% (2022)',
    historyHighVi: '6,00% (năm 2022)',
    historyLow: '4.00% (2021)',
    historyLowVi: '4,00% (năm 2021)',
    role: '保護中小存戶與防止惡性吸金，限制商業銀行對半年內短天期存款之最高計息。',
    roleVi: 'Khống chế mức trần lãi suất huy động ngắn hạn để giảm chi phí đầu vào của ngân hàng.'
  },
  {
    code: 'PRIORITY_LENDING',
    name: '五大優先產業短期放款利率上限',
    nameVn: 'Trần lãi suất cho vay ngắn hạn lĩnh vực ưu tiên',
    rate: '4.00%',
    historyHigh: '5.50% (2022)',
    historyHighVi: '5,50% (năm 2022)',
    historyLow: '4.00% (現行)',
    historyLowVi: '4,00% (hiện hành)',
    role: '強制規定對農業農村、出口商、中小企業、支援配套產業、高科技產業之短貸優惠。',
    roleVi: 'Quy định bắt buộc đối với nông nghiệp nông thôn, xuất khẩu, SME, công nghiệp hỗ trợ, công nghệ cao.'
  },
  {
    code: 'RESERVE_RATIO',
    name: '越盾法定存款準備金率',
    nameVn: 'Tỷ lệ dự trữ bắt buộc (VND)',
    rate: '3.00%',
    historyHigh: '5.00%',
    historyHighVi: '5,00%',
    historyLow: '3.00%',
    historyLowVi: '3,00%',
    role: '活期與 12 個月以下越盾存款法定提存比率（12 個月以上為 1.0%）。',
    roleVi: 'Tỷ lệ tiền gửi tiền đồng dưới 12 tháng bắt buộc gửi tại SBV (trên 12 tháng là 1,0%).'
  }
];

// ── 5. 越南商業銀行定存與放款利率比價矩陣 (Bank Deposit & Lending Matrix - Bilingual) ──
export const commercialBankRates = [
  // 四大國有公股行庫 (Big 4 State-Owned Commercial Banks)
  {
    id: 'vcb',
    name: '越南外貿銀行 (Vietcombank)',
    nameVi: 'Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)',
    shortName: 'VCB',
    type: 'state',
    typeLabel: '國有公股行庫',
    typeLabelVi: 'Ngân hàng Quốc doanh (Big 4)',
    logo: '🏛️',
    demand: '0.10%',
    m1: '1.60%',
    m3: '1.90%',
    m6: '2.90%',
    m12: '4.70%',
    m24: '4.70%',
    shortLoan: '5.8% ~ 7.2%',
    midLongLoan: '7.8% ~ 9.5%',
    homeLoanPromo: '6.8% (首年固定)',
    homeLoanPromoVi: '6,8% (cố định năm đầu)',
    specialNote: '外資與跨國企業開戶首選，外匯匯兌成本最低，流動性最充裕。',
    specialNoteVi: 'Lựa chọn hàng đầu của FDI và doanh nghiệp đa quốc gia, thanh khoản ngoại tệ dồi dào nhất.'
  },
  {
    id: 'bidv',
    name: '越南投資發展銀行 (BIDV)',
    nameVi: 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam (BIDV)',
    shortName: 'BIDV',
    type: 'state',
    typeLabel: '國有公股行庫',
    typeLabelVi: 'Ngân hàng Quốc doanh (Big 4)',
    logo: '🏦',
    demand: '0.10%',
    m1: '1.70%',
    m3: '2.00%',
    m6: '3.00%',
    m12: '4.80%',
    m24: '4.80%',
    shortLoan: '6.0% ~ 7.5%',
    midLongLoan: '8.0% ~ 9.8%',
    homeLoanPromo: '7.0% (首年固定)',
    homeLoanPromoVi: '7,0% (cố định năm đầu)',
    specialNote: '全越資產規模最大商業銀行，基礎建設與大型工廠聯貸主辦行。',
    specialNoteVi: 'NHTM có quy mô tài sản lớn nhất VN, đầu mối thu xếp vốn cho các đại dự án hạ tầng công nghiệp.'
  },
  {
    id: 'ctg',
    name: '越南工商銀行 (VietinBank)',
    nameVi: 'Ngân hàng TMCP Công Thương Việt Nam (VietinBank)',
    shortName: 'CTG',
    type: 'state',
    typeLabel: '國有公股行庫',
    typeLabelVi: 'Ngân hàng Quốc doanh (Big 4)',
    logo: '🏭',
    demand: '0.10%',
    m1: '1.70%',
    m3: '2.00%',
    m6: '3.00%',
    m12: '4.80%',
    m24: '4.80%',
    shortLoan: '5.9% ~ 7.4%',
    midLongLoan: '8.1% ~ 9.9%',
    homeLoanPromo: '6.9% (首年固定)',
    homeLoanPromoVi: '6,9% (cố định năm đầu)',
    specialNote: '製造業供應鏈與工業園區工廠融資信貸覆蓋率極深。',
    specialNoteVi: 'Mạng lưới tín dụng sâu rộng trong các khu công nghiệp chế xuất và chuỗi cung ứng sản xuất.'
  },
  {
    id: 'agribank',
    name: '越南農業農村發展銀行 (Agribank)',
    nameVi: 'Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank)',
    shortName: 'Agribank',
    type: 'state',
    typeLabel: '國有公股行庫',
    typeLabelVi: 'Ngân hàng Quốc doanh (Big 4)',
    logo: '🌾',
    demand: '0.20%',
    m1: '1.70%',
    m3: '2.00%',
    m6: '3.00%',
    m12: '4.80%',
    m24: '4.80%',
    shortLoan: '6.0% ~ 7.2%',
    midLongLoan: '7.9% ~ 9.6%',
    homeLoanPromo: '7.2% (首年固定)',
    homeLoanPromoVi: '7,2% (cố định năm đầu)',
    specialNote: '分行據點遍及全越農村省份，享有大量農業特定補貼信貸份額。',
    specialNoteVi: 'Mạng lưới phòng giao dịch phủ khắp 63 tỉnh thành, triển khai nhiều gói tín dụng nông nghiệp ưu đãi.'
  },

  // 領先民營股份制商業銀行 (Private Commercial Joint-Stock Banks)
  {
    id: 'tcb',
    name: '越南技術與商業銀行 (Techcombank)',
    nameVi: 'Ngân hàng TMCP Kỹ Thương Việt Nam (Techcombank)',
    shortName: 'TCB',
    type: 'private',
    typeLabel: '民營股份商業行',
    typeLabelVi: 'Ngân hàng Cổ phần Tư nhân',
    logo: '⚡',
    demand: '0.10%',
    m1: '3.10%',
    m3: '3.35%',
    m6: '4.45%',
    m12: '5.10%',
    m24: '5.10%',
    shortLoan: '6.8% ~ 8.2%',
    midLongLoan: '8.8% ~ 10.8%',
    homeLoanPromo: '7.4% (首年固定)',
    homeLoanPromoVi: '7,4% (cố định năm đầu)',
    specialNote: '資本充足率 (CAR) 高達 15% 全越最高，數位轉型與企業供應鏈金流標竿。',
    specialNoteVi: 'Tỷ lệ an toàn vốn (CAR) đạt 15% hàng đầu hệ thống, tiên phong số hóa dòng tiền doanh nghiệp.'
  },
  {
    id: 'mbb',
    name: '越南軍隊股份商業銀行 (MB Bank)',
    nameVi: 'Ngân hàng TMCP Quân Đội (MB Bank)',
    shortName: 'MBB',
    type: 'private',
    typeLabel: '民營股份商業行',
    typeLabelVi: 'Ngân hàng Cổ phần Tư nhân',
    logo: '🛡️',
    demand: '0.10%',
    m1: '3.20%',
    m3: '3.50%',
    m6: '4.30%',
    m12: '5.20%',
    m24: '5.70%',
    shortLoan: '6.5% ~ 8.0%',
    midLongLoan: '8.6% ~ 10.5%',
    homeLoanPromo: '7.2% (首年固定)',
    homeLoanPromoVi: '7,2% (cố định năm đầu)',
    specialNote: '國防軍隊背景，承接弱勢銀行重組，獲央行最高信貸額度 (Room Tín Dụng) 傾斜。',
    specialNoteVi: 'Hậu thuẫn vững chắc, tham gia tái cơ cấu ngân hàng yếu kém, được ưu tiên nới room tín dụng cao.'
  },
  {
    id: 'vpb',
    name: '越南興旺商業銀行 (VPBank)',
    nameVi: 'Ngân hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
    shortName: 'VPB',
    type: 'private',
    typeLabel: '民營股份商業行',
    typeLabelVi: 'Ngân hàng Cổ phần Tư nhân',
    logo: '🌱',
    demand: '0.10%',
    m1: '3.40%',
    m3: '3.70%',
    m6: '4.80%',
    m12: '5.40%',
    m24: '5.80%',
    shortLoan: '7.5% ~ 9.5%',
    midLongLoan: '9.8% ~ 12.2%',
    homeLoanPromo: '7.9% (首年固定)',
    homeLoanPromoVi: '7,9% (cố định năm đầu)',
    specialNote: '日本三井住友 (SMBC) 戰略入股，個人信貸與高收益消費金融活躍。',
    specialNoteVi: 'Đối tác chiến lược SMBC Nhật Bản, dẫn đầu mảng tài chính tiêu dùng và doanh nghiệp SME.'
  },
  {
    id: 'acb',
    name: '越南亞洲商業銀行 (ACB)',
    nameVi: 'Ngân hàng TMCP Á Châu (ACB)',
    shortName: 'ACB',
    type: 'private',
    typeLabel: '民營股份商業行',
    typeLabelVi: 'Ngân hàng Cổ phần Tư nhân',
    logo: '💎',
    demand: '0.10%',
    m1: '2.50%',
    m3: '2.90%',
    m6: '3.90%',
    m12: '4.90%',
    m24: '4.90%',
    shortLoan: '6.5% ~ 7.8%',
    midLongLoan: '8.5% ~ 10.2%',
    homeLoanPromo: '7.1% (首年固定)',
    homeLoanPromoVi: '7,1% (cố định năm đầu)',
    specialNote: '零售資產品質最優，房貸與中小企質押放款壞帳率低於 1.2%。',
    specialNoteVi: 'Chất lượng tài sản bán lẻ chuẩn mực, kiểm soát nợ xấu bất động sản và SME dưới 1,2%.'
  }
];

// ── 6. 越南海關總局外貿與關稅數據庫 (Trade, Customs & Exports - Bilingual) ──
export const tradeAndCustomsData = {
  summary: {
    totalTurnover: '$785.4 B',
    exportValue: '$406.1 B',
    importValue: '$379.3 B',
    surplus: '+$26.85 B',
    yoyExportGrowth: '+14.5%',
    yoyImportGrowth: '+13.8%'
  },
  topExportCommodities: [
    { rank: 1, name: '電腦、電子產品及零組件', nameVi: 'Máy vi tính, sản phẩm điện tử & linh kiện', code: '8471/8542', val: '$68.5 B', yoy: '+28.4%', share: '16.8%', destination: '美、中、歐盟', destinationVi: 'Hoa Kỳ, Trung Quốc, EU' },
    { rank: 2, name: '電話機、行動電話及零件', nameVi: 'Điện thoại các loại & linh kiện', code: '8517', val: '$56.2 B', yoy: '+11.2%', share: '13.8%', destination: '美國、中國、歐盟', destinationVi: 'Hoa Kỳ, Trung Quốc, EU' },
    { rank: 3, name: '機械、設備、工具及儀器', nameVi: 'Máy móc, thiết bị, dụng cụ phụ tùng khác', code: '84', val: '$48.1 B', yoy: '+18.5%', share: '11.8%', destination: '美、歐盟、日韓', destinationVi: 'Mỹ, EU, Nhật Bản, Hàn Quốc' },
    { rank: 4, name: '紡織品與服裝成衣', nameVi: 'Hàng dệt, may mặc', code: '61/62', val: '$42.4 B', yoy: '+9.6%', share: '10.4%', destination: '美國、日本、韓國', destinationVi: 'Hoa Kỳ, Nhật Bản, Hàn Quốc' },
    { rank: 5, name: '鞋類與皮件製品', nameVi: 'Giày dép các loại', code: '64', val: '$23.5 B', yoy: '+10.8%', share: '5.8%', destination: '美國、歐盟、中南美', destinationVi: 'Hoa Kỳ, EU, Mỹ Latinh' },
    { rank: 6, name: '木材及木製品 (家具)', nameVi: 'Gỗ & sản phẩm gỗ (Nội thất)', code: '44', val: '$16.8 B', yoy: '+21.2%', share: '4.1%', destination: '美國、日本、中國', destinationVi: 'Hoa Kỳ, Nhật Bản, Trung Quốc' },
    { rank: 7, name: '水海產品 (巴沙魚、白蝦)', nameVi: 'Thủy hải sản (Cá tra, tôm)', code: '03', val: '$10.2 B', yoy: '+13.4%', share: '2.5%', destination: '美、中、日、澳', destinationVi: 'Mỹ, Trung Quốc, Nhật Bản, Úc' },
    { rank: 8, name: '農產品 (咖啡、大米、腰果)', nameVi: 'Nông sản (Cà phê, gạo, hạt điều)', code: '0901/1006', val: '$9.8 B', yoy: '+32.0%', share: '2.4%', destination: '印尼、菲律賓、歐盟', destinationVi: 'Indonesia, Philippines, EU' }
  ],
  bilateralTradePartners: [
    {
      partner: '美國 (United States)',
      partnerVi: 'Hoa Kỳ (United States)',
      export: '$118.5 B',
      import: '$15.2 B',
      balance: '+$103.3 B (全越第一大順差國)',
      balanceVi: '+$103,3 B (Thị trường xuất siêu lớn nhất)',
      alert: '面臨轉口洗產地防規避嚴查風險',
      alertVi: 'Rủi ro điều tra chống lẩn tránh biện pháp phòng vệ thương mại của DOC & CBP'
    },
    {
      partner: '中國 (China)',
      partnerVi: 'Trung Quốc (China)',
      export: '$63.2 B',
      import: '$138.8 B',
      balance: '-$75.6 B (第一大逆差/原物料進口國)',
      balanceVi: '-$75,6 B (Thị trường nhập siêu nguyên vật liệu lớn nhất)',
      alert: '大量進口電子零配件在越加工組裝',
      alertVi: 'Nhập khẩu lớn bán thành phẩm linh kiện để gia công xuất khẩu đi Âu Mỹ'
    },
    {
      partner: '歐盟 (EU - EVFTA)',
      partnerVi: 'Liên minh châu Âu (EU - EVFTA)',
      export: '$52.4 B',
      import: '$17.1 B',
      balance: '+$35.3 B (享受 EVFTA 降稅紅利)',
      balanceVi: '+$35,3 B (Hưởng lợi thế thuế quan EVFTA)',
      alert: '需符合 EUDR 零毀林與碳邊境 CBAM',
      alertVi: 'Tuân thủ quy định chống phá rừng EUDR và cơ chế biên giới carbon CBAM'
    },
    {
      partner: '東協各國 (ASEAN)',
      partnerVi: 'Khối ASEAN',
      export: '$36.5 B',
      import: '$45.2 B',
      balance: '-$8.7 B (自由貿易區 C/O Form D)',
      balanceVi: '-$8,7 B (Ưu đãi thuế quan Form D)',
      alert: '汽車與石化原物料進口大宗',
      alertVi: 'Nhập khẩu ôtô nguyên chiếc và hóa chất xăng dầu'
    },
    {
      partner: '韓國 (South Korea)',
      partnerVi: 'Hàn Quốc (South Korea)',
      export: '$26.8 B',
      import: '$55.4 B',
      balance: '-$28.6 B (三星等韓商供應鏈樞紐)',
      balanceVi: '-$28,6 B (Chuỗi cung ứng của Samsung, LG)',
      alert: '進口半導體晶圓與 OLED 面板',
      alertVi: 'Nhập khẩu bán dẫn tấm bán dẫn và tấm nền màn hình'
    },
    {
      partner: '日本 (Japan)',
      partnerVi: 'Nhật Bản (Japan)',
      export: '$25.2 B',
      import: '$23.6 B',
      balance: '+$1.6 B (雙向平衡夥伴關係)',
      balanceVi: '+$1,6 B (Đối tác thương mại cân bằng)',
      alert: '高精密機械與車用電子零組件',
      alertVi: 'Giao thương máy móc chính xác và linh kiện phụ tùng ôtô'
    }
  ],
  customsRegulations2026: [
    {
      code: 'CIRCULAR_38_REV',
      title: '越南海關總局第 38/2015/TT-BTC 號通告最新修訂',
      titleVi: 'Sửa đổi Thông tư 38/2015/TT-BTC về quản lý hải quan đối với EPE',
      focus: '加強加工出口企業 (EPE) 原物料海關報廢與核銷管理',
      focusVi: 'Tăng cường quản lý định mức, phế liệu và quyết toán nguyên phụ liệu',
      impact: '嚴格規範 EPE 廠進口免稅保稅料件與內銷補稅程序，違者處 20%~100% 漏稅罰鍰。',
      impactVi: 'Quy định nghiêm ngặt việc tiêu thụ nội địa hàng gia công và phạt truy thu thuế.'
    },
    {
      code: 'ORIGIN_DECREE_31',
      title: '原產地管理第 31/2018/NĐ-CP 號法令稽查加嚴',
      titleVi: 'Nghị định 31/2018/NĐ-CP về quản lý xuất xứ hàng hóa (C/O)',
      focus: 'C/O 原產地證明書（Form E, Form D, Form EUR.1, Form CPTPP）真實性查驗',
      focusVi: 'Kiểm tra tính xác thực của C/O và chống giả mạo xuất xứ Việt Nam',
      impact: '針對轉口美國產品嚴查「實質轉型標準」（Value-Added > 35% 或稅則四碼轉變），阻絕單純換標洗產地。',
      impactVi: 'Kiểm tra tỷ lệ hàm lượng giá trị gia tăng RVC > 35% hoặc chuyển đổi mã HS 4 số.'
    },
    {
      code: 'GLOBAL_MIN_TAX_PILLAR_2',
      title: '越南落實全球最低稅負制 (Global Minimum Tax - 15%)',
      titleVi: 'Thực thi thuế tối thiểu toàn cầu (Pillar Two - 15%) & Quỹ hỗ trợ đầu tư',
      focus: '向年營收逾 7.5 億歐元之跨國企業補徵所得稅，並啟動《投資支持基金》法令補償',
      focusVi: 'Áp dụng thuế TNDN bổ sung tối thiểu nội địa (QDMTT) với tập đoàn đa quốc gia',
      impact: '三星、富士康、樂金等龍頭適用，越南政府提撥研發與高科技設備現金補貼以留住外資。',
      impactVi: 'Chính phủ ban hành cơ chế trợ cấp tiền mặt cho R&D và thiết bị công nghệ cao để giữ chân FDI.'
    }
  ]
};

// ── 7. 一流新聞網／智庫級深度政經專案報告 (Deep Analytical Dossiers - Bilingual) ──
export const deepAnalysisDossiers = [
  {
    id: 'DOSSIER-2026-01',
    issueNo: 'VN-MACRO-008',
    date: '2026-09-05',
    category: 'politics',
    categoryLabel: '總體政經',
    categoryLabelVi: 'Chính trị - Vĩ mô',
    readTime: '12 分鐘',
    readTimeVi: '12 phút đọc',
    title: '2026 越共十四大（Đại hội XIV）政治格局研判：經濟技術官僚主導下的體制改革與審批破局紅利',
    titleVi: 'Đại hội Đảng XIV năm 2026: Cải cách thể chế, gỡ nút thắt pháp lý và giải phóng nguồn lực đầu tư công',
    subtitle: '總書記確立「反腐法治化」新常態，從「懼批不敢為」邁向「特赦免責機制」全面解鎖公眾投資',
    subtitleVi: 'Khẳng định phòng chống tham nhũng gắn liền với cơ chế bảo vệ cán bộ dám nghĩ dám làm vì lợi ích chung',
    author: '東協政經研究室 · 特約資深政治經濟分析師',
    authorVi: 'Trung tâm Nghiên cứu Kinh tế ASEAN · Chuyên gia Phân tích Thể chế',
    tags: ['越共十四大', '政治局佈局', '體制改革', '公眾投資', '反腐新常態'],
    tagsVi: ['Đại hội Đảng XIV', 'Cải cách thể chế', 'Đầu tư công', 'Cơ chế bảo vệ cán bộ', 'Đột phá kinh tế'],
    kpis: [
      { label: '十四大代表席次', labelVi: 'Đại biểu Đại hội XIV', val: '1,590 席', type: 'blue' },
      { label: '公建撥款目標', labelVi: 'Mục tiêu giải ngân ĐTC', val: '95% 完成率', type: 'green' },
      { label: '地方整併試點', labelVi: 'Sáp nhập tỉnh thành', val: '全越 34 省', type: 'gold' }
    ],
    summary: '2026 年越南政局步入第十四次全國代表大會（Đại hội Đảng XIV）的關鍵權力重組週期。隨著最高領導階層的順利平穩接棒，越南政壇正由過去兩年震動朝野的「熔爐」（Đốt lò）全面反腐風暴，過渡至「體制建構與審批效率化」的新常態。中央頒布第 73 號政治局結論，明文建立「幹部勇於創新擔當免責容錯機制」，有效解決地方官僚「不敢簽字、公建停滯」的癱瘓沉疴。本專題深入梳理四駕馬車人事脈絡、經濟技術官僚在中央委員會的席次增長，以及南北重大基礎設施推進對外資長期信心的深遠支撐。',
    summaryVi: 'Năm 2026, Việt Nam bước vào chu kỳ Đại hội đại biểu toàn quốc lần thứ XIV của Đảng với sự chuyển tiếp ổn định của bộ máy lãnh đạo. Trọng tâm chuyển dịch từ chiến dịch phòng chống tham nhũng sang giai đoạn hoàn thiện thể chế, khơi thông dòng vốn đầu tư công và củng cố môi trường kinh doanh minh bạch. Việc thực thi cơ chế bảo vệ cán bộ năng động, sáng tạo dám chịu trách nhiệm giải quyết triệt để tình trạng trì trệ trong phê duyệt dự án, tạo động lực mạnh mẽ cho các công trình hạ tầng thế kỷ như đường sắt cao tốc Bắc - Nam và sân bay Long Thành.',
    sections: [
      {
        heading: '一、權力過渡完成：從人事震盪回歸政策可預期性',
        headingVi: '1. Kiện toàn tổ chức: Trở lại tính nhất quán và khả năng dự báo chính sách',
        content: '過去兩年間，越南政壇經歷了多位國家領導人與部會首長的人事更替，一度引發外商對政策連續性的疑慮。然而，隨著政治權力結構的平穩過渡與全黨共識的確立，十四大的籌備工作已全面由「政治調整」轉向「長期經濟發展綱領制定」。\n\n當前政治局的核心基調非常清晰：「政治穩定是吸引外資的核心基石，反腐不是目的，健全法制、防止尋租、提升行政效能才是終極目標」。中央明確要求肅貪查案必須避免波及正常企業生產經營，對合法經營的私營企業與跨國外資企業給予高度制度保護。',
        contentVi: 'Sau giai đoạn kiện toàn nhân sự lãnh đạo cấp cao, bộ máy chính trị Việt Nam đã định hình vững chắc hướng tới Đại hội XIV. Thông điệp xuyên suốt của Đảng và Nhà nước là: Sự ổn định chính trị là nền tảng cốt lõi thu hút FDI; chống tham nhũng đi đôi với xây dựng hành lang pháp lý an toàn, minh bạch, bảo vệ quyền lợi hợp pháp của doanh nghiệp và thúc đẩy tăng trưởng kinh tế bền vững.'
      },
      {
        heading: '二、突破「審批癱瘓」：公眾投資與南北高鐵強心針',
        headingVi: '2. Tháo gỡ điểm nghẽn phê duyệt: Đột phá giải ngân đầu tư công',
        content: '此前反腐引發的意外副作用是地方公務員的「不敢為、怠政」現象，導致數百億美元公共財政預算沉睡在國庫。進入 2025-2026 年，政府啟動「責任倒查與免責並行」制度，將公共投資撥款進度列為省委書記與人委會主席考核的「一票否決指標」。\n\n其直接效應顯現在規模高達 670 億美元的南北高速鐵路（350 km/h）工程與隆城國際機場（Long Thành）第二期建設。這些被稱為越南世紀工程的國家級專案，不僅大幅降低了河內至胡志明市的物流時間，更釋放出龐大的鋼鐵、水泥、工程機械需求，帶動全產業鏈景氣。',
        contentVi: 'Chính phủ đã quyết liệt ban hành các cơ chế phân cấp phân quyền gắn liền trách nhiệm người đứng đầu, tháo gỡ tâm lý sợ sai, đùn đẩy trách nhiệm của cán bộ công quyền. Tỷ lệ giải ngân vốn đầu tư công đạt trên 95% kế hoạch, tạo xung lực lan tỏa cho đại dự án Đường sắt cao tốc 350 km/h và Cảng hàng không quốc tế Long Thành giai đoạn 2.'
      },
      {
        heading: '三、十四大經濟綱領：擺脫中等收入陷阱的五大支柱',
        headingVi: '3. 5 trụ cột phát triển kinh tế giai đoạn 2026-2030',
        content: '越共十四大文件草案明確提出了 2026-2030 年發展階段的五大支柱：\n1. 高質量外資（FDI）篩選機制：不再盲目追求勞力密集代工，全面鎖定半導體封裝測試、AI 資料中心、新能源汽車、先進材料。\n2. 制度現代化：廢止重疊冗贅的行政許可證，全面實行數位化「單一窗口」（One-Stop Portal）。\n3. 綠色低碳轉型：兌現 COP26 承諾，全面落實第八版電力發展規劃（PDP8）及公正能源轉型夥伴關係（JETP）。\n4. 民營經濟作為核心增長動能：培育如 Vingroup、FPT、Thaco 等本國工業巨頭，提升本國供應鏈自製率至 40% 以上。\n5. 區域整併戰略：推動行政區劃精簡，合併小規模縣省，強化紅河三角洲與東南部經濟重鎮的跨省協同。',
        contentVi: 'Dự thảo văn kiện Đại hội XIV xác lập 5 trụ cột then chốt: (1) Chọn lọc FDI thế hệ mới ưu tiên bán dẫn, AI, năng lượng xanh; (2) Cắt giảm triệt để thủ tục hành chính qua chuyển đổi số; (3) Thực hiện cam kết phát thải ròng bằng 0 (Net Zero 2050) và Quy hoạch điện VIII; (4) Phát triển kinh tế tư nhân thực sự trở thành động lực quan trọng nhất; (5) Tinh gọn tổ chức bộ máy và sắp xếp hợp lý các đơn vị hành chính.'
      }
    ],
    terms: [
      { term: 'Đại hội Đảng XIV', hanViet: '大會黨十四', meaning: '越共第十四次全國代表大會' },
      { term: 'Cơ chế bảo vệ cán bộ', hanViet: '機制保護幹部', meaning: '敢於創新擔當官員之免責容錯機制' },
      { term: 'Đầu tư công', hanViet: '投資公', meaning: '政府公眾財政投資與基建工程' }
    ]
  },
  {
    id: 'DOSSIER-2026-02',
    issueNo: 'VN-MACRO-007',
    date: '2026-08-28',
    category: 'finance',
    categoryLabel: '貨幣金融',
    categoryLabelVi: 'Tiền tệ - Tài chính',
    readTime: '15 分鐘',
    readTimeVi: '15 phút đọc',
    title: '2021-2026 越南盾匯率五年全景復盤：三大承壓週期、央行干預工具箱與下半年 USD/VND 走勢深度解析',
    titleVi: 'Nhìn lại 5 năm tỷ giá USD/VND (2021-2026): Ba chu kỳ biến động, bộ công cụ can thiệp của SBV và triển vọng',
    subtitle: '從 22,760 狂貶至 25,485：利差倒掛、黃金黑市走私、進口備料週期的多重共振與央行外匯儲備防線',
    subtitleVi: 'Phân tích toàn diện chênh lệch lãi suất USD-VND, áp lực sốt giá vàng, nhu cầu nhập khẩu và giải pháp bảo vệ dự trữ ngoại hối',
    author: '越南貨幣與總體經濟研究組 · 首席宏觀外匯分析師',
    authorVi: 'Nhóm Nghiên cứu Kinh tế vĩ mô & Ngoại hối · Chuyên gia phân tích tiền tệ',
    tags: ['越南盾匯率', 'USD/VND', '央行外匯儲備', '黃金溢價', '美越利差'],
    tagsVi: ['Tỷ giá USD/VND', 'Dự trữ ngoại hối', 'Ngân hàng Nhà nước', 'Thị trường tự do', 'Can thiệp ngoại tệ'],
    kpis: [
      { label: '五年累計貶值', labelVi: 'Biến động 5 năm', val: '-11.8%', type: 'red' },
      { label: '現行波動區間', labelVi: 'Biên độ tỷ giá', val: '±5.0%', type: 'gold' },
      { label: '外匯存底水位', labelVi: 'Dự trữ ngoại hối', val: '$95.5 B', type: 'blue' }
    ],
    summary: '回顧 2021 至 2026 年這五年，越南盾（VND）歷經了自 2015 年亞洲貨幣競貶以來最驚心動魄的波動歷程。越盾兌美元現匯由 2021 年底的 22,760 歷史強位，一路滑落至 2024 年中突破 25,480 的歷史低谷，累計貶幅近 12%。本篇深度復盤詳細解碼推動 USD/VND 的三大歷史推手：Fed 升息引發的 500bps 美越政策利率倒掛、進口高科技料件帶來的美元剛性外流、以及國內 SJC 黃金巨大溢價引發的黑市購匯走私潮。同時，深度剖析越南央行（SBV）如何交叉動用「調整中心匯率、發行 T-Bills、拋售現匯儲備、直售黃金平抑黑市」四大王牌，成功避免了金融系統性崩盤。',
    summaryVi: 'Trong giai đoạn 2021-2026, tỷ giá USD/VND trải qua những biến động mạnh mẽ nhất trong thập kỷ qua. Từ mốc 22.760 đồng cuối năm 2021 lên vùng 25.480 đồng, VND chịu áp lực lớn từ chu kỳ tăng lãi suất quyết liệt của Fed, chênh lệch lãi suất âm kéo dài, nhu cầu nhập khẩu nguyên liệu phục hồi và hiện tượng gom USD buôn lậu vàng khi giá trong nước chênh lệch cao. SBV đã linh hoạt sử dụng phối hợp các công cụ: nới rộng biên độ tỷ giá từ ±3% lên ±5%, phát hành tín phiếu hút bớt VND dư thừa, bán can thiệp ngoại tệ và giao 4 ngân hàng Big 4 bán vàng miếng bình ổn, giữ vững an toàn vĩ mô.',
    sections: [
      {
        heading: '一、五年三大階段：越盾匯率的雲霄飛車歷程',
        headingVi: '1. Ba giai đoạn biến động lớn của tỷ giá USD/VND',
        content: '• 階段一：2021~2022 初【強勢穩定】：受惠於疫情期間全球對越南消費電子與家具的爆發式需求，越南創下年均 200 億美元以上的貿易順差，外匯儲備於 2021 年底達到創紀錄的 1,100 億美元，越盾穩如泰山。\n• 階段二：2022 下半年~2023【利差劇震與區間擴大】：美聯儲以 40 年來最快速度暴力升息至 5.25%~5.50%，而越南央行在 2023 年為了拯救深陷流動性危機的國內房地產業，逆勢連續 4 次降息。美越隔夜利差倒掛高達 400~500 個基點，持有越盾的機會成本極其高昂，商業銀行紛紛囤積美元。2022 年 10 月，央行被迫將中心匯率浮動區間由 ±3% 放寬至 ±5%。\n• 階段三：2024~2026【黃金走私衝擊與新常態平衡】：國內 SJC 黃金因供給垄斷，國內金價較國際金價溢價高達 20%~25%。大量熱錢湧入河內河中街（Hà Trung）等自由市場，以溢價越盾換取美金赴海外走私黃金，黑市匯率一度衝破 26,000 大關。',
        contentVi: '• Giai đoạn 1 (2021 - đầu 2022): VND giữ giá cực tốt nhờ xuất siêu kỷ lục và dòng kiều hối, dự trữ ngoại hối đạt đỉnh 110 tỷ USD. • Giai đoạn 2 (cuối 2022 - 2023): Fed tăng lãi suất kỷ lục trong khi SBV đảo chiều nới lỏng cứu bất động sản, chênh lệch lãi suất âm 500 bps thúc đẩy đầu cơ USD, SBV nới biên độ lên ±5%. • Giai đoạn 3 (2024 - 2026): Cơn sốt vàng SJC đẩy giá tự do vượt 26.000 trước khi bình ổn lại nhờ can thiệp quyết liệt.'
      },
      {
        heading: '二、央行（SBV）干預工具箱的極限運作',
        headingVi: '2. Bộ công cụ điều hành linh hoạt của Ngân hàng Nhà nước',
        content: '面對匯率失控風險，越南國家銀行展現了高度靈活的組合拳調控：\n1. 發行央行國庫券（T-Bills）：在公開市場操作中發行 28 天期票據，自銀行體系吸納過剩越盾流動性，推高銀行間拆款利率，縮減套息空間。\n2. 動用外匯存底現匯拋售：在 25,450 關鍵點位直接向合格進口商業銀行以干預價賣出美元，估計累計動用逾 180 億美元外匯儲備。\n3. 終結 SJC 金條拍賣壟斷，改由四大行直售：由 Vietcombank、BIDV、VietinBank、Agribank 四大公股行庫直接按央行定價向民眾銷售金條，徹底擊潰黃金投機溢價，一舉斬斷黑市套匯利益鏈。',
        contentVi: 'SBV đã triển khai đồng bộ 4 biện pháp then chốt: (1) Phát hành tín phiếu OMO kỳ hạn 28 ngày để nâng mặt bằng lãi suất liên ngân hàng VND; (2) Bán ngoại tệ can thiệp tỷ giá giao ngay cho các ngân hàng có trạng thái âm; (3) Thay đổi phương thức can thiệp thị trường vàng qua Big 4 và SJC để triệt tiêu chênh lệch giá; (4) Tăng cường thanh kiểm tra hoạt động mua bán ngoại tệ của các tổ chức tín dụng.'
      },
      {
        heading: '三、2026 下半年 USD/VND 走勢關鍵研判',
        headingVi: '3. Dự báo xu hướng tỷ giá USD/VND cuối năm 2026',
        content: '展望未來一年，越盾預計將維持在 25,300 ~ 25,600 的窄幅箱型整理區間，再度出現斷崖式貶值的機率極低，原因包括：\n- 美聯儲降息週期落地：美越利差已由倒掛逐步收斂至中性，熱錢流出壓力大幅緩解。\n- 外貿經常帳穩健：2026 全年外貿順差預期突破 260 億美元，加上僑匯年均 160 億美元的持續湧入，實體外匯供應極度充沛。\n- 外匯儲備回補週期展開：央行正把握美元回落窗口重新在市場買入外匯，預計年底前外儲規模回升至 980 億美元，安全護城河更加堅固。',
        contentVi: 'Tỷ giá USD/VND nhiều khả năng sẽ dao động tích lũy trong biên độ 25.300 - 25.600 VND. Áp lực giảm giá tiếp diễn ở mức thấp nhờ Fed đã bước vào chu kỳ nới lỏng lãi suất, dòng vốn kiều hối và FDI thực hiện ổn định, cùng thặng dư thương mại hàng hóa trên 26 tỷ USD hỗ trợ đắc lực cho SBV mua bổ sung dự trữ ngoại tệ.'
      }
    ],
    terms: [
      { term: 'Tỷ giá trung tâm', hanViet: '比價中心', meaning: '央行公布之每日中心匯率基準' },
      { term: 'Biên độ tỷ giá', hanViet: '邊度比價', meaning: '匯率波動幅度許可區間 (目前為 ±5%)' },
      { term: 'Thị trường tự do (Chợ đen)', hanViet: '市場自由 (黑市)', meaning: '自由市場民間換匯/黑市' }
    ]
  },
  {
    id: 'DOSSIER-2026-03',
    issueNo: 'VN-MACRO-006',
    date: '2026-08-21',
    category: 'banking',
    categoryLabel: '銀行利率',
    categoryLabelVi: 'Ngân hàng & Lãi suất',
    readTime: '13 分鐘',
    readTimeVi: '13 phút đọc',
    title: '越南四大國有銀行與股份制商業銀行利差趨勢分析：信貸額度（Room Tín Dụng）鬆綁與房貸壞帳清理',
    titleVi: 'Phân tích biên lãi thuần (NIM) hệ thống ngân hàng: Cởi trói room tín dụng và tiến trình xử lý nợ xấu bất động sản',
    subtitle: '公股行庫定存利率堅守 4.8% 護城河，民營股份銀行搶奪高利優質客戶，淨利差 (NIM) 兩極化分水嶺',
    subtitleVi: 'Big 4 giữ vững lợi thế chi phí vốn thấp CASA, các ngân hàng tư nhân cạnh tranh tín dụng bán lẻ và số hóa',
    author: '金融機構與信用評級研究小組',
    authorVi: 'Nhóm Nghiên cứu Định chế Tài chính & Xếp hạng Tín nhiệm',
    tags: ['四大國有銀行', '定存利率', '放款利率', '淨利差 NIM', 'Room信貸額度'],
    tagsVi: ['Big 4 Ngân hàng', 'Lãi suất tiền gửi', 'Room tín dụng', 'Xử lý nợ xấu', 'Biên lãi NIM'],
    kpis: [
      { label: '全系統信貸增長', labelVi: 'Tăng trưởng tín dụng', val: '+14.5% 目標', type: 'green' },
      { label: '不良貸款率 (NPL)', labelVi: 'Tỷ lệ nợ xấu (NPL)', val: '1.92%', type: 'blue' },
      { label: '公私立定存利差', labelVi: 'Chênh lệch lãi suất gửi', val: '60 ~ 90 bps', type: 'gold' }
    ],
    summary: '2026 年越南銀行體系迎來重大格局轉折。越南央行（SBV）改革實施多年的「信貸額度（Room Tín Dụng）」行政分配制度，全面轉向依據商業銀行資本充足率（CAR、Basel II/III 標準）與資產品質進行動態自主授信。四大國有公股銀行（Vietcombank、BIDV、VietinBank、Agribank）憑藉龐大的低成本活期存款（CASA）優勢，將 12 個月定存利率壓制在 4.7%~4.9% 的低位，並以 6.0% 左右的超低短期放款利率壟斷跨國外資企業與大型國企貸款；反觀 Techcombank、MB Bank、VPBank 等頂級民營銀行，則透過 5.2%~5.8% 的高息定存吸引民間零售儲蓄，並將主力押注在供應鏈金融與中型製造業擴廠融資。本篇深度剖析兩大陣營的存貸定價博弈與房地產不良資產處置進度。',
    summaryVi: 'Năm 2026 đánh dấu bước chuyển mang tính bước ngoặt của hệ thống ngân hàng Việt Nam. SBV đã cơ bản dỡ bỏ cơ chế giao chỉ tiêu room tín dụng mang tính hành chính, chuyển sang cơ chế quản lý an toàn vốn dựa trên chuẩn mực Basel II/III và xếp hạng CAMELS. Khối Big 4 phát huy tối đa lợi thế tiền gửi không kỳ hạn CASA để cung cấp vốn rẻ cho các dự án lớn, trong khi khối ngân hàng TMCP tư nhân năng động (Techcombank, MB, VPBank, ACB) bứt phá ở mảng tài trợ chuỗi cung ứng và ngân hàng số.',
    sections: [
      {
        heading: '一、信貸配額（Room Tín Dụng）改革：告別齊頭式行政分配',
        headingVi: '1. Đổi mới quản lý room tín dụng: Chuyển sang cơ chế thị trường',
        content: '過去十年，越南央行每年初會為各銀行下達 12%~15% 的信貸增長上限額度，導致每年第四季銀行經常出現「額度用罄被迫停貸」的窘境。\n自 2025 年底起，央行正式採納市場化原則，對資本充足率高於 12%、壞帳率低於 1.5% 的健全銀行（如 Techcombank、Vietcombank、MB Bank）全面開放入信貸上限限制，允許銀行根據自身流動性進行放款擴張。這一變革激發了企業貸款融資的充沛活力。',
        contentVi: 'Việc dỡ bỏ trần hạn mức tín dụng cào bằng giúp các ngân hàng có tỷ lệ CAR cao, quản trị rủi ro tốt chủ động mở rộng quy mô giải ngân, chấm dứt tình trạng nghẽn vốn vào quý IV hàng năm.'
      },
      {
        heading: '二、存貸利率結構深度對比：公股 vs 民營',
        headingVi: '2. Cơ cấu lãi suất: Sự phân hóa giữa nhóm Big 4 và khối tư nhân',
        content: '從數據矩陣可以清晰看見當前市場的結構性分歧：\n- 存款端：以 12 個月天期為例，Vietcombank 僅開出 4.70%，而 VPBank 則給出 5.40%，利差高達 70 個基點。存戶若追求絕對資產安全性多選擇 Big4，若追求利息收益則流向民營大型銀行。\n- 放款端：在政府鼓勵的五大優先領域（農業、出口、科技、配套工業、中小企業），全體銀行必須嚴格遵守央行規定的 4.00% 短期放款利率上限。而在一般商業貸款上，公股銀行平均放款利率約在 6.0%~7.2%，民營股份行則在 7.5%~9.2% 區間，形成了涇渭分明的市場分工。',
        contentVi: 'Lãi suất tiền gửi 12 tháng tại Big 4 neo quanh 4,7 - 4,9%, trong khi khối tư nhân từ 5,2 - 5,8%. Nhóm Big 4 thống lĩnh cho vay doanh nghiệp lớn và FDI với lãi suất cạnh tranh 6,0 - 7,2%, khối tư nhân tập trung SME và tiêu dùng với biên lãi cao hơn.'
      },
      {
        heading: '三、房地產與企業債不良資產處置進入收斂期',
        headingVi: '3. Tiến trình lành mạnh hóa nợ xấu bất động sản và trái phiếu doanh nghiệp',
        content: '伴隨修訂後的《土地法》（Luật Đất đai 2024）、《住房法》與《房地產經營法》全面生效，全越超過 1,200 個原先卡在法規紅線的建案陸續取得合法產權與預售許可，沉積在銀行資產負債表上的抵押物流動性大幅復甦。\n多數大型上市房企成功完成公司債延期或換股協議，全行業系統性信用違約風險已基本解除，銀行資產負債表正迎來四年來最健康的修復階段。',
        contentVi: 'Hiệu lực đồng bộ của Luật Đất đai 2024, Luật Nhà ở và Luật Kinh doanh BĐS đã tháo gỡ điểm nghẽn pháp lý cho hàng nghìn dự án, giúp thanh khoản tài sản bảo đảm phục hồi và đưa tỷ lệ nợ xấu thực tế toàn ngành kiểm soát dưới 2%.'
      }
    ],
    terms: [
      { term: 'Room tín dụng', hanViet: '信貸空間 (配額)', meaning: '央行分配給各商業銀行之年度放款增長額度' },
      { term: 'Biên lãi thuần (NIM)', hanViet: '邊利純', meaning: '銀行淨利息收益率 (Net Interest Margin)' },
      { term: 'Tiền gửi không kỳ hạn (CASA)', hanViet: '錢寄無期限', meaning: '活期存款與活期儲蓄佔比' }
    ]
  },
  {
    id: 'DOSSIER-2026-04',
    issueNo: 'VN-MACRO-005',
    date: '2026-08-14',
    category: 'customs',
    categoryLabel: '外貿海關',
    categoryLabelVi: 'Thương mại & Hải quan',
    readTime: '14 分鐘',
    readTimeVi: '14 phút đọc',
    title: '海關總局最新進出口通關統計深度洞察：美越千億順差下的轉口洗產地防規避查核風暴與 C/O 因應實務',
    titleVi: 'Xuất siêu kỷ lục sang Mỹ vượt 100 tỷ USD: Nguy cơ điều tra chống lẩn tránh và quy tắc xuất xứ hàng hóa C/O',
    subtitle: '美國商務部與 CBP 啟動嚴格溯源穿透式查驗，越南海關重拳打擊非法轉口（Transshipment），台商供應鏈合規守則',
    subtitleVi: 'CBP và DOC tăng cường hậu kiểm truy xuất nguồn gốc linh kiện; Tổng cục Hải quan quyết liệt xử lý gian lận xuất xứ',
    author: '國際貿易救濟與海關法務小組',
    authorVi: 'Nhóm Pháp chế Hải quan & Phòng vệ Thương mại Quốc tế',
    tags: ['海關總局', '進出口統計', '產地證明 CO', '洗產地防規避', '美越貿易'],
    tagsVi: ['Tổng cục Hải quan', 'Xuất siêu', 'Quy tắc xuất xứ C/O', 'Chống gian lận thương mại', 'Thương mại Việt - Mỹ'],
    kpis: [
      { label: '對美出口順差', labelVi: 'Xuất siêu sang Mỹ', val: '$103.3 B', type: 'gold' },
      { label: '查扣違規申報案', labelVi: 'Vụ việc vi phạm C/O', val: '1,420 件', type: 'red' },
      { label: 'C/O Form B 核發增長', labelVi: 'Cấp chứng nhận C/O', val: '+18.2%', type: 'blue' }
    ],
    summary: '2026 年越南貨物進出口總額正式向 8,000 億美元大關邁進，全年生產製造與外貿景氣維持雙位數擴張。然而，在榮景背後，巨大的地緣外貿風險正在集聚：越南對美國的單一國家貿易順差正式突破 1,000 億美元，位居全美順差國前三大。這引發了美國商務部（DOC）與海關邊境保護局（CBP）對越南光伏組件、木製家具、鋼鐵鋁材、消費電子等產品發起密集的「反規避（Anti-circumvention）」穿透式原產地調查。越南海關總局隨即展開代號為「防假冒產地與非法轉口」的專項稽查，加強加工出口廠（EPE）原物料耗用率核銷。本篇深入解構台商如何建立完整的原產地證明（C/O）物料清單（BOM）舉證鏈。',
    summaryVi: 'Tổng kim ngạch xuất nhập khẩu của Việt Nam hướng tới mốc 800 tỷ USD với thặng dư thương mại sang Hoa Kỳ vượt ngưỡng 100 tỷ USD. Mức thặng dư kỷ lục này kéo theo các cuộc điều tra chống lẩn tránh phòng vệ thương mại từ Bộ Thương mại Mỹ (DOC) và Cơ quan Hải quan & Bảo vệ Biên giới Mỹ (CBP) đối với các mặt hàng pin mặt trời, đồ gỗ nội thất, nhôm thép và điện tử. Tổng cục Hải quan đã triển khai chiến dịch chống chuyển tải bất hợp pháp, siết chặt quản lý phế liệu và quyết toán nguyên vật liệu tại các doanh nghiệp chế xuất (EPE).',
    sections: [
      {
        heading: '一、數據透視：出口狂飆背後的「中間品」進口暴增',
        headingVi: '1. Đặc điểm cơ cấu: Nhập siêu nguyên liệu và xuất siêu thành phẩm',
        content: '越南海關最新通關統計呈現一個鮮明的結構特徵：\n• 出口端：電腦電子零組件（685億美元）、智慧型手機（562億美元）、成衣鞋類合計破 650 億美元，美國市場佔據全越出口總額的近 30%。\n• 進口端：越南自中國進口金額高達 1,388 億美元，其中超過 80% 均為原物料、電子半成品晶片、被動元件、面料紗線、鋼捲塑料。\n這意味著越南在很大程度上扮演了「將亞洲原物料加工組裝成終端產品並外銷歐美」的關鍵離岸樞紐。這種「大進大出」模式一旦遭遇產地認定質疑，整個供應鏈將面臨致命衝擊。',
        contentVi: 'Việt Nam nhập khẩu gần 140 tỷ USD linh kiện, vải sợi, kim loại từ Trung Quốc để gia công lắp ráp và xuất khẩu sang Mỹ gần 120 tỷ USD thành phẩm. Cơ cấu này tiềm ẩn rủi ro rất lớn nếu không chứng minh được tỷ lệ giá trị gia tăng tại Việt Nam.'
      },
      {
        heading: '二、美方查核焦點：實質轉型與「微小加工」紅線',
        headingVi: '2. Tiêu chí kiểm tra của CBP: Chuyển đổi cơ bản và gia công đơn giản',
        content: '根據美國海關判例與貿易法，凡在越南進行「簡單組裝、包裝貼標、簡易分裝」者，均不構成實質性轉變（Substantial Transformation），會被直接判定為洗產地並課徵懲罰性反傾銷稅（最高可達 200% 以上）。\nCBP 當前的稽查手法包括：\n1. 核對工廠用電度數與勞工出勤打卡紀錄：比對工廠申報產能是否與實際水電人力消耗相符。\n2. 生產設備價值檢視：工廠是否具備關鍵核心製程機台（如 SMT 貼片機、精密沖壓模具），而非僅有螺絲起子裝配線。\n3. 深入第二層供應商溯源：要求提供上游零件進口報單、船運提單（B/L）與付款水單。',
        contentVi: 'CBP tập trung kiểm tra xem công đoạn tại Việt Nam có đạt tiêu chí "chuyển đổi cơ bản" hay chỉ là lắp ráp đơn giản (screwdriver operation). Phương pháp điều tra bao gồm kiểm tra lượng điện năng tiêu thụ, số lượng công nhân và máy móc chuyên dụng như dây chuyền dán bề mặt SMT.'
      },
      {
        heading: '三、台商製造廠防禦指南：建立 C/O 與料件核銷合規防火牆',
        headingVi: '3. Khuyến nghị tuân thủ: Hoàn thiện hồ sơ hải quan và quyết toán',
        content: '為免捲入海關查扣與巨額追繳補稅，在越工廠必須落實以下三大標準作業程序：\n• 嚴格落實增值比率（RVC）計算：確保在越南本地生產加工所發生的原材料、人工與製造費用佔離岸價（FOB）比重穩定高於 35%~40%。\n• 及時申請工貿部（MoIT）合法產地證：依出口國規範申請 Form B、Form EUR.1 或 Form CPTPP，杜絕向非法掮客購買假證。\n• 落實海關年度結算申報（Báo cáo quyết toán）：每財政年度結束後 90 天內，核對進口保稅料件、庫存量與出口成品消耗量，誤差率須控制在合理損耗範圍內。',
        contentVi: 'Doanh nghiệp FDI cần duy trì hàm lượng giá trị khu vực RVC trên 35 - 40%, lập định mức tiêu hao nguyên phụ liệu chính xác và nộp Báo cáo quyết toán hải quan đúng thời hạn 90 ngày kể từ ngày kết thúc năm tài chính.'
      }
    ],
    terms: [
      { term: 'Xuất siêu', hanViet: '出超', meaning: '貿易順差 (出口大於進口)' },
      { term: 'C/O (Giấy chứng nhận xuất xứ)', hanViet: '紙證明出身', meaning: '貨物原產地證明書' },
      { term: 'Báo cáo quyết toán hải quan', hanViet: '報告決算海關', meaning: '加工出口廠年度進出口物料核銷決算報告' }
    ]
  },
  {
    id: 'DOSSIER-2026-05',
    issueNo: 'VN-MACRO-004',
    date: '2026-08-07',
    category: 'fdi',
    categoryLabel: '外資供應鏈',
    categoryLabelVi: 'Chuỗi cung ứng & FDI',
    readTime: '11 分鐘',
    readTimeVi: '11 phút đọc',
    title: '第二波全球供應鏈大遷徙：半導體封測（Amkor/Hana Micron）與 AI 伺服器供應鏈落戶越南之電力 PDP8 與綠電承諾挑戰',
    titleVi: 'Làn sóng FDI thế hệ mới: Chuỗi bán dẫn OSAT, máy chủ AI và bài toán hạ tầng điện lực Quy hoạch VIII',
    subtitle: '晶片製造不容一秒斷電：第八版電力規劃（PDP8）核准直接購電協議（DPPA），解密科技大廠在越擴產藍圖',
    subtitleVi: 'Nghị định mua bán điện trực tiếp (DPPA) và đường dây 500kV mạch 3 giải quyết bài toán an ninh năng lượng cho công nghệ cao',
    author: '高科技產業與能源戰略組',
    authorVi: 'Tổ Nghiên cứu Công nghệ cao & Chiến lược Năng lượng',
    tags: ['半導體封測', '供應鏈遷徙', 'PDP8電力規劃', 'DPPA綠電協議', 'FDI擴廠'],
    tagsVi: ['Công nghiệp bán dẫn', 'FDI công nghệ cao', 'Quy hoạch điện VIII', 'Cơ chế DPPA', 'Hạ tầng năng lượng'],
    kpis: [
      { label: '半導體投資總額', labelVi: 'Vốn đầu tư bán dẫn', val: '$5.5 B+', type: 'blue' },
      { label: '北越工業用電增長', labelVi: 'Tăng trưởng điện miền Bắc', val: '+12.8% YoY', type: 'red' },
      { label: 'DPPA 購電試點', labelVi: 'Quy mô thí điểm DPPA', val: '1,000 MW', type: 'green' }
    ],
    summary: '如果說 2018 至 2022 年的第一波遷越潮由紡織、組裝與傳統消費電子主導，那麼 2024 至 2026 年的第二波大遷徙則全面升級為「半導體封測（OSAT）、高階印刷電路板（HDI/Substrate）與 AI 伺服器模組」的高技術密度競爭。全球封測巨頭 Amkor 在北寧省斥資 16 億美元的智慧工廠全面滿載投產，韓國 Hana Micron、美商 Intel、台系載板與伺服器大廠亦接連在北越與同奈展開二期擴建。然而，先進製造業對「電網穩定度、電壓微幅驟降容忍度、以及 100% RE100 綠電」提出嚴苛要求。本專題解析越南總理簽署之直接購電機制（DPPA）法令如何為外資打通自建綠能的生命線。',
    summaryVi: 'Làn sóng dịch chuyển chuỗi cung ứng sang Việt Nam bước vào giai đoạn 2 với trọng tâm là đóng gói bán dẫn (OSAT), bo mạch chủ cao tầng (HDI) và linh kiện máy chủ AI. Nhà máy Amkor 1,6 tỷ USD tại Bắc Ninh đi vào hoạt động cùng sự mở rộng của Hana Micron tại Bắc Giang đòi hỏi nguồn điện liên tục và xanh 100%. Chính phủ đã ban hành cơ chế mua bán điện trực tiếp (DPPA) và thần tốc hoàn thành đường dây 500kV mạch 3 Quảng Trạch - Phố Nối để đảm bảo cấp điện an toàn tuyệt đối cho các trung tâm sản xuất bán dẫn.',
    sections: [
      {
        heading: '一、晶片重鎮成型：北越半導體聚落成型',
        headingVi: '1. Hình thành trung tâm bán dẫn công nghệ cao tại miền Bắc',
        content: '以河內為圓心、車程兩小時以內的北寧（Bắc Ninh）、北江（Bắc Giang）、海防（Hải Phòng）、永福（Vĩnh Phúc），已成為全球最密集的電子製造廊帶之一。\n三星電子、富士康、立訊精密在此打下厚實基礎後，上游封測與半導體周邊材料廠迅速跟進。Amkor 北寧廠佔地 23 公頃，具備先進 SiP（系統級封裝）與 2.5D 封裝能力；Hana Micron 在北江的投資規模亦達到 10 億美元，形成了強大的群聚效應。',
        contentVi: 'Vành đai công nghiệp Bắc Ninh - Bắc Giang - Hải Phòng - Vĩnh Phúc đã trở thành mắt xích quan trọng của chuỗi bán dẫn toàn cầu với sự hiện diện của Amkor, Hana Micron cùng hàng trăm nhà cung cấp vệ tinh cấp 1 của Apple, Samsung và Nvidia.'
      },
      {
        heading: '二、電力大考：擺脫 2023 酷暑停電陰影',
        headingVi: '2. Giải quyết triệt để bài toán cung ứng điện công nghiệp',
        content: '半導體無塵室哪怕面臨 0.1 秒的瞬間斷電，都會導致數百萬美元的晶圓與材料報廢。2023 年夏季北越水庫乾涸引發的輪流限電，曾給跨國科技廠敲響警鐘。\n為此，越南政府在 2024-2026 年採取了三項雷霆措施：\n1. 加速興建 500kV 第三回超高壓輸電線路（Quảng Trạch 至 Phố Nối）：僅耗時短短一年即宣告全線貫通，將中南部豐沛的風電與火力電力每日數千萬度馳援北越工業重地。\n2. 重啟液化天然氣（LNG）發電與儲能建置：在海防與清化加快興建 LNG 接收站與燃氣電廠，提供基載電力保障。\n3. 全面實施離峰階梯電價與備用柴油發電機補助：確保高科技特種園區享有全天候無中斷的供電優待。',
        contentVi: 'Tuyến đường dây 500kV mạch 3 hoàn thành thần tốc đã truyền tải hàng chục triệu kWh điện từ miền Trung ra miền Bắc mỗi ngày, kết hợp cùng các dự án nhiệt điện khí LNG đảm bảo cung ứng điện 24/7 cho các phòng sạch vô trùng.'
      },
      {
        heading: '三、DPPA 綠電直購機制：破除國營電力 EVN 壟斷',
        headingVi: '3. Cơ chế DPPA: Mở lối cho cam kết RE100 của các tập đoàn Big Tech',
        content: '針對蘋果、微軟、谷歌等供應鏈要求的 RE100 碳中和指標，越南政府正式頒布第 80/2024/NĐ-CP 號法令，允許大型用電戶（月均用電逾 20 萬度）與民間再生能源發電商（風力、太陽能）直接簽署購電協議（DPPA），繞過傳統越南國家電力公司的繁複批發定價。這一突破性開放，徹底消除了跨國科技巨頭對越南綠能指標不足的疑慮。',
        contentVi: 'Nghị định 80/2024/NĐ-CP cho phép khách hàng sử dụng điện lớn ký hợp đồng mua bán điện trực tiếp (DPPA) với các nhà máy năng lượng tái tạo độc lập, giúp doanh nghiệp đạt chứng nhận phát thải xanh theo chuẩn mực quốc tế.'
      }
    ],
    terms: [
      { term: 'Đóng gói bán dẫn', hanViet: '凍包半導', meaning: '半導體晶片封裝測試 (OSAT)' },
      { term: 'Quy hoạch điện VIII (PDP8)', hanViet: '規劃電八', meaning: '越南國家第八版電力發展總體規劃' },
      { term: 'Cơ chế mua bán điện trực tiếp (DPPA)', hanViet: '機制買賣電直接', meaning: '直接購電協議機制' }
    ]
  },
  {
    id: 'DOSSIER-2026-06',
    issueNo: 'VN-MACRO-003',
    date: '2026-07-31',
    category: 'politics',
    categoryLabel: '總體政經',
    categoryLabelVi: 'Chính trị - Vĩ mô',
    readTime: '10 分鐘',
    readTimeVi: '10 phút đọc',
    title: '670 億美元越南南北高速鐵路與全越行政省份大合併：重塑國土地理經濟學的世紀大戰略',
    titleVi: 'Đường sắt tốc độ cao Bắc - Nam 67 tỷ USD và đề án sắp xếp lại đơn vị hành chính: Tái cấu trúc không gian kinh tế',
    subtitle: '時速 350 公里客運專線貫通河內至胡志明市，從 30 小時壓縮至 5.5 小時，打造泛東協最強物流走廊',
    subtitleVi: 'Tuyến đường đôi khổ tiêu chuẩn 1.435 mm rút ngắn thời gian Hà Nội - TP.HCM xuống 5,5 giờ, thúc đẩy mô hình TOD và các vùng kinh tế liên tỉnh',
    author: '交通基建與區域經濟戰略室',
    authorVi: 'Trung tâm Chiến lược Hạ tầng Giao thông & Không gian Kinh tế',
    tags: ['南北高鐵', '世紀基建', '省份合併', '公眾投資', '國土整併'],
    tagsVi: ['Đường sắt tốc độ cao', 'Hạ tầng giao thông', 'Sắp xếp đơn vị hành chính', 'Đầu tư công', 'Không gian kinh tế'],
    kpis: [
      { label: '高鐵投資總額', labelVi: 'Tổng mức đầu tư ĐSTĐC', val: '$67.34 B', type: 'gold' },
      { label: '設計最高時速', labelVi: 'Tốc độ thiết kế', val: '350 km/h', type: 'blue' },
      { label: '完工預定期程', labelVi: 'Kế hoạch hoàn thành', val: '2035 年全線通車', type: 'green' }
    ],
    summary: '國會正式通過越南南北高速鐵路（Đường sắt tốc độ cao Bắc - Nam）投資計畫決議案，宣告這條構想超過二十年的巨型動脈進入實質建設軌道。全長 1,541 公里、共設 23 個客運車站，全線採用國際標準軌（1,435mm）並獨立雙線電氣化設計，預計將首都河內與南方經濟心臟胡志明市的陸路交通時間，由目前的 30 小時以上一口氣縮短至 5 小時 30 分鐘以內。與此同時，中央啟動了自 1975 年國家統一以來最大規模的「跨省行政區劃精簡合併工程」，將人口偏少或財政自給率不足的小省進行合併重組，降低行政養人成本，釋出萬億級資金聚焦重大交通走廊。',
    summaryVi: 'Quốc hội đã bấm nút thông qua chủ trương đầu tư dự án đường sắt tốc độ cao trục Bắc - Nam với tổng mức đầu tư 67,34 tỷ USD. Toàn tuyến dài 1.541 km gồm 23 ga hành khách, tốc độ thiết kế 350 km/h đưa thời gian di chuyển từ Hà Nội đến TP.HCM xuống còn 5,5 giờ. Song song đó, việc sắp xếp tinh gọn các đơn vị hành chính cấp tỉnh tạo điều kiện giải phóng nguồn lực tài khóa và liên kết các hành lang kinh tế ven biển đồng bộ.',
    sections: [
      {
        heading: '一、籌資模式大突破：拒絕外債泥淖，以內資公債為主',
        headingVi: '1. Phương thức huy động vốn: Độc lập tự chủ, dựa vào nguồn lực trong nước',
        content: '不同於過往依賴世界銀行或特定大國 ODA 貸款所帶來的苛刻綁標條件，本屆政府明確拍板：南北高鐵將以國家財政預算與發行本土長期公債為主軸（佔比達 70% 以上），輔以沿線土地開發（TOD 模式）收益。\n得益於過去五年將公共債務佔 GDP 比重嚴格控制在 37%（遠低於 60% 的法定警戒線），越南財政擁有極其充裕的舉債空間來承擔這項歷史工程，且不會引發主權債務危機。',
        contentVi: 'Việt Nam quyết định tự lực phát hành trái phiếu chính phủ và khai thác quỹ đất quanh các nhà ga theo mô hình TOD, giữ tỷ lệ nợ công ở mức an toàn 37% GDP và không phụ thuộc vào các điều kiện ràng buộc của vốn vay ODA nước ngoài.'
      },
      {
        heading: '二、高鐵的產業鏈外溢：打造本土重工業與軌道經濟',
        headingVi: '2. Hiệu ứng lan tỏa: Thúc đẩy công nghiệp luyện kim và cơ khí chế tạo',
        content: '南北高鐵不僅是一條鐵路，更被定位為催生越南重工業技術躍升的孵化器。\n政府要求主承包商必須落實「技術移轉」，強制要求鋼軌、車廂組裝、通訊信號與車站建築由本土企業（如和發鋼鐵 Hòa Phát、長海汽車 Thaco）深度參與，預計將創造超過 25 萬個高技術工程與營建就業機會。',
        contentVi: 'Dự án yêu cầu chuyển giao công nghệ cho các doanh nghiệp trong nước như Hòa Phát (thép ray), Thaco (đầu máy toa xe), tạo thêm hàng trăm nghìn việc làm kỹ thuật cao.'
      },
      {
        heading: '三、省份整併重組：消弭地方主義，提升行政綜效',
        headingVi: '3. Sắp xếp đơn vị hành chính: Tinh gọn bộ máy, mở rộng dư địa phát triển',
        content: '伴隨高鐵設立沿線大站，國會同步通過省級行政區劃重組方案。過往全越劃分多達 63 個省市，存在機構臃腫、跨省道路銜接不良、招商惡性殺價競爭等弊病。\n透過合併相鄰省份，將形成多個具備 300 萬至 500 萬人口規模的經濟大省，大幅強化地方招商引資的議價能力與產業配套協同。',
        contentVi: 'Đề án sắp xếp các tỉnh có quy mô nhỏ hình thành các vùng kinh tế 3 - 5 triệu dân, xóa bỏ tình trạng cát cứ manh mún và tối ưu hóa hạ tầng logistic kết nối theo trục giao thông cao tốc.'
      }
    ],
    terms: [
      { term: 'Đường sắt tốc độ cao', hanViet: '道路鐵速度高', meaning: '高速鐵路 (HSR)' },
      { term: 'Mô hình TOD', hanViet: '模型 TOD', meaning: '大眾運輸導向型都市土地開發' },
      { term: 'Sáp nhập đơn vị hành chính', hanViet: '插納單位行政', meaning: '行政區劃精簡合併' }
    ]
  },
  {
    id: 'DOSSIER-2026-07',
    issueNo: 'VN-MACRO-002',
    date: '2026-07-17',
    category: 'regulations',
    categoryLabel: '政策法規',
    categoryLabelVi: 'Pháp lý & Thuế khóa',
    readTime: '12 分鐘',
    readTimeVi: '12 phút đọc',
    title: '越南全球最低稅負制（Pillar Two）落地與《投資支持基金》補貼法令全景解讀：台商租稅優惠保衛戰',
    titleVi: 'Thuế tối thiểu toàn cầu (Pillar Two) và cơ chế bù đắp từ Quỹ hỗ trợ đầu tư: Cục diện mới cho doanh nghiệp FDI',
    subtitle: '15% 最低實質稅率終結零稅率時代，政府推出廠房研發與綠色轉型現金返還，台資跨國企業重算帳本',
    subtitleVi: 'Thực thi thuế bổ sung tối thiểu nội địa QDMTT 15% đi kèm các gói trợ cấp tiền mặt cho chi phí nghiên cứu phát triển và công nghệ cao',
    author: '跨國租稅與國際投資法律顧問室',
    authorVi: 'Tổ Tư vấn Thuế Quốc tế & Pháp lý Đầu tư Nước ngoài',
    tags: ['全球最低稅負制', 'Pillar Two', '投資支持基金', '所得稅租稅優惠', '外資合規'],
    tagsVi: ['Thuế tối thiểu toàn cầu', 'Pillar Two', 'Quỹ hỗ trợ đầu tư', 'Ưu đãi thuế TNDN', 'Tuân thủ FDI'],
    kpis: [
      { label: '法定最低稅率', labelVi: 'Thuế suất tối thiểu', val: '15.0%', type: 'red' },
      { label: '納管外資企業數', labelVi: 'Số tập đoàn áp dụng', val: '122 家跨國龍頭', type: 'blue' },
      { label: '支持基金規模', labelVi: 'Quy mô quỹ hỗ trợ', val: '約 12 兆越盾', type: 'green' }
    ],
    summary: '長年以來，越南憑藉「四免九減半（前4年免所得稅、後9年減半徵收）」等極度優惠的超低稅率，吸引了三星、富士康、廣達、仁寶等全球電子代工巨頭落戶。然而，隨著經合組織（OECD）全球反稅基侵蝕規範（BEPS 2.0 / Pillar Two）強制實施，越南自 2024 年起正式開徵合格國內最低補足稅（QDMTT），要求年營收逾 7.5 億歐元的跨國企業集團實質稅率不得低於 15%。為了防止外資因稅率攀升而將新產能移往其他國家，越南政府正式端出《外國投資支持基金法令》，改以研發支出（R&D）、固定資產投資、高科技人才培育與綠色基礎建設提供高比例的「直接財政現金補貼」。本專題全面拆解新政影響與因應之道。',
    summaryVi: 'Cơ chế thuế tối thiểu toàn cầu chấm dứt kỷ nguyên ưu đãi miễn thuế thu nhập doanh nghiệp kéo dài. Nhằm duy trì sức hấp dẫn đầu tư trước các đối thủ trong khu vực, Quốc hội và Chính phủ Việt Nam đã thông qua Nghị định thành lập Quỹ hỗ trợ đầu tư, trực tiếp hỗ trợ tài chính bằng tiền mặt cho các khoản chi phí R&D, đầu tư máy móc công nghệ cao và xây dựng nhà ở xã hội cho công nhân.',
    sections: [
      {
        heading: '一、舊有「免稅期」名存實亡：全球稅局聯手補徵',
        headingVi: '1. Khép lại kỷ nguyên miễn thuế kéo dài: Quy tắc BEPS 2.0',
        content: '在 Pillar Two 框架下，即便越南政府維持 0% 或 5% 的優惠所得稅率，外資母國稅局亦擁有「所得涵蓋規則（IIR）」的徵稅權，可以直接在母國要求跨國集團補繳至 15% 差額。\n因此，越南政府主動開徵 QDMTT，不僅符合國際反避稅準則，更將這筆高達數億美元的稅收留在越南國庫，而非拱手送給外資母國稅局。',
        contentVi: 'Việc áp dụng thuế thu nhập doanh nghiệp bổ sung tối thiểu nội địa (QDMTT) giữ lại khoản thuế chênh lệch tại Việt Nam thay vì để các quốc gia nơi đặt trụ sở chính của tập đoàn thu theo quy tắc IIR.'
      },
      {
        heading: '二、投資支持基金（Investment Support Fund）的運作機制',
        headingVi: '2. Cơ chế vận hành Quỹ hỗ trợ đầu tư',
        content: '越南政府將徵收上來的最低稅負補足稅款，全額撥入專項支持基金，並依下列標準向合規外商提供現金返還：\n- 高科技研發支出補貼：企業在越設立研發中心（R&D Center）的年度開銷，最高可獲 50% 的現金補償。\n- 先進設備與自動化採購補貼：引進節能、低碳或先進半導體/SMT 生產線，給予固定資產購置金額 5%~10% 的補助款。\n- 勞工技能培訓與社會住宅支持：工廠為本地工程師開辦技術認證課程，或出資興建工人宿舍園區者，享有專案直接補貼。',
        contentVi: 'Toàn bộ số thu từ thuế bổ sung được đưa vào Quỹ hỗ trợ đầu tư để chi trả trực tiếp cho: chi phí đầu tư phòng Lab nghiên cứu, mua sắm máy móc tự động hóa và đào tạo nguồn nhân lực kỹ thuật cao.'
      },
      {
        heading: '三、台商供應鏈的階層因應策略',
        headingVi: '3. Chiến lược ứng phó của doanh nghiệp FDI',
        content: '對於全球合併營收未達 7.5 億歐元門檻的中小型台商，目前完全不受 Pillar Two 影響，依然可以充分享受原有工業區的兩免四減半等地方租稅優惠。\n而對於身處電子代工五哥集團體系內的在越子公司，則應盡早與會計師事務所建立跨國有效稅率（ETR）試算模型，並及時備齊高科技研發與設備投資憑證，向越南計畫投資部（MPI）申報基金補助資格。',
        contentVi: 'Các doanh nghiệp quy mô doanh thu hợp nhất dưới 750 triệu Euro vẫn được hưởng nguyên vẹn các ưu đãi thuế truyền thống. Các tập đoàn thuộc diện chịu thuế cần sớm chuẩn bị hồ sơ hợp lệ để nộp đơn xin hỗ trợ từ Quỹ.'
      }
    ],
    terms: [
      { term: 'Thuế tối thiểu toàn cầu', hanViet: '稅最低全球', meaning: '全球最低稅負制 (Global Minimum Tax)' },
      { term: 'Quỹ hỗ trợ đầu tư', hanViet: '基金補助投資', meaning: '外人投資直接財政支持基金' },
      { term: 'Thuế suất thực tế (ETR)', hanViet: '稅率實際', meaning: '企業實質有效所得稅率 (Effective Tax Rate)' }
    ]
  },
  {
    id: 'DOSSIER-2026-08',
    issueNo: 'VN-MACRO-001',
    date: '2026-07-03',
    category: 'regulations',
    categoryLabel: '政策法規',
    categoryLabelVi: 'Pháp lý & Thuế khóa',
    readTime: '13 分鐘',
    readTimeVi: '13 phút đọc',
    title: '台商赴越投資最新稅務與海關合規避坑指南：移轉訂價（TP）、薪資社保勞檢與外匯管制穿透式審計',
    titleVi: 'Cẩm nang tuân thủ pháp lý & thuế cho nhà đầu tư FDI: Giao dịch liên kết, bảo hiểm xã hội và tài khoản vốn DICA',
    subtitle: '查廠風暴常態化：從借名登記（Nominee）法律風險到跨境關係人交易合規底線深度盤點',
    subtitleVi: 'Thanh tra thuế dựa trên dữ liệu lớn, kiểm soát chặt chẽ lãi vay EBITDA 30% và thủ tục chuyển lợi nhuận hợp pháp về nước',
    author: '外商投資合規與涉外爭端律師團',
    authorVi: 'Đoàn Luật sư Pháp chế Doanh nghiệp & Đầu tư Quốc tế',
    tags: ['移轉訂價 TP', '海關查廠', '勞動社保', '外匯管制', '借名登記風險'],
    tagsVi: ['Giao dịch liên kết', 'Thanh tra thuế', 'Bảo hiểm xã hội', 'Tài khoản DICA', 'Pháp lý FDI'],
    kpis: [
      { label: '關係人交易查核率', labelVi: 'Tỷ lệ thanh tra liên kết', val: '85% 大型外企', type: 'red' },
      { label: '基本薪資調整', labelVi: 'Tăng lương tối thiểu vùng', val: '+6.0% 平均調幅', type: 'gold' },
      { label: '合法利潤結匯週期', labelVi: 'Chuyển lợi nhuận ra nước ngoài', val: '每年 3 月財報後', type: 'blue' }
    ],
    summary: '近年來赴越投資設廠的台商與外資企業數量屢創新高，但隨之而來的稅務法務合規代價亦顯著攀升。越南稅務總局與勞動榮軍社會部已告別過往對外商睜一隻眼閉一隻眼的寬鬆監管，全面啟動「智慧稅務系統」與「大數據比對」。其中，跨國母子公司間的移轉訂價（Transfer Pricing / 第 132/2020/NĐ-CP 號法令）成為稅捐機關稽查重點，許多台商因長年帳面申報微利或虧損，遭到追繳數十億越盾稅款與滯納金。此外，針對外國幹部工作證（Work Permit）、強制性社會保險足額繳納、以及資金合法匯回母國的專用資本帳戶（DICA）合規，本篇為高階管理層梳理最關鍵的生存守則。',
    summaryVi: 'Các cơ quan quản lý thuế và lao động tại Việt Nam đang đẩy mạnh ứng dụng hệ thống đối soát dữ liệu điện tử. Trọng tâm thanh tra tập trung vào giao dịch liên kết theo Nghị định 132/2020/NĐ-CP (khống chế chi phí lãi vay không quá 30% EBITDA), việc trích nộp bảo hiểm xã hội bắt buộc cho lao động nước ngoài, và việc tuân thủ tuyệt đối quy định giao dịch vốn qua tài khoản đầu tư trực tiếp (DICA) của Ngân hàng Nhà nước.',
    sections: [
      {
        heading: '一、移轉訂價（TP）：長年虧損已成查稅頭號引信',
        headingVi: '1. Giao dịch liên kết: Rủi ro khi kê khai lỗ kéo dài',
        content: '越南第 132 號法令對關聯方交易有極其嚴苛的認定標準：\n1. 關聯方貸款利息扣除上限（EBITDA 30%）：母公司借款給在越子公司，其每年度列支之利息費用總額不得超過企業息稅折舊前利潤（EBITDA）的 30%，超出部分必須剔除並繳納所得稅。\n2. 三代報告申報義務：符合規模門檻的企業，每年必須備妥本地文檔（Local File）、主體文檔（Master File）及國別報告（CbCR）。若無法提供可比對之獨立第三方交易價格證明，稅官有權依同業平均利潤率逕行核定補稅。',
        contentVi: 'Nghị định 132 khống chế chi phí lãi vay được trừ khi tính thuế TNDN ở mức 30% EBITDA. Doanh nghiệp cần lập đầy đủ hồ sơ xác định giá giao dịch liên kết (Hồ sơ quốc gia, Hồ sơ tập đoàn toàn cầu) để tránh bị ấn định thuế.'
      },
      {
        heading: '二、外匯生命線：直接投資資本帳戶（DICA）不得兒戲',
        headingVi: '2. Tài khoản vốn đầu tư trực tiếp (DICA): Mạch máu tài chính hợp pháp',
        content: '許多台商在設立初期常犯下致命錯誤：將註冊資本金透過私人帳戶或一般經常性帳戶匯入越南。\n根據越南國家銀行規定：\n- 外國投資者所有資本金注入、中長期外債借款，以及未來每年度合法稅後利潤匯回母國，必須一律透過在越南境內銀行開立的「直接投資資本專用帳戶（DICA Account）」辦理。\n- 若違反專戶規定，不僅資本金無法合法驗資入帳，未來工廠賺取之盈餘亦將永遠無法合法兌換為美金匯出境外，甚至面臨嚴重的洗錢防制調查。',
        contentVi: 'Mọi dòng vốn góp điều lệ, giải ngân vốn vay nước ngoài và chuyển lợi nhuận hợp pháp về nước bắt buộc phải thông qua Tài khoản vốn DICA mở tại NHTM được phép tại Việt Nam, tuyệt đối không sử dụng tài khoản thanh toán thông thường.'
      },
      {
        heading: '三、勞檢與幹部工作證合規：杜絕商務簽非法打工',
        headingVi: '3. Giấy phép lao động & Bảo hiểm xã hội cho chuyên gia nước ngoài',
        content: '越南自修訂《外國人在越勞動管理法令》後，全面清查持商務簽證（DN/DN1）長期在工廠現場從事管理與技術操作之外籍幹部。\n外籍幹部在越常駐滿 30 天以上，必須依法取得省勞動廳核發的工作許可證（Work Permit）或工作免證確認書，並申請兩年期暫住證（TRC）。同時，自 2022 年起，在越外籍員工亦必須按規定投保強制性疾病、工傷與退休養老社會保險（個人負擔 8%、企業負擔 17.5%），不可存僥倖心理規避提撥。',
        contentVi: 'Chuyên gia nước ngoài làm việc từ 30 ngày trở lên phải có Giấy phép lao động hoặc xác nhận miễn cấp giấy phép, đồng thời tham gia đầy đủ BHXH bắt buộc theo luật định để đảm bảo tuân thủ pháp luật lao động.'
      }
    ],
    terms: [
      { term: 'Giao dịch liên kết (Transfer Pricing)', hanViet: '交易聯結', meaning: '跨國關係人交易與移轉訂價' },
      { term: 'Tài khoản vốn đầu tư trực tiếp (DICA)', hanViet: '帳款資本投資直接', meaning: '直接投資資本專用外匯帳戶' },
      { term: 'Giấy phép lao động (Work Permit)', hanViet: '紙准勞動', meaning: '外國籍幹部合法工作許可證' }
    ]
  }
];

// ── 8. 越南總體政經必備漢越詞彙對照庫 (Bilingual Lexicon) ──
export const macroVocabularyGlossary = [
  { viet: 'Tỷ giá hối đoái', hanViet: '比價匯兌', meaning: '匯率、外匯兌換率', sample: 'Tỷ giá hối đoái USD/VND đang dao động ổn định quanh mức 25,480.' },
  { viet: 'Ngân hàng Nhà nước (SBV)', hanViet: '銀行國家', meaning: '越南國家銀行 (中央銀行)', sample: 'Ngân hàng Nhà nước điều hành chính sách tiền tệ linh hoạt để kiểm soát lạm phát.' },
  { viet: 'Lãi suất tái cấp vốn', hanViet: '利率再給資本', meaning: '基準再融資利率', sample: 'Lãi suất tái cấp vốn hiện tại duy trì ở mức 4.5%/năm.' },
  { viet: 'Xuất siêu / Nhập siêu', hanViet: '出超 / 入超', meaning: '貿易順差 / 貿易逆差', sample: 'Việt Nam tiếp tục duy trì xuất siêu kỷ lục sang thị trường Hoa Kỳ.' },
  { viet: 'Tổng cục Hải quan', hanViet: '總局海關', meaning: '越南海關總局', sample: 'Tổng cục Hải quan tăng cường kiểm tra xuất xứ hàng hóa để chống gian lận.' },
  { viet: 'Dự trữ ngoại hối', hanViet: '預儲外匯', meaning: '外匯存底、外匯儲備', sample: 'Dự trữ ngoại hối của Việt Nam đã phục hồi lên mức an toàn trên 95 tỷ USD.' },
  { viet: 'Chỉ số giá tiêu dùng (CPI)', hanViet: '指示價消費', meaning: '消費者物價指數 (CPI)', sample: 'Lạm phát CPI được kiểm soát tốt dưới mục tiêu 4.0% của Quốc hội.' },
  { viet: 'Đầu tư trực tiếp nước ngoài (FDI)', hanViet: '投資直接外國', meaning: '外人直接投資 (FDI)', sample: 'Dòng vốn FDI giải ngân vào ngành công nghiệp bán dẫn tăng trưởng mạnh.' },
  { viet: 'Biên độ dao động', hanViet: '邊度搖動', meaning: '波動幅度區間 (目前匯率為 ±5%)', sample: 'Biên độ dao động tỷ giá của đồng Việt Nam được nới lộng lên ±5% từ năm 2022.' },
  { viet: 'Trái phiếu chính phủ', hanViet: '債券政府', meaning: '公債、政府國庫券', sample: 'Chính phủ phát hành trái phiếu để huy động vốn cho tuyến đường sắt cao tốc Bắc - Nam.' },
  { viet: 'Nợ xấu (NPL)', hanViet: '負壞', meaning: '不良貸款、壞帳', sample: 'Tỷ lệ nợ xấu của toàn hệ thống ngân hàng được kiểm soát dưới mức 2%.' },
  { viet: 'Giấy chứng nhận xuất xứ (C/O)', hanViet: '紙證明出身', meaning: '原產地證明書 (C/O)', sample: 'Doanh nghiệp xuất khẩu phải xuất trình chứng nhận C/O hợp lệ để hưởng thuế suất ưu đãi.' }
];

// ── 9. 權威參考來源與官方即時連結專區 (Official Reference Sources Directory) ──
export const officialReferenceSources = [
  // 類別 1: Cơ quan quản lý Nhà nước & Ngân hàng Trung ương
  {
    id: 'ref_sbv',
    category: 'gov',
    categoryLabel: '政府與央行',
    categoryLabelVi: 'Cơ quan Nhà nước & NHTW',
    name: '越南國家銀行 (SBV)',
    nameVi: 'Ngân hàng Nhà nước Việt Nam (SBV)',
    org: 'State Bank of Vietnam',
    url: 'https://www.sbv.gov.vn',
    domain: 'sbv.gov.vn',
    freq: '每日 (Daily)',
    freqVi: 'Hàng ngày',
    scope: '官方中心匯率、再融資與存貸基準利率、貨幣政策法令、銀行監管規範。',
    scopeVi: 'Tỷ giá trung tâm, lãi suất điều hành, chính sách tiền tệ và thanh tra ngân hàng.'
  },
  {
    id: 'ref_gso',
    category: 'gov',
    categoryLabel: '政府與央行',
    categoryLabelVi: 'Cơ quan Nhà nước & NHTW',
    name: '越南統計總局 (GSO)',
    nameVi: 'Tổng cục Thống kê Việt Nam (GSO)',
    org: 'General Statistics Office of Vietnam',
    url: 'https://www.gso.gov.vn',
    domain: 'gso.gov.vn',
    freq: '每月 / 季度',
    freqVi: 'Hàng tháng / Quý',
    scope: 'GDP、CPI 通膨、工業生產指數 IIP、零售銷售總額、失業率等總經數據。',
    scopeVi: 'Tăng trưởng GDP, chỉ số giá tiêu dùng CPI, chỉ số IIP, doanh thu bán lẻ toàn quốc.'
  },
  {
    id: 'ref_customs',
    category: 'gov',
    categoryLabel: '政府與央行',
    categoryLabelVi: 'Cơ quan Nhà nước & NHTW',
    name: '越南海關總局 (General Dept of Customs)',
    nameVi: 'Tổng cục Hải quan Việt Nam',
    org: 'General Department of Vietnam Customs',
    url: 'https://www.customs.gov.vn',
    domain: 'customs.gov.vn',
    freq: '每半月 / 月度',
    freqVi: 'Định kỳ 15 ngày / Tháng',
    scope: '進出口即時通關統計、商品結構、貿易夥伴順差逆差、防洗產地稽查通報。',
    scopeVi: 'Số liệu xuất nhập khẩu hàng hóa, trị giá hải quan, chống gian lận xuất xứ C/O.'
  },
  {
    id: 'ref_mpi',
    category: 'gov',
    categoryLabel: '政府與央行',
    categoryLabelVi: 'Cơ quan Nhà nước & NHTW',
    name: '越南計畫投資部 (MPI)',
    nameVi: 'Bộ Kế hoạch và Đầu tư (MPI)',
    org: 'Ministry of Planning and Investment',
    url: 'https://www.mpi.gov.vn',
    domain: 'mpi.gov.vn',
    freq: '每月 (Monthly)',
    freqVi: 'Hàng tháng',
    scope: '外人直接投資 FDI 註冊與到位統計、重大基建公眾投資、投資支持基金。',
    scopeVi: 'Thống kê vốn FDI đăng ký & thực hiện, giải ngân đầu tư công, Quỹ hỗ trợ đầu tư.'
  },
  {
    id: 'ref_mof',
    category: 'gov',
    categoryLabel: '政府與央行',
    categoryLabelVi: 'Cơ quan Nhà nước & NHTW',
    name: '越南財政部 (MOF)',
    nameVi: 'Bộ Tài chính Việt Nam (MOF)',
    org: 'Ministry of Finance of Vietnam',
    url: 'https://www.mof.gov.vn',
    domain: 'mof.gov.vn',
    freq: '即時 / 依政策',
    freqVi: 'Theo văn bản',
    scope: '國家預算收支、國庫公債發行、全球最低稅負制實施、公司債監管規範。',
    scopeVi: 'Ngân sách nhà nước, phát hành trái phiếu chính phủ, thuế tối thiểu toàn cầu.'
  },
  {
    id: 'ref_vgp',
    category: 'gov',
    categoryLabel: '政府與央行',
    categoryLabelVi: 'Cơ quan Nhà nước & NHTW',
    name: '越南政府電子信息入口網 (VGP)',
    nameVi: 'Cổng Thông tin điện tử Chính phủ (VGP)',
    org: 'Vietnam Government Portal',
    url: 'https://baochinhphu.vn',
    domain: 'baochinhphu.vn',
    freq: '即時 (Real-time)',
    freqVi: 'Thời gian thực',
    scope: '總理頒布之最新法令、政府常務會議決議、越共十四大籌備指導綱領。',
    scopeVi: 'Nghị quyết của Chính phủ, Quyết định của Thủ tướng, chủ trương lãnh đạo cấp cao.'
  },

  // 類別 2: Hệ thống Ngân hàng Thương mại & Thị trường Tài chính
  {
    id: 'ref_vcb',
    category: 'banking',
    categoryLabel: '金融與行庫',
    categoryLabelVi: 'Ngân hàng & Tài chính',
    name: '越南外貿銀行 (Vietcombank)',
    nameVi: 'Ngân hàng Ngoại thương (Vietcombank)',
    org: 'JSC Bank for Foreign Trade of Vietnam',
    url: 'https://www.vietcombank.com.vn',
    domain: 'vietcombank.com.vn',
    freq: '即時 (Real-time)',
    freqVi: 'Liên tục trong ngày',
    scope: '越盾兌各主要外幣牌價、個人與企業存款利率表、貿易融資手續費率。',
    scopeVi: 'Bảng tỷ giá ngoại tệ trực tiếp, biểu lãi suất tiền gửi và cho vay doanh nghiệp.'
  },
  {
    id: 'ref_bidv',
    category: 'banking',
    categoryLabel: '金融與行庫',
    categoryLabelVi: 'Ngân hàng & Tài chính',
    name: '越南投資發展銀行 (BIDV)',
    nameVi: 'Ngân hàng TMCP Đầu tư và Phát triển (BIDV)',
    org: 'Bank for Investment and Development of Vietnam',
    url: 'https://www.bidv.com.vn',
    domain: 'bidv.com.vn',
    freq: '每日 (Daily)',
    freqVi: 'Hàng ngày',
    scope: '全越最大資產行庫利率走勢、大額定存利息、大型基礎建設計畫聯貸政策。',
    scopeVi: 'Lãi suất tiết kiệm, hạn mức tín dụng dự án công nghiệp trọng điểm quốc gia.'
  },
  {
    id: 'ref_vietin',
    category: 'banking',
    categoryLabel: '金融與行庫',
    categoryLabelVi: 'Ngân hàng & Tài chính',
    name: '越南工商銀行 (VietinBank)',
    nameVi: 'Ngân hàng TMCP Công Thương (VietinBank)',
    org: 'Vietnam Joint Stock Commercial Bank for Industry and Trade',
    url: 'https://www.vietinbank.vn',
    domain: 'vietinbank.vn',
    freq: '每日 (Daily)',
    freqVi: 'Hàng ngày',
    scope: '製造業供應鏈貸款利率、外商投資專用資本帳戶 (DICA) 結匯手續指引。',
    scopeVi: 'Tín dụng doanh nghiệp chế xuất, hướng dẫn mở tài khoản DICA cho nhà đầu tư nước ngoài.'
  },
  {
    id: 'ref_agri',
    category: 'banking',
    categoryLabel: '金融與行庫',
    categoryLabelVi: 'Ngân hàng & Tài chính',
    name: '越南農業農村發展銀行 (Agribank)',
    nameVi: 'Ngân hàng Nông nghiệp và PTNT (Agribank)',
    org: 'Vietnam Bank for Agriculture and Rural Development',
    url: 'https://www.agribank.com.vn',
    domain: 'agribank.com.vn',
    freq: '每日 (Daily)',
    freqVi: 'Hàng ngày',
    scope: '全越據點最多國有銀行存貸牌價、農業優先領域短期優惠貸款細則。',
    scopeVi: 'Mạng lưới giao dịch rộng nhất, chính sách cho vay ưu đãi lĩnh vực nông nghiệp.'
  },
  {
    id: 'ref_hose',
    category: 'banking',
    categoryLabel: '金融與行庫',
    categoryLabelVi: 'Ngân hàng & Tài chính',
    name: '胡志明市證券交易所 (HOSE)',
    nameVi: 'Sở Giao dịch Chứng khoán TP.HCM (HOSE)',
    org: 'Ho Chi Minh Stock Exchange',
    url: 'https://www.hsx.vn',
    domain: 'hsx.vn',
    freq: '即時行情',
    freqVi: 'Thời gian thực',
    scope: 'VN-Index 即時成交、上市公司財報披露、外資買賣超動向與升級評級進展。',
    scopeVi: 'Chỉ số VN-Index, giao dịch khối ngoại, công bố thông tin doanh nghiệp niêm yết.'
  },
  {
    id: 'ref_bot',
    category: 'banking',
    categoryLabel: '金融與行庫',
    categoryLabelVi: 'Ngân hàng & Tài chính',
    name: '臺灣銀行歷史牌告匯率 (Bank of Taiwan)',
    nameVi: 'Ngân hàng Đài Loan (Bank of Taiwan - BOT)',
    org: 'Bank of Taiwan FX Board',
    url: 'https://rate.bot.com.tw',
    domain: 'rate.bot.com.tw',
    freq: '即時 (Real-time)',
    freqVi: 'Liên tục',
    scope: '新台幣對越盾 (TWD/VND) 每日即期買入賣出牌價、現金匯率歷史走勢。',
    scopeVi: 'Tỷ giá niêm yết Đài tệ - Việt Nam đồng (TWD/VND) tiền mặt và chuyển khoản.'
  },

  // 類別 3: Báo chí Kinh tế - Tài chính & Hãng tin Quốc tế
  {
    id: 'ref_baodautu',
    category: 'media',
    categoryLabel: '權威財經媒體',
    categoryLabelVi: 'Báo chí & Truyền thông',
    name: '越南投資報 (Báo Đầu tư)',
    nameVi: 'Báo Đầu tư (Bộ Kế hoạch và Đầu tư)',
    org: 'Vietnam Investment Review',
    url: 'https://baodautu.vn',
    domain: 'baodautu.vn',
    freq: '每日 (Daily)',
    freqVi: 'Hàng ngày',
    scope: '越南計畫投資部所屬權威機關報，外商投資、併購、總經政策第一手解讀。',
    scopeVi: 'Cơ quan của Bộ KH&ĐT, chuyên sâu về dòng vốn FDI, M&A và quy hoạch kinh tế.'
  },
  {
    id: 'ref_vneconomy',
    category: 'media',
    categoryLabel: '權威財經媒體',
    categoryLabelVi: 'Báo chí & Truyền thông',
    name: '越南經濟雜誌 (VnEconomy)',
    nameVi: 'Tạp chí Kinh tế Việt Nam (VnEconomy)',
    org: 'Vietnam Economic Times',
    url: 'https://vneconomy.vn',
    domain: 'vneconomy.vn',
    freq: '每日 (Daily)',
    freqVi: 'Hàng ngày',
    scope: '銀行金融業最新動態、股市分析、房地產市場、經濟學家與智庫深度訪談。',
    scopeVi: 'Phân tích tài chính ngân hàng, diễn đàn kinh tế vĩ mô và bình luận chính sách.'
  },
  {
    id: 'ref_vnexpress',
    category: 'media',
    categoryLabel: '權威財經媒體',
    categoryLabelVi: 'Báo chí & Truyền thông',
    name: 'VnExpress 財經新聞網',
    nameVi: 'VnExpress Chuyên mục Kinh doanh',
    org: 'VnExpress Business',
    url: 'https://vnexpress.net/kinh-doanh',
    domain: 'vnexpress.net',
    freq: '即時 (Real-time)',
    freqVi: 'Cập nhật từng giờ',
    scope: '全越訪問量最高新聞網，即時外匯牌價、國內黃金走勢、商業動態即時報導。',
    scopeVi: 'Tin tức kinh doanh nóng nhất, biến động giá vàng, tiền tệ và đời sống doanh nghiệp.'
  },
  {
    id: 'ref_nhandan',
    category: 'media',
    categoryLabel: '權威財經媒體',
    categoryLabelVi: 'Báo chí & Truyền thông',
    name: '人民報經濟專頁 (Báo Nhân Dân)',
    nameVi: 'Báo Nhân Dân - Chuyên trang Kinh tế',
    org: 'Nhan Dan Newspaper',
    url: 'https://nhandan.vn/kinh-te',
    domain: 'nhandan.vn',
    freq: '每日 (Daily)',
    freqVi: 'Hàng ngày',
    scope: '越共中央與政府權威機關報，國家最高領導層經濟政策宣示與十四大前瞻。',
    scopeVi: 'Tiếng nói của Đảng và Nhà nước, quan điểm chính thống về định hướng vĩ mô.'
  },
  {
    id: 'ref_nikkei',
    category: 'media',
    categoryLabel: '權威財經媒體',
    categoryLabelVi: 'Báo chí & Truyền thông',
    name: '日經亞洲 (Nikkei Asia - Vietnam)',
    nameVi: 'Nikkei Asia (Chuyên đề Việt Nam)',
    org: 'Nikkei Asia Global',
    url: 'https://asia.nikkei.com/Location/East-Asia/Vietnam',
    domain: 'asia.nikkei.com',
    freq: '每週 (Weekly)',
    freqVi: 'Hàng tuần',
    scope: '國際頂級財經媒體視角，半導體供應鏈遷徙、美越地緣關係與東協經貿競合。',
    scopeVi: 'Góc nhìn quốc tế về chuỗi cung ứng bán dẫn, địa chính trị và vị thế của Việt Nam.'
  },
  {
    id: 'ref_bloomberg',
    category: 'media',
    categoryLabel: '權威財經媒體',
    categoryLabelVi: 'Báo chí & Truyền thông',
    name: '彭博亞洲 (Bloomberg Asia)',
    nameVi: 'Bloomberg Asia - Thị trường Vĩ mô',
    org: 'Bloomberg Markets',
    url: 'https://www.bloomberg.com/asia',
    domain: 'bloomberg.com',
    freq: '即時 (Real-time)',
    freqVi: 'Thời gian thực',
    scope: '全球跨國資金配置、東南亞外匯儲備走勢、越南盾與亞洲貨幣波動監測。',
    scopeVi: 'Dòng vốn tổ chức toàn cầu, biến động tiền tệ châu Á và chính sách lãi suất vĩ mô.'
  }
];

// ── 10. 雙語國際化字典 (Macro UI Localization Dictionary - zh / vi) ──
export const macroI18n = {
  zh: {
    terminalBadge: 'FINANCIAL INTELLIGENCE TERMINAL',
    terminalTitle: '越南政經情報智庫',
    terminalSub: '權威總體經濟數據 · 政策利率與外匯雷達 · 智庫級深度專案分析',
    alertText: '地緣總經動態：越共十四大籌備文件釋出體制鬆綁紅利 · USD/VND 牌價於 25,485 央行區間上緣高檔整理 · 670億美元南北高鐵建設期程確定',
    tickerLabel: '即時金融總經盤面',
    navTabs: {
      radar: '📡 總經雷達',
      rates: '🏛️ 央行與行庫',
      trade: '🚢 外貿與海關',
      dossiers: '📑 智庫專案報告',
      calc: '🧮 金融試算器',
      lexicon: '📖 政經詞彙',
      sources: '🔗 權威來源'
    },
    fxSectionTitle: '越南盾匯率走勢 · 過去五年每週全景追蹤',
    twdSectionTitle: '新台幣對越南盾匯率走勢 · 過去五年每週全景追蹤',
    pairUsd: '💵 USD / VND (美元兌越盾)',
    pairTwd: '🇹🇼 TWD / VND (台幣兌越盾)',
    timeframes: { '5Y': '過去5年 (5Y)', '2Y': '過去2年 (2Y)', '1Y': '過去1年 (1Y)', '12W': '最新12週 (12W)' },
    statsCurrent: '最新即期匯價',
    statsChange: '區間累計漲跌',
    statsHigh: '區間最高點',
    statsLow: '區間最低點',
    hoverTip: '移動鼠標懸停檢視每週收盤價與重大政經事件標記',
    sourcesHeading: '權威參考來源與官方連結',
    sourcesSub: '收錄越南國家銀行、統計總局、海關總局、四大國有公股行庫及國際一流財經媒體即時追蹤管道',
    sourcesFilterAll: '全部來源',
    sourcesFilterGov: '🏛️ 政府與央行',
    sourcesFilterBanking: '🏦 金融與行庫',
    sourcesFilterMedia: '📰 權威財經媒體',
    visitLink: '前往官方網站',
    closeModal: '關閉專題閱讀器',
    copySummary: '複製重點',
    copiedToast: '已複製重點！'
  },
  vi: {
    terminalBadge: 'HỆ THỐNG DỮ LIỆU TÀI CHÍNH & VĨ MÔ',
    terminalTitle: 'TRUNG TÂM DỮ LIỆU CHÍNH TRỊ - KINH TẾ VIỆT NAM',
    terminalSub: 'Dữ liệu kinh tế vĩ mô chính thống · Radar ngoại hối & lãi suất · Báo cáo phân tích chuyên sâu',
    alertText: 'Điểm tin vĩ mô: Dự thảo văn kiện Đại hội XIV tháo gỡ điểm nghẽn thể chế · Tỷ giá USD/VND neo quanh 25.485 đồng cận trên biên độ SBV · Đại dự án đường sắt cao tốc 67 tỷ USD khởi động',
    tickerLabel: 'BẢNG ĐIỆN TỬ TÀI CHÍNH VĨ MÔ',
    navTabs: {
      radar: '📡 Radar Vĩ mô',
      rates: '🏛️ SBV & Ngân hàng',
      trade: '🚢 Ngoại thương & Hải quan',
      dossiers: '📑 Báo cáo Chuyên sâu',
      calc: '🧮 Công cụ Tính toán',
      lexicon: '📖 Thuật ngữ Vĩ mô',
      sources: '🔗 Nguồn tham khảo'
    },
    fxSectionTitle: 'Diễn biến tỷ giá USD/VND · Theo dõi toàn cảnh hàng tuần trong 5 năm qua',
    twdSectionTitle: 'Diễn biến tỷ giá TWD/VND · Theo dõi toàn cảnh hàng tuần trong 5 năm qua',
    pairUsd: '💵 USD / VND (Đô la Mỹ / Đồng Việt Nam)',
    pairTwd: '🇹🇼 TWD / VND (Đài tệ / Đồng Việt Nam)',
    timeframes: { '5Y': '5 năm qua (5Y)', '2Y': '2 năm qua (2Y)', '1Y': '1 năm qua (1Y)', '12W': '12 tuần gần nhất (12W)' },
    statsCurrent: 'Tỷ giá hiện hành',
    statsChange: 'Biến động tích lũy',
    statsHigh: 'Đỉnh cao nhất',
    statsLow: 'Đáy thấp nhất',
    hoverTip: 'Rê chuột trên đồ thị để xem chi tiết từng tuần và các cột mốc sự kiện lịch sử',
    sourcesHeading: 'Nguồn thông tin chính thống & Tài liệu tham khảo',
    sourcesSub: 'Tổng hợp cơ sở dữ liệu từ Ngân hàng Nhà nước, Tổng cục Thống kê, Hải quan, Big 4 và các hãng tin tài chính quốc tế',
    sourcesFilterAll: 'Tất cả nguồn',
    sourcesFilterGov: '🏛️ Cơ quan Nhà nước & SBV',
    sourcesFilterBanking: '🏦 Ngân hàng & Tài chính',
    sourcesFilterMedia: '📰 Báo chí & Truyền thông',
    visitLink: 'Truy cập cổng thông tin',
    closeModal: 'Đóng cửa sổ báo cáo',
    copySummary: 'Sao chép tóm tắt',
    copiedToast: 'Đã sao chép vào bộ nhớ tạm!'
  }
};
