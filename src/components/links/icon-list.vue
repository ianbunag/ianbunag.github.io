<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import LinkIcon from '~/components/links/icon.vue'

import type { Links } from '@/config/profile'

export default defineComponent({
  name: 'LinkIconList',
  components: { LinkIcon },
  props: {
    links: {
      type: Array as Prop<Links>,
      required: true,
    },
    justify: {
      type: String as Prop<VuetifyProps.VRow['justify']>,
      default: 'start',
    },
    iconClass: {
      type: String,
      default: '',
    },
  },
})
</script>

<template>
  <responsive-container :justify="justify">
    <link-icon
      v-for="link of links"
      v-bind="link"
      :key="link.name"
      :class="iconClass"
      tooltip-top
    />
  </responsive-container>
</template>
