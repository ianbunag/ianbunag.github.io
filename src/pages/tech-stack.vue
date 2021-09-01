<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { techStacks } from '~/config/profile'
import TechnologyStackList from '~/components/technology/stack-list.vue'

export default defineComponent({
  name: 'PageTechStack',
  components: { TechnologyStackList },
  layout: 'independent',
  setup () {
    return { techStacks }
  },
  head: { title: 'Tech Stack' },
})
</script>

<template>
  <div class="mt-3 mx-0 px-0 mx-md-16 px-md-12 pb-4">
    <div class="text-center justify-center">
      <span class="emphasized-title font-weight-bold text-h3 text-md-h2">
        Tech Stack
      </span>
    </div>

    <technology-stack-list
      v-for="techStack of techStacks"
      :key="techStack.category"
      :tech-stack="techStack"
    />
  </div>
</template>
