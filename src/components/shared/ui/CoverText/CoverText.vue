<template>
  <div class="cover-text parallelogram" :style="{ transform: rotateAngle }">
    {{ props.text }}
  </div>
</template>

<script lang="ts" setup>
type Props = {
  text: string
  angle: string | number
}

const props = defineProps<Props>()

const rotateAngle = computed(() => `rotate(${props.angle}deg)`)
</script>

<style lang="scss" scoped>
.cover-text {
  @include font(15px, 18px);

  top: 0;
  position: absolute;
  color: $color--white;
  padding: 8px 20px;

  &.parallelogram {
    &::before {
      border-radius: 6px;
      background-color: $color--primary;
    }
  }
}
</style>
