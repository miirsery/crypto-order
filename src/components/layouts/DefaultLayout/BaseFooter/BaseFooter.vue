<template>
  <footer class="base-footer">
    <div class="base-footer__header">
      <div class="mb-24 d-f ai-c">
        <h2 class="mr-48">Connect to us <span class="color-primary">in Telegram</span></h2>
        <link-button to="#" outline />
      </div>
      <div class="base-footer__header-text">Stay informed. News, Promo, Level updates etc.</div>
    </div>

    <div class="base-footer__main">
      <div class="d-f ai-c jc-sb py-32">
        <base-icon name="logo-2" width="178" height="30" />

        <div class="d-f ai-c">
          <nuxt-link class="base-footer__text mr-48" :to="ROUTE_PATHS.HowWorks">How it works?</nuxt-link>
          <nuxt-link class="base-footer__text" :to="ROUTE_PATHS.SupportPage">Support</nuxt-link>
        </div>

        <div class="d-f ai-c">
          <el-button class="base-footer__connect-button" type="primary">Connect Wallet</el-button>

          <select-language />
        </div>
      </div>

      <div class="divider" />

      <div class="d-f ai-c jc-sb py-48">
        <div class="base-footer__text">All rights reserved ©2023</div>

        <div class="d-f ai-c">
          <p class="base-footer__text mr-24">Support Telegram Bot</p>
          <p class="base-footer__text">Privace Policy</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from '~/components/shared/constants'
</script>

<style lang="scss" scoped>
.base-footer {
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color--background;
    padding: 80px 0;

    &-text {
      @include font(16px, 22px, 300);

      letter-spacing: 0.01em;
      color: $color--gray-2;
    }

    .el-button {
      :deep(span) {
        display: none;
      }
    }
  }

  &__main {
    max-width: 1160px;
    margin: 0 auto;
  }

  &__connect-button {
    padding: 14px 30px;
    margin-right: 24px;

    @include responsive(xs) {
      margin-right: 14px;
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
  background: radial-gradient(rgba($color--white, 1), rgba($color--white, 0));
  background-color: none;
  opacity: 0.1;
}
</style>
