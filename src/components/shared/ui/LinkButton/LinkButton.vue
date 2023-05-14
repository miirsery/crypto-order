<template>
  <el-button link :icon="linkIcon">
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
    })
  },
})
</script>
