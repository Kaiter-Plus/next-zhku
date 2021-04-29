<template>
  <div class="link-container">
    <ul class="link-content">
      <li class="link-item" v-for="link in links" :key="link.id">
        <a :href="link.link">
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
      li {
        background-color: #ffffff90;
        border-radius: 0.25rem;
      }
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        line-height: 1.25rem;
        margin-bottom: 1rem;
        border-radius: 0.25rem;
        padding: 0.5rem;
        font-size: 0.875rem;
        box-shadow: 0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.1);
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