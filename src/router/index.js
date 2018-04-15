import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Main from '@/components/main/Main'

import auth from '@/services/auth'
import Pie from '@/components/charts/echarts/Pie'

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/lazy',
    //   name: 'LazyLoad',
    //   component: resolve => require(['@/components/LazyLoad'], resolve)
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/charts/echarts/pie',
          name: 'EchartsPie',
          component: Pie
        }
      ]
    }
  ],
  mode: 'history'
})

router.beforeEach((route, redirect, next) => {
  if (!auth.loggedIn() && route.path !== '/login') {
    // next({
    //   path: '/login',
    //   query: {
    //     redirect: encodeURIComponent(route.fullPath)
    //   }
    // })
    next()
  } else {
    next()
  }
})

export default router
