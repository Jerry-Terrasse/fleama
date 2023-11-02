<template>
  <n-layout-header style="display: flex;">
    <n-space class="nav-menu">
      <img :src="logo" alt="logo" style="width: 30px;" href="/"/>
      <n-menu :options="menuOptions" mode="horizontal" />
    </n-space>
    <n-space justify="end">
      <n-button
        size="small"
        @click="toggleTheme"
      >
      {{ dark ? '浅色' : '深色'  }}
    </n-button>
      <n-avatar
        round
        :size="32"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-space>
  </n-layout-header>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import { NButton, NIcon, useMessage } from "naive-ui";
import { RouterLink } from "vue-router";
import { NMenu } from "naive-ui";
import { NLayoutHeader } from "naive-ui";
import { NSpace, NAvatar, darkTheme } from "naive-ui";
import { NImage } from "naive-ui";
import { theme } from "../store/index.js";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon
} from "@vicons/ionicons5";
import logo from "../assets/logo.svg";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const dark = ref(true);
function toggleTheme() {
  dark.value = !dark.value;
  theme.value = dark.value ? darkTheme : null;
}

const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "home",
        }
      },
      { default: () => "首页" }
    ),
    key: "home",
    icon: renderIcon(HomeIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "items",
        }
      },
      { default: () => "我的商品" }
    ),
    key: "items",
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "orders",
        }
      },
      { default: () => "我的订单" }
    ),
    key: "orders",
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "sessions",
        }
      },
      { default: () => "会话" }
    ),
    key: "sessions",
  },
];
</script>

<style scoped>
.nav-menu {
  width: 95%;
}
</style>