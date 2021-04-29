<template>
  <el-row class="news-item" v-loading="loading">
    <el-col class="news-item-wrap" :span="24">
      <el-row class="item-list">
        <el-col class="item" :span="11" :xs="{span: 22}" v-for="news in newsList" :key="news.id">
          <router-link :to="{path:`/show/${type}/${news.title}`,query:{id:news.id}}" :title="news.title">
            <p>{{news.title}}</p>
            <p>{{news.publishTime | formatDateFilter}}</p>
          </router-link>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
// 请求
import { getNews } from 'api/news'

export default {
  name: 'NewsItem',
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
      newsList: null,
      loading: false,
      type: 'news'
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.loading = true
      getNews(this.category).then(({ data }) => {
        this.newsList = data.list
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.news-item-wrap {
  flex: 1;
  overflow: hidden;
  .item-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    width: 100%;
    .item {
      display: flex;
      height: 2.5rem;
      margin: 0.25rem 0.625rem 0.5rem;
      background: #ffffff90;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
      border-radius: 0.25rem;
      a {
        display: flex;
        text-decoration: none;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        p {
          display: block;
          font-size: 14px;
          font-weight: 400;
          line-height: 2.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:nth-child(1) {
            flex: 1;
            margin-left: 0.625rem;
          }
          &:nth-child(2) {
            width: 4.5rem;
            margin-right: 0.625rem;
          }
        }
      }
    }
  }
}
</style>