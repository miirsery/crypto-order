<template>
  <footer class="base-footer">
    <connect-telegram />

    <div class="base-footer__main">
      <div class="base-footer__main-content">
        <base-icon :name="screen.isMobile ? 'logo' : 'logo-2'" width="178" height="30" class="mt-xs-24 mb-xs-42" />

        <div class="d-f ai-c fd-xs-c ai-xs-fs mb-xs-48">
          <nuxt-link class="base-footer__text mr-48 mr-xs-0 mb-xs-24" :to="{ path: ROUTE_PATHS.HowWorks }">
            How it works?
          </nuxt-link>
          <nuxt-link class="base-footer__text" :to="{ path: ROUTE_PATHS.SupportPage }">Support</nuxt-link>
        </div>

        <div class="d-f ai-c mb-xs-22">
          <el-button class="base-footer__connect-button" type="primary">Connect Wallet</el-button>

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
import { useScreen } from '~/components/shared/lib/composables/useScreen'

const screen = useScreen()
</script>

<style lang="scss" scoped>
.base-footer {
  &__main {
    max-width: 1160px;
    margin: 0 auto;

    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 32px 0;

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
      padding: 48px 0;

      &-bottom {
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
        padding: 22px 0;
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
