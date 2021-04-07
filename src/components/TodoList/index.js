import React from 'react';

import TodoListItem from '../TodoListItem';

import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <h2>#TODO:</h2>
      <div className="row">
        <div className="col-lg-12">
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              details={todo.detail}
              isCompleted={todo.completed}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
