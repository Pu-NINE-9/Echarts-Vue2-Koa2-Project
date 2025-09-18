import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as echarts from 'echarts'
import '@/assets/css/global.scss'
// 导入自定义科技感主题
import techTheme from '@/assets/theme/tech.js'
// 导入自定义樱花少女粉主题
import sakuraTheme from '@/assets/theme/sakura.js'

// 注册tech主题
echarts.registerTheme('tech', techTheme)
console.log('Tech theme registered successfully')
// 注册sakura主题
echarts.registerTheme('sakura', sakuraTheme)
console.log('Sakura theme registered successfully')

// 将全局的`echarts`对象挂载到Vue的原型上
Vue.prototype.$echarts = echarts

// 请求基准路径的配置和，以及将全局的`axios`对象挂载到`Vue`的原型上
axios.defaults.baseURL = 'http://127.0.0.1:8888/api'
Vue.prototype.$axios = axios // 在别的组件中使用时，直接通过`this.$axios`即可访问到`axios`对象，从而可以发起`AJAX`请求

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')