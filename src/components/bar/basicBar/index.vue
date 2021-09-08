<template>
  <div ref="charts" class="q-com"></div>
</template>

<script>
import * as echarts from 'echarts'
import {pixelize} from '@/utils/dom'
import {mapState} from 'vuex'
let myCharts = null
export default {
  name: 'basicBar',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapState({
      isEdit: 'isEdit'
    })
  },
  watch: {
    // 监听配置
    config: {
      handler(newV, oldV) {
        if (!oldV) {  // 首次
          this.$nextTick(() => {
            this.setDomStyle()
            this.initCharts()
          })
        } else {  // 改变配置
          this.setDomStyle()
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
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
        tooltip: {
          show: true
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
    // 设置dom宽高位置
    setDomStyle() {
      let dom = this.$refs.charts
      dom.style.width = pixelize(this.config.attr.w)
      dom.style.height = pixelize(this.config.attr.h)
      if (this.isEdit) {
        dom.style.position = 'relative'
        dom.style.pointerEvents = 'none';
      } else {
        dom.style.top = pixelize(this.config.attr.y)
        dom.style.left = pixelize(this.config.attr.x)
      }
      if (myCharts) {
        myCharts. resize()
      }
    },
    // 重新渲染
    reRander() {
      myCharts.setOption(option)
    }
  },
};
</script>