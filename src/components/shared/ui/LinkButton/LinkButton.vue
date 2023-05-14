<template>
  <el-button class="link-button" link :icon="linkIcon">
    <nuxt-link :to="{ path: props.pageName }">
      <slot />
    </nuxt-link>
  </el-button>
</template>

<script lang="ts" setup>
import { BaseIcon } from '~/components/shared/ui'

type Props = {
  outline?: boolean
  pageName: string
}

const props = defineProps<Props>()

const linkIcon = shallowRef({
  render() {
    return h(BaseIcon, {
      name: 'arrow-right',
      width: 24,
      height: 24,
    })
  },
})
</script>

<style lang="scss" scoped>
.link-button {
  :deep(.el-icon) {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
}
</style>
