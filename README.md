# 前端自动化构建工具有：
Rollup, Parcel, Snowpack, Vite, Webpack ...


# webpack 与 vite 对比
## webpack

### 一、webpack 打包过程
1. 识别入口文件
2. 通过逐层去分析模块的依赖，（commonjs、es module、amd等webpack 都会对齐进行分析，来获取代码的依赖关系）
3. webpack 开始分析代码：转换代码、编译代码、输出代码
4. 形成打包后的代码

### 二、webpack 打包原理
1. 先逐层递归识别依赖，构建一个依赖关系图
2. 将代码转换成 AST 抽象的语法树
3. 在 AST 阶段中去处理代码
4. 把 AST 抽象语法树变成浏览器能够识别的代码，然后进行输出


## vite

### 一、vite 打包过程
1. vite 在开发阶段不会进行打包，而是直接启动一个开发服务器
2. 请求一个模块到开发服务器
3. 开发服务器收到请求后开始编译模块，根据所需的依赖去加载文件
4. 加载完成之后，开发服务器把编译的结果返回给浏览器

### 二、vite 原理
1. 申明一个 script 标签类型为 module, 类似如下
`<script type="module" src="/src/main.js"></script>`

2. 浏览器向服务器发起一个 get 请求，去请求 main.js
`http://localhost:3000/src/main.js`

3. 当浏览器请求到 main.js 文件后 检测内部是否含有import引入的包，如果有，浏览器又会对其 import 的引用发起 http 请求来获取模块的内容文件

`http://localhost:3000/src/react-dom`

4. vite 主要功能是去劫持浏览器的请求，把请求的文件编译之后的返回给浏览器

## webpack 和 vite 的优缺点

### 一、 开发服务器的启动时间
1. webpack开发服务器启动缓慢，在冷启动时，webpack 会分析整个项目的依赖关系，进行编译打包，去构建我们的应用

2. vite 一开始就将模块区分为 依赖 和 源码 这两类，改进了开发服务器启动时间
  a. 依赖：大多数 js 在开发时是不会变动的，一些比较大的依赖库处理起来代价会很高，依赖也通常会存在多种模块化格式（例如 ESM 或者 CommonJS）
  - vite 使用 esbuild 预构建依赖， esbuild 是使用 go 编写的，比 node（webpack 是用node开发的） 编写的打包器预构建依赖快 10-100 倍。

  b. 源码： 通常包含一些并非直接是 JavaScript 的文件， 需要转换 （jsx, css, 或者 vue/Svelte组件等），时长需要进行编译。但同时，并不是所有的源码都是同时需要被加载的（例如基于路由拆分的代码模块）。
  - vite 以原生 ESM 方式提供源码。让浏览器承接了部分打包的工作：vite 只需要在浏览器请求源码时进行相应的相应的转换并提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。

### 二、热更新效率低下
1. 基于打包器启动时，重建整个包的效率很低。原因显而易见：因为这样更新速度会随着应用体积增长而直线下降。
 - 一些打包器的开发服务器将构建内容存入内存，这样它们只需要在文件更改时使模块图的一部分失活[1]，但它也仍需要整个重新构建并重载页面。这样代价很高，并且重新加载页面会消除应用的当前状态，所以打包器支持了动态模块热替换（HMR）：允许一个模块 “热替换” 它自己，而不会影响页面其余部分。这大大改进了开发体验 —— 然而，在实践中我们发现，即使采用了 HMR 模式，其热更新速度也会随着应用规模的增长而显著下降。

2. 在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活[1]（大多数时候只是模块本身），使得无论应用大小如何，HMR 始终能保持快速更新。

3. Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：
 - 源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

## vite 为什么生产环境仍需打包 （vite 官网解说）
尽管原生 ESM 现在得到了广泛支持，但由于嵌套导入会导致额外的网络往返，在生产环境中发布未打包的 ESM 仍然效率低下（即使使用 HTTP/2）。为了在生产环境中获得最佳的加载性能，最好还是将代码进行 tree-shaking、懒加载和 chunk 分割（以获得更好的缓存）。

## vite 生产环境为何不用 ESBuild 打包，而是用 Rollup （vite 官网解说）
虽然 esbuild 快得惊人，并且已经是一个在构建库方面比较出色的工具，但一些针对构建 应用 的重要功能仍然还在持续开发中 —— 特别是代码分割和 CSS 处理方面。就目前来说，Rollup 在应用打包方面更加成熟和灵活。尽管如此，当未来这些功能稳定后，我们也不排除使用 esbuild 作为生产构建器的可能。



# 其它构建工具

## Rollup
Rollup是一款 ES Modules 打包器，从作用上来看，Rollup 与 Webpack 非常类似。不过相比于 Webpack，Rollup要小巧的多
现在很多我们熟知的库都都使用它进行打包，比如：Vue、React和three.js等

Rollup打包的代码非常简洁，完成不像webpack那样存在大量引导代码和模块函数

优点：
1. 代码效率更简洁、效率更高   2. 默认支持 Tree-shaking

缺点：
加载其他类型的资源文件或者支持导入 CommonJS 模块，又或是编译 ES 新特性，这些额外的需求 Rollup需要使用插件去完成

综合：
rollup并不适合开发应用使用，因为需要使用第三方模块，而目前第三方模块大多数使用CommonJs方式导出成员，并且rollup不支持HMR，使开发效率降低

但是在用于打包JavaScript 库时，rollup比 webpack 更有优势，因为其打包出来的代码更小、更快，其存在的缺点可以忽略

## Parcel
1. Parcel ，是一款完全零配置的前端打包器，它提供了 “傻瓜式” 的使用体验，只需了解简单的命令，就能构建前端应用程序,也支持模块热替换，但用法更简单
2. Parcel 跟 Webpack 一样都支持以任意类型文件作为打包入口，但建议使用HTML文件作为入口，该HTML文件像平时一样正常编写代码、引用资源

3. Parcel有个十分好用的功能：
- 支持自动安装依赖，像webpack开发阶段突然使用安装某个第三方依赖，必然会终止dev server然后安装再启动。而Parcel则免了这繁琐的工作流程
- 同时，Parcel能够零配置加载其他类型的资源文件，无须像webpack那样配置对应的loader

## Snowpack
1. Snowpack，是一种闪电般快速的前端构建工具，专为现代Web设计，较复杂的打包工具（如Webpack或Parcel）的替代方案，利用JavaScript的本机模块系统，避免不必要的工作并保持流畅的开发体验

2. 开发阶段，每次保存单个文件时，Webpack和Parcel都需要重新构建和重新打包应用程序的整个bundle。而Snowpack为你的应用程序每个文件构建一次，就可以永久缓存，文件更改时，Snowpack会重新构建该单个文件