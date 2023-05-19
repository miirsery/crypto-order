<template>
  <div class="transaction-card">
    <div>
      <div class="d-f ai-c jc-sb mb-18">
        <div class="transaction-card__value">
          <span :style="{ color: generateColorByType(props.transaction.type) }">{{ props.transaction.type }}</span>
        </div>
        <div class="transaction-card__title"> Transactions </div>
      </div>

      <div class="d-f ai-c jc-sb mb-18">
        <div class="transaction-card__value">
          {{ props.transaction.id }}
        </div>
        <div class="transaction-card__title"> ID </div>
      </div>

      <div class="d-f ai-c jc-sb mb-18">
        <div class="transaction-card__value d-f ai-c">
          {{ props.transaction.profit }}

          <base-icon name="binance-logo" class="icon-24 ml-10" />
        </div>
        <div class="transaction-card__title"> BNB profit </div>
      </div>

      <div class="d-f ai-c jc-sb">
        <div class="d-f ai-c">
          <div class="transaction-card__value">{{ props.transaction.date }}</div>
          <div class="dash">&nbsp;-&nbsp;</div>
          <div class="transaction-card__value color-gray-7">{{ props.transaction.time }}</div>
        </div>
        <div class="transaction-card__title"> Date </div>
      </div>
    </div>

    <div class="transaction-card__button">
      <base-icon name="edit" class="icon-24" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { generateColorByType } from '~/components/shared/lib/utils'

type Props = {
  transaction?: any
}

const props = withDefaults(defineProps<Props>(), {
  transaction: () => ({
    type: 'Game entry',
    id: 3492,
    profit: 0.3492,
    date: '30.05.2023',
    time: '18:31',
  }),
})
</script>

<style lang="scss" scoped>
.transaction-card {
  border: 1px solid rgba($color--white, 0.2);
  border-radius: 10px;
  background-color: $color--background-2;
  padding: 24px;

  &__value {
    @include font(15, 18px, 500);
  }

  &__title {
    @include font(14px, 17px, 300);

    color: $color--gray-11;
  }

  &__button {
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid rgb(255 255 255 / 0.31);
    border-radius: 5px;
    color: #74757c;
    background: linear-gradient(
      127.75deg,
      rgb(68 70 92 / 0.31) 36.77%,
      rgb(78 80 118 / 0.31) 191.42%,
      rgb(91 94 153 / 0.31) 322.27%
    );
    padding: 10px;
    margin-top: 18px;
  }
}
</style>
