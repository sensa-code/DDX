# 獸醫鑑別診斷系統 - Claude 專案指南

## ⚠️ 開始前必讀

**請先閱讀 `CLAUDE-ERROR-PREVENTION-GUIDE.md` 了解過去的錯誤和預防措施。**

## 專案概述

小動物鑑別診斷輔助系統 v2.0 - 一個基於 HTML/JavaScript 的單檔案應用程式，用於獸醫臨床症狀導向的疾病鑑別診斷。

## 主要檔案

- `vet-differential-diagnosis-v2.html` - 主應用程式（272個疾病）
- `CLAUDE-ERROR-PREVENTION-GUIDE.md` - 錯誤預防指南
- `final-integration.js` - 疾病整合腳本
- `batch*.json` - 新增疾病的批次資料

## 關鍵注意事項

### 1. 修改 HTML 檔案前
- 必須先備份
- 修改後必須驗證 JavaScript 語法
- 確認 `</script>`, `</body>`, `</html>` 存在

### 2. 整合新疾病
- 使用 `final-integration.js` 作為範本
- 不要直接用 `lastIndexOf('};')` 找插入點
- 整合後在瀏覽器測試側邊欄是否正常載入

### 3. 格式相容性
此專案的 DISEASE_INFO 使用不帶引號的鍵：
```javascript
"disease-id": {
    zh: "中文名",  // 注意：zh 沒有引號
    en: "英文名",
    ...
}
```

## 快速驗證命令

```bash
# 語法檢查
node -e "const fs=require('fs'); const h=fs.readFileSync('vet-differential-diagnosis-v2.html','utf8'); const s=h.match(/<script>([\s\S]*?)<\/script>/)[1]; new Function(s); console.log('OK');"

# 疾病數量
node -e "const fs=require('fs'); const h=fs.readFileSync('vet-differential-diagnosis-v2.html','utf8'); console.log((h.match(/^\s+zh:\s*\"/gm)||[]).length);"
```

## 損壞恢復

如果檔案損壞，從 git 恢復：
```bash
git show f05e5a3:vet-differential-diagnosis-v2.html > vet-differential-diagnosis-v2.html
node final-integration.js
```
