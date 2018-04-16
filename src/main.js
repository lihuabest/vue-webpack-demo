// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import echarts from 'echarts'
import VueProgressBar from 'vue-progressbar'
import jsplumb from 'jsplumb'
import App from './App'
import router from '@/router/index'
import axios from '@/services/base'
import directives from '@/directives/directives'
import tools from '@/tools/_all'
import CollapseTransition from '@/animations/collapse.transition/CollapseTransition'

// 直接引入scss文件 改为了在 build/utils.js 里用sass-resources-loader来统一加载公共sass
// import './assets/styles/_all.scss'

// 注册指令集合
directives.install(Vue)

// 注册进度条组件
Vue.use(VueProgressBar, {
  color: 'rgb(238, 51, 111)',
  failedColor: 'red',
  height: '2px'
})

// 注册http请求组件
Vue.prototype.$http = axios

// 注册图表组件
Vue.prototype.$echarts = echarts

// 注册工具组件
Vue.prototype.$tools = tools

// 注册连线库
Vue.prototype.$jsplumb = jsplumb.jsPlumb

// 注册公共动画组件
Vue.component('CollapseTransition', CollapseTransition)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
