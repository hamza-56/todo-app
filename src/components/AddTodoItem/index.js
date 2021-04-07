import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actionCreators';

const AddTodoItem = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const detail = event.target.detail.value;

    if (!title) {
      alert('Title cannot be empty');
      return;
    }

    dispatch(addTodo(title, detail));
    event.target.title.value = '';
    event.target.detail.value = '';
  };

  return (
    <>
      <h2>Add #TODO Item</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Todo Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label>Todo Detail</label>
          <input
            type="text"
            name="detail"
            className="form-control"
            placeholder="Enter detail"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodoItem;
