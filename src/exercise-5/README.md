# 練習5: 安裝第三方套件 (更新 package.json)


1. 讀取 package.json (snippet: `sch-read-json-file`)
```typescript
const content = JSON.parse(tree.read('package.json')!.toString('UTF-8'));
```
2. 替讀出來的物件加上 dependencies 設定
```typescript
content.dependencies['@angular/cdk'] = '~8.0.0';
content.dependencies['@angular/material'] = '~8.0.0';
```
3. 儲存 package.json (snippet: `sch-write-json-file`)
```typescript
tree.overwrite('package.json', JSON.stringify(content, null, 2));
```
4. 匯入 NodePackageInstallTask (snippet: `sch-import-install-package-task`)
```typescript
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
```
5. 執行安裝套件工作 (snippet: `sch-install-package`)
```typescript
_context.addTask(new NodePackageInstallTask());
```

補充：1~3 步驟可以使用 snippet: `sch-set-package-dependencies` 簡化