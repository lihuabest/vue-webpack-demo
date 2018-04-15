<template>
  <div class="main-aside-container">
    <Tree :navigations="navigations" :navigations-all="navigations" index="0"></Tree>
  </div>
</template>

<script>
import Tree from '@/components/main/aside/tree/Tree'
import navigations from '@/router/navigations'

export default {
  name: '',
  components: {
    Tree
  },
  data () {
    return {
      navigations
    }
  },
  created () {

  }
}
</script>

<style lang="scss">
  .main-aside-container {
    width: $sidebarWidth;
    position: fixed;
    top: $headerHeight;
    left: 0;
    bottom: 0;
    background: rgba($basicColor, .9);
  }
</style>
