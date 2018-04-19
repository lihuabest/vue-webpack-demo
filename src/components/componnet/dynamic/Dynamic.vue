<template>
  <div class="pl30 pt30 pr30">

    <div ref="extendRef">
      <button @click="extendClick">extend</button>
    </div>
    <div>
      <pre v-text="extendHtml"></pre>
    </div>

    <div>
      <button @click="modalClick">modal</button>
    </div>
    <div>
      <p class="mt10">直接定义可复用的模态组件，按钮点击事件通过rxjs的subject事件系统传递</p>
      <pre v-text="modalHtml"></pre>
    </div>

    <div>
      <button @click="modalComponentClick">modal component</button>
    </div>
    <div>
      <p class="mt10">模态组件内部 动态新增子组件</p>
      <pre v-text="modalComponent"></pre>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'

const extendHtml = `let Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
    data: function () {
      return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})

// 创建Profile实例，并挂载到一个元素上。
let div = document.createElement('div')
this.$refs.extendRef.appendChild(div)
// $mount方法是直接把挂载点整个替换了
new Profile().$mount(div)
`

const modalHtml = `let ins = this.$modal({
  title: 'modal title'
})

ins.clickOkEventSubject.subscribe(() => {
  console.log('ok click')
  ins.destroy()
})
`

const modalComponent = `let ins = this.$modal({
  title: 'modal component title',
  component: {
    template: '<p>this is {{message}}.</p>',
    data: function () {
      return {
        message: 'child component'
      }
    }
  }
})

ins.clickOkEventSubject.subscribe(() => {
  console.log(ins.$componentInstance.message)
  ins.destroy()
})
`

export default {
  name: 'Dynamic',
  data () {
    return {
      extendHtml,
      modalHtml,
      modalComponent
    }
  },
  methods: {
    extendClick () {
      let Profile = Vue.extend({
        template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
        data: function () {
          return {
            firstName: 'Walter',
            lastName: 'White',
            alias: 'Heisenberg'
          }
        }
      })

      // 创建Profile实例，并挂载到一个元素上。
      let div = document.createElement('div')
      this.$refs.extendRef.appendChild(div)
      // $mount方法是直接把挂载点整个替换了
      new Profile().$mount(div)
    },

    modalClick () {
      let ins = this.$modal({
        title: 'modal title'
      })

      ins.clickOkEventSubject.subscribe(() => {
        console.log('ok click')
        ins.destroy()
      })
    },

    modalComponentClick () {
      let ins = this.$modal({
        title: 'modal component title',
        component: {
          template: '<p>this is {{message}}.</p>',
          data: function () {
            return {
              message: 'child component'
            }
          }
        }
      })

      ins.clickOkEventSubject.subscribe(() => {
        console.log(ins.$componentInstance.message)
        ins.destroy()
      })
    }
  }
}
</script>

<style scoped>
  pre {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #CDCDCD;
  }
</style>
