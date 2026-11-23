import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';

const mem = new Map();
globalThis.localStorage = {
  getItem: k => mem.get(k) ?? null,
  setItem: (k, v) => mem.set(k, v),
  removeItem: k => mem.delete(k)
};
globalThis.window = {
  location: { hash: '' },
  scrollTo() {},
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent() {}
};
globalThis.document = {
  addEventListener() {},
  removeEventListener() {},
  documentElement: { setAttribute() {} }
};

fs.mkdirSync('scripts/cache', { recursive: true });
const out = path.resolve('scripts/cache/uiux-ultra-test.mjs');
await build({
  stdin: {
    contents: `
      export { LanguageProvider } from './src/context/LanguageContext.jsx';
      export { Navbar } from './src/components/Navbar.jsx';
      export { default as HomeLearningHub } from './src/components/HomeLearningHub.jsx';
      export { LearningPathModule } from './src/components/LearningPathModule.jsx';
      export { default as UltralearningCoach } from './src/components/UltralearningCoach.jsx';
      export * as ultraEngine from './src/services/ultralearningEngine.js';
      export { audioEngine } from './src/services/audioEngine.js';
    `,
    resolveDir: process.cwd(),
    loader: 'js'
  },
  outfile: out,
  bundle: true,
  platform: 'node',
  format: 'esm',
  external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
  loader: { '.css': 'empty' },
  define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' },
  logLevel: 'error'
});

const {
  LanguageProvider,
  Navbar,
  HomeLearningHub,
  LearningPathModule,
  UltralearningCoach,
  ultraEngine,
  audioEngine
} = await import(pathToFileURL(out).href);

audioEngine.speak = () => {};
audioEngine.stop = () => {};
audioEngine.playHaptic = () => {};

const textOf = n => (n.children || []).map(c => (typeof c === 'string' ? c : textOf(c))).join('');

// 1. Engine Sweet Spot & Interleaved Deck verification
assert.equal(ultraEngine.getSweetSpotAnalysis([true, true]).zone, 'calibrating');
assert.equal(ultraEngine.getSweetSpotAnalysis([true, true, true, true, true, true, true, true, true, true]).zone, 'too-easy');
assert.equal(ultraEngine.getSweetSpotAnalysis([true, true, true, true, true, true, true, true, false, false]).zone, 'sweet-spot');
assert.equal(ultraEngine.getSweetSpotAnalysis([false, false, true, false, false, true]).zone, 'too-hard');

const deck = ultraEngine.buildInterleavedDrillDeck('all', 8);
assert.equal(deck.length, 8, 'Interleaved deck has 8 items');
deck.forEach((item, idx) => {
  assert.ok(item.spokenVi?.trim(), `deck[${idx}] has spokenVi`);
  assert.equal(item.listeningCheck[1].length, 3, `deck[${idx}] has 3 listening options`);
});

// 2. Navbar Light/Dark switch + All Courses mega-menu + Prefs popover
let themeVal = 'dark';
let r;
act(() => {
  r = TestRenderer.create(React.createElement(LanguageProvider, null,
    React.createElement(Navbar, {
      theme: themeVal,
      setTheme: t => { themeVal = typeof t === 'function' ? t(themeVal) : t; },
      fontSize: 'normal', setFontSize() {},
      activeTab: 'path', setActiveTab() {},
      userStats: { xp: 120, streak: 3 },
      selectedAccent: 'north', setSelectedAccent() {},
      speechRate: 1.0, setSpeechRate() {},
      onOpenAchievements() {}, onOpenDailyQuests() {}, onOpenChapterFinder() {}, onOpenAudioDiagnostic() {}, onOpenBookmarks() {}
    })
  ));
});
const lightBtn = r.root.findAllByType('button').find(b => textOf(b).includes('亮色'));
assert.ok(lightBtn, 'Light mode toggle exists');
act(() => lightBtn.props.onClick());
assert.equal(themeVal, 'light', 'Theme toggled to light');

const catalogBtn = r.root.findAllByType('button').find(b => textOf(b).includes('全部課程'));
act(() => catalogBtn.props.onClick());
assert.ok(JSON.stringify(r.toJSON()).includes('nav-catalog-dropdown'), 'All Courses mega-menu opens');
act(() => r.unmount());

// 3. HomeLearningHub 6 Instant-Start cards
let navTarget = null;
act(() => {
  r = TestRenderer.create(React.createElement(HomeLearningHub, {
    onNavigate: id => { navTarget = id; },
    onStartStudy() {},
    onOpenSearch() {}
  }));
});
for (const [label, expected] of [
  ['聽音樂學越語', 'songs'],
  ['單字＆雙語隨身聽', 'listen'],
  ['情境會話實戰', 'conversation'],
  ['單字播放＆閃卡', 'flashcards'],
  ['YouTube 影片課程', 'dialogvideo'],
  ['母語級超速特訓', 'ultra']
]) {
  const btn = r.root.findAllByType('button').find(b => textOf(b).includes(label));
  assert.ok(btn, 'Instant-start card exists: ' + label);
  act(() => btn.props.onClick());
  assert.equal(navTarget, expected, 'Card navigates to ' + expected);
}
act(() => r.unmount());

// 4. LearningPathModule clean tabbed layout
mem.clear();
act(() => {
  r = TestRenderer.create(React.createElement(LanguageProvider, null,
    React.createElement(LearningPathModule, {
      setActiveTab() {}, onOpenChapterFinder() {}, selectedAccent: 'north', setSelectedAccent() {}, updateUserStats() {}
    })
  ));
});
const defaultJson = JSON.stringify(r.toJSON());
assert.ok(defaultJson.includes('proverb-card-v2'), 'Default overview shows Daily Proverb');
assert.ok(!defaultJson.includes('roadmap-grid-v2'), 'Default overview hides heavy roadmap until tab clicked');
assert.ok(!defaultJson.includes('landscape-grid'), 'Default overview hides landscapes until tab clicked');

for (const [tabLabel, expectedClass] of [
  ['20 模組與 A1–C2 藍圖', 'roadmap-grid-v2'],
  ['越南風土與禮儀', 'landscape-grid'],
  ['學習法與知識導覽', 'sla-steps-grid']
]) {
  const tabBtn = r.root.findAllByType('button').find(b => textOf(b).includes(tabLabel));
  assert.ok(tabBtn, 'Explore tab exists: ' + tabLabel);
  act(() => tabBtn.props.onClick());
  assert.ok(JSON.stringify(r.toJSON()).includes(expectedClass), tabLabel + ' renders ' + expectedClass);
}
act(() => r.unmount());

// 5. UltralearningCoach See -> Do -> Feedback + Radar + Blueprint
mem.clear();
act(() => {
  r = TestRenderer.create(React.createElement(UltralearningCoach, {
    selectedAccent: 'north',
    onNavigate() {},
    onStartStudy() {},
    updateUserStats() {}
  }));
});
assert.ok(JSON.stringify(r.toJSON()).includes('ultra-blind-shield'), 'Blind retrieval mode active by default');
const optBtns = r.root.findAllByType('button').filter(b => b.props.className?.includes('ultra-option-btn'));
assert.equal(optBtns.length, 3, 'Three retrieval options displayed');
act(() => optBtns[0].props.onClick());
assert.ok(JSON.stringify(r.toJSON()).includes('ultra-feedback-panel'), '3-layer feedback panel appears after answering');
const speakBtn = r.root.findAllByType('button').find(b => textOf(b).includes('我已大聲跟讀'));
act(() => speakBtn.props.onClick());
assert.ok(ultraEngine.loadUltralearningState().dailyOutput.spoken >= 1, 'Spoken output incremented');

const radarTab = r.root.findAllByType('button').find(b => textOf(b).includes('近母語雷達'));
act(() => radarTab.props.onClick());
assert.ok(JSON.stringify(r.toJSON()).includes('ultra-pillars-grid'), 'Radar renders 5 near-native pillars');

const bpTab = r.root.findAllByType('button').find(b => textOf(b).includes('雙書 9+3'));
act(() => bpTab.props.onClick());
assert.ok(JSON.stringify(r.toJSON()).includes('ultra-principles-grid'), 'Blueprint renders 9 Ultralearning principles');
act(() => r.unmount());

console.log('PASS: Ultralearning Coach (See->Do->Feedback, 85% Sweet Spot, Exposure Ladder, 5 Pillars), streamlined Navbar, 6 Instant-Start cards & 5-Tab Explore Deck all verified!');
