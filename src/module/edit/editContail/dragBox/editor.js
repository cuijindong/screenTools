import {on, off} from '@/utils/dom'
import state from '@/store/state'
// 移动监听
export function handleMove(e, com) {
  let dom = document.getElementById('editCanvas')
  let comCopy = JSON.parse(JSON.stringify(com))
  // 移动
  function move(event) {
    com.attr.x = comCopy.attr.x + Math.round((event.clientX - e.clientX) / state.canvasScale)
    com.attr.y = comCopy.attr.y + Math.round((event.clientY - e.clientY) / state.canvasScale)
  }
  // 抬起
  function up() {
    off(dom, 'mousemove', move)
    off(dom, 'mouseup', up)
  }
  on(dom, 'mousemove', move)
  on(dom, 'mouseup', up)
}