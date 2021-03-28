import 'assets/style/index.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Loading } from 'element-ui'
import 'plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// oading 服务
Vue.prototype.$loading = Loading.service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
