# 練習3: 使用範本產生檔案

1. 在 `../collection.json` 的 `schematics: {}` 中加入一個新的 schematics 設定 (snippet: `sch-coll-new-schematic-function-name`)
```json
"exercise-3": {
  "description": "Exercise 3",
  "factory": "./exercise-3/index#exercise3",
  "schema": "./exercise-3/schema.json"
}
```
2. 建立 `files` 與 `files/__name@dasherize__` 目錄
3. 在 `files/__name@dasherize__` 目錄內建立檔案 `__name@dasherize__.component.spec.ts.template`
```
import { Component } from '@angular/core';
@Component({
  selector: 'app-<%= dasherize(name) %>',
  template: '<h1>Hello {{ title }}'
})
export class <%= classify(name) %>Component implements OnInit {
  title = '<%= name %>';

  constructor() { } 

  ngOnInit() { }
}
```
4. import 所需的工具程式(snippet: `sch-apply-merge-templates-import`)
```
import { apply, url, applyTemplates, move, chain, mergeWith } from '@angular-devkit/schematics';
import { strings, normalize } from '@angular-devkit/core';
```
5. 執行合併檔案工作(snippet: `sch-apply-merge-templates`)
```
const templateSource = apply(url('./files'), [
  applyTemplates({
    classify: strings.classify,
    dasherize: strings.dasherize,
    name: _options.name
  }),
  move(normalize(_options.path as string))
]);
return chain([mergeWith(templateSource)]);
```
6. `npm run build`
7. `schematics .:exercise-3 --name=Mike --path=./`