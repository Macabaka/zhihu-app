import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import global_ from './util/Global.vue'
import vuetify from './plugins/vuetify';
import RGBaster from './util/rgbaster.js'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.use(VueAxios,axios,RGBaster)
Vue.prototype.GLOBAL = global_

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
