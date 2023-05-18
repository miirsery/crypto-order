<template>
  <div :class="baseTagClasses">
    {{ props.text }}
  </div>
</template>

<script lang="ts" setup>
type Props = {
  text: string
  mode: 'info' | 'primary'
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'info',
})

const baseTagClasses = computed(() => ['base-tag', `base-tag--${props.mode}`])
</script>

<style lang="scss" scoped>
.base-tag {
  @include font(18px, 21px, 700);

  border-radius: 25px;
  letter-spacing: 0.01em;
  white-space: nowrap;
  background-color: #514e5d;
  padding: 4px 14px;

  &--primary {
    background-color: $color--primary;
  }
}
</style>
