# 練習 3: 使用範本產生檔案

1. 建立 `files` 與 `files/__name@dasherize__` 目錄

2. 在 `files/__name@dasherize__` 目錄內建立檔案 `__name@dasherize__.component.ts.template`

  ```ts
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

3. import 所需的工具程式(snippet: `sch-import-apply-merge-templates`)

  ```ts
  import { apply, url, applyTemplates, move, chain, mergeWith } from '@angular-devkit/schematics';
  import { strings, normalize } from '@angular-devkit/core';
  ```

4. 執行合併檔案工作(snippet: `sch-apply-merge-templates`)

   ```ts
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

5. `npm run build`

6. `schematics .:exercise-3 --name=Mike --path=./`

## 補充資訊

使用 applyTemplates 時需要將所有檔案的附檔名加上 `.template`，在完成後會移除 `.template` 名稱
