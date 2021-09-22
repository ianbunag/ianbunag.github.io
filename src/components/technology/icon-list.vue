<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import TechnologyIcon from '~/components/technology/icon.vue'

import type { Technologies } from '@/config/technologies'

export default defineComponent({
  name: 'TechnologyIconList',
  components: { TechnologyIcon },
  props: {
    technologies: {
      type: Array as Prop<Technologies>,
      required: true,
    },
    justify: {
      type: String as Prop<VuetifyProps.VRow['justify']>,
      default: 'start',
    },
  },
})
</script>

<template>
  <responsive-container :justify="justify">
    <technology-icon
      v-for="technology of technologies"
      :key="technology.display"
      v-bind="technology"
      tooltip-top
    />
  </responsive-container>
</template>
