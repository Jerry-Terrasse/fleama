<template>
  <n-scrollbar>
    <n-back-top :visibility-height="3000"/>
    <n-grid x-gap="12" :cols="4">
      <n-gi :offset="1" span="2">
        <n-grid x-gap="12" :cols="2">
          <n-gi v-for="item in items" :key="item.id">
            <ItemCard :item="item" class="item">
            </ItemCard>
          </n-gi>
        </n-grid>
      </n-gi>
    </n-grid>
  </n-scrollbar>
</template>

<script setup>
import ItemCard from '../components/ItemCard.vue';
import { NGrid, NScrollbar, NGi, NBackTop } from 'naive-ui'

// test data
const item = {
  id: 1,
  url: '/item/1',
  name: 'Naive UI',
  price: 100,
  img: '/items/1.webp'
}

const items = [item]
for (let i = 0; i < 100; i++) {
  const random_price = Math.floor(Math.random() * 1000) / 100;
  const random_id = Math.floor(Math.random() * 6) + 1;
  items.push({
    id: i + 2,
    url: '/item/' + (i + 2),
    name: 'Item_' + (i * 9947 ^ 12838 + 2),
    price: random_price,
    img: '/items/' + random_id + '.webp'
  })
}


</script>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}

.item {
  margin-bottom: 25px;
}
</style>