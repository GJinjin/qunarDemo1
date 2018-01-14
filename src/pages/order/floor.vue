<template>
  <div class="floor">
    <div class="price">
      <div class="total-price">
        <div class="total">产品价格 ￥</div>
        <div class="price">{{number*50}}</div>
      </div>
      <div class="up iconfont">&#xe600;</div>
    </div>
    <div class="order" @click="handleClick">
      提交订单
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-floor',
    props: ['number', 'info'],
    methods: {
      handleClick () {
        alert(this.info)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .floor
    display: flex
    width: 100%
    height: .74rem
    position: fixed
    bottom: 0
    border-top: .01rem solid #c9cccd
    .price
      flex: 50%
      .total-price
        float: left
        width: 1.8rem
        margin: .28rem .12rem 0 .2rem
        font-size: .22rem
        color: #ff890d
        .total
          float: left
          margin: .04rem 0 0 0
        .price
          float: left
          font-size: .29rem
      .up
        margin: .3rem 1.1rem 0 0
    .order
      flex: 50%
      line-height: .74rem
      text-align: center
      color: #fff
      background: #ff9800
</style>
