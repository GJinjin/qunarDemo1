<template>
  <div class="header">
    <div class="back iconfont">&#xe6ba;</div>
    <div class="search">
      <span class="iconfont search-icon">&#xe998;</span>
      请输入搜素内容
    </div>
    <div class="city">
      <router-link to="/city" class="city-name">{{city}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-header',
    props: ['city']
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .back
      width: .58rem
      text-align: center
      font-size: .4rem
      font-weight: bold
    .search
      flex: 1
      height: .6rem
      line-height: .6rem
      margin: .14rem .2rem
      padding-left: .4rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .city
      padding-right: .6rem
      position: relative
      .city-name
        color: #fff
    &:before
      position: absolute
      top: .34rem
      right: .2rem
      content: "\0020"
      width: 0
      height: 0
      border-left: .14rem solid transparent
      border-right: .14rem solid transparent
      border-top: .14rem solid #fff
</style>