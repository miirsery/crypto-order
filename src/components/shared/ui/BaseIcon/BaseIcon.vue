<template>
  <svg class="base-icon" :class="iconClass" :width="props.width" :height="props.height" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
type Props = {
  name: string
  prefix?: string
  width?: string | number
  height?: string | number
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  width: '24px',
  height: '24px',
  reverse: false,
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const iconClass = computed(() => [{ 'base-icon--reversed': props.reverse }, `s-icon--${props.name}`])
</script>

<style lang="scss" scoped>
.app-icon {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  transition: transform 0.2s;

  &--reversed {
    transform: rotate(180deg);
  }
}
</style>
