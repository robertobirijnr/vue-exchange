import firebase from 'firebase/app'
import 'firebase/auth'
import { db } from '../../db'

export default{
    namespace:true,
    state:{
        user:null
    },
    getters:{
        isAuthenticated(state){
          return  !!state.user
        }
    },
    actions:{
        signUp(context,{email,password}){
            return firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(({user})=>{
                return user
            }).catch(err=>{
                const message = err.message
                return Promise.reject(message)
            })
        },
        createUserProfile(_,{uid,userProfile}){
            return db
            .collection('profile')
            .doc(uid)
            .set(userProfile)
        },
        signIn(context,{email,password}){
            return firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user=>{
                return user
            }).catch(err =>{
                const message = err.message
                return Promise.reject(message)
            })
        },
        logOut(){
            return firebase.auth().signOut()
        }
    },
    mutations:{
        setAuthUser(state,user){
            state.user = user
        }
    }
}