<template>
  <div>
	 <index-header></index-header>
	 <index-nav></index-nav>
   <index-list :list = "infoList"></index-list>
   <index-footer></index-footer>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexNav from './nav'
  import IndexList from './list'
  import IndexFooter from './footer'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexNav,
      IndexList,
      IndexFooter
    },
    data () {
      return {
        infoList: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/list.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.infoList = data.infoList
      },
      handleGetDataErr (res) {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style></style>
