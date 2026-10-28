# 🇻🇳 Viet Learning Hub (越語沉浸式學習中心)

> **現代化、沉浸式、全方位越南語學習 Web 應用程式**  
> 專為華語學習者打造，結合發音、聲調、情境對話、商業談判、政經脈絡與智能閃卡。

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?logo=github)](https://waatax.github.io/Viet/)

---

## v2.16.0 作答保存與中斷續學

- 每次送出答案立即保存錯題與作答進度，魔王關失敗的錯題也會保留。
- 可暫停並返回地圖，重新整理後按「繼續未完成練習」，恢復原題目順序、已提交回饋、愛心與重試佇列。
- 進度保存在此瀏覽器；尚未送出的答案需重新輸入。開始其他練習前會提示取代未完成課程。
- 切題或離開課程時停止語音，避免背景繼續朗讀；發布核對程式改用正常結束流程。

## v2.15.0 越語冒險介面與學習流程更新

- 新增「下一關」首頁、32 關總進度、8 單元切換，以及每日 30 XP 目標。
- 錯題庫支援每次最多 10 題的互動複習：答對後隔 1 天、3 天再練，三次成功後移出；提前練習不會跳過間隔。
- 選項與拼句詞庫每課重新洗牌，避免只記位置；保留越文聲調判定、提示、慢速語音與課末重練。
- 修正首次正確率、重複提交、重複發獎、寶石入帳與依本地日期計算的連續學習天數。
- 主站 `#quest` 與 `/Viet/quest/#learn` 共用 React 介面、語音引擎與儲存資料；舊入口仍可直接開啟。
- 新增專注答題畫面、手機闖關導覽、鍵盤焦點、對話框 Escape 與減少動態效果支援。

設計依據與驗證紀錄見 [QUEST_IMPROVEMENTS.md](QUEST_IMPROVEMENTS.md)。

## 🌟 核心特色 (Key Features)

- 🎮 **Duolingo 式遊戲化階梯學習之路 (Vietnamese Quest System · v2.14.0)**：
  - **8 大單元、32 個里程碑關卡、200+ 道原創情境互動題**：從 A0 起步問候、人稱長幼尊卑、西貢咖啡館點餐、市場殺價、城市方位導航，一路進階至工廠產線巡檢、加班出貨調度與商務談判合約。
  - **全題目雙速語音輔助 (Native Audio & Turtle Slow 0.65x)**：每道題目均支援標準真人語速朗讀與 0.65x 烏龜慢速播放，精確辨析 6 大聲調音高走向。
  - **階梯式提示鷹架 (`💡 提示`)**：提供隨時可查閱的破題密技、語序槽位公式與聲調小叮嚀，支援聽力題字幕降階展開。
  - **「重點是使其徹底學會」精熟閉環 (Mastery Guarantee Loop)**：答錯題目不扣除總成績，而是即時反饋精解 Why 並自動推入課末重練佇列，確保學員在離開該課前融會貫通；同步沉澱至間隔重複錯題庫 (SRS Bank)。
  - **八角動力遊戲化機制 (Octalysis Gamification)**：連續學習天數 (🔥 Streak)、單元金冠 (👑 Crowns)、冒險寶石 (💎 Gems)、單元魔王檢核 3 顆愛心機制 (❤️ Hearts)、多模態五大題型（選擇、聽力辨析、磁吸拼句積木、詞彙對對碰配對、填空聽寫）。
  - **雙軌訪問架構**：主站 SPA 內建整合模組 (`#quest`) ＋ 獨立靜態子系統 (`/Viet/quest/#learn`)，無縫對標 [ENG Quest](https://waatax.github.io/ENG/quest/#learn)。

- 🗣️ **64 大實戰生活與職場情境 (Life & Business Scenarios)**：涵蓋機場入境海關、工廠品保抽驗與裝櫃、公寓租賃物業、咖啡館點單、傳統市場殺價、30Shine 男士理髮沙龍、看診急診、Nhậu 越式應酬聚會等全方位對話。
- 🎧 **情境會話雙模式播放 (Dual-Mode Dialogue Player)**：所有情境會話（64 大情境、7 大情境深造、7 天速成、銀行臨櫃對話、購物短句）共用同一套播放器：
  - **越→中 逐句對照**：每句先播一遍越文、再播一遍中文（英文模式為英文），建立語意連結。
  - **純越文 沉浸聽力**：只播越南語原音，訓練不靠翻譯的聽解。
  - 語速 0.6x–1.2x、越文單句重複 1–3 次、依句長自動計算的「跟讀停頓」、單篇循環、自動連播下一段 / 下一情境。
  - 上一句 / 下一句 / 重聽本句 / 從任一句開始、分段進度條、當前句自動捲動與「越文 / 中文 / 跟讀」即時標示、離開畫面時的浮動迷你播放列、手機鎖屏媒體控制 (Media Session)。
  - 中文翻譯使用 707 種預先生成的 zh-TW 神經語音（HsiaoChen），快取後可在已開啟的頁面離線播放，不依賴裝置是否安裝中文 TTS。
- 💼 **11 大職場商務單元 (Business Hub)**：採購談判、SMT 工廠產線巡檢、勞工加班調度、商業合同條款與 FDI 投資實戰。
- 🏛️ **15 大政經宏觀專題 (Macro & Politics)**：深入解析越南宏觀經濟數據、中央銀行利率政策、南北文化思維與產經法規。
- 🔤 **發音與聲調競技場 (Phonetics & Tones)**：29 個越語字母解碼、南北口音（河內／胡志明）切換、6 大聲調實時辨析與聽力測驗。
- 📚 **語法體系與漢越音字根 (Grammar & Han-Viet)**：30 大核心語法法則、隨堂實檢與拼句挑戰，搭配漢越詞對照實現單字量指數級擴充。
- 📊 **全量 20 大模組專屬視覺資訊圖表 (Comprehensive Visual Infographics)**：全站 20 大教學單元全面配備高對比響應式向量圖表與解剖圖（包含信達雅階梯、音節五位解剖圖、五度聲學走向、社交階層樹、VND千進位避坑、三大句型積木、逆序修飾時貌軸、四邏輯複句、漢越韻律假朋友、會話修復漏斗、南北方言等語線、跟讀五階認知梯、B2B五段詢價骨架、宏觀位階金字塔、錯題四象限診斷、SRS遺忘曲線、曆法時空坐標、七日任務航線、急難三部曲、PDCA科學實證閉環）。
- 💡 **全量 180 知識點專屬微型資訊圖表與結構化解析 (180 Knowledge Point Micro-Infographics & Syntax Blueprints)**：每個知識點均配備專屬微型向量圖解（語法槽位積木 slots、狀態時序軸 timeline、高對比矩陣 contrast、五度音高走勢 contour、社交階層樹 tree、決策流程漏斗 flow、進程階梯 steps、數據對照表 matrix），輔以核心語法槽位、實戰精析、易錯避坑警示與押韻記憶心法，搭配能力階梯篩選 (🌱基礎 / 🚀延伸 / 🏆進階) 與即時關鍵字檢索。
- 🗂️ **10,000 高頻詞彙庫 (10k Frequency Vocabulary)**：涵蓋 Top 1k (基礎生存)、Top 3k (流利生活)、Top 5k (報章商務) 與 Top 10k (母語精通)。
- ⚡ **7 天速成與急救錦囊 (Fast Track & Emergency Kit)**：初訪越南必備生存會話與緊急求助指南。
- 🎧 **完整音訊支援 (Comprehensive Audio)**：全站字彙、短句、長篇對話皆配備越南語神經合成語音 (4,000+ 越語離線語音檔 + 707 種中文情境翻譯語音 + 多重容錯降級音訊引擎)。

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
先將修改提交至 main 或 master，再執行：
```bash
npm run deploy
```
此指令先執行會話檢查與建置，再推送來源碼；GitHub Actions 負責發布，不會強制覆寫 gh-pages 分支。發布後自動比對線上的 release.json 與提交版本。也可手動確認：
```bash
npm run verify:pages
```
頁首、頁尾版本來自同一個版本設定；頁尾「版本紀錄」提供正式版的提交編號與建置時間。

### 5. 新增或修改情境對話後重建語音
對話句子有增修時，先匯出需要配音的句子，再以 edge-tts 生成中文翻譯語音（及缺漏的越文語音）：
```bash
node scripts/extract_dialogue_texts.mjs
python scripts/generate_dialogue_audio.py
```
中文語音輸出至 `public/audio/zh/`，對照表為 `src/data/audioManifestZh.json`；已存在的檔案會自動略過。範圍涵蓋所有情境對話、情境字彙、五階段會話，以及「情境深度研經」卡片會朗讀的越文例句與口語擴展。

> 需要 `edge-tts` 7.3.1 以上（`pip install -U edge-tts`）；舊版會被微軟語音端點以 HTTP 403 拒絕。

---

## 📄 授權條款 (License)

本專案採 [MIT License](LICENSE) 開源授權，歡迎學習交流與共同維護。

### 發布前驗證

```bash
npm run test:dialogue
npm run test:audio
npm run build
```

GitHub Pages 的發布流程會先檢查全部會話的雙模式播放與音檔完整性。正式網站的音檔可用 `node scripts/extract_dialogue_texts.mjs --pages` 核對HTTP狀態、類型及大小。測試不取代母語者逐句聽審。
