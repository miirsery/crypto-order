<template>
  <el-select
    v-model="selectedLanguage"
    :suffix-icon="selectIcon"
    class="select-language"
    placeholder="en"
    popper-class="select-language__popper"
  >
    <el-option v-for="{ label, value } in languages" :key="value" :value="value">
      <span>{{ label }}</span>
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import { BaseIcon } from '~/components/shared/ui'

const languages = [
  {
    label: 'En (USA)',
    value: 'En',
  },
  {
    label: 'Ru (Russia)',
    value: 'Ru',
  },
  {
    label: 'ch (China)',
    value: 'Ch',
  },
]
const selectedLanguage = ref(languages[0].value)

const selectIcon = shallowRef({
  render() {
    return h(BaseIcon, { name: 'select-arrow', width: 8, height: 13 })
  },
})
</script>

<style lang="scss" scoped>
.select-language {
  width: 82px;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
