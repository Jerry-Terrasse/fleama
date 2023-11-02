<template>
  <n-layout-header style="display: flex;">
    <n-space>
      <img :src="logo" alt="logo" style="width: 30px;" href="/"/>
      <n-menu :options="menuOptions" mode="horizontal" />
    </n-space>
    <n-space justify="end">
      <n-button>111</n-button>
    </n-space>
  </n-layout-header>
</template>

<script setup>
import { defineComponent, h } from "vue";
import { NButton, NIcon, useMessage } from "naive-ui";
import { RouterLink } from "vue-router";
import { NMenu } from "naive-ui";
import { NLayoutHeader } from "naive-ui";
import { NSpace } from "naive-ui";
import { NImage } from "naive-ui";
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