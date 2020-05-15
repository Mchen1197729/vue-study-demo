import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import _ from 'lodash'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入批量导入模块的代码
import './contexts'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$lodash = _
Vue.use(ElementUI);


new Vue({
  provide() {
    return {
      root_name: '根实例'
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
