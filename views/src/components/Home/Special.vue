<template>
  <div class="special">
    <div class="special-wrap">
      <div class="special-title">
        <span class="icon">🐸</span>
        <em class="title">专题</em>
      </div>
      <el-row class="special-content">
        <el-col class="special-item-wrap" :span="11" :xs="{span: 22}">
          <ul>
            <li v-for="i in 4" :key="i">
              <a href="javascript:void(0)">
                <img src="~assets/img/tip.png">
                <img src="~assets/img/tipHover.png">
                <span>{{`专题标题${i}`}}</span>
              </a>
            </li>
          </ul>
          <div class="special-item-title">
            <div class="special-item-title-left">
              <a href="javascript:void(0)">
                <span>🚩党史学习教育</span>
              </a>
            </div>
            <div class="special-item-title-right">
              <a href="javascript:void(0)">进入专题</a>
            </div>
          </div>
        </el-col>
        <el-col class="special-item-wrap" :span="11" :xs="{span: 22}">
          <ul>
            <li v-for="i in 4" :key="i">
              <a href="javascript:void(0)">
                <img src="~assets/img/tip.png">
                <img src="~assets/img/tipHover.png">
                <span>{{`专题标题${i}`}}</span>
              </a>
            </li>
          </ul>
          <div class="special-item-title">
            <div class="special-item-title-left">
              <a href="javascript:void(0)">
                <span>🚩学习宣传贯彻习近平总书记重要讲话重要指示精神</span>
              </a>
            </div>
            <div class="special-item-title-right">
              <a href="javascript:void(0)">进入专题</a>
            </div>
          </div>
        </el-col>
        <el-col class="special-item-wrap" :span="11" :xs="{span: 22}">
          <ul>
            <li v-for="i in 4" :key="i">
              <a href="javascript:void(0)">
                <img src="~assets/img/tip.png">
                <img src="~assets/img/tipHover.png">
                <span>{{`专题标题${i}`}}</span>
              </a>
            </li>
          </ul>
          <div class="special-item-title">
            <div class="special-item-title-left">
              <a href="javascript:void(0)">
                <span>🚩智慧校园建设</span>
              </a>
            </div>
            <div class="special-item-title-right">
              <a href="javascript:void(0)">进入专题</a>
            </div>
          </div>
        </el-col>
        <el-col class="special-item-wrap" :span="11" :xs="{span: 22}">
          <ul>
            <li v-for="i in 4" :key="i">
              <a href="javascript:void(0)">
                <img src="~assets/img/tip.png">
                <img src="~assets/img/tipHover.png">
                <span>{{`专题标题${i}`}}</span>
              </a>
            </li>
          </ul>
          <div class="special-item-title">
            <div class="special-item-title-left">
              <a href="javascript:void(0)">
                <span>🚩“不忘初心、牢记使命”主题教育</span>
              </a>
            </div>
            <div class="special-item-title-right">
              <a href="javascript:void(0)">进入专题</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Special',
    props: {
      specialTitle: Array
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
        .special-item-wrap {
          height: 13rem;
          background: #fff;
          box-shadow: 0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.1);
          border-radius: 0.25rem;
          margin: 6px;
          ul {
            height: 8.9375rem;
            border-bottom: 1px solid #e8e8ed;
            padding: 1rem 1rem 0;
            a {
              text-decoration: none;
              display: flex;
              align-items: center;
              line-height: 1.25rem;
              margin-bottom: 1rem;
              font-size: 0.875rem;
              img {
                width: 0.5rem;
                height: 0.5rem;
              }
              img:nth-child(2) {
                display: none;
              }
              &:hover {
                img:nth-child(1) {
                  display: none;
                }
                img:nth-child(2) {
                  display: inline-block;
                }
              }
              span {
                margin-left: 8px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                word-break: break-word;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
              }
            }
          }
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
    }
  }
</style>