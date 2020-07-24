import { firestoreAction } from 'vuexfire'
import { db } from '../../db'

export default{
    namespace:true,
    state(){
        return{
            items:[]
        }
    },
    getters:{

    },
    actions:{
        // getExchanges({commit}){
        //     commit('setExchanges',exchanges)
        // },
        bindExchanges: firestoreAction(({ bindFirestoreRef }) => {
            // return the promise returned by `bindFirestoreRef`
            return bindFirestoreRef('items', db.collection('exchanges'))
          }),
    },
    mutations:{
        setExchanges(state,exchanges){
            state.items =exchanges
        }
    }
}