<script lang="ts">
import { defineComponent, h } from '@nuxtjs/composition-api'
import { VContainer, VRow, VCol } from 'vuetify/lib/components/VGrid'

export default defineComponent({
  name: 'ResponsiveContainer',
  props: {
    justify: {
      type: String as Prop<VuetifyProps.VRow['justify']>,
      default: 'start',
    },
  },
  setup (props, { slots }) {
    return () => {
      const columns = (slots.default?.() || []).map((defaultSlot) => {
        if (!defaultSlot.tag) { return defaultSlot }

        return h(
          VCol,
          { props: { cols: 'auto' } },
          [defaultSlot],
        )
      })
      const row = h(
        VRow,
        { props: { justify: props.justify, dense: true } },
        columns,
      )
      const container = h(
        VContainer,
        {
          class: 'pf-bound-less',
          props: { fluid: true },
        },
        [row],
      )

      return container
    }
  },
})
</script>
