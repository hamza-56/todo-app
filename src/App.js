import React from 'react';
import './App.css';

import TodoList from './components/TodoList';
import Footer from './components/Footer';
import AddTodoItem from './components/AddTodoItem';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoList />
        <br />
        <br />
        <AddTodoItem />
      </div>
      <Footer />
    </div>
  );
}

export default App;
