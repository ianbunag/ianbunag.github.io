<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import TechnologyStack from '~/components/technology/stack.vue'

import type { TechStack } from '@/config/profile'

interface HeadingOptions {
  section: Heading.Levels,
  stack: Heading.Levels,
}

export const headingOptions = {
  type: Object as Prop<HeadingOptions>,
  default: () => ({}),
}

export default defineComponent({
  name: 'TechnologyStackList',
  components: { TechnologyStack },
  props: {
    techStack: {
      type: Object as Prop<TechStack>,
      required: true,
    },
    heading: headingOptions,
  },
})
</script>

<template>
  <v-container class="pf-bound-less" fluid>
    <v-row dense>
      <v-col cols="12" class="mt-6">
        <heading
          :level="heading.section || 3"
          class="font-weight-medium text-h5 text-md-h4"
        >
          {{ techStack.category }}
        </heading>
        <v-divider class="my-3" />
      </v-col>

      <v-col
        v-for="technology in techStack.technologies"
        :key="technology.display"
        cols="12"
        sm="6"
        md="4"
        xl="3"
      >
        <technology-stack
          v-bind="technology"
          :heading="heading.stack"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
