<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { create } from '~/components/dividers/base'

export default defineComponent({
  name: 'DividerTriangleTopLeft',
  extends: create('75px', '100%'),
})
</script>

<template>
  <div class="divider-container">
    <div class="divider-triangle-top-left" :style="cssProps">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/components/dividers.scss';

.divider-triangle-top-left {
  @include divider-object(var(--width), var(--height), true);

  left: -15%;
  width: 150%;
}
</style>
