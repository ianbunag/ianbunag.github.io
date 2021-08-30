<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  toRef,
} from '@nuxtjs/composition-api'

import type { Technology } from '@/config/technologies'

export default defineComponent({
  name: 'TechnologyIcon',
  props: {
    display: {
      type: String as Prop<Technology['display']>,
      required: true,
    },
    icon: {
      type: String as Prop<Technology['icon']>,
      required: true,
    },
    url: {
      type: String as Prop<Technology['url']>,
      default: '',
    },
    tooltipTop: {
      type: Boolean,
      default: false,
    },
  },
  setup (props) {
    return {
      technology: ref(),
      noLink: computed(() => {
        return toRef(props, 'url').value ? '' : 'no-link'
      }),
    }
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
      :href="url || null"
      :aria-label="display"
      :class="[noLink]"
      rel="noreferrer nofollow"
      target="_blank"
    >
      <v-btn
        elevation="6"
        :aria-label="display"
        :class="[noLink]"
        icon
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </a>
  </div>
</template>

<style scoped>
.no-link {
  cursor: default !important;
}
</style>
