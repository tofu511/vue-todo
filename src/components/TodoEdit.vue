<template>
  <form class="app-form">
    <div class="form-control">
      <label class="label">Title</label>
      <input
      class="form-input"
      type="text">
    </div>
    <div class="form-control">
      <label class="label">Description</label>
      <textarea
      class="form-input"
      cols="30"
      rows="10"></textarea>
    </div>
    <button
    @click="editTodo"
    type="button"
    class="app-button is-warning">Update</button>
    <button
    @click="deleteTodo"
    type="button"
    class="app-button is-danger">Delete</button>
  </form>
</template>

<script>
export default {
  methods: {
    editTodo() {
      this.$emit('updated');
    },
    deleteTodo() {
    },
  },
};
</script>

<style lang="scss" scoped>
.app-form {
  .label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  .form-input {
    padding: 10px;
    font-size: 17px;
  }

  .form-control {
    margin-bottom: 10px;
  }
}
</style>
