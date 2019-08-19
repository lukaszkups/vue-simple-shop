<template>
  <div id="app">
    <ui-header></ui-header>
    <div class='main-app-wrapper main-container'>
      <div
        v-if='hasSideMenu'
        class='main-app-wrapper--side-menu'
      >
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
  computed: {
    hasSideMenu () {
      return this.$route && this.$route.meta && (this.$route.meta.hasSideMenu === true || this.$route.meta.hasSideMenu === false) ? this.$route.meta.hasSideMenu : true
    }
  },
  components: {
    UiHeader,
    SideMenu
  }
}
</script>
<style lang="sass">
.main-app-wrapper
  display: flex
  width: 100vw
  overflow: hidden

  &--side-menu
    flex: 1
    max-width: 25%

  &--router-view
    flex: 3
    width: 100%
    overflow: hidden
</style>
