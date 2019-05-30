// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import "./assets/css/style.css"
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL="http://193.168.11.186:9001"
Vue.prototype.$axios=axios //将vue改为vue的原型链

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
