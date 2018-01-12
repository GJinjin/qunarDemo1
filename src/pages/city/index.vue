<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-position></city-position>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CitySearch from './search'
  import CityPosition from './position'
  export default {
    name: 'city',
    components: {
      CityHeader,
      CitySearch,
      CityPosition
    }
  }
</script>

<style>

</style>
