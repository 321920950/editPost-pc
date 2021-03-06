import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import axios from 'axios'

// 导入 element-ui
import './plugins/element.js'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
