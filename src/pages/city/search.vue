<template>
  <div class="search">
    <input class="search-inp" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
  export default {
    name: 'city-search'
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/stylus/varibles.styl'
  .search
    height: .72rem
    margin-top: .88rem
    background: $bgColor
    .search-inp
      display: block
      width: 7.2rem
      height: .62rem
      margin: 0 auto
      text-align: center
      font-size: .26rem
      background: #fff
      border: 0      
      border-radius: .06rem
      color: #9e9e9e
</style>