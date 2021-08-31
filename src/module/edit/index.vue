<template>
  <div class="page">
    <!-- 头部 -->
    <div class="header"></div>
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
}
.header {
  height: 40px;
  width: 100%;
  background: #656565;
}
.editContail {
  width: calc(100% - 20px);
  height: calc(100% - 90px);
  background: #313131;
  margin: 20px 0 0 20px;
}
.footer {
  height: 30px;
  width: 100%;
  background: #656565;
}
</style>