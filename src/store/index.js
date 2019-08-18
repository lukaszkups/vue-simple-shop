import Vue from 'vue'
import Vuex from 'vuex'
import topMenu from '@/store/modules/topMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topMenu
  }
})
