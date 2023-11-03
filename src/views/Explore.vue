<template>
  <n-scrollbar>
    <n-back-top
    />
    <!-- <n-grid x-gap="12" :cols="4">
      <n-gi :offset="1" span="2">
        prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
        next-slide-style="transform: translateX(50%) translateZ(-800px);"
        <n-carousel 
          autoplay>
            <img v-for="item in 2" :key="item" class="carousel-img" :src="'/carousels/carousel' + item + '.webp'" alt="CAROUSEL"/>
        </n-carousel>
      </n-gi>
    </n-grid> -->
    <n-grid x-gap="12" :cols="4">
      <n-gi :offset="1">
        <ItemCard v-if="items_left.length" v-for="item in items_left" :key="item.id" :item="item" class="item_left">
        </ItemCard>
        <ItemCard v-else :item="{}" v-for="i in 10" :key="i" class="item_left">
        </ItemCard>
      </n-gi>
      <n-gi>
        <ItemCard v-if="items_right.length" v-for="item in items_right" :key="item.id" :item="item" class="item_right">
        </ItemCard>
        <ItemCard v-else :item="{}" v-for="i in 10" :key="i" class="item_right">
        </ItemCard>
      </n-gi>
    </n-grid>
  </n-scrollbar>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ItemCard from '../components/ItemCard.vue';
import { NGrid, NScrollbar, NGi, NBackTop, NCarousel, NCarouselItem, NLayout } from 'naive-ui'
import axios from 'axios';

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
  axios.get('/api/explore').then(res => {
    console.log('items', res)
    items.value = res.data.map(info => {
      const img_id = info.item_id * 998244353 % 6 + 1
      return {
        id: info.item_id,
        url: '/item/' + info.item_id,
        name: info.item_name,
        price: info.item_price,
        img: '/items/' + img_id + '.webp'
      }
    })
  }).catch(err => {
    console.log(err)
  })
})

const items_left = computed(() => {
  return items.value.filter((item, index) => index % 2 == 0)
})
const items_right = computed(() => {
  return items.value.filter((item, index) => index % 2 == 1)
})

</script>

<style scoped>
/* .n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
} */

.item_left {
  margin-bottom: 20px;
}

.item_right {
  margin-bottom: 40px;
}

.n-grid {
  margin-top: 7vh;
}

img {
  width: auto;
}

.n-carousel {
  width: 100%;
  height: auto;
}
.carsoul-img {
  width: 100%;
  height: auto;
  /* width: 100%;
  max-height: 10vh;
  object-fit: fill; */
}
</style>