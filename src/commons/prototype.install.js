import Modal from './modal/Modal.vue'

// 带注册的prototype组件
const components = { Modal }

const install = (Vue) => {
  Object.keys(components).forEach(key => {
    let constructor = Vue.extend(components[key])
    let newkey = key.charAt(0).toLowerCase() + key.slice(1) // 组件名字首字母小写

    Vue.prototype['$' + newkey] = function (options) {
      let instance = new constructor({
        data: {
          options: options
        }
      })

      instance.$mount()
      document.body.appendChild(instance.$el)
      return instance
    }
  })
}

export default {
  install
}
