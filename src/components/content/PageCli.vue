<template>
  <div class="page-cli">
    <div class="page-cli-wrap">
      <div class="page-cli-title">
        <el-page-header @back="$router.go(-1)" :content="title"></el-page-header>
      </div>
      <zk-row>
        <!-- 侧边栏 -->
        <zk-col :span="4" class="page-side-bar">
          <side-bar :sideBarList="sideBarList" />
        </zk-col>
        <!-- 内容区 -->
        <zk-col :span="20" class="main-content-wrap">
          <router-view class="page-cli-panel" />
        </zk-col>
      </zk-row>
    </div>
  </div>
</template>

<script>
  // 组件
  import ZkRow from 'components/common/Row.vue'
  import ZkCol from 'components/common/Col.vue'
  import SideBar from 'components/content/SideBar.vue'

  export default {
    name: 'SchoolProfile',
    props: {
      title: String,
      sideBarList: Array
    },
    components: {
      ZkRow,
      ZkCol,
      SideBar
    }
  }
</script>

<style lang="less" scoped>
  .page-cli {
    .page-cli-wrap {
      margin: 1rem;
      .page-cli-title {
        margin-bottom: 0.375rem;
        display: flex;
        justify-content: flex-start;
        line-height: 2rem;
        margin-left: 1rem;
        @media screen and (min-width: 992px) {
          position: sticky;
          top: 3.75rem;
          z-index: 102;
        }
        /deep/ .el-page-header__left {
          cursor: pointer;
          &:hover,
          &:active {
            color: #5cc989;
          }
        }
      }
      .page-side-bar {
        @media screen and (min-width: 992px) {
          position: sticky;
          top: 90px;
        }
      }
      .page-cli-panel {
        border: 1px solid #e6e6e6;
      }
      @media screen and (max-width: 992px) {
        .main-content-wrap {
          width: 100%;
        }
        /deep/ .el-page-header__left * {
          font-size: 0.8rem;
        }
        /deep/ .el-page-header__content {
          font-size: 0.85rem;
        }
      }
    }
  }
</style>