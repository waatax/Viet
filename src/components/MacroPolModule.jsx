import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  TrendingUp, Landmark, Globe, Search, ArrowUpRight, ArrowDownRight,
  DollarSign, ShieldAlert, FileText, Calendar, Clock, BookOpen,
  Filter, ChevronRight, X, Copy, Check, BarChart3, PieChart,
  Percent, Layers, ExternalLink, Sliders, RefreshCw, Volume2,
  Building2, Ship, ArrowRight, Award, AlertTriangle, Info, CheckCircle2
} from 'lucide-react';
import {
  liveMarketTicker,
  macroKpiMetrics,
  fiveYearWeeklyUsdVndData,
  fiveYearWeeklyTwdVndData,
  fiveYearSbvPolicyRatesData,
  fiveYearMacroEconomicData,
  sbvPolicyRates,
  commercialBankRates,
  tradeAndCustomsData,
  deepAnalysisDossiers,
  macroVocabularyGlossary,
  officialReferenceSources,
  macroI18n
} from '../data/macroData';
import { audioEngine } from '../services/audioEngine';
import './MacroPolModule.css';

export default function MacroPolModule() {
  // ── Language State (Tiếng Việt / 繁體中文) ──
  const [macroLang, setMacroLang] = useState(() => {
    return localStorage.getItem('macropol_lang') || 'zh';
  });

  const toggleMacroLang = () => {
    const next = macroLang === 'zh' ? 'vi' : 'zh';
    setMacroLang(next);
    localStorage.setItem('macropol_lang', next);
  };

  const t = macroI18n[macroLang] || macroI18n.zh;

  // Navigation internal tab
  const [activeSection, setActiveSection] = useState(() => {
    try {
      const saved = sessionStorage.getItem('viet_target_chapter');
      if (saved) {
        const item = JSON.parse(saved);
        if (item.targetParam?.section) {
          sessionStorage.removeItem('viet_target_chapter');
          return item.targetParam.section;
        }
      }
    } catch {}
    return 'radar';
  });

  useEffect(() => {
    const handleJump = (e) => {
      const chap = e.detail;
      if (chap?.targetParam?.section) {
        setActiveSection(chap.targetParam.section);
      }
      if (chap?.targetParam?.dossierId) {
        const found = deepAnalysisDossiers.find(d => d.id === chap.targetParam.dossierId);
        if (found) setActiveModalDossier(found);
      }
    };
    window.addEventListener('viet_jump_chapter', handleJump);
    return () => window.removeEventListener('viet_jump_chapter', handleJump);
  }, []);

  // ── Chart State (USD_VND | TWD_VND | SBV_RATES | GDP_CPI | TRADE_FDI | VN_INDEX) ──
  const [chartMode, setChartMode] = useState('USD_VND');
  const currencyPair = chartMode === 'TWD_VND' ? 'TWD_VND' : 'USD_VND';
  const [timeframe, setTimeframe] = useState('5Y'); // '5Y' | '2Y' | '1Y' | '12W'
  const [hoveredDataPoint, setHoveredDataPoint] = useState(null);

  // ── Bank Matrix Filter State ──
  const [bankTypeFilter, setBankTypeFilter] = useState('all'); // 'all' | 'state' | 'private'
  const [bankSortKey, setBankSortKey] = useState('m12'); // 'm12' | 'shortLoan' | 'demand'

  // ── Deep Search State ──
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest'); // 'latest' | 'readTime'

  // ── Official Sources Filter State ──
  const [refCategory, setRefCategory] = useState('all'); // 'all' | 'gov' | 'banking' | 'media'

  // ── In-App Modal Reader State ──
  const [activeModalDossier, setActiveModalDossier] = useState(null);
  const [copiedSummaryId, setCopiedSummaryId] = useState(null);

  // ── Calculators State ──
  // 1. Currency converter
  const [calcUsdAmount, setCalcUsdAmount] = useState(1000);
  const [calcVndAmount, setCalcVndAmount] = useState(25485000);
  const [calcMode, setCalcMode] = useState('USD_TO_VND'); // 'USD_TO_VND' | 'VND_TO_USD' | 'TWD_TO_VND'
  const [calcTwdAmount, setCalcTwdAmount] = useState(32000);

  // 2. Deposit calculator
  const [depositPrincipal, setDepositPrincipal] = useState(100000000); // 1億越盾
  const [depositBankId, setDepositBankId] = useState('vcb');
  const [depositTenorMonths, setDepositTenorMonths] = useState(12);

  // 3. Lending calculator
  const [loanPrincipal, setLoanPrincipal] = useState(500000000); // 5億越盾
  const [loanInterestRate, setLoanInterestRate] = useState(7.0); // 7%
  const [loanTenorYears, setLoanTenorYears] = useState(3);

  // Audio Playback
  const [playingKey, setPlayingKey] = useState(null);
  useEffect(() => {
    const unsub = audioEngine.subscribe(state => {
      setPlayingKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsub();
  }, []);

  const handleSpeak = (text, key) => {
    audioEngine.speak(text, { accent: 'north', key: key || text });
  };

  // ── Filter Chart Data based on Chart Mode & Timeframe ──
  const activeRawData = useMemo(() => {
    switch (chartMode) {
      case 'USD_VND':
        return fiveYearWeeklyUsdVndData;
      case 'TWD_VND':
        return fiveYearWeeklyTwdVndData;
      case 'SBV_RATES':
        return fiveYearSbvPolicyRatesData;
      case 'GDP_CPI':
      case 'TRADE_FDI':
      case 'VN_INDEX':
        return fiveYearMacroEconomicData;
      default:
        return fiveYearWeeklyUsdVndData;
    }
  }, [chartMode]);

  const filteredChartData = useMemo(() => {
    const isWeekly = chartMode === 'USD_VND' || chartMode === 'TWD_VND';
    if (isWeekly) {
      if (timeframe === '12W') return activeRawData.slice(-12);
      if (timeframe === '1Y') return activeRawData.slice(-52);
      if (timeframe === '2Y') return activeRawData.slice(-104);
      return activeRawData; // 5Y
    } else {
      if (timeframe === '12W') return activeRawData.slice(-4);
      if (timeframe === '1Y') return activeRawData.slice(-6);
      if (timeframe === '2Y') return activeRawData.slice(-10);
      return activeRawData; // 5Y
    }
  }, [timeframe, activeRawData, chartMode]);

  // Chart stats min / max
  const chartStats = useMemo(() => {
    if (!filteredChartData.length) {
      return { min: 0, max: 0, current: 0, start: 0, change: '0.00', currentItem: null, unit: '' };
    }
    const currentItem = filteredChartData[filteredChartData.length - 1];
    const startItem = filteredChartData[0];

    if (chartMode === 'USD_VND' || chartMode === 'TWD_VND') {
      const values = filteredChartData.map(d => d.close);
      const min = Math.min(...values);
      const max = Math.max(...values);
      const current = currentItem.close;
      const start = startItem.close;
      const change = (((current - start) / start) * 100).toFixed(2);
      return { min, max, current, start, change, currentItem, unit: '₫' };
    } else if (chartMode === 'SBV_RATES') {
      const allVals = filteredChartData.flatMap(d => [d.refinancing, d.rediscount, d.big4Deposit12m, d.shortLoan]);
      const min = Math.min(...allVals);
      const max = Math.max(...allVals);
      const current = currentItem.refinancing;
      const start = startItem.refinancing;
      const change = (current - start).toFixed(2);
      return { min, max, current, start, change, currentItem, unit: '%' };
    } else if (chartMode === 'GDP_CPI') {
      const allVals = filteredChartData.flatMap(d => [d.gdpGrowth, d.cpi]);
      const min = Math.min(...allVals);
      const max = Math.max(...allVals);
      const current = currentItem.gdpGrowth;
      const start = startItem.gdpGrowth;
      const change = (current - start).toFixed(2);
      return { min, max, current, start, change, currentItem, unit: '%' };
    } else if (chartMode === 'TRADE_FDI') {
      const allVals = filteredChartData.flatMap(d => [d.tradeSurplus, d.fdiDisbursed]);
      const min = Math.min(...allVals);
      const max = Math.max(...allVals);
      const current = currentItem.tradeSurplus;
      const start = startItem.tradeSurplus;
      const change = (current - start).toFixed(2);
      return { min, max, current, start, change, currentItem, unit: '$B' };
    } else if (chartMode === 'VN_INDEX') {
      const values = filteredChartData.map(d => d.vnIndex);
      const min = Math.min(...values);
      const max = Math.max(...values);
      const current = currentItem.vnIndex;
      const start = startItem.vnIndex;
      const change = (((current - start) / start) * 100).toFixed(2);
      return { min, max, current, start, change, currentItem, unit: 'pts' };
    }
    return { min: 0, max: 0, current: 0, start: 0, change: '0.00', currentItem, unit: '' };
  }, [filteredChartData, chartMode]);

  // ── Filter Bank Rates ──
  const filteredBankRates = useMemo(() => {
    let list = commercialBankRates;
    if (bankTypeFilter !== 'all') {
      list = list.filter(b => b.type === bankTypeFilter);
    }
    return [...list].sort((a, b) => {
      const getVal = (item, key) => parseFloat(item[key]?.replace('%', '') || 0);
      return getVal(b, bankSortKey) - getVal(a, bankSortKey);
    });
  }, [bankTypeFilter, bankSortKey]);

  // ── Filter & Search Dossiers ──
  const filteredDossiers = useMemo(() => {
    let list = deepAnalysisDossiers;
    if (selectedCategory !== 'all') {
      list = list.filter(d => d.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(d =>
        d.title.toLowerCase().includes(q) ||
        (d.titleVi && d.titleVi.toLowerCase().includes(q)) ||
        d.subtitle.toLowerCase().includes(q) ||
        (d.subtitleVi && d.subtitleVi.toLowerCase().includes(q)) ||
        d.summary.toLowerCase().includes(q) ||
        (d.summaryVi && d.summaryVi.toLowerCase().includes(q)) ||
        d.tags.some(t => t.toLowerCase().includes(q)) ||
        (d.tagsVi && d.tagsVi.some(t => t.toLowerCase().includes(q))) ||
        d.terms.some(t => t.term.toLowerCase().includes(q) || t.hanViet.includes(q))
      );
    }
    if (sortBy === 'latest') {
      list = [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'readTime') {
      list = [...list].sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime));
    }
    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  // ── Filter Reference Sources ──
  const filteredSources = useMemo(() => {
    if (refCategory === 'all') return officialReferenceSources;
    return officialReferenceSources.filter(s => s.category === refCategory);
  }, [refCategory]);

  // Handle Copy Summary
  const handleCopySummary = (dossier, e) => {
    if (e) e.stopPropagation();
    const titleText = macroLang === 'vi' ? dossier.titleVi : dossier.title;
    const summaryText = macroLang === 'vi' ? dossier.summaryVi : dossier.summary;
    const text = `【${dossier.issueNo} · ${titleText}】\n${summaryText}\n(${macroLang === 'vi' ? 'Ngày phát hành' : '發布日期'}：${dossier.date} · ${macroLang === 'vi' ? 'Trung tâm Dữ liệu Kinh tế Việt Nam' : '越南政經智庫'})`;
    navigator.clipboard?.writeText(text);
    setCopiedSummaryId(dossier.id);
    setTimeout(() => setCopiedSummaryId(null), 2500);
  };

  // ── Calculator Helpers ──
  // Deposit Calculation
  const selectedBank = commercialBankRates.find(b => b.id === depositBankId) || commercialBankRates[0];
  const depositRateNumber = useMemo(() => {
    if (depositTenorMonths === 1) return parseFloat(selectedBank.m1) || 1.6;
    if (depositTenorMonths === 3) return parseFloat(selectedBank.m3) || 1.9;
    if (depositTenorMonths === 6) return parseFloat(selectedBank.m6) || 2.9;
    if (depositTenorMonths === 12) return parseFloat(selectedBank.m12) || 4.8;
    return parseFloat(selectedBank.m24) || 4.8;
  }, [selectedBank, depositTenorMonths]);

  const depositInterestEarned = useMemo(() => {
    return Math.round((depositPrincipal * (depositRateNumber / 100) * (depositTenorMonths / 12)));
  }, [depositPrincipal, depositRateNumber, depositTenorMonths]);

  // Loan Calculation (Amortization)
  const loanMonthlyPayment = useMemo(() => {
    const monthlyRate = (loanInterestRate / 100) / 12;
    const totalMonths = loanTenorYears * 12;
    if (monthlyRate === 0) return Math.round(loanPrincipal / totalMonths);
    const payment = (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(payment);
  }, [loanPrincipal, loanInterestRate, loanTenorYears]);

  const loanTotalInterest = useMemo(() => {
    const totalMonths = loanTenorYears * 12;
    return Math.round(loanMonthlyPayment * totalMonths - loanPrincipal);
  }, [loanMonthlyPayment, loanPrincipal, loanTenorYears]);

  return (
    <div className="macro-pol-container">
      {/* ── 1. Top Geopolitical Alert Bar (Paperluz format) ── */}
      <div className="macro-alert-bar">
        <div className="macro-container macro-alert-inner">
          <span className="macro-alert-badge">
            {macroLang === 'vi' ? '🚨 ĐIỂM NÓNG VĨ MÔ' : '🚨 即時動態快訊'}
          </span>
          <span className="macro-alert-text">
            {macroLang === 'vi' ? (
              <>
                <b>Văn kiện Đại hội XIV tháo gỡ thể chế · Cơ chế bảo vệ cán bộ & giải ngân đầu tư công</b>:
                Tỷ giá USD/VND giữ vùng 25.485 đồng; Tổng cục Hải quan mở đợt thanh tra chống chuyển tải lẩn tránh thuế.
              </>
            ) : (
              <>
                <b>越共十四大（Đại hội XIV）政策文件出爐 · 確立體制鬆綁與公建審批免責機制</b>：
                USD/VND 現匯於 25,485 央行波幅上緣堅守，海關總局針對破千億美越順差展開防轉口穿透稽查。
              </>
            )}
          </span>
          <button
            className="macro-alert-action-btn"
            onClick={() => {
              setActiveModalDossier(deepAnalysisDossiers[0]);
            }}
          >
            {macroLang === 'vi' ? 'Đọc chuyên đề Đại hội XIV ➔' : '研讀十四大專題 ➔'}
          </button>
        </div>
      </div>

      {/* ── 2. Hero Section ── */}
      <section className="macro-hero">
        <div className="macro-container">
          <div className="macro-hero-topline">
            <span className="macro-hero-badge">
              <Landmark size={14} /> {t.terminalBadge}
            </span>
            <div className="macro-topline-right">
              <span className="macro-hero-date">
                📅 {macroLang === 'vi' ? 'Dữ liệu tháng 9/2026 · Chuẩn mực Bloomberg / FT / Paperluz' : '2026 年 9 月度綜合情報 · 比照一流財經新聞網與智庫規格'}
              </span>
              <button
                className="macro-lang-toggle-btn"
                onClick={toggleMacroLang}
                title={macroLang === 'zh' ? 'Chuyển đổi sang Tiếng Việt' : '切換至繁體中文'}
              >
                {macroLang === 'zh' ? '🇻🇳 Tiếng Việt' : '🇹🇼 繁體中文'}
              </button>
            </div>
          </div>

          <h1 className="macro-hero-title">
            {macroLang === 'vi' ? (
              <>
                TRUNG TÂM DỮ LIỆU CHÍNH TRỊ - KINH TẾ VIỆT NAM<br />
                <span className="highlight-text">Thể chế chính trị · Tỷ giá 5 năm · Lãi suất SBV & Big 4 · Hải quan & Xuất nhập khẩu</span>
              </>
            ) : (
              <>
                越南政經 · 國家戰略與宏觀總經情報中心<br />
                <span className="highlight-text">政治局勢 · 匯率五載走勢 · 央行與行庫利率 · 海關外貿深度評析</span>
              </>
            )}
          </h1>

          <p className="macro-hero-desc">
            {macroLang === 'vi' ? (
              'Theo dõi toàn diện tiến trình kiện toàn nhân sự Đại hội Đảng XIV, chuỗi dữ liệu hàng tuần tỷ giá USD/VND & TWD/VND trong 5 năm, chính sách điều hành của Ngân hàng Nhà nước, ma trận lãi suất gửi & vay tại các ngân hàng thương mại, cùng rủi ro phòng vệ thương mại trong bối cảnh xuất siêu sang Hoa Kỳ vượt 100 tỷ USD.'
            ) : (
              '深度追蹤越南最高權力格局重組、越南盾（USD/VND）過去五年歷史匯率每週數據矩陣、越南國家銀行（SBV）寬鬆調控軌跡、四大國有行庫與股份制銀行存貸利差，以及海關千億順差防洗產地通關風險。'
            )}
          </p>

          <div className="macro-hero-shortcuts">
            <button
              className={`macro-shortcut-chip ${activeSection === 'radar' ? 'active' : ''}`}
              onClick={() => setActiveSection('radar')}
            >
              <TrendingUp size={15} /> {t.navTabs.radar}
            </button>
            <button
              className={`macro-shortcut-chip ${activeSection === 'rates' ? 'active' : ''}`}
              onClick={() => setActiveSection('rates')}
            >
              <Landmark size={15} /> {t.navTabs.rates}
            </button>
            <button
              className={`macro-shortcut-chip ${activeSection === 'trade' ? 'active' : ''}`}
              onClick={() => setActiveSection('trade')}
            >
              <Ship size={15} /> {t.navTabs.trade}
            </button>
            <button
              className={`macro-shortcut-chip ${activeSection === 'dossiers' ? 'active' : ''}`}
              onClick={() => setActiveSection('dossiers')}
            >
              <BookOpen size={15} /> {t.navTabs.dossiers} ({deepAnalysisDossiers.length})
            </button>
            <button
              className={`macro-shortcut-chip ${activeSection === 'calc' ? 'active' : ''}`}
              onClick={() => setActiveSection('calc')}
            >
              <Sliders size={15} /> {t.navTabs.calc}
            </button>
            <button
              className={`macro-shortcut-chip ${activeSection === 'lexicon' ? 'active' : ''}`}
              onClick={() => setActiveSection('lexicon')}
            >
              <FileText size={15} /> {t.navTabs.lexicon}
            </button>
            <button
              className={`macro-shortcut-chip ${activeSection === 'sources' ? 'active' : ''}`}
              onClick={() => setActiveSection('sources')}
            >
              <ExternalLink size={15} /> {t.navTabs.sources} ({officialReferenceSources.length})
            </button>
          </div>
        </div>
      </section>

      {/* ── 3. Live Market Ticker (Paperluz Marquee) ── */}
      <div className="macro-ticker-wrapper">
        <div className="macro-ticker-label">
          <span className="macro-ticker-dot"></span>
          <span>{t.tickerLabel}</span>
        </div>
        <div className="macro-ticker-track">
          <div className="macro-ticker-items">
            {liveMarketTicker.concat(liveMarketTicker).map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="macro-ticker-item">
                <span className="macro-ticker-name">
                  {macroLang === 'vi' ? item.nameVi : item.name}:
                </span>
                <span className="macro-ticker-val">{item.val}</span>
                <span className={`macro-ticker-delta delta-${item.type}`}>
                  {item.type === 'up' && <ArrowUpRight size={12} />}
                  {item.type === 'down' && <ArrowDownRight size={12} />}
                  {item.delta}
                </span>
                <span className="macro-ticker-note">
                  ({macroLang === 'vi' ? item.noteVi : item.note})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. 8-Card KPI Metric Grid ── */}
      <div className="macro-container">
        <div className="macro-kpi-grid">
          {macroKpiMetrics.map(kpi => (
            <div key={kpi.id} className="macro-kpi-card">
              <div className="macro-kpi-header">
                <span className="macro-kpi-title">
                  {macroLang === 'vi' ? kpi.titleVi : kpi.title}
                </span>
                <span className={`macro-kpi-badge badge-${kpi.badgeColor}`}>
                  {macroLang === 'vi' ? kpi.badgeVi : kpi.badge}
                </span>
              </div>
              <div className="macro-kpi-value-row">
                <span className="macro-kpi-val">{kpi.value}</span>
                {kpi.unit && (
                  <span className="macro-kpi-unit">
                    {macroLang === 'vi' ? (kpi.unitVi || kpi.unit) : kpi.unit}
                  </span>
                )}
              </div>
              <div className="macro-kpi-desc">
                {macroLang === 'vi' ? kpi.descVi : kpi.desc}
              </div>
              <div className="macro-kpi-footer">
                <span className="macro-kpi-trend">
                  {macroLang === 'vi' ? `Nhận định: ${kpi.trendVi}` : `趨勢研判：${kpi.trend}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. Main Section: 5-Year Weekly USD/VND & TWD/VND, SBV Rates & Macro Radar & Charts ── */}
      {activeSection === 'radar' && (
        <section className="macro-section macro-container">
          <div className="macro-section-header">
            <div>
              <div className="macro-section-pretitle">
                {chartMode === 'USD_VND' || chartMode === 'TWD_VND'
                  ? 'WEEKLY FX & CROSS-CURRENCY MONITOR'
                  : chartMode === 'SBV_RATES'
                  ? 'STATE BANK OF VIETNAM & COMMERCIAL RATES BENCHMARK'
                  : chartMode === 'GDP_CPI'
                  ? 'MACRO ECONOMIC GROWTH & INFLATION MONITOR'
                  : chartMode === 'TRADE_FDI'
                  ? 'CUSTOMS TRADE BALANCE & FDI DISBURSED CAPITAL'
                  : 'HO CHI MINH STOCK EXCHANGE BENCHMARK INDEX'}
              </div>
              <h2 className="macro-section-title">
                {chartMode === 'USD_VND' && <>💵 {t.fxSectionTitle}</>}
                {chartMode === 'TWD_VND' && <>🇹🇼 {t.twdSectionTitle}</>}
                {chartMode === 'SBV_RATES' && <>🏛️ {t.sbvSectionTitle}</>}
                {chartMode === 'GDP_CPI' && <>📊 {t.gdpSectionTitle}</>}
                {chartMode === 'TRADE_FDI' && <>🚢 {t.tradeFdiSectionTitle}</>}
                {chartMode === 'VN_INDEX' && <>📈 {t.vnIndexSectionTitle}</>}
              </h2>
            </div>
            <div className="macro-chart-actions">
              {/* Multi-mode switcher pills */}
              <div className="macro-pair-pills">
                {Object.entries(t.chartModeTabs).map(([key, label]) => (
                  <button
                    key={key}
                    className={`macro-pair-btn ${chartMode === key ? 'active' : ''}`}
                    onClick={() => {
                      setChartMode(key);
                      setHoveredDataPoint(null);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Timeframe selector pills */}
              <div className="macro-timeframe-pills">
                {['5Y', '2Y', '1Y', '12W'].map(tf => (
                  <button
                    key={tf}
                    className={`macro-tf-btn ${timeframe === tf ? 'active' : ''}`}
                    onClick={() => { setTimeframe(tf); setHoveredDataPoint(null); }}
                  >
                    {t.timeframes[tf]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Quick Stats Strip */}
          <div className="macro-chart-stats-strip">
            <div className="chart-stat-item">
              <span className="stat-label">
                {chartMode === 'USD_VND' || chartMode === 'TWD_VND'
                  ? t.statsCurrent
                  : chartMode === 'SBV_RATES'
                  ? (macroLang === 'vi' ? 'Lãi suất hiện hành (Tái cấp vốn)' : '現行基準利率 (再融資)')
                  : chartMode === 'GDP_CPI'
                  ? (macroLang === 'vi' ? 'GDP quý gần nhất' : '最新季度實質 GDP')
                  : chartMode === 'TRADE_FDI'
                  ? (macroLang === 'vi' ? 'Cán cân xuất siêu' : '最新貨物累計順差')
                  : (macroLang === 'vi' ? 'Điểm số VN-Index' : '最新指數點位')}
              </span>
              <span className="stat-val">
                {chartMode === 'USD_VND' && <b>{chartStats.current.toLocaleString()} ₫</b>}
                {chartMode === 'TWD_VND' && (
                  <>
                    <b>{chartStats.current} ₫</b>
                    {chartStats.currentItem && (
                      <small className="stat-sub"> (10.000₫ = {chartStats.currentItem.inverse} NT$)</small>
                    )}
                  </>
                )}
                {chartMode === 'SBV_RATES' && (
                  <>
                    <b className="text-gold">{chartStats.current?.toFixed(2)}%</b>
                    <small className="stat-sub"> (12M: {chartStats.currentItem?.big4Deposit12m?.toFixed(2)}% · 短貸: {chartStats.currentItem?.shortLoan?.toFixed(2)}%)</small>
                  </>
                )}
                {chartMode === 'GDP_CPI' && (
                  <>
                    <b className="text-green">+{chartStats.current?.toFixed(2)}%</b>
                    <small className="stat-sub"> (CPI: {chartStats.currentItem?.cpi?.toFixed(2)}%)</small>
                  </>
                )}
                {chartMode === 'TRADE_FDI' && (
                  <>
                    <b className="text-blue">+${chartStats.current} B</b>
                    <small className="stat-sub"> (FDI: ${chartStats.currentItem?.fdiDisbursed} B)</small>
                  </>
                )}
                {chartMode === 'VN_INDEX' && (
                  <b className="text-green">{chartStats.current?.toLocaleString()} pts</b>
                )}
              </span>
            </div>

            <div className="chart-stat-item">
              <span className="stat-label">{t.statsChange}</span>
              <span className={`stat-val ${parseFloat(chartStats.change) >= 0 ? 'text-up' : 'text-down'}`}>
                {chartMode === 'SBV_RATES' || chartMode === 'GDP_CPI' ? (
                  `${parseFloat(chartStats.change) >= 0 ? '+' : ''}${chartStats.change} %pt`
                ) : chartMode === 'TRADE_FDI' ? (
                  `${parseFloat(chartStats.change) >= 0 ? '+$' : '-$'}${Math.abs(chartStats.change)} B`
                ) : (
                  `${parseFloat(chartStats.change) >= 0 ? '+' : ''}${chartStats.change}%`
                )}
              </span>
            </div>

            <div className="chart-stat-item">
              <span className="stat-label">{t.statsHigh}</span>
              <span className="stat-val text-gold">
                {chartMode === 'USD_VND' && `${chartStats.max.toLocaleString()} ₫`}
                {chartMode === 'TWD_VND' && `${chartStats.max} ₫`}
                {chartMode === 'SBV_RATES' && `${chartStats.max.toFixed(2)}%`}
                {chartMode === 'GDP_CPI' && `+${chartStats.max.toFixed(2)}%`}
                {chartMode === 'TRADE_FDI' && `$${chartStats.max} B`}
                {chartMode === 'VN_INDEX' && `${chartStats.max.toLocaleString()} pts`}
              </span>
            </div>

            <div className="chart-stat-item">
              <span className="stat-label">{t.statsLow}</span>
              <span className="stat-val text-green">
                {chartMode === 'USD_VND' && `${chartStats.min.toLocaleString()} ₫`}
                {chartMode === 'TWD_VND' && `${chartStats.min} ₫`}
                {chartMode === 'SBV_RATES' && `${chartStats.min.toFixed(2)}%`}
                {chartMode === 'GDP_CPI' && `${chartStats.min.toFixed(2)}%`}
                {chartMode === 'TRADE_FDI' && `${chartStats.min >= 0 ? '$' + chartStats.min : '-$' + Math.abs(chartStats.min)} B`}
                {chartMode === 'VN_INDEX' && `${chartStats.min.toLocaleString()} pts`}
              </span>
            </div>
          </div>

          {/* SVG Interactive Chart Component */}
          <div className="macro-chart-card">
            <div className="macro-chart-canvas-wrap">
              {(() => {
                const width = 1000;
                const height = 360;
                const padding = { top: 30, right: 30, bottom: 40, left: 70 };
                const chartW = width - padding.left - padding.right;
                const chartH = height - padding.top - padding.bottom;

                const data = filteredChartData;
                if (!data.length) return null;

                let minVal, maxVal;
                if (chartMode === 'USD_VND' || chartMode === 'TWD_VND') {
                  minVal = chartStats.min * 0.99;
                  maxVal = chartStats.max * 1.01;
                } else if (chartMode === 'SBV_RATES') {
                  minVal = 2.0;
                  maxVal = Math.ceil(chartStats.max + 0.5);
                } else if (chartMode === 'GDP_CPI') {
                  minVal = Math.floor(chartStats.min - 1);
                  maxVal = Math.ceil(chartStats.max + 1);
                } else if (chartMode === 'TRADE_FDI') {
                  minVal = Math.min(0, Math.floor(chartStats.min - 1));
                  maxVal = Math.ceil(chartStats.max + 2);
                } else if (chartMode === 'VN_INDEX') {
                  minVal = Math.floor(chartStats.min * 0.95);
                  maxVal = Math.ceil(chartStats.max * 1.03);
                } else {
                  minVal = chartStats.min;
                  maxVal = chartStats.max;
                }

                const valRange = maxVal - minVal || 1;
                const getX = (idx) => padding.left + (idx / Math.max(1, data.length - 1)) * chartW;
                const getY = (val) => padding.top + chartH - ((val - minVal) / valRange) * chartH;

                // 5 horizontal grid steps
                const gridSteps = [
                  minVal,
                  minVal + valRange * 0.25,
                  minVal + valRange * 0.5,
                  minVal + valRange * 0.75,
                  maxVal
                ];

                // Check if zero line should be rendered
                const hasZeroLine = minVal < 0 && maxVal > 0;
                const zeroY = getY(0);

                return (
                  <svg
                    viewBox={`0 0 ${width} ${height}`}
                    className="macro-svg-chart"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="chartAreaGradUsd" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="chartAreaGradTwd" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="chartAreaGradGold" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="chartAreaGradCyan" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="chartAreaGradEmerald" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid lines */}
                    {gridSteps.map((gridVal, gIdx) => {
                      const yPos = getY(gridVal);
                      let label = '';
                      if (chartMode === 'USD_VND') label = `${Math.round(gridVal).toLocaleString()}₫`;
                      else if (chartMode === 'TWD_VND') label = `${Math.round(gridVal)}₫`;
                      else if (chartMode === 'SBV_RATES' || chartMode === 'GDP_CPI') label = `${gridVal.toFixed(1)}%`;
                      else if (chartMode === 'TRADE_FDI') label = `$${gridVal.toFixed(1)}B`;
                      else if (chartMode === 'VN_INDEX') label = `${Math.round(gridVal).toLocaleString()}p`;

                      return (
                        <g key={`grid-${gIdx}`}>
                          <line
                            x1={padding.left}
                            y1={yPos}
                            x2={width - padding.right}
                            y2={yPos}
                            stroke="var(--macro-border)"
                            strokeDasharray="4 4"
                            strokeWidth="1"
                          />
                          <text
                            x={padding.left - 10}
                            y={yPos + 4}
                            fill="var(--macro-muted)"
                            fontSize="11"
                            textAnchor="end"
                            fontFamily="monospace"
                          >
                            {label}
                          </text>
                        </g>
                      );
                    })}

                    {/* Zero baseline if range crosses 0 */}
                    {hasZeroLine && (
                      <g>
                        <line
                          x1={padding.left}
                          y1={zeroY}
                          x2={width - padding.right}
                          y2={zeroY}
                          stroke="#ef4444"
                          strokeDasharray="3 3"
                          strokeWidth="1.5"
                          opacity="0.85"
                        />
                        <text
                          x={width - padding.right + 5}
                          y={zeroY + 4}
                          fill="#ef4444"
                          fontSize="10"
                          fontFamily="monospace"
                        >
                          0.0
                        </text>
                      </g>
                    )}

                    {/* ── MODE 1: USD_VND ── */}
                    {chartMode === 'USD_VND' && (
                      <>
                        <polygon
                          points={`${getX(0)},${padding.top + chartH} ` +
                            data.map((d, i) => `${getX(i)},${getY(d.close)}`).join(' ') +
                            ` ${getX(data.length - 1)},${padding.top + chartH}`}
                          fill="url(#chartAreaGradUsd)"
                        />
                        {/* Central rate */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.central || d.close)}`).join(' ')}
                          fill="none"
                          stroke="#14b8a6"
                          strokeWidth="1.8"
                          strokeDasharray="3 3"
                          opacity="0.8"
                        />
                        {/* Black market */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.blackMarket || d.close)}`).join(' ')}
                          fill="none"
                          stroke="#a855f7"
                          strokeWidth="1.8"
                          strokeDasharray="5 3"
                          opacity="0.75"
                        />
                        {/* Main VCB Close */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.close)}`).join(' ')}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}

                    {/* ── MODE 2: TWD_VND ── */}
                    {chartMode === 'TWD_VND' && (
                      <>
                        <polygon
                          points={`${getX(0)},${padding.top + chartH} ` +
                            data.map((d, i) => `${getX(i)},${getY(d.close)}`).join(' ') +
                            ` ${getX(data.length - 1)},${padding.top + chartH}`}
                          fill="url(#chartAreaGradTwd)"
                        />
                        {/* BOT Bank of Taiwan */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.botRate || d.close)}`).join(' ')}
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="1.8"
                          strokeDasharray="4 4"
                          opacity="0.8"
                        />
                        {/* Main Close */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.close)}`).join(' ')}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}

                    {/* ── MODE 3: SBV_RATES ── */}
                    {chartMode === 'SBV_RATES' && (
                      <>
                        {/* Area under Refinancing */}
                        <polygon
                          points={`${getX(0)},${padding.top + chartH} ` +
                            data.map((d, i) => `${getX(i)},${getY(d.refinancing)}`).join(' ') +
                            ` ${getX(data.length - 1)},${padding.top + chartH}`}
                          fill="url(#chartAreaGradGold)"
                        />
                        {/* 1. Short Commercial Loan (Purple dashed) */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.shortLoan)}`).join(' ')}
                          fill="none"
                          stroke="#c084fc"
                          strokeWidth="2.2"
                          strokeDasharray="5 3"
                        />
                        {/* 2. Big 4 12M Deposit (Blue) */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.big4Deposit12m)}`).join(' ')}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* 3. SBV Rediscount Rate (Emerald) */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.rediscount)}`).join(' ')}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* 4. SBV Refinancing Rate (Gold - Benchmark) */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.refinancing)}`).join(' ')}
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}

                    {/* ── MODE 4: GDP_CPI ── */}
                    {chartMode === 'GDP_CPI' && (
                      <>
                        {/* Area under GDP */}
                        <polygon
                          points={`${getX(0)},${hasZeroLine ? zeroY : padding.top + chartH} ` +
                            data.map((d, i) => `${getX(i)},${getY(d.gdpGrowth)}`).join(' ') +
                            ` ${getX(data.length - 1)},${hasZeroLine ? zeroY : padding.top + chartH}`}
                          fill="url(#chartAreaGradEmerald)"
                        />
                        {/* CPI line (Red dashed) */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.cpi)}`).join(' ')}
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="2.5"
                          strokeDasharray="4 3"
                        />
                        {/* GDP growth line (Emerald) */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.gdpGrowth)}`).join(' ')}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}

                    {/* ── MODE 5: TRADE_FDI ── */}
                    {chartMode === 'TRADE_FDI' && (
                      <>
                        <polygon
                          points={`${getX(0)},${hasZeroLine ? zeroY : padding.top + chartH} ` +
                            data.map((d, i) => `${getX(i)},${getY(d.tradeSurplus)}`).join(' ') +
                            ` ${getX(data.length - 1)},${hasZeroLine ? zeroY : padding.top + chartH}`}
                          fill="url(#chartAreaGradUsd)"
                        />
                        {/* FDI Disbursed (Gold) */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.fdiDisbursed)}`).join(' ')}
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="3"
                          strokeDasharray="5 3"
                        />
                        {/* Trade Surplus (Blue) */}
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.tradeSurplus)}`).join(' ')}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}

                    {/* ── MODE 6: VN_INDEX ── */}
                    {chartMode === 'VN_INDEX' && (
                      <>
                        <polygon
                          points={`${getX(0)},${padding.top + chartH} ` +
                            data.map((d, i) => `${getX(i)},${getY(d.vnIndex)}`).join(' ') +
                            ` ${getX(data.length - 1)},${padding.top + chartH}`}
                          fill="url(#chartAreaGradCyan)"
                        />
                        <polyline
                          points={data.map((d, i) => `${getX(i)},${getY(d.vnIndex)}`).join(' ')}
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}

                    {/* Interactive Data Dots & Hover Detection */}
                    {data.map((d, i) => {
                      const cx = getX(i);
                      let cyVal = d.close;
                      if (chartMode === 'SBV_RATES') cyVal = d.refinancing;
                      else if (chartMode === 'GDP_CPI') cyVal = d.gdpGrowth;
                      else if (chartMode === 'TRADE_FDI') cyVal = d.tradeSurplus;
                      else if (chartMode === 'VN_INDEX') cyVal = d.vnIndex;
                      const cy = getY(cyVal);

                      const isHovered = hoveredDataPoint && hoveredDataPoint.date === d.date;

                      let dotColor = '#3b82f6';
                      if (chartMode === 'TWD_VND' || chartMode === 'GDP_CPI') dotColor = '#10b981';
                      else if (chartMode === 'SBV_RATES') dotColor = '#f59e0b';
                      else if (chartMode === 'VN_INDEX') dotColor = '#06b6d4';

                      return (
                        <g key={d.date} className="macro-data-point-node">
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isHovered ? 6 : (data.length > 50 ? 2.5 : 4)}
                            fill={isHovered ? '#ffffff' : dotColor}
                            stroke={isHovered ? '#f59e0b' : '#ffffff'}
                            strokeWidth={isHovered ? 2.5 : 1}
                            style={{ cursor: 'pointer', transition: 'r 0.2s' }}
                          />
                          {/* Invisible Wider Tap Target for Hover */}
                          <rect
                            x={cx - (data.length > 50 ? 6 : 14)}
                            y={padding.top}
                            width={data.length > 50 ? 12 : 28}
                            height={chartH}
                            fill="transparent"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() => setHoveredDataPoint(d)}
                          />
                        </g>
                      );
                    })}

                    {/* X-axis Date Markers */}
                    {data.map((d, i) => {
                      const step = Math.max(1, Math.ceil(data.length / 7));
                      if (i % step !== 0 && i !== data.length - 1) return null;
                      const label = d.quarter ? d.quarter : d.date.slice(2);
                      return (
                        <text
                          key={d.date}
                          x={getX(i)}
                          y={height - 10}
                          fill="var(--macro-muted)"
                          fontSize="10"
                          textAnchor="middle"
                          fontFamily="monospace"
                        >
                          {label}
                        </text>
                      );
                    })}
                  </svg>
                );
              })()}
            </div>

            {/* Dynamic Legend Bar based on chartMode */}
            <div className="macro-chart-legend">
              {chartMode === 'USD_VND' && (
                <>
                  <div className="legend-item">
                    <span className="legend-line" style={{ background: '#3b82f6' }}></span>
                    <span>{macroLang === 'vi' ? 'Vietcombank bán ra' : 'Vietcombank 牌告現匯賣出價'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-line dashed" style={{ borderColor: '#14b8a6' }}></span>
                    <span>{macroLang === 'vi' ? 'Tỷ giá trung tâm SBV' : '央行官方中心匯率 (Tỷ giá trung tâm)'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-line dashed" style={{ borderColor: '#a855f7' }}></span>
                    <span>{macroLang === 'vi' ? 'Thị trường tự do (Hà Trung)' : '自由市場黑市價 (河中街 Hà Trung)'}</span>
                  </div>
                </>
              )}

              {chartMode === 'TWD_VND' && (
                <>
                  <div className="legend-item">
                    <span className="legend-line" style={{ background: '#10b981' }}></span>
                    <span>{macroLang === 'vi' ? 'Tỷ giá thị trường (1 TWD / VND)' : '市場收盤匯率 (1 TWD兌換越盾)'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-line dashed" style={{ borderColor: '#f59e0b' }}></span>
                    <span>{macroLang === 'vi' ? 'Tỷ giá BOT Đài Loan tham chiếu' : '臺灣銀行 (BOT) 牌告即期參考'}</span>
                  </div>
                </>
              )}

              {chartMode === 'SBV_RATES' && (
                <>
                  <div className="legend-item">
                    <span className="legend-line" style={{ background: '#f59e0b' }}></span>
                    <span>{macroLang === 'vi' ? 'Lãi suất tái cấp vốn SBV (4,50%)' : 'SBV 再融資基準利率 (4.50%)'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-line" style={{ background: '#3b82f6' }}></span>
                    <span>{macroLang === 'vi' ? 'Tiền gửi 12 tháng Big 4 (4,85%)' : 'Big 4 行庫 12M 定存基準 (4.85%)'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-line" style={{ background: '#10b981' }}></span>
                    <span>{macroLang === 'vi' ? 'Lãi suất tái chiết khấu (3,00%)' : 'SBV 再貼現基準利率 (3.00%)'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-line dashed" style={{ borderColor: '#c084fc' }}></span>
                    <span>{macroLang === 'vi' ? 'Vay ngắn hạn thông thường (~7,1%)' : '一般商業短期放款利率 (~7.1%)'}</span>
                  </div>
                </>
              )}

              {chartMode === 'GDP_CPI' && (
                <>
                  <div className="legend-item">
                    <span className="legend-line" style={{ background: '#10b981' }}></span>
                    <span>{macroLang === 'vi' ? 'Tăng trưởng GDP thực tế YoY (%)' : '實質 GDP 季度年增率 YoY (%)'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-line dashed" style={{ borderColor: '#ef4444' }}></span>
                    <span>{macroLang === 'vi' ? 'Lạm phát CPI bình quân YoY (%)' : 'CPI 消費者物價年增率 YoY (%)'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-line dashed" style={{ borderColor: '#94a3b8' }}></span>
                    <span>{macroLang === 'vi' ? 'Đường mốc 0,0%' : '零軸基準線 (0.0%)'}</span>
                  </div>
                </>
              )}

              {chartMode === 'TRADE_FDI' && (
                <>
                  <div className="legend-item">
                    <span className="legend-line" style={{ background: '#3b82f6' }}></span>
                    <span>{macroLang === 'vi' ? 'Thặng dư thương mại hàng hóa ($ tỷ)' : '貨物貿易累計順差 (Billion USD)'}</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-line dashed" style={{ borderColor: '#f59e0b' }}></span>
                    <span>{macroLang === 'vi' ? 'Vốn FDI thực hiện ($ tỷ)' : 'FDI 實際到位外資金額 (Billion USD)'}</span>
                  </div>
                </>
              )}

              {chartMode === 'VN_INDEX' && (
                <div className="legend-item">
                  <span className="legend-line" style={{ background: '#06b6d4' }}></span>
                  <span>{macroLang === 'vi' ? 'Chỉ số VN-Index (Sở GDCK TP.HCM - HOSE)' : '胡志明證交所 VN-Index 基準點數'}</span>
                </div>
              )}

              <span className="chart-interaction-tip">
                <Info size={13} /> {t.hoverTip}
              </span>
            </div>

            {/* Inspector Box (Hover details) */}
            {hoveredDataPoint && (
              <div className="macro-chart-inspector">
                <div className="inspector-inner">
                  <div className="inspector-header">
                    <span className="insp-date">
                      📅 {hoveredDataPoint.quarter ? `${hoveredDataPoint.quarter} (${hoveredDataPoint.date})` : hoveredDataPoint.date}
                    </span>

                    {/* Mode-specific metrics in inspector */}
                    {chartMode === 'USD_VND' && (
                      <>
                        <span className="insp-rate">
                          {macroLang === 'vi' ? 'VCB bán ra' : '收盤牌價'}：<b>{hoveredDataPoint.close.toLocaleString()} VND</b>
                        </span>
                        {hoveredDataPoint.central && (
                          <span className="insp-pill">
                            {macroLang === 'vi' ? 'Trung tâm' : '中心匯率'}：<b>{hoveredDataPoint.central.toLocaleString()}</b>
                          </span>
                        )}
                        {hoveredDataPoint.blackMarket && (
                          <span className="insp-pill">
                            {macroLang === 'vi' ? 'Chợ đen' : '黑市參考'}：<b>{hoveredDataPoint.blackMarket.toLocaleString()}</b>
                          </span>
                        )}
                      </>
                    )}

                    {chartMode === 'TWD_VND' && (
                      <>
                        <span className="insp-rate">
                          {macroLang === 'vi' ? 'Tỷ giá' : '收盤匯率'}：<b>1 NT$ = {hoveredDataPoint.close} ₫</b>
                          <small> (1萬越盾 ≈ {hoveredDataPoint.inverse} NT$)</small>
                        </span>
                        {hoveredDataPoint.botRate && (
                          <span className="insp-pill">
                            BOT：<b>{hoveredDataPoint.botRate} ₫</b>
                          </span>
                        )}
                      </>
                    )}

                    {chartMode === 'SBV_RATES' && (
                      <>
                        <span className="insp-pill" style={{ color: '#f59e0b', borderColor: '#f59e0b' }}>
                          {macroLang === 'vi' ? 'Tái cấp vốn' : '再融資率'}：<b>{hoveredDataPoint.refinancing?.toFixed(2)}%</b>
                        </span>
                        <span className="insp-pill" style={{ color: '#3b82f6', borderColor: '#3b82f6' }}>
                          {macroLang === 'vi' ? 'Big 4 12 tháng' : 'Big 4 12M定存'}：<b>{hoveredDataPoint.big4Deposit12m?.toFixed(2)}%</b>
                        </span>
                        <span className="insp-pill" style={{ color: '#10b981', borderColor: '#10b981' }}>
                          {macroLang === 'vi' ? 'Tái chiết khấu' : '再貼現率'}：<b>{hoveredDataPoint.rediscount?.toFixed(2)}%</b>
                        </span>
                        <span className="insp-pill" style={{ color: '#c084fc', borderColor: '#c084fc' }}>
                          {macroLang === 'vi' ? 'Cho vay ngắn hạn' : '短期商業企貸'}：<b>{hoveredDataPoint.shortLoan?.toFixed(2)}%</b>
                        </span>
                      </>
                    )}

                    {chartMode === 'GDP_CPI' && (
                      <>
                        <span className="insp-pill" style={{ color: '#10b981', borderColor: '#10b981' }}>
                          {macroLang === 'vi' ? 'Tăng trưởng GDP' : '實質 GDP 年增'}：<b>{hoveredDataPoint.gdpGrowth > 0 ? `+${hoveredDataPoint.gdpGrowth}%` : `${hoveredDataPoint.gdpGrowth}%`}</b>
                        </span>
                        <span className="insp-pill" style={{ color: '#ef4444', borderColor: '#ef4444' }}>
                          {macroLang === 'vi' ? 'Lạm phát CPI' : 'CPI 通膨率'}：<b>{hoveredDataPoint.cpi?.toFixed(2)}%</b>
                        </span>
                      </>
                    )}

                    {chartMode === 'TRADE_FDI' && (
                      <>
                        <span className="insp-pill" style={{ color: '#3b82f6', borderColor: '#3b82f6' }}>
                          {macroLang === 'vi' ? 'Thặng dư XNK' : '貨物順差'}：<b>{hoveredDataPoint.tradeSurplus >= 0 ? `+$${hoveredDataPoint.tradeSurplus} B` : `-$${Math.abs(hoveredDataPoint.tradeSurplus)} B`}</b>
                        </span>
                        <span className="insp-pill" style={{ color: '#f59e0b', borderColor: '#f59e0b' }}>
                          {macroLang === 'vi' ? 'FDI giải ngân' : 'FDI 到位資本'}：<b>${hoveredDataPoint.fdiDisbursed} B</b>
                        </span>
                      </>
                    )}

                    {chartMode === 'VN_INDEX' && (
                      <span className="insp-rate" style={{ color: '#06b6d4' }}>
                        VN-Index：<b>{hoveredDataPoint.vnIndex?.toLocaleString()} 點</b>
                      </span>
                    )}

                    {hoveredDataPoint.change !== undefined && (chartMode === 'USD_VND' || chartMode === 'TWD_VND') && (
                      <span className="insp-pill">
                        {macroLang === 'vi' ? 'Biến động tuần' : '週漲跌'}：
                        <b>{hoveredDataPoint.change > 0 ? `+${hoveredDataPoint.change}%` : `${hoveredDataPoint.change}%`}</b>
                      </span>
                    )}
                  </div>

                  <div className="inspector-note">
                    📌 <b>{macroLang === 'vi' ? 'Sự kiện kinh tế & chính sách' : '總經政經事件標記'}：</b>
                    {macroLang === 'vi' ? (hoveredDataPoint.noteVi || hoveredDataPoint.note) : hoveredDataPoint.note}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 6. Section: Commercial Banks Deposit & Lending Matrix & SBV Rates ── */}
      {activeSection === 'rates' && (
        <section className="macro-section macro-container">
          <div className="macro-section-header">
            <div>
              <div className="macro-section-pretitle">MONETARY POLICY & BANKING SECTOR</div>
              <h2 className="macro-section-title">
                {macroLang === 'vi' ? (
                  <>🏛️ Lãi suất điều hành SBV & Bảng so sánh lãi suất tiền gửi - cho vay hệ thống ngân hàng</>
                ) : (
                  <>🏛️ 越南央行（SBV）基準利率與全越各大行庫存貸利率比價矩陣</>
                )}
              </h2>
            </div>
          </div>

          {/* SBV 6 Core Policy Rates Cards */}
          <div className="macro-sbv-grid">
            {sbvPolicyRates.map(item => (
              <div key={item.code} className="macro-sbv-card">
                <div className="macro-sbv-card-header">
                  <div>
                    <div className="sbv-name">{macroLang === 'vi' ? item.nameVn : item.name}</div>
                    <div className="sbv-name-vn">{macroLang === 'vi' ? item.name : item.nameVn}</div>
                  </div>
                  <div className="sbv-rate-pill">{item.rate}</div>
                </div>
                <p className="sbv-role">{macroLang === 'vi' ? item.roleVi : item.role}</p>
                <div className="sbv-range">
                  {macroLang === 'vi' ? (
                    <>Đỉnh lịch sử: {item.historyHighVi || item.historyHigh} ｜ Đáy: {item.historyLowVi || item.historyLow}</>
                  ) : (
                    <>歷史區間：高點 {item.historyHigh} ｜ 低點 {item.historyLow}</>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Commercial Banking Table Toolbar */}
          <div className="macro-table-toolbar">
            <div className="macro-table-filters">
              <span className="filter-label">
                <Filter size={14} /> {macroLang === 'vi' ? 'Nhóm ngân hàng:' : '銀行屬性：'}
              </span>
              <button
                className={`filter-chip ${bankTypeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setBankTypeFilter('all')}
              >
                {macroLang === 'vi' ? 'Tất cả ngân hàng' : '全部行庫'}
              </button>
              <button
                className={`filter-chip ${bankTypeFilter === 'state' ? 'active' : ''}`}
                onClick={() => setBankTypeFilter('state')}
              >
                {macroLang === 'vi' ? 'Khối quốc doanh (Big 4)' : '四大國有公股行 (Big 4)'}
              </button>
              <button
                className={`filter-chip ${bankTypeFilter === 'private' ? 'active' : ''}`}
                onClick={() => setBankTypeFilter('private')}
              >
                {macroLang === 'vi' ? 'TMCP tư nhân' : '民營股份制商業銀行'}
              </button>
            </div>

            <div className="macro-table-sort">
              <span className="filter-label">{macroLang === 'vi' ? 'Sắp xếp:' : '排序基準：'}</span>
              <select
                value={bankSortKey}
                onChange={(e) => setBankSortKey(e.target.value)}
                className="macro-select"
              >
                <option value="m12">{macroLang === 'vi' ? 'Lãi suất gửi 12 tháng cao nhất' : '12 個月定存利率最高'}</option>
                <option value="m6">{macroLang === 'vi' ? 'Lãi suất gửi 6 tháng cao nhất' : '6 個月定存利率最高'}</option>
                <option value="shortLoan">{macroLang === 'vi' ? 'Lãi suất cho vay ngắn hạn thấp nhất' : '短期貸款利率最低'}</option>
                <option value="demand">{macroLang === 'vi' ? 'Lãi suất tiền gửi không kỳ hạn' : '活期儲蓄利率'}</option>
              </select>
            </div>
          </div>

          {/* Banking Rates Matrix Table */}
          <div className="macro-table-wrapper">
            <table className="macro-rates-table">
              <thead>
                <tr>
                  <th style={{ minWidth: '180px' }}>{macroLang === 'vi' ? 'Tên ngân hàng' : '商業銀行名稱'}</th>
                  <th>{macroLang === 'vi' ? 'Phân loại' : '性質'}</th>
                  <th>{macroLang === 'vi' ? 'Không kỳ hạn' : '活期'}</th>
                  <th>1T</th>
                  <th>3T</th>
                  <th>6T</th>
                  <th className="th-highlight">{macroLang === 'vi' ? 'Gửi 12 tháng' : '12 個月定存'}</th>
                  <th>24T</th>
                  <th>{macroLang === 'vi' ? 'Vay ngắn hạn' : '短期商業放款'}</th>
                  <th>{macroLang === 'vi' ? 'Trung dài hạn' : '中長企貸'}</th>
                  <th>{macroLang === 'vi' ? 'Vay mua nhà' : '房貸首年優惠'}</th>
                  <th style={{ minWidth: '220px' }}>{macroLang === 'vi' ? 'Đặc điểm & Thế mạnh tín dụng' : '授信優勢與業務特色'}</th>
                </tr>
              </thead>
              <tbody>
                {filteredBankRates.map(bank => (
                  <tr key={bank.id}>
                    <td className="td-bank-name">
                      <span className="bank-logo">{bank.logo}</span>
                      <div>
                        <strong>{macroLang === 'vi' ? (bank.nameVi || bank.name) : bank.name}</strong>
                        <small className="bank-code">({bank.shortName})</small>
                      </div>
                    </td>
                    <td>
                      <span className={`pill-type ${bank.type === 'state' ? 'pill-state' : 'pill-private'}`}>
                        {macroLang === 'vi' ? (bank.type === 'state' ? 'Quốc doanh' : 'Tư nhân') : (bank.type === 'state' ? '國有行' : '股份行')}
                      </span>
                    </td>
                    <td className="td-mono">{bank.demand}</td>
                    <td className="td-mono">{bank.m1}</td>
                    <td className="td-mono">{bank.m3}</td>
                    <td className="td-mono">{bank.m6}</td>
                    <td className="td-mono td-highlight">{bank.m12}</td>
                    <td className="td-mono">{bank.m24}</td>
                    <td className="td-mono text-green">{bank.shortLoan}</td>
                    <td className="td-mono">{bank.midLongLoan}</td>
                    <td className="td-mono text-blue">{macroLang === 'vi' ? (bank.homeLoanPromoVi || bank.homeLoanPromo) : bank.homeLoanPromo}</td>
                    <td className="td-note">{macroLang === 'vi' ? bank.specialNoteVi : bank.specialNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="macro-table-footnote">
            ℹ️ <b>{macroLang === 'vi' ? 'Ghi chú giải thích:' : '註記說明：'}</b>
            {macroLang === 'vi' ? (
              'Biểu lãi suất tham khảo theo niêm yết của các ngân hàng và mức giải ngân trung bình thực tế cho doanh nghiệp. 5 lĩnh vực ưu tiên (công nghệ cao, công nghiệp hỗ trợ, SME, nông nghiệp, xuất khẩu) được bảo hộ bởi trần lãi suất vay ngắn hạn 4,00%/năm của Ngân hàng Nhà nước.'
            ) : (
              '以上利率為各行官網牌價及合格外資／本國一般企業平均核貸利率。五大優先領域（高科技、配套產業、中小企業、農業、出口製造）短期放款受央行 4.00% 法定上限保護。'
            )}
          </div>
        </section>
      )}

      {/* ── 7. Section: Trade, Customs & Anti-Circumvention Regulations ── */}
      {activeSection === 'trade' && (
        <section className="macro-section macro-container">
          <div className="macro-section-header">
            <div>
              <div className="macro-section-pretitle">GENERAL DEPARTMENT OF CUSTOMS & TRADE</div>
              <h2 className="macro-section-title">
                {macroLang === 'vi' ? (
                  <>🚢 Thống kê Xuất nhập khẩu Tổng cục Hải quan & Quy định phòng chống gian lận xuất xứ</>
                ) : (
                  <>🚢 越南海關進出口統計、通關規章與防洗產地風險全面盤點</>
                )}
              </h2>
            </div>
          </div>

          {/* Trade Summary Strip */}
          <div className="macro-trade-summary-strip">
            <div className="trade-stat-box">
              <div className="trade-label">{macroLang === 'vi' ? 'Tổng kim ngạch XNK cả năm' : '年度貨物進出口總額'}</div>
              <div className="trade-val">{tradeAndCustomsData.summary.totalTurnover}</div>
              <div className="trade-delta text-green">
                {macroLang === 'vi' ? 'Thương mại mở rộng liên tục' : '雙邊外貿持續擴張'}
              </div>
            </div>
            <div className="trade-stat-box">
              <div className="trade-label">{macroLang === 'vi' ? 'Kim ngạch xuất khẩu (FOB)' : '貨物出口總額 (FOB)'}</div>
              <div className="trade-val">{tradeAndCustomsData.summary.exportValue}</div>
              <div className="trade-delta text-green">YoY {tradeAndCustomsData.summary.yoyExportGrowth}</div>
            </div>
            <div className="trade-stat-box">
              <div className="trade-label">{macroLang === 'vi' ? 'Kim ngạch nhập khẩu (CIF)' : '貨物進口總額 (CIF)'}</div>
              <div className="trade-val">{tradeAndCustomsData.summary.importValue}</div>
              <div className="trade-delta text-blue">YoY {tradeAndCustomsData.summary.yoyImportGrowth}</div>
            </div>
            <div className="trade-stat-box">
              <div className="trade-label">{macroLang === 'vi' ? 'Cán cân thương mại (Xuất siêu)' : '貨物貿易順差 (Xuất siêu)'}</div>
              <div className="trade-val text-gold">{tradeAndCustomsData.summary.surplus}</div>
              <div className="trade-delta text-gold">
                {macroLang === 'vi' ? 'Bảo đảm an toàn ngoại hối' : '鞏固國家外匯防線'}
              </div>
            </div>
          </div>

          {/* Export Commodities & Bilateral Partners Dual Column */}
          <div className="macro-two-col-grid">
            {/* Left: Top 8 Export Commodities */}
            <div className="macro-panel-card">
              <h3 className="panel-title">
                <BarChart3 size={17} />
                {macroLang === 'vi' ? ' Top 8 Mặt hàng xuất khẩu chủ lực (Tổng cục Hải quan)' : ' 八大出口主力商品結構 (海關總局統計)'}
              </h3>
              <div className="commodity-list">
                {tradeAndCustomsData.topExportCommodities.map(c => (
                  <div key={c.rank} className="commodity-item">
                    <div className="c-rank">#{c.rank}</div>
                    <div className="c-info">
                      <div className="c-name">{macroLang === 'vi' ? c.nameVi : c.name}</div>
                      <div className="c-meta">
                        <span>{macroLang === 'vi' ? 'Mã HS:' : '稅則代碼：'}{c.code}</span>
                        <span>{macroLang === 'vi' ? 'Thị trường:' : '主要市場：'}{macroLang === 'vi' ? c.destinationVi : c.destination}</span>
                      </div>
                    </div>
                    <div className="c-numbers">
                      <div className="c-val">{c.val}</div>
                      <div className="c-share">{macroLang === 'vi' ? `Tỷ trọng ${c.share}` : `佔全越 ${c.share}`} ({c.yoy})</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Bilateral Trade Partners */}
            <div className="macro-panel-card">
              <h3 className="panel-title">
                <Globe size={17} />
                {macroLang === 'vi' ? ' Đối tác thương mại song phương trọng yếu' : ' 重大雙邊貿易夥伴結構與差額分析'}
              </h3>
              <div className="partner-list">
                {tradeAndCustomsData.bilateralTradePartners.map((p, idx) => (
                  <div key={idx} className="partner-card">
                    <div className="partner-header">
                      <span className="partner-name">{macroLang === 'vi' ? p.partnerVi : p.partner}</span>
                      <span className={`partner-balance ${p.balance.includes('-') ? 'balance-deficit' : 'balance-surplus'}`}>
                        {macroLang === 'vi' ? p.balanceVi : p.balance}
                      </span>
                    </div>
                    <div className="partner-flow">
                      <span>{macroLang === 'vi' ? 'Xuất khẩu:' : '出口：'}<b>{p.export}</b></span>
                      <span>{macroLang === 'vi' ? 'Nhập khẩu:' : '進口：'}<b>{p.import}</b></span>
                    </div>
                    <div className="partner-alert">
                      <ShieldAlert size={13} /> {macroLang === 'vi' ? p.alertVi : p.alert}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2026 Customs Directives Box */}
          <div className="macro-customs-box">
            <h3 className="customs-box-title">
              <FileText size={17} />
              {macroLang === 'vi' ? ' Văn bản pháp quy Hải quan & Thuế quan trọng yếu' : ' 2026 越南海關最新通關法規與稽查重點指引'}
            </h3>
            <div className="customs-reg-grid">
              {tradeAndCustomsData.customsRegulations2026.map(r => (
                <div key={r.code} className="reg-item-card">
                  <div className="reg-code-badge">{r.code}</div>
                  <h4 className="reg-title">{macroLang === 'vi' ? r.titleVi : r.title}</h4>
                  <div className="reg-focus">
                    <b>{macroLang === 'vi' ? 'Nội dung cốt lõi:' : '稽查焦點：'}</b> {macroLang === 'vi' ? r.focusVi : r.focus}
                  </div>
                  <div className="reg-impact">
                    <b>{macroLang === 'vi' ? 'Tác động doanh nghiệp:' : '對台商與外企衝擊：'}</b> {macroLang === 'vi' ? r.impactVi : r.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. Section: Deep Search & Analytical Dossiers ── */}
      {activeSection === 'dossiers' && (
        <section className="macro-section macro-container">
          <div className="macro-section-header">
            <div>
              <div className="macro-section-pretitle">EDITORIAL DOSSIERS & INTELLIGENCE</div>
              <h2 className="macro-section-title">
                {macroLang === 'vi' ? (
                  <>📑 Báo cáo Chuyên sâu Kinh tế - Chính trị Việt Nam</>
                ) : (
                  <>📑 越南政經一流智庫與新聞網深度調查專題</>
                )}
              </h2>
            </div>
          </div>

          {/* Deep Search Toolbar */}
          <div className="macro-dossiers-toolbar">
            <div className="macro-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={macroLang === 'vi' ? 'Tìm kiếm báo cáo chuyên sâu theo từ khóa (Đại hội XIV, tỷ giá, hải quan, bán dẫn, FDI...)' : '搜尋政經專題關鍵字（如：十四大、匯率走勢、海關洗產地、高鐵、最低稅負制...）'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="macro-search-input"
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="macro-category-pills">
              {[
                { id: 'all', label: '全部專案報告', labelVi: 'Tất cả chuyên đề' },
                { id: 'politics', label: '總體政經', labelVi: 'Chính trị - Vĩ mô' },
                { id: 'finance', label: '貨幣金融', labelVi: 'Tiền tệ - Tài chính' },
                { id: 'banking', label: '銀行利率', labelVi: 'Ngân hàng & Lãi suất' },
                { id: 'customs', label: '外貿海關', labelVi: 'Thương mại & Hải quan' },
                { id: 'fdi', label: '外資供應鏈', labelVi: 'Chuỗi cung ứng FDI' },
                { id: 'regulations', label: '政策法規', labelVi: 'Pháp lý & Thuế' }
              ].map(cat => (
                <button
                  key={cat.id}
                  className={`cat-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {macroLang === 'vi' ? cat.labelVi : cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dossiers Grid */}
          <div className="macro-dossiers-grid">
            {filteredDossiers.map(dossier => (
              <article
                key={dossier.id}
                className="macro-dossier-card"
                onClick={() => setActiveModalDossier(dossier)}
              >
                <div className="dossier-card-top">
                  <span className="dossier-num-badge">{dossier.issueNo}</span>
                  <span className="dossier-cat-pill">
                    {macroLang === 'vi' ? dossier.categoryLabelVi : dossier.categoryLabel}
                  </span>
                  <span className="dossier-meta-item">
                    <Calendar size={13} /> {dossier.date}
                  </span>
                  <span className="dossier-meta-item">
                    <Clock size={13} /> {macroLang === 'vi' ? dossier.readTimeVi : dossier.readTime}
                  </span>
                </div>

                <h3 className="dossier-card-title">
                  {macroLang === 'vi' ? dossier.titleVi : dossier.title}
                </h3>
                <p className="dossier-card-subtitle">
                  {macroLang === 'vi' ? dossier.subtitleVi : dossier.subtitle}
                </p>

                {/* KPI mini-pills */}
                <div className="dossier-kpi-row">
                  {dossier.kpis.map((kpi, kIdx) => (
                    <span key={kIdx} className={`dossier-kpi-pill kpi-${kpi.type}`}>
                      {macroLang === 'vi' ? (kpi.labelVi || kpi.label) : kpi.label}：<b>{kpi.val}</b>
                    </span>
                  ))}
                </div>

                <p className="dossier-card-summary">
                  {macroLang === 'vi' ? dossier.summaryVi : dossier.summary}
                </p>

                <div className="dossier-card-tags">
                  {(macroLang === 'vi' ? (dossier.tagsVi || dossier.tags) : dossier.tags).map((tag, tIdx) => (
                    <span key={tIdx} className="dossier-tag-pill">#{tag}</span>
                  ))}
                </div>

                <div className="dossier-card-actions">
                  <button className="macro-read-btn">
                    <BookOpen size={14} />
                    {macroLang === 'vi' ? ' Đọc toàn văn chuyên đề ➔' : ' 閱讀完整深度專題 ➔'}
                  </button>
                  <button
                    className="macro-copy-btn"
                    onClick={(e) => handleCopySummary(dossier, e)}
                    title={macroLang === 'vi' ? 'Sao chép tóm tắt' : '複製報告重點'}
                  >
                    {copiedSummaryId === dossier.id ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredDossiers.length === 0 && (
            <div className="macro-empty-state">
              <AlertTriangle size={32} />
              <p>
                {macroLang === 'vi'
                  ? `Không tìm thấy báo cáo phù hợp với từ khóa "${searchQuery}". Vui lòng thử lại.`
                  : `查無符合「${searchQuery}」的政經專案報告，請嘗試更換關鍵字或點選全部專題。`}
              </p>
            </div>
          )}
        </section>
      )}

      {/* ── 9. Section: Financial & FX Calculators ── */}
      {activeSection === 'calc' && (
        <section className="macro-section macro-container">
          <div className="macro-section-header">
            <div>
              <div className="macro-section-pretitle">FINANCIAL TOOLKIT</div>
              <h2 className="macro-section-title">
                {macroLang === 'vi' ? (
                  <>🧮 Bộ công cụ Tính toán Tài chính & Ngoại hối Việt Nam</>
                ) : (
                  <>🧮 越南金融總經試算器 · 匯率兌換、大額定存年息與企業貸款精算</>
                )}
              </h2>
            </div>
          </div>

          <div className="macro-calculators-grid">
            {/* Calculator 1: Multi-Currency Converter */}
            <div className="macro-calc-card">
              <div className="calc-card-header">
                <DollarSign size={20} className="calc-icon" />
                <div>
                  <h3 className="calc-title">{macroLang === 'vi' ? 'Quy đổi Tỷ giá Đa đồng tệ' : '美金 / 越盾 / 台幣即時換算'}</h3>
                  <p className="calc-desc">{macroLang === 'vi' ? 'Áp dụng tỷ giá tham chiếu VCB 25.485 VND & BOT 791,5 VND' : '採 Vietcombank 即期牌價 25,485 與台銀 791.5'}</p>
                </div>
              </div>

              <div className="calc-mode-switch">
                <button
                  className={`calc-mode-btn ${calcMode === 'USD_TO_VND' ? 'active' : ''}`}
                  onClick={() => setCalcMode('USD_TO_VND')}
                >
                  USD ➔ VND
                </button>
                <button
                  className={`calc-mode-btn ${calcMode === 'VND_TO_USD' ? 'active' : ''}`}
                  onClick={() => setCalcMode('VND_TO_USD')}
                >
                  VND ➔ USD
                </button>
                <button
                  className={`calc-mode-btn ${calcMode === 'TWD_TO_VND' ? 'active' : ''}`}
                  onClick={() => setCalcMode('TWD_TO_VND')}
                >
                  TWD ➔ VND
                </button>
              </div>

              <div className="calc-body">
                {calcMode === 'USD_TO_VND' && (
                  <>
                    <div className="calc-input-group">
                      <label>{macroLang === 'vi' ? 'Số tiền USD:' : '美元金額 (USD)：'}</label>
                      <input
                        type="number"
                        value={calcUsdAmount}
                        onChange={(e) => setCalcUsdAmount(parseFloat(e.target.value) || 0)}
                        className="macro-input"
                      />
                    </div>
                    <div className="calc-result-box">
                      <div className="result-label">{macroLang === 'vi' ? 'Giá trị quy đổi VND (Vietcombank):' : '折合越南盾 (VCB 牌價)：'}</div>
                      <div className="result-val text-gold">
                        {(Math.round(calcUsdAmount * 25485)).toLocaleString()} ₫
                      </div>
                      <div className="result-sub">
                        {macroLang === 'vi' ? 'Thị trường tự do (Hà Trung ~25.680): ' : '黑市參考價 (25,680)：'}
                        {(Math.round(calcUsdAmount * 25680)).toLocaleString()} ₫
                      </div>
                    </div>
                  </>
                )}

                {calcMode === 'VND_TO_USD' && (
                  <>
                    <div className="calc-input-group">
                      <label>{macroLang === 'vi' ? 'Số tiền VND:' : '越南盾金額 (VND)：'}</label>
                      <input
                        type="number"
                        value={calcVndAmount}
                        onChange={(e) => setCalcVndAmount(parseFloat(e.target.value) || 0)}
                        className="macro-input"
                      />
                    </div>
                    <div className="calc-result-box">
                      <div className="result-label">{macroLang === 'vi' ? 'Quy đổi USD:' : '折合美元 (USD)：'}</div>
                      <div className="result-val text-gold">
                        ${(calcVndAmount / 25485).toFixed(2)} USD
                      </div>
                      <div className="result-sub">
                        {macroLang === 'vi' ? 'Quy đổi NT$:' : '折合新台幣：'} NT$ {((calcVndAmount / 791.5)).toFixed(0)}
                      </div>
                    </div>
                  </>
                )}

                {calcMode === 'TWD_TO_VND' && (
                  <>
                    <div className="calc-input-group">
                      <label>{macroLang === 'vi' ? 'Số tiền Đài tệ (NT$):' : '新台幣金額 (NT$)：'}</label>
                      <input
                        type="number"
                        value={calcTwdAmount}
                        onChange={(e) => setCalcTwdAmount(parseFloat(e.target.value) || 0)}
                        className="macro-input"
                      />
                    </div>
                    <div className="calc-result-box">
                      <div className="result-label">{macroLang === 'vi' ? 'Giá trị quy đổi VND:' : '折合越南盾 (VND)：'}</div>
                      <div className="result-val text-gold">
                        {(Math.round(calcTwdAmount * 791.5)).toLocaleString()} ₫
                      </div>
                      <div className="result-sub">
                        {macroLang === 'vi' ? 'Tỷ giá BOT ~784 VND:' : '台銀牌價 (~784)：'}
                        {(Math.round(calcTwdAmount * 784)).toLocaleString()} ₫
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Calculator 2: Bank Deposit Interest */}
            <div className="macro-calc-card">
              <div className="calc-card-header">
                <Landmark size={20} className="calc-icon" />
                <div>
                  <h3 className="calc-title">{macroLang === 'vi' ? 'Tính lãi Tiết kiệm Ngân hàng' : '越南商業銀行定存利息精算'}</h3>
                  <p className="calc-desc">{macroLang === 'vi' ? 'Tự động tính theo biểu lãi suất Big 4 & TMCP' : '自動帶入各大行庫實際存期牌價'}</p>
                </div>
              </div>

              <div className="calc-body">
                <div className="calc-row">
                  <div className="calc-input-group">
                    <label>{macroLang === 'vi' ? 'Ngân hàng gửi:' : '存款行庫：'}</label>
                    <select
                      value={depositBankId}
                      onChange={(e) => setDepositBankId(e.target.value)}
                      className="macro-select"
                    >
                      {commercialBankRates.map(b => (
                        <option key={b.id} value={b.id}>
                          {b.shortName} - {macroLang === 'vi' ? (b.nameVi || b.name) : b.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="calc-input-group">
                    <label>{macroLang === 'vi' ? 'Kỳ hạn gửi:' : '存款天期：'}</label>
                    <select
                      value={depositTenorMonths}
                      onChange={(e) => setDepositTenorMonths(parseInt(e.target.value))}
                      className="macro-select"
                    >
                      <option value={1}>{macroLang === 'vi' ? '1 tháng' : '1 個月短天期'}</option>
                      <option value={3}>{macroLang === 'vi' ? '3 tháng' : '3 個月定存'}</option>
                      <option value={6}>{macroLang === 'vi' ? '6 tháng' : '6 個月定存'}</option>
                      <option value={12}>{macroLang === 'vi' ? '12 tháng (chuẩn)' : '12 個月 (標準 1 年期)'}</option>
                      <option value={24}>{macroLang === 'vi' ? '24 tháng dài hạn' : '24 個月長天期'}</option>
                    </select>
                  </div>
                </div>

                <div className="calc-input-group">
                  <label>{macroLang === 'vi' ? 'Tiền gửi gốc (VND):' : '存款本金 (VND)：'}</label>
                  <input
                    type="number"
                    step="10000000"
                    value={depositPrincipal}
                    onChange={(e) => setDepositPrincipal(parseFloat(e.target.value) || 0)}
                    className="macro-input"
                  />
                  <small className="input-hint">
                    {macroLang === 'vi' ? `Quy đổi: ${(depositPrincipal / 1000000).toFixed(0)} triệu VND` : `相當於 ${(depositPrincipal / 100000000).toFixed(2)} 億越盾`}
                  </small>
                </div>

                <div className="calc-result-box">
                  <div className="result-label">
                    {macroLang === 'vi' ? `Lãi suất áp dụng: ${depositRateNumber.toFixed(2)}%/năm` : `適用年利率：${depositRateNumber.toFixed(2)}%`}
                  </div>
                  <div className="result-val text-green">
                    +{depositInterestEarned.toLocaleString()} ₫
                  </div>
                  <div className="result-sub">
                    {macroLang === 'vi' ? 'Tổng tiền gốc + lãi nhận được: ' : '滿期本利和：'}
                    {(depositPrincipal + depositInterestEarned).toLocaleString()} ₫
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator 3: Loan Payment Amortization */}
            <div className="macro-calc-card">
              <div className="calc-card-header">
                <Percent size={20} className="calc-icon" />
                <div>
                  <h3 className="calc-title">{macroLang === 'vi' ? 'Tính Lãi Vay & Trả Góp Doanh nghiệp' : '企業貸款與廠房融資月供試算'}</h3>
                  <p className="calc-desc">{macroLang === 'vi' ? 'Tính phương án gốc lãi đều hàng tháng' : '採本息均攤法 (Amortization) 估算資金成本'}</p>
                </div>
              </div>

              <div className="calc-body">
                <div className="calc-input-group">
                  <label>{macroLang === 'vi' ? 'Số tiền vay (VND):' : '融資額度 (VND)：'}</label>
                  <input
                    type="number"
                    step="50000000"
                    value={loanPrincipal}
                    onChange={(e) => setLoanPrincipal(parseFloat(e.target.value) || 0)}
                    className="macro-input"
                  />
                  <small className="input-hint">
                    {macroLang === 'vi' ? `Quy đổi: ${(loanPrincipal / 1000000).toFixed(0)} triệu VND` : `約 ${(loanPrincipal / 100000000).toFixed(1)} 億越盾`}
                  </small>
                </div>

                <div className="calc-row">
                  <div className="calc-input-group">
                    <label>{macroLang === 'vi' ? 'Lãi suất (%/năm):' : '年利率 (%)：'}</label>
                    <input
                      type="number"
                      step="0.1"
                      value={loanInterestRate}
                      onChange={(e) => setLoanInterestRate(parseFloat(e.target.value) || 0)}
                      className="macro-input"
                    />
                  </div>
                  <div className="calc-input-group">
                    <label>{macroLang === 'vi' ? 'Thời hạn vay (Năm):' : '借款期限 (年)：'}</label>
                    <input
                      type="number"
                      value={loanTenorYears}
                      onChange={(e) => setLoanTenorYears(parseInt(e.target.value) || 1)}
                      className="macro-input"
                    />
                  </div>
                </div>

                <div className="calc-result-box">
                  <div className="result-label">{macroLang === 'vi' ? 'Số tiền trả đều mỗi tháng:' : '每月應繳本息 (月供)：'}</div>
                  <div className="result-val text-blue">
                    {loanMonthlyPayment.toLocaleString()} ₫ / {macroLang === 'vi' ? 'tháng' : '月'}
                  </div>
                  <div className="result-sub">
                    {macroLang === 'vi' ? 'Tổng tiền lãi cả kỳ: ' : '全期總利息支出：'}
                    {loanTotalInterest.toLocaleString()} ₫
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 10. Section: Bilingual Lexicon ── */}
      {activeSection === 'lexicon' && (
        <section className="macro-section macro-container">
          <div className="macro-section-header">
            <div>
              <div className="macro-section-pretitle">BILINGUAL POLITICAL & ECONOMIC LEXICON</div>
              <h2 className="macro-section-title">
                {macroLang === 'vi' ? (
                  <>📖 Thuật ngữ Kinh tế - Tài chính & Gốc từ Hán Việt</>
                ) : (
                  <>📖 越南總體政經金融必備雙語詞彙與漢越詞根庫</>
                )}
              </h2>
            </div>
          </div>

          <div className="macro-lexicon-grid">
            {macroVocabularyGlossary.map((item, idx) => (
              <div key={idx} className="macro-lexicon-card">
                <div className="lexicon-header">
                  <div className="lexicon-term">{item.viet}</div>
                  <button
                    className="lexicon-audio-btn"
                    onClick={() => handleSpeak(item.viet, `macro-${idx}`)}
                    title={macroLang === 'vi' ? 'Nghe phát âm' : '播放越語發音'}
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
                <div className="lexicon-hanviet">漢越音：【{item.hanViet}】</div>
                <div className="lexicon-meaning">{item.meaning}</div>
                <div className="lexicon-sample">
                  <b>{macroLang === 'vi' ? 'Ví dụ: ' : '例句：'}</b>{item.sample}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 11. Section: Official Reference Sources & Links (Nguồn tham khảo chính thống) ── */}
      {activeSection === 'sources' && (
        <section className="macro-section macro-container">
          <div className="macro-section-header">
            <div>
              <div className="macro-section-pretitle">OFFICIAL INTELLIGENCE & REFERENCE SOURCES</div>
              <h2 className="macro-section-title">
                🔗 {t.sourcesHeading}
              </h2>
              <p className="macro-section-desc" style={{ marginTop: '8px', color: 'var(--macro-fg-muted)', fontSize: '14px' }}>
                {t.sourcesSub}
              </p>
            </div>
          </div>

          <div className="macro-sources-toolbar">
            <div className="macro-sources-filter-pills">
              <button
                className={`macro-source-filter-btn ${refCategory === 'all' ? 'active' : ''}`}
                onClick={() => setRefCategory('all')}
              >
                {t.sourcesFilterAll} ({officialReferenceSources.length})
              </button>
              <button
                className={`macro-source-filter-btn ${refCategory === 'gov' ? 'active' : ''}`}
                onClick={() => setRefCategory('gov')}
              >
                {t.sourcesFilterGov}
              </button>
              <button
                className={`macro-source-filter-btn ${refCategory === 'banking' ? 'active' : ''}`}
                onClick={() => setRefCategory('banking')}
              >
                {t.sourcesFilterBanking}
              </button>
              <button
                className={`macro-source-filter-btn ${refCategory === 'media' ? 'active' : ''}`}
                onClick={() => setRefCategory('media')}
              >
                {t.sourcesFilterMedia}
              </button>
            </div>
          </div>

          <div className="macro-sources-grid">
            {filteredSources.map(src => (
              <div key={src.id} className="macro-source-card">
                <div>
                  <div className="source-card-top">
                    <span className={`source-cat-badge cat-${src.category}`}>
                      {macroLang === 'vi' ? src.categoryLabelVi : src.categoryLabel}
                    </span>
                    <span className="source-freq-badge">
                      ⏱️ {macroLang === 'vi' ? src.freqVi : src.freq}
                    </span>
                  </div>
                  <h3 className="source-card-title">
                    {macroLang === 'vi' ? src.nameVi : src.name}
                  </h3>
                  <div className="source-card-org">{src.org}</div>
                  <p className="source-card-scope">
                    {macroLang === 'vi' ? src.scopeVi : src.scope}
                  </p>
                </div>
                <div className="source-card-footer">
                  <span className="source-domain-pill">{src.domain}</span>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="source-link-btn"
                  >
                    {t.visitLink} <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 12. In-App Modal Reader (Paperluz format) ── */}
      {activeModalDossier && (
        <div className="macro-modal-overlay" onClick={() => setActiveModalDossier(null)}>
          <div className="macro-modal-dialog" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="macro-modal-header">
              <div className="macro-modal-header-meta">
                <span className="dossier-num-badge">{activeModalDossier.issueNo}</span>
                <span className="dossier-cat-pill">
                  {macroLang === 'vi' ? activeModalDossier.categoryLabelVi : activeModalDossier.categoryLabel}
                </span>
                <span className="modal-date-tag">
                  {macroLang === 'vi' ? 'Ngày phát hành:' : '發布日期：'}{activeModalDossier.date}
                </span>
                <span className="modal-read-tag">
                  {macroLang === 'vi' ? 'Thời lượng đọc:' : '閱讀時間：'}
                  {macroLang === 'vi' ? activeModalDossier.readTimeVi : activeModalDossier.readTime}
                </span>
              </div>
              <div className="macro-modal-header-actions">
                <button
                  className="modal-action-btn"
                  onClick={() => handleCopySummary(activeModalDossier)}
                >
                  {copiedSummaryId === activeModalDossier.id ? (
                    <>
                      <Check size={14} color="#10b981" /> {t.copiedToast}
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> {t.copySummary}
                    </>
                  )}
                </button>
                <button
                  className="modal-close-btn"
                  onClick={() => setActiveModalDossier(null)}
                  aria-label={t.closeModal}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Article Content */}
            <div className="macro-modal-body">
              <h1 className="modal-article-title">
                {macroLang === 'vi' ? activeModalDossier.titleVi : activeModalDossier.title}
              </h1>
              <div className="modal-article-subtitle">
                {macroLang === 'vi' ? activeModalDossier.subtitleVi : activeModalDossier.subtitle}
              </div>
              <div className="modal-author-strip">
                <span>{macroLang === 'vi' ? 'Tác giả:' : '撰述：'}{macroLang === 'vi' ? activeModalDossier.authorVi : activeModalDossier.author}</span>
                <span>{macroLang === 'vi' ? 'Từ khóa:' : '標籤：'}{(macroLang === 'vi' ? activeModalDossier.tagsVi : activeModalDossier.tags).join(' · ')}</span>
              </div>

              {/* KPI Bar */}
              <div className="modal-kpi-bar">
                {activeModalDossier.kpis.map((kpi, idx) => (
                  <div key={idx} className="modal-kpi-item">
                    <span className="m-kpi-label">
                      {macroLang === 'vi' ? (kpi.labelVi || kpi.label) : kpi.label}
                    </span>
                    <span className={`m-kpi-val text-${kpi.type}`}>{kpi.val}</span>
                  </div>
                ))}
              </div>

              {/* Executive Summary Box */}
              <div className="modal-summary-box">
                <div className="summary-box-title">
                  <Award size={16} />
                  {macroLang === 'vi' ? ' Nhận định cốt lõi & Khuyến nghị chính sách (Executive Takeaways)' : ' 核心研判與智庫結論 (Executive Takeaways)'}
                </div>
                <p>{macroLang === 'vi' ? activeModalDossier.summaryVi : activeModalDossier.summary}</p>
              </div>

              {/* In-depth Sections */}
              <div className="modal-sections-wrap">
                {activeModalDossier.sections.map((sec, sIdx) => (
                  <section key={sIdx} className="modal-section-block">
                    <h3 className="modal-section-heading">
                      {macroLang === 'vi' ? (sec.headingVi || sec.heading) : sec.heading}
                    </h3>
                    <div className="modal-section-text">
                      {(macroLang === 'vi' ? (sec.contentVi || sec.content) : sec.content)
                        .split('\n\n')
                        .map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Terms Glossary within Modal */}
              <div className="modal-terms-box">
                <h4 className="terms-box-title">
                  <BookOpen size={16} />
                  {macroLang === 'vi' ? ' Thuật ngữ chuyên ngành đối chiếu (Bilingual Terms)' : ' 本專案核心越文專業術語對照 (Bilingual Terms)'}
                </h4>
                <div className="modal-terms-grid">
                  {activeModalDossier.terms.map((tItem, tIdx) => (
                    <div key={tIdx} className="modal-term-card">
                      <div className="term-viet">{tItem.term}</div>
                      <div className="term-hanviet">漢越：【{tItem.hanViet}】</div>
                      <div className="term-meaning">{tItem.meaning}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="macro-modal-footer">
              <span className="footer-copyright">
                {macroLang === 'vi'
                  ? '© Viet Learning Hub · Trung tâm Dữ liệu Kinh tế Việt Nam ｜ Thông tin vĩ mô & Báo cáo chuyên sâu'
                  : '© 越語學習通 · 越南政經情報智庫 ｜ 權威政經數據與深度分析'}
              </span>
              <button
                className="modal-footer-close-btn"
                onClick={() => setActiveModalDossier(null)}
              >
                {t.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
