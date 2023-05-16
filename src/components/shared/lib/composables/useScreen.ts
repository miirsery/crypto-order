import { ComputedRef, ToRefs } from 'vue'
import { useNuxtApp } from '#app'

type ScreenType = {
  size: string
  width: number
  isMobile: ComputedRef<boolean>
  isTablet: ComputedRef<boolean>
  isMobileOrTablet: ComputedRef<boolean>
  isDesktop: ComputedRef<boolean>
  isFullHd: ComputedRef<boolean>
}

export function useScreen(): ToRefs<ScreenType> {
  const nuxtApp = useNuxtApp()

  return nuxtApp.vueApp.config.globalProperties.$screen as ToRefs<ScreenType>
}
