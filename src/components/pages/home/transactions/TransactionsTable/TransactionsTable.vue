<template>
  <div class="transaction-table">
    <el-table :data="props.transactions" style="width: 100%">
      <el-table-column label="Transactions">
        <template #default="{ row }">
          <span>{{ row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="ID">
        <template #default="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="BNB profit">
        <template #default="{ row }">
          <span>{{ row.profit }}</span>
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
    padding: 10px;
  }
}

.dash {
  top: -2px;
  position: relative;
}
</style>
