<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-brand" href="#">Navbar</div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            v-for="link in links"
            :key="link.id"
            :v-if="link.protected"
          >
            <nuxt-link
              no-prefetch
              active-class="active"
              exact
              class="nav-link"
              aria-current="page"
              :to="link.path"
            >
              {{ link.title }}
            </nuxt-link>
          </li>

          <li class="nav-item" v-if="!hasToken">
            <nuxt-link
              active-class="active"
              exact
              class="nav-link"
              aria-current="page"
              to="/login"
            >
              Login
            </nuxt-link>
          </li>

          <li class="nav-item" v-else>
            <a @click.prevent="logout" active-class="active" class="nav-link"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: "link-1", title: "Home", path: "/", protected: !this.hasToken },
        {
          id: "link-2",
          title: "About",
          path: "/about",
          protected: !this.hasToken,
        },
        {
          id: "link-3",
          title: "Users",
          path: "/users",
          protected: !this.hasToken,
        },
        {
          id: "link-4",
          title: "Posts",
          path: "/posts",
          protected: this.hasToken,
        },
        {
          id: "link-5",
          title: "Photos",
          path: "/photos",
          protected: !this.hasToken,
        },
        {
          id: "link-6",
          title: "Test",
          path: "/test",
          protected: this.hasToken,
        },
      ],
    };
  },
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>