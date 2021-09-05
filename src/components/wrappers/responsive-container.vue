<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { VContainer, VRow, VCol } from 'vuetify/lib/components/VGrid'

export default defineComponent({
  name: 'ResponsiveContainer',
  props: {
    justify: {
      type: String as Prop<VuetifyProps.VRow['justify']>,
      default: 'start',
    },
  },
  // Only Vue/Nuxt v2 render syntax is supported at the time of creation
  render (h) {
    const { default: defaultProps = [] } = this.$slots
    // @ts-expect-error prop has default value
    const { justify } = this.$props
    const columns = defaultProps.map((defaultProp) => {
      if (!defaultProp.tag) { return defaultProp }

      return h(
        VCol,
        { props: { cols: 'auto' } },
        [defaultProp],
      )
    })
    const row = h(
      VRow,
      { props: { justify, dense: true } },
      [columns],
    )
    const container = h(
      VContainer,
      {
        class: 'g-bound-less',
        props: { fluid: true },
      },
      [row],
    )

    return container
  },
})
</script>
