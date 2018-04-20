import axios from './base'

export default {
  loggedIn () {
    return !!window.sessionStorage.getItem('login')
  }
}
