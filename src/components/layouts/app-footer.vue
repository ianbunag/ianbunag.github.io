<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { name } from '~/config/profile'

export default defineComponent({
  name: 'AppFooter',
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  setup () {
    const copyright = `Copyright &copy; ${new Date().getFullYear()} ${name}`

    return { copyright }
  },
})
</script>

<template>
  <v-footer
    class="layer-navigation px-6"
    :absolute="!fixed"
    app
  >
    <div v-html="copyright" /> <!-- eslint-disable-line vue/no-v-html -->
  </v-footer>
</template>
