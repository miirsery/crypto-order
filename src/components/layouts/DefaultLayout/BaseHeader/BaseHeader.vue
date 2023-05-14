<template>
  <header class="base-header">
    <base-icon name="logo" width="140" height="20" />

    <div class="d-f ai-c">
      <el-button class="base-header__connect-button" type="primary">Connect Wallet</el-button>

      <el-select
        v-model="selectedLanguage"
        :suffix-icon="selectIcon"
        class="base-header__select-language"
        default-first-option
        popper-class="base-header__select-language-popper"
      >
        <el-option v-for="{ label, value } in languages" :key="value" :value="value">
          <span>{{ label }}</span>
        </el-option>
      </el-select>
    </div>
  </header>
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
.base-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;

  &__connect-button {
    padding: 14px 30px;
    margin-right: 24px;

    @include responsive(xs) {
      margin-right: 14px;
    }
  }

  &__select-language {
    width: 82px;
    height: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
