import Vue from 'vue'
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Menu,
  MenuItem,
  PageHeader,
  Image,
  Button,
  ButtonGroup
} from 'element-ui'

// 基础布局
Vue.use(Row)
Vue.use(Col)
// 标签栏
Vue.use(Tabs)
Vue.use(TabPane)
// 导航菜单
Vue.use(Menu)
Vue.use(MenuItem)
// 页头
Vue.use(PageHeader)
// 图片
Vue.use(Image)
// 按钮
Vue.use(Button)
Vue.use(ButtonGroup)
// 轮播图/走马灯
Vue.use(Carousel)
Vue.use(CarouselItem)
