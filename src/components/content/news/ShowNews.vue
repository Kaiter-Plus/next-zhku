<template>
  <div class="show-news" v-if="news">
    <el-page-header @back="$router.go(-1)" :content="news.title"></el-page-header>
    <el-row class="news-container" :gutter="10">
      <el-col tag="aside" class="news-aside" :span="6">
        <aside-item :recentUpdates="recentUpdates" :type="type"></aside-item>
      </el-col>
      <el-col class="news-main" :span="18">
        <div class="news-content-box">
          <div class="news-header-box">
            <div class="news-title-box">
              <h1 class="news-title">{{ news.title }}</h1>
            </div>
            <div class="news-info-box">
              <img src="~assets/img/icon/medal.png" alt="排行榜" class="ranking-list">
              <div class="info">
                <span>{{ news.author }}</span>
                <span>{{ news.publishTime | formatDateFilter }}</span>
              </div>
            </div>
          </div>
          <article class="news-content" v-html="news.content"></article>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 请求
import { getSpecialById, fetchSpecialRecentUpdate } from 'api/special'
import { getNewsById, fetchNewsRecentUpdate } from 'api/news'

// 组件
import AsideItem from 'components/content/news/AsideItem.vue'
export default {
  name: 'ShowNews',
  components: { AsideItem },
  filters: {
    formatDateFilter(date) {
      return new Date(date).toLocaleString()
    }
  },
  data() {
    return {
      recentUpdates: null,
      id: 0,
      news: {
        id: 0,
        title: '正在获取标题......',
        author: '',
        publishTime: '',
        content: '正在获取文章内容......'
      },
      // 存储传入的是专题还是新闻
      type: ''
    }
  },
  created() {
    this.id = this.$route.query.id
    this.type = this.$route.params.type
    this.getData(this.id)
    this.getRecentUpdate()
  },
  methods: {
    getData(id) {
      if ('news' === this.type) {
        getNewsById(id).then(({ data }) => {
          this.news = data
        })
      } else {
        getSpecialById(id).then(({ data }) => {
          this.news = data
        })
      }
    },
    getRecentUpdate() {
      if ('news' === this.type) {
        fetchNewsRecentUpdate().then(({ data }) => {
          this.recentUpdates = data
        })
      } else {
        fetchSpecialRecentUpdate().then(({ data }) => {
          this.recentUpdates = data
        })
      }
    }
  },
  // 防止组件复用不更新数据
  beforeRouteUpdate(to, from, next) {
    if (to.fullPath !== from.fullPath) {
      this.type = to.params.type
      this.getData(to.query.id)
      this.getRecentUpdate()
    }
    next()
  }
}
</script>

<style lang="less" scoped>
.show-news {
  margin: 0 0.75rem 0.75rem;
  .news-container {
    .news-aside {
      margin-top: 1rem;
      position: sticky;
      top: 3.75rem;
      @media screen and (max-width: 992px) {
        display: none;
      }
    }
    .news-main {
      @media screen and (max-width: 992px) {
        width: 100%;
      }
      .news-content-box {
        margin-top: 1rem;
        position: relative;
        padding: 0 1.5rem 1rem;
        background: #ffffff60;
        .news-header-box {
          border-bottom: 1px solid #f5f6f7;
          padding-top: 0.5rem;
          z-index: 9;
          .news-title-box {
            margin-bottom: 0.5rem;
            .news-title {
              font-size: 1.75rem;
              word-wrap: break-word;
              color: #222226;
              font-weight: 600;
              line-height: 2rem;
              margin: 0;
              word-break: break-all;
            }
          }
          .news-info-box {
            position: relative;
            background: #f8f8f899;
            border-radius: 0.25rem;
            font-size: 0.875rem;
            line-height: 2rem;
            color: #999aaa;
            display: flex;
            .ranking-list {
              width: 1.5rem;
              height: 1.5rem;
              margin: 0.25rem;
              margin-right: 12px;
            }
            span {
              color: #555666;
              margin-right: 20px;
              vertical-align: top;
              line-height: 32px;
            }
          }
        }
        .news-content {
          position: relative;
          padding-top: 16px;
          word-wrap: break-word;
          text-indent: 2em;
          color: #4d4d4d;
          font-weight: 400;
          line-height: 26px;
          margin: 0 0 16px;
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    /deep/ .page-header__left * {
      font-size: 0.8rem;
    }
    /deep/ .page-header__content {
      font-size: 0.85rem;
    }
  }
}
</style>