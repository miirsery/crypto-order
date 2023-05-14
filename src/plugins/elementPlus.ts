import ElementPlus from 'element-plus'
import { defineNuxtPlugin } from '#app'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus)
})
