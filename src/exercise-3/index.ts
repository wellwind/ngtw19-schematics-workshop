// TODO: import 所需的工具程式 snippet: sch-apply-merge-templates-import

import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function exercise3(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    
    // TODO: 執行檔案合併工作 snippet: sch-apply-merge-templates
    
    return tree;
  };
}