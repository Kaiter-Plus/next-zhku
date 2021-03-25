<template>
  <header class="main">
    <div class="content-wrap">
      <!-- 轮播图开始 -->
      <div class="carousel-container">
        <el-carousel height="21.875rem">
          <!-- <el-carousel-item v-for="image in images" :key="image.id">
          <img class="carousel-img" :src="image.src" alt="images.alt">
        </el-carousel-item> -->
          <el-carousel-item>
            <div class="carousel-img one"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-img two"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-img three"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-img four"></div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="carousel-img five"></div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 轮播图结束 -->
      <!-- 主要内容开始 -->
      <news-wrap v-for="(title, index) in titles" :title="title" :key="index"></news-wrap>
      <!-- 主要内容结束 -->
      <!-- 专题开始 -->
      <special />
      <!-- 专题结束 -->
      <!-- 友情链接开始 -->
      <friend-link v-for="(linkTitle, index) in links" :linkTitle="linkTitle" :key="index"></friend-link>
      <!-- 友情链接结束 -->
    </div>
  </header>
</template>

<script>
  import NewsWrap from 'components/NewsWrap/NewsWrap.vue'
  import FriendLink from 'components/FriendLink/FriendLink.vue'
  import Special from '../Special/Special.vue'

  export default {
    name: 'MainContainer',
    data() {
      return {
        titles: [
          '学校要闻',
          '校园快讯',
          '讲座预告',
          '媒体仲恺',
          '通知'
        ],
        links: [
          '校内链接',
          '管理机构',
          '教学机构',
          '教辅及研究机构',
          '学生园地',
          '友情链接'
        ]
      }
    },
    // props: {
    //   images: Array
    // },
    components: {
      NewsWrap,
      FriendLink,
      Special
    }
  }
</script>

<style lang="less" scoped>
  .main {
    .content-wrap {
      margin: 0.75rem auto;
      background: #fff;
      overflow: hidden;
      border-radius: 0.2rem;
      @media screen and (max-width: 1280px) {
        width: 1004px;
      }
      @media screen and (min-width: 1281px) and (max-width: 1439px) {
        width: 1004px;
      }
      @media screen and (min-width: 1440px) and (max-width: 1919px) {
        width: 1232px;
      }
      @media screen and (min-width: 1920px) {
        width: 1692px;
      }
      .carousel-container {
        width: 98%;
        margin: 0.75rem auto;
        .carousel-img {
          width: 100%;
          height: 21.875rem;
        }
        .one {
          background-color: red;
        }
        .two {
          background-color: yellow;
        }
        .three {
          background-color: blue;
        }
        .four {
          background-color: green;
        }
        .five {
          background-color: gray;
        }
        /deep/ .el-carousel__arrow {
          color: #27ae60;
          background-color: rgba(39, 174, 96, 0.11);
        }
        /deep/ .el-carousel__button {
          background-color: #27ae60;
        }
      }
    }
  }
</style>