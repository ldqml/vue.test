import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'Vue-router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
