 <!-- 拖动盒子 -->
<template>
  <div class="dragbox" :style="dragboxStyle" @mouseenter="handlerEnter" @mouseleave="handleLeave">
    <div class="shape" v-show="hover">
      <div class="point pointTop" :style="pointRecoverStyle"></div>
      <div class="point pointRight" :style="pointRecoverStyle"></div>
      <div class="point pointBottom" :style="pointRecoverStyle"></div>
      <div class="point pointLeft" :style="pointRecoverStyle"></div>
      <div class="point pointTopleft" :style="pointRecoverStyle"></div>
      <div class="point pointTopright" :style="pointRecoverStyle"></div>
      <div class="point pointBottomleft" :style="pointRecoverStyle"></div>
      <div class="point pointBottomright" :style="pointRecoverStyle"></div>
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
  data() {
    return {
      hover: true
    }
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
      style.transform = `scale(${1 / this.canvasScale})`
      return style
    }
  },
  methods: {
    handlerEnter(e) {
      e.stopPropagation();
      
      this.hover = true
    },
    handleLeave() {
      this.hover = false
    }
  }
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
      top: -10px;
      left: calc(50% - 10px);
    }
    .pointBottom {
      cursor: ns-resize;
      bottom: -10px;
      left: calc(50% - 10px);
    }
    .pointLeft {
      cursor: ew-resize;
      left: -10px;
      top: calc(50% - 10px);
    }
    .pointRight {
      cursor: ew-resize;
      right: -10px;
      top: calc(50% - 10px);
    }
    .pointTopleft {
      cursor: nwse-resize;
      top: -10px;
      left: -10px;
    }
    .pointTopright {
      cursor: nesw-resize;
      top: -10px;
      right: -10px;
    }
    .pointBottomleft {
      cursor: nesw-resize;
      bottom: -10px;
      left: -10px;
    }
    .pointBottomright {
      cursor: nwse-resize;
      bottom: -10px;
      right: -10px;
    }
  }
}
</style>