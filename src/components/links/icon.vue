<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

import type { Link } from '@/config/profile'

export default defineComponent({
  name: 'LinkIcon',
  props: {
    name: {
      type: String as Prop<Link['name']>,
      required: true,
    },
    icon: {
      type: String as Prop<Link['icon']>,
      required: true,
    },
    url: {
      type: String as Prop<Link['url']>,
      required: true,
    },
    tooltipTop: {
      type: Boolean,
      default: false,
    },
  },
  setup () {
    return { link: ref() }
  },
})
</script>

<template>
  <div>
    <v-tooltip
      :activator="link"
      :top="tooltipTop"
    >
      <span>{{ name }}</span>
    </v-tooltip>
    <a
      ref="link"
      :href="url"
      :aria-label="name"
      rel="noopener"
      target="_blank"
    >
      <v-btn
        elevation="6"
        :aria-label="name"
        icon
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </a>
  </div>
</template>
