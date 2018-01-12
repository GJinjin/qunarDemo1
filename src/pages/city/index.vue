<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-domestic :content="position" :list="cityList"></city-domestic>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CitySearch from './search'
  import CityDomestic from './domestic'
  import axios from 'axios'
  export default {
    name: 'city',
    components: {
      CityHeader,
      CitySearch,
      CityDomestic
    },
    data () {
      return {
        position: '',
        cityList: []
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
        this.cityList = data.hotCity
      },
      handleGetDataErr () {
        console.log('请求失败')
      }
    },
    created () {
      this.getCityData()
    }
  }
</script>

<style>

</style>
