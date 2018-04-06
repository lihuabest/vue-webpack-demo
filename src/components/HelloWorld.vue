<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>lihua</h2>
    <h2>
      <router-link to="/lazy">lazy</router-link>
      <router-link to="/echarts">echarts</router-link>
      <router-link to="/login">login</router-link>
    </h2>
    <h2>
      <button @click="httpClick">http 位置请求</button>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    httpClick () {
      // 新浪位置查询
      this.$http.get('/iplookup/iplookup.php?format=json').then(res => {
        alert(`所属位置：${res.country} ${res.province} ${res.city}`)
      }).catch(err => {
        alert('http 查询错误：' + err.toString())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
