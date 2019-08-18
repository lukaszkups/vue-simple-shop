<template>
  <div class='home-wrapper'>
    <p>test</p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Home',
  created () {
    axios.get(`${this.$api}items`).then(resp => {
      console.warn(resp)
    }).catch(err => {
      throw new Error(err)
    })
  }
}
</script>
<style lang="sass">
.home-wrapper
  background: $light-blue
</style>
