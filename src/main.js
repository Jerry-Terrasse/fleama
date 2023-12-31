import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


// 导入你的视图组件
import VueAbout from './VueAbout.vue'
import Explore from './views/Explore.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
// import Items from './views/Items.vue'
// import Publish from './views/Publish.vue'
// import Profile from './views/Profile.vue'
// import AdminComplains from './views/AdminComplains.vue'

// 设置路由
const routes = [
  { path: '/', name: 'explore', component: Explore},
  { path: '/vue', name: 'vue', component: VueAbout },
  { path: '/my_items', name: 'my_items', component: () => import('./views/MyItems.vue') },
  // { path: '/my_items/:id', name: 'my_items', component: () => import('./views/MyItems.vue') },
  { path: '/orders', name: 'orders', component: () => import('./views/Orders.vue') },
  { path: '/sessions/:id?', name: 'sessions', component: () => import('./views/Sessions.vue'), props: true },
  { path: '/login', name: 'login', component: () => import('./views/Login.vue') },
  { path: '/item/:id', name: 'item', component: () => import('./views/Item.vue'), props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)  // 使用路由
app.use(VueAxios, axios)
app.mount('#app')