import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'

// 学校概况组件组
import Incumbent from 'components/SchoolProfile/Incumbent'
import LeaderCare from 'components/SchoolProfile/LeaderCare'
import SchoolScenery from 'components/SchoolProfile/SchoolScenery'
import SchoolIntroduce from 'components/SchoolProfile/SchoolIntroduce'
import SchoolConstitution from 'components/SchoolProfile/SchoolConstitution'

// 机构设置组件组
import ResearchOrg from 'components/OrganizationSetup/ResearchOrg.vue'
import ManagementOrg from 'components/OrganizationSetup/ManagementOrg.vue'
import TeachingAndAuxiliaryOrg from 'components/OrganizationSetup/TeachingAndAuxiliaryOrg.vue'

// 解决重复点击一个路由时报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
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
  // 学校概况
  {
    path: '/school-profile',
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
  },
  // 机构设置
  {
    path: '/organization-setup',
    component: () => import(/* webpackChunkName: "OrganizationSetup" */ 'views/OrganizationSetup.vue'),
    children: [
      {
        path: '/',
        redirect: 'management-org'
      },
      {
        path: 'management-org',
        component: ManagementOrg
      },
      {
        path: 'teaching-and-auxiliary-org',
        component: TeachingAndAuxiliaryOrg
      },
      {
        path: 'research-org',
        component: ResearchOrg
      }
    ]
  },
  // 学校新闻
  {
    path: '/news',
    component: () => import(/* webpackChunkName: "News" */ 'views/News.vue')
  },
  // 新闻展示
  {
    path: '/news/:info/:type/:no',
    component: () => import(/* webpackChunkName: "ShowNews" */ 'components/News/ShowNews.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
