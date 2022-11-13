import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'Vue-router'
import router from '../src/router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
