<template>
  <div class="page">
    <div class="name">组件库</div>
    <a-tabs tabPosition="left">
      <a-tab-pane key="1" tab="图表">
        <span slot="tab">
          <a-icon type="line-chart" />
          图表
        </span>
      </a-tab-pane>
      <a-tab-pane key="2" tab="地图">
      </a-tab-pane>
      <a-tab-pane key="3" tab="数字">
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Tabs from 'ant-design-vue/lib/tabs'
import TabPane from 'ant-design-vue/lib/tabs'
import 'ant-design-vue/lib/tabs/style/css'

export default {
  components: {
    aTabs: Tabs,
    aTabPane: TabPane.TabPane
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height: 100%;
  background: #656565;
  color: #fff;
  cursor: context-menu;
  &/deep/.ant-tabs{
    color: #fff;
  }
}
</style>