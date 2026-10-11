# FLIGHTPATH 2027｜手機與電腦共用的 PWA

本版由原本 HTML 改造：保留全部學習計畫、維也納與模擬機進度、AI 專區、學習紀錄；增加手機底部分頁、桌面側邊欄、安裝功能、圖示、離線快取。

## 發布到 GitHub Pages

請把資料夾內 **所有檔案與 icons 子資料夾** 原樣上傳至 `SIEducation/flightpath-2027` 儲存庫的 `main` 分支根目錄，確認沒有把外層資料夾也傳上去。GitHub Repository → Settings → Pages → Build and deployment → `Deploy from a branch` → `main` → `/(root)` → Save。

正式網址預計為：https://sieducation.github.io/flightpath-2027/ （GitHub Pages 發布完成後才會有效）

## 如何安裝

- **Android Chrome：** 用正式 HTTPS 網址開啟 → 右上角 ⋮ →「安裝應用程式」或「加入主畫面」。網站的「安裝 App」按鈕若獲得瀏覽器支援，也能啟動安裝對話框。
- **iPhone：** Safari 開啟網站 → 分享 →「加入主畫面」。
- **電腦 Chrome / Edge：** 直接以網址使用，或按網址列安裝圖示把網站加到桌面應用程式中。

## 資料與網路注意事項

- 同一網址適用電腦、手機、平板，會依螢幕寬度自動切換導覽與排版。
- **學習進度目前是各裝置自己的 localStorage，不會跨裝置即時同步。** 手動搬移進度：學習紀錄 → 匯出 JSON 備份 → 另一個裝置匯入。不同裝置若同時修改，請先決定哪份資料才是最新。
- 首次須連網以安裝離線資源；成功快取後，可離線檢視網站與編輯本機學習資料。Pilotest、ChatGPT 等外站連結仍需要網路。
- GitHub Pages 是公開靜態網站；請勿把私人學習資料 JSON 上傳到公開儲存庫。
- PWA 不是 Android APK 或 iOS IPA；不需要 Google Play/App Store。
