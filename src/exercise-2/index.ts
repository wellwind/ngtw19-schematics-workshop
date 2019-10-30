import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function exercise2(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    console.log('Parameters:', _options);

    return tree;
  };
}
