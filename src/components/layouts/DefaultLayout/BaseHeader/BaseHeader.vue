<template>
  <header class="base-header">
    <nuxt-link :to="{ path: ROUTE_PATHS.HomePage }">
      <base-icon name="logo" width="186" height="34" />
    </nuxt-link>

    <div class="d-f ai-c">
      <el-button class="base-header__connect-button" type="primary">Connect Wallet</el-button>

      <select-language />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ROUTE_PATHS } from '~/components/shared/constants'
</script>

<style lang="scss" scoped>
.base-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;

  &__connect-button {
    padding: 14px 30px;
    margin-right: 24px;

    @include responsive(xs) {
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
}
</style>
