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
export {pixelize, computedScale} 