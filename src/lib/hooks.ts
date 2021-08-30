import { useContext, reactive, computed } from '@nuxtjs/composition-api'

export function useBreakPoints () {
  const { $vuetify } = useContext()
  const isMobile = computed(
    () => ['xs', 'sm'].includes($vuetify.breakpoint.name),
  )

  return reactive({
    isMobile,
  })
}
