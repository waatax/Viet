import React, { useEffect, useState } from 'react';
import { Ear, Layers, Volume2 } from 'lucide-react';
import { deckNames, pronunciationDecks, tones } from '../data/pronunciationCards';
import { audioEngine } from '../services/audioEngine';
import './PronunciationCards.css';

const notes = {
  single: '12 種字母拼寫。i、y 作單母音時同音；ă、â 放在有韻尾的音節中練。',
  double: '三組核心雙母音各念成一拍。比較 ia／iê／yê／ya、ua／uô、ưa／ươ 的拼寫與聲調位置。',
  glide: '從主要母音滑向韻尾，或從圓唇介音滑入母音。整個音節只念一拍。',
  initial: '留意例詞的第一個音。先聽整個詞，再模仿開頭的唇形與送氣。',
  final: '留意例詞最後的收音。-p、-t、-c、-ch 收住氣流，只搭配銳聲或重聲。'
};

export default function PronunciationCards({ accent }) {
  const [deck, setDeck] = useState('single');
  const [pattern, setPattern] = useState('');
  const [tone, setTone] = useState('');
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  const [listen, setListen] = useState(false);
  const [error, setError] = useState(false);
  const entries = pronunciationDecks[deck];
  const tonal = entries[0].toneIndex !== undefined;
  const cards = entries.filter(c => (!pattern || c.pattern === pattern) && (tone === '' || c.toneIndex === Number(tone)));
  const card = cards[index];
  useEffect(() => () => audioEngine.stop(), []);

  function move(next) {
    audioEngine.stop();
    setError(false);
    setBack(false);
    setIndex(next);
  }
  function chooseDeck(next) {
    move(0);
    setDeck(next);
    setPattern('');
    setTone('');
  }
  function play(rate) {
    setError(false);
    audioEngine.speak(card.word, { accent, lang: 'vi', rate, onError: () => setError(true) });
  }

  return <section className="pronunciation-practice" aria-labelledby="pronunciation-heading">
    <header><Layers aria-hidden="true" /><h3 id="pronunciation-heading">越語發音閃卡</h3></header>
    <div className="pronunciation-filters">
      <label>練習牌組<select value={deck} onChange={e => chooseDeck(e.target.value)}>
        {Object.entries(deckNames).map(([id, name]) => <option key={id} value={id}>{name}</option>)}
      </select></label>
      <label>拼寫<select value={pattern} onChange={e => { move(0); setPattern(e.target.value); }}>
        <option value="">全部拼寫</option>{[...new Set(entries.map(c => c.pattern))].map(p => <option key={p}>{p}</option>)}
      </select></label>
      {tonal && <label>聲調<select value={tone} onChange={e => { move(0); setTone(e.target.value); }}>
        <option value="">全部六聲</option>{tones.map(([vi, zh], i) => <option value={i} key={vi}>{vi} · {zh}</option>)}
      </select></label>}
    </div>
    <p>{notes[deck]}{tonal && ' 六聲對照包含拼讀用音節。'}</p>
    <label className="pronunciation-listen"><input type="checkbox" checked={listen} onChange={e => { move(index); setListen(e.target.checked); }} />先聽再翻卡</label>
    <div className="pronunciation-face" aria-live="polite">
      <small>{deckNames[deck]} · 第 {index + 1} / {cards.length} 張</small>
      {listen && !back ? <><Ear size={45} aria-hidden="true" /><span>聽示範，試著念一次</span></> :
        <><strong lang="vi">{card.word}</strong><span>{back ? card.pattern + ' · ' + card.answer : '先念出聲，再聽示範核對'}</span></>}
      {back && <p>{card.tip}</p>}
    </div>
    <div className="pronunciation-actions">
      <button type="button" onClick={() => play(1)}><Volume2 size={18} /> 聽示範</button>
      <button type="button" onClick={() => play(0.75)}>慢速跟讀</button>
      <button type="button" onClick={() => setBack(!back)}>{back ? '回到正面' : '翻卡核對'}</button>
    </div>
    {error && <p role="alert">語音播放失敗，請再點一次「聽示範」。</p>}
    <div className="pronunciation-actions">
      <button type="button" disabled={!index} onClick={() => move(index - 1)}>上一張</button>
      <button type="button" disabled={cards.length < 2} onClick={() => move((index + 1 + Math.floor(Math.random() * (cards.length - 1))) % cards.length)}>隨機抽卡</button>
      <button type="button" disabled={cards.length < 2} onClick={() => move((index + 1) % cards.length)}>{index === cards.length - 1 ? '再練一輪' : '下一張'}</button>
    </div>
  </section>;
}
