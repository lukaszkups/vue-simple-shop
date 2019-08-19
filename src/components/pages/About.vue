<template>
  <subpage
    subpageTitle='About'
    iconClass='fas fa-user-tie'
    :content='pageContent'
  ></subpage>
</template>
<script>
import Subpage from '@/components/layout/Subpage'

export default {
  name: 'About',
  components: {
    Subpage
  },
  data () {
    return {
      pageContent: `
        <p>This is a Single Page App, developed by <a href='https://twitter.com/lukaszkups'>@lukaszkups</a> with <a href='https://vuejs.org'>Vue.js.</a></p>
        <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. </p>
        <p>Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus.</p>
        <p>Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus.</p>
      `
    }
  }
}
</script>
