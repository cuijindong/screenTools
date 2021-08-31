import { pixelize } from "../../../utils/dom";

/**
 * 创建高分辨率画布
 * @param {*} el 目标元素
 * @param {*} width 宽
 * @param {*} height 高
 * @param {*} ratio 比例
 */
function createCanvas(el, width, height, ratio) {
  const canvas = el ?? document.createElement("canvas");
  // 容器*ratio
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = pixelize(width);
  canvas.style.height = pixelize(height);
  const ctx = canvas.getContext("2d");
  if (ctx) {
    // 画布*ratio
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  return canvas;
}

// 创建比例尺
class RulerBuilder {
  constructor(container, options) {
    this.el = container;
    this.options = {
      direction: "TB",
      height: 20,
      bgColor: "#313131",
      fontFamily: "sans-serif",
      fontSize: "10px",
      fontColor: "#90a0ae",
      strokeStyle: "rgba(161, 174, 179, 0.8)",
      bindTarget: document.querySelector(".editContail"),
      lineWidth: 0.5, // 线宽
      indicatorLineWidth: 1, // 指示器线宽
      scale: 1, // 缩放
      offset: 40,
      ratio: 2, // 高分辨率画布比例
    };
    this.options = { ...this.options, ...options };
    this.ruler = {};
    this.canvas = null;
    this.ctx = null;
    this.constructRuler();
  }
  // 构造比例尺
  constructRuler() {
    const { el, options } = this;
    const { direction, height, ratio, bindTarget } = options;
    let width =
      direction === "TB"
        ? bindTarget.offsetWidth
        : bindTarget.offsetHeight;
    this.ruler.width = width;
    this.ruler.height = height;
    const canvas = createCanvas(null, width, height, ratio);
    el.appendChild(canvas);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.drawRuler();
  }
  // 画标尺
  drawRuler() {
    const { ctx, options, ruler } = this;
    const { width, height } = ruler;
    ctx.beginPath();
    ctx.fillStyle = options.bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.closePath();

    ctx.beginPath();
    ctx.font = `${options.fontSize} ${options.fontFamily}`;
    ctx.textAlign = "left";
    ctx.fillStyle = options.fontColor;
    ctx.strokeStyle = options.strokeStyle;
    ctx.lineWidth = options.lineWidth;
    this.drawCalibration();
    ctx.stroke();
  }
  // 画刻度
  drawCalibration() {
    const { ctx, options, ruler } = this;
    const { width, height } = ruler;
    const { offset, scale } = options;
    const maxTickLen = 0,
      medTickLen = height / 1.5,
      minTickLen = height / 1.2;

    for (let pos = 0; pos <= width; pos += 1) {
      const delta = pos - offset;
      if (delta < 0) continue;

      let label = -1;
      let tickLen = -1;
      if (delta % 50 === 0) {
        label = Math.floor(delta / scale);
        tickLen = maxTickLen;
      } else if (delta % 25 === 0) {
        tickLen = medTickLen;
      } else if (delta % 5 === 0) {
        tickLen = minTickLen;
      }

      if (tickLen >= 0) {
        ctx.moveTo(pos + 0.5, height + 0.5);
        ctx.lineTo(pos + 0.5, tickLen);
        if (label > -1) {
          ctx.fillText(`${label}`, pos + 2.5, height / 1.5);
        }
      }
    }
  }
  /**
   * 设置画布尺寸和比例
   * @param {*} h 高
   * @param {*} s 比例
   */
  setSize(h, s) {
    const { options } = this;
    options.height = h;
    options.scale = s;
    const { height, ratio, direction } = options;
    let width =
      direction === "TB"
        ? bindTarget.offsetWidth
        : bindTarget.offsetHeight;
    this.ruler.width = width;
    this.ruler.height = height;

    createCanvas(this.canvas, width, height, ratio);
    this.drawRuler();
    // this.guideLines.forEach(g => g.setLine(null, g.coor))
  }
}

export { RulerBuilder };
