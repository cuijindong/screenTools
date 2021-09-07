<template>
  <div ref="charts" class="q-com"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'basicBar',
  mounted() {
    this.initCharts()
  },
  methods: {
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
      let myCharts = echarts.init(this.$refs.charts)
      myCharts.setOption(option)
    },
  },
};
</script>