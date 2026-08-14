import React, { useState } from 'react';
import { ShoppingBag, DollarSign, Calculator, Volume2, ArrowRight, Landmark, Tag, ShieldCheck } from 'lucide-react';
import { numbersAndCurrency } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';

export const ShoppingModule = ({ selectedAccent }) => {
  const [inputAmount, setInputAmount] = useState('2500000000'); // Default 2.5 Billion VND
  const [exchangeRate, setExchangeRate] = useState(780); // ~780 VND per TWD
  const [activeTabSub, setActiveTabSub] = useState('converter'); // 'converter', 'brackets', 'banking', 'dialogues'

  // Advanced Number to Vietnamese Text converter up to 10 Billion+
  const convertNumberToVietnamese = (numStr) => {
    const num = parseInt(numStr, 10);
    if (isNaN(num)) return 'Chưa nhập số';
    if (num === 0) return 'Không đồng';

    const billions = Math.floor(num / 1000000000);
    const remainderAfterBillions = num % 1000000000;
    const millions = Math.floor(remainderAfterBillions / 1000000);
    const remainderAfterMillions = remainderAfterBillions % 1000000;
    const thousands = Math.floor(remainderAfterMillions / 1000);
    const remainderAfterThousands = remainderAfterMillions % 1000;

    let parts = [];

    if (billions > 0) {
      parts.push(`${billions} tỷ`);
    }
    if (millions > 0) {
      parts.push(`${millions} triệu`);
    }
    if (thousands > 0) {
      parts.push(`${thousands} nghìn`);
    }
    if (remainderAfterThousands > 0) {
      parts.push(`${remainderAfterThousands}`);
    }

    const text = parts.join(' ') + ' đồng';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const handleSpeakText = (text) => {
    audioEngine.speak(text, { accent: selectedAccent });
  };

  const twdEquivalent = (parseInt(inputAmount, 10) / exchangeRate || 0).toFixed(0);

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <ShoppingBag color="var(--brand-primary)" />
          0 - 100 億數字教學、價格區帶應用與銀行金融會話
        </h2>
        <p className="section-desc">包含日常購物短縮寫 (k/củ)、商品價格區帶與大額銀行存款匯款實戰</p>
      </div>

      {/* Sub-tab Navigation */}
      <div className="controls-group" style={{ marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button 
          className={`control-btn ${activeTabSub === 'converter' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'converter' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'converter' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveTabSub('converter')}
        >
          <Calculator size={16} /> 1. 0-100億金額與計算器
        </button>

        <button 
          className={`control-btn ${activeTabSub === 'brackets' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'brackets' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'brackets' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveTabSub('brackets')}
        >
          <Tag size={16} /> 2. 四大消費價格區帶
        </button>

        <button 
          className={`control-btn ${activeTabSub === 'banking' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'banking' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'banking' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveTabSub('banking')}
        >
          <Landmark size={16} /> 3. 銀行與金融互動會話
        </button>

        <button 
          className={`control-btn ${activeTabSub === 'dialogues' ? 'active' : ''}`}
          style={{ background: activeTabSub === 'dialogues' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeTabSub === 'dialogues' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveTabSub('dialogues')}
        >
          <ShoppingBag size={16} /> 4. 市場殺價對話
        </button>
      </div>

      {/* VIEW 1: 0-100 Billion Currency Converter */}
      {activeTabSub === 'converter' && (
        <>
          {/* Base Numbers 0 - 10 */}
          <div className="simulator-box">
            <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem' }}>
              基本數字 (0 - 10) 唸法
            </h3>
            <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}>
              {numbersAndCurrency.baseNumbers.map((item) => (
                <div 
                  key={item.num} 
                  className="learning-card"
                  style={{ alignItems: 'center', textAlign: 'center', padding: '1rem', cursor: 'pointer' }}
                  onClick={() => handleSpeakText(`${item.viet}`)}
                >
                  <div style={{ fontSize: '1.8em', fontWeight: 800, color: 'var(--brand-accent)' }}>{item.num}</div>
                  <div style={{ fontWeight: 700 }}>{item.viet}</div>
                  <div style={{ fontSize: '0.8em', color: 'var(--text-muted)' }}>{item.zh}</div>
                  <Volume2 size={14} style={{ marginTop: '0.4rem', color: 'var(--brand-primary)' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Scale Units 100 to 10 Billion */}
          <div className="simulator-box">
            <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem' }}>
              大額數級單位 (百、千、百萬、十億) 階梯表
            </h3>
            <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
              {numbersAndCurrency.unitsScale.map((unit, uIdx) => (
                <div key={uIdx} className="learning-card" style={{ background: 'var(--bg-main)' }}>
                  <div style={{ fontSize: '0.85em', color: 'var(--brand-primary)', fontWeight: 700 }}>{unit.unit}</div>
                  <div style={{ fontSize: '1.25em', fontWeight: 800, color: 'var(--brand-accent)' }}>{unit.viet}</div>
                  <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)' }}>{unit.zh}</div>
                  <button 
                    className="speaker-btn" 
                    onClick={() => handleSpeakText(unit.viet)} 
                    style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Calculator up to 10 Billion */}
          <div className="simulator-box">
            <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calculator color="var(--brand-green)" />
              0 - 100 億 (0 - 10 Tỷ VND) 大額金額與語音讀法產生器
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem' }}>
                  輸入金額 (VND 越南盾)：
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
                <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>約折合新台幣 (TWD)：</div>
                <div style={{ fontSize: '1.6em', fontWeight: 800, color: 'var(--brand-green)' }}>
                  NT$ {parseInt(twdEquivalent).toLocaleString()} 元
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>越南語標準大額讀法：</div>
                  <div style={{ fontSize: '1.1em', fontWeight: 700, color: 'var(--brand-accent)', margin: '0.25rem 0' }}>
                    {convertNumberToVietnamese(inputAmount)}
                  </div>
                  <button 
                    className="speaker-btn"
                    onClick={() => handleSpeakText(convertNumberToVietnamese(inputAmount))}
                    style={{ marginTop: '0.5rem' }}
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
            🛒 越南消費四大價格區帶與俗稱口語 (Price Brackets & Slang)
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {numbersAndCurrency.priceBrackets.map((bracket, bIdx) => (
              <div key={bIdx} style={{ background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '5px solid var(--brand-accent)' }}>
                <h4 style={{ color: 'var(--brand-primary)', fontWeight: 800, fontSize: '1.1em', marginBottom: '0.75rem' }}>
                  📌 區帶 {bIdx + 1}：{bracket.range}
                </h4>

                <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
                  {bracket.examples.map((item, iIdx) => (
                    <div key={iIdx} className="learning-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--brand-accent)' }}>{item.amount}</span>
                        <span className="tone-symbol" style={{ background: 'var(--brand-gold)', color: '#000', fontWeight: 700 }}>
                          俗稱: {item.shortcut}
                        </span>
                      </div>

                      <div style={{ fontWeight: 700, marginTop: '0.5rem' }}>{item.viet}</div>
                      <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>{item.zh}</div>

                      <button 
                        className="speaker-btn" 
                        onClick={() => handleSpeakText(item.viet)} 
                        style={{ marginTop: '0.75rem', alignSelf: 'flex-start' }}
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                  ))}
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
            與銀行互動與大額金融會話 (Banking & High-Value Financial Dialogues)
          </h3>

          {numbersAndCurrency.bankingDialogues.map((bDiag, bdIdx) => (
            <div key={bdIdx} style={{ marginBottom: '1.5rem', background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ color: 'var(--brand-accent)', marginBottom: '0.75rem', fontWeight: 800 }}>
                🏦 {bDiag.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {bDiag.lines.map((line, lIdx) => (
                  <div key={lIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                    <div>
                      <span className="tone-symbol" style={{ marginRight: '0.5rem', fontSize: '0.85em' }}>{line.speaker}</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{line.viet}</strong>
                      <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>{line.zh}</div>
                    </div>
                    <button className="speaker-btn" onClick={() => handleSpeakText(line.audioText)}>
                      <Volume2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 4: Market Negotiation Dialogues */}
      {activeTabSub === 'dialogues' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem' }}>
            實戰市場購物與殺價對話 (Market Shopping Dialogues)
          </h3>

          {numbersAndCurrency.shoppingDialogues.map((diag, dIdx) => (
            <div key={dIdx} style={{ marginBottom: '1.5rem', background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ color: 'var(--brand-primary)', marginBottom: '0.75rem', fontWeight: 700 }}>
                📌 {diag.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {diag.lines.map((line, lIdx) => (
                  <div key={lIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                    <div>
                      <span className="tone-symbol" style={{ marginRight: '0.5rem', fontSize: '0.85em' }}>{line.speaker}</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{line.viet}</strong>
                      <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>{line.zh}</div>
                    </div>
                    <button className="speaker-btn" onClick={() => handleSpeakText(line.audioText)}>
                      <Volume2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
