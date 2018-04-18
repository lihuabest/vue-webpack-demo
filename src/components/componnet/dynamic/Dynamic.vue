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

export default {
  name: 'Dynamic',
  data () {
    return {
      extendHtml
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

      ins.clickEventsSubject.subscribe(data => {
        console.log(data)
      })

      console.log(ins)
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
