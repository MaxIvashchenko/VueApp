<template>
  <section>
    <h1>{{ user.name }}</h1>
    <hr />
    <h3>{{ user.email }}</h3>
  </section>
</template>

<script>
import API from "../../constants";

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(API + "/users/" + params.id);
    return { user };
  },
};
</script>
