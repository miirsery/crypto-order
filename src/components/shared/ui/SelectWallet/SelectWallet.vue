<template>
  <el-select
    ref="selectWalletInstance"
    v-model="selectedContent"
    :class="selectedLanguageClasses"
    :suffix-icon="selectIcon"
    class="select-wallet"
    default-first-option
    placeholder="en"
    popper-class="select-wallet__popper"
    remote
    @blur="handleBlur"
    @change="handleBlur"
    @focus="handleFocus"
  >
    <el-option v-for="{ label, value } in wallets" :key="value" :value="label" class="d-f ai-c">
      <base-icon name="fox" width="20" height="20" class="mr-8" />

      <div>{{ label }}</div>
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import { BaseIcon } from '~/components/shared/ui'
import { ElSelect } from 'element-plus'
import { render } from 'vue'

const wallets = [
  {
    label: '0xaF04….bcbb',
    value: '1',
  },
  {
    label: '1231xaF04….bcbb',
    value: '2',
  },
  {
    label: '0xaF03….qwbb',
    value: '3',
  },
]

const selectedContent = ref(wallets[0].label)
const selectWalletInstance = ref<typeof ElSelect>()

const isFocus = ref(false)
const selectedLanguageClasses = computed(() => ({ focus: isFocus.value }))

const selectIcon = shallowRef({
  render() {
    return h(BaseIcon, { name: 'arrow-down', width: 14, height: 7 })
  },
})

watch(
  () => selectWalletInstance.value,
  () => {
    nextTick(() => {
      const rootElement = selectWalletInstance.value?.$el
      const inputWrapper = rootElement.querySelector('.el-input__wrapper')
      const iconElement = h(BaseIcon, { name: 'fox', width: 20, height: 20, class: 'mr-8', style: 'width: 28px' })

      render(h(iconElement), inputWrapper)

      const iconMountedElement = rootElement.querySelector('.s-icon--fox')

      inputWrapper.prepend(iconMountedElement)
    })
  }
)

const handleFocus = (): void => {
  isFocus.value = true
}

const handleBlur = (): void => {
  isFocus.value = false
}
</script>

<style lang="scss" scoped>
.select-wallet {
  margin-right: 24px;

  :deep(.el-input) {
    .el-input {
      &__wrapper {
        width: 225px;
        border-radius: 35px;
        box-shadow: none !important;
        background-color: $color--background-2;
        padding: 12.5px 30px;

        @include responsive(xs) {
          padding: 8px 18px;
        }
      }

      &__inner {
        @include font(14px, 17px, 500);

        height: 17px;
        color: $color--white;
      }

      &__suffix {
        .el-icon {
          color: $color--white;
        }
      }
    }
  }

  @include responsive(xs) {
    width: 180px;
    margin-right: 8px;
  }
}
</style>
