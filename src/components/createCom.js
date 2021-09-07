import basicBar from './bar/basicBar/config'
const configMap = new Map()
configMap.set('basicBar', basicBar)
function createCom(name) {
  return configMap.get(name)
}

export {createCom as default }