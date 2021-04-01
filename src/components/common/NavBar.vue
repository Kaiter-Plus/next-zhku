<template>
  <div class="navbar">
    <a class="logo" href="/">
      <img src="~assets/img/logo.png">
    </a>
    <ul class="menu">
      <div class="menu-button" :class="{click: isClickState}" @click="isClick"></div>
      <div class="menu-item-wrap" ref="menuItemWrap">
        <li v-for="(item, index) in navItems" :class="{active: isActive(index)}" :key="index">
          <a href="javascript:void(0)" @click="itemClick(index, item.path)">{{item.name}}</a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      navItems: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        isClickState: false,
        currentIndex: 0
      }
    },
    methods: {
      // 菜单点击事件
      isClick() {
        this.isClickState = !this.isClickState
        this.$refs.menuItemWrap.classList.toggle('menu-item-show')
      },
      // 菜单项是否被点击点击
      isActive(index) {
        return this.currentIndex === index
      },
      // 菜单项点击事件
      itemClick(index, path) {
        // 移动端点击跳转之后隐藏导航栏
        this.isClick()
        // 切换菜单项激活状态
        this.currentIndex = index
        // 路由跳转
        if (path) {
          this.$router.push(path)
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .navbar {
    font-size: 0.875rem;
    font-weight: 400;
    color: #222226;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    background-color: rgba(248, 248, 248, 0.4);
    backdrop-filter: blur(15px);
    height: 3rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    .logo {
      overflow: hidden;
      width: 12.5625rem;
      padding: 0.1875rem;
      @media screen and (max-width: 1200px) {
        width: 2.46rem;
      }
      img {
        height: 100%;
      }
    }
    .menu {
      width: auto;
      height: 100%;
      float: left;
      box-sizing: content-box;
      .menu-button {
        height: 100%;
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
          left: 50%;
          transition: all 0.3s;
        }
        &::before {
          top: 32%;
        }
        &::after {
          bottom: 32%;
        }
      }
      .click {
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
      li {
        position: relative;
        display: inline-block;
        list-style: none;
        font-size: 0.875rem;
        height: 100%;
        line-height: 3rem;
        @media screen and (max-width: 1200px) {
          display: inline-block;
          width: 6rem;
          text-align: center;
        }
        a {
          text-decoration: none;
          display: block;
          height: 100%;
          color: inherit;
          padding: 0 10px;
        }
        &:hover {
          background: #f0f0f590;
        }
        &.active {
          color: #27ae60;
          &::after {
            display: block;
            content: '';
            width: 100%;
            height: 0.125rem;
            background: #27ae60;
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }
      }
      @media screen and (max-width: 1200px) {
        width: 4rem;
        .menu-button {
          display: block;
        }
        .menu-item-wrap {
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
          li {
            background-color: #fff;
            &:hover {
              background: #f0f0f5;
            }
            &.active::after {
              display: block;
              content: '';
              width: 0.125rem;
              height: 100%;
              background: #27ae60;
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
        .menu-item-show {
          opacity: 1;
          visibility: visible;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      padding-left: 1rem;
    }
  }
</style>