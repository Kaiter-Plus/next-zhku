<template>
  <div class="news-card-list">
    <header v-if="category" class="news-type-title">
      <div class="title">
        <div class="news-icon"></div>
        <a href="javascript:void(0)">{{ category.description }}</a>
      </div>
      <div class="exchange-btn">
        <div class="btn btn-change" @click="changeNews()">
          <i class="icon el-icon-refresh"></i>
          <span>换一批</span>
        </div>
        <a class="btn more" href="javascript:void(0)">
          <span>更多</span>
          <i class="icon el-icon-arrow-right"></i>
        </a>
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
  </div>
</template>

<script>
// 请求
import { getNews } from 'api/news'

export default {
  name: 'NewsCardList',
  data() {
    return {
      newsList: null,
      // 加载状态
      loading: false,
      page: 1,
      total: 0,
      showCover: true
    }
  },
  props: {
    category: Object
  },
  created() {
    this.getData()
  },
  methods: {
    changeNews() {
      this.page = this.getRandomNum(Math.ceil(this.total / 10))
      console.log(this.page);
      this.getData()
    },
    // 随机生成十六进制颜色
    randomRgbaColor() { // 随机生成RGBA颜色
      var r = Math.floor(Math.random() * 256); // 随机生成256以内r值
      var g = Math.floor(Math.random() * 256); // 随机生成256以内g值
      var b = Math.floor(Math.random() * 256); // 随机生成256以内b值
      var alpha = Math.random(); // 随机生成1以内a值
      return `rgba(${r},${g},${b},${alpha})`; // 返回rgba(r,g,b,a)格式颜色
    },
    getData() {
      // 加载动画
      this.loading = true
      getNews(this.category.id, this.page, this.showCover).then(({ data }) => {
        this.newsList = data.list
        this.total = data.total
        this.loading = false
      })
    },
    getRandomNum(max) {
      return Math.floor(Math.random() * max) + 1
    }
  }
}
</script>

<style lang="less" scoped>
.news-card-list {
  margin-bottom: 2.5rem;
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
      a {
        margin: 0 1.25rem 0 0;
        vertical-align: bottom;
        font-size: 1.25rem;
        line-height: 2.25rem;
      }
    }
    .exchange-btn {
      display: flex;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 1.375rem;
        text-align: center;
        border: 1px solid silver;
        border-radius: 2px;
        font-size: 0.75rem;
        color: #505050;
        line-height: 1.5rem;
        box-sizing: border-box;
      }
      .btn-change {
        width: 4.5rem;
        transition: all 0.3s;
        .icon {
          display: inline-block;
          transition: all 0.3s;
          transform-origin: center;
          margin-right: 2px;
        }
        span {
          display: inline-block;
        }
        &:hover {
          color: #5cc989;
          .icon {
            transform: rotateZ(720deg);
          }
        }
      }
    }
    .more {
      width: 3.625rem;
      margin-left: 0.75rem;
      span {
        display: inline-block;
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