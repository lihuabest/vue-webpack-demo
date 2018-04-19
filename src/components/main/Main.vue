<template>
  <div class="main-container">
    <Header></Header>
    <div class="main-content-container">
      <Aside></Aside>
      <transition name="fade" mode="out-in">
        <router-view class=""></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from '@/components/main/header/Header'
import Aside from '@/components/main/aside/Aside'

export default {
  name: 'Main',
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="scss">
  .main-container {
    height: 100%;
  }
  .main-content-container {
    margin-left: $sidebarWidth;
    height: calc(100% - #{$headerHeight}); // 这里的scss有点奇怪
    overflow: auto;
  }
</style>
