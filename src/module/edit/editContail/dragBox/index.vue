 <!-- 拖动盒子 -->
<template>
  <div
    class="dragbox"
    :style="dragboxStyle"
    @mouseenter="handlerEnter"
    @mouseleave="handleLeave"
    @mousedown="handleDown"
  >
    <div class="shape" v-show="hover || active">
      <div
        class="point pointTop"
        :style="pointRecoverStyle"
        @mousedown="handlePointDown($event)"
      ></div>
      <div class="point pointRight" :style="pointRecoverStyle"></div>
      <div class="point pointBottom" :style="pointRecoverStyle"></div>
      <div class="point pointLeft" :style="pointRecoverStyle"></div>
      <div class="point pointTopleft" :style="pointRecoverStyle"></div>
      <div class="point pointTopright" :style="pointRecoverStyle"></div>
      <div class="point pointBottomleft" :style="pointRecoverStyle"></div>
      <div class="point pointBottomright" :style="pointRecoverStyle"></div>
    </div>
    <div class="activeBg" :class="{active: active}"></div>
    <slot></slot>
  </div>
</template>

<script>
import { pixelize } from "@/utils/dom";
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      hover: true,
    };
  },
  computed: {
    ...mapState({
      canvasScale: "canvasScale",
      acitveComp: "acitveComp",
    }),
    dragboxStyle() {
      let style = {};
      if (this.config && this.config.attr) {
        style.transform = `translate(${pixelize(
          this.config.attr.x
        )}, ${pixelize(this.config.attr.y)})`;
      }
      return style;
    },
    pointRecoverStyle() {
      let style = {};
      style.transform = `scale(${1 / this.canvasScale})`;
      return style;
    },
    active() {
      return this.acitveComp && this.config.id === this.acitveComp.id;
    },
  },
  methods: {
    ...mapMutations({
      setAcitveComp: "setAcitveComp",
    }),
    // 鼠标按下，选中组件
    handleDown() {
      this.setAcitveComp(this.config);
    },
    // 鼠标移入
    handlerEnter(e) {
      e.stopPropagation();
      this.hover = true;
    },
    // 鼠标移出
    handleLeave() {
      this.hover = false;
    },
    handlePointDown(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.dragbox {
  position: absolute;
  cursor: move;
}
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
    &::after {
      content: "";
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
.activeBg{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}
.active{
  background: #25466373;
}
</style>