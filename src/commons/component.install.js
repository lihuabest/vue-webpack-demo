import CollapseTransition from '@/commons/collapse.transition/CollapseTransition'

// 待注册的component组件
const components = [CollapseTransition]

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
