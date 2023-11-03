<template>
  <n-scrollbar>
    <n-back-top :visibility-height="3000"/>
    <n-grid x-gap="12" :cols="4">
      <n-gi :offset="1" span="2">
        <n-h1>
          我的商品
        </n-h1>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ItemCard from '../components/ItemCard.vue';
import { NGrid, NScrollbar, NGi, NBackTop, NH1 } from 'naive-ui'

// test data
const item = {
  id: 1,
  url: '/item/1',
  name: 'Naive UI',
  price: 100,
  img: '/items/1.webp'
}

const items = ref([])
onMounted(() => {
  axios.get('/api/my_items').then(res => {
    console.log('items', res)
    items.value.push(...res.data.map(info => {
      const img_id = info.item_id * 998244353 % 6 + 1
      return {
        id: info.item_id,
        url: '/item/' + info.item_id,
        name: info.item_name,
        price: info.item_price,
        img: '/items/' + img_id + '.webp'
      }
    }))
  }).catch(err => {
    console.log(err)
  })
})

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

.n-h1 {
  margin-top: 3vh;
}

.n-grid {
  margin-top: 3vh;
  margin-bottom: 7vh;
}
</style>