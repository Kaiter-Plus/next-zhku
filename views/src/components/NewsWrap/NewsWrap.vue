<template>
  <div class="news-wrap">
    <div class="news-container">
      <div class="news-title">
        <div class="title-wrap">
          <span class="icon">⭐</span>
          <em class="title">{{title}}</em>
        </div>
        <div class="news-more">
          <a href="javascript:void 0" class="more">查看更多>></a>
        </div>
      </div>
      <el-row>
        <el-col class="news-item-wrap" :span="24">
          <el-row class="item-list">
            <el-col class="item" :span="11" :xs="{span: 22}" v-for="i in 10" :key="i">
              <a href="javascritp:void(0)">
                <div>
                  <p>{{`新闻列表${i}`}}</p>
                </div>
              </a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsWrap',
    props: {
      title: String
    }
  }
</script>

<style lang="less" scoped>
  .news-wrap {
    position: relative;
    .news-container {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin: 1rem auto 0;
      overflow: hidden;
      width: 98%;
      height: 20rem;
      @media screen and (max-width: 768px) {
        height: 18.5rem;
      }
      .news-title {
        margin-bottom: 0.375rem;
        display: flex;
        justify-content: flex-start;
        line-height: 2rem;
        .title-wrap {
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
        .news-more {
          margin: 0 2.0625rem 0 auto;
          .more {
            padding: 4px;
            text-align: center;
            color: #27ae60;
            font-size: 14px;
            width: 6.625rem;
            height: 1.5rem;
            text-decoration: none;
            background: rgba(39, 174, 96, 0.05);
            border-radius: 4px;
            border: 1px solid rgba(39, 174, 96, 0.11);
          }
        }
      }
      .news-item-wrap {
        flex: 1;
        overflow: hidden;
        .item-list {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-content: flex-start;
          width: 100%;
          .item {
            display: flex;
            height: 2.5rem;
            margin: 0.25rem 0.625rem 0.5rem;
            background: #fff;
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
            border-radius: 0.25rem;
            a {
              text-decoration: none;
              display: inline-block;
              width: 100%;
              height: 100%;
              div {
                height: 100%;
                padding: 0 10px;
                p {
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 2.5rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
    }
  }
</style>