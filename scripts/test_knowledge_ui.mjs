import assert from 'node:assert/strict';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { normalizeKnowledgeProgress, loadKnowledgeProgress, saveKnowledgeProgress } from '../src/services/knowledgeProgress.js';

assert.deepEqual(normalizeKnowledgeProgress({ recalled: [0, 0, 5, 6, -1, '1', null], checks: [true, 'true', 1], errorType: 'bad' }, 6), {
  recalled: [0, 5], checks: [true, false, false], errorType: 'meaning'
});
const entries = new Map();
globalThis.localStorage = { getItem: key => entries.get(key) ?? null, setItem: (key, value) => entries.set(key, value) };
assert.equal(saveKnowledgeProgress('grammar', { recalled: [2], checks: [true, false, true], errorType: 'order' }), true);
assert.equal(loadKnowledgeProgress('grammar', 6).errorType, 'order');
assert.deepEqual(loadKnowledgeProgress('grammar', 6).recalled, [2]);
assert.deepEqual(loadKnowledgeProgress('shopping', 6).recalled, [], 'Module progress is isolated');
entries.set('viet_knowledge_v1_grammar', '{broken');
assert.deepEqual(loadKnowledgeProgress('grammar', 6).checks, [false, false, false]);
globalThis.localStorage = { getItem() { throw Error('blocked'); }, setItem() { throw Error('full'); } };
assert.equal(saveKnowledgeProgress('grammar', {}), false);
assert.deepEqual(loadKnowledgeProgress('grammar', 6).recalled, []);
delete globalThis.localStorage;

// Rendering checks do not need file watchers, HMR or browser dependency scans.
const server = await createServer({ configFile: false, optimizeDeps: { noDiscovery: true, include: [] }, server: { middlewareMode: true, watch: null, hmr: false }, appType: 'custom' });
try {
  const { KnowledgeGuide } = await server.ssrLoadModule('/src/components/KnowledgeGuide.jsx');
  const { knowledgeGuides } = await server.ssrLoadModule('/src/data/knowledgeGuides.js');
  for (const id of Object.keys(knowledgeGuides)) {
    const html = renderToStaticMarkup(React.createElement(KnowledgeGuide, { moduleId: id, onSelectChapter() {}, setActiveTab() {} }));
    assert.equal((html.match(/class="kg-recall-card"/g) || []).length, 9, `${id}: nine recall cards`);
    assert.equal((html.match(/aria-label="播放越文：/g) || []).length, 9, `${id}: every example playable`);
    assert.ok(html.includes('class="dpb '), `${id}: dual-mode player bar`);
    assert.ok(html.includes('kg-chart kg-chart-'), `${id}: lesson chart`);
    assert.ok(html.includes('kg-cando'), `${id}: can-do goals`);
    assert.ok(html.includes('aria-label="實戰延伸任務"') && html.includes('遮住選項回想') && html.includes('換情境挑戰'), `${id}: three-stage practical extension`);
    assert.equal((html.match(/<fieldset/g) || []).length, 3, `${id}: comprehension, transfer and listening checks`);
    assert.equal((html.match(/hidden=""/g) || []).length, 9, `${id}: recall answers initially hidden`);
    assert.ok(html.includes(`id="kg-error-${id}"`), `${id}: labelled corrective action selector`);
    assert.ok(html.includes('Review · 延後再查'), `${id}: full correction loop`);
    assert.ok(!html.includes('undefined') && !html.includes('NaN'), `${id}: no missing content`);
    if (['grammar', 'sentence', 'shopping', 'pronoun', 'hanviet', 'macropol'].includes(id)) assert.ok(html.includes('kg-extra-diagram'), `${id}: subject-specific diagram`);
  }
  console.log('PASS: 20 knowledge pages server-render, 180 playable hidden-answer cards, 60 quiz fieldsets (incl. listening), 20 lesson charts + 6 targeted diagrams, can-do goals; isolated progress, corrupted storage and unavailable storage recovery.');
} finally { await server.close(); }
