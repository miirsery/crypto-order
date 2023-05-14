<template>
  <el-config-provider :locale="locale">
    <nuxt-layout />
  </el-config-provider>
</template>

<script lang="ts" setup>
import chLang from 'element-plus/dist/locale/zh-cn.mjs'
import ruLang from 'element-plus/dist/locale/ru.mjs'
import enLang from 'element-plus/dist/locale/en.mjs'
import { Language } from 'element-plus/lib/locale'

const locales: Record<string, Language> = {
  ru: ruLang,
  ch: chLang,
  enLang,
}

const locale = ref<Language>(locales.ru)
</script>
