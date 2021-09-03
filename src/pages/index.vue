<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { profile, icons, pages } from '~/config'

import Introduction from '~/components/pages/index/introduction.vue'
import About from '~/components/pages/index/about.vue'
import Projects from '~/components/pages/index/projects.vue'
import Experience from '~/components/pages/index/experience.vue'
import Contact from '~/components/pages/index/contact.vue'

import BrandingLogoSolid from '~/components/branding/logo/solid.vue'
import DividerTiltTopLeft from '~/components/dividers/tilt-top-left.vue'
import DividerTiltTopRight from '~/components/dividers/tilt-top-right.vue'
import DividerTriangleTopLeft from '~/components/dividers/triangle-top-right.vue'
import DividerTriangleTopRight from '~/components/dividers/triangle-top-left.vue'

export default defineComponent({
  name: 'PageRoot',
  components: {
    Introduction,
    About,
    Projects,
    Experience,
    Contact,
    BrandingLogoSolid,
    DividerTiltTopLeft,
    DividerTiltTopRight,
    DividerTriangleTopLeft,
    DividerTriangleTopRight,
  },
  layout: 'single-page',
  setup () {
    return {
      profile,
      icons,
      pages,
    }
  },
})
</script>

<template>
  <v-container fluid>
    <introduction
      :name="profile.name"
      :tag="profile.tag"
      :titles="profile.titles"
      class="section-background-darker"
    >
      <template #logo>
        <branding-logo-solid color="#fff" responsive />
      </template>
    </introduction>

    <about
      :skills="profile.skills"
      content-class="mt-16 mb-8 pt-12 pt-md-16"
      class="section-background-light"
    >
      <template #title>
        A little bit about myself
      </template>
      <template #description>
        <div
          v-for="(introduction, index) in profile.introduction"
          :key="index"
        >
          {{ introduction }}
        </div>
      </template>
      <template #footer>
        <v-btn
          class="secondary"
          :to="pages.TECH_STACK.route"
          x-large
        >
          See my tech stack
          <v-icon>{{ icons.mdiArrowTopRight }}</v-icon>
        </v-btn>
      </template>
      <template #background>
        <divider-tilt-top-left
          class="shape fill-background-darker elevate-bottom"
        />
      </template>
    </about>

    <projects
      :projects="profile.projects"
      content-class="mt-16 pt-6 pt-md-8"
      class="section-background-dark"
    >
      <template #title>
        Some awesome stuff
      </template>
      <template #description>
        Projects that showcase my technical growth over the years.
      </template>
      <template #footer>
        <v-btn
          class="secondary"
          :to="pages.PROJECTS.route"
          x-large
        >
          See all projects
          <v-icon>{{ icons.mdiArrowTopRight }}</v-icon>
        </v-btn>
      </template>
      <template #background>
        <divider-tilt-top-right
          class="shape fill-background-light elevate-bottom offset-top-15"
        />
      </template>
    </projects>

    <experience
      :experiences="profile.experiences"
      :timeline="{
        labelClass: 'g-text-light',
        timelineClass: 'g-timeline-path-light'
      }"
      content-class="mt-16 pt-8 pt-md-10 mx-md-16 px-md-12"
      class="section-background-lighter"
    >
      <template #title>
        <span class="g-text-light">
          My professional journey
        </span>
      </template>
      <template #description>
        <span class="g-text-light">
          Experiences that sculpted me to what I am today.
        </span>
      </template>
      <template #background>
        <divider-triangle-top-right
          class="shape fill-background-dark elevate-bottom offset-top-10"
        />
      </template>
    </experience>

    <contact>
      <template #background>
        <divider-triangle-top-left
          class="shape fill-background-lighter elevate-bottom"
        />
      </template>
    </contact>
  </v-container>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
