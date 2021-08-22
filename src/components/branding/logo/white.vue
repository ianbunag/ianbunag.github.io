<script lang = "ts">
import {
  defineComponent,
  toRefs,
  computed,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BrandingLogoWhite',
  props: {
    responsive: Boolean,
    width: {
      type: String,
      default: '666px',
    },
  },
  setup (props) {
    const { responsive, width } = toRefs(props)
    const computedWidth = computed(() => {
      if (responsive.value) { return '100%' }

      return width.value
    })

    return { computedWidth }
  },
})
</script>

<template>
  <svg
    version="1.2"
    baseProfile="tiny-ps"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 666 475"
    :width="computedWidth"
  >
    <g>
      <g>
        <path fill-rule="evenodd" class="shp" d="M512.03 87.89L346.05 385.74L281.38 410.82L473.29 68.41L512.03 87.89ZM285.85 406.94L344.65 384.13L509.27 88.74L474.1 71.06L285.85 406.94Z" />
      </g>
      <path class="shp" d="M281.38 410.82L448.92 111.91L512.03 87.89L346.05 385.74L281.38 410.82Z" />
      <g>
        <g>
          <path fill-rule="evenodd" class="shp" d="M248.1 234.24L113.33 285.89L208.16 331.69L187.69 368.75L60.26 307.66L60.53 260.61L280.82 175.37L248.1 234.24ZM62.52 261.98L62.27 306.41L186.85 366.13L205.39 332.57L112.46 287.69L108.3 285.68L112.62 284.02L246.7 232.63L276.39 179.23L62.52 261.98Z" />
        </g>
        <g>
          <path class="shp" d="M276.57 223.83L276.56 223.84L276.56 223.84L276.57 223.83Z" />
        </g>
      </g>
      <g>
        <path class="shp" d="M387.1 198.27L387.1 198.28L387.11 198.27L387.1 198.27Z" />
      </g>
      <g>
        <path class="shp" d="M320.88 245.08L320.88 245.06L320.87 245.08L320.88 245.08Z" />
      </g>
      <g>
        <path fill-rule="evenodd" class="shp" d="M238.57 393.14L198.38 374.08L362.12 79.52L427.16 54.56L238.57 393.14ZM363.51 81.12L201.16 373.18L237.73 390.53L422.73 58.4L363.51 81.12Z" />
      </g>
      <path class="shp" d="" />
      <path class="shp" d="" />
      <path class="shp" d="" />
      <g>
        <path class="shp" d="M248.1 234.24L280.82 175.37L60.53 260.61L60.26 307.66L114.77 285.34L248.1 234.24Z" />
        <path class="shp" d="M276.56 223.84L276.57 223.83L276.56 223.84L276.56 223.84Z" />
      </g>
      <g>
        <g>
          <path fill-rule="evenodd" class="shp" d="M602.31 239.64L602.04 286.69L381.74 371.94L414.47 313.06L549.23 261.42L454.59 215.71L475.06 178.64L602.31 239.64ZM457.37 214.83L550.1 259.62L554.27 261.63L549.95 263.28L415.86 314.67L386.18 368.08L600.04 285.32L600.3 240.9L475.9 181.26L457.37 214.83Z" />
        </g>
        <g>
          <path class="shp" d="M384.21 324.13L384.21 324.13L384.2 324.15L384.21 324.13Z" />
        </g>
      </g>
      <g>
        <path class="shp" d="M414.47 313.06L381.74 371.94L602.04 286.69L602.31 239.64L547.8 261.97L414.47 313.06Z" />
        <path class="shp" d="M384.21 324.13L384.2 324.15L384.21 324.13L384.21 324.13Z" />
      </g>
      <path class="shp" d="M198.38 374.08L362.12 79.52L427.16 54.56L263.18 348.96L198.38 374.08Z" />
    </g>
  </svg>
</template>

<style lang="scss" scoped>
  ::v-deep .shp {
    fill: #fff;
  }
</style>
