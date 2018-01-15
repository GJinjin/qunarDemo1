<template>
  <div>
    <index-header :city="$store.state.city"></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <index-hotshow :list="hotShowInfo"></index-hotshow>
    <index-weekend :list="weekendInfo"></index-weekend>
    <index-bottom></index-bottom>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import IndexHotshow from './hotshow'
  import IndexWeekend from './weekend'
  import IndexBottom from './bottom'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      IndexHotshow,
      IndexWeekend,
      IndexBottom
    },
    data () {
      return {
        swiperInfo: [],
        iconsInfo: [],
        hotShowInfo: [],
        weekendInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json?city=' + this.$store.state.city)
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.iconList
        this.hotShowInfo = data.hotShowList
        this.weekendInfo = data.weekendList
        if (!this.$store.state.city) {
          this.$store.commit('changeCity', data.city)
        }
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    },
    watch: {
      '$store.state.city' () {
        this.getIndexData()
      }
    }
  }
</script>

<style></style>