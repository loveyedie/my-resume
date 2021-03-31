<template>
  <div class="info-box work-box">
    <p class="box-header">工作经历</p>
    <div class="box-content">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <p>工作内容：</p>
            <p v-for="(item, i) in props.row.workItems" :key="i">{{ item }}</p>
          </template>
        </el-table-column>
        <el-table-column
          label="公司名称"
          prop="company">
        </el-table-column>
        <el-table-column
          label="职位"
          prop="position">
        </el-table-column>
        <el-table-column
          label="工作年限">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.dateStart + '~' +  scope.row.dateEnd}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myWork',
  data () {
    return {
      tableData: [
        {
          id: 1,
          company: '上海蓟蓬信息技术有限公司',
          position: 'web前端',
          dateStart: '2020.02',
          dateEnd: '2021.02',
          workItems: [
            '1.公司产品软件的配置参数功能实现网页版管理（各种复杂配置软件所需参数，保存数据库，vue+puthon）',
            '2.客户公司软件前期配置web端管理平台（参数拖动配置，管理员权限和操作记录，代码版本控制本地化',
            '3.参与公司软件制作，python代码制作，操作oracle数据库',
            '4.出差和客户公司内部调试和程序配置'
          ]
        },
        {
          id: 2,
          company: '上海小蚁科技有限公司',
          position: '高级前端开发工程师',
          dateStart: '2018.06',
          dateEnd: '2020.02',
          workItems: [
            '1.人脸识别前端程序，node完成',
            '2.smartGo h5端功能模块负责vue',
            '3.管理后台程序vue',
            '4.大屏展示大数据vue+node+echart '
          ]
        },
        {
          id: 3,
          company: '资邦金服网络科技集团有限公司',
          position: '高级前端开发工程师',
          dateStart: '2017.11',
          dateEnd: '2018.05',
          workItems: [
            '1.享多期h5端页面制作',
            '2.后端平台台制作vue',
            '3.享多期拼团商城页面制作',
            '4.享礼供应商管理平台制作'
          ]
        },
        {
          id: 4,
          company: '上海携程集团',
          position: '高级前端开发工程师',
          dateStart: '2015.05',
          dateEnd: '2017.06',
          workItems: [
            '1.参与软件工程系统的设计、开发、测试等过程',
            '2.负责工程中主要功能的代码实现',
            '3.协助工程管理人保证项目的质量',
            '4.解决工程中的关键问题和技术难题'
          ]
        },
        {
          id: 5,
          company: '上海易班发展有限公司',
          position: 'WEB前端',
          dateStart: '2014.07',
          dateEnd: '2015.05',
          workItems: [
            '中⼩学项⽬组前端开发⼯程师,主要负责博雅⽹(www.21boya.cn)前端页⾯制作,js效果实现,跟后台数据交互, 后台界面制作(extjs实现) '
          ]
        },
        {
          id: 6,
          company: '上海天臣集团',
          position: 'WEB前端',
          dateStart: '2013.08',
          dateEnd: '2014.07',
          workItems: [
            '制作公司电商网站www.jiujiujiu.com前端页面,包括页面、css、js等 前端优化 天猫页面设计和维护'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.content-box{
  padding: 10px 50px;
}
.work-box{
  border-bottom: 0;
}
</style>
