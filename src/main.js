import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


// 导入你的视图组件
import VueAbout from './VueAbout.vue'
import Home from './views/Home.vue'
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
//   { path: '/items', component: Items },
//   { path: '/publish', component: Publish },
//   { path: '/profile', component: Profile },
//   { path: '/admin/complains', component: AdminComplains },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)  // 使用路由
app.mount('#app')