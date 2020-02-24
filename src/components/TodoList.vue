<template>
  <div class="todo-list">
    <div v-if="todos && todos.length > 0">
      <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :description="todo.description" />
    </div>
    <div v-else class="no-todos">
      No todos 😥 Let's create one!
    </div>
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
  &-list {
    flex: 1;
  }
}

.no-todos {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
}

</style>
