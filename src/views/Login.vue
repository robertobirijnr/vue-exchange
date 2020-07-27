<template>
  <div class="container has-text-centered">
    <div class="column is-4 is-offset-4">
      <h3 class="title has-text-grey">Login</h3>
      <p class="subtitle has-text-grey">Please login to proceed.</p>
      <div class="box">
        <figure class="avatar">
            <img src="https://placehold.it/128x128">
        </figure>
       
          <div class="field">
            <div class="control">
              <input class="input is-large"
                     type="email"
                     placeholder="Your Email"
                     v-model="form.email"
                    >
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-large"
                     type="password"
                     placeholder="Your Password"
                     v-model="form.password">
             
            </div>
          </div>
          <button @click="login" class="button is-block is-info is-large is-fullwidth">Sign In</button>
      
      </div>
      <p class="has-text-grey">
        <a>Sign In With Google</a>&nbsp;
        <router-link to="/register">Sign Up</router-link> &nbsp;·&nbsp;
        <a href="#">Need Help?</a>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          this.$router.replace({ name: "Home" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
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