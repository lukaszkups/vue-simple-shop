const state = {
  cartItems: [],
  currency: 'PLN'
}

const actions = {
  addCartItem (context, payload) {
    const cartItems = context.state.cartItems && context.state.cartItems.length ? [...context.state.cartItems] : []
    const itemInCart = cartItems.find(obj => obj.id === payload.id)
    if (itemInCart) {
      itemInCart.amount += 1
    } else {
      cartItems.push({
        ...payload,
        amount: 1
      })
    }
    context.commit('updateCartItems', cartItems)
  },
  removeCartItem (context, payload) {
    const cartItems = [...context.state.cartItems]
    const index = cartItems.findIndex(obj => obj.id === payload)
    if (index > -1) {
      cartItems.splice(index, 1)
      context.commit('updateCartItems', cartItems)
    }
  }
}

const mutations = {
  updateCartItems (state, payload) {
    state.cartItems = payload
  }
}

const getters = {
  getTotalCartPrice (state) {
    let totalPrice = 0
    state.cartItems.map(obj => {
      if (obj && obj.price && !isNaN(obj.price) && obj.amount && !isNaN(obj.amount)) {
        totalPrice += (Number(obj.amount) * Number(obj.price))
      }
    })
    return totalPrice.toFixed(2)
  },
  getTotalCartItemsAmount (state) {
    let itemsAmount = 0
    state.cartItems.map(obj => {
      if (obj && obj.amount && !isNaN(obj.amount)) {
        itemsAmount += Number(obj.amount)
      }
    })
    return itemsAmount
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
