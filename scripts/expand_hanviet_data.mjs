import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/vietnameseData.js');
let content = fs.readFileSync(filePath, 'utf-8');

const newRoots = `  },
  {
    han: '醫 (Yī)',
    root: 'Y',
    meaningZh: '醫療、醫術',
    meaningEn: 'Medicine, Medical',
    compounds: [
      { viet: 'Y tế', zh: '醫療/衛生', en: 'Healthcare' },
      { viet: 'Bác sĩ', zh: '醫生 (漢越: 博士)', en: 'Doctor', falseFriend: { literalZh: '博士', warningZh: '越南語 Bác sĩ 專指醫生，學術博士為 Tiến sĩ。' } },
      { viet: 'Y khoa', zh: '醫科/醫學', en: 'Medical science' },
      { viet: 'Bệnh viện', zh: '醫院 (漢越: 病院)', en: 'Hospital' },
      { viet: 'Y tá', zh: '護士 (漢越: 醫佐)', en: 'Nurse' }
    ]
  },
  {
    han: '法 (Fǎ)',
    root: 'Pháp',
    meaningZh: '法律、方法、法國',
    meaningEn: 'Law, Method, France',
    compounds: [
      { viet: 'Pháp luật', zh: '法律', en: 'Law / Legislation' },
      { viet: 'Hợp pháp', zh: '合法', en: 'Legal' },
      { viet: 'Ngữ pháp', zh: '語法/文法', en: 'Grammar' },
      { viet: 'Biện pháp', zh: '辦法/措施', en: 'Measures / Solutions' },
      { viet: 'Nước Pháp', zh: '法國', en: 'France' }
    ]
  },
  {
    han: '政 (Zhèng)',
    root: 'Chính',
    meaningZh: '政府、政策、正確、正式',
    meaningEn: 'Government, Policy, Official',
    compounds: [
      { viet: 'Chính phủ', zh: '政府', en: 'Government' },
      { viet: 'Chính sách', zh: '政策', en: 'Policy' },
      { viet: 'Chính xác', zh: '正確/精準', en: 'Accurate' },
      { viet: 'Chính thức', zh: '正式', en: 'Official' },
      { viet: 'Chính trị', zh: '政治', en: 'Politics' }
    ]
  },
  {
    han: '財 (Cái)',
    root: 'Tài',
    meaningZh: '財務、財產、才能',
    meaningEn: 'Finance, Wealth, Talent',
    compounds: [
      { viet: 'Tài chính', zh: '財務/金融', en: 'Finance' },
      { viet: 'Tài sản', zh: '財產/資產', en: 'Assets' },
      { viet: 'Tài liệu', zh: '文件/資料/材料', en: 'Documents' },
      { viet: 'Tài năng', zh: '才能/天賦', en: 'Talent' },
      { viet: 'Tài xế', zh: '司機', en: 'Driver' }
    ]
  },
  {
    han: '技 (Jì)',
    root: 'Kỹ',
    meaningZh: '技術、技能',
    meaningEn: 'Technology, Skill',
    compounds: [
      { viet: 'Kỹ thuật', zh: '技術', en: 'Technology' },
      { viet: 'Kỹ sư', zh: '工程師 (漢越: 技師)', en: 'Engineer' },
      { viet: 'Kỹ năng', zh: '技能', en: 'Skill' },
      { viet: 'Công nghệ', zh: '科技/工藝', en: 'Technology' }
    ]
  },
  {
    han: '商 (Shāng)',
    root: 'Thương',
    meaningZh: '商業、貿易',
    meaningEn: 'Commerce, Trade',
    compounds: [
      { viet: 'Thương mại', zh: '貿易/商業', en: 'Trade / Commerce' },
      { viet: 'Thương trường', zh: '商場', en: 'Business arena' },
      { viet: 'Thương gia', zh: '商人/商務人士', en: 'Merchant' },
      { viet: 'Thương lượng', zh: '商量/談判', en: 'Negotiate' }
    ]
  },
  {
    han: '合 (Hé)',
    root: 'Hợp',
    meaningZh: '合同、合作、適合',
    meaningEn: 'Contract, Cooperate, Suitable',
    compounds: [
      { viet: 'Hợp đồng', zh: '合同/契約', en: 'Contract' },
      { viet: 'Hợp tác', zh: '合作', en: 'Cooperation' },
      { viet: 'Hợp lý', zh: '合理', en: 'Reasonable' },
      { viet: 'Thích hợp', zh: '適合', en: 'Suitable' }
    ]
  },
  {
    han: '產 (Chǎn)',
    root: 'Sản',
    meaningZh: '生產、產品、財產',
    meaningEn: 'Produce, Product',
    compounds: [
      { viet: 'Sản xuất', zh: '生產/製造', en: 'Production' },
      { viet: 'Sản phẩm', zh: '產品', en: 'Product' },
      { viet: 'Bất động sản', zh: '不動產/房地產', en: 'Real estate' },
      { viet: 'Tài sản', zh: '資產', en: 'Assets' }
    ]
  },
  {
    han: '通 (Tōng)',
    root: 'Thông',
    meaningZh: '交通、資訊、通知',
    meaningEn: 'Traffic, Information, Notice',
    compounds: [
      { viet: 'Thông tin', zh: '資訊/消息', en: 'Information' },
      { viet: 'Giao thông', zh: '交通', en: 'Traffic' },
      { viet: 'Thông báo', zh: '通告/通知', en: 'Notice' },
      { viet: 'Thông dịch', zh: '口譯', en: 'Interpretation' }
    ]
  },
  {
    han: '保 (Bǎo)',
    root: 'Bảo',
    meaningZh: '保護、保險、保證',
    meaningEn: 'Protect, Insurance',
    compounds: [
      { viet: 'Bảo hiểm', zh: '保險', en: 'Insurance' },
      { viet: 'Bảo đảm', zh: '保證/擔保', en: 'Guarantee' },
      { viet: 'Bảo vệ', zh: '保全/保護', en: 'Security / Protect' },
      { viet: 'Bảo tàng', zh: '博物館 (漢越: 寶藏)', en: 'Museum' }
    ]
  },
  {
    han: '投 (Tóu) / 資 (Zī)',
    root: 'Đầu tư',
    meaningZh: '投資',
    meaningEn: 'Investment',
    compounds: [
      { viet: 'Đầu tư nước ngoài (FDI)', zh: '外商投資', en: 'Foreign Investment' },
      { viet: 'Nhà đầu tư', zh: '投資者/投資方', en: 'Investor' },
      { viet: 'Tư bản', zh: '資本', en: 'Capital' },
      { viet: 'Tư vấn', zh: '顧問/諮詢', en: 'Consulting' }
    ]
  },
  {
    han: '問 (Wèn) / 題 (Tí)',
    root: 'Vấn đề',
    meaningZh: '問題、題目',
    meaningEn: 'Problem, Issue',
    compounds: [
      { viet: 'Vấn đề phức tạp', zh: '複雜問題', en: 'Complex issue' },
      { viet: 'Tiêu đề', zh: '標題/題目', en: 'Headline / Title' },
      { viet: 'Đề xuất', zh: '提案/提議', en: 'Proposal' },
      { viet: 'Phỏng vấn', zh: '採訪/面試', en: 'Interview' }
    ]
  },
  {
    han: '線 (Xiàn) / 網 (Wǎng)',
    root: 'Tuyến / Mạng',
    meaningZh: '線上、網路、路線',
    meaningEn: 'Online, Network, Route',
    compounds: [
      { viet: 'Trực tuyến', zh: '線上/在線', en: 'Online' },
      { viet: 'Mạng xã hội', zh: '社群網路 (SNS)', en: 'Social media' },
      { viet: 'Tuyến đường', zh: '路線', en: 'Route / Path' },
      { viet: 'Hàng không', zh: '航空', en: 'Aviation' }
    ]
  }`;

// Target the end of hanVietRoots array
const targetMarker = "export const pronounKinshipData = [";
const rootEndIdx = content.indexOf(targetMarker);

if (rootEndIdx !== -1) {
  // Find the closing bracket before pronounKinshipData
  const lastBracketIdx = content.lastIndexOf('];', rootEndIdx);
  if (lastBracketIdx !== -1) {
    const before = content.slice(0, lastBracketIdx);
    const after = content.slice(lastBracketIdx);
    content = before + newRoots + '\n' + after;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully expanded hanVietRoots in vietnameseData.js!');
  }
}
