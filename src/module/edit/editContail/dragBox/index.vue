 <!-- 拖动盒子 -->
<template>
  <div class="dragbox" :style="dragboxStyle">
    <div class="shape">
      <div class="point pointTop" :style="pointRecoverStyle"></div>
      <div class="point pointRight" :style="pointRecoverStyle"></div>
      <div class="point pointBottom" :style="pointRecoverStyle"></div>
      <div class="point pointLeft" :style="pointRecoverStyle"></div>
      <div class="point pointTopleft" :style="pointRecoverStyle"></div>
      <div class="point pointTopRight" :style="pointRecoverStyle"></div>
      <div class="point pointBottomleft" :style="pointRecoverStyle"></div>
      <div class="point pointBottomRight" :style="pointRecoverStyle"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { pixelize } from "@/utils/dom";
import {mapState} from 'vuex'
export default {
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapState({
      canvasScale: 'canvasScale'
    }),
    dragboxStyle() {
      let style = {};
      style.transform = `translate(${pixelize(this.config.x)}, ${pixelize(
        this.config.y
      )})`;
      return style;
    },
    pointRecoverStyle() {
      let style = {}
      style.transform = `translate(-50%, -50%) scale(${1 / this.canvasScale})`
      return style
    }
  },
};
</script>

<style lang="scss" scoped>
.dragbox {
  position: absolute;
  .shape {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid red;
    .point {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 20px;
      height: 20px;
      transform: none;
      z-index: 2;
      &::after{
        content: '';
        border-radius: 50%;
        background: #fff;
        width: 6px;
        height: 6px;
      }
    }
    .pointTop {
      cursor: ns-resize;
      top: 0;
      left: 50%;
    }
    .pointBottom {
      cursor: ns-resize;
      bottom: 0;
    }
    .pointLeft {
      cursor: ew-resize;
    }
    .pointRight {
      cursor: ew-resize;
    }
    .pointTopleft {
      cursor: nwse-resize;
    }
    .pointTopright {
      cursor: nwse-resize;
    }
    .pointBottomleft {
      cursor: nesw-resize;
    }
    .pointBottomright {
      cursor: nesw-resize;
    }
  }
}
</style>