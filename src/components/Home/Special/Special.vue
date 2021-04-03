<template>
  <div class="special">
    <div class="special-wrap">
      <div class="special-title">
        <span class="icon">🐸</span>
        <em class="title">专题</em>
      </div>
      <zk-row class="special-content">
        <special-item :specialTitles="specialTitles" />
      </zk-row>
    </div>
  </div>
</template>

<script>
  // 导入请求
  import require from 'network/index.js'

  // 组件
  import ZkRow from 'components/common/Row.vue'
  import SpecialItem from 'components/Home/Special/SpecialItem.vue'

  export default {
    name: 'Special',
    data() {
      return {
        specialTitles: [],
      }
    },
    created() {
      const loading = this.$loading({
        target: '.special-content'
      })
      require('/special').then(res => {
        this.specialTitles = res
        this.$nextTick(() => {
          loading.close()
        })
      }).catch(err => {
        console.log(err);
      })
    },
    components: {
      ZkRow,
      SpecialItem
    }
  }
</script>

<style lang="less" scoped>
  .special {
    position: relative;
    .special-wrap {
      margin: 1rem auto 0;
      width: 98%;
      .special-title {
        margin-bottom: 0.375rem;
        display: flex;
        justify-content: flex-start;
        line-height: 2rem;
        padding-left: 1rem;
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
      .special-content {
        overflow: hidden;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: flex-start;
        padding: 0 0.75rem;
      }
    }
  }
</style>