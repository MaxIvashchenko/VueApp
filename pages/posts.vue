<template>
  <section>
    <h1>Posts page</h1>
    <div class="row">
      <div class="col-6">
        <div class="post" v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>
      </div>
      <div class="col-6"></div>
    </div>
  </section>
</template>


<script>
export default {
  async fetch({ store }) {
    if (store.getters["posts/posts"].length === 0) {
      await store.dispatch("posts/fetch");
    }
  },
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
  },
  methods: {
    // openUser(user) {
    //   this.$router.push("/users/" + user.id);
    // },
  },
};
</script>

<style scoped>
.post {
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 10px;
}
</style>