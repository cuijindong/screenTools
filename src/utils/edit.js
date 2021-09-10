import state from "@/store/state";
/**
 * 计算offset
 * @param {*} event 鼠标事件
 */
function getOffsetXY(event) {
  const offsetX = (event.clientX - 360) / state.canvasScale;
  const offsetY = (event.clientY - 110) / state.canvasScale;
  return { offsetX, offsetY };
}

export {getOffsetXY}