<template>
  <div class="how-works-sidebar-mobile">
    <h4 class="mb-14">Table of contents</h4>

    <el-select
      v-model="selectedContent"
      :class="selectedLanguageClasses"
      :suffix-icon="selectIcon"
      class="select-content"
      default-first-option
      placeholder="en"
      popper-class="select-content__popper"
      remote
      @blur="handleBlur"
      @change="handleBlur"
      @focus="handleFocus"
    >
      <el-option v-for="{ label, value, hash } in menuList" :key="value" :value="label">
        <nuxt-link :to="{ path: ROUTE_PATHS.HowWorks, hash }">
          {{ label }}
        </nuxt-link>
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { BaseIcon } from '~/components/shared/ui'
import { menuList } from '~/components/pages/HowWorks/HowWorksSidebar/HowWorksSidebar.constant'
import { ROUTE_PATHS } from '~/components/shared/constants'

const selectedContent = ref(menuList[0].label)

const isFocus = ref(false)

const selectedLanguageClasses = computed(() => ({ focus: isFocus.value }))

const selectIcon = shallowRef({
  render() {
    return h(BaseIcon, { name: 'arrow-down', width: 14, height: 7 })
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
.how-works-sidebar-mobile {
  width: 100%;
}

.select-content {
  width: 100%;
  max-width: 337px;
  display: flex;
  align-self: center;

  :deep(.select-trigger) {
    width: 100%;
  }
}
</style>
