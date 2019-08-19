<template>
  <div class='products-list__wrapper'>
    <ul
      class='products-list__items'
      v-if='!isLoading'
    >
      <products-list-entry
        v-for='product in productsList'
        :key='product.id'
        :product='product'
      ></products-list-entry>
    </ul>
    <loader v-else></loader>
  </div>
</template>
<script>
import axios from 'axios'
import Loader from '@/components/layout/Loader'
import ProductsListEntry from '@/components/products/ProductsListEntry'

export default {
  name: 'ProductsList',
  components: {
    Loader,
    ProductsListEntry
  },
  computed: {
    isLoading: {
      get () {
        return this.$store.state.products.isLoading
      },
      set (newVal) {
        this.$store.dispatch('products/updateProp', { propName: 'isLoading', newValue: newVal })
      }
    },
    productsList: {
      get () {
        return this.$store.state.products.productsList
      },
      set (newVal) {
        this.$store.dispatch('products/updateProp', { propName: 'productsList', newValue: newVal })
      }
    }
  },
  methods: {
    getProducts () {
      return axios.get(`${this.$api}products`).then(resp => {
        this.productsList = resp.data
      }).catch(err => {
        throw new Error(err)
      })
    }
  },
  created () {
    this.isLoading = true
    this.getProducts().finally(() => {
      this.isLoading = false
    })
  }
}
</script>
<style lang="sass">
.products-list

  &__wrapper
    display: block
    margin-top: 50px
    position: relative
    overflow: hidden
    min-height: 50vh
    width: 100%

  &__items
    display: flex
    flex-wrap: wrap
    margin-right: -15px
</style>
