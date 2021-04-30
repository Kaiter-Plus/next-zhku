<template>
  <div class="news-card-list">
    <header v-if="title" class="news-type-title">
      <div class="title">
        <div class="news-icon"></div>
        <span>{{ title }}</span>
      </div>
    </header>
    <div class="news-card-wrap" v-loading="loading">
      <el-row tag="main">
        <el-col :span="12" :sm="6" :md="{span:'4-8'}" v-for="news in newsList" class="news-card" :title="news.title"
          :key="news.id">
          <router-link :to="`/show/news/${news.title}?id=${news.id}`">
            <div v-if="news.cover" class="cover" :style="{backgroundImage:`url(${news.cover})`}"></div>
            <div v-else class="cover" :style="{background: randomRgbaColor()}">
              <img src="~assets/img/cover.png" alt="cover">
            </div>
            <span>
              {{ news.title }}
            </span>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <pagination style="background: transparent;text-align:center" v-if="total>0" :total="total" :page.sync="page"
      :limit.sync="limit" @pagination="getData" />
  </div>
</template>

<script>
// 请求
import { getNews } from 'api/news'

// 分页组件
import Pagination from 'components/common/Pagination/index.vue'

export default {
  name: 'NewsCardList',
  components: { Pagination },
  data() {
    return {
      title: null,
      categoryId: null,
      newsList: null,
      // 加载状态
      loading: false,
      page: 1,
      total: 0,
      showCover: true,
      limit: 30
    }
  },
  created() {
    this.title = this.$route.params.title
    this.categoryId = this.$route.query.id
    this.getData()
  },
  methods: {
    getData() {
      // 加载动画
      this.loading = true
      getNews(this.categoryId, this.page, this.showCover, this.limit).then(({ data }) => {
        this.newsList = data.list
        this.total = data.total
        this.loading = false
      })
    },
    // 随机生成十六进制颜色
    randomRgbaColor() { // 随机生成RGBA颜色
      var r = Math.floor(Math.random() * 256); // 随机生成256以内r值
      var g = Math.floor(Math.random() * 256); // 随机生成256以内g值
      var b = Math.floor(Math.random() * 256); // 随机生成256以内b值
      var alpha = Math.random(); // 随机生成1以内a值
      return `rgba(${r},${g},${b},${alpha})`; // 返回rgba(r,g,b,a)格式颜色
    },
  },
  // 防止组件复用不更新数据
  activated() {
    this.title = this.$route.params.title
    this.categoryId = this.$route.query.id
    this.getData()
  }
}
</script>

<style lang="less" scoped>
.news-card-list {
  margin: 0 1rem 2.5rem;
  .news-type-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    width: 100%;
    .title {
      line-height: 2.25rem;
      .news-icon {
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.375rem;
        vertical-align: middle;
        background: url(~assets/img/icon/xinwen.png) no-repeat;
        background-size: contain;
      }
      span {
        margin: 0 1.25rem 0 0;
        vertical-align: bottom;
        font-size: 1.25rem;
        line-height: 2.25rem;
      }
    }
  }
  .news-card-wrap {
    .news-card {
      box-sizing: border-box;
      transition: all 0.3s;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border-radius: 0.25rem;
      padding: 0 0.5rem;
      &:hover {
        transform: translateY(-0.675rem);
      }
      a {
        display: block;
        background: #ffffff90;
        .cover {
          text-align: center;
          line-height: 8rem;
          height: 8rem;
          background-repeat: no-repeat;
          background-size: cover;
          img {
            height: 6rem;
            vertical-align: middle;
          }
        }
        span {
          display: inline-block;
          font-size: 0.875rem;
          line-height: 1.25rem;
          margin: 0.625rem 0 0.5rem;
          height: 2.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 500;
          padding: 0 0.75rem;
        }
      }
    }
  }
}
/* 实现页面 5 等分 */
@media screen and (min-width: 992px) {
  .el-col-md-4-8 {
    width: 20%;
  }
}
</style>