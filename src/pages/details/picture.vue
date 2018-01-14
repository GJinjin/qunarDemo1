<template>
  <div>
   <div class="pic">
   <router-link to="/">
      <div class="pic-icon iconfont">&#xe6ba;</div>
    </router-link>
    <div @click.prevent="handlePicShow">
      <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_800x800_04f227ef.jpg" class="pic-img">
    </div>
    <div class="pic-name">
      <div class="pic-name-left">故宫(AAAAA级景区)</div>
      <div class="pic-name-right">
        <span class="iconfont">&#xe67b;</span>
        <span>10</span>
        </div>
    </div>
   </div>
   <div class="showPic" v-show="isShow">
     <div class="top" @click="handleClick"></div>
     <div class="bottom">
       <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id">
          <img :src="item.url" class="img">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination" style="color:#fff;"></div>
        </swiper>
      </div>
   </div>
  </div>
</template>

<script>
  export default {
    props: ['list'],
    data () {
      return {
        isShow: false,
        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    methods: {
      handlePicShow () {
        this.isShow = true
      },
      handleClick () {
        this.isShow = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  .pic
    position: relative
    height: 0
    padding-bottom: 4.04rem
    color: #fff
    .pic-icon
      position: absolute
      top: 0.1rem
      left: 0.1rem
      text-align center
      line-height .76rem
      width: .76rem
      height: .76rem
      border-radius: 50%
      content: "\0020"
      background: #5d6572
      color #fff
    .pic-img
      height: 4.04rem
      width: 100%
    .pic-name
      position: absolute
      bottom: .22rem
      display flex
      justify-content space-between
      box-sizing border-box
      padding: 0 .22rem
      width 100%
  .showPic
    position fixed
    top 0
    left 0
    z-index 10000
    display flex
    flex-direction column
    justify-content space-between
    width 100%
    height 100%
    background #000
    .top
      height 3rem
      width 100%
    .bottom
      flex 1
      width 100%
      .img
        width 100%
        height 7.5rem
</style>