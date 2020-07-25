<template>
    <header class="header">
      <nav class="navbar" :class="$route.path === '/'?'':'with-background'">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item has-text-white is-size-2 has-text-weight-bold" href="#">
              {{logo}}
            </a>
            <span role="button" tabindex="0" class="navbar-burger burger has-text-white" data-target="navbar-menu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbar-menu" class="navbar-menu">
            <div class="navbar-end">
           <div v-if="isAuthenticated" class="navbar-item nav-web" >{{user.email}}</div>
              <router-link v-for="(menu, text) in menuItems" 
              :key="text" :to="menu.link" class="navbar-item nav-web">{{menu.text}}</router-link>
              <template v-if="!isAuthenticated">
                <router-link
                to="/login"
                 class="navbar-item nav-web"
                >
                  Login
                </router-link>
                <router-link
                to="/register"
                 class="navbar-item nav-web"
                >
                  Register
                </router-link>
              </template>
              <template v-else>
                <a
                @click="$store.dispatch('logOut')"
                 href="#" 
                class="navbar-item nav-web">Logout</a>
              </template>
            </div>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  data:function() {
return {
    logo:'Exchange',
    menuItems:[
      {text:'Home','link':'/'},
      {text:'About','link':'/about'},
      {text:'FAQ','link':'/faq'},
     
    ]
  };
},
computed:{
  user(){
    return this.$store.state.auth
  },
  isAuthenticated(){
    return this.$store.getters['auth/isAuthenticated']
  }
}
}
</script>