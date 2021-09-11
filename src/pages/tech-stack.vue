<script lang="ts">
import { defineComponent, useMeta, useContext } from '@nuxtjs/composition-api'

import { createCanonicalLink } from '~/lib/nuxt.config'
import { techStacks } from '~/config/profile'
import { pages } from '~/config'
import TechnologyStackList from '~/components/technology/stack-list.vue'

export default defineComponent({
  name: 'PageTechStack',
  components: { TechnologyStackList },
  layout: 'independent',
  setup () {
    const { env } = useContext()
    const canonicalLink =
      `${createCanonicalLink(env)}${pages.TECH_STACK.route}`

    useMeta({
      title: pages.TECH_STACK.name,
      link: [{ rel: 'canonical', href: canonicalLink }],
    })

    return { techStacks }
  },
  head: {},
})
</script>

<template>
  <div class="mt-3 mx-0 px-0 mx-md-16 px-md-12 pb-4">
    <div class="text-center justify-center">
      <heading class="text-h3 text-md-h2 pf-text-pair">
        <span class="pf-emphasized-title">
          Tech Stack
        </span>
      </heading>
    </div>

    <technology-stack-list
      v-for="techStack of techStacks"
      :key="techStack.category"
      :tech-stack="techStack"
      :heading="{ section: 2, stack: 3 }"
    />
  </div>
</template>
