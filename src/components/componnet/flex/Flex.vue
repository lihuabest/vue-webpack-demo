<template>
  <div>
    <div class="box">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Flex'
}
</script>

<style scoped lang="scss">
  .box {
    height: 200px;
    background: #58a;
    display: flex;

    /*flex-direction 子项的排列顺序*/
    /*flex-direction: row;*/
    /*flex-direction: row-reverse;*/
    /*flex-direction: column;*/
    /*flex-direction: column-reverse;*/

    /*flex-wrap 子项换行方式*/
    /*flex-wrap: nowrap; // 默认值 不换行*/
    /*flex-wrap: wrap;*/
    /*flex-wrap: wrap-reverse;*/

    /*flex-direction flex-wrap两个属性的复合属性*/
    flex-flow: wrap;

    /*水平方向上flex子项的对齐方式*/
    /*justify-content: flex-start;*/ // 默认左对齐
    /*justify-content: flex-end;*/   // 右对齐
    /*justify-content: center;       // 居中对齐*/
    /*justify-content: space-between;  // 两端对齐*/
    /*justify-content: space-around;  // 两端等距对齐*/

    /*垂直方向上flex子项对齐方式*/
    align-items: stretch;

    .item {
      width: 50px;
      /*height: 50px;*/
      margin: 2px;
      background: #fb3;
      display: inline-block;
    }
  }
</style>
