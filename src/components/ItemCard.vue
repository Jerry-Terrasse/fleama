<template>
    <n-card v-if="item['id']==null" hoverable>
        <template #cover>
            <n-skeleton height="30vh" />
        </template>
        <n-text>
            加载中...
        </n-text>
    </n-card>
    <n-card v-else :title="name" hoverable @click="handleItemClick">
        <template #cover>
            <img :src="img" alt="item"/>
        </template>
        <n-text>
            售价：￥{{ price }}
        </n-text>
    </n-card>
</template>

<script setup>
import { ref, h, defineProps } from 'vue'
import { NCard, NSkeleton, NText } from 'naive-ui'
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

const item = props.item
const url = item.url
const name = item.name
const price = item.price
const img = item.img

function handleItemClick() {
    router.push({ path: url })
}

</script>

<style scoped>
.n-card {
    /* max-width: 30vh; */
    cursor: pointer;
}
</style>