# 網頁空白問題診斷指南

## 快速診斷步驟

### 方法一：使用瀏覽器診斷工具（推薦）

1. **打開主頁面**
   ```
   在瀏覽器中打開：vet-differential-diagnosis-v2.html
   ```

2. **打開開發者工具**
   ```
   按 F12（Windows/Linux）
   或 Cmd + Option + I（Mac）
   ```

3. **打開診斷工具**
   在開發者工具的 Console 標籤中輸入：
   ```javascript
   window.open("browser-diagnostic.html")
   ```

4. **執行完整診斷**
   - 在彈出的診斷工具視窗中
   - 點擊「▶ 執行完整診斷」按鈕
   - 查看診斷結果

5. **嘗試修復**
   - 如果診斷顯示 sidebar 內容為空
   - 點擊「🔄 手動執行 renderSidebar()」按鈕
   - 查看是否出現內容

### 方法二：手動檢查（適合進階用戶）

1. **打開主頁面並打開開發者工具（F12）**

2. **查看Console錯誤**
   - 切換到 Console 標籤
   - 重新載入頁面（F5）
   - 尋找紅色的錯誤訊息
   - 截圖錯誤訊息

3. **檢查資料載入**
   在 Console 中輸入以下命令：

   ```javascript
   // 檢查DB物件
   DB

   // 檢查症狀數量
   DB.symptoms.length

   // 查看前5個症狀
   DB.symptoms.slice(0, 5)

   // 檢查分類
   DB.sections

   // 檢查sidebar元素
   document.getElementById("sidebar")

   // 檢查sidebar內容
   document.getElementById("sidebar").innerHTML

   // 檢查sidebar是否可見
   const sidebar = document.getElementById("sidebar");
   const style = getComputedStyle(sidebar);
   console.log("display:", style.display);
   console.log("visibility:", style.visibility);
   console.log("width:", sidebar.offsetWidth);
   console.log("height:", sidebar.offsetHeight);
   ```

4. **手動觸發渲染**
   ```javascript
   renderSidebar()
   ```

5. **檢查渲染結果**
   ```javascript
   document.getElementById("sidebar").innerHTML.length
   document.querySelectorAll(".symptom-btn").length
   ```

## 常見問題與解決方案

### 問題1: Console顯示 "DB is not defined"

**原因**: JavaScript 未正確載入或執行失敗

**解決方案**:
1. 確認檔案完整，未損壞
2. 嘗試硬性重新載入：Ctrl + Shift + R（Windows）或 Cmd + Shift + R（Mac）
3. 清除瀏覽器快取
4. 嘗試不同的瀏覽器（Chrome, Firefox, Edge）

### 問題2: DB存在但 sidebar.innerHTML 為空

**原因**: renderSidebar() 未執行或執行失敗

**解決方案**:
1. 在 Console 手動執行 `renderSidebar()`
2. 查看是否出現錯誤訊息
3. 檢查 `DB.symptoms` 和 `DB.sections` 是否有資料

### 問題3: sidebar 有內容但看不見

**原因**: CSS 顯示問題

**解決方案**:
在 Console 檢查：
```javascript
const sidebar = document.getElementById("sidebar");
sidebar.style.display = "block";
sidebar.style.visibility = "visible";
sidebar.style.width = "320px";
```

### 問題4: 症狀按鈕數量為 0

**原因**: 渲染邏輯問題或資料結構問題

**檢查**:
```javascript
// 檢查是否有症狀資料
DB.symptoms.length

// 檢查第一個症狀的結構
DB.symptoms[0]

// 應該包含: id, zhName, enName, section, differentials

// 檢查sections
DB.sections

// 手動重新渲染
renderSidebar()
```

## 診斷報告解讀

執行診斷工具後，您會看到以下類型的訊息：

- ✅ **綠色勾號**: 檢查通過，該部分正常
- ❌ **紅色叉號**: 發現問題，需要關注
- ⚠️ **黃色警告**: 可能有問題，建議檢查
- ℹ️ **藍色資訊**: 一般資訊，供參考

### 關鍵指標

1. **DB.symptoms.length**: 應該 > 50
   - 如果 < 20，資料載入可能有問題

2. **sidebar.innerHTML.length**: 應該 > 10000
   - 如果 = 0，sidebar 完全沒有內容
   - 如果 < 1000，渲染可能不完整

3. **症狀按鈕數量**: 應該 > 50
   - 如果 = 0，渲染失敗
   - 如果 < 預期數量，部分渲染失敗

## 如果所有方法都失敗

1. **備份檔案**
   ```
   複製 vet-differential-diagnosis-v2.html 到安全位置
   ```

2. **檢查檔案完整性**
   - 檔案大小應該約 1MB
   - 行數應該約 26,814 行

3. **嘗試使用備份檔案**
   ```
   如果有 vet-differential-diagnosis-v2.html.backup
   嘗試開啟此檔案
   ```

4. **聯絡技術支援**
   - 提供診斷工具的完整輸出
   - 提供 Console 的錯誤訊息截圖
   - 說明使用的瀏覽器和版本

## 預防措施

1. **定期備份**
   ```bash
   cp vet-differential-diagnosis-v2.html vet-differential-diagnosis-v2.html.backup
   ```

2. **使用現代瀏覽器**
   - Chrome 90+
   - Firefox 88+
   - Edge 90+
   - Safari 14+

3. **避免編輯HTML檔案**
   - 除非您了解JavaScript和HTML
   - 編輯前務必備份

## 檔案清單

診斷過程中創建的輔助檔案：

- `DEBUGGING-REPORT.md` - 詳細診斷報告
- `browser-diagnostic.html` - 瀏覽器診斷工具
- `test-page-loading.js` - Node.js 測試腳本
- `find-db-structure.js` - 資料結構檢查腳本
- `HOW-TO-DIAGNOSE.md` - 本指南

## 技術細節（供開發者參考）

### 頁面初始化流程

1. HTML 載入
2. CSS 樣式套用
3. JavaScript 執行
4. DB 物件定義（第23462行）
5. DOMContentLoaded 事件觸發（第26462行）
6. renderSidebar() 執行（第24820行）
7. 側邊欄渲染完成

### renderSidebar() 函數邏輯

```javascript
function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  let html = "";
  const sectionMap = {};

  // 建立section分組
  DB.symptoms.forEach(s => {
    if (!sectionMap[s.section]) sectionMap[s.section] = [];
    sectionMap[s.section].push(s);
  });

  // 渲染每個section
  for (const sec in sectionMap) {
    // 生成HTML...
  }

  sidebar.innerHTML = html;

  // 綁定事件監聽器...
}
```

### 可能失敗點

1. `DB.symptoms` 未定義或為空陣列
2. `DB.sections` 未定義
3. `sectionMap` 建立失敗
4. HTML 生成過程拋出異常
5. `innerHTML` 設定失敗
6. 事件監聽器綁定失敗

### 除錯建議

在 renderSidebar() 開頭添加 console.log：

```javascript
function renderSidebar() {
  console.log("=== renderSidebar START ===");
  console.log("DB.symptoms:", DB.symptoms);
  console.log("DB.sections:", DB.sections);

  const sidebar = document.getElementById("sidebar");
  console.log("sidebar element:", sidebar);

  // ... 原有代碼 ...

  console.log("Generated HTML length:", html.length);
  sidebar.innerHTML = html;
  console.log("=== renderSidebar END ===");
}
```

---

**最後更新**: 2026-02-04
**版本**: 1.0
