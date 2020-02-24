<template>
  <div v-if="!editMode" class="todo-item">
    <div class="todo-item-content">
      <div class="todo-item-content-title">
        {{ title }}
      </div>
      <div class="todo-item-content-description">
        {{ description }}
      </div>
    </div>
    <button
    @click="editTodo"
    class="app-button is-warning">Edit</button>
    <button
    @click="deleteTodo"
    type="button"
    class="app-button is-danger">Delete</button>
  </div>
  <div v-else class="todo-item">
    <todo-edit @updated="closeEdit" @close="closeEdit" :title="title" :description="description" />
  </div>
</template>

<script>
import TodoEdit from '@/components/TodoEdit.vue';

export default {
  components: {
    TodoEdit,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: 'Default Description',
    },
  },
  data() {
    return {
      editMode: false,
    };
  },
  methods: {
    editTodo() {
      this.editMode = true;
    },
    closeEdit() {
      this.editMode = false;
    },
    deleteTodo() {

    },
  },
};
</script>

<style lang="scss">
.todo-item {
  background-color: gray;
  min-height: 70px;
  margin: 10px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-size: 23px;

  &-content {
    margin-bottom: 10px;

    &-title {
      font-weight: bold;
    }
    &-description {
      font-size: 19px;
    }
  }
}
.is-primary {
  background-color: #47ca47 !important;
}

.is-warning {
  background-color: #ffa753 !important;
}

.is-danger {
  background-color: #ff5a5a !important;
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  &.is-warning {
    font-size: 15px;
    margin-right: 5px;
  }
  &.is-danger {
    font-size: 15px;
  }
}
</style>
