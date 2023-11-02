<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-layout>
      <n-layout-header>
        <NavBar />
      </n-layout-header>

      <n-layout-content>
        <router-view />
      </n-layout-content>

      <n-layout-footer>
        <FooterBar />
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>
  
<script>
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import { NConfigProvider, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'
import { RouterView } from 'vue-router'
import { darkTheme } from 'naive-ui'


export default defineComponent({
  components: {
    NavBar,
    FooterBar
  }
})
</script>
  
<style scoped>
/* 样式 */
</style>
  