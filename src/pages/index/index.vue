<template>
  <div>
    <index-header :city="city"></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <index-hotshow :list="hotShowInfo"></index-hotshow>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import IndexHotshow from './hotshow'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      IndexHotshow
    },
    data () {
      return {
        city: '',
        swiperInfo: [],
        iconsInfo: [],
        hotShowInfo: []
      }
    },
    methods: {
      getIndexData () {
        const city = localStorage.city ? localStorage.city : ''
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
      },
      handleGetDataErr () {
        console.log('error')
      },
      bindEvents () {
        this.$bus.$on('change', this.handleCityChange.bind(this))
      },
      handleCityChange (value) {
        this.city = value
        this.getIndexData()
      }
    },
    created () {
      this.getIndexData()
      this.bindEvents()
    }
  }
</script>

<style></style>