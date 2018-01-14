<template>
  <div class="character">
    <div class="char-left">
      <p class="left-p">
        [上午场]故宫成人票+故宫全景手绘地图
      </p>
      <p class="left-pl">
        <div class="left-time iconfont">&#xe6ce;2018-01-11</div>
        <div class="left-fade iconfont">&#xe6d5;不可退</div>
      </p>
    </div>
    <div class="char-right">
      <div class="right-div">
        <p class="right-p">￥50</p>
        起/张
      </div>
      <p class="right-p1">
        预定通知
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-character'
  }
</script>

<style lang="stylus" scoped>
  .character
    display: flex
    height: 1.65rem
    font-size: .35rem
    border-bottom: .01rem solid #e0e0e0
    margin-bottom: .22rem
    background: #fff
    .char-left
      width: 4.94rem
      height: 1.2rem
      line-height: .44rem
      margin: .24rem .22rem
      .left-time
        float: left
        width: 2.5rem
        font-size: .18rem
      .left-fade
        float: left
        width: 1.5rem
        font-size: .18rem
    .char-right
      width: 2.11rem
      font-size: .3rem
      .right-div
        float: left
        margin: .22rem .21rem 0 .54rem
        .right-p
          float: left
          color: #ff8300
      .right-p1
        font-size: .22rem
        padding: .78rem .16rem .6rem .9rem
        color: #7bdce9
</style>
