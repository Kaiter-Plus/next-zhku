import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 把数据存到本地
function storeLocalStore(state) {
  window.sessionStorage.setItem('state', JSON.stringify(state))
}

export default new Vuex.Store({
  state: {
    navIndex: 0,
    sideBarIndex: 0
  },
  mutations: {
    // 记录导航栏的状态
    setNavIndex(state, index) {
      state.navIndex = index
      storeLocalStore(state)
    },
    // 记录侧边栏的状态
    setSideBarIndex(state, index) {
      state.sideBarIndex = index
      storeLocalStore(state)
    }
  },
  actions: {},
  modules: {}
})
