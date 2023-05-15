<template>
  <el-button :class="linkButtonsClasses" link :icon="linkIcon">
    <nuxt-link :to="{ path: props.to }">
      <slot v-if="slots.default" />
    </nuxt-link>
  </el-button>
</template>

<script lang="ts" setup>
import { BaseIcon } from '~/components/shared/ui'

type Props = {
  outline?: boolean
  underline?: boolean
  to: string
}

const props = withDefaults(defineProps<Props>(), {
  outline: false,
  underline: false,
})

const slots = useSlots()

const linkIcon = shallowRef({
  render() {
    return h(BaseIcon, {
      name: 'arrow-right',
      width: 24,
      height: 24,
    })
  },
})

const linkButtonsClasses = computed(() => ['link-button', { outlined: props.outline, underline: props.underline }])
</script>

<style lang="scss" scoped>
.link-button {
  @include font(16px, 20px, 700);

  flex-direction: row-reverse;
  color: $color--white;

  :deep(.el-icon) {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
}
</style>
