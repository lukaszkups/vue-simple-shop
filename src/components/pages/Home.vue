<template>
  <div class='home-wrapper'>
    <products-list></products-list>
  </div>
</template>
<script>
import ProductsList from '@/components/products/ProductsList'

export default {
  name: 'Home',
  components: {
    ProductsList
  }
}
</script>
<style lang="sass">
.home-wrapper
  margin-left: 20px
</style>
