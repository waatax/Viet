import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { audioEngine } from '../../services/audioEngine';
import { vietnameseSingleVowels } from '../../data/vietnameseData';
import { TONE_ORDER, TONE_SPEC, MANDARIN_TONES, smoothPath } from './toneSpec';
import { VisualFigure, PlayChip, Segmented, useL, useActiveAudioKey, speakVi } from './VisualFigure';

const TONED_A = { ngang: 'a', huyen: 'à', sac: 'á', hoi: 'ả', nga: 'ã', nang: 'ạ' };

/* ==========================================================================
   1. Tone contour chart — all six tones on one Chao 1–5 grid
   ========================================================================== */
const CHART = { w: 560, h: 236, x0: 70, x1: 536, yTop: 20, yBot: 196 };
const yOf = (level) => CHART.yBot - ((level - 1) * (CHART.yBot - CHART.yTop)) / 4;
const xOf = (t, length = 1) => CHART.x0 + t * length * (CHART.x1 - CHART.x0);
const segmentsToPaths = (segments, length) =>
  segments.map(seg => smoothPath(seg.map(([t, lv]) => [xOf(t, length), yOf(lv)])));

export const ToneContourChart = ({ accent = 'north', allowDialectSwitch = true, defaultOverlay = false }) => {
  const L = useL();
  const [dialect, setDialect] = useState(accent);
  const [overlay, setOverlay] = useState(defaultOverlay);
  const [focus, setFocus] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => setDialect(accent), [accent]);
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const play = (id) => {
    setFocus(id);
    clearTimeout(timerRef.current);
    audioEngine.playTonePitch(id, dialect);
    timerRef.current = setTimeout(() => {
      speakVi(TONE_SPEC[id].example, dialect, `tv_tone_${id}`);
    }, 650);
  };

  const levels = [5, 4, 3, 2, 1];
  const levelLabel = { 5: L('5 高', '5 high'), 3: L('3 中', '3 mid'), 1: L('1 低', '1 low') };

  return (
    <div>
      <div className="tv-toolbar">
        {allowDialectSwitch ? (
          <Segmented
            ariaLabel={L('口音', 'Dialect')}
            value={dialect}
            onChange={(v) => { setDialect(v); setFocus(null); }}
            options={[
              { value: 'north', label: L('🏛️ 河內 (6 調)', '🏛️ Hà Nội (6)') },
              { value: 'south', label: L('🌴 西貢 (5 調)', '🌴 Sài Gòn (5)') }
            ]}
          />
        ) : <span />}
        <Segmented
          ariaLabel={L('疊加國語', 'Mandarin overlay')}
          value={overlay ? 'on' : 'off'}
          onChange={(v) => setOverlay(v === 'on')}
          options={[
            { value: 'off', label: L('只看越語', 'Vietnamese only') },
            { value: 'on', label: L('疊加國語四聲', '+ Mandarin tones') }
          ]}
        />
      </div>

      <svg className="tv-svg tv-svg--chart" viewBox={`0 0 ${CHART.w} ${CHART.h}`} role="img"
        aria-label={L('越南語六個聲調的五度音高曲線圖', 'Pitch contours of the six Vietnamese tones on a five-level scale')}>
        {levels.map(lv => (
          <g key={lv}>
            <line className="tv-tone-grid-line" x1={CHART.x0} x2={CHART.x1} y1={yOf(lv)} y2={yOf(lv)} />
            <text className="tv-tone-grid-label" x={CHART.x0 - 10} y={yOf(lv) + 4} textAnchor="end">
              {levelLabel[lv] || lv}
            </text>
          </g>
        ))}
        <text className="tv-tone-grid-label" x={CHART.x1} y={CHART.h - 8} textAnchor="end">
          {L('時間 →（線越短＝越短促）', 'time → (shorter line = clipped tone)')}
        </text>

        {overlay && MANDARIN_TONES.map(mt => (
          segmentsToPaths(mt.segments, 1).map((d, i) => (
            <path key={`${mt.id}_${i}`} d={d} className="tv-tone-curve tv-tone-curve--ghost"
              style={{ stroke: 'var(--text-muted)', opacity: focus ? 0.25 : 0.7 }} />
          ))
        ))}

        {TONE_ORDER.map(id => {
          const spec = TONE_SPEC[id];
          const shape = spec[dialect];
          const dimmed = focus && focus !== id;
          const isMergedTwin = dialect === 'south' && id === 'nga';
          const paths = segmentsToPaths(shape.segments, shape.length);
          const last = shape.segments[shape.segments.length - 1];
          const [lt, llv] = last[last.length - 1];
          return (
            <g key={id} style={{ opacity: dimmed ? 0.15 : 1 }}>
              {paths.map((d, i) => (
                <g key={i}>
                  <path d={d} className="tv-tone-curve"
                    style={{
                      stroke: spec.color,
                      strokeWidth: focus === id ? 6 : 4,
                      strokeDasharray: isMergedTwin ? '10 7' : undefined
                    }} />
                  <path d={d} className="tv-tone-hit" onClick={() => play(id)} />
                </g>
              ))}
              {dialect === 'north' && shape.glottalAt !== undefined && (
                <g>
                  <line
                    x1={xOf(shape.glottalAt, shape.length)} x2={xOf(shape.glottalAt, shape.length)}
                    y1={yOf(shape.glottalAt === 1 ? llv : 3) - 12} y2={yOf(shape.glottalAt === 1 ? llv : 3) + 12}
                    style={{ stroke: spec.color, strokeWidth: 3 }} />
                  <text x={xOf(shape.glottalAt, shape.length) + (shape.glottalAt === 1 ? 8 : -4)}
                    y={yOf(shape.glottalAt === 1 ? llv : 3) - 16}
                    style={{ fill: spec.color, fontSize: 15, fontWeight: 900 }}>ʔ</text>
                </g>
              )}
              {focus === id && (
                <text x={Math.min(xOf(lt, shape.length) + 8, CHART.x1 - 4)} y={yOf(llv) + (llv > 4.5 ? 16 : -10)}
                  textAnchor={xOf(lt, shape.length) > CHART.x1 - 60 ? 'end' : 'start'}
                  style={{ fill: spec.color, fontSize: 14, fontWeight: 900 }}>
                  {spec.vi} {shape.chao}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {overlay && (
        <div className="tv-legend" style={{ margin: '0.2rem 0 0.8rem' }}>
          {MANDARIN_TONES.map(mt => (
            <span key={mt.id}><i style={{ background: 'var(--text-muted)' }} />{mt.label}（{mt.chao}）</span>
          ))}
          <span className="tv-muted">{L('虛線＝國語參考', 'dashed = Mandarin reference')}</span>
        </div>
      )}

      <div className="tv-tone-cards" style={{ marginTop: '0.6rem' }}>
        {TONE_ORDER.map(id => {
          const spec = TONE_SPEC[id];
          const shape = spec[dialect];
          return (
            <button key={id} type="button" className="tv-tone-card" onClick={() => play(id)}
              style={{ borderColor: focus === id ? spec.color : undefined, borderLeft: `5px solid ${spec.color}` }}
              aria-label={`${spec.vi} ${shape.chao} ${spec.example}`}>
              <span className="tv-tone-card__name" style={{ color: spec.color }}>
                {spec.vi} · {L(spec.zh, spec.en)}
              </span>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <b>{TONED_A[id]}</b>
                <span className="tv-mono">{shape.chao}</span>
                <Volume2 size={13} color="var(--brand-accent)" aria-hidden="true" />
              </span>
              <span>
                {shape.merged
                  ? L(`南部與 ${TONE_SPEC[shape.merged].vi} 合流`, `merges with ${TONE_SPEC[shape.merged].vi}`)
                  : (shape.note || L(spec.mandarinZh, spec.mandarinEn))}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const ToneContourFigure = ({ accent, badge, collapsible, defaultOpen, defaultOverlay }) => {
  const L = useL();
  return (
    <VisualFigure
      badge={badge}
      collapsible={collapsible}
      defaultOpen={defaultOpen}
      title={L('六調音高總覽圖：一張圖看懂聲調走勢', 'All Six Tones on One Pitch Chart')}
      subtitle={L(
        '把六個聲調畫在同一張「五度標調」格線上比較：縱軸為音高 1（低）～5（高），橫軸為時間。點擊曲線或下方卡片，先聽合成音高、再聽真人例字。可切換河內／西貢，或疊加國語四聲對照。',
        'Six tones on Chao’s five-level grid. Click a curve or card to hear the synthesized pitch, then a real word. Switch Hà Nội / Sài Gòn or overlay Mandarin tones.'
      )}
      takeaway={L(
        <><strong>華人最常見的兩個誤區：</strong>① 把玄聲 (huyền) 唸成國語四聲——其實起點要低得多；② 跌聲 (ngã) 在河內中途有喉塞「ʔ」斷開，南部則與問聲 (hỏi) 合流為類似國語三聲的 214。</>,
        <><strong>Two classic traps:</strong> huyền is not Mandarin tone 4 — it starts low; northern ngã has a glottal break, while in the South it merges with hỏi as a 214 dip.</>
      )}
    >
      <ToneContourChart accent={accent} defaultOverlay={defaultOverlay} />
    </VisualFigure>
  );
};

/* ==========================================================================
   2. Syllable anatomy — initial · medial · nucleus · final + tone
   ========================================================================== */
const SYLLABLE_EXAMPLES = [
  { word: 'thuyền', zh: '船', initial: ['th', 'tʰ'], medial: ['u', 'w'], nucleus: ['yê', 'iə'], final: ['n', 'n'], tone: 'huyen' },
  { word: 'người', zh: '人', initial: ['ng', 'ŋ'], medial: null, nucleus: ['ươ', 'ɨə'], final: ['i', 'j'], tone: 'huyen' },
  { word: 'quốc', zh: '國', initial: ['q', 'k'], medial: ['u', 'w'], nucleus: ['ô', 'o'], final: ['c', 'k'], tone: 'sac' },
  { word: 'Việt', zh: '越', initial: ['v', 'v'], medial: null, nucleus: ['iê', 'iə'], final: ['t', 't'], tone: 'nang' },
  { word: 'khỏe', zh: '健康', initial: ['kh', 'x'], medial: ['o', 'w'], nucleus: ['e', 'ɛ'], final: null, tone: 'hoi' },
  { word: 'nghiêng', zh: '傾斜', initial: ['ngh', 'ŋ'], medial: null, nucleus: ['iê', 'iə'], final: ['ng', 'ŋ'], tone: 'ngang' },
  { word: 'ăn', zh: '吃', initial: null, medial: null, nucleus: ['ă', 'ă'], final: ['n', 'n'], tone: 'ngang' },
  { word: 'sữa', zh: '牛奶', initial: ['s', 's / ʂ'], medial: null, nucleus: ['ưa', 'ɨə'], final: null, tone: 'nga' }
];

export const SyllableAnatomy = ({ accent = 'north' }) => {
  const L = useL();
  const [idx, setIdx] = useState(0);
  const ex = SYLLABLE_EXAMPLES[idx];
  const tone = TONE_SPEC[ex.tone];

  const slots = [
    { key: 'initial', zh: '聲母 âm đầu', en: 'Initial', color: 'var(--brand-accent)', bg: 'rgba(var(--brand-accent-rgb), 0.1)', data: ex.initial, emptyZh: '零聲母（喉塞 ʔ）', emptyEn: 'zero onset (ʔ)' },
    { key: 'medial', zh: '介音 âm đệm', en: 'Medial', color: 'var(--brand-purple)', bg: 'rgba(124, 58, 237, 0.1)', data: ex.medial, emptyZh: '無', emptyEn: 'none' },
    { key: 'nucleus', zh: '主要元音 âm chính', en: 'Nucleus', color: 'var(--brand-primary)', bg: 'rgba(var(--brand-primary-rgb), 0.1)', data: ex.nucleus, emptyZh: '必有', emptyEn: 'required' },
    { key: 'final', zh: '韻尾 âm cuối', en: 'Final', color: 'var(--brand-green)', bg: 'rgba(5, 150, 105, 0.1)', data: ex.final, emptyZh: '開音節', emptyEn: 'open syllable' }
  ];

  return (
    <div>
      <div className="tv-chip-row" style={{ marginBottom: '0.9rem' }}>
        {SYLLABLE_EXAMPLES.map((s, i) => (
          <button key={s.word} type="button" className={`tv-chip ${i === idx ? 'is-playing' : ''}`}
            onClick={() => { setIdx(i); speakVi(s.word, accent, `tv_syll_${s.word}`); }}>
            <strong>{s.word}</strong><span>{s.zh}</span>
          </button>
        ))}
      </div>

      <div className="tv-syll__word">
        <span>{ex.word}</span>
        <span style={{ color: 'var(--text-secondary)', fontWeight: 800 }}>{ex.zh}</span>
        <button type="button" className="tv-chip" onClick={() => speakVi(ex.word, accent, `tv_syll_${ex.word}`)}>
          <Volume2 size={13} /> {L('聽發音', 'Listen')}
        </button>
      </div>

      <div className="tv-syll">
        <div className="tv-syll__tone" style={{ background: `${tone.color}22`, color: tone.color, border: `1.5px solid ${tone.color}` }}>
          <span>🎵 {L('聲調 thanh điệu（覆蓋整個音節）', 'Tone (spans the whole syllable)')}</span>
          <span>{tone.vi} · {L(tone.zh, tone.en)} · {L('符號', 'mark')} {TONED_A[ex.tone]}</span>
        </div>
        {slots.map(slot => (
          <div key={slot.key} className={`tv-syll__slot ${slot.data ? 'is-filled' : ''}`}
            style={slot.data ? { borderColor: slot.color, background: slot.bg } : undefined}>
            <span className="tv-syll__label">{L(slot.zh, slot.en)}</span>
            <span className="tv-syll__letters" style={{ color: slot.data ? slot.color : 'var(--border-highlight)' }}>
              {slot.data ? slot.data[0] : '∅'}
            </span>
            <span className="tv-syll__ipa">{slot.data ? `/${slot.data[1]}/` : L(slot.emptyZh, slot.emptyEn)}</span>
          </div>
        ))}
      </div>
      <div className="tv-legend" style={{ marginTop: '0.75rem' }}>
        <span>{L('介音只有 o / u 兩種寫法（讀 /w/）', 'Medial is only spelled o / u (= /w/)')}</span>
        <span>{L('韻尾只有 8 種：m n ng nh · p t c ch · 加半元音 i/y、o/u', 'Only 8 consonant finals + glides i/y, o/u')}</span>
      </div>
    </div>
  );
};

export const SyllableAnatomyFigure = ({ accent, badge }) => {
  const L = useL();
  return (
    <VisualFigure
      badge={badge}
      title={L('越語音節結構解剖圖：聲母＋介音＋主要元音＋韻尾＋聲調', 'Anatomy of a Vietnamese Syllable')}
      subtitle={L('越南語每個音節（也就是每個「字」）都由固定的 5 個位置組成，跟漢語的「聲母＋韻母＋聲調」分析法幾乎一樣。點選上方例字觀察各位置如何填入。', 'Every syllable fills the same five slots — very close to the Chinese initial + rhyme + tone analysis. Pick a word to see how each slot is filled.')}
      takeaway={L(<>只有<strong>主要元音與聲調</strong>是必備的；拼字時先找出元音核心，就能判斷聲調符號要標在哪個字母上。</>, <>Only the <strong>nucleus and tone</strong> are obligatory — find the nucleus first and you know where the tone mark goes.</>)}
    >
      <SyllableAnatomy accent={accent} />
    </VisualFigure>
  );
};

/* ==========================================================================
   3. Vowel chart — tongue height × backness trapezoid
   ========================================================================== */
const VOWEL_POS = {
  i: { x: 58, y: 42, zhuyin: 'ㄧ', round: false },
  ê: { x: 100, y: 112, zhuyin: 'ㄝ（偏緊）', round: false },
  e: { x: 142, y: 182, zhuyin: '英語 bed 的 e', round: false },
  a: { x: 214, y: 254, zhuyin: 'ㄚ（長）', round: false },
  ă: { x: 252, y: 236, zhuyin: 'ㄚ（短促）', round: false, short: true },
  ư: { x: 344, y: 42, zhuyin: 'ㄧ嘴形＋ㄨ舌位', round: false },
  ơ: { x: 330, y: 112, zhuyin: 'ㄜ（長）', round: false },
  â: { x: 300, y: 132, zhuyin: 'ㄜ（短促）', round: false, short: true },
  u: { x: 382, y: 42, zhuyin: 'ㄨ', round: true },
  ô: { x: 382, y: 112, zhuyin: 'ㄛ（偏緊、圓唇）', round: true },
  o: { x: 382, y: 182, zhuyin: 'ㄛ（開口較大）', round: true }
};

const DIPHTHONG_GLIDES = [
  { from: 'i', label: 'ia / iê', to: [250, 140] },
  { from: 'ư', label: 'ưa / ươ', to: [300, 150] },
  { from: 'u', label: 'ua / uô', to: [330, 166] }
];

export const VowelChart = ({ accent = 'north' }) => {
  const L = useL();
  const [sel, setSel] = useState('ư');
  const [showGlides, setShowGlides] = useState(false);
  const data = useMemo(() => {
    const map = {};
    vietnameseSingleVowels.forEach(v => { map[v.vowel] = v; });
    return map;
  }, []);
  const current = data[sel];
  const pos = VOWEL_POS[sel];

  const choose = (v) => {
    setSel(v);
    const word = data[v]?.examples?.[0]?.vi;
    if (word) speakVi(word, accent, `tv_vowel_${v}`);
  };

  return (
    <div className="tv-split">
      <div>
        <div className="tv-toolbar">
          <Segmented ariaLabel={L('雙母音滑動', 'Diphthongs')} value={showGlides ? 'on' : 'off'} onChange={(v) => setShowGlides(v === 'on')}
            options={[{ value: 'off', label: L('單母音', 'Monophthongs') }, { value: 'on', label: L('+ 雙母音滑動', '+ Diphthong glides') }]} />
        </div>
        <svg className="tv-svg" viewBox="0 0 440 300" role="img" aria-label={L('越南語母音舌位圖', 'Vietnamese vowel chart')}>
          <polygon points="40,30 400,30 400,270 170,270" style={{ fill: 'var(--bg-main)', stroke: 'var(--border-highlight)', strokeWidth: 2 }} />
          <line x1="100" y1="112" x2="400" y2="112" className="tv-tone-grid-line" strokeDasharray="4 4" />
          <line x1="140" y1="190" x2="400" y2="190" className="tv-tone-grid-line" strokeDasharray="4 4" />
          <line x1="230" y1="30" x2="290" y2="270" className="tv-tone-grid-line" strokeDasharray="4 4" />
          <text className="tv-map-label" x="40" y="20">{L('前 (舌前)', 'front')}</text>
          <text className="tv-map-label" x="228" y="20">{L('央', 'central')}</text>
          <text className="tv-map-label" x="400" y="20" textAnchor="end">{L('後 (舌後)', 'back')}</text>
          <text className="tv-map-label" x="12" y="46" transform="rotate(-90 12 46)" textAnchor="end">{L('閉 (嘴小)', 'close')}</text>
          <text className="tv-map-label" x="150" y="290">{L('開 (嘴大)', 'open')}</text>

          {showGlides && DIPHTHONG_GLIDES.map(g => {
            const p = VOWEL_POS[g.from];
            return (
              <g key={g.label}>
                <defs>
                  <marker id={`tv-arrow-${g.from}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" style={{ fill: 'var(--brand-gold)' }} />
                  </marker>
                </defs>
                <line x1={p.x} y1={p.y + 10} x2={g.to[0]} y2={g.to[1]} markerEnd={`url(#tv-arrow-${g.from})`}
                  style={{ stroke: 'var(--brand-gold)', strokeWidth: 2.5, strokeDasharray: '6 4' }} />
                <text x={g.to[0] + 4} y={g.to[1] + 16} style={{ fill: 'var(--brand-gold)', fontSize: 12, fontWeight: 900 }}>{g.label}</text>
              </g>
            );
          })}

          {Object.entries(VOWEL_POS).map(([v, p]) => {
            const active = v === sel;
            return (
              <g key={v} className="tv-artic-point" onClick={() => choose(v)} role="button" tabIndex={0}
                aria-label={`${v} ${data[v]?.ipa || ''}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(v); } }}>
                <circle cx={p.x} cy={p.y} r={p.short ? 15 : 19}
                  style={{
                    fill: active ? 'var(--brand-primary)' : (p.round ? 'rgba(var(--brand-accent-rgb), 0.15)' : 'var(--bg-card)'),
                    stroke: p.round ? 'var(--brand-accent)' : 'var(--text-muted)',
                    strokeWidth: 2,
                    strokeDasharray: p.short ? '4 3' : undefined
                  }} />
                <text x={p.x} y={p.y + 6} textAnchor="middle"
                  style={{ fill: active ? '#fff' : 'var(--text-primary)', fontSize: p.short ? 16 : 19, fontWeight: 900 }}>{v}</text>
              </g>
            );
          })}
        </svg>
        <div className="tv-legend">
          <span><i className="tv-dot" style={{ background: 'rgba(37,99,235,0.3)', border: '1.5px solid var(--brand-accent)' }} />{L('圓唇', 'rounded')}</span>
          <span><i className="tv-dot" style={{ background: 'var(--bg-card)', border: '1.5px solid var(--text-muted)' }} />{L('不圓唇', 'unrounded')}</span>
          <span><i className="tv-dot" style={{ border: '1.5px dashed var(--text-muted)' }} />{L('短母音（ă、â 必須接韻尾）', 'short vowel (ă, â need a final)')}</span>
        </div>
      </div>

      {current && (
        <div className="tv-panel" aria-live="polite">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--brand-primary)' }}>{sel}</span>
            <span className="tv-mono tv-muted">{current.ipa}</span>
          </div>
          <div className="tv-chip-row" style={{ marginBottom: '0.6rem' }}>
            <span className="tv-chip" style={{ cursor: 'default' }}>{current.length === 'long' ? L('長母音', 'long') : L('短母音', 'short')}</span>
            <span className="tv-chip" style={{ cursor: 'default' }}>{pos.round ? L('圓唇 👄', 'rounded 👄') : L('不圓唇', 'unrounded')}</span>
            <span className="tv-chip" style={{ cursor: 'default' }}>≈ {pos.zhuyin}</span>
          </div>
          <p style={{ marginBottom: '0.7rem' }}>{L(current.descZh, current.descEn)}</p>
          <div className="tv-chip-row">
            {current.examples.map(e => (
              <PlayChip key={e.vi} vi={e.vi} zh={L(e.zh, e.en)} accent={accent} />
            ))}
          </div>
          {sel === 'ư' && (
            <div className="tv-callout" style={{ marginTop: '0.75rem' }}>
              {L('ư 與 u 舌位相同，差別只在嘴唇：ư 嘴角往兩旁拉開，u 嘴唇噘圓。', 'ư and u share tongue position; only the lips differ.')}
            </div>
          )}
          {(sel === 'ă' || sel === 'â') && (
            <div className="tv-callout" style={{ marginTop: '0.75rem' }}>
              {L('長短成對：a ↔ ă、ơ ↔ â。例如 tai（耳朵，長 a）↔ tay（手，短 ă）。', 'Length pairs: a ↔ ă, ơ ↔ â — e.g. tai (ear) vs tay (hand).')}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const VowelChartFigure = ({ accent, badge }) => {
  const L = useL();
  return (
    <VisualFigure
      badge={badge}
      title={L('母音舌位圖：嘴張多大？舌頭在前還是在後？', 'Vowel Chart: Tongue Height & Backness')}
      subtitle={L('梯形代表口腔：越往上嘴越閉、越往下嘴越開；左邊舌頭往前、右邊舌頭往後。點擊任一母音聽例字並查看國語注音近似音。', 'The trapezoid maps the mouth: top = close, bottom = open; left = front, right = back. Click a vowel to hear an example.')}
      takeaway={L(<>右上角的 <strong>ư、ơ、â</strong> 是中文沒有的「後不圓唇」母音——舌頭往後縮，但嘴唇千萬不要噘圓。</>, <>The back unrounded <strong>ư, ơ, â</strong> don’t exist in Mandarin — pull the tongue back but keep the lips spread.</>)}
    >
      <VowelChart accent={accent} />
    </VisualFigure>
  );
};

/* ==========================================================================
   4. Articulation map + consonant matrix
   ========================================================================== */
const PLACES = [
  {
    id: 'bilabial', n: 1, x: 44, y: 138, zh: '雙唇', en: 'Bilabial',
    tipZh: '上下唇閉合。注意 b 是「內爆音」：雙唇閉緊、喉頭微降，聽起來比國語ㄅ更悶、更帶聲。',
    tipEn: 'Both lips close. b is implosive — fuller and voiced compared to Mandarin b.',
    letters: [['b', 'ɓ', 'bạn', '朋友'], ['m', 'm', 'mẹ', '媽媽'], ['-p', 'p̚', 'đẹp', '美']]
  },
  {
    id: 'labiodental', n: 2, x: 62, y: 152, zh: '唇齒', en: 'Labiodental',
    tipZh: '上排門牙輕觸下唇。ph 就是 [f]，千萬別唸成ㄆ；v 要震動聲帶（南部常唸成 [j]）。',
    tipEn: 'Upper teeth touch the lower lip. ph = [f]; v is voiced (often [j] in the South).',
    letters: [['ph', 'f', 'phở', '河粉'], ['v', 'v', 'vui', '開心']]
  },
  {
    id: 'alveolar', n: 3, x: 87, y: 119, zh: '齒齦', en: 'Alveolar',
    tipZh: '舌尖頂上齒齦。t 不送氣（像ㄉ）、th 強送氣（像ㄊ）、đ 是內爆濁音。北部 d/gi/r 都唸 [z]。',
    tipEn: 'Tongue tip on the ridge. t unaspirated, th aspirated, đ implosive. North: d/gi/r = [z].',
    letters: [['t', 't', 'tôi', '我'], ['th', 'tʰ', 'thích', '喜歡'], ['đ', 'ɗ', 'đi', '去'], ['n', 'n', 'năm', '五／年'], ['l', 'l', 'lạnh', '冷'], ['x', 's', 'xin', '請'], ['d/gi/r', 'z（北）', 'rất', '非常']]
  },
  {
    id: 'retroflex', n: 4, x: 110, y: 110, zh: '捲舌', en: 'Retroflex',
    tipZh: '南部與播音標準音：舌尖往後捲。北部口語 tr 併入 ch、s 併入 x，不捲舌。',
    tipEn: 'Southern / broadcast standard: tongue tip curls back. Hà Nội merges tr→ch, s→x.',
    letters: [['tr', 'ʈ', 'trà', '茶'], ['s', 'ʂ', 'sáu', '六'], ['r', 'ɹ / ʐ（南）', 'rau', '蔬菜']]
  },
  {
    id: 'palatal', n: 5, x: 150, y: 106, zh: '硬顎', en: 'Palatal',
    tipZh: '舌面大面積貼住硬顎。nh 像「ㄋㄧ」一口氣合成；南部 d/gi/v 唸成 [j]（像「一」）。',
    tipEn: 'Tongue body against the hard palate. nh ≈ Spanish ñ; South: d/gi/v = [j].',
    letters: [['ch', 'c', 'chào', '你好'], ['nh', 'ɲ', 'nhà', '家'], ['gi/d', 'j（南）', 'gì', '什麼'], ['-ch', 'k̟̚', 'sách', '書']]
  },
  {
    id: 'velar', n: 6, x: 205, y: 112, zh: '軟顎', en: 'Velar',
    tipZh: '舌根抬起靠近軟顎。kh 幾乎等於國語「ㄏ」[x]；ng 是舌根鼻音，可以出現在字首（ngon）。',
    tipEn: 'Back of tongue to the soft palate. kh ≈ Mandarin h [x]; ng can start a word.',
    letters: [['c/k/q', 'k', 'quá', '太'], ['kh', 'x', 'không', '不'], ['g/gh', 'ɣ', 'gà', '雞'], ['ng/ngh', 'ŋ', 'ngon', '好吃']]
  },
  {
    id: 'glottal', n: 7, x: 245, y: 250, zh: '喉門', en: 'Glottal',
    tipZh: 'h 是喉部氣流聲；母音開頭的字（ăn、ở）其實先有一個輕微喉塞 [ʔ]。跌聲與重聲的「卡喉」也發生在這裡。',
    tipEn: 'h is glottal; vowel-initial words begin with a light glottal stop [ʔ]. Ngã/nặng glottalization happens here.',
    letters: [['h', 'h', 'hai', '二'], ['(ʔ)', 'ʔ', 'ăn', '吃']]
  }
];

const MATRIX_ROWS = [
  { zh: '不送氣清塞音', en: 'Plain stop', cells: { bilabial: 'p*', alveolar: 't', retroflex: 'tr', palatal: 'ch', velar: 'c/k/q', glottal: '(ʔ)' } },
  { zh: '送氣清塞音', en: 'Aspirated stop', cells: { alveolar: 'th' } },
  { zh: '內爆濁塞音', en: 'Implosive', cells: { bilabial: 'b', alveolar: 'đ' } },
  { zh: '鼻音', en: 'Nasal', cells: { bilabial: 'm', alveolar: 'n', palatal: 'nh', velar: 'ng/ngh' } },
  { zh: '清擦音', en: 'Voiceless fricative', cells: { labiodental: 'ph', alveolar: 'x (北 s)', retroflex: 's (南)', velar: 'kh', glottal: 'h' } },
  { zh: '濁擦音／近音', en: 'Voiced fricative', cells: { labiodental: 'v', alveolar: 'd gi r (北)', retroflex: 'r (南)', palatal: 'd gi v (南)', velar: 'g/gh' } },
  { zh: '邊音', en: 'Lateral', cells: { alveolar: 'l' } }
];

export const ArticulationMap = ({ accent = 'north' }) => {
  const L = useL();
  const activeKey = useActiveAudioKey();
  const [sel, setSel] = useState('alveolar');
  const place = PLACES.find(p => p.id === sel);

  return (
    <div className="tv-stack">
      <div className="tv-split">
        <div>
          <svg className="tv-svg" viewBox="0 0 330 300" role="img" aria-label={L('口腔發音部位剖面圖', 'Places of articulation')}>
            <path className="tv-artic-outline"
              d="M 150 10 C 110 10, 84 30, 80 58 L 74 76 L 46 104 Q 40 112, 52 116 L 62 118 Q 50 122, 48 132 Q 46 138, 58 140 Q 46 143, 48 150 Q 50 158, 62 160 Q 56 172, 60 186 Q 66 204, 98 206 L 150 202 Q 168 214, 170 290 L 300 290 C 324 200, 322 60, 240 16 Q 200 4, 150 10 Z" />
            {/* nasal cavity */}
            <path className="tv-artic-cavity" d="M 62 104 Q 90 80, 150 80 L 236 82 Q 256 88, 258 116 L 240 128 Q 232 108, 214 100 L 175 90 L 140 90 Q 110 94, 84 104 L 66 112 Z" />
            {/* oral cavity + pharynx */}
            <path className="tv-artic-cavity" d="M 72 124 Q 78 116, 84 113 Q 110 103, 140 99 L 175 99 Q 205 102, 226 116 Q 234 128, 236 142 L 242 132 Q 252 124, 258 118 Q 262 150, 262 240 L 230 240 L 230 206 L 150 202 L 80 172 L 70 150 Z" />
            {/* palate, velum and uvula */}
            <path className="tv-artic-line" d="M 72 124 Q 78 116, 84 113 Q 110 103, 140 99 L 175 99 Q 205 102, 226 116 Q 234 128, 236 142" style={{ strokeWidth: 3 }} />
            {/* teeth */}
            <path className="tv-artic-teeth" d="M 63 121 L 72 121 L 72 137 L 66 140 Z" />
            <path className="tv-artic-teeth" d="M 66 145 L 72 144 L 72 160 L 66 160 Z" />
            {/* tongue */}
            <path className="tv-artic-tongue" d="M 74 158 Q 78 144, 94 138 Q 124 124, 155 124 Q 194 125, 214 138 Q 230 152, 231 182 L 230 214 Q 190 214, 150 202 Q 104 188, 80 170 Z" />
            {/* epiglottis, vocal folds, trachea */}
            <path className="tv-artic-line" d="M 231 214 Q 240 206, 246 196" />
            <path className="tv-artic-line" d="M 232 252 L 245 247 L 258 252" style={{ strokeWidth: 2.5 }} />
            <line className="tv-artic-line" x1="234" y1="256" x2="234" y2="290" />
            <line className="tv-artic-line" x1="258" y1="256" x2="258" y2="290" />
            <text className="tv-map-label" x="132" y="88">{L('鼻腔', 'nasal')}</text>
            <text className="tv-map-label" x="166" y="121">{L('口腔', 'oral')}</text>
            <text className="tv-map-label" x="140" y="168">{L('舌', 'tongue')}</text>
            <text className="tv-map-label" x="244" y="178">{L('咽', 'pharynx')}</text>
            <text className="tv-map-label" x="266" y="276">{L('氣管', 'trachea')}</text>

            {PLACES.map(p => {
              const active = p.id === sel;
              return (
                <g key={p.id} className="tv-artic-point" role="button" tabIndex={0}
                  aria-label={`${p.n} ${L(p.zh, p.en)}`}
                  onClick={() => setSel(p.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSel(p.id); } }}>
                  {active && <circle cx={p.x} cy={p.y} r="15" style={{ fill: 'rgba(var(--brand-primary-rgb), 0.18)' }} />}
                  <circle cx={p.x} cy={p.y} r="9"
                    style={{ fill: active ? 'var(--brand-primary)' : 'var(--bg-card)', stroke: 'var(--brand-primary)', strokeWidth: 2 }} />
                  <text x={p.x} y={p.y + 4} textAnchor="middle"
                    style={{ fontSize: 11, fontWeight: 900, fill: active ? '#fff' : 'var(--brand-primary)' }}>{p.n}</text>
                </g>
              );
            })}
          </svg>
          <div className="tv-chip-row" style={{ justifyContent: 'center' }}>
            {PLACES.map(p => (
              <button key={p.id} type="button" className={`tv-chip ${p.id === sel ? 'is-playing' : ''}`} onClick={() => setSel(p.id)}>
                <strong>{p.n}</strong>{L(p.zh, p.en)}
              </button>
            ))}
          </div>
        </div>

        <div className="tv-panel" aria-live="polite">
          <h4>{place.n}. {L(place.zh, place.en)}</h4>
          <p style={{ marginBottom: '0.75rem' }}>{L(place.tipZh, place.tipEn)}</p>
          <div className="tv-table-wrap">
            <table className="tv-table" style={{ minWidth: 0 }}>
              <thead>
                <tr><th>{L('字母', 'Letter')}</th><th>IPA</th><th>{L('例字', 'Example')}</th></tr>
              </thead>
              <tbody>
                {place.letters.map(([letter, ipa, word, zh]) => (
                  <tr key={letter}>
                    <td className="tv-vi">{letter}</td>
                    <td className="tv-mono">[{ipa}]</td>
                    <td>
                      <PlayChip vi={word} zh={zh} accent={accent} activeKey={activeKey} audioKey={`tv_artic_${word}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="tv-table-wrap">
        <table className="tv-table tv-table--matrix">
          <thead>
            <tr>
              <th>{L('發音方法 ＼ 部位', 'Manner \\ Place')}</th>
              {PLACES.map(p => (
                <th key={p.id} style={p.id === sel ? { background: 'rgba(var(--brand-primary-rgb), 0.15)', color: 'var(--brand-primary)' } : undefined}>
                  {p.n}. {L(p.zh, p.en)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MATRIX_ROWS.map(row => (
              <tr key={row.zh}>
                <th>{L(row.zh, row.en)}</th>
                {PLACES.map(p => (
                  <td key={p.id} className={row.cells[p.id] ? 'tv-vi' : 'tv-empty-cell'}
                    style={p.id === sel ? { background: 'rgba(var(--brand-primary-rgb), 0.07)' } : undefined}>
                    {row.cells[p.id] || '·'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tv-legend">
        <span>* {L('p 只出現在字尾（đẹp）與外來語（pin 電池）', 'p occurs only as a final or in loanwords')}</span>
        <span>{L('（北）＝河內口語；（南）＝西貢口語', '(北) = Hà Nội; (南) = Sài Gòn')}</span>
      </div>
    </div>
  );
};

export const ArticulationFigure = ({ accent, badge }) => {
  const L = useL();
  return (
    <VisualFigure
      badge={badge}
      title={L('發音部位剖面圖 × 子音總表', 'Places of Articulation × Consonant Matrix')}
      subtitle={L('左圖是口腔側面剖面：數字 1→7 由嘴唇往喉嚨排列。點選部位，右側會列出在此發音的字母、國際音標與可點播的例字；下方總表同步標示該欄位。', 'A side view of the vocal tract: points 1→7 run from lips to throat. Pick a place to list its letters, IPA and playable examples; the matrix highlights the same column.')}
      takeaway={L(<>越南文拼寫 ≠ 英文拼音：<strong>ph = f、kh = ㄏ、x = s、d = z／y、đ 才是 d</strong>。先背這 5 組，閱讀正確率立刻翻倍。</>, <>Vietnamese spelling is not English: <strong>ph = f, kh = Mandarin h, x = s, d = z/y, đ = d</strong>.</>)}
    >
      <ArticulationMap accent={accent} />
    </VisualFigure>
  );
};

/* ==========================================================================
   5. Final consonants — nasal / stop pairs and the tone restriction
   ========================================================================== */
const FINAL_PAIRS = [
  { place: '雙唇', placeEn: 'Lips', mouth: '👄 雙唇閉合', mouthEn: '👄 lips close', nasal: ['-m', 'làm', '做'], stop: ['-p', 'đẹp', '美'], tw: '台語「十 tsa̍p」' },
  { place: '齒齦', placeEn: 'Ridge', mouth: '👅 舌尖頂齒齦', mouthEn: '👅 tongue tip up', nasal: ['-n', 'bạn', '朋友'], stop: ['-t', 'Việt', '越'], tw: '台語「日 ji̍t」' },
  { place: '軟顎', placeEn: 'Velum', mouth: '🫢 舌根抬高（u/ô/o 後同時閉唇）', mouthEn: '🫢 back of tongue (lips close after u/ô/o)', nasal: ['-ng', 'không', '不'], stop: ['-c', 'học', '學'], tw: '台語「學 ha̍k」' },
  { place: '硬顎', placeEn: 'Palate', mouth: '😬 舌面貼硬顎（只接 a、ê、i）', mouthEn: '😬 tongue body up (after a, ê, i)', nasal: ['-nh', 'anh', '哥哥'], stop: ['-ch', 'sách', '書'], tw: '—' }
];

export const FinalsPairDiagram = ({ accent = 'north' }) => {
  const L = useL();
  const activeKey = useActiveAudioKey();
  const toneIds = ['ngang', 'huyen', 'sac', 'hoi', 'nga', 'nang'];
  return (
    <div className="tv-stack">
      <div className="tv-table-wrap">
        <table className="tv-table">
          <thead>
            <tr>
              <th>{L('部位', 'Place')}</th>
              <th>{L('口型', 'Mouth')}</th>
              <th>{L('鼻音韻尾（可配 6 調）', 'Nasal final (any tone)')}</th>
              <th>{L('塞音韻尾（只配 2 調）', 'Stop final (2 tones only)')}</th>
              <th>{L('台語入聲對照', 'Taiwanese parallel')}</th>
            </tr>
          </thead>
          <tbody>
            {FINAL_PAIRS.map(row => (
              <tr key={row.place}>
                <th>{L(row.place, row.placeEn)}</th>
                <td>{L(row.mouth, row.mouthEn)}</td>
                <td>
                  <span className="tv-vi" style={{ marginRight: '0.4rem' }}>{row.nasal[0]}</span>
                  <PlayChip vi={row.nasal[1]} zh={row.nasal[2]} accent={accent} activeKey={activeKey} audioKey={`tv_fin_${row.nasal[1]}`} />
                </td>
                <td>
                  <span className="tv-vi" style={{ marginRight: '0.4rem', color: 'var(--brand-gold)' }}>{row.stop[0]}</span>
                  <PlayChip vi={row.stop[1]} zh={row.stop[2]} accent={accent} activeKey={activeKey} audioKey={`tv_fin_${row.stop[1]}`} />
                </td>
                <td className="tv-muted">{row.tw}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tv-split">
        <div className="tv-panel">
          <h4>{L('塞音韻尾的聲調限制', 'Tones allowed after -p -t -c -ch')}</h4>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', margin: '0.4rem 0 0.6rem' }}>
            {toneIds.map(id => {
              const ok = id === 'sac' || id === 'nang';
              const spec = TONE_SPEC[id];
              return (
                <span key={id} style={{
                  padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-xs)', fontWeight: 900, fontSize: '0.85rem',
                  background: ok ? `${spec.color}22` : 'var(--bg-input)',
                  color: ok ? spec.color : 'var(--text-muted)',
                  border: `1.5px solid ${ok ? spec.color : 'var(--border-color)'}`,
                  textDecoration: ok ? 'none' : 'line-through'
                }}>{spec.vi}</span>
              );
            })}
          </div>
          <p>{L('以 -p、-t、-c、-ch 結尾的字只會是銳聲 (sắc) 或重聲 (nặng)——這正是漢語「入聲」的痕跡：học 學、nhất 一、bắc 北、thập 十。', 'Words ending in stops only take sắc or nặng — a trace of the Chinese “entering tone”.')}</p>
        </div>
        <div className="tv-panel">
          <h4>{L('不要「爆破」！', 'Do not release!')}</h4>
          <p>{L('韻尾塞音只「閉住、不放開」：唸 đẹp 時嘴唇閉上就停，不要多出「ㄆㄜ」；唸 học 時舌根頂住就停，不要變成英文 hock-k。', 'Final stops are unreleased: close and stop — no extra puff of air.')}</p>
        </div>
      </div>
    </div>
  );
};

export const FinalsFigure = ({ accent, badge }) => {
  const L = useL();
  return (
    <VisualFigure
      badge={badge}
      title={L('韻尾配對表：4 個鼻音 ↔ 4 個塞音', 'Final Consonants: 4 Nasal ↔ 4 Stop Pairs')}
      subtitle={L('越語 8 個子音韻尾其實是 4 組「同部位」配對：嘴型一樣，只差氣流從鼻子出去（鼻音）或被完全擋住（塞音）。', 'The eight consonant finals form four same-place pairs: identical mouth shape, air either goes through the nose or is stopped.')}
      takeaway={L(<>會講台語或客家話的人有天然優勢：<strong>-p、-t、-c</strong> 就是你熟悉的入聲收尾。</>, <>Speakers of Taiwanese or Hakka already know these unreleased <strong>-p, -t, -k</strong> endings.</>)}
    >
      <FinalsPairDiagram accent={accent} />
    </VisualFigure>
  );
};

/* ==========================================================================
   6. Tone marks & typing (Telex / VNI)
   ========================================================================== */
const TYPING_TONES = [
  { id: 'ngang', telex: '—', vni: '—', pos: '—' },
  { id: 'huyen', telex: 'f', vni: '2', pos: '上' },
  { id: 'sac', telex: 's', vni: '1', pos: '上' },
  { id: 'hoi', telex: 'r', vni: '3', pos: '上' },
  { id: 'nga', telex: 'x', vni: '4', pos: '上' },
  { id: 'nang', telex: 'j', vni: '5', pos: '下' }
];
const TYPING_LETTERS = [
  ['â', 'aa', 'a6'], ['ă', 'aw', 'a8'], ['ê', 'ee', 'e6'], ['ô', 'oo', 'o6'],
  ['ơ', 'ow', 'o7'], ['ư', 'uw / w', 'u7'], ['đ', 'dd', 'd9']
];
const TYPING_DEMOS = [
  { keys: 'Vieejt', word: 'Việt', zh: '越' },
  { keys: 'nuwowcs', word: 'nước', zh: '水' },
  { keys: 'ddepj', word: 'đẹp', zh: '美' },
  { keys: 'tieengs', word: 'tiếng', zh: '語言' }
];

export const ToneTypingTable = ({ accent = 'north' }) => {
  const L = useL();
  const activeKey = useActiveAudioKey();
  return (
    <div className="tv-split">
      <div className="tv-table-wrap">
        <table className="tv-table" style={{ minWidth: 0 }}>
          <thead>
            <tr>
              <th>{L('聲調', 'Tone')}</th>
              <th>{L('寫法', 'Mark')}</th>
              <th>{L('位置', 'Position')}</th>
              <th>Telex</th>
              <th>VNI</th>
            </tr>
          </thead>
          <tbody>
            {TYPING_TONES.map(row => {
              const spec = TONE_SPEC[row.id];
              return (
                <tr key={row.id}>
                  <th style={{ color: spec.color }}>{spec.vi}</th>
                  <td>
                    <button type="button" className={`tv-chip ${activeKey === `tv_type_${row.id}` ? 'is-playing' : ''}`}
                      onClick={() => speakVi(TONE_SPEC[row.id].example, accent, `tv_type_${row.id}`)}>
                      <strong style={{ fontSize: '1.1rem' }}>{TONED_A[row.id]}</strong>
                      <Volume2 size={11} />
                    </button>
                  </td>
                  <td>{row.pos === '—' ? '—' : L(row.pos === '上' ? '母音上方' : '母音下方', row.pos === '上' ? 'above' : 'below')}</td>
                  <td className="tv-mono tv-vi">{row.telex}</td>
                  <td className="tv-mono">{row.vni}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="tv-stack">
        <div className="tv-table-wrap">
          <table className="tv-table" style={{ minWidth: 0 }}>
            <thead><tr><th>{L('字母', 'Letter')}</th><th>Telex</th><th>VNI</th></tr></thead>
            <tbody>
              {TYPING_LETTERS.map(([ch, telex, vni]) => (
                <tr key={ch}><td className="tv-vi">{ch}</td><td className="tv-mono">{telex}</td><td className="tv-mono">{vni}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tv-panel">
          <h4>{L('Telex 打字示範', 'Telex demo')}</h4>
          <div className="tv-stack" style={{ gap: '0.35rem' }}>
            {TYPING_DEMOS.map(d => (
              <div key={d.keys} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', fontSize: '0.86rem' }}>
                <code className="tv-mono" style={{ background: 'var(--bg-input)', padding: '0.1rem 0.4rem', borderRadius: 6 }}>{d.keys}</code>
                <span className="tv-muted">→</span>
                <PlayChip vi={d.word} zh={d.zh} accent={accent} activeKey={activeKey} audioKey={`tv_typedemo_${d.word}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ToneTypingFigure = ({ accent, badge, collapsible = true, defaultOpen = false }) => {
  const L = useL();
  return (
    <VisualFigure
      badge={badge}
      collapsible={collapsible}
      defaultOpen={defaultOpen}
      title={L('聲調符號與越文輸入法對照表（Telex／VNI）', 'Tone Marks & Typing Cheat Sheet (Telex / VNI)')}
      subtitle={L('五個聲調符號中，只有重聲 (nặng) 的點標在母音「下方」。手機或電腦加入「Tiếng Việt」鍵盤後，用 Telex 在字尾補一個字母即可加調。', 'Only the nặng dot sits below the vowel. With a Vietnamese keyboard, Telex adds tones by typing one extra letter.')}
      takeaway={L(<>Telex 記憶口訣：<strong>s 銳、f 玄、r 問、x 跌、j 重</strong>；雙寫字母加帽子（aa→â），w 加鉤或碗（ow→ơ、aw→ă）。</>, <>Telex: <strong>s f r x j</strong> for tones; double a letter for ^, add w for the horn/breve.</>)}
    >
      <ToneTypingTable accent={accent} />
    </VisualFigure>
  );
};

/* ==========================================================================
   7. Spelling alternations — one sound, several spellings
   ========================================================================== */
const SPELLING_ROWS = [
  { sound: '/k/', front: ['k', 'kem', '冰淇淋'], other: ['c', 'cá', '魚'], medial: ['qu', 'quê', '家鄉'] },
  { sound: '/ɣ/', front: ['gh', 'ghế', '椅子'], other: ['g', 'gà', '雞'], medial: ['g', 'góa', '守寡'] },
  { sound: '/ŋ/', front: ['ngh', 'nghe', '聽'], other: ['ng', 'ngon', '好吃'], medial: ['ng', 'ngoài', '外面'] }
];

const DIPHTHONG_ROWS = [
  { sound: '/iə/', open: ['ia', 'mía', '甘蔗'], closed: ['iê', 'tiền', '錢'], start: ['yê', 'yên', '安靜'], afterU: ['ya / yê', 'khuya · thuyền', '深夜・船'] },
  { sound: '/uə/', open: ['ua', 'mua', '買'], closed: ['uô', 'muốn', '想要'] },
  { sound: '/ɨə/', open: ['ưa', 'mưa', '下雨'], closed: ['ươ', 'nước', '水'] }
];

const SpellCell = ({ cell, accent, activeKey }) => cell ? (
  <span style={{ display: 'inline-flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <span className="tv-vi">{cell[0]}</span>
    <PlayChip vi={cell[1]} zh={cell[2]} accent={accent} activeKey={activeKey} audioKey={`tv_spell_${cell[1]}`} />
  </span>
) : <span className="tv-empty-cell">—</span>;

export const SpellingRulesFigure = ({ accent = 'north', badge, collapsible, defaultOpen }) => {
  const L = useL();
  const activeKey = useActiveAudioKey();
  return (
    <VisualFigure
      badge={badge}
      collapsible={collapsible}
      defaultOpen={defaultOpen}
      title={L('拼寫規則表：同一個音，為什麼有兩三種寫法？', 'Spelling Rules: One Sound, Several Spellings')}
      subtitle={L('越南文沿用 17 世紀傳教士的拼法，同一個音會依「後面接什麼母音」換字母。看懂這張表，就不會把 k／c、gh／g、ngh／ng 當成不同的音。', 'Missionary-era spelling changes letters according to the following vowel. These are the same sounds written differently.')}
      takeaway={L(<>口訣：<strong>k、gh、ngh 只站在 i、e、ê 前面</strong>；遇到介音 u 的 /k/ 一律寫成 qu。</>, <><strong>k, gh, ngh appear only before i, e, ê</strong>; /k/ + medial u is always qu.</>)}
    >
      <div className="tv-table-wrap">
        <table className="tv-table">
          <thead>
            <tr>
              <th>{L('讀音', 'Sound')}</th>
              <th>{L('在 i／e／ê 前', 'Before i / e / ê')}</th>
              <th>{L('在其他母音前', 'Before other vowels')}</th>
              <th>{L('接介音 o／u', 'Before medial o / u')}</th>
            </tr>
          </thead>
          <tbody>
            {SPELLING_ROWS.map(r => (
              <tr key={r.sound}>
                <th className="tv-mono">{r.sound}</th>
                <td><SpellCell cell={r.front} accent={accent} activeKey={activeKey} /></td>
                <td><SpellCell cell={r.other} accent={accent} activeKey={activeKey} /></td>
                <td><SpellCell cell={r.medial} accent={accent} activeKey={activeKey} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VisualFigure>
  );
};

export const DiphthongSpellingFigure = ({ accent = 'north', badge }) => {
  const L = useL();
  const activeKey = useActiveAudioKey();
  return (
    <VisualFigure
      badge={badge}
      title={L('三大核心雙母音的寫法分布：開音節 vs 閉音節', 'The Three Core Diphthongs: Open vs Closed Spellings')}
      subtitle={L('ia／iê、ua／uô、ưa／ươ 其實是同一個雙母音，只因「後面有沒有韻尾」改變第二個字母。聲調符號的位置也跟著改變。', 'ia/iê, ua/uô, ưa/ươ are one diphthong each; the second letter changes when a final consonant follows — and so does the tone-mark position.')}
      takeaway={L(<>聲調位置規則一次記：<strong>開音節標第一個字母（mía、mưa），閉音節標第二個字母（tiền、nước）</strong>。</>, <>Tone mark: <strong>first letter in open syllables (mía), second letter in closed ones (tiền)</strong>.</>)}
    >
      <div className="tv-table-wrap">
        <table className="tv-table">
          <thead>
            <tr>
              <th>{L('雙母音', 'Diphthong')}</th>
              <th>{L('開音節（無韻尾）', 'Open (no final)')}</th>
              <th>{L('閉音節（有韻尾）', 'Closed (with final)')}</th>
              <th>{L('字首／接介音 u', 'Word-initial / after u')}</th>
            </tr>
          </thead>
          <tbody>
            {DIPHTHONG_ROWS.map(r => (
              <tr key={r.sound}>
                <th className="tv-mono">{r.sound}</th>
                <td><SpellCell cell={r.open} accent={accent} activeKey={activeKey} /></td>
                <td><SpellCell cell={r.closed} accent={accent} activeKey={activeKey} /></td>
                <td>
                  {r.start || r.afterU ? (
                    <span className="tv-stack" style={{ gap: '0.3rem' }}>
                      {r.start && <SpellCell cell={r.start} accent={accent} activeKey={activeKey} />}
                      {r.afterU && <span><span className="tv-vi">{r.afterU[0]}</span> <span className="tv-muted">{r.afterU[1]}（{r.afterU[2]}）</span></span>}
                    </span>
                  ) : <span className="tv-empty-cell">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VisualFigure>
  );
};

/* ==========================================================================
   8. Tone confusion pairs — side-by-side mini contours
   ========================================================================== */
const CONFUSION_PAIRS = [
  { a: ['hoi', 'sửa', '修理'], b: ['nga', 'sữa', '牛奶'], tipZh: '北部：sữa 中途喉嚨「卡」一下再衝高；南部兩者同音，靠上下文分辨。', tipEn: 'North: sữa has a mid-tone glottal catch. South: identical — context decides.' },
  { a: ['sac', 'bán', '賣'], b: ['nang', 'bạn', '朋友'], tipZh: '一個往上衝、一個往下壓。重聲要短促收住，不要拖長。', tipEn: 'One shoots up, the other drops and stops short.' },
  { a: ['ngang', 'ba', '三／爸爸'], b: ['huyen', 'bà', '奶奶'], tipZh: '平聲保持在中高音；玄聲從中低處輕輕下滑，像嘆氣。', tipEn: 'Ngang stays mid-high; huyền sighs downward from lower.' },
  { a: ['huyen', 'bàn', '桌子'], b: ['nang', 'bạn', '朋友'], tipZh: '兩者都往下：玄聲長而柔、聲帶放鬆；重聲短而緊、尾端急停。', tipEn: 'Both fall: huyền long and relaxed, nặng short and tense.' },
  { a: ['sac', 'má', '媽媽'], b: ['nga', 'mã', '號碼'], tipZh: '都往上：銳聲一路順暢上揚；跌聲先壓低、斷一下再上揚。', tipEn: 'Both rise: sắc smoothly, ngã with a break.' }
];

const MiniContour = ({ ids, dialect }) => (
  <svg viewBox="0 0 120 64" className="tv-svg" style={{ maxWidth: 160 }} aria-hidden="true">
    {[1, 3, 5].map(lv => (
      <line key={lv} x1="6" x2="114" y1={58 - (lv - 1) * 13} y2={58 - (lv - 1) * 13} className="tv-tone-grid-line" />
    ))}
    {ids.map(id => {
      const spec = TONE_SPEC[id];
      const shape = spec[dialect];
      return shape.segments.map((seg, i) => (
        <path key={`${id}_${i}`}
          d={smoothPath(seg.map(([t, lv]) => [8 + t * shape.length * 104, 58 - (lv - 1) * 13]))}
          className="tv-tone-curve" style={{ stroke: spec.color, strokeWidth: 3.5 }} />
      ));
    })}
  </svg>
);

export const ToneConfusionPairs = ({ accent = 'north' }) => {
  const L = useL();
  const activeKey = useActiveAudioKey();
  return (
    <div className="tv-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
      {CONFUSION_PAIRS.map(pair => {
        const [ta, wa, za] = pair.a;
        const [tb, wb, zb] = pair.b;
        return (
          <div key={wa + wb} className="tv-tile" style={{ gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontWeight: 900 }}>
                <span style={{ color: TONE_SPEC[ta].color }}>{TONE_SPEC[ta].vi}</span>
                <span className="tv-muted"> vs </span>
                <span style={{ color: TONE_SPEC[tb].color }}>{TONE_SPEC[tb].vi}</span>
              </span>
              <MiniContour ids={[ta, tb]} dialect={accent} />
            </div>
            <div className="tv-chip-row">
              <PlayChip vi={wa} zh={za} accent={accent} activeKey={activeKey} audioKey={`tv_conf_${wa}`} />
              <PlayChip vi={wb} zh={zb} accent={accent} activeKey={activeKey} audioKey={`tv_conf_${wb}`} />
            </div>
            <span>{L(pair.tipZh, pair.tipEn)}</span>
          </div>
        );
      })}
    </div>
  );
};

export const ToneConfusionFigure = ({ accent, badge, collapsible, defaultOpen }) => {
  const L = useL();
  return (
    <VisualFigure
      badge={badge}
      collapsible={collapsible}
      defaultOpen={defaultOpen}
      title={L('華人最易混淆的 5 組聲調：曲線並排比較', 'The 5 Most-Confused Tone Pairs')}
      subtitle={L('每張卡片把兩個易混聲調的走勢疊在同一個小圖上，並附一組最小對立詞。先看形狀差在哪，再用耳朵確認。', 'Each card overlays two easily confused contours with a minimal pair. See the difference first, then confirm by ear.')}
      takeaway={L('練習順序建議：先分清「升 vs 降」（bán／bạn），再分「長 vs 短」（bàn／bạn），最後挑戰問聲 vs 跌聲。', 'Practise rising vs falling first, then long vs short, then hỏi vs ngã.')}
    >
      <ToneConfusionPairs accent={accent} />
    </VisualFigure>
  );
};
