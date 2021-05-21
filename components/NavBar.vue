<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-brand" href="#">Navbar</div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              no-prefetch
              active-class="active"
              exact
              class="nav-link"
              aria-current="page"
              to="/"
            >
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/about">
              About
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/users">
              Users
            </nuxt-link>
          </li>
           <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/posts">
              Posts
            </nuxt-link>
          </li>
          <li class="nav-item" v-if="!hasToken">
            <nuxt-link active-class="active" class="nav-link" to="/login">
              Login
            </nuxt-link>
          </li>
          <li class="nav-item" v-else>
            <a @click.prevent="logout" active-class="active" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed:{
    hasToken(){
      return this.$store.getters.hasToken;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push('/login');
    }
  }
}
</script>