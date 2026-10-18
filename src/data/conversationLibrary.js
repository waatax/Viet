/**
 * Unified playback library for the homepage studio.
 *
 * The 64 situational scenarios already carry dialogue sections; this module adds the
 * conversation sets that previously lived only inside their own modules (situational
 * topic dialogues and the business-trip phrase sets) in the same scenario-like shape:
 *   { id, icon, titleZh, titleEn, summaryZh, summaryEn, category, moduleTab, dialogueSections }
 * so every set can be played in both 純越文 and 越文＋中文 modes from the homepage.
 */
import { situationalScenarios } from './situationalScenarios';
import { SITUATIONAL_TOPICS } from './situationalTopicsData';
import {
  tradeShowGuide,
  dualCityBusinessGuide,
  executiveSurvivalGuide,
  zaloNetworkingGuide
} from './businessData';

const toLine = ({ viet, vi, zh, en, speaker }) => ({ speaker, viet: viet || vi, zh, en });
const stripLead = (text = '') => text.replace(/^[^\p{L}\p{N}]+/u, '').trim();

const topicLessons = SITUATIONAL_TOPICS
  .filter(topic => topic.dialogues?.length)
  .map(topic => ({
    id: `topic_${topic.id}`,
    category: 'topic',
    moduleTab: 'topics',
    icon: topic.icon || '💬',
    titleZh: `${topic.titleZh}情境對話`,
    titleEn: `${topic.titleEn} Dialogues`,
    summaryZh: topic.summaryZh,
    summaryEn: topic.summaryEn,
    dialogueSections: topic.dialogues.map(d => ({
      id: d.id,
      titleZh: d.titleZh,
      titleEn: d.titleEn,
      lines: d.lines.map(toLine)
    }))
  }));

const businessLessons = [
  {
    id: 'biz_trade_show',
    icon: '🎪',
    titleZh: '商展參展四階段實戰句',
    titleEn: 'Trade Show Phrases in Four Stages',
    summaryZh: '佈展進場、迎賓接待、報價洽談到展後跟進，依展會流程逐段練習。',
    summaryEn: 'Booth setup, greeting visitors, quoting and follow-up, in show order.',
    dialogueSections: tradeShowGuide.stages.map(stage => ({
      id: stage.id,
      titleZh: stripLead(stage.stageNameZh.replace(/\s*\(.*\)\s*$/, '')),
      titleEn: stage.stageNameEn,
      lines: stage.phrases.map(toLine)
    }))
  },
  {
    id: 'biz_dual_city',
    icon: '🏙️',
    titleZh: '河內與胡志明市商務開場句',
    titleEn: 'Hanoi vs HCMC Business Openers',
    summaryZh: '北越重禮節、南越重效率：比較兩座城市談生意的開場說法。',
    summaryEn: 'Formal Hanoi openers versus fast, practical Saigon openers.',
    dialogueSections: dualCityBusinessGuide.cities.map(city => ({
      id: city.id,
      titleZh: city.id === 'hanoi' ? '河內（北越）' : '胡志明市（南越）',
      titleEn: city.id === 'hanoi' ? 'Hanoi (North)' : 'Ho Chi Minh City (South)',
      lines: city.mustKnowPhrases.map(toLine)
    }))
  },
  {
    id: 'biz_travel_survival',
    icon: '🧾',
    titleZh: '出差報帳、入境與叫車句',
    titleEn: 'Business Trip Survival Phrases',
    summaryZh: '索取發票、統一編號、商務入境與 Grab 指路，出差當天就用得到。',
    summaryEn: 'Invoices, tax codes, arrival and Grab directions for business trips.',
    dialogueSections: executiveSurvivalGuide
      .filter(item => item.phrases?.length)
      .map(item => ({
        id: item.id,
        titleZh: stripLead(item.titleZh.replace(/\s*\(.*\)\s*$/, '')),
        titleEn: item.titleEn,
        lines: item.phrases.map(toLine)
      }))
  },
  {
    id: 'biz_zalo',
    icon: '💬',
    titleZh: 'Zalo 商務聯絡訊息',
    titleEn: 'Zalo Business Messages',
    summaryZh: '現場加 Zalo、會後跟進與邀約參觀工廠的完整訊息範本。',
    summaryEn: 'Adding Zalo, same-day follow-up and factory visit invitations.',
    dialogueSections: [{
      id: 'zalo',
      titleZh: 'Zalo 訊息範本',
      titleEn: 'Zalo templates',
      lines: zaloNetworkingGuide.templates.map(toLine)
    }]
  }
].map(lesson => ({ ...lesson, category: 'business_trip', moduleTab: 'business' }));

/** Extra sets beyond the situational scenarios (also used by the audio coverage script). */
export const EXTRA_PLAYBACK_LESSONS = [...topicLessons, ...businessLessons];

/** Every playable conversation on the homepage, scenarios first. */
export const PLAYBACK_LESSONS = [...situationalScenarios, ...EXTRA_PLAYBACK_LESSONS];

export const getLessonSections = (lesson) => (
  lesson?.dialogueSections?.length
    ? lesson.dialogueSections
    : [{ id: 'dialogue', titleZh: '完整會話', titleEn: 'Full dialogue', lines: lesson?.dialogues || lesson?.dialogue || [] }]
);

export const countLessonLines = (lesson) => getLessonSections(lesson)
  .reduce((sum, section) => sum + (section.lines?.length || 0), 0);
