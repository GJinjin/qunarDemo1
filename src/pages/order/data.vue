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
        <div class="subtract" @click="handleClickSub">-</div>
        <div class="number" v-model="num">{{num}}</div>
        <div class="plus" @click="handleClickPuls">+</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-data',
    data () {
      return {
        num: '1'
      }
    },
    methods: {
      handleClickSub: function () {
        this.num = parseInt(this.num, 10)
        if (this.num === 1) {
          this.num = 1
        } else {
          this.num = this.num - 1
        }
        this.changNumber(this.num)
      },
      handleClickPuls: function () {
        this.num = parseInt(this.num, 10)
        if (this.num === 5) {
          this.num = 5
        } else {
          this.num = this.num + 1
        }
        this.changNumber(this.num)
      },
      changNumber: function (num) {
        this.$emit('change', num)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .data
    height: 2.56rem
    margin-bottom: .21rem
    border-bottom: .01rem solid #e0e0e0
    background: #fff
    .data-day
      height: 1.32rem
      border-bottom: .01rem solid #e0e0e0
      .paly-date
        float: left
        width: 1.55rem
        line-height: 1.32rem
        text-align: center
      dl
        float: left
        width: 1.48rem
        height: .86rem
        line-height: .37rem
        text-align: center
        margin: .26rem 0 0 .33rem
        border: .01rem solid #ececec
        border-radius: .05rem
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
        float: left
        width: 1.55rem
        text-align: center
      .paly-open
        flex: 1
        color: #efefef
      .paly-arithmetic
        width: 1.96rem
        height: .64rem
        margin: .31rem .12rem
        border: .01rem solid #c7ced4
        .subtract
          float: left
          width: .56rem
          height: .56rem
          line-height: .56rem
          text-align: center
          margin: .05rem
          color: #cad1d7
          background: #f0f0f0
        .number
          float: left
          width: .54rem
          height: .56rem
          line-height: .56rem
          margin: .05rem
          text-align: center
        .plus
          float: left
          width: .56rem
          height: .56rem
          line-height: .56rem
          text-align: center
          margin: .05rem
          background: #00afc7
          color: #fff
</style>
