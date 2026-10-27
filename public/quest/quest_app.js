// public/quest/quest_app.js
// Standalone vanilla ES-module Duolingo Quest app for Vietnamese
import { QUEST_UNITS } from './quest_data.js';

const STORAGE_KEY = 'viet_quest_progress_v2';
const MAX_HEARTS = 3;

// --- Sound Synthesizer via Web Audio API ---
class QuestSound {
  constructor() {
    this.ctx = null;
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    if (this.synth) {
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (this.synth) {
      this.voices = this.synth.getVoices() || [];
    }
  }

  getCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1, delay = 0) {
    const ctx = this.getCtx();
    if (!ctx) return;
    const t = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(gainVal, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + duration + 0.05);
  }

  playSuccess() {
    this.playTone(523.25, 'sine', 0.1, 0.12, 0); // C5
    this.playTone(659.25, 'sine', 0.1, 0.12, 0.08); // E5
    this.playTone(783.99, 'sine', 0.18, 0.15, 0.16); // G5
  }

  playError() {
    this.playTone(220, 'triangle', 0.15, 0.12, 0);
    this.playTone(185, 'triangle', 0.22, 0.12, 0.1);
  }

  playCombo() {
    this.playTone(659.25, 'sine', 0.08, 0.12, 0);
    this.playTone(830.61, 'sine', 0.08, 0.12, 0.07);
    this.playTone(987.77, 'sine', 0.08, 0.12, 0.14);
    this.playTone(1318.51, 'sine', 0.2, 0.15, 0.21);
  }

  playFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'sine', 0.18, 0.14, idx * 0.12);
    });
  }

  speak(text, slow = false) {
    if (!text || !this.synth) return;
    this.synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'vi-VN';
    utter.rate = slow ? 0.65 : 1.0;
    if (!this.voices || this.voices.length === 0) this.initVoices();
    const vietVoice = (this.voices || []).find(v => v.lang.startsWith('vi'));
    if (vietVoice) utter.voice = vietVoice;
    this.synth.speak(utter);
  }
}

const sound = new QuestSound();

// --- State Management ---
const defaultState = () => ({
  nodes: { 'u1-n1': { done: false, crowns: 0, attempts: 0 } },
  crowns: {},
  gems: 50,
  streak: 1,
  totalXp: 0,
  mistakesBank: {}
});

const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
  } catch (e) {
    return defaultState();
  }
};

const saveState = (s) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch (e) {}
};

// --- App State ---
const state = {
  data: loadState(),
  activeSession: null,
  selectedNode: null,
  guideUnit: null,
  userAnswer: '',
  buildPlaced: [],
  matchedPairs: [],
  selectedVi: null,
  selectedZh: null,
  feedback: null,
  showHint: false,
  showTranscript: false,
  completion: null
};

const root = document.getElementById('quest-app');

function normalize(s) {
  return String(s || '').normalize('NFKC').toLowerCase().replace(/[.,!?;:()\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
}

function getNodeStatus(nodeId) {
  const nodeData = state.data.nodes[nodeId];
  if (nodeData?.crowned) return 'crowned';
  if (nodeData?.done) return 'completed';

  let prev = null;
  for (const u of QUEST_UNITS) {
    for (const n of u.nodes) {
      if (n.id === nodeId) {
        if (!prev) return 'available';
        return (state.data.nodes[prev]?.done || state.data.nodes[prev]?.crowned) ? 'available' : 'locked';
      }
      prev = n.id;
    }
  }
  return 'available';
}

// --- Render Engine ---
function render() {
  const totalCrowns = Object.keys(state.data.crowns || {}).length;

  let html = `
    <header class="app-header">
      <a class="header-brand" href="#learn">
        <span class="mascot">🦉</span>
        <div>
          <h1>Vietnamese Quest</h1>
          <p>Duolingo 式闖關 · 全語音 · 提示鷹架 · 徹底學會</p>
        </div>
      </a>

      <div class="header-stats">
        <div class="stat-chip streak" title="連續天數">🔥 <span>${state.data.streak || 1} 天</span></div>
        <div class="stat-chip gems" title="寶石">💎 <span>${state.data.gems || 50}</span></div>
        <div class="stat-chip crowns" title="金冠">👑 <span>${totalCrowns} / 8</span></div>
        <div class="stat-chip xp" title="經驗值">⚡ <span>${state.data.totalXp || 0} XP</span></div>
        <a class="hub-link" href="../#path">← 返回主站總覽</a>
      </div>
    </header>

    <main class="main-wrapper">
  `;

  if (!state.activeSession && !state.completion) {
    // Learning Path Map
    html += `<div class="quest-path-container">`;
    QUEST_UNITS.forEach((unit, uIdx) => {
      const hasCrown = !!state.data.crowns[unit.id];
      const completedCount = unit.nodes.filter(n => state.data.nodes[n.id]?.done).length;

      html += `
        <section class="unit-block theme-${unit.color}">
          <div class="unit-head-banner">
            <div>
              <div class="unit-meta">
                <span>${unit.stage}</span>
                <span>· 進度: ${completedCount}/${unit.nodes.length} ${hasCrown ? '· 👑 已通關' : ''}</span>
              </div>
              <h2>${unit.icon} 第 ${uIdx + 1} 單元：${unit.title}</h2>
              <div class="vi-title">${unit.viTitle}</div>
              <p class="unit-desc">🎯 ${unit.goal}</p>
            </div>
            <button class="guidebook-btn" data-act="open-guide" data-unit="${unit.id}">📖 觀念手冊</button>
          </div>

          <div class="path-column">
      `;

      unit.nodes.forEach((node, nIdx) => {
        const status = getNodeStatus(node.id);
        const isBoss = node.kind === 'boss';
        const isSelected = state.selectedNode?.id === node.id;
        const offsetArr = [-38, 30, -25, 0];
        const offsetX = offsetArr[nIdx % 4];

        html += `
          <div class="node-wrapper" style="transform: translateX(${offsetX}px)">
            ${status === 'available' ? `<div class="start-indicator">開始！</div>` : ''}
            <button class="node-btn ${status} ${isBoss ? 'boss' : ''}" data-act="select-node" data-node="${node.id}" aria-label="${node.title}">
              ${status === 'locked' ? '🔒' : (status === 'crowned' ? '👑' : (status === 'completed' ? '✓' : node.icon))}
            </button>
            <span class="node-title-label">${node.title}</span>

            ${isSelected ? `
              <div class="node-popover">
                <h3>${node.title}</h3>
                <p>${isBoss ? '綜合本單元所有聽力與語序，3 顆愛心挑戰，通關獲金冠！' : '循序漸進題型訓練，錯題課末重複演練，直到學會為止。'}</p>
                <button class="popover-start" data-act="start-session" data-node="${node.id}">
                  ▶ 開始闖關 (+${isBoss ? 30 : 15} XP)
                </button>
              </div>
            ` : ''}
          </div>
        `;
      });

      html += `</div></section>`;
    });
    html += `</div>`;
  } else if (state.activeSession) {
    // Active Interactive Lesson Screen
    const s = state.activeSession;
    const q = s.queue[s.currentIndex];
    const pct = Math.min(100, Math.round((s.currentIndex / s.queue.length) * 100));

    html += `
      <div class="lesson-screen">
        <div class="lesson-header">
          <button class="exit-btn" data-act="exit-session" title="離開">✕</button>
          <div class="progress-track"><div class="progress-fill" style="width: ${pct}%"></div></div>
          ${s.isBoss ? `
            <div class="hearts-strip" title="剩餘愛心">${'❤️'.repeat(s.hearts)}${'🖤'.repeat(MAX_HEARTS - s.hearts)}</div>
          ` : `<div style="font-size: 0.8rem; font-weight: 700; color: #10b981;">🛡️ 精熟學習模式</div>`}
          ${s.combo >= 2 ? `<div style="font-weight: 800; color: #f97316;">🔥 x${s.combo}</div>` : ''}
        </div>

        <div class="lesson-card">
          <div class="audio-bar">
            ${q.audioText ? `
              <div>
                <button class="audio-btn" data-act="speak" data-text="${encodeURIComponent(q.audioText)}">🔊 標準語音</button>
                <button class="audio-btn slow" data-act="speak-slow" data-text="${encodeURIComponent(q.audioText)}">🐢 慢速 (0.65x)</button>
                ${q.type === 'listen' ? `<button class="audio-btn" data-act="toggle-transcript">${state.showTranscript ? '隱藏文字' : '文字提示'}</button>` : ''}
              </div>
            ` : '<div></div>'}
            <button class="hint-btn" data-act="toggle-hint">${state.showHint ? '收起提示' : '💡 解題提示'}</button>
          </div>

          ${state.showTranscript && q.audioText ? `
            <div style="background: rgba(56, 189, 248, 0.1); border-left: 3px solid #38bdf8; padding: 0.6rem 1rem; border-radius: 8px; margin-bottom: 1rem;">
              <strong>${q.audioText}</strong>
            </div>
          ` : ''}

          ${state.showHint && q.hint ? `
            <div class="hint-box">${q.hint}</div>
          ` : ''}

          <h2 class="prompt-text">${q.prompt}</h2>
    `;

    // Question body
    if (q.type === 'choice' || q.type === 'listen') {
      html += `<div class="choices-list">`;
      q.options.forEach((opt, idx) => {
        const isSel = state.userAnswer === opt;
        const letter = String.fromCharCode(65 + idx);
        html += `
          <button class="choice-item ${isSel ? 'selected' : ''}" data-act="pick-choice" data-val="${encodeURIComponent(opt)}">
            <span style="display:inline-block; width:24px; font-weight:800;">${letter}</span>
            <span>${opt}</span>
          </button>
        `;
      });
      html += `</div>`;
    } else if (q.type === 'build') {
      const placedTokens = state.buildPlaced;
      const pool = [...q.words];
      const usedMap = {};
      placedTokens.forEach(t => { usedMap[t] = (usedMap[t] || 0) + 1; });

      html += `
        <div class="build-box">
          <div class="build-drop">
            ${placedTokens.length === 0 ? '<span style="color:#94a3b8; font-style:italic;">點擊下方詞彙方塊放入此處</span>' : ''}
            ${placedTokens.map((w, idx) => `
              <button class="word-chip placed" data-act="remove-build" data-idx="${idx}">${w}</button>
            `).join('')}
          </div>
          <div class="build-pool">
            ${pool.map((w, idx) => {
              const isUsed = (usedMap[w] || 0) > 0;
              if (isUsed) usedMap[w] -= 1;
              return `<button class="word-chip ${isUsed ? 'disabled' : ''}" data-act="add-build" data-word="${encodeURIComponent(w)}" ${isUsed ? 'disabled' : ''}>${w}</button>`;
            }).join('')}
          </div>
        </div>
      `;
    } else if (q.type === 'match') {
      const pairs = q.pairs;
      const viList = pairs.map(p => p[0]);
      const zhList = [...pairs.map(p => p[1])].reverse();

      html += `
        <div class="match-grid">
          <div style="display:flex; flex-direction:column; gap:0.5rem;">
            ${viList.map(vi => {
              const matched = state.matchedPairs.some(p => p[0] === vi);
              const sel = state.selectedVi === vi;
              return `<button class="match-tile ${matched ? 'matched' : ''} ${sel ? 'selected' : ''}" data-act="select-vi" data-vi="${encodeURIComponent(vi)}" ${matched ? 'disabled' : ''}>${vi}</button>`;
            }).join('')}
          </div>
          <div style="display:flex; flex-direction:column; gap:0.5rem;">
            ${zhList.map(zh => {
              const matched = state.matchedPairs.some(p => p[1] === zh);
              const sel = state.selectedZh === zh;
              return `<button class="match-tile ${matched ? 'matched' : ''} ${sel ? 'selected' : ''}" data-act="select-zh" data-zh="${encodeURIComponent(zh)}" ${matched ? 'disabled' : ''}>${zh}</button>`;
            }).join('')}
          </div>
        </div>
      `;
    } else if (q.type === 'input') {
      html += `
        <div>
          <input type="text" class="text-box-input" id="answer-input" placeholder="在此輸入答案..." value="${state.userAnswer}" autocomplete="off">
          <div style="display:flex; gap:0.3rem; margin-top:0.75rem; flex-wrap:wrap; font-size:0.8rem; color:#94a3b8;">
            <span>快速輸入聲調：</span>
            ${['á', 'à', 'ả', 'ã', 'ạ', 'đ', 'ê', 'ơ', 'ư', 'ô', 'â'].map(c => `
              <button class="word-chip" style="padding:0.2rem 0.5rem; font-size:0.85rem;" data-act="type-char" data-char="${c}">${c}</button>
            `).join('')}
          </div>
        </div>
      `;
    }

    html += `</div>`; // End of lesson-card

    // Footer check / continue
    html += `
      <footer class="lesson-footer ${state.feedback ? (state.feedback.isCorrect ? 'correct' : 'wrong') : ''}">
        ${!state.feedback ? `
          <button class="check-btn" data-act="check-answer">檢查答案 ➔</button>
        ` : `
          <div class="feedback-desc">
            <strong>${state.feedback.isCorrect ? '🎉 Xuất sắc! 太棒了，完全正確！' : `❌ 未完全答對！正確答案是：${state.feedback.correctAnswer}`}</strong>
            <p class="why">${state.feedback.why}</p>
            ${!state.feedback.isCorrect ? `<p style="font-size:0.8rem; color:#f59e0b; margin-top:0.25rem;">💡 精熟保證：此題已排入課末練習，稍後將再次挑戰！</p>` : ''}
          </div>
          <button class="continue-btn ${state.feedback.isCorrect ? '' : 'wrong'}" data-act="next-question">繼續 ➔</button>
        `}
      </footer>
    `;
    html += `</div>`;
  }

  // Celebration Modal
  if (state.completion) {
    const c = state.completion;
    html += `
      <div class="modal-overlay">
        <div class="modal-content">
          <div style="font-size:3.5rem; margin-bottom:1rem;">🎉 🦉 🏆</div>
          <h2 style="font-size:1.6rem; font-weight:900; color:#38bdf8; margin-bottom:0.5rem;">
            ${c.newCrown ? '👑 恭喜榮獲單元金冠！' : '本課圓滿完成！'}
          </h2>
          <p style="color:#94a3b8; margin-bottom:1.5rem;">
            ${c.perfect ? '零失誤完美過關！已掌握本課所有核心知識！' : '成功克服錯題，徹底學會了所有關鍵用法！'}
          </p>
          <div style="display:flex; justify-content:center; gap:1.5rem; margin-bottom:1.5rem;">
            <div style="background:rgba(255,255,255,0.06); padding:0.75rem 1.25rem; border-radius:14px;">
              <div style="font-size:0.75rem; color:#94a3b8;">獲得經驗</div>
              <div style="font-size:1.3rem; font-weight:800; color:#a855f7;">+${c.xpGained} XP</div>
            </div>
            <div style="background:rgba(255,255,255,0.06); padding:0.75rem 1.25rem; border-radius:14px;">
              <div style="font-size:0.75rem; color:#94a3b8;">獲得寶石</div>
              <div style="font-size:1.3rem; font-weight:800; color:#06b6d4;">+${c.gemsGained} 💎</div>
            </div>
          </div>
          <button class="popover-start" data-act="close-completion">繼續下一課 ➔</button>
        </div>
      </div>
    `;
  }

  // Guidebook Modal
  if (state.guideUnit) {
    const u = state.guideUnit;
    html += `
      <div class="modal-overlay" data-act="close-guide-backdrop">
        <div class="modal-content" style="text-align:left; max-width:600px;">
          <h2 style="font-size:1.25rem; font-weight:800; margin-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.75rem;">
            📖 ${u.title} · 核心觀念手冊
          </h2>
          <div style="margin-bottom:1rem;">
            <h3 style="font-size:0.95rem; color:#38bdf8; margin-bottom:0.35rem;">📌 核心文法</h3>
            <p style="font-size:0.9rem; line-height:1.5; color:#cbd5e1;">${u.guide.keyGrammar}</p>
          </div>
          <div style="margin-bottom:1rem;">
            <h3 style="font-size:0.95rem; color:#eab308; margin-bottom:0.35rem;">🎵 發音與聲調指引</h3>
            <p style="font-size:0.9rem; line-height:1.5; color:#cbd5e1;">${u.guide.toneTip}</p>
          </div>
          <div style="margin-bottom:1.5rem;">
            <h3 style="font-size:0.95rem; color:#10b981; margin-bottom:0.5rem;">💬 情境示範對話</h3>
            ${u.guide.dialogue.map(d => `
              <div style="background:rgba(255,255,255,0.05); padding:0.5rem 0.75rem; border-radius:8px; margin-bottom:0.4rem; display:flex; align-items:center; gap:0.5rem;">
                <button class="audio-btn" style="padding:0.25rem 0.5rem;" data-act="speak" data-text="${encodeURIComponent(d.vi)}">🔊</button>
                <div>
                  <div style="font-weight:700; color:#fff;">${d.speaker}: ${d.vi}</div>
                  <div style="font-size:0.8rem; color:#94a3b8;">${d.zh}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <button class="popover-start" data-act="close-guide">知道了，關閉手冊</button>
        </div>
      </div>
    `;
  }

  html += `</main>`;
  root.innerHTML = html;
  bindEvents();
}

function bindEvents() {
  // Input changes
  const inp = document.getElementById('answer-input');
  if (inp) {
    inp.addEventListener('input', (e) => {
      state.userAnswer = e.target.value;
    });
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (!state.feedback) checkAnswer();
        else nextQuestion();
      }
    });
  }
}

// --- Action Delegations ---
root.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-act]');
  if (!btn) return;
  const act = btn.getAttribute('data-act');

  if (act === 'select-node') {
    const id = btn.getAttribute('data-node');
    if (getNodeStatus(id) === 'locked') {
      sound.playError();
      return;
    }
    for (const u of QUEST_UNITS) {
      for (const n of u.nodes) {
        if (n.id === id) {
          state.selectedNode = state.selectedNode?.id === id ? null : n;
          render();
          return;
        }
      }
    }
  }

  if (act === 'start-session') {
    const id = btn.getAttribute('data-node');
    for (const u of QUEST_UNITS) {
      for (const n of u.nodes) {
        if (n.id === id) {
          startSession(n);
          return;
        }
      }
    }
  }

  if (act === 'speak') {
    const txt = decodeURIComponent(btn.getAttribute('data-text') || '');
    sound.speak(txt, false);
  }

  if (act === 'speak-slow') {
    const txt = decodeURIComponent(btn.getAttribute('data-text') || '');
    sound.speak(txt, true);
  }

  if (act === 'toggle-hint') {
    state.showHint = !state.showHint;
    render();
  }

  if (act === 'toggle-transcript') {
    state.showTranscript = !state.showTranscript;
    render();
  }

  if (act === 'pick-choice') {
    state.userAnswer = decodeURIComponent(btn.getAttribute('data-val') || '');
    render();
  }

  if (act === 'add-build') {
    const w = decodeURIComponent(btn.getAttribute('data-word') || '');
    state.buildPlaced.push(w);
    render();
  }

  if (act === 'remove-build') {
    const idx = parseInt(btn.getAttribute('data-idx'), 10);
    state.buildPlaced.splice(idx, 1);
    render();
  }

  if (act === 'select-vi') {
    const vi = decodeURIComponent(btn.getAttribute('data-vi') || '');
    sound.speak(vi, false);
    state.selectedVi = vi;
    if (state.selectedZh) checkMatch(vi, state.selectedZh);
    else render();
  }

  if (act === 'select-zh') {
    const zh = decodeURIComponent(btn.getAttribute('data-zh') || '');
    state.selectedZh = zh;
    if (state.selectedVi) checkMatch(state.selectedVi, zh);
    else render();
  }

  if (act === 'type-char') {
    const c = btn.getAttribute('data-char');
    state.userAnswer += c;
    render();
    setTimeout(() => {
      const el = document.getElementById('answer-input');
      if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    }, 50);
  }

  if (act === 'check-answer') {
    checkAnswer();
  }

  if (act === 'next-question') {
    nextQuestion();
  }

  if (act === 'exit-session') {
    if (confirm('確定要暫停闖關並返回地圖嗎？')) {
      state.activeSession = null;
      render();
    }
  }

  if (act === 'close-completion') {
    state.completion = null;
    state.activeSession = null;
    render();
  }

  if (act === 'open-guide') {
    const uid = btn.getAttribute('data-unit');
    state.guideUnit = QUEST_UNITS.find(u => u.id === uid) || null;
    render();
  }

  if (act === 'close-guide' || act === 'close-guide-backdrop') {
    state.guideUnit = null;
    render();
  }
});

function checkMatch(vi, zh) {
  const q = state.activeSession.queue[state.activeSession.currentIndex];
  const pair = q.pairs.find(p => p[0] === vi && p[1] === zh);
  if (pair) {
    sound.playSuccess();
    state.matchedPairs.push([vi, zh]);
  } else {
    sound.playError();
  }
  state.selectedVi = null;
  state.selectedZh = null;
  render();
}

function startSession(node) {
  state.selectedNode = null;
  state.completion = null;
  const isBoss = node.kind === 'boss';
  state.activeSession = {
    nodeId: node.id,
    isBoss,
    hearts: isBoss ? MAX_HEARTS : null,
    queue: [...node.questions],
    currentIndex: 0,
    combo: 0,
    retryQueue: [],
    mistakesCount: 0,
    totalInitial: node.questions.length
  };
  resetQuestionInputs();
  render();
  // Auto speak first question if listen type
  const firstQ = state.activeSession.queue[0];
  if (firstQ?.type === 'listen' && firstQ.audioText) {
    sound.speak(firstQ.audioText, false);
  }
}

function resetQuestionInputs() {
  state.userAnswer = '';
  state.buildPlaced = [];
  state.matchedPairs = [];
  state.selectedVi = null;
  state.selectedZh = null;
  state.feedback = null;
  state.showHint = false;
  state.showTranscript = false;
}

function checkAnswer() {
  const s = state.activeSession;
  if (!s) return;
  const q = s.queue[s.currentIndex];

  let userVal = state.userAnswer;
  if (q.type === 'build') userVal = state.buildPlaced.join(' ');
  if (q.type === 'match') {
    if (state.matchedPairs.length !== q.pairs.length) return;
    userVal = 'matched';
  }

  let isCorrect = false;
  if (q.type === 'match') isCorrect = (userVal === 'matched');
  else if (q.type === 'choice' || q.type === 'listen') isCorrect = (userVal === q.answer);
  else if (q.type === 'build') isCorrect = (normalize(userVal) === normalize(q.answer));
  else if (q.type === 'input') {
    const list = [q.answer, ...(q.alternatives || [])].map(normalize);
    isCorrect = list.includes(normalize(userVal));
  }

  state.feedback = {
    isCorrect,
    why: q.why,
    hint: q.hint,
    correctAnswer: q.answer
  };

  if (isCorrect) {
    s.combo += 1;
    if (s.combo >= 3) sound.playCombo();
    else sound.playSuccess();
    if (q.audioText && q.type !== 'listen') {
      sound.speak(q.audioText, false);
    }
  } else {
    s.combo = 0;
    s.mistakesCount += 1;
    sound.playError();
    // Mastery Guarantee: Queue for retry
    s.retryQueue.push(q);
    if (s.isBoss) {
      s.hearts -= 1;
      if (s.hearts <= 0) {
        alert('💔 愛心已用盡！別灰心，返回地圖多複習幾次再來挑戰！');
        state.activeSession = null;
        render();
        return;
      }
    }
  }
  render();
}

function nextQuestion() {
  const s = state.activeSession;
  if (!s) return;

  if (s.currentIndex + 1 < s.queue.length) {
    s.currentIndex += 1;
    resetQuestionInputs();
    render();
    const nextQ = s.queue[s.currentIndex];
    if (nextQ?.type === 'listen' && nextQ.audioText) sound.speak(nextQ.audioText, false);
  } else if (s.retryQueue.length > 0) {
    // Mastery retry queue
    const retryQ = s.retryQueue.shift();
    s.queue.push(retryQ);
    s.currentIndex += 1;
    resetQuestionInputs();
    render();
    if (retryQ.type === 'listen' && retryQ.audioText) sound.speak(retryQ.audioText, false);
  } else {
    // Session Completed!
    finalizeSession();
  }
}

function finalizeSession() {
  const s = state.activeSession;
  const isBoss = s.isBoss;
  const perfect = s.mistakesCount === 0;
  const xp = (isBoss ? 30 : 15) + (perfect ? 5 : 0);

  state.data.totalXp = (state.data.totalXp || 0) + xp;
  state.data.nodes[s.nodeId] = { done: true, crowned: isBoss, lastCompleted: Date.now() };

  let newCrown = false;
  if (isBoss) {
    const unit = QUEST_UNITS.find(u => u.nodes.some(n => n.id === s.nodeId));
    if (unit && !state.data.crowns[unit.id]) {
      state.data.crowns[unit.id] = Date.now();
      newCrown = true;
      state.data.gems = (state.data.gems || 0) + 20;
    }
  }

  saveState(state.data);
  sound.playFanfare();

  state.completion = {
    xpGained: xp,
    perfect,
    gemsGained: newCrown ? 20 : 5,
    newCrown
  };
  state.activeSession = null;
  render();
}

// Initial boot
render();
