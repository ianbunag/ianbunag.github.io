import {
  useContext,
  reactive,
  computed,
  ref,
  onMounted,
} from '@nuxtjs/composition-api'

export function useBreakPoints () {
  const { $vuetify } = useContext()
  const isMobile = computed(() => $vuetify.breakpoint.smAndDown)

  return reactive({
    isMobile,
  })
}

export function useIsMounted () {
  const isMounted = ref(false)

  onMounted(() => { isMounted.value = true })

  return isMounted
}
