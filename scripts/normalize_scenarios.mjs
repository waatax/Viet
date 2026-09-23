import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/situationalScenarios.js');
let code = fs.readFileSync(filePath, 'utf8');

// We want to export situationalScenarios, modify the 5 scenarios, and write back
// But since situationalScenarios.js has imports/exports, let's dynamically inspect or use regex/json
const targetIds = [
  'factory_quality_qa',
  'apartment_rental_contract',
  'airport_customs_visa',
  'nhau_culture_dinner',
  'pharmacy_clinic_visit'
];

import { situationalScenarios, scenarioCategories } from '../src/data/situationalScenarios.js';

let updatedCount = 0;
situationalScenarios.forEach(sc => {
  if (targetIds.includes(sc.id)) {
    updatedCount++;
    // Normalize dialogues
    if (sc.dialogue && !sc.dialogues) {
      sc.dialogues = sc.dialogue.map(line => {
        const isLearner = (line.speakerVi && (
          line.speakerVi.includes('Khách') ||
          line.speakerVi.includes('thuê') ||
          line.speakerVi.includes('Bạn') ||
          line.speakerVi.includes('nhân')
        ));
        return {
          speaker: line.speakerVi || line.speakerZh || 'Đối tác',
          role: isLearner ? 'learner' : 'npc',
          viet: line.vi || line.viet,
          zh: line.zh,
          en: line.en,
          audioKey: line.audioKey,
          vi: line.vi || line.viet,
          speakerVi: line.speakerVi,
          speakerZh: line.speakerZh,
          speakerEn: line.speakerEn
        };
      });
    }

    // Normalize rolePlay
    if (sc.roleplay && !sc.rolePlay) {
      sc.rolePlay = {
        titleZh: sc.roleplay.titleZh,
        titleEn: sc.roleplay.titleEn,
        partnerRoleZh: sc.tagZh || '越南工作夥伴',
        partnerRoleEn: sc.tagEn || 'Vietnamese Partner',
        steps: (sc.roleplay.steps || []).map(st => {
          const opts = (st.userOptions || st.options || []).map(opt => ({
            id: opt.id,
            viet: opt.textVi || opt.viet,
            textVi: opt.textVi || opt.viet,
            zh: opt.textZh || opt.zh,
            textZh: opt.textZh || opt.zh,
            en: opt.textEn || opt.en,
            textEn: opt.textEn || opt.en,
            isCorrect: opt.isCorrect,
            feedbackZh: opt.feedbackZh,
            feedbackEn: opt.feedbackEn
          }));
          return {
            partnerPromptVi: st.partnerPromptVi,
            partnerPromptZh: st.partnerPromptZh,
            partnerPromptEn: st.partnerPromptEn,
            options: opts,
            userOptions: opts
          };
        })
      };
    }

    // Normalize vocabulary
    if (sc.vocabulary) {
      sc.vocab = sc.vocabulary.map(v => ({
        viet: v.viet || v.vi,
        vi: v.vi || v.viet,
        phonetic: v.phonetic,
        ipa: v.ipa,
        zh: v.zh,
        en: v.en,
        hanViet: v.hanViet
      }));
    }
  }
});

console.log(`Normalized ${updatedCount} scenarios.`);

const newFileContent = `/**
 * Comprehensive Situational Vietnamese Dataset (26大實戰情境全能越語數據庫 - 教科書權威版)
 * Standardized for Taiwan learners (ZH Mode) & Global English track (EN Mode)
 * Includes dialogue scripts, interactive role-play questions, vocabulary deck, and cultural tips.
 */

export const scenarioCategories = ${JSON.stringify(scenarioCategories, null, 2)};

export const situationalScenarios = ${JSON.stringify(situationalScenarios, null, 2)};
`;

fs.writeFileSync(filePath, newFileContent, 'utf8');
console.log('Successfully updated src/data/situationalScenarios.js');
