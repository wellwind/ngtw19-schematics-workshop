import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloWorld(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    // TODO: 使用 tree.create 建立一個檔案：`hello.ts`，內容為 `console.log('Hello World!');`
    // snippet: sch-tree-create
    // tree.create('hello.ts', 'console.log(\'Hello World\'');

    return tree;
  };
}
