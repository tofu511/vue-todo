const store = {
  state: {
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
  },
  createTodo(todo) {
    // eslint-disable-next-line no-underscore-dangle, no-param-reassign
    todo._id = Math.random().toString(36).substr(2, 7);
    this.state.todos.push(todo);
  },
};

export default store;
