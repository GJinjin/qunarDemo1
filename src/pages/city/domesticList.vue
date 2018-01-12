<template>
  <div>
    <div class="domestic-con" v-for="items of list">
      <div class="area-tit">{{items.type}}</div>
      <div class="area-list" v-for="item of items.list">
        <div class="area-con">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-domesticList',
    props: ['list']
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .area-tit
    height: .52rem
    line-height: .52rem
    padding-left: .3rem
    border-bottom: $borderStyle
    border-top: $borderStyle
    background: #f5f5f5
    color: #5f5f5f
  .area-con
    height: .74rem
    line-height: .74rem
    padding-left: .22rem
    border-bottom: $borderStyle
</style>