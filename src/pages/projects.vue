<script lang="ts">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'

import { profile, icons } from '~/config'
import ProjectsShowcase from '~/components/projects/showcase.vue'

interface Filter {
  name: string,
  icon: string,
  tags: Array<string>,
}
interface FilterController {
  tags: Filter['tags'],
  update: (index: number)=> void,
}

const filters: Array<Filter> = [
  {
    name: 'ALL',
    icon: icons.mdiExpandAll,
    tags: [],
  },
  {
    name: 'WEB APPLICATION',
    icon: icons.mdiWeb,
    tags: ['web', 'application'],
  },
  {
    name: 'SOFTWARE',
    icon: icons.mdiApplication,
    tags: ['software', 'application'],
  },
  {
    name: 'KATA',
    icon: icons.mdiCodeTags,
    tags: ['kata'],
  },
  {
    name: 'GRAPHIC DESIGN',
    icon: icons.mdiPencilRuler,
    tags: ['graphic', 'design'],
  },
  {
    name: '3D DESIGN',
    icon: icons.mdiCube,
    tags: ['3D', 'design'],
  },
]

function includesInsensitive (target: Array<string>) {
  return (value: string) => {
    const lowerCasedValue = value.toLowerCase()

    return target.some(entry => entry.toLowerCase() === lowerCasedValue)
  }
}

export default defineComponent({
  components: { ProjectsShowcase },
  layout: 'independent',
  setup () {
    const filterController: FilterController = reactive({
      tags: [],
      update: (index) => {
        filterController.tags = filters[index].tags
      },
    })
    const projects = computed(() => {
      return profile.projects.filter((project) => {
        return !filterController.tags.length ||
          filterController.tags.every(includesInsensitive(project.tags))
      })
    })

    return {
      projects,
      filters,
      filterController,
    }
  },
  head: { title: 'Projects' },
})
</script>

<template>
  <div class="mt-2">
    <v-card>
      <v-card-title class="text-center justify-center">
        <div class="font-weight-bold text-h3 text-md-h2">
          Projects
        </div>
      </v-card-title>

      <v-tabs
        icons-and-text
        center-active
        show-arrows
        fixed-tabs
        centered
        @change="filterController.update"
      >
        <v-tab
          v-for="filter in filters"
          :key="filter.name"
        >
          {{ filter.name }}
          <v-icon>{{ filter.icon }}</v-icon>
        </v-tab>
      </v-tabs>
    </v-card>
    <projects-showcase
      :projects="projects"
      class="mt-4"
      featured-first
      descending
    />
  </div>
</template>
