<template>
  <ul v-loading="loading">
    <li v-for="content in contentList" :key="content.id" :title="content.title">
      <router-link :to="{path:`/show/${type}/${content.title}`,query:{id:content.id}}" replace>
        <img src="~assets/img/tip.png">
        <img src="~assets/img/tipHover.png">
        <span class="title">{{ content.title }}</span>
        <span class="date">{{ content.publishTime | formatDateFilter}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
// 导入请求
import { getSpecial } from 'api/special'

export default {
  name: 'SpecialItemContent',
  props: {
    category: Number
  },
  filters: {
    formatDateFilter(date) {
      return new Date(date).toLocaleDateString()
    }
  },
  data() {
    return {
      contentList: null,
      loading: false,
      type: 'special'
    }
  },
  created() {
    this.loading = true
    getSpecial(this.category).then(({ data }) => {
      this.contentList = data.list
      // 如果已经渠道数据，关闭加载动画
      this.loading = false
    })
  }
}
</script>


<style lang="less" scoped>
ul {
  height: 8.9375rem;
  border-bottom: 1px solid #e8e8ed;
  padding: 1rem 1rem 0;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    line-height: 1.25rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
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
    .title {
      flex: 1;
      overflow: hidden;
      margin: 0 8px;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
    }
    .date {
      width: 5rem;
    }
  }
}
</style>