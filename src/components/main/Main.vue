<template>
  <div>
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
import Header from './header/Header'
import Aside from './aside/Aside'

export default {
  name: 'Main',
  components: {
    Header,
    Aside
  }
}
</script>

<style lang="scss">
  .main-content-container {
    margin-top: $headerHeight;
    margin-left: $sidebarWidth;
  }
</style>
