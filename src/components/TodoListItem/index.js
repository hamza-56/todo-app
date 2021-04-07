import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../store/actionCreators';

const TodoListItem = (props) => {
  const { id, title, details, isCompleted } = props;
  const dispatch = useDispatch();

  const handleCheckboxChange = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <StyledCard>
      <div className="card-body">
        <StyledHeading completed={isCompleted} className="card-title">
          {title}
        </StyledHeading>
        <p className="card-text">{details}</p>
      </div>
      <div className="d-flex flex-row align-items-center">
        <StyledInput
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckboxChange(id)}
        ></StyledInput>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background: #fff;
  display: flex;
  border-radius: 5px;
  border: 1px solid lightgray;
  text-align: left;
  padding: 5px 8px;
  margin: 7px;
  background-color: rose;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
`;

const StyledHeading = styled.h5`
  text-decoration: ${(props) => (props.completed ? 'line-through' : '')};
`;

TodoListItem.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string,
  isCompleted: PropTypes.bool.isRequired,
};

export default TodoListItem;
