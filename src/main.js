// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Rx from 'rxjs/Rx'
// import { Observable } from 'rxjs/Observable'
// import { Subscription } from 'rxjs/Subscription' // 如果使用 RxJS 4 可自由使用
// import { Subject } from 'rxjs/Subject' // domStreams 选项所需
// import VueRx from 'vue-rx'
import echarts from 'echarts'
import VueProgressBar from 'vue-progressbar'
import jsplumb from 'jsplumb'
import App from '@/App'
import router from '@/router/index'
import axios from '@/services/base'
import directives from '@/directives/directives'
import tools from '@/tools/_all'

import ComponentInstall from '@/commons/component.install'
import PrototypeInstall from '@/commons/prototype.install'

// 直接引入scss文件 改为了在 build/utils.js 里用sass-resources-loader来统一加载公共sass
// import './assets/styles/_all.scss'

// 注册rxjs https://github.com/vuejs/vue-rx/blob/master/README-CN.md 文档
// 纯使用rxjs的subject等 完全可以不导入VueRx
// Vue.use(VueRx, {
//   // Rx, // 不需要全部导入 可以按需求部分导入
//   Subject
// })

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

// 注册公共组件
Vue.use(ComponentInstall)
Vue.use(PrototypeInstall)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
