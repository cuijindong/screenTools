<template>
  <div class="canvas-ruler">
    <div class="ruler-container-h ruler-container"></div>
    <div class="ruler-container-v ruler-container"></div>
  </div>
</template>

<script>
import {RulerBuilder} from './index'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      hRulerWp: null,
      vRulerWp: null
    }
  },
  computed: {
    ...mapState({
      canvasScale: 'canvasScale'
    })
  },
  watch: {
    canvasScale() {
      this.initRuler()
    }
  },
  methods: {
    initRuler() {
      const rulerH = document.querySelector('.ruler-container-h')
      const rulerV = document.querySelector('.ruler-container-v')

      this.hRulerWp = new RulerBuilder(rulerH, {direction: 'TB', scale: this.canvasScale})
      this.vRulerWp = new RulerBuilder(rulerV, {direction: 'LR', scale: this.canvasScale})
    }
  },
}
</script>

<style lang="scss" scoped>
.canvas-ruler{
  position: fixed;
}
.ruler-container{
  height: 20px;
  position: absolute;
  left: 20px;
  cursor: w-resize;
}
.ruler-container-v{
  transform: rotate(90deg) translateX(0);
  transform-origin: left bottom;
  left: 0;
  cursor: ns-resize;

}
</style>