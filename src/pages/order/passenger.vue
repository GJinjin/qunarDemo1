<template>
  <div class="passenger">
    <div class="passenger-tourist">
      <div class="tourist">
        游客1
      </div>
      <div class="tourist-name">
        <input type="text" placeholder="游客姓名">
      </div>
      <div class="contacts iconfont">&#xe6d2;</div>
    </div>
    <div class="passenger-phone">
      <div class="mobile">
        手机号
      </div>
      <div class="cell-phone">
        <div class="area">+86></div>
        <input type="text" placeholder="请填写手机号">
      </div>
    </div>
    <div class="passenger-identity">
      <div class="identity">
        身份证
      </div>
      <div class="identity-card">
        <input type="text" placeholder="请输入正确的身份证号码">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-passenger'
  }
</script>

<style lang="stylus" scoped>
  .passenger
    height: 2.98rem
    background: #fff
    .passenger-tourist
      display: flex
      height: .98rem
      border-bottom: .01rem solid #e0e0e0
      .tourist
        width: 1.26rem
        line-height: .98rem
        text-align: center
      .tourist-name
        flex: 1
        margin-left: .63rem
        line-height: .98rem
        input
          width: 5rem
          height: .88rem
          border: none
      .contacts
        width: .32rem
        height: .32rem
        margin: .34rem .15rem
        color: #3cb5c4
    .passenger-phone
      display: flex
      height: .98rem
      border-bottom: .01rem solid #e0e0e0
      .mobile
        width: 1.26rem
        line-height: .98rem
        text-align: center
      .cell-phone
        flex: 1
        line-height: .98rem
        margin-left: .64rem
        .area
          width: .73rem
          height: .53rem
          line-height: .53rem
          text-align: center
          border: .01rem solid #ccc
          color: #ccc
          margin: .25rem .15rem 0 0
          float: left
        input
          width:4.65rem
          height: .88rem
          border: none
    .passenger-identity
      display: flex
      height: .98rem
      border-bottom: .01rem solid #e0e0e0
      .identity
        width: 1.26rem
        line-height: .98rem
        text-align: center
      .identity-card
        flex: 1
        margin-left: .63rem
        line-height: .98rem
        input
          width: 5.6rem
          height: .88rem
          border: none
</style>
