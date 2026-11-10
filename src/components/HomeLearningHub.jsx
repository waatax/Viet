import React from 'react';
import { ArrowRight, BookOpen, CalendarCheck, Coffee, Compass, Headphones, Mic, Sprout, Sparkles, Trophy, Volume2 } from 'lucide-react';
import { knowledgeBridge } from '../data/knowledgeBridge';
import { loadBridge } from '../services/bridgeProgress';
import './LearningWorkspace.css';

const ROUTES = [
  { id: 'alphabet', Icon: Volume2, title: '先把聲音聽清楚', desc: '發音拆解・聲調・母音', tag: '剛開始' },
  { id: 'topics', Icon: Coffee, title: '今天就能用的一句', desc: '點餐・問價・說出需求', tag: '生活開口' },
  { id: 'conversation', Icon: Mic, title: '接得住真實對話', desc: '聽懂・澄清・重述確認', tag: '會話練習' },
  { id: 'quest', Icon: Trophy, title: '用挑戰找出弱點', desc: '闖關・解說・錯題再練', tag: '遊戲評量' }
];
export default function HomeLearningHub({ onStartStudy, onNavigate }) {
  const records = Object.keys(knowledgeBridge).map(id => ({ id, ...loadBridge(id) }));
  const due = records.filter(r => r.due && r.due <= Date.now());
  const started = records.filter(r => r.completed > 0).length;
  const nextId = due[0]?.id || records.find(r => r.completed === 0 && r.id === 'phrases')?.id || records.find(r => r.completed === 0)?.id || 'conversation';
  return <section className="learning-hub" aria-labelledby="learning-hub-title">
    <div className="hub-intro"><span className="hub-eyebrow"><Sprout size={17} aria-hidden="true" /> 一點一點，說進生活裡</span><h2 id="learning-hub-title">今天，讓越南文再靠近你一點。</h2><p>不用一次學完所有內容。選一個小任務，聽懂、回想，然後勇敢開口。</p></div>
    <div className="hub-today"><div className="hub-today-icon"><Headphones size={28} aria-hidden="true" /></div><div className="hub-today-copy"><span>{due.length ? '優先複習・約 3 分鐘' : '今天的小任務・約 3 分鐘'}</span><h3>{knowledgeBridge[nextId][0]}</h3><p>一句例句 → 無字幕聽力 → 換條件說</p></div><button onClick={() => onStartStudy(nextId)}>開始今天的練習 <ArrowRight size={18} aria-hidden="true" /></button></div>
    <div className="hub-stats"><span><CalendarCheck size={18} aria-hidden="true" /> {due.length} 個到期複習</span><span><BookOpen size={18} aria-hidden="true" /> 已練 {started} / 20 個主題</span><span><Sparkles size={18} aria-hidden="true" /> 200 個圖解知識點</span></div>
    <div className="hub-routes" aria-label="依學習目的開始">{ROUTES.map(({ id, Icon, title, desc, tag }) => <button key={id} onClick={() => id === 'quest' ? onNavigate(id) : onStartStudy(id)}><span className={`hub-route-icon route-${id}`}><Icon size={23} aria-hidden="true" /></span><span className="hub-route-copy"><small>{tag}</small><strong>{title}</strong><span>{desc}</span></span><ArrowRight size={16} aria-hidden="true" /></button>)}</div>
    <p className="hub-footnote"><Compass size={15} aria-hidden="true" /> 以下保留完整會話與課程探索。練習紀錄儲存在此瀏覽器。</p>
  </section>;
}
