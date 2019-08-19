<template>
  <div :class='["subpage", customPageClass]'>
    <div class='subpage'>
      <div class='subpage__icon'>
        <i :class='iconClass'></i>
      </div>
      <h1 class='subpage__title centered-text'>{{ subpageTitle }}</h1>
      <article class='subpage__content' v-html='content'></article>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Subpage',
  props: {
    customPageClass: String,
    iconClass: String,
    subpageTitle: String,
    content: String
  }
}
</script>
<style lang="sass">
.subpage
  background: $white
  color: $dark-text
  margin: 20vh auto 10vh auto
  text-align: center
  box-sizing: border-box
  padding: 0 0 10px 0
  width: 60vw

  &__wrapper
    width: 100%

  &__icon
    font-size: 40px
    border: 2px solid $light-blue
    color: $light-blue
    text-align: center
    line-height: 80px
    display: inline-block
    margin: 40px auto 25px auto
    border-radius: 45px
    padding: 0
    overflow: hidden
    height: 80px
    width: 80px

  &__title
    font-family: $second-font
    text-transform: uppercase
    font-size: $main-font-size + 10

  &__content
    text-align: justify
    width: 60%
    margin: 0 auto
    font-family: $second-font
    line-height: 1.5em
</style>
