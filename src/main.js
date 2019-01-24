import Vue from 'vue'
import router from '@/assets/js/exrouter.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/js/validate.js'
import i18n from './assets/js/lang/vueI18n.js'
import App from '@/App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});