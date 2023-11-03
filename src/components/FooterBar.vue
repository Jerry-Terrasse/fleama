<template>
  <n-layout-footer class="footer" bordered>
    © 2023 Fleama 二手交易平台
  </n-layout-footer>
</template>
  
<script setup>
import { defineComponent } from 'vue'
import { NLayoutFooter } from 'naive-ui'
</script>
  
<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 2vh;
}
</style>
  