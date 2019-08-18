const state = {
  activeItem: 1,
  items: [
    { label: 'Home', routeName: 'home', id: 1 },
    { label: 'About', routeName: 'about', id: 2 },
    { label: 'Contact', routeName: 'contact', id: 3 }
  ]
}

const actions = {
  updateActiveMenuItem ({ commit }, payload) {
    commit('updateActiveMenuItem', payload)
  }
}

const mutations = {
  updateActiveMenuItem (state, payload) {
    state.activeItem = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
