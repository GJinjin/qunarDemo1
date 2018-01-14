<template>
  <div class="today-container">
    <div class="title">
      <span class="iconfont tit-icon">&#xe602;</span>
      <span class="title-font">故宫当日票</span>
    </div>
    <div class="abult">
      <div>
        <span class="man">【当日票】故宫成人票</span>
        <span class="card">凭身份证入园</span>
      </div>
      <div class="ellipsis">...</div>
      <div>
        <span class="pic">￥50</span>
        <span class="iconfont">起&#xe62e;</span>
      </div>
    </div>
    <div class="abult">
      <div>
        <span class="man">【当日票】故宫成人票</span>
        <span class="card">凭身份证入园</span>
      </div>
      <div class="ellipsis">...</div>
      <div>
        <span class="pic">￥50</span>
        <span class="iconfont">起&#xe62e;</span>
      </div>
    </div>
    <div class="abult" v-if="notShow">
      <div>
        <span class="man">【当日票】故宫成人票</span>
        <span class="card">凭身份证入园</span>
      </div>
      <div class="ellipsis">...</div>
      <div>
        <span class="pic">￥50</span>
        <span class="iconfont">起&#xe62e;</span>
      </div>
    </div>
    <div class="see" v-if="isShow" @click="show">
    <span>查看剩余产品</span>
    <span class="iconfont">&#xe62e;</span>
    </div>

    <div class="title">
      <span class="iconfont tit-icon">&#xe602;</span>
      <span class="title-font">故宫成人票</span>
    </div>
    <div class="abult">
      <div>
        <span class="man">【当日票】故宫成人票</span>
        <span class="card">凭身份证入园</span>
      </div>
      <div class="ellipsis">...</div>
      <div>
        <span class="pic"></span>
        <span class="iconfont">起&#xe62e;</span>
      </div>
    </div>
    <div class="abult">
      <div>
        <span class="man">【当日票】故宫成人票</span>
        <span class="card">凭身份证入园</span>
      </div>
      <div class="ellipsis">...</div>
      <div>
        <span class="pic">￥50</span>
        <span class="iconfont">起&#xe62e;</span>
      </div>
    </div>
    <div class="abult" v-if="nShow">
      <div>
        <span class="man">【当日票】故宫成人票</span>
        <span class="card">凭身份证入园</span>
      </div>
      <div class="ellipsis">...</div>
      <div>
        <span class="pic"></span>
        <span class="iconfont">起&#xe62e;</span>
      </div>
    </div>
    <div class="see" v-if="iShow" @click="shows">
    <span>查看剩余产品</span>
    <span class="iconfont">&#xe62e;</span>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        isShow: true,
        notShow: false,
        iShow: true,
        nShow: false
      }
    },
    methods: {
      show () {
        this.isShow = false
        this.notShow = true
      },
      shows () {
        this.iShow = false
        this.nShow = true
      }
    }
  }
</script>

<style scoped lang="stylus">
  .title
    padding 0 .19rem
    line-height .86rem
    height .86rem
    border-bottom .01rem solid #d6d6d6
    font-size .32rem
    font-weight 700
    .tit-icon
      background #0bc1cc
      color #fff
  .abult
    display flex
    justify-content space-between
    padding 0 .39rem
    height .85rem
    line-height .85rem
    border-bottom 0.01rem solid #d6d6d6
    .man
      font-size .32rem
      font-weight 700
    .card
      font-size .28rem
    .ellipsis
      font-weight 700
    .pic
      color #f49700
     .iconfont
       font-size .28rem
  .see
    display flex
    justify-content center
    line-height .82rem
    height .82rem
    font-size .26rem
    border-bottom .16rem solid #f5f5f5
</style>