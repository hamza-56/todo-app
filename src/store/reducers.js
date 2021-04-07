import * as actions from './actions';

const initialState = {
  todos: [
    { id: 0, title: 'Learn React', detail: 'Detail 1', completed: true },
    { id: 1, title: 'Learn React', detail: 'Detail 2', completed: false },
    { id: 2, title: 'Learn React', detail: 'Detail 2', completed: true },
  ],
};

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            title: action.payload.title,
            detail: action.payload.detail,
            completed: false,
          },
        ],
      };
    }
    case actions.TOD0_TOGGLED: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
