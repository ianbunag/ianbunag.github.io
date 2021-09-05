<script lang = "ts">
import { defineComponent, toRefs, computed } from '@nuxtjs/composition-api'
import moment from 'moment'

import { useBreakPoints } from '~/lib/hooks'
import { icons } from '~/config/icons'
import { getAssociation } from '~/config/associations'

import type { ProfileExperience } from '~/config/profile/experiences'

export function getRange (period: ProfileExperience['period']): string {
  return `${period.start} - ${period.end || 'Present'}`
}

export function getDuration (period: ProfileExperience['period']): string {
  const ranges = ['years', 'months', 'days'] as const
  const date = {
    from: moment(new Date(period.start)),
    to: moment(period.end ? new Date(period.end) : Date.now()),
  }

  for (const range of ranges) {
    const currentDuration = date.to.diff(date.from, range)

    if (currentDuration) {
      const period = currentDuration !== 1
        ? range
        : range.slice(0, -1)

      return `${currentDuration} ${period}`
    }
  }

  return ''
}

export default defineComponent({
  name: 'ExperienceCard',
  props: {
    experience: {
      type: Object as Prop<ProfileExperience>,
      required: true,
    },
    hidePeriod: {
      type: Boolean,
      default: false,
    },
  },
  setup (props) {
    const { isMobile } = toRefs(useBreakPoints())
    const { experience } = toRefs(props)
    const mappedAssociation = computed(
      () => getAssociation(experience.value.association),
    )
    const imgCSSProps = computed(() => ({
      '--logo-accent': mappedAssociation.value.logoAccent,
    }))

    return {
      isMobile,
      mappedAssociation,
      icons,
      imgCSSProps,
      getRange,
      getDuration,
    }
  },
})
</script>

<template>
  <v-hover>
    <template #default="{ hover }">
      <v-card
        :elevation="hover ? 16 : 8"
        class="transition-swing"
      >
        <table>
          <tr>
            <td>
              <a
                :href="mappedAssociation.url || undefined"
                :aria-label="mappedAssociation.name || 'Association'"
                :class="{ 'g-default-cursor': !mappedAssociation.url }"
                rel="noopener"
                target="_blank"
              >
                <v-img
                  :src="mappedAssociation.logoURL"
                  :class="{ 'link-logo': mappedAssociation.url }"
                  :style="imgCSSProps"
                  transition="scale-transition"
                  aspect-ratio="1"
                  min-width="45px"
                  max-width="45px"
                  class="ma-3"
                  contain
                >
                  <template #placeholder>
                    <v-row
                      align="center"
                      justify="center"
                      class="g-full-height g-margin-less g-fade-35"
                    >
                      <v-icon size="100%" class="g-absolute">
                        {{ icons.mdiDomain }}
                      </v-icon>
                    </v-row>
                  </template>
                </v-img>
              </a>
            </td>
            <td :class="{ 'py-1': !hidePeriod }">
              <v-card-title
                :class="{ 'text-subtitle-1 pb-3': isMobile }"
                class="pt-0 px-0 g-text-pair"
              >
                {{ experience.role }}
              </v-card-title>
              <template v-if="hidePeriod">
                <v-card-subtitle class="pb-0 px-0 text-body-1">
                  {{ mappedAssociation.name }}
                </v-card-subtitle>
              </template>
              <template v-else>
                <v-card-subtitle class="pb-0 px-0">
                  <div class="text-body-2">
                    {{ mappedAssociation.name }}
                  </div>
                  <div class="text-caption g-text-pair-accent">
                    {{ getRange(experience.period) }}
                    <strong>({{ getDuration(experience.period) }})</strong>
                  </div>
                </v-card-subtitle>
              </template>
            </td>
          </tr>
        </table>

        <!-- eslint-disable vue/no-v-html -->
        <v-card-text
          class="px-3 pb-3 g-bound-less"
          v-html="experience.description"
        />
        <!-- eslint-enable vue/no-v-html -->
      </v-card>
    </template>
  </v-hover>
</template>

<style lang="scss" scoped>
.link-logo {
  border-bottom: 1.5px solid transparent;

  :hover {
    border-bottom: 1.5px solid var(--logo-accent);
  }
}
</style>
