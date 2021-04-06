<template>
  <div class="news-card-list" ref="newsCardList">
    <header v-if="news" class="news-type-title">
      <div class="title">
        <div class="news-icon"></div>
        <a :href="`https://news.zhku.edu.cn/${news.href}`">{{ news.title }}</a>
      </div>
      <div class="exchange-btn">
        <div class="btn btn-change" @click="changeNews(news.href.split('.')[0])">
          <i class="icon iconfont icon-shuaxin"></i>
          <span>换一批</span>
        </div>
        <a class="btn more" :href="`https://news.zhku.edu.cn/${news.href}`">
          <span>更多</span>
          <i class="icon iconfont icon-you"></i>
        </a>
      </div>
    </header>
    <div class="news-card-wrap">
      <zk-row>
        <zk-col :span="12" :sm="6" md="4-8" v-for="newsTitle in newsTitles" class="news-card" :title="newsTitle.title"
          :key="newsTitle.id">
          <router-link :to="`/news/${newsTitle.href}`">
            <div class="cover" :style="{background: randomRgbaColor()}">
              <img src="~assets/img/cover.png" alt="cover">
            </div>
            <span>
              {{ newsTitle.title }}
            </span>
          </router-link>
        </zk-col>
      </zk-row>
    </div>
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  // 组件
  import ZkRow from 'components/common/layout/Row.vue'
  import ZkCol from 'components/common/layout/Col.vue'

  export default {
    name: 'NewsCard',
    data() {
      return {
        newsTitles: null,
        totalPage: null
      }
    },
    props: {
      news: Object
    },
    mounted() {
      this.getData(this.news.href)
    },
    methods: {
      changeNews(url) {
        this.getData(`${url}/${this.getRandomNum(this.totalPage)}.htm`)
      },
      //随机生成十六进制颜色
      randomRgbaColor() { //随机生成RGBA颜色
        var r = Math.floor(Math.random() * 256); //随机生成256以内r值
        var g = Math.floor(Math.random() * 256); //随机生成256以内g值
        var b = Math.floor(Math.random() * 256); //随机生成256以内b值
        var alpha = Math.random(); //随机生成1以内a值
        return `rgba(${r},${g},${b},${alpha})`; //返回rgba(r,g,b,a)格式颜色
      },
      getData(url) {
        // 加载动画
        const loading = this.$loading({
          target: this.$refs.newsCardList
        })
        require(`/news/${url}`).then(res => {
          this.newsTitles = res.news
          this.totalPage = res.totalPage
          // 数据请求完场，关闭加载动画
          this.$nextTick(() => {
            loading.close()
          })
        }).catch(err => {
          // 错误处理待写
          console.error(err)
        })
      },
      getRandomNum(max) {
        return Math.floor(Math.random() * (max - 2)) + 1
      }
    },
    components: {
      ZkRow,
      ZkCol
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
            transform: translateY(-2px);
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
        span {
          display: inline-block;
          transform: translateY(-2px);
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
            line-height: 8rem;
            text-align: center;
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
    .col-md-4-8 {
      width: 20%;
    }
  }
</style>