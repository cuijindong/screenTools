// 组件区 数据
import createCom from './createCom'
const chart = [
  {
    name: '柱状图',
    type: 'bar',
    content: [
      createCom('basicBar')
    ]
  }
]
const map = []

const info = []
const comList = [
  {
    name: '图表',
    type: 'charts',
    icon: 'bar-chart',
    child: chart
  },
  {
    name: '地图',
    type: 'map',
    icon: 'global',
    content: map
  },
  {
    name: '信息',
    type: 'info',
    icon: 'file-text',
    content: info
  },
]

export default comList