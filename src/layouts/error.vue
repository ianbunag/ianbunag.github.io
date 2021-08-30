<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
} from '@nuxtjs/composition-api'

import { icons, pages } from '~/config'

interface NuxtError extends Error {
  statusCode?: number,
}

export default defineComponent({
  props: {
    error: {
      type: Object as Prop<Nullable<NuxtError>>,
      default: null,
    },
  },
  setup (props) {
    const { error } = toRefs(props)
    const message = ref(
      error?.value?.statusCode === 404
        ? 'The page you are looking for is not here.'
        : 'Something went wrong.',
    )

    return {
      message,
      icons,
      pages,
    }
  },
})
</script>

<template>
  <v-container class="full-height" fluid>
    <v-row
      justify="center"
      align="center"
      class="text-center full-height"
    >
      <v-col cols="12">
        <v-icon x-large>
          {{ icons.mdiAlertOctagonOutline }}
        </v-icon>

        <div class="text-h5">
          {{ message }}
        </div>
        <a :href="pages.HOME.route">
          Let us head back home.
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
