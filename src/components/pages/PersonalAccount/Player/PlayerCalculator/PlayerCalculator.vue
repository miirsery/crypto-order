<template>
  <div class="d-f ai-c jc-sb fd-xs-c mb-200 w-100 mb-xs-60 jc-xs-c">
    <div class="calculator">
      <div class="d-f ai-c jc-sb mb-32 fd-xs-c ai-xs-fs mb-xs-18">
        <div class="personal-account__title">Referral calculator</div>

        <div class="d-f ai-c">
          <div class="personal-account__text"> Get paid: </div>
          <base-tag mode="primary" :text="'$1 900'" class="ml-12" />
        </div>
      </div>

      <div class="d-f ai-c jc-sb fd-xs-c">
        <div class="calculator__inner">
          <div class="d-f ai-c jc-sb">
            <div class="personal-account__text color-white">Amount of players</div>
            <el-input v-model="playersAmount" />
          </div>

          <client-only>
            <el-slider v-model="playersAmount" :max="200" />
          </client-only>
        </div>

        <div class="calculator__inner">
          <div class="d-f ai-c jc-sb">
            <div class="personal-account__text color-white">Referrals</div>
            <el-input v-model="referralsAmount" />
          </div>

          <client-only>
            <el-slider v-model="referralsAmount" :max="200" />
          </client-only>
        </div>
      </div>

      <div class="calculator__text">
        Равным образом сложившаяся структура организации представляет собой интересный эксперимент проверки дальнейших
        направлений развития. Равным образом сложившаяся структура организации способствует подготовки и реализации
        форм.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const playersAmount = ref(30)
const referralsAmount = ref(40)
</script>

<style lang="scss" scoped>
.personal-account {
  &__title {
    @include font(26px, 31px, 700);

    letter-spacing: 0.01em;
    margin-bottom: 32px;

    @include responsive(xs) {
      margin-bottom: 24px;
    }
  }

  &__text {
    @include font(16px, 19px, 500);

    letter-spacing: 0.01em;
    white-space: nowrap;
    color: $color--gray-10;

    @include responsive(xs) {
      @include font(12px, 15px);
    }
  }
}

.calculator {
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: 15px;
  background: linear-gradient(0deg, #191c2e, #191c2e), linear-gradient(266.02deg, #281f43 -14.01%, #191c2e 77.54%);
  padding: 48px 48px 42px;
  backdrop-filter: blur(4.5px);

  .personal-account {
    &__title {
      margin-bottom: 0;

      @include responsive(xs) {
        margin-bottom: 18px;
      }
    }
  }

  &__inner {
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: $color--background-3;
    padding: 24px;

    &:first-child {
      margin-right: 24px;

      @include responsive(xs) {
        margin-right: 0;
        margin-bottom: 24px;
      }
    }

    @include responsive(xs) {
      width: 100%;
      max-width: 100%;
    }
  }

  .el-input {
    width: 97px;
    height: 40px;
  }

  &__text {
    @include font(16px, 22px);

    letter-spacing: 0.01em;
    text-align: center;
    color: $color--gray-10;
    margin-top: 24px;

    @include responsive(xs) {
      @include font(14px, 20px);
    }
  }

  &__image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 230px;
    max-height: 232px;
  }
}
</style>
