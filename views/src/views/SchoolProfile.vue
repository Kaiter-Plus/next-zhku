<template>
  <div class="school-profile">
    <div class="school-profile-wrap">
      <div class="school-profile-title">
        <i class="icon">🌹</i>
        <em class="title">学校概况</em>
      </div>
      <el-row>
        <!-- 侧边栏 -->
        <el-col :span="4">
          <side-bar :schoolProfileList="schoolProfileList" />
        </el-col>
        <!-- 内容区 -->
        <el-col :span="20">
          <keep-alive>
            <router-view class="school-profile-panel" />
          </keep-alive>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import SideBar from '../components/SchoolProfile/SideBar.vue'


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
        margin-left: 16px;
        .icon {
          width: 32px;
          height: 32px;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          text-align: center;
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
      .school-profile-panel {
        border-top: 1px solid #e6e6e6;
      }
    }
  }
</style>