import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'

// 学校概况组件组
import Incumbent from 'components/SchoolProfile/Incumbent'
import LeaderCare from 'components/SchoolProfile/LeaderCare'
import SchoolScenery from 'components/SchoolProfile/SchoolScenery'
import SchoolIntroduce from 'components/SchoolProfile/SchoolIntroduce'
import SchoolConstitution from 'components/SchoolProfile/SchoolConstitution'

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
    component: () => import(/* webpackChunkName: "SchoolProfile" */ 'views/SchoolProfile.vue'),
    children: [
      {
        path: '/',
        redirect: 'school-introduce'
      },
      {
        path: 'school-introduce',
        component: SchoolIntroduce
      },
      {
        path: 'incumbent',
        component: Incumbent
      },
      {
        path: 'leader-care',
        component: LeaderCare
      },
      {
        path: 'school-scenery',
        component: SchoolScenery
      },
      {
        path: 'school-constitution',
        component: SchoolConstitution
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
