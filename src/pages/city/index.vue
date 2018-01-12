<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-domestic :content="position" :list="cityList"></city-domestic>
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
        position: '',
        cityList: [],
        cityDomesticList: []
      }
    },
    methods: {
      getCityData () {
        axios.get('/api/city.json')
            .then(this.handleGetDataSucc.bind(this))
            .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.position = data.position
        this.cityList = data.domesticHotCity
        this.cityDomesticList = data.cityDomesticList
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
