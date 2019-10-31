import { chain, externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function exercise6(_options: any): Rule {
  return (_: Tree, _context: SchematicContext) => {
    // TODO: 使用 chain 與 externalSchematic 組合外部的 schematics
    return chain([
      externalSchematic('@schematics/angular', 'component', _options),
      externalSchematic('@schematics/angular', 'service', _options)
    ]);
  };
}
