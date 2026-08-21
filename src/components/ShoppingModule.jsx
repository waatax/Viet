import React, { useState, useEffect } from 'react';
import {
  ShoppingBag, DollarSign, Calculator, Volume2, ArrowRight, Landmark,
  Tag, ShieldCheck, Sparkles, Coins, Search, CheckCircle2, Gift,
  Shirt, Apple, CreditCard, Flame, HelpCircle, Play, Pause
} from 'lucide-react';
import { numbersAndCurrency } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const ShoppingModule = ({ selectedAccent }) => {
  const { learningMode, loc, t } = useLanguage();
  const [inputAmount, setInputAmount] = useState('2500000000'); // Default 2.5 Billion VND
  const [exchangeRateTwd, setExchangeRateTwd] = useState(780); // ~780 VND per TWD
  const [exchangeRateUsd, setExchangeRateUsd] = useState(25400); // ~25,400 VND per USD
  const [activeTabSub, setActiveTabSub] = useState('converter'); // 'converter', 'shopping', 'brackets', 'banking'
  const [activeKey, setActiveKey] = useState(null);
  const [shoppingCategory, setShoppingCategory] = useState('all');
  const [shoppingSearch, setShoppingSearch] = useState('');

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  // Helper for 3 digits conversion in Vietnamese
  const readThreeDigits = (n, isLeading = false) => {
    const digits = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    const hundreds = Math.floor(n / 100);
    const tens = Math.floor((n % 100) / 10);
    const ones = n % 10;
    
    let result = [];
    
    if (hundreds > 0 || !isLeading) {
      result.push(digits[hundreds] + ' trăm');
    }
    
    if (tens === 0 && ones > 0) {
      if (hundreds > 0 || !isLeading) {
        result.push('linh ' + (ones === 4 ? 'tư' : digits[ones]));
      } else {
        result.push(digits[ones]);
      }
    } else if (tens === 1) {
      result.push('mười' + (ones === 5 ? ' lăm' : ones > 0 ? ' ' + digits[ones] : ''));
    } else if (tens > 1) {
      let onesWord = '';
      if (ones === 1) onesWord = ' mốt';
      else if (ones === 4) onesWord = ' tư';
      else if (ones === 5) onesWord = ' lăm';
      else if (ones > 0) onesWord = ' ' + digits[ones];
      result.push(digits[tens] + ' mươi' + onesWord);
    }
    
    return result.join(' ');
  };

  // Comprehensive 0 - 100 Billion Vietnamese number-to-text converter
  const convertNumberToVietnamese = (numStr) => {
    const n = parseInt(numStr, 10);
    if (isNaN(n)) return 'Chưa nhập số';
    if (n === 0) return 'Không đồng';

    const thousandWord = selectedAccent === 'south' ? 'ngàn' : 'nghìn';

    const billion = Math.floor(n / 1000000000);
    const million = Math.floor((n % 1000000000) / 1000000);
    const thousand = Math.floor((n % 1000000) / 1000);
    const remainder = n % 1000;

    let parts = [];
    let isLeading = true;

    if (billion > 0) {
      parts.push(readThreeDigits(billion, isLeading) + ' tỷ');
      isLeading = false;
    }
    if (million > 0) {
      parts.push(readThreeDigits(million, isLeading) + ' triệu');
      isLeading = false;
    }
    if (thousand > 0) {
      parts.push(readThreeDigits(thousand, isLeading) + ' ' + thousandWord);
      isLeading = false;
    }
    if (remainder > 0) {
      parts.push(readThreeDigits(remainder, isLeading));
    }

    const text = parts.join(' ').trim() + ' đồng';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const handleSpeakText = (text, key) => {
    if (isPlayingFull) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
  };

  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [playMode, setPlayMode] = useState('bilingual');
  const isPlayingFullRef = React.useRef(false);
  const timerRef = React.useRef(null);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isPlayingFullRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const playInSequence = (index, part = 'bilingual-first', currentPlayMode = playMode) => {
    const listToPlay = filteredShoppingItems; // Only play phrases list for now
    
    if (!isPlayingFullRef.current || index >= listToPlay.length) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      return;
    }

    const item = listToPlay[index];
    const isBilingual = currentPlayMode === 'bilingual';

    if (isBilingual && part === 'bilingual-first') {
      const nativeText = learningMode === 'zh' ? item.zh : item.en;
      const nativeLang = learningMode === 'zh' ? 'zh' : 'en';

      audioEngine.speak(nativeText, {
        lang: nativeLang,
        key: `seq_shop_native_${index}`,
        onEnd: () => {
          if (!isPlayingFullRef.current) return;
          timerRef.current = setTimeout(() => {
            if (isPlayingFullRef.current) playInSequence(index, 'viet', currentPlayMode);
          }, 400);
        }
      });
    } else {
      audioEngine.speak(item.viet, {
        accent: selectedAccent,
        lang: 'vi',
        key: `seq_shop_viet_${index}`,
        onEnd: () => {
          if (!isPlayingFullRef.current) return;
          timerRef.current = setTimeout(() => {
            if (isPlayingFullRef.current) playInSequence(index + 1, 'bilingual-first', currentPlayMode);
          }, 1200); 
        }
      });
    }
  };

  const handlePlayFull = (mode = 'bilingual') => {
    if (isPlayingFull) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      audioEngine.stop();
      return;
    }
    
    setPlayMode(mode);
    setIsPlayingFull(true);
    isPlayingFullRef.current = true;
    playInSequence(0, 'bilingual-first', mode);
  };

  const twdEquivalent = (parseInt(inputAmount, 10) / exchangeRateTwd || 0).toFixed(0);
  const usdEquivalent = (parseInt(inputAmount, 10) / exchangeRateUsd || 0).toFixed(2);
  const vietnameseSpokenText = convertNumberToVietnamese(inputAmount);

  // Common Presets (Coffee, Pho, Massage, Hotel, Tour, Apartment)
  const presets = [
    { labelZh: '☕ 冰咖啡 3.5萬', labelEn: '☕ Iced Coffee 35k', amount: '35000', noteClass: 'note-20k' },
    { labelZh: '🍜 生牛肉河粉 6.5萬', labelEn: '🍜 Beef Pho 65k', amount: '65000', noteClass: 'note-50k' },
    { labelZh: '🦞 海鮮熱炒 35萬', labelEn: '🦞 Seafood 350k', amount: '350000', noteClass: 'note-200k' },
    { labelZh: '🏨 渡假飯店 150萬', labelEn: '🏨 Resort Hotel 1.5M', amount: '1500000', noteClass: 'note-500k' },
    { labelZh: '🛵 機車買賣 2500萬', labelEn: '🛵 Scooter 25M', amount: '25000000', noteClass: 'note-500k' },
    { labelZh: '🏢 西貢置產 25億', labelEn: '🏢 Real Estate 2.5B', amount: '2500000000', noteClass: 'note-500k' }
  ];

  // High Frequency Shopping Data Resolution
  const shoppingData = numbersAndCurrency.highFrequencyShopping || {
    categories: [
      { id: 'all', nameZh: '全部購物情境 (45+句)', nameEn: 'All Shopping (45+)' }
    ],
    items: numbersAndCurrency.shoppingPhrases || [],
    vocabulary: []
  };

  const filteredShoppingItems = (shoppingData.items || []).filter(item => {
    const matchesCat = shoppingCategory === 'all' || item.category === shoppingCategory;
    const q = shoppingSearch.toLowerCase().trim();
    if (!q) return matchesCat;
    return matchesCat && (
      item.viet.toLowerCase().includes(q) ||
      (item.zh && item.zh.toLowerCase().includes(q)) ||
      (item.en && item.en.toLowerCase().includes(q)) ||
      (item.tag && item.tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="module-container">
      {/* Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <Coins color="var(--brand-gold)" />
          {learningMode === 'zh' ? '數字、百億級貨幣朗讀與高頻購物實戰手冊' : 'Vietnamese Numbers, Currency & Street Shopping Master'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '涵蓋百億級金額轉換、夜市殺價大絕招、特產伴手禮、服飾試穿、生鮮秤重與臨櫃銀行對話，配備原生雙口音發音'
            : 'From billion VND conversions to street market bargaining tactics, local souvenirs, clothing sizes, and banking dialogues with full native audio.'}
        </p>
      </div>

      {/* Sub tabs */}
      <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button
          className={`control-btn ${activeTabSub === 'converter' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'converter' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'converter' ? '#fff' : 'inherit' }}
          onClick={() => setActiveTabSub('converter')}
        >
          <Calculator size={16} />
          {learningMode === 'zh' ? '百億級口語換算器' : 'VND Spoken Converter'}
        </button>
        <button
          className={`control-btn ${activeTabSub === 'shopping' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'shopping' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'shopping' ? '#fff' : 'inherit' }}
          onClick={() => setActiveTabSub('shopping')}
        >
          <ShoppingBag size={16} />
          {learningMode === 'zh' ? '高頻購物實戰手冊' : 'Shopping & Bargaining'}
        </button>
        <button
          className={`control-btn ${activeTabSub === 'brackets' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'brackets' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'brackets' ? '#fff' : 'inherit' }}
          onClick={() => setActiveTabSub('brackets')}
        >
          <Tag size={16} />
          {learningMode === 'zh' ? '高頻物價速記階梯' : 'Price Tiers Reference'}
        </button>
        <button
          className={`control-btn ${activeTabSub === 'banking' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'banking' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'banking' ? '#fff' : 'inherit' }}
          onClick={() => setActiveTabSub('banking')}
        >
          <Landmark size={16} />
          {learningMode === 'zh' ? '銀行金融與臨櫃對話' : 'Banking & Dialogues'}
        </button>
      </div>

      {/* TAB 1: CONVERTER */}
      {activeTabSub === 'converter' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <DollarSign color="var(--brand-gold)" />
            {learningMode === 'zh' ? '越幣 (VND) 互動轉換台' : 'VND Interactive Spoken Terminal'}
          </h3>

          {/* Quick Presets with Polymer Banknote styles */}
          <div style={{ marginBottom: '1.2rem' }}>
            <div style={{ fontSize: '0.86em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              ⚡ {learningMode === 'zh' ? '高頻生活與置產預設金額：' : 'Quick Presets:'}
            </div>
            <div className="banknote-grid">
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  className={`banknote-pill ${p.noteClass} ${inputAmount === p.amount ? 'active' : ''}`}
                  onClick={() => setInputAmount(p.amount)}
                  aria-pressed={inputAmount === p.amount}
                >
                  <span>{learningMode === 'zh' ? p.labelZh : p.labelEn}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Input Field */}
          <div style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.9em', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              {learningMode === 'zh' ? '輸入越南盾金額 (VND)：' : 'Enter Vietnamese Dong (VND):'}
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                style={{
                  flex: '1 1 240px',
                  fontSize: '1.4em',
                  fontWeight: 800,
                  padding: '0.65rem 1rem',
                  background: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontFamily: 'var(--font-family-mono)'
                }}
              />
              <span style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--brand-gold)' }}>₫ VND</span>
            </div>
          </div>

          {/* Spoken Vietnamese Result Card */}
          <div style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--brand-accent)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <span style={{ fontSize: '0.82em', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {learningMode === 'zh' ? '越語標準口語大寫：' : 'Vietnamese Spoken Format:'}
                </span>
                <div style={{ fontSize: '1.45em', fontWeight: 800, color: 'var(--text-primary)', margin: '0.4rem 0' }}>
                  {vietnameseSpokenText}
                </div>
              </div>
              <button
                className={`speaker-btn ${activeKey === inputAmount ? 'playing' : ''}`}
                onClick={() => handleSpeakText(vietnameseSpokenText, inputAmount)}
                title="朗讀此金額發音"
                style={{ width: '48px', height: '48px' }}
              >
                <Volume2 size={22} />
              </button>
            </div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              💡 {selectedAccent === 'north' ? '北越慣用「Nghìn」' : '南越慣用「Ngàn」'} · 尾數 1 讀 Mốt · 尾數 5 讀 Lăm
            </div>
          </div>

          {/* Exchange Rates Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div className="learning-card" style={{ background: 'var(--bg-main)', borderLeft: '4px solid var(--brand-primary)' }}>
              <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>{learningMode === 'zh' ? '約合新台幣 (TWD)' : 'Approx. TWD'}</div>
              <div style={{ fontSize: '1.6em', fontWeight: 900, color: 'var(--brand-primary)', margin: '0.3rem 0' }}>
                NT$ {parseInt(twdEquivalent, 10).toLocaleString()}
              </div>
              <div style={{ fontSize: '0.78em', color: 'var(--text-muted)' }}>匯率基準: 1 TWD ≈ {exchangeRateTwd} VND</div>
            </div>

            <div className="learning-card" style={{ background: 'var(--bg-main)', borderLeft: '4px solid var(--brand-gold)' }}>
              <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>{learningMode === 'zh' ? '約合美金 (USD)' : 'Approx. USD'}</div>
              <div style={{ fontSize: '1.6em', fontWeight: 900, color: 'var(--brand-gold)', margin: '0.3rem 0' }}>
                $ {parseFloat(usdEquivalent).toLocaleString()}
              </div>
              <div style={{ fontSize: '0.78em', color: 'var(--text-muted)' }}>匯率基準: 1 USD ≈ {exchangeRateUsd} VND</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HIGH-FREQUENCY SHOPPING & BARGAINING */}
      {activeTabSub === 'shopping' && (
        <div className="simulator-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25em', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShoppingBag color="var(--brand-gold)" />
                {learningMode === 'zh' ? '高頻購物與市場殺價必備手冊' : 'High-Frequency Shopping & Market Bargaining'}
              </h3>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {learningMode === 'zh'
                  ? '精選 45+ 句夜市殺價、特產伴手禮、服飾試穿、水果秤重與行動支付高頻句型，配備真人朗讀與實戰秘技'
                  : 'Master 45+ practical shopping phrases across bargaining, souvenirs, clothing, fruit markets, and payments.'}
              </p>
            </div>
          </div>

          {/* Search & Category Filter */}
          <div style={{ background: 'var(--bg-main)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div className="search-input-wrapper">
                <Search size={17} className="search-icon" />
                <input
                  type="text"
                  placeholder={learningMode === 'zh' ? '搜尋購物短句 (例: 咖啡, 腰果, 殺價, 便宜, 尺寸, 芒果, 試穿, 發票)...' : 'Search shopping phrases & vocab...'}
                  value={shoppingSearch}
                  onChange={(e) => setShoppingSearch(e.target.value)}
                  className="scenario-search-input"
                />
              </div>

              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                {shoppingData.categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`category-filter-chip ${shoppingCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setShoppingCategory(cat.id)}
                    style={{
                      fontSize: '0.84em',
                      padding: '0.4rem 0.85rem',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {learningMode === 'zh' ? cat.nameZh : cat.nameEn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Phrase Cards Grid */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.9rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '1.05em', fontWeight: 800, color: 'var(--brand-accent)' }}>
                  💬 {learningMode === 'zh' ? `情境短句 (${filteredShoppingItems.length} 句)` : `Phrases (${filteredShoppingItems.length})`}
                </h4>
                <div style={{ fontSize: '0.82em', color: 'var(--text-muted)' }}>
                  💡 點擊喇叭即享 {selectedAccent === 'north' ? '🏛️ 北越音' : '🌴 南越音'} 真人朗讀
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button 
                  className={`control-btn play-full-btn ${isPlayingFull && playMode === 'bilingual' ? 'playing' : ''}`}
                  onClick={() => handlePlayFull('bilingual')}
                  style={{ 
                    background: isPlayingFull && playMode === 'bilingual' ? 'var(--brand-primary)' : 'var(--brand-green)', 
                    color: '#fff',
                    opacity: isPlayingFull && playMode !== 'bilingual' ? 0.6 : 1,
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.85em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {isPlayingFull && playMode === 'bilingual' ? <Pause size={14} /> : <Play size={14} />}
                  <span>
                    {isPlayingFull && playMode === 'bilingual'
                      ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
                      : (learningMode === 'zh' ? <>播放: 中+越</> : <>Play: Bilingual</>)}
                  </span>
                </button>

                <button 
                  className={`control-btn play-full-btn ${isPlayingFull && playMode === 'viet-only' ? 'playing' : ''}`}
                  onClick={() => handlePlayFull('viet-only')}
                  style={{ 
                    background: isPlayingFull && playMode === 'viet-only' ? 'var(--brand-primary)' : 'var(--brand-accent, #8b5cf6)', 
                    color: '#fff',
                    opacity: isPlayingFull && playMode !== 'viet-only' ? 0.6 : 1,
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.85em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {isPlayingFull && playMode === 'viet-only' ? <Pause size={14} /> : <Play size={14} />}
                  <span>
                    {isPlayingFull && playMode === 'viet-only'
                      ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
                      : (learningMode === 'zh' ? <>播放: 純越文</> : <>Play: Viet</>)}
                  </span>
                </button>
              </div>
            </div>

            <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}>
              {filteredShoppingItems.map((item, idx) => {
                const itemKey = `shop_item_${idx}_${item.id || item.viet}`;
                const isPlaying = activeKey === itemKey || activeKey === item.viet;
                return (
                  <div key={idx} className={`learning-card ${isPlaying ? 'playing-card' : ''}`} style={{ background: 'var(--bg-main)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                      <span className="tone-symbol" style={{ fontSize: '0.78em', background: 'var(--bg-accent)', color: 'var(--brand-gold)' }}>
                        {item.tag || '購物必備'}
                      </span>
                      <button
                        className={`speaker-btn mini-btn ${isPlaying ? 'playing' : ''}`}
                        onClick={() => handleSpeakText(item.viet, itemKey)}
                        title="朗讀此句"
                      >
                        <Volume2 size={15} />
                      </button>
                    </div>
                    <div style={{ fontSize: '1.1em', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: '1.4' }}>
                      {item.viet}
                    </div>
                    <div style={{ fontSize: '0.92em', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      {learningMode === 'zh' ? item.zh : item.en}
                    </div>
                    {item.tipZh && (
                      <div style={{ fontSize: '0.78em', color: 'var(--text-muted)', marginTop: 'auto', borderTop: '1px dashed var(--border-color)', paddingTop: '0.4rem' }}>
                        💡 {learningMode === 'zh' ? item.tipZh : item.tag}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* High Frequency Shopping Vocabulary Deck */}
          {shoppingData.vocabulary && shoppingData.vocabulary.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.05em', fontWeight: 800, color: 'var(--brand-gold)', marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={16} />
                {learningMode === 'zh' ? '越南必買伴手禮與購物核心單字庫' : 'Core Shopping Vocabulary & Souvenirs'}
              </h4>
              <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))' }}>
                {shoppingData.vocabulary.map((vocab, vIdx) => {
                  const vKey = `vocab_shop_${vIdx}`;
                  const isPlaying = activeKey === vKey || activeKey === vocab.viet;
                  return (
                    <div key={vIdx} className={`learning-card ${isPlaying ? 'playing-card' : ''}`} style={{ background: 'var(--bg-main)', padding: '0.9rem 1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '1.05em', fontWeight: 800, color: 'var(--brand-primary)' }}>{vocab.viet}</div>
                          <div style={{ fontSize: '0.78em', color: 'var(--brand-gold)', fontFamily: 'var(--font-family-mono)' }}>{vocab.ipa}</div>
                          <div style={{ fontSize: '0.86em', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                            {learningMode === 'zh' ? vocab.zh : vocab.en}
                          </div>
                        </div>
                        <button
                          className={`speaker-btn mini-btn ${isPlaying ? 'playing' : ''}`}
                          onClick={() => handleSpeakText(vocab.viet, vKey)}
                          title="朗讀單字"
                        >
                          <Volume2 size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Pro Bargaining Tips */}
          <div style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', padding: '1.4rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--brand-accent)' }}>
            <h4 style={{ fontSize: '1.05em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={18} />
              {learningMode === 'zh' ? '在地達人：越南夜市與市場 5 大殺價金律' : 'Local Pro-Tips: 5 Golden Rules of Vietnam Shopping'}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.8rem', fontSize: '0.88em', color: 'var(--text-secondary)' }}>
              <div>
                <strong>1. 早晨開市吉利單 (Mở hàng)：</strong>
                <br />
                越南商家極重開市好彩頭，早市第一位客人親切問價，老闆通常願意給予最大折扣促成首單。
              </div>
              <div>
                <strong>2. 貨比三家不吃虧 (So sánh giá)：</strong>
                <br />
                觀光夜市（如濱城市場、河內同春市場）同款服飾腰果每攤報價落差大，多問兩攤即可掌握底價。
              </div>
              <div>
                <strong>3. 現切水果認明公斤 (Ký / kg)：</strong>
                <br />
                越南計價單位為公斤 (kg)，購買芒果榴槤時可先詢問「Một ký bao nhiêu?」，並請店家去皮現切裝盒。
              </div>
              <div>
                <strong>4. 退稅發票必開紅單 (Hóa đơn đỏ)：</strong>
                <br />
                在連鎖店或百貨購買高單價商品辦理機場退稅，需索取正式加值稅統一紅發票 (Hóa đơn đỏ VAT)。
              </div>
              <div>
                <strong>5. 檢查找零鈔票完整度 (Kiểm tra tiền)：</strong>
                <br />
                收到找零塑膠鈔 (Polymer) 時請留意是否有裂痕或破損，破損鈔票常在其他店家被拒收，有破損可當場要求換新。
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PRICE TIERS */}
      {activeTabSub === 'brackets' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem' }}>
            {learningMode === 'zh' ? '越南日常生活與商業物價分級階梯' : 'Everyday VND Price Tiers'}
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{learningMode === 'zh' ? '面額區間' : 'VND Tier'}</th>
                  <th>{learningMode === 'zh' ? '越文口語' : 'Vietnamese'}</th>
                  <th>{learningMode === 'zh' ? '約合台幣' : 'TWD Approx'}</th>
                  <th>{learningMode === 'zh' ? '日常購買力實例' : 'Real Purchases'}</th>
                  <th>{learningMode === 'zh' ? '朗讀' : 'Listen'}</th>
                </tr>
              </thead>
              <tbody>
                {(numbersAndCurrency.priceTiers || []).map((tier, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 800, color: 'var(--brand-accent)' }}>{tier.range}</td>
                    <td style={{ fontWeight: 700 }}>{tier.viet}</td>
                    <td style={{ color: 'var(--brand-primary)', fontWeight: 700 }}>{tier.twd}</td>
                    <td>{learningMode === 'zh' ? tier.examplesZh : tier.examplesEn}</td>
                    <td>
                      <button
                        className={`speaker-btn mini-btn ${activeKey === `tier_${idx}` ? 'playing' : ''}`}
                        onClick={() => handleSpeakText(tier.viet, `tier_${idx}`)}
                        title="朗讀"
                      >
                        <Volume2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: BANKING & DIALOGUES */}
      {activeTabSub === 'banking' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem' }}>
            {learningMode === 'zh' ? '銀行金融、外幣換匯與商務對話' : 'Banking, Currency Exchange & Business Dialogues'}
          </h3>
          <div className="grid-cards" style={{ marginBottom: '2rem' }}>
            {(numbersAndCurrency.shoppingPhrases || []).map((phrase, idx) => (
              <div key={idx} className="learning-card" style={{ background: 'var(--bg-main)' }}>
                <div style={{ fontSize: '1.15em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.3rem' }}>
                  {phrase.viet}
                </div>
                <div style={{ fontSize: '0.92em', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  {learningMode === 'zh' ? phrase.zh : phrase.en}
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8em', color: 'var(--text-muted)' }}>💡 {phrase.tag}</span>
                  <button
                    className={`speaker-btn mini-btn ${activeKey === `shop_ph_${idx}` ? 'playing' : ''}`}
                    onClick={() => handleSpeakText(phrase.viet, `shop_ph_${idx}`)}
                    title="朗讀"
                  >
                    <Volume2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {numbersAndCurrency.bankingDialogues && (
            <div>
              <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Landmark color="var(--brand-gold)" />
                {learningMode === 'zh' ? '銀行櫃台實境對話 (Banking Practical Dialogues)' : 'Banking Counter Practical Dialogues'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {numbersAndCurrency.bankingDialogues.map((diag, dIdx) => (
                  <div key={dIdx} className="learning-card" style={{ background: 'var(--bg-main)', padding: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.05em', fontWeight: 800, color: 'var(--brand-gold)', marginBottom: '0.75rem' }}>
                      {learningMode === 'zh' ? diag.titleZh : diag.titleEn}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {diag.lines.map((line, lIdx) => (
                        <div key={lIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card)' }}>
                          <div>
                            <div style={{ fontSize: '0.95em', fontWeight: 700, color: 'var(--text-primary)' }}>
                              <span style={{ color: 'var(--brand-primary)', marginRight: '0.4rem' }}>{line.speaker}:</span>
                              {line.viet}
                            </div>
                            <div style={{ fontSize: '0.85em', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                              {learningMode === 'zh' ? line.zh : line.en}
                            </div>
                          </div>
                          <button
                            className={`speaker-btn mini-btn ${activeKey === `bank_${dIdx}_${lIdx}` ? 'playing' : ''}`}
                            onClick={() => handleSpeakText(line.viet, `bank_${dIdx}_${lIdx}`)}
                            title="朗讀對話句"
                          >
                            <Volume2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
