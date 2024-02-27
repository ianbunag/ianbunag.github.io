<script lang = "ts">
import { defineComponent, computed, toRef } from '@nuxtjs/composition-api'

import ProjectsShowcase, {
  featuredFirstOrder,
  descendingOrder,
  createPrioritySort,
} from '~/components/projects/showcase.vue'

import type { Projects } from '@/config/profile'

export default defineComponent({
  name: 'PageRootProjects',
  components: { ProjectsShowcase },
  props: {
    projects: {
      type: Array as Prop<Projects>,
      required: true,
    },
    contentClass: {
      type: String,
      default: '',
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
    class="section"
  >
    <v-col
      :class="contentClass"
      cols="12"
      class="pf-layer-content pf-bound-less"
    >
      <v-container class="pf-bound-less" fluid>
        <v-row justify="center" align="center" dense>
          <v-col cols="12" md="10">
            <heading
              level="2"
              class="text-h3 text-center pf-text-pair"
            >
              <slot name="title" />
            </heading>
          </v-col>
          <v-col cols="12" md="10">
            <heading
              level="3"
              class="text-h5 text-center"
            >
              <slot name="sub-title" />
            </heading>
          </v-col>
        </v-row>

        <v-row justify="center" align="center">
          <v-col cols="12">
            <projects-showcase
              :projects="featuredProjects"
              :heading="{ title: 4, subtitle: 5 }"
              :thumbnail="{ maxHeight: { desktop: '200px' } }"
              featured-first
              descending
              justify="center"
            />
          </v-col>
        </v-row>

        <v-row
          justify="center"
          align="center"
          class="text-center"
        >
          <v-col cols="12">
            <slot name="footer" />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <div class="pf-layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
