<script lang = "ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api'

import { useBreakPoints } from '~/lib/hooks'
import { icons } from '~/config/icons'
import ExperienceCard, {
  headingOptions,
} from '~/components/experience/card.vue'

import { ExperienceType } from '@/config/profile'

import type { Icon } from '@/config/icons'
import type { Experiences } from '@/config/profile'
import { getRange, getDuration } from './period'

interface TimelineOptions {
  labelClass: string,
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
    const { isMobile } = toRefs(useBreakPoints())

    return {
      isMobile,
      experienceIcon,
      getRange,
      getDuration,
    }
  },
})
</script>

<template>
  <v-timeline
    :dense="isMobile"
    :class="timeline.timelineClass"
  >
    <v-timeline-item
      v-for="(experience, index) in experiences"
      :key="index"
      :icon="experienceIcon[experience.type]"
      large
    >
      <template #opposite>
        <div
          :class="[timeline.labelClass]"
          class="text-subtitle-1 pf-text-pair"
        >
          {{ getRange(experience.period) }}
        </div>
        <div
          :class="[timeline.labelClass]"
          class="text-subtitle-2"
        >
          {{ getDuration(experience.period) }}
        </div>
      </template>
      <experience-card
        :experience="experience"
        :hide-period="!isMobile"
        :heading="heading"
      />
    </v-timeline-item>
  </v-timeline>
</template>
