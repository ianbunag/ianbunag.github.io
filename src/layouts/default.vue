<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { name } from '~/config/profile.json'

export default defineComponent({
  setup () {
    const copyright = `Copyright &copy; ${new Date().getFullYear()} ${name}`

    return {
      name,
      copyright,
    }
  },
})
</script>

<template>
  <v-app dark>
    <v-app-bar
      elevate-on-scroll
      inverted-scroll
      app
      class="layer-navigation"
    >
      <v-toolbar-title class="px-1">
        {{ name }}
      </v-toolbar-title>
    </v-app-bar>
    <v-main class="p-0 m-0">
      <Nuxt />
    </v-main>
    <v-footer
      absolute
      app
      class="layer-navigation"
    >
      <span v-html="copyright" /> <!-- eslint-disable-line vue/no-v-html -->
    </v-footer>
  </v-app>
</template>

<style src="~/assets/styles/global/layers.scss" lang="scss" scoped/>
