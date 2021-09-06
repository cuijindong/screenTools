import charts from './charts/index'
import map from './map'
import info from './info'
const comList = [
  {
    name: '图表',
    type: 'charts',
    icon: 'bar-chart',
    child: charts
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

export {comList}