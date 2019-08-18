const state = {
  cartItems: []
}

const actions = {
  addCartItem (context, payload) {
    const cartItems = [...context.state.cartItems]
    const itemInCart = cartItems.find(obj => obj.id === payload.id)
    if (itemInCart) {
      itemInCart.amount += 1
    } else {
      cartItems.push({
        ...payload,
        amount: 1
      })
    }
    context.commit('updateCartItems', payload)
  },
  removeCartItem (context, payload) {
    const cartItems = [...context.state.cartItems]
    const index = cartItems.findIndex(obj => obj.id === payload)
    if (index > -1) {
      cartItems.splice(index, 1)
      context.commit('updateCartItems', payload)
    }
  }
}

const mutations = {
  updateCartItems (state, payload) {
    state.cartItems = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
