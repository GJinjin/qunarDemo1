<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-domestic></city-domestic>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CitySearch from './search'
  import CityDomestic from './domestic'
  export default {
    name: 'city',
    components: {
      CityHeader,
      CitySearch,
      CityDomestic
    }
  }
</script>

<style>

</style>
