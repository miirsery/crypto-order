<template>
  <div class="transactions">
    <h2 class="mb-48 ta-c">Your transactions</h2>
    <swiper class="transactions__tabs" :slides-per-view="5" :breakpoints="tabsBreakpoints">
      <swiper-slide
        v-for="(tab, index) in tabs"
        :key="tab"
        :class="{ 'active-tab': index === activeTab }"
        class="transactions__tab"
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
</template>

<script lang="ts" setup>
import { useScreen } from '~/components/shared/lib/composables'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { transactionsData } from '~/components/shared/constants'
import { BaseIcon } from '~/components/shared/ui'
import 'swiper/css'

const tabs = ['All', 'Game entry', 'Beneficial payment', 'Referral payout', 'Your referrals']
const tabsBreakpoints = {
  400: {
    spaceBetween: 8,
    slidesPerView: 2.3,
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

const { isMobileOrTablet } = useScreen()

const activeTab = ref(0)

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

<style lang="scss" scoped src="@/pages/personal-account/PersonalAccount.scss">
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
