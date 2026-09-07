# 🇻🇳 Viet Learning Hub (越語沉浸式學習中心)

> **現代化、沉浸式、全方位越南語學習 Web 應用程式**  
> 專為華語學習者打造，結合發音、聲調、情境對話、商業談判、政經脈絡與智能閃卡。

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?logo=github)](https://waatax.github.io/Viet/)

---

## 🌟 核心特色 (Key Features)

- 🗣️ **43+ 生活實用情境 (Life Scenarios)**：涵蓋機場入境、咖啡館點單、傳統市場殺價、租屋簽約、看診急診等全方位對話。
- 💼 **11 大職場商務單元 (Business Hub)**：採購談判、SMT 工廠產線巡檢、勞工加班調度、商業合同條款與 FDI 投資實戰。
- 🏛️ **15 大政經宏觀專題 (Macro & Politics)**：深入解析越南宏觀經濟數據、中央銀行利率政策、南北文化思維與產經法規。
- 🔤 **發音與聲調競技場 (Phonetics & Tones)**：29 個越語字母解碼、南北口音（河內／胡志明）切換、6 大聲調實時辨析與聽力測驗。
- 📚 **語法體系與漢越音字根 (Grammar & Han-Viet)**：掌握形容詞後置修飾、時態標記，透過漢越詞對照實現單字量指數級擴充。
- ⚡ **7 天速成與急救錦囊 (Fast Track & Emergency Kit)**：初訪越南必備生存會話與緊急求助指南。
- 🎧 **完整音訊支援 (Comprehensive Audio)**：全站字彙、短句、長篇對話皆配備標準越語真人語音。

---

## 🛠️ 技術棧 (Tech Stack)

- **前端框架**：[React 18](https://reactjs.org/) + [Vite 5](https://vitejs.dev/)
- **圖標庫**：[Lucide React](https://lucide.dev/)
- **音訊引擎**：Web Audio API + 自定義雙重音源降級架構（本地音庫 + 線上合成）
- **記憶演算法**：自適應 SRS (Spaced Repetition System) 間隔重複記憶引擎
- **部署平台**：GitHub Pages (支援 GitHub Actions 自動持續部署)

---

## 🚀 快速開始 (Quick Start)

### 1. 安裝相依套件
```bash
git clone https://github.com/waatax/Viet.git
cd Viet
npm install
```

### 2. 啟動本地開發伺服器
```bash
npm run dev
```
瀏覽器開啟 `http://localhost:5173/Viet/` 即可即時預覽與除錯。

### 3. 編譯正式生產版本
```bash
npm run build
```
編譯產物將生成於 `dist/` 目錄中。

### 4. 部署至 GitHub Pages
```bash
npm run deploy
```

---

## 📄 授權條款 (License)

本專案採 [MIT License](LICENSE) 開源授權，歡迎學習交流與共同維護。
