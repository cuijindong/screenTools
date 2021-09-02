<template>
  <div class="page">
    <div class="deom"></div>
  </div>
</template>

<script>
import {computedScale} from '../../../utils/dom'
import {mapMutations} from 'vuex'
export default {
  mounted() {
    this.initScale()
  },
  methods: {
    ...mapMutations({
      setCanvasScale: 'setCanvasScale'
    }),
    // 计算缩放
    initScale() {
      let pDom = document.querySelector('.editContail')
      let cDom = document.querySelector('.deom')
      let scale = computedScale(pDom, cDom)
      cDom.style.transform = `scale(${scale})`
      this.setCanvasScale(scale)
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.deom{
  position: absolute;
  top: 40px;
  left: 40px;
  width: 1920px;
  height: 1080px;
  background: blue;
  transform: scale(1);
  transform-origin: top left;
}
</style>