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
    note: '中心匯率 24,265 上限盤整',
    noteVi: 'Tỷ giá niêm yết neo sát trần biên độ'
  },
  {
    id: 'twdvnd',
    name: 'TWD/VND (1台幣)',
    nameVi: 'TWD/VND (1 Đài tệ)',
    val: '792.5 ₫',
    delta: '+0.08%',
    type: 'up',
    note: '1萬越盾折合 126.2 NT$',
    noteVi: '10.000 VND quy đổi 12,62 NT$'
  },
  {
    id: 'sbv_refinance',
    name: 'SBV 再融資利率',
    nameVi: 'Lãi suất tái cấp vốn SBV',
    val: '4.50%',
    delta: '持平',
    type: 'neutral',
    note: '維持寬鬆以挺實體GDP',
    noteVi: 'Duy trì nới lỏng hỗ trợ GDP'
  },
  {
    id: 'vcb_12m',
    name: 'Big4 12M 定存基準',
    nameVi: 'Lãi suất tiết kiệm 12T Big 4',
    val: '4.80%',
    delta: '+0.10%',
    type: 'up',
    note: '公股行庫資金成本平穩',
    noteVi: 'Khối quốc doanh giữ ổn định'
  },
  {
    id: 'preferential_loan',
    name: '優先產業放款利率',
    nameVi: 'Lãi suất vay lĩnh vực ưu tiên',
    val: '4.00%',
    delta: '法定上限',
    type: 'neutral',
    note: '支持高科技、中小企與出口',
    noteVi: 'Trần bảo hộ công nghệ cao & SME'
  },
  {
    id: 'trade_surplus',
    name: '累計外貿順差',
    nameVi: 'Xuất siêu lũy kế',
    val: '$26.85 B',
    delta: '+14.2% YoY',
    type: 'up',
    note: '創歷年同期次高水準',
    noteVi: 'Mức thặng dư cao thứ 2 lịch sử'
  },
  {
    id: 'fdi_disbursed',
    name: '實際到位 FDI',
    nameVi: 'Vốn FDI thực hiện',
    val: '$23.80 B',
    delta: '+8.6% YoY',
    type: 'up',
    note: '半導體封測與AI伺服器領軍',
    noteVi: 'Bán dẫn & chuỗi AI dẫn dắt'
  },
  {
    id: 'credit_growth',
    name: '銀行體系信貸增長',
    nameVi: 'Tăng trưởng tín dụng',
    val: '15.0%',
    delta: '目標區間',
    type: 'neutral',
    note: '央行引導資金聚焦實體經濟',
    noteVi: 'SBV hướng dòng vốn vào sản xuất'
  },
  {
    id: 'taiwan_fdi',
    name: '台商累計投資規模',
    nameVi: 'Lũy kế FDI Đài Loan',
    val: '$40.2 B',
    delta: '全越第4大',
    type: 'up',
    note: '電子資通訊與精密製造重鎮',
    noteVi: 'Đứng thứ 4 toàn quốc về FDI'
  },
  {
    id: 'north_railway',
    name: '中越標準軌鐵路',
    nameVi: 'ĐS khổ 1.435mm Lào Cai - HP',
    val: '289.34兆₫',
    delta: '$11.05B USD',
    type: 'up',
    note: '363km直通海防瀝縣深水港',
    noteVi: 'Kết nối đường sắt liên vận QT'
  },
  {
    id: 'long_thanh',
    name: '隆城國際機場一期',
    nameVi: 'Sân bay QT Long Thành',
    val: '2026/12',
    delta: '商業啟航',
    type: 'up',
    note: '4F頂級門戶，年吞吐2500萬人',
    noteVi: 'Đại dự án cửa ngõ Đông Nam Bộ'
  },
  {
    id: 'vnindex',
    name: 'VN-Index (胡志明)',
    nameVi: 'Chỉ số VN-Index (HOSE)',
    val: '1,288.4',
    delta: '+0.45%',
    type: 'up',
    note: '推進富時新興市場升級評級',
    noteVi: 'Tiến trình nâng hạng thị trường FTSE'
  },
  {
    id: 'gold_sjc',
    name: 'SJC 金條買賣',
    nameVi: 'Vàng miếng SJC',
    val: '80.5M - 82.5M',
    delta: '價差收窄',
    type: 'neutral',
    note: '四大公股行直售平抑黑市',
    noteVi: 'Big 4 can thiệp ổn định thị trường'
  },
  {
    id: 'gdp_target',
    name: '十四大GDP戰略雄心',
    nameVi: 'Mục tiêu GDP Đại hội XIV',
    val: '7.5% ~ 8.0%',
    delta: '衝刺雙位數',
    type: 'up',
    note: '世銀認定晉升中高所得國家',
    noteVi: 'Mục tiêu tăng trưởng 2026-2030'
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

// ── 3.1 越南國家銀行 (SBV) 政策利率與商業銀行存貸五年歷史時序 (5-Year Interest Rates Timeline) ──
export const fiveYearSbvPolicyRatesData = [
  { date: '2021-03-15', refinancing: 4.00, rediscount: 2.50, big4Deposit12m: 5.60, shortLoan: 6.80, note: '全球疫情超低利率，SBV 維持基準再融資率 4.00% 寬鬆貨幣', noteVi: 'Giai đoạn dịch bệnh, SBV duy trì tái cấp vốn 4.0% nới lỏng' },
  { date: '2021-07-16', refinancing: 4.00, rediscount: 2.50, big4Deposit12m: 5.50, shortLoan: 6.70, note: '胡志明市封城，央行調降外匯存準率，實體借貸成本降至谷底', noteVi: 'Giãn cách tại miền Nam, SBV giảm chi phí vốn cho doanh nghiệp' },
  { date: '2021-11-19', refinancing: 4.00, rediscount: 2.50, big4Deposit12m: 5.50, shortLoan: 6.70, note: '通膨僅 1.84%，外儲達 1100 億美元巔峰，利率穩定無虞', noteVi: 'Lạm phát thấp 1,84%, dự trữ ngoại hối 110 tỷ USD, lãi suất ổn định' },
  { date: '2022-03-18', refinancing: 4.00, rediscount: 2.50, big4Deposit12m: 5.60, shortLoan: 6.90, note: '俄烏衝突推升大宗原物料，行庫微幅上揚定存息吸金', noteVi: 'Chiến sự đẩy giá năng lượng, ngân hàng nhích nhẹ lãi suất huy động' },
  { date: '2022-06-17', refinancing: 4.00, rediscount: 2.50, big4Deposit12m: 5.80, shortLoan: 7.20, note: 'Fed 啟動暴力升息，美越利差由正轉負，匯率初現承壓', noteVi: 'Fed tăng lãi suất mạnh, chênh lệch lãi suất thu hẹp' },
  { date: '2022-09-23', refinancing: 5.00, rediscount: 3.50, big4Deposit12m: 6.40, shortLoan: 8.20, note: '【重要升息】SBV 調升基準利率 100bps 捍衛越盾，再融資率至 5.0%', noteVi: '【Tăng lãi suất】SBV tăng 100 bps tái cấp vốn lên 5.0% giữ giá đồng' },
  { date: '2022-10-25', refinancing: 6.00, rediscount: 4.50, big4Deposit12m: 7.40, shortLoan: 9.50, note: '【暴力升息】SCB擠兌與萬盛發事件，SBV一個月內二度升息100bps至6.0%', noteVi: '【Tăng khẩn cấp】Sự cố SCB, SBV nâng tiếp 100 bps lên đỉnh 6.0%' },
  { date: '2022-12-30', refinancing: 6.00, rediscount: 4.50, big4Deposit12m: 7.40, shortLoan: 9.80, note: '流動性極度緊縮，部分民營銀行大額定存狂飆至 10% 爭奪存款', noteVi: 'Thanh khoản căng thẳng cuối năm, lãi suất huy động tư nhân tới 10%' },
  { date: '2023-03-31', refinancing: 5.50, rediscount: 3.50, big4Deposit12m: 7.20, shortLoan: 9.00, note: '【逆勢首降】出口大幅下滑，越南央行領先全球調降再貼現與再融資利率', noteVi: '【Giảm lãi suất đầu tiên】Xuất khẩu chậm lại, SBV đi trước giảm lãi suất' },
  { date: '2023-05-26', refinancing: 5.00, rediscount: 3.50, big4Deposit12m: 6.80, shortLoan: 8.50, note: '總理范明正嚴令銀行業降低放款成本，SBV 連續二度調降政策利率', noteVi: 'Chính phủ chỉ đạo quyết liệt giảm chi phí vốn cho nền kinh tế' },
  { date: '2023-06-19', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 6.30, shortLoan: 7.80, note: '【連四降】再融資率降至 4.50%，超前歐美注入流動性搶救房地產與製造業', noteVi: '【Giảm 4 lần liên tiếp】Tái cấp vốn về 4,5%, hỗ trợ mạnh mẽ doanh nghiệp' },
  { date: '2023-09-22', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 5.50, shortLoan: 7.40, note: '利差過大引發匯率貶值，央行重啟 T-Bills 票據抽資但維持 4.5% 利率', noteVi: 'Phát hành tín phiếu hút tiền đồng, giữ nguyên trần lãi suất 4.5%' },
  { date: '2023-12-29', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 5.00, shortLoan: 7.00, note: 'Big 4 行庫 12 個月定存跌破 5.0%，年底信貸額度全額放行', noteVi: 'Lãi suất 12 tháng Big 4 về dưới 5%, nới room tín dụng toàn hệ thống' },
  { date: '2024-03-29', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 4.70, shortLoan: 6.80, note: 'Vietcombank 定存探底至 4.70%，資金轉向黃金與房地產', noteVi: 'Lãi suất gửi VCB chạm đáy 4,70%, dòng vốn dịch chuyển sang vàng và BĐS' },
  { date: '2024-06-28', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 4.80, shortLoan: 6.90, note: '匯率逼近 25,485 上限，央行拋匯儲備但堅守 4.5% 低利率保增長', noteVi: 'Bán ngoại tệ can thiệp tỷ giá nhưng quyết giữ lãi suất 4,5% để giữ đà GDP' },
  { date: '2024-09-27', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 4.80, shortLoan: 6.90, note: 'Fed 首度降息 50bps，外部利差倒掛大幅收窄，降息週期迎來曙光', noteVi: 'Fed giảm lãi suất 50 bps, giải tỏa áp lực ngoại hối cho Việt Nam' },
  { date: '2024-12-31', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 4.85, shortLoan: 7.00, note: '全越信貸增長達 15%，實體製造業借貸成本平均下調 1.8%', noteVi: 'Tăng trưởng tín dụng đạt 15%, lãi suất cho vay giảm trung bình 1,8%' },
  { date: '2025-06-30', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 4.80, shortLoan: 6.90, note: '五大優先產業短貸利率嚴格限制在 4.0% 上限以內', noteVi: 'Kiểm soát chặt trần 4.0% cho 5 lĩnh vực ưu tiên phát triển' },
  { date: '2026-03-31', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 4.80, shortLoan: 6.90, note: '越共十四大確立公建投資破局，各行庫優先放款南北高鐵基建', noteVi: 'Đại hội XIV ưu tiên vốn cho các siêu dự án hạ tầng trọng điểm' },
  { date: '2026-09-04', refinancing: 4.50, rediscount: 3.00, big4Deposit12m: 4.85, shortLoan: 7.10, note: '【現行最新基準】再融資 4.50% · 再貼現 3.00% · Big 4 定存 4.70%~4.90%', noteVi: '【Hiện hành】Tái cấp vốn 4,50% · Tái chiết khấu 3,00% · Big 4 gửi 4,7%~4,9%' }
];

// ── 3.2 越南 5 年總體經濟與政經統計歷史時序 (5-Year Macro Economic Stats: GDP, CPI, Trade, FDI, VN-Index) ──
export const fiveYearMacroEconomicData = [
  { date: '2021-03-31', quarter: '2021-Q1', gdpGrowth: 4.65, cpi: 1.16, tradeSurplus: 2.8, fdiDisbursed: 4.1, vnIndex: 1191, note: '疫情初起，電子零組件出口逆勢爆發，推動第一季 GDP 成長 4.65%', noteVi: 'Xuất khẩu điện tử bứt phá kéo GDP quý 1 đạt 4,65%' },
  { date: '2021-06-30', quarter: '2021-Q2', gdpGrowth: 6.73, cpi: 2.41, tradeSurplus: 1.4, fdiDisbursed: 9.2, vnIndex: 1408, note: '製造業訂單滿載，胡志明證交所 VN-Index 首破 1,400 點大關', noteVi: 'Đơn hàng dồi dào, VN-Index lần đầu tiên vượt ngưỡng 1.400 điểm' },
  { date: '2021-09-30', quarter: '2021-Q3', gdpGrowth: -6.02, cpi: 2.82, tradeSurplus: -2.1, fdiDisbursed: 13.3, vnIndex: 1342, note: '【歷史谷底】南部 19 省大封城，工廠三就地停擺，GDP 單季創 -6.02% 歷史低點', noteVi: '【Đáy lịch sử】Giãn cách diện rộng khiến GDP quý 3 giảm kỷ lục -6.02%' },
  { date: '2021-12-31', quarter: '2021-Q4', gdpGrowth: 5.22, cpi: 1.84, tradeSurplus: 4.0, fdiDisbursed: 19.7, vnIndex: 1498, note: '全面解封，全年 GDP 2.58% 守住正成長，FDI 到位近 200 億美元', noteVi: 'Mở cửa trở lại, GDP cả năm đạt 2,58%, FDI giải ngân gần 20 tỷ USD' },
  { date: '2022-03-31', quarter: '2022-Q1', gdpGrowth: 5.05, cpi: 1.92, tradeSurplus: 1.8, fdiDisbursed: 4.4, vnIndex: 1492, note: '國境全面重啟，觀光與工廠產能全開，VN-Index 逼近 1,500 點', noteVi: 'Mở cửa du lịch quốc tế, công suất công nghiệp phục hồi mạnh' },
  { date: '2022-06-30', quarter: '2022-Q2', gdpGrowth: 7.83, cpi: 2.96, tradeSurplus: 1.2, fdiDisbursed: 10.1, vnIndex: 1197, note: '內需報復性消費增長，但美聯儲升息引發全球股市回檔', noteVi: 'Tiêu dùng nội địa bùng nổ, chứng khoán điều chỉnh theo thị trường toàn cầu' },
  { date: '2022-09-30', quarter: '2022-Q3', gdpGrowth: 13.71, cpi: 3.32, tradeSurplus: 6.8, fdiDisbursed: 15.4, vnIndex: 1132, note: '【歷史最高單季】在去年同期封城低基期下，GDP 噴發創 13.71% 歷史奇蹟', noteVi: '【Kỷ lục lịch sử】Trên nền thấp cùng kỳ, GDP quý 3 bứt phá 13,71%' },
  { date: '2022-12-31', quarter: '2022-Q4', gdpGrowth: 5.92, cpi: 4.55, tradeSurplus: 12.4, fdiDisbursed: 22.4, vnIndex: 1007, note: '【25年新高】全年實質 GDP 8.02% 傲視全球，但萬盛發案致房市融資冰凍', noteVi: '【Đỉnh 25 năm】GDP cả năm 8,02% cao nhất khu vực, khủng hoảng trái phiếu BĐS' },
  { date: '2023-03-31', quarter: '2023-Q1', gdpGrowth: 3.28, cpi: 4.18, tradeSurplus: 4.1, fdiDisbursed: 4.3, vnIndex: 1064, note: '歐美通膨抑制消費，越南紡織電子訂單銳減，GDP 降至 3.28%', noteVi: 'Cầu thế giới yếu khiến đơn hàng dệt may điện tử sụt giảm mạnh' },
  { date: '2023-06-30', quarter: '2023-Q2', gdpGrowth: 4.05, cpi: 2.41, tradeSurplus: 12.2, fdiDisbursed: 10.0, vnIndex: 1120, note: '政府全力催化公共工程投資（高速公路），央行連續四次降息救市', noteVi: 'Đẩy mạnh giải ngân đầu tư công cao tốc, SBV giảm mạnh lãi suất' },
  { date: '2023-09-30', quarter: '2023-Q3', gdpGrowth: 5.23, cpi: 3.66, tradeSurplus: 21.6, fdiDisbursed: 15.9, vnIndex: 1154, note: '拜登訪越升格全面戰略夥伴，半導體封測（Amkor）千億廠正式投產', noteVi: 'Nâng cấp quan hệ Việt - Mỹ, khánh thành nhà máy bán dẫn Amkor' },
  { date: '2023-12-31', quarter: '2023-Q4', gdpGrowth: 6.72, cpi: 3.58, tradeSurplus: 28.0, fdiDisbursed: 23.2, vnIndex: 1130, note: '出口反彈，全年外貿順差創 280 億美元歷史新高，全年 GDP 5.05%', noteVi: 'Xuất siêu kỷ lục 28 tỷ USD, tạo đệm đỡ vững chắc cho tỷ giá' },
  { date: '2024-03-31', quarter: '2024-Q1', gdpGrowth: 5.66, cpi: 3.77, tradeSurplus: 8.1, fdiDisbursed: 4.6, vnIndex: 1284, note: '外貿開門紅！出口雙位數增長 17%，高科技 AI 伺服器代工產能爆發', noteVi: 'Xuất khẩu tăng 17%, chuỗi cung ứng máy chủ AI mở rộng thần tốc' },
  { date: '2024-06-30', quarter: '2024-Q2', gdpGrowth: 6.93, cpi: 4.44, tradeSurplus: 11.6, fdiDisbursed: 10.8, vnIndex: 1245, note: '工業生產 (IIP) 全面回溫，通膨逼近 4.5% 法定警戒線，央行力控物價', noteVi: 'Sản xuất công nghiệp tăng tốc, kiểm soát lạm phát cận trần 4,5%' },
  { date: '2024-09-30', quarter: '2024-Q3', gdpGrowth: 7.40, cpi: 3.53, tradeSurplus: 20.8, fdiDisbursed: 17.3, vnIndex: 1288, note: '即便遭受 30 年最強摩羯颱風侵襲，製造業與外資投資展現驚人韌性', noteVi: 'Vượt qua bão Yagi, công nghiệp chế biến chế tạo tiếp tục là động lực chính' },
  { date: '2024-12-31', quarter: '2024-Q4', gdpGrowth: 7.09, cpi: 3.48, tradeSurplus: 26.85, fdiDisbursed: 23.8, vnIndex: 1272, note: '全年實質 GDP 成長達 6.82%，進出口突破 7,854 億美元，高居東協第一', noteVi: 'GDP cả năm 6,82%, kim ngạch XNK vượt 785 tỷ USD đứng đầu ASEAN' },
  { date: '2025-06-30', quarter: '2025-Q2', gdpGrowth: 6.85, cpi: 3.62, tradeSurplus: 14.2, fdiDisbursed: 11.5, vnIndex: 1295, note: '南北高鐵與全越 34 省行政整併藍圖確定，FDI 資本快速到位', noteVi: 'Khởi động đường sắt cao tốc Bắc - Nam, dòng vốn FDI tăng tốc' },
  { date: '2026-09-04', quarter: '2026-Q3', gdpGrowth: 7.05, cpi: 3.50, tradeSurplus: 28.3, fdiDisbursed: 24.2, vnIndex: 1315, note: '【最新預估】越共十四大經改開局，GDP 預期 7.0%~7.2%，順差續破 280 億', noteVi: '【Dự báo mới nhất】Khai màn kinh tế Đại hội XIV, GDP duy trì 7,0%~7,2%' }
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
  },
  // ── 台灣主要在越商業銀行分行 (Taiwanese Commercial Banks in Vietnam) ──
  {
    id: 'esun_vn',
    name: '玉山銀行 (E.SUN Bank) 越南分行',
    nameVi: 'Ngân hàng E.SUN - Chi nhánh TP. Hồ Chí Minh / Đồng Nai',
    shortName: 'E.SUN',
    type: 'taiwan',
    typeLabel: '台資外商行庫',
    typeLabelVi: 'Ngân hàng Đài Loan (FDI)',
    logo: '🏔️',
    demand: '0.10%',
    m1: '2.80%',
    m3: '3.20%',
    m6: '4.20%',
    m12: '5.00%',
    m24: '5.20%',
    shortLoan: '5.5% ~ 7.0%',
    midLongLoan: '7.5% ~ 9.2%',
    homeLoanPromo: '6.8% (台籍幹部房貸專案)',
    homeLoanPromoVi: '6,8% (Gói vay mua nhà chuyên gia)',
    specialNote: '台商赴越設廠首選！提供台幣／越盾雙幣帳戶、DICA資本金專戶及中越雙語網銀。',
    specialNoteVi: 'Đầu mối hàng đầu của doanh nghiệp FDI Đài Loan, thanh toán song phương TWD-VND và tài khoản vốn DICA.'
  },
  {
    id: 'mega_vn',
    name: '兆豐國際商業銀行 (Mega Bank) 越南分行',
    nameVi: 'Ngân hàng Mega ICBC - Chi nhánh TP.HCM',
    shortName: 'MEGA',
    type: 'taiwan',
    typeLabel: '台資外商行庫',
    typeLabelVi: 'Ngân hàng Đài Loan (FDI)',
    logo: '🌐',
    demand: '0.10%',
    m1: '2.70%',
    m3: '3.10%',
    m6: '4.10%',
    m12: '4.95%',
    m24: '5.10%',
    shortLoan: '5.6% ~ 7.2%',
    midLongLoan: '7.6% ~ 9.5%',
    homeLoanPromo: '7.0% (首年固定)',
    homeLoanPromoVi: '7,0% (cố định năm đầu)',
    specialNote: '外匯信用狀（L/C）與跨境供應鏈貿易融資老牌主力行，台越跨國聯貸經驗豐富。',
    specialNoteVi: 'Thế mạnh truyền thống về tài trợ thương mại L/C xuất nhập khẩu và thu xếp vốn tín dụng hợp vốn.'
  },
  {
    id: 'ctbc_vn',
    name: '中國信託商業銀行 (CTBC) 越南分行',
    nameVi: 'Ngân hàng CTBC - Chi nhánh TP.HCM',
    shortName: 'CTBC',
    type: 'taiwan',
    typeLabel: '台資外商行庫',
    typeLabelVi: 'Ngân hàng Đài Loan (FDI)',
    logo: '🟢',
    demand: '0.10%',
    m1: '2.90%',
    m3: '3.30%',
    m6: '4.30%',
    m12: '5.10%',
    m24: '5.30%',
    shortLoan: '5.7% ~ 7.3%',
    midLongLoan: '7.8% ~ 9.6%',
    homeLoanPromo: '6.9% (首年固定)',
    homeLoanPromoVi: '6,9% (cố định năm đầu)',
    specialNote: '跨國科技大廠電子聯貸、跨國供應鏈資金池管理與台派幹部個人金融服務完善。',
    specialNoteVi: 'Dịch vụ ngân hàng số quản trị dòng tiền doanh nghiệp, tài trợ chuỗi cung ứng công nghệ cao.'
  },
  {
    id: 'cathay_vn',
    name: '國泰世華銀行 (Cathay United Bank) 越南子行/分行',
    nameVi: 'Ngân hàng Cathay United Bank - Chi nhánh Chu Lai & VPĐD TP.HCM',
    shortName: 'CUB',
    type: 'taiwan',
    typeLabel: '台資外商行庫',
    typeLabelVi: 'Ngân hàng Đài Loan (FDI)',
    logo: '🌳',
    demand: '0.10%',
    m1: '2.75%',
    m3: '3.15%',
    m6: '4.15%',
    m12: '5.00%',
    m24: '5.20%',
    shortLoan: '5.5% ~ 7.0%',
    midLongLoan: '7.6% ~ 9.3%',
    homeLoanPromo: '6.9% (首年固定)',
    homeLoanPromoVi: '6,9% (cố định năm đầu)',
    specialNote: '深耕中越與南越，結合國泰人壽保險金控優勢，提供綠色融資與全方位資產規劃。',
    specialNoteVi: 'Kết hợp giải pháp tài chính xanh và bảo hiểm doanh nghiệp, hỗ trợ nhà đầu tư Đài Loan mở rộng thị trường.'
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
    issueNo: 'VN-MACRO-005',
    date: '2026-08-07',
    category: 'fdi_compliance',
    categoryLabel: '外資合規',
    categoryLabelVi: 'Tuân thủ & Pháp lý FDI',
    readTime: '14 分鐘',
    readTimeVi: '14 phút đọc',
    title: '台商赴越投資最新稅務與海關合規避坑指南：移轉訂價（TP）、薪資社保勞檢與外匯管制穿透式審計',
    titleVi: 'Cẩm nang tuân thủ pháp lý & thuế cho nhà đầu tư FDI: Giao dịch liên kết, bảo hiểm xã hội và tài khoản vốn DICA',
    subtitle: '查廠風暴常態化：從借名登記（Nominee）法律風險到跨境關係人交易合規底線深度盤點',
    subtitleVi: 'Thanh tra thuế dựa trên dữ liệu lớn, kiểm soát chặt chẽ lãi vay EBITDA 30% và thủ tục chuyển lợi nhuận hợp pháp về nước',
    author: '跨國台商稅務法律諮詢組 · 資深會計師',
    authorVi: 'Tổ Tư vấn Pháp lý & Thuế Doanh nghiệp FDI · Chuyên gia Kiểm toán',
    tags: ['台商在越合規', '移轉訂價查核', 'DICA資本帳戶', '外籍幹部社保', '反借名登記'],
    tagsVi: ['Tuân thủ FDI', 'Chuyển giá (TP)', 'Tài khoản DICA', 'BHXH chuyên gia', 'Pháp lý lao động'],
    kpis: [
      { label: '關係人利息抵扣上限', labelVi: 'Trần chi phí lãi vay', val: 'EBITDA × 30%', type: 'red' },
      { label: '法定資本匯入期限', labelVi: 'Thời hạn góp đủ vốn', val: 'IRC發照 90 天', type: 'gold' },
      { label: '查稅追溯期法定上限', labelVi: 'Thời hiệu truy thu thuế', val: '最長 10 年', type: 'blue' }
    ],
    summary: '2026 年越南稅務總局、海關總局與各省勞動榮軍社會廳聯手推動「大數據穿透式監管」。許多初入越南的台商中小企業，因延續早期在中國大陸或東南亞其他國家的粗放經營習慣，面臨巨額補稅與停工處罰。本報告深度盤點四大地雷領域：嚴格禁止越南籍自然人「借名登記（Nominee）」持有外資股權、法令第 132/2020 號關係人貸款利息扣除上限（EBITDA 30%）、外匯 DICA 專用資本帳戶的嚴格管制、以及新修訂外籍幹部強制納入養老與工傷社會保險的勞檢趨勢，為在越企業經營層構築法律安全護城河。',
    summaryVi: 'Năm 2026, các cơ quan chức năng Việt Nam đẩy mạnh thanh tra dựa trên dữ liệu lớn. Doanh nghiệp FDI cần tuân thủ nghiêm ngặt 4 nội dung cốt lõi: Tuyệt đối không sử dụng thỏa thuận đứng tên hộ (Nominee); kiểm soát trần chi phí lãi vay giao dịch liên kết theo Nghị định 132; nộp đủ vốn điều lệ qua tài khoản DICA trong 90 ngày; và tham gia đầy đủ bảo hiểm xã hội cho lao động nước ngoài để tránh rủi ro pháp lý.',
    sections: [
      {
        heading: '一、借名登記（Nominee）：外商絕對不可觸碰的法律高壓電',
        headingVi: '1. Rủi ro pháp lý nghiêm trọng khi nhờ người đứng tên hộ (Nominee)',
        content: '部分台商為了規避外資設立審批週期，或圖謀投資未對外資開放之行業，選擇借用越南本地人名義持有公司 100% 股權或購買土地使用權。越南法院與公安部在最新執法解釋中明確：此類借名協議屬於「以合法形式掩蓋非法目的之無效民事交易」，不受任何法律保護。一旦發生糾紛或遭舉報，外商不僅將喪失所有廠房資產，更可能涉及刑法第 200 條逃稅罪或非法經營罪而被驅逐出境。唯一合法途徑是按《投資法》正式申請 IRC 投資執照與 ERC 企業執照。',
        contentVi: 'Mọi hình thức ủy thác hoặc nhờ người mang quốc tịch Việt Nam đứng tên sở hữu doanh nghiệp hoặc quyền sử dụng đất đều bị coi là giao dịch giả tạo vô hiệu theo Bộ luật Dân sự. Nhà đầu tư nước ngoài có nguy cơ mất trắng toàn bộ tài sản đầu tư và bị xử lý theo pháp luật.'
      },
      {
        heading: '二、移轉訂價與利息扣除上限（EBITDA 30%）：查稅新常態',
        headingVi: '2. Thanh tra chuyển giá & Khống chế chi phí lãi vay liên kết 30% EBITDA',
        content: '依據第 132/2020/NĐ-CP 號議定，外資企業與母公司或關係人之間若存在大額借款，其可列報稅前扣除之淨利息支出上限不得超過 EBITDA（息稅折舊攤銷前利潤）的 30%。許多台資工廠早期資本額偏低，高度仰賴台灣母公司借貸融資，利息支出極高，導致利息被稅務局大量剔除補徵 20% 企業所得稅。此外，連續 3 年申報虧損但營收持續擴大、或與母公司原材料採購價明顯偏離市場行情的企業，均被列入稅務自動稽查預警名單。',
        contentVi: 'Nghị định 132 quy định tổng chi phí lãi vay được trừ khi tính thuế TNDN của doanh nghiệp có giao dịch liên kết không vượt quá 30% EBITDA. Các công ty FDI báo lỗ liên tiếp hoặc có biên lợi nhuận bất thường so với tập đoàn sẽ bị đưa vào danh sách thanh tra trọng điểm.'
      },
      {
        heading: '三、外籍幹部工作許可與強制社會保險審查',
        headingVi: '3. Giấy phép lao động & Bảo hiểm xã hội cho chuyên gia nước ngoài',
        content: '越南自修訂《外國人在越勞動管理法令》後，全面清查持商務簽證（DN/DN1）長期在工廠現場從事管理與技術操作之外籍幹部。外籍幹部在越常駐滿 30 天以上，必須依法取得省勞動廳核發的工作許可證（Work Permit）或工作免證確認書，並申請兩年期暫住證（TRC）。同時，自 2022 年起，在越外籍員工亦必須按規定投保強制性疾病、工傷與退休養老社會保險（個人負擔 8%、企業負擔 17.5%），不可存僥倖心理規避提撥。',
        contentVi: 'Chuyên gia nước ngoài làm việc từ 30 ngày trở lên phải có Giấy phép lao động hoặc xác nhận miễn cấp giấy phép, đồng thời tham gia đầy đủ BHXH bắt buộc theo luật định để đảm bảo tuân thủ pháp luật lao động.'
      }
    ],
    terms: [
      { term: 'Giao dịch liên kết (Transfer Pricing)', hanViet: '交易聯結', meaning: '跨國關係人交易與移轉訂價' },
      { term: 'Tài khoản vốn đầu tư trực tiếp (DICA)', hanViet: '帳款資本投資直接', meaning: '直接投資資本專用外匯帳戶' },
      { term: 'Giấy phép lao động (Work Permit)', hanViet: '紙准勞動', meaning: '外國籍幹部合法工作許可證' }
    ]
  },
  {
    id: 'DOSSIER-2026-09',
    issueNo: 'VN-MACRO-009',
    date: '2026-09-18',
    category: 'politics',
    categoryLabel: '總體政經',
    categoryLabelVi: 'Chính trị - Vĩ mô',
    readTime: '15 分鐘',
    readTimeVi: '15 phút đọc',
    title: '越共十四大（Đại hội XIV）新政與體制改革全景：蘇林總書記主導下「行政精簡、容錯免責與10% GDP增長雄心」對外商投資之深遠變革',
    titleVi: 'Đại hội XIV và cải cách thể chế: Tinh gọn bộ máy, cơ chế bảo vệ cán bộ và mục tiêu tăng trưởng GDP hai con số',
    subtitle: '中央確立「反腐法治化與審批加速並行」，以體制突破解決基層官僚怠政，開啟2026-2030經濟起飛新階段',
    subtitleVi: 'Tháo gỡ điểm nghẽn thể chế, khơi thông dòng vốn đầu tư công và củng cố niềm tin chiến lược cho cộng đồng FDI',
    author: '東協政經研究室 · 首席體制政策分析師',
    authorVi: 'Trung tâm Nghiên cứu Kinh tế ASEAN · Chuyên gia Phân tích Thể chế',
    tags: ['越共十四大', '蘇林體制', '行政精簡', '容錯免責機制', '10% GDP目標'],
    tagsVi: ['Đại hội Đảng XIV', 'Cải cách thể chế', 'Bảo vệ cán bộ', 'Tăng trưởng hai con số', 'Môi trường kinh doanh'],
    kpis: [
      { label: '十四大代表大會席次', labelVi: 'Đại biểu dự Đại hội', val: '1,590 席', type: 'blue' },
      { label: '2026-2030 GDP年均目標', labelVi: 'Mục tiêu GDP 2026-30', val: '10.0% 雄心', type: 'green' },
      { label: '公建撥款完成率目標', labelVi: 'Giải ngân đầu tư công', val: '≥ 95% 全國', type: 'gold' }
    ],
    summary: '2026年是越南政經格局的里程碑年份。隨著越共第十四次全國代表大會（Đại hội Đảng XIV）的確立，蘇林（Tô Lâm）總書記進一步兼任國家主席，實現了數十年來最高權力結構的高度集中與決策效率化。在反腐倡廉步入「法治化、制度化」新常態的同時，中央大刀闊斧實施第 73 號結論，明文保護「敢想、敢做、敢為公眾利益承擔責任」的幹部，徹底破除地方行政官僚因畏懼查案而導致的「審批停滯、公建預算沉睡」沉疴。大會正式將 2026-2030 年 GDP 年均增長目標定錨於 10% 的衝刺水準，世界銀行亦正式將越南升格為中高所得國家（Upper-Middle Income Economy）。本文深入解讀十四大人事佈局、精簡政府部會職能、以及對跨國 FDI 外資的最強制度定心丸。',
    summaryVi: 'Năm 2026 ghi dấu bước ngoặt lịch sử với Đại hội đại biểu toàn quốc lần thứ XIV của Đảng. Tổng Bí thư Tô Lâm định hình phong cách lãnh đạo quyết đoán, thống nhất ý chí chính trị để tinh gọn bộ máy và đẩy nhanh cải cách thể chế. Việc thực thi triệt để cơ chế bảo vệ cán bộ dám nghĩ dám làm đã phá tan tâm lý sợ sai, giải phóng hàng chục tỷ USD vốn đầu tư công tồn ngân. Đại hội XIV xác lập mục tiêu tăng trưởng GDP bình quân 10%/năm giai đoạn 2026-2030, đưa Việt Nam vững vàng bước vào nhóm các quốc gia có thu nhập trung bình cao theo chuẩn World Bank.',
    sections: [
      {
        heading: '一、最高權力集中化：決策鏈條縮短與政策高度連續性',
        headingVi: '1. Tinh gọn bộ máy lãnh đạo: Rút ngắn chu trình ra quyết định',
        content: '蘇林總書記全面主導越共最高決策中樞，消除了此前因權力過渡帶來的政策觀望期。十四大政治報告草案著重強調：政治穩定是越南在東協中最具吸引力的核心比較優勢；反腐敗並非為了抑制經濟活動，而是掃除尋租障礙、建立乾淨透明的市場規則。中央明確指示，任何司法查辦程序不得影響合法企業的正常生產經營，尤其是具有外資標竿意義的高科技專案。',
        contentVi: 'Sự nhất quán và quyết đoán trong bộ máy lãnh đạo cấp cao giúp rút ngắn đáng kể thời gian ban hành các quyết sách kinh tế vĩ mô. Thông điệp đối ngoại nhất quán: Ổn định chính trị là lợi thế cạnh tranh cốt lõi; minh bạch hóa thể chế là chìa khóa để giữ chân dòng vốn FDI thế hệ mới.'
      },
      {
        heading: '二、破除怠政：容錯免責機制解鎖數百億美元公共財政',
        headingVi: '2. Tháo gỡ điểm nghẽn hành chính: Cơ chế bảo vệ cán bộ giải phóng nguồn lực',
        content: '此前嚴厲打貪曾導致部分省級官員「不敢批公文、推託招標」。2025至2026年間，政府出台了前所未有的「免責容錯細則」與「責任倒查機制」，明確界定：幹部只要無個人貪瀆利益，基於集體決策推動重大基建與外資審批出現客觀偏差的，免予追究紀律處分；反之，對刻意怠惰拖延審批導致公建預算滯留者進行嚴肅問責。這一政策立竿見影，帶動南北高鐵、胡志明三環路、河內四環路及各大港口工程撥款率突破 95%。',
        contentVi: 'Cơ chế bảo vệ cán bộ năng động, sáng tạo vì lợi ích chung đã tạo luồng sinh khí mới cho bộ máy công quyền từ trung ương đến địa phương. Tỷ lệ giải ngân đầu tư công vượt 95%, trực tiếp kích hoạt chuỗi cung ứng vật liệu, xây dựng và logistics toàn quốc.'
      },
      {
        heading: '三、十四大五大經濟支柱與外商投資新紅利',
        headingVi: '3. Năm trụ cột kinh tế Đại hội XIV: Cơ hội mới cho cộng đồng FDI',
        content: '越共十四大綱領明確確立五大驅動引擎：\n1. 高端先進外資准入：從「廉價代工」全面轉向半導體、AI 資料中心、綠能材料與航太零部件。\n2. 國家行政精簡：合併重疊部會職能，省級行政區規劃整併，全面推行 100% 數位在線審批。\n3. 能源綠色轉型：全面實施第八版電力規劃（PDP8）與直接購電協議（DPPA），向跨國企業保證綠電供給。\n4. 本國龍頭民營經濟扶植：打造能與外商深度對接的本土一級（Tier 1）供應商。\n5. 世紀基礎設施網：貫通中越 1,435mm 標準軌鐵路、南北 350km/h 客運高鐵與隆城國際門戶機場。',
        contentVi: 'Đại hội XIV mở ra chương mới với 5 trụ cột phát triển: Lựa chọn FDI công nghệ cao; tinh gọn tổ chức bộ máy nhà nước; đảm bảo an ninh năng lượng xanh qua DPPA; phát triển doanh nghiệp tư nhân đầu đàn; và hoàn thiện mạng lưới hạ tầng kết nối chiến lược.'
      }
    ],
    terms: [
      { term: 'Đại hội Đảng toàn quốc lần thứ XIV', hanViet: '大會黨全國次第十四', meaning: '越共第十四次全國代表大會' },
      { term: 'Cơ chế bảo vệ cán bộ năng động sáng tạo', hanViet: '機制保護幹部能動創意', meaning: '保護勇於創新幹部免責容錯機制' },
      { term: 'Tinh gọn tổ chức bộ máy', hanViet: '精簡組織部機', meaning: '政府行政機構與官僚體系精簡改革' }
    ]
  },
  {
    id: 'DOSSIER-2026-10',
    issueNo: 'VN-MACRO-010',
    date: '2026-09-12',
    category: 'supply_chain',
    categoryLabel: '供應鏈與基建',
    categoryLabelVi: 'Hạ tầng & Chuỗi cung ứng',
    readTime: '16 分鐘',
    readTimeVi: '16 phút đọc',
    title: '北越河內與紅河三角洲高科技重鎮崛起：中越1,435mm標準軌鐵路、500kV三迴線保電與台韓半導體AI伺服器供應鏈集聚',
    titleVi: 'Vùng kinh tế Bắc Bộ và chuỗi công nghệ cao: Tuyến đường sắt 1.435mm Lào Cai - Hà Nội - Hải Phòng, đường dây 500kV mạch 3 và hệ sinh thái bán dẫn',
    subtitle: '110億美元標準軌鐵路直通海防瀝縣深水港，519公里三迴線終結缺電，鴻海、廣達、仁寶、艾克爾重兵佈局',
    subtitleVi: 'Đột phá kết nối liên vận đường sắt với Trung Quốc, đảm bảo an ninh năng lượng cho các tổ hợp bán dẫn Amkor, Hana Micron và máy chủ AI',
    author: '北越工業廊帶與物流研究小組 · 資深供應鏈顧問',
    authorVi: 'Nhóm Nghiên cứu Hành lang Công nghiệp Bắc Bộ · Chuyên gia Chuỗi cung ứng',
    tags: ['北越科技走廊', '老街河內海防鐵路', '500kV三迴線', '半導體封測', '鴻海廣達仁寶'],
    tagsVi: ['Hành lang Bắc Bộ', 'Đường sắt Lào Cai - Hải Phòng', '500kV mạch 3', 'Bán dẫn OSAT', 'Chuỗi cung ứng AI'],
    kpis: [
      { label: '標準軌鐵路投資總額', labelVi: 'Vốn đầu tư đường sắt', val: '289.34兆₫ ($11B)', type: 'gold' },
      { label: '500kV三迴線全長', labelVi: 'Chiều dài 500kV mạch 3', val: '519 km (已通電)', type: 'green' },
      { label: '北越半導體投資總額', labelVi: 'FDI bán dẫn miền Bắc', val: '逾 45 億美元', type: 'blue' }
    ],
    summary: '北越紅河三角洲正在經歷半世紀以來最劇烈的地緣產業重構。隨著越南國會2026年正式批准將「老街－河內－海防」1,435mm 標準軌鐵路總投資調整至 289.34 萬億越盾（約 110.5 億美元），中越鐵路「換軌轉運」的歷史瓶頸被徹底粉碎。這條 363 公里的雙線電氣化國際貨運走廊將中國西南腹地（雲南昆明、四川重慶）與越南北方第一大港海防瀝縣（Lạch Huyện）深水港無縫銜接。與此同時，全長 519 公里的國家級 500kV 三迴線（廣澤－浦內）高壓輸電工程正式全線投產，將中部與南部充沛電力輸送至北越工業中心，徹底消除了外資最擔憂的夏季斷電隱患。在電力與物流雙重保障下，北寧、北江、永福、南定成為全球半導體封測（Amkor 16億美元、Hana Micron 10億美元）與 AI 伺服器代工（鴻海、廣達、仁寶、光寶）的最核心重鎮。',
    summaryVi: 'Vùng kinh tế trọng điểm Bắc Bộ đang vươn lên thành cứ điểm công nghệ cao hàng đầu khu vực nhờ hai cú hích hạ tầng thế kỷ: Dự án đường sắt tiêu chuẩn 1.435mm Lào Cai - Hà Nội - Hải Phòng trị giá 11,05 tỷ USD kết nối trực tiếp với Trung Quốc và cảng nước sâu Lạch Huyện; cùng đường dây 500kV mạch 3 Quảng Trạch - Phố Nối dài 519km xóa tan nguy cơ thiếu điện. Hệ sinh thái sản xuất bán dẫn (Amkor, Hana Micron) và máy chủ AI (Foxconn, Quanta, Compal, Lite-On) tại Bắc Ninh, Bắc Giang, Vĩnh Phúc, Nam Định được tiếp thêm động lực mở rộng quy mô chưa từng có.',
    sections: [
      {
        heading: '一、中越 1,435mm 標準軌鐵路：重塑泛亞陸海物流走廊',
        headingVi: '1. Tuyến đường sắt khổ 1.435mm: Đột phá logistics xuyên biên giới',
        content: '此前中越跨境鐵路因越南採用 1,000mm 米軌而中國採用 1,435mm 標準軌，所有進出口貨物必須在老街或同登口岸進行吊裝換軌，耗時且成本高昂。新批准的老街－河內－海防標準軌工程，設計時速客運 160 km/h、貨運 120 km/h，預計 2030 年全面完工通車。屆時，高科技電子零件從深圳、昆明至北越工廠，成品自海防港直接裝船出海的綜合物流時效將縮短 40% 以上，為「中國+1」佈局提供無可替代的陸海聯運優勢。',
        contentVi: 'Tuyến đường sắt khổ tiêu chuẩn 1.435mm kết nối trực tiếp mạng lưới đường sắt quốc tế, giải quyết triệt để nút thắt sang tải tại biên giới. Hàng hóa linh kiện công nghệ từ Tây Nam Trung Quốc có thể vận chuyển thẳng về các KCN Bắc Ninh, Bắc Giang và ra cảng Lạch Huyện với chi phí logistics giảm tới 40%.'
      },
      {
        heading: '二、500kV 三迴線與電力 PDP8：終結高科技斷電焦慮',
        headingVi: '2. Đường dây 500kV mạch 3 & Quy hoạch VIII: An ninh năng lượng vững vàng',
        content: '2023 年夏季北越的大規模輪流停電曾重創外資信心。為此，政府下達軍令狀以創紀錄速度在 2024 年底建成了 519 公里的 500kV 廣澤－浦內輸電幹線，輸電能力提升至 2,000 MW 以上。結合總理府第 80/2024/NĐ-CP 號議定所頒布的「直接購電協議（DPPA）」，蘋果、輝達、英特爾等跨國供應鏈企業可在不經由國營 EVN 中介下，直接與再生能源電廠簽署綠電購售合約，順利履行 RE100 跨國減碳承諾。',
        contentVi: 'Đường dây 500kV mạch 3 giải tỏa dứt điểm bài toán cung ứng điện cho các nhà máy công nghệ cao miền Bắc. Đi kèm Nghị định 80 về cơ chế mua bán điện trực tiếp (DPPA), các tập đoàn đa quốc gia có thể chủ động tiếp cận nguồn năng lượng tái tạo, đáp ứng các tiêu chuẩn khắt khe về ESG và RE100.'
      },
      {
        heading: '三、台韓高科技電子巨頭的北越版圖大擴張',
        headingVi: '3. Bản đồ mở rộng của các tập đoàn công nghệ Đài Loan & Hàn Quốc',
        content: '• 鴻海集團（Foxconn）：在越總投資突破 50 億美元，北江富康科技加碼 3.5 億美元專攻 AI 光通訊與精密零件；\n• 廣達電腦（Quanta）：南定廠一期投產後迅速推動二期，總投資達 2.4 億美元打造全球筆電製造副中心；\n• 仁寶（Compal）：永福廠加速轉型為全球高階 AI 伺服器製造中心；\n• 艾克爾（Amkor）：北寧 16 億美元封測園區成為其全球最大晶片組裝測試基地；\n• 韓美半導體（Hana Micron）：北江 10 億美元記憶體封測廠全面量產，融入三星全球半導體鏈。',
        contentVi: 'Miền Bắc chứng kiến cuộc đua mở rộng công suất: Foxconn nâng tổng vốn lên 5 tỷ USD với dự án FuKang; Quanta tăng vốn lên 240 triệu USD tại Nam Định; Compal đẩy mạnh sản xuất máy chủ AI tại Vĩnh Phúc; Amkor giải ngân nhà máy 1,6 tỷ USD tại Bắc Ninh; và Hana Micron vận hành cơ sở 1 tỷ USD tại Bắc Giang.'
      }
    ],
    terms: [
      { term: 'Đường sắt khổ tiêu chuẩn 1.435 mm', hanViet: '鐵路苦標準 1.435 mm', meaning: '1,435毫米國際標準軌鐵路' },
      { term: 'Đường dây 500kV mạch 3', hanViet: '線路 500kV 脈三', meaning: '國家級500千伏超高壓第三迴路輸電線' },
      { term: 'Cơ chế mua bán điện trực tiếp (DPPA)', hanViet: '機制買賣電直接', meaning: '直接購電協議 (發電商直售綠電予大用電戶)' }
    ]
  },
  {
    id: 'DOSSIER-2026-11',
    issueNo: 'VN-MACRO-011',
    date: '2026-09-08',
    category: 'regional',
    categoryLabel: '南越商業與重劃',
    categoryLabelVi: 'Vùng TP.HCM & Miền Nam',
    readTime: '14 分鐘',
    readTimeVi: '14 phút đọc',
    title: '南越大胡志明「雙核驅動」戰略：守添國際金融中心（IFC）、49億美元芹苴國際轉運港與隆城機場2026年啟航全解析',
    titleVi: 'Chiến lược động lực kép Vùng TP.HCM: Trung tâm Tài chính Quốc tế Thủ Thiêm, Siêu cảng trung chuyển Cần Giờ 4,9 tỷ USD và Sân bay Long Thành',
    subtitle: '第323/2025/NĐ-CP號議定釋放金融沙盒紅利，三環路與一號地鐵貫通，東南部工業走廊迎來世紀大升級',
    subtitleVi: 'Nghị định 323 về trung tâm tài chính, siêu cảng đón tàu mẹ 24.000 TEU và đại bàng logistics hội tụ tại cửa ngõ Đông Nam Bộ',
    author: '南越都市與金融地理研究中心 · 首席經濟學家',
    authorVi: 'Trung tâm Nghiên cứu Kinh tế Vùng TP.HCM · Chuyên gia Địa kinh tế',
    tags: ['大胡志明都會圈', '守添金融中心', '芹苴國際轉運港', '隆城機場2026', '第98號決議'],
    tagsVi: ['Vùng đô thị TP.HCM', 'IFC Thủ Thiêm', 'Cảng Cần Giờ', 'Sân bay Long Thành', 'Nghị quyết 98'],
    kpis: [
      { label: '芹苴深水港總投資', labelVi: 'Tổng vốn cảng Cần Giờ', val: '$4.9 B (超大型)', type: 'gold' },
      { label: '隆城國際機場首期啟用', labelVi: 'Khai thác thương mại', val: '2026 年 12 月', type: 'green' },
      { label: '守添IFC地標大樓規劃', labelVi: 'Tháp tài chính IFC', val: '99 樓旗艦地標', type: 'blue' }
    ],
    summary: '胡志明市正藉由國會第 98/2023/QH15 號特別機制決議與中央第 323/2025/NĐ-CP 號議定，重塑其作為東南亞經濟與金融樞紐的核心地位。在戰略佈局上，南越正形成「守添國際金融中心（金融大腦）＋芹苴國際轉運深水港與隆城國際機場（物流雙翼）＋平陽同奈工業廊帶（製造實體）」的超級集群。守添新城區第一功能區已劃定 11 塊戰略金融土地，規劃 99 層旗艦金融塔並實行外匯與離岸金融沙盒。總投資 49 億美元的芹苴國際轉運港引入全球第二大船商 MSC/TIL 聯手興建，將具備停靠 24,000 TEU 超級母船能力。與此同時，胡志明地鐵一號線穩定營運，隆城國際機場一期定於 2026 年 12 月商業啟航，南越經貿進入歷史黃金爆發期。',
    summaryVi: 'TP. Hồ Chí Minh đang bứt phá mạnh mẽ nhờ Nghị quyết 98 và Nghị định 323 của Chính phủ về đề án Trung tâm Tài chính Quốc tế (IFC). Không gian phát triển hình thành mô hình tam giác vàng: Thủ Thiêm (đầu não tài chính tiền tệ), Siêu cảng trung chuyển quốc tế Cần Giờ 4,9 tỷ USD và Sân bay Long Thành (đôi cánh logistics biển - không), kết nối hữu cơ với vùng công nghiệp Bình Dương - Đồng Nai - Long An. Tuyến Metro số 1 vận hành cùng tiến độ khánh thành Sân bay Long Thành vào tháng 12/2026 đưa vị thế kinh tế miền Nam lên tầm cao mới.',
    sections: [
      {
        heading: '一、守添國際金融中心（IFC）：東協新離岸金融特區',
        headingVi: '1. Trung tâm Tài chính Quốc tế Thủ Thiêm: Đặc khu tài chính thế hệ mới',
        content: '依據中央最新法令，胡志明市正加速在守添（Thủ Thiêm）建設國際金融中心。政府規劃了三階段藍圖，並在核心一區預留 11 塊優質土地，由跨國財團主導設計 99 層「IFC-99F」金融摩天樓。核心政策亮點在於「受控監管沙盒（Sandbox）」：允許合格外國金融機構在此開展自由外匯兌換、離岸資本融資、金融科技試驗及綠色碳金融交易，稅收適用 10% 優惠所得稅率與外籍高端人才個稅減免。',
        contentVi: 'Đề án IFC Thủ Thiêm quy hoạch cụm tháp tài chính 99 tầng trên 11 lô đất vàng tại Khu chức năng số 1. Điểm mấu chốt là cơ chế thử nghiệm có kiểm soát (Sandbox), nới lỏng quản lý ngoại hối, miễn giảm thuế cho chuyên gia quốc tế nhằm thu hút các định chế tài chính toàn cầu.'
      },
      {
        heading: '二、49 億美元芹苴國際轉運深水港：比肩新加坡的航運心臟',
        headingVi: '2. Siêu cảng trung chuyển quốc tế Cần Giờ 4,9 tỷ USD',
        content: '由越南海事總公司（VIMC）、西貢港與地中海航運（MSC）旗下碼頭投資公司（TIL）聯手打造的芹苴港專案，總投資額達 49 億美元，規劃長達 7.2 公里的連續深水碼頭。該專案預計於 2026 年底迎來動工里程碑，2030 年一期吞吐能力達到 480 萬 TEU，終期達 1,690 萬 TEU。這將從根本上改變東南亞航運版圖，直接吸引原本停靠新加坡與馬來西亞港口的歐美幹線超級母船停靠。',
        contentVi: 'Liên danh VIMC, Cảng Sài Gòn và hãng tàu hàng hải hàng đầu thế giới MSC/TIL hợp tác phát triển siêu cảng Cần Giờ với tổng vốn 4,9 tỷ USD. Khi hoàn thành, cụm cảng có khả năng tiếp nhận tàu mẹ 250.000 DWT (24.000 TEU), cạnh tranh trực tiếp với các trung tâm trung chuyển quốc tế trong khu vực.'
      },
      {
        heading: '三、隆城機場 2026 商業啟航與東南部大動脈三環路',
        headingVi: '3. Sân bay Long Thành cất cánh 12/2026 và Vành đai 3 liên vùng',
        content: '4F 級隆城國際機場一期工程各項跑道與巨型蓮花造型客運航廈已進入機電調試與聯調測試階段，官方確認將於 2026 年 12 月正式投入商業營運，年設計旅客吞吐量 2,500 萬人次與貨物 120 萬噸。機場與胡志明三環路（Vành đai 3）、邊和－頭頓高速公路、隆城－新山一聯絡道同步成網，將原本擁擠不堪的平陽－同奈－胡志明市物流車程縮短一半以上。',
        contentVi: 'Đại công trình Sân bay Long Thành giai đoạn 1 với công suất 25 triệu khách/năm chốt lịch khai thác thương mại vào tháng 12/2026. Mạng lưới hạ tầng kết nối gồm Vành đai 3 và cao tốc Biên Hòa - Vũng Tàu giúp rút ngắn hơn 50% thời gian vận chuyển hàng hóa xuất nhập khẩu của các cụm công nghiệp Đông Nam Bộ.'
      }
    ],
    terms: [
      { term: 'Trung tâm Tài chính Quốc tế (IFC)', hanViet: '中心財務國際', meaning: '守添國際金融中心' },
      { term: 'Cảng trung chuyển quốc tế Cần Giờ', hanViet: '港中轉國際芹苴', meaning: '芹苴超級國際貨櫃轉運深水港' },
      { term: 'Cơ chế thử nghiệm có kiểm soát (Sandbox)', hanViet: '機制試驗有檢索', meaning: '金融創新與離岸外匯監管沙盒' }
    ]
  },
  {
    id: 'DOSSIER-2026-12',
    issueNo: 'VN-MACRO-012',
    date: '2026-09-01',
    category: 'fdi_compliance',
    categoryLabel: '台商法規實務',
    categoryLabelVi: 'Tuân thủ & Pháp lý FDI',
    readTime: '15 分鐘',
    readTimeVi: '15 phút đọc',
    title: '2026台商在越營運合規指南：全球最低稅負《投資支持基金》第182號議定、新社保法、防洗產地穿透式查驗與台資銀行匯兌避險實務',
    titleVi: 'Cẩm nang quản trị & tuân thủ cho doanh nghiệp FDI Đài Loan 2026: Quỹ hỗ trợ đầu tư Nghị định 182, Luật BHXH mới và an toàn xuất xứ C/O',
    subtitle: '最高50%研發補貼沖抵15%最低稅負，C/O防規避查核應對，玉山、兆豐、中信等台資行庫實務操作守則',
    subtitleVi: 'Tận dụng cơ chế bù đắp thuế tối thiểu toàn cầu, kiểm soát rủi ro truy xuất nguồn gốc linh kiện và quản trị dòng tiền song phương',
    author: '跨國台商稅務法律諮詢組 · 資深會計師與合規顧問',
    authorVi: 'Tổ Tư vấn Pháp lý & Thuế Doanh nghiệp FDI · Chuyên gia Kiểm toán',
    tags: ['台商營運實務', '投資支持基金182號', '全球最低稅負', '新社保法2025', '台資銀行匯兌'],
    tagsVi: ['FDI Đài Loan', 'Quỹ hỗ trợ đầu tư', 'Thuế tối thiểu toàn cầu', 'Luật BHXH 2024', 'Ngân hàng Đài Loan'],
    kpis: [
      { label: '高科技研發投資補貼上限', labelVi: 'Hỗ trợ chi phí đầu tư R&D', val: '最高 50%', type: 'green' },
      { label: '全球最低稅負標準率', labelVi: 'Thuế bổ sung tối thiểu', val: '15.0% QDMTT', type: 'gold' },
      { label: '新社保法僱主繳納總費率', labelVi: 'Tỷ lệ đóng BHXH người SDLD', val: '20.5%', type: 'blue' }
    ],
    summary: '面對全球經濟格局變化與越南法治環境的深刻轉型，2026年台商在越運營進入「高度專業化與法規合規化」的分水嶺。針對經濟合作暨發展組織（OECD）全球最低稅負制（Pillar Two，15% QDMTT）對跨國台資大型集團優惠稅率的衝擊，越南政府正式實施第 182/2024/NĐ-CP 號議定，設立「國家投資支持基金（Quỹ hỗ trợ đầu tư）」，提供高達 50% 的研發中心、晶片製造與高科技專案固定資產投資直接財政補貼，為合規大廠提供充分對沖補償。同時，2025年7月生效的新《社會保險法》嚴格落實外籍員工強制納保與養老提撥；美國海關（CBP）與越南海關總局聯合啟動原料穿透式追溯查驗防堵「洗產地」。在金流端，玉山銀行、兆豐銀行、中國信託等台資行庫為台商架構了 DICA 專戶、跨境無本金遠期（NDF）匯率避險與台幣直兌渠道。本報告為台商負責人與財務主管提供最全面的合規操作手冊。',
    summaryVi: 'Năm 2026 đánh dấu bước chuyển trọng yếu trong quản trị tuân thủ của cộng đồng doanh nghiệp FDI Đài Loan tại Việt Nam. Để bù đắp tác động từ Thuế tối thiểu toàn cầu (Pillar Two 15%), Chính phủ đã ban hành Nghị định số 182/2024/NĐ-CP thành lập Quỹ hỗ trợ đầu tư, tài trợ trực tiếp bằng tiền mặt lên tới 50% chi phí đầu tư cơ sở hạ tầng, R&D và đào tạo nhân lực bán dẫn - AI. Bên cạnh đó, Luật BHXH mới có hiệu lực từ 01/7/2025 cùng các quy định hậu kiểm C/O chống lẩn tránh xuất xứ đòi hỏi doanh nghiệp phải chuyên nghiệp hóa hệ thống kế toán - hải quan. Mạng lưới các chi nhánh ngân hàng Đài Loan như E.SUN, Mega, CTBC, Cathay đóng vai trò cầu nối tài chính đắc lực hỗ trợ quản trị rủi ro tỷ giá.',
    sections: [
      {
        heading: '一、第 182/2024/NĐ-CP 號議定：《投資支持基金》現金補貼全攻略',
        headingVi: '1. Nghị định 182/2024/NĐ-CP: Cơ chế hỗ trợ tài chính từ Quỹ hỗ trợ đầu tư',
        content: '為解決跨國企業因補繳 15% 最低稅負而失去投資誘因的問題，越南依 Decree 182 設立國家投資支持基金。符合條件的台資大廠（如年營業額逾 7.5 億歐元母公司之在越子公司、高科技半導體製造商、AI 研發中心）可申請多項直接現金補助：\n• 基礎設施與研發設備投資：最高給予 50% 購置成本補貼；\n• 人才培訓與專業技術認證：每人每年最高補貼 5,000 萬越盾；\n• 綠色工廠升級（節能減排、屋頂光電設備）：最高補貼 30% 改造支出。\n這項法案徹底消除了大台商對稅負優惠被「沒收」的焦慮，轉而將省下的稅額轉化為實體工廠升級基金。',
        contentVi: 'Nghị định 182/2024/NĐ-CP thiết lập hành lang hỗ trợ thiết thực cho các dự án công nghệ cao: Hỗ trợ tới 50% chi phí đầu tư tài sản cố định cho R&D; tài trợ kinh phí đào tạo nhân lực chất lượng cao; và hỗ trợ doanh nghiệp đạt chứng chỉ xanh Net Zero, trực tiếp bù đắp phần thuế tối thiểu toàn cầu phải nộp thêm.'
      },
      {
        heading: '二、防洗產地稽查升級：海關 BOM 料件核銷與 C/O 穿透式溯源',
        headingVi: '2. Siết chặt xuất xứ hàng hóa: Tránh bẫy gian lận C/O và kiểm tra định mức BOM',
        content: '越南對美出口順差突破千億美元後，美國商務部（DOC）與海關（CBP）加大對越南轉口產品的防規避（Anti-Circumvention）調查力度。重點行業包括：太陽能電池板、鋼鐵、鋁材、木製家具、電子連接線纜及網通設備。台商必須注意：\n1. 嚴禁單純自中國進口散件在越僅作「螺絲起子簡易組裝（Minor Assembly）」即申請越南產地證 Form B 或 Form ICO；\n2. 每年會計年度結束後 90 天內，必須向海關提交精確的料件決算報告（Báo cáo quyết toán hải quan），進口原物料庫存、在製品消耗與出口成品重量必須透過 ERP 系統能被嚴格比對。損耗率偏離合理範圍將面臨巨額補稅與關稅欺詐刑事起訴。',
        contentVi: 'Tổng cục Hải quan tăng cường phối hợp với CBP Hoa Kỳ truy xuất nguồn gốc nguyên liệu đến cấp độ linh kiện. Doanh nghiệp chế xuất EPE bắt buộc phải nộp báo cáo quyết toán đúng hạn trong 90 ngày sau năm tài chính, chuẩn hóa bảng định mức tiêu hao nguyên vật liệu BOM, tuyệt đối tránh các thao tác lắp ráp giản đơn để né thuế phòng vệ thương mại.'
      },
      {
        heading: '三、台資行庫實務：DICA 帳戶、跨境匯款與 NDF 匯率避險矩陣',
        headingVi: '3. Nghiệp vụ ngân hàng Đài Loan: Quản trị tài khoản DICA và bảo hiểm tỷ giá',
        content: '在越營運台商應充分運用玉山銀行、兆豐銀行、中國信託等在地合法分行優勢：\n• DICA 資本金帳戶：必須在發照 90 天內依章程出資期限將注冊資本金自海外母公司匯入。非經 DICA 專戶之資金不能認定為合法法定股本，亦無法在往後年度合法匯出稅後利潤；\n• 跨國利潤匯回：每年需在完成第三方審計及繳清所得稅款並取得稅務局無欠稅證明後方可辦理匯回；\n• 匯率避險：在 USD/VND 波動加劇之際，台商可透過台資行庫簽訂 3~6 個月無本金交割遠期合約（NDF）或換匯換利合約（CCS），將匯率波動風險鎖定在 1% 以內，避免匯損侵蝕微薄利潤。',
        contentVi: 'Các chi nhánh ngân hàng Đài Loan tại Việt Nam (E.SUN, Mega, CTBC, Cathay) hỗ trợ toàn diện: Mở và quản lý tài khoản vốn đầu tư DICA đúng chuẩn 90 ngày; tư vấn hồ sơ chuyển lợi nhuận hợp pháp về nước sau kiểm toán; và cung ứng các hợp đồng phái sinh tiền tệ kỳ hạn NDF để khóa thiểu rủi ro tỷ giá cho doanh nghiệp xuất nhập khẩu.'
      }
    ],
    terms: [
      { term: 'Quỹ hỗ trợ đầu tư (Nghị định 182/2024/NĐ-CP)', hanViet: '基金補助投資', meaning: '越南國家投資支持基金 (提供最高50%研發與建廠補貼)' },
      { term: 'Báo cáo quyết toán hải quan', hanViet: '報告決算海關', meaning: '年度進出口保稅料件核銷決算報告' },
      { term: 'Chống lẩn tránh biện pháp phòng vệ thương mại', hanViet: '防隱避辦法防衛商賣', meaning: '打擊轉口洗產地防規避貿易救濟措施' }
    ]
  }
];

// ── 7B. 南越外商實務指南 (South Vietnam Foreign Business Guide - Bilingual) ──
export const southVietnamBusinessData = {
  // ── 2026年南越大胡志明四大世紀重磅專案
  megaprojects2026: [
    {
      id: 'thu_thiem_ifc',
      name: '守添國際金融中心 (Thu Thiem IFC)',
      nameVi: 'Trung tâm Tài chính Quốc tế Thủ Thiêm',
      location: '胡志明市守德市守添新城區第一功能區',
      locationVi: 'Khu chức năng số 1, KĐT mới Thủ Thiêm, TP. Thủ Đức',
      investment: '預計超 100 億美元（分階段開發）',
      investmentVi: 'Dự kiến trên 10 tỷ USD (phát triển nhiều giai đoạn)',
      timeline: '2025-2035 年全期規劃（2026年完成立法沙盒）',
      status: '政策落地 · 法令第323/2025/NĐ-CP號核定',
      statusVi: 'Đã ban hành Nghị định 323/2025/NĐ-CP',
      highlights: '規劃11個核心地塊，籌建99層「IFC-99F」金融旗艦地標。實施監管沙盒（Sandbox），外匯自由兌換與資本項下開放，對標新加坡與杜拜。',
      highlightsVi: 'Quy hoạch 11 lô đất vàng, đề xuất tòa tháp tài chính 99 tầng. Cơ chế thử nghiệm có kiểm soát (Sandbox) tự do ngoại hối theo chuẩn mực quốc tế.'
    },
    {
      id: 'can_gio_port',
      name: '芹苴國際轉運深水港 (Can Gio Super Port)',
      nameVi: 'Cảng trung chuyển quốc tế Cần Giờ',
      location: '胡志明市芹苴縣島嶼深水門戶（同奈河與龍海河交匯處）',
      locationVi: 'Cù lao Con Chó, huyện Cần Giờ, TP. Hồ Chí Minh',
      investment: '49 億美元（約合 128 萬億越盾）',
      investmentVi: '4,9 tỷ USD (khoảng 128.000 tỷ đồng)',
      timeline: '2026年底前動工 · 2030年一期480萬TEU · 終期1,690萬TEU',
      status: '政府核准投資案 · 全球第二大船商MSC/TIL聯合開發',
      statusVi: 'Chính phủ phê duyệt chủ trương, liên danh VIMC - Cảng Sài Gòn - MSC/TIL',
      highlights: '碼頭總長度7.2公里，可停靠當今世界最大24,000 TEU（25萬DWT）母船，與新加坡競爭國際貨櫃中轉業務。',
      highlightsVi: 'Bến dài 7,2 km tiếp nhận tàu mẹ 24.000 TEU, giảm chi phí trung chuyển khu vực và củng cố vị thế hàng hải VN.'
    },
    {
      id: 'metro_line_1',
      name: '胡志明市地鐵一號線 (Metro Line 1)',
      nameVi: 'Tuyến Metro số 1 Bến Thành - Suối Tiên',
      location: '第1郡濱城市場至守德市仙泉仙湖公園 / 高科技園區',
      locationVi: 'Bến Thành (Quận 1) - Suối Tiên (TP. Thủ Đức)',
      investment: '43.7 萬億越盾（日本JICA官方發展援助ODA貸款）',
      investmentVi: '43.700 tỷ đồng (Vốn vay ODA Nhật Bản qua JICA)',
      timeline: '2024年12月22日正式通車商業運營 · 2025-2026年全速載客',
      status: '穩定商業營運中 · 貫穿市中心與高科技園區',
      statusVi: 'Đã vận hành thương mại chính thức từ 22/12/2024',
      highlights: '全越第一條城市地下＋高架軌道，全長19.7公里，設14座車站，從市中心第一郡至高科技園區（SHTP）僅需20分鐘。',
      highlightsVi: 'Tuyến đường sắt đô thị ngầm & trên cao đầu tiên, 19,7 km với 14 ga, rút ngắn thời gian vào trung tâm xuống 20 phút.'
    },
    {
      id: 'long_thanh_airport',
      name: '隆城國際機場一期 (Long Thanh Airport Phase 1)',
      nameVi: 'Cảng hàng không quốc tế Long Thành - Giai đoạn 1',
      location: '同奈省隆城縣（距胡志明市中心約40公里）',
      locationVi: 'Huyện Long Thành, tỉnh Đồng Nai',
      investment: '46.6 億美元（一期）· 全三期超 160 億美元',
      investmentVi: '4,66 tỷ USD (Giai đoạn 1) · Toàn bộ 3 giai đoạn trên 16 tỷ USD',
      timeline: '2025年底技術試飛 · 2026年12月正式商業通航營運',
      status: '工程最後衝刺 · 4F頂級國際航空樞紐',
      statusVi: 'Chốt mốc vận hành thương mại vào tháng 12/2026',
      highlights: '年吞吐量2,500萬人次與120萬噸貨物，設4,000米跑道與巨型蓮花航廈，與新山一機場構成南越雙門戶樞紐。',
      highlightsVi: 'Công suất 25 triệu khách & 1,2 triệu tấn hàng/năm, đường cất hạ cánh 4.000m cấp 4F, giải tỏa áp lực Tân Sơn Nhất.'
    }
  ],
  // ── 外商設立速覽
  setupOverview: {
    title: '南越外資企業設立全攻略',
    titleVi: 'Hướng dẫn toàn diện thành lập doanh nghiệp FDI tại miền Nam Việt Nam',
    desc: '聚焦胡志明市 · 平陽 · 同奈 · 龍安 · 頭頓大南越工業走廊，涵蓋法律設立、工業區選址、勞動用工、稅務合規、外匯管理到日常運營的完整在地實務指南。',
    descVi: 'Tập trung vào hành lang công nghiệp TP.HCM · Bình Dương · Đồng Nai · Long An · Bà Rịa-Vũng Tàu, bao gồm toàn bộ quy trình pháp lý, lựa chọn khu công nghiệp, lao động, thuế và ngoại hối.',
    coverArea: ['胡志明市（TP.HCM）', '平陽省（Bình Dương）', '同奈省（Đồng Nai）', '龍安省（Long An）', '巴地頭頓省（BR-VT）', '西寧省（Tây Ninh）'],
    coverAreaVi: ['TP. Hồ Chí Minh', 'Tỉnh Bình Dương', 'Tỉnh Đồng Nai', 'Tỉnh Long An', 'Tỉnh Bà Rịa - Vũng Tàu', 'Tỉnh Tây Ninh']
  },

  // ── 企業設立類型比較
  entityTypes: [
    {
      id: 'llc_100',
      type: '100% 外資有限責任公司 (LLC)',
      typeVi: 'Công ty TNHH một thành viên 100% vốn nước ngoài',
      icon: '🏢',
      pros: '完全自主控制、利潤全額匯回、可申請 EPE 保稅廠資格',
      prosVi: 'Toàn quyền kiểm soát, chuyển lợi nhuận 100%, đủ điều kiện đăng ký doanh nghiệp chế xuất EPE',
      cons: '設立流程最繁瑣（45~90天）、部分行業市場進入受限',
      consVi: 'Thủ tục phức tạp nhất (45-90 ngày), một số ngành nghề bị hạn chế tỷ lệ vốn',
      timeline: '45 ~ 90 天',
      timelineVi: '45 - 90 ngày',
      minCapital: '視行業而定，製造業通常 100 萬美元以上',
      minCapitalVi: 'Tuỳ ngành nghề, sản xuất thường tối thiểu 1 triệu USD',
      bestFor: '獨立製造、高科技研發、出口加工廠',
      bestForVi: 'Sản xuất độc lập, R&D công nghệ cao, gia công xuất khẩu'
    },
    {
      id: 'jv',
      type: '合資企業 (Joint Venture)',
      typeVi: 'Công ty TNHH hai thành viên liên doanh (JV)',
      icon: '🤝',
      pros: '借助本地合作方資源（土地、關係、通路）、快速切入受管制行業',
      prosVi: 'Tận dụng mạng lưới địa phương, tiếp cận ngành nghề có điều kiện',
      cons: '股東利益分配複雜、控制權稀釋風險高',
      consVi: 'Chia sẻ quyền kiểm soát, phức tạp trong quản trị nội bộ',
      timeline: '60 ~ 120 天',
      timelineVi: '60 - 120 ngày',
      minCapital: '依協議與行業規定',
      minCapitalVi: 'Theo thoả thuận cổ đông và yêu cầu ngành',
      bestFor: '零售通路、建設工程、部分服務業',
      bestForVi: 'Phân phối bán lẻ, xây dựng, một số dịch vụ'
    },
    {
      id: 'rep_office',
      type: '代表處 (Representative Office)',
      typeVi: 'Văn phòng đại diện (VPĐD)',
      icon: '📋',
      pros: '設立最快（30天）、成本最低、試水溫首選',
      prosVi: 'Thành lập nhanh nhất (30 ngày), chi phí thấp, phù hợp giai đoạn thăm dò thị trường',
      cons: '不可直接從事商業交易、不能簽約收費、無法雇用工廠工人',
      consVi: 'Không được ký kết hợp đồng kinh doanh, thu tiền, tuyển dụng công nhân trực tiếp sản xuất',
      timeline: '30 ~ 45 天',
      timelineVi: '30 - 45 ngày',
      minCapital: '無最低資本要求',
      minCapitalVi: 'Không yêu cầu vốn tối thiểu',
      bestFor: '市場調研、商務聯絡、採購辦事',
      bestForVi: 'Nghiên cứu thị trường, liên lạc thương mại, mua hàng'
    }
  ],

  // ── 2026年最低工資
  minimumWage2026: {
    effectiveDate: '2026 年 1 月 1 日（依 Decree 293/2025/NĐ-CP）',
    effectiveDateVi: '1/1/2026 theo Nghị định 293/2025/NĐ-CP',
    adjustmentRate: '+6.0% 平均調幅（連續五年調漲）',
    adjustmentRateVi: '+6,0% mức tăng bình quân (tăng liên tiếp 5 năm)',
    zones: [
      {
        zone: '一區（Zone I）',
        zoneVi: 'Vùng I',
        coverage: '胡志明市全境、河內市全境、平陽省全境、同奈省全境',
        coverageVi: 'TP. Hồ Chí Minh, Hà Nội, Bình Dương, Đồng Nai (toàn tỉnh)',
        monthly: '5,636,000 VND',
        monthlyTwd: '約 NT$ 7,118',
        hourly: '約 27,095 VND / 小時',
        hourlyVi: 'Khoảng 27.095 đồng/giờ'
      },
      {
        zone: '二區（Zone II）',
        zoneVi: 'Vùng II',
        coverage: '頭頓市、龍安省城市地區、同奈部分縣市',
        coverageVi: 'TP. Vũng Tàu, huyện thị Long An, một số huyện thị Đồng Nai',
        monthly: '5,009,000 VND',
        monthlyTwd: '約 NT$ 6,326',
        hourly: '約 24,082 VND / 小時',
        hourlyVi: 'Khoảng 24.082 đồng/giờ'
      },
      {
        zone: '三區（Zone III）',
        zoneVi: 'Vùng III',
        coverage: '平陽農村縣鄉、龍安農村地區、西寧省',
        coverageVi: 'Huyện nông thôn Bình Dương, nông thôn Long An, Tây Ninh',
        monthly: '4,386,000 VND',
        monthlyTwd: '約 NT$ 5,540',
        hourly: '約 21,086 VND / 小時',
        hourlyVi: 'Khoảng 21.086 đồng/giờ'
      },
      {
        zone: '四區（Zone IV）',
        zoneVi: 'Vùng IV',
        coverage: '其他農村省份',
        coverageVi: 'Các huyện nông thôn còn lại',
        monthly: '3,919,000 VND',
        monthlyTwd: '約 NT$ 4,951',
        hourly: '約 18,842 VND / 小時',
        hourlyVi: 'Khoảng 18.842 đồng/giờ'
      }
    ],
    importantNotes: [
      '外資製造業實際招工薪資通常為法定最低薪資的 120%~150%',
      '技師、品管工程師月薪普遍在 8,000,000~15,000,000 VND',
      '台灣外派幹部月薪含所有津貼通常在 USD 2,500~6,000',
      '胡志明市工廠工人需競爭，需提供宿舍或交通補貼方能留才'
    ],
    importantNotesVi: [
      'Mức lương tuyển dụng thực tế tại các nhà máy FDI thường bằng 120-150% lương tối thiểu',
      'Kỹ thuật viên, QC engineer lương phổ biến 8-15 triệu đồng/tháng',
      'Chuyên gia Đài Loan biệt phái lương gộp thường 2.500-6.000 USD/tháng',
      'Tại TP.HCM cần cung cấp ký túc xá hoặc xe đưa đón để giữ chân lao động'
    ]
  },

  // ── 社會保險費率
  socialInsurance2026: {
    title: '2026 年強制性勞動社會保險費率（新社保法 2025年7月1日生效）',
    titleVi: 'Mức đóng bảo hiểm xã hội bắt buộc năm 2026 (Luật BHXH sửa đổi hiệu lực 01/7/2025)',
    employer: [
      { fund: '養老、殘疾、喪葬（BHXH Hưu trí & Tử tuất）', rate: '14.0%', note: '由僱主繳納' },
      { fund: '工傷職業病（BHTNLĐ-BNN）', rate: '0.5%', note: '僱主繳，低風險行業可申請0.3%' },
      { fund: '失業保險（BHTN）', rate: '1.0%', note: '僱主繳' },
      { fund: '健康保險（BHYT）', rate: '3.0%', note: '僱主繳' },
      { fund: '工會費（Phí Công đoàn）', rate: '2.0%', note: '依總薪資單計' }
    ],
    employee: [
      { fund: '養老保險（Hưu trí）', rate: '8.0%', note: '員工繳納' },
      { fund: '失業保險（BHTN）', rate: '1.0%', note: '員工繳' },
      { fund: '健康保險（BHYT）', rate: '1.5%', note: '員工繳' }
    ],
    totalEmployerRate: '20.5%（繳費基數上限為最低工資的 20 倍）',
    totalEmployeeRate: '10.5%',
    foreignerNote: '外籍員工自 2022/1/1 起強制參加「工傷職業病 + 健康保險」，養老與失業保險自 2024 年起亦強制化，無豁免。',
    foreignerNoteVi: 'Lao động nước ngoài bắt buộc tham gia BHXH bắt buộc từ 1/1/2022 theo Nghị định 143/2018/NĐ-CP, bao gồm đủ 5 chế độ.'
  },

  // ── 南越工業區比較矩陣
  industrialZones: [
    {
      id: 'shtp',
      name: '胡志明市高科技園區 (SHTP)',
      nameVi: 'Khu Công nghệ cao TP.HCM (SHTP)',
      location: '胡志明市第9郡（現Thủ Đức城市）',
      locationVi: 'Thành phố Thủ Đức (quận 9 cũ), TP.HCM',
      type: '高科技特別經濟區',
      typeVi: 'Khu kinh tế đặc biệt công nghệ cao',
      landRentUsd: '$3.2 ~ $5.55/㎡/月',
      infrastructureFee: '$0.60/㎡/月（含水電路通訊）',
      citIncentive: '10% 所得稅率（15年）+ 前4年免稅 + 後9年減半',
      citIncentiveVi: 'Thuế TNDN 10% trong 15 năm, miễn 4 năm đầu, giảm 50% trong 9 năm tiếp',
      importDutyFree: '✅ 全部機械設備與原物料進口免關稅',
      targetIndustry: '半導體、IC設計、精密電子、生物製藥、AI研發中心',
      targetIndustryVi: 'Bán dẫn, thiết kế IC, điện tử chính xác, dược phẩm sinh học, trung tâm R&D AI',
      tenants: 'Intel Products, Jabil, Sonion, Nidec, Samsung R&D Vietnam',
      powerReliability: '⚡⚡⚡⚡⚡（專線供電，99.9% 可靠度）',
      occupancyRate: '92%（擴建 Phase III 預計2027年完工）',
      highlight: '🌟 南越最高端科技園區，三星/英特爾品牌背書',
      highlightVi: '🌟 Khu CNC uy tín nhất miền Nam, có Samsung R&D và Intel làm đối tác neo lớn'
    },
    {
      id: 'vsip1',
      name: '越新工業園一期（VSIP I，平陽）',
      nameVi: 'Khu công nghiệp Việt Nam - Singapore (VSIP I), Bình Dương',
      location: '平陽省 Thuận An 市',
      locationVi: 'Thành phố Thuận An, Bình Dương',
      type: '越新合作工業園',
      typeVi: 'KCN liên doanh Việt Nam - Singapore',
      landRentUsd: '$3.4 ~ $3.8/㎡/月（建廠用地）',
      infrastructureFee: '$0.50/㎡/月',
      citIncentive: '20% 標準稅率 + 地方稅費減免優惠',
      citIncentiveVi: 'Thuế TNDN 20% tiêu chuẩn, tỉnh có hỗ trợ giảm tiền thuê đất năm đầu',
      importDutyFree: '✅ EPE 廠可申請進口原物料免關稅',
      targetIndustry: '精密機械、電子組裝、食品加工、物流倉儲',
      targetIndustryVi: 'Cơ khí chính xác, lắp ráp điện tử, chế biến thực phẩm, logistics',
      tenants: '台達電子、鴻海子公司、Schneider Electric、Lotte、百靈佳殷格翰',
      powerReliability: '⚡⚡⚡⚡（雙路供電，備用發電機）',
      occupancyRate: '95%（一期幾近滿租，VSIP III 新開發）',
      highlight: '🌟 歷史最悠久越新工業園，台商最密集，配套最完善',
      highlightVi: '🌟 KCN Việt Nam - Singapore lâu đời nhất, cụm FDI Đài Loan lớn nhất, dịch vụ hỗ trợ toàn diện'
    },
    {
      id: 'myPhuoc',
      name: '美福工業園（Mỹ Phước III-IV，平陽）',
      nameVi: 'Khu công nghiệp Mỹ Phước III - IV (Bình Dương New City)',
      location: '平陽省 Bến Cát 市（平陽新城核心）',
      locationVi: 'Thành phố Bến Cát (Bình Dương New City)',
      type: '省屬大型工業區',
      typeVi: 'KCN cấp tỉnh quy mô lớn',
      landRentUsd: '$2.8 ~ $3.5/㎡/月',
      infrastructureFee: '$0.40/㎡/月',
      citIncentive: '平陽省科技創新園區 10% 優惠稅率（符合條件者）',
      citIncentiveVi: 'Ưu đãi 10% với dự án công nghệ tại khu đổi mới sáng tạo Bình Dương',
      importDutyFree: '✅ EPE 廠適用',
      targetIndustry: '家具、紡織成衣、汽車零件、大型電子組裝',
      targetIndustryVi: 'Đồ gỗ nội thất, dệt may, phụ tùng ôtô, lắp ráp điện tử quy mô lớn',
      tenants: '正新輪胎、萬美特、Nitori、大和紡織',
      powerReliability: '⚡⚡⚡⚡（工業用電穩定）',
      occupancyRate: '82%（尚有地塊供租用）',
      highlight: '🌟 平陽新城門戶，租金較SHTP低30%~40%，適合一般製造業',
      highlightVi: '🌟 Giá thuê hợp lý, tiếp giáp sân golf và tiện ích đô thị mới Bình Dương'
    },
    {
      id: 'amata',
      name: 'AMATA 工業城（同奈省）',
      nameVi: 'Khu công nghiệp AMATA, Đồng Nai',
      location: '同奈省邊和市',
      locationVi: 'Thành phố Biên Hòa, Đồng Nai',
      type: '泰資工業城鎮',
      typeVi: 'Khu đô thị - công nghiệp Thái Lan',
      landRentUsd: '$3.0 ~ $3.6/㎡/月',
      infrastructureFee: '$0.55/㎡/月（含廢水處理）',
      citIncentive: '同奈省重點工業區 10% 稅率（符合高科技條件）',
      citIncentiveVi: 'Thuế 10% với dự án công nghệ cao tại Đồng Nai',
      importDutyFree: '✅ EPE 廠適用',
      targetIndustry: '汽車整車與零件、食品飲料、橡膠塑料、精密鑄造',
      targetIndustryVi: 'Ôtô và phụ tùng, thực phẩm đồ uống, cao su nhựa, đúc chính xác',
      tenants: 'Yamaha、Honda、Panasonic、Ajinomoto、Hoya',
      powerReliability: '⚡⚡⚡⚡（雙路供電+廢水統一處理）',
      occupancyRate: '88%',
      highlight: '🌟 泰國AMATA品牌管理，日商聚集，整車廠+日系零件廠生態完整',
      highlightVi: '🌟 Hệ sinh thái công nghiệp Nhật Bản hoàn chỉnh, xử lý nước thải tập trung'
    },
    {
      id: 'longAn',
      name: '龍安工業園（Long An Industrial Park）',
      nameVi: 'Khu công nghiệp Long An - Logistics',
      location: '龍安省 Cần Giuộc 縣',
      locationVi: 'Huyện Cần Giuộc, Long An',
      type: '倉儲物流型工業區',
      typeVi: 'KCN logistics, kho vận cảng sông',
      landRentUsd: '$2.0 ~ $2.8/㎡/月（最低廉）',
      infrastructureFee: '$0.30/㎡/月',
      citIncentive: '龍安省特別鼓勵政策（物流、農業加工免稅期更長）',
      citIncentiveVi: 'Long An ưu đãi đặc biệt logistics và nông nghiệp chế biến',
      importDutyFree: '✅ 鄰近胡志明市貓萊港，適合出口型製造',
      targetIndustry: '倉儲物流、冷鏈農產品加工、輕型製造、電商配送中心',
      targetIndustryVi: 'Kho bãi logistics, nông sản chế biến lạnh, sản xuất nhẹ, trung tâm thương mại điện tử',
      tenants: 'DHL Supply Chain、Lazada倉庫、台灣農業食品廠',
      powerReliability: '⚡⚡⚡（城市配電網）',
      occupancyRate: '68%（尚有大量可開發土地）',
      highlight: '🌟 租金南越最低，鄰近胡志明市貓萊港，物流成本優勢明顯',
      highlightVi: '🌟 Giá thuê thấp nhất miền Nam, kết nối cảng Cát Lái thuận tiện'
    }
  ],

  // ── 稅務合規關鍵事項
  taxCompliance: {
    cit: {
      standardRate: '20%（一般企業所得稅率）',
      preferentialRates: [
        { condition: '設於高科技特別經濟區（SHTP、Hòa Lạc等）', rate: '10% / 15年', freeYears: '前4年免稅 + 後9年減半' },
        { condition: '製造業（非高科技）工業區一般項目', rate: '17% / 10年', freeYears: '前2年免稅 + 後4年減半' },
        { condition: '高科技認證項目（由MoST認定）', rate: '10% / 15年', freeYears: '前4年免稅 + 後9年減半' },
        { condition: '農業、漁業、林業加工出口', rate: '15%', freeYears: '前2年免稅+後4年減半' },
        { condition: '全球最低稅負（Pillar Two）調整後', rate: '最低15%（年收逾7.5億歐元跨國集團）', freeYears: '超額補徵' }
      ],
      epeVatExemption: 'EPE加工出口廠出口貨物適用 0% VAT（進口原物料保稅免稅）',
      transferPricingRule: 'Decree 132/2020：關係人貸款利息扣除上限 = EBITDA × 30%',
      auditRisk: '⚠️ 連續虧損3年以上外資企業幾乎必遭移轉訂價稽查'
    },
    vat: {
      standardRate: '10%',
      reducedRate: '5%（基本食品、醫療、教育）',
      zeroRate: '0%（出口貨物與服務）',
      exportRefund: 'EPE廠出口可申請VAT退稅，通常30~90天退款',
      electronicInvoice: '2022年起強制採用電子發票（Hóa đơn điện tử），紙本發票全面廢除'
    },
    personalIncomeTax: {
      residentRate: '5%~35% 累進稅率（居住者：連續183天以上）',
      nonResidentRate: '20% 固定稅率（非居住者外籍收入）',
      expatBenefits: '外籍幹部住宅補貼、子女教育費、返鄉機票費用可合法免稅列扣'
    }
  },

  // ── 外匯資金管理
  foreignExchange: {
    dicaAccount: {
      name: '直接投資資本帳戶（DICA Account）',
      nameVi: 'Tài khoản vốn đầu tư trực tiếp (DICA)',
      description: '外資企業必須在越南境內認可商業銀行開立DICA帳戶，所有資本金注入、外債匯入及利潤匯回均須透過此帳戶操作',
      descriptionVi: 'Mọi dòng vốn góp, vay nước ngoài và chuyển lợi nhuận phải qua tài khoản DICA đăng ký tại NHTM được phép',
      openingDocs: [
        '企業投資登記證（IRC）',
        '企業登記證（ERC / BR）',
        '法定代理人護照及簽名樣本',
        '董事會決議書（出資授權）',
        '審計後財務報告（對已運營企業）'
      ],
      capitalRemittanceDeadline: '投資執照核發後90天內必須完成首筆資本金匯入',
      profitRepatriationPeriod: '每年財報完成審計後（通常次年3~6月）可合法匯出稅後利潤',
      usdPurchaseRequirement: '若需購匯美元匯出，需提供越南稅務部門的稅務合規完成證明'
    },
    recommendedBanks: [
      { name: '玉山銀行（E.SUN Bank）胡志明市分行', nameVi: 'Ngân hàng E.SUN - Chi nhánh TP.HCM', lang: '中文服務', specialty: '台商首選，中文作業，TWD/VND直接兌換' },
      { name: '兆豐銀行（Mega Bank）胡志明市分行', nameVi: 'Ngân hàng Mega Bank - Chi nhánh TP.HCM', lang: '中文服務', specialty: '台商貿易融資、信用狀（L/C）業務老牌' },
      { name: '中國信託商銀（CTBC）越南子行', nameVi: 'CTBC Bank Vietnam', lang: '中文/英文', specialty: '零售銀行業務完整，iBanking便利' },
      { name: 'Vietcombank（越南外貿銀行）', nameVi: 'Ngân hàng TMCP Ngoại thương Việt Nam', lang: '越南文/英文', specialty: '越南最大外匯銀行，手續費低，USD購匯快' },
      { name: 'HSBC Vietnam', nameVi: 'HSBC Việt Nam', lang: '英文/中文', specialty: '跨境貿易融資、供應鏈金融、SWIFT速度快' }
    ]
  },

  // ── 工作許可指南
  workPermit: {
    title: '外籍幹部工作許可（Work Permit）全攻略 2026',
    titleVi: 'Hướng dẫn xin Giấy phép lao động cho người nước ngoài 2026 (Nghị định 219/2025)',
    requirement: '在越南連續工作滿30天以上的外籍員工，均需持有工作許可或主管機關核發之工作免許可確認書',
    requirementVi: 'Người nước ngoài làm việc từ 30 ngày liên tục phải có GPLĐ hoặc Xác nhận miễn cấp GPLĐ do Sở Lao động cấp',
    exemptions: [
      '外資企業唯一法定代理人（Legal Representative）',
      '在越外資企業持股逾51%之外籍股東出任Giám đốc',
      '進行技術培訓且授課時間不超過30天（可申請豁免確認）',
      '內部調派（ICT）且符合WTO承諾之管理級人員',
      '依法律規定享有外交豁免之特定人士'
    ],
    requiredDocuments: [
      '無犯罪紀錄證明（台灣：警察局開立，辦理後3個月內有效，需經AIT認證）',
      '健康證明（越南指定醫院體檢）',
      '學歷證明（大學文憑，需公證+AIT認證）',
      '3年以上相關工作經驗證明（公司出具，需原件+公證）',
      '護照及有效簽證',
      '企業雇用申請書（省勞動廳規定格式）',
      '企業投資登記證（IRC）+ 企業登記證（ERC）'
    ],
    processingTime: '省勞動廳 5~10 個工作天（TP.HCM通常7天）',
    validity: '最長2年（可依需求申請1年期）',
    temporaryResidenceCard: '工作許可取得後，需再申請TRC暫住證（3年），免越南簽證年年更新的麻煩',
    cost: '工作許可費用：600,000 VND（省勞動廳官方費）+ 代辦費約200~400 USD',
    importantTip: '⚠️ 台籍幹部持商務簽（DN/DN1）但實際在廠工作，若被勞動榮軍社會部查廠查獲，最高可處驅逐出境並3年內禁止入境。'
  },

  // ── 辦公室與廠房市場行情
  realEstate: {
    hcmcOffice: [
      { district: '第一郡（District 1，CBD核心）', grade: 'A級', rentRange: '$35 ~ $60/㎡/月', typicalSize: '500~5,000㎡', vacancy: '12%', notes: '比鄰越南工商會、領事館密集，最具國際商務氛圍' },
      { district: '第三郡（District 3）', grade: 'B級', rentRange: '$18 ~ $30/㎡/月', typicalSize: '200~2,000㎡', vacancy: '18%', notes: '近市中心但租金平易，台商中小企業辦事處首選' },
      { district: '富美興（District 7，新城）', grade: 'A/B級', rentRange: '$20 ~ $38/㎡/月', typicalSize: '300~3,000㎡', vacancy: '15%', notes: '韓資、台資密集新城區，生活機能完善適合外籍幹部居住' },
      { district: 'Thủ Đức 城市（原第9郡）', grade: 'B級新興', rentRange: '$12 ~ $22/㎡/月', typicalSize: '300~5,000㎡', vacancy: '25%', notes: '靠近SHTP高科技園，適合科技公司設研發辦公室' }
    ],
    factoryRent: [
      { area: '胡志明市工業區（Tân Bình / Linh Trung）', type: '出租廠房', rent: '$3.5 ~ $5.0/㎡/月', minSize: '1,000㎡', powerCapacity: '1000 KVA / 公頃' },
      { area: '平陽 VSIP I/II', type: '出租廠房', rent: '$2.8 ~ $3.8/㎡/月', minSize: '2,000㎡', powerCapacity: '1500 KVA / 公頃' },
      { area: '平陽 Mỹ Phước III', type: '出租廠房或建廠用地', rent: '$1.8 ~ $2.5/㎡/月（地）', minSize: '5,000㎡地', powerCapacity: '2000 KVA / 公頃' },
      { area: '同奈 AMATA / Long Duc', type: '出租廠房或建廠用地', rent: '$2.2 ~ $3.2/㎡/月', minSize: '2,000㎡', powerCapacity: '2000 KVA / 公頃' },
      { area: '龍安工業區', type: '出租廠房或倉庫', rent: '$1.5 ~ $2.2/㎡/月', minSize: '1,000㎡', powerCapacity: '1000 KVA / 公頃' }
    ],
    utilityRates: {
      electricityIndustrial: '工業電費：2,747 ~ 4,587 VND/KWh（依用電量及時段差異）',
      electricityPeakNote: '尖峰用電時段（6:00~22:00）費率較高，鼓勵夜班用電',
      water: '工業用水：7,500 ~ 12,000 VND/㎥（依工業園區配套不同）',
      internet: '商業光纖（100Mbps）：月費約1,000,000~3,000,000 VND',
      wastewater: '廢水處理費：5,000~15,000 VND/㎥（工業廢水須先預處理達標）'
    }
  },

  // ── 重要注意事項與常見陷阱
  criticalWarnings: [
    {
      id: 'w1',
      severity: 'critical',
      icon: '🚨',
      title: '借名登記（Nominee）絕對禁止',
      titleVi: 'Nghiêm cấm đứng tên hộ (Nominee)',
      content: '以越南本地人名義持有外資公司股份或不動產，在越南法律下屬於嚴重違法，可導致資產全數充公。請務必通過合法FDI途徑設立企業。',
      contentVi: 'Mọi thỏa thuận ủy thác hoặc đứng tên hộ trong doanh nghiệp FDI đều bị coi là vô hiệu theo pháp luật VN, có thể dẫn đến tịch thu toàn bộ tài sản.'
    },
    {
      id: 'w2',
      severity: 'high',
      icon: '⚠️',
      title: '資本金需於90天內實際匯入',
      titleVi: 'Góp vốn điều lệ bắt buộc trong 90 ngày',
      content: '持有IRC投資執照後，必須在90天內透過DICA帳戶完成首筆資本金匯入驗資，否則執照可能遭廢止。許多新設台商因誤解規定而面臨執照失效風險。',
      contentVi: 'Sau khi được cấp IRC, phải chuyển đủ vốn điều lệ đăng ký vào tài khoản DICA trong vòng 90 ngày để hoàn thành đăng ký và nhận Giấy chứng nhận đăng ký đầu tư chính thức.'
    },
    {
      id: 'w3',
      severity: 'high',
      icon: '⚠️',
      title: '年度海關料件核銷報告（90天內必辦）',
      titleVi: 'Báo cáo quyết toán hải quan (90 ngày sau năm tài chính)',
      content: 'EPE加工出口廠每財政年度結束後90天內，必須向所屬海關分局提交「年度進出口料件核銷決算報告」，核對進口原物料庫存量與出口成品消耗量。誤差超過合理損耗率者，將被補繳進口關稅。',
      contentVi: 'Doanh nghiệp chế xuất phải nộp báo cáo quyết toán hải quan trong vòng 90 ngày sau khi kết thúc năm tài chính, đối chiếu định mức tiêu hao và lượng tồn kho thực tế.'
    },
    {
      id: 'w4',
      severity: 'medium',
      icon: '📋',
      title: '工廠環境影響評估（EIA）切勿忽略',
      titleVi: 'Báo cáo đánh giá tác động môi trường (ĐTM)',
      content: '投資規模逾50億越盾或屬於特定行業（電子、化工、食品加工）的工廠，在動工前必須完成EIA環評並獲主管機關批准，否則後期生產可能面臨強制停工。',
      contentVi: 'Dự án đầu tư trên 5 tỷ đồng hoặc thuộc lĩnh vực nhạy cảm về môi trường phải lập Báo cáo ĐTM được cơ quan nhà nước phê duyệt trước khi khởi công xây dựng.'
    },
    {
      id: 'w5',
      severity: 'medium',
      icon: '💡',
      title: '電力供應穩定性：南越vs北越差異',
      titleVi: 'An ninh nguồn điện: Khác biệt miền Nam - miền Bắc',
      content: '相較於北越2023年大規模限電事件，南越（胡志明市/平陽/同奈）的電力供應歷年來相對穩定。但高精密製程廠仍建議自備UPS不斷電與備用柴油發電機組，並向工業區申請備用供電合約。',
      contentVi: 'Miền Nam có nguồn điện ổn định hơn miền Bắc, nhưng các nhà máy sản xuất công nghệ cao vẫn nên trang bị UPS và máy phát dự phòng, ký hợp đồng điện dự phòng với ban quản lý KCN.'
    }
  ],

  // ── 台商資源與聯絡網
  taiwaneseCommunity: {
    title: '南越台商組織與在地資源',
    titleVi: 'Cộng đồng doanh nhân Đài Loan tại miền Nam Việt Nam',
    organizations: [
      {
        name: '越南台灣商會聯合總會（胡志明市）',
        nameVi: 'Hiệp hội Thương nhân Đài Loan tại Việt Nam (TP.HCM)',
        address: '胡志明市第3郡台商集中服務中心',
        tel: '+84-28-xxxx-xxxx',
        desc: '胡志明市台商的最大聯絡窗口，提供法律諮詢、新進廠商輔導、政府部門媒合',
        descVi: 'Đầu mối liên lạc lớn nhất của cộng đồng doanh nhân Đài Loan tại TP.HCM'
      },
      {
        name: '平陽台灣商會（BTBA）',
        nameVi: 'Hiệp hội Thương nhân Đài Loan tỉnh Bình Dương (BTBA)',
        address: '平陽省 Bình Dương New City 商務中心',
        tel: '+84-274-xxxx-xxxx',
        desc: '逾600家會員企業，覆蓋平陽省全境工業區台資企業。每月例會、廠商交流活動',
        descVi: 'Hơn 600 doanh nghiệp thành viên, phủ khắp các KCN tỉnh Bình Dương'
      },
      {
        name: '台灣經濟部駐胡志明市辦事處（駐胡台辦）',
        nameVi: 'Văn phòng Kinh tế Văn hóa Đài Bắc tại TP.HCM',
        address: '胡志明市Bitexco Financial Tower',
        desc: '台灣政府唯一官方駐越服務機構，提供台商護照申辦、緊急領事協助、投資法規諮詢',
        descVi: 'Cơ quan đại diện chính thức duy nhất của Đài Loan tại TP.HCM'
      }
    ],
    hospitals: [
      { name: 'FV Hospital（法越醫院）', nameVi: 'Bệnh viện FV', district: '第7郡 Bình Chánh', specialty: '最受外籍人士信賴，24小時急診，英法中文服務', tier: '高端' },
      { name: 'Vinmec Central Park Hospital', nameVi: 'Bệnh viện Vinmec Central Park', district: 'Bình Thạnh郡', specialty: '越南最高端本土品牌，設備先進，中英文服務', tier: '高端' },
      { name: 'Columbia Asia Saigon', nameVi: 'Bệnh viện Columbia Asia Sài Gòn', district: '第2郡（Thủ Đức）', specialty: '亞洲連鎖品牌，外籍幹部健診體檢，英文服務', tier: '中高端' },
      { name: 'Cho Ray Hospital（草堤醫院）', nameVi: 'Bệnh viện Chợ Rẫy', district: '第5郡（公立）', specialty: '越南規模最大公立醫院，重大傷病手術，價格平易', tier: '公立' }
    ],
    expactAreas: [
      { area: '富美興（Phú Mỹ Hưng）- 第7郡', desc: '南越最受外籍幹部歡迎的高端住宅區，韓資開發商，設施完善，國際學校密集', monthlyRent: '$1,200 ~ $3,500（兩房~四房）' },
      { area: '第2郡（Thảo Điền）', desc: '歐美外籍人士聚集，西式餐廳咖啡館林立，步行舒適，靠近Thủ Đức工業', monthlyRent: '$800 ~ $2,500（兩房~三房）' },
      { area: '第3郡台商聚落', desc: '台商中小企業幹部選擇，中文環境、粵菜台菜廚師、台資超市近', monthlyRent: '$400 ~ $1,000（一房~兩房）' },
      { area: '平陽 Bình Dương New City', desc: '平陽台商廠長幹部首選，近工業區，通勤方便，生活成本低', monthlyRent: '$300 ~ $800（一房~三房）' }
    ]
  }
};

// ── 7C. 大胡志明市旅遊深度指南 (Greater HCMC Tourism Deep Guide - Bilingual) ──
export const hcmcTourismData = {
  overview: {
    title: '大胡志明市 · 深度旅遊全攻略',
    titleVi: 'Khám phá toàn diện Vùng TP. Hồ Chí Minh và các tỉnh lân cận',
    desc: '東南亞最具活力的城市，融合法式殖民建築、熱帶水鄉風情、越南美食天堂與新興現代都市的多元面貌。從市區繁華走廊到湄公河三角洲水鄉、從海濱度假勝地到高山霧氣繚繞的避暑山城，盡在兩小時車程之內。',
    descVi: 'Thành phố Hồ Chí Minh - trung tâm kinh tế sôi động nhất Đông Nam Á - cùng vùng phụ cận đa dạng: đồng bằng sông Cửu Long xanh mát, Vũng Tàu biển xanh cát trắng, Đà Lạt phố núi sương mờ, cách nhau chỉ 2-3 giờ đường.',
    bestSeason: '乾季 11月~4月（涼爽乾燥，最佳旅遊窗口）',
    bestSeasonVi: 'Mùa khô từ tháng 11 đến tháng 4 (thời tiết mát mẻ, ít mưa, phù hợp du lịch nhất)',
    avoidSeason: '雨季 5月~10月（午後雷陣雨頻繁，但旅費最便宜）',
    avoidSeasonVi: 'Mùa mưa tháng 5 - 10 (mưa chiều thường xuyên nhưng giá du lịch rẻ nhất)',
    currency: '越南盾（VND），$1 USD ≈ 25,485 VND；1 NTD ≈ 791.5 VND',
    currencyVi: 'Đơn vị tiền tệ: Đồng Việt Nam (VND). 1 USD ≈ 25.485 VND; 1 NTD ≈ 791,5 VND',
    illustrationKey: 'hcmc_skyline_illustration'
  },

  // ── 胡志明市核心景點
  attractions: [
    {
      id: 'reunification_palace',
      name: '統一宮（Dinh Thống Nhất）',
      nameVi: 'Dinh Thống Nhất',
      category: '歷史地標',
      categoryVi: 'Di tích lịch sử',
      location: '第1郡 Nam Kỳ Khởi Nghĩa 街135號',
      locationVi: '135 Nam Kỳ Khởi Nghĩa, Quận 1, TP.HCM',
      ticket: '外籍遊客 80,000 VND（≈NT$ 101）',
      ticketVi: 'Người nước ngoài 80.000 VND',
      hours: '07:30 ~ 11:00, 13:00 ~ 16:00（週一全天休館）',
      highlights: '南越共和國前總統府，保留完整的1975年衝破鐵門歷史現場、地下戰情室、總統辦公室原貌，是了解越戰歷史的必訪之地。',
      highlightsVi: 'Dinh Tổng thống Cộng hòa Miền Nam trước 1975, nguyên vẹn phòng tác chiến, phòng tiếp khách, là biểu tượng kết thúc chiến tranh ngày 30/4/1975.',
      tips: '建議上午10點前到，人少好拍照。語音導覽附中文版。',
      tipsVi: 'Nên đến trước 10h sáng để tránh đông. Có hướng dẫn viên du lịch tiếng Anh và tiếng Trung.'
    },
    {
      id: 'war_remnants_museum',
      name: '戰爭博物館（Bảo tàng Chứng tích Chiến tranh）',
      nameVi: 'Bảo tàng Chứng tích Chiến tranh',
      category: '歷史博物館',
      categoryVi: 'Bảo tàng lịch sử',
      location: '第3郡 Võ Văn Tần 街28號',
      locationVi: '28 Võ Văn Tần, Quận 3, TP.HCM',
      ticket: '外籍遊客 40,000 VND（≈NT$ 51）',
      ticketVi: 'Vé người nước ngoài: 40.000 VND',
      hours: '07:30 ~ 18:00（全年無休）',
      highlights: '全球最受訪問的越戰相關博物館之一。完整陳列美越戰爭期間的武器、照片與史料文獻，包括橙劑受害者展區。具有強烈的歷史反省意義，情感衝擊力極強。',
      highlightsVi: 'Một trong những bảo tàng về chiến tranh được tham quan nhiều nhất thế giới, lưu giữ hàng nghìn hiện vật, ảnh tư liệu về cuộc chiến và hệ quả để lại.',
      tips: '需預留2~3小時，部分展區有強烈照片，不建議帶幼童。',
      tipsVi: 'Nên dành 2-3 tiếng tham quan. Một số khu vực có hình ảnh nhạy cảm về chiến tranh.'
    },
    {
      id: 'ben_thanh_market',
      name: '濱城市場（Chợ Bến Thành）',
      nameVi: 'Chợ Bến Thành',
      category: '市集購物',
      categoryVi: 'Chợ & Mua sắm',
      location: '第1郡 Lê Lợi 廣場中心',
      locationVi: 'Quảng trường Lê Lợi, Quận 1, TP.HCM',
      ticket: '免費入場',
      ticketVi: 'Miễn phí vào cửa',
      hours: '06:00 ~ 19:00（夜市延至23:00）',
      highlights: '1914年建造的胡志明市地標性建築，越南最知名的室內傳統市場。販售熱帶水果、越南紀念品、絲綢布料、香料食材，也是體驗越南市集文化的窗口。',
      highlightsVi: 'Biểu tượng chợ truyền thống có từ năm 1914 của Sài Gòn, phong phú hàng hoá từ đặc sản ẩm thực, vải lụa đến hàng lưu niệm du lịch.',
      tips: '⚠️ 殺價是常態！標價通常為實際成交價2倍。夜市段（周邊攤販）更熱鬧，可嚐試各式街邊小吃。',
      tipsVi: '⚠️ Luôn mặc cả! Giá niêm yết thường gấp đôi giá thực. Khu chợ đêm xung quanh sầm uất về tối.'
    },
    {
      id: 'notre_dame_cathedral',
      name: '西貢聖母聖殿（Nhà thờ Đức Bà）',
      nameVi: 'Nhà thờ Đức Bà Sài Gòn',
      category: '宗教建築',
      categoryVi: 'Kiến trúc tôn giáo',
      location: '第1郡 Công xã Paris 廣場',
      locationVi: 'Công xã Paris, Quận 1, TP.HCM',
      ticket: '免費（內部修繕中，外觀拍照）',
      ticketVi: 'Miễn phí, đang trùng tu nội thất',
      hours: '外觀全天開放',
      highlights: '法國殖民時期1880年建造的羅馬式紅磚大教堂，是西貢最著名的建築地標。教堂正前廣場的聖母玛利亞雕像廣場氣氛莊嚴，是西貢最經典的拍照景點之一。',
      highlightsVi: 'Nhà thờ Công giáo bằng gạch đỏ được xây dựng từ thời Pháp thuộc (1880), biểu tượng kiến trúc đặc trưng nhất của trung tâm TP.HCM.',
      tips: '旁邊的中央郵局（Bưu điện Trung tâm Sài Gòn）同樣是法式殖民建築精品，值得一看。',
      tipsVi: 'Ngay cạnh là Bưu điện Trung tâm Sài Gòn, cũng là công trình kiến trúc Pháp đẹp nổi tiếng.'
    },
    {
      id: 'cu_chi_tunnels',
      name: '古芝地道（Địa đạo Củ Chi）',
      nameVi: 'Địa đạo Củ Chi',
      category: '歷史戰爭遺址',
      categoryVi: 'Di tích kháng chiến',
      location: '胡志明市古芝縣（距市中心約70公里）',
      locationVi: 'Huyện Củ Chi, TP.HCM (cách trung tâm khoảng 70 km)',
      ticket: '外籍遊客 90,000 ~ 125,000 VND（依入口點不同）',
      ticketVi: 'Vé người nước ngoài: 90.000 - 125.000 VND',
      hours: '07:00 ~ 17:00（全年開放）',
      highlights: '越戰時期越共游擊隊挖掘的長達250公里的地下地道網絡，遊客可親身體驗在狹窄黑暗地道中匍匐爬行，感受越共游擊戰的奧秘與艱苦。戰車殘骸、炸彈陷阱展示、叢林環境體驗。',
      highlightsVi: 'Hệ thống địa đạo dài 250km được quân và dân Củ Chi đào trong kháng chiến, có thể trải nghiệm chui vào đường hầm, tham quan bẫy chông và xem phim tư liệu lịch sử.',
      tips: '建議參加半日遊（約4~5小時）包含來回交通。穿舒適運動服，地道內非常悶熱。Ben Dinh入口更寬，Bến Dược入口更原始。',
      tipsVi: 'Nên tham gia tour nửa ngày bao gồm đưa đón. Mặc quần áo thoải mái, bên trong hầm nóng và chật hẹp.',
      illustrationKey: 'cu_chi_tunnels_illustration'
    },
    {
      id: 'bui_vien_street',
      name: '裴文街（Bùi Viện）夜生活區',
      nameVi: 'Phố Tây Bùi Viện',
      category: '夜生活娛樂',
      categoryVi: 'Ẩm thực - Giải trí đêm',
      location: '第1郡 Bùi Viện 街',
      locationVi: 'Đường Bùi Viện, Quận 1, TP.HCM',
      ticket: '免費',
      ticketVi: 'Miễn phí',
      hours: '18:00 ~ 凌晨3:00',
      highlights: '被稱為胡志明市的「背包客天堂」，全球各地旅人聚集的步行街夜生活地帶。啤酒最低僅15,000 VND（約NT$19），各式現場音樂演出、街頭表演、外國料理與越南小吃攤林立。',
      highlightsVi: 'Con phố du lịch nổi tiếng nhất Sài Gòn với bia hơi rẻ, âm nhạc sống động và bầu không khí quốc tế sôi nổi suốt đêm.',
      tips: '⚠️ 注意個人財物安全，包包正面拎或使用腰包。避免與過度熱情的拉客人員互動。',
      tipsVi: '⚠️ Cảnh giác tài sản cá nhân, không để túi xách ra sau lưng. Cảnh giác người chèo kéo du khách.'
    }
  ],

  // ── 周邊目的地深度介紹
  dayTrips: [
    {
      id: 'vung_tau',
      name: '頭頓（Vũng Tàu）海濱度假',
      nameVi: 'Nghỉ dưỡng biển Vũng Tàu (Bà Rịa - Vũng Tàu)',
      distance: '距胡志明市約130公里，車程2小時',
      distanceVi: 'Cách TP.HCM khoảng 130 km, 2 giờ xe',
      transportOptions: [
        '⛴️ Greenlines DP高速渡輪（120分鐘，$13~17/人，推薦！）',
        '🚌 巴士（Phương Trang，票價130,000~180,000VND，2.5小時）',
        '🚗 自駕：高速公路 Bến Lức - Long Thành，快速舒適'
      ],
      highlights: [
        '基督山（Tượng Chúa Kitô Vua）— 頭頓最著名地標，俯瞰全城海景',
        '後灘（Bãi Sau）— 主要海灘，平靜適合游泳，週末外籍人士聚集',
        '前灘（Bãi Trước）— 漁船停靠處，欣賞日落黃昏，浪漫氛圍',
        '海鮮大排檔（Hải sản tươi sống）— 超新鮮平價海鮮'
      ],
      accommodation: '豐富選擇，Mercury Phu My Hưng（4星），The Imperial Hotel（5星），背包客旅社300,000 VND起',
      bestFor: '週末兩日遊，海鮮饕客，家庭度假',
      illustrationKey: 'vung_tau_beach_illustration'
    },
    {
      id: 'mekong_delta',
      name: '湄公河三角洲（Đồng bằng sông Cửu Long）',
      nameVi: 'Khám phá Đồng bằng sông Cửu Long từ TP.HCM',
      distance: '美拖（Mỹ Tho）距胡志明市約70公里，車程1.5小時',
      distanceVi: 'Mỹ Tho cách TP.HCM khoảng 70 km, 1,5 giờ xe',
      transportOptions: [
        '🚌 參加一日遊套裝行程（US$20~60，含交通+船票+午餐）',
        '🚗 自駕至美拖，再包船遊覽'
      ],
      highlights: [
        '小木舟遊覽椰子果園與熱帶水道',
        '浮動市場（Chợ nổi）— 彩色木船滿載南越熱帶水果',
        '椰子糖工坊（Kẹo dừa）— 親眼目睹椰子糖手工製作',
        '品嚐南越特色小吃：Bánh tráng nướng、Hủ tiếu Mỹ Tho'
      ],
      extendedOptions: '可延伸至吉婆（Bến Tre，椰子之鄉）、永隆（Vĩnh Long）、芹苴（Cần Thơ，最大浮動市場）',
      bestFor: '文化體驗，自然景觀，熱帶水果愛好者，攝影發燒友',
      illustrationKey: 'mekong_delta_illustration'
    },
    {
      id: 'da_lat',
      name: '大叻（Đà Lạt）避暑山城',
      nameVi: 'Du lịch Đà Lạt - Thành phố mộng mơ xứ sở sương mù',
      distance: '距胡志明市約300公里，車程5~6小時或1小時飛機',
      distanceVi: 'Cách TP.HCM 300 km, 5-6 giờ xe hoặc 1 giờ bay',
      transportOptions: [
        '✈️ 越捷航空（VietJet）胡志明→大叻，票價從US$20起，1小時',
        '🚌 臥鋪巴士（Phương Trang），夜班出發，清晨抵達，票價200,000~300,000 VND',
        '🚗 自駕：沿DT723省道，沿途山景壯麗'
      ],
      highlights: [
        '愛情谷（Thung Lũng Tình Yêu）— 湖畔花園，纜車俯視全景',
        '瘋屋（Crazy House / Biệt thự Hằng Nga）— 奇特建築藝術，必打卡',
        'Xuan Huong 春香湖晨霧漫步',
        '達達達達（ Langbiang）山頂健行，海拔2169公尺',
        '草莓園與花卉農場採摘體驗',
        '大叻市夜市（Chợ Đà Lạt đêm）— 在地小吃天堂'
      ],
      specialFood: 'Bánh mì xíu mại、Sữa đậu nành nóng、Bơ đặc sản Đà Lạt（牛油果）、草莓乾、松子咖啡',
      bestFor: '情侶旅遊，攝影創作，花卉愛好者，逃離悶熱海洋性氣候',
      illustrationKey: 'da_lat_mountain_illustration'
    }
  ],

  // ── 美食深度指南
  foodGuide: {
    mustEat: [
      {
        name: '碎米豬排飯（Cơm Tấm）',
        nameVi: 'Cơm tấm sườn bì chả',
        icon: '🍚',
        description: '南越最具代表性的日常主食。細碎的斷米飯配上炭烤豬排（sườn nướng）、豬皮絲（bì）、煎蒸蛋（chả），淋上魚露（nước mắm）醬汁。胡志明市街頭隨處可見。',
        descriptionVi: 'Món ăn đặc trưng nhất Nam Bộ: cơm tấm dẻo thơm ăn kèm sườn nướng than, bì lợn và chả trứng, chan nước mắm pha đặc trưng miền Nam.',
        priceRange: '35,000 ~ 80,000 VND（≈NT$ 44~101）',
        recommendation: '⭐ 三姊妹碎米飯（Cơm Tấm Ba Ghiền）- 第1郡 Hoàng Diệu街',
        michelin: 'Michelin Bib Gourmand 2023 推薦'
      },
      {
        name: '越南河粉（Phở Nam）',
        nameVi: 'Phở bò Nam Bộ',
        icon: '🍜',
        description: '南越版本的河粉以湯底更清甜、加入豆芽與羅勒葉為特色，完全不同於北越濃重的八角肉桂湯底。湯汁清鮮，搭配生牛肉（tái）或燉熟牛腩（chín）均可。',
        descriptionVi: 'Phở miền Nam có nước dùng thanh ngọt hơn phở Bắc, ăn kèm giá đỗ, rau húng, tương hoisin và tương Sriracha.',
        priceRange: '50,000 ~ 120,000 VND（≈NT$ 63~152）',
        recommendation: '⭐ 阿黎（Phở Lệ）- 第5郡 Nguyễn Trãi街，在地人口耳相傳50年老店',
        michelin: 'Michelin Guide Vietnam 2024 掛牌店'
      },
      {
        name: '越式法棍三明治（Bánh Mì）',
        nameVi: 'Bánh mì pate thịt nguội',
        icon: '🥖',
        description: '越南法式麵包融入在地食材的代表性街頭小吃。酥脆法棍麵包填入豬肉火腿、豬肝醬、黃瓜、香菜、酸蘿蔔絲，配上越南辣椒，是最完美的晨間早餐。',
        descriptionVi: 'Ổ bánh mì giòn vỏ Pháp nhồi đầy chả, pate, bơ, dưa leo, rau mùi, đồ chua và ớt tươi - di sản ẩm thực đường phố được cả thế giới công nhận.',
        priceRange: '25,000 ~ 50,000 VND（≈NT$ 32~63）',
        recommendation: '⭐ 黃花（Bánh Mì Huỳnh Hoa）- 第3郡 Lê Thị Riêng街，每天大排長龍的越南最有名Bánh Mì店',
        michelin: 'CNN Travel 全球最佳街頭小吃'
      },
      {
        name: '越南冰咖啡（Cà Phê Sữa Đá）',
        nameVi: 'Cà phê sữa đá Sài Gòn',
        icon: '☕',
        description: '越南滴漏咖啡（phin）與加糖煉乳的完美組合，加入大量冰塊。西貢咖啡豆以Robusta種為主，咖啡因含量極高，口感濃烈苦甜，是胡志明市最深入人心的文化符號。',
        descriptionVi: 'Cà phê phin nhỏ giọt pha với sữa đặc có đường, đổ lên đá lạnh - hương vị đậm đà đặc trưng của Sài Gòn.',
        priceRange: '25,000 ~ 50,000 VND（≈NT$ 32~63）',
        recommendation: '⭐ Công Cà Phê、⭐ The Coffee House、⭐ Highlands Coffee（連鎖普及版）；或任何街邊quán cà phê老店',
        michelin: '越南飲食文化必體驗'
      },
      {
        name: '高台灣麵（Hủ Tiếu Nam Vang）',
        nameVi: 'Hủ tiếu Nam Vang đặc sắc miền Nam',
        icon: '🍝',
        description: '源自柬埔寨金邊的南越米線料理。Q彈米線搭配豬骨熬製清湯、豬肉片、蝦仁、豬肝等多種配料，口感層次豐富，是南越特有的早午餐選擇。',
        descriptionVi: 'Hủ tiếu Nam Vang có xuất xứ từ Phnom Penh, được người Hoa ở miền Nam Việt Nam biến tấu thành món đặc sắc với nước dùng từ xương heo ngọt thanh.',
        priceRange: '50,000 ~ 100,000 VND（≈NT$ 63~126）',
        recommendation: '⭐ 福記（Hủ Tiếu Cali）- 第5郡唐人街區',
        michelin: '胡志明市道地南越早餐'
      }
    ],
    restaurants: {
      fine: [
        { name: 'The Refinery', cuisine: '法式越南融合料理', price: 'USD 30~60/人', location: '第1郡', note: 'Michelin Bib Gourmand 2024，殖民舊建築餐廳，氛圍極佳' },
        { name: 'Anan Saigon', cuisine: '創意現代越南料理', price: 'USD 40~80/人', location: '第1郡', note: 'Michelin 推薦，Chef Peter Cuong Franklin 作品，必訂位' },
        { name: 'Quince Dining', cuisine: '歐式現代料理', price: 'USD 50~100/人', location: 'Thảo Điền，第2郡', note: '外籍人士首選，高端西餐酒吧' }
      ],
      mid: [
        { name: 'Cơm Tấm Thuận Kiều', cuisine: '碎米豬排飯', price: 'VND 50,000~80,000/人', location: '第5郡', note: '在地人老字號，份量超大' },
        { name: 'Nhà Hàng Ngon', cuisine: '越式料理大集合', price: 'VND 120,000~300,000/人', location: '第3郡', note: '旅客友善，菜單多樣，庭院用餐環境' },
        { name: 'Phở 24', cuisine: '連鎖越南河粉', price: 'VND 80,000~150,000/人', location: '全市多點', note: '乾淨衛生，品質穩定，旅客友善' }
      ]
    }
  },

  // ── 住宿指南
  accommodation: {
    luxury: [
      { name: 'Park Hyatt Saigon', stars: 5, location: '第1郡 Lam Sơn廣場', price: 'USD 200~500/晚', highlights: '殖民建築精品，Lam Sơn廣場面對正對，被《Condé Nast Traveler》選為越南最佳酒店' },
      { name: 'The Reverie Saigon', stars: 5, location: '第1郡Times Square大廈', price: 'USD 250~600/晚', highlights: '越南最頂級義大利設計風格奢華酒店，頂樓游泳池眺望城市全景' },
      { name: 'Sofitel Saigon Plaza', stars: 5, location: '第3郡', price: 'USD 150~350/晚', highlights: '法式奢華品牌，地理位置絕佳，設施完善' }
    ],
    midRange: [
      { name: 'Liberty Central Saigon Riverside', stars: 4, location: '第1郡西貢河畔', price: 'USD 80~150/晚', highlights: '絕佳河景，設施現代，性價比極高' },
      { name: 'Silverland Jolie Hotel & Spa', stars: 4, location: '第1郡', price: 'USD 60~120/晚', highlights: '本土精品連鎖，多間胡志明市地點可選' },
      { name: 'A&Em Grand Hotel 19', stars: 3, location: '第1郡', price: 'USD 40~80/晚', highlights: '越南本土精品商旅，中心地帶，CP值高' }
    ],
    budget: [
      { name: 'The Common Room Project', stars: null, location: '第1郡', price: 'USD 10~25/晚（床位）', highlights: '設計感背包客青旅，社交氛圍活躍，靠近Bùi Viện' },
      { name: 'Lavender Boutique Hotel', stars: 3, location: '第3郡', price: 'USD 25~50/晚', highlights: '台灣旅客常選，中文服務，乾淨舒適' }
    ]
  },

  // ── 交通指南
  transportation: {
    getting_around: [
      {
        mode: 'Grab（胡志明市計程車 App）',
        modeVi: 'Grab - Ứng dụng gọi xe',
        desc: '東南亞版Uber，胡志明市最方便的交通工具。可叫計程車（GrabCar）、機車（GrabBike）和三輪車（GrabTuk）。透明定價，無刁難外國人問題。',
        descVi: 'Ứng dụng đặt xe phổ biến nhất Đông Nam Á, bao gồm GrabCar, GrabBike và GrabFood. Giá cố định, không mặc cả.',
        priceRange: '計程車基本起跳約20,000 VND，市區跑5公里約100,000~150,000 VND',
        tip: '📱 必裝App，刷信用卡付款或越南錢包結帳。機場至市中心約200,000~300,000 VND。'
      },
      {
        mode: '胡志明市地鐵一號線（Metro Line 1）',
        modeVi: 'Tuyến Metro số 1 TP.HCM',
        desc: '2024年正式全線通車！從Bến Thành（第1郡中心）到 Suối Tiên（第9郡）全長19.7公里，是胡志明市首條地鐵線。對台灣旅客而言，可直達統一宮、濱城市場等景點附近。',
        descVi: 'Tuyến Metro số 1 chính thức khai thác năm 2024, dài 19,7 km từ Bến Thành đến Suối Tiên. Vé lượt 15.000 - 20.000 VND.',
        priceRange: '單程票 15,000~20,000 VND（≈NT$ 19~25）',
        tip: '🚇 目前只有一條線，覆蓋範圍有限。未來多條路線規劃至2035年完成。'
      },
      {
        mode: '公共巴士（Xe buýt）',
        modeVi: 'Xe buýt công cộng TP.HCM',
        desc: '胡志明市公車路網覆蓋面廣，票價超便宜（6,000~8,000 VND），但非常擁擠且不準時，建議觀光客搭乘Grab為主，公車適合長住在地人。',
        descVi: 'Hệ thống xe buýt phủ khắp TP.HCM với vé rất rẻ 6.000-8.000 VND nhưng thường đông đúc và chậm giờ.',
        priceRange: '票價 6,000~8,000 VND',
        tip: '對初次訪客不建議，路線複雜且車廂擁擠。'
      },
      {
        mode: '越南國內航班',
        modeVi: 'Chuyến bay nội địa',
        desc: '前往大叻、峴港、河內等遠途目的地，越捷（VietJet）、竹航（Bamboo）、越南航空（Vietnam Airlines）提供頻繁的內陸航班。',
        descVi: 'Các hãng hàng không nội địa như VietJet, Bamboo Airways, Vietnam Airlines khai thác nhiều chuyến bay từ Tân Sơn Nhất.',
        priceRange: '大叻：US$15~50，河內：US$25~80（依時段和提前購票日數）',
        tip: '✈️ 越捷Vietjet航空促銷票便宜但行李費高，行李超過15公斤必須加購。'
      }
    ],
    airport: {
      name: '新山一國際機場（Sân bay Tân Sơn Nhất）',
      nameVi: 'Sân bay Quốc tế Tân Sơn Nhất (SGN)',
      code: 'IATA: SGN',
      distanceToCenter: '距市中心約7公里',
      taxiToCenter: 'Grab叫車：約200,000~300,000 VND（≈NT$ 252~379）',
      metroBusOption: '機場快線巴士49B：35,000 VND，到濱城市場（Bến Thành），但行李多不建議',
      newAirport: '📣 2026年隆城國際機場（Sân bay Long Thành）二期工程動工，預計2030年部分啟用',
      note: '新山一機場目前嚴重超載（年旅客超過4,000萬），請提前3小時抵達機場，旺季更需留意延誤風險。'
    }
  },

  // ── 購物與市集
  shopping: {
    markets: [
      { name: '濱城夜市（Chợ Đêm Bến Thành）', desc: '傍晚18:00開市，攤商沿著濱城市場外圍擺出，主打紀念品、衣物、小吃，比白天市場更熱鬧輕鬆', bestBuy: '紀念品T恤（50,000~100,000VND）、腰果（Hạt điều）、越南咖啡豆' },
      { name: 'An Dong市場（Chợ An Đông）', desc: '第5郡唐人街區最大批發零售市場，布料、成衣、配件為主，台商採購常駐地', bestBuy: '布料、成衣批發，價格最便宜' },
      { name: 'Saigon Centre / Vincom Center', desc: '第1郡現代商場，國際品牌雲集，是躲避午後大雨的好去處', bestBuy: '越南本土品牌（Elise、Canifa）、電子產品' }
    ],
    souvenirs: [
      '越南咖啡豆（Café Trung Nguyên / G7 咖啡包裝禮盒）',
      '漆器藝品（Sơn mài）和螺鈿工藝品',
      '越南絲巾與奧黛（Áo dài）布料',
      '腰果（Hạt điều）與芒果乾（Xoài sấy）等乾果禮盒',
      '丁克（Đình Kế）香草鹽和胡椒禮盒（特產自Phú Quốc富國島）',
      'SJC 越南黃金幣（限量版紀念品）'
    ]
  },

  // ── 安全須知
  safety: {
    generalSafety: '胡志明市治安總體良好，針對旅客的暴力事件較少，但需注意：',
    tips: [
      '⚠️ 機車搶包（Cướp giật）是最主要威脅：不要在路邊使用手機，包包勿掛在朝向馬路的單肩，建議使用貼身腰包',
      '💰 換匯建議在銀行或認可珠寶金行（tiệm vàng）進行，機場匯率差，避免非法街頭換匯',
      '🦠 食物衛生：選擇看起來衛生、人多的攤位。街邊小吃冰塊用的是裝袋工廠冰，比餐廳零碎冰安全',
      '☀️ 防曬防中暑：胡志明市全年均溫30~35°C，外出必備防曬品、遮陽帽與補水飲料',
      '🏨 住宿建議選有接送服務的酒店，深夜返回酒店使用Grab比隨機搭計程車更安全',
      '📱 必備App：Grab（交通）、Google Maps（導航）、Google Translate（越南文翻譯）'
    ],
    emergencyNumbers: [
      '警察 (Cảnh sát): 113',
      '救護車 (Cấp cứu): 115',
      '消防 (Cứu hoả): 114',
      '台灣人急難協助熱線（駐胡志明市台北辦事處）: +84-28-3825-2230'
    ]
  }
};

// ── 8. 越南總體政經必備漢越詞彙對照庫 (Bilingual Lexicon) ──

// ── 7D. 北越河內與紅河三角洲區域發展戰略庫 (Northern Regional Strategy Data - Bilingual) ──
export const northVietnamDevelopmentData = {
  // 區域綜述與重大政策
  regionalOverview: {
    title: '北越河內與紅河三角洲區域戰略發展全圖',
    titleVi: 'Chiến lược phát triển Vùng kinh tế Thủ đô Hà Nội & Đồng bằng sông Hồng',
    desc: '以河內《首都法》特權政策為龍頭，貫通中越1,435mm標準軌鐵路、海防瀝縣深水港、500kV三迴線保電工程，打造全球半導體OSAT與AI伺服器製造第一高地。',
    descVi: 'Đầu tàu Luật Thủ đô Hà Nội, kết nối đường sắt tiêu chuẩn 1.435mm, cảng biển nước sâu Lạch Huyện và đường dây 500kV mạch 3 tạo động lực cho chuỗi bán dẫn & AI.',
    provinces: ['河內市（Hà Nội）', '北寧省（Bắc Ninh）', '北江省（Bắc Giang）', '海防市（Hải Phòng）', '廣寧省（Quảng Ninh）', '永福省（Vĩnh Phúc）', '南定省（Nam Định）', '太原省（Thái Nguyên）'],
    provincesVi: ['TP. Hà Nội', 'Tỉnh Bắc Ninh', 'Tỉnh Bắc Giang', 'TP. Hải Phòng', 'Tỉnh Quảng Ninh', 'Tỉnh Vĩnh Phúc', 'Tỉnh Nam Định', 'Tỉnh Thái Nguyên']
  },

  // 首都法與地方治理特權
  capitalLaw2024: {
    title: '2024年修訂版《首都法》（Luật Thủ đô，2025年1月1日正式實施）',
    titleVi: 'Luật Thủ đô sửa đổi 2024 (Hiệu lực từ 01/01/2025)',
    summary: '越南國會賦予河內市史上最高的行政與財政自主權，推動「紅河景觀軸線」與「TOD大眾運輸導向城市開發」，對高科技引資與高端外籍人才實施前所未有的特惠政策。',
    summaryVi: 'Quốc hội trao quyền tự chủ đặc thù tối đa cho Hà Nội: Phát triển đô thị TOD, thu hút nhân tài khoa học công nghệ và thành lập Khu công nghệ cao Hòa Lạc.',
    keyPoints: [
      {
        title: 'TOD 軌道交通土地綜合開發',
        titleVi: 'Mô hình TOD dọc các tuyến đường sắt đô thị',
        desc: '允許河內市政府自主徵收並拍賣地鐵車站周邊土地，土地出讓收益100%全額留存河內市財政，專款專用於加速建設14條地鐵路網。'
      },
      {
        title: '高科技研發戰略人才稅負全免',
        titleVi: 'Miễn thuế TNDN & TNCN cho nhân lực chất lượng cao',
        desc: '在和樂高科技園區（Hòa Lạc）從事晶片設計、生物醫藥、AI研發的外籍專家與戰略科學家，享有所得稅全額減免及住房補貼。'
      },
      {
        title: '行政許可直接下放市人委會',
        titleVi: 'Phân cấp triệt để thẩm quyền chấp thuận chủ trương đầu tư',
        desc: '規模5萬億越盾以下之重大工業與城建專案，免經中央部會漫長會審，由河內市人民委員會直接一站式核發投資執照（IRC）。'
      }
    ]
  },

  // 北越重大基礎建設大動脈
  infrastructurePillars: [
    {
      id: 'railway_1435',
      name: '中越老街－河內－海防 1,435mm 標準軌鐵路',
      nameVi: 'Tuyến đường sắt Lào Cai - Hà Nội - Hải Phòng khổ 1.435mm',
      investment: '289.34 萬億越盾（約 110.5 億美元，國會2026年最新調增）',
      investmentVi: '289.340 tỷ đồng (khoảng 11,05 tỷ USD, Quốc hội điều chỉnh 2026)',
      timeline: '2025年12月19日站前工程開工 · 2030年全線通車',
      timelineVi: 'Khởi công 19/12/2025 · Hoàn thành trước năm 2030',
      specs: '正線全長 363.3 km ＋ 支線 63.3 km · 雙線電氣化 · 客運 160 km/h · 貨運 120 km/h',
      specsVi: 'Tuyến chính 363,3 km + tuyến nhánh 63,3 km · Đường đôi điện khí hóa · Tốc độ 160/120 km/h',
      impact: '貫穿中越邊境河口口岸直通海防瀝縣深水港，終結百年米軌換軌歷史，昆明與西南大宗貨物可一車到底直航出海。',
      impactVi: 'Kết nối liên vận quốc tế với Trung Quốc qua cửa khẩu Lào Cai, vận chuyển hàng hóa thẳng ra cảng nước sâu Lạch Huyện.'
    },
    {
      id: 'power_500kv_circuit3',
      name: '500kV 廣澤－浦內第三迴路輸電幹線（519公里）',
      nameVi: 'Đường dây 500kV mạch 3 Quảng Trạch - Phố Nối (519 km)',
      investment: '22.3 萬億越盾（由越南輸電總公司 EVNNPT 投資）',
      investmentVi: '22.300 tỷ đồng (EVNNPT làm chủ đầu tư)',
      timeline: '已全線竣工通電運營 · 創造國家級超高壓電網建設奇蹟',
      timelineVi: 'Đã hoàn thành đóng điện vận hành toàn tuyến',
      specs: '全長 519 km · 跨越 9 省 · 輸電容量由 2,200 MW 提升至 5,000 MW',
      specsVi: 'Dài 519 km qua 9 tỉnh thành · Nâng năng lực truyền tải lên 5.000 MW',
      impact: '將中部和南部豐富的再生能源與火電大容量直送北越，徹底解除三星、鴻海、力積電工廠夏季停電夢魘。',
      impactVi: 'Giải quyết triệt để nguy cơ thiếu điện cục bộ miền Bắc, bảo đảm an ninh năng lượng cho chuỗi cung ứng toàn cầu.'
    },
    {
      id: 'lach_huyen_port',
      name: '海防瀝縣國際深水港碼頭擴建（Berths 3-6）',
      nameVi: 'Cảng nước sâu Lạch Huyện - Bến 3 đến bến 6',
      investment: '逾 30 萬億越盾（海防港股份公司與海軍西貢新港聯貸）',
      investmentVi: 'Trên 30.000 tỷ đồng (Cảng Hải Phòng & Tân Cảng Sài Gòn)',
      timeline: '3、4號碼頭試營運 · 5、6號碼頭2026年全面驗收',
      timelineVi: 'Bến 3, 4 khai thác thử nghiệm · Bến 5, 6 hoàn tất 2026',
      specs: '可接泊 100,000 ~ 132,000 DWT 超巴拿馬型貨櫃巨輪（8,000 ~ 14,000 TEU）',
      specsVi: 'Tiếp nhận tàu container sức chở 8.000 - 14.000 TEU (132.000 DWT)',
      impact: '貨櫃自北越工廠直發美西洛杉磯或歐洲鹿特丹，無需再轉運香港或新加坡，節省4~7天航程與大量轉運費。',
      impactVi: 'Tàu mẹ đi thẳng bờ Tây Hoa Kỳ và châu Âu không qua trung chuyển, tiết kiệm 4-7 ngày hải trình.'
    },
    {
      id: 'hanoi_ring_road_4',
      name: '河內首都圈四環路高速公路 (Vành đai 4 Vùng Thủ đô)',
      nameVi: 'Dự án đường Vành đai 4 - Vùng Thủ đô Hà Nội',
      investment: '85.8 萬億越盾（PPP 公私協力模式）',
      investmentVi: '85.800 tỷ đồng (Hình thức PPP)',
      timeline: '2023年動工 · 預計2027年全線通車',
      timelineVi: 'Khởi công 2023 · Dự kiến khai thác toàn tuyến 2027',
      specs: '全長 112.8 km，串聯河內（58km）、興安（19km）、北寧（25km）三大核心工業重鎮',
      specsVi: 'Dài 112,8 km kết nối Hà Nội, Hưng Yên và Bắc Ninh',
      impact: '將北寧與興安的大批電子零組件載運時間縮短60%，繞開河內市中心尖峰塞車堵塞。',
      impactVi: 'Tái cơ cấu không gian phát triển, kết nối mạng lưới cao tốc hướng tâm và giảm tải cho nội đô.'
    }
  ],

  // 北越六大高科技半導體與AI製造聚落
  highTechClusters: [
    {
      province: '北寧省（Bắc Ninh）',
      provinceVi: 'Tỉnh Bắc Ninh',
      role: '全球半導體封裝測試與電子組裝第一聚落',
      roleVi: 'Trung tâm đóng gói bán dẫn & lắp ráp điện tử',
      tenants: 'Amkor Technology ($1.6B 先進封測)、Foxconn (鴻海)、GoerTek (歌爾泰)、Samsung Display',
      highlights: '全越人均GDP最高省份之一，半導體後段製程產值全越第一，工業區入住率90%以上。',
      rentUsd: '$3.5 ~ $4.5/㎡/月',
      advantage: '鄰近河內內排機場（Noi Bai），空運高附加價值半導體晶片僅需45分鐘。'
    },
    {
      province: '北江省（Bắc Giang）',
      provinceVi: 'Tỉnh Bắc Giang',
      role: 'AI伺服器零組件與晶片封裝新基地',
      roleVi: 'Cứu cánh sản xuất linh kiện AI & đóng gói chip nhớ',
      tenants: 'Hana Micron ($1B 晶片封測)、鴻海富康科技 ($350M+ AI光通訊)、Luxshare (立訊精密)',
      highlights: '台商與韓商近年擴廠首選，土地儲備充足，與廣西憑祥接壤物流通暢。',
      rentUsd: '$2.8 ~ $3.8/㎡/月',
      advantage: '直接承接北寧外溢效應，勞動力供應充沛且工資較河內市區低15%~20%。'
    },
    {
      province: '海防市（Hải Phòng）',
      provinceVi: 'TP. Hải Phòng',
      role: '北方第一大港、汽車與重工業重鎮',
      roleVi: 'Thủ phủ cảng biển, công nghiệp ô tô & điện tử',
      tenants: 'LG Group ($8.2B 系列工廠：LG Display/LG Electronics)、VinFast (電動車超大型基地)、Pegatron (和碩)',
      highlights: '擁有瀝縣深水港與廷武保稅物流區，海運進出口零時差，享受沿海經濟特區最優稅收。',
      rentUsd: '$3.8 ~ $5.0/㎡/月',
      advantage: '深水港通航能力無可取代，可直接容納萬箱級大貨櫃輪。'
    },
    {
      province: '永福省（Vĩnh Phúc）',
      provinceVi: 'Tỉnh Vĩnh Phúc',
      role: 'AI伺服器雲端算力硬體與精密汽車零件',
      roleVi: 'Trung tâm máy chủ AI & phụ tùng ô tô xe máy',
      tenants: 'Compal (仁寶電腦 AI伺服器工廠)、Toyota、Honda、台灣精密機械聚落',
      highlights: '仁寶電腦重倉投資打造全球AI伺服器主力工廠，供應微軟、亞馬遜、谷歌雲端基礎設施。',
      rentUsd: '$3.0 ~ $4.0/㎡/月',
      advantage: '老牌日台商製造基地，高素質工程技師儲備充足，緊鄰河內市北門戶。'
    },
    {
      province: '南定省（Nam Định）',
      provinceVi: 'Tỉnh Nam Định',
      role: '廣達全球筆記型電腦與雲端設備基地',
      roleVi: 'Trung tâm máy tính xách tay Quanta Computer',
      tenants: 'Quanta Computer (廣達電腦 $240M 二期工廠)、Toray、長春石化等',
      highlights: '全球NB代工龍頭廣達在越南唯一的策略基地，帶動數十家台灣一級被動元件與線材配套廠進駐。',
      rentUsd: '$2.2 ~ $3.0/㎡/月',
      advantage: '紅河三角洲南緣新興開發區，勞動力充沛且用工成本極具優勢。'
    },
    {
      province: '廣寧省（Quảng Ninh）',
      provinceVi: 'Tỉnh Quảng Ninh',
      role: '綠能發電、高科技電源與汽車線束',
      roleVi: 'Năng lượng xanh & linh kiện điện tử nguồn',
      tenants: 'Lite-On (光寶科技 $1.2B)、Jinko Solar (晶科能源 $1.5B)、Foxconn 廣寧廠',
      highlights: '連續多年蟬聯越南省級競爭力指數（PCI）全國第一名，行政審批效率全國最快。',
      rentUsd: '$2.5 ~ $3.5/㎡/月',
      advantage: '毗鄰中國芒街口岸與下龍灣物流軸，地方政府招商主動性極高。'
    }
  ],

  // 南越 vs 北越 投資戰略環境全方位對比矩陣
  regionalComparisonMatrix: [
    {
      dimension: '地理與供應鏈銜接',
      dimensionVi: 'Vị trí & Chuỗi cung ứng',
      north: '與中國陸路接壤（老街/同登/芒街），零組件 12~24 小時卡車直達，最適合「中國+1」佈局。',
      south: '遠離中國邊境，海運原物料需 3~5 天；但緊鄰東協航運心臟馬六甲海峽。'
    },
    {
      dimension: '電力供應與穩定性',
      dimensionVi: 'Nguồn điện & Độ tin cậy',
      north: '500kV三迴線已通電，供電穩定度回升至 99.9%；有直接購電（DPPA）綠電合約支持。',
      south: '歷史供電極為穩定，水電、火電與天然氣發電網絡充沛，幾乎無停電風險。'
    },
    {
      dimension: '港口航運條件',
      dimensionVi: 'Hạ tầng cảng biển',
      north: '海防瀝縣深水港（13.2萬噸級），直航美西與歐洲；另有河內內排空運樞紐。',
      south: '巴地頭頓蓋梅-氏布深水港（25萬噸級超母船），未來有49億美元芹苴國際轉運港。'
    },
    {
      dimension: '主導產業群落',
      dimensionVi: 'Cụm ngành thống trị',
      north: '半導體封裝測試（Amkor/Hana）、AI伺服器（鴻海/廣達/仁寶）、智慧手機（三星）。',
      south: '精密製造、商業貿易、高科技研發（SHTP/Intel）、金融服務、化工紡織、鞋業食品。'
    },
    {
      dimension: '工業用地與廠房租金',
      dimensionVi: 'Giá thuê đất & Nhà xưởng',
      north: '$120 ~ $180/㎡/租期（北寧/海防核心偏高，南定/廣寧約 $90~$120）。',
      south: '$130 ~ $220/㎡/租期（胡志明/平陽核心緊缺，龍安與西寧約 $100~$140）。'
    },
    {
      dimension: '勞動工資與人力儲備',
      dimensionVi: 'Lao động & Chi phí nhân công',
      north: '工資略低（約南越 90%~95%），理工科工程師基礎紮實（河內各名牌理工大學密集）。',
      south: '工資稍高，外語人才與國際商務經理人充沛，服務業成熟，流動性較高。'
    }
  ]
};

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
  },
  // 類別 4: 台灣官方與在越經貿組織 (Taiwanese Bilateral Trade & Official Channels)
  {
    id: 'ref_ctcvn',
    category: 'taiwan',
    categoryLabel: '台商組織與外貿',
    categoryLabelVi: 'Tổ chức Doanh nghiệp Đài Loan',
    name: '越南台灣商會聯合總會 (CTCVN)',
    nameVi: 'Hiệp hội Thương nhân Đài Loan tại Việt Nam (CTCVN)',
    org: 'Council of Taiwanese Chambers of Commerce in Vietnam',
    url: 'https://www.ctcvn.vn',
    domain: 'ctcvn.vn',
    freq: '即時 / 週度',
    freqVi: 'Hàng tuần',
    scope: '全越16個分會即時動態、薪資調查、勞動部會商、稅務查檢通報、重大政策研討會。',
    scopeVi: 'Thông tin 16 chi hội, khảo sát tiền lương, đối thoại chính sách và hỗ trợ doanh nhân.'
  },
  {
    id: 'ref_teco_hanoi',
    category: 'taiwan',
    categoryLabel: '台商組織與外貿',
    categoryLabelVi: 'Tổ chức Doanh nghiệp Đài Loan',
    name: '駐越南台北經濟文化辦事處 (TECO 河內)',
    nameVi: 'Văn phòng Kinh tế Văn hóa Đài Bắc tại Hà Nội',
    org: 'Taipei Economic and Cultural Office in Vietnam',
    url: 'https://www.roc-taiwan.org/vn',
    domain: 'roc-taiwan.org/vn',
    freq: '即時 (Real-time)',
    freqVi: 'Thời gian thực',
    scope: '台灣官方駐越代表機構，雙邊投資協定、官方經貿法規分析、台商權益保障與領事服務。',
    scopeVi: 'Cơ quan đại diện chính thức của Đài Loan, xúc tiến đầu tư và bảo hộ thương nhân.'
  },
  {
    id: 'ref_teco_hcmc',
    category: 'taiwan',
    categoryLabel: '台商組織與外貿',
    categoryLabelVi: 'Tổ chức Doanh nghiệp Đài Loan',
    name: '駐胡志明市台北經濟文化辦事處 (TECO 胡志明)',
    nameVi: 'Văn phòng Kinh tế Văn hóa Đài Bắc tại TP.HCM',
    org: 'Taipei Economic and Cultural Office in HCMC',
    url: 'https://www.roc-taiwan.org/vnsgn',
    domain: 'roc-taiwan.org/vnsgn',
    freq: '即時 (Real-time)',
    freqVi: 'Thời gian thực',
    scope: '南越台商第一線服務總部，緊急協助、投資法令諮詢、南越台商糾紛調解與商務驗證。',
    scopeVi: 'Đầu mối hỗ trợ doanh nghiệp FDI Đài Loan tại các tỉnh thành phía Nam.'
  },
  {
    id: 'ref_taitra',
    category: 'taiwan',
    categoryLabel: '台商組織與外貿',
    categoryLabelVi: 'Tổ chức Doanh nghiệp Đài Loan',
    name: '外貿協會胡志明市 / 河內台灣貿易中心 (TAITRA)',
    nameVi: 'Trung tâm Xúc tiến Thương mại Đài Loan (TAITRA)',
    org: 'Taiwan Trade Center in Vietnam',
    url: 'https://vietnam.taiwantrade.com',
    domain: 'taiwantrade.com',
    freq: '即時 / 月度',
    freqVi: 'Hàng tháng',
    scope: '台越雙邊貿易採購媒合、台灣精品展、供應鏈商機拓銷、工業展會台商展團。',
    scopeVi: 'Kết nối giao thương B2B, xúc tiến xuất khẩu và hội chợ công nghiệp quốc tế.'
  },
  {
    id: 'ref_tita_moea',
    category: 'taiwan',
    categoryLabel: '台商組織與外貿',
    categoryLabelVi: 'Tổ chức Doanh nghiệp Đài Loan',
    name: '經濟部國際貿易署-越南專區',
    nameVi: 'Cục Thương mại Quốc tế - Bộ Kinh tế Đài Loan (TITA)',
    org: 'International Trade Administration, MOEA Taiwan',
    url: 'https://www.trade.gov.tw',
    domain: 'trade.gov.tw',
    freq: '即時 (Real-time)',
    freqVi: 'Liên tục',
    scope: '全球經貿資訊網越南經貿情勢報告、美國防規避調查預警、台越雙邊貿易統計。',
    scopeVi: 'Báo cáo tình hình kinh tế Việt Nam, cảnh báo phòng vệ thương mại quốc tế.'
  },
  {
    id: 'ref_esun_hcmc',
    category: 'taiwan',
    categoryLabel: '台商組織與外貿',
    categoryLabelVi: 'Tổ chức Doanh nghiệp Đài Loan',
    name: '玉山銀行越南分行 (E.SUN Bank Vietnam)',
    nameVi: 'Ngân hàng E.SUN Việt Nam',
    org: 'E.SUN Commercial Bank Vietnam',
    url: 'https://www.esunbank.com/bank/about/locations/overseas/vietnam',
    domain: 'esunbank.com',
    freq: '即時牌告',
    freqVi: 'Hàng ngày',
    scope: '台商DICA資本金專戶開設指引、TWD/VND直接結售匯牌價、企業跨境理財服務。',
    scopeVi: 'Tài khoản vốn đầu tư FDI, tỷ giá giao dịch song phương và giải pháp tài chính.'
  },
  {
    id: 'ref_mega_hcmc',
    category: 'taiwan',
    categoryLabel: '台商組織與外貿',
    categoryLabelVi: 'Tổ chức Doanh nghiệp Đài Loan',
    name: '兆豐銀行胡志明市分行 (Mega Bank Vietnam)',
    nameVi: 'Ngân hàng Mega ICBC Chi nhánh TP.HCM',
    org: 'Mega International Commercial Bank HCMC',
    url: 'https://www.megabank.com.tw',
    domain: 'megabank.com.tw',
    freq: '每日牌價',
    freqVi: 'Hàng ngày',
    scope: '跨國貿易融資、信用狀（L/C）開立、美元與越盾大型聯貸案主辦業務。',
    scopeVi: 'Tài trợ thương mại quốc tế, mở L/C và thu xếp vốn tín dụng ngoại tệ.'
  },
  {
    id: 'ref_ctbc_hcmc',
    category: 'taiwan',
    categoryLabel: '台商組織與外貿',
    categoryLabelVi: 'Tổ chức Doanh nghiệp Đài Loan',
    name: '中國信託越南分行 (CTBC Vietnam)',
    nameVi: 'Ngân hàng CTBC Chi nhánh TP.HCM',
    org: 'CTBC Bank Co., Ltd. Vietnam',
    url: 'https://www.ctbcbank.com',
    domain: 'ctbcbank.com',
    freq: '即時服務',
    freqVi: 'Liên tục',
    scope: '科技大廠外幣聯貸、現金管理池、外派幹部海外薪資帳戶與私人財富管理。',
    scopeVi: 'Tín dụng doanh nghiệp công nghệ cao, quản trị vốn lưu động và dịch vụ cá nhân.'
  },

  // 類別 5: 產業與法規智庫 (Industrial Regulators & Research Think Tanks)
  {
    id: 'ref_moit',
    category: 'gov',
    categoryLabel: '政府與央行',
    categoryLabelVi: 'Cơ quan Nhà nước & NHTW',
    name: '越南工商部 (MOIT)',
    nameVi: 'Bộ Công Thương Việt Nam (MOIT)',
    org: 'Ministry of Industry and Trade of Vietnam',
    url: 'https://moit.gov.vn',
    domain: 'moit.gov.vn',
    freq: '即時 (Real-time)',
    freqVi: 'Thời gian thực',
    scope: '第八版電力規劃（PDP8）、直接購電協議（DPPA）發布、進出口原產地證（C/O）管理。',
    scopeVi: 'Quy hoạch điện VIII, cơ chế DPPA, quản lý xuất xứ hàng hóa C/O và xúc tiến công nghiệp.'
  },
  {
    id: 'ref_evn',
    category: 'gov',
    categoryLabel: '政府與央行',
    categoryLabelVi: 'Cơ quan Nhà nước & NHTW',
    name: '越南電力集團 (EVN)',
    nameVi: 'Tập đoàn Điện lực Việt Nam (EVN)',
    org: 'Vietnam Electricity (EVN)',
    url: 'https://www.evn.com.vn',
    domain: 'evn.com.vn',
    freq: '即時電網監控',
    freqVi: 'Hàng ngày',
    scope: '500kV三迴線輸電監測、全越工業用電尖離峰時段費率表、再生能源併網公告。',
    scopeVi: 'Vận hành hệ thống điện quốc gia, biểu giá bán lẻ điện sản xuất và năng lượng sạch.'
  },
  {
    id: 'ref_vietnam_briefing',
    category: 'media',
    categoryLabel: '權威財經媒體',
    categoryLabelVi: 'Báo chí & Truyền thông',
    name: 'Vietnam Briefing (Dezan Shira & Associates)',
    nameVi: 'Vietnam Briefing - Dezan Shira',
    org: 'Dezan Shira & Associates',
    url: 'https://www.vietnam-briefing.com',
    domain: 'vietnam-briefing.com',
    freq: '每週 (Weekly)',
    freqVi: 'Hàng tuần',
    scope: '全球最低稅負在越實施、外商勞檢工作許可、投資支持基金法令專業法律剖析。',
    scopeVi: 'Phân tích pháp lý chuyên sâu về thuế, nhân sự, FDI và quy định thương mại.'
  },
  {
    id: 'ref_ssi_research',
    category: 'banking',
    categoryLabel: '金融與行庫',
    categoryLabelVi: 'Ngân hàng & Tài chính',
    name: 'SSI 證券智庫研究部 (SSI Research)',
    nameVi: 'Bộ phận Nghiên cứu & Phân tích - Chứng khoán SSI',
    org: 'SSI Securities Corporation',
    url: 'https://www.ssi.com.vn',
    domain: 'ssi.com.vn',
    freq: '每週 / 月度報告',
    freqVi: 'Báo cáo tuần / tháng',
    scope: '越南宏觀經濟深度報告、銀行業淨利差（NIM）預測、工業地產租金回報率分析。',
    scopeVi: 'Báo cáo chiến lược vĩ mô, định giá cổ phiếu, ngành ngân hàng và bất động sản KCN.'
  }
];

// ── 10. 雙語國際化字典 (Macro UI Localization Dictionary - zh / vi) ──

// ── 9B. 官方情報取得渠道與未來高效更新標準指南 (Intelligence Channels & SOP Register) ──
export const intelligenceChannelsSop = {
  title: '越南政經情報來源取得渠道與未來高效更新標準指南 (Future Maintenance SOP)',
  titleVi: 'Quy trình chuẩn hóa tra cứu và cập nhật dữ liệu vĩ mô định kỳ',
  desc: '為確保未來維護本專案數據庫具備最高效率與官方可信度，特梳理本情報取得 SOP 規範，明確各機構資訊釋放節奏、核心抓取路徑與交叉驗證方法。',
  descVi: 'Hướng dẫn quy chuẩn tra cứu, cập nhật dữ liệu vĩ mô chính xác, nhanh chóng từ các nguồn chính thống.',
  rhythms: [
    {
      period: '每日 08:30 ~ 09:30（即時盤中）',
      periodVi: 'Hàng ngày (08:30 - 09:30)',
      target: '央行中心匯率、商業銀行牌告匯率、SJC 黃金官方直售價',
      targetVi: 'Tỷ giá trung tâm SBV, niêm yết ngân hàng thương mại, giá vàng SJC',
      channel: '越南國家銀行 (SBV 官網首頁) ＋ Vietcombank 牌告匯率專區 ＋ 臺灣銀行牌告匯率',
      urls: ['https://www.sbv.gov.vn', 'https://www.vietcombank.com.vn', 'https://rate.bot.com.tw'],
      actionZh: '記錄 SBV 每日中心匯率（Tỷ giá trung tâm）與計算 ±5% 上下限（Trần/Sàn）。至 VCB 抓取 USD/VND 與 TWD/VND 現匯買賣價。',
      actionVi: 'Ghi nhận tỷ giá trung tâm và tính biên độ trần/sàn ±5%. Tra cứu tỷ giá mua/bán USD và TWD tại Vietcombank.'
    },
    {
      period: '每半個月（15日與次月初）',
      periodVi: 'Định kỳ 15 ngày & đầu tháng',
      target: '越南海關進出口即時通關速報、貨物貿易順逆差',
      targetVi: 'Báo cáo tình hình xuất nhập khẩu Tổng cục Hải quan',
      channel: '越南海關總局（Tổng cục Hải quan）統計公報專題',
      urls: ['https://www.customs.gov.vn'],
      actionZh: '下載海關半月期（Kỳ 1 / Kỳ 2）進出口統計速報，提取累計進出口總額、貿易順差、對美順差及電子零組件進口額。',
      actionVi: 'Tải báo cáo nhanh XNK kỳ 1 và kỳ 2, cập nhật kim ngạch xuất siêu lũy kế và các nhóm hàng chủ lực.'
    },
    {
      period: '每月 28 ~ 30 日（月度總經）',
      periodVi: 'Ngày 28-30 hàng tháng',
      target: '統計總局總經月報（GDP、CPI、IIP、零售）、計畫投資部 FDI 統計',
      targetVi: 'Báo cáo kinh tế xã hội GSO & tình hình thu hút vốn FDI từ Bộ KH&ĐT',
      channel: '越南統計總局 (GSO) ＋ 越南投資報 (Báo Đầu tư)',
      urls: ['https://www.gso.gov.vn', 'https://baodautu.vn', 'https://www.mpi.gov.vn'],
      actionZh: '抓取 GSO 月度社會經濟情勢報告（Báo cáo tình hình kinh tế - xã hội）。記錄累計 FDI 註冊資金與實際到位資金，核對 CPI 通膨年增率。',
      actionVi: 'Thu thập báo cáo KT-XH tháng của GSO, số liệu FDI đăng ký mới & giải ngân, chỉ số CPI và sản xuất công nghiệp IIP.'
    },
    {
      period: '每季度末（3/6/9/12月下旬）',
      periodVi: 'Cuối mỗi quý',
      target: '季度實質 GDP 成長率、央行貨幣政策會議、銀行業信用額度（Room）',
      targetVi: 'Tăng trưởng GDP quý, điều hành chính sách tiền tệ và tăng trưởng tín dụng',
      channel: 'GSO 季度統計發布會 ＋ 越南政府電子門戶 (VGP) ＋ VnEconomy',
      urls: ['https://baochinhphu.vn', 'https://vneconomy.vn'],
      actionZh: '更新五季度 GDP 柱狀圖數據點、SBV 再融資利率與存款準備率是否有調整公告。',
      actionVi: 'Cập nhật số liệu tăng trưởng GDP quý, rà soát quyết định lãi suất điều hành và thông tư mới của SBV.'
    },
    {
      period: '重大政策突發／議定頒布時',
      periodVi: 'Khi có văn bản pháp luật mới',
      target: '總理頒布之重要議定（Nghị định）、國會法律（Luật）、台商最新合規指引',
      targetVi: 'Nghị định Chính phủ, Luật của Quốc hội và khuyến nghị cho doanh nghiệp FDI',
      channel: '政府公報 (Cổng TTĐT Chính phủ) ＋ CTCVN 越南台灣商會總會 ＋ TECO 經貿專區',
      urls: ['https://baochinhphu.vn', 'https://www.ctcvn.vn', 'https://www.trade.gov.tw'],
      actionZh: '查閱最新議定全文（如第 182 號投資支持基金議定、第 80 號直接購電 DPPA 議定、第 323 號守添金融中心議定），撰寫智庫專題 Dossier。',
      actionVi: 'Cập nhật các chính sách đột phá: Quỹ hỗ trợ đầu tư, DPPA, IFC Thủ Thiêm và cẩm nang tuân thủ pháp lý.'
    }
  ],
  verificationRules: [
    '數據一律以官方部會原件（SBV / GSO / Customs / MPI）為第一準則，財經媒體報導為輔助解釋。',
    '匯率與存貸利率牌價每日以 Vietcombank（VCB）官網 09:00 公布為全越基準。',
    '若外媒（彭博、日經）與越南官方數據出現口徑落差，以越南海關總局（CIF進口 / FOB出口）與 GSO 實際發布為準，並在備註註記國際機構口徑差額。',
    '台商動態與在地生活資訊優先核實 CTCVN 總會及平陽、同奈、胡志明分會公告。'
  ]
};

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
    sbvSectionTitle: '越南國家銀行 (SBV) 基準政策利率與商業銀行存貸歷史走勢 (5年復盤)',
    gdpSectionTitle: '越南實質 GDP 成長率季度走勢與 CPI 消費者物價指數 (5年全景)',
    tradeFdiSectionTitle: '越南外貿貨物順差與 FDI 實際到位外資資金歷史走勢 (5年全景)',
    vnIndexSectionTitle: '越南證券市場胡志明指數 (VN-Index) 5年歷史資本走勢',
    chartModeTabs: {
      USD_VND: '💵 USD/VND 美元走勢',
      TWD_VND: '🇹🇼 TWD/VND 台幣走勢',
      SBV_RATES: '🏛️ 越南央行政策與存貸利率 (5年)',
      GDP_CPI: '📊 實質 GDP 成長與 CPI 通膨 (5年)',
      TRADE_FDI: '🚢 外貿順差與 FDI 外資到位 (5年)',
      VN_INDEX: '📈 胡志明指數 VN-Index (5年)'
    },
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
      south_biz: '🏢 Miền Nam & FDI Đài Loan',
      north_dev: '🚄 Hà Nội & Vùng Bắc Bộ',
      dossiers: '📑 Báo cáo Chuyên sâu',
      calc: '🧮 Công cụ Tính toán',
      lexicon: '📖 Thuật ngữ Vĩ mô',
      sources: '🔗 Nguồn tin & Kênh dữ liệu'
    },
    fxSectionTitle: 'Diễn biến tỷ giá USD/VND · Theo dõi toàn cảnh hàng tuần trong 5 năm qua',
    twdSectionTitle: 'Diễn biến tỷ giá TWD/VND · Theo dõi toàn cảnh hàng tuần trong 5 năm qua',
    sbvSectionTitle: 'Diễn biến lãi suất điều hành SBV và huy động, cho vay 5 năm qua',
    gdpSectionTitle: 'Diễn biến tăng trưởng GDP theo quý và lạm phát CPI trong 5 năm qua',
    tradeFdiSectionTitle: 'Diễn biến thặng dư thương mại và vốn FDI giải ngân trong 5 năm qua',
    vnIndexSectionTitle: 'Diễn biến chỉ số chứng khoán VN-Index trong 5 năm qua',
    chartModeTabs: {
      USD_VND: '💵 Tỷ giá USD/VND',
      TWD_VND: '🇹🇼 Tỷ giá TWD/VND',
      SBV_RATES: '🏛️ Lãi suất SBV & Ngân hàng (5 năm)',
      GDP_CPI: '📊 Tăng trưởng GDP & CPI (5 năm)',
      TRADE_FDI: '🚢 Cán cân XNK & Vốn FDI (5 năm)',
      VN_INDEX: '📈 Chỉ số VN-Index (5 năm)'
    },
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
