// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import HelloWorld from '@/components/HelloWorld'
import { currency } from './util/currency'

import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/login.css'
import './assets/css/product.css'

Vue.use(infiniteScroll)
Vue.use(Vuex)
Vue.use(VueLazyload, {
	loading: 'static/loading-svg/loading-bars/svg',
	try: 3	//默认为1
})

Vue.filter('currency',currency)
Vue.config.productionTip = false


const store = new Vuex.Store({

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
