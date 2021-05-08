import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/home')
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('@/components/Login')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: ()=>import('@/components/Regist')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: ()=>import('@/views/admin')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
