<template>
    <n-space horizontal>
        <n-avatar size="large" round>
            <n-icon>
                <person-icon />
            </n-icon>
        </n-avatar>
        <n-card :title="user">
            <n-text size="medium">
                {{ content }}
            </n-text>
        </n-card>
    </n-space>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { NAvatar, NIcon, NCard, NSpace, NText } from 'naive-ui';
import { PersonOutline as PersonIcon } from '@vicons/ionicons5';

const props = defineProps({
    message: {
        type: Object,
        required: true
    }
})
const content = ref(props.message.content)
const user = props.message.user + ':'

</script>

<style scoped>
.n-card {
    max-width: 300px;
    margin-bottom: 3em;
}
.n-text {
    font-size: x-large;
}
</style>