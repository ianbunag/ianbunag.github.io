<script lang = "ts">
import { defineComponent, toRefs, computed } from '@nuxtjs/composition-api'

import { useBreakPoints } from '~/lib/hooks'
import { icons } from '~/config/icons'

import type { Experience } from '@/config/profile'
import { getDuration, getRange } from './period'

interface HeadingOptions {
  title: Heading.Levels,
  subtitle: Heading.Levels,
}

export const headingOptions = {
  type: Object as Prop<HeadingOptions>,
  default: () => ({}),
}

export default defineComponent({
  name: 'ExperienceCard',
  props: {
    experience: {
      type: Object as Prop<Experience>,
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
    const imgCSSProps = computed(() => ({
      '--logo-accent': experience.value.association.logoAccent,
    }))

    return {
      isMobile,
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
                  :href="experience.association.url || undefined"
                  :aria-label="experience.association.name || 'Association'"
                  :class="{ 'pf-default-cursor': !experience.association.url }"
                >
                  <v-img
                    :src="experience.association.logoURL"
                    :class="{ 'link-logo': experience.association.url }"
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
                      {{ experience.association.name }}
                    </heading>
                  </template>
                  <template v-else>
                    <heading
                      :level="heading.subtitle || 4"
                      class="text-body-2"
                    >
                      {{ experience.association.name }}
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
