<template>
  <header class="base-header">
    <div class="d-f ai-c jc-sb fd-xs-c ai-xs-fs">
      <nuxt-link :to="{ path: ROUTE_PATHS.HomePage }" class="mb-xs-18">
        <base-icon name="logo" width="186" height="34" />
      </nuxt-link>

      <div class="d-f ai-c">
        <el-button class="base-header__connect-button" type="primary">Connect Wallet</el-button>

        <select-language />
      </div>
    </div>

    <div v-if="screen.isMobile" class="burger">
      <input id="menuToggle" v-model="isBurgerActive" class="burger__toggle" type="checkbox" />
      <label class="burger__menu-btn" for="menuToggle">
        <span />
      </label>
    </div>
  </header>

  <client-only>
    <el-drawer v-model="isBurgerActive" class="base-header__drawer" :show-close="false">
      <how-works-burger-menu />
    </el-drawer>
  </client-only>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from '~/components/shared/constants'
import { useScreen } from '~/components/shared/lib/composables/useScreen'

const screen = useScreen()

const isBurgerActive = ref(false)
</script>

<style lang="scss" scoped>
.base-header {
  padding: 32px 0;

  &__connect-button {
    padding: 14px 30px;
    margin-right: 24px;

    @include responsive(xs) {
      width: 220px;
      margin-right: 14px;
    }
  }

  &__select-language {
    width: 82px;
    height: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @include responsive(xs) {
    display: flex;
    justify-content: space-between;
  }
}

.burger {
  &__toggle {
    display: none;
    opacity: 0;

    &:checked {
      ~ .burger__menu-btn {
        > span {
          transform: rotate(45deg);

          &::before {
            top: 0;
            transform: rotate(0);
          }

          &::after {
            top: 0;
            transform: rotate(90deg);
          }
        }
      }
    }
  }

  &__menu-btn {
    top: 20px;
    right: 20px;
    width: 22px;
    height: 22px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 20019;

    > span,
    > span::before,
    > span::after {
      width: 100%;
      height: 2px;
      position: absolute;
      display: block;
      background-color: $color--white;
      transition-duration: 0.25s;
    }

    > span {
      &::before {
        content: '';
        top: -8px;
      }

      &::after {
        content: '';
        top: 8px;
      }
    }
  }
}
</style>
