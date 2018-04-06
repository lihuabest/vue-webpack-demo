<template>
  <div>
    <h2>echarts</h2>
    <div>
      <router-link to="/">home</router-link>
      <!--<a href="javascript:;" @click="goHome">home</a>-->
    </div>
    <div id="chart"></div>
  </div>
</template>

<script>
export default {
  name: '',
  mounted () {
    console.log(this.$route)  // $route上包含url基本信息 包括查询参数 动态路由信息
    console.log(this.$router) // $router上包含跳转方法
    this.drawLine()
  },
  methods: {
    goHome () {
      this.$router.push({path: '/'})
    },
    drawLine () {
      let chart = this.$echarts.init(document.getElementById('chart'))
      chart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 30]
        }]
      })
    }
  }
}
</script>

<style scoped>
  #chart {
    width: 500px;
    height: 300px;
    display: inline-block;
    margin: 0 auto;
  }
</style>
