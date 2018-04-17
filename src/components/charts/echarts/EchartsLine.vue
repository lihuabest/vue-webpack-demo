<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div id="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {EchartLineConfig} from '@/components/charts/echarts/config'

export default {
  name: 'EchartsLine',
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      let line = this.$echarts.init(document.getElementById('line'))
      let config = EchartLineConfig.getConfig()
      line.setOption(config, null, {renderer: 'svg'})
    }
  }
}
</script>

<style scoped>
  #line {
    width: 1000px;
    height: 300px;
    margin: 100px auto;
    background: rgba(0, 0, 0, .8);
  }
</style>
