<template>
  <aside class='side-menu'>
    <div class='side-menu__subtitle'><i class="fal fa-address-book"></i><span>Contact</span></div>
    <p class='side-menu__info'>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. </p>
    <div class='side-menu__subtitle'>
      <i class="fas fa-shopping-cart"></i>
      <span>Cart</span>
      <span
        v-if='cartItems && cartItems.length'
        class='cart-items-amount'
      >({{ totalCartItems }})</span>
    </div>
    <cart></cart>
    <div
      v-if='cartItems && cartItems.length'
      class='total-cart-price'
    >Total: {{ totalCartPrice }}</div>
  </aside>
</template>
<script>
import Cart from '@/components/cart/Cart'

export default {
  name: 'SideMenu',
  components: {
    Cart
  },
  computed: {
    cartItems () {
      return this.$store.state.cart.cartItems
    },
    currency () {
      return this.$store.state.cart.currency
    },
    totalCartItems () {
      return this.$store.getters['cart/getTotalCartItemsAmount']
    },
    totalCartPrice () {
      return `${this.$store.getters['cart/getTotalCartPrice']} ${this.currency}`
    }
  }
}
</script>
<style lang="sass">
.side-menu
  background: $light-blue
  color: $white
  padding: 20px
  margin-top: 50px

  &__subtitle
    display: block
    vertical-align: top
    line-height: $main-font-size + 10px

    span
      vertical-align: top
      font-size: $main-font-size
      font-weight: 600
      display: inline-block
      line-height: $main-font-size + 10px

    i
      font-size: $main-font-size + 10px
      display: inline-block
      margin-right: 20px

  &__info
    line-height: 1.35em

  &__info + .side-menu__subtitle
    margin-top: 50px

  .cart-items-amount
    margin-left: 5px

  .total-cart-price
    font-weight: 900
    text-align: right

</style>
