const state = {
  productsList: [],
  isLoading: false
}

const actions = {
  updateProp ({ commit }, payload) {
    commit('updateProp', payload)
  }
}

const mutations = {
  updateProp (state, payload) {
    state[payload.propName] = payload.newValue
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
