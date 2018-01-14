<template>
  <div class="mes-container">
    <div class="addres">
      <div>
      <span class="iconfont">&#xe62c;</span>
      <span>北京市东城区景山前街4号</span>
      </div>
      <div class="iconfont">&#xe62d;</div>
    </div>
    <div class="about">
      <div>
        <span class="iconfont">&#xe67b;</span>
        <span>查看景点介绍及开放时间</span>
      </div>
      <div class="iconfont">&#xe62d;</div>
    </div>
    <div class="talk">
      <div>
        <span class="iconfont">&#xe60c;</span>
        <span class="iconfont">&#xe60d;&#xe60d;&#xe60d;&#xe60d;&#xe643;</span>
        <span>4.0分</span>
      </div>
      <span class="iconfont">175170评论 &#xe62d;</span>
    </div>
    <div class="tell">
      <span><span class="iconfont">&#xe74c; </span>除法定节假日，故宫博物院实行周一闭馆。</span>
      <span class="iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="stylus">
  .mes-container
    box-sizing content-box
    padding 0 .27rem 0 .2rem
    background #fff
    .addres
      display flex
      justify-content space-between
      line-height .96rem
      height .96rem
      width 100%
    .about
      display flex
      justify-content space-between
      line-height .9rem
      height .9rem
      width 100%
      boder-bottom .2rem solid #666
    .talk
      display flex
      justify-content space-between
      line-height .9rem
      height 1.07rem
      width 100%
      boder-bottom .2rem solid #f5f5f5
    .tell
      display flex
      justify-content space-between
      line-height .9rem
      height 1.07rem
      width 100%
      boder-bottom .2rem solid #f5f5f5
      color red
</style>