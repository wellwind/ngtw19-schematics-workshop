# Angular Taiwan 2019 - Schematics Workshop

# Prepare

```
npm install -g @angular-devkit/schematics-cli
```

# 建立新的 schematics 專案

建立空白專案

```shell
schematics blank --name=hello-world
```

建立包含基本範本的專案

```shell
schematics schematic --name=hello-world
```

# 練習1: 執行第一個 schematics 並建立檔案


修改 src/hello-world/index.ts

```shell
npm run build
schematics .:hello-world --dry-run                # 不真正建立檔案
schematics .:hello-world --dry-run=false          # 真實的建立檔案
```
