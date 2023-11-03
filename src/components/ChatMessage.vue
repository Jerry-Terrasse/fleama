<template>
    <n-space horizontal>
        <n-avatar size="large" round>
            <n-icon>
                <chat-icon v-if="user === 'user1:'" />
                <person-add-icon v-else-if="user === 'user2:'" />
                <send-icon v-else-if="user === 'user3:'" />
                <person-icon v-else />
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
import { ref, defineProps, computed } from 'vue'
import { NAvatar, NIcon, NCard, NSpace, NText } from 'naive-ui';
import {
    PersonOutline as PersonIcon,
    ChatbubbleEllipsesOutline as ChatIcon,
    SendOutline as SendIcon,
    PersonAddOutline as PersonAddIcon,
} from '@vicons/ionicons5';

const props = defineProps({
    message: {
        type: Object,
        required: true
    }
})
const content = ref(props.message.content)
const user = computed(() => props.message.user + ':')

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