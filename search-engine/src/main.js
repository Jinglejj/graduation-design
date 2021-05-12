import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./style/index.scss"
import axios from 'axios'; /* 引入axios进行地址访问*/
import store from './store'
import {transTime} from './utils/index'
Vue.prototype.axios=axios
Vue.prototype.$utils=transTime
Vue.use(ElementUI)
Vue.config.productionTip = false
import   './utils/dialogDrag'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
