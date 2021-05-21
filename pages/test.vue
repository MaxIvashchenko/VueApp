<template>
  <section>
    <h1>Test page</h1>
    <div>
      <form class="row">
        <div class="col-6 mb-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input
            name="title"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="col-6 mb-3">
          <label for="exampleInputPassword1" class="form-label">Text</label>
          <input
            name="text"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    addHandler() {
      const db = this.$fire.database;
      const usersCollection = db.collection("users");
      console.log(usersCollection);
    },
  },
};
</script>