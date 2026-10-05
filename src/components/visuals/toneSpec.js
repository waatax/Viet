/**
 * Canonical tone contour specification used by every teaching chart.
 * Pitch is expressed on Chao's 1–5 scale; `t` is normalised time (0–1).
 * Segments are separate arrays so a glottal break (ngã) renders as a gap.
 * Values follow common descriptions of Hà Nội and Sài Gòn speech; they are
 * pedagogical approximations, not acoustic measurements of one speaker.
 */
import { vietnameseTones } from '../../data/vietnameseData';

const colorOf = (id, fallback) => vietnameseTones.find(t => t.id === id)?.color || fallback;

export const TONE_ORDER = ['ngang', 'huyen', 'sac', 'hoi', 'nga', 'nang'];

export const TONE_SPEC = {
  ngang: {
    vi: 'Ngang', zh: '平聲', en: 'Level', mark: '—', markName: '無符號', example: 'ma', exampleZh: '鬼',
    color: colorOf('ngang', '#3b82f6'),
    north: { chao: '44', segments: [[[0, 4], [1, 4]]], length: 1 },
    south: { chao: '33', segments: [[[0, 3.3], [1, 3.3]]], length: 1 },
    mandarinZh: '像國語一聲，但音高再低一些、放鬆拉平',
    mandarinEn: 'Like Mandarin tone 1, a little lower and relaxed'
  },
  huyen: {
    vi: 'Huyền', zh: '玄聲', en: 'Low falling', mark: '`', markName: '重音符 (dấu huyền)', example: 'mà', exampleZh: '但是',
    color: colorOf('huyen', '#10b981'),
    north: { chao: '31', segments: [[[0, 3], [0.5, 1.9], [1, 1.1]]], length: 1, note: '氣聲 (breathy)' },
    south: { chao: '21', segments: [[[0, 2.1], [1, 1]]], length: 1 },
    mandarinZh: '不是國語四聲！起點要低，像嘆氣般輕輕往下滑',
    mandarinEn: 'Not Mandarin tone 4 — start low and sigh downward'
  },
  sac: {
    vi: 'Sắc', zh: '銳聲', en: 'High rising', mark: '´', markName: '銳音符 (dấu sắc)', example: 'má', exampleZh: '媽媽／臉頰',
    color: colorOf('sac', '#ef4444'),
    north: { chao: '35', segments: [[[0, 3], [0.3, 3.1], [1, 5]]], length: 1 },
    south: { chao: '35', segments: [[[0, 3], [0.3, 3.1], [1, 5]]], length: 1 },
    mandarinZh: '接近國語二聲，但上揚更快、更高',
    mandarinEn: 'Close to Mandarin tone 2, rising faster and higher'
  },
  hoi: {
    vi: 'Hỏi', zh: '問聲', en: 'Dipping', mark: '̉', markName: '問號鉤 (dấu hỏi)', example: 'mả', exampleZh: '墳墓',
    color: colorOf('hoi', '#f59e0b'),
    north: { chao: '313', segments: [[[0, 3], [0.5, 1.05], [1, 2.9]]], length: 1, note: '尾段常帶嘎裂聲' },
    south: { chao: '214', segments: [[[0, 2], [0.4, 1.05], [1, 4]]], length: 1, merged: 'nga' },
    mandarinZh: '像國語三聲（南部幾乎就是國語三聲）',
    mandarinEn: 'Like Mandarin tone 3 (Southern hỏi is nearly identical)'
  },
  nga: {
    vi: 'Ngã', zh: '跌聲', en: 'Broken rising', mark: '~', markName: '波浪號 (dấu ngã)', example: 'mã', exampleZh: '馬／號碼',
    color: colorOf('nga', '#ec4899'),
    north: { chao: '3ʔ5', segments: [[[0, 3], [0.42, 2.7]], [[0.56, 3.3], [1, 5]]], length: 1, glottalAt: 0.49, note: '中段喉塞斷開' },
    south: { chao: '214', segments: [[[0, 2], [0.4, 1.05], [1, 4]]], length: 1, merged: 'hoi' },
    mandarinZh: '像國語二聲但中間「卡」一下喉嚨再衝高',
    mandarinEn: 'A Mandarin tone 2 with a catch in the throat midway'
  },
  nang: {
    vi: 'Nặng', zh: '重聲', en: 'Heavy drop', mark: '.', markName: '下加點 (dấu nặng)', example: 'mạ', exampleZh: '秧苗',
    color: colorOf('nang', '#8b5cf6'),
    north: { chao: '21ʔ', segments: [[[0, 2.2], [1, 1]]], length: 0.55, glottalAt: 1, note: '短促、尾端喉塞' },
    south: { chao: '212', segments: [[[0, 2.1], [0.55, 1.05], [1, 2]]], length: 0.8 },
    mandarinZh: '低而短促，像台語入聲「學 ha̍k」那樣急收',
    mandarinEn: 'Low and clipped, like a checked tone in Taiwanese'
  }
};

/** Mandarin reference contours for overlay comparison (dashed). */
export const MANDARIN_TONES = [
  { id: 'm1', label: '國語一聲 ˉ', chao: '55', segments: [[[0, 5], [1, 5]]] },
  { id: 'm2', label: '國語二聲 ˊ', chao: '35', segments: [[[0, 3], [1, 5]]] },
  { id: 'm3', label: '國語三聲 ˇ', chao: '214', segments: [[[0, 2], [0.4, 1], [1, 4]]] },
  { id: 'm4', label: '國語四聲 ˋ', chao: '51', segments: [[[0, 5], [1, 1]]] }
];

/** Catmull-Rom spline → cubic Bézier path through the given screen points. */
export const smoothPath = (pts) => {
  if (pts.length < 2) return '';
  if (pts.length === 2) return `M ${pts[0][0]} ${pts[0][1]} L ${pts[1][0]} ${pts[1][1]}`;
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
};
