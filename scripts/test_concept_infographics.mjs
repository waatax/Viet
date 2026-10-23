import assert from 'node:assert/strict';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const SIMPLIFIED = /[们这个说话时间么过还没对为发会东车门开关见马鱼鸡买卖钱银饭馆汤点请谢问题号码电话机宾饮药医价贵乐欢听读写习网络视频软质报单账户员签证]/;
const MAINLAND = ['視頻', '質量', '信息', '軟件', '出租車', '網絡', '默認', '增值稅', '稅號', '服務員', '地鐵', '屏幕', '短信', '摩托車', '登機牌', '托運', '塑料', '渠道', '鼠標'];
const VALID_TYPES = new Set(['contrast', 'slots', 'flow', 'steps', 'matrix', 'timeline', 'tree', 'contour']);

const server = await createServer({
  configFile: false,
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true, watch: null, hmr: false },
  appType: 'custom'
});

try {
  const { conceptDetails } = await server.ssrLoadModule('/src/data/conceptDetails.js');
  const { ConceptInfograph } = await server.ssrLoadModule('/src/components/ConceptInfograph.jsx');
  const { knowledgeGuides } = await server.ssrLoadModule('/src/data/knowledgeGuides.js');

  const modules = Object.keys(knowledgeGuides);
  assert.equal(modules.length, 20, '20 knowledge modules');

  let totalInfographsRendered = 0;

  for (const modId of modules) {
    const details = conceptDetails[modId];
    assert.ok(details, `conceptDetails has module ${modId}`);
    assert.equal(details.length, 9, `module ${modId} has 9 concepts`);

    const guideRows = knowledgeGuides[modId].rows;

    details.forEach((item, idx) => {
      assert.equal(item.concept, guideRows[idx][0], `${modId}[${idx}] concept matches guide`);
      assert.ok(item.syntax?.length > 5, `${modId}[${idx}] has syntax formula`);
      assert.ok(item.usage?.length > 15, `${modId}[${idx}] has practical usage`);
      assert.ok(item.trap?.length > 10, `${modId}[${idx}] has trap alert`);
      assert.ok(item.mnemonic?.length > 5, `${modId}[${idx}] has mnemonic`);

      const info = item.infograph;
      assert.ok(info, `${modId}[${idx}] has infograph object`);
      assert.ok(VALID_TYPES.has(info.type), `${modId}[${idx}] valid infograph type: ${info.type}`);
      assert.ok(info.title?.length > 3, `${modId}[${idx}] has infograph title`);

      // Verify no simplified or mainland words in any field
      const combined = `${item.concept} ${item.syntax} ${item.usage} ${item.trap} ${item.mnemonic} ${info.title}`;
      const simp = combined.match(SIMPLIFIED);
      assert.ok(!simp, `${modId}[${idx}] contains simplified character: ${simp?.[0]}`);

      for (const term of MAINLAND) {
        assert.ok(!combined.includes(term), `${modId}[${idx}] contains mainland term: ${term}`);
      }

      // Server-render the ConceptInfograph
      const html = renderToStaticMarkup(React.createElement(ConceptInfograph, { infograph: info }));
      assert.ok(html.includes('class="ci-infograph-card"'), `${modId}[${idx}] renders card markup`);
      assert.ok(html.includes(info.title), `${modId}[${idx}] renders title`);
      assert.ok(!html.includes('undefined') && !html.includes('NaN'), `${modId}[${idx}] no undefined or NaN in markup`);

      totalInfographsRendered++;
    });
  }

  assert.equal(totalInfographsRendered, 180, 'all 180 dedicated micro-infographics rendered');
  console.log(`PASS: All 20 modules, 180 explicit knowledge points, and 180 dedicated micro-infographics verified and rendered successfully.`);
} finally {
  await server.close();
}
