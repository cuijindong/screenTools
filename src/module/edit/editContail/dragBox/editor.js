import { on, off } from "@/utils/dom";
import state from "@/store/state";
// 移动监听
export function handleMove(e, com) {
  let dom = document.getElementById("editCanvas");
  let comCopy = JSON.parse(JSON.stringify(com));
  // 移动
  function move(event) {
    com.attr.x = comCopy.attr.x + Math.round((event.clientX - e.clientX) / state.canvasScale);
    com.attr.y = comCopy.attr.y + Math.round((event.clientY - e.clientY) / state.canvasScale);
  }
  // 抬起
  function up() {
    off(dom, "mousemove", move);
    off(dom, "mouseup", up);
  }
  on(dom, "mousemove", move);
  on(dom, "mouseup", up);
}

export function handleChangeSize(e, com, flag) {
  let dom = document.getElementById("editCanvas");
  let comCopy = JSON.parse(JSON.stringify(com));
  switch (flag) {
    case "top":
      on(dom, "mousemove", moveTop);
      on(dom, "mouseup", up);
      break;
    case "right":
      on(dom, "mousemove", moveRight);
      on(dom, "mouseup", up);
      break;
    case "bottom":
      on(dom, "mousemove", moveBottom);
      on(dom, "mouseup", up);
      break;
    case "left":
      on(dom, "mousemove", moveLeft);
      on(dom, "mouseup", up);
      break;
    case "topleft":
      on(dom, "mousemove", moveTopLeft);
      on(dom, "mouseup", up);
      break;
    case "topright":
      on(dom, "mousemove", moveTopRight);
      on(dom, "mouseup", up);
      break;
    case "bottomleft":
      on(dom, "mousemove", moveBottomLeft);
      on(dom, "mouseup", up);
      break;
    case "bottomright":
      on(dom, "mousemove", moveBottomRight);
      on(dom, "mouseup", up);
      break;
  }
  // top
  function moveTop(event) {
    com.attr.h = comCopy.attr.h - Math.round((event.clientY - e.clientY) / state.canvasScale);
    com.attr.y = comCopy.attr.y + Math.round((event.clientY - e.clientY) / state.canvasScale);
  }
  // right
  function moveRight(event) {
    com.attr.w = comCopy.attr.w + Math.round((event.clientX - e.clientX) / state.canvasScale);
  }
  // bottom
  function moveBottom(event) {
    com.attr.h = comCopy.attr.h + Math.round((event.clientY - e.clientY) / state.canvasScale);
  }
  // left
  function moveLeft(event) {
    com.attr.w = comCopy.attr.w - Math.round((event.clientX - e.clientX) / state.canvasScale);
    com.attr.x = comCopy.attr.x + Math.round((event.clientX - e.clientX) / state.canvasScale);
  }
  // topleft
  function moveTopLeft(event) {
    moveTop(event)
    moveLeft(event)
  }
  // topright
  function moveTopRight(event) {
    moveTop(event)
    moveRight(event)
  }
  // bottomleft
  function moveBottomLeft(event) {
    moveBottom(event)
    moveLeft(event)
  }
  // bottomright
  function moveBottomRight(event) {
    moveBottom(event)
    moveRight(event)
  }
  // 抬起
  function up() {
    off(dom, "mousemove", moveTop);
    off(dom, "mousemove", moveRight);
    off(dom, "mousemove", moveBottom);
    off(dom, "mousemove", moveLeft);
    off(dom, "mousemove", moveTopLeft);
    off(dom, "mousemove", moveTopRight);
    off(dom, "mousemove", moveBottomLeft);
    off(dom, "mousemove", moveBottomRight);

    off(dom, "mouseup", up);
  }
}
