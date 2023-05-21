<template>
  <div class="hero-stats parallelogram">
    <div class="hero-stats__stat">
      <h3>2 910</h3>
      <div class="hero-stats__stat-subtitle">players in game</div>
    </div>

    <div v-if="!isMobile" class="divider" />

    <div class="hero-stats__stat">
      <h3>486</h3>
      <div class="hero-stats__stat-subtitle">transactions</div>
    </div>

    <div v-if="!isMobile" class="divider" />

    <div class="hero-stats__stat">
      <h3>21 578</h3>
      <div class="hero-stats__stat-subtitle">turnover</div>
    </div>

    <div v-if="!isMobile" class="divider" />

    <div class="hero-stats__stat">
      <h3>$9 118</h3>
      <div class="hero-stats__stat-subtitle">referrer payments</div>
    </div>

    <div class="cross" />
  </div>
</template>

<script lang="ts" setup>
import { useScreen } from '~/components/shared/lib/composables'

const { isMobile } = useScreen()
</script>

<style lang="scss" scoped>
.hero-stats {
  width: 100%;
  max-width: 1150px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px;
  margin: 0 auto;

  &__stat {
    display: flex;
    flex: 1 1 170px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    &-subtitle {
      @include font(15px, 18px, 300);

      @include responsive(xs) {
        @include font(14px, 17px, 300);
      }
    }

    h3 {
      @include responsive(xs) {
        @include font(30px, 36px, 500);
      }
    }

    @include responsive(xs-small) {
      flex: 1 1 150px;
    }

    @include responsive(xs) {
      padding: 24px 0;
    }
  }

  &.parallelogram {
    &::before {
      border: 1px solid rgb(255 255 255 / 0.1);
      border-radius: 10px;
      background: linear-gradient(
        96.51deg,
        rgb(68 70 92 / 0.31) 10.24%,
        rgb(78 80 118 / 0.31) 53.31%,
        rgb(91 94 153 / 0.31) 89.76%
      );
      backdrop-filter: blur(4.5px);

      @include responsive(xs) {
        transform: skew(-2deg);
      }
    }
  }

  @include responsive(md, $breakpoints-only-max) {
    padding: 20px 40px;
  }

  @include responsive(xs) {
    padding: 0;
  }
}

.divider {
  width: 1px;
  height: 102px;
  background-color: rgba($color--white, 0.1);
}

.cross {
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  inset: 0;

  &::before {
    content: '';
    top: 50%;
    left: 50%;
    width: 1px;
    height: 160px;
    position: absolute;
    background-color: rgba($color--white, 0.1);
    transform: translate(-50%, -50%);
  }

  &::after {
    content: '';
    top: 50%;
    left: 50%;
    width: 308px;
    height: 1px;
    position: absolute;
    background-color: rgba($color--white, 0.1);
    transform: translate(-50%, -50%);
  }

  @media screen and (width <= 529px) {
    display: block;
  }
}
</style>
