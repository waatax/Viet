import React from 'react';
import {
  Layers,
  ArrowRight,
  GitCommit,
  Activity,
  Table,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import './ConceptInfograph.css';

/**
 * Dedicated Micro-Infographic renderer for each knowledge point.
 * Supports: 'contrast' | 'slots' | 'flow' | 'steps' | 'matrix' | 'timeline' | 'tree' | 'contour'
 */
export function ConceptInfograph({ infograph }) {
  if (!infograph) return null;

  const { type, title } = infograph;

  const renderContent = () => {
    switch (type) {
      case 'contrast':
        return (
          <div className="ci-contrast-grid">
            {infograph.columns?.map((col, idx) => (
              <div key={idx} className={`ci-contrast-col ci-col-${idx % 2 === 0 ? 'primary' : 'secondary'}`}>
                <div className="ci-col-header">
                  <span className="ci-col-badge">{col.label}</span>
                  {col.status && <span className="ci-col-status">{col.status}</span>}
                </div>
                {col.example && <p lang="vi" className="ci-col-example">{col.example}</p>}
                {col.note && <p className="ci-col-note">{col.note}</p>}
              </div>
            ))}
          </div>
        );

      case 'slots':
        return (
          <div className="ci-slots-container">
            <div className="ci-slots-flow">
              {infograph.slots?.map((slot, idx) => (
                <React.Fragment key={idx}>
                  <div className="ci-slot-card">
                    <span className="ci-slot-label">{slot.label}</span>
                    <strong lang="vi" className="ci-slot-val">{slot.val}</strong>
                  </div>
                  {idx < infograph.slots.length - 1 && (
                    <span className="ci-slot-arrow" aria-hidden="true">+</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        );

      case 'flow':
        return (
          <div className="ci-flow-list">
            {infograph.steps?.map((step, idx) => (
              <div key={idx} className="ci-flow-item">
                <div className="ci-flow-badge-col">
                  <span className="ci-flow-num">{idx + 1}</span>
                  {idx < infograph.steps.length - 1 && <div className="ci-flow-connector" />}
                </div>
                <div className="ci-flow-body">
                  <strong className="ci-flow-title">{step.title}</strong>
                  <span className="ci-flow-desc">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'steps':
        return (
          <div className="ci-steps-grid">
            {infograph.steps?.map((step, idx) => (
              <div key={idx} className="ci-step-card">
                <div className="ci-step-header">
                  <span className="ci-step-level">{step.level}</span>
                  {step.tag && <span className="ci-step-tag">{step.tag}</span>}
                </div>
                {step.ex && <p lang="vi" className="ci-step-ex">{step.ex}</p>}
              </div>
            ))}
          </div>
        );

      case 'matrix':
        return (
          <div className="ci-matrix-wrapper" tabIndex="0" role="region" aria-label={`${title} 數據對照表`}>
            <table className="ci-matrix-table">
              {infograph.headers && (
                <thead>
                  <tr>
                    {infograph.headers.map((h, idx) => (
                      <th scope="col" key={idx}>{h}</th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {infograph.rows?.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className={cIdx === 0 ? 'ci-matrix-lead' : ''}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'timeline':
        return (
          <div className="ci-timeline-container">
            <div className="ci-timeline-axis">
              {infograph.stages?.map((stage, idx) => (
                <div key={idx} className="ci-timeline-node">
                  <div className="ci-timeline-marker">
                    <span className="ci-timeline-dot" />
                    <span className="ci-timeline-tag">{stage.tag}</span>
                  </div>
                  <div className="ci-timeline-info">
                    <p className="ci-timeline-desc">{stage.desc}</p>
                    {stage.ex && <span lang="vi" className="ci-timeline-ex">{stage.ex}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tree':
        return (
          <div className="ci-tree-container">
            {infograph.branches?.map((branch, idx) => (
              <div key={idx} className="ci-tree-branch">
                <div className="ci-tree-root">
                  <strong lang="vi">{branch.root}</strong>
                </div>
                <div className="ci-tree-arrow" aria-hidden="true">➔</div>
                <div className="ci-tree-leaf">
                  <span lang="vi">{branch.leaf}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'contour':
        // High-contrast SVG tone contour visualization
        const contours = infograph.contours || [];
        const W = 360;
        const H = 140;
        const left = 36;
        const top = 16;
        const plotH = 100;
        const yCoord = (lvl) => top + (5 - lvl) * (plotH / 4);
        return (
          <div className="ci-contour-container">
            <svg viewBox={`0 0 ${W} ${H}`} className="ci-contour-svg" role="img" aria-label={title}>
              {/* Pitch grid lines 1-5 */}
              {[1, 2, 3, 4, 5].map((lvl) => (
                <g key={lvl}>
                  <line x1={left} x2={W - 16} y1={yCoord(lvl)} y2={yCoord(lvl)} stroke="var(--border-subtle, #e2e8f0)" strokeDasharray="3 3" />
                  <text x={left - 8} y={yCoord(lvl) + 4} textAnchor="end" fontSize="10" fill="var(--text-muted, #64748b)">{lvl}</text>
                </g>
              ))}
              {/* Plot contours */}
              {contours.map((c, cIdx) => {
                const pts = c.pts || [];
                const stepX = (W - left - 40) / (pts.length > 1 ? pts.length - 1 : 1);
                const pathStr = pts.map((p, pIdx) => `${pIdx === 0 ? 'M' : 'L'} ${left + 16 + pIdx * stepX} ${yCoord(p)}`).join(' ');
                const colors = ['#2563eb', '#059669', '#d97706', '#dc2626', '#7c3aed'];
                const strokeColor = colors[cIdx % colors.length];
                return (
                  <g key={c.name}>
                    <path d={pathStr} fill="none" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
                    {pts.map((p, pIdx) => (
                      <circle key={pIdx} cx={left + 16 + pIdx * stepX} cy={yCoord(p)} r="4" fill={strokeColor} />
                    ))}
                    <text x={left + 16 + (pts.length - 1) * stepX + 8} y={yCoord(pts[pts.length - 1]) + 4} fontSize="11" fontWeight="bold" fill={strokeColor}>
                      {c.name}
                    </text>
                  </g>
                );
              })}
            </svg>
            <div className="ci-contour-legend">
              {contours.map((c) => (
                <span key={c.name} className="ci-contour-badge">
                  <strong>{c.name}</strong>: <span lang="vi">{c.ex}</span>
                </span>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <figure className="ci-infograph-card" role="img" aria-label={`資訊圖解：${title}`}>
      <figcaption className="ci-infograph-caption">
        <Sparkles size={14} className="ci-caption-icon" aria-hidden="true" />
        <span className="ci-caption-type">【專屬圖解 · {type.toUpperCase()}】</span>
        <span className="ci-caption-text">{title}</span>
      </figcaption>
      <div className="ci-infograph-body">
        {renderContent()}
      </div>
    </figure>
  );
}
