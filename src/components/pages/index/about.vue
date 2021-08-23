<script lang = "ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { technologies } from '~/config/technologies'
import TechnologyList from '~/components/technology-list.vue'

import type { Skills } from '@/config/profile'
import type { Technology } from '@/config/technologies'

export default defineComponent({
  name: 'About',
  components: { TechnologyList },
  props: {
    skills: {
      type: Array as ()=> Skills<typeof technologies>,
      required: true,
    },
  },
  setup () {
    function getTechnology (key: keyof typeof technologies): Technology {
      return technologies[key]
    }

    return { getTechnology }
  },
})
</script>

<template>
  <v-row
    justify="center"
    align="center"
    class="section"
  >
    <v-col cols="12" class="layer-content mt-16 pt-8 pt-md-16">
      <v-container fluid>
        <v-row justify="center" align="center">
          <v-col cols="12" md="10">
            <slot name="title" />
          </v-col>
          <v-col cols="12" md="10">
            <slot name="about" />
          </v-col>
        </v-row>

        <v-row>
          <v-col
            v-for="skill in skills"
            :key="skill.name"
            :order="skill.order"
            cols="12"
            md="4"
            align-self="stretch"
          >
            <v-hover>
              <template #default="{ hover }">
                <v-card
                  class="full-height d-flex flex-column transition-swing"
                  :elevation="hover ? 16 : 8"
                >
                  <div class="mt-5 px-4">
                    <v-icon size="60px">
                      {{ skill.icon }}
                    </v-icon>
                  </div>
                  <v-card-title>{{ skill.name }}</v-card-title>
                  <v-card-text>{{ skill.description }}</v-card-text>
                  <v-spacer />
                  <v-card-actions>
                    <technology-list
                      :technologies="skill.technologies.map(getTechnology)"
                    />
                  </v-card-actions>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <div class="layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
