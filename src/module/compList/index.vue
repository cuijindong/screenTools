<template>
  <div class="page">
    <div class="name">组件库</div>
    <a-tabs tabPosition="left">
      <a-tab-pane key="1">
        <span slot="tab" class="lable">
          <a-icon type="line-chart" />
          图表
        </span>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab" class="lable">
          <a-icon type="line-chart" />
          地图
        </span>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab" class="lable">
          <a-icon type="line-chart" />
          信息
        </span>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Tabs from 'ant-design-vue/lib/tabs'
import TabPane from 'ant-design-vue/lib/tabs'
import 'ant-design-vue/lib/tabs/style/css'
import Icon from 'ant-design-vue/lib/icon'
import 'ant-design-vue/lib/icon/style/css'

export default {
  components: {
    aTabs: Tabs,
    aTabPane: TabPane.TabPane,
    aIcon: Icon
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height: 100%;
  color: #fff;
  cursor: context-menu;
  &/deep/.ant-tabs{
    color: #fff;
    .ant-tabs-nav-container{
      font-size: 12px;
    }
    .ant-tabs-tab{
      padding: 0;
      .lable{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        width: 100%;
        .anticon{
          margin: 0;
          font-size: 24px;
        }
      }
    }
    .ant-tabs-left-bar{
      margin-right: 0px;
      border-right: none;
      width: 100%;
      .ant-tabs-ink-bar{
        left: 0px;
      }
    }
    .ant-tabs-nav {
      .ant-tabs-tab-active{
        color: '#0078f9'
      }
    }
  }
}
</style>