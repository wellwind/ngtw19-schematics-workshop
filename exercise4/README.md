# 練習4: 整合 ng generate 指令

## 練習步驟

1. 在此目錄下使用 `npm link ../schematics` 連結已開發好的 schematics

2. 在 `node_modules` 下可以看到連結上一層的 `ngtw19-schematics-workshop` 目錄

3. 嘗試執行 `ng g ngtw19-schematics-workshop:exercise-3` 看看結果

4. 嘗試修改之前的 schematics，執行 `npm run build`，再回來 `exercise4` 目錄使用 `ng g` 指令看看結果

## 疑難排解

若有失敗情形，也可在工作區外直接使用 `ng new` 建立新的 Angular 專案，之後使用 `npm link [schematics 目錄絕對位置]`。

其他可能狀況及解決方式說明如下：

## 狀況一：npm install 後沒有 node_modules 資料夾

重開 vscode 應該就會出現了。

## 狀況二：npm link 失敗

在 `ngtw19-schematics-workshop` 目錄內，執行指令 `npm install @angular-devkit/schematics-cli` 在專案內額外安裝 schematics cli 後，再回來執行 `npm link`。
