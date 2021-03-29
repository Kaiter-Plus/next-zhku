<template>
  <div class="school-profile">
    <div class="school-profile-wrap">
      <div class="school-profile-title">
        <el-page-header @back="$router.go(-1)" content="学校概况"></el-page-header>
      </div>
      <el-row>
        <!-- 侧边栏 -->
        <el-col :span="4">
          <side-bar :schoolProfileList="schoolProfileList" />
        </el-col>
        <!-- 内容区 -->
        <el-col :span="20" class="main-content-wrap">
          <router-view class="school-profile-panel" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import SideBar from 'components/SchoolProfile/SideBar.vue'


  export default {
    name: 'SchoolProfile',
    data() {
      return {
        schoolProfileList: [
          {
            title: '学校介绍',
            path: 'school-introduce'
          },
          {
            title: '现任领导',
            path: 'incumbent'
          },
          {
            title: '领导关怀',
            path: 'leader-care'
          },
          {
            title: '校园风光',
            path: 'school-scenery'
          },
          {
            title: '学校章程',
            path: 'school-constitution'
          },
        ]
      }
    },
    components: {
      SideBar
    }
  }
</script>

<style lang="less" scoped>
  .school-profile {
    .school-profile-wrap {
      margin: 1rem;
      .school-profile-title {
        margin-bottom: 0.375rem;
        display: flex;
        justify-content: flex-start;
        line-height: 2rem;
        margin-left: 1rem;
        /deep/ .el-page-header__left {
          cursor: pointer;
          &:hover,
          &:active {
            color: #5cc989;
          }
        }
      }
      .school-profile-panel {
        border: 1px solid #e6e6e6;
        padding: 2rem;
      }
      @media screen and (max-width: 992px) {
        .main-content-wrap {
          width: 100%;
        }
        /deep/ .el-page-header__left * {
          font-size: 0.5rem;
        }
        /deep/ .el-page-header__content {
          font-size: 0.75rem;
        }
      }
    }
  }
</style>