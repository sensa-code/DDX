# 獸醫診斷輔助系統 - 驗證工具使用說明

本目錄包含用於驗證獸醫診斷輔助系統資料完整性和功能正確性的自動化工具。

---

## 驗證報告檔案

### 主要報告

1. **VALIDATION-SUMMARY.md** (6.9 KB) ⭐ 推薦閱讀
   - 驗證總結和執行摘要
   - 資料品質評分
   - 發現問題和建議
   - 系統可用性評估

2. **validation-report.md** (7.4 KB)
   - 完整詳細驗證報告
   - 包含所有統計數據
   - 疾病列表（前50個）
   - 孤立別名詳細清單

3. **syntax-check-report.md** (268 B)
   - 快速語法檢查報告
   - 初步語法掃描結果

---

## 驗證工具腳本

### 主要驗證腳本

#### 1. extract-and-validate.js (推薦使用)

**功能**: 全面的資料驗證工具

**執行方式**:
```bash
cd "E:\CLAUDE CODE\BOOK"
node extract-and-validate.js
```

**驗證項目**:
- ✅ JavaScript語法驗證
- ✅ 疾病資料完整性檢查（zh, en, definition欄位）
- ✅ 疾病ID唯一性驗證
- ✅ 別名對照表驗證
- ✅ 新增疾病驗證（8個Clinical Veterinary Advisor疾病）
- ✅ 統計資料生成

**輸出**:
- 控制台輸出詳細驗證結果
- 生成 `validation-report.md` 完整報告

---

#### 2. find-syntax-errors.js

**功能**: 查找和修正JavaScript語法錯誤

**執行方式**:
```bash
node find-syntax-errors.js
```

**功能**:
- 掃描缺少逗號的疾病物件結尾
- 自動生成修正後的臨時文件
- 測試修正是否成功

**輸出**:
- 控制台輸出錯誤位置和修正建議
- 生成 `temp-data-fixed.js` （如有錯誤）

---

#### 3. simple-validation.js

**功能**: 快速語法檢查

**執行方式**:
```bash
node simple-validation.js
```

**功能**:
- 快速掃描基本語法問題
- 初步檢查物件結構

**輸出**:
- 控制台輸出基本檢查結果
- 生成 `syntax-check-report.md`

---

#### 4. validation-script.js

**功能**: 舊版驗證腳本（使用vm模組）

**說明**: 此腳本嘗試在沙箱環境中執行JavaScript，但可能遇到某些語法特性不支持的問題。建議使用 `extract-and-validate.js` 代替。

---

## 使用流程

### 首次驗證

```bash
# 1. 進入專案目錄
cd "E:\CLAUDE CODE\BOOK"

# 2. 執行完整驗證
node extract-and-validate.js

# 3. 查看驗證報告
# 閱讀 VALIDATION-SUMMARY.md 了解總結
# 閱讀 validation-report.md 了解詳細資料
```

### 修正問題後重新驗證

```bash
# 1. 修正HTML檔案中的問題

# 2. 重新執行驗證
node extract-and-validate.js

# 3. 確認問題已解決
```

### 快速語法檢查

```bash
# 如果只需要檢查語法，使用快速檢查
node simple-validation.js
```

---

## 驗證結果解讀

### ✅ 通過標準

- JavaScript語法無錯誤
- 所有疾病包含必要欄位（zh, en, definition）
- 所有疾病ID唯一
- 別名對照表中的目標疾病都存在

### ⚠️ 警告標準

- 部分別名指向不存在的疾病（孤立別名）
- 部分疾病缺少可選欄位
- 別名覆蓋率低於80%

### ❌ 失敗標準

- JavaScript語法錯誤導致無法載入
- 疾病ID重複
- 必要欄位缺失超過10%

---

## 常見問題

### Q1: 驗證腳本執行失敗怎麼辦？

**A**: 檢查以下項目：
1. 確認 Node.js 已安裝（需要 v14 以上）
2. 確認檔案路徑正確
3. 查看錯誤訊息，定位問題行號
4. 使用 `find-syntax-errors.js` 找出語法錯誤

### Q2: 孤立別名需要全部修正嗎？

**A**: 不一定。優先處理：
1. 常用醫學縮寫（DKA, IMHA, CHF等）
2. 中文俗語別名（腎衰、心衰等）
3. 其他較少使用的別名可後續補充

### Q3: 新增疾病一定要加入嗎？

**A**: 不一定。根據臨床需求：
- 優先: 常見疾病（herpesvirus, helicobacter）
- 次要: 少見疾病（hypospadias, 5-fluorouracil toxicosis）

### Q4: 如何新增疾病到系統？

**A**: 按照以下格式在 `DISEASE_INFO` 中新增：

```javascript
"disease-id": {
  zh: "中文名稱",
  en: "English Name",
  definition: "疾病定義說明...",
  synonyms: ["別名1", "別名2"],
  epidemiology: {
    species: "犬/貓/犬貓皆可",
    age: "年齡範圍",
    sex: "性別傾向",
    riskFactors: ["風險因子1", "風險因子2"]
  },
  clinicalPresentation: {
    history: ["病史1", "病史2"],
    physicalExam: ["理學檢查1", "理學檢查2"]
  },
  // ... 其他欄位
}
```

然後在 `DISEASE_ALIASES` 中新增別名映射：

```javascript
"別名": "disease-id",
"DKA": "disease-id"
```

---

## 驗證工具技術細節

### 使用的Node.js模組

- `fs` - 檔案系統操作
- `vm` - JavaScript虛擬機（validation-script.js）

### 驗證邏輯

1. **語法驗證**: 使用 `require()` 動態載入提取的JavaScript
2. **完整性檢查**: 遍歷所有疾病物件檢查必要欄位
3. **唯一性驗證**: 使用 `Set` 偵測重複ID
4. **別名驗證**: 交叉比對 `DISEASE_ALIASES` 和 `DISEASE_INFO`

### 效能考量

- 檔案大小: 約1 MB HTML
- 執行時間: 約2-3秒
- 記憶體使用: 約50-100 MB

---

## 維護建議

### 定期驗證

建議在以下情況執行驗證：

1. **每次新增疾病後**
2. **每次修改疾病資料後**
3. **每週定期檢查一次**
4. **正式發佈前**

### 版本控制

建議保留每次驗證的報告：

```bash
# 重命名報告檔案加上日期
cp validation-report.md validation-report-2026-02-04.md
cp VALIDATION-SUMMARY.md VALIDATION-SUMMARY-2026-02-04.md
```

### 自動化

可以設定Git pre-commit hook自動執行驗證：

```bash
# .git/hooks/pre-commit
#!/bin/bash
cd "E:\CLAUDE CODE\BOOK"
node extract-and-validate.js
if [ $? -ne 0 ]; then
  echo "驗證失敗，請修正問題後再提交"
  exit 1
fi
```

---

## 已知問題

### 1. 路徑編碼問題

- **問題**: Windows路徑中的反斜線需要轉義
- **解決**: 腳本中使用 `\\` 或改用正斜線 `/`

### 2. 中文字元編碼

- **問題**: 某些終端可能顯示中文亂碼
- **解決**: 使用 UTF-8 編碼的終端，或查看生成的 .md 報告

### 3. 大檔案處理

- **問題**: HTML檔案超過256KB時 Read 工具無法讀取
- **解決**: 使用提取腳本分段處理或直接操作檔案系統

---

## 聯絡資訊

如有問題或建議，請聯絡：

- **開發團隊**: Claude Code Agent
- **專案位置**: E:\CLAUDE CODE\BOOK
- **最後更新**: 2026-02-04

---

## 授權

本驗證工具為獸醫診斷輔助系統的配套工具，使用相同的授權條款。

---

**驗證工具版本**: 2.0
**相容系統版本**: v2.0
**Node.js 需求**: v14.0.0 或更高
**最後測試**: 2026-02-04
