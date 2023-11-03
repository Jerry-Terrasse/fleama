<template>
  <n-menu :options="menuOptions" mode="vertical" />
</template>

<script setup>
import { ref, h } from 'vue'
import { NMenu } from 'naive-ui'
import axios from 'axios';

const menuOptions = ref(null)
// axios.get('/api/sessions').then(res => {
//     console.log('sessions', res)
//     menuOptions.value = res.data.map(info => {
//         return {
//             label: () => h(
//                 RouterLink,
//                 {
//                     to: {
//                         name: "session",
//                         params: {
//                             id: info.id
//                         }
//                     }
//                 },
//                 { default: () => info.name }
//             ),
//             key: info.id,
//             icon: renderIcon(ChatboxIcon)
//         }
//     })
// }).catch(err => {
//     console.log(err)
// })
</script>

<style scoped>
</style>