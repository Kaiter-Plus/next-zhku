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
      <div class="news-item-wrap">
        <ul class="item-list">
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascritp: void 0">
              <div>
                <p>人文与社会科学学院师生在“挑战杯”仲园大学生课外学术科技作品竞赛中再获佳绩</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
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
          justify-content: flex-start;
          align-content: flex-start;
          width: 100%;
          padding: 0 0.75rem;
          .item {
            display: flex;
            height: 2.5rem;
            margin-right: 0.75rem;
            margin-bottom: 0.5rem;
            background: #fff;
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
            margin-top: 0.25rem;
            border-radius: 0.25rem;
            width: 48%;
            margin-left: 4px;
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