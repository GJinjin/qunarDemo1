<template>
  <div class="nav">
    <ul class="ul">
       <li class="lis" @click = 'handleBtnClick1'>全部分类
        <div class="firstSon" v-show = "show1">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </div>
       </li>
       <li class="lis" @click = 'handleBtnClick2'>全部目的地
        <div class="secondSon" v-show = "show2">全部目的地</div>
       </li>
       <li class="lis" @click = 'handleBtnClick3'>推荐排序
        <div class="thridSon" v-show = "show3">推荐排序</div>
       </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'index-nav',
  data () {
    return {
      show1: false,
      show2: false,
      show3: false
    }
  },
  methods: {
    handleBtnClick1 () {
      this.show1 = !this.show1
      this.show2 = false
      this.show3 = false
    },
    handleBtnClick2 () {
      this.show2 = !this.show2
      this.show1 = false
      this.show3 = false
    },
    handleBtnClick3 () {
      this.show3 = !this.show3
      this.show1 = false
      this.show2 = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .nav
    height:0.8rem
    .ul
      display: flex
      width:100%
      height:100%
      .lis
        position:relative
        flex:1
        float:left
        height:100%
        text-align:center
        line-height:0.8rem
        border: 1px solid #eee
        color: #333
        .firstSon
          position: absolute
          overflow-y: scroll
          width:300%
          height: 3rem
          background: #eee
          font-size: 0.5rem
        .secondSon
          position: absolute
          left:-102%
          width:300%
          height: 3rem
          background: #eee
          font-size: 0.5rem
        .thridSon
          position: absolute
          left: -203%
          width:300%
          height: 3rem
          background: #eee
          font-size: 0.5rem
</style>