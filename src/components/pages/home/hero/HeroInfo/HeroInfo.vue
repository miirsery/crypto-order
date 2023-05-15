<template>
  <div class="hero-info">
    <h1 class="hero-info__title"><span>On-chain</span> social financial game </h1>
    <p class="hero-info__text">Join game once, get profit without limits </p>
    <link-button outline :to="'/'" class="hero-info__join-button">Join the game</link-button>
    <nuxt-link :to="'#'" class="hero-info__link">How it works?</nuxt-link>
  </div>
</template>

<script lang="ts" setup>
// import { ROUTE_NAMES } from '@/components/shared/constants'
</script>

<style lang="scss" scoped>
.hero-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 200px;

  &__title {
    @include font(70px, 84px, 700);

    width: 100%;
    max-width: 766px;
    letter-spacing: 0.01em;
    margin-bottom: 24px;

    span {
      color: $color--primary-secondary;
      margin-bottom: 24px;
    }
  }

  &__text {
    @include font(15px, 18px, 300);

    color: $color--gray-2;
    margin-bottom: 48px;
  }

  &__join-button {
    @include font(16px, 19px, 700);

    color: $color--background;
    background-color: $color--white;
    margin-bottom: 24px;
  }

  &__link {
    @include font(14px, 17px, 700);

    text-decoration: underline;
  }
}
</style>
