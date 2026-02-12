// 測試腳本：診斷網頁載入問題
const fs = require('fs');

console.log('====== 診斷開始 ======\n');

// 讀取HTML檔案
const html = fs.readFileSync('E:/CLAUDE CODE/BOOK/vet-differential-diagnosis-v2.html', 'utf8');

console.log('✅ 檔案讀取成功');
console.log(`   檔案大小: ${Math.round(html.length / 1024)} KB\n`);

// 檢查關鍵HTML元素
const checks = [
  { name: 'sidebar 元素', pattern: /id="sidebar"/ },
  { name: 'main-content 元素', pattern: /id="main-content"/ },
  { name: 'globalSearch 元素', pattern: /id="globalSearch"/ },
  { name: 'DOMContentLoaded 事件', pattern: /addEventListener\("DOMContentLoaded"/ },
  { name: 'renderSidebar 函數', pattern: /function renderSidebar\(\)/ },
  { name: 'DB.symptoms 定義', pattern: /const DB = \{ symptoms:/ },
  { name: 'DB.sections 定義', pattern: /sections: \{/ },
  { name: 'state 物件定義', pattern: /const state = \{/ }
];

console.log('檢查關鍵代碼元素：\n');
checks.forEach(check => {
  const found = check.pattern.test(html);
  console.log(`${found ? '✅' : '❌'} ${check.name}`);
});

// 檢查DB對象結構
const dbMatch = html.match(/const DB = \{ symptoms: \[([\s\S]*?)\]\s*,\s*sections:/);
if (dbMatch) {
  const symptomsContent = dbMatch[1];
  const symptomCount = (symptomsContent.match(/\{id:/g) || []).length;
  console.log(`\n✅ 找到 DB.symptoms，包含 ${symptomCount} 個症狀`);
} else {
  console.log('\n❌ 無法解析 DB.symptoms 結構');
}

// 檢查sections定義
const sectionsMatch = html.match(/sections: \{([\s\S]*?)\}\};/);
if (sectionsMatch) {
  const sectionsContent = sectionsMatch[1];
  const sectionCount = (sectionsContent.match(/"\d+\.\d+"/g) || []).length;
  console.log(`✅ 找到 DB.sections，包含 ${sectionCount} 個分類`);

  // 列出sections
  const sectionList = sectionsContent.match(/"(\d+\.\d+)":\{name:"([^"]+)"/g);
  if (sectionList) {
    console.log('\n   分類列表:');
    sectionList.forEach(s => {
      const match = s.match(/"(\d+\.\d+)":\{name:"([^"]+)"/);
      if (match) {
        console.log(`   - ${match[1]}: ${match[2]}`);
      }
    });
  }
} else {
  console.log('❌ 無法解析 DB.sections 結構');
}

// 檢查renderSidebar函數實作
const renderSidebarMatch = html.match(/function renderSidebar\(\) \{([\s\S]*?)\n\}/);
if (renderSidebarMatch) {
  const functionBody = renderSidebarMatch[1];
  const hasGetElement = /getElementById\("sidebar"\)/.test(functionBody);
  const hasDBSymptoms = /DB\.symptoms/.test(functionBody);
  const hasDBSections = /DB\.sections/.test(functionBody);
  const hasSectionMap = /sectionMap/.test(functionBody);
  const hasInnerHTML = /sidebar\.innerHTML/.test(functionBody);

  console.log('\n✅ renderSidebar 函數檢查:');
  console.log(`   ${hasGetElement ? '✅' : '❌'} 取得 sidebar 元素`);
  console.log(`   ${hasDBSymptoms ? '✅' : '❌'} 使用 DB.symptoms`);
  console.log(`   ${hasDBSections ? '✅' : '❌'} 使用 DB.sections`);
  console.log(`   ${hasSectionMap ? '✅' : '❌'} 建立 sectionMap`);
  console.log(`   ${hasInnerHTML ? '✅' : '❌'} 設定 innerHTML`);
}

// 檢查DOMContentLoaded執行順序
const domLoadMatch = html.match(/addEventListener\("DOMContentLoaded"[^}]+\{([\s\S]*?)\n\}\);/);
if (domLoadMatch) {
  const domLoadBody = domLoadMatch[1];
  const calls = domLoadBody.match(/\w+\(\);/g) || [];
  console.log('\n✅ DOMContentLoaded 執行順序:');
  calls.forEach((call, i) => {
    console.log(`   ${i + 1}. ${call}`);
  });

  const hasRenderSidebar = /renderSidebar\(\)/.test(domLoadBody);
  if (!hasRenderSidebar) {
    console.log('\n❌ 警告：DOMContentLoaded 中沒有呼叫 renderSidebar()');
  }
}

// 檢查可能的語法錯誤
console.log('\n檢查可能的語法問題：');

// 檢查DB對象閉合
const dbStart = html.indexOf('const DB = {');
const dbEnd = html.indexOf('}};', dbStart);
if (dbStart !== -1 && dbEnd !== -1) {
  console.log('✅ DB 對象正確閉合');
} else {
  console.log('❌ DB 對象閉合異常');
}

// 檢查state對象
const stateMatch = html.match(/const state = \{([\s\S]*?)\n\};/);
if (stateMatch) {
  const stateBody = stateMatch[1];
  const hasCollapsedSections = /collapsedSections/.test(stateBody);
  console.log(`${hasCollapsedSections ? '✅' : '❌'} state.collapsedSections 已定義`);
}

console.log('\n====== 診斷完成 ======\n');

// 生成診斷建議
console.log('診斷建議：');
console.log('1. 在瀏覽器中打開開發者工具 (F12)');
console.log('2. 切換到 Console 標籤');
console.log('3. 重新載入頁面 (F5)');
console.log('4. 查看是否有 JavaScript 錯誤訊息');
console.log('5. 在 Console 中輸入以下命令測試：');
console.log('   - DB （檢查資料庫物件）');
console.log('   - DB.symptoms.length （症狀數量）');
console.log('   - DB.sections （分類列表）');
console.log('   - document.getElementById("sidebar") （側邊欄元素）');
console.log('   - state （狀態物件）');
