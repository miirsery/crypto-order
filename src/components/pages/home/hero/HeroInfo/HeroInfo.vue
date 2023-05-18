<template>
  <div class="hero-info">
    <h1 class="hero-info__title">
      <span>On-chain</span>
      social financial game

      <cover-text text="Take a profit in" angle="10" />
    </h1>

    <base-icon name="line-1" width="140" height="38" />
    <base-icon name="line-2" width="133" height="96" />

    <div class="bnb-balance">
      <div class="bnb-balance__title"> BNB Balance </div>
      <div class="bnb-balance__balance">
        <div class="bnb-balance__amount"> 201.3492 </div>
        <base-icon name="binance-logo" width="20" height="20" />
        <div class="bnb-balance__percent">+10%</div>
      </div>

      <div class="shadow" />
    </div>

    <div class="bnb-profit">
      <div class="bnb-profit__title"> BNB profit </div>
      <div class="d-f ai-c mb-8">
        <div class="bnb-profit__amount"> +0.3492 </div>
        <base-icon name="binance-logo" width="20" height="20" />
      </div>
      <div class="d-f ai-c mb-8">
        <div class="bnb-profit__amount"> +0.3492 </div>
        <base-icon name="binance-logo" width="20" height="20" />
      </div>
      <div class="d-f ai-c mb-8">
        <div class="bnb-profit__amount"> +0.3492 </div>
        <base-icon name="binance-logo" width="20" height="20" />
      </div>
      <div class="d-f ai-c mb-8">
        <div class="bnb-profit__amount"> +0.3492 </div>
        <base-icon name="binance-logo" width="20" height="20" />
      </div>
      <div class="d-f ai-c">
        <div class="bnb-profit__amount"> +0.3492 </div>
        <base-icon name="binance-logo" width="20" height="20" />
      </div>

      <div class="shadow" />
    </div>

    <p class="hero-info__text">Join game once, get profit without limits </p>
    <link-button outline :to="'/'" class="hero-info__join-button">Join the game</link-button>
    <nuxt-link :to="{ path: ROUTE_PATHS.HowWorks }" class="hero-info__link">How it works?</nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import { ROUTE_PATHS } from '~/components/shared/constants'
</script>

<style lang="scss" scoped>
.hero-info {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 200px;

  .s-icon {
    &--line-1 {
      top: 30px;
      left: 172px;
      position: absolute;
    }

    &--line-2 {
      top: -20px;
      right: 130px;
      position: absolute;
    }
  }

  &__title {
    @include font(70px, 84px, 700);

    width: 100%;
    max-width: 766px;
    position: relative;
    letter-spacing: 0.01em;
    margin-bottom: 24px;

    .cover-text {
      top: -5px;
      right: 65px;
    }

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

.bnb-balance {
  top: 80px;
  left: 0;
  position: absolute;
  border: 1px solid rgba($color--white, 0.2);
  border-radius: 10px;
  background-color: $color--background;
  transform: rotate(1.9deg);
  padding: 17px 20px;

  .shadow {
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 33px;
    position: absolute;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(180deg, rgb(25 28 46 / 0) 0%, #191c2e 100%);
    transform: rotate(1.9deg);
  }

  &__balance {
    display: flex;
    align-items: center;
  }

  &__percent {
    @include font(16px, 19px, 700);

    color: $color--primary;
    margin-left: 23px;
  }

  &__amount {
    @include font(22px, 27px, 700);

    margin-right: 9px;
  }

  &__title {
    @include font(13px, 16px, 600);

    text-align: left;
    color: $color--gray-2;
    margin-bottom: 9px;
  }
}

.bnb-profit {
  top: 110px;
  right: 0;
  position: absolute;
  border: 1px solid rgba($color--white, 0.2);
  border-radius: 10px;
  background-color: $color--background;
  transform: rotate(-3.01deg);
  padding: 19px 24px;

  .shadow {
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 74px;
    position: absolute;
    border-radius: 0 0 10px 10px;
    background: linear-gradient(180deg, rgb(25 28 46 / 0) 0%, #191c2e 100%);
    transform: rotate(1.9deg);
  }

  &__title {
    @include font(16px, 20px, 700);

    margin-bottom: 9px;
  }

  &__amount {
    @include font(14px, 17px, 500);

    margin-right: 9px;
  }
}
</style>
