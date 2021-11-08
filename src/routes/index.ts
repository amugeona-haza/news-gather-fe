
import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/Default.vue'
import AuthLayout from '@/layouts/Auth.vue'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Auth/Login.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  },
  {
    path: '/Auth',
    name: 'Auth',
    component: AuthLayout,
    children: [
      {
        path: 'Login',
        component: Login
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
