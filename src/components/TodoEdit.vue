<template>
  <form class="app-form">
    <div class="form-control">
      <label class="label">Title</label>
      <input
      v-model="todo.title"
      class="form-input"
      type="text">
    </div>
    <div class="form-control">
      <label class="label">Description</label>
      <textarea
      v-model="todo.description"
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
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      todo: {
        id: this.id,
        title: this.title,
        description: this.description,
      },
    };
  },
  methods: {
    updateTodo() {
      this.$emit('updated', { ...this.todo });
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
