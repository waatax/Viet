import React, { useState } from 'react';
import { ArrowRight, BookOpen, CalendarCheck, Coffee, Compass, Headphones, Heart, Mic, Shuffle, Sprout, Sparkles, Trophy, Volume2 } from 'lucide-react';
import { knowledgeBridge } from '../data/knowledgeBridge';
import { subjectSparks } from '../data/knowledgeMasteryData';
import { loadBridge, loadModuleMasteredPoints, loadLovedSubjects } from '../services/bridgeProgress';
import { loadKnowledgeProgress } from '../services/knowledgeProgress';
import './LearningWorkspace.css';

const ROUTES = [
  { id: 'alphabet', Icon: Volume2, title: '先把聲音聽清楚', desc: '發音拆解・聲調・母音', tag: '剛開始' },
  { id: 'topics', Icon: Coffee, title: '今天就能用的一句', desc: '點餐・問價・說出需求', tag: '生活開口' },
  { id: 'conversation', Icon: Mic, title: '接得住真實對話', desc: '聽懂・澄清・重述確認', tag: '會話練習' },
  { id: 'quest', Icon: Trophy, title: '用挑戰找出弱點', desc: '闖關・解說・錯題再練', tag: '遊戲評量' }
];

const FEATURED_DISCIPLINES = [
  'alphabet', 'tonegame', 'pronoun', 'shopping', 'phrases', 'grammar', 'hanviet', 'conversation', 'business', 'science'
];

export default function HomeLearningHub({ onStartStudy, onNavigate }) {
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const moduleIds = Object.keys(knowledgeBridge);
  const records = moduleIds.map((id) => {
    const bridge = loadBridge(id);
    const kpMastered = loadModuleMasteredPoints(id, 10);
    const recalled = loadKnowledgeProgress(id, 10).recalled || [];
    const combinedCount = new Set([...kpMastered, ...recalled]).size;
    return { id, ...bridge, combinedCount };
  });
  const due = records.filter(r => r.due && r.due <= Date.now());
  const started = records.filter(r => r.completed > 0 || r.combinedCount > 0).length;
  const totalMastered = records.reduce((sum, r) => sum + r.combinedCount, 0);
  const loved = loadLovedSubjects();
  const nextId = due[0]?.id || records.find(r => r.completed === 0 && r.id === 'phrases')?.id || records.find(r => r.completed === 0)?.id || 'conversation';
  const nextSpark = subjectSparks[nextId];
  const visibleSubjects = showAllSubjects ? moduleIds : FEATURED_DISCIPLINES;

  const handleRandomSubject = () => {
    const unmastered = records.filter((r) => r.combinedCount < 10).map((r) => r.id);
    const pool = unmastered.length > 0 ? unmastered : moduleIds;
    const pick = pool[Math.floor(Math.random() * pool.length)] || nextId;
    onStartStudy(pick);
  };

  return <section className="learning-hub" aria-labelledby="learning-hub-title">
    <div className="hub-intro">
      <span className="hub-eyebrow"><Sprout size={17} aria-hidden="true" /> 一點一點，快樂說進生活裡</span>
      <h2 id="learning-hub-title">今天，讓越南文再靠近你一點。</h2>
      <p>不用一次學完所有內容。選一個小任務，用「🎧 聽懂 → 📖 讀透 → 🗣️ 開口」快樂掌握全站 200 個知識點，愛上每一門越南語學科。</p>
    </div>
    <div className="hub-today">
      <div className="hub-today-icon"><Headphones size={28} aria-hidden="true" /></div>
      <div className="hub-today-copy">
        <span>{due.length ? '優先複習・約 3 分鐘' : `今天的小任務・${nextSpark?.disciplineName || '約 3 分鐘'}`}</span>
        <h3>{knowledgeBridge[nextId][0]}</h3>
        <p>一句例句 → 結構導讀與無字幕聽力 → 換條件開口說</p>
      </div>
      <button onClick={() => onStartStudy(nextId)}>開始今天的練習 <ArrowRight size={18} aria-hidden="true" /></button>
    </div>
    <div className="hub-stats">
      <span><CalendarCheck size={18} aria-hidden="true" /> {due.length} 個到期複習</span>
      <span><BookOpen size={18} aria-hidden="true" /> 已探索 {started} / 20 門知識學科</span>
      <span><Sparkles size={18} aria-hidden="true" /> 已掌握 {totalMastered} / 200 個圖解知識點（聽說讀）</span>
      <span><Heart size={18} aria-hidden="true" /> 喜愛 {loved.length} 門學科</span>
    </div>
    <div className="hub-routes" aria-label="依學習目的開始">
      {ROUTES.map(({ id, Icon, title, desc, tag }) => (
        <button key={id} onClick={() => id === 'quest' ? onNavigate(id) : onStartStudy(id)}>
          <span className={`hub-route-icon route-${id}`}><Icon size={23} aria-hidden="true" /></span>
          <span className="hub-route-copy"><small>{tag}</small><strong>{title}</strong><span>{desc}</span></span>
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      ))}
    </div>
    <div className="hub-disciplines" aria-label="熱門知識學科直達">
      <div className="hub-disciplines-header">
        <span className="hub-disciplines-label">✨ 探索你會愛上的 20 門知識學科（點選進入聽說讀工作台）：</span>
        <div className="hub-disciplines-actions">
          <button type="button" className="hub-discipline-action" onClick={handleRandomSubject}>
            <Shuffle size={14} aria-hidden="true" /> 隨機抽一門快樂學
          </button>
          <button type="button" className="hub-discipline-action" onClick={() => setShowAllSubjects(!showAllSubjects)}>
            {showAllSubjects ? '精選 10 門學科' : '展開全部 20 門學科'}
          </button>
        </div>
      </div>
      <div className="hub-discipline-pills">
        {visibleSubjects.map((id) => {
          const sp = subjectSparks[id];
          const rec = records.find((r) => r.id === id);
          const isLoved = loved.includes(id);
          if (!sp) return null;
          return (
            <button key={id} type="button" className="hub-discipline-pill" onClick={() => onStartStudy(id)} title={sp.disciplineName}>
              <span>{isLoved ? '❤️ ' : ''}{sp.badge}</span>
              <small>{rec?.combinedCount || 0}/10</small>
            </button>
          );
        })}
      </div>
    </div>
    <p className="hub-footnote"><Compass size={15} aria-hidden="true" /> 以下保留完整會話與課程探索。練習紀錄儲存在此瀏覽器。</p>
  </section>;
}
