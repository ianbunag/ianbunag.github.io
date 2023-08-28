<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api'

import { icons, pages, profile } from '~/config'

import About from '~/components/pages/index/about.vue'
import Contact from '~/components/pages/index/contact.vue'
import Experience from '~/components/pages/index/experience.vue'
import Introduction from '~/components/pages/index/introduction.vue'
import Projects from '~/components/pages/index/projects.vue'
import { createCanonicalLink } from '~/lib/nuxt.config'

import BrandingLogoSolid from '~/components/branding/logo/solid.vue'
import DividerTiltTopLeft from '~/components/dividers/tilt-top-left.vue'
import DividerTiltTopRight from '~/components/dividers/tilt-top-right.vue'
import DividerTriangleTopRight from '~/components/dividers/triangle-top-left.vue'
import DividerTriangleTopLeft from '~/components/dividers/triangle-top-right.vue'

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
    const { env } = useContext()

    useMeta({ link: [{ rel: 'canonical', href: createCanonicalLink(env) }] })

    return {
      profile,
      icons,
      pages,
    }
  },
  head: {},
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
      content-class="mt-16 mb-6 pt-12 pt-md-16"
      class="section-background-light"
    >
      <template #title>
        A little bit about myself
      </template>
      <template #sub-title>
        {{ profile.introduction.dynamic() }}
      </template>
      <template #footer>
        <v-btn
          :to="pages.TECH_STACK.route"
          class="secondary"
          x-large
          nuxt
        >
          Tech stack
          <v-icon>{{ icons.mdiArrowTopRight }}</v-icon>
        </v-btn>
      </template>
      <template #background>
        <divider-tilt-top-left
          class="shape fill-background-darker elevate-bottom offset-top-10"
        />
      </template>
    </about>

    <projects
      :projects="profile.projects"
      content-class="mt-16 pt-6 pt-md-4"
      class="section-background-dark"
    >
      <template #title>
        Noteworthy Endeavors
      </template>
      <template #sub-title>
        Projects that showcase my technical growth over the years.
      </template>
      <template #footer>
        <v-btn
          :to="pages.PROJECTS.route"
          class="secondary"
          x-large
          nuxt
        >
          All projects
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
        labelClass: 'pf-text-light',
        timelineClass: 'pf-timeline-path-light'
      }"
      content-class="mt-16 pt-8 pt-md-10 mx-md-16 px-md-12"
      class="section-background-lighter"
    >
      <template #title>
        <span class="pf-text-light">
          My professional journey
        </span>
      </template>
      <template #sub-title>
        <span class="pf-text-light">
          Steps along my career evolution.
        </span>
      </template>
      <template #background>
        <divider-triangle-top-right
          class="shape fill-background-dark elevate-bottom offset-top-10"
        />
      </template>
    </experience>

    <contact
      :name="profile.name"
      :email="profile.email"
      :links="profile.links"
      content-id="contact"
      content-class="mt-16 pt-8 pt-md-10 mx-md-16 px-md-12 mb-8 mb-sm-0"
    >
      <template #title>
        Let's grab some sushi 🍣
      </template>
      <template #sub-title>
        <span>
          Or a cup of coffee? I'm excited to connect.
        </span>
      </template>
      <template #background>
        <divider-triangle-top-left
          class="shape fill-background-lighter elevate-bottom"
        />
      </template>
    </contact>
  </v-container>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
