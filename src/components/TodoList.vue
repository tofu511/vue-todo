<template>
  <div class="todo-list">
    <todo-item
      v-for="todo in todos"
      :key="todo._id"
      :title="todo.title"
      :description="todo.description" />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  props: {
    todos: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  &-item {
    background-color: gray;
    min-height: 70px;
    margin: 10px;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;

    &-content {
      &-title {
        font-weight: bold;
      }
      &-description {
        font-size: 19px;
      }
    }
  }
}
</style>
