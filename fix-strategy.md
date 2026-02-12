# 語法錯誤修復策略

## 問題診斷

**位置**: 第5927-6019行

**問題**: 有一大段別名定義（key-value pairs）直接放在DISEASE_INFO物件內，但它們不是有效的疾病物件。

```javascript
const DISEASE_INFO = {
  "trigeminal-neuritis": {
    // ... 正常的疾病定義
  },

  // 問題開始：這些不是疾病物件
  "IVDD": "intervertebral-disc-disease",
  "椎間盤突出": "intervertebral-disc-disease",
  // ... 更多別名
  "mandibular paralysis": "trigeminal-neuritis"  // ← 缺少逗號
  // ===== From gastrointestinal-diseases.js =====

  "gastric-dilatation-volvulus": {
    // ... 下一個疾病定義
  }
}
```

## 修復方案

### 選項1：刪除這段別名定義（推薦）

因為：
1. 這些別名應該在 SYNONYMS 物件中，而不是 DISEASE_INFO
2. SYNONYMS 已經有完整的別名定義了
3. 這段代碼是錯誤的合併殘留

**操作**: 刪除第5927-6019行（包含註解）

### 選項2：將別名移到正確位置

如果這些別名在SYNONYMS中缺失，應該：
1. 提取這些別名
2. 合併到SYNONYMS物件中
3. 從DISEASE_INFO中刪除

## 執行計劃

1. **備份當前檔案**
2. **刪除第5927-6019行**
3. **驗證語法**
4. **檢查SYNONYMS是否包含這些別名**
5. **測試網頁**

## 需要刪除的行數

從第5927行到第6019行，共93行。

修復後：
- 第5925行: `trigeminal-neuritis` 結束 `},`
- 第5926行: 空行
- 第5927行（原6020行）: `// ===== From gastrointestinal-diseases.js =====`
