<script lang="ts">
import {
  defineComponent,
  toRefs,
  computed,
  reactive,
  ref,
} from '@nuxtjs/composition-api'

import ProjectModal from '~/components/projects/modal.vue'
import ProjectCard from '~/components/projects/card.vue'

import type {
  ProfileProject,
  ProfileProjects,
} from '~/config/profile/projects'

interface Sort {
  (initial: ProfileProject, comparator: ProfileProject): number,
}
type SortChain = Array<Sort>

export const featuredFirstOrder: Sort = (initial, comparator) => {
  if (initial.featured === comparator.featured) { return 0 }

  return initial.featured ? -1 : 1
}
export const descendingOrder: Sort = (initial, comparator) => {
  return +(new Date(comparator.period)) - +(new Date(initial.period))
}
export const ascendingOrder: Sort = (initial, comparator) => {
  return descendingOrder(initial, comparator) * -1
}
export function createPrioritySort (sortChain: SortChain): Sort {
  return (initial, comparator) => {
    let value = 0

    for (const currentSort of sortChain) {
      value = currentSort(initial, comparator)

      if (value) { break }
    }

    return value
  }
}

export default defineComponent({
  name: 'ProjectShowcase',
  components: {
    ProjectModal,
    ProjectCard,
  },
  props: {
    projects: {
      type: Array as Prop<ProfileProjects>,
      required: true,
    },
    featuredFirst: {
      type: Boolean,
      default: false,
    },
    descending: {
      type: Boolean,
      default: false,
    },
    ascending: {
      type: Boolean,
      default: false,
    },
  },
  setup (props) {
    const { projects, featuredFirst, descending, ascending } = toRefs(props)
    const sortChain = computed<SortChain>(
      () => [
        ...(featuredFirst.value ? [featuredFirstOrder] : []),
        ...(descending.value ? [descendingOrder] : []),
        ...(ascending.value ? [ascendingOrder] : []),
      ],
    )
    const sort = computed(() => createPrioritySort(sortChain.value))
    const formattedProjects = computed(() => projects.value.sort(sort.value))

    const modalRef = ref()
    const modal = reactive({
      project: formattedProjects.value[0],
      open: (projectIndex: number) => {
        modal.project = formattedProjects.value[projectIndex]
        modalRef.value.open()
      },
      close: () => { modalRef.value.close() },
    })

    return {
      formattedProjects,
      modalRef,
      modal,
    }
  },
})
</script>

<template>
  <v-container class="px-0" fluid>
    <v-row>
      <v-fade-transition
        v-for="(project, index) in formattedProjects"
        :key="project.name"
      >
        <v-col
          cols="12"
          md="4"
          align-self="stretch"
        >
          <project-card
            :project="project"
            @click.stop="modal.open(index)"
          />
        </v-col>
      </v-fade-transition>
    </v-row>
    <project-modal
      ref="modalRef"
      :project="modal.project"
    />
  </v-container>
</template>
