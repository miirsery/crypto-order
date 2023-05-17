<template>
  <el-select
    v-model="selectedLanguage"
    :class="selectedLanguageClasses"
    :popper-options="{
      modifiers: [{ name: 'offset', options: { offset: [-60, 12] } }],
    }"
    :suffix-icon="selectIcon"
    class="select-language"
    default-first-option
    placeholder="en"
    popper-class="select-language__popper"
    remote
    @blur="handleBlur"
    @change="handleBlur"
    @focus="handleFocus"
  >
    <el-option v-for="{ label, country, value } in languages" :key="value" :value="value">
      <span class="mr-4">{{ label }}</span>
      <span class="color-gray-8">({{ country }})</span>
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import { BaseIcon } from '~/components/shared/ui'

const languages = [
  {
    label: 'En',
    country: 'USA',
    value: 'En',
  },
  {
    label: 'Ru',
    country: 'Russia',
    value: 'Ru',
  },
  {
    label: 'Ch',
    country: 'China',
    value: 'Ch',
  },
]
const selectedLanguage = ref(languages[0].value)

const isFocus = ref(false)

const selectedLanguageClasses = computed(() => ({ focus: isFocus.value }))

const selectIcon = shallowRef({
  render() {
    return h(BaseIcon, { name: 'select-arrow', width: 8, height: 13 })
  },
})

const handleFocus = (): void => {
  isFocus.value = true
}

const handleBlur = (): void => {
  isFocus.value = false
}
</script>

<style lang="scss" scoped>
.select-language {
  width: 82px;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.focus {
    border: 1px solid $color--white;

    :deep(.base-icon) {
      color: $color--white;
    }

    :deep(.el-input) {
      .el-input {
        &__inner {
          color: $color--white;
        }
      }
    }
  }
}
</style>
