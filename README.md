# vue-scaffold

## 2018年5月14日

### 基础项目搭建

vue和react的相似之处

- 使用virtual dom
- 提供响应式和组件化的视图组件
- 集中注意力在核心的库，而其他功能如路由和全局状态管理交给其他相关的库

react，vue差别

- react 单项数据流
- vue双向数据流动，感觉上类似于knockout
- react推荐做法，jsx+inline style, vue以简单易上手为目标，所有html和css还有js文件都可以放在一个文件里，进阶之后推荐的是使用webpack+vue-loader   的单文件组件格式
- 模版文件 VS jsx，template VS 函数式render

react优势

- 丰富的生态系统
- 超大量数据的渲染速度上，react具有一定优势，因为vue的渲染机制启动时候做的工作比较多
- 支持服务端渲染

vue优势

- vue更轻量，react库的体积是vue的两倍多



## 2018年5月15日

### 基础项目架构

技术栈

- vue
- es6
- babel
- webpack

调试工具

- Vue tools
- https://github.com/vuejs/vue-devtools#vue-devtools

注意点

- 使用vue-loader的时候，*.vue 文件内部的模板会在构建时预编译成 JavaScript
- 最终打包好的暴力是不需要编译器的。所以只用运行时版本即可
- 开发过程中需要引入完整版

 ```javascript
module.exports = {
    ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  }
}
 ```

组件

- 组件是全局注册的
- 发现一个特别恶心的特性，假如界面的里面使用了某个组件，在使用这个组件之前一定要先注册这个组件，因为注册组件的行为不会触发界面的重新渲染