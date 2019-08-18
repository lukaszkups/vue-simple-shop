import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/modules/cart'
import products from '@/store/modules/products'
import topMenu from '@/store/modules/topMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products,
    topMenu
  }
})
