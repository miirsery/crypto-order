<template>
  <footer class="base-footer">
    <div class="base-footer__header">
      <div class="mb-24 d-f ai-c">
        <h2 class="mr-48">Connect to us in Telegram</h2>
        <link-button to="#" outline />
      </div>
      <div class="base-footer__header-text">Stay informed. News, Promo, Level updates etc.</div>
    </div>
    <div class="base-footer__main">
      <div class="d-f ai-c jc-sb py-32">
        <base-icon name="logo-2" width="178" height="30" />

        <div class="d-f ai-c">
          <p class="base-footer__text">How it works?</p>
          <p class="base-footer__text">
            <nuxt-link :to="{ path: '/support-page' }">Support</nuxt-link>
          </p>
        </div>

        <div class="d-f ai-c">
          <el-button class="base-footer__connect-button" type="primary">Connect Wallet</el-button>

          <select-language />
        </div>
      </div>

      <div class="divider" />

      <div class="d-f ai-c jc-sb py-48">
        <div>All rights reserved ©2023</div>

        <div class="d-f ai-c">
          <p class="base-footer__text mr-24">Support Telegram Bot</p>
          <p class="base-footer__text">Privace Policy</p>
        </div>
      </div>
    </div>
  </footer>
</template>

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

  &__connect-button {
    padding: 14px 30px;
    margin-right: 24px;

    @include responsive(xs) {
      margin-right: 14px;
    }
  }

  &__text {
    @include font(16px, 20px, 500);

    color: $color--gray-1;
  }
}
</style>
