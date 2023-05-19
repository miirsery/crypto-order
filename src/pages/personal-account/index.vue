<template>
  <div class="personal-account">
    <h3 class="mb-48">Личный кабинет</h3>

    <div class="player-position">
      <div class="personal-account__title">Player Position</div>
      <div class="d-f ai-c jc-sb fd-xs-c">
        <div class="d-f ai-c w-xs-100 jc-xs-sb mb-xs-14">
          <div class="personal-account__text">My number</div>
          <base-tag text="#24" class="ml-24" />
        </div>
        <div class="d-f ai-c w-xs-100 jc-xs-sb mb-xs-14">
          <div class="personal-account__text">My start place</div>
          <base-tag text="#244" class="ml-24" />
        </div>
        <div class="d-f ai-c w-xs-100 jc-xs-sb">
          <div class="personal-account__text">My current place</div>
          <base-tag class="ml-24" mode="primary" text="#1 437" />
        </div>
      </div>
    </div>

    <div class="d-f ai-c jc-sb fd-xs-c mb-32 w-100 mb-xs-0 jc-xs-c">
      <div class="statistic">
        <div class="d-f ai-c fd-c fd-md-r ai-xs-fs">
          <div class="statistic__image-wrapper">
            <img src="@@/assets/images/account/statistic.png" />
          </div>
          <div class="w-100">
            <div class="personal-account__title">Payout statistics</div>

            <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-18">
              <div class="personal-account__text">My number</div>
              <base-tag text="24" class="ml-24" />
            </div>
            <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-18">
              <div class="personal-account__text">Paid in total</div>
              <base-tag text="$720" class="ml-24" />
            </div>
            <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-18">
              <div class="personal-account__text">Automatically reinvested</div>
              <base-tag text="$600" class="ml-24" />
            </div>
            <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-18">
              <div class="personal-account__text">Withdrawn to wallet</div>
              <base-tag class="ml-24" mode="primary" text="$120" />
            </div>
          </div>
        </div>
      </div>
      <div class="statistic">
        <div class="personal-account__title"> Current queue information </div>

        <div class="d-f ai-c w-xs-100 jc-sb mb-32 mb-xs-14">
          <div class="personal-account__text">Last player number</div>
          <base-tag text="#430" class="ml-24" />
        </div>
        <div class="d-f ai-c w-xs-100 jc-sb">
          <div class="personal-account__text">Place of the last player</div>
          <base-tag class="ml-24" mode="primary" text="#1 708" />
        </div>
      </div>
    </div>

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
            <el-slider v-model="payoutRange" class="mb-14" range :min="0" :max="500" />
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
              <el-slider v-model="payoutRange" range class="mr-14" :min="0" :max="500" />

              <!-- TODO: Добавить ввод только числен на мозилке-->
              <el-input
                v-if="!isMobile"
                v-model.number="paymentsAmount"
                class="personal-account__amount"
                type="number"
              />
            </div>
          </div>
          <div class="personal-account__subtitle">
            Не следует, однако забывать, что сложившаяся структура организации обеспечивает широкому кругу
            (специалистов) участие в формировании систем массового участия. Таким образом постоянное
            информационно-пропагандистское обеспечение нашей деятельности способствует подготовки/
          </div>
        </div>
      </div>
    </div>

    <div class="d-f ai-c jc-sb fd-xs-c mb-32 w-100 mb-xs-0 jc-xs-c">
      <div class="referral">
        <div class="d-f ai-fs ai-md-c fd-c fd-md-r ai-xs-fs">
          <div class="referral__image-wrapper">
            <img src="@@/assets/images/account/cube.png" />
          </div>
          <div class="w-100">
            <div class="personal-account__title">Your referral link</div>

            <div class="referral__text">
              Invite your friends to ChainGame at the link below, wait, until they get into the game and earn.
            </div>

            <div class="d-f ai-c">
              <el-input v-model="referralLink" class="referral__link" />
              <!--  TODO: Добавить tooltip после успешного копирования в буфер обмена -->
              <div class="referral__clipboard-icon" @click="handleReferralLinkCopy(referralLink)">
                <base-icon name="clipboard" class="icon-24" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="referral">
        <div class="personal-account__title"> Referral Information </div>

        <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-14">
          <div class="personal-account__text">Total involved</div>
          <base-tag text="24" class="ml-24" />
        </div>
        <div class="d-f ai-c w-xs-100 jc-sb mb-24 mb-xs-14">
          <div class="personal-account__text">Received payouts</div>
          <base-tag text="43" class="ml-24" />
        </div>
        <div class="d-f ai-c w-xs-100 jc-sb">
          <div class="personal-account__text">Total received</div>
          <base-tag class="ml-24" mode="primary" text="$301" />
        </div>
      </div>
    </div>

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

            <el-slider v-model="playersAmount" :max="200" />
          </div>

          <div class="calculator__inner">
            <div class="d-f ai-c jc-sb">
              <div class="personal-account__text color-white">Referrals</div>
              <el-input v-model="referralsAmount" />
            </div>

            <el-slider v-model="referralsAmount" :max="200" />
          </div>
        </div>

        <div class="calculator__text">
          Равным образом сложившаяся структура организации представляет собой интересный эксперимент проверки дальнейших
          направлений развития. Равным образом сложившаяся структура организации способствует подготовки и реализации
          форм.
        </div>
      </div>
    </div>

    <div class="transactions">
      <h2 class="mb-48 ta-c">Your transactions</h2>
      <!--TODO: Добавить padding 10px на страницы-->
      <swiper
        class="transactions__tabs"
        :slides-per-view="5"
        :breakpoints="{
          320: {
            spaceBetween: 8,
            slidesPerView: 2.3,
          },
          820: {
            spaceBetween: 16,
            slidesPerView: 5,
          },
        }"
      >
        <swiper-slide
          v-for="(tab, index) in tabs"
          :key="tab"
          class="transactions__tab"
          :class="{ 'active-tab': index === activeTab }"
          @click="handleActiveTabChange(index)"
        >
          {{ tab }}
        </swiper-slide>
      </swiper>

      <transactions-table v-if="!isMobileOrTablet" :transactions="transactionsData" class="mb-48" />

      <div v-else class="transactions__cards">
        <transaction-card v-for="transaction in transactionsData" :key="transaction.id" :transaction="transaction" />
      </div>

      <el-pagination
        background
        :page-size="7"
        :next-icon="nextIcon"
        :prev-icon="prevIcon"
        :pager-count="2"
        layout="prev, pager, next"
        :total="63"
        class="jc-c"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { useScreen } from '~/components/shared/lib/composables'
import { transactionsData } from '~/components/shared/constants'
import { BaseIcon } from '~/components/shared/ui'

import 'swiper/css'

const tabs = ['All', 'Game entry', 'Beneficial payment', 'Referral payout', 'Your referrals']

const payoutRange = ref<[number, number]>([361, 463])
const paymentsAmount = ref(1_000)
const playersAmount = ref(30)
const referralsAmount = ref(40)
const activeTab = ref(0)

const referralLink = ref('www.xxx.yy?ref=0xXXX…XXX')

const { isMobile, isMobileOrTablet } = useScreen()
const { copy: handleReferralLinkCopy } = useClipboard({ source: referralLink })

const nextIcon = shallowRef({
  render() {
    return h(BaseIcon, { name: 'arrow-right', class: 'icon-24' })
  },
})

const prevIcon = shallowRef({
  render() {
    return h(BaseIcon, { name: 'arrow-left', class: 'icon-24' })
  },
})

const handleActiveTabChange = (tabIndex: number): void => {
  activeTab.value = tabIndex
}
</script>

<style lang="scss" scoped>
.personal-account {
  margin-top: 80px;
  margin-bottom: 200px;

  &__subtitle {
    @include font(14px, 17px, 400);

    letter-spacing: 0.01em;
    text-align: center;
    color: $color--gray-10;
  }

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

  &__amount {
    width: 97px;
    height: 40px;
  }

  @include responsive(xs) {
    margin-bottom: 60px;
  }
}

.player-position {
  border: 1px solid rgba($color--white, 0.2);
  border-radius: 15px;
  background-color: $color--background;
  padding: 48px;
  margin-bottom: 32px;
  backdrop-filter: blur(4.5px);

  .base-tag {
    padding: 5px 14px;
  }

  @include responsive(xs) {
    padding: 32px 24px;
    margin-bottom: 14px;
  }
}

.statistic {
  height: 351px;
  border: 1px solid rgba($color--white, 0.2);
  border-radius: 15px;
  background: linear-gradient(266.02deg, #1f2443 -14.01%, $color--background-2 77.54%);
  padding: 32px 48px;
  backdrop-filter: blur(4.5px);

  &__image {
    &-wrapper {
      width: 100%;
      height: 100%;
      max-width: 230px;
      max-height: 287px;
      margin-right: 48px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @include responsive(md, $breakpoints-only-max) {
        height: 237px;
        max-width: 180px;
        margin-right: 24px;
        margin-bottom: 24px;
      }
    }
  }

  &:first-child {
    height: auto;
    margin-right: 32px;

    @include responsive(md, $breakpoints-only-max) {
      margin-right: 16px;
    }

    @include responsive(xs) {
      margin-right: 0;
      margin-bottom: 14px;
    }
  }

  &:last-child {
    padding: 48px;

    @include responsive(md, $breakpoints-only-max) {
      height: auto;
      padding: 32px 24px;
    }
  }

  @include responsive(md, $breakpoints-only-max) {
    width: 100%;
    padding: 32px 24px;
  }

  @include responsive(xs) {
    margin-bottom: 14px;
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

.referral {
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: 15px;
  background: linear-gradient(257.79deg, #2d1e4d -11.85%, #191c2e 58.89%);
  backdrop-filter: blur(4.5px);

  .personal-account {
    &__title {
      margin-bottom: 24px;
    }
  }

  &__image-wrapper {
    margin-right: 48px;

    @include responsive(sm, $breakpoints-only-max) {
      margin-right: 0;
      margin-bottom: 32px;
    }
  }

  &__text {
    @include font(16px, 22px, 400);

    letter-spacing: 0.01em;
    color: $color--gray-10;
    margin-bottom: 48px;
  }

  &__link {
    :deep(.el-input__wrapper) {
      height: 51px;
    }
  }

  &__clipboard {
    &-icon {
      width: 82px;
      height: 51px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: $color--primary;
      cursor: pointer;
      margin-left: 14px;
    }
  }

  &:first-child {
    height: 296px;
    padding: 32px 48px;
    margin-right: 32px;

    @include responsive(md, $breakpoints-only-max) {
      height: auto;
    }

    @include responsive(xs) {
      margin-right: 0;
    }
  }

  &:last-child {
    height: 296px;
    padding: 48px;
  }

  @include responsive(xs) {
    width: 100%;
    margin-bottom: 14px;
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

.transactions {
  &__tabs {
    width: 100%;
    max-width: 834px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 10px;
    margin-bottom: 48px;

    :deep(.swiper-wrapper) {
      justify-content: space-between;
    }
  }

  &__tab {
    @include font(14px, 17px, 500);

    width: fit-content !important;
    border: 1px solid $color--gray-7;
    border-radius: 35px;
    white-space: nowrap;
    text-align: center;
    transition: background-color 0.15s ease-in-out;
    padding: 14px 30px;

    &:last-child {
      margin: 0 !important;
    }

    &.active-tab {
      background-color: $color--primary;
    }
  }

  h2 {
    @include responsive(xs) {
      @include font(28px, 33px, 700);

      margin-bottom: 24px !important;
    }
  }

  &__cards {
    margin-bottom: 24px;
  }
}

.transaction-card {
  &:not(:last-child) {
    margin-bottom: 14px;
  }
}
</style>
