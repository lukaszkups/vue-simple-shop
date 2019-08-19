<template>
  <header class='ui-header--wrapper'>
    <div class='ui-header main-container'>
      <router-link
        :to='{name: "home"}'
        tag='div'
        class='logo'
        @click.native='updateActiveMenuItem(1)'
      >
        <i class="fas fa-shopping-bag"></i>
        <span>Vue shop</span>
      </router-link>
      <div class='top-menu__list--wrapper'>
        <ul class='top-menu__list'>
          <router-link v-for='item in menuItems'
            :key='item.id'
            tag='li'
            :class='["top-menu__list-item", {"top-menu__list-item--active": item.id === activeMenuItem}]'
            @click.native='updateActiveMenuItem(item.id)'
            :to='{name: item.routeName}'
          >{{ item.label }}</router-link>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    menuItems () {
      return this.$store.state.topMenu.items
    },
    activeMenuItem () {
      return this.$store.state.topMenu.activeItem
    }
  },
  methods: {
    updateActiveMenuItem (itemId) {
      this.$store.dispatch('topMenu/updateActiveMenuItem', itemId)
    }
  }
}
</script>
<style lang="sass">
.ui-header
  color: $dark-text
  height: 50px
  display: flex
  padding: 0
  align-items: center
  margin: 0
  width: 100%

  &--wrapper
    width: 100%
    border-bottom: 1px solid $light-text
    margin: 0 0 20px 0

  .logo
    display: inline-flex
    flex: 1
    font-family: $second-font
    padding-left: 10px
    font-size: 20px

    &:hover
      cursor: pointer

    i
      margin-right: 10px

  .top-menu__list
    list-style-type: none
    margin: 0 20px 0 0
    height: 50px
    padding: 0
    float: right
    display: flex
    align-items: center

    &--wrapper
      flex: 5
      display: inline-flex
      justify-content: flex-end
      margin-left: auto

    &-item
      flex: 1
      margin: 0
      padding: 0 10px

      &:last-of-type
        padding-right: 0

      &:hover
        cursor: pointer

      &--active
        color: $light-blue
        font-weight: 500

</style>
