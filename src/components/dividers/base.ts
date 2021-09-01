import { defineComponent, toRefs, reactive } from '@nuxtjs/composition-api'

export function create (
  defaultHeight = '100px',
  defaultWidth = '100%',
): ReturnType<typeof defineComponent> {
  return defineComponent({
    props: {
      height: {
        type: String,
        default: defaultHeight,
      },
      width: {
        type: String,
        default: defaultWidth,
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
}
