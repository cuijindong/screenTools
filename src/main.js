import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS
import api from './api'
import utils from './utils'
import dayjs from 'dayjs'
import components from './components'

Vue.use(components)
Vue.use(iView)
Vue.config.productionTip = false

Object.assign(Vue.prototype, {
  $api: api,
  $utils: utils,
  $dayjs: dayjs
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
