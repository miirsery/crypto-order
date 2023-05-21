<template>
  <div :class="coverTextClasses" :style="{ transform: rotateAngle }">
    {{ props.text }}
  </div>
</template>

<script lang="ts" setup>
type Props = {
  text: string
  angle: string | number
  type?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
})

const rotateAngle = computed(() => `rotate(${props.angle}deg)`)
const coverTextClasses = computed(() => ['cover-text', 'parallelogram', `cover-text--${props.type}`])
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

    &.cover-text--secondary {
      color: $color--background;

      &::before {
        background-color: #f3ba2f;
      }
    }
  }

  @include responsive(xs) {
    @include font(13px, 16px);

    padding: 4px 13px;
  }
}
</style>
