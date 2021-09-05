<template>
  <div class="Home">
    <div class="header"></div>
    <div class="main">
      <div class="compList">
        <compList></compList>
      </div>
      <div class="edit">
        <edit></edit>
      </div>
      <div class="attribute"></div>
    </div>
  </div>
</template>

<script>
import edit from '../module/edit/index'
import compList from '../module/compList/index'
export default {
  name: 'Home',
  components: {
    edit,
    compList
  },
  mounted() {
  },
  
}
</script>
<style lang="scss" scoped>
.Home{
  width: 100%;
  height: 100%;
}
.header{
  width: 100%;
  height: 50px;
  background-color: red;
}
.main{
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  position: relative;
  .compList{
    width: 50px;
    height: 100%;
    background: $bgBorder;
  }
  .edit{
    height: 100%;
    flex: 1;
    background: #313131;
  }
  .attribute{
    width: 400px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    opacity: .4;
  }
}
</style>
