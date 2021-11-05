<template>
  <div class="comLayers">
    <div
      class="comLayer"
      :class="{ active: acitveComp.id === layer.id }"
      v-for="(layer, index) in comList"
      :key="index"
      @click="setAcitveComp(layer)"
    >
      <img :src="layer.layerImg" alt="" />
      <div class="name">{{ layer.layerName }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      compConfig: "compConfig",
      acitveComp: "acitveComp",
    }),
    comList() {
      console.log(this.compConfig.children, this.acitveComp);
      return this.compConfig.children;
    },
  },
  methods: {
    ...mapMutations({
      setAcitveComp: "setAcitveComp"
    })
  }
};
</script>

<style lang="scss" scoped>
.comLayers {
  width: 100%;
  height: 100%;
  color: #ffffff;
  .comLayer {
    cursor: pointer;
    display: flex;
    height: 50px;
    padding: 0 20px;
    margin: 10px 0;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      background: #0d2a425c;
    }
    img {
      width: 70px;
      height: 40px;
      border: 1px solid #303030;
      margin-right: 10px;
      border-radius: 4px;
    }
  }
  .active {
    background: #1890ff !important;
  }
}
</style>