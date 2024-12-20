<script lang = "ts">
import { defineComponent, toRef, toRefs, computed } from '@nuxtjs/composition-api'

import { useBreakPoints } from '~/lib/hooks'
import ExperienceTimeline, {
  timelineOptions,
} from '~/components/experience/timeline.vue'

import type { Experience, Experiences } from '@/config/profile'

function descendingSort (initial: Experience, comparator: Experience): number {
  return comparator.period.start.valueOf() - initial.period.start.valueOf()
}

export default defineComponent({
  name: 'PageRootExperience',
  components: { ExperienceTimeline },
  props: {
    experiences: {
      type: Array as Prop<Experiences>,
      required: true,
    },
    contentClass: {
      type: String,
      default: '',
    },
    timeline: timelineOptions,
  },
  setup (props) {
    const { isMobile } = toRefs(useBreakPoints())
    const sortedExperiences = computed(() => {
      return toRef(props, 'experiences').value.sort(descendingSort)
    })

    return {
      isMobile,
      sortedExperiences,
    }
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
      :cols="isMobile ? '12' : '11'"
      :class="contentClass"
      class="pf-layer-content pf-bound-less"
    >
      <heading
        level="2"
        class="text-h3 pa-1 text-center pf-text-pair"
      >
        <slot name="title" />
      </heading>
      <heading
        level="3"
        class="text-h5 pa-1 text-center"
      >
        <slot name="sub-title" />
      </heading>
      <experience-timeline
        :experiences="sortedExperiences"
        :timeline="timeline"
        :heading="{ company: 4, position: 5, period: 6 }"
        class="mt-6 mx-md-16"
      />
    </v-col>
    <div class="pf-layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
