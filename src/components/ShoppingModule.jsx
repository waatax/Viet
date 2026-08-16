import React, { useState, useEffect } from 'react';
import { ShoppingBag, DollarSign, Calculator, Volume2, ArrowRight, Landmark, Tag, ShieldCheck, Sparkles, Coins } from 'lucide-react';
import { numbersAndCurrency } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const ShoppingModule = ({ selectedAccent }) => {
  const { learningMode, loc, t } = useLanguage();
  const [inputAmount, setInputAmount] = useState('2500000000'); // Default 2.5 Billion VND
  const [exchangeRateTwd, setExchangeRateTwd] = useState(780); // ~780 VND per TWD
  const [exchangeRateUsd, setExchangeRateUsd] = useState(25400); // ~25,400 VND per USD
  const [activeTabSub, setActiveTabSub] = useState('converter'); // 'converter', 'brackets', 'banking'
  const [activeKey, setActiveKey] = useState(null);

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
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
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

  return (
    <div className="module-container">
      {/* Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <Coins color="var(--brand-gold)" />
          {learningMode === 'zh' ? '數字、百億級貨幣朗讀與越南實用物價換算器' : 'Vietnamese Numbers, Currency & Real VND Price Converter'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '從萬 (Mười nghìn/ngàn)、百萬 (Triệu) 到十億 (Tỷ)，輸入任意金額即時換算台幣、美金與標準越文口語大寫發音'
            : 'Convert any VND amount into spoken Vietnamese, TWD, and USD with native pronunciation for street shopping and banking'}
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
          {learningMode === 'zh' ? '銀行與殺價短句' : 'Banking & Bargaining'}
        </button>
      </div>

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
          </div>

          {/* Currency Equivalent Matrix */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', fontWeight: 600 }}>🇹🇼 約合新台幣 (TWD)</div>
              <div style={{ fontSize: '1.5em', fontWeight: 900, color: 'var(--brand-primary)', margin: '0.2rem 0' }}>
                NT$ {parseInt(twdEquivalent, 10).toLocaleString()}
              </div>
              <div style={{ fontSize: '0.78em', color: 'var(--text-muted)' }}>匯率基準: 1 TWD ≈ {exchangeRateTwd} VND</div>
            </div>

            <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', fontWeight: 600 }}>🇺🇸 約合美元 (USD)</div>
              <div style={{ fontSize: '1.5em', fontWeight: 900, color: 'var(--brand-green)', margin: '0.2rem 0' }}>
                $ {parseFloat(usdEquivalent).toLocaleString()}
              </div>
              <div style={{ fontSize: '0.78em', color: 'var(--text-muted)' }}>匯率基準: 1 USD ≈ {exchangeRateUsd} VND</div>
            </div>
          </div>
        </div>
      )}

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

      {activeTabSub === 'banking' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem' }}>
            {learningMode === 'zh' ? '銀行、夜市換匯與殺價高頻短句' : 'Banking & Market Bargaining Phrases'}
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
