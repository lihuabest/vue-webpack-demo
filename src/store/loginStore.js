/**
 * state isLogin
 * @type {{isLogin: boolean}}
 */
const loginState = {
  isLogin: false
}

/**
 * mutations getIsLogin
 * @param state
 */
const setIsLogin = (state, value) => {
  state.login.isLogin = value
}

export {
  loginState,
  setIsLogin
}
