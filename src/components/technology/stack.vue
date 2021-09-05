<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { icons } from '~/config'
import type { Technology } from '@/config/technologies'

export default defineComponent({
  name: 'TechnologyStack',
  props: {
    display: {
      type: String as Prop<Technology['display']>,
      required: true,
    },
    description: {
      type: String as Prop<Technology['description']>,
      required: true,
    },
    icon: {
      type: String as Prop<Technology['icon']>,
      default: '',
    },
    logoURL: {
      type: String as Prop<Technology['logoURL']>,
      required: true,
    },
    url: {
      type: String as Prop<Technology['url']>,
      default: '',
    },
  },
  setup () {
    return { icons }
  },
})
</script>

<template>
  <v-hover>
    <template #default="{ hover }">
      <v-card
        :href="url || undefined"
        :target="url ? '_blank' : undefined"
        :rel="url ? 'noopener' : undefined"
        :elevation="hover ? 8 : 4"
        class="transition-swing"
      >
        <table>
          <tr>
            <td>
              <v-img
                :src="logoURL"
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
                      {{ icon || icons.mdiFlashCircle }}
                    </v-icon>
                  </v-row>
                </template>
              </v-img>
            </td>
            <td>
              <v-card-title class="pt-0 px-0 g-text-pair ">
                {{ display }}
              </v-card-title>
              <v-card-subtitle class="text-body-2 pb-0 px-0">
                {{ description }}
              </v-card-subtitle>
            </td>
          </tr>
        </table>
      </v-card>
    </template>
  </v-hover>
</template>
