// 数字+px
function pixelize(val) {
  return `${val}px`
}
// 计算scale
function computedScale(pDom, cDom) {
  let pBox = {
    width: pDom.offsetWidth - 80,
    height: pDom.offsetHeight - 80,
  }
  let cBox = {
    width: cDom.offsetWidth ,
    height: cDom.offsetHeight,
  }
  if (cBox.width > pBox.width || cBox.height > pBox.height) {
    let scaleX, scaleY, scale = 1
    if (cBox.width > pBox.width) {
      scaleX = pBox.width / cBox.width
    }
    if (cBox.height > pBox.height) {
      scaleY = pBox.height / cBox.height
    }
    scale = Math.min(scaleX, scaleY)
    return scale
  }
}
// 元素添加监听
function on (el, type, fun, useCapture = false) {
  if (el && type && fun) {
    el.addEventListener(type, fun, useCapture)
  }
}
// 元素移出监听
function off (el, type, fun) {
  if (el, type, fun) {
    el.removeEventListener(type, fun)
  }
}
export {pixelize, computedScale, on, off} 