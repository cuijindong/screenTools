<template>
  <div class="page">
    <div class="deom"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height: 100%;
  position: relative;
}
.deom{
  position: absolute;
  top: 40px;
  left: 40px;
  width: 800px;
  height: 400px;
  background: blue;
  transform: scale(1.5);
  transform-origin: top left;
}
</style>