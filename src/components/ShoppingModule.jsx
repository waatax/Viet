import React, { useState } from 'react';
import { ShoppingBag, DollarSign, Calculator, Volume2, ArrowRight } from 'lucide-react';
import { numbersAndCurrency } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';

export const ShoppingModule = ({ selectedAccent }) => {
  const [inputAmount, setInputAmount] = useState('150000');
  const [exchangeRate, setExchangeRate] = useState(780); // ~780 VND per TWD

  // Convert numbers to Vietnamese reading text
  const convertNumberToVietnamese = (numStr) => {
    const num = parseInt(numStr, 10);
    if (isNaN(num)) return 'Chưa nhập số';
    if (num === 0) return 'Không đồng';

    // Simple formatting for VND numbers
    if (num >= 1000000) {
      const millions = (num / 1000000).toFixed(1);
      return `${millions} triệu đồng (${num.toLocaleString()} VND)`;
    } else if (num >= 1000) {
      const thousands = (num / 1000).toFixed(0);
      return `${thousands} nghìn đồng (${num.toLocaleString()} VND)`;
    }
    return `${num} đồng`;
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
          數字、越南盾 (VND) 貨幣換算與市場殺價實戰
        </h2>
        <p className="section-desc">掌握越南數字特殊發音規則與實用議價會話</p>
      </div>

      {/* 1. Base Numbers Grid */}
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

        {/* Special Number Rules Banner */}
        <div style={{ marginTop: '1.5rem', background: 'var(--bg-accent)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
          <h4 style={{ color: 'var(--brand-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
            ⚠️ 越南語數字核心變音四大規則：
          </h4>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9em', color: 'var(--text-secondary)' }}>
            {numbersAndCurrency.specialRules.map((rule, idx) => (
              <li key={idx} style={{ marginBottom: '0.3rem' }}>
                <strong>{rule.rule}：</strong> {rule.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2. Interactive Currency Converter & Reader */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calculator color="var(--brand-green)" />
          越南盾 (VND) 實時換算與越南語金額讀法產生器
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
              step="5000"
            />

            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['20000', '50000', '100000', '200000', '500000'].map(val => (
                <button 
                  key={val} 
                  className="control-btn"
                  style={{ fontSize: '0.85em', padding: '0.3rem 0.6rem' }}
                  onClick={() => setInputAmount(val)}
                >
                  +{parseInt(val).toLocaleString()} 盾
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
              <div style={{ fontSize: '0.9em', color: 'var(--text-muted)' }}>越南語標準讀法：</div>
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

      {/* 3. Shopping Negotiations Dialogues */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem' }}>
          實戰市場購物與殺價對話 (Shopping Dialogues)
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
    </div>
  );
};
