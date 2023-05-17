<template>
  <div class="how-works-burger-menu">
    <div>
      <div class="d-f fd-c ai-fs my-32 px-22">
        <nuxt-link class="how-works-burger-menu__text mb-24" :to="{ path: ROUTE_PATHS.HowWorks }">
          How it works?
        </nuxt-link>
        <nuxt-link class="how-works-burger-menu__text" :to="{ path: ROUTE_PATHS.SupportPage }">Support</nuxt-link>
      </div>

      <div class="divider" />

      <div class="d-f fd-c ai-fs px-22">
        <div class="how-works-burger-menu__text mb-24">All rights reserved ©2023</div>

        <div class="d-f fd-c ai-fs">
          <p class="how-works-burger-menu__text mb-24">Privace Policy</p>
          <p class="how-works-burger-menu__text">Support Telegram Bot</p>
        </div>
      </div>
    </div>

    <connect-telegram />
  </div>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from '~/components/shared/constants'
</script>

<style lang="scss" scoped>
.how-works-burger-menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__text {
    @include font(16px, 20px, 500);

    color: $color--gray-9;
  }
}

.divider {
  width: 100%;
  height: 1px;
  background: transparent radial-gradient(rgba($color--white, 1), rgba($color--white, 0));
  margin-bottom: 32px;
  opacity: 0.1;
}
</style>
