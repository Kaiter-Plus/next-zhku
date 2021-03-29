<template>
  <div class="link-container">
    <ul class="link-content">
      <li class="link-item" v-for="(link, index) in links" :key="index">
        <a :href="link.href">
          <img src="~assets/img/tip.png">
          <img src="~assets/img/tipHover.png">
          <span>{{ link.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'LinkContainer',
    props: {
      links: Array
    }
  }
</script>

<style lang="less" scoped>
  .link-container {
    .link-content {
      padding: 1rem 1rem 0;
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        line-height: 1.25rem;
        margin-bottom: 1rem;
        border-radius: 0.25rem;
        padding: 0.5rem;
        font-size: 0.875rem;
        border: solid 1px;
        img {
          width: 0.5rem;
          height: 0.5rem;
        }
        img:nth-child(2) {
          display: none;
        }
        &:hover {
          img:nth-child(1) {
            display: none;
          }
          img:nth-child(2) {
            display: inline-block;
          }
        }
        span {
          margin-left: 0.5rem;
        }
      }
    }
  }
</style>