<template>
  <div class="header">
    <div class="back iconfont">&#xe6ba;</div>
    <div class="header-con" @click="handleSelected">
      <div class="area" :class="DomesticSelected">国内</div>
      <div class="area" :class="ForeignSelected" >国外</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-header',
    data () {
      return {
        DomesticSelected: '',
        ForeignSelected: ''
      }
    },
    created () {
      this.DomesticSelected = 'active'
    },
    methods: {
      handleSelected: function (e) {
        var target = e.target
        if (target.innerHTML === '国内') {
          this.DomesticSelected = 'active'
          this.ForeignSelected = ''
        }
        if (target.innerHTML === '国外') {
          this.ForeignSelected = 'active'
          this.DomesticSelected = ''
          this.show = false
        }
      }
    }
  }
</script>

<style lang='stylus' scoped>
  @import '../../assets/stylus/varibles.styl'
  .header
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    font-size: .26rem
    overflow: hidden
    position: relative
    .back
      padding-left: .22rem
      padding-right: .22rem
      position: absolute
    .header-con
      width: 4.04rem
      height: .6rem
      border: .02rem solid #fff
      border-radius: .06rem
      margin: .14rem auto
      line-height: .74rem
      text-align: center
      display: flex
      .area
        width: 2.02rem
      .active
        background: #fff
        color: $bgColor
</style>