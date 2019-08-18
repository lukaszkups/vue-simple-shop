<template>
  <aside class='side-menu'>
    <div class='side-menu__subtitle'><i class="fal fa-address-book"></i><span>Contact</span></div>
    <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. </p>
    <div class='side-menu__subtitle'><i class="fal fa-shopping-cart"></i><span>Cart</span></div>
    <ul class='cart-items-list'>
      <div v-if='cartItems && cartItems.length'>
        <li v-for='item in cartItems'
          :key='item.uui'
        >
          <span class='accent-text'>{{ item.amount }}</span>
          <span class='ellipsis-text'>{{ item.name }}</span>
        </li>
      </div>
      <li v-else class='centered-text cart-empty-label'>Cart is empty</li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: 'SideMenu'
}
</script>
<style lang="sass">
.side-menu
  background: $light-blue
  color: $white
  padding: 20px

  &__subtitle
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

  .cart-items-list
    border: 2px dashed $white
    padding: 10px
    min-height: 150px

    .cart-empty-label
      line-height: 150px
</style>
