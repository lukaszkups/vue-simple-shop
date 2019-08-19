<template>
  <ul class='cart-items-list'>
    <div v-if='cartItems && cartItems.length'>
      <cart-item
        v-for='item in cartItems'
        :key='item.id'
        :item='item'
      ></cart-item>
    </div>
    <li v-else class='centered-text cart-empty-label'>Cart is empty</li>
  </ul>
</template>
<script>
import CartItem from '@/components/cart/CartItem'

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  computed: {
    cartItems () {
      return this.$store.state.cart.cartItems
    }
  },

}
</script>
<style lang="sass">
.cart-items-list
  border: 2px dashed $white
  padding: 10px
  min-height: 150px
  overflow: hidden
  position: relative
  box-sizing: border-box

  .cart-empty-label
    line-height: 150px
</style>
