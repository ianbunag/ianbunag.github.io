<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { profile, icons, pages } from '~/config'

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
      <template #background>
        <divider-tilt-top-left
          class="shape-fill-dark-blue-green elevate-shape-bottom"
        />
      </template>
    </about>

    <projects
      :projects="profile.projects"
      class="section-blue-green"
    >
      <template #title>
        Awesome stuff
      </template>
      <template #description>
        Projects that showcase my technical growth over the years.
      </template>
      <template #footer>
        <div class="text-h5">
          Got your attention?
          <v-btn
            class="secondary mt-0 ml-2"
            :to="pages.PROJECTS.route"
            large
          >
            See more projects
            <v-icon>{{ icons.mdiArrowTopRight }}</v-icon>
          </v-btn>
        </div>
      </template>
      <template #background>
        <divider-tilt-top-right
          class="shape-fill-slate-gray elevate-shape-bottom"
        />
      </template>
    </projects>

    <!-- @TODO remove style -->
    <skills class="section-light-blue-green" style="color: black;">
      <template #background>
        <divider-tilt-top-left
          class="shape-fill-blue-green elevate-shape-bottom"
        />
      </template>
    </skills>

    <experience class="section-dark-slate-gray">
      <template #background>
        <divider-tilt-top-left
          class="shape-fill-light-blue-green elevate-shape-bottom"
        />
      </template>
    </experience>
  </v-container>
</template>

<style lang="scss" scoped>
  $shadow: drop-shadow(0 5px 2px rgba(0, 0, 0, 0.65));

  .elevate-shape-bottom {
    filter: $shadow;
    -webkit-filter: $shadow;
    clip-path: inset(-1px -25px -50px -25px);
  }
</style>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
