import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component:()=>import('../views/Login.vue')
  },
  {
    path:'/register',
    name:'Register',
    component:()=>import('../views/Register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
