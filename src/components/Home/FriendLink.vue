<template>
  <div class="friend-link">
    <div class="friend-link-wrap">
      <div class="link-title">
        <div class="friend-link-icon"></div>
        <em class="title">友情链接</em>
      </div>
      <tabs type="border-card" class="link-tabs">
        <tab-pane v-for="link in friendLink" :label="link.title" :key="link.id">
          <zk-row class="link-content">
            <zk-col class="link-item" v-for="subLink in link.children" :key="subLink.id">
              <a :href="subLink.href">
                <span :title="subLink.name">{{subLink.title}}</span>
              </a>
            </zk-col>
          </zk-row>
        </tab-pane>
      </tabs>
    </div>
  </div>
</template>

<script>
  // 组件
  import ZkRow from 'components/common/layout/Row.vue'
  import ZkCol from 'components/common/layout/Col.vue'
  import Tabs from 'components/common/tabs/Tabs.vue'
  import TabPane from 'components/common/tabs/TabPane.vue'

  export default {
    name: 'FriendLink',
    props: {
      friendLink: Array
    },
    components: {
      ZkRow,
      ZkCol,
      Tabs,
      TabPane
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
          border: 1px solid #b5e7cb;
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
    /deep/ .tabs--border-card {
      background-color: #ffffff90;
    }
    /deep/ .tabs--border-card > .tabs__header .tabs__item:hover,
    /deep/ .tabs--border-card > .tabs__header .tabs__item.is-active {
      background-color: #ffffff80;
    }
    /deep/ .tabs--border-card > .tabs__header.is-top {
      background-color: rgba(31, 145, 78, 0.11);
    }
    /deep/ .tabs__nav-next,
    /deep/ .tabs__nav-prev {
      line-height: 40px;
      font-size: 20px;
    }
  }
</style>