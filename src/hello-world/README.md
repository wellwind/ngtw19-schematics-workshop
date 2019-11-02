# 練習1：Hello World

參考 `src/hello-world/index.ts`

## 請修改 `helloWorld` 函式

```ts
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function helloWorld(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    // snippet: sch-tree-create
    tree.create('hello.ts', 'console.log(\'Hello World\');');

    return tree;
  };
}
```

## 建置 TypeScript 為 JavaScript 檔案

```shell
npm run build
```

## 執行 `.:hello-world ` 命令

```shell
schematics .:hello-world --dry-run        # 不真正建立檔案
schematics .:hello-world --dry-run=false  # 真實的建立檔案
```

## 執行產生後的檔案

```shell
node hello.ts
```

## 刪除 `hello.ts` 檔案

```shell
rm -f hello.ts
```
