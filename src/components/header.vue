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
           <div v-if="user.loggedIn" class="navbar-item nav-web" >{{user.data.displayName}}</div>
              <router-link v-for="(menu, text) in menuItems" 
              :key="text" :to="menu.link" class="navbar-item nav-web">{{menu.text}}</router-link>
              <template v-if="user.loggedIn">
                 <a
                 @click.prevent="signOut"
                 href="#" 
                class="navbar-item nav-web">Logout</a>
              </template>
              <template v-else>
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
            </div>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

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
 computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
   methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          });
        });
    }
  }
}

</script>