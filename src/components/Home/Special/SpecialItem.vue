<template>
  <div class="special-item">
    <zk-col class="special-item-wrap" :span="11" :xs="{span: 22}" v-for="specialTitle in specialTitles"
      :key="specialTitle.id">
      <special-item-content :specialhref="specialTitle.href.split('/')[1]" />
      <div class="special-item-title">
        <div class="special-item-title-left">
          <a :href="specialTitle.href">
            <span>🚩{{specialTitle.title}}</span>
          </a>
        </div>
        <div class="special-item-title-right">
          <a :href="specialTitle.href">进入专题</a>
        </div>
      </div>
    </zk-col>
  </div>

</template>

<script>
  // 导入组件
  import ZkCol from 'components/common/Col.vue'
  import SpecialItemContent from 'components/Home/Special/SpecialItemContent.vue'

  export default {
    name: 'SpecialItem',
    props: {
      specialTitles: Array
    },
    computed: {
      specialhref() {
        return this.specialTitles.href.split('/')[1]
      }
    },
    components: {
      ZkCol,
      SpecialItemContent
    }
  }
</script>


<style lang="less" scoped>
  .special-item {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .special-item-wrap {
      height: 13rem;
      background: #ffffff90;
      box-shadow: 0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.1);
      border-radius: 0.25rem;
      margin: 6px;
      .special-item-title {
        display: flex;
        align-items: center;
        height: 3rem;
        justify-content: space-between;
        padding: 0 1rem;
        .special-item-title-left {
          width: 70%;
          a {
            display: flex;
            align-items: center;
            span {
              font-weight: 600;
              margin-left: 4px;
              font-size: 1.0625rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
        .special-item-title-right {
          width: 4.5rem;
          height: 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid #555666;
          white-space: nowrap;
          &:hover {
            border: 1px solid #27ae60;
          }
          a {
            display: inline-block;
            height: 100%;
            width: 100%;
            font-size: 14px;
            color: #555666;
            text-align: center;
            line-height: 24px;
          }
        }
      }
    }
  }
</style>