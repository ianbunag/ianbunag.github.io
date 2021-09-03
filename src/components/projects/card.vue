<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Tags from '~/components/tags.vue'
import ImagePreview from '~/components/image/preview.vue'

import type { ThumbnailMaxHeight } from '~/components/image/preview.vue'
import type { ProfileProject } from '~/config/profile/projects'

export interface ThumbnailOptions {
  maxHeight: ThumbnailMaxHeight,
}

export const thumbnailOptions = {
  type: Object as Prop<ThumbnailOptions>,
  default: () => ({}),
}

export default defineComponent({
  name: 'ProjectCard',
  components: {
    Tags,
    ImagePreview,
  },
  props: {
    project: {
      type: Object as Prop<ProfileProject>,
      required: true,
    },
    thumbnail: thumbnailOptions,
  },
})
</script>

<template>
  <v-hover>
    <template #default="{ hover }">
      <v-card
        class="d-flex flex-column transition-swing g-full-height"
        :elevation="hover ? 16 : 8"
        ripple
        @click="(event) => $emit('click', event)"
      >
        <image-preview
          :src="project.images[0] || ''"
          :max-height="thumbnail.maxHeight"
        />
        <v-card-title class="g-text-pair">
          {{ project.name }}
        </v-card-title>
        <v-card-subtitle class="text-left pt-1 g-text-pair-accent">
          {{ project.period }}
        </v-card-subtitle>
        <tags :tags="project.tags" class="mt-0 pt-0 pa-4" />
      </v-card>
    </template>
  </v-hover>
</template>
