<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { AppBar, AppFooter } from '~/components/layouts'

export default defineComponent({
  components: { AppBar, AppFooter },
})
</script>

<template>
  <v-app dark>
    <app-bar />
    <v-main class="main">
      <Nuxt />
    </v-main>
    <app-footer fixed />
  </v-app>
</template>
