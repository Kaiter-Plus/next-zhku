<template>
  <div class="aside-item">
    <div class="aside-box" v-if="recentUpdates">
      <h3 class="aside-title">最近更新</h3>
      <div class="aside-content">
        <ul class="content-list">
          <li v-for="item in recentUpdates" :key="item.id">
            <router-link :title="item.title" :to="{path:`/show/${type}/${item.title}`,query:{id:item.id}}" replace>
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideItem',
  props: {
    recentUpdates: {
      type: Array,
      default: () => []
    },
    type: String
  }
}
</script>

<style lang="less" scoped>
.aside-box {
  border-radius: 0.1875rem;
  margin-bottom: 0.5rem;
  background-color: #ffffff80;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.05);
  .aside-title {
    position: relative;
    padding: 1rem 1rem 0;
    font-size: 0.875rem;
    color: #333;
    font-weight: bold;
  }
  .aside-content {
    padding: 0.75rem 1rem 1rem 1rem;
    overflow: hidden;
    font-size: 0.875rem;
    .content-list {
      margin-top: -0.5rem;
      word-wrap: break-word;
      li {
        margin-top: 0.5rem;
        border-top: solid 1px #999;
        padding-top: 0.5rem;
        a {
          display: block;
          word-wrap: break-word;
          color: #555666;
          background-color: transparent;
        }
      }
    }
  }
}
</style>