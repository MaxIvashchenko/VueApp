<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger">
      Need login first
    </div>
    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>
      <div>
        <div class="form-group">
          <input name="email" type="text" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <input name="password" type="password" class="form-control" v-model="password" />
        </div>
      </div>

      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>
      <p>{{error}}</p>

      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  </section>
</template>

<script>
// import * as firebase from 'firebase/app'
// import 'firebase/auth'

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    }
  },
  layout: "empty",
  methods: {
    onSubmit() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data)
      this.$router.push("/");

        })
        .catch(error => {
          this.error = error
        })

      // this.$store.dispatch("login");
      // this.$router.push("/");
    },
  },
};
</script>
<style scoped>
form {
  width: 500px;
  margin: 20px auto 0;
}
</style>