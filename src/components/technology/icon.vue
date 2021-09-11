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
        return toRef(props, 'url').value ? '' : 'pf-default-cursor'
      }),
    }
  },
})
</script>

<template>
  <div>
    <v-tooltip
      :activator="technology"
      :top="tooltipTop"
    >
      <span>{{ display }}</span>
    </v-tooltip>
    <v-btn
      ref="technology"
      elevation="6"
      :href="url || undefined"
      :aria-label="display"
      :class="[noLink]"
      icon
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>
