<script lang="ts">
import { defineComponent, h } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Heading',
  props: {
    level: {
      type: [String, Number] as unknown as Prop<Heading.Levels>,
      default: 1,
    },
  },
  setup (props, { slots }) {
    return () => h(`h${props.level}`, undefined, slots.default?.())
  },
})
</script>
