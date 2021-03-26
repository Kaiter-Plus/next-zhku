<template>
  <div class="navbar">
    <a class="logo" href="/">
      <img src="~assets/img/logo.png">
    </a>
    <ul class="menu">
      <!-- <li v-for="(item, index) in navItems" :class="{active: isActive(index)}" :key="item.id">
        <a href="javascript:void(0)" @click="currentIndex = index">{{item.text}}</a>
      </li> -->
      <div class="menu-button"></div>
      <li class="active">
        <a href="javascript:void(0)">首页</a>
      </li>
      <li>
        <a href="javascript:void(0)">学校概况</a>
      </li>
      <li>
        <a href="javascript:void(0)">机构设置</a>
      </li>
      <li>
        <a href="javascript:void(0)">人才招聘</a>
      </li>
      <li>
        <a href="javascript:void(0)">教育教学</a>
      </li>
      <li>
        <a href="javascript:void(0)">科学研究</a>
      </li>
      <li>
        <a href="javascript:void(0)">招生就业</a>
      </li>
      <li>
        <a href="javascript:void(0)">图书馆</a>
      </li>
      <li>
        <a href="javascript:void(0)">纪念馆</a>
      </li>
      <li>
        <a href="javascript:void(0)">雅思托福</a>
      </li>
      <li>
        <a href="javascript:void(0)">校友与基金</a>
      </li>
      <li>
        <a href="javascript:void(0)">公共服务</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    // props: {
    //   navItems: {
    //     type: Array,
    //     default: []
    //   }
    // },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      isActive(index) {
        return this.currentIndex === index
      }
    }
  }
</script>

<style lang="less" scoped>
  .navbar {
    font-size: 0.875rem;
    font-weight: 400;
    color: #222226;
    background: #fff;
    box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
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
        width: 2.5rem;
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
          border-bottom: 2px solid;
          width: 2rem;
          left: 50%;
          transition: transform 0.3s;
        }
        &::before {
          top: 40%;
        }
        &::after {
          bottom: 40%;
        }
        &:hover {
          &::before,
          &::after {
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
          color: #222226;
          background: #f0f0f5;
        }
        &.active::after {
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
      @media screen and (max-width: 1200px) {
        width: 4rem;
        visibility: hidden;
        .menu-button {
          display: block;
          visibility: visible;
        }
        li {
          background-color: #fff;
          transform: translateX(100%) scale(0);
          transition: all 0.3s;
        }
        &:hover li {
          transform: translateX(0) scale(1);
          visibility: visible;
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
    }
  }
</style>