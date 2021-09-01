<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { create } from '~/components/dividers/base'

export default defineComponent({
  name: 'DividerTiltTopLeft',
  extends: create('100px', '150%'),
})
</script>

<template>
  <div class="divider-container">
    <div class="divider-tilt-left" :style="cssProps">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/components/dividers.scss';

.divider-tilt-left {
  @include divider-object(var(--width), var(--height), true);

  left: -12.5%;
  width: 125%;
}

</style>
