# PaperNote｜論文筆記助理

PaperNote 是一個以繁體中文介面呈現的英文論文閱讀與知識整理網站。網站使用原生 HTML、CSS 與 JavaScript 建置，將每篇論文整理成獨立閱讀頁，提供摘要、依原文編排的章節重點、研究圖表與實驗數據。

網站目前收錄三篇論文：Dinomaly（CVPR 2025）、GauCho（CVPR 2025）及 Gradient Decomposition and Alignment for Incremental Object Detection（ICCV 2025）。

## 專案目前內容

| 論文 | 作者 | 年份／發表來源 | 詳細頁 |
|---|---|---|---|
| Dinomaly: The Less Is More Philosophy in Multi-Class Unsupervised Anomaly Detection | Jia Guo et al. | CVPR 2025 | `papers/dinomaly/index.html` |
| GauCho: Gaussian Distributions with Cholesky Decomposition for Oriented Object Detection | José Henrique Lima Marques et al. | CVPR 2025 | `papers/gaucho/index.html` |
| Gradient Decomposition and Alignment for Incremental Object Detection | Luo et al. | ICCV 2025 | `papers/gda-iod/index.html` |

每篇論文資料夾包含獨立詳細頁、原始 PDF、`notes.json` 及論文圖表。Dinomaly 的圖表目前位於 `images/`；GauCho 與 GDA-IOD 的圖表目前位於 `figures/`。新增論文時可統一採用 `images/`，但不得為了統一名稱而任意搬動或破壞既有路徑。

## 網站功能

- 首頁顯示實際收錄的論文卡片，桌面版雙欄、手機版單欄。
- 可依論文標題、作者及英文關鍵字即時搜尋。
- 論文卡片整張皆可點擊進入對應詳細頁。
- 論文詳細頁以章節標籤切換內容；初次開啟只顯示摘要，選取章節後在同一內容面板替換。
- 依各篇原始論文的實際章節整理內容，不共用固定章節模板。
- 重要原始圖表放在相關章節，支援點擊放大。
- 圖表必須從原始 PDF 完整擷取；尤其表格不可裁掉任何標題、欄位、資料列、註腳或圖例，擷取後須逐張與原 PDF 對照驗收。
- 提供原始 PDF 與可確認的論文來源連結。
- 提供回到頁面頂部功能。
- 專案另有 `topic.html` 主題頁及其 JavaScript 支援檔；目前論文資料的 `topics` 欄位皆為空陣列，首頁仍以論文卡片為主，不會自行建立預設主題卡片。

## 專案結構

```text
PaperNote/
├── AGENTS.md
├── README.md
├── index.html
├── topic.html
├── data/
│   ├── papers.json
│   └── topics.json
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── papers.js
│   │   ├── main.js
│   │   ├── topics.js
│   │   └── topic.js
│   └── images/
└── papers/
    ├── gaucho/
    │   ├── index.html
    │   ├── paper.pdf
    │   ├── notes.json
    │   └── figures/
    └── dinomaly/
        ├── index.html
        ├── paper.pdf
        ├── notes.json
        └── images/
```

## 如何在本機預覽

1. 解壓縮完整專案。
2. 以瀏覽器開啟根目錄 `index.html`。
3. 點選首頁論文卡片即可進入論文詳細頁。

## 如何新增一篇論文

1. 提供論文 PDF；若只提供純筆記，必須同時指出對應的論文標題。
2. AI 必須先閱讀 `AGENTS.md`，再檢查現有資料夾、索引與論文，確認不是重複收錄。
3. 依新論文 PDF 的實際書目資訊及章節結構建立獨立資料夾，不可直接複製其他論文的章節內容或數據。
4. 建立該篇論文的 `index.html`、`paper.pdf`、`notes.json` 與必要圖表；更新 `assets/js/papers.js` 及 `data/papers.json`。
5. 同步更新 `README.md`、`AGENTS.md`（若新增通用規則），並檢查首頁卡片、相對路徑、章節切換及圖表燈箱。
6. 完成檢查後回傳包含全部檔案的完整 ZIP。後續更新一律以最新 ZIP 為起點。

### PDF 圖表擷取完整性要求

- 表格圖片必須完整保留表格標題、全部欄位與資料列、最後一列、註記及必要腳註，不可自行刪除任意部分。
- 擷取前先檢視 PDF 整頁並確認真實邊界；不可直接套用固定座標或沿用舊圖裁切範圍。
- 跨欄表格須涵蓋整個寬度；跨頁表格須保留所有續表頁，不可只留下局部內容。
- 若單張裁切無法完整呈現，使用完整原頁影像或保留完整續表頁，不可切成不完整片段。
- 完成後逐張放大檢查四邊、標題、最左／右欄、首／末列及註腳，並與原 PDF 對照；發現任何缺漏就重新擷取。完整性優先於緊湊排版與檔案大小。

### PDF 與純筆記的處理差異

- **提供 PDF：** 依 PDF 核對標題、作者、年份、DOI、發表來源、章節、圖表與實驗數據。無法確認的資訊必須標示，不可猜測。
- **只提供純筆記：** 必須提供論文標題；只能更新已存在的論文，內容放入 `Personal Notes`。沒有 PDF 時不得宣稱已完成原文核對，也不可自行建立新論文。

## 資料來源與檔案責任

- `assets/js/papers.js`：首頁實際載入的論文索引來源。
- `data/papers.json`：論文索引的結構化資料副本，更新時需與 `papers.js` 保持一致。
- `papers/<slug>/notes.json`：單篇論文的章節筆記、個人筆記、核對資訊與更新紀錄。
- `papers/<slug>/index.html`：單篇論文閱讀頁。
- `papers/<slug>/paper.pdf`：使用者提供的論文 PDF 原檔。
- `papers/<slug>/images/` 或既有 `figures/`：從該篇原始 PDF 擷取的圖表。
- `AGENTS.md`：AI 維護本專案時必須遵循的規則。

## 視覺設計

首頁定位為 **Digital Knowledge Hub**，固定主視覺文案為：

- 視窗標籤：`▣ SYSTEM.exe —□×`
- 英文眉題：`SYSTEM ONLINE / KNOWLEDGE HUB`
- 中文主標：`知識正在載入，探索即將開始。`
- 中文說明：`一站式論文管理與閱讀系統，讓研究資訊更容易被整理、搜尋與重新發現。`
- 行動標語：`✦ ACCESS ◆ PROCESS ◆ CONNECT`
- 品牌收尾：`✧ PAPER NOTE ✧ KNOWLEDGE AT YOUR FINGERTIPS`

整體沿用 Retro Academic / Retro Pixel UI：天空藍格線背景、奶油白內容卡片、深海軍藍框線與硬陰影、淡藍及櫻花粉作為輔助色。詳細色票、字體與元件規則以 `AGENTS.md` 及 `assets/css/style.css` 為準。

### 首頁論文卡片規格

- `ALL DOCUMENTS` 標籤列與卡片之間至少保留 18px 間距。
- 整張卡片是唯一點擊區域；不另放「查看論文資訊」等文字連結。
- 卡片內所有文字統一為 15px。
- 桌面版雙欄、手機版單欄。

## 重要限制

- 這是靜態閱讀網站，不提供網頁端上傳、編輯、新增、刪除或永久儲存功能。
- 網站不能自行修改使用者電腦上的專案檔案；新增與更新由外部 AI 工具修改專案檔案完成。
- 不可虛構書目資訊、原文引用、PDF 頁碼、圖表或實驗數據。
- 每次收到改善意見，必須修改相關程式或文件，並同步更新 `AGENTS.md` 與本 README；不得只在對話中承諾。
