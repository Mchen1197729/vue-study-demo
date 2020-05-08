import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import _ from 'lodash'

//引入批量导入模块的代码
import './contexts'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$lodash = _


new Vue({
  provide() {
    return {
      root_name: '根实例'
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
