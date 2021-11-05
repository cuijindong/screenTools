<template>
  <div class="comtabs">
    <a-tabs tab-position="left">
      <a-tab-pane v-for="item in dataList" :key="item.type">
        <!-- label -->
        <span slot="tab" class="lable">
          <a-icon v-if="item.icon" :type="item.icon" />
          {{ item.name }}
        </span>
        <!-- content -->
        <comTabs
          v-if="item.child" :dataList="item.child"
          class="contentTabs"
        ></comTabs>
        <div v-else class="content">
          <div class="dragCom" v-for="(dragItem, i) in item.content" :key="i">
            <div class="tit">{{dragItem.layerName}}</div>
            <img :src="dragItem.layerImg" alt="" @dragstart="dragStart($event, dragItem.name)" draggable="true">
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Tabs from "ant-design-vue/lib/tabs";
import TabPane from "ant-design-vue/lib/tabs";
import "ant-design-vue/lib/tabs/style/css";
import Icon from "ant-design-vue/lib/icon";
import "ant-design-vue/lib/icon/style/css";
export default {
  name: "comTabs",
  components: {
    aTabs: Tabs,
    aTabPane: TabPane.TabPane,
    aIcon: Icon,
  },
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    dragStart(e, comName) {
      e.dataTransfer.setData('text', comName)
    }
  }
};
</script>

<style lang="scss" scoped>
.comtabs {
  width: 100%;
  height: 100%;
}
.content {
  background: #0a0b0d;
  height: 100%;
  padding: 15px;
}
.dragCom{
  width: 100%;
  height: 100px;
  background: #242935;
  margin-bottom: 15px;
  border-radius: 5px;
  .tit{
    height: 22px;
    padding: 0 6px;
  }
  img{
    height: calc(100% - 22px);
    width: 100%;
    -webkit-user-drag: element !important;
  }
}
/deep/.ant-tabs {
  color: #ffffffb5;
  height: 100%;
  .ant-tabs-nav-container {
    font-size: 12px;
  }
  .ant-tabs-nav-wrap{
    background: #191c21;
  }
  .ant-tabs-tab {
    padding: 10px 0;
    .lable {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      width: 48px;
      .anticon {
        margin: 0;
        font-size: 16px;
      }
    }
  }
  .ant-tabs-left-bar {
    margin-right: 0px;
    border: none !important;
    width: 48px;
    .ant-tabs-ink-bar {
      left: 0px;
    }
  }
  .ant-tabs-left-content {
    padding: 0;
    border: none;
    height: 100% !important;
    .ant-tabs-tabpane {
      height: 100%;
    }
  }
  .ant-tabs-nav {
    .ant-tabs-tab-active {
      color: #0078f9;
      background: #0a0b0d;
    }
  }
  .ant-tabs-left-content > .ant-tabs-tabpane-inactive,
  .ant-tabs-right-content > .ant-tabs-tabpane-inactive {
    display: none;
  }
}
.contentTabs {
  &/deep/.ant-tabs {
    
    .ant-tabs-tab {
      margin: 0;
    }
    .ant-tabs-nav-wrap{
      background: #14161a;
    }
    .ant-tabs-left-bar {
      .ant-tabs-ink-bar {
        width: 0px;
      }
    } 
  }
}
</style>