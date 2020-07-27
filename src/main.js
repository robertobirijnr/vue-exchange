import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Toasted from 'vue-toasted'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'

library.add(faStar)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Toasted)

import '../src/db'

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

 new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
 

