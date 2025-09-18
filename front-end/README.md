# 前端项目搭建
## 1.项目初始化
### 1.1 全局安装脚手架
```bash
pnpm i @vue/cli -g
```

### 1.2 项目初始化：
```bash
vue create front-end
```
然后设置相关的配置即可

### 1.3 删除一些无关代码
先把`App.vue`中的`HTML`结构去除：
```HTML
<nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</nav>
<router-view/>
```

再把`CSS`完全去除

`HelloWorld.vue`删除

`views`文件夹下所有东西都删除

把`router`文件夹下无关的路由删除:
```js
{
    path: '/',
    name: 'home',
    component: HomeView
},
{
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
}
```

### 1.4 项目的基本配置
配置`vue.config.js`，配置其端口号，使其在启动时能自动打开浏览器
```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 8999, // 配置项目端口号
    open: true, // 项目启动后自动打开浏览器
  },
  transpileDependencies: true
})
```
### 1.5 全局`Echarts`对象的挂载
在`index.html`里面引入script标签，在引入之后我们便可以通过windows.echarts来访问到`echarts`对象

所以我们将全局的echarts对象挂载到Vue的原型上
```js
// TODO.1 将全局的`echarts`对象挂载到Vue的原型上
Vue.prototype.$echarts = window.echarts
```
后续我们在别的组件使用时，直接通过`this.$echarts`即可访问到`echarts`对象

### 1.6 Axios的封装和挂载
在`main.js`中引入axios并挂载到Vue的原型上
```js
import axios from 'axios'
// TODO.2 请求基准路径的配置和，以及将全局的`axios`对象挂载到`Vue`的原型上
axios.defaults.baseURL = 'http://127.0.0.1:8888/api'
Vue.prototype.$http = axios // 在别的组件中使用时，直接通过`this.$http`即可访问到`axios`对象，从而可以发起`AJAX`请求
```






