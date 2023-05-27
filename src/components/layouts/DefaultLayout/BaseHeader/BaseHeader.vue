<template>
  <div class="base-header">
    <header class="base-header__wrapper">
      <div class="d-f ai-c jc-sb fd-xs-c ai-xs-fs">
        <nuxt-link :to="{ path: ROUTE_PATHS.HomePage }" class="mb-xs-18">
          <base-icon name="logo" width="186" height="34" />
        </nuxt-link>

        <div class="d-f ai-c">
          <client-only>
            <select-wallet v-if="isWalletConnected" />
          </client-only>

          <el-button v-if="!isWalletConnected" class="base-header__connect-button" type="primary">
            Connect Wallet
          </el-button>

          <client-only>
            <select-language />
          </client-only>
        </div>
      </div>

      <client-only>
        <div v-if="isMobile" class="burger">
          <input id="menuToggle" v-model="isBurgerActive" class="burger__toggle" type="checkbox" />
          <label class="burger__menu-btn" for="menuToggle">
            <span />
          </label>
        </div>
      </client-only>
    </header>

    <client-only>
      <el-drawer v-model="isBurgerActive" class="base-header__drawer" :show-close="false">
        <how-works-burger-menu @close="handleDrawerClose" />
      </el-drawer>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from '~/components/shared/constants'
import { useScreen, useWallet } from '~/components/shared/lib/composables'
import { BaseIcon } from '~/components/shared/ui'

const { isMobile } = useScreen()
const { isWalletConnected } = useWallet()

const isBurgerActive = ref(false)

watch(
  () => isBurgerActive.value,
  () => {
    if (isBurgerActive.value && document) {
      document.body.style.overflow = 'hidden'

      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'

      document.documentElement.style.overflow = 'auto'
    }
  }
)

const handleDrawerClose = (): void => {
  isBurgerActive.value = false
}
</script>

<style lang="scss" scoped>
.base-header {
  padding: 0 10px;

  &__wrapper {
    position: relative;
    padding: 32px 0;

    @include responsive(md, $breakpoints-only-max) {
      padding: 24px 22px;
    }

    @include responsive(xs) {
      display: flex;
      justify-content: space-between;
      padding: 20px 12px;
    }
  }

  &__connect-button {
    padding: 14px 30px;
    margin-right: 24px;

    @include responsive(xs) {
      width: 220px;
      margin-right: 14px;
    }

    @include responsive(xs-small) {
      width: 120px;
      margin-right: 7px;
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

  :deep(.el-drawer) {
    .el-drawer {
      &__header {
        display: none;
      }

      &__body {
        padding: 0;
      }
    }
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
    top: 6px;
    right: 26px;
    width: 22px;
    height: 22px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 10;

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
