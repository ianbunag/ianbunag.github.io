<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  useMeta,
} from '@nuxtjs/composition-api'

interface NuxtError extends Error {
  statusCode?: number,
}

export default defineComponent({
  layout: 'empty',
  props: {
    error: {
      type: Object as ()=> NuxtError,
      default: null,
    },
  },
  setup (props) {
    const { error } = toRefs(props)
    const pageNotFound = ref('404 Not Found')
    const otherError = ref('An error occurred')
    const { title } = useMeta()

    title.value = error.value.statusCode === 404
      ? pageNotFound.value
      : otherError.value

    return {
      pageNotFound,
      otherError,
    }
  },
  head: {},
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
