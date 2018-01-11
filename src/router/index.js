import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import List from '@/pages/list'
import Order from '@/pages/order'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
