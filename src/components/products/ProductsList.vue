<template>
  <div class='products-list__wrapper'>
    <ul class='products-list__items'>
      <products-list-entry
        v-for='product in productsList'
        :key='product.id'
        :product='product'
      ></products-list-entry>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import ProductsListEntry from '@/components/products/ProductsListEntry'

export default {
  name: 'ProductsList',
  components: {
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

  &__items
    display: flex
    flex-wrap: wrap
    margin-right: -15px
</style>
