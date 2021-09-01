<script lang="ts">
import { defineComponent, computed, toRefs } from '@nuxtjs/composition-api'

import { getMappedTechnology } from '~/config/technologies'
import TechnologyStack from '~/components/technology/stack.vue'

import type { ProfileTechStack } from '~/config/profile/tech-stacks'

export default defineComponent({
  name: 'TechnologyStackList',
  components: { TechnologyStack },
  props: {
    techStack: {
      type: Object as Prop<ProfileTechStack>,
      required: true,
    },
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
  <v-container class="bound-less" fluid>
    <v-row dense>
      <v-col cols="12" class="mt-6">
        <div class="font-weight-bold text-h5 text-md-h4">
          {{ techStack.category }}
        </div>
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
        <technology-stack v-bind="mappedTechnology" />
      </v-col>
    </v-row>
  </v-container>
</template>
