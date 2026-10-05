import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { VisualFigure, useL, speakVi, useActiveAudioKey, PlayChip } from './VisualFigure';

/* ==========================================================================
   1. Kinship tree — kin terms seen from 「Tôi」
   ========================================================================== */
const NODE_W = 76;
const NODE_H = 50;
const ROW_Y = { g2: 34, g1: 124, g0: 214, gm1: 304, gm2: 394 };

const KIN_NODES = [
  { id: 'ongnoi', row: 'g2', x: 125, vi: 'Ông nội', zh: '爺爺', call: 'ông', self: 'cháu', say: 'Cháu chào ông ạ!', sayZh: '爺爺好！', side: 'nội' },
  { id: 'banoi', row: 'g2', x: 213, vi: 'Bà nội', zh: '奶奶', call: 'bà', self: 'cháu', say: 'Bà ơi, cháu về rồi ạ!', sayZh: '奶奶，我回來了！', side: 'nội' },
  { id: 'ongngoai', row: 'g2', x: 448, vi: 'Ông ngoại', zh: '外公', call: 'ông', self: 'cháu', say: 'Cháu chào ông ngoại ạ!', sayZh: '外公好！', side: 'ngoại' },
  { id: 'bangoai', row: 'g2', x: 536, vi: 'Bà ngoại', zh: '外婆', call: 'bà', self: 'cháu', say: 'Bà ngoại ơi, cháu nhớ bà lắm!', sayZh: '外婆，我好想妳！', side: 'ngoại' },

  { id: 'bac', row: 'g1', x: 46, vi: 'Bác', zh: '伯伯', detail: '父親（北部也包括母親）的哥哥或姊姊；也用來尊稱比父母年長的人', detailEn: 'Parent’s older sibling; also any elder older than your parents', call: 'bác', self: 'cháu', say: 'Cháu chào bác ạ!', sayZh: '伯伯好！', side: 'nội' },
  { id: 'chu', row: 'g1', x: 128, vi: 'Chú', zh: '叔叔', detail: '父親的弟弟；也用來稱呼與父親年紀相仿的男性（司機、警衛、店主）', detailEn: 'Father’s younger brother; any man around your father’s age', call: 'chú', self: 'cháu', say: 'Chú ơi, cháu hỏi chút ạ.', sayZh: '叔叔，我想問一下。', side: 'nội' },
  { id: 'co', row: 'g1', x: 210, vi: 'Cô', zh: '姑姑', detail: '父親的妹妹；也是「女老師」與母親年紀女性的尊稱', detailEn: 'Father’s younger sister; also female teachers and women your mother’s age', call: 'cô', self: 'cháu', say: 'Cháu cảm ơn cô ạ!', sayZh: '謝謝姑姑！', side: 'nội' },
  { id: 'bo', row: 'g1', x: 292, vi: 'Bố / Ba', zh: '爸爸', detail: '北部說 bố、南部說 ba', detailEn: 'bố in the North, ba in the South', call: 'bố / ba', self: 'con', say: 'Con chào bố ạ!', sayZh: '爸爸好！', side: 'nội' },
  { id: 'me', row: 'g1', x: 410, vi: 'Mẹ / Má', zh: '媽媽', detail: '北部說 mẹ、南部說 má', detailEn: 'mẹ in the North, má in the South', call: 'mẹ / má', self: 'con', say: 'Mẹ ơi, con đói rồi!', sayZh: '媽，我餓了！', side: 'ngoại' },
  { id: 'cau', row: 'g1', x: 492, vi: 'Cậu', zh: '舅舅', detail: '母親的兄弟', detailEn: 'Mother’s brother', call: 'cậu', self: 'cháu', say: 'Cậu ơi, cháu đến rồi ạ!', sayZh: '舅舅，我到了！', side: 'ngoại' },
  { id: 'di', row: 'g1', x: 574, vi: 'Dì', zh: '阿姨', detail: '母親的姊妹（南部也常用來稱呼母親年紀的女性）', detailEn: 'Mother’s sister', call: 'dì', self: 'cháu', say: 'Dì ơi, dì khỏe không ạ?', sayZh: '阿姨，您好嗎？', side: 'ngoại' },

  { id: 'ho', row: 'g0', x: 128, vi: 'Anh chị em họ', zh: '堂表兄弟姊妹', call: 'anh / chị / em', self: 'em / anh / chị', say: 'Anh họ của tôi sống ở Đà Nẵng.', sayZh: '我的堂哥住在峴港。', note: true },
  { id: 'anh', row: 'g0', x: 231, vi: 'Anh', zh: '哥哥', call: 'anh', self: 'em', say: 'Anh ơi, đợi em với!', sayZh: '哥，等等我！' },
  { id: 'chi', row: 'g0', x: 311, vi: 'Chị', zh: '姊姊', call: 'chị', self: 'em', say: 'Chị ơi, em mượn cái này nhé!', sayZh: '姊，這個借我喔！' },
  { id: 'toi', row: 'g0', x: 391, vi: 'TÔI', zh: '我', isMe: true },
  { id: 'em', row: 'g0', x: 471, vi: 'Em', zh: '弟弟／妹妹', call: 'em', self: 'anh / chị', say: 'Em ăn cơm chưa?', sayZh: '你吃飯了沒？' },

  { id: 'con', row: 'gm1', x: 391, vi: 'Con', zh: '兒女', call: 'con', self: 'bố / mẹ', say: 'Con ngoan lắm!', sayZh: '孩子你好乖！' },
  { id: 'chau1', row: 'gm1', x: 471, vi: 'Cháu', zh: '姪子・外甥', call: 'cháu', self: 'bác / chú / cô / cậu / dì', say: 'Cháu học lớp mấy rồi?', sayZh: '你讀幾年級了？' },
  { id: 'chau2', row: 'gm2', x: 391, vi: 'Cháu', zh: '孫子・孫女', call: 'cháu', self: 'ông / bà', say: 'Ông thương cháu lắm.', sayZh: '爺爺很疼你。' }
];

const nodeById = Object.fromEntries(KIN_NODES.map(n => [n.id, n]));
const top = (id) => ROW_Y[nodeById[id].row];
const bottom = (id) => ROW_Y[nodeById[id].row] + NODE_H;
const cx = (id) => nodeById[id].x;

/** Couple → children elbow connector. */
const familyLinks = (a, b, kids) => {
  const y = top(a) + NODE_H / 2;
  const mid = (cx(a) + cx(b)) / 2;
  const kidTop = top(kids[0]);
  const barY = kidTop - 16;
  const xs = kids.map(cx);
  return [
    `M ${cx(a) + NODE_W / 2} ${y} L ${cx(b) - NODE_W / 2} ${y}`,
    `M ${mid} ${y} L ${mid} ${barY}`,
    `M ${Math.min(mid, ...xs)} ${barY} L ${Math.max(mid, ...xs)} ${barY}`,
    ...xs.map(x => `M ${x} ${barY} L ${x} ${kidTop}`)
  ];
};

export const KinshipTree = ({ accent = 'north' }) => {
  const L = useL();
  const activeKey = useActiveAudioKey();
  const [sel, setSel] = useState('chu');
  const node = nodeById[sel];

  const links = [
    ...familyLinks('ongnoi', 'banoi', ['bac', 'chu', 'co', 'bo']),
    ...familyLinks('ongngoai', 'bangoai', ['me', 'cau', 'di']),
    ...familyLinks('bo', 'me', ['anh', 'chi', 'toi', 'em']),
    `M ${cx('toi')} ${bottom('toi')} L ${cx('con')} ${top('con')}`,
    `M ${cx('con')} ${bottom('con')} L ${cx('chau2')} ${top('chau2')}`,
    `M ${cx('em')} ${bottom('em')} L ${cx('chau1')} ${top('chau1')}`
  ];

  const choose = (n) => {
    if (n.isMe) return;
    setSel(n.id);
    speakVi(n.vi.split('/')[0].trim(), accent, `tv_kin_${n.id}`);
  };

  const genLabels = [
    ['g2', L('祖輩 +2', 'grandparents')],
    ['g1', L('父母輩 +1', 'parents')],
    ['g0', L('同輩 0', 'my generation')],
    ['gm1', L('子女輩 −1', 'children')],
    ['gm2', L('孫輩 −2', 'grandchildren')]
  ];

  return (
    <div className="tv-stack">
      <svg className="tv-svg" viewBox="0 0 720 456" role="img" aria-label={L('越南親屬稱謂家族樹', 'Vietnamese kinship tree')}>
        <text className="tv-tree-side" x="169" y="20" textAnchor="middle" style={{ fill: 'var(--brand-accent)' }}>{L('父系 bên nội', 'father’s side · nội')}</text>
        <text className="tv-tree-side" x="492" y="20" textAnchor="middle" style={{ fill: 'var(--brand-green)' }}>{L('母系 bên ngoại', 'mother’s side · ngoại')}</text>
        {genLabels.map(([row, label]) => (
          <text key={row} className="tv-tree-gen" x="714" y={ROW_Y[row] + NODE_H / 2 + 4} textAnchor="end">{label}</text>
        ))}
        {links.map((d, i) => <path key={i} d={d} className="tv-tree-link" />)}
        <path d={`M ${cx('chu')} ${bottom('chu')} L ${cx('ho')} ${top('ho')}`} className="tv-tree-link" strokeDasharray="5 4" />

        {KIN_NODES.map(n => {
          const x = n.x - NODE_W / 2;
          const y = ROW_Y[n.row];
          const cls = `tv-tree-node ${n.isMe ? 'is-self' : ''} ${sel === n.id ? 'is-active' : ''}`;
          return (
            <g key={n.id} className={cls} role={n.isMe ? undefined : 'button'} tabIndex={n.isMe ? undefined : 0}
              aria-label={`${n.vi} ${n.zh}`}
              onClick={() => choose(n)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(n); } }}>
              <rect x={x} y={y} width={NODE_W} height={NODE_H} rx="12"
                style={n.side === 'ngoại' && sel !== n.id ? { stroke: 'rgba(5,150,105,0.55)' } : undefined} />
              <text className="tv-tree-vi" x={n.x} y={y + 21} textAnchor="middle"
                style={n.vi.length > 9 ? { fontSize: n.vi.length > 11 ? 10 : 12 } : undefined}>{n.vi}</text>
              <text className="tv-tree-zh" x={n.x} y={y + 38} textAnchor="middle"
                style={n.zh.length > 7 ? { fontSize: 9 } : undefined}>{n.zh.length > 11 ? n.zh.slice(0, 11) + '…' : n.zh}</text>
            </g>
          );
        })}
      </svg>

      {node && !node.isMe && (
        <div className="tv-split" aria-live="polite">
          <div className="tv-panel">
            <h4>{node.vi} · {node.zh}</h4>
            {node.detail && <p>{L(node.detail, node.detailEn)}</p>}
            <div className="tv-table-wrap" style={{ marginTop: '0.4rem' }}>
              <table className="tv-table" style={{ minWidth: 0 }}>
                <tbody>
                  <tr><th>{L('我稱呼對方', 'I call them')}</th><td className="tv-vi">{node.call}</td></tr>
                  <tr><th>{L('我自稱', 'I call myself')}</th><td className="tv-vi" style={{ color: 'var(--brand-green)' }}>{node.self}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tv-panel">
            <h4>{L('開口說說看', 'Say it')}</h4>
            <button type="button" className={`tv-chip ${activeKey === `tv_kin_say_${node.id}` ? 'is-playing' : ''}`}
              onClick={() => speakVi(node.say, accent, `tv_kin_say_${node.id}`)} style={{ fontSize: '0.95rem' }}>
              <strong>{node.say}</strong><Volume2 size={13} />
            </button>
            <p style={{ marginTop: '0.4rem' }}>{node.sayZh}</p>
            {node.note && (
              <div className="tv-callout" style={{ marginTop: '0.6rem' }}>
                {L('堂表兄弟姊妹的「大小」看的是雙方父母的長幼，而不是本人年齡：伯父 (bác) 的孩子即使比你小，你也要叫 anh／chị。', 'Cousin seniority follows the parents’ birth order, not the cousins’ own ages.')}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const KinshipTreeFigure = ({ accent, badge }) => {
  const L = useL();
  return (
    <VisualFigure
      badge={badge}
      title={L('越南家族稱謂樹：從「我」出發看懂每一個人', 'Vietnamese Family Tree: Every Term Seen From “Me”')}
      subtitle={L('點擊任一位家人：會顯示「我怎麼稱呼他」與「我在他面前怎麼自稱」，並朗讀一句實用例句。藍框為父系 (nội)、綠框為母系 (ngoại)。', 'Click a relative to see what you call them, what you call yourself, and hear a sample sentence. Blue = father’s side (nội), green = mother’s side (ngoại).')}
      takeaway={L(<>這套家族稱謂會<strong>直接延伸到陌生人</strong>：路邊攤阿姨叫 cô、計程車大哥叫 anh、長輩叫 bác。父系親戚另有 nội、母系另有 ngoại 的區分，北部則再細分「父之兄 bác、父之弟 chú」。</>, <>These family terms <strong>extend to strangers</strong>: a vendor your mother’s age is cô, a driver slightly older is anh, an elder is bác.</>)}
    >
      <KinshipTree accent={accent} />
    </VisualFigure>
  );
};

/* ==========================================================================
   2. Age ladder — pick the pronoun by relative age
   ========================================================================== */
const LADDER = [
  { you: 'Con / Cháu', self: 'bố・mẹ / ông・bà', zh: '小很多（子女、孫子輩）', en: 'much younger (child age)', h: 34, color: '#0ea5e9' },
  { you: 'Em', self: 'anh / chị', zh: '比我小', en: 'younger', h: 46, color: '#10b981' },
  { you: 'Bạn', self: 'tôi / mình', zh: '同齡朋友', en: 'same age', h: 58, color: '#64748b' },
  { you: 'Anh / Chị', self: 'em', zh: '比我大一些', en: 'a bit older', h: 70, color: '#f59e0b' },
  { you: 'Chú / Cô', self: 'cháu', zh: '父母年紀（比父母小）', en: 'parents’ age (younger)', h: 84, color: '#f97316' },
  { you: 'Bác', self: 'cháu', zh: '比父母大', en: 'older than parents', h: 98, color: '#ef4444' },
  { you: 'Ông / Bà', self: 'cháu (南亦可 con)', zh: '祖父母年紀', en: 'grandparents’ age', h: 112, color: '#b91c1c' }
];

export const AgeLadder = ({ accent = 'north' }) => {
  const L = useL();
  return (
    <div>
      <div className="tv-ladder">
        {LADDER.map(step => (
          <div key={step.you} className="tv-ladder__step">
            <span className="tv-ladder__caption">{L(step.zh, step.en)}</span>
            <button type="button" className="tv-ladder__bar"
              style={{ height: step.h, background: step.color }}
              onClick={() => speakVi(step.you.split('/')[0].trim(), accent, `tv_ladder_${step.you}`)}
              aria-label={`${step.you} — ${L(step.zh, step.en)}`}>
              {step.you}
              <small>{L('你', 'you')}</small>
            </button>
            <span className="tv-ladder__self">{L('我＝', 'me = ')}{step.self}</span>
          </div>
        ))}
      </div>
      <div className="tv-ladder-axis">
        <span>{L('← 比我年輕', '← younger than me')}</span>
        <span>{L('對方年齡 →', 'their age →')}</span>
        <span>{L('比我年長 →', 'older than me →')}</span>
      </div>
    </div>
  );
};

export const AgeLadderFigure = ({ accent, badge, collapsible, defaultOpen }) => {
  const L = useL();
  return (
    <VisualFigure
      badge={badge}
      collapsible={collapsible}
      defaultOpen={defaultOpen}
      title={L('年齡階梯：對方幾歲，就決定你們怎麼互稱', 'Age Ladder: Relative Age Picks the Pronoun Pair')}
      subtitle={L('柱子越高代表對方越年長。上排是「稱呼對方」，下方綠色標籤是「相對應的自稱」——兩者永遠成對出現。點擊柱子聽發音。', 'Taller bars = older partner. Each bar shows the term for “you”; the green tag is the matching “I”. Click to listen.')}
      takeaway={L(<>不確定年紀時的安全策略：<strong>男性先叫 anh、女性先叫 chị，自己稱 em</strong>——把對方「說年輕一點」幾乎不會失禮。正式商務場合則用 anh／chị 或 ông／bà 配 tôi。</>, <>When unsure, call men <strong>anh</strong> and women <strong>chị</strong>, and call yourself <strong>em</strong>.</>)}
    >
      <AgeLadder accent={accent} />
    </VisualFigure>
  );
};

/* ==========================================================================
   3. Corporate org chart with address terms
   ========================================================================== */
const ORG_LEVELS = [
  [{ vi: 'Chủ tịch HĐQT', zh: '董事長', call: 'anh/chị Chủ tịch' }],
  [{ vi: 'Tổng Giám đốc', zh: '總經理／CEO', call: 'anh/chị Tổng' }],
  [{ vi: 'Phó Tổng Giám đốc', zh: '副總經理', call: 'anh/chị Phó Tổng' }, { vi: 'Giám đốc nhà máy', zh: '廠長', call: 'anh/chị Giám đốc' }],
  [{ vi: 'Trưởng phòng', zh: '部門經理', call: 'anh/chị Trưởng phòng' }, { vi: 'Quản đốc', zh: '車間主任', call: 'anh/chị Quản đốc' }, { vi: 'Kế toán trưởng', zh: '會計主管', call: 'chị Kế toán trưởng' }],
  [{ vi: 'Trưởng nhóm / Tổ trưởng', zh: '組長／班長', call: 'anh/chị + 名字' }, { vi: 'Nhân viên', zh: '職員', call: 'anh/chị/em + 名字' }, { vi: 'Công nhân', zh: '作業員', call: 'anh/chị/em + 名字' }]
];

export const OrgChartFigure = ({ accent = 'north', badge, collapsible, defaultOpen }) => {
  const L = useL();
  const activeKey = useActiveAudioKey();
  return (
    <VisualFigure
      badge={badge}
      collapsible={collapsible}
      defaultOpen={defaultOpen}
      title={L('越南企業組織圖與職稱稱呼', 'Vietnamese Company Org Chart & How to Address Each Title')}
      subtitle={L('越南職場習慣用「anh／chị ＋ 職稱」稱呼上級（如 anh Tổng、chị Trưởng phòng），口語常把職稱縮短。點擊職稱聽發音。', 'Address superiors as “anh/chị + title” (anh Tổng, chị Trưởng phòng); titles are often shortened in speech.')}
      takeaway={L(<>對外正式場合（簽約、致詞）改用 <strong>ông／bà ＋ 職稱</strong>，自稱 tôi；公司內部熟悉後則以 anh／chị／em 相稱，私下也常直接叫「sếp」（老闆）。</>, <>In formal external settings use <strong>ông/bà + title</strong> with tôi; internally colleagues switch to anh/chị/em — and the boss is often just “sếp”.</>)}
    >
      <div className="tv-stack" style={{ alignItems: 'center' }}>
        {ORG_LEVELS.map((level, i) => (
          <React.Fragment key={i}>
            {i > 0 && <div style={{ width: 2, height: 14, background: 'var(--border-highlight)' }} aria-hidden="true" />}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
              {level.map(role => (
                <button key={role.vi} type="button"
                  className={`tv-tile ${activeKey === `tv_org_${role.vi}` ? 'is-playing' : ''}`}
                  style={{ minWidth: 170, maxWidth: 230, flex: '0 1 200px', alignItems: 'center', textAlign: 'center', borderTop: `4px solid ${['#b91c1c', '#ef4444', '#f59e0b', '#2563eb', '#10b981'][i]}` }}
                  onClick={() => speakVi(role.vi.split('/')[0].trim(), accent, `tv_org_${role.vi}`)}>
                  <span className="tv-tile__vi">{role.vi}</span>
                  <span className="tv-tile__zh">{role.zh}</span>
                  <span>🗣️ {role.call}</span>
                </button>
              ))}
            </div>
          </React.Fragment>
        ))}
        <div className="tv-chip-row" style={{ justifyContent: 'center', marginTop: '0.4rem' }}>
          <PlayChip vi="Dạ, em chào anh Tổng ạ." zh={L('總經理好（內部）', 'Hello, boss (internal)')} accent={accent} activeKey={activeKey} />
          <PlayChip vi="Kính thưa ông Tổng Giám đốc." zh={L('尊敬的總經理（正式）', 'Dear General Director (formal)')} accent={accent} activeKey={activeKey} />
        </div>
      </div>
    </VisualFigure>
  );
};
