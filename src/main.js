import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import ElementUI from 'element-ui'
import { Table, TableColumn } from 'element-ui'

// import * as echarts from 'echarts/core'

import '@/styles/element-variables.scss'
import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI, { size: 'medium' })
Vue.use(Table)
Vue.use(TableColumn)
// Vue.prototype.$echarts = Echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
