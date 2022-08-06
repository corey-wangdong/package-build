# package-build
打包工具的使用（webPack、vite、parcel等）


## 初始化项目
`pnpm init`

## 安装 webpack 依赖包

`pnpm add -D webpack webpack-cli`

## 在 scripts 里添加打包命令
```cmd
"scripts": {
    "build": "webpack ./index.js -o ./build --mode=development"
  },
```
执行 pnpm build 可以发现多了一个 build 文件夹 就是我们 打包的东西

## 在 config 文件夹里创建 webpack.config.js, 开始做一些 webpack 的配置
```
const path = require('path');
module.exports = {
  entry: './index',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, '../dist')
  }
}
```

## 修改scripts 里面的打包命令
```cmd
"scripts": {
    "build": "webpack --config ./config/webpack-config.js"
  },
```

## 增加对 es6 的转换功能
我们添加了 es6.js 文件 里面加了 类的的方法，目前 webpack 输出还是原生的 ES6 的代码，在 Chrome 中以支持类的原生运行，但在有些浏览器中只支持 ES5 的代码，因此我们需要把 ES6 的代码转为 ES5 的代码再运行。 

Chrome 中也不支持 ES6 中 装饰器的写法，我们也需要去转成 ES5 的代码

那这个时候我们就需要用到 babel 来做这些工作

`pnpm add -D @babel/core @babel/preset-env babel-loader`

## 配置 webpack
```
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  }
```

可以看到 此时打包之后的 代码是 ES5 

## 添加 ES6 的装饰器
打包时发现报错了，因为对于 @ 这样的符号 babel 预设并不能直接识别，需要安装 插件：@babel/plugin-proposal-decorators

`pnpm add -D @babel/plugin-proposal-decorators`
## 配置 webpack
```
module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }]
            ]
          }
        }
      }
    ]
  }
```

## 搭建 react 脚手架
`pnpm add react react-dom @babel/preset-react`

这个时候我们发现 打包之后的文件多了很多东西，因为把 react 和 react-dom 也打包到一起了，这些包基本不动，我们应该抽离出去，也就是缓存包的提取

```
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          filename: 'vendor.js',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
```

## 在 react 中添加样式并打包样式
安装处理样式用到的 loader
`pnpm add -D style-loader css-loader`

## 添加对样式处理的 loader
```
  module: {
    rules: [
      ...
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
```
打包之后可以看到样式已经生效，但是样式跟 js 打包到一起了，不好管理，我们需要抽离样式
抽离样式需要用到 mini-css-extract-plugin 插件

`pnpm add -D mini-css-extract-plugin`

```
 module: {
    rules: [
      ...
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader'
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
```
打包之后可以看到样式已经抽离成单独的文件


## 截止目前都是手动引入打包后的 js 和 css, 很麻烦，接下来实现打包后的文件自动引入

`pnpm add -D html-webpack-plugin`

```
  plugins: [
    ...
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
```

打包后可以看到 在dist 文件目录下 生成了 index.html 文件 并自动引入了打包好的 js 和 css 文件

## 目前每次修改东西之后都是手动打包的，现在开启 webpack 的热更新，每次修改后让 webpack 自动给我们打包

`pnpm add -D webpack-cli webpack-dev-server`

## 修改 scripts
```
"scripts": {
    "start": "webpack server --config ./config/webpack.config.js",
    "build": "webpack --config ./config/webpack.config.js",
  }
```

pnpm start 之后我们发现开启了 webpack 开启了 server, 访问 http://localhost:8080/ 可以看到我们的项目
修改之后页面也会自动去刷新

## webpack 中添加 devServer, 修改配置
```
devServer: {
  port: 8000,
  hot: true
}
```

## 项目中引入 scss
`pnpm add -D sass sass-loader`

```
module: {
    rules: [
      ...
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      ...
    ]
  },
```
创建 scss 文件 引入样式，发现可以支持 scss 了

## 项目中引入 less
`pnpm add -D less less-loader`

```
module: {
    rules: [
      ...
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      ...
    ]
  },
```
创建 less 文件 引入样式，发现可以支持 less 了