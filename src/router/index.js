import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ '@/components/products/ProductsListEntry')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/components/pages/About')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ '@/components/pages/Contact')
    }
  ]
})
