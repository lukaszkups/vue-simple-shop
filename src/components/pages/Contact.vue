<template>
  <subpage
    subpageTitle='Contact'
    iconClass='fas fa-phone'
    :content='pageContent'
  ></subpage>
</template>
<script>
import Subpage from '@/components/layout/Subpage'

export default {
  name: 'Contact',
  components: {
    Subpage
  },
  data () {
    return {
      pageContent: `
        <div class='centered-text'>
          <p>lukasz kups</p>
          <p><a href='mailto:letstalk@lukaszkups.net'>letstalk@lukaszkups.net</a></p>
          <p><a href='https://lukaszkups.net'>https://lukaszkups.net</a></p>
        </div>
      `
    }
  }
}
</script>
