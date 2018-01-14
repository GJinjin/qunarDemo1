<template>
  <div class="header">
    <router-link to="./list">
      <div class="back iconfont">
        &#xe6ba;
      </div>
    </router-link>
    <div class="fill">
      订单填写
    </div>
    <div class="enter">
      登录
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-header'
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .fill
      flex: 1
      text-align: center
    .enter
      padding: 0 .2rem 0 .6rem
    .back
      width: .58rem
      text-align: center
      font-size: .4rem
      font-weight: bold
      color: #fff  
</style>
