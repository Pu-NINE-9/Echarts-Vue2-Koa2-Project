import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// TODO.1 将全局的`echarts`对象挂载到Vue的原型上
Vue.prototype.$echarts = window.echarts

// TODO.2 请求基准路径的配置和，以及将全局的`axios`对象挂载到`Vue`的原型上
axios.defaults.baseURL = 'http://127.0.0.1:8888/api'
Vue.prototype.$http = axios // 在别的组件中使用时，直接通过`this.$http`即可访问到`axios`对象，从而可以发起`AJAX`请求

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
