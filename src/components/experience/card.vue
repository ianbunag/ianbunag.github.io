<script lang = "ts">
import { defineComponent, toRefs, computed } from '@nuxtjs/composition-api'
import moment from 'moment'

import { useBreakPoints } from '~/lib/hooks'
import { icons } from '~/config/icons'
import { getAssociation } from '~/config/associations'

import type { ProfileExperience } from '~/config/profile/experiences'

interface HeadingOptions {
  title: Heading.Levels,
  subtitle: Heading.Levels,
}

export const headingOptions = {
  type: Object as Prop<HeadingOptions>,
  default: () => ({}),
}

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
    heading: headingOptions,
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
          <tbody>
            <tr>
              <td>
                <a
                  :href="mappedAssociation.url || undefined"
                  :aria-label="mappedAssociation.name || 'Association'"
                  :class="{ 'pf-default-cursor': !mappedAssociation.url }"
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
                        class="pf-full-height pf-margin-less pf-fade-35"
                      >
                        <v-icon size="100%" class="pf-absolute">
                          {{ icons.mdiDomain }}
                        </v-icon>
                      </v-row>
                    </template>
                  </v-img>
                </a>
              </td>
              <td :class="{ 'py-1': !hidePeriod }">
                <v-card-title class="pt-0 px-0">
                  <heading
                    :level="heading.title || 3"
                    :class="{ 'text-subtitle-1': isMobile }"
                    class="text-h6 experience-card pf-text-pair"
                  >
                    {{ experience.role }}
                  </heading>
                </v-card-title>
                <v-card-subtitle class="pb-0 px-0">
                  <template v-if="hidePeriod">
                    <heading
                      :level="heading.subtitle || 4"
                      class="text-body-1"
                    >
                      {{ mappedAssociation.name }}
                    </heading>
                  </template>
                  <template v-else>
                    <heading
                      :level="heading.subtitle || 4"
                      class="text-body-2"
                    >
                      {{ mappedAssociation.name }}
                    </heading>
                    <div class="text-caption pf-text-pair-accent">
                      {{ getRange(experience.period) }}
                      <strong>({{ getDuration(experience.period) }})</strong>
                    </div>
                  </template>
                </v-card-subtitle>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- eslint-disable vue/no-v-html -->
        <v-card-text
          class="px-3 pb-3 pf-bound-less"
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

.experience-card {
  display: inline-block;
  line-height: 1.5;
}
</style>
