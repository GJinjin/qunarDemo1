<template>
  <div>
    <div class="position">
      <div class="area-tit">您的位置</div>
      <div class="position-address">
        <div class="area-name">{{content}}</div>
      </div>
    </div>
    <div class="hotCity">
      <div class="area-tit">热门城市</div>
      <div class="hotCity-con">
        <div class="area-name" v-for="item of list" :key="item.id" >{{item.position}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-domestic',
    props: {
      content: String,
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .area-tit
    height: .52rem
    line-height: .52rem
    padding-left: .3rem
    border-bottom: $borderStyle
    background: #f5f5f5
    color: #5f5f5f
  .area-name
    height: .56rem
    width: 2.04rem
    line-height: .56rem
    text-align: center
    border: $borderStyle
    margin: .24rem .3rem
    border-radius: .06rem
    color: $bgColor
    display: block
  .position
    font-size: .26rem
    .position-address
      overflow: hidden
      height: 1.08rem
      border-bottom: $borderStyle
      .area-name
        border-color: $bgColor
  .hotCity-con
    .area-name
      display: inline-block
      margin-right: 0
      color: #000
      margin-bottom: 0   
</style>