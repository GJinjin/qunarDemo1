<template>
  <div class="passenger">
    <div class="passenger-tourist">
      <div class="tourist">
        游客1
      </div>
      <div class="tourist-name">
        <input type="text"
               placeholder="游客姓名"
               v-model="inputValue1"
               @blur="handleBlur1">
      </div>
      <div class="contacts iconfont">&#xe6d2;</div>
    </div>
    <div class="passenger-phone">
      <div class="mobile">
        手机号
      </div>
      <div class="cell-phone">
        <div class="area">+86></div>
        <input type="text"
               placeholder="请填写手机号"
               v-model="inputValue2"
               @blur="handleBlur2">
      </div>
    </div>
    <div class="passenger-identity">
      <div class="identity">
        身份证
      </div>
      <div class="identity-card">
        <input type="text"
               placeholder="请输入正确的身份证号码"
               v-model="inputValue3"
               @blur="handleBlur3">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-passenger',
    props: ['number'],
    data () {
      return {
        inputValue1: '',
        inputValue2: '',
        inputValue3: '',
        info: [],
        num: '1',
        createDom: []
      }
    },
    methods: {
      handleBlur1: function () {
        var nameReg = /[\u4e00-\u9fa5]{2,}/
        if (nameReg.test(this.inputValue1)) {
        } else {
          this.info1 = '输入正确的名字'
          this.info.push(this.info1)
        }
        this.getInfo(this.info)
      },
      handleBlur2: function () {
        var telReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        if (telReg.test(this.inputValue2)) {
        } else {
          this.info2 = '手机号输入有误'
          this.info.push(this.info2)
        }
        this.getInfo(this.info)
      },
      handleBlur3: function () {
        var idReg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
        if (idReg.test(this.inputValue3)) {
        } else {
          this.info3 = '身份证输入有误'
          this.info.push(this.info3)
        }
        this.getInfo(this.info)
      },
      getInfo: function (info) {
        this.$emit('blur', info)
      },
      changeNumber: function (num) {
        this.$emit('change', num)
      }
    }
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
          float: left
          width: .73rem
          height: .53rem
          line-height: .53rem
          text-align: center
          margin: .25rem .15rem 0 0
          border: .01rem solid #ccc
          color: #ccc
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
