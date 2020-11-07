import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
// import underscore from 'vue-underscore'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
