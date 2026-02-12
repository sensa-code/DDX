# 快速修復指南

## 3分鐘快速診斷

### 步驟1: 打開頁面和開發者工具
1. 用瀏覽器打開 `vet-differential-diagnosis-v2.html`
2. 按 `F12` 打開開發者工具
3. 點擊 `Console` 標籤

### 步驟2: 執行診斷命令

在 Console 中依序輸入並按 Enter：

```javascript
// 1. 檢查資料
DB.symptoms.length
```
**預期結果**: 應該顯示一個數字 (例如: 61)
- ❌ 如果顯示錯誤或 undefined → **問題A**
- ✅ 如果顯示數字 → 繼續下一步

```javascript
// 2. 檢查sidebar元素
document.getElementById("sidebar").innerHTML.length
```
**預期結果**: 應該顯示一個大數字 (例如: 15000+)
- ❌ 如果顯示 0 或很小的數字 → **問題B**
- ✅ 如果顯示大數字 → **問題C**

```javascript
// 3. 檢查可見性
const s = document.getElementById("sidebar");
console.log("display:", getComputedStyle(s).display);
console.log("width:", s.offsetWidth);
```
**預期結果**: display應該不是"none"，width應該>0
- ❌ 如果 display 是 "none" → **問題C**
- ❌ 如果 width 是 0 → **問題C**

---

## 快速修復方案

### 問題A: DB 未定義或資料缺失

**快速修復**:
```javascript
// 在 Console 輸入
location.reload(true)
```
- 清除快取並重新載入
- 如果仍失敗，檔案可能損壞，使用備份檔案

### 問題B: sidebar 內容為空

**快速修復1**: 手動觸發渲染
```javascript
// 在 Console 輸入
renderSidebar()
```
等待幾秒，然後檢查：
```javascript
document.querySelectorAll(".symptom-btn").length
```
如果顯示 > 0，問題已修復！

**快速修復2**: 如果上述無效
```javascript
// 打開診斷工具
window.open("browser-diagnostic.html")
```
點擊「執行完整診斷」，查看詳細錯誤

### 問題C: sidebar 有內容但不可見

**快速修復**:
```javascript
// 在 Console 輸入
const sidebar = document.getElementById("sidebar");
sidebar.style.display = "block";
sidebar.style.visibility = "visible";
sidebar.style.width = "320px";
sidebar.style.minWidth = "320px";
```

---

## 一鍵診斷腳本

複製以下完整腳本到 Console 並按 Enter：

```javascript
(function() {
  console.clear();
  console.log("🔍 開始快速診斷...\n");

  // 檢查1: DB物件
  if (typeof DB === 'undefined') {
    console.error("❌ DB 未定義 - 資料載入失敗");
    console.log("💡 建議: 重新載入頁面 (Ctrl+Shift+R)");
    return;
  }
  console.log(`✅ DB物件存在: ${DB.symptoms.length} 個症狀`);

  // 檢查2: sidebar元素
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) {
    console.error("❌ sidebar 元素不存在");
    return;
  }
  console.log("✅ sidebar元素存在");

  // 檢查3: sidebar內容
  const contentLength = sidebar.innerHTML.length;
  console.log(`📊 sidebar內容長度: ${contentLength} 字元`);

  if (contentLength === 0) {
    console.warn("⚠️ sidebar 內容為空，嘗試渲染...");
    try {
      renderSidebar();
      console.log("✅ 已執行 renderSidebar()");
      setTimeout(() => {
        const newLength = sidebar.innerHTML.length;
        const buttons = document.querySelectorAll(".symptom-btn").length;
        console.log(`📊 渲染後: ${newLength} 字元, ${buttons} 個按鈕`);
        if (buttons > 0) {
          console.log("✅ 修復成功！頁面應該正常了");
        } else {
          console.error("❌ 渲染失敗，請查看上方錯誤訊息");
        }
      }, 500);
    } catch (e) {
      console.error("❌ 渲染時發生錯誤:", e.message);
    }
  } else {
    const buttons = document.querySelectorAll(".symptom-btn").length;
    console.log(`✅ sidebar 有內容: ${buttons} 個按鈕`);

    // 檢查4: 可見性
    const style = getComputedStyle(sidebar);
    console.log(`📊 display: ${style.display}, visibility: ${style.visibility}`);
    console.log(`📊 尺寸: ${sidebar.offsetWidth}x${sidebar.offsetHeight}px`);

    if (style.display === 'none' || sidebar.offsetWidth === 0) {
      console.warn("⚠️ sidebar 被隱藏，嘗試修復...");
      sidebar.style.display = "block";
      sidebar.style.visibility = "visible";
      sidebar.style.width = "320px";
      console.log("✅ 已修復 sidebar 可見性");
    } else {
      console.log("✅ sidebar 可見");
      console.log("\n🎉 所有檢查通過！頁面應該正常運作");
    }
  }

  console.log("\n若仍有問題，請執行：window.open('browser-diagnostic.html')");
})();
```

---

## 瀏覽器相容性

確保使用以下瀏覽器之一：

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+

**檢查瀏覽器版本**:
在 Console 輸入:
```javascript
navigator.userAgent
```

---

## 緊急聯絡清單

### 選項1: 使用診斷工具
```
打開: browser-diagnostic.html
點擊: 執行完整診斷
```

### 選項2: 查看詳細指南
```
閱讀: HOW-TO-DIAGNOSE.md
或: DEBUGGING-REPORT.md
```

### 選項3: 使用備份檔案
```
如果存在: vet-differential-diagnosis-v2.html.backup
嘗試開啟此檔案
```

---

## 最常見的2個問題

### 90%的情況：需要手動觸發渲染
```javascript
renderSidebar()
```

### 10%的情況：瀏覽器快取問題
```
按 Ctrl + Shift + R (Windows)
或 Cmd + Shift + R (Mac)
強制重新載入
```

---

**提示**: 如果5分鐘內無法解決，請使用 `browser-diagnostic.html` 工具生成詳細報告。
