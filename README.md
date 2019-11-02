# Angular Taiwan 2019 - Schematics Workshop

## 前置準備

### 安裝 schematics cli

```shell
npm install -g @angular-devkit/schematics-cli
```

### 開發工具

- [Visual Studio Code](https://code.visualstudio.com/)
- [Schematics Snippets](https://marketplace.visualstudio.com/items?itemName=MikeHuang.vscode-schematics-snippets)
- [Angular Extension Pack](https://marketplace.visualstudio.com/items?itemName=doggy8088.angular-extension-pack)

## 建立新的 schematics 專案

建立空白專案

```shell
schematics blank --name=hello-world
```

建立包含基本範本的專案

```shell
schematics schematic --name=hello-world
```

## 練習

練習 1~3、5 請在 schematics 目錄內練習，練習 4 請在 exercise4 目錄內練習，練習 6 先在 schematics 目錄內完成後，到 exercise6 看結果。

- [練習 1: Hello World (建立檔案練習)](schematics/src/hello-world/README.md)
- [練習 2: 設定選項](schematics/src/exercise-2/README.md)
- [練習 3: 使用範本產生檔案](schematics/src/exercise-3/README.md)
- [練習 4: 整合 ng generate 指令](exercise4/README.md)
- [練習 5: 安裝第三方套件 (更新 package.json)](schematics/src/exercise-5/README.md)
- [練習 6: 執行第三方 schematics](schematics/src/exercise-6/README.md)

## Resources

- [Angular CLI Schematics](https://github.com/angular/angular-cli/tree/master/packages/schematics/angular)
- [Angualr CDK Schematics](https://github.com/angular/components/tree/master/src/cdk/schematics)
- [Nrwl Nx Schematics](https://github.com/nrwl/nx/tree/master/packages)
- [玩轉 Schematics](https://www.slideshare.net/ssuser35b57e/playing-schematics-modern-web-2018)
- [高效 Coding 術：Angular Schematics 實戰三十天](https://ithelp.ithome.com.tw/users/20090728/ironman/2149)
