import * as actions from './actions';

export const addTodo = (title, detail) => {
  return {
    type: actions.ADD_TODO,
    payload: {
      title,
      detail,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: actions.REMOVE_TODO,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: actions.TOD0_TOGGLED,
    id,
  };
};
