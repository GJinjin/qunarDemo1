<template>
  <div class="bottom">
    <p class="p1">
      <span>票面价</span>
      是指通过景区指定窗口购买的纸质门票上标注的价格
    </p>
    <div class="div1">
      <span>触屏版</span>
      <router-link to="/list"><span>电脑版</span></router-link>
      <p>Qunar 京ICP备05021087意见反馈</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-hotshow'
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .bottom
    height: 2.2rem
    .p1
      height: 1rem
      line-height: 1rem
      padding-left: .3rem
      font-size: .26rem
      font-weight: 500
      color: #000
    .p1 span
     font-size: .32rem 
     font-weight: 800
    .div1
      height: 1.2rem
      text-align: center
      background: $hotColor
    .div1 span 
      display: inline-block
      height: .55rem
      line-height: .55rem
      padding: 0 .2rem
    .div1 p
      height: .65rem
      line-height: .65rem
      color: #9c9e9c
</style>