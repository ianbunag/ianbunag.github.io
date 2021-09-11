<script lang="ts">
import { defineComponent, computed, toRefs } from '@nuxtjs/composition-api'

import { getMappedTechnology } from '~/config/technologies'
import TechnologyStack from '~/components/technology/stack.vue'

import type { ProfileTechStack } from '~/config/profile/tech-stacks'

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
      type: Object as Prop<ProfileTechStack>,
      required: true,
    },
    heading: headingOptions,
  },
  setup (props) {
    const { techStack } = toRefs(props)
    const mappedTechnologies = computed(
      () => techStack.value.technologies.map(getMappedTechnology),
    )

    return { mappedTechnologies }
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
        v-for="mappedTechnology in mappedTechnologies"
        :key="mappedTechnology.display"
        cols="12"
        sm="6"
        md="4"
        xl="3"
      >
        <technology-stack
          v-bind="mappedTechnology"
          :heading="heading.stack"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
