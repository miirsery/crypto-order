import ElementPlus, { ID_INJECTION_KEY } from 'element-plus'
import { defineNuxtPlugin } from '#app'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 1,
  })

  nuxtApp.vueApp.use(ElementPlus)
})
