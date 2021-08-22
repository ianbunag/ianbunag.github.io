<script lang = "ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({ name: 'About' })
</script>

<template>
  <v-row
    justify="center"
    align="center"
    class="text-center section"
  >
    <v-col cols="12" class="layer-content">
      About
    </v-col>
    <div class="layer-background">
      <slot name="background" />
    </div>
  </v-row>
</template>

<style src="~/assets/styles/pages/index.scss" lang="scss" scoped/>
