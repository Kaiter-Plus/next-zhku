import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'

// 解决重复点击一个路由时报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/school-profile',
    name: 'SchoolProfile',
    component: () => import(/* webpackChunkName: "SchoolProfile" */ 'views/SchoolProfile.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
