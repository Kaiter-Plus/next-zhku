<template>
  <div class="copyright-footer" v-if="footer">
    <el-row class="copyright-footer-wrap">
      <el-col :span="24">
        <ul class="copyright-footer-top">
          <li>版权所有</li>
          <li>{{ footer.address }}</li>
          <li>邮编：{{ footer.postCode }}</li>
        </ul>
      </el-col>
      <el-col :span="24">
        <ul class="copyright-footer-bottom">
          <li>
            <span>当天访问量：{{ footer.visitsToday }}</span>
          </li>
          <li>
            <span>站点总访问量：{{ footer.visitsTotal }}</span>
          </li>
          <li>备案/许可证号：{{ footer.record }}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { fetchFooter } from 'api/footer.js'

  export default {
    name: 'CopyrightFooter',
    data() {
      return {
        footer: null
      }
    },
    created() {
      fetchFooter().then(({ data }) => {
        this.footer = data
      })
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