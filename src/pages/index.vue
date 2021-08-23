<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import * as profile from '~/config/profile'

import Introduction from '~/components/pages/index/introduction.vue'
import About from '~/components/pages/index/about.vue'
import Projects from '~/components/pages/index/projects.vue'
import Skills from '~/components/pages/index/skills.vue'
import Experience from '~/components/pages/index/experience.vue'

import BrandingLogoSolid from '~/components/branding/logo/solid.vue'
import DividerTiltTopLeft from '~/components/dividers/tilt-top-left.vue'
import DividerTiltTopRight from '~/components/dividers/tilt-top-right.vue'

export default defineComponent({
  components: {
    Introduction,
    About,
    Projects,
    Skills,
    Experience,
    BrandingLogoSolid,
    DividerTiltTopLeft,
    DividerTiltTopRight,
  },
  setup () {
    return { profile }
  },
})
</script>

<template>
  <v-container fluid>
    <introduction
      :name="profile.name"
      :tag="profile.tag"
      :titles="profile.titles"
      class="section-dark-blue-green"
    >
      <template #logo>
        <branding-logo-solid color="#fff" responsive />
      </template>
    </introduction>
    <about
      :skills="profile.skills"
      class="section-slate-gray"
    >
      <template #title>
        <h1 class="text-center">
          A little bit about myself
        </h1>
      </template>
      <template #about>
        <h3
          v-for="(introduction, index) in profile.introduction"
          :key="index"
          class="text-center"
        >
          {{ introduction }}
        </h3>
      </template>
      <template #background>
        <divider-tilt-top-left class="shape-fill-dark-blue-green" />
      </template>
    </about>
    <projects class="section-blue-green">
      <template #background>
        <divider-tilt-top-right class="shape-fill-slate-gray" />
      </template>
    </projects>
    <skills class="section-light-blue-green">
      <template #background>
        <divider-tilt-top-left class="shape-fill-blue-green" />
      </template>
    </skills>
    <experience class="section-dark-slate-gray">
      <template #background>
        <divider-tilt-top-left class="shape-fill-light-blue-green" />
      </template>
    </experience>
  </v-container>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
