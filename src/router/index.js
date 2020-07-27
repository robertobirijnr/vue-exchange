import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import('../views/About.vue')
  },
  {
    path:'/faq',
    name:'Faq',
    component:()=>import('../views/Faq.vue')
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Login.vue'),
    meta:{
      onlyGuestUser:true,
    }
  },
  {
    path:'/register',
    name:'Register',
    component:()=>import('../views/Register'),
    meta:{
      onlyGuestUser:true,
    }
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from,next)=>{
const authenticatedUser = firebase.auth().currentUser

if(to.meta.onlyAuthUser){
  if(authenticatedUser){
    next()
  }else{
    next({name:'Login'})
  }
}else if(to.meta.onlyGuestUser){
  if(authenticatedUser){
    next({name:'Home'})
  }else{
    next()
  }
}else{
  next()
}
})

export default router
