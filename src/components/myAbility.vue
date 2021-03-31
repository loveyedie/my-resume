<template>
  <div class="info-box work-box">
    <p class="box-header">能力展示</p>
    <div class="box-content">
      <div class="canvas-box" id="abilityCanvas"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'myAbility',
  data () {
    return {
      abilityData: [],
      xData: ['nodejs', 'vue', 'react', 'angular', 'es2015', 'es2016', 'css', 'html', 'h5', 'scss', 'python', 'php', 'java'],
      yData: [65, 90, 30, 20, 92, 88, 94, 85, 89, 91, 70, 62, 54],
      abilityEchart: null
    }
  },
  mounted () {
    // document.getElementById('excuterReportChart')
    console.log(echarts)
    if (!this.abilityEchart) this.abilityEchart = echarts.init(document.getElementById('abilityCanvas'))
    this.setOption()
  },
  methods: {
    initData () {

    },
    setOption () {
      const abilityEchartOption = {
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            let str = ''
            const val = params[0].value
            if (val < 60) {
              str = params[0].name + ': 懂一点'
            } else if (val >= 60 && val < 70) {
              str = params[0].name + ': 比较懂'
            } else if (val >= 70 && val < 85) {
              str = params[0].name + ': 较精通'
            } else {
              str = params[0].name + ': 熟练'
            }
            return str
          }
        },
        grid: {
          left: '60px',
          top: '80px',
          bottom: '120px',
          right: '60px'
        },

        xAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              color: '#333',
              fontSize: 12
            }
          },
          axisTick: { length: 20 },
          data: this.xData
        },

        yAxis: {

          splitNumber: 5
        },
        series: {
          type: 'bar',
          data: this.yData
        }
      }
      this.abilityEchart.setOption(abilityEchartOption)
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
.canvas-box{
  width: 100%;
  height: 600px;
}
</style>
