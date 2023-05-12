<template>
  <div class="transaction-table">
    <el-table :data="props.transactions" :show-header="false">
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
          <span>{{ row.date }}</span>
        </template>
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
