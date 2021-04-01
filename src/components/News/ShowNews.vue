<template>
  <div class="news">
    <el-row class="news-container" :gutter="10">
      <el-col tag="aside" class="news-aside" :span="6">
        <aside-item v-for="i in 4" :key="i"></aside-item>
      </el-col>
      <el-col tag="main" class="news-main" :span="18">
        <div class="news-content-box">
          <div class="news-header-box">
            <div class="news-title-box">
              <h1 class="news-title">我校举行健康养殖创新研究院学术委员会成立大会暨第一届学术委员会会议</h1>
            </div>
            <div class="news-info-box">
              <img src="https://news.zhku.edu.cn/images/medal.png" alt="排行榜" class="ranking-list">
              <div class="info">
                <span>健康养殖创新研究院</span>
                <span>2021-03-29 17:22:16</span>
              </div>
            </div>
          </div>
          <article class="news-content">
            <p>
              3月28日下午，我校在海珠校区行政楼409会议室召开了健康养殖创新研究院学术委员会成立大会暨第一届学术委员会会议，会议由肖更生副校长主持。科技处处长周新华宣读了学校《关于同意成立健康养殖创新研究院学术委员会的批复》，中国工程院院士麦康森、陈焕春，广东省农业科学院廖明教授，中国农业大学呙于明教授，华南农业大学江青艳教授、吴珍芳教授、李永涛教授，华南理工大学赵谋明教授、中国水产科学研究院珠江水产研究所卢迈新研究员、仲恺农业工程学院田允波教授、林蠡教授、王玮教授等当选为健康养殖创新研究院第一届学术委员会委员，肖更生副校长为学术委员会委员颁发了聘书。健康养殖创新研究院全体教师参加了会议。
            </p>
            <el-image src="https://news.zhku.edu.cn/__local/0/71/C6/81439BF49CBA2718505FF9C7C96_1224EC3A_3EF2C.jpg"
              fit="fill" :lazy="true" :preview-src-list="srcList">
              <div slot="placeholder" class="image-slot">
                <span class="tip">加载中...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <p>
              会议一致推举麦康森院士担任学术委员会主任，廖明教授、田允波教授担任副主任，王玮教授担任学委会秘书。
            </p>
            <el-image src="https://news.zhku.edu.cn/__local/A/40/84/1FCB132D8A840506681027A1BBF_BB978A11_17D53.jpg"
              fit="fill" :lazy="true" :preview-src-list="srcList">
              <div slot="placeholder" class="image-slot">
                <span class="tip">加载中...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <el-image src="https://news.zhku.edu.cn/__local/2/ED/FE/51915D9480D65BF883CEDB0D345_B73C3358_17B9A.jpg"
              fit="fill" :lazy="true" :preview-src-list="srcList">
              <div slot="placeholder" class="image-slot">
                <span class="tip">加载中...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <el-image src="https://news.zhku.edu.cn/__local/A/6D/EE/8F6399249FEEFBB86C06FBE14C0_2B7F82AA_2EB5A.jpg"
              fit="fill" :lazy="true" :preview-src-list="srcList">
              <div slot="placeholder" class="image-slot">
                <span class="tip">加载中...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <p>
              委员们首先审议并通过了《仲恺农业工程学院健康养殖创新研究院学术会员会章程》，随后，听取了研究院执行院长黄燕华教授代表研究院作的科研工作进展汇报、研究院“十四五”科研规划以及2021年科研工作计划。黄院长从平台建设、团队组建、研究内容、阶段性成果等方面总结汇报了研究院建立一年多以来的工作，分析了目前存在的不足和下一步的努力方向，围绕“方向聚焦、平台搭建、成果培育、人才托举”等方面，对“十四五”期间的科研规划进行了展望，并就2021年的科研工作计划进行了简要汇报。
            </p>
            <p>
              学术委员会委员高度评价了健康养殖创新研究院在一年多时间内的工作进度和取得的成绩，表示了对学校发展的关注和期望，同时针对研究院“十四五”发展规划提出了中肯的意见和建设性的建议。委员们一致提出，研究院目标定位、考核指标首先要服从服务于学校整体定位与远期发展目标，还应充分考虑学科归属和依托，应进一步凝练方向，本着差异化发展的思路，瞄准国家重大需求，紧盯养殖业共性关键技术，通过密切的校企合作，以解决产业问题为目标和导向，特别是在新型饲料蛋白原料开发与功能解析、广东特色肉鸽产业关键技术研究方面，借鉴如水禽创新团队等的成功经验，同时结合环境调控与资源化利用、动物性食品开发等环节，充分整合现有资源与优势，实现学科交叉互补，助力绿色养殖。
            </p>
            <p>
              学术委员会主任麦康森院士还特别强调和鼓励研究院师生，科研方向凝练需要渐进，从文字表达的凝练到学术思想的凝练都是磨练的过程，要打牢基础，跳出“五唯”，靠实际成绩来实现助力学校发展的目标。
            </p>
            <p>
              最后，肖更生副校长代表学校对仲恺农业工程学院健康养殖创新研究院学术委员会的成立表示祝贺，对各位专家莅临学校指导表示热烈欢迎，他简要介绍了学校的发展目标定位，研究院建设的历史背景。要求研究院要尊重、重视学术委员会，秉承“教授治学”、“专家治院”的理念，充分发挥学术委员会在研究院发展中的巨大作用。他鼓励研究院师生瞄准行业重大需求，在学术委员会的引导和监督下，开展顶天立地科学研究和技术攻关，为广东地区畜牧水产等相关行业的发展提供技术支撑。最后，他表示，将一如继往地支持研究院的建设，为打造高水平研究平台和创建高水平应用型大学提供平台和智力保障。
            </p>
            <el-image src="https://news.zhku.edu.cn/__local/B/1E/94/C73D633CB19DF61839824505A84_C477562B_340EE.jpg"
              fit="fill" :lazy="true" :preview-src-list="srcList">
              <div slot="placeholder" class="image-slot">
                <span class="tip">加载中...</span>
              </div>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <p>
              会后，当选的学术委员会委员集体在行政楼前合影留念并参观研究院平台。
            </p>
            <p>
              健康养殖创新研究院学术委员会的成立及第一届学术委员会会议的召开，充分体现了学校尊重专家的办学态度，为研究院的发展与定位指明了方向。研究院师生将牢记使命，遵循校训，聚焦绿色发展，坚持融合创新，为实现学校建设特色鲜明的高水平应用型大学总体目标作出应有的贡献。
            </p>
          </article>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import AsideItem from 'components/content/AsideItem.vue'
  export default {
    name: 'News',
    data() {
      return {
        srcList: [
          'https://news.zhku.edu.cn/__local/0/71/C6/81439BF49CBA2718505FF9C7C96_1224EC3A_3EF2C.jpg',
          'https://news.zhku.edu.cn/__local/A/40/84/1FCB132D8A840506681027A1BBF_BB978A11_17D53.jpg',
          'https://news.zhku.edu.cn/__local/2/ED/FE/51915D9480D65BF883CEDB0D345_B73C3358_17B9A.jpg',
          'https://news.zhku.edu.cn/__local/A/6D/EE/8F6399249FEEFBB86C06FBE14C0_2B7F82AA_2EB5A.jpg',
          'https://news.zhku.edu.cn/__local/B/1E/94/C73D633CB19DF61839824505A84_C477562B_340EE.jpg'
        ]
      }
    },
    components: {
      AsideItem
    }
  }
</script>

<style lang="less" scoped>
  .news-container {
    .news-aside {
      margin-top: 1rem;
      position: sticky;
      top: 3.75rem;
      @media screen and (max-width: 992px) {
        display: none;
      }
    }
    .news-main {
      @media screen and (max-width: 992px) {
        width: 100%;
      }
      .news-content-box {
        margin-top: 1rem;
        position: relative;
        padding: 0 1.5rem 1rem;
        background: #fff;
        .news-header-box {
          border-bottom: 1px solid #f5f6f7;
          padding-top: 0.5rem;
          z-index: 9;
          background-color: #fff;
          .news-title-box {
            margin-bottom: 0.5rem;
            .news-title {
              font-size: 1.75rem;
              word-wrap: break-word;
              color: #222226;
              font-weight: 600;
              line-height: 2rem;
              margin: 0;
              word-break: break-all;
            }
          }
          .news-info-box {
            position: relative;
            background: #f8f8f8;
            border-radius: 0.25rem;
            font-size: 0.875rem;
            line-height: 2rem;
            color: #999aaa;
            display: flex;
            .ranking-list {
              width: 1.5rem;
              height: 1.5rem;
              margin: 0.25rem;
              margin-right: 12px;
            }
            span {
              color: #555666;
              margin-right: 20px;
              vertical-align: top;
              line-height: 32px;
            }
          }
        }
        .news-content {
          position: relative;
          padding-top: 16px;
          word-wrap: break-word;
          p {
            text-indent: 2em;
            color: #4d4d4d;
            font-weight: 400;
            line-height: 26px;
            margin: 0 0 16px;
          }
          /deep/ .el-image,
          img {
            width: 100%;
            margin: 0 0 16px;
          }
        }
      }
    }
  }
</style>