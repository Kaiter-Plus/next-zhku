<template>
  <div class="copyright-footer">
    <zk-row class="copyright-footer-wrap">
      <zk-col :span="24">
        <ul class="copyright-footer-top">
          <li>版权所有</li>
          <li>中国·广东·仲恺农业工程学院</li>
          <li>邮编：510225</li>
        </ul>
      </zk-col>
      <zk-col :span="24">
        <ul class="copyright-footer-bottom">
          <li>
            <span>当天访问量：</span>
            <img v-if="visits" :src="visits.today" alt="当天访问量">
          </li>
          <li>
            <span>站点总访问量：</span>
            <img v-if="visits" :src="visits.total" alt="站点总访问量">
          </li>
          <li>备案/许可证号：粤ICP备05008893号</li>
        </ul>
      </zk-col>
    </zk-row>
  </div>
</template>

<script>
  // 组件
  import ZkRow from 'components/common/layout/Row.vue'
  import ZkCol from 'components/common/layout/Col.vue'

  export default {
    name: 'CopyrightFooter',
    props: {
      visits: null
    },
    components: {
      ZkRow,
      ZkCol
    }
  }
</script>

<style lang="less" scoped>
  .copyright-footer {
    background: #ffffff99;
    margin-top: 2rem;
    .copyright-footer-wrap {
      margin: 0 auto;
      box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05);
      padding: 1.5rem 2.125rem 1.25rem;
      box-sizing: border-box;
      .copyright-footer-top,
      .copyright-footer-bottom {
        font-size: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
          margin: 0 8px;
          color: #999aaa;
          font-size: 0.875rem;
          line-height: 1.5rem;
          img {
            margin: -2px 0;
          }
        }
      }
    }
  }
</style>