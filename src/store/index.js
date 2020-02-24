import Vue from 'vue';

const INITIAL_DATA = {
  todos: [
    {
      id: '1',
      title: 'Walk the dog',
      description: 'Go to forrest near the Zoo',
    },
    {
      id: '2',
      title: 'Buy a Bread',
      description: 'whole grain bread would be good',
    },
    {
      id: '3',
      title: 'Learn Programming',
      description: 'preferable tomorrow',
    },
  ],
};

const store = {
  state: {
    todos: [],
  },
  actions: {
    initStore(state) {
      const todos = localStorage.getItem('my_todos');
      if (!todos) {
        Vue.set(state, 'todos', INITIAL_DATA.todos);
      } else {
        Vue.set(state, 'todos', JSON.parse(todos));
      }
      return state.todos;
    },
    createTodo(state, todo) {
      // eslint-disable-next-line no-param-reassign
      todo.id = Math.random().toString(36).substr(2, 7);
      state.todos.push(todo);
      return state.todos;
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(t => t.id === todo.id);
      Vue.set(state.todos, index, todo);
      return state.todos;
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(t => t.id === id);
      state.todos.splice(index, 1);
      return state.todos;
    },
  },
};

const persistData = (value) => {
  localStorage.setItem('my_todos', JSON.stringify(value));
};

store.dispatch = (action, payload) => {
  if (!store.actions[action]) {
    throw new Error(`Action ${action} is not defined in the store`);
  }
  const result = store.actions[action](store.state, payload);
  if (result) {
    persistData(result);
  }
  return result;
};

export default store;
