<script lang = "ts">
import { defineComponent, computed, toRef } from '@nuxtjs/composition-api'

import ProjectsShowcase, {
  featuredFirstOrder,
  descendingOrder,
  createPrioritySort,
} from '~/components/projects/showcase.vue'

import type { ProfileProjects } from '~/config/profile/projects'

export default defineComponent({
  name: 'Projects',
  components: { ProjectsShowcase },
  props: {
    projects: {
      type: Array as Prop<ProfileProjects>,
      required: true,
    },
  },
  setup (props) {
    const featuredProjects = computed(() => {
      const sort = createPrioritySort([featuredFirstOrder, descendingOrder])

      return toRef(props, 'projects').value
        .sort(sort)
        .slice(0, 3)
    })

    return { featuredProjects }
  },
})
</script>

<template>
  <v-row
    justify="center"
    align="center"
    class="text-center section"
  >
    <v-col cols="12" class="layer-content bound-less mt-16 pt-6 pt-md-8">
      <v-container class="bound-less" fluid>
        <v-row justify="center" align="center" dense>
          <v-col cols="12" md="10">
            <div class="text-h3 text-center">
              <slot name="title" />
            </div>
          </v-col>
          <v-col cols="12" md="10">
            <div class="text-h5 text-center">
              <slot name="description" />
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <projects-showcase
              :projects="featuredProjects"
              :thumbnail="{ maxHeight: { desktop: '200px' } }"
              justify="center"
            />
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="12">
            <slot name="footer" />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <div class="layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
