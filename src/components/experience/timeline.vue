<script lang = "ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { icons } from '~/config/icons'
import ExperienceCard, {
  headingOptions,
} from '~/components/experience/card.vue'

import { ExperienceType } from '@/config/profile'

import type { Icon } from '@/config/icons'
import type { Experiences } from '@/config/profile'
import { getRange, getDuration } from './period'

interface TimelineOptions {
  timelineClass: string,
}

export const timelineOptions = {
  type: Object as Prop<TimelineOptions>,
  default: () => ({}),
}

const experienceIcon: Record<ExperienceType, Icon> = {
  [ExperienceType.FULL_TIME_JOB]: icons.mdiBriefcaseVariant,
  [ExperienceType.INTERNSHIP]: icons.mdiNotebookEdit,
  [ExperienceType.STUDIES]: icons.mdiSchool,
}

export default defineComponent({
  name: 'ExperienceTimeline',
  components: { ExperienceCard },
  props: {
    experiences: {
      type: Array as Prop<Experiences>,
      required: true,
    },
    timeline: timelineOptions,
    heading: headingOptions,
  },
  setup () {
    return {
      experienceIcon,
      getRange,
      getDuration,
    }
  },
})
</script>

<template>
  <v-timeline
    :class="timeline.timelineClass"
    dense
  >
    <v-timeline-item
      v-for="(experience, index) in experiences"
      :key="index"
      :icon="experienceIcon[experience.type]"
      large
    >
      <experience-card
        :experience="experience"
        :heading="heading"
      />
    </v-timeline-item>
  </v-timeline>
</template>
