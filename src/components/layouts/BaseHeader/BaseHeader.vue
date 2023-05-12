<template>
  <header class="base-header">
    <base-icon name="logo" width="140" height="20" />

    <div class="d-f ai-c">
      <el-button class="mr-24 mr-xs-14" type="primary">Connect Wallet</el-button>

      <el-select v-model="selectedLanguage" class="m-2" placeholder="en">
        <el-option v-for="{ label, value } in languages" :key="value" :label="label" :value="value" />
      </el-select>
    </div>
  </header>
</template>

<script lang="ts" setup>
const selectedLanguage = ref('')

const languages = [
  {
    label: 'En (USA)',
    value: 'en',
  },
  {
    label: 'Ru (Russia)',
    value: 'ru',
  },
  {
    label: 'ch (China)',
    value: 'ch',
  },
]
</script>
