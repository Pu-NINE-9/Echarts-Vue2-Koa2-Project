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
Vue.prototype.$axios = axios // 在别的组件中使用时，直接通过`this.$axios`即可访问到`axios`对象，从而可以发起`AJAX`请求
```


## 2 单独图表组件的开发
### 2.1 商家销售统计(横向柱状图)
#### 2.1.1 组件结构的设计
|-- SellerPage.vue 测试使用，针对于/sellerpage路径全屏展示图
|-- Seller.vue 呈现图表的组件

router-view是路由出口

#### 2.1.2 布局结构的设计
编写全局CSS样式，并在main.js中使用

#### 2.1.3 图表基本功能的实现
实现图表的一般步骤：
`initChart`: 初始化`echartInstance`对象
`getData`: 获取服务器的数据
`updateChart`: 设置option，更新图像(类型为bar)

#### 2.1.4动态刷新的实现
##### 2.1.4.1 数据的处理
将数据从小到大排列
每五个显示一页，设置两个变量：currentPage(通过计时器控制), totalPage

##### 2.1.4.2 启动和停止的时机
用户鼠标移入图表需要取消定时器（此时用户需要查阅），移出时又需要启动

##### 2.1.4.3 边界值的处理
就是判断当前页和总页数的关系

#### 2.1.5 UI的调整
在index.html里面引入chalk主题
```html
<script src="../src/assets/theme/chalk.js"></script>
```
然后在seller.vue里面用

#### 2.1.6 部分图表的option


#### 2.1.7 分辨率适配



### 2.2 销量趋势图表(折线图)


### 2.3 商家分布模块(地图+散点图)


### 2.4 销量排行模块(柱状图)


### 2.5 热销商品占比模块(饼图)


### 2.6 库存与销量模块(圆环饼图)



