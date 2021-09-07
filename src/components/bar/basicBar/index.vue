<template>
  <div ref="charts" class="q-com"></div>
</template>

<script>
import * as echarts from 'echarts'
let myCharts = null
export default {
  name: 'basicBar',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      flag: false
    }
  },
  watch: {
    // 监听配置
    config() {
      if(this.flag) {
        this.reRander()
      } else {
        this.flag = true
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      // 确保initCharts()时有config
      await new Promise(r => {
        if (this.flag) {
          r()
        }
      })
      this.initCharts()
    },
    // 初始化
    initCharts() {
      let option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      myCharts = echarts.init(this.$refs.charts)
      myCharts.setOption(option)
    },
    // 重新渲染
    reRander() {
      myCharts.setOption(option)
    }
  },
};
</script>