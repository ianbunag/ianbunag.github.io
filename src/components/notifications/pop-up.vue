<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NotificationPopUp',
  props: {
    message: {
      type: String,
      required: true,
    },
    timeout: {
      type: Number,
      default: undefined,
    },
  },
  setup: () => {
    const snackbar = ref(false)
    function open () { snackbar.value = true }
    function close () { snackbar.value = false }

    return {
      snackbar,
      open,
      close,
    }
  },
})
</script>

<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ message }}

      <template #action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="close"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
