import { defineNuxtPlugin } from '#app'
import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.$router.options.scrollBehavior = async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalizedLoaded,
    savedPosition: undefined | { top: number; left: number }
  ) => {
    if (savedPosition) {
      return savedPosition
    }

    const findEl = async (hash: string, x = 0) => {
      return (
        document.querySelector(hash) ||
        new Promise((resolve) => {
          if (x > 0) {
            return resolve(document.querySelector('#app'))
          }

          setTimeout(() => {
            resolve(findEl(hash, 1))
          }, 300)
        })
      )
    }

    if (to.hash) {
      const element = (await findEl(to.hash)) as Awaited<HTMLElement>

      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
      }

      return window.scrollTo(0, element.offsetTop)
    }

    return { left: 0, top: 0, behaviour: 'smooth' }
  }
})
