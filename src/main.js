// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import echarts from 'echarts'
import VueProgressBar from 'vue-progressbar'
import App from './App'
import router from './router'
import axios from './services/base'

Vue.use(VueProgressBar, {
  color: 'rgb(238, 51, 111)',
  failedColor: 'red',
  height: '2px'
})

Vue.use(axios)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
