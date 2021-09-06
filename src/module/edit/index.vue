<template>
  <div class="page">
    <!-- 比例尺 -->
    <div class="ruler">
      <ruler></ruler>
    </div>
    <!-- 画布 -->
    <div class="editContail">
      <edit-contail></edit-contail>
    </div>
    <!-- 底部 -->
    <div class="footer"></div>
  </div>
</template>

<script>
import ruler from "./ruler/index.vue";
import editContail from './editContail/index.vue'
export default {
  components: {
    ruler,
    editContail
  },
};
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.editContail {
  width: calc(100% - 20px);
  height: calc(100% - 50px);
  margin: 20px 0 0 20px;
}
.footer {
  height: 30px;
  width: 100%;
  background: #656565;
}
</style>