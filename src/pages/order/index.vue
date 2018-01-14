<template>
	<div style="background: #f5f5f5">
		<order-header></order-header>
		<order-character></order-character>
		<order-data @change="handleChange"></order-data>
		<order-passenger @blur="handleBlur" :number="floorNum"></order-passenger>
		<order-floor :number="floorNum" :info="inforMathion"></order-floor>
	</div>
</template>

<script>
	import OrderHeader from './header'
	import OrderCharacter from './character'
	import OrderData from './data'
	import OrderPassenger from './passenger'
	import OrderFloor from './floor'
	export default {
	  name: 'order',
	  data () {
	    return {
	      floorNum: 1,
	      inforMathion: ''
	    }
	  },
	  components: {
	    OrderHeader,
	    OrderCharacter,
	    OrderData,
	    OrderPassenger,
	    OrderFloor
	  },
	  methods: {
	    handleChange (num) {
	      this.floorNum = num
	    },
	    handleBlur (info) {
	      this.inforMathion = info
	    }
	  }
	}
</script>

<style>
	
</style>
