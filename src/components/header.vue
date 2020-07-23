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
          
              <router-link v-for="(menu, text) in menuItems" 
              :key="text" :to="menu.link" class="navbar-item nav-web">{{menu.text}}</router-link>
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
      {text:'Login','link':'/login'},
      {text:'Register','link':'/register'}
    ]
  };
}
}
</script>