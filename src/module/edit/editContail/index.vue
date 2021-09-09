<template>
  <div class="page">
    <div class="deom" @drop="drop" @dragover="dragOver">
      <dragBox v-for="com in compConfig.children" :key="com.id" :config="com">
        <component
          :is="com.name"
          :config="com"
        />
      </dragBox>
    </div>
  </div>
</template>

<script>
import {mapState ,mapMutations} from 'vuex'
import {computedScale} from '@/utils/dom'
import createCom from '../../../components/createCom'
import dragBox from './dragBox/index'
export default {
  components: {
    dragBox
  },
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
      addCom: 'addCom',
      setAcitveComp: 'setAcitveComp'
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
      com.id = this.$utils.uuid()
      com.attr.x = (e.offsetX - com.attr.w / 2)
      com.attr.y = (e.offsetY - com.attr.h / 2)
      this.addCom(com)
      this.setAcitveComp(com)
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