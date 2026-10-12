import React from 'react';
import {
  BookOpen, Sparkles, Volume2, ShieldCheck, HelpCircle,
  Compass, ArrowRight, Lightbulb, Bookmark, MessageSquare
} from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { bookmarkService } from '../services/bookmarkService';
import './ScenarioExegesisCard.css';

export const ScenarioExegesisCard = ({ exegesis, scenario, selectedAccent = 'north' }) => {
  const { learningMode } = useLanguage();
  if (!exegesis) return null;

  const handleSpeak = (text, key) => {
    if (!text) return;
    audioEngine.playHaptic('tap');
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
  };

  const handleBookmark = (item) => {
    audioEngine.playHaptic('tap');
    bookmarkService.toggle({
      id: `exegesis_${item.vi || item.exampleVi}`,
      viet: item.vi || item.exampleVi,
      zh: item.zh || item.exampleZh,
      en: item.en || item.exampleZh,
      category: scenario?.titleZh || '情境研經',
      module: 'conversation',
      tag: '研經金句'
    });
  };

  return (
    <div className="scenario-exegesis-root">
      {/* Header Banner */}
      <div className="exegesis-header">
        <div className="exegesis-header-title-wrap">
          <div className="exegesis-icon-badge">
            <BookOpen size={20} />
          </div>
          <div>
            <h3 className="exegesis-title">
              {learningMode === 'zh' ? exegesis.titleZh : exegesis.titleEn}
            </h3>
            <p className="exegesis-subtitle">
              {learningMode === 'zh'
                ? '實戰語境語法拆解 · 漢越字源考 · 南北語音用詞對照 · 文化避坑錦囊'
                : 'Syntax formulas, Han-Viet etymology, regional dialects, and cultural etiquette'}
            </p>
          </div>
        </div>
      </div>

      <div className="exegesis-sections-grid">
        {/* 1. Core Grammar Formulas */}
        {exegesis.coreFormulas && exegesis.coreFormulas.length > 0 && (
          <section className="exegesis-card-box formulas-box">
            <h4 className="exegesis-box-title">
              <span className="box-title-icon">📐</span>
              <span>{learningMode === 'zh' ? '實戰句型公式拆解 (Core Syntax Formulas)' : 'Core Syntax Formulas'}</span>
            </h4>
            <div className="formulas-list">
              {exegesis.coreFormulas.map((f, idx) => (
                <div key={idx} className="formula-item">
                  <div className="formula-badge-row">
                    <span className="formula-badge">公式 {idx + 1}</span>
                    <span className="formula-syntax-vi">{f.formulaVi}</span>
                  </div>
                  <div className="formula-syntax-zh">{f.formulaZh}</div>
                  <p className="formula-explain">{f.explainZh}</p>
                  
                  {f.exampleVi && (
                    <div className="formula-example-bar">
                      <div className="example-text-wrap">
                        <span className="example-vi">{f.exampleVi}</span>
                        <span className="example-zh">{f.exampleZh}</span>
                      </div>
                      <button
                        className="example-speak-btn"
                        onClick={() => handleSpeak(f.exampleVi, `ex_formula_${idx}`)}
                        title={learningMode === 'zh' ? '聆聽例句發音' : 'Play example'}
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. Han-Viet Roots Etymology */}
        {exegesis.hanVietRoots && exegesis.hanVietRoots.length > 0 && (
          <section className="exegesis-card-box hanviet-box">
            <h4 className="exegesis-box-title">
              <span className="box-title-icon">🏛️</span>
              <span>{learningMode === 'zh' ? '關鍵漢越詞源考 (Han-Viet Cognate Roots)' : 'Han-Viet Cognate Roots'}</span>
            </h4>
            <div className="hanviet-roots-grid">
              {exegesis.hanVietRoots.map((r, idx) => (
                <div key={idx} className="hanviet-root-pill">
                  <span className="hanviet-term">{r.root}</span>
                  <span className="hanviet-origin">{r.origin}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. North vs South Dialect Contrast */}
        {exegesis.northSouthContrast && (
          <section className="exegesis-card-box dialect-box">
            <h4 className="exegesis-box-title">
              <span className="box-title-icon">🇻🇳</span>
              <span>{learningMode === 'zh' ? '南北越方言與用詞對比 (Regional Dialect Matrix)' : 'Regional Dialect Matrix'}</span>
            </h4>
            <div className="dialect-contrast-container">
              <div className="dialect-contrast-feature">
                <strong>對比特徵：</strong> {exegesis.northSouthContrast.featureZh}
              </div>
              <div className="dialect-contrast-columns">
                <div className="dialect-col north-col">
                  <span className="dialect-col-tag">🇻🇳 北越 (Hà Nội)</span>
                  <div className="dialect-col-text">{exegesis.northSouthContrast.northVi}</div>
                </div>
                <div className="dialect-col south-col">
                  <span className="dialect-col-tag">🌴 南越 (TP.HCM)</span>
                  <div className="dialect-col-text">{exegesis.northSouthContrast.southVi}</div>
                </div>
              </div>
              {exegesis.northSouthContrast.noteZh && (
                <div className="dialect-contrast-note">
                  💡 {exegesis.northSouthContrast.noteZh}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 4. Cultural Notes & Pitfall Guidelines */}
        {exegesis.culturalNotes && exegesis.culturalNotes.length > 0 && (
          <section className="exegesis-card-box culture-box">
            <h4 className="exegesis-box-title">
              <span className="box-title-icon">💡</span>
              <span>{learningMode === 'zh' ? '在地實戰習俗與避坑指南 (Cultural Etiquette & Tips)' : 'Cultural Etiquette & Tips'}</span>
            </h4>
            <ul className="culture-tips-list">
              {exegesis.culturalNotes.map((tip, idx) => (
                <li key={idx} className="culture-tip-item">
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 5. Colloquial Extensions */}
        {exegesis.colloquialExtensions && exegesis.colloquialExtensions.length > 0 && (
          <section className="exegesis-card-box colloquial-box">
            <h4 className="exegesis-box-title">
              <span className="box-title-icon">💬</span>
              <span>{learningMode === 'zh' ? '道地生活口語擴展 (Native Colloquial Slang & Extensions)' : 'Native Colloquial Extensions'}</span>
            </h4>
            <div className="colloquial-cards-row">
              {exegesis.colloquialExtensions.map((item, idx) => (
                <div key={idx} className="colloquial-card">
                  <div className="colloquial-card-header">
                    <span className="colloquial-vi">{item.vi}</span>
                    <button
                      className="colloquial-audio-btn"
                      onClick={() => handleSpeak(item.vi, `colloq_${idx}`)}
                      title={learningMode === 'zh' ? '發音' : 'Play audio'}
                    >
                      <Volume2 size={15} />
                    </button>
                  </div>
                  <div className="colloquial-zh">{item.zh}</div>
                  {item.note && <div className="colloquial-note">📌 {item.note}</div>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
