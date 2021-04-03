import Vue from 'vue'
import {
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Menu,
  MenuItem,
  PageHeader,
  Image,
  Pagination,
  Backtop
} from 'element-ui'

// 标签栏
Vue.use(Tabs)
Vue.use(TabPane)
// 导航菜单
Vue.use(Menu)
Vue.use(MenuItem)
// 页头
Vue.use(PageHeader)
// 返回顶部
Vue.use(Backtop)
// 图片
Vue.use(Image)
// 分页
Vue.use(Pagination)
// 轮播图/走马灯
Vue.use(Carousel)
Vue.use(CarouselItem)
