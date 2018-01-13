<template>
	<div style="background: #f5f5f5">
		<index-header></index-header>
		<index-character></index-character>
		<index-data></index-data>
		<index-passenger></index-passenger>
		<index-floor></index-floor>
	</div>
</template>

<script>
	import IndexHeader from './header'
	import IndexCharacter from './character'
	import IndexData from './data'
	import IndexPassenger from './passenger'
	import IndexFloor from './floor'
	export default {
	  name: 'order',
	  components: {
	    IndexHeader,
	    IndexCharacter,
	    IndexData,
	    IndexPassenger,
	    IndexFloor
	  }
	}
</script>

<style>
	
</style>
