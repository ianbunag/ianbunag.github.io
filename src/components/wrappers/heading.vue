<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Heading',
  props: {
    level: {
      type: [String, Number] as unknown as Prop<Heading.Levels>,
      default: 1,
    },
  },
  // Only Vue/Nuxt v2 render syntax is supported at the time of creation
  render (h) {
    const { default: defaultSlots = [] } = this.$slots
    // @ts-expect-error prop has default value
    const { level } = this.$props

    return h(`h${level}`, defaultSlots)
  },
})
</script>
