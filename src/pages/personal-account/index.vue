<template>
  <div class="personal-account">
    <h3 class="mb-48">Личный кабинет</h3>

    <player-position />

    <player-statistic />

    <player-payout />

    <player-referral />

    <player-calculator />

    <player-transactions class="personal-account__transactions">
      <template #title>
        <h2 class="personal-account__transactions-title">Your transactions</h2>
      </template>
      <template #tabs>
        <swiper class="personal-account__transactions-tabs" :slides-per-view="5" :breakpoints="tabsBreakpoints">
          <swiper-slide
            v-for="(tab, index) in tabs"
            :key="tab"
            :class="{ 'active-tab': index === activeTab }"
            class="personal-account__transactions-tab"
            @click="handleActiveTabChange(index)"
          >
            {{ tab }}
          </swiper-slide>
        </swiper>
      </template>
    </player-transactions>
  </div>
</template>

<script lang="ts" setup>
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'

const tabs = ['All', 'Game entry', 'Beneficial payment', 'Referral payout', 'Your referrals']
const tabsBreakpoints = {
  320: {
    spaceBetween: 8,
    slidesPerView: 2.3,
  },
  400: {
    spaceBetween: 8,
    slidesPerView: 2.8,
  },
  500: {
    spaceBetween: 8,
    slidesPerView: 3.8,
  },
  600: {
    spaceBetween: 8,
    slidesPerView: 4,
  },
  760: {
    spaceBetween: 8,
    slidesPerView: 4.8,
  },
  820: {
    spaceBetween: 16,
    slidesPerView: 5,
  },
}

const activeTab = ref(0)

const handleActiveTabChange = (tabIndex: number): void => {
  activeTab.value = tabIndex
}
</script>

<style lang="scss" scoped>
.personal-account {
  padding: 0 10px;
  margin-top: 80px;
  margin-bottom: 200px;

  &__transactions {
    &-tabs {
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

    &-tab {
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

    &-title {
      text-align: center;
      margin-bottom: 48px;

      @include responsive(xs) {
        @include font(28px, 33px, 700);

        margin-bottom: 24px;
      }
    }
  }

  @include responsive(xs) {
    margin-bottom: 60px;
  }
}
</style>
