<script lang="ts">
export default { name: 'ImageLoader' }
</script>

<template>
  <v-row
    align="center"
    justify="center"
    class="fill-height pf-margin-less"
  >
    <v-progress-circular
      aria-label="image-loader"
      color="accent"
      indeterminate
    />
  </v-row>
</template>
