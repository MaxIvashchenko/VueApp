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
      <div class="col-6">
        <h3>Posts: {{ postsNum }}</h3>
        <h5>Click to change number of posts:</h5>
        <div class="d-flex justify-content-between">
          <button
            class="btn btn-primary"
            v-for="i in numbers"
            :key="i"
            @click.prevent="setPostsNum(i)"
          >
            {{ i }} posts
          </button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
// import { mapGetters } from "vuex";

export default {
  async fetch({ store }) {
    if (store.getters["posts/posts"].length === 0) {
      await store.dispatch("posts/fetchPosts");
    }
  },
  data() {
    return {
      numbers: [3, 5, 7, 9],
    };
  },
  //   computed: mapGetters(["posts/posts"]),
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
    postsNum() {
      return this.$store.getters["posts/postsNum"];
    },
  },
  methods: {
    setPostsNum(num) {
      console.log(num);
      this.$store.commit("posts/setPostsNum", num);
      this.$store.dispatch("posts/fetchPosts");
    },
  },
  middleware: ["auth"],
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