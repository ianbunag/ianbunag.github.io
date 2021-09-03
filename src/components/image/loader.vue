<script lang="ts">
export default { name: 'ImageLoader' }
</script>

<template>
  <v-row
    align="center"
    justify="center"
    class="fill-height g-margin-less"
  >
    <v-progress-circular
      aria-label="image-loader"
      indeterminate
    />
  </v-row>
</template>
