import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

Vue.filter('two_digits', function (value) {
  if (value.toString().length <= 1) {
    return "0" + value.toString();
  }
  return value.toString();
});