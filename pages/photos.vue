<template>
  <section>
    <h1>Photos page</h1>
    <div class="row">
      <div class="col-4 col-md-3 my-2 align-self-end" v-for="pic in photos" :key="pic.id">
          <h6 class="text-center">{{pic.title}}</h6>
          <img :src="pic.thumbnailUrl" width="100%"/>
      </div>
    </div>
  </section>
</template>


<script>
// import { mapGetters } from "vuex";

export default {
  async fetch({ store }) {
    if (store.getters["photos/photos"].length === 0) {
      await store.dispatch("photos/updatePhotos");
    }
  },
  //   computed: mapGetters(["posts/posts"]),
  computed: {
    photos() {
      return this.$store.getters["photos/photos"];
    },
  },
    middleware: ['auth']

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