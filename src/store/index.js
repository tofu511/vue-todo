import Vue from 'vue';

const store = {
  state: {
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
  },
  actions: {
    createTodo(state, todo) {
      // eslint-disable-next-line no-param-reassign
      todo.id = Math.random().toString(36).substr(2, 7);
      state.todos.push(todo);
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(t => t.id === todo.id);
      Vue.set(state.todos, index, todo);
    },
  },
};

store.dispatch = (action, payload) => {
  if (!store.actions[action]) {
    throw new Error(`Action ${action} is not defined in the store`);
  }
  return store.actions[action](store.state, payload);
};

export default store;
