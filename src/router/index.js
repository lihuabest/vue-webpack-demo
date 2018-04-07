import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Echarts from '@/components/Echarts'
import Login from '@/components/login/Login'

import auth from '../services/auth'

Vue.use(Router)

const router = new Router({
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

router.beforeEach((route, redirect, next) => {
  if (!auth.loggedIn() && route.path !== '/login') {
    next({
      path: '/login',
      query: {
        redirect: encodeURIComponent(route.fullPath)
      }
    })
  } else {
    next()
  }
})

export default router
