<template>
  <div class="friend-link">
    <div class="friend-link-wrap">
      <div class="link-title">
        <span class="icon">🌹</span>
        <em class="title">友情链接</em>
      </div>
      <el-tabs type="border-card" class="link-tabs">
        <el-tab-pane v-for="link in links" :label="link.title" :key="link.id">
          <el-row class="link-content">
            <el-col class="link-item" v-for="subLink in link.children" :key="subLink.id">
              <a :href="subLink.href">
                <span :title="subLink.name">{{subLink.title}}</span>
              </a>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  export default {
    name: 'FriendLink',
    data() {
      return {
        links: Array
      }
    },
    created() {
      // 加载动画
      const loading = this.$loading({
        target: '.link-tabs'
      })
      require(`/friendLink`).then(res => {
        this.links = res
        // 数据请求完场，关闭加载动画
        this.$nextTick(() => {
          loading.close()
        })
      }).catch(err => {
        // 错误处理待写
        console.error(err)
      })
    },
  }
</script>

<style lang="less" scoped>
  .friend-link {
    position: relative;
    .friend-link-wrap {
      margin: 1rem auto 0;
      width: 98%;
      .link-title {
        margin-bottom: 0.375rem;
        display: flex;
        justify-content: flex-start;
        line-height: 2rem;
        padding: 0.3rem 0 0 1rem;
        @media screen and (max-width: 1200px) {
          padding-left: 0;
        }
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
      .link-tabs {
        margin: 1.5rem;
      }
      .link-content {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .link-item {
          width: auto;
          margin-right: 1rem;
        }
        a {
          align-items: center;
          text-decoration: none;
          color: #555666;
          display: inline-block;
          border: 1px solid #e8e8ed;
          padding: 0 2.2rem;
          border-radius: 0.25rem;
          font-size: 0.9375rem;
          margin-bottom: 0.3125rem;
          @media screen and (max-width: 1430px) {
            padding: 0 1.7rem;
          }
          @media screen and (max-width: 1300px) {
            padding: 0 1.5rem;
          }
          @media screen and (max-width: 540px) {
            padding: 0px 1.2rem;
          }
          @media screen and (max-width: 490px) {
            padding: 0px 0.2rem;
            font-size: 14px;
          }
          &:link,
          &:visited {
            color: #555666;
          }
          &:hover,
          &:active {
            border: 1px solid rgba(39, 174, 96, 0.11);
          }
          span {
            display: inline-block;
            // width: 3.75rem;
            line-height: 2rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
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
    /deep/ .el-tabs--border-card > .el-tabs__header {
      background-color: rgba(31, 145, 78, 0.11);
    }
    /deep/ .el-tabs__nav-next,
    /deep/ .el-tabs__nav-prev {
      line-height: 40px;
      font-size: 20px;
    }
  }
</style>