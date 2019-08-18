<template>
  <div id="app">
    <i class="fas fa-shopping-bag"></i>
    <side-menu></side-menu>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import SideMenu from '@/components/layout/SideMenu'

export default {
  name: 'App',
  components: {
    SideMenu
  }
}
</script>
<style lang="scss">
</style>
