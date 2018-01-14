<template>
  <div class="search-city">
    <div class="city-show" v-for="item of showCity">{{item}}</div>
  </div>
</template>

<script>
  export default {
    name: 'city-show',
    props: {
      showCity: Array
    }
  }
</script>

<style lang="stylus" scoped>
.search-city
  position: absolute;
  top: 1.6rem;
  width: 100%;
  z-index: 1
  background: #fff;
  .city-show
    overflow: hidden
    width: 100%
    line-height: .76rem
    padding-left: .2rem
    text-overflow: ellipsis
    white-space: nowrap
    border-top: 1px solid #f5f5f5
    color: #21212
</style>