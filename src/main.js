import Vue from 'vue'
import BataChat from './BataChat.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(BataChat),
}).$mount('#app')
