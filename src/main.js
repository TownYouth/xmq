import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import 'ant-design-vue/dist/antd.css';
import ant from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(ant);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
