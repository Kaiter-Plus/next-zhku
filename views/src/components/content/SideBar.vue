<template>
  <div class="side-bar-container">
    <div class="side-bar-menu-button" @click="showMenu" :class="{click: isShow}"></div>
    <el-menu class="side-bar-menu" :class="{show: isShow}" default-active="0" @select="handleSelect">
      <el-menu-item v-for="(item, index) in sideBarList" :index="String(index)" :key="index"
        @click="switchPanel(item.path)">
        <i class=" el-icon-location"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    data() {
      return {
        isShow: false,
        currentIndex: 0
      }
    },
    props: {
      sideBarList: Array
    },
    methods: {
      showMenu() {
        this.isShow = !this.isShow
      },
      handleSelect(key) {
        this.currentIndex = key
      },
      switchPanel(path) {
        this.isShow = !this.isShow
        this.$router.replace(path)
      },
    }
  }
</script>

<style lang="less" scoped>
  .side-bar-container {
    margin-left: 1rem;
    .side-bar-menu-button {
      height: 2.5rem;
      position: relative;
      background-color: #fff;
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
    @media screen and (max-width: 992px) {
      position: absolute;
      z-index: 99;
      margin-left: 0;
      top: -44px;
      right: 0;
      .side-bar-menu {
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s;
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
      /deep/ .el-menu-item.is-active {
        &::after {
          bottom: 0;
          left: 0;
        }
      }
    }
  }
  /deep/ .el-menu-item:focus,
  .el-menu-item:hover {
    color: #5cc989;
    outline: 0;
    background-color: rgba(31, 145, 78, 0.11);
  }
  /deep/ .el-menu-item.is-active {
    color: #5cc989;
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
</style>