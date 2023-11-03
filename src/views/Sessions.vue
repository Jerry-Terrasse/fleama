<template>
  <n-layout has-sider content-style="height: calc(100vh - 4vh); margin-top: 4vh;">
    <n-layout-sider content-style="padding: 24px;" bordered>
      <n-menu :options="menuOptions" mode="vertical" :value="menuValue" />
    </n-layout-sider>
    <n-layout-content v-if="inChat" content-style="padding: 24px; height: 80vh;">
      <ChatMessage v-for="message in messages" :key="message.id" :message="message" />
      <n-space class="input-area">
        <n-input v-model:value="inputText" placeholder="输入消息" />
        <n-button type="primary" @click="sendMessage">发送</n-button>
      </n-space>
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import { ref, h, defineProps, computed, onMounted } from 'vue'
import { NMenu, NLayout, NLayoutContent, NLayoutSider, NScrollbar, NText } from 'naive-ui'
import { useRouter } from 'vue-router';
import { NInput, NButton, NSpace, useMessage } from 'naive-ui';
import axios from 'axios';
import ChatMessage from '../components/ChatMessage.vue';

const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    required: false
  }
})
const inChat = computed(() => {
  return props.id !== undefined
})
const messages = ref([])
const inputText = ref('')
const uiMessage = useMessage()
const menuValue = ref(props.id)

const menuOptions = ref([])
axios.get('/api/sessions').then(res => {
  console.log('sessions', res)
  menuOptions.value = res.data.map(info => {
    return {
      label: () => h(
        'a',
        {
          href: '/sessions/' + info.session_id,
          style: 'font-size: x-large;',
          onClick: (e) => {
            e.preventDefault();
            router.push('/sessions/' + info.session_id);
            reloadMessages();
          }
        },
        { default: () => info.peoples }
      ),
      key: info.session_id,
    }
  })
}).catch(err => {
  console.log(err)
})

function reloadMessages() {
  if(props.id !== undefined) {
    axios.get('/api/messages/' + props.id).then(res => {
      console.log('messages', res)
      messages.value = res.data
    }).catch(err => {
      uiMessage.error('加载消息失败' + err)
      console.log(err)
    })
  }
}


function sendMessage() {
  if(props.id === undefined) {
    return
  }
  axios.post('/api/messages/' + props.id, {
    content: inputText.value
  }).then(res => {
    inputText.value = ''
    reloadMessages()
  }).catch(err => {
    uiMessage.error('发送失败' + err)
    console.log(err)
  })
}

onMounted(() => {
  reloadMessages()
})

</script>

<style scoped>
.input-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 5vh;
}
.history {
  height: 60vh;
  overflow: auto;
}
</style>