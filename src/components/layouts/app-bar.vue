<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

import { name, titles } from '~/config/profile'
import { icons, pages } from '~/config'

export default defineComponent({
  name: 'AppBar',
  props: {
    invertedScroll: {
      type: Boolean,
      default: false,
    },
  },
  setup () {
    const [title] = titles
    const profile = { name, title }
    const appBar = reactive({
      drawer: false,
      openDrawer: () => { appBar.drawer = true },
      closeDrawer: () => { appBar.drawer = false },
    })

    return {
      profile,
      appBar,
      icons,
      pages,
    }
  },
})
</script>

<template>
  <div>
    <v-app-bar
      :inverted-scroll="invertedScroll"
      class="px-2 g-layer-navigation g-semi-transparent-bg"
      elevation="0"
      collapse
      dense
      app
    >
      <v-app-bar-nav-icon
        aria-label="open-drawer"
        @click="appBar.openDrawer"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-model="appBar.drawer"
      class="g-layer-navigation-1"
      temporary
      app
    >
      <v-list nav dense>
        <v-btn
          class="float-right g-layer-navigation"
          aria-label="close-drawer"
          icon
          large
          @click="appBar.closeDrawer"
        >
          <v-icon>
            {{ icons.mdiClose }}
          </v-icon>
        </v-btn>
        <v-list-item-group>
          <v-list-item-content class="px-4">
            <v-list-item-title>
              <v-icon size="65">
                {{ icons.brandLogo }}
              </v-icon>
            </v-list-item-title>
            <v-list-item-title class="text-h6">
              {{ profile. name }}
            </v-list-item-title>
            <v-list-item-subtitle class="g-text-pair">
              {{ profile.title }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-divider class="mb-3" />

          <v-list-item
            v-for="page in pages"
            :key="page.name"
            :to="page.route"
            nuxt
          >
            <v-list-item-icon>
              <v-icon>{{ page.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ page.name }}</v-list-item-title>
          </v-list-item>

          <v-divider class="mb-3" />
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style src="~/assets/styles/global/layers.scss" lang="scss" scoped/>
