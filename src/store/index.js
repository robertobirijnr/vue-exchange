import Vue from 'vue'
import Vuex from 'vuex'
import exchange from './modules/exchange'
import { vuexfireMutations } from 'vuexfire'
import auth from './modules/auth.js'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        exchange,
        auth
    },
    mutations:{
        ...vuexfireMutations,
    }
})
 
