import Vue from 'vue'
import Vuex from 'vuex'

// 可以把不同的store 按照功能拆分
import { loginState, setIsLogin } from '@/store/loginStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: loginState
  },
  mutations: {
    setIsLogin
  }
})
