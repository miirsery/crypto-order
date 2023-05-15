<template>
  <div class="transaction-table">
    <el-table :data="props.transactions" style="width: 100%">
      <el-table-column label="Transactions">
        <template #default="{ row }">
          <span :style="{ color: generateColor(row.type) }">{{ row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="ID">
        <template #default="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="BNB profit" class-name="transaction-table__coin">
        <template #default="{ row }">
          <div class="mr-10">{{ row.profit }}</div>
          <base-icon name="binance-logo" class="icon-24" />
        </template>
      </el-table-column>
      <el-table-column label="Date">
        <template #default="{ row }">
          <div class="d-f ai-c">
            <div>{{ row.date }}</div>
            <div class="dash">&nbsp;-&nbsp;</div>
            <div class="color-gray-7">{{ row.time }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column>
        <div class="transaction-table__button">
          <base-icon name="edit" class="icon-24" />
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  transactions: any
}

const props = defineProps<Props>()

const transactionTypesMap: Record<string, string> = {
  'Game entry': '#97E59A',
  'Beneficial payment': '#A8D5FF',
  'Referral payout': '#FFA8D7',
  'Your referrals': '#AC97FF',
}

const generateColor = (type: string): string => {
  return transactionTypesMap[type]
}
</script>

<style lang="scss" scoped>
.transaction-table {
  width: 100%;
  max-width: 1160px;
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: 15px;
  background-color: $color--background;
  backdrop-filter: blur(4.5px);

  &__button {
    width: 44px;
    height: 44px;
    border: 1px solid rgb(255 255 255 / 0.31);
    border-radius: 5px;
    background: linear-gradient(
      127.75deg,
      rgb(68 70 92 / 0.31) 36.77%,
      rgb(78 80 118 / 0.31) 191.42%,
      rgb(91 94 153 / 0.31) 322.27%
    );
    cursor: pointer;
    padding: 10px;
    margin-right: 48px;
  }
}

.dash {
  top: -2px;
  position: relative;
}
</style>
