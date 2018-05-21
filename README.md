# vue-scaffold 一个react程序员写的vue框架

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
- 发现一个特别恶心的特性，假如界面的里面使用了某个组件，在使用这个组件之前一定要先注册这个组件，注册组件的语句一定要放在页面加载之前，因为注册组件的行为不会触发界面的重新渲染

## 2018年5月16日

生产环境部署

- 指定生产环境，以便在压缩时让uglifyJS自动删除警告代码块

```javascript
new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
})
```
规模化

- 路由，vue-router
- 使用vue-router创建单页面应用

### 路由引入

路由匹配到的组件会渲染到

```html
<router-view></router-view>
```

所以使用路由时，必须声明App模版存放router-view，

```html
<template>
  <div>
      <router-view></router-view>
  </div>
</template>
```

路由加载的时候需要渲染App模版来显示加载结果

```javascript
var app = new Vue({
    el: '#app',
    router,
    render: h => h(App) // 渲染App
});
```

## 2018年5月17日

对于一些react转vue的开发来说，可能更喜欢分离javascript和模版文件，可以引入vue-template-loader，对，我就是那个react转vue的程序员，这个插件的主要功能：

- 把一个html模版编译成vue的render function
- 支持scoped CSS和CSS module
- 支持模版文件的热替换
- 支持修饰符

哎，折腾了一早上，瞎忙活了，方案不可行，弃掉。。。。。。。

## 2018年5月18日

采用文件拆分的方式拆分单组件文件，对于单个组件：
- component.vue ----- 模版文件
- component.js  ----- JS文件
- component.less ------ 样式文件

### 状态管理工具 vuex

- 使用store.state里面的数据必须存放在计算属性computed里面，store中的数据都是reacttive（此处不知道怎么理解这个reactive）

#### state

- vuex使用一个单一状态树store，store应用的所有状态数据，是应用数据的唯一来源
- store是应用唯一状态管理的数据，所以每个使用状态数据的组件都要引入store，为了避免这个麻烦，vuex提供了一个方式把store全局注入到了所有子组件中，在根组件中调用，通过this.$store引用
- vuex提供了mapState功能，把计算属性映射到store.state，传参有对象和数组两种形式，
- 组件声明的时候没必要吧所有状态存放在vuex，本地组件的独享的状态存档在local state

#### getters

- getter的概念类似于computed 属性，getter的结果会被存储，只有当依赖的的某些属性发生改变，他自身才会重新渲染，
- getter是store的计算属性，可以在getter里对store的state的属性做某些处理
- getter已经被注入到store

#### mutation

- 更改vuex中store的唯一方法是提交mutation，vuex中的mutation类似于事件，
- 每个mutation都有一个字符串的事件类型和一个回调函数，这个回调函数就是我们记性状态更改的地方，并且她会接受state作为第一参数

```javascript
store.commit('increment')
```

- 你可以向store.commit传入额外的参数，即mutation的负荷

```javascript
// ...
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
store.commit('increment', {
  amount: 10
})
```
- mutation也需要遵守vue的某些响应规则，
  1.提前在store中初始化好所有属性
  2.当需要在对象上添加新属性时候，需要以新对象替换老对象
- vuex中，mutation都是同步事物                                              

#### action

- action 提交的是mutation，而不是直接更改状态
- action 可以包含任意异步操作
- action 动作通过store.dispatch分发
- store.dispatch可以返回promise

#### module

- vuex允许我们讲store分割成模块，每个模块有自己单独的state，mutation，action, getter

---------------------------------阶段分割线又来了-------------------------------------------------------------------------------

## 2018年5月19日

到今天为止，系统开发能力脚手架已经具备，接下来完善基础请求等基础api，还有基础示例

## 2018年5月21日

### 严格模式

- 在严格模式下，无论何时发生了状态变更且不是有mutation函数引起的，将会抛出错误，这能保证所有的状态变更都能被调试工具跟踪到
- 在发布环境下要关闭严格模式，因为严格模式会深度监测状态树来检测不合规的状态变更，请确保在发布环境下关闭严格模式，以避免性能损失