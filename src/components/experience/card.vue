<script lang = "ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

import { icons } from '~/config/icons'

import type { Experience } from '@/config/profile'
import { getDuration, getRange } from './period'

interface HeadingOptions {
  company: Heading.Levels,
  position: Heading.Levels,
  period: Heading.Levels,
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
    heading: headingOptions,
  },
  setup (props) {
    const { experience } = toRefs(props)
    const imgCSSProps = computed(() => ({
      '--logo-accent': experience.value.association.logoAccent,
    }))

    return {
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
      <v-card :elevation="hover ? 16 : 8" class="transition-swing">
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
                      <v-row align="center" justify="center" class="pf-full-height pf-margin-less pf-fade-35">
                        <v-icon size="100%" class="pf-absolute">
                          {{ icons.mdiDomain }}
                        </v-icon>
                      </v-row>
                    </template>
                  </v-img>
                </a>
              </td>
              <td class="py-1">
                <v-card-title class="pt-0 px-0">
                  <heading
                    :level="heading.company || 3"
                    class="text-subtitle-1 experience-card pf-text-pair"
                  >
                    {{ experience.association.name }}
                    <span v-if="experience.intermediary">
                      (under <a
                        :href="experience.intermediary.url || undefined"
                        :aria-label="experience.intermediary.name || 'Intermediary'"
                        class="pf-link-light"
                      >{{
                        experience.intermediary.name }}</a>)
                    </span>
                  </heading>
                </v-card-title>
                <v-card-subtitle class="pb-0 px-0">
                  <heading :level="heading.position || 4" class="text-subtitle-2 pf-text-pair-accent">
                    {{ experience.role }}
                  </heading>
                  <heading :level="heading.position || 5" class="text-body-2 pf-text-pair">
                    {{ getRange(experience.period) }} ({{ getDuration(experience.period) }})
                  </heading>
                </v-card-subtitle>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- eslint-disable vue/no-v-html -->
        <v-card-text class="px-3 pb-3 pf-bound-less" v-html="experience.description" />
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
