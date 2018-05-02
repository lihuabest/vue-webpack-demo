<template>
  <div class="container">
      <div class="phone">
        <div class="header">
          <span class="item">
            <i class="iconfont icon-icon--"></i>
            <input type="text">
          </span>
          <span class="item">
            <i class="iconfont icon-fenlei"></i>
          </span>
        </div>
        <div class="content">123</div>
        <div class="footer">
          <div class="item">
            <i class="iconfont icon-meishidashengjianjiao"></i>
            <div>推荐</div>
          </div>
          <div class="item">
            <i class="iconfont icon-palette"></i>
            <div>广场</div>
          </div>
          <div class="item">
            <i class="iconfont icon-wo"></i>
            <div>我的</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Flex'
}
</script>

<style scoped lang="scss">
  .container {
    height: 100%;
    .phone {
      width: 375px;
      height: 667px;
      margin: 0 auto;
      position: relative;
      top: 50px;
      border: 1px solid #dedede;
      display: flex;
      flex-flow: row wrap;
      >div {
        /*flex: 1 100%;*/
      }
      .footer {

      }
    }
  }
</style>
