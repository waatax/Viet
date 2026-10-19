import React from 'react';
import { BarChart3, Table2, Clock, Puzzle, Network, Activity } from 'lucide-react';
import { knowledgeVisuals } from '../data/knowledgeVisuals';

const ICONS = { contour: Activity, bars: BarChart3, matrix: Table2, timeline: Clock, slots: Puzzle, tree: Network };

// Six tone contours on the five-level scale (5 = highest)
function ContourChart({ tones }) {
  const W = 520, H = 210, left = 46, top = 16, plotH = 150, colW = (W - left - 10) / tones.length;
  const y = level => top + (5 - level) * (plotH / 4);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={tones.map(([name, ex, pts]) => `${name}（${ex}）：${pts.join('→')}`).join('；')}>
      {[1, 2, 3, 4, 5].map(level => (
        <g key={level}>
          <line x1={left} x2={W - 10} y1={y(level)} y2={y(level)} stroke="currentColor" strokeOpacity="0.15" />
          <text x={left - 10} y={y(level) + 4} textAnchor="end" fontSize="11" fill="currentColor">{level}</text>
        </g>
      ))}
      {tones.map(([name, example, pts, mark], i) => {
        const x0 = left + i * colW + 12, x1 = left + (i + 1) * colW - 12;
        const step = (x1 - x0) / (pts.length - 1);
        const d = pts.map((p, n) => `${n ? 'L' : 'M'}${x0 + n * step},${y(p)}`).join(' ');
        return (
          <g key={name}>
            <path d={d} fill="none" stroke="var(--brand-primary, #14b8a6)" strokeWidth={mark === 'short' ? 5 : 3.5}
              strokeLinecap="round" strokeDasharray={mark === 'glottal' ? '7 5' : undefined} />
            <text x={(x0 + x1) / 2} y={top + plotH + 22} textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor" lang="vi">{example}</text>
            <text x={(x0 + x1) / 2} y={top + plotH + 38} textAnchor="middle" fontSize="11" fill="currentColor" lang="vi">{name}</text>
          </g>
        );
      })}
    </svg>
  );
}

function BarsChart({ bars, unit, log }) {
  const max = Math.max(...bars.map(b => b[1]));
  const scale = v => (log ? Math.log10(v) / Math.log10(max) : v / max);
  return (
    <ol className="kg-bars">
      {bars.map(([label, value]) => (
        <li key={label}>
          <span className="kg-bar-label" lang="vi">{label}</span>
          <span className="kg-bar-track"><span className="kg-bar-fill" style={{ width: `${Math.max(4, scale(value) * 100)}%` }} /></span>
          <span className="kg-bar-value">{value.toLocaleString('en-US')} {unit}</span>
        </li>
      ))}
    </ol>
  );
}

function MatrixChart({ head, rows }) {
  return (
    <div className="kg-table-wrap" tabIndex="0" role="region" aria-label="圖表資料表，可橫向捲動">
      <table className="kg-matrix">
        <thead><tr>{head.map(h => <th scope="col" key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map(row => <tr key={row.join('|')}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function TimelineChart({ points }) {
  return (
    <ol className="kg-timeline">
      {points.map(([label, desc], i) => (
        <li key={label}><span className="kg-dot" aria-hidden="true">{i + 1}</span><strong lang="vi">{label}</strong><span>{desc}</span></li>
      ))}
    </ol>
  );
}

function SlotsChart({ rows }) {
  return (
    <div className="kg-slots">
      {rows.map((row, r) => (
        <ol key={r} aria-label={row.map(([vi, zh]) => `${vi}（${zh}）`).join(' + ')}>
          {row.map(([vi, zh]) => <li key={vi}><strong lang="vi">{vi}</strong><span>{zh}</span></li>)}
        </ol>
      ))}
    </div>
  );
}

function TreeChart({ roots }) {
  return (
    <div className="kg-tree">
      {roots.map(([root, words]) => (
        <section key={root}>
          <strong className="kg-tree-root" lang="vi">{root}</strong>
          <ul>{words.map(([vi, zh]) => <li key={vi}><span lang="vi">{vi}</span><small>{zh}</small></li>)}</ul>
        </section>
      ))}
    </div>
  );
}

const RENDERERS = { contour: ContourChart, bars: BarsChart, matrix: MatrixChart, timeline: TimelineChart, slots: SlotsChart, tree: TreeChart };

export function KnowledgeChart({ moduleId }) {
  const visual = knowledgeVisuals[moduleId];
  if (!visual) return null;
  const Chart = RENDERERS[visual.type];
  const Icon = ICONS[visual.type];
  return (
    <figure className={`kg-chart kg-chart-${visual.type}`}>
      <figcaption><Icon size={18} aria-hidden="true" /> {visual.title}</figcaption>
      <Chart {...visual} />
      <p className="kg-chart-note">{visual.note}</p>
    </figure>
  );
}

export default KnowledgeChart;
