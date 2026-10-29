MMI 現行（V3.0）完整的 8 大領域（Domains）   
如果您在準備或研究目前的 CMMI 評鑑與範疇選擇，現行架構總共涵蓋了 8 個領域：   
Development (DEV)：產品與系統開發（軟體、硬體等工程） 
Services (SVC)：服務維運與客戶交付管理   
Suppliers (原 SPM)：供應鏈與外部供應商管理   
People (PPL)：人員能力、職能發展與人才資本管理（對應早期 People CMM 精神）   
Data：資料治理與資料品質管理（V3.0 新增的熱門領域）
Safety：安全性（功能安全）領域   Security：資安防護與威脅漏洞管理   
Virtual：虛擬協作與遠距工作支援

CMMI V2,評鑑的基準模型有哪些？CMMI-DEV, CMMI-SVC, CMMIOO-SPM, CMMI-PPL?還有哪些？

在 **CMMI V2.0（及後續 V2.1+ 版本）** 的架構設計中，概念與舊版（V1.3）有很大的不同。V2.0 不再將不同領域視為完全獨立、各自為政的獨立模型，而是轉為「一個核心模型（One Core Model）搭配多種預定義視圖（Predefined Views）」的架構，旨在讓組織能根據自身的商業需求彈性組合。

您提到的 `CMMI-DEV`、`CMMI-SVC` 以及提到的 `CMMIOO-SPM`（通常指 **Supplier Management View**）、`CMMI-PPL`（**People View**）均屬於 CMMI V2.0 產品套件中的重要組成部分。以下為您完整梳理 CMMI V2 目前主要的基準模型與視圖：

---

### 一、 核心預定義視圖（Predefined Views / Baseline Models）

#### 1. CMMI-DEV (Development View，開發視圖)

* **適用對象**：以軟體工程、系統工程、硬體工程等**產品與服務研發**為主導的組織。
* **核心焦點**：涵蓋從需求管理、技術解決方案（TS）、產品整合（PI）、驗證與確認（V&V），到專案規劃與專案監控的完整生命週期。它是目前能見度最高、應用最廣的視圖（延續並優化了舊版 CMMI-DEV V1.3 的精神）。

#### 2. CMMI-SVC (Services View，服務視圖)

* **適用對象**：以**服務交付、維運、客戶支援與管理**為核心業務的組織（如 IT 委外、雲端服務、維運代管、金融或醫療等連續性服務產業）。
* **核心焦點**：強調服務系統的建立、連續性、可用性、事件與問題解決、以及服務交付與協議的一致性。

#### 3. Supplier Management / SPM (供應商管理視圖)

* **適用對象**：高度依賴外部供應商、外包商或複雜供應鏈體系的企業。
* **核心焦點**：在 V2.0 中被獨立或強化為一個關鍵視圖（或特定能力域），專門用來管理採購協議、監控外部供應商履約狀況、確保外包交付品質，降低企業供應鏈風險。

#### 4. CMMI-PPL (People View / CMMI People，人員視圖)

* **適用對象**：希望深化**人才資本管理、組織文化與團隊能力建構**的企業。
* **核心焦點**：聚焦於人才的招募、保留、績效與職能發展、領導力培育、消除工作流程瓶頸以及團隊協作。這相當於整合了早期 CMMI-PCMM（People CMM）的概念，在 V2.0 體系中作為人員與組織能力的專屬視圖。

---

### 二、 常見的複合與延伸組合

除了單一領域的視圖外，CMMI V2.0 允許且鼓勵組織依據業務型態進行**複合評鑑（Combined Appraisals）**：

* **CMMI-DEV + SVC（開發與服務混合視圖）**：
許多現代企業（如軟體即服務 SaaS 廠商）既要「開發產品」，又要「維運線上服務」。此時組織可以選擇同時導入 DEV 與 SVC 的實踐領域，進行一次性的綜合評鑑。
* **多視圖整合評鑑**：
實務上，大型企業也常將 **DEV（開發）** 與 **SPM（供應商管理）** 或 **PPL（人員）** 進行結合，以因應大型系統整合專案中複雜的外包與團隊管理需求。

---

### 三、 補充：與舊版（V1.3）的對照

* **CMMI-ACQ（Acquisition，採購模型）**：在舊版 V1.3 中曾是一個獨立模型（專門針對買方/發包方）。在 CMMI V2.0 的架構演進中，ACQ 的核心精神已被大量吸收並融入至 **Supplier Management** 相關實踐領域與視圖中。

### 總結

在 CMMI V2.0 時代，官方已不再強調「好幾個各自獨立的獨立模型」，而是將其統整為**同一個核心模型庫**，並透過 **DEV（開發）**、**SVC（服務）**、**Supplier Management（供應商管理）**、**People（人員）** 等不同的 **Views（視圖）** 來切入與評鑑。組織在申請評鑑（Benchmark Appraisal）時，會明確宣告本次評鑑所採用的模型視圖範圍。

請說明 CMMI v2.x 在敏捷 (Agile/Scrum) 開發環境下進行流程裁適與評鑑準備的實務做法。

早期 CMMI（如 v1.3 以前）常被貼上「沉重、官僚、只適合瀑布流」的標籤，但 **CMMI v2.x 在設計上已全面擁抱敏捷（Agile）與 DevOps**。v2.x 的核心精神是「重實質成效與意圖，輕形式與文書」（Focus on performance and intent rather than paperwork）。

在敏捷/Scrum 環境下進行 CMMI v2.x 的流程裁適與評鑑準備，其核心實務做法可歸納為以下四個關鍵構面：

---

### 一、 核心對應：將 Scrum 儀式與產出對齊 CMMI v2.x 實踐領域 (PAs)

敏捷團隊不需要為了迎合 CMMI 而額外寫一堆瀑布式文件，而是將日常的 **Scrum 實務直接作為 CMMI 的具體證據**：

| CMMI v2.x 實踐領域 (PA) | 對應的 Scrum / 敏捷對應實務 (Evidence) |
| --- | --- |
| **RDM (需求開發與管理)** | **Product Backlog（產品待辦清單）** 與 User Story。需求變更透過 Backlog Refinement 即時調整與優先級排序。 |
| **PLAN (規劃)** | **Sprint Planning（衝刺規劃會議）** 與 Release Plan。使用估算點數（Story Points）與燃盡圖（Burn-down Chart）。 |
| **MC (專案監控與控制)** | **Daily Standup（每日站會）**、Sprint Review 與看板（Kanban Board）追蹤，即時發現落後並調整。 |
| **VER / VAL (驗證與確認)** | **CI/CD 自動化測試**、Code Review（VER）、以及每次 Sprint 結束時的 **Demo 與使用者驗收回饋**（VAL）。 |
| **RSK (風險管理)** | **Retro（回顧會議）** 中識別的阻礙（Blockers）、技術債與每日站會中浮現的風險點。 |

---

### 二、 流程裁適（Tailoring）的實務做法

在 ML3 架構下，組織必須擁有「標準流程（OSSP）」，但對於敏捷團隊，裁適指南（Tailoring Guidelines）扮演關鍵角色：

1. **定義敏捷專用生命週期範本**：
組織的 OSSP 內應明文定義「敏捷/Scrum 軌道（Agile Track）」。允許專案在符合以下條件時採用敏捷軌道：
* 需求具高度不確定性且頻繁變更。
* 客戶/產品負責人（PO）能高度參與並持續驗收。


2. **工作產物（Work Products）的輕量化轉型**：
* 傳統的《軟體需求規格書 (SRS)》裁適為 **Epic / Feature / User Story** 結構化存在於 Jira 或 GitHub Projects 中。
* 傳統的《整合測試報告》裁適為 **自动化測試套件執行結果與 CI 儀表板截圖**。



---

### 三、 評鑑準備的關鍵心法（如何向主導評鑑師證明合規）

在迎接 CMMI v2.x 正式評鑑（Benchmark Appraisal）時，敏捷團隊的準備重點在於「展現規律性與數據化」：

* **不是看「厚重的文件」，而是看「系統痕跡」**：
評鑑師訪談 (Interview) 時，常會直接抽查 Jira / Azure DevOps 的歷史紀錄，看 User Story 的 Acceptance Criteria 是否清晰、Sprint 變更有無記錄、Retro 結論有無落實追蹤。
* **強調「持續交付與價值評估 (Performance)」**：
CMMI v2.x 強調績效（Performance）。敏捷團隊展現「小步快跑、快速失敗、從數據中學習」的速度與品質指標（如 Velocity, Defect Density, Cycle Time），往往比傳統專案更能獲得高分評價。

---

### 四、 常見的敏捷導入 CMMI 誤區

* **誤區一：為了過評鑑而補做瀑布文件**。這完全違背了敏捷精神，也失去了導入 CMMI 改善體質的意義。正確做法是「用敏捷的工具與工具鏈產出，對應滿足 CMMI 的 Practice 意圖」。
* **誤區二：忽視版本控制與可追溯性 (Traceability)**。敏捷雖快，但從 Business Goal -> Epic -> User Story -> Code Commit -> Test Case 的上下游關聯性（Traceability）仍必須透過工具鏈保持清晰，否則在評鑑 RDM 時容易失分。