import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


// 导入你的视图组件
import VueAbout from './VueAbout.vue'
import Home from './views/Home.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
// import Items from './views/Items.vue'
// import Publish from './views/Publish.vue'
// import Profile from './views/Profile.vue'
// import AdminComplains from './views/AdminComplains.vue'

// 设置路由
const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/vue', name: 'vue', component: VueAbout },
  { path: '/items', name: 'items', component: () => import('./views/Items.vue') },
  { path: '/orders', name: 'orders', component: () => import('./views/Orders.vue') },
  { path: '/sessions', name: 'sessions', component: () => import('./views/Sessions.vue') },
  { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)  // 使用路由
app.use(VueAxios, axios)
app.mount('#app')