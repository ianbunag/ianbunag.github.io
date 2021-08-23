<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import TechnologyIcon from '~/components/technology-icon.vue'

import type { Technology } from '@/config/technologies'

export default defineComponent({
  name: 'TechnologyList',
  components: { TechnologyIcon },
  props: {
    technologies: {
      type: Array as ()=> Array<Technology>,
      required: true,
    },
  },
})
</script>

<template>
  <v-container fluid>
    <v-row
      justify="end"
      no-gutters
    >
      <v-col
        v-for="{ display, url, icon } of technologies"
        :key="display"
        cols="auto"
        class="px-1"
      >
        <technology-icon
          :display="display"
          :url="url"
          :icon="icon"
          tooltip-top
        />
      </v-col>
    </v-row>
  </v-container>
</template>
