<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
        <div class="todo-create-btn-container">
          <modal />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import playground from './playground';
import TodoList from '@/components/TodoList.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'app',
  components: {
    TodoList,
    Modal,
  },
  data() {
    return {
      isModalOpen: false,
      todos: [
        {
          _id: '1',
          title: 'Walk the dog',
          description: 'Go to forrest near the Zoo',
        },
        {
          _id: '2',
          title: 'Buy a Bread',
          description: 'whole grain bread would be good',
        },
        {
          _id: '3',
          title: 'Learn Programming',
          description: 'preferable tomorrow',
        },
      ],
    };
  },
  created() {
    playground();
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    width: 100%;
    /* height: 2000px; */
  }

  &-create-btn-container {
    margin: 10px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    width: 400px;
    min-height: 400px;
    background-color: #ededed;
    border-radius: 5px;
  }
}

</style>
