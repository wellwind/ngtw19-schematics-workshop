import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
// TODO: 匯入 NodePackageInstallTask (snippet: sch-import-install-package-task)

export function exercise5(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // TODO: 讀取 package.json (snippet: sch-read-json-file)
    
    // TODO: 替讀出來的物件加上 dependencies 設定

    // TODO: 儲存 package.json (snippet: sch-write-json-file)

    // TODO: 執行安裝套件工作 (snippet: sch-install-package)


    return tree;
  };
}