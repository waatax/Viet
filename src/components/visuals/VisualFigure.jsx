import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Volume2 } from 'lucide-react';
import { audioEngine } from '../../services/audioEngine';
import { useLanguage } from '../../context/LanguageContext';
import './TeachingVisuals.css';

/** Bilingual picker: returns the zh string in 中文 mode, otherwise en (falls back to zh). */
export const useL = () => {
  const { learningMode } = useLanguage();
  return (zh, en) => (learningMode === 'zh' ? zh : (en ?? zh));
};

/** Tracks which audio key is currently playing so chips can highlight themselves. */
export const useActiveAudioKey = () => {
  const [activeKey, setActiveKey] = useState(null);
  useEffect(() => audioEngine.subscribe((state) => {
    setActiveKey(state.isPlaying ? state.activeKey : null);
  }), []);
  return activeKey;
};

export const speakVi = (text, accent = 'north', key) => {
  audioEngine.speak(text, { accent, key: key || `tv_${text}` });
};

/**
 * Figure card used by every teaching diagram.
 * - badge: short label such as 「圖解 3」
 * - takeaway: one-line summary rendered in the footer
 * - collapsible / defaultOpen: let long pages keep the figure folded
 */
export const VisualFigure = ({
  badge,
  title,
  subtitle,
  takeaway,
  children,
  collapsible = false,
  defaultOpen = true,
  compact = false,
  className = '',
  id
}) => {
  const L = useL();
  const [open, setOpen] = useState(defaultOpen);
  const isOpen = !collapsible || open;

  return (
    <figure id={id} className={`tv-figure ${compact ? 'tv-figure--compact' : ''} ${className}`}>
      <header className="tv-figure__head">
        <div className="tv-figure__head-text">
          <span className="tv-figure__badge">📐 {badge || L('教學圖解', 'Visual Aid')}</span>
          <h3 className="tv-figure__title">{title}</h3>
          {subtitle && <p className="tv-figure__sub">{subtitle}</p>}
        </div>
        {collapsible && (
          <button
            type="button"
            className="tv-figure__toggle"
            onClick={() => setOpen(v => !v)}
            aria-expanded={isOpen}
          >
            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {isOpen ? L('收合', 'Hide') : L('展開圖解', 'Show')}
          </button>
        )}
      </header>
      {isOpen && <div className="tv-figure__body">{children}</div>}
      {isOpen && takeaway && <figcaption className="tv-figure__takeaway">💡 {takeaway}</figcaption>}
    </figure>
  );
};

/** Small clickable chip that plays a Vietnamese word. */
export const PlayChip = ({ vi, zh, accent = 'north', activeKey, audioKey, onPlay }) => {
  const key = audioKey || `tv_${vi}`;
  return (
    <button
      type="button"
      className={`tv-chip ${activeKey === key ? 'is-playing' : ''}`}
      onClick={() => {
        speakVi(vi, accent, key);
        if (onPlay) onPlay();
      }}
      title={zh ? `${vi} · ${zh}` : vi}
    >
      <strong>{vi}</strong>
      {zh && <span>{zh}</span>}
      <Volume2 size={11} color="var(--brand-accent)" aria-hidden="true" />
    </button>
  );
};

/** Segmented control for switching chart modes. */
export const Segmented = ({ options, value, onChange, ariaLabel }) => (
  <div className="tv-seg" role="group" aria-label={ariaLabel}>
    {options.map(opt => (
      <button
        key={opt.value}
        type="button"
        className={value === opt.value ? 'is-active' : ''}
        aria-pressed={value === opt.value}
        onClick={() => onChange(opt.value)}
      >
        {opt.label}
      </button>
    ))}
  </div>
);

/** Full-width watercolor illustration banner reusing the bundled artwork. */
export const IllustrationBanner = ({ src, alt, title, text, height = 170 }) => {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <div className="tv-hero" style={{ minHeight: height }}>
      <img src={`${base}${src}`} alt={alt} loading="lazy" decoding="async" />
      <div className="tv-hero__shade" />
      <div className="tv-hero__text">
        {title && <strong>{title}</strong>}
        {text}
      </div>
    </div>
  );
};
