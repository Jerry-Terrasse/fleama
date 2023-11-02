<template>
  <n-layout-header style="display: flex;">
    <n-space class="nav-menu">
      <img :src="logo" alt="logo" style="width: 30px;" href="/"/>
      <n-menu :options="menuOptions" mode="horizontal" />
    </n-space>
    <n-space justify="end">
      <n-button
        @click="toggleTheme"
      >
      {{ dark ? '浅色主题' : '深色主题'  }}
    </n-button>
      <n-avatar v-if="loggedIn" round :size="32">
        <n-icon>
          <person-icon />
        </n-icon>
      </n-avatar>
      <n-button v-else href="/login" type="primary" @click="handleLoginClick">
        登录
      </n-button>
    </n-space>
  </n-layout-header>
</template>

<script setup>
import { defineComponent, h, ref, onMounted } from "vue";
import { NButton, NIcon, useMessage } from "naive-ui";
import { RouterLink } from "vue-router";
import { NMenu } from "naive-ui";
import { NLayoutHeader } from "naive-ui";
import { NSpace, NAvatar, darkTheme } from "naive-ui";
import { NImage } from "naive-ui";
import { theme } from "../store/index.js";
import {
  PersonOutline as PersonIcon,
  TelescopeOutline as TelescopeIcon,
  ChatboxOutline as ChatboxIcon,
  CartOutline as CartIcon,
  BagHandleOutline as BagIcon,
  LogOutOutline as LogOutIcon,
} from "@vicons/ionicons5";
import logo from "../assets/logo.svg";
import axios from "axios";
import { username } from "../store/index.js";
import { useRouter } from "vue-router";

const router = useRouter();

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
          name: "explore",
        }
      },
      { default: () => "发现" }
    ),
    key: "explore",
    icon: renderIcon(TelescopeIcon)
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
    icon: renderIcon(BagIcon)
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
    icon: renderIcon(CartIcon)
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
    icon: renderIcon(ChatboxIcon)
  },
];


// Login
const loggedIn = ref(false);
onMounted(() => {
  axios.get('/api/login_status').then(res => {
    if (res.status == 200) {
      loggedIn.value = true;
      username.value = res.data.username;
      console.log("Logged in as " + username.value)
    } else {
      loggedIn.value = false;
      username.value = null;
      console.log("Not logged in")
    }
  }).catch(err => {
    console.log(err);
  })
});

function handleLoginClick() {
  router.push("/login");
}

</script>

<style scoped>
.nav-menu {
  width: 94%;
}
</style>