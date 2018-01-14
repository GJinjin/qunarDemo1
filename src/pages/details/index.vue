<template>
  <div>
    <det-picture :list="picListInfo"></det-picture>
    <det-message></det-message>
    <det-recomment :list="listInfo"></det-recomment>
    <det-today></det-today>
  </div>
</template>

<script>
  import DetPicture from './picture'
  import DetMessage from './message'
  import DetRecomment from './recommend'
  import DetToday from './today'
  import axios from 'axios'
  export default {
    components: {
      DetPicture,
      DetMessage,
      DetRecomment,
      DetToday
    },
    data () {
      return {
        listInfo: [],
        picListInfo: []
      }
    },
    created () {
      this.getDetailsSwiper()
    },
    methods: {
      getDetailsSwiper () {
        axios.get('/api/details.json')
        .then(this.handleSuccSwiper.bind(this))
        .catch(this.handleErrorSwiper.bind(this))
      },
      handleSuccSwiper (res) {
        const data = res.data.data
        this.listInfo = data.swiperList
        this.picListInfo = data.datils
      },
      handleErrorSwiper () {
        console.log('error')
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>