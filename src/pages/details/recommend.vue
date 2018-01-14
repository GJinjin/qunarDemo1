<template>
  <div class="rec-container">
    <div class="header">
      <span class="iconfont iconfont-change">&#xe601;</span>
      <span class="title">去哪推荐</span>
    </div>
    <div class="container" v-for="item of list" :key="item.id">
      <div class="con-left">
        <div class="top">{{item.title}}</div>
        <div class="bottom">
          <span><span class="iconfont" v-html="item.canbuyicon"></span> {{item.canbuyiconfont}}</span>
          <span><span class="iconfont" v-html="item.noretreat"></span> {{item.noretreatfont}}</span>
        </div>
      </div>
      <div class="con-right">
        <p class="money">{{item.price}}</p>
        <router-link to="/order"><div class="reserve">预定</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list']
  }
</script>

<style scoped lang="stylus">
  .rec-container
    box-sizzing content-box
    padding 0 .21rem 0 .21rem
    border-bottom 0.01rem solid #444
    .header
      line-height .83rem
      height .83rem
      border-bottom 0.01rem solid #666
      font-size .3rem
      color #363636
    .iconfont-change
      background #eb7571
      color #fff
    .container
      display flex
      justify-content space-between
      height 2rem
      padding .17rem 0
      .con-left
        .top
          margin-top .1rem
          font-size .26rem
          font-weight 700
        .bottom
          margin-top .35rem
      .con-right
        height 1.9rem
        border-left 0.01rem solid #dadada
        padding-left .2rem
        .money
          text-align center
          margin-top .38rem
          font-size .28rem
          color #ff9700
        .reserve
          line-height .6rem
          text-align center
          width 1.6rem
          height .6rem
          border-radius .1rem
          background #ff9700
          color #fff
          font-size .24rem


</style>