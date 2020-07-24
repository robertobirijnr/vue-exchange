<template>
  <div class="container has-text-centered">
    <div class="column is-4 is-offset-4">
      <h3 class="title has-text-grey">Register</h3>
      <div class="box">
        <figure class="avatar">
            <img src="https://placehold.it/128x128">
        </figure>
        <form>
           <div class="field">
            <div class="control">
              <input class="input is-large"
                     type="name"
                     placeholder="Your Nmae"
                     v-model="form.name"
                     >
             
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-large"
                     type="email"
                     placeholder="Your Email"
                     name="email"
                     v-model="form.email"
                     autocomplete="email">
              
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-large"
                     type="password"
                     v-model="form.password"
                     placeholder="Your Password"
                     name="password">

            </div>
          </div>
           <div class="field">
            <div class="control">
              <input 
                    v-model="form.passwordConfirm"
                    class="input is-large"
                     type="password"
                     placeholder="Password confirmation"
                     name="passwordConfirm">
              
            </div>
          </div>
          <button @click="register" class="button is-block is-info is-large is-fullwidth">Sign Up</button>
        </form>
      </div>
      <p class="has-text-grey">
        <a>Sign In With Google</a>&nbsp;
        <router-link to="/login">Sign Up</router-link>&nbsp;·&nbsp;
        <a href="../">Need Help?</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
   return{
      form:{
      name:'',
      email:'',
      password:'',
      passwordConfirm:'',
    }
   }
  },
  methods:{
    register(){
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style scoped>
  .hero.is-success {
    background: #F2F6FA;
  }
  .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .box {
    margin-top: 5rem;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  }
  input {
    font-weight: 300;
  }
  p {
    font-weight: 700;
  }
  p.subtitle {
    padding-top: 1rem;
  }
</style>