<script lang="ts">
import {
  defineComponent,
  toRefs,
  computed,
  reactive,
  ref,
  watch,
} from '@nuxtjs/composition-api'

import ProjectModal, {
  headingOptions as modalHeadingOptions,
} from '~/components/projects/modal.vue'
import ProjectCard, {
  headingOptions,
  thumbnailOptions,
} from '~/components/projects/card.vue'

import type { Project, Projects } from '@/config/profile'

interface Sort {
  (initial: Project, comparator: Project): number,
}
type SortChain = Array<Sort>
interface Selected {
  key: Project['key'],
  shown: boolean,
}

export const featuredFirstOrder: Sort = (initial, comparator) => {
  if (initial.featured === comparator.featured) { return 0 }

  return initial.featured ? -1 : 1
}
export const descendingOrder: Sort = (initial, comparator) => {
  if (initial.period === comparator.period) { return 0 }
  if (initial.period === 'Present') { return -1 }
  if (comparator.period === 'Present') { return 1 }

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
  name: 'ProjectsShowcase',
  components: {
    ProjectModal,
    ProjectCard,
  },
  props: {
    selected: {
      type: Object as Prop<Selected>,
      default: () => ({
        key: '',
        shown: false,
      }),
    },
    projects: {
      type: Array as Prop<Projects>,
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
    justify: {
      type: String,
      default: undefined,
    },
    heading: headingOptions,
    modalHeading: modalHeadingOptions,
    thumbnail: thumbnailOptions,
  },
  emits: ['selected-changed'],
  setup (props, { emit }) {
    const {
      selected,
      projects,
      featuredFirst,
      descending,
      ascending,
    } = toRefs(props)
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
    const modal = (() => {
      const computedSelected = computed({
        get (): Selected { return selected.value },
        set (value: Selected) { emit('selected-changed', value) },
      })
      const initialProjectKey = Math.max(
        formattedProjects.value.findIndex(
          ({ key }) => key === selected.value.key,
        ),
        0,
      )
      const refs = reactive({
        project: formattedProjects.value[initialProjectKey],
        active: computedSelected.value.shown,
        open: (projectIndex: number) => {
          modal.project = formattedProjects.value[projectIndex]
          modalRef.value.open()
        },
        close: () => { modalRef.value.close() },
      })

      watch(() => refs.active, () => {
        computedSelected.value = { key: refs.project.key, shown: refs.active }
      })

      return refs
    })()

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
    <v-row :justify="justify">
      <v-fade-transition
        v-for="(project, index) in formattedProjects"
        :key="project.key"
      >
        <v-col
          cols="12"
          sm="6"
          md="4"
          align-self="stretch"
        >
          <project-card
            :project="project"
            :heading="heading"
            :thumbnail="thumbnail"
            @click.stop="modal.open(index)"
          />
        </v-col>
      </v-fade-transition>
    </v-row>
    <project-modal
      ref="modalRef"
      :heading="modalHeading"
      :project="modal.project"
      :active="modal.active"
      @active-changed="modal.active = $event"
    />
  </v-container>
</template>
