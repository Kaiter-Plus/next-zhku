<template>
  <div class="friend-link">
    <div class="friend-link-wrap">
      <div class="link-title">
        <div class="friend-link-icon"></div>
        <em class="title">友情链接</em>
      </div>
      <tabs type="border-card" class="link-tabs">
        <tab-pane v-for="category in categories" :label="category.description" :key="category.id">
          <link-content :category="category.id"></link-content>
        </tab-pane>
      </tabs>
    </div>
  </div>
</template>

<script>
  // 请求
  import require from 'network/index.js'

  // 组件
  import ZkRow from 'components/common/layout/Row.vue'
  import ZkCol from 'components/common/layout/Col.vue'
  import Tabs from 'components/common/tabs/Tabs.vue'
  import TabPane from 'components/common/tabs/TabPane.vue'
  import LinkContent from './LinkContent.vue'

  export default {
    name: 'FriendLink',
    components: {
      ZkRow,
      ZkCol,
      Tabs,
      TabPane,
      LinkContent
    },
    data() {
      return {
        categories: null
      }
    },
    created() {
      require('/public/link/categories').then(({ data }) => {
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