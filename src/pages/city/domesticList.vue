<template>
  <div>
    <div class="domestic-con" v-for="items of list" ref="type">
      <div class="area-tit">{{items.type}}</div>
      <div class="area-list">
        <div class="area-con" v-for="item of items.list">{{item}}</div>
      </div>
    </div>
    <ul class="domestic-list">
      <li v-for="(item, index) of list" @click="handleClick(index)">{{item.type}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'city-domesticList',
    props: {
      'list': Array,
      'type': String
    },
    methods: {
      handleClick (index) {
        let scrollTop = this.$refs.type[index].offsetTop
        // Chrome
        document.documentElement.scrollTop = scrollTop - 44
        // Firefox
        document.body.scrollTop = scrollTop - 44
        // Safari
        window.pageYOffset = scrollTop - 44
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
  .area-con
    height: .74rem
    line-height: .74rem
    padding-left: .22rem
    border-bottom: $borderStyle
  .domestic-list
    position: fixed
    right: .08rem
    top: 2.5rem
    color: $bgColor
    li
      padding: .08rem auto
      line-height: .28rem
</style>