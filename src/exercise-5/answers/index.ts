import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
// TODO: 匯入 NodePackageInstallTask (snippet: sch-import-install-package-task)
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function exercise5(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // TODO: 讀取 package.json (snippet: sch-read-json-file)
    const content = JSON.parse(tree.read('package.json')!.toString('UTF-8'));
    
    // TODO: 替讀出來的物件加上 dependencies 設定
    content.dependencies['@angular/cdk'] = '~8.0.0';
    content.dependencies['@angular/material'] = '~8.0.0';

    // TODO: 儲存 package.json (snippet: sch-write-json-file)
    tree.overwrite('package.json', JSON.stringify(content, null, 2));

    // TODO: 執行安裝套件工作 (snippet: sch-install-package)
    _context.addTask(new NodePackageInstallTask());
    return tree;
  };
}