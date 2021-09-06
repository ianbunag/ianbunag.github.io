<script lang = "ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api'

import { useBreakPoints } from '~/lib/hooks'
import { getIcon } from '~/config/icons'
import { Type } from '~/config/profile/experiences'
import ExperienceCard, {
  getRange,
  getDuration,
} from '~/components/experience/card.vue'

import type { ProfileExperiences } from '~/config/profile/experiences'
import type { ConfigIconKeys, ConfigIcon } from '~/config/icons'

interface TimelineOptions {
  labelClass: string,
  timelineClass: string,
}

export const timelineOptions = {
  type: Object as Prop<TimelineOptions>,
  default: () => ({}),
}

const typeIcon: Record<Type, ConfigIconKeys> = {
  [Type.FULL_TIME_JOB]: 'mdiBriefcaseVariant',
  [Type.INTERNSHIP]: 'mdiNotebookEdit',
  [Type.STUDIES]: 'mdiSchool',
}

function getTypeIcon (type: Type): ConfigIcon {
  return getIcon(typeIcon[type])
}

export default defineComponent({
  name: 'ExperienceTimeline',
  components: { ExperienceCard },
  props: {
    experiences: {
      type: Array as Prop<ProfileExperiences>,
      required: true,
    },
    timeline: timelineOptions,
  },
  setup () {
    const { isMobile } = toRefs(useBreakPoints())

    return {
      isMobile,
      getTypeIcon,
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
      :icon="getTypeIcon(experience.type)"
      large
    >
      <template #opposite>
        <div
          :class="[timeline.labelClass]"
          class="text-subtitle-1 g-text-pair"
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
      />
    </v-timeline-item>
  </v-timeline>
</template>
