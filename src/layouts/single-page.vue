<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { AppBar, AppFooter } from '~/components/layouts'

export default defineComponent({
  components: { AppBar, AppFooter },
})
</script>

<template>
  <v-app dark>
    <app-bar inverted-scroll />
    <v-main class="pf-main-bg">
      <Nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>
