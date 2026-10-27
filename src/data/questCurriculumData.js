/**
 * questCurriculumData.js
 * Comprehensive Duolingo-style Vietnamese Quest Curriculum.
 * 8 Units, 32 Milestone Nodes, 200+ Handcrafted Questions with speech audioText,
 * pedagogical scaffolding hints, and in-depth why explanations.
 */

const c = (prompt, answer, others, why, hint, audioText) => ({
  type: 'choice',
  prompt,
  answer,
  options: [answer, ...others],
  why,
  hint: hint || '💡 提示：先觀察句子主詞與關鍵名詞，判斷最自然的越南語語意。',
  audioText: audioText || answer
});

const l = (audioText, prompt, answer, others, why, hint) => ({
  type: 'listen',
  prompt,
  audioText,
  answer,
  options: [answer, ...others],
  why,
  hint: hint || '💡 提示：點擊烏龜按鈕聽 0.65x 慢速，注意六大聲調走向（平玄銳問跌重）。'
});

const b = (prompt, targetAnswer, why, hint, extraWords = []) => {
  const cleanTokens = targetAnswer.replace(/[.,!?;:"]/g, '').split(/\s+/).filter(Boolean);
  const words = [...cleanTokens, ...extraWords];
  return {
    type: 'build',
    prompt,
    answer: cleanTokens.join(' '),
    words,
    why,
    hint: hint || '💡 提示：越南語採用 SVO 結構，形容詞修飾通常置於名詞「之後」。',
    audioText: targetAnswer
  };
};

const m = (prompt, pairs, why, hint) => ({
  type: 'match',
  prompt,
  pairs, // Array of [vietnamese, chinese]
  answer: 'matched',
  why,
  hint: hint || '💡 提示：先配對最有把握的詞彙，注意核心名詞與動詞的對應。',
  audioText: pairs.map(p => p[0]).join(', ')
});

const t = (prompt, answer, alternatives = [], why, hint, audioText) => ({
  type: 'input',
  prompt,
  answer,
  alternatives: [answer, ...alternatives],
  why,
  hint: hint || '💡 提示：可填寫完整詞或小寫拼音，注意關鍵聲調符號。',
  audioText: audioText || answer
});

export const QUEST_UNITS = [
  {
    id: 'u1',
    title: '基礎問候與初次見面',
    viTitle: 'Chào hỏi & Làm quen',
    stage: 'A0 入門起步',
    icon: '👋',
    color: 'emerald',
    goal: '學會打招呼、自報姓名與禮貌道別，從容接住人生第一句越南語。',
    guide: {
      keyGrammar: 'Xin chào 用於禮貌問候任何對象；Cảm ơn 是謝謝；Tạm biệt 是道別。自我介紹最常用「Tôi tên là + 名字」或「Tôi là + 名字」。',
      toneTip: 'Chào 的 à 是玄聲 (Dấu huyền)，音調平緩向下，聽起來溫柔禮貌。',
      dialogue: [
        { speaker: 'A', vi: 'Xin chào! Bạn tên là gì?', zh: '你好！你叫什麼名字？' },
        { speaker: 'B', vi: 'Tôi tên là Minh. Rất vui được gặp bạn!', zh: '我叫阿明。很高興認識你！' }
      ]
    },
    nodes: [
      {
        id: 'u1-n1',
        title: '第一聲親切問候',
        icon: '☀️',
        kind: 'lesson',
        questions: [
          c('早上見到越南朋友，最通用禮貌的打招呼是？', 'Xin chào', ['Tạm biệt', 'Cảm ơn bạn', 'Không có gì'], 'Xin chào 是越南語中最經典且通用的問候語，相當於 Hello / 你好。', '💡 提示：Xin 代表禮貌請/敬語，chào 代表問候打招呼。', 'Xin chào'),
          c('越南語中向對方表達「謝謝」該說什麼？', 'Cảm ơn', ['Xin lỗi', 'Tạm biệt', 'Không sao'], 'Cảm ơn 意為感謝（源自漢越音「感恩」）。', '💡 提示：感（Cảm）恩（Ơn），是台灣人最容易記誦的漢越詞之一。', 'Cảm ơn'),
          l('Tạm biệt, hẹn gặp lại!', '說話者在此情境中是在做什麼？', '禮貌道別並約定下次見面', ['詢問對方尊姓大名', '點了一杯冰奶咖啡', '表示抱歉打擾了'], 'Tạm biệt 是再見，hẹn gặp lại 表示約好再次相遇。', '💡 提示：聽聽看開頭的 Tạm biệt（暫別），是不是和台語「暫別」音很近？'),
          m('將初次見面的問候片語進行配對：', [
            ['Xin chào', '你好'],
            ['Cảm ơn', '謝謝'],
            ['Tạm biệt', '再見'],
            ['Xin lỗi', '對不起']
          ], '熟練掌握這 4 句基礎問候，在越南旅行或出差就能通行無阻。', '💡 提示：Xin lỗi 是抱歉；Cảm ơn 是謝謝。'),
          b('將單字組裝為「你好，我是阿明」：', 'Xin chào tôi là Minh', 'Xin chào (你好) + tôi (我) + là (是) + Minh (阿明)。', '💡 提示：先放問候語 Xin chào，接著放主詞 tôi 與繫詞 là。', ['bạn', 'cảm']),
          t('道別片語：Tạm ___ !（請填入一個單字）', 'biệt', ['biet'], 'Tạm biệt 就是漢語的「暫別/再見」。', '💡 提示：Tạm 後面接 biệt，代表暫時分別。', 'Tạm biệt')
        ]
      },
      {
        id: 'u1-n2',
        title: '聽懂自我介紹與姓名',
        icon: '👂',
        kind: 'lesson',
        questions: [
          l('Tôi tên là Linh.', '聽一聽，說話者的名字是？', 'Linh', ['Minh', 'Hoa', 'Hùng'], 'Tôi tên là Linh 表示「我的名字是小玲/玲」。', '💡 提示：聽 tên là 後面那個輕快帶點鼻音的發音 Linh。'),
          c('別人問你「Bạn tên là gì?」，他是在詢問什麼？', '你的名字叫什麼', ['你現在在哪裡', '這杯咖啡多少錢', '今天天氣如何'], 'Bạn (你) + tên là (名字是) + gì (什麼) = 你叫什麼名字？', '💡 提示：gì 是越南語最常用的疑問詞「什麼」。', 'Bạn tên là gì?'),
          b('組裝句子向新夥伴問名：「你叫什麼名字？」', 'Bạn tên là gì', 'Bạn (你) + tên là (名叫) + gì (什麼)？', '💡 提示：問句結構與中文順序完全相同：主詞 + 動詞 + 疑問詞。', ['tôi', 'ai']),
          l('Rất vui được gặp bạn.', '這句話在社交禮儀中代表什麼意思？', '很高興認識/見到你', ['請給我一杯水', '我明天不上班', '這件衣服太貴了'], 'Rất vui (非常高興) + được gặp bạn (能見到你) = 很高興認識你。', '💡 提示：Rất 代表「很/非常」，vui 代表「快樂/高興」。'),
          c('當對方說「Rất vui được gặp bạn」，你可以禮貌回應：', 'Tôi cũng rất vui được gặp bạn', ['Tôi không biết', 'Bao nhiêu tiền', 'Đi thẳng rẽ trái'], 'Tôi cũng... 表示「我也...很高興見到你」。', '💡 提示：cũng 代表「也 (too/also)」。', 'Tôi cũng rất vui được gặp bạn'),
          t('自我介紹：Tôi ___ là Nam.（請填入代表「名字是」的單字）', 'tên', ['ten'], 'Tôi tên là Nam (我的名字叫阿南)。', '💡 提示：tên 代表姓名或名字。', 'Tôi tên là Nam')
        ]
      },
      {
        id: 'u1-n3',
        title: '拼出你的第一句越語',
        icon: '🧩',
        kind: 'lesson',
        questions: [
          b('拼裝「非常感謝你」：', 'Cảm ơn bạn rất nhiều', 'Cảm ơn (感謝) + bạn (你) + rất nhiều (非常多)。', '💡 提示：rất (很) + nhiều (多)，放在感謝的受詞後面做修飾。', ['xin', 'ít']),
          c('如何向長輩或長官表達最崇高的敬意道謝？', 'Xin cảm ơn anh rất nhiều', ['Chào em nhé', 'Đi đâu đấy', 'Không có chi'], '在 Cảm ơn 前加上 Xin，並稱呼對方為 anh/chị，最顯尊重得體。', '💡 提示：Xin 是極具教養的敬語開頭。', 'Xin cảm ơn anh rất nhiều'),
          l('Hẹn gặp lại ngày mai!', '對方約定什麼時候再見面？', '明天', ['下星期', '今晚', '下個月'], 'ngày mai 就是「明天」；Hẹn gặp lại 是「約好再見」。', '💡 提示：聽第二個短語 ngày mai（明天）。'),
          m('將日常客氣用語進行中越配對：', [
            ['Rất nhiều', '非常多'],
            ['Ngày mai', '明天'],
            ['Gặp lại', '再見面'],
            ['Không sao', '沒關係']
          ], '這些高頻副詞與短語能大幅豐富你的日常對話生動度。', '💡 提示：Không sao 就是沒問題/沒關係。'),
          c('當別人對你說「Cảm ơn bạn」，最自然的客氣回答是？', 'Không có gì', ['Tạm biệt', 'Xin lỗi', 'Bao nhiêu'], 'Không có gì 意為「不客氣 / 沒什麼 / 不用客氣」。', '💡 提示：Không (不) + có (有) + gì (什麼) = 沒有什麼。', 'Không có gì'),
          t('客氣回答「不客氣」：Không ___ gì.', 'có', ['co'], 'Không có gì 是最地道的客氣應對。', '💡 提示：填入有/具備的動詞 có。', 'Không có gì')
        ]
      },
      {
        id: 'u1-n4',
        title: '【單元魔王挑戰】河內老街遇見新朋友',
        icon: '👑',
        kind: 'boss',
        questions: [
          c('在河內三十六古街初遇店主，最合適的起手式問候是？', 'Xin chào anh', ['Tạm biệt anh', 'Đi ngủ đi', 'Không được'], '初見成年男性，用 Xin chào anh 既親切又得體。', '💡 提示：anh 稱呼年紀稍長或平輩的男性。', 'Xin chào anh'),
          l('Tôi tên là Hoa, rất vui được gặp bạn.', '說話者傳遞了哪兩個核心訊息？', '她叫阿花，且很高興認識你', ['她要買花，詢問價格', '她要去河內火車站', '她找不到錢包'], 'Tôi tên là Hoa (我叫阿花) + rất vui được gặp bạn (很高興認識你)。', '💡 提示：聽兩個短句的連接：Hoa 是名字，rất vui 是高興。'),
          b('完整拼裝「我叫阿明，很高興見到你」：', 'Tôi tên là Minh rất vui được gặp bạn', '結合姓名自介與見面欣喜句型。', '💡 提示：先說 Tôi tên là Minh，後接 rất vui được gặp bạn。', ['ngày', 'mai']),
          m('複習本單元核心詞彙配對：', [
            ['Xin chào', '你好'],
            ['Cảm ơn', '感謝'],
            ['Bạn tên là gì', '你叫什麼名字'],
            ['Không có gì', '不客氣']
          ], '熟練掌握河內街頭第一段流暢對話。', '💡 提示：看清楚整句問句與簡短禮貌詞。'),
          t('回答名字：「Tôi ___ là Peter.」', 'tên', ['ten'], 'Tôi tên là Peter (我的名字是彼得)。', '💡 提示：名字在越語中是 tên。', 'Tôi tên là Peter'),
          c('對方說「Cảm ơn bạn rất nhiều!」，你該回覆？', 'Không có gì đâu', ['Tạm biệt luôn', 'Không muốn', 'Đắt quá'], 'Không có gì đâu 是極親切自然的「別客氣啦！」。', '💡 提示：đâu 在句尾加強親和語氣。', 'Không có gì đâu'),
          l('Tạm biệt, hẹn gặp lại bạn nhé!', '句尾的「nhé」帶有什麼樣的語氣？', '親切叮嚀與約定的輕鬆語氣', ['嚴厲命令與禁止', '懷疑與質問', '恐懼與求救'], 'nhé 是越南語中極受歡迎的語氣助詞，相當於「喔/捏/呀」。', '💡 提示：nhé 讓道別變得非常溫暖柔和。')
        ]
      }
    ]
  },
  {
    id: 'u2',
    title: '人稱代詞與身分確認',
    viTitle: 'Đại từ & Nghề nghiệp',
    stage: 'A1 基礎核心',
    icon: '👥',
    color: 'blue',
    goal: '徹底搞懂越南語長幼尊卑稱謂體系，精通「Là 是」與「Không phải 不是」的肯定與否定。',
    guide: {
      keyGrammar: '越南語稱謂以年齡親等為準：Anh (稍長的哥哥/男性)、Chị (稍長的女姓/姐姐)、Em (年輕的晚輩/弟弟妹妹)、Tôi (中性通用我)。繫動詞「là」表示「是」，否定用「không phải là」(不是)。',
      toneTip: 'Phải 是銳聲 (Sắc ↗)；Không 是平聲 (Ngang ─)。',
      dialogue: [
        { speaker: 'Minh', vi: 'Anh là kỹ sư phải không?', zh: '你是工程師對嗎？' },
        { speaker: 'Nam', vi: 'Vâng, tôi là kỹ sư. Còn em là sinh viên à?', zh: '是的，我是工程師。那你（妹）是大學生嗎？' }
      ]
    },
    nodes: [
      {
        id: 'u2-n1',
        title: '你我他與長幼稱謂',
        icon: '🏷️',
        kind: 'lesson',
        questions: [
          c('面對一位比你年長一點點的女性同事，得體的稱呼是？', 'Chị', ['Anh', 'Em', 'Ông'], 'Chị 用來稱呼稍長的女性（姐姐輩）。', '💡 提示：Chị 是女性尊稱；Anh 是男性尊稱。', 'Chị'),
          c('年紀比對方小的晚輩，自我謙稱或稱呼對方晚輩用？', 'Em', ['Bà', 'Ông', 'Bác'], 'Em 用於弟弟妹妹輩，也可以在年長者面前自稱為 Em。', '💡 提示：Em 具有謙遜親切的親和力。', 'Em'),
          l('Anh ấy là người Việt Nam.', '句中的「Anh ấy」指稱的是誰？', '他（那位哥哥輩男性）', ['我本人', '你（當面）', '那位老婆婆'], 'Anh 是男性稱謂，加上 ấy 變成第三人稱「他」。', '💡 提示：ấy 接在人稱後表示「那個/他/她」。'),
          m('將人稱代詞進行中越連連看：', [
            ['Tôi', '我（中性通用）'],
            ['Anh', '你/哥（稍長男性）'],
            ['Chị', '你/姐（稍長女性）'],
            ['Em', '你/弟妹（年少晚輩）']
          ], '掌握這四個代名詞，就能應對越南 90% 的人際溝通場景。', '💡 提示：年紀順序：Anh/Chị > Em。'),
          b('組裝句子「他是我的朋友」：', 'Anh ấy là bạn tôi', 'Anh ấy (他) + là (是) + bạn (朋友) + tôi (我)。', '💡 提示：bạn tôi = 我的朋友，形容詞或所有格在後。', ['không', 'em']),
          t('稱呼比自己年輕的晚輩或自謙：___（請輸入雙字母單字）', 'em', ['Em'], 'Em 表示弟弟、妹妹或晚輩。', '💡 提示：以字母 e 開頭的兩個字母。', 'em')
        ]
      },
      {
        id: 'u2-n2',
        title: '是與不是：Là 的肯定與否定',
        icon: '⚖️',
        kind: 'lesson',
        questions: [
          c('「我是台灣人」在越南語中正確的說法是？', 'Tôi là người Đài Loan', ['Tôi không Đài Loan', 'Tôi có người Đài Loan', 'Tôi đi Đài Loan'], 'Tôi (我) + là (是) + người (人) + Đài Loan (台灣)。', '💡 提示：là 是聯繫動詞「是」；người 是人。', 'Tôi là người Đài Loan'),
          c('如何把「Anh ấy là bác sĩ」改為否定句「他不是醫生」？', 'Anh ấy không phải là bác sĩ', ['Anh ấy chưa là bác sĩ', 'Anh ấy không bác sĩ', 'Anh ấy có là bác sĩ'], '否定句在 là 前面加上「không phải」形成「不是」。', '💡 提示：không phải là = 不是。', 'Anh ấy không phải là bác sĩ'),
          l('Bạn có phải là người Đài Loan không?', '這是一個什麼樣的疑問句？', '詢問對方是不是台灣人', ['詢問對方想不想去台灣旅行', '詢問對方的台灣朋友在哪', '詢問何時回台灣'], 'Có phải... không 是越南語最標準的「是不是...嗎？」是非問句結構。', '💡 提示：開頭 Có phải 與句尾 không 前後呼應。'),
          b('組裝問句「你是學生嗎？」：', 'Bạn là sinh viên phải không', 'Bạn (你) + là sinh viên (是大學生) + phải không (對嗎)？', '💡 提示：句尾加 phải không 即可形成問句。', ['người', 'tôi']),
          m('將肯定、否定與疑問短語配對：', [
            ['Là', '是'],
            ['Không phải là', '不是'],
            ['Phải không', '對嗎 / 是不是'],
            ['Đúng rồi', '沒錯 / 正確']
          ], 'là 的四種句式是越語論述與判斷的核心骨架。', '💡 提示：Đúng rồi 是肯定回答「對了/沒錯」。'),
          t('否定結構：Tôi không ___ là giáo viên.（請填入代表「對/必須」的單字）', 'phải', ['phai'], 'Không phải là = 不是。', '💡 提示：phải 帶有銳聲 (sắc)。', 'phải')
        ]
      },
      {
        id: 'u2-n3',
        title: '職業身分大挑戰',
        icon: '💼',
        kind: 'lesson',
        questions: [
          c('工程師在越南製造工廠非常受尊重，越語單字是？', 'Kỹ sư', ['Giáo viên', 'Bác sĩ', 'Công nhân'], 'Kỹ sư 源自漢越詞「技師/工程師」。', '💡 提示：Kỹ (技) sư (師)。', 'Kỹ sư'),
          l('Chị Lan là giáo viên dạy tiếng Việt.', '阿蘭姐姐的職業與工作是什麼？', '教越南語的老師', ['在醫院看診的醫生', '在工廠品檢的工程師', '在餐廳點餐的店長'], 'Giáo viên (教師) + dạy (教) + tiếng Việt (越語)。', '💡 提示：Giáo viên 就是漢語「教員/老師」。'),
          m('將職業名稱進行中越配對：', [
            ['Kỹ sư', '工程師'],
            ['Giáo viên', '教師'],
            ['Bác sĩ', '醫生'],
            ['Công nhân', '工廠作業員/工人']
          ], '這些是台商外資與日常生活中最常見的四大專業職業。', '💡 提示：Bác sĩ 是漢越詞「博士」，引申為醫生。'),
          b('拼裝「我的哥哥是工程師」：', 'Anh tôi là kỹ sư', 'Anh tôi (我的哥哥) + là (是) + kỹ sư (工程師)。', '💡 提示：所有格「我的」直接把 tôi 放在 anh 後面。', ['bạn', 'chị']),
          c('工廠主管或總經理在越南語中通常稱為？', 'Giám đốc', ['Học sinh', 'Sinh viên', 'Nhân viên'], 'Giám đốc 源自漢越音「監督」，在現代越南語泛指經理、總監、廠長。', '💡 提示：Giám (監) đốc (督)。', 'Giám đốc'),
          t('學生是 sinh viên，工廠產線作業員是：công ___', 'nhân', ['nhan'], 'Công nhân = 工人 / 作業員。', '💡 提示：漢越音「公（工人）人（nhân）」。', 'công nhân')
        ]
      },
      {
        id: 'u2-n4',
        title: '【單元魔王挑戰】西貢咖啡館的身分名片',
        icon: '👑',
        kind: 'boss',
        questions: [
          c('在西貢商務咖啡館認識新朋友，如何得體地說「我是台灣來的工程師」？', 'Tôi là kỹ sư người Đài Loan', ['Tôi không thích kỹ sư', 'Tôi đi Đài Loan làm việc', 'Tôi mua cà phê'], 'Tôi là kỹ sư (我是工程師) + người Đài Loan (台灣人)。', '💡 提示：身份與國籍並列，層層遞進。', 'Tôi là kỹ sư người Đài Loan'),
          l('Anh Minh có phải là giám đốc không? - Không phải, anh ấy là kỹ sư.', '聽音對話，阿明的真實職業是什麼？', '工程師', ['總經理', '越語老師', '醫生'], '回答明確澄清：Không phải (不是總監)，anh ấy là kỹ sư (他是工程師)。', '💡 提示：注意轉折詞 Không phải 後面帶出的真實身分。'),
          b('組裝句子「阿英姐姐不是醫生，她是老師」：', 'Chị Lan không phải là bác sĩ chị ấy là giáo viên', '雙重對比句：先否定醫生，再肯定老師。', '💡 提示：Chị Lan... không phải là bác sĩ, chị ấy là giáo viên。', ['tôi', 'anh']),
          m('總結身分與人稱精華配對：', [
            ['Người Đài Loan', '台灣人'],
            ['Giám đốc', '總經理 / 總監'],
            ['Không phải là', '並不是'],
            ['Đúng vậy', '正是如此']
          ], '鞏固進階商務自介與稱謂實戰力。', '💡 提示：Đúng vậy 表示同意肯定。'),
          t('請完成句子「你是老師對嗎？」：Bạn là giáo viên ___ không?', 'phải', ['phai'], 'Phải không 放在句尾形成「對不對？」。', '💡 提示：填入 phải。', 'phải không'),
          c('面對比你年長的女性主管，最得體的尊稱組合是？', 'Chị giám đốc', ['Em giám đốc', 'Bạn giám đốc', 'Mày giám đốc'], '將輩分 Chị 與職銜 Giám đốc 結合，尊榮且地道。', '💡 提示：Chị + 職位是越南職場標配。', 'Chị giám đốc'),
          l('Chúng tôi là sinh viên học tiếng Việt.', '聽懂這群年輕人的身分：', '我們是學習越南語的大學生', ['我們是胡志明市的導遊', '我們是台灣工廠的幹部', '我們在市場買水果'], 'Chúng tôi (我們) + là sinh viên (是大學生) + học tiếng Việt (學越文)。', '💡 提示：Chúng tôi 代表「我們一群人」。')
        ]
      }
    ]
  },
  {
    id: 'u3',
    title: '飲食生活與越式咖啡',
    viTitle: 'Ẩm thực & Cà phê',
    stage: 'A1 美食生活',
    icon: '☕',
    color: 'peach',
    goal: '走進越南街頭咖啡館與小吃攤，自在點出「滴漏冰奶咖啡」與「特製生牛肉河粉」。',
    guide: {
      keyGrammar: '越南語形容詞後置：名詞 + 修飾詞。例：Cà phê (咖啡) + sữa (奶) + đá (冰) = 冰奶咖啡；Phở (河粉) + bò (牛) = 牛肉河粉。點餐禮貌句型：「Cho tôi + 數量 + 物品」(請給我...)。',
      toneTip: 'Phở 是問聲 (Dấu hỏi ?)，音調先微降再揚起，像疑惑地發問；Bò 是玄聲 (`\\`)。',
      dialogue: [
        { speaker: 'Khách', vi: 'Cho tôi một ly cà phê sữa đá, ít đường!', zh: '請給我一杯冰奶咖啡，少糖！' },
        { speaker: 'Chủ quán', vi: 'Có ngay! Em có ăn phở bò không?', zh: '馬上來！你吃牛肉河粉嗎？' }
      ]
    },
    nodes: [
      {
        id: 'u3-n1',
        title: '點一杯西貢滴漏咖啡',
        icon: '🧋',
        kind: 'lesson',
        questions: [
          c('越南最具代表性的「冰奶咖啡」（滴漏咖啡加煉乳與冰塊）越語怎麼說？', 'Cà phê sữa đá', ['Cà phê đen nóng', 'Trà đá không đường', 'Nước suối'], 'Cà phê (咖啡) + sữa (牛奶/煉乳) + đá (冰塊)。', '💡 提示：sữa 是奶，đá 是冰塊。形容詞全部置於後方。', 'Cà phê sữa đá'),
          c('若你不喝奶精煉乳，想喝「黑咖啡加冰塊」，該點：', 'Cà phê đen đá', ['Cà phê sữa nóng', 'Bạc xỉu', 'Trà chanh'], 'Đen 是黑色；Cà phê đen đá 即冰黑咖啡。', '💡 提示：đen 代表黑色。', 'Cà phê đen đá'),
          l('Cho tôi một ly cà phê sữa đá, ít ngọt.', '這位顧客對咖啡甜度有什麼特殊要求？', '少甜 / 少糖', ['加很多糖', '不要冰塊', '外帶兩杯'], 'Ít (少) + ngọt (甜) = 少甜 / 微糖。', '💡 提示：ít 代表少，ngọt 代表甜。'),
          m('將咖啡館常用客製化需求配對：', [
            ['Ít đường', '少糖'],
            ['Không đá', '去冰 / 不加冰'],
            ['Nóng', '熱的'],
            ['Mang về', '外帶']
          ], '記住這 4 個調整項，點任何手搖飲料與咖啡都不怕踩雷。', '💡 提示：Mang về 是拿回/外帶；Nóng 是熱。'),
          b('組裝點餐金句「請給我一杯冰奶咖啡」：', 'Cho tôi một ly cà phê sữa đá', 'Cho tôi (請給我) + một ly (一杯) + cà phê sữa đá (冰奶咖啡)。', '💡 提示：Cho tôi 代表「請給我有...」。', ['bát', 'ăn']),
          t('形容詞填空：Cà phê sữa ___ (冰奶咖啡的「冰」字)', 'đá', ['da'], 'Đá 代表冰塊或冰的。', '💡 提示：帶有橫槓 đ 的單字 đá。', 'đá')
        ]
      },
      {
        id: 'u3-n2',
        title: '道地越式小吃圖鑑',
        icon: '🍜',
        kind: 'lesson',
        questions: [
          c('越南國寶級美食「牛肉河粉」越語是：', 'Phở bò', ['Phở gà', 'Bánh mì', 'Bún chả'], 'Phở (河粉) + bò (牛肉)。如果想吃雞肉河粉則是 Phở gà。', '💡 提示：bò 是牛；gà 是雞。', 'Phở bò'),
          c('夾入肉凍、肝醬、酸黃瓜與香菜的越式法國麵包是：', 'Bánh mì', ['Gỏi cuốn', 'Chả giò', 'Cơm tấm'], 'Bánh mì 原意為麵包，特指越式夾肉夾餡法棍。', '💡 提示：Bánh 代表餅或麵粉製品。', 'Bánh mì'),
          l('Bát phở này ngon quá, nước dùng rất ngọt!', '說話者在稱讚這碗河粉的哪裡？', '非常好吃，且湯頭非常清甜鮮美', ['麵條太硬不好吃', '牛肉太少不夠飽', '價格太貴想退錢'], 'Ngon quá (太好吃了) + nước dùng (高湯湯頭) + rất ngọt (很甘甜)。', '💡 提示：ngon 是好吃，nước dùng 是湯底。'),
          m('將越南四大街頭經典美食配對：', [
            ['Phở bò', '牛肉河粉'],
            ['Bánh mì', '越式法國麵包'],
            ['Gỏi cuốn', '生春捲'],
            ['Chả giò', '炸春捲']
          ], '這些是每個造訪越南的人每日必吃的美食單字！', '💡 提示：Gỏi 是涼拌生捲，Chả 是肉捲煎炸。'),
          b('組裝句子「這碗牛肉河粉真好吃」：', 'Bát phở bò này ngon quá', 'Bát (碗) + phở bò (牛肉河粉) + này (這個) + ngon quá (太美味了)。', '💡 提示：này 放名詞後代表「這...」。', ['uống', 'ly']),
          t('單字填空：牛肉河粉中的「牛肉」越語是：___', 'bò', ['bo'], 'Bò 是牛，帶有玄聲 (huyền)。', '💡 提示：兩個字母，以 b 開頭。', 'bò')
        ]
      },
      {
        id: 'u3-n3',
        title: '形容詞後置與美味讚賞',
        icon: '🌶️',
        kind: 'lesson',
        questions: [
          c('越南菜講求酸甜辣平衡，越語中「辣」的單字是？', 'Cay', ['Chua', 'Ngọt', 'Mặn'], 'Cay 代表辣；Chua 是酸；Ngọt 是甜；Mặn 是鹹。', '💡 提示：Cay 是辣；Chua cay 是酸辣。', 'Cay'),
          c('如果不吃辣，點餐時要主動告知店家：', 'Đừng cho ớt', ['Cho nhiều ớt', 'Ớt cay lắm', 'Rất thích cay'], 'Đừng (不要) + cho (放) + ớt (辣椒) = 請不要放辣椒。', '💡 提示：ớt 代表辣椒。', 'Đừng cho ớt'),
          l('Cho tôi xin một ly trà đá miễn phí.', '顧客向店員索取了什麼？', '一杯免費的冰茶 (Trà đá)', ['一瓶昂貴的紅酒', '一碗加大的牛肉湯', '一份打包用的塑膠袋'], 'Trà đá (冰茶) + miễn phí (免費，漢越音「免費」)。', '💡 提示：trà đá 是越南各餐館必備的路邊文化甘泉。'),
          m('將味覺與溫度形容詞進行配對：', [
            ['Nóng', '熱的'],
            ['Lạnh', '冷的'],
            ['Chua', '酸的'],
            ['Cay', '辣的']
          ], '熟練形容詞後置，可任意與食材名詞組合。', '💡 提示：Chua cay = 酸辣。'),
          b('組裝點菜句「請給我一碗熱河粉」：', 'Cho tôi một bát phở nóng', 'Cho tôi (給我) + một bát (一碗) + phở nóng (熱河粉)。', '💡 提示：nóng (熱) 緊跟在 phở 後面。', ['đá', 'ly']),
          t('好吃在越南語是：___ quá!（請填入美味的單字）', 'ngon', ['Ngon'], 'Ngon quá = 太好吃了！', '💡 提示：四個字母，以 ng 開頭。', 'ngon')
        ]
      },
      {
        id: 'u3-n4',
        title: '【單元魔王挑戰】西貢夜市美食點餐實戰',
        icon: '👑',
        kind: 'boss',
        questions: [
          c('在夜市點兩條現包生春捲，正確的量詞搭配是？', 'Cho tôi hai cái gỏi cuốn', ['Cho tôi hai ly gỏi cuốn', 'Cho tôi hai bát gỏi cuốn', 'Cho tôi hai phòng gỏi cuốn'], 'Cái 是物品通用量詞（兩條/兩個生春捲）。ly 是杯，bát 是碗。', '💡 提示：條狀或點心用 cái。', 'Cho tôi hai cái gỏi cuốn'),
          l('Em ơi, tính tiền cho anh bàn số năm nhé!', '客人喊這句話的目的是什麼？', '呼叫服務員幫第 5 桌結帳買單', ['投訴第 5 桌菜餚太辣', '更換到靠窗的第 5 桌', '加點 5 杯冰咖啡'], 'Tính tiền 是算錢/結帳；bàn số năm 是第 5 桌。', '💡 提示：tính tiền = 計算金錢/買單。'),
          b('完整拼裝「請給我一杯冰咖啡少糖」：', 'Cho tôi một ly cà phê sữa đá ít đường', '流暢整合數量、飲料名與甜度要求。', '💡 提示：Cho tôi một ly... cà phê sữa đá... ít đường。', ['bát', 'nóng']),
          m('複習餐飲結帳重要短語：', [
            ['Tính tiền', '結帳 / 買單'],
            ['Bao nhiêu tiền', '多少錢'],
            ['Ngon lắm', '非常好吃'],
            ['Em ơi', '服務員！（親切呼叫）']
          ], '夜市與餐館必備的流暢應答模組。', '💡 提示：Em ơi 是越南無所不在的親切招呼。'),
          t('在餐館吃完要買單，可以說：___ tiền!', 'tính', ['tinh'], 'Tính tiền = 算錢 / 結帳。', '💡 提示：帶有銳聲 (sắc) 的單字 tính。', 'tính tiền'),
          c('在越南喝完咖啡，店家常附贈一杯金黃消暑的茶是？', 'Trà đá', ['Cà phê phin', 'Nước ngọt', 'Bia Sài Gòn'], 'Trà đá (冰茉莉茶/冰綠茶) 是越南社交與飲食的靈魂伴侶。', '💡 提示：Trà 是茶，đá 是冰。', 'Trà đá'),
          l('Món này không cay, rất thơm và dễ ăn.', '老闆如何介紹這道菜的特色？', '這道菜不辣，很香且很容易入口適應', ['這道菜超級辣，外國人不要嘗試', '這道菜已經賣完了', '這道菜放了太多冰塊'], 'Không cay (不辣) + rất thơm (很香) + dễ ăn (容易吃/可口)。', '💡 提示：dễ ăn = 容易下嚥，很適合初學者。')
        ]
      }
    ]
  },
  {
    id: 'u4',
    title: '數字、金錢與市場採購',
    viTitle: 'Số đếm, Tiền bạc & Mua sắm',
    stage: 'A1 實用數字',
    icon: '💰',
    color: 'amber',
    goal: '從容數出 1 到百萬數字，精通「多少錢」問答與在地人市場殺價密技。',
    guide: {
      keyGrammar: '數字規則：5 在 15 是 mười lăm (不是 mười một)；在 25、35、45 是 hai mươi lăm。1 在 21、31、41 變為 mốt。詢問價格：「Cái này bao nhiêu tiền?」(這個多少錢？)。殺價：「Bớt một chút được không?」(便宜一點行嗎？)。',
      toneTip: 'Tiền 是玄聲 (`\\`)；Đắt (貴) 是銳聲 (/)。',
      dialogue: [
        { speaker: 'Mua', vi: 'Cái áo này bao nhiêu tiền một cái?', zh: '這件衣服一件多少錢？' },
        { speaker: 'Bán', vi: 'Hai trăm nghìn đồng em ơi. Rẻ lắm!', zh: '二十萬越南盾捏，妹妹。很便宜啦！' }
      ]
    },
    nodes: [
      {
        id: 'u4-n1',
        title: '搞懂 1 到 100 與變音規則',
        icon: '🔢',
        kind: 'lesson',
        questions: [
          c('越語數字中，數字「5」是 năm，但「十五」的正確說法是？', 'Mười lăm', ['Mười năm', 'Năm mươi', 'Mười một'], '在 15 中，5 發生音變，改讀為 lăm，避免與「十年 (mười năm)」混淆。', '💡 提示：15 讀作 mười lăm；25 讀作 hai mươi lăm。', 'Mười lăm'),
          c('數字「21」中的「一」會變成哪個音？', 'Hai mươi mốt', ['Hai mươi một', 'Hai mươi mười', 'Hai mươi hai'], '在二位數中，個位數的 1 會變讀為 mốt (例如 21, 31, 41)。', '💡 提示：個位數的 1 讀作 mốt。', 'Hai mươi mốt'),
          l('Số điện thoại của tôi là không chín không ba.', '聽聽看這串電話號碼的開頭四碼是？', '0903', ['0930', '0803', '0913'], 'Không (0) + chín (9) + không (0) + ba (3) = 0903。', '💡 提示：không 是 0，chín 是 9。'),
          m('將基礎數字進行中越配對：', [
            ['Một', '一 (1)'],
            ['Năm', '五 (5)'],
            ['Mười', '十 (10)'],
            ['Một trăm', '一百 (100)']
          ], '熟記 1 到 100 是在越南處理金錢與房號的底層根基。', '💡 提示：Một trăm 是 100。'),
          b('組裝數字「三十五」：', 'Ba mươi lăm', 'Ba mươi (三十) + lăm (五的變音)。', '💡 提示：25、35 的個位數 5 都要寫成 lăm。', ['năm', 'mốt']),
          t('數字「一百」越語寫法是：một ___', 'trăm', ['tram'], 'Trăm 代表百。', '💡 提示：四個字母，以 tr 開頭。', 'trăm')
        ]
      },
      {
        id: 'u4-n2',
        title: '越南盾幣值與多少錢',
        icon: '💵',
        kind: 'lesson',
        questions: [
          c('如何問店員「這個多少錢？」最道地？', 'Cái này bao nhiêu tiền?', ['Cái này đi đâu?', 'Cái này tên là gì?', 'Cái này có ăn không?'], 'Cái này (這個) + bao nhiêu (多少) + tiền (錢)？', '💡 提示：bao nhiêu = 多少；tiền = 金錢。', 'Cái này bao nhiêu tiền?'),
          c('越南鈔票動輒幾十萬，五萬越南盾（50,000 VND）怎麼讀？', 'Năm mươi nghìn đồng', ['Năm nghìn đồng', 'Năm trăm đồng', 'Năm triệu đồng'], 'Năm mươi (50) + nghìn (千) + đồng (越南盾)。50 個千就是五萬。', '💡 提示：nghìn (北越) 或 ngàn (南越) 代表「千」。', 'Năm mươi nghìn đồng'),
          l('Tổng cộng là hai trăm năm mươi nghìn.', '結算總金額總共是多少越南盾？', '250,000 盾 (二十五萬盾)', ['25,000 盾', '2,500,000 盾', '520,000 盾'], 'Hai trăm (兩百) + năm mươi nghìn (五十個千) = 250,000 VND。', '💡 提示：兩百五十個千。'),
          m('將金額單位進行中越對照：', [
            ['Nghìn / Ngàn', '千 (1,000)'],
            ['Triệu', '百萬 (1,000,000)'],
            ['Tỷ', '十億 (1,000,000,000)'],
            ['Đồng', '越南貨幣單位 (盾)']
          ], '越南貨幣去三個零計算法：十萬盾 = 100k。', '💡 提示：Triệu 是百萬（兆的古音）。'),
          b('組裝句子「一杯咖啡兩萬盾」：', 'Một ly cà phê hai mươi nghìn đồng', 'Một ly cà phê (一杯咖啡) + hai mươi nghìn đồng (兩萬盾)。', '💡 提示：20k = hai mươi nghìn。', ['trăm', 'bát']),
          t('詢問價錢金句：Bao ___ tiền?（請填入代表「多少」的詞）', 'nhiêu', ['nhieu'], 'Bao nhiêu = 多少。', '💡 提示：五個字母 nhiêu。', 'bao nhiêu')
        ]
      },
      {
        id: 'u4-n3',
        title: '市集殺價大作戰',
        icon: '🏷️',
        kind: 'lesson',
        questions: [
          c('嫌店家開價太貴，可以驚呼：', 'Đắt quá!', ['Rẻ quá!', 'Ngon quá!', 'Vui quá!'], 'Đắt quá (北越) 或 Mắc quá (南越) 代表「太貴了！」。', '💡 提示：đắt / mắc 是昂貴。', 'Đắt quá!'),
          c('想請老闆算便宜一點，最得體的請求是：', 'Bớt một chút được không?', ['Không trả tiền', 'Cho tôi luôn', 'Đắt thế này ai mua'], 'Bớt (減少/折扣) + một chút (一點點) + được không (可以嗎)？', '💡 提示：bớt 是減少、退讓、優惠。', 'Bớt một chút được không?'),
          l('Nếu em mua hai cái thì chị giảm giá cho mười phần trăm.', '老闆娘開出了什麼優惠條件？', '如果買兩個就給予九折優惠 (打九折/減10%)', ['買兩個送一個免費', '買兩個要加收十萬盾', '今天不賣衣服只賣鞋子'], 'Mua hai cái (買兩個) + giảm giá (減價/降價) + mười phần trăm (10%)。', '💡 提示：giảm giá 是降價/打折。'),
          m('將逛街購物實用片語配對：', [
            ['Đắt quá', '太貴了'],
            ['Rẻ lắm', '很便宜'],
            ['Giảm giá', '降價 / 折扣'],
            ['Được không', '行不行 / 好嗎']
          ], '市場血拼時攻防必備的心理戰詞彙。', '💡 提示：Rẻ 是便宜。'),
          b('組裝殺價句「便宜一點可以嗎，姐姐？」：', 'Bớt một chút được không chị', 'Bớt một chút (便宜一點) + được không (行嗎) + chị (稱呼姐姐)。', '💡 提示：將稱謂 chị 置於句尾顯得極親切。', ['đắt', 'quá']),
          t('反義詞填空：Đắt 是昂貴，便宜的越語是：___', 'rẻ', ['re'], 'Rẻ 意為便宜，帶有問聲 (hỏi)。', '💡 提示：兩個字母 rẻ。', 'rẻ')
        ]
      },
      {
        id: 'u4-n4',
        title: '【單元魔王挑戰】檳城市場採購談判決戰',
        icon: '👑',
        kind: 'boss',
        questions: [
          c('在胡志明市檳城市場買腰果，如何問「一公斤多少錢？」', 'Bao nhiêu tiền một ký?', ['Bao nhiêu người một ký?', 'Đi đâu một ký?', 'Mấy giờ một ký?'], 'Một ký (或 một cân) 代表一公斤；Bao nhiêu tiền một ký = 一公斤多少錢？', '💡 提示：ký 是公斤 (kilogram)。', 'Bao nhiêu tiền một ký?'),
          l('Một ký hạt điều là ba trăm năm mươi nghìn đồng.', '聽音辨別：一公斤腰果的報價是多少？', '350,000 VND (三十五萬盾)', ['35,000 VND', '530,000 VND', '150,000 VND'], 'Hạt điều (腰果) + ba trăm năm mươi nghìn (350,000)。', '💡 提示：ba trăm (300) + năm mươi nghìn (50k)。'),
          b('組裝句子「三十萬盾可以嗎，我就買兩盒」：', 'Ba trăm nghìn được không tôi mua hai hộp', '談判出價：數字 + được không + 購買數量。', '💡 提示：Ba trăm nghìn được không, tôi mua hai hộp。', ['đắt', 'quá']),
          m('複習商務採購與市場精選短語：', [
            ['Hạt điều', '腰果'],
            ['Bao nhiêu tiền', '多少錢'],
            ['Bớt một chút', '算便宜一點'],
            ['Tính tiền', '結帳算錢']
          ], '在東南亞商貿採購現場展現專業氣勢。', '💡 提示：hạt điều 是越南著名特產腰果。'),
          t('總計十萬盾（100,000 VND）：một ___ nghìn đồng.', 'trăm', ['tram'], 'Một trăm nghìn = 一百個千 = 十萬。', '💡 提示：填入 trăm (百)。', 'một trăm nghìn đồng'),
          c('老闆爽快答應降價成交，常會微笑說：', 'Được rồi, bán cho em!', ['Không được đâu', 'Đi chỗ khác mua', 'Đắt lắm'], 'Được rồi, bán cho em! = 好啦，賣給你啦！', '💡 提示：bán 是賣出。', 'Được rồi bán cho em!'),
          l('Em trả bằng tiền mặt hay quét mã chuyển khoản?', '店家在詢問顧客哪種付款方式？', '用現金支付還是掃碼轉帳？', ['付美金還是付台幣？', '立刻付還是下個月付？', '分期付款還是一次付清？'], 'Tiền mặt (現金) + hay (或者) + quét mã chuyển khoản (掃碼轉帳)。', '💡 提示：tiền mặt 是現金，quét mã 是掃 QR Code。')
        ]
      }
    ]
  },
  {
    id: 'u5',
    title: '日常作息與時間表達',
    viTitle: 'Thời gian & Sinh hoạt',
    stage: 'A2 作息時間',
    icon: '⏰',
    color: 'sky',
    goal: '清楚詢問與回答幾點鐘、排定行事曆日程，暢談從早到晚的生活步調。',
    guide: {
      keyGrammar: '問時間：「Bây giờ là mấy giờ?」(現在幾點？)。回答：「... giờ ... phút」(點...分)；半點用 rưỡi (例如：bảy giờ rưỡi = 7點半)。時間副詞通常放在句首或句尾：Hôm nay (今天), Ngày mai (明天), Hôm qua (昨天)。',
      toneTip: 'Giờ 是玄聲 (`\\`)；Rưỡi 是跌聲 (Ngã ~) 或問聲，代表「半」。',
      dialogue: [
        { speaker: 'A', vi: 'Bây giờ là mấy giờ rồi anh?', zh: '哥，現在幾點鐘了？' },
        { speaker: 'B', vi: 'Tám giờ rưỡi rồi, chúng ta đi ăn sáng thôi!', zh: '八點半囉，我們去吃早餐吧！' }
      ]
    },
    nodes: [
      {
        id: 'u5-n1',
        title: '現在幾點鐘？時間表達',
        icon: '🕐',
        kind: 'lesson',
        questions: [
          c('詢問對方「現在幾點了？」的標準說法是：', 'Bây giờ là mấy giờ?', ['Bây giờ là bao nhiêu tiền?', 'Hôm nay là thứ mấy?', 'Bạn đi đâu đấy?'], 'Bây giờ (現在) + là (是) + mấy giờ (幾點)？', '💡 提示：mấy 用於十以內的疑問「幾」。', 'Bây giờ là mấy giờ?'),
          c('表示「早上七點半」，越語最道地的表達是：', 'Bảy giờ rưỡi sáng', ['Bảy giờ mười sáng', 'Tám giờ sáng', 'Bảy giờ tối'], 'Bảy giờ (七點) + rưỡi (半) + sáng (早上)。', '💡 提示：rưỡi 代表半小時。', 'Bảy giờ rưỡi sáng'),
          l('Bây giờ là chín giờ mười lăm phút.', '聽音辨別：現在指針顯示的時間是？', '9:15 (九點十五分)', ['9:50', '8:15', '9:05'], 'Chín giờ (九點) + mười lăm phút (十五分)。', '💡 提示：phút 代表分鐘。'),
          m('將一日不同時段進行中越配對：', [
            ['Buổi sáng', '早晨 / 上午'],
            ['Buổi trưa', '中午'],
            ['Buổi chiều', '下午'],
            ['Buổi tối', '晚上']
          ], '結合具體點鐘，即可精確定義一天任何行程。', '💡 提示：trưa 是中午；tối 是夜晚。'),
          b('組裝句子「現在是中午十二點」：', 'Bây giờ là mười hai giờ trưa', 'Bây giờ là (現在是) + mười hai giờ (十二點) + trưa (中午)。', '💡 提示：時間段 trưa 放在時鐘數字後面。', ['tối', 'sáng']),
          t('半點表達：Tám giờ ___ (八點半)', 'rưỡi', ['ruoi'], 'Rưỡi 代表「半」。', '💡 提示：五個字母，帶有 ươ 和跌聲/問聲。', 'tám giờ rưỡi')
        ]
      },
      {
        id: 'u5-n2',
        title: '星期、日期與行事曆',
        icon: '📅',
        kind: 'lesson',
        questions: [
          c('越南語的星期非常有規律：從星期二開始編號。那麼「星期一」叫什麼？', 'Thứ hai', ['Thứ nhất', 'Thứ ba', 'Chủ nhật'], '越語星期一稱為 Thứ hai（第二天）；星期天則是特殊詞「Chủ nhật」。', '💡 提示：Thứ hai 相當於週一（工作週第二天）。', 'Thứ hai'),
          c('大家最期待的放假日「星期日/週日」在越語中是：', 'Chủ nhật', ['Thứ bảy', 'Thứ sáu', 'Thứ tám'], 'Chủ nhật 源自漢越詞「主日/天主之日」，代表週日。', '💡 提示：Chủ (主) nhật (日)。', 'Chủ nhật'),
          l('Hôm nay là thứ mấy? - Hôm nay là thứ sáu.', '聽聽看，今天是在星期幾？', '星期五 (Thứ sáu)', ['星期六', '星期四', '星期二'], 'Thứ sáu 對應中文的星期五（數字六對應週五）。', '💡 提示：Thứ sáu = 週五（越南星期比台灣數字多 1）。'),
          m('將時間指標詞進行中越配對：', [
            ['Hôm nay', '今天'],
            ['Ngày mai', '明天'],
            ['Hôm qua', '昨天'],
            ['Tuần sau', '下星期']
          ], '這些詞彙常置於句首引導日程時態。', '💡 提示：tuần sau 是下一週。'),
          b('組裝句子「明天是星期六」：', 'Ngày mai là thứ bảy', 'Ngày mai (明天) + là (是) + thứ bảy (星期六)。', '💡 提示：Thứ bảy 對應週六。', ['chủ nhật', 'hôm nay']),
          t('時間詞填空：今天是 hôm nay，昨天是：hôm ___', 'qua', ['Qua'], 'Hôm qua = 昨天。', '💡 提示：三個字母 qua。', 'hôm qua')
        ]
      },
      {
        id: 'u5-n3',
        title: '從早到晚的一天作息',
        icon: '🏃',
        kind: 'lesson',
        questions: [
          c('上班族每天早晨最重要的事情「去上班」，越語是：', 'Đi làm', ['Đi học', 'Đi ngủ', 'Đi chơi'], 'Đi (去) + làm (做/工作) = 上班工作。', '💡 提示：làm việc 是工作。', 'Đi làm'),
          c('夜晚疲憊放鬆「去睡覺」，越語是：', 'Đi ngủ', ['Ăn cơm', 'Tắm rửa', 'Thức dậy'], 'Đi (去) + ngủ (睡覺) = 去睡覺。', '💡 提示：ngủ 是睡眠。', 'Đi ngủ'),
          l('Tôi thường thức dậy lúc sáu giờ sáng.', '說話者通常在早晨幾點鐘起床？', '6:00 (早上六點)', ['7:00', '5:30', '8:00'], 'Thường (常常) + thức dậy (起床) + lúc sáu giờ sáng (在早晨六點)。', '💡 提示：thức dậy 是起床；sáu 是 6。'),
          m('將日常生活動詞進行中越連線：', [
            ['Thức dậy', '起床'],
            ['Ăn sáng', '吃早餐'],
            ['Đi làm', '去上班'],
            ['Về nhà', '回老家 / 回家']
          ], '掌握作息動詞即可向朋友暢聊日常生活。', '💡 提示：về 是返回，nhà 是家。'),
          b('組裝句子「我下午五點下班回家」：', 'Tôi về nhà lúc năm giờ chiều', 'Tôi về nhà (我回家) + lúc (在...時刻) + năm giờ chiều (下午五點)。', '💡 提示：lúc 引導具體鐘點。', ['sáng', 'ngủ']),
          t('吃早飯叫 ăn sáng，那麼吃晚飯是：ăn ___', 'tối', ['toi'], 'Ăn tối = 吃晚餐。', '💡 提示：tối 代表夜晚。', 'ăn tối')
        ]
      },
      {
        id: 'u5-n4',
        title: '【單元魔王挑戰】排定胡志明市一日行程',
        icon: '👑',
        kind: 'boss',
        questions: [
          c('想和朋友約在週六早晨見面，最自然的邀約問句是：', 'Thứ bảy này chúng ta gặp nhau nhé?', ['Thứ hai tôi không đi làm', 'Bây giờ là mấy giờ', 'Tôi rất bận'], 'Thứ bảy này (本週六) + chúng ta gặp nhau (我們碰面) + nhé (好嗎)？', '💡 提示：gặp nhau 是彼此見面。', 'Thứ bảy này chúng ta gặp nhau nhé?'),
          l('Tám giờ sáng mai chúng ta gặp nhau ở quán cà phê.', '聽音提取約定細節：時間與地點分別是？', '明天早上 8:00，在咖啡館碰面', ['明天晚上 8:00，在電影院', '今天中午 12:00，在河粉店', '下週一 9:00，在辦公室'], 'Tám giờ sáng mai (明天早上八點) + ở quán cà phê (在咖啡店)。', '💡 提示：quán cà phê 代表咖啡館。'),
          b('組裝句子「明天星期日我們去喝咖啡吧」：', 'Ngày mai chủ nhật chúng ta đi uống cà phê đi', 'Ngày mai chủ nhật (明天週日) + chúng ta đi uống cà phê (我們去喝咖啡) + đi (吧/祈使句)。', '💡 提示：句尾的 đi 相當於中文的「...吧！」。', ['hôm qua', 'làm']),
          m('時間與作息總結配對：', [
            ['Mấy giờ rồi', '幾點鐘了'],
            ['Bảy giờ rưỡi', '七點半'],
            ['Cuối tuần', '週末'],
            ['Rất bận', '非常忙碌']
          ], '流暢協調個人生活與社交行程。', '💡 提示：Cuối tuần 是週末（週末端點）。'),
          t('問星期幾：Hôm nay là ___ mấy?', 'thứ', ['thu'], 'Thứ mấy = 星期幾。', '💡 提示：填入 thứ。', 'thứ mấy'),
          c('如果對方問你今天有空嗎，你剛好有空，可以回答：', 'Hôm nay tôi rảnh', ['Hôm nay tôi bận lắm', 'Tôi không biết', 'Đi làm ngay'], 'Rảnh 意為清閒、有空。Bận 意為忙碌。', '💡 提示：rảnh 是空閒。', 'Hôm nay tôi rảnh'),
          l('Mỗi ngày tôi đều dành ba mươi phút học tiếng Việt.', '說話者每天堅持的良好習慣是什麼？', '每天花 30 分鐘自主學習越南語', ['每天花 30 分鐘去公園慢跑', '每天提早 30 分鐘抵達工廠', '每天喝三杯黑咖啡'], 'Dành ba mươi phút (花三十分鐘) + học tiếng Việt (學越南語)。', '💡 提示：ba mươi phút = 30 分鐘。')
        ]
      }
    ]
  },
  {
    id: 'u6',
    title: '方位交通與城市出行',
    viTitle: 'Phương hướng & Đi lại',
    stage: 'A2 交通出行',
    icon: '🛵',
    color: 'teal',
    goal: '在河內與胡志明市街頭自信問路、給 Grab 司機指引方向，輕鬆找到目的地。',
    guide: {
      keyGrammar: '問地點在哪：「... ở đâu?」(在何處？)。例：Nhà vệ sinh ở đâu? (洗手間在哪？)。方向指示詞：Đi thẳng (直走), Rẽ trái (左轉), Rẽ phải (右轉), Gần (近), Xa (遠), Ở đây (這裡), Ở kia (那裡)。搭車指示：Dừng lại ở đây (停在這裡)。',
      toneTip: 'Thẳng 是問聲 (?)；Trái 是銳聲 (/)；Phải 是問聲 (?)。',
      dialogue: [
        { speaker: 'Khách', vi: 'Bác tài ơi, cho cháu đến chợ Bến Thành!', zh: '運將大哥，請載我到檳城市場！' },
        { speaker: 'Tài xế', vi: 'Được rồi! Đi thẳng rồi rẽ phải là tới nơi.', zh: '好咧！直走然後右轉就到了。' }
      ]
    },
    nodes: [
      {
        id: 'u6-n1',
        title: '請問洗手間在哪裡？實用問路',
        icon: '🚻',
        kind: 'lesson',
        questions: [
          c('緊急實用第一金句「請問洗手間在哪裡？」越語是：', 'Nhà vệ sinh ở đâu?', ['Nhà vệ sinh bao nhiêu tiền?', 'Nhà vệ sinh màu gì?', 'Nhà vệ sinh mấy giờ?'], 'Nhà vệ sinh (衛生間/洗手間) + ở đâu (在何處)？', '💡 提示：ở đâu 是最核心的空間疑問詞。', 'Nhà vệ sinh ở đâu?'),
          c('如果目的地就在附近「離這裡很近」，越語該說：', 'Rất gần đây', ['Rất xa đây', 'Không có đường', 'Đi lạc rồi'], 'Gần (近)；Rất gần đây = 離這裡很近。反義詞 Xa = 遙遠。', '💡 提示：gần 是近，xa 是遠。', 'Rất gần đây'),
          l('Khách sạn của bạn ở đâu? - Ở gần sân bay.', '對話中旅館的實際具體地理位置在？', '靠近機場 (Sân bay)', ['靠近海邊碼頭', '在第一郡老街市中心', '在胡志明市火車站旁邊'], 'Sân bay 是機場；Ở gần sân bay = 在機場附近。', '💡 提示：sân bay 是飛機場。'),
          m('將城市關鍵公共場所進行中越配對：', [
            ['Sân bay', '機場'],
            ['Khách sạn', '飯店 / 旅館'],
            ['Bệnh viện', '醫院'],
            ['Nhà ga', '火車站']
          ], '全都是漢越音深度借詞，發音極度親切好記。', '💡 提示：Bệnh viện = 病院/醫院。'),
          b('組裝句子「請問機場在哪裡？」：', 'Làm ơn cho hỏi sân bay ở đâu', 'Làm ơn cho hỏi (勞駕借問一下) + sân bay ở đâu (機場在哪)？', '💡 提示：Làm ơn cho hỏi 相當於 Excuse me / 請問。', ['khách', 'đây']),
          t('問路專用疑問詞：「... ở ___?」（在哪裡）', 'đâu', ['dau'], 'Ở đâu = 在哪裡。', '💡 提示：三個字母 đâu。', 'ở đâu')
        ]
      },
      {
        id: 'u6-n2',
        title: '直走左轉右轉：方向導航',
        icon: '🧭',
        kind: 'lesson',
        questions: [
          c('司機詢問行車方向，要他「一直往前走/直走」，該說：', 'Đi thẳng', ['Rẽ trái', 'Rẽ phải', 'Quay đầu'], 'Đi (走) + thẳng (筆直) = 直走。', '💡 提示：thẳng 代表筆直。', 'Đi thẳng'),
          c('到了十字路口要「向左轉」，越語是：', 'Rẽ trái', ['Rẽ phải', 'Đi thẳng', 'Dừng xe'], 'Rẽ (轉向) + trái (左邊) = 左轉。右轉則是 Rẽ phải。', '💡 提示：trái 是左，phải 是右。', 'Rẽ trái'),
          l('Đi thẳng qua ngã tư này, rồi rẽ phải là đến.', '聽辨路線指引：過了十字路口之後該怎麼走？', '右轉即抵達目的地', ['左轉直走五百公尺', '調頭原路返回', '停在十字路口等候'], 'Qua ngã tư (穿過十字路口) + rẽ phải (右轉) + là đến (就到了)。', '💡 提示：ngã tư 是十字路口。'),
          m('將方向指引單字進行配對：', [
            ['Đi thẳng', '直走'],
            ['Rẽ trái', '左轉'],
            ['Rẽ phải', '右轉'],
            ['Đằng trước', '正前方 / 前面']
          ], '學會這 4 個方向指令，乘車指路從此不再迷航。', '💡 提示：Đằng trước 是前方。'),
          b('組裝路線指令「直走然後向左轉」：', 'Đi thẳng rồi rẽ trái', 'Đi thẳng (直走) + rồi (然後) + rẽ trái (向左轉)。', '💡 提示：rồi 連接前後兩個動作。', ['phải', 'ở']),
          t('方向填空：Rẽ trái 是左轉，右轉是：rẽ ___', 'phải', ['phai'], 'Phải 代表右邊。', '💡 提示：四個字母 phải。', 'rẽ phải')
        ]
      },
      {
        id: 'u6-n3',
        title: '搭乘 Grab、計程車與公車',
        icon: '🚕',
        kind: 'lesson',
        questions: [
          c('抵達目的地時，提醒司機「請停在這裡」，該說：', 'Làm ơn dừng lại ở đây', ['Làm ơn đi nhanh lên', 'Làm ơn quay lại', 'Đi thẳng tiếp'], 'Dừng lại (停下/停住) + ở đây (在這裡)。', '💡 提示：dừng lại = 停止。', 'Làm ơn dừng lại ở đây'),
          c('在越南叫車 APP Grab 盛行，呼叫摩托車計程車稱為：', 'GrabBike / Xe ôm', ['Xe buýt', 'Tàu hỏa', 'Máy bay'], 'Xe ôm 是越南傳統摩托計程車（原意擁抱車）；Grab 上的摩托車即 GrabBike。', '💡 提示：xe ôm 代表摩托載客服務。', 'Xe ôm'),
          l('Bác tài ơi, đi đường này kẹt xe quá, có đường khác không?', '乘客在向司機詢問什麼狀況？', '這條路塞車太嚴重，有沒有別條路可以繞行？', ['這條路積水過深，無法通行', '司機是不是走錯城市了', '車費能不能打折便宜十萬'], 'Kẹt xe (塞車) + có đường khác không (有別條路嗎？)。', '💡 提示：kẹt xe 是塞車（南越常用 kẹt xe，北越常用 tắc đường）。'),
          m('將交通工具與出行單字配對：', [
            ['Taxi', '計程車'],
            ['Xe buýt', '公車 / 巴士'],
            ['Kẹt xe', '交通堵塞 / 塞車'],
            ['Dừng lại', '停下來']
          ], '穿梭越南各大都會必備的交通關鍵語彙。', '💡 提示：xe buýt 來自英語 bus。'),
          b('組裝搭車指令「請載我去檳城市場」：', 'Làm ơn cho tôi đi chợ Bến Thành', 'Làm ơn (勞駕/請) + cho tôi đi (讓我前往) + chợ Bến Thành (檳城市場)。', '💡 提示：chợ 是市場。', 'sân bay', 'ở'),
          t('停車指示：Làm ơn ___ xe ở đây!（請在這裡停「車」）', 'dừng', ['dung'], 'Dừng xe = 停車。', '💡 提示：四個字母 dừng。', 'dừng xe')
        ]
      },
      {
        id: 'u6-n4',
        title: '【單元魔王挑戰】西貢街頭尋寶導航',
        icon: '👑',
        kind: 'boss',
        questions: [
          c('向路人打聽「從這裡到第一郡市中心要多久時間？」該怎麼問？', 'Từ đây đến Quận 1 mất bao lâu?', ['Quận 1 có đẹp không?', 'Quận 1 bao nhiêu tiền?', 'Quận 1 ở đâu đấy?'], 'Từ đây (從這) + đến Quận 1 (到第一郡) + mất bao lâu (花費多久)？', '💡 提示：mất bao lâu = 花費多少時間。', 'Từ đây đến Quận 1 mất bao lâu?'),
          l('Đi taxi chỉ mất khoảng mười lăm phút thôi em à.', '司機回答車程需要多久時間？', '大約只需 15 分鐘左右', ['需要將近兩小時', '至少要走半小時', '今天道路封閉去不了'], 'Chỉ mất (只花費) + khoảng mười lăm phút (大約 15 分鐘)。', '💡 提示：khoảng 代表大約/概數。'),
          b('組裝路線「向右轉然後一直走五百公尺」：', 'Rẽ phải rồi đi thẳng năm trăm mét', 'Rẽ phải (右轉) + rồi (然後) + đi thẳng (直走) + năm trăm mét (500 公尺)。', '💡 提示：mét 是公尺/米。', ['trái', 'ở']),
          m('複習城市出行關鍵詞彙：', [
            ['Bến xe', '長途客運轉運站'],
            ['Ngã tư', '十字路口'],
            ['Mất bao lâu', '耗時多久'],
            ['Đến nơi', '到達目的地']
          ], '掌握問路回饋的關鍵路標詞彙。', '💡 提示：Bến xe 是客運巴士站。'),
          t('問地點：Cho hỏi chợ Bến Thành ở ___?（請填入代表何處的單字）', 'đâu', ['dau'], 'Ở đâu = 在何處。', '💡 提示：填入 đâu。', 'ở đâu'),
          c('如果走到了死巷或迷路，想表達「我迷路了」該說：', 'Tôi bị lạc đường rồi', ['Tôi đi đúng rồi', 'Tôi rất vui', 'Tôi muốn ăn phở'], 'Bị lạc đường = 遭到迷路 / 迷失方向。', '💡 提示：lạc đường 是迷路。', 'Tôi bị lạc đường rồi'),
          l('Đến nơi rồi em ơi, tổng cộng là bốn mươi nghìn.', '司機通知乘客什麼訊息？', '已經抵達目的地，車資總共是四萬越南盾', ['車子壞掉了，請大家下車推車', '開錯地方了，要重新折返', '需要加收五萬過路費'], 'Đến nơi rồi (到地方了) + bốn mươi nghìn (40k VND)。', '💡 提示：đến nơi = 到達目的地。')
        ]
      }
    ]
  },
  {
    id: 'u7',
    title: '產線工廠與商務會話',
    viTitle: 'Nhà máy & Công việc',
    stage: 'B1 商務實戰',
    icon: '🏭',
    color: 'indigo',
    goal: '駕馭台商外資製造現場：工廠巡檢、品質稽核、排程加班與正式商務合約談判。',
    guide: {
      keyGrammar: '工廠核心詞彙：Nhà máy (工廠), Dây chuyền sản xuất (生產線), Kiểm tra chất lượng (品質檢查/QC), Tiêu chuẩn (標準)。排程表達：Tăng ca (加班), Tiến độ (進度), Xuất khẩu (出口)。商務用語：Hợp đồng (合約), Báo giá (報價單), Xuất hóa đơn đỏ (開立加值稅紅發票)。',
      toneTip: 'Kiểm tra 是問聲 (? 降升)；Xuất 是銳聲 (/ 高升)。',
      dialogue: [
        { speaker: 'Giám đốc', vi: 'Lô hàng này đã kiểm tra chất lượng chưa?', zh: '這批貨做過品質檢驗了嗎？' },
        { speaker: 'Kỹ sư', vi: 'Dạ rồi, đạt tiêu chuẩn 100%, sẵn sàng xuất khẩu.', zh: '報告是的，100% 達標，隨時可出貨出口。' }
      ]
    },
    nodes: [
      {
        id: 'u7-n1',
        title: '工廠巡檢與產線術語',
        icon: '⚙️',
        kind: 'lesson',
        questions: [
          c('在製造工廠中，「品質檢驗 / 品管 QC」的越語是：', 'Kiểm tra chất lượng', ['Sửa chữa máy móc', 'Báo giá sản phẩm', 'Vệ sinh nhà xưởng'], 'Kiểm tra (檢查) + chất lượng (品質/質量)。', '💡 提示：漢越音「檢查質量」。', 'Kiểm tra chất lượng'),
          c('產線主管要求產品必須「符合品質標準」，越語是：', 'Đạt tiêu chuẩn', ['Không có hàng', 'Hỏng hóc nhiều', 'Chậm tiến độ'], 'Đạt (達成/合格) + tiêu chuẩn (標準)。', '💡 提示：漢越音「達標準」。', 'Đạt tiêu chuẩn'),
          l('Dây chuyền sản xuất số ba đang gặp sự cố kỹ thuật.', '聽取工廠廣播通報：哪一條產線發生了技術故障？', '第三號生產線 (Dây chuyền số 3)', ['第五號包裝線', '第一號噴漆線', '總部樣品實驗室'], 'Dây chuyền sản xuất số ba (3號生產線) + gặp sự cố (遭遇事故故障)。', '💡 提示：số ba 是數字 3。'),
          m('將工廠製造核心詞彙進行配對：', [
            ['Nhà máy', '製造工廠'],
            ['Sản phẩm', '產品'],
            ['Linh kiện', '零組件 / 零件'],
            ['Bảo trì', '保養維修']
          ], '台商平陽、同奈、北寧各工廠每天必講術語。', '💡 提示：Linh kiện 是零件。'),
          b('組裝巡檢指令「請仔細檢查這批產品」：', 'Làm ơn kiểm tra kỹ lô sản phẩm này', 'Làm ơn (請) + kiểm tra kỹ (仔細檢查) + lô sản phẩm này (這批產品)。', '💡 提示：kỹ 代表仔細、嚴密。', ['uống', 'tiền']),
          t('品質在越語中是 chất ___（漢越詞：質量）', 'lượng', ['luong'], 'Chất lượng = 品質 / 質量。', '💡 提示：五個字母 lượng。', 'chất lượng')
        ]
      },
      {
        id: 'u7-n2',
        title: '出貨、加班與進度調度',
        icon: '📦',
        kind: 'lesson',
        questions: [
          c('產能吃緊需要同仁晚上留下來「加班」，越語專用詞是：', 'Tăng ca', ['Nghỉ phép', 'Tan ca', 'Đi làm trễ'], 'Tăng (增加) + ca (班次) = 加班。下班則是 Tan ca。', '💡 提示：漢越音「增班/加班」。', 'Tăng ca'),
          c('外銷訂單迫在眉睫，主管要求「務必趕上出貨進度」，該說：', 'Kịp tiến độ giao hàng', ['Chậm trễ giao hàng', 'Hủy bỏ đơn hàng', 'Không cần làm nữa'], 'Kịp (趕得及) + tiến độ (進度) + giao hàng (交貨)。', '💡 提示：kịp 是趕上、及時。', 'Kịp tiến độ giao hàng'),
          l('Ngày mai công nhân có thể tăng ca hai tiếng được không?', '產線幹部在協調詢問什麼事宜？', '明天作業員能否配合加班 2 個小時？', ['明天是否全廠放假一天？', '明天能否提早兩小時上班？', '員工餐廳明天是否提供午餐？'], 'Tăng ca hai tiếng (加班兩小時) + được không (可以嗎)。', '💡 提示：hai tiếng 代表兩小時。'),
          m('將產能進度排程片語進行配對：', [
            ['Giao hàng', '交貨 / 出貨'],
            ['Xuất khẩu', '出口外銷'],
            ['Tăng ca', '加班工作'],
            ['Nghỉ phép', '請假休假']
          ], '外資跨國工廠人資與生管調度的基石詞彙。', '💡 提示：Nghỉ phép 是休假。'),
          b('組裝句子「明天必須準時交貨」：', 'Ngày mai phải giao hàng đúng giờ', 'Ngày mai (明天) + phải (必須) + giao hàng (交貨) + đúng giờ (準時)。', '💡 提示：đúng giờ 代表準時、按時。', ['chậm', 'nghỉ']),
          t('動詞填空：增班加班是 tăng ___', 'ca', ['Ca'], 'Tăng ca = 加班。', '💡 提示：兩個字母 ca。', 'tăng ca')
        ]
      },
      {
        id: 'u7-n3',
        title: '商務會議與合約報價',
        icon: '📊',
        kind: 'lesson',
        questions: [
          c('商務談判告段落，雙方準備簽署「商業合約」，越語是：', 'Ký hợp đồng', ['Viết thư tay', 'Gặp gỡ bạn bè', 'Mua vé máy bay'], 'Ký (簽名簽署) + hợp đồng (合約/合同)。', '💡 提示：漢越音「合同」。', 'Ký hợp đồng'),
          c('在越南做生意合規抵扣必備的「加值稅發票（紅發票）」，越語稱為：', 'Hóa đơn đỏ / VAT', ['Tiền mặt', 'Phiếu giảm giá', 'Giấy giới thiệu'], 'Hóa đơn đỏ（紅發票/VAT發票）是越南正式官方稅務抵扣收據。', '💡 提示：hóa đơn 是發票，đỏ 是紅色。', 'Hóa đơn đỏ'),
          l('Công ty chúng tôi xin gửi bảng báo giá mới nhất cho quý khách.', '聽音理解這封商務郵件或致電的核心訴求：', '我司特向貴賓發送最新的官方報價單', ['我司決定終止合作關係', '請求對方退還訂金與貨物', '邀請對方參加年終尾牙餐會'], 'Bảng báo giá mới nhất (最新報價單) + quý khách (貴客/尊敬的客戶)。', '💡 提示：báo giá 代表報價。'),
          m('將商務洽商專用名詞進行中越配對：', [
            ['Hợp đồng', '商業合約'],
            ['Báo giá', '商品報價'],
            ['Đối tác', '合作夥伴 / 協力廠商'],
            ['Hóa đơn', '發票 / 收據']
          ], '跨國貿易、採購與設廠法律協商必備用語。', '💡 提示：Đối tác 是對象/合作夥伴。'),
          b('組裝句子「雙方同意簽署這份合約」：', 'Hai bên đồng ý ký hợp đồng này', 'Hai bên (雙方) + đồng ý (同意) + ký hợp đồng này (簽署這份合約)。', '💡 提示：đồng ý 代表同意。', ['bán', 'rẻ']),
          t('名詞填空：商業合約是 hợp ___', 'đồng', ['dong'], 'Hợp đồng = 合約 / 合同。', '💡 提示：四個字母 đồng。', 'hợp đồng')
        ]
      },
      {
        id: 'u7-n4',
        title: '【單元魔王挑戰】平陽台商工廠晨會交鋒',
        icon: '👑',
        kind: 'boss',
        questions: [
          c('晨會上廠長提問「這批外銷訂單能否如期完成？」最專業的越語表達是：', 'Đơn hàng xuất khẩu này có kịp tiến độ không?', ['Đơn hàng này giá bao nhiêu?', 'Công nhân có ăn sáng không?', 'Nhà máy mấy giờ đóng cửa?'], 'Đơn hàng xuất khẩu (出口訂單) + có kịp tiến độ không (能否趕上進度)？', '💡 提示：đơn hàng 是訂單。', 'Đơn hàng xuất khẩu này có kịp tiến độ không?'),
          l('Nếu toàn bộ công nhân tăng ca tối nay, chúng ta sẽ hoàn thành xuất xưởng đúng hạn.', '聽音分析晨會結論：如何才能如期出廠？', '如果今晚全體作業員配合加班，即可如期完成出貨', ['必須引進全新的自動化機器人', '需要退回原料重新採購', '必須延後一週出貨向客戶道歉'], 'Tăng ca tối nay (今晚加班) + hoàn thành đúng hạn (如期完成)。', '💡 提示：đúng hạn = 按期/如期。'),
          b('組裝承諾「我們保證產品品質達到國際標準」：', 'Chúng tôi đảm bảo chất lượng đạt tiêu chuẩn quốc tế', 'Chúng tôi đảm bảo (我們保證) + chất lượng đạt tiêu chuẩn quốc tế (品質達國際標準)。', '💡 提示：đảm bảo = 擔保/保證；quốc tế = 國際。', ['hủy', 'chậm']),
          m('綜合工廠商務關鍵核心片語：', [
            ['Kiểm tra chất lượng', '品質管控 QC'],
            ['Tiến độ giao hàng', '交期進度'],
            ['Ký hợp đồng', '簽署合約'],
            ['Đúng hạn', '如期按時']
          ], '成為台越製造業跨國經理人的語言通關憑證。', '💡 提示：đúng hạn 是如期。'),
          t('商務詞填空：保證品質達到標準：đạt tiêu ___', 'chuẩn', ['chuan'], 'Tiêu chuẩn = 標準。', '💡 提示：六個字母 chuẩn。', 'tiêu chuẩn'),
          c('客戶滿意驗收後要求開立稅務發票，財務會說：', 'Chúng tôi sẽ xuất hóa đơn đỏ ngay', ['Chúng tôi không có hóa đơn', 'Không thể xuất hàng', 'Khách hàng phải tự chịu'], 'Xuất hóa đơn đỏ (開具紅發票) + ngay (立刻)。', '💡 提示：xuất 是開出/發出。', 'Chúng tôi sẽ xuất hóa đơn đỏ ngay'),
          l('Hợp tác thành công, chúc công ty ngày càng phát triển!', '對方在談判圓滿後送上的祝賀詞是？', '合作成功，祝福貴公司蒸蒸日上蓬勃發展！', ['希望下次價格能夠再打五折', '貨款將在三個月後給付', '請盡快寄送新的樣品'], 'Hợp tác thành công (合作成功) + ngày càng phát triển (日益發展)。', '💡 提示：phát triển = 發展。')
        ]
      }
    ]
  },
  {
    id: 'u8',
    title: '社交聊天與文化習俗',
    viTitle: 'Giao tiếp & Văn hóa',
    stage: 'B2 文化地道',
    icon: '🎋',
    color: 'rose',
    goal: '融入越南在地生活人情味：幽默接梗、客氣謙遜、通曉路邊冰茶哲學與傳統節慶習俗。',
    guide: {
      keyGrammar: '越語謙虛應對：當被誇讚「Bạn nói tiếng Việt giỏi quá!」(你越語說得太好了！)，最地道的回答是「Đâu có, tôi chỉ biết một chút thôi」(哪有，我只懂一點點啦)。人情文化：Trà đá vỉa hè (路邊冰茶攤交友文化), Cảm ơn tấm lòng (謝謝你的心意)。',
      toneTip: 'Giỏi 是問聲 (? 揚抑)；Đâu có: Đâu (平聲) có (銳聲 /)。',
      dialogue: [
        { speaker: 'Bạn', vi: 'Bạn nói tiếng Việt lưu loát quá!', zh: '你越南語講得太流利了！' },
        { speaker: 'Tôi', vi: 'Đâu có, tôi đang cố gắng học mỗi ngày thôi.', zh: '哪裡哪裡，我只是每天努力學習而已啦。' }
      ]
    },
    nodes: [
      {
        id: 'u8-n1',
        title: '讚美與高 EQ 謙虛回應',
        icon: '🌟',
        kind: 'lesson',
        questions: [
          c('越南友人誇獎你「Bạn nói tiếng Việt giỏi quá!」，最得體謙遜的回答是：', 'Đâu có, tôi chỉ biết một chút thôi', ['Đúng rồi, tôi thông minh lắm', 'Tôi không thích học', 'Bạn nói sai rồi'], 'Đâu có (哪有/哪裡) + tôi chỉ biết một chút (我只懂一點點) 是最受越南人喜愛的謙恭美德。', '💡 提示：Đâu có 相當於中文的「哪有～」。', 'Đâu có, tôi chỉ biết một chút thôi'),
          c('想稱讚一位越南朋友「你今天穿得很漂亮！」，該說：', 'Hôm nay bạn mặc đẹp quá!', ['Hôm nay bạn ăn nhiều quá!', 'Hôm nay bạn bận thế!', 'Bạn đi đâu đấy!'], 'Mặc (穿著) + đẹp quá (太美麗了)。', '💡 提示：đẹp 代表美麗/漂亮。', 'Hôm nay bạn mặc đẹp quá!'),
          l('Bạn phát âm rất chuẩn, không khác gì người bản xứ!', '聽聽看對方在真誠讚美你的什麼能力？', '你的發音非常標準，跟母語人士一模一樣！', ['你走路的步伐很輕盈快速', '你點的菜餚風味非常獨特', '你寫的書法字跡非常工整'], 'Phát âm (發音) + rất chuẩn (極標準) + người bản xứ (在地母語者)。', '💡 提示：chuẩn 是標準，bản xứ 是本地。'),
          m('將社交誇獎與謙遜用語進行配對：', [
            ['Giỏi quá', '太厲害了 / 太棒了'],
            ['Đẹp quá', '太漂亮了'],
            ['Đâu có', '哪裡哪裡 / 哪有'],
            ['Cảm ơn lời khen', '謝謝你的誇獎']
          ], '高情商越南人際互動的潤滑劑金句。', '💡 提示：lời khen 是讚美之言。'),
          b('組裝謙詞「我只會說一點點越南語」：', 'Tôi chỉ nói được một chút tiếng Việt', 'Tôi chỉ nói được (我只能說) + một chút tiếng Việt (一點點越南語)。', '💡 提示：chỉ... thôi = 只有/僅僅。', ['rất', 'giỏi']),
          t('謙虛詞填空：被稱讚時害羞說「哪有」：___ có!', 'đâu', ['dau'], 'Đâu có = 哪有 / 哪裡。', '💡 提示：三個字母 đâu。', 'đâu có')
        ]
      },
      {
        id: 'u8-n2',
        title: '休閒邀約與週末活動',
        icon: '🛵',
        kind: 'lesson',
        questions: [
          c('在越南，最盛行、最放鬆的友誼社交活動是：', 'Đi uống cà phê', ['Đi ngủ', 'Đi cãi nhau', 'Ở nhà một mình'], 'Đi uống cà phê (去喝咖啡) 是越南人聊天、辦公、談心與休閒的國民生活方式。', '💡 提示：uống 是飲用。', 'Đi uống cà phê'),
          c('週末想約朋友出門兜風走走，親切的詢問是：', 'Cuối tuần này rảnh không, đi chơi nhé?', ['Tôi muốn làm việc tăng ca', 'Hôm nay mấy giờ rồi', 'Tiền này của ai'], 'Cuối tuần này rảnh không (週末有空嗎) + đi chơi nhé (一起去玩好嗎)？', '💡 提示：đi chơi 是出去遊玩/散心。', 'Cuối tuần này rảnh không, đi chơi nhé?'),
          l('Tối nay rảnh không, chúng ta đi dạo phố đi bộ Nguyễn Huệ nhé!', '朋友熱情邀約你今晚去胡志明市哪裡散步遊玩？', '阮惠街步行街 (Phố đi bộ Nguyễn Huệ)', ['檳城市場大圓環', '西貢河貨櫃碼頭', '新山一機場免稅店'], 'Phố đi bộ Nguyễn Huệ 是西貢最繁華浪漫的徒步步行街。', '💡 提示：phố đi bộ = 步行街道。'),
          m('將休閒邀約短句進行配對：', [
            ['Đi uống cà phê', '去喝杯咖啡聊聊'],
            ['Đi dạo phố', '去街上散步逛街'],
            ['Cuối tuần', '週末週末'],
            ['Hẹn gặp lại', '約定下次再聚']
          ], '隨時隨地開啟一場輕鬆愉快的越南好友小聚。', '💡 提示：dạo 是漫步、遊逛。'),
          b('組裝邀約「我們一起去喝路邊冰茶吧」：', 'Chúng ta đi uống trà đá vỉa hè đi', 'Chúng ta (我們) + đi uống (去喝) + trà đá vỉa hè (路邊冰茶) + đi (吧)。', '💡 提示：vỉa hè 代表人行道/路邊小攤。', ['ngủ', 'làm']),
          t('喝咖啡動詞：Đi ___ cà phê nhé!（請填入代表飲用的動詞）', 'uống', ['uong'], 'Uống = 喝。', '💡 提示：四個字母 uống。', 'uống')
        ]
      },
      {
        id: 'u8-n3',
        title: '越南風土人情與送禮文化',
        icon: '🎁',
        kind: 'lesson',
        questions: [
          c('農曆春節 (Tết) 拜訪越南家庭，長輩給晚輩象徵祝福的紅包稱為：', 'Lì xì', ['Tiền mặt', 'Hóa đơn', 'Hợp đồng'], 'Lì xì 源自漢語「利市」，特指春節壓歲錢紅包。', '💡 提示：漢越音「利市」。', 'Lì xì'),
          c('收到越南友人熱情致贈的特產伴手禮，表達感恩的暖心佳句是：', 'Cảm ơn tấm lòng của bạn', ['Tôi không cần món này', 'Bao nhiêu tiền một hộp', 'Cái này ăn được không'], 'Cảm ơn (感謝) + tấm lòng của bạn (你的心意/心胸情懷)。', '💡 提示：tấm lòng = 心意、情懷。', 'Cảm ơn tấm lòng của bạn'),
          l('Người Việt Nam rất coi trọng tình cảm và lòng hiếu khách.', '這句話闡述了越南人民的哪項傳統美德？', '非常重視人際情感與熱情好客之道', ['特別注重嚴格守時與契約條款', '只喜歡喝烈酒不喜歡喝清茶', '平日不喜歡與陌生人交談'], 'Tình cảm (情感) + lòng hiếu khách (好客之心)。', '💡 提示：hiếu khách = 好客。'),
          m('將越南特色文化名詞進行配對：', [
            ['Tết Nguyên Đán', '農曆春節除夕'],
            ['Áo dài', '傳統國服奧黛'],
            ['Nón lá', '傳統斗笠'],
            ['Trà đá vỉa hè', '人行道平民冰茶']
          ], '深刻理解越南文化精髓，讓對話充滿溫度與靈魂。', '💡 提示：Áo dài = 奧黛長衫；Nón lá = 葉子斗笠。'),
          b('組裝祝福語「新年祝你身體健康萬事如意」：', 'Chúc mừng năm mới an khang thịnh vượng', 'Chúc mừng năm mới (新年快樂) + an khang thịnh vượng (安康盛旺)。', '💡 提示：經典漢越成語祝福。', ['đi', 'làm']),
          t('新年春節壓歲錢：tiền lì ___', 'xì', ['xi'], 'Lì xì = 紅包 / 壓歲錢。', '💡 提示：兩個字母 xì。', 'lì xì')
        ]
      },
      {
        id: 'u8-n4',
        title: '【單元魔王挑戰】全越南通關總決賽',
        icon: '👑',
        kind: 'boss',
        questions: [
          c('參加越南朋友的家宴，入座向長輩問候並舉杯乾杯（1, 2, 3 乾杯！），越語是：', 'Một, hai, ba, dô!', ['Một, hai, ba, đi!', 'Một, hai, ba, thôi!', 'Một, hai, ba, tạm biệt!'], '越南舉杯聚會標配吶喊：Một, hai, ba, dô! (1, 2, 3, 喝！)。', '💡 提示：dô / vô 代表乾杯進酒！', 'Một, hai, ba, dô!'),
          l('Chào bạn, tôi rất vinh hạnh được làm việc cùng các bạn trong suốt một năm qua.', '聽音理解演說者的真摯心聲：', '非常榮幸在過去整整一年裡能與各位共事同心協力', ['很遺憾今天必須向全體同仁提出辭職', '希望大家明天準時交出財務報表', '工廠明年將搬遷至北越河內園區'], 'Rất vinh hạnh (非常榮幸) + làm việc cùng các bạn (與大家共事)。', '💡 提示：vinh hạnh = 光榮榮幸。'),
          b('組裝終極宣言「我愛越南，越南語真的很有趣」：', 'Tôi yêu Việt Nam tiếng Việt thật là thú vị', 'Tôi yêu Việt Nam (我愛越南) + tiếng Việt thật là thú vị (越語真的很有趣)。', '💡 提示：thú vị = 趣味、引人入勝。', ['đắt', 'mệt']),
          m('通關總決選：綜合核心能力配對：', [
            ['Xin chào', '你好'],
            ['Cảm ơn', '感謝'],
            ['Bao nhiêu tiền', '多少錢'],
            ['Hẹn gặp lại', '期待再相見']
          ], '恭喜你！完成此考驗將榮獲「終極越南語通關金冠」！', '💡 提示：四大基石貫穿始終。'),
          t('乾杯歡呼金句：Một, hai, ba, ___!（請填入乾杯詞）', 'dô', ['do', 'vô', 'vo'], 'Một hai ba dô! = 1 2 3 乾杯！', '💡 提示：兩個字母 dô。', 'dô'),
          c('當你流利地完成這趟冒險，你的越南朋友們會情不自禁稱讚你：', 'Tuyệt vời quá, bạn là chuyên gia tiếng Việt rồi!', ['Bạn không biết nói gì à?', 'Đi về nhà đi thôi', 'Tôi không hiểu bạn nói'], 'Tuyệt vời quá (太絕妙優秀了) + chuyên gia (專家)。', '💡 提示：tuyệt vời = 絕佳、太棒了。', 'Tuyệt vời quá!'),
          l('Chúc mừng bạn đã hoàn thành xuất sắc toàn bộ khóa học tiếng Việt!', '聆聽這段頒獎詞：你達成了什麼偉大成就？', '恭喜你以出類拔萃的優異成績完成全部越南語學習課程！', ['很遺憾測驗失敗，請從第一關重新來過', '系統發生錯誤，無法保存今日學習記錄', '請購買付費會員以解鎖下一課內容'], 'Chúc mừng (祝賀恭喜) + hoàn thành xuất sắc (卓越完成) + toàn bộ khóa học (全部課程)。', '💡 提示：xuất sắc = 出色卓越！')
        ]
      }
    ]
  }
];

// Helper: Calculate total stats
export const QUEST_STATS = {
  totalUnits: QUEST_UNITS.length,
  totalNodes: QUEST_UNITS.reduce((sum, u) => sum + u.nodes.length, 0),
  totalQuestions: QUEST_UNITS.reduce((sum, u) => sum + u.nodes.reduce((nSum, n) => nSum + n.questions.length, 0), 0)
};
