# 9/16軟體工程管理｜課堂筆記 Create by Hsin Yu 

## 一、課程進行方式
本課程不以傳統單向講授為主，而是希望增加課堂互動，主要採用：
* PBL（Problem-Based Learning，問題導向學習）
* 分組討論
* 即時回饋系統
* 業界實務分享
* AI 與軟體開發實作案例

老師認為 EMBA 學生已有豐富工作經驗，因此很適合透過 PBL，把不同產業經驗帶入討論。
課程原則是：「課堂上盡量把重要概念理解並帶走」，而不是回家再花大量時間複習。

**評量方面：**
* 沒有傳統考試。
* 有約兩次分組報告。
* 課堂互動與討論是重要學習方式。

## 二、翻轉教育與數位學習
課程採用部分「翻轉教室（Flipped Classroom）」概念。

* **傳統教學**：教師講授 → 學生被動聽課 → 回家做作業
* **翻轉教學**：課前看數位教材 → 課堂進行討論、問題解決與實作

**優點是：**
* 增加學生互動
* 提升學習參與度
* 將課堂時間用於思考與應用，而不只是接收知識

## 三、軟體工程第一單元的核心
第一單元主要回答四個問題：
1. 軟體開發的本質是什麼？
2. 為什麼軟體開發困難？
3. 為什麼軟體專案會失敗？
4. 有哪些原則、標準與最佳實務可以降低失敗？

**核心邏輯：**
軟體本質複雜 → 開發存在困難 → 專案容易失敗 → 累積實務經驗與學術研究 → 形成 Best Practices → 形成原則、流程與標準 → 降低專案失敗風險

## 四、軟體工程的知識體系與標準
軟體工程已發展數十年，因此逐漸成為一個成熟的專業領域。

**重要參考：SWEBOK (Software Engineering Body of Knowledge)**
軟體工程知識體系。概念類似 PMP 的 PMBOK，用來界定：
* 軟體工程包含哪些知識
* 軟體工程師需要具備哪些專業能力
* 軟體生命週期中有哪些重要活動

另外也會接觸 IEEE、ISO 等相關軟體工程標準。
**核心觀念**：一個工程領域成熟的重要特徵，就是逐漸形成共同的知識體系、流程與標準。

## 五、AI 對軟體開發的影響
老師特別強調，AI 正快速改變軟體開發。

AI 的發展可簡化理解為：
傳統程式規則 → Machine Learning → Deep Learning → Large Language Model → Generative AI → AI Agent

現在 AI 不只是「產生內容」，還可以執行工作，因此出現 Agent。
例如：需求分析 Agent → 系統分析與設計 Agent → Coding Agent → Testing Agent → Deployment Agent
也就是：**AI 正逐漸介入 SDLC 每一個階段。**

## 六、AI 驅動的 SDLC
**SDLC = Software Development Life Cycle (軟體開發生命週期)**

常見流程：
需求 → 分析 → 設計 → Coding → Testing → Deployment → Operation / Maintenance

現在每個階段都可能導入 AI。例如：需求整理、規格產生、程式碼生成、自動測試、程式碼檢查、部署、Regression Test、維運。
老師也提到「**規格驅動開發**」的概念：需求規格寫得越清楚 → AI 越能依規格執行 → 開發效率越高

## 七、資訊系統與企業管理
企業導入資訊系統的目的，不是「為了電腦化而電腦化」。
**真正目的**：資訊科技 → 改善 Business Process → 提高管理效率 → 提升決策品質 → 創造企業價值

**企業常見資訊系統：**
* ERP：Enterprise Resource Planning
* CRM：Customer Relationship Management
* SCM：Supply Chain Management
* TPS：Transaction Processing System
* MIS：Management Information System
* BI：Business Intelligence

**可以對應不同管理層級：**
* 基層營運 → TPS
* 中階管理 → MIS
* 高階決策 → BI / Decision Support

## 八、資訊化不能只是「把紙本搬到電腦」
這是課堂很重要的一個觀念。
* **錯誤方式**：原本人工流程 → 完全照搬 → 變成資訊系統 (這樣只是「電子化」，不一定有效率)
* **正確方式**：既有流程 → 分析問題 → 重新設計流程 → 再導入資訊系統

這就是 **BPR (Business Process Reengineering，企業流程再造)**。
**核心**：導入資訊科技之前，往往應該先檢查原本的流程是否合理。有時候解決系統效能問題，不一定要增加硬體，而是改變業務流程。

## 九、Efficiency 與 Effectiveness
老師特別區分兩個概念。

* **Efficiency (效率)**：關心「投入相同資源，可以產出多少？」(Input → Process → Output)。例如相同人力以前一天處理100筆訂單，資訊化後一天處理300筆。
* **Effectiveness (效益 / 有效性)**：關心「做出來的東西是不是對的？」。例如系統開發非常快，但使用者根本不需要 (效率很高，但效益很低)。

因此：
* Do things right = Efficiency
* Do the right things = Effectiveness

軟體開發不能只追求效率，也必須確保真正解決使用者問題。

## 十、何謂好的資訊系統品質？
「品質好」太抽象，因此必須拆成 Quality Attributes (品質屬性)。

1. **功能完整性 (Functional Completeness)**：系統是否包含使用者真正需要的功能。
2. **功能正確性 (Functional Correctness)**：功能執行結果是否正確。例如財務系統，帳務計算不能出錯。
3. **效能 (Performance)**：例如 Response Time、Throughput、Delay、同時使用人數。
4. **易用性 (Usability)**：例如操作是否直覺、是否容易找到功能、操作步驟是否過多、使用者學習成本高不高。
5. **可用性 (Availability)**：系統是否能持續提供服務 (例如 99.9%、99.99%)。Availability 越高，服務中斷時間越少。
6. **資訊安全 (Security)**：包含 Confidentiality, Integrity, Availability (CIA)。特別是涉及個資、財務、醫療、國防、關鍵任務系統時非常重要。
7. **可維護性 (Maintainability)**：系統上線不是結束，必須容易修改以應對 Bug、流程調整、新功能、新技術。
8. **可重用性 (Reusability)**：軟體公司要獲利，不能每次從零開始。部分系統重用可大幅降低成本與開發時間。

## 十一、品質屬性不是全部都做到最好
因為資源有限（時間、人力、預算），因此品質屬性必須排序。
可以用兩個維度：重要性 × 實現難度

| | 容易實現 | 難實現 |
| :--- | :--- | :--- |
| **高重要性** | 優先做 | 需要評估投入 |
| **低重要性** | 有餘力再做 | 優先刪除 |

**核心觀念**：Priority 很重要，不能所有需求都當第一優先。

## 十二、不同系統的品質優先順序不同
沒有一種品質排序適合所有系統。
* **醫療系統**：正確性、可用性、安全性非常重要
* **金融系統**：正確性、安全性極重要
* **一般 App**：Usability、Performance、Time-to-Market 可能更重要

這在軟體工程常稱為 **Quality Trade-off**。

## 十三、軟體公司的核心競爭力
老師提出三個核心因素（經典的專案三角）：
1. **Quality (品質/範圍)**：做得好不好
2. **Cost (成本)**：成本是否有競爭力
3. **Time (時間)**：能不能及時上市 (Time-to-Market 非常重要)

## 十四、軟體開發成本主要來自「人」
軟體主要成本通常是 **人力成本**。
專案成本常以 Person-Hour / Person-Day / Person-Month 估算。
簡化公式：`專案成本 ≈ 人數 × 投入時間 × 人力單價`
**結論**：找對的人非常重要。

## 十五、影響軟體公司競爭力的三個因素
1. **People (人)**：專業能力、技術、溝通、管理、態度、團隊合作 (Hard Skills + Soft Skills)。
2. **Process (流程與制度)**：SOP、開發流程、Review、文件、模板、品質與專案管理制度 (Organizational Process Assets)。
3. **Technology (技術與 Know-how)**：技術架構、平台、工具、Framework、Domain Knowledge、AI 工具。

核心架構：**People + Process + Technology**

## 十六、軟體專案成功的定義
傳統專案成功通常看：
* **如期 (On Time)**
* **如本 (On Budget)**
* **如質 (Required Quality / Scope)**

嚴重偏離 Time, Cost, Scope/Quality，就可能被認為專案失敗。

## 十七、軟體專案失敗的重要原因
課堂投票中，大家認為最重要的兩項是：
1. **需求不完整、不明確 (Incomplete / Ambiguous Requirements)**：溝通落差造成大量修改。
2. **開發團隊不了解問題領域 (Insufficient Domain Knowledge)**：不理解使用者工作、Business Process、Domain Rules、真正痛點，導致做出「不能用」的系統。

## 十八、需求分析為什麼重要？
使用者不一定能清楚說出真正需求。因此 SA (System Analyst) 要：
了解流程 → 發現問題 → 分析需求 → 澄清需求 → 確認範圍 → 形成規格
需求規格確認後，才能進入後續開發階段。

## 十九、軟體生命週期的重要觀念
簡化 SDLC：需求分析 → 系統分析 → 系統設計 → Coding → Testing → Deployment → Operation → Maintenance
**核心**：上線不是結束，而是維運的開始。

## 二十、本堂課最重要的邏輯
使用者需求 → Business Process → 需求分析 → 軟體開發 → 品質屬性 → Time / Cost / Quality → 使用者滿意度 → 企業價值與競爭力
影響開發成功與否的核心：**People + Process + Technology**

---
## 考前快速記憶版
這堂課最值得記住 8 個概念：
1. 軟體工程的目的，是降低軟體開發失敗的風險。
2. 資訊系統的目的，是改善 Business Process，而不是單純電腦化。
3. BPR 是 Business Process Reengineering。
4. Efficiency = 把事情做得有效率；Effectiveness = 做對的事情。
5. 軟體品質包含 Functional Correctness、Performance、Usability、Availability、Security、Maintainability、Reusability。
6. 品質屬性需要依「重要性 × 難度」排序，不可能全部做到最好。
7. 軟體公司的競爭力核心是 Quality、Cost、Time。
8. 軟體專案失敗最常見問題之一，是需求不清楚與缺乏 Domain Knowledge。

**總結一句話：**
「好的軟體，不只是程式寫得好，而是能在合理的時間與成本下，正確解決使用者真正的問題，並且能長期安全、穩定、容易維護地運作。」

---
此網站由 jackson 建立 有任何問題請mail 到 [cjs930@gmail.com](mailto:cjs930@gmail.com)