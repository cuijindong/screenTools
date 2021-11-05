// 获取 组件 config

import basicBar from './bar/basicBar/config'
const configMap = new Map()
configMap.set('basicBar', basicBar)


export default function createCom(name) {
  return JSON.parse(JSON.stringify(configMap.get(name)))
}