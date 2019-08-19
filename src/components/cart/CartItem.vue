<template>
  <li class='cart-item'>
    <span class='accent-text cart-item__amount'>{{ item.amount }}</span>
    <span class='cart-item__name ellipsis-text'>{{ item.name }}</span>
    <span
      class='cart-item__remove-button'
      title='Remove item from cart'
      @click='removeItemFromCart(item.id)'
    >&times;</span>
  </li>
</template>
<script>
export default {
  name: 'CartItem',
  props: ['item'],
  methods: {
    removeItemFromCart (itemId) {
      this.$store.dispatch('cart/removeCartItem', itemId)
    }
  }
}
</script>
<style lang="sass">
.cart-item
  display: block
  background: $dark-blue
  padding: 8px
  position: relative
  overflow: hidden
  margin-bottom: 5px

  &__name
    position: absolute
    left: 21px
    right: 5px
    padding-right: 21px

  &__amount
    font-weight: 900
    margin-right: 10px

  &__remove-button
    position: absolute
    display: none
    float: right
    right: 10px
    z-index: 1

    &:hover
      cursor: pointer

  &:hover .cart-item__remove-button
    display: inline-block
</style>
