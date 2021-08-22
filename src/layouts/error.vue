<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
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
    const message = ref(
      error.value.statusCode === 404
        ? 'The page you are looking for is not here.'
        : 'Something went wrong.',
    )

    return { message }
  },
})
</script>

<template>
  <v-app dark>
    <v-container fluid>
      <v-row
        justify="center"
        align="center"
        class="text-center section"
      >
        <v-col cols="auto">
          <v-icon x-large>
            mdi-alert-octagon-outline
          </v-icon>

          <h1>{{ message }}</h1>
          <NuxtLink to="/">
            Let us head back home
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
h1 {
  font-size: 20px;
}

.section {
  min-height: 100vh;
}
</style>
