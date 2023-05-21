<template>
  <div class="d-f ai-c jc-sb fd-xs-c mb-32 w-100 mb-xs-0 jc-xs-c">
    <div class="payout">
      <div class="personal-account__title"> Next payout </div>

      <div class="d-f ai-c w-xs-100 jc-sb mb-24">
        <div class="personal-account__text">From player</div>
        <base-tag text="#482" class="ml-24" />
      </div>
      <div class="d-f ai-c w-xs-100 jc-sb">
        <div class="personal-account__text">Players before next payout</div>
        <base-tag class="ml-24" mode="primary" text="52" />
      </div>

      <div class="mt-32">
        <div class="payout__slider">
          <client-only>
            <el-slider v-model="payoutRange" class="mb-14" range :min="0" :max="500" />
          </client-only>
        </div>
        <div class="personal-account__subtitle"> Point to the number and get detailed information. </div>
      </div>
    </div>

    <div class="payout">
      <div class="personal-account__title"> Forecast my payouts </div>

      <div class="mt-32">
        <div class="payout__slider">
          <div class="d-f ai-c js-sb mb-14 fd-c fd-md-r">
            <div class="personal-account__text color-white mb-18 mb-md-0">Payments for players</div>
            <div class="d-f ai-c w-100 jc-xs-sb">
              <div class="d-f ai-c jc-sb-sb w-100 jc-xs-sb">
                <el-input
                  v-if="isMobile"
                  v-model.number="paymentsAmount"
                  class="personal-account__amount"
                  type="number"
                />
                <div class="payout__will-paid">
                  <div class="personal-account__text">Will be paid:</div>
                  <base-tag class="ml-12 ml-md-28" mode="primary" text="$180" />
                </div>
              </div>
            </div>
          </div>
          <div class="d-f ai-c">
            <client-only>
              <el-slider v-model="payoutRange" range class="mr-14" :min="0" :max="500" />
            </client-only>

            <!-- TODO: Добавить ввод только числен на мозилке-->
            <el-input v-if="!isMobile" v-model.number="paymentsAmount" class="personal-account__amount" type="number" />
          </div>
        </div>
        <div class="personal-account__subtitle">
          Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу (специалистов)
          участие в формировании систем массового участия. Таким образом постоянное информационно-пропагандистское
          обеспечение нашей деятельности способствует подготовки
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScreen } from '~/components/shared/lib/composables'

const { isMobile } = useScreen()

const payoutRange = ref<[number, number]>([361, 463])
const paymentsAmount = ref(1_000)
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

  &__subtitle {
    @include font(14px, 17px, 400);

    letter-spacing: 0.01em;
    text-align: center;
    color: $color--gray-10;
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

.payout {
  width: 100%;
  height: 406px;
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: 15px;
  background: linear-gradient(0deg, $color--background-2, $color--background-2),
    linear-gradient(266.02deg, #281f43 -14.01%, $color--background-2 77.54%);
  padding: 48px;
  backdrop-filter: blur(4.5px);

  &__will-paid {
    width: 100%;
    display: flex;
    align-items: center;

    @include responsive(sm, $breakpoints-only-max) {
      width: 170px;
    }
  }

  &__slider {
    border-radius: 10px;
    background-color: $color--background-3;
    padding: 24px 42px;
    margin-bottom: 14px;
  }

  .personal-account__text {
    width: 100%;
  }

  &:first-child {
    max-width: 554px;
    margin-right: 16px;

    @include responsive(md, $breakpoints-only-max) {
      width: 100%;
      max-width: 100%;
    }

    @include responsive(xs) {
      margin-right: 0;
    }
  }

  &:last-child {
    max-width: 574px;

    .payout {
      &__slider {
        padding: 30px 24px;
      }
    }

    @include responsive(md, $breakpoints-only-max) {
      width: 100%;
      max-width: 100%;
    }
  }

  @include responsive(md, $breakpoints-only-max) {
    width: 100%;
    height: 402px;
    padding: 32px 24px;
  }

  @include responsive(xs) {
    height: auto;
    margin-bottom: 14px;
  }
}
</style>
