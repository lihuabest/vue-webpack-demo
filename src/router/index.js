import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Echarts from '@/components/Echarts'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/lazy',
      name: 'LazyLoad',
      component: resolve => require(['@/components/LazyLoad'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history'
})
