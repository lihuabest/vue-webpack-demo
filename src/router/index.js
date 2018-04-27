import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Main from '@/components/main/Main'

import auth from '@/services/auth'
import EchartsPie from '@/components/charts/echarts/EchartsPie'
import EchartsLine from '@/components/charts/echarts/EchartsLine'
import Jsplumb from '@/components/jsplumb/Jsplumb'
import Dynamic from '@/components/componnet/dynamic/Dynamic'
import Flex from '@/components/componnet/flex/Flex'

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
      path: '/',
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
        },
        {
          path: '/component/dynamic',
          name: 'Dynamic',
          component: Dynamic
        },
        {
          path: '/component/flex',
          name: 'Flex',
          component: Flex
        }
      ]
    }
  ],
  mode: 'history'
})

router.beforeEach((route, redirect, next) => {
  if (!router.app.$store.state.login.isLogin && route.path !== '/login') {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: {
          redirect: encodeURIComponent(route.fullPath)
        }
      })
    } else {
      next()
    }
    next()
  } else {
    next()
  }
})

export default router
