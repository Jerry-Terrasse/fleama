<template>
  <n-scrollbar>
    <n-grid x-gap="12" :cols="4">
      <n-gi :offset="1">
        <ItemCard v-for="item in items_left" :key="item.id" :item="item" class="item_left">
        </ItemCard>
      </n-gi>
      <n-gi>
        <ItemCard v-for="item in items_right" :key="item.id" :item="item" class="item_right">
        </ItemCard>
      </n-gi>
    </n-grid>
  </n-scrollbar>
</template>

<script setup>
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NSpace, NLayoutSider } from 'naive-ui'
import ItemCard from '../components/ItemCard.vue';
import { NGrid, NScrollbar, NGi } from 'naive-ui'

// test data
const item = {
  id: 1,
  url: '/item/1',
  name: 'Naive UI',
  price: 100,
  img: '/public/items/1.webp'
}

const items = [item]
for (let i = 0; i < 100; i++) {
  const random_price = Math.floor(Math.random() * 1000) / 100;
  const random_id = Math.floor(Math.random() * 4) + 1;
  items.push({
    id: i + 2,
    url: '/item/' + (i + 2),
    name: 'Item_' + (i*9947^12838 + 2),
    price: random_price,
    img: '/public/items/' + random_id + '.webp'
  })
}

const items_left = items.filter((item, index) => index % 2 == 0)
const items_right = items.filter((item, index) => index % 2 == 1)


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

.item_left {
  margin-bottom: 20px;
}
.item_right {
  margin-bottom: 30px;
}
</style>