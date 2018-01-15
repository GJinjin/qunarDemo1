<template>
  <div>
    <city-header></city-header>
    <city-search @searchCity="handleShowCity"></city-search>
    <city-show v-if="show" :showCity="showCity"></city-show>
    <city-domestic :list="cityList"></city-domestic>
    <city-domestic-list :list="cityDomesticList"></city-domestic-list>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CitySearch from './search'
  import CityShow from './searchCity'
  import CityDomestic from './domestic'
  import CityDomesticList from './domesticList'
  import axios from 'axios'
  export default {
    name: 'city',
    components: {
      CityHeader,
      CitySearch,
      CityDomestic,
      CityDomesticList,
      CityShow
    },
    data () {
      return {
        cityList: [],
        cityDomesticList: [],
        showCity: [],
        show: false
      }
    },
    methods: {
      getCityData () {
        axios.get('/api/city.json?city=' + this.$store.state.city)
            .then(this.handleGetDataSucc.bind(this))
            .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.cityList = data.domesticHotCity
        this.cityDomesticList = data.cityDomesticList
      },
      handleGetDataErr () {
        console.log('error')
      },
      handleShowCity (e) {
        var domesticList = []
        var cityListLength = this.cityDomesticList.length
        if (e) {
          var reg = /^[\u4e00-\u9fa5]+$/
          if (reg.test(e)) {
            this.showCity = []
            for (var i = 0; i < cityListLength; i++) {
              var domesticCityList = this.cityDomesticList[i].list
              domesticList.push(domesticCityList)
            }
            var list = domesticList.length
            for (var j = 0; j < list; j++) {
              var item = domesticList[j].length
              for (var k = 0; k < item; k++) {
                if (domesticList[j][k].indexOf(e) !== -1) {
                  this.showCity.push(domesticList[j][k])
                }
              }
            }
          }
          if (this.showCity) {
            this.show = true
          } else {
            this.show = false
          }
        } else {
          this.showCity = []
          this.show = false
        }
      }
    },
    created () {
      this.getCityData()
    }
  }
</script>

<style>

</style>
