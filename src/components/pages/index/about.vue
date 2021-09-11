<script lang = "ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { getIcon } from '~/config/icons'
import TechnologyIconList from '~/components/technology/icon-list.vue'

import type { ProfileSkills } from '~/config/profile/skills'

export default defineComponent({
  name: 'PageRootAbout',
  components: { TechnologyIconList },
  props: {
    skills: {
      type: Array as Prop<ProfileSkills>,
      required: true,
    },
    contentClass: {
      type: String,
      default: '',
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
    <v-col
      :class="contentClass"
      cols="12"
      class="pf-layer-content pf-bound-less"
    >
      <v-container class="pf-bound-less" fluid>
        <v-row
          justify="center"
          align="center"
          dense
        >
          <v-col cols="12" md="10">
            <heading
              level="2"
              class="text-h3 text-center pf-text-pair"
            >
              <slot name="title" />
            </heading>
          </v-col>
          <v-col cols="12" md="10">
            <heading
              level="3"
              class="text-h5 text-center"
            >
              <slot name="sub-title" />
            </heading>
          </v-col>
        </v-row>

        <v-row justify="center" class="mt-5 mb-4">
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
                  class="d-flex flex-column transition-swing pf-full-height"
                  :elevation="hover ? 16 : 8"
                >
                  <div class="mt-4 px-4">
                    <v-icon size="60px">
                      {{ getIcon(skill.icon) }}
                    </v-icon>
                  </div>
                  <v-card-title class="pf-text-pair">
                    {{ skill.name }}
                  </v-card-title>
                  <v-card-text>{{ skill.description }}</v-card-text>
                  <v-spacer />
                  <v-card-actions>
                    <technology-icon-list
                      :technologies="skill.technologies"
                      justify="end"
                      class="mb-2 mx-2"
                    />
                  </v-card-actions>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>

        <v-row
          justify="center"
          align="center"
          class="text-center"
        >
          <v-col cols="12">
            <slot name="footer" />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <div class="pf-layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
