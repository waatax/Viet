import React, { useState, useEffect } from 'react';
import { ShoppingBag, DollarSign, Calculator, Volume2, ArrowRight, Landmark, Tag, ShieldCheck } from 'lucide-react';
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

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <ShoppingBag color="var(--brand-primary)" />
          {learningMode === 'zh' ? '0 - 100 億數字教學、價格區帶與銀行金融會話' : '0 - 10 Billion Numbers, Price Brackets & Banking Dialogues'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '掌握越南盾 (VND) 數級單位（K / Củ / Triệu / Tỷ）、台幣換算、日常消費區帶與大額銀行存匯'
            : 'Master Vietnamese currency scales (k / củ / triệu / tỷ), live USD & TWD conversions, practical price brackets, and banking dialogues'}
        </p>
      </div>

      {/* Sub-tab Navigation */}
      <div className="controls-group" style={{ marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button 
          className={`control-btn ${activeTabSub === 'converter' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'converter' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'converter' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveTabSub('converter')}
        >
          <Calculator size={16} /> 
          {learningMode === 'zh' ? '1. 0-100億金額與計算器' : '1. 0-10B Currency Calculator'}
        </button>

        <button 
          className={`control-btn ${activeTabSub === 'brackets' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'brackets' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'brackets' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveTabSub('brackets')}
        >
          <Tag size={16} /> 
          {learningMode === 'zh' ? '2. 四大消費價格區帶' : '2. Four Price Brackets'}
        </button>

        <button 
          className={`control-btn ${activeTabSub === 'banking' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'banking' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'banking' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveTabSub('banking')}
        >
          <Landmark size={16} /> 
          {learningMode === 'zh' ? '3. 銀行金融會話' : '3. Banking & Financial Dialogues'}
        </button>
      </div>

      {/* VIEW 1: 0-100 Billion Currency Converter */}
      {activeTabSub === 'converter' && (
        <>
          {/* Base Numbers 0 - 10 */}
          <div className="simulator-box">
            <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem' }}>
              {learningMode === 'zh' ? '基本數字 (0 - 10) 唸法' : 'Base Numbers (0 - 10)'}
            </h3>
            <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}>
              {numbersAndCurrency.baseNumbers.map((item) => {
                const itemKey = `num_${item.num}`;
                const isPlaying = activeKey === itemKey;
                return (
                  <div 
                    key={item.num} 
                    className={`learning-card ${isPlaying ? 'playing-card' : ''}`}
                    style={{ alignItems: 'center', textAlign: 'center', padding: '1rem', cursor: 'pointer' }}
                    onClick={() => handleSpeakText(item.viet, itemKey)}
                  >
                    <div style={{ fontSize: '1.8em', fontWeight: 800, color: 'var(--brand-accent)' }}>{item.num}</div>
                    <div style={{ fontWeight: 700 }}>{item.viet}</div>
                    <div style={{ fontSize: '0.8em', color: 'var(--text-muted)' }}>
                      {learningMode === 'zh' ? item.zh : item.en}
                    </div>
                    <Volume2 size={16} className={isPlaying ? 'playing-pulse' : ''} style={{ marginTop: '0.4rem', color: isPlaying ? 'var(--brand-accent)' : 'var(--brand-primary)' }} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scale Units 100 to 10 Billion */}
          <div className="simulator-box">
            <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem' }}>
              {learningMode === 'zh' ? '大額數級單位 (百、千、百萬、十億) 階梯表' : 'Scale Units: Hundred, Thousand, Million, Billion'}
            </h3>
            <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
              {numbersAndCurrency.unitsScale.map((unit, uIdx) => {
                const unitKey = `unit_${uIdx}`;
                const isPlaying = activeKey === unitKey;
                return (
                  <div key={uIdx} className={`learning-card ${isPlaying ? 'playing-card' : ''}`} style={{ background: 'var(--bg-main)' }}>
                    <div style={{ fontSize: '0.85em', color: 'var(--brand-primary)', fontWeight: 700 }}>{unit.unit}</div>
                    <div style={{ fontSize: '1.25em', fontWeight: 800, color: 'var(--brand-accent)' }}>{unit.viet}</div>
                    <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)' }}>
                      {learningMode === 'zh' ? unit.zh : unit.en}
                    </div>
                    <button 
                      className={`speaker-btn ${isPlaying ? 'playing' : ''}`}
                      onClick={() => handleSpeakText(unit.viet, unitKey)} 
                      style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Calculator up to 10 Billion */}
          <div className="simulator-box">
            <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calculator color="var(--brand-green)" />
              {learningMode === 'zh' ? '0 - 100 億 (0 - 10 Tỷ VND) 大額金額與拼音讀法產生器' : '0 - 10 Billion VND Live Pronunciation & Currency Converter'}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {learningMode === 'zh' ? '輸入金額 (VND 越南盾)：' : 'Input Amount (VND):'}
                </label>
                <input 
                  type="number"
                  value={inputAmount}
                  onChange={(e) => setInputAmount(e.target.value)}
                  className="control-btn"
                  style={{ width: '100%', padding: '0.75rem', fontSize: '1.2em', background: 'var(--bg-input)' }}
                  step="500000"
                />

                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {[
                    { label: '+5萬 (50k)', val: '50000' },
                    { label: '+50萬 (500k)', val: '500000' },
                    { label: '+1000萬 (10M)', val: '10000000' },
                    { label: '+1億 (100M)', val: '100000000' },
                    { label: '+10億 (1B)', val: '1000000000' },
                    { label: '+50億 (5B)', val: '5000000000' }
                  ].map(btn => (
                    <button 
                      key={btn.val} 
                      className="control-btn"
                      style={{ fontSize: '0.8em', padding: '0.3rem 0.6rem' }}
                      onClick={() => setInputAmount(btn.val)}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>折合新台幣 (TWD)：</div>
                    <div style={{ fontSize: '1.4em', fontWeight: 800, color: 'var(--brand-green)' }}>
                      NT$ {parseInt(twdEquivalent).toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>折合美元 (USD)：</div>
                    <div style={{ fontSize: '1.4em', fontWeight: 800, color: 'var(--brand-gold)' }}>
                      $ {parseFloat(usdEquivalent).toLocaleString()}
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>
                    {learningMode === 'zh' ? '越南語標準大額讀法：' : 'Vietnamese Spoken Amount:'}
                  </div>
                  <div style={{ fontSize: '1.1em', fontWeight: 700, color: 'var(--brand-accent)', margin: '0.25rem 0' }}>
                    {vietnameseSpokenText}
                  </div>
                  <button 
                    className={`speaker-btn ${activeKey === 'calc_spoken' ? 'playing' : ''}`}
                    onClick={() => handleSpeakText(vietnameseSpokenText, 'calc_spoken')}
                    style={{ marginTop: '0.5rem' }}
                    title="朗讀此大額金額"
                  >
                    <Volume2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* VIEW 2: Price Brackets & Practical Application */}
      {activeTabSub === 'brackets' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1.5rem' }}>
            🛒 {learningMode === 'zh' ? '越南消費四大價格區帶與俗稱口語' : 'Four Practical Price Brackets & Colloquial Slang'}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {numbersAndCurrency.priceBrackets.map((bracket, bIdx) => (
              <div key={bIdx} style={{ background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '5px solid var(--brand-accent)' }}>
                <h4 style={{ color: 'var(--brand-primary)', fontWeight: 800, fontSize: '1.1em', marginBottom: '0.75rem' }}>
                  📌 {learningMode === 'zh' ? `區帶 ${bIdx + 1}：${bracket.rangeZh}` : `Bracket ${bIdx + 1}: ${bracket.rangeEn}`}
                </h4>

                <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
                  {bracket.examples.map((item, iIdx) => {
                    const itemKey = `bracket_${bIdx}_${iIdx}`;
                    const isPlaying = activeKey === itemKey;
                    return (
                      <div key={iIdx} className={`learning-card ${isPlaying ? 'playing-card' : ''}`}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--brand-accent)' }}>{item.amount}</span>
                          <span className="tone-symbol" style={{ background: 'var(--brand-gold)', color: '#000', fontWeight: 700 }}>
                            {item.shortcut}
                          </span>
                        </div>

                        <div style={{ fontWeight: 700, marginTop: '0.5rem' }}>{item.viet}</div>
                        <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
                          {learningMode === 'zh' ? item.zh : item.en}
                        </div>

                        <button 
                          className={`speaker-btn ${isPlaying ? 'playing' : ''}`}
                          onClick={() => handleSpeakText(item.viet, itemKey)} 
                          style={{ marginTop: '0.75rem', alignSelf: 'flex-start' }}
                          title="朗讀此金額"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: Banking & High-Value Interactive Dialogues */}
      {activeTabSub === 'banking' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Landmark color="var(--brand-primary)" />
            {learningMode === 'zh' ? '臨櫃與大額金融會話 (Banking & Financial Dialogues)' : 'Banking & High-Value Corporate Dialogues'}
          </h3>

          {numbersAndCurrency.bankingDialogues.map((bDiag, bdIdx) => (
            <div key={bdIdx} style={{ marginBottom: '1.5rem', background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ color: 'var(--brand-accent)', marginBottom: '0.75rem', fontWeight: 800 }}>
                🏦 {learningMode === 'zh' ? bDiag.titleZh : bDiag.titleEn}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {bDiag.lines.map((line, lIdx) => {
                  const lineKey = `bank_${bdIdx}_${lIdx}`;
                  const isPlaying = activeKey === lineKey;
                  return (
                    <div 
                      key={lIdx} 
                      className={isPlaying ? 'line-highlight' : ''}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', transition: 'all 0.2s ease' }}
                    >
                      <div>
                        <span className="tone-symbol" style={{ marginRight: '0.5rem', fontSize: '0.85em' }}>{line.speaker}</span>
                        <strong style={{ color: 'var(--text-primary)' }}>{line.viet}</strong>
                        <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
                          {learningMode === 'zh' ? line.zh : line.en}
                        </div>
                      </div>
                      <button 
                        className={`speaker-btn ${isPlaying ? 'playing' : ''}`} 
                        onClick={() => handleSpeakText(line.viet, lineKey)}
                        title="朗讀此對話句"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
