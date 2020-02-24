<template>
  <form class="app-form">
    <div class="form-control">
      <label class="label">Title</label>
      <input
      :value="this.title"
      class="form-input"
      type="text">
    </div>
    <div class="form-control">
      <label class="label">Description</label>
      <textarea
      :value="this.description"
      class="form-input"
      cols="30"
      rows="10"></textarea>
    </div>
    <button
    @click="updateTodo"
    type="button"
    class="app-button is-warning">Update</button>
    <button
    @click="cancel"
    type="button"
    class="app-button is-danger">Cancel</button>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateTodo() {
      this.$emit('updated');
    },
    cancel() {
      this.$emit('close');
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
