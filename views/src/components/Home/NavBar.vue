<template>
  <div class="navbar">
    <a class="logo" href="/">
      <img src="~assets/logo.png">
    </a>
    <ul class="menu">
      <li v-for="(item, index) in navItems" :class="{active: currentIndex === index}" :key="item.id">
        <a href="javascript:void(0)" @click="currentIndex = index">{{item.text}}</a>
      </li>
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
        currentIndex: 0
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
    position: relative;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    .logo {
      img {
        height: 100%;
      }
    }
    .menu {
      width: auto;
      height: 100%;
      float: left;
      box-sizing: content-box;
      li {
        position: relative;
        display: inline-block;
        list-style: none;
        font-size: 0.875rem;
        height: 100%;
        line-height: 3rem;
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
    }
  }
</style>