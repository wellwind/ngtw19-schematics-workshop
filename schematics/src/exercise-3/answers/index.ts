// TODO: import 所需的工具程式 snippet: sch-apply-merge-templates-import
import { normalize, strings } from '@angular-devkit/core';
import { apply, applyTemplates, chain, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';

export function exercise3(options: any): Rule {
  return (__: Tree, _context: SchematicContext) => {
    // TODO: 執行檔案合併工作 snippet: sch-apply-merge-templates
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name
      }),
      move(normalize(options.path as string))
    ]);
    
    return chain([
      mergeWith(templateSource)
    ]);
    
    
  };
}