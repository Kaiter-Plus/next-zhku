<template>
  <div class="side-bar-container">
    <div class="side-bar-menu-button" @click="showMenu" :class="{click: isShow}"></div>
    <ul class="side-bar" :class="{show: isShow}">
      <li class="side-bar-item" :class="{isActive: currentIndex === index}" v-for="(item, index) in sideBarList"
        :key="index" @click="switchPanel(item.path, index)">
        <i class="icon"></i>
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      sideBarList: Array,
    },
    data() {
      return {
        isShow: false,
        currentIndex: 0
      }
    },
    created() {
      this.resetIndex()
    },
    activated() {
      this.resetIndex()
    },
    methods: {
      showMenu() {
        this.isShow = !this.isShow
      },
      switchPanel(path, index) {
        this.currentIndex = index
        this.isShow = !this.isShow
        // 存储当前点击的 index
        this.$store.commit('setSideBarIndex', index)
        // 跳转页面
        this.$router.replace(path)
      },
      resetIndex() {
        this.currentIndex = +this.$store.state.sideBarIndex
      }
    }
  }
</script>

<style lang="less" scoped>
  .side-bar-container {
    margin-left: 1rem;
    .side-bar-menu-button {
      height: 2.5rem;
      position: relative;
      display: none;
      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        height: 0.375rem;
        border-bottom: 2px solid;
        border-top: 2px solid;
        width: 2rem;
        right: 0.625rem;
        transition: all 0.3s;
      }
      &::before {
        top: 32%;
      }
      &::after {
        bottom: 32%;
      }
    }
    .side-bar {
      list-style: none;
      position: relative;
      margin: 0;
      padding-left: 0;
      background-color: transparent;
      .side-bar-item {
        font-size: 14px;
        color: #303133;
        padding: 0 20px;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        box-sizing: border-box;
        height: 56px;
        line-height: 56px;
        list-style: none;
        position: relative;
        white-space: nowrap;
        &:hover {
          color: #5cc989;
          outline: 0;
          background-color: rgba(31, 145, 78, 0.11);
        }
        &.isActive {
          position: relative;
          background-color: rgba(31, 145, 78, 0.05);
          &::after {
            display: block;
            content: '';
            width: 0.25rem;
            height: 100%;
            background: #27ae60;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
        .icon {
          display: inline-block;
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.25rem;
          vertical-align: middle;
          background: url(~assets/img/icon/xuexiao.png) no-repeat;
          background-size: contain;
        }
      }
    }
    @media screen and (max-width: 992px) {
      position: absolute;
      z-index: 99;
      margin-left: 0;
      top: -44px;
      right: 0;
      .side-bar {
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s;
        background-color: #ffffff;
      }
      .side-bar-menu-button {
        display: block;
      }
      .show {
        visibility: visible;
        opacity: 1;
      }
      .click {
        border-right: 1px solid #e6e6e6;
        &::before,
        &::after {
          height: 0;
          border-top: none;
          border-color: #27ae60;
        }
        &::before {
          top: 48%;
          transform: rotate(45deg);
        }
        &::after {
          bottom: 48%;
          transform: rotate(-45deg);
        }
      }
    }
  }
</style>