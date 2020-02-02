<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list />
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
</style>
