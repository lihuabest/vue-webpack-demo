// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import echarts from 'echarts'
import VueProgressBar from 'vue-progressbar'
import App from './App'
import router from './router'
import axios from './services/base'
import directives from './directives/directives'

// 直接引入scss文件
import './assets/styles/_all.scss'

// 注册指令集合
directives.install(Vue)

// 注册进度条组件
Vue.use(VueProgressBar, {
  color: 'rgb(238, 51, 111)',
  failedColor: 'red',
  height: '2px'
})

// 注册http请求组件
Vue.use(axios)

// 注册图表组件
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
