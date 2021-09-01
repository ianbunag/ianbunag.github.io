<script lang="ts">
import { defineComponent, toRefs, computed } from '@nuxtjs/composition-api'

import { useBreakPoints } from '~/lib/hooks'
import ImageLoader from '~/components/image/loader.vue'

export interface ThumbnailMaxHeight {
  desktop: string,
  mobile: string,
}

export default defineComponent({
  name: 'ImagePreview',
  components: { ImageLoader },
  props: {
    src: {
      type: String,
      required: true,
    },
    maxHeight: {
      type: Object as Prop<ThumbnailMaxHeight>,
      default: () => ({}),
    },
  },
  setup (props) {
    const { isMobile } = toRefs(useBreakPoints())
    const { maxHeight } = toRefs(props)
    const computedMaxHeight = computed(() => {
      if (isMobile.value) { return maxHeight.value.mobile || '200px' }

      return maxHeight.value.desktop || '250px'
    })

    return { computedMaxHeight }
  },
})
</script>

<template>
  <v-img
    :src="src"
    :max-height="computedMaxHeight"
    position="top center"
  >
    <template #placeholder>
      <image-loader />
    </template>
  </v-img>
</template>
