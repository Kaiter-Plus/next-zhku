import Vue from 'vue'
import {
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  Tabs,
  TabPane,
  Menu,
  MenuItem,
  PageHeader,
  Image,
  Pagination,
  Backtop,
  Dialog,
  Loading,
  MessageBox,
  Message
} from 'element-ui'

// 基础布局
Vue.use(Row).use(Col)
// 按钮
Vue.use(Button)
// 标签栏
Vue.use(Tabs).use(TabPane)
// 导航菜单
Vue.use(Menu).use(MenuItem)
// 页头
Vue.use(PageHeader)
// 图片
Vue.use(Image)
// 分页
Vue.use(Pagination)
// 轮播图/走马灯
Vue.use(Carousel).use(CarouselItem)
// 返回顶部
Vue.use(Backtop)
// 弹出框
Vue.use(Dialog)
// 加载动画
Vue.use(Loading)
// 消息提示
Vue.use(MessageBox).use(Message)
