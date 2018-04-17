import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Main from '@/components/main/Main'

import auth from '@/services/auth'
import EchartsPie from '@/components/charts/echarts/EchartsPie'
import EchartsLine from '@/components/charts/echarts/EchartsLine'
import Jsplumb from '@/components/jsplumb/Jsplumb'

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
          component: EchartsPie
        },
        {
          path: '/charts/echarts/line',
          name: 'EchartsLine',
          component: EchartsLine
        },
        {
          path: '/jsplumb',
          name: 'Jsplumb',
          component: Jsplumb
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
