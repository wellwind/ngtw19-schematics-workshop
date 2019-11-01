# 練習2: 設定選項

1. 在 `../collection.json` 的 `schematics: {}` 中加入一個新的 schematics 設定 (snippet: `sch-coll-new-schematic-function-name`)
```json
"exercise-2": {
  "description": "Exercise 2",
  "factory": "./exercise-2/index#exercise2",
  "schema": "./exercise-2/schema.json"
}
```
2. 在 `index.ts` 中建立新的 function (snippet: `sch-export-function-template`)
```typescript
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function exercise2(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    console.log(_options);
    return tree;
  };
}
```
3. `npm run build`
4. 嘗試使用 `schematics .:exercise-2 --a=1 --b=2 --key=value`，印出執行選項
5. 建立 `schematic.d.ts`
6. 建立一個 interface 定義參數型別
```typescript
export interface Exercise2Options {
  name: string;
  like: boolean;
  sex: string;
}
```
7. 在 `index.ts` 中 import 這個 interface，並將 `_options` 設定型別為 `Exercise2Options`
8. 在 `schema.json` 中加入基礎樣板 (snippet: `sch-schema-json`)
```json
{
  "$schema": "http://json-schema.org/schema",
  "id": "Exercise2Schematics",
  "title": "Exercise 2 Schematics Options",
  "type": "object",
  "description": "Exercise 2 Schematics Options",
  "properties": {},
  "required": []
}

```
9. 在 `properties: {}` 內加入一個自行輸入的 `name` 參數設定 (snippet: `sch-schema-property-prompt-input`)
```json
"name": {
   "description": "Name",
   "type": "string",
   "default": "Mike",
   "x-prompt": "Your name?"
 }
```
10. 在 `properties: {}` 內加入一個 Ｙ/n 的 `like` 參數設定 (snippet: `sch-schema-property-prompt-yes-no`)
```json
"like": {
  "description": "Like Angular",
  "type": "boolean",
  "default": "true",
  "x-prompt": "Like Angular?"
}
```
11. 在 `properties: {}` 內加入一個包含選項的 `sex` 參數設定 (snippet: `sch-schema-property-prompt-selection`)
```json
"sex": {
  "description": "your sex",
  "type": "string",
  "default": "m",
  "x-prompt": {
    "message": "Your Sex?",
    "type": "list",
    "items": [
      { "value": "m", "label": "Male" },
      { "value": "f", "label": "Female" }
    ]
  }
}
```
12. 使用 `tree.create` 建立檔案，或輸出內容。
13. `npm run build`
14. 執行 `schematics .:exercise-2`，並輸入相關參數，或使用 `schematics .:exercise-2 --name=Mike --like --sex=f` 直接指定參數
15. 將 `peoperties: {}` 中 `name` 的 `default` 設定移除，換成 `$default` 設定 (snippet: `sch-schema-property-dollar-default`)
```json
"$default": {
  "$source": "argv",
  "index": 0
}
```
16. `npm run build`
17. 執行 `schematics .:exercise-2 Mike` 直接設定 `--name` 參數