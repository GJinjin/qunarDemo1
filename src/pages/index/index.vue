<template>
  <div>
    <index-header :city="city"></index-header>
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
        city: '',
        swiperInfo: [],
        iconsInfo: [],
        hotShowInfo: [],
        weekendInfo: []
      }
    },
    methods: {
      getIndexData () {
        const city = localStorage.city ? localStorage.city : '北京'
        axios.get('/api/index.json?city=' + city)
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.iconList
        this.hotShowInfo = data.hotShowList
        this.city = data.city
        localStorage.city = data.city
        this.weekendInfo = data.weekendList
      },
      handleGetDataErr () {
        console.log('error')
      },
      bindEvents () {
        this.$bus.$on('change', this.handleCityChange.bind(this))
      },
      handleCityChange (value) {
        this.city = value
        localStorage.city = value
        // this.getIndexData()
      }
    },
    created () {
      this.getIndexData()
      this.bindEvents()
    }
  }
</script>

<style></style>