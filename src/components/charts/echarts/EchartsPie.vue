<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div id="pie"></div>
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
      let pie = this.$echarts.init(document.getElementById('pie'))
      let config = EchartPieConfig.getConfig()
      config.title[0].text = '浏览器'
      config.title[1].text = this.$tools.mumberTransform(435675)
      pie.setOption(config, null, {renderer: 'svg'})
    }
  }
}
</script>

<style scoped lang="scss">
  #pie {
    width: 500px;
    height: 300px;
    margin: 100px auto;
  }
</style>
