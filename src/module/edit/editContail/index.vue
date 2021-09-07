<template>
  <div class="page">
    <div class="deom" @drop="drop" @dragover="dragOver">
      <div v-for="com in compConfig.children" :key="com.id">
        <component
          :is="com.name"
          :config="com"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {computedScale} from '../../../utils/dom'
import createCom from '../../../components/createCom'
import {mapState ,mapMutations} from 'vuex'
export default {
  mounted() {
    this.initScale()
  },
  computed: {
    ...mapState({
      compConfig: 'compConfig'
    })
  },
  methods: {
    ...mapMutations({
      setCanvasScale: 'setCanvasScale',
      addCom: 'addCom'
    }),
    // 计算缩放
    initScale() {
      let pDom = document.querySelector('.editContail')
      let cDom = document.querySelector('.deom')
      let scale = computedScale(pDom, cDom)
      cDom.style.transform = `scale(${scale})`
      this.setCanvasScale(scale)
    },
    // 投放区移动
    dragOver(e) {
      e.preventDefault()
      // 阻止冒泡
      e.stopPropagation()
      e.dataTransfer.dropEffect = 'copy'
    },
    // 投放
    drop(e) {
      e.preventDefault()
      let name = e.dataTransfer.getData('text')
      let com = createCom(name)
      console.log(com)
      this.addCom(com)
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
  background: #0d2a42;
  transform: scale(1);
  transform-origin: top left;
}
</style>