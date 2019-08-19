<template>
  <div class='product-details__wrapper'>
    <div v-if='!isLoading'>
      <div class='product-details__back-wrapper'>
        <router-link
          class='product-details__back-button'
          tag='span'
          :to='{name: "home"}'
        >&laquo; Back to product list</router-link>
      </div>
      <div
        v-if='image'
        class='product-details__image'
        :style='computedImageBg'
      ></div>
      <div class='product-details__details'>
        <div class='product-details__columns'>
          <div class='product-details__name'>{{ name }}</div>
          <div class='product-details__add-to-cart-wrapper'>
            <button
              v-if='available'
              class='product-details__add-to-cart-button'
              @click='addToCart'
            >Add to cart</button>
            <span v-else class='product-details__product-unavailable'>Product unavailable</span>
          </div>
        </div>
        <div class='product-details__price'>{{ computedPrice }}</div>
        <div class='product-details__description'>{{ description }}</div>
      </div>
    </div>
    <Loader v-else></Loader>
  </div>
</template>
<script>
import axios from 'axios'
import Loader from '@/components/layout/Loader'

export default {
  name: 'ProductDetails',
  components: {
    Loader
  },
  data () {
    return {
      isLoading: false,
      name: '',
      image: '',
      description: '',
      price: 0,
      available: false
    }
  },
  computed: {
    productId () {
      return this.$route.params.productId
    },
    currency () {
      return this.$store.state.cart.currency
    },
    computedImageBg () {
      return this.image ? `background-image: url(${this.image})` : ''
    },
    computedPrice () {
      return this.price && !isNaN(this.price) ? `${Number(this.price).toFixed(2)} ${this.currency}` : `n/a`
    }
  },
  methods: {
    getProductDetails () {
      return axios.get(`${this.$api}products/${this.productId}`).then(resp => {
        this.updateProductDetails(resp.data)
      }).catch(err => {
        throw new Error(err)
      })
    },
    updateProductDetails (payload) {
      this.name = payload && payload.name ? payload.name : ''
      this.image = payload && payload.image ? payload.image : ''
      this.description = payload && payload.description_long ? payload.description_long : ''
      this.price = payload && payload.price ? payload.price : 0
      this.available = payload && payload.available ? payload.available : false
    },
    addToCart () {
      const product = {
        name: this.name,
        id: this.productId,
        price: this.price
      }
      this.$store.dispatch('cart/addCartItem', product)
    }
  },
  created () {
    this.isLoading = true
    this.getProductDetails().finally(() => {
      this.isLoading = false
    })
  },
  beforeDestroy () {
    this.updateProductDetails()
  }
}
</script>
<style lang="sass">
.product-details
  &__wrapper
    position: relative
    min-height: 75vh
    width: 100%
    overflow: hidden
    padding: 0 20px
    box-sizing: border-box

  &__back-wrapper
    padding: 17px 20px

  &__back-button
    &:hover
      text-decoration: underline
      cursor: pointer

  &__image
    width: 100%
    height: 40vh
    background:
      size: cover
      repeat: no-repeat
      position: center

  &__details
    background: $light-blue
    padding: 20px
    color: $white

  &__name
    font-size: $main-font-size + 6
    font-weight: 900
    flex: 1

  &__description
    line-height: 1.5em
    text-align: justify
    margin-bottom: 20px

  &__columns
    display: flex
    align-item: center
    margin-bottom: 20px

  &__price
    font-weight: 900
    margin: 15px 0

  &__product-unavailable
    color: $red

  &__add-to-cart-button
    background: $accent
    padding: 10px
    border-radius: 5px
    border: none
    color: $white

    &:hover
      background: darken($accent, 10%)
      cursor: pointer

</style>
