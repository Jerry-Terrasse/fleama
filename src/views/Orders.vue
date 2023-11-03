<template>
  <n-scrollbar>
    <n-back-top :visibility-height="300"/>
    <n-grid x-gap="12" :cols="4">
      <n-gi :offset="1" span="2">
        <n-h1>
          我的订单
        </n-h1>
        <n-list bordered>
          <n-list-item>
            <template #prefix>
              ID
            </template>
            商品名
          </n-list-item>
          <n-list-item v-for="order in orders" :key="order.id">
            <template #prefix>
              {{ order.id }}
            </template>
            <template #suffix>
              {{ order.price }}
              <n-button size="small" type="primary">支付</n-button>
            </template>
            {{ order.name }}
          </n-list-item>
        </n-list>
      </n-gi>
    </n-grid>
  </n-scrollbar>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { NGrid, NScrollbar, NGi, NList, NListItem, NCard, NBackTop, NSpace, NButton, NH1 } from 'naive-ui';

const orders = ref([]);

onMounted(() => {
  axios.get('/api/orders').then(res => {
    orders.value = res.data
  }).catch(err => {
    console.error(err);
  });
});
</script>

<style scoped>
.n-list-item {
  margin-bottom: 16px;
}

.n-h1 {
  margin-top: 6vh;
}

h3 {
  margin: 0;
}

/* You can continue adding styles according to your design */
</style>