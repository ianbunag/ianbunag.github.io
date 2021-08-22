<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Introduction from '~/components/pages/index/introduction.vue'
import About from '~/components/pages/index/about.vue'
import Projects from '~/components/pages/index/projects.vue'
import Skills from '~/components/pages/index/skills.vue'
import Experience from '~/components/pages/index/experience.vue'

import DividerTiltLeft from '~/components/dividers/tilt-left.vue'

export default defineComponent({
  components: {
    Introduction,
    About,
    Projects,
    Skills,
    Experience,
    DividerTiltLeft,
  },
})
</script>

<template>
  <v-container fluid>
    <introduction class="section-dark-blue-green" />
    <about class="section-slate-gray">
      <template #background>
        <divider-tilt-left class="shape-fill-dark-blue-green" />
      </template>
    </about>
    <projects class="section-blue-green">
      <template #background>
        <divider-tilt-left class="shape-fill-slate-gray" />
      </template>
    </projects>
    <skills class="section-light-blue-green">
      <template #background>
        <divider-tilt-left class="shape-fill-blue-green" />
      </template>
    </skills>
    <experience class="section-dark-slate-gray">
      <template #background>
        <divider-tilt-left class="shape-fill-light-blue-green" />
      </template>
    </experience>
  </v-container>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
