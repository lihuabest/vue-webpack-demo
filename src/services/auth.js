import axios from './base'

export default {
  login () {
    console.log(axios)
  },
  loggedIn () {
    return !!window.localStorage.getItem('token')
  }
}
