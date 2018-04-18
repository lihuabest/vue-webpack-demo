import Vue from 'vue'
import Modal from './Modal.vue'

let MoldalConstructor = Vue.extend(Modal)
let instance

let MyModal = function (options) {
  instance = new MoldalConstructor({
    data: {
      options: options
    }
  })

  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}

export default MyModal
