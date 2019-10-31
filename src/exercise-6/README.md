# 練習6: 執行第三方 schematics

1. 在 index.ts 中 import `chain` 與 `externalSchematic` 兩個 rule
2. 在 index.ts 的 function 中使用組合外部的 schematic
```typescript
return chain([
  externalSchematic('@schematics/angular', 'component', _options),
  externalSchematic('@schematics/angular', 'service', _options)
]);
```
3. `npm run build`
4. 進入之前建立好的 Angualr 專案 `cd exercise4`
5. 執行 `ng g ngtw19-schematics-workshop:exercise-6 my-page` 產生相關檔案