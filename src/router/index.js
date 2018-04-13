import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Echarts from '@/components/Echarts'
import Login from '@/components/login/Login'
import Main from '@/components/main/Main'
import Attendance from '@/components/campus/attendance/Attendance'
import Education from '@/components/campus/education/Education'

import auth from '../services/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/echarts',
    //   name: 'Echarts',
    //   component: Echarts
    // },
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
          path: '/attendance',
          name: 'Main.Attendance',
          component: Attendance
        },
        {
          path: '/education',
          name: 'Main.Education',
          component: Education
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
