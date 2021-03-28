<template>
  <div class="home">

    <!-- 新闻通知 -->
    <news-wrap v-for="(title, index) in titles" :title="title" :key="index" />

    <!-- 专题 -->
    <special />

    <!-- 友情链接 -->
    <friend-link :links="links" />

  </div>
</template>

<script>
  import NewsWrap from 'components/NewsWrap/NewsWrap.vue'
  import FriendLink from 'components/FriendLink/FriendLink.vue'
  import Special from 'components/Special/Special.vue'

  export default {
    name: 'Home',
    data() {
      return {
        titles: [
          '学校要闻',
          '校园快讯',
          '讲座预告',
          '媒体仲恺',
          '通知'
        ],
        links: [
          {
            title: '校内链接',
            children: [
              {
                name: '仲恺学报',
                link: 'http://journal.zhku.edu.cn/CN/volumn/home.shtml'
              },
              {
                name: 'OA系统',
                link: 'http://192.168.3.41/zkoa/'
              },
              {
                name: '课程中心',
                link: 'http://kc.zhku.edu.cn/'
              },
              {
                name: '采购招标',
                link: 'http://ztbbgs.zhku.edu.cn/zbgg.htm'
              },
              {
                name: '质量工程',
                link: 'http://old.zhku.edu.cn/zhilianggongchzhshi/zhilgongchzhshi.htm'
              },
              {
                name: '人才招聘',
                link: 'http://rsc.zhku.edu.cn/rczp.htm'
              },
              {
                name: '信息公开栏',
                link: 'http://xxgk.zhku.edu.cn/'
              },
              {
                name: '财务信息',
                link: 'http://192.168.2.23:8800/'
              },
              {
                name: '依法治校',
                link: 'http://yfzx.zhku.edu.cn/'
              },
              {
                name: '研究生教育',
                link: 'http://yjs.zhku.edu.cn/'
              },
              {
                name: 'VPN入口',
                link: 'https://vpn.zhku.edu.cn/por/login_psw.csp'
              },
              {
                name: '邮箱登陆',
                link: 'http://mail.zhku.edu.cn/'
              },
              {
                name: '工作安排',
                link: 'http://old.zhku.edu.cn/gzap.htm'
              },
              {
                name: '在线缴费',
                link: 'http://192.168.2.23:8812/'
              },
              {
                name: '易班',
                link: 'https://www.yiban.cn/login?go=http%3A%2F%2Fwww.yiban.cn%2F'
              },
              {
                name: '校长信箱',
                link: 'https://www.zhku.edu.cn/ldxx-2-2.jsp?urltype=tree.TreeTempUrl&wbtreeid=1136'
              },
              {
                name: '资产管理系统',
                link: 'http://192.168.2.59:8081/asset/'
              },
              {
                name: '仲恺大讲堂',
                link: 'https://www.zhku.edu.cn/fk.jsp?urltype=tree.TreeTempUrl&wbtreeid=1195'
              },
              {
                name: '人力资源系统',
                link: 'http://192.168.4.11/'
              },
            ]
          },
          {
            title: '管理机构',
            children: [
              {
                name: '党政办公室（白云校区办公室）',
                link: 'http://dzb.zhku.edu.cn/'
              },
              {
                name: '组织部（党校办公室）',
                link: 'http://zzb.zhku.edu.cn'
              },
              {
                name: '机关党委',
                link: 'https://jgdw.zhku.edu.cn/'
              },
              {
                name: '党委宣传部',
                link: 'https://xcb.zhku.edu.cn/'
              },
              {
                name: '纪检监察室',
                link: 'http://jwjc.zhku.edu.cn'
              },
              {
                name: '党委学生工作部（武装部）、学生处',
                link: 'http://xsc.zhku.edu.cn/'
              },
              {
                name: '党委研究生工作部、研究生处',
                link: 'http://yjs.zhku.edu.cn/'
              },
              {
                name: '离退休工作处',
                link: 'http://ltx.zhku.edu.cn/'
              },
              {
                name: '发展规划处',
                link: 'http://fgc.zhku.edu.cn'
              },
              {
                name: '人事处',
                link: 'http://rsc.zhku.edu.cn/'
              },
              {
                name: '教务处',
                link: 'http://jwc.zhku.edu.cn/'
              },
              {
                name: '科技处',
                link: 'http://kjc.zhku.edu.cn/'
              },
              {
                name: '外事处(港澳台事务办公室）',
                link: 'http://waishi.zhku.edu.cn/'
              },
              {
                name: '财务处',
                link: 'https://cwc.zhku.edu.cn/'
              },
              {
                name: '审计处',
                link: 'http://shenji.zhku.edu.cn/'
              },
              {
                name: '基建处',
                link: 'http://jjc.zhku.edu.cn/'
              },
              {
                name: '后勤与资产管理处',
                link: 'http://hqyzc.zhku.edu.cn/'
              },
              {
                name: '实验室与设备管理处',
                link: 'http://sbc.zhku.edu.cn/'
              },
              {
                name: '招投标办公室',
                link: 'http://ztbbgs.zhku.edu.cn/'
              },
              {
                name: '保卫处',
                link: 'http://bwc.zhku.edu.cn'
              },
              {
                name: '团委',
                link: 'http://tuanwei.zhku.edu.cn/'
              },
              {
                name: '工会',
                link: 'http://gh.zhku.edu.cn'
              },
            ]
          },
          {
            title: '教学机构',
            children: [
              {
                name: '农业与生物学院',
                link: ''
              },
              {
                name: '园艺园林学院',
                link: ''
              },
              {
                name: '轻工食品学院',
                link: ''
              },
              {
                name: '动物科技学院',
                link: ''
              },
              {
                name: '经贸学院',
                link: ''
              },
              {
                name: '管理学院',
                link: ''
              },
              {
                name: '信息科学与技术学院',
                link: ''
              },
              {
                name: '外国语学院',
                link: ''
              },
              {
                name: '机电工程学院',
                link: ''
              },
              {
                name: '何香凝艺术设计学院',
                link: ''
              },
              {
                name: '化学化工学院',
                link: ''
              },
              {
                name: '资源与环境学院',
                link: ''
              },
              {
                name: '计算科学学院',
                link: ''
              },
              {
                name: '城乡建设学院',
                link: ''
              },
              {
                name: '自动化学院',
                link: ''
              },
              {
                name: '人文与社会科学学院',
                link: ''
              },
              {
                name: '马克思主义学院',
                link: ''
              },
              {
                name: '体育部',
                link: ''
              },
              {
                name: '继续教育学院',
                link: ''
              },
              {
                name: '国际交流培训中心',
                link: ''
              },
              {
                name: '创新创业教育学院',
                link: ''
              },
            ]
          },
          {
            title: '教辅及研究机构',
            children: [
              {
                name: '图书馆',
                link: ''
              },
              {
                name: '网络与现代教育技术中心',
                link: ''
              },
              {
                name: '学报编辑部',
                link: ''
              },
              {
                name: '教学科研基地管理中心',
                link: ''
              },
              {
                name: '校医院',
                link: ''
              },
              {
                name: '廖仲恺何香凝纪念馆',
                link: ''
              },
              {
                name: '广东仲恺科技开发公司',
                link: ''
              },
              {
                name: '现代农业研究院',
                link: ''
              },
              {
                name: '仲恺文化研究所',
                link: ''
              },
              {
                name: '廖承志与池田大作研究中心',
                link: ''
              }
            ]
          },
          {
            title: '学生园地',
            children: [
              {
                name: '学生社团',
                link: ''
              },
              {
                name: '校学生会',
                link: ''
              },
              {
                name: '校大学生艺术团',
                link: ''
              }
            ]
          },
          {
            title: '友情链接',
            children: [
              {
                name: '中华人民共和国教育部',
                link: ''
              },
              {
                name: '中华人民共和国农业农村部',
                link: ''
              },
              {
                name: '广东省教育厅',
                link: ''
              },
              {
                name: '广东省农业厅',
                link: ''
              },
              {
                name: '广东省科技厅',
                link: ''
              },
              {
                name: '广州市人民政府门户网站',
                link: ''
              },
              {
                name: '中山大学',
                link: ''
              },
              {
                name: '华南理工大学',
                link: ''
              },
              {
                name: '暨南大学',
                link: ''
              },
              {
                name: '华南师范大学',
                link: ''
              },
              {
                name: '广东外语外贸大学',
                link: ''
              },
              {
                name: '华南农业大学',
                link: ''
              },
              {
                name: '汕头大学',
                link: ''
              },
              {
                name: '广东工业大学',
                link: ''
              },
              {
                name: '广州大学',
                link: ''
              },
              {
                name: '深圳大学',
                link: ''
              },
              {
                name: '雅思考试中文官网',
                link: ''
              }
            ]
          }
        ]
      }
    },
    // 加载动画
    // created() {
    //   const loading = this.$loading({
    //     fullscreen: true
    //   })
    //   this.$nextTick(() => {
    //     loading.close()
    //   })
    // },
    // props: {
    //   images: Array
    // },
    components: {
      NewsWrap,
      FriendLink,
      Special
    }
  }
</script>