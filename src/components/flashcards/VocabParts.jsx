import React from 'react';
import { Volume2, Snail } from 'lucide-react';
import { audioEngine } from '../../services/audioEngine';
import { TONES, toneOf, syllables } from '../../services/flashcardScheduler';

/** The Vietnamese word, each syllable tinted by its tone (dual coding: colour ↔ pitch). */
export const ToneWord = ({ text = '', className = '' }) => {
  const parts = text.split(/(\s+)/);
  return (
    <span className={`fs-toneword ${className}`} lang="vi">
      {parts.map((part, i) => (
        /\s+/.test(part)
          ? <React.Fragment key={i}>{part}</React.Fragment>
          : <span key={i} className={`fs-syl tone-${toneOf(part)}`}>{part}</span>
      ))}
    </span>
  );
};

/** Small legend under the word: one chip per syllable with tone name and contour symbol. */
export const ToneRibbon = ({ text = '', compact = false }) => {
  const syls = syllables(text);
  if (!syls.length || syls.length > 5) return null;
  return (
    <ul className={`fs-tone-ribbon ${compact ? 'compact' : ''}`} aria-label="各音節聲調">
      {syls.map((syl, i) => {
        const tone = TONES[toneOf(syl)];
        return (
          <li key={i} className={`fs-tone-chip tone-${tone.id}`} title={`${tone.zh}：${tone.hint}`}>
            <span className="fs-tone-chip-syl" lang="vi">{syl}</span>
            <span className="fs-tone-chip-name">{tone.symbol} {tone.zh}</span>
          </li>
        );
      })}
    </ul>
  );
};

export const AudioButtons = ({ text, accent, keyPrefix, activeKey, size = 'md', labelZh = '播放發音' }) => {
  if (!text) return null;
  const normalKey = `${keyPrefix}_n`;
  const slowKey = `${keyPrefix}_s`;
  return (
    <span className={`fs-audio-pair size-${size}`}>
      <button
        type="button"
        className={`fs-audio-btn ${activeKey === normalKey ? 'is-playing' : ''}`}
        onClick={(e) => { e.stopPropagation(); audioEngine.speak(text, { accent, key: normalKey }); }}
        aria-label={`${labelZh}：${text}`}
        title={`${labelZh}（R）`}
      >
        <Volume2 size={size === 'lg' ? 24 : 18} aria-hidden="true" />
      </button>
      <button
        type="button"
        className={`fs-audio-btn slow ${activeKey === slowKey ? 'is-playing' : ''}`}
        onClick={(e) => { e.stopPropagation(); audioEngine.speak(text, { accent, key: slowKey, rate: 0.7 }); }}
        aria-label={`慢速播放：${text}`}
        title="慢速（S）"
      >
        <Snail size={size === 'lg' ? 20 : 16} aria-hidden="true" />
      </button>
    </span>
  );
};

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Example sentence with the target word highlighted. */
export const HighlightedSentence = ({ sentence = '', word = '' }) => {
  if (!word) return <>{sentence}</>;
  const re = new RegExp(`(${escapeRe(word)})`, 'giu');
  const parts = sentence.split(re);
  return (
    <>
      {parts.map((p, i) => (p.toLowerCase() === word.toLowerCase() ? <mark key={i}>{p}</mark> : <React.Fragment key={i}>{p}</React.Fragment>))}
    </>
  );
};

/** Back-of-card teaching block: meaning, Sino-Vietnamese root, example, learner tip. */
export const CardDetails = ({ card, accent, activeKey, learningMode = 'zh' }) => {
  if (!card) return null;
  const meaning = learningMode === 'zh' ? card.zh : (card.en || card.zh);
  return (
    <div className="fs-details">
      <p className="fs-meaning">{meaning}</p>
      {learningMode === 'zh' && card.en && <p className="fs-meaning-en" lang="en">{card.en}</p>}
      <div className="fs-detail-chips">
        {card.pos && <span className="fs-chip">{card.pos}</span>}
        {card.hanViet && <span className="fs-chip gold" title="漢越音：與中文同源的字">漢越 {card.hanViet}</span>}
        {card.verified && <span className="fs-chip ok" title="釋義與例句已人工校對">已校對</span>}
      </div>
      {card.example && (
        <figure className="fs-example">
          <figcaption>{card.exampleKind === 'phrase' ? '搭配詞組' : '例句'}</figcaption>
          <div className="fs-example-row">
            <p className="fs-example-vi" lang="vi"><HighlightedSentence sentence={card.example} word={card.viet} /></p>
            <AudioButtons text={card.example} accent={accent} keyPrefix={`fs_ex_${card.id}`} activeKey={activeKey} size="sm" labelZh="播放例句" />
          </div>
          {card.exampleZh && learningMode === 'zh' && <p className="fs-example-zh">{card.exampleZh}</p>}
        </figure>
      )}
      {card.note && (
        <p className="fs-note"><strong>易錯提醒</strong>{card.note}</p>
      )}
    </div>
  );
};
