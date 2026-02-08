# 🚨 獸醫診斷系統 - 錯誤預防指南

> **⚠️ 重要：每次載入對話時請先閱讀此文件**

## 本次修復過程摘要

### 問題根源
在擴增疾病資料庫時，整合腳本的寫入邏輯截斷了 HTML 檔案，導致：
1. `</script>` 標籤遺失
2. 後續 JavaScript 代碼（SYNONYMS, DB 等）遺失
3. `</body></html>` 標籤遺失

### 修復方案
1. 從 git 恢復語法正確的版本 (`git show f05e5a3:vet-differential-diagnosis-v2.html`)
2. 重新整合所有批次疾病資料
3. 最終結果：272 個疾病，語法驗證通過

---

## ⛔ 必須避免的錯誤

### 1. 檔案寫入時截斷
**錯誤做法：**
```javascript
// 錯誤：直接找 }; 可能找錯位置
const lastBrace = html.lastIndexOf('};');
fs.writeFileSync('file.html', html.substring(0, lastBrace + 2) + newContent);
```

**正確做法：**
```javascript
// 正確：明確找到 DISEASE_INFO 的結尾模式
const endPattern = /\};\s*\n\s*(\/\/|const)/;
const endMatch = html.substring(diseaseInfoStart).match(endPattern);
const insertPos = diseaseInfoStart + endMatch.index;
```

### 2. 未驗證即儲存
**必須在儲存前驗證：**
```javascript
// 驗證 JavaScript 語法
try {
    new Function(scriptContent);
} catch (e) {
    console.log('語法錯誤，中止操作');
    process.exit(1);
}

// 驗證必要元素存在
if (!html.includes('</script>') || !html.includes('</body>')) {
    console.log('結構不完整，中止操作');
    process.exit(1);
}
```

### 3. 不同 JSON 格式混用
**此專案使用兩種格式：**

**格式 A（原始格式，鍵無引號）：**
```javascript
"disease-id": {
    zh: "中文名",
    en: "English Name",
    ...
}
```

**格式 B（新增格式，鍵有引號）：**
```javascript
"disease-id": {
    "zh": "中文名",
    "en": "English Name",
    ...
}
```

**解決方案：整合時轉換為統一格式**

---

## ✅ 安全操作流程

### 整合新疾病前
1. **備份當前檔案**
   ```bash
   cp vet-differential-diagnosis-v2.html vet-differential-diagnosis-v2-BACKUP-$(date +%Y%m%d).html
   ```

2. **驗證原始檔案語法**
   ```bash
   node -e "
   const fs = require('fs');
   const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
   const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
   new Function(script);
   console.log('語法 OK');
   "
   ```

3. **使用正確的整合腳本**
   - 參考 `final-integration.js` 的實現
   - 確保找到正確的插入位置
   - 整合前後都要驗證

### 整合後
1. **驗證 JavaScript 語法**
2. **驗證 HTML 結構完整性**
3. **在瀏覽器中測試**
4. **確認側邊欄載入正常**

---

## 🔧 有用的檢查命令

### 快速語法檢查
```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/);
if (!script) { console.log('無 script 標籤'); process.exit(1); }
try { new Function(script[1]); console.log('✓ 語法正確'); }
catch (e) { console.log('✗ 語法錯誤:', e.message); }
"
```

### 計算疾病數量
```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
const count = (html.match(/^\s+zh:\s*\"/gm) || []).length;
console.log('疾病數量:', count);
"
```

### 結構完整性檢查
```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('vet-differential-diagnosis-v2.html', 'utf8');
console.log('</script>:', html.includes('</script>') ? '✓' : '✗');
console.log('</body>:', html.includes('</body>') ? '✓' : '✗');
console.log('</html>:', html.includes('</html>') ? '✓' : '✗');
"
```

---

## 📁 重要檔案說明

| 檔案 | 說明 |
|------|------|
| `vet-differential-diagnosis-v2.html` | 主要工作檔案 |
| `final-integration.js` | 正確的疾病整合腳本 |
| `batch*.json` | 新增疾病的批次資料 |
| `temp-git-v2.html` | 從 git 恢復的乾淨版本 |

---

## 🔄 如果檔案再次損壞

1. **從 git 恢復**
   ```bash
   git show f05e5a3:vet-differential-diagnosis-v2.html > vet-differential-diagnosis-v2.html
   ```

2. **重新整合疾病**
   ```bash
   node final-integration.js
   ```

3. **驗證結果**
   ```bash
   # 開啟瀏覽器測試
   start vet-differential-diagnosis-v2.html
   ```

---

*最後更新：2024-02-06*
*修復者：Claude*
