import { useContext, reactive, computed } from '@nuxtjs/composition-api'

export function useBreakPoints () {
  const { $vuetify } = useContext()
  const isMobile = computed(() => $vuetify.breakpoint.smAndDown)

  return reactive({
    isMobile,
  })
}
