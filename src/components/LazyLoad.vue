<template>
  <div>
    <div>lazy load</div>
    <div>
      <router-link to="/">home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LazyLoad',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

</style>
