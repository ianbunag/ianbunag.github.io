<script lang = "ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { getIcon } from '~/config/icons'
import TechnologyIconList from '~/components/technology/icon-list.vue'

import type { ProfileSkills } from '~/config/profile/skills'

export default defineComponent({
  name: 'About',
  components: { TechnologyIconList },
  props: {
    skills: {
      type: Array as Prop<ProfileSkills>,
      required: true,
    },
  },
  setup () {
    return { getIcon }
  },
})
</script>

<template>
  <v-row
    justify="center"
    align="center"
    class="section"
  >
    <v-col cols="12" class="layer-content bound-less mt-16 mb-8 pt-12 pt-md-16">
      <v-container class="bound-less" fluid>
        <v-row justify="center" align="center">
          <v-col cols="12" md="10">
            <div class="text-h3 text-center">
              <slot name="title" />
            </div>
          </v-col>
          <v-col cols="12" md="10">
            <div class="text-h5 text-center">
              <slot name="description" />
            </div>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col
            v-for="skill in skills"
            :key="skill.name"
            :order="skill.order"
            cols="12"
            sm="6"
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
                      {{ getIcon(skill.icon) }}
                    </v-icon>
                  </div>
                  <v-card-title>{{ skill.name }}</v-card-title>
                  <v-card-text>{{ skill.description }}</v-card-text>
                  <v-spacer />
                  <v-card-actions>
                    <technology-icon-list
                      :technologies="skill.technologies"
                      justify="end"
                      class="mb-1"
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
