<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TechnologyIcon',
  props: {
    display: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    tooltipTop: Boolean,
  },
  setup () {
    return { technology: ref() }
  },
})
</script>

<template>
  <div>
    <v-tooltip :top="tooltipTop" :activator="technology">
      <span>{{ display }}</span>
    </v-tooltip>
    <a
      ref="technology"
      :href="url"
      :aria-label="display"
      target="_blank"
      rel="noreferrer nofollow"
      class="no-text-decoration"
    >
      <v-btn
        elevation="6"
        :aria-label="display"
        icon
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </a>
  </div>
</template>
