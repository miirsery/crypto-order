// https://nuxt.com/docs/api/configuration/nuxt-config
import StyleLintPlugin from 'vite-plugin-stylelint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { fileURLToPath } from 'url'

const styleLintConfig = StyleLintPlugin({
  files: ['src/**/*.{vue,scss}'],
  fix: true,
})

const autoImportConfig = AutoImport({
  resolvers: [ElementPlusResolver()],
})

const componentsConfig = Components({
  resolvers: [ElementPlusResolver()],
})

const svgIconsConfig = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
  symbolId: 'icon-[dir]-[name]',
  inject: 'body-first',
  customDomId: '__svg__icons__dom__',
})

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Chain Game',
      htmlAttrs: {
        class: 'dark',
      },
    },
  },
  css: ['assets/styles/index.scss'],
  modules: ['@element-plus/nuxt', '@nuxtjs/eslint-module', '@nuxtjs/i18n'],
  i18n: {
    // baseUrl: 'https://my-nuxt-app.com', // TODO: Добавить ссылку
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
      },
    ],
    defaultLocale: 'en',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "assets/styles/resources/variables/index.scss" as *;
            @use "assets/styles/resources/mixins/index.scss" as *;
          `,
        },
      },
    },
    plugins: [autoImportConfig, componentsConfig, styleLintConfig, svgIconsConfig],
  },
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '~': fileURLToPath(new URL('./src', import.meta.url)),
    '@@': fileURLToPath(new URL('./', import.meta.url)),
    '~~': fileURLToPath(new URL('./', import.meta.url)),
  },
  plugins: ['@/plugins/elementPlus', '@/plugins/screenVariables', '@/plugins/router'],
  dir: {
    plugins: './src/plugins',
    layouts: './src/layouts',
    pages: './src/pages',
  },
  components: {
    dirs: ['./src/components'],
  },
  typescript: {
    strict: true,
  },
})
