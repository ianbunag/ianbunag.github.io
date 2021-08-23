<script lang="ts">
import { defineComponent, toRefs, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DividerTiltTopLeft',
  props: {
    height: {
      type: String,
      default: '100px',
    },
    width: {
      type: String,
      default: '100%',
    },
  },
  setup (props) {
    const { height, width } = toRefs(props)

    return {
      cssProps: reactive({
        '--height': height,
        '--width': width,
      }),
    }
  },
})
</script>

<template>
  <div class="divider-tilt-left" :style="cssProps">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.divider-tilt-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.divider-tilt-left svg {
  position: relative;
  display: block;
  width: calc(var(--width) + 1.3px);
  height: var(--height);
  transform: rotateY(180deg);
}
</style>
