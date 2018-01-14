<template>
 <div>
    <div class="list" v-for = "item of list" :key = "item.id">
      <div class="pic"><img class = 'pic_img' :src='item.imgUrl'></div>
      <div class="list_info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list:Array
  },
  name: 'index-list',
  data () {
  return {
    infoList: []
  }
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .list
    height: 2rem
    background:#fff
    padding:2%
    .pic
      height: 1.8rem
      width: 2rem
      float:left
      background:#ccc
      .pic_img
        width:100%
        height:100%
    .list_info
      height: 1.7rem
      width: 66%
      padding: 2%
      float:left
      line-height:0.32rem
</style>