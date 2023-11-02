<template>
  <n-config-provider :theme="theme">
    <n-layout>
      <n-layout-header>
        <NavBar />
      </n-layout-header>
      
      <n-layout-content>
        <div style="height: calc(100vh - 97px); overflow: auto;">
        <router-view />
        </div>
      </n-layout-content>
      
      <n-layout-footer>
        <FooterBar />
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import { NConfigProvider, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'
import { RouterView } from 'vue-router'
import { darkTheme } from 'naive-ui'
import { theme } from './store/index.js'
</script>

<style scoped>
/* 样式 */
</style>