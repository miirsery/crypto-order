<template>
  <footer class="base-footer">
    <connect-telegram />

    <div class="base-footer__main">
      <div class="base-footer__main-content">
        <client-only>
          <base-icon :name="isMobile ? 'logo' : 'logo-2'" width="178" height="30" class="mt-xs-24 mb-xs-42" />
        </client-only>

        <div class="d-f ai-c fd-xs-c ai-xs-fs mb-xs-48">
          <nuxt-link class="base-footer__text mr-48 mr-xs-0 mb-xs-24 color-gray-1" :to="{ path: ROUTE_PATHS.HowWorks }">
            How it works?
          </nuxt-link>
          <nuxt-link :to="{ path: ROUTE_PATHS.SupportPage }" class="base-footer__text color-gray-1">
            Support
          </nuxt-link>
        </div>

        <div class="d-f ai-c mb-xs-22">
          <client-only>
            <select-wallet v-if="isWalletConnected" />
          </client-only>

          <el-button v-if="!isWalletConnected" class="base-footer__connect-button" type="primary">
            Connect Wallet
          </el-button>

          <client-only>
            <select-language />
          </client-only>
        </div>
      </div>

      <div class="divider" />

      <div class="base-footer__main-text-block">
        <div class="base-footer__text mb-xs-24">All rights reserved ©2023</div>

        <div class="base-footer__main-text-block__bottom">
          <p class="base-footer__text mr-24 mr-xs-0 mb-xs-24">Support Telegram Bot</p>
          <p class="base-footer__text">Private Policy</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from '~/components/shared/constants'
import { useScreen, useWallet } from '~/components/shared/lib/composables'

const { isMobile } = useScreen()

const { isWalletConnected } = useWallet()
</script>

<style lang="scss" scoped>
.base-footer {
  &__main {
    max-width: 1180px;
    margin: 0 auto;

    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 32px 10px;

      @include responsive(xs) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0 22px;
      }
    }

    &-text-block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 48px 10px;

      &__bottom {
        display: flex;
        align-items: center;

        @include responsive(xs) {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      @include responsive(xs) {
        flex-direction: column;
        align-items: flex-start;
        padding: 32px 22px;
      }
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

  &__text {
    @include font(16px, 20px, 500);

    color: $color--gray-9;
  }
}

.divider {
  width: 100%;
  height: 1px;
  background: transparent radial-gradient(rgba($color--white, 1), rgba($color--white, 0));
  opacity: 0.1;
}
</style>
