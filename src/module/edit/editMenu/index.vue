<template>
  <div
    class="dragBoxMenu"
    v-show="showMenu"
    :style="`top: ${menuPosition.y}px;left: ${menuPosition.x}px`"
  >
    <div class="menuitem" @click="doDeleteCom">删除</div>
    <div class="menuitem">置顶</div>
    <div class="menuitem">置底</div>
    <div class="menuitem">上移</div>
    <div class="menuitem">下移</div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      showMenu: false,
      menuPosition: {
        x: 0,
        y: 0
      },
      config: null
    }
  },
  mounted() {
    this.$root.$on('openMenu', this.open)
  },
  methods: {
    ...mapMutations({
      deleteCom: 'deleteCom'
    }),
    open(e, config) {
      this.config = config
      console.log(this.config)
      this.menuPosition.x = e.pageX
      this.menuPosition.y = e.pageY - 50
      this.showMenu = true
      let fn = () => {
        this.showMenu = false
        document.removeEventListener('click', fn)
      }
      document.addEventListener('click', fn)
    },
    doDeleteCom() {
      this.deleteCom(this.config)
    }
  }
};
</script>

<style lang="scss" scoped>
.dragBoxMenu{
  position: absolute;
  background: #ebebeb;
  padding: 10px 0;
  .menuitem{
    margin-bottom: 10px;
    padding: 0 10px;
    cursor: pointer;
    &:last-child{
      margin: 0;
    }
    &:hover{
      background: #fff;
    }
  }
}
</style>