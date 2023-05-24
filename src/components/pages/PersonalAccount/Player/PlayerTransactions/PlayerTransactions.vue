<template>
  <div class="transactions">
    <slot v-if="$slots.title" name="title" />
    <slot v-if="$slots.tabs" name="tabs" />

    <client-only>
      <transactions-table v-if="!isMobileOrTablet" :transactions="transactionsData" class="mb-48" />

      <div v-else class="transactions__cards">
        <transaction-card v-for="transaction in transactionsData" :key="transaction.id" :transaction="transaction" />
      </div>
    </client-only>

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

import { transactionsData } from '~/components/shared/constants'
import { BaseIcon } from '~/components/shared/ui'

const { isMobileOrTablet } = useScreen()

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
</script>

<style lang="scss" scoped>
.transactions {
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
