<template>
  <div id="app">
    <ui-header></ui-header>
    <div class='main-app-wrapper main-container'>
      <div class='main-app-wrapper--side-menu'>
        <side-menu></side-menu>
      </div>
      <div class='main-app-wrapper--router-view'>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import UiHeader from '@/components/layout/Header'
import SideMenu from '@/components/layout/SideMenu'

export default {
  name: 'App',
  components: {
    UiHeader,
    SideMenu
  }
}
</script>
<style lang="sass">
.main-app-wrapper
  display: flex

  &--side-menu
    flex: 1

  &--router-view
    flex: 3
</style>
