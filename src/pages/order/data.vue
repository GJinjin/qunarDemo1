<template>
  <div class="data">
    <div class="data-day">
      <div class="paly-date">
        游玩日期
      </div>
      <dl class="date-dl">
        <dt>今天</dt>
        <dd>1月11日</dd>
      </dl>
      <dl>
        <dt>明天</dt>
        <dd>1月12日</dd>
      </dl>
      <dl class="date-dt">
        <dt>其他日期</dt>
      </dl>
    </div>
    <div class="data-play">
      <div class="paly-number">
        购买数量
      </div>
      <div class="paly-open">
        最多购买5张
      </div>
      <div class="paly-arithmetic">
        <div class="subtract">-</div>
        <div class="number">1</div>
        <div class="plus">+</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-data'
  }
</script>

<style lang="stylus" scoped>
  .data
    height: 2.56rem
    border-bottom: .01rem solid #e0e0e0
    background: #fff
    margin-bottom: .21rem
    .data-day
      height: 1.32rem
      border-bottom: .01rem solid #e0e0e0
      .paly-date
        width: 1.55rem
        line-height: 1.32rem
        text-align: center
        float: left
      dl
        width: 1.48rem
        height: .86rem
        border: .01rem solid #ececec
        border-radius: .05rem
        line-height: .37rem
        text-align: center
        float: left
        margin: .26rem 0 0 .33rem
        font-size: .24rem
      .date-dl
        color: #efefef
      .date-dt
        line-height: .86rem
    .data-play
      display: flex
      height: 1.23rem
      line-height: 1.23rem
      .paly-number
        width: 1.55rem
        text-align: center
        float: left
      .paly-open
        flex: 1
        color: #efefef
      .paly-arithmetic
        width: 1.96rem
        height: .64rem
        border: .01rem solid #c7ced4
        margin: .31rem .12rem
        .subtract
          width: .56rem
          height: .56rem
          background: #f0f0f0
          color: #cad1d7
          float: left
          margin: .05rem
          line-height: .56rem
          text-align: center
        .number
          width: .54rem
          height: .56rem
          line-height: .56rem
          text-align: center
          float: left
          margin: .05rem
        .plus
          width: .56rem
          height: .56rem
          background: #00afc7
          float: left
          margin: .05rem
          line-height: .56rem
          text-align: center
          color: #fff
</style>
