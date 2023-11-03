<template>
    <n-scrollbar>
        <n-grid :cols="3" x-gap="12">
            <n-gi :offset="1">
                <n-card :title="item.name">
                    <template #cover>
                        <img :src="img" alt="item" />
                    </template>
                    <n-text>
                        售价：￥{{ item.price }}
                        {{ item.description }}
                    </n-text>
                </n-card>
                <n-space horizontal style="margin-top: 1em;">
                    <n-button type="primary" size="large" @click="addCart">加入购物车</n-button>
                    <n-button type="primary" size="large" @click="buy">购买</n-button>
                </n-space>
            </n-gi>
        </n-grid>
    </n-scrollbar>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { NGrid, NScrollbar, NGi, NBackTop, NCard, NImageGroup, NImage, NText, NButton, NSpace } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router';
import { useMessage } from 'naive-ui';
import { username } from '../store';

const route = useRoute();
const router = useRouter();
const uiMessage = useMessage();

const item = ref({
    id: 0,
    name: '',
    price: 0,
    img: '',
    description: ''
});
const img = computed(() => '/items/' + (item.value.id * 998244353 % 6 + 1) + '.webp')


onMounted(async () => {
    try {
        const response = await axios.get(`/api/item/${route.params.id}`);
        item.value = response.data
    } catch (err) {
        router.push('/login');
        uiMessage.error(
            '请登录后访问',
            { duration: 3000 }
        );
        console.error(err);
    }
});

function buy() {
    router.push('/orders');
}
</script>
  
<style scoped>
.n-image-group {
    text-align: center;
}

.n-card {
    margin-top: 20px;
}

.n-card-title {
    margin-top: 20px;
}

.n-card-content {
    margin-top: 12px;
}

.n-grid {
    margin-top: 5vh;
}
</style>
  