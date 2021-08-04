import Vue from 'vue'

import "./assets/css/main.css"
import Layout from './components/Layout.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Layout),
}).$mount('#app')
