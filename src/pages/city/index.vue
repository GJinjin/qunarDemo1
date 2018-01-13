<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-domestic :list="cityList" :city="city"></city-domestic>
    <city-domestic-list :list="cityDomesticList"></city-domestic-list>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CitySearch from './search'
  import CityDomestic from './domestic'
  import CityDomesticList from './domesticList'
  import axios from 'axios'
  export default {
    name: 'city',
    components: {
      CityHeader,
      CitySearch,
      CityDomestic,
      CityDomesticList
    },
    data () {
      return {
        city: '',
        cityList: [],
        cityDomesticList: []
      }
    },
    methods: {
      getCityData () {
        const city = localStorage.city ? localStorage.city : ''
        axios.get('/api/city.json?city=' + city)
            .then(this.handleGetDataSucc.bind(this))
            .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.city = data.city
        this.cityList = data.domesticHotCity
        this.cityDomesticList = data.cityDomesticList
        // this.$bus.$emit('change', data.city)
        localStorage.city = data.city
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getCityData()
    }
  }
</script>

<style>

</style>
