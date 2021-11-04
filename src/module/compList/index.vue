<template>
  <div class="page">
    <a-tabs default-active-key="1" class="main" size="small" :tabBarStyle="{color: '#fff'}">
      <a-tab-pane key="1" tab="组件">
        <comTabs :dataList="comList"></comTabs>
      </a-tab-pane>
      <a-tab-pane key="2" tab="图层">
        Content of Tab Pane 2
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Tabs from "ant-design-vue/lib/tabs";
import TabPane from "ant-design-vue/lib/tabs";
import "ant-design-vue/lib/tabs/style/css";
import {comList} from '@/dataConfig/index'

import comTabs from './comTabs'
export default {
  components: {
    comTabs,
    aTabs: Tabs,
    aTabPane: TabPane.TabPane,
  },
  data() {
    return {
      comList: comList
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height: 100%;
  color: #fff;
  cursor: context-menu;
  border-right: 1px solid #3e3e3e;
}
.main{
  width: 100%;
  height: 100%;
  &/deep/.ant-tabs-content{
    height: calc(100% - 37px);
  }
  &/deep/.ant-tabs-bar{
    margin-bottom: 0;
    border-bottom: 1px solid #737373;
  }
}
</style>