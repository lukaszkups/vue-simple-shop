<template>
  <router-link
    class='products-list__item'
    tag='li'
    :to='{name: "productDetails", params: {productId: product.id}}'
  >
    <div
      class='products-list__item-image'
      :style='computedProductImageStyle'
    ></div>
    <div class='products-list__item-title'>{{ product.name }}</div>
    <div class='products-list__item-description'>{{ product.description_short }}</div>
  </router-link>
</template>
<script>
export default {
  name: 'ProductsListEntry',
  props: ['product'],
  data () {
    return {
      isLoading: true
    }
  },
  computed: {
    computedProductImageStyle () {
      return this.product && this.product.image ? { backgroundImage: `url(${this.product.image})` } : null
    }
  }
}
</script>
<style lang="sass">
.products-list__item
  flex: 1
  background: $white
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.15)
  min-width: calc(40% - 90px)
  max-width: calc(40% - 90px)
  margin:
    bottom: 25px
    left: 15px
    right: 15px
    top: 0
  transition: margin 0.25s, box-shadow 0.25s

  &:hover
    cursor: pointer
    margin-top: -10px
    margin-bottom: 35px
    transition: margin 0.25s, box-shadow 0.25s
    box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.15)

  &-title
    font-weight: 900
    font-size: $main-font-size
    padding: 15px 15px 0 15px

  &-description
    color: $light-text
    font-size: $main-font-size - 2
    line-height: 1.25em
    padding: 15px

  &-image
    position: relative
    overflow: hidden
    width: 100%
    height: 100px
    background-size: cover
</style>
