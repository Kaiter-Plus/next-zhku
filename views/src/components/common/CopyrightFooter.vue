<template>
  <div class="copyright-footer">
    <el-row class="copyright-footer-wrap">
      <el-col :span="24">
        <ul class="copyright-footer-top">
          <li>版权所有</li>
          <li>中国·广东·仲恺农业工程学院</li>
          <li>邮编：510225</li>
        </ul>
      </el-col>
      <el-col :span="24">
        <ul class="copyright-footer-bottom">
          <li>当天访问量：000008</li>
          <li>站点总访问量：00451989</li>
          <li>备案/许可证号：粤ICP备05008893号</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'CopyrightFooter'
  }
</script>

<style lang="less" scoped>
  .copyright-footer {
    background: #fff;
    margin-top: 2rem;
    .copyright-footer-wrap {
      margin: 0 auto;
      box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.05);
      background: #fff;
      padding: 1.5rem 2.125rem 1.25rem;
      box-sizing: border-box;
      .copyright-footer-top,
      .copyright-footer-bottom {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
          margin: 0 8px;
          color: #999aaa;
          font-size: 0.875rem;
          line-height: 1.5rem;
        }
      }
    }
  }
</style>