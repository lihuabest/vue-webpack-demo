import placeholder from '@/directives/placeholder'

/**
 * directives注册函数
 */
export default {
  install: (Vue) => {
    placeholder.install(Vue)
  }
}
