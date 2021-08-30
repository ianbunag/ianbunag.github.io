<script lang="ts">
import {
  defineComponent,
  computed,
  toRef,
} from '@nuxtjs/composition-api'

import { getMappedTechnology } from '~/config/technologies'
import ResponsiveContainer from '~/components/wrappers/responsive-container.vue'
import TechnologyIcon from '~/components/technology/icon.vue'

import type{ ConfigTechnologyKeys } from '~/config/technologies'

export default defineComponent({
  name: 'TechnologyList',
  components: {
    ResponsiveContainer,
    TechnologyIcon,
  },
  props: {
    technologies: {
      type: Array as Prop<Array<ConfigTechnologyKeys>>,
      required: true,
    },
    justify: {
      type: String as Prop<'start' | 'center' | 'end' | 'space-between' | 'space-around'>,
      default: 'start',
    },
  },
  setup (props) {
    const mappedTechnologies = computed(
      () => toRef(props, 'technologies').value.map(getMappedTechnology),
    )

    return { mappedTechnologies }
  },
})
</script>

<template>
  <responsive-container :justify="justify">
    <technology-icon
      v-for="mappedTechnology of mappedTechnologies"
      :key="mappedTechnology.display"
      v-bind="mappedTechnology"
      tooltip-top
    />
  </responsive-container>
</template>
