<template>
  <div class="news-card-list" ref="newsCardList">
    <header v-if="news" class="news-type-title">
      <div class="title">
        <a :href="news.href">{{ news.title }}</a>
      </div>
      <div class="exchange-btn">
        <div class="btn btn-change">
          <i class="icon el-icon-refresh"></i>
          <span>换一批</span>
        </div>
        <a class="btn more" :href="news.href">
          <span>更多</span>
          <i class="el-icon-arrow-right"></i>
        </a>
      </div>
    </header>
    <div class="news-card-wrap">
      <div v-for="newsTitle in newsTitles" class="news-card" :title="newsTitle.title" :key="newsTitle.id">
        <a :href="newsTitle.href">
          <img src="~assets/img/background/bg0.png" alt="test">
          <span>
            {{ newsTitle.title }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  export default {
    name: 'NewsCard',
    data() {
      return {
        newsTitles: null
      }
    },
    props: {
      news: Object
    },
    created() {
      // 加载动画
      const loading = this.$loading({
        target: this.$refs.newsCardList
      })
      require(`/news/${this.news.href}`).then(res => {
        this.newsTitles = res
        // 数据请求完场，关闭加载动画
        this.$nextTick(() => {
          loading.close()
        })
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })
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
      height: 2.25rem;
      width: 100%;
      .title {
        display: inline-flex;
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
          align-items: center;
          cursor: pointer;
          height: 1.375rem;
          text-align: center;
          border: 1px solid silver;
          border-radius: 2px;
          font-size: 0.75rem;
          color: #505050;
          line-height: 1.5rem;
        }
        .btn-change {
          width: 4.5rem;
          transition: all 0.3s;
          .icon {
            transition: all 0.3s;
            transform-origin: center;
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
        padding: 0 0 0 0.75rem;
        width: 3.625rem;
        margin-left: 0.75rem;
      }
    }
    .news-card-wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;
      .news-card {
        display: block;
        width: 18%;
        box-sizing: border-box;
        background: #ffffff90;
        transition: all 0.3s;
        margin: 1rem 0;
        border-radius: 0.375rem;
        &:hover {
          transform: translateY(-0.675rem);
        }
        img {
          width: 100%;
          height: 6rem;
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
</style>