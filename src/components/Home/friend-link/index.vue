<template>
  <div class="friend-link">
    <div class="friend-link-wrap">
      <div class="link-title">
        <div class="friend-link-icon"></div>
        <em class="title">友情链接</em>
      </div>
      <el-tabs type="border-card" class="link-tabs">
        <el-tab-pane v-for="category in categories" :label="category.description" :key="category.id">
          <link-content :category="category.id"></link-content>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  // 请求
  import { fetchLinkCategories } from 'api/link'

  // 组件
  import LinkContent from './LinkContent.vue'

  export default {
    name: 'FriendLink',
    components: { LinkContent },
    data() {
      return {
        categories: null
      }
    },
    created() {
      fetchLinkCategories().then(({ data }) => {
        this.categories = data
      })
    }
  }
</script>

<style lang="less" scoped>
  .friend-link {
    position: relative;
    .friend-link-wrap {
      margin: 1rem auto 0;
      width: 98%;
      overflow: hidden;
      .link-title {
        line-height: 2rem;
        padding: 0.3rem 0 0 1rem;
        @media screen and (max-width: 1200px) {
          padding-left: 0;
        }
        .friend-link-icon {
          display: inline-block;
          width: 1.25rem;
          height: 1.25rem;
          vertical-align: middle;
          background: url(~assets/img/icon/youqinglianjie.png) no-repeat;
          background-size: contain;
        }
        .title {
          color: #20232c;
          font-size: 18px;
          margin-left: 5px;
          font-weight: bolder;
          vertical-align: middle;
          font-style: normal;
        }
      }
      .link-tabs {
        margin: 0.625rem 1.5rem 1.5rem;
      }
    }
    /deep/ .el-tabs--border-card {
      background-color: #ffffff90;
    }
    /deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item:hover,
    /deep/ .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
      color: #27ae60;
      background-color: #ffffff80;
    }
    /deep/ .el-tabs--border-card > .el-tabs__header.is-top {
      background-color: rgba(31, 145, 78, 0.11);
    }
    /deep/ .el-tabs__nav-next,
    /deep/ .el-tabs__nav-prev {
      line-height: 40px;
      font-size: 20px;
    }
  }
</style>