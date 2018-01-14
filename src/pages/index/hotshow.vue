<template>
  <div class="hot">
    <div class="hot-title">热门推荐</div>
    <div class="scenic" v-for="item of list" :key="item.id">
      <router-link to="/details" class="scenic-link">
        <div class="scenic-left">
          <img class="scenic-img" :src="item.imgUrl">
        </div>
        <div class="scenic-right">
          <p class="p1">{{item.p1}}</p>
          <p class="p2">{{item.p2}}</p>
          <p class="p3">{{item.p3}}
            <span>起</span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="hot-more"><router-link to="/list">查看更多产品</router-link></div>
  </div>
</template>

<script>
  export default {
    name: 'index-hotshow',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .hot
    height: 10.75rem
    .hot-title
      margin-top: .2rem
      padding-left: .3rem
      height: .7rem
      line-height: .7rem
      background: $hotColor
      font-size: .32rem
    .scenic
      height: 1.35rem
      padding: .25rem
      border-bottom: 1px solid #e7e3e7
    .scenic-link
      display: flex
      width: 100%
    .scenic-left
      width: 1.32rem
      height: 1.32rem
      .scenic-img
        width: 100%
    .scenic-right
      flex: 1
      padding-left: .3rem
    .scenic-right p
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      width: 5.38rem
      height: .45rem
      line-height: .45rem
      font-size: .30rem
    .scenic-right .p1
      color: #000
    .scenic-right .p2
      color: #9c9e9c
    .scenic-right .p3
      color: #ff8200
      span
        padding-left: .1rem
        color: #9c9e9c
    .hot-more
      height: .7rem 
      line-height: .7rem
      text-align: center     
</style>