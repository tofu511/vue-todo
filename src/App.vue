<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
        <div class="todo-create-btn-container">
          <div class="app-button">
            Create
          </div>
        </div>
      </div>
    </div>
    <div class="modal">
      <div class="modal-content">
        Modal Window
      </div>
    </div>
  </div>
</template>

<script>
import playground from './playground';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'app',
  components: {
    TodoList,
  },
  data() {
    return {
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

}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    width: 100%;
    /* height: 2000px; */
  }

  &-container {
    width: 400px;
    min-height: 400px;
    background-color: #ededed;
    border-radius: 5px;
  }
}

.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  &-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
}

</style>
