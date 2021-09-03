<script lang = "ts">
import { defineComponent, toRef, computed } from '@nuxtjs/composition-api'

import ExperienceTimeline, {
  timelineOptions,
} from '~/components/experience/timeline.vue'

import type {
  ProfileExperience,
  ProfileExperiences,
} from '~/config/profile/experiences'

function descendingSort (
  initial: ProfileExperience,
  comparator: ProfileExperience,
): number {
  const initialDate = +(new Date(initial.period.start))
  const comparatorDate = +(new Date(comparator.period.start))

  return comparatorDate - initialDate
}

export default defineComponent({
  name: 'PageRootExperience',
  components: { ExperienceTimeline },
  props: {
    experiences: {
      type: Array as Prop<ProfileExperiences>,
      required: true,
    },
    contentClass: {
      type: String,
      default: '',
    },
    timeline: timelineOptions,
  },
  setup (props) {
    const sortedExperiences = computed(() => {
      return toRef(props, 'experiences').value.sort(descendingSort)
    })

    return { sortedExperiences }
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
      cols="12"
      :class="contentClass"
      class="g-layer-content g-bound-less"
    >
      <div class="text-h3 pa-1 text-center g-text-pair">
        <slot name="title" />
      </div>
      <div class="text-h5 pa-1 text-center">
        <slot name="description" />
      </div>
      <experience-timeline
        :experiences="sortedExperiences"
        :timeline="timeline"
        class="mt-6 mx-md-16"
      />
    </v-col>
    <div class="g-layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
