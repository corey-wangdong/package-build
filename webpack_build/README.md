# package-build
打包工具的使用（webPack、vite、parcel等）


## 初始化项目
`pnpm init`

## 安装 webpack 依赖包

`pnpm install webpack webpack-cli -D`

## 在 scripts 里添加打包命令
```cmd
"scripts": {
    "build": "webpack ./index.js -o ./build --mode=development"
  },
```
执行 pnpm build 可以发现多了一个 build 文件夹 就是我们 打包的东西

