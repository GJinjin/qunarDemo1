<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <div class="weekend-con" v-for="item of list" :key="item.id">
      <router-link to="/list">
        <div class="weekend-img">
          <img src="" class="photo" :src="item.imgUrl">
        </div>
        <div class="introduce">
          <p class="p1">{{item.p1}}</p>
          <p class="p2">{{item.p2}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-weekend',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
    .weekend-title
      height: .8rem
      line-height: .8rem
      background: $hotColor
      padding-left: .3rem
    .weekend-con
      border-bottom: .2rem solid $hotColor
    .weekend-img
      overflow: hidden
      height: 0
      padding-bottom: 37%
      .photo
        width: 100%
    .introduce
      height: 1.69rem
      .p1
        height: 1rem
        line-height: 1rem
        padding-left: .3rem
        font-size: .37rem
        color: #212021
      .p2
        height: .69rem
        line-height: .69rem
        padding-left: .3rem
        font-size: .32rem
        color: #636163
</style>
