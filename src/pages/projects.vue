<script lang="ts">
import {
  defineComponent,
  useMeta,
  useContext,
  useRoute,
  useRouter,
  reactive,
  computed,
  watch,
} from '@nuxtjs/composition-api'

import { profile, pages } from '~/config'
import { useIsMounted } from '~/lib/hooks'
import { includesInsensitive } from '~/lib/predicate-factory'
import { filters, Query } from '~/lib/pages/projects'
import { createCanonicalLink } from '~/lib/nuxt.config'
import ProjectsShowcase from '~/components/projects/showcase.vue'

export default defineComponent({
  name: 'PageProjects',
  components: { ProjectsShowcase },
  layout: 'independent',
  setup () {
    const { env } = useContext()
    const canonicalLink =
      `${createCanonicalLink(env)}${pages.PROJECTS.route}`

    useMeta({
      title: pages.PROJECTS.name,
      link: [{ rel: 'canonical', href: canonicalLink }],
    })

    const route = useRoute()
    const router = useRouter()
    const isMounted = useIsMounted()
    const filterController = (() => {
      const initialKey = route.value.query[Query.FILTER]
      const initialIndex = Math.max(
        filters.findIndex(({ key }) => key === initialKey),
        0,
      )
      const controller = reactive({
        index: initialIndex,
        tags: filters[initialIndex].tags,
      })

      watch(() => controller.index, (newIndex) => {
        controller.tags = filters[newIndex].tags
        syncQuery()
      })

      return controller
    })()
    const projectsController = (() => {
      const initialKey = route.value.query[Query.SELECTED]
      const projects = computed(() => {
        /**
         * Render all project elements before filtering. This is to prevent
         *  layout shift for case where the initial load is filtered and
         *  opening or closing the ProjectModal component causes re-render of
         *  ProjectsShowcase entries
         */
        if (
          !isMounted.value ||
          !filterController.tags.length
        ) { return profile.projects }

        return profile.projects.filter((project) => {
          return !filterController.tags.length ||
          filterController.tags.every(includesInsensitive(project.tags))
        })
      })
      const initialIndex = projects.value.findIndex(
        ({ key }) => key === initialKey,
      )
      const controller = reactive({
        projects,
        selected: {
          key: initialKey,
          shown: initialIndex > -1,
        },
      })

      watch(() => controller.selected.shown, syncQuery)

      return controller
    })()

    function syncQuery () {
      const selected = projectsController.selected.shown &&
        projectsController.selected.key

      router.replace({
        query: {
          ...route.value.query,
          [Query.FILTER]: filters[filterController.index].key || undefined,
          [Query.SELECTED]: selected || undefined,
        },
      })
    }

    return {
      projectsController,
      filters,
      filterController,
    }
  },
  head: {},
})
</script>

<template>
  <div class="mt-3">
    <v-card>
      <v-card-title class="text-center justify-center">
        <heading class="text-h3 text-md-h2 pf-text-pair">
          Projects
        </heading>
      </v-card-title>

      <v-tabs
        v-model="filterController.index"
        color="accent"
        icons-and-text
        center-active
        show-arrows
        fixed-tabs
        centered
      >
        <v-tab
          v-for="filter in filters"
          :key="filter.key"
        >
          {{ filter.name }}
          <v-icon>{{ filter.icon }}</v-icon>
        </v-tab>
      </v-tabs>
    </v-card>
    <projects-showcase
      :projects="projectsController.projects"
      :heading="{ title: 2, subtitle: 3 }"
      :modal-heading="{ title: 2, subtitle: 3 }"
      :thumbnail="{}"
      class="mt-4"
      featured-first
      descending
      :selected="projectsController.selected"
      @selected-changed="projectsController.selected = $event"
    />
  </div>
</template>
