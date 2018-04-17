<template>
  <div>
    <div class="row">
      <div class="col-6">
        <div id="pie"></div>
      </div>
      <div class="col-6">
        <div id="pie2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {EchartPieConfig} from '@/components/charts/echarts/config'

export default {
  name: 'EchartsPie',
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      let pie1 = this.$echarts.init(document.getElementById('pie'))
      pie1.setOption({
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

      let pie2 = this.$echarts.init(document.getElementById('pie2'))
      let config = EchartPieConfig.getConfig()
      config.title[0].text = '浏览器'
      config.title[1].text = this.$tools.mumberTransform(435675)
      pie2.setOption(config, null, {renderer: 'svg'})
    }
  }
}
</script>

<style scoped lang="scss">
  #pie, #pie2 {
    width: 500px;
    height: 300px;
    margin: 100px auto;
  }
</style>
