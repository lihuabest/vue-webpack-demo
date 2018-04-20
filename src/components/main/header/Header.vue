<template>
  <div class="header-container">
    <div>
      <ul class="header-navi-container">
        <!--<li>-->
          <!--<i class="iconfont icon-ico_safeschool"></i>-->
          <!--<div>首页</div>-->
        <!--</li>-->
        <!--<li>-->
          <!--<i class="iconfont icon-ico_settings"></i>-->
          <!--<div>控制面板</div>-->
        <!--</li>-->
        <!--<li>-->
          <!--<i class="iconfont icon-ico_authorization"></i>-->
          <!--<div>权限管理</div>-->
        <!--</li>-->
        <li @click="logout">
          <i class="iconfont icon-ico_logout1"></i>
          <div>退出</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {
    logout () {
      this.$store.commit('setIsLogin', false)
      this.$router.push({ path: '/login' })
      window.sessionStorage.removeItem('login')
    }
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .header-container {
    height: $headerHeight;
    > div {
      height: $headerHeight;
      background: $basicColor;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
    }
  }
  .header-navi-container {
    float: right;
    margin-right: 50px;
    text-align: center;
    height: 100%;
    li {
      height: 100%;
      color: rgba($basicHighLightColor, .6);
      display: inline-block;
      padding: 0 10px;
      transition: $basicTransition;
      cursor: pointer;
      min-width: 40px;
      &.checked, &:hover {
        color: $basicHighLightColor;
      }
    }
    i {
      font-size: 24px;
    }
  }
</style>
