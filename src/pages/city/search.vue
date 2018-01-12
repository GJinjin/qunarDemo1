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
    background: $bgColor
    height: .72rem
    .search-inp
      margin: 0 auto
      width: 7.2rem
      height: .62rem
      background: #fff
      border: 0
      text-align: center
      font-size: .26rem
      color: #9e9e9e
      display: block
      border-radius: .06rem
</style>