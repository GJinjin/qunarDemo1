<template>
  <div>
    <div class="position">
      <div class="area-tit">您的位置</div>
      <div class="position-address">
        <div class="area-name">{{$store.state.city}}</div>
      </div>
    </div>
    <div class="hot-city">
      <div class="area-tit">热门城市</div>
      <div class="hot-city-con">
        <div class="area-name" v-for="item of list" :key="item.id" @click="handleClick" >
          {{item.position}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-domestic',
    props: {
      list: Array
    },
    methods: {
      handleClick (e) {
        this.$store.commit('changeCity', e.target.innerHTML)
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .area-tit
    height: .52rem
    line-height: .52rem
    padding-left: .3rem
    border-bottom: $borderStyle
    border-top: $borderStyle
    background: #f5f5f5
    color: #5f5f5f
  .area-name
    display: block
    height: .56rem
    width: 2.04rem
    line-height: .56rem
    text-align: center
    margin: .24rem .3rem
    border: $borderStyle
    border-radius: .06rem
    color: $bgColor
  .position
    font-size: .26rem
    .position-address
      overflow: hidden
      height: 1.08rem
      .area-name
        border-color: $bgColor
  .hot-city-con
    margin-bottom: .24rem
    .area-name
      display: inline-block
      margin-right: 0
      margin-bottom: 0
      color: #000
</style>