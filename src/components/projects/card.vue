<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Tags from '~/components/tags.vue'
import ImagePreview from '~/components/image/preview.vue'

import type { ThumbnailMaxHeight } from '~/components/image/preview.vue'
import { formatPeriod } from '~/lib/config/profile'
import type { Project } from '@/config/profile'

interface HeadingOptions {
  title: Heading.Levels,
  subtitle: Heading.Levels,
}

export interface ThumbnailOptions {
  maxHeight: ThumbnailMaxHeight,
}

export const headingOptions = {
  type: Object as Prop<HeadingOptions>,
  default: () => ({}),
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
      type: Object as Prop<Project>,
      required: true,
    },
    heading: headingOptions,
    thumbnail: thumbnailOptions,
  },
  methods: { formatPeriod },
})
</script>

<template>
  <v-hover>
    <template #default="{ hover }">
      <v-card
        class="d-flex flex-column transition-swing pf-full-height"
        :elevation="hover ? 16 : 8"
        ripple
        @click="(event) => $emit('click', event)"
      >
        <image-preview
          :src="project.images[0] || ''"
          :max-height="thumbnail.maxHeight"
        />
        <v-card-title>
          <heading
            :level="heading.title || 3"
            class="text-h6 pf-text-pair"
          >
            {{ project.name }}
          </heading>
        </v-card-title>
        <v-card-subtitle class="text-left pt-1 pb-3">
          <heading
            :level="heading.subtitle || 4"
            class="text-subtitle-2 pf-text-pair-accent"
          >
            {{ formatPeriod(project.period) }}
          </heading>
        </v-card-subtitle>
        <tags :tags="project.tags" class="mt-0 pt-0 pa-4" />
      </v-card>
    </template>
  </v-hover>
</template>
